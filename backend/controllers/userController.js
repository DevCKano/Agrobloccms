import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import generateToken from "../utils/generateToken.js";

// @desc    Register a new user
// @route   POST /api/users
// @access  Public
//@author   Mubarak Aminu
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const exisitinngUser = await User.findOne({ email });

  if (exisitinngUser) {
    res.status(400).json("User with the Detail Already Existed");
  }

  const user = await User.create({
    name,
    email,
    password,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      email: user.email,
      name: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(400).json("invalid user");
    //throw new Error("invalid user");
  }
});

export { registerUser };
