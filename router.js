import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import User from './user.js';
const router = express.Router();


router.post("/register", async (req, res) => {
  const { name, email, phone, gender, dob, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ error: "Email already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ name, email, phone, gender, dob, password: hashedPassword });
    
    await newUser.save();
    res.json({ message: "User registered successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});


router.post("/login", async (req, res) => {
  const { emailOrPhone, password } = req.body;

  try {
    const user = await User.findOne({ $or: [{ email: emailOrPhone }, { phone: emailOrPhone }] });
    if (!user) return res.status(400).json({ error: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ error: "Invalid credentials" });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
    res.json({ message: "Login successful", token });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});


router.post("/forgot-password", async (req, res) => {
  const { emailOrPhone } = req.body;

  try {
    const user = await User.findOne({ $or: [{ email: emailOrPhone }, { phone: emailOrPhone }] });
    if (!user) return res.status(400).json({ error: "User not found" });

    res.json({ message: "OTP sent to registered email or phone" });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

export default router;
