const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Restaurant = require("../models/Restaurant.model");
const Comment = require("../models/Comment.model");

//  POST /api/restaurant  -  Creates a new project
router.post("/restaurants", (req, res, next) => {
  const {
    username,
    restaurantname,
    speciality,
    webpage,
    phone,
    image,
    location,
    description,
  } = req.body;

  Restaurant.create({
    username,
    restaurantname,
    speciality,
    webpage,
    phone,
    image,
    location,
    description,
    comment: [],
  })
    .then((response) => res.json(response))
    .catch((err) => res.json(err));
});

//  GET /api/projects -  Retrieves all of the projects
router.get("/restaurants", (req, res, next) => {
  Restaurant.find()
    .populate("comment")
    .then((allRestaurants) => res.json(allRestaurants))
    .catch((err) => res.json(err));
});

//  GET /api/projects/:projectId -  Retrieves a specific project by id
router.get("/restaurants/:restaurantsId", (req, res, next) => {
  const { restaurantsId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(restaurantsId)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }

  // Each Project document has `tasks` array holding `_id`s of Task documents
  // We use .populate() method to get swap the `_id`s for the actual Task documents
  Restaurant.findById(restaurantsId)
    .populate("comment")
    .then((restaurant) => res.status(200).json(restaurant))
    .catch((error) => res.json(error));
});

// PUT  /api/projects/:projectId  -  Updates a specific project by id
router.put("/restaurants/:restaurantsId", (req, res, next) => {
  const { restaurantsId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(restaurantsId)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }

  Restaurant.findByIdAndUpdate(restaurantsId, req.body, { new: true })
    .then((updatedRestaurant) => res.json(updatedRestaurant))
    .catch((error) => res.json(error));
});

// DELETE  /api/projects/:projectId  -  Deletes a specific project by id
router.delete("/restaurants/:restaurantsId", (req, res, next) => {
  const { restaurantsId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(restaurantsId)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }

  Restaurant.findByIdAndRemove(restaurantsId)
    .then(() =>
      res.json({
        message: `Restaurant with ${restaurantsId} is removed successfully.`,
      })
    )
    .catch((error) => res.json(error));
});

module.exports = router;
