import React, { Component, useState } from "react";
import User from "./User";
import Umains from "./Umains";
import { useNavigate, Link, Route, Routes } from "react-router-dom";
import Register from "./Register";
function Login() {
  const [userD, setData] = useState({
    email: "",
    pass: "",
  });
  const navigate = useNavigate();

  function handleInputChange(event) {
    const { name, value } = event.target;
    console.log(event.target);
    setData({ ...userD, [name]: value });
  }
  function handleFormSubmit(event) {
    event.preventDefault();
    console.log(userD);
    fetch("https://medweb.onrender.com/api/h1/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userD),
    })
      .then((response) => response.json())
      .then((respdata) => {
        localStorage.setItem("userid", respdata.userid);
        localStorage.setItem("name", respdata.name);
        localStorage.setItem("age", respdata.age);
        localStorage.setItem("email", respdata.email);
        console.log(respdata);
        if (respdata.success === true) {
          console.log(localStorage.getItem("currentuser"));
          navigate("/umain");
        } else {
          window.alert("Incorrect id or password");
        }
      });
  }
  const toregister = () => {
    navigate("/reg");
  };
  return (
    <div className="Form">
      <form>
        <div className="selection:bg-rose-500 selection:text-white">
          <div className="min-h-screen bg-rose-100 flex justify-center items-center">
            <div className="p-8 flex-1">
              <div className="w-80 bg-white rounded-3xl mx-auto overflow-hidden shadow-xl">
                <div className="relative h-48 bg-rose-500 rounded-bl-4xl">
                  <svg
                    className="absolute bottom-0"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1440 320"
                  >
                    <path
                      fill="#ffffff"
                      fillOpacity="1"
                      d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,85.3C672,75,768,85,864,122.7C960,160,1056,224,1152,245.3C1248,267,1344,245,1392,234.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                    ></path>
                  </svg>
                </div>
                <div className="px-10 pt-4 pb-8 bg-white rounded-tr-4xl">
                  <h1 className="text-2xl font-semibold text-gray-900">
                    MedWeb App
                  </h1>
                  <form className="mt-12" action="" method="POST">
                    <div className="relative">
                      <input
                        id="email"
                        name="email"
                        value={userD.email}
                        onChange={handleInputChange}
                        type="text"
                        className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-rose-600"
                        placeholder="john@doe.com"
                      />
                      <label
                        htmlFor="email"
                        className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                      >
                        Email address
                      </label>
                    </div>
                    <div className="mt-10 relative">
                      <input
                        id="password"
                        type="password"
                        name="pass"
                        value={userD.pass}
                        onChange={handleInputChange}
                        className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-rose-600"
                        placeholder="Password"
                      />
                      <label
                        htmlFor="password"
                        className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                      >
                        Password
                      </label>
                    </div>

                    <input
                      type="submit"
                      value="Sign in"
                      className="mt-20 px-4 py-2 rounded bg-rose-500 hover:bg-rose-400 text-white font-semibold text-center block w-full focus:outline-none focus:ring focus:ring-offset-2 focus:ring-rose-500 focus:ring-opacity-80 cursor-pointer"
                      onClick={handleFormSubmit}
                    />
                    <button
                      onClick={toregister}
                      className="mt-20 px-4 py-2 rounded bg-rose-500 hover:bg-rose-400 text-white font-semibold text-center block w-full focus:outline-none focus:ring focus:ring-offset-2 focus:ring-rose-500 focus:ring-opacity-80 cursor-pointer"
                    >
                      if new, register
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
      {/* <User data={userD.email} /> */}
      <Routes>
        <Route path="/umain" element={<Umains />} />
      </Routes>
    </div>
  );
}

export default Login;
