const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config({ path: "./config.env" });

// add password to mongo db path
const DB = process.env.DATABASE.replace(
  "<password>",
  process.env.DATABASE_PASSWORD
);

// connect to mongoose database
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    autoIndex: true,
  })
  .then(() => console.log("DB connection successful!"));

const app = require("./app");

// START SERVER
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`App running on port ${port}`));
