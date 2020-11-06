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

const updateContact = asyncHandler(async (req, res) => {
  const {
    fullname,
    email,
    phone_nuumber,
    Anniversary,
    Birthday,
    Reminder,
  } = req.body;
  const contact = await Contact.findById(req.body._id);
  if (contact) {
    (contact.fullname = fullname),
      (contact.email = email),
      (contact.phone_nuumber = phone_nuumber),
      (contact.Anniversary = Anniversary),
      (contact.Birthday = Birthday),
      (contact.Reminder = Birthday);
    const updatecontact = await contact.save();
    res.status(200).json("Contact Details Updated Successfully");
  } else {
    res.status(400).json("Unabled to update contact");
  }
});

const deleteContact = asyncHandler(async (req, res) => {
  const deleteContact = await Contact.findById(req.params.id);
  deleteContact.delete();
  res.status(200).json("Contact Deleted Successfully");
});

export { addContactDetail, updateContact, deleteContact };
