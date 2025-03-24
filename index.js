import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

dotenv.config();
const app = express();
const PORT = 5000;


app.use(cors());
app.use(express.json());


mongoose.connect(process.env.MONGO_URI)

    .then(() => console.log("MongoDB Connected Successfully"))
    .catch(err => console.error("MongoDB Connection Error:", err));

const userSchema = new mongoose.Schema({
    name: String,
    email: { type: String, unique: true },
    phone: String,
    gender: String,
    dob: String,
    password: String,
});

const User = mongoose.model("User", userSchema);

app.post("/register", async (req, res) => {
  try {
      const { name, email, phone, gender, dob, password } = req.body;
      
      if (!name || !email || !phone || !password) {
          return res.status(400).json({ error: "All fields are required!" });
      }
      

      console.log("Received Data:", req.body); 

      
      const existingUser = await User.findOne({ email });
      if (existingUser) {
          return res.status(400).json({ error: "User already exists!" });
      }

      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = new User({ name, email, phone, gender, dob, password: hashedPassword });
      
      await newUser.save();
      console.log("User saved successfully!"); 

      res.json({ message: "Registration successful!" });
  } catch (error) {
      console.error("Registration Error:", error);
      res.status(500).json({ error: "Error registering user." });
  }
});


app.post("/login", async (req, res) => {
    try {
        const { emailOrPhone, password } = req.body;
        const user = await User.findOne({ $or: [{ email: emailOrPhone }, { phone: emailOrPhone }] });

        if (!user) return res.status(400).json({ error: "User not found!" });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ error: "Invalid password!" });

        const token = jwt.sign({ userId: user._id }, "secretkey", { expiresIn: "1h" });
        res.json({ message: "Login successful!", token });
    } catch (error) {
        res.status(500).json({ error: "Error logging in." });
    }
});

app.post("/forgot-password", async (req, res) => {
    try {
        const { emailOrPhone } = req.body;
        const user = await User.findOne({ $or: [{ email: emailOrPhone }, { phone: emailOrPhone }] });

        if (!user) return res.status(400).json({ error: "User not found!" });

        res.json({ message: "OTP sent to registered email/phone!" });
    } catch (error) {
        res.status(500).json({ error: "Error processing request." });
    }
});


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
