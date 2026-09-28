import "dotenv/config";
import express from "express";
import productsRouter from "./routes/products.route.js";
import { checkConnection } from "./lib/db.js";

const app = express();

app.use(express.json());

app.use("/products", productsRouter);

app.get("/", (req, res) => {
  res.send("Welcome to the Products API");
});

checkConnection(); // Check database connection on server start

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
