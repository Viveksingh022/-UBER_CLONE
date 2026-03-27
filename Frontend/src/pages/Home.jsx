import React from "react";
import heroImage from "../Image/tafficlight.avif";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div
        className="h-screen pt-8 flex justify-between flex-col w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <img
          className="w-16 m-8"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
        ></img>
        <div className="bg-white py-7 px-4">
          <h2 className="text-3xl font-bold">Get Started</h2>
          <Link to='/login' className="flex items-center justify-center w-full bg-black text-white py-3 rounded mt-5">
            continue </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
onabort