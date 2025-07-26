import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import productRoutes from "./routes/productRoutes.js";

const app = express();
dotenv.config();

app.use(cors());
app.use(express.json());

// Mount routes
app.use("/api/products", productRoutes);

// Optional root route
app.get("/", (req, res) => {
  res.send("✅ Welcome to ProjectZ backend");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
