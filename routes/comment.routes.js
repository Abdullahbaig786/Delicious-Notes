const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Comment = require("../models/Comment.model");
const Restaurant = require("../models/Restaurant.model");

//  POST /api/tasks  -  Creates a new task
router.post("/comment", (req, res, next) => {
  const { username, comment, restaurantsId } = req.body;

  Comment.create({ username, comment, restaurant: restaurantsId })
    .then((newRestaurant) => {
      return Restaurant.findByIdAndUpdate(restaurantsId, {
        $push: { comment: newRestaurant._id },
      });
    })
    .then((response) => res.json(response))
    .catch((err) => res.json(err));
});

//  GET /api/tasks/:commentId  - Retrieves a specific task by id
router.get("/comment/:commentId", (req, res, next) => {
  const { commentId } = req.params;

  Comment.findById(commentId)
    .then((comment) => res.json(comment))
    .catch((error) => res.json(error));
});

// PUT  /api/tasks/:taskId  - Updates a specific task by id
router.put("/comment/:commentId", (req, res, next) => {
  const { commentId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(commentId)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }

  Comment.findByIdAndUpdate(commentId, req.body, { new: true })
    .then((updatedComment) => res.json(updatedComment))
    .catch((err) => res.json(err));
});

//  DELETE /api/Comments/:commentId  - Deletes a specific Comment by id
router.delete("/comment/:commentId", (req, res, next) => {
  const { commentId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(commentId)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }

  Comment.findByIdAndRemove(commentId)
    .then(() =>
      res.json({
        message: `Comment with ${commentId} is removed successfully.`,
      })
    )
    .catch((error) => res.json(error));
});

module.exports = router;
