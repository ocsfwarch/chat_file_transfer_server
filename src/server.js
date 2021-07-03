require("dotenv").config();

const { PORT = 5007 } = process.env;

const app = require("./app");

function listener() {
  console.log(`Listening on Port ${PORT}!`);
}

app.listen(PORT, listener);
