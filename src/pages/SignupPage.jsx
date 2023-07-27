import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const API_URL = "http://localhost:5005";

function SignupPage(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleName = (e) => setName(e.target.value);

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    const requestBody = { email, password, name };

    axios
      .post(`${API_URL}/auth/signup`, requestBody)
      .then((response) => {
        navigate("/login");
      })
      .catch((error) => {
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      });
  };

  return (
    <div className="SignupPage">
      <h1 className="text-3xl font-bold">Sign Up</h1>

      <form onSubmit={handleSignupSubmit} className="mt-4">
        <label className="block mb-2">Email:</label>
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

        <label className="block mb-2">Name:</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleName}
          className="border border-gray-400 py-2 px-3 rounded-md mb-2"
        />
        <div className="mt-4">
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md"
          >
            Sign Up
          </button>
        </div>
      </form>

      {errorMessage && <p className="error-message mb-2">{errorMessage}</p>}

      <p className="mt-4">Already have an account?</p>
      <Link to={"/login"} className="text-blue-500">
        Login
      </Link>
    </div>
  );
}

export default SignupPage;
