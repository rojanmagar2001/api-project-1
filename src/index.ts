import express from "express";
import productsRouter from "./routes/products.route.js";

const app = express();

app.use("/products", productsRouter);

app.get("/", (req, res) => {
  res.send("Welcome to the Products API");
});

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
