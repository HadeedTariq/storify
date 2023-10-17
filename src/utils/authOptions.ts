import { MongoDBAdapter } from "@auth/mongodb-adapter";
import { NextAuthOptions, getServerSession } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { nanoid } from "nanoid";
import { User } from "../models/User";
import clientPromise from "./clientPromise";
import { connectToDb } from "./connection";

export const authOptions: NextAuthOptions = {
  adapter: MongoDBAdapter(clientPromise),
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET!,
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
    async jwt({ token, user }: any) {
      if (user) {
        token.user = {
          id: user.id,
          name: user.name,
          email: user.email,
          image: user.image,
        };
      }
      return token;
    },
    async session({ session, token }: any) {
      if (token) {
        await connectToDb();
        session.user = token.user;
        const dbUser = await User.findOne({ name: session.user.name });
        if (dbUser) {
          return session;
        } else {
          await User.create({ ...session.user });
        }
      }
      return session;
    },
    redirect() {
      return "/";
    },
  },
  // callbacks: {
  //   async jwt({ token, user }: any) {
  //     if (user) {
  //       token.user = {
  //         : user._id,
  //         email: user.email,
  //         name: user.name,
  //       };
  //     }
  //     return token;
  //   },
  //   session: async ({ session, token }: any) => {
  //     if (token) {
  //       session.user = token.user;
  //     }
  //     return session;
  //   },
  //   redirect() {
  //     return "/";
  //   },
  // },
};

export const getAuthSession = () => getServerSession(authOptions);
