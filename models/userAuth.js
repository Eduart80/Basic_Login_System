const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");
 
const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, "Must match an email address!"],
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
  },
});

userSchema.pre("save", function (next) {
  const user = this;
  if (user.isNew || user.isModified("password")) {
    const saltRounds = 10;
    bcrypt.hash(user.password, saltRounds, function(err, hash) {
      if (err) return next(err);
      user.password = hash;
      next();
    });
  } else {
    next();
  }
});

userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};
 
const User = model("User", userSchema);
 
module.exports = User;