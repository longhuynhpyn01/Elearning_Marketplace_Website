const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const courseSchema = new Schema({
  //infomation
});

module.exports = mongoose.model("User", courseSchema);
