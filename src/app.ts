import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import { ProductController } from "./controllers/product/product.controller";

const app = express();

// Middleware
app.use(bodyParser.json());

// Kết nối MongoDB
mongoose
  .connect("mongodb://localhost:27017/repository_example")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

// Controller
const productController = new ProductController();

// Định tuyến
app.get("/products", (req, res) => productController.getAll(req, res));
app.get("/products/:id", (req, res) => productController.getById(req, res));
app.post("/products", (req, res) => productController.create(req, res));
app.put("/products/:id", (req, res) => productController.update(req, res));
app.delete("/products/:id", (req, res) => productController.delete(req, res));

// Khởi chạy server
const PORT = 3000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
