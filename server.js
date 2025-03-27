import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./db.js";
import contactRoutes from "./contactRoutes.js";

dotenv.config();
const app = express();
const PORT = 5000;


app.use(cors());
app.use(express.json());


connectDB();


app.use("/contact", contactRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
