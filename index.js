const express = require("express");
const app = express();
const PORT = process.env.PORT || 3434;

app.get("/health-check", (req, res) => {
  return res.status(200).send({ status: "OK" });
});

app.get("/error-500", (req, res) => {
  return res.status(500).send();
});

const server = app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

module.exports = server;
