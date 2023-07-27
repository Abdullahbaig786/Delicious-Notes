const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const RestaurantSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  restaurantname: {
    type: String,
    required: true,
  },
  speciality: {
    type: String,
    required: true,
  },
  webpage: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },

  comment: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
});

module.exports = model("Restaurant", RestaurantSchema);
