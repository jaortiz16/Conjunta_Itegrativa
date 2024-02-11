import express from "express";
import productsRoutes from "./routes/products.routes.js";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/products", productsRoutes);
app.listen(4000);
console.log("Server on port", 4000);
 