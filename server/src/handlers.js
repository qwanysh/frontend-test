const results = require("./results.json");

const searchResults = (req, res) => {
  res.json(results);
};

module.exports = {
  searchResults,
};
