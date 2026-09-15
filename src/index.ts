import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello from API!");
});

app.get("/products", (req, res) => {
  const products = [
    { id: 1, name: "Product 1", price: 10.99 },
    { id: 2, name: "Product 2", price: 19.99 },
    { id: 3, name: "Product 3", price: 5.99 },
  ];
  res.json(products);
});

app.get("/products/:id", (req, res) => {
  const productId = req.params.id;
  res.send(`Product details for product with ID: ${productId}`);
});

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
