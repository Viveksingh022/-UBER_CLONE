import React, { useState } from "react";
import { Link } from "react-router-dom";


const DriverLogin = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [DriverData, setDriverData] = useState('');

  const submitHandler = async (e) => {
    e.preventDefault();
   // console.log("hello brother")

  setDriverData({
    email: email,
    password: password,
  })

  email(''),
  password('')

  };


  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <img
          className="w-20 m-3"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
        ></img>

        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
        >
          <h3 className="text-xl font-medium mb-2">What 's is your Email</h3>
          <input
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            type="email"
            placeholder="email@example.com"
          />

          <h3 className="text-xl font-medium mb-2"> Enter Password</h3>
          <input
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            type="password"
            placeholder="password"
          />
          <button className="bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-base">
            Login
          </button>

        </form>
         <p className="text-center">
            join a fleet?
            <Link to="/driver-signup" className="text-blue-600">
              Register as a Driver
            </Link>
          </p>
      </div>
      <div>
        <Link to="/login" className="bg-[#d5622d] flex items-center justify-center text-white font-semibold mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base">
          Sign in as User
        </Link>
      </div>
    </div>
  )
};

export default DriverLogin
