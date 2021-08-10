const path = require("path");

require("dotenv").config({ path: path.join(__dirname, "..", ".env") });

module.exports = {
  PORT: process.env.PORT || 5000,
  NODE_ENV: process.env.NODE_ENV || "development",
  API_TOKEN: process.env.API_TOKEN || "test_123",
};
