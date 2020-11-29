const express = require("express");
const bodyParser = require("body-parser");
const { DatabaseHandler } = require("../services/databaseManager");
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//this block will be deleted in further iterations
const dbManager = DatabaseHandler();

app.get("/hello", (req, res) => {
  res.send({ message: "Hello there, simple test route!" });
});

app.post("/hello", (req, res) => {
  console.log(req.body);
  res.send("Check server console for log!");
});

app.get("/getTableContent", async (req, res) => {
  await dbManager.setUpConnection(req.query.db);
  await dbManager.setCollection(req.query.table);
  let response = await dbManager.queryAll({});
  res.send(response);
});

app.listen(port, () => {
  console.log(`Example app listening at https://localhost:${port}`);
});
