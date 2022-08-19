const express = require("express");
const { PORT } = require("./config.js");
const { searchResults } = require("./handlers.js");

const app = express();

app.get("/search/results", searchResults);

app.listen(PORT, () => {
  console.log(`Server started at ${PORT} port`);
});
