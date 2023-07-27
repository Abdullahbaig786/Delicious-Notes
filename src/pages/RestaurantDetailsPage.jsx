import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import AddComment from "../components/AddComent";
import CommentCard from "../components/CommentCard";

const API_URL = "http://localhost:5005";

const RestaurantDetailsPage = (props) => {
  const [restaurant, setrestaurant] = useState(null);
  const { restaurantsId } = useParams();

  const getRestaurant = () => {
    // Get the token from the localStorage
    const storedToken = localStorage.getItem("authToken");

    // Send the token through the request "Authorization" Headers
    axios
      .get(`${API_URL}/api/restaurants/${restaurantsId}`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        const oneRestaurant = response.data;
        setrestaurant(oneRestaurant);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getRestaurant();
  }, []);

  return (
    <div className="RestaurantDetails">
      {restaurant && (
        <>
          <h1 className="text-3xl font-medium mb-4 underline">
            {restaurant.restaurantname}
          </h1>
        </>
      )}

      {/* <AddComment
        refreshRestaurant={getRestaurant}
        restaurantsId={restaurantsId}
      /> */}

      {restaurant && restaurant.comment.length > 0 ? (
        <div className="mb-6">
          <h2 className="text-lg font-medium mb-2 border-b-2 border-gray-300 pb-2 text-blue-500">
            All Comments
          </h2>
          {restaurant.comment.map((comment, index) => (
            <div key={comment._id}>
              <CommentCard {...comment} />
              {index !== restaurant.comment.length - 1 && (
                <div className="border-b-2 border-gray-300 my-4" />
              )}
            </div>
          ))}
        </div>
      ) : (
        <>
          <br />
          <p>No Comments found for this Restaurant.</p>
          <br />
        </>
      )}

      <AddComment
        refreshRestaurant={getRestaurant}
        restaurantsId={restaurantsId}
      />
      <br />
      <Link to="/restaurants">
        <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
          Back to Restaurants
        </button>
      </Link>

      <Link to={`/restaurants/edit/${restaurantsId}`}>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 ml-4">
          Edit Restaurant
        </button>
      </Link>
    </div>
  );
};

export default RestaurantDetailsPage;
