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
    <div className="RestaurantListPage">
      <AddRestaurant refreshRestaurant={getAllrestaurant} />

      {restaurant.length > 0 &&
        restaurant.map((restaurant) => (
          <RestaurantCard key={restaurant._id} {...restaurant} />
        ))}
    </div>
  );
}

export default RestaurantListPage;
