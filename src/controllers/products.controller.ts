import { Request, Response } from "express";
import { productsData } from "../data/products.js";

export const getAllProductsController = (req: Request, res: Response) => {
  res.status(200).json({
    message: "All products retrieved successfully",
    data: productsData,
  });
};

export const getProductByIdController = (req: Request, res: Response) => {
  const { id } = req.params;

  const product = productsData.find((p) => p.id === parseInt(id as string));

  if (!product) {
    res.status(404).json({
      message: `Product with ID ${id} not found`,
    });
    return;
  }

  res.status(200).json({
    message: "Product retrieved successfully",
    data: product,
  });
};
