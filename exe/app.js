const express = require("express");
const tasksRouter = require("./routes/tasks");
const usersRouter = require("./routes/users");

const PORT = process.env.PORT;
const app = express();

app.use(express.json());

app.use("/", (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

app.use("/tasks", tasksRouter);
app.use("/users", usersRouter);

app.listen(PORT, () => {
  console.log(`Server running on after a change http://localhost:${PORT}`);
});
