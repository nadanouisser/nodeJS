const User = require("../models/user.model"); // import our user model
const bcrypt = require("bcryptjs"); // used to hash and unhash password to register and login
const { registerValidation } = require("../utils/validation"); // import our constraints on user

const register = async (req, res) => {
  try {
    //validate data req.body
    const { error } = registerValidation(req.body);
    if (error) {
      return res.status(400).send({ error });
    }

    //check if user exist in the databse
    const emailExist = await User.findOne({ email: req.body.email });
    if (emailExist) {
      return res
        .status(409)
        .send({ success: false, error: "user already exist" });
    }

    // hashing Password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt);

    // create new user
    const user = new User({
      email: req.body.email,
      password: hashPassword,
      username: req.body.username,
    });

    const savedUser = await user.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json({ success: false, error: "Please Try Again" });
  }
};
const test = async (req, res) => {
  res.status(400).json("test");
};
// export our functions to b use in app.js
module.exports = {
  register,
  test,
};
