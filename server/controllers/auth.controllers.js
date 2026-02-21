import User from "../models/user.model.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";


export const googleAuth = async (req, res) => {
    try {
        // frontend se data re.body me aata hai
        const { name, email, avatar } = req.body;
        if (!email) {
            return res.status(400).json({
                message: "Email is required"
            });
        }
        // find user in database
        let user = await User.findOne({
            // with key value pair
            email: email
        })
        if (!user) {
            // user doesn't exist, so create new user
            user = await User.create({
                name: name,
                email: email,
                avatar: avatar
            });
        }

        // generating token for user
        const token = await jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY, { expiresIn: "7d" });

        // sending token in cookies
        res.cookie("token", token, {
            httpOnly: true,
            secure: false, // set to true in production
            sameSite: "strict",  // jb bhi secure false ho sameSite strict hoga
            maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
        });

        res.status(200).json(user)

    } catch (error) {
        console.log(error);
        
        res.status(500).json({ message: `google auth error ${error}` });
    }
}

// logout user controller
export const logout = async (req, res) => {
    try {
        return res.clearCookie("token", {
            httpOnly: true,
            secure: false, // set to true in production
            sameSite: "strict",
        }).status(200).json({ message: "Logged Out Successfully" });
    } catch (error) {
        return res.status(500).json({ message: "Logout Error: " + error.message });
    }

}