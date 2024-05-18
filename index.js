const express = require("express");
const app = express();
const Product = require("./models/product.model.js");
const productRoute = require("./routes/product.route.js");

app.use(express.json());
app.use(express.urlencoded({extended:false}))

const mongoose = require("mongoose");

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

//routes
app.use("/api/products", productRoute);

app.get("/", (req, res) => {
  res.send("Hello from node apis");
});

//Database Connection
