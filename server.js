const mongoose = require("mongoose");
const app = require("./app");
// const DB_HOST =
//   "mongodb+srv://annka:PJVJcXm7zxhpChQI@cluster0.yxgnpsb.mongodb.net/db-contacts?retryWrites=true&w=majority";

const { DB_HOST, PORT = 3000 } = process.env;

mongoose
  .connect(DB_HOST)
  .then(() => console.log("Database connection successful"))
  .then(() => {
    app.listen(PORT, () => {
      console.log("Server running. Use our API on port: 3000");
    });
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
