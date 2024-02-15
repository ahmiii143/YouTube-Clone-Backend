import mongoose, { connect } from "mongoose";
import { DB_NAME } from "../constant.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URL}/${DB_NAME}`
    );
    console.log(`\n Database is connected`);
  } catch (error) {
    console.log("DB ERROR", error);
    throw error;
  }
};

export default connectDB;
