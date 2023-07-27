import React, { useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:5005";

const AddRestaurant = (props) => {
  const [username, setusername] = useState("");
  const [restaurantname, setrestaurantname] = useState("");
  const [speciality, setspeciality] = useState("");
  const [webpage, setwebpage] = useState("");
  const [phone, setphone] = useState("");
  const [image, setimage] = useState("");
  const [location, setlocation] = useState("");
  const [description, setdescription] = useState("");

  // const handleChangeImage = (e) => {
  //   const selectedImage = e.target.files[0];
  //   setimage(selectedImage);
  // };
  //console.log(restaurantname, phone, speciality);

  const handleSubmit = (e) => {
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
      .post(`${API_URL}/api/restaurants`, requestBody, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        // Reset the state
        setusername("");
        setrestaurantname("");
        setspeciality("");
        setwebpage("");
        setphone("");
        setimage("");
        setlocation("");
        setdescription("");
        props.refreshRestaurant();
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="AddRestaurant">
      <h1 className="text-xl mb-4 font-bold underline">Add Restaurant here</h1>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="username" className="block mb-2 font-medium">
            Enter Your Name
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
          <label htmlFor="restaurantname" className="block mb-2 font-medium">
            Restaurant Name
          </label>
          <input
            id="restaurantname"
            name="restaurantname"
            value={restaurantname}
            onChange={(e) => setrestaurantname(e.target.value)}
            className="w-1/2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          ></input>
        </div>

        <div className="mb-4">
          <label htmlFor="speciality" className="block mb-2 font-medium">
            Speciality
          </label>
          <input
            id="speciality"
            name="speciality"
            value={speciality}
            onChange={(e) => setspeciality(e.target.value)}
            className="w-1/2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          ></input>
        </div>

        <div className="mb-4">
          <label htmlFor="webpage" className="block mb-2 font-medium">
            Webpage
          </label>
          <input
            id="webpage"
            name="webpage"
            value={webpage}
            onChange={(e) => setwebpage(e.target.value)}
            className="w-1/2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          ></input>
        </div>

        <div className="mb-4">
          <label htmlFor="phone" className="block mb-2 font-medium">
            Contact Number
          </label>
          <input
            id="phone"
            name="phone"
            value={phone}
            onChange={(e) => setphone(e.target.value)}
            className="w-1/2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          ></input>
        </div>

        <div className="mb-4">
          <label htmlFor="image" className="block mb-2 font-medium">
            Image
          </label>
          <input
          
            id="image"
            name="image"
            value={image}
            onChange={(e) => setimage(e.target.value)}
            className="w-1/2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          ></input>
        </div>
        {/* <div className="mb-4">
          <label htmlFor="image" className="block mb-2 font-medium">
            Image:
          </label>
          <input
            type="file"
            id="image"
            name="image"
            onChange={handleChangeImage}
            className="border-2"
          />
        </div> */}

        <div className="mb-4">
          <label htmlFor="location" className="block mb-2 font-medium">
            Location
          </label>
          <input
            id="location"
            name="location"
            value={location}
            onChange={(e) => setlocation(e.target.value)}
            className="w-1/2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          ></input>
        </div>

        <div className="mb-4">
          <label htmlFor="description" className="block mb-2 font-medium">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={description}
            onChange={(e) => setdescription(e.target.value)}
            className="w-1/2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          ></textarea>
        </div>

        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white hover:bg-blue-600 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddRestaurant;
