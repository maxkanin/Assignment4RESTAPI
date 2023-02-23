const mongoose = require("mongoose");

const HospitalSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Add a name"],
    unique: true,
    trim: true,
    maxlength: [50, "Name can not be more than 50 characters"],
  },
  address: {
    type: String,
    required: [true, "Please Add an address"],
  },
  district: {
    type: String,
    required: [true, "Please Add a district"],
  },
  postalcode: {
    type: String,
    required: [true, "Please Add a postalcode"],
    maxlength: [5, "Postalcode can not be more than 5 digits"],
  },
  tel: {
    type: String,
  },
  region: {
    type: String,
    required: [true, "Please Add a region"],
  },
});
module.exports = mongoose.model("Hospital", HospitalSchema);
