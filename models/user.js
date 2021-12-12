const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  //infomation
});

module.exports = mongoose.model("User", userSchema);
