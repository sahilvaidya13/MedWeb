import React, { Component, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Reg.css";
function Register() {
  const [userD, setData] = useState({
    email: "",
    name: "",
    age: "",
    sex: "",
    phone: "",
    pass: "",
  });
  const navigate = useNavigate();
  const checkout = () => {};
  function handleInputChange(event) {
    const { name, value } = event.target;
    console.log(event.target);
    setData({ ...userD, [name]: value });
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    console.log(userD);

    fetch("https://medweb.onrender.com/api/h1/signin", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userD),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // handle successful registration
      })
      .catch((error) => {
        console.error(error);
        // handle registration error
      });
    navigate("/login");
  }

  return (
    <div className="Register">
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
                    Welcome back!
                  </h1>
                  <form className="mt-12" action="" method="POST">
                    <div className="relative">
                      <input
                        id="email"
                        value={userD.email}
                        onChange={handleInputChange}
                        name="email"
                        type="text"
                        className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-rose-600"
                        placeholder="john@doe.com"
                      />
                      <label
                        htmlFor="email"
                        className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                      >
                        Email Address
                      </label>
                    </div>
                    <div className="relative">
                      <input
                        id="name"
                        value={userD.name}
                        onChange={handleInputChange}
                        name="name"
                        type="text"
                        className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-rose-600"
                        placeholder="john@doe.com"
                      />
                      <label
                        htmlFor="name"
                        className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                      >
                        Enter your Name
                      </label>
                    </div>
                    <div className="relative">
                      <input
                        id="age"
                        value={userD.age}
                        onChange={handleInputChange}
                        name="age"
                        type="number"
                        className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-rose-600"
                        placeholder="john@doe.com"
                      />
                      <label
                        htmlFor="age"
                        className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                      >
                        Age
                      </label>
                    </div>
                    <div className="relative">
                      <select
                        id="gender"
                        name="sex"
                        value={userD.sex}
                        onChange={handleInputChange}
                        class="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-rose-600"
                      >
                        <option selected>Choose</option>

                        <option name="v1" value="Male">
                          Male
                        </option>
                        <option name="v2" value="Female">
                          Female
                        </option>
                      </select>
                    </div>
                    <div className="relative">
                      <input
                        id="phone"
                        value={userD.phone}
                        onChange={handleInputChange}
                        name="phone"
                        type="text"
                        className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-rose-600"
                        placeholder="john@doe.com"
                      />
                      <label
                        htmlFor="phone"
                        className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                      >
                        Contact number
                      </label>
                    </div>
                    <div className="mt-10 relative">
                      <input
                        id="pass"
                        type="password"
                        value={userD.pass}
                        onChange={handleInputChange}
                        name="pass"
                        className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-rose-600"
                        placeholder="Password"
                      />
                      <label
                        htmlFor="pass"
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
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Register;
