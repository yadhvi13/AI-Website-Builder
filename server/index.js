// creating server

import express from "express";
import dotenv from "dotenv";
import connectDb from "./config/db.js";
import authRouter from "./routes/auth.routes.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// making middleware to parse json data
app.use(express.json());
app.use("/api/auth", authRouter);

app.listen(port,()=>{
    console.log("server is running on PORT " + port);
    connectDb();
    
})