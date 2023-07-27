import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import RestaurantListPage from "./pages/RestaurantListPage";
import RestaurantDetailsPage from "./pages/RestaurantDetailsPage"
import AllRestaurants from "./components/AllRestaurants";
import EditRestaurantPage from "./pages/EditRestaurantPage"; 

import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import IsPrivate from "./components/IsPrivate";
import IsAnon from "./components/IsAnon";


function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>      
        <Route path="/" element={<HomePage />} />

        <Route
          path="/restaurants"
          element={ <IsPrivate> <RestaurantListPage /> </IsPrivate> } 
        />

        <Route
          path="/allrestaurants"
          element={ <AllRestaurants /> } 
        />


        <Route
          path="/restaurants/:restaurantsId"
          element={ <IsPrivate> <RestaurantDetailsPage /> </IsPrivate> }
        />

        <Route
          path="/restaurants/edit/:restaurantsId"
          element={ <IsPrivate> <EditRestaurantPage /> </IsPrivate> } 
        />
        
        <Route path="/signup" element={<IsAnon> <SignupPage /> </IsAnon>} />
        <Route path="/login" element={<IsAnon> <LoginPage /> </IsAnon>} />

      </Routes>
    </div>
  );
}

export default App;
