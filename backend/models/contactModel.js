import mongoose from "mongoose";

const contactSchema = mongoose.Schema({
  fullname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone_number: {
    type: Number,
    required: true,
  },
  Anniversary: {
    type: String,
  },
  Birthday: {
    type: Date,
    required: true,
  },
  Reminder: [
    {
      DateTime: {
        type: String,
        required: true,
      },
      Note: {
        type: String,
      },
    },
  ],
});

const Contact = mongoose.model("Contact", contactSchema);

export default Contact;
