const mongoose = require("mongoose");

const User = new mongoose.Schema({
  email: String,
  pass: String,

  token: {
    type: String,
  },

  name: String,
  age: Number,
  sex: String,
  phone: String,
  health_cred: [
    {
      doctor: String,
      symp: String,
      pres: String,
      visit: String,
      hosp: String,
    },
  ],
});

const Users = mongoose.model("users", User);

module.exports = Users;
