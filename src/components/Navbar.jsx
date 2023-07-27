import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";

const Navbar = () => {
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  return (
    <nav
      className="flex-no-wrap relative flex w-full items-center justify-between bg-[#FBFBFB] py-2 shadow-md shadow-black/5 dark:bg-neutral-600 dark:shadow-black/10 lg:flex-wrap lg:justify-start lg:py-4"
      data-te-navbar-ref
    >
      <div className="flex w-full flex-wrap items-center justify-between px-3">
        <Link
          to="/"
          className="mb-4 ml-2 mr-5 mt-3 flex items-center text-neutral-900 hover:text-neutral-900 focus:text-neutral-900 dark:text-neutral-200 dark:hover:text-neutral-400 lg:mb-0 lg:mt-0"
        >
          <img
            src="https://tecdn.b-cdn.net/img/logo/te-transparent-noshadows.webp"
            style={{ height: "15px" }}
            alt="TE Logo"
            loading="lazy"
          />
        </Link>
        <ul
          className="list-style-none mr-auto flex flex-col pl-0 lg:flex-row"
          data-te-navbar-nav-ref
        >
          <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
            <Link
              className="text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2"
              to="/"
              data-te-nav-link-ref
            >
              Dashboard
            </Link>
          </li>
          <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
            <Link
              className="text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2"
              to="/allrestaurants"
              data-te-nav-link-ref
            >
              All Restaurants
            </Link>
          </li>
          <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
            <Link
              className="text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2"
              to="/restaurants"
              data-te-nav-link-ref
            >
              Add Restaurant
            </Link>
          </li>
        </ul>
        <div className="relative flex items-center">
          {isLoggedIn ? (
            <>
              <span>{user && user.name}</span>
              <button
                className="mr-4 text-neutral-600 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300"
                onClick={logOutUser}
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/signup" className="mr-2">
                <button>Sign Up</button>
              </Link>
              <Link to="/login" className="mr-4">
                <button>Login</button>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
