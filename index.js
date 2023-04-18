const express = require("express");
const app = express();
const cors=require('cors')
const port = process.env.PORT || 5000;
const cetegorys=require('./data/cetegory.json')
app.use(cors());


app.get('/', (req, res) => {
  res.send('Dragon news is runni on server!')
})
app.get('/cetegorys', (req, res) => {
  res.send(cetegorys)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
