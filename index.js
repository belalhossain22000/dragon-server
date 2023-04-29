const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;
const cetegorys = require("./data/cetegory.json");
const news = require("./data/news.json");
app.use(cors());

app.get("/", (req, res) => {
  res.send("Dragon news is runni on server!");
});
app.get("/cetegorys", (req, res) => {
  res.send(cetegorys);
});
app.get("/news", (req, res) => {
  res.send(news);
});

app.get("/news/:id", (req, res) => {
  const id = req.params.id;
  const selectedNews = news.find((news) => news._id === id);
  res.send(selectedNews);
});
app.get("/cetegorys/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);
  if (id == 0) {
    res.send(news);
  } else {
    const categoryNews = news.filter((news) => news.category_id == id);
    res.send(categoryNews);
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
