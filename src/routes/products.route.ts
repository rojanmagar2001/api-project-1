import { Router } from "express";

const productsRouter = Router();

productsRouter.get("/", (req, res) => {
  res.send("Get all products");
});

productsRouter.post("/", (req, res) => {
  res.send("Create a new product");
});

productsRouter.get("/:id", (req, res) => {
  const { id } = req.params;
  res.send(`Get product with ID: ${id}`);
});

productsRouter.put("/:id", (req, res) => {
  const { id } = req.params;
  res.send(`Update product with ID: ${id}`);
});

productsRouter.delete("/:id", (req, res) => {
  const { id } = req.params;
  res.send(`Delete product with ID: ${id}`);
});

export default productsRouter;
