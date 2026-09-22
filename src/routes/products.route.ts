import { Router } from "express";
import {
  createProductController,
  getAllProductsController,
  getProductByIdController,
} from "../controllers/products.controller.js";

const productsRouter = Router();

productsRouter.get("/", getAllProductsController);

productsRouter.post("/", createProductController);

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
