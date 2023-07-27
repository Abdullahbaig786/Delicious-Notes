import React, { useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:5005";

const AddComment = (props) => {
  const [username, setusername] = useState("");
  const [comment, setcomment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // We need the project id when creating the new task
    const { restaurantsId } = props;
    // Create an object representing the body of the POST request
    const requestBody = { username, comment, restaurantsId };

    // Get the token from the localStorage
    const storedToken = localStorage.getItem("authToken");

    // Send the token through the request "Authorization" Headers
    axios
      .post(`${API_URL}/api/comment`, requestBody, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        // Reset the state to clear the inputs
        setusername("");
        setcomment("");

        // Invoke the callback function coming through the props
        // from the ProjectDetailsPage, to refresh the project details
        props.refreshRestaurant();
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="AddComment">
      <h2 className="text-lg font-medium mb-2 border-b-2 border-gray-300 pb-2 text-blue-500">
            Write new comment
          </h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="username" className="block mb-2 font-medium">
            username:
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setusername(e.target.value)}
            className="w-1/2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="comment" className="block mb-2 font-medium">
            comment:
          </label>
          <textarea
            id="comment"
            name="comment"
            value={comment}
            onChange={(e) => setcomment(e.target.value)}
            className="w-1/2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          ></textarea>
        </div>

        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white hover:bg-blue-600 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        >
          Post
          <br />
        </button>
      </form>
    </div>
  );
};

export default AddComment;
