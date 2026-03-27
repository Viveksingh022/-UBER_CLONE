import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const UserSignup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState({});

  const submitHandler = async (e) => {
    e.preventDefault();

    setUserData({
      fullName:{
        firstName: firstName,
        lastName: lastName,
      },
      email: email,
      password: password, 
      }
    );

    console.log(userData);

    (setEmail(""), setPassword(""), setFirstName(""), setLastName(""));
  };

  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <img
          className="w-20 m-3"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
        ></img>

        <form onSubmit={submitHandler}>
          <h3 className="text-lg font-medium mb-2">What 's is your Name</h3>

          <div className="flex gap-2 mb-5 ">
            <h3 className="text-xl font-medium mb-2"></h3>
            <input
              required
              className="bg-[#eeeeee]  rounded px-4 py-2 border text-lg placeholder:text-base"
              type="text"
              placeholder="first name"
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />

            <h3 className="text-xl font-medium mb-2"></h3>
            <input
              required
              className="bg-[#eeeeee]  rounded px-4 py-2 border text-lg placeholder:text-base"
              type="text"
              placeholder="last name"
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />
          </div>

          <h3 className="text-base font-medium mb-2">What 's is your Email</h3>
          <input
            required
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border text-lg placeholder:text-base"
            type="text"
            placeholder="email@example.com"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />

          <h3 className="text-base font-medium mb-2"> Enter Password</h3>
          <input
            required
            className="bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button className="bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-base">
            Login
          </button>
        </form>
        <p className="text-center">
          Already have a acoount?
          <Link to="/login" className="text-blue-600">
            Login here
          </Link>
        </p>
      </div>
      <div>
         <p className='text-[10px] leading-tight'>This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy
            Policy</span> and <span className='underline'>Terms of Service apply</span>.</p>
      </div>
    </div>
  );
};

export default UserSignup;
