// creating user model for authentication
// creating user schema -- to store user data in database

import mongoose from "mongoose";

// defining user schema
const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        unique: true,
        required: true,
    },
    avatar:{
        type: String,
    },
    credits:{
        type: Number,
        default: 100,
        min: 0,
    },
    plans:{
        type: String,
        enum: ["free", "pro", "enterprise"],
        default: "free",
    }



}, { timestamps: true });


// creating user model
const User = mongoose.model("User", userSchema);
export default User;