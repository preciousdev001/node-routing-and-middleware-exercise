const express = require("express");
const app = express();
const ExpressError = require("./expressError");

app.use(express.json());

// 404 not found err here
app.use(function (req, res, next) {
  return new ExpressError("Content Not Found", 404);
});

// gen err handler
app.use((err, req, res, next) => {
  res.status(err.status || 500);

  return res.json({
    error: err.message,
  });
});

module.exports = app;
