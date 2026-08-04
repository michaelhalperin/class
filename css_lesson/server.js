const express = require("express");
const app = express();

app.use(express.static(__dirname))
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/forms.html");
});

app.post("/register", (req, res) => {
  res.send(`
    <h1 style="color: green;">Got your data!</h1>
    <p>username: ${req.body.username}</p>
    <p>age: ${req.body.age}</p>
    <a href="/">Back</a>
  `);
});

app.listen(3002, () => {
  console.log("open http://localhost:3002");
});
