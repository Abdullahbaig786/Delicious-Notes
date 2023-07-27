import React, { useState, useContext } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";

const API_URL = "http://localhost:5005";

function LoginPage(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const { storeToken, authenticateUser } = useContext(AuthContext);

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const requestBody = { email, password };

    axios
      .post(`${API_URL}/auth/login`, requestBody)
      .then((response) => {
        console.log("JWT token", response.data.authToken);

        storeToken(response.data.authToken);
        authenticateUser();
        navigate("/");
      })
      .catch((error) => {
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      });
  };

  return (
    <div className="LoginPage">
      <h1 className="text-3xl font-bold" >Login</h1>

      <form onSubmit={handleLoginSubmit}>
        <label className="block mb-2" >Email:</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleEmail}
          className="border border-gray-400 py-2 px-3 rounded-md mb-2"
        />

        <label className="block mb-2">Password:</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handlePassword}
          className="border border-gray-400 py-2 px-3 rounded-md mb-2"
        />

        <div className="mt-4">
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded-md"
            type="submit"
          >
            Login
          </button>
        </div>
      </form>

      {errorMessage && <p className="error-message">{errorMessage}</p>}

      <p className="mt-4">Don't have an account yet?</p>
      <Link to={"/signup"} className="text-blue-500">
        Sign Up
      </Link>
    </div>
  );
}

export default LoginPage;
