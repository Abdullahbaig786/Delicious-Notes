import { Link } from "react-router-dom";

// We are deconstructing props object directly in the parentheses of the function
function RestaurantCard({
  username,
  restaurantname,
  speciality,
  webpage,
  phone,
  image,
  location,
  description,
  _id,
}) {
  return (
    <div className="RestaurantCard card">
      <Link to={`/restaurants/${_id}`}>
        <h1 className="font-bold">{restaurantname}</h1>
        <h5>{location}</h5>
        <h6>{description}</h6>
        <img src={image} alt="An image" />
        <h5 style={{ opacity: 0.3, fontStyle: "italic" }}>
          Posted by {username}
        </h5>
        <h6>Special food: {speciality}</h6>
        <h6>{webpage}</h6>
        <h6>{phone}</h6>
      </Link>
    </div>
  );
}

export default RestaurantCard;
