const express = require("express");
const app = express();
const productRoute = require("./routes/product.route.js");
const connectDB = require('./db/db.connection.js')

app.use(express.json());
app.use(express.urlencoded({extended:false}))

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

//Mongo Database Connection
connectDB();

//routes
app.use("/api/products", productRoute);

app.get("/", (req, res) => {
  res.send("Hello from node apis");
});

