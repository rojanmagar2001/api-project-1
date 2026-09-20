import { Router } from "express";
import {
  getAllProductsController,
  getProductByIdController,
} from "../controllers/products.controller.js";

const productsRouter = Router();

productsRouter.get("/", getAllProductsController);

productsRouter.post("/", (req, res) => {
  res.send("Create a new product");
});

productsRouter.get("/:id", getProductByIdController);

productsRouter.put("/:id", (req, res) => {
  const { id } = req.params;
  res.send(`Update product with ID: ${id}`);
});

productsRouter.delete("/:id", (req, res) => {
  const { id } = req.params;
  res.send(`Delete product with ID: ${id}`);
});

export default productsRouter;
