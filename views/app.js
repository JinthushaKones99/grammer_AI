import "dotenv/config";
import express from "express";
import fetch from "node-fetch";

const app = express();
const port = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index");
});

//start the server
app.listen(port, () => {
  console.log(`Server started on port ${PORT}`);
});
