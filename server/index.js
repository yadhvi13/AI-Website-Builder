// creating server

import express from "express";
import dotenv from "dotenv";

dotenv.config();
import cors from "cors";

import connectDb from "./config/db.js";
import authRouter from "./routes/auth.routes.js";
import cookieParser from "cookie-parser";


const app = express();
const port = process.env.PORT || 5000;

// making middleware to parse json data
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}))
app.use("/api/auth", authRouter);

app.listen(port,()=>{
    console.log("server is running on PORT " + port);
    connectDb();
    
})