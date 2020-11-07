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
      name: user.name,
      token: generateToken(user._id),
    });
  } else {
    res.status(400).json("invalid user");
    //throw new Error("invalid user");
  }
});

const authuser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
});

export { registerUser, authuser };
