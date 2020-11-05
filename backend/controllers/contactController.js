import asyncHandler from "express-async-handler";
import Contact from "../models/contactModel.js";

// @desc    create new Order
// @route   POST /api/orders
// @access  Private
//author    Mubarak Aminu

const addContactDetail = asyncHandler(async (req, res) => {
  const {
    fullname,
    email,
    phone_nuumber,
    Anniversary,
    Birthday,
    Reminder,
  } = req.body;

  const contact = new Contact({
    fullname,
    email,
    phone_nuumber,
    Anniversary,
    Birthday,
    Reminder,
  });
  const createContact = await contact.save();
  res.status(201).json(createContact);
});

export { addContactDetail };
