const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const todoRoutes = require("./routes/todoRoutes");
dotenv.config({ path: "./config.env" });

const app = express();
app.use(express.json());
app.use(cors());

// set up database connection
const DB = process.env.DATABASE;
mongoose
  .connect(DB)
  .then((con) => {
    console.log("connection to MongoDB successful!");
  })
  .catch((err) => console.log(err));

// set up routes
app.use("/todos", todoRoutes);

// start listening
const PORT = 3030;
app.listen(PORT, () => {
  console.log("The server is listening on" + PORT);
});
