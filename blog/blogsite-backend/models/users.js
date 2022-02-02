const mongoose = require("mongoose");
const conn = require("../config/db");

var userSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  userId: String,
  userName: String,
  userEmail:String,
  userPassword:String,
  userPhone: String,
  userCountry: String,
  userBookmark:Array,
});

let users = conn.model("users", userSchema);
module.exports = users;
