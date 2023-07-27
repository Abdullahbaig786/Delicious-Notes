import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const API_URL = "http://localhost:5005";

const EditRestaurantPage = (props) => {
  const [username, setusername] = useState("");
  const [restaurantname, setrestaurantname] = useState("");
  const [speciality, setspeciality] = useState("");
  const [webpage, setwebpage] = useState("");
  const [phone, setphone] = useState("");
  const [image, setimage] = useState("");
  const [location, setlocation] = useState("");
  const [description, setdescription] = useState("");
  /////
  const navigate = useNavigate();
  const { restaurantsId } = useParams();

  useEffect(() => {
    // Get the token from the localStorage
    const storedToken = localStorage.getItem("authToken");

    // Send the token through the request "Authorization" Headers
    axios
      .get(`${API_URL}/api/restaurants/${restaurantsId}`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        const oneRestaurant = response.data;
        setusername(oneRestaurant.username);
        setrestaurantname(oneRestaurant.restaurantname);
        setspeciality(oneRestaurant.speciality);
        setwebpage(oneRestaurant.webpage);
        setphone(oneRestaurant.phone);
        setimage(oneRestaurant.image);
        setlocation(oneRestaurant.location);
        setdescription(oneRestaurant.description);
      })
      .catch((error) => console.log(error));
  }, [restaurantsId]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const requestBody = {
      username,
      restaurantname,
      speciality,
      webpage,
      phone,
      image,
      location,
      description,
    };

    // Get the token from the localStorage
    const storedToken = localStorage.getItem("authToken");

    // Send the token through the request "Authorization" Headers
    axios
      .put(`${API_URL}/api/restaurants/${restaurantsId}`, requestBody, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        navigate(`/restaurants/${restaurantsId}`);
      });
  };

  const deleteProject = () => {
    // Get the token from the localStorage
    const storedToken = localStorage.getItem("authToken");

    // Send the token through the request "Authorization" Headers
    axios
      .delete(`${API_URL}/api/restaurants/${restaurantsId}`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then(() => navigate("/restaurants"))
      .catch((err) => console.log(err));
  };

  return (
    <div className="EditRestaurantPage">
      <h3 className="text-xl font-medium mb-4">Edit the Project</h3>

      <form onSubmit={handleFormSubmit} className="mb-4">
        <label htmlFor="username" className="mb-2 block font-medium">
          username:
        </label>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={(e) => setusername(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md mb-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        />

        <label htmlFor="restaurantname" className="mb-2 block font-medium">
          restaurantname:
        </label>
        <textarea
          id="restaurantname"
          name="restaurantname"
          value={restaurantname}
          onChange={(e) => setrestaurantname(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md resize-none h-32 mb-4 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        />

        <label htmlFor="speciality" className="mb-2 block font-medium">
          speciality:
        </label>
        <input
          type="text"
          id="speciality"
          name="speciality"
          value={speciality}
          onChange={(e) => setspeciality(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md mb-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        />

        <label htmlFor="webpage" className="mb-2 block font-medium">
          webpage:
        </label>
        <input
          type="text"
          id="webpage"
          name="webpage"
          value={webpage}
          onChange={(e) => setwebpage(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md mb-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        />

        <label htmlFor="phone" className="mb-2 block font-medium">
          phone:
        </label>
        <input
          type="text"
          id="phone"
          name="phone"
          value={phone}
          onChange={(e) => setphone(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md mb-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        />

        <label htmlFor="image" className="mb-2 block font-medium">
          image:
        </label>
        <input
          type="text"
          id="image"
          name="image"
          value={image}
          onChange={(e) => setimage(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md mb-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        />

        <label htmlFor="location" className="mb-2 block font-medium">
          location:
        </label>
        <input
          type="text"
          id="location"
          name="location"
          value={location}
          onChange={(e) => setlocation(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md mb-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        />

        <label htmlFor="description" className="mb-2 block font-medium">
          description:
        </label>
        <input
          type="text"
          id="description"
          name="description"
          value={description}
          onChange={(e) => setdescription(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md mb-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        />

        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white hover:bg-blue-600 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        >
          Update Project
        </button>
      </form>

      <button
        onClick={deleteProject}
        className="px-4 py-2 bg-red-500 text-white hover:bg-red-600 rounded-md focus:outline-none focus:ring-red-500 focus:border-red-500"
      >
        Delete Project
      </button>
    </div>
  );
};

export default EditRestaurantPage;
