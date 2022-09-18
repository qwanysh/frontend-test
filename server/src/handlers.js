const results = require("./results.json");

const sleep = (delay) => {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
};

const searchResults = async (req, res) => {
  const { delay } = req.query;

  if (delay) {
    await sleep(Number(delay));
  }

  res.json(results);
};

module.exports = {
  searchResults,
};
