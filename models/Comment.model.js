const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const commentSchema = new Schema({
  username: String,
  comment: String,
  restaurant: { type: Schema.Types.ObjectId, ref: "Restaurant" },
});

module.exports = model("Comment", commentSchema);
