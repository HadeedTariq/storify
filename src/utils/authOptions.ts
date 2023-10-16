import { MongoDBAdapter } from "@auth/mongodb-adapter";
import { NextAuthOptions, getServerSession } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import clientPromise from "./clientPromise";
import { nanoid } from "nanoid";
import { User } from "@/models/User";

export const authOptions: NextAuthOptions = {
  adapter: MongoDBAdapter(clientPromise),
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/sign-in",
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async session({ token, session }) {
      if (token) {
        if (session.user) {
          session.user.name = token.name;
          session.user.email = token.email;
          session.user.image = token.picture;
        }
      }
      return session;
    },

    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        return token;
      }

      if (token && token.email) {
        const dbUser = await User.findOne({ email: token.email });

        if (!dbUser) {
          // If the user doesn't exist in the database, create a new user
          const newUser = new User({
            name: token.name,
            email: token.email,
            // You may want to handle password differently, such as generating a random one
          });
          await newUser.save();

          token.id = newUser._id; // Assuming _id is the user ID field in your Mongoose model
          return token;
        } else {
          // If the user exists but doesn't have a username, generate one
          if (!dbUser.username) {
            dbUser.username = nanoid(10);
            await dbUser.save();
          }

          // Return the user's data
          return {
            id: dbUser._id, // Assuming _id is the user ID field in your Mongoose model
            name: dbUser.name,
            email: dbUser.email,
            picture: dbUser.image, // You should map this to your user model's field
            username: dbUser.username,
          };
        }
      }

      return token;
    },

    redirect() {
      return "/";
    },
  },
};

export const getAuthSession = () => getServerSession(authOptions);
