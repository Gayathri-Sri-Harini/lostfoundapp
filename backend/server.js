import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

// Load environment variables first
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.log("❌ MongoDB Error:", err));

// Import routes
import itemRoutes from "./routes/itemRoutes.js";
import authRoutes from "./routes/authRoutes.js";

app.use("/api/items", itemRoutes);
app.use("/api/auth", authRoutes);

// Note: Frontend is served separately on Render, so no static file serving needed here

// Server listen
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
