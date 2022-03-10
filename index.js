import express from "express";
import bodyParser from "body-parser";
import users from "./routes/users.js";

const app = express();
const PORT = 8000;

app.use(bodyParser.json());
app.use("/users", users);

app.get("/", (req, res) => {
  res.send("Your Express App");
});

app.listen(PORT, () => {
  console.log(`Server listening on port: http://localhost:${PORT}`);
});
