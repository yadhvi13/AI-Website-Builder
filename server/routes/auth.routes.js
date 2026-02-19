// routes of all authentication related operations

import express from "express";
import { googleAuth, logout } from "../controllers/auth.controllers.js";

const authRouter = express.Router();

// creating google Route
authRouter.post("/google", googleAuth )
authRouter.get("/logout", logout)

// creating middleware to protect routes

export default authRouter;

//http:localhost:5000/api/auth/google