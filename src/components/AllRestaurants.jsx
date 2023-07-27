import { useState, useEffect } from "react";
import axios from "axios";
import AddRestaurant from "../components/AddRestaurant";
import CommentCard from "../components/CommentCard";
import RestaurantCard from "../components/RestaurantCard";

const API_URL = "http://localhost:5005";

function RestaurantListPage() {
  const [restaurant, setrestaurant] = useState([]);

  const getAllrestaurant = () => {
    // Get the token from the localStorage
    const storedToken = localStorage.getItem("authToken");

    // Send the token through the request "Authorization" Headers
    axios
      .get(`${API_URL}/api/restaurants`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => setrestaurant(response.data))
      .catch((error) => console.log(error));
  };

  // We set this effect will run only once, after the initial render
  // by setting the empty dependency array - []
  useEffect(() => {
    getAllrestaurant();
  }, []);

  return (
    <div className="RestaurantListPage grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {restaurant.length > 0 ? (
        restaurant.map((restaurant) => (
          <div className="bg-white rounded-lg shadow-md" key={restaurant._id}>
            <RestaurantCard {...restaurant} />
          </div>
        ))
      ) : (
        <p className="text-gray-500 text-center">No restaurants available.</p>
      )}
    </div>
  );
}

export default RestaurantListPage;
