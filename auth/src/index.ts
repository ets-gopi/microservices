import express from "express";

const app = express();

app.use(express.json());

app.get("/api/v1/users/", (req, res) => {
  res.send("Ok");
});

app.listen(3000, () => {
  console.log("Listening on port 3000 !!!!");
});
