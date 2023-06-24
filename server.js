const express = require("express");
const port = 5000;
const dataService = require("./dataService");
const dummyData = require("./src/helpers/dummyDataInit");
const cors = require("cors");

const app = express();
app.use(cors());
dummyData.init();

app.get("/books", (req, res) => {
  let books = dataService.getAll("books");

  res.status(200).json(books);
});

app.get("/authors", (req, res) => {
  let authors = dataService.getAll("authors");

  res.status(200).json(authors);
});

app.post("/books", (req, res) => {
  res.send("Got a post request");
  // const category = dataService.create("categories", req.body);

  res.status(200).json(category);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
