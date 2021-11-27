const mongoose = require("mongoose");
const config = require("config");
let db;

if (process.env.NODE_ENV === "production") {
  db = process.env.mongoURI;
} else {
  db = config.get("mongoURI");
}

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    });

    console.log("MongoDB Connected");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
