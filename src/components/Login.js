import React from "react";
import icon from "../assets/pokeIcon.png";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-green-300 to-purple-400">
      <form>
        <div className="bg-gray-300 w-96 p-6 rounded-lg shadow-sm">
          <div className="flex items center justify-center mb-4">
            <img src={icon} alt="" className="h-32" />
          </div>
          <label className="text-gray-700">Email</label>
          <input type="email" className="w-full py-2 bg-gray-100 text-gray-600 px-5 outline-none mb-4 rounded-xl" placeholder="Email" />
          <label className="text-gray-700">Password</label>
          <input type="password" className="w-full py-2 bg-gray-100 text-gray-600 px-5 outline-none mb-4 rounded-xl" placeholder="Password" />
          <input id="remember" className="mb-4" type="checkbox" />
          <label for="remember" className="text-gray-700 ml-2">
            Remember me
          </label>
          <Link to="/home">
            <button type="submit" className="bg-blue-500 w-full text-gray-100 py-2 rounded-xl hover:bg-blue-600 transition-colors ">
              Login
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
