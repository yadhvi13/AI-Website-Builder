// connecting database here

import mongoose from "mongoose";
// import dotenv from "dotenv";

const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("connected to database successfully");
    } catch (error) {
        console.log("error connecting to database", error);
    }
}

export default connectDb;