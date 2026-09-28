import { Request, Response } from "express";
import { productsData } from "../data/products.js";
import { CreateProductInput, createProductSchema } from "../schema/products.js";

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

export const createProductController = (req: Request, res: Response) => {
  const postBody = req.body as unknown as CreateProductInput;

  const newProduct = {
    id: productsData.length + 1,
    title: postBody.name,
    price: postBody.price,
  };

  productsData.push(newProduct);

  res.status(201).json({
    message: "Product created successfully",
    data: newProduct,
  });
};
