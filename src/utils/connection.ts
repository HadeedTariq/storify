import mongoose from "mongoose";

export const connectToDb = async () => {
  try {
    await mongoose.connect(process.env.MONGOOSE_URI!);
  } catch (err) {
    console.log(err);
  }
};
