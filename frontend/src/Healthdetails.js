import React, { Component, useState } from "react";
import { useNavigate } from "react-router-dom";
function Healthdetails() {
  const navigate = useNavigate();
  const [userD, setData] = useState({
    doctor: "",
    symp: "",
    pres: "",
    hosp: false,
    visit: "",
    email: localStorage.getItem("email"),
  });

  function handleInputChange(event) {
    const { name, value } = event.target;
    console.log(event.target);
    setData({ ...userD, [name]: value });
  }
  function handleFormSubmit(event) {
    event.preventDefault();
    fetch("https://medweb.onrender.com/api/h1/sethealth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userD),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Response:", data);
        navigate("/umain");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
  return (
    <div className="Healthdetails">
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
                        id="doctor"
                        value={userD.doctor}
                        onChange={handleInputChange}
                        name="doctor"
                        type="text"
                        className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-rose-600"
                        placeholder="Enter doctor name"
                      />
                      <label
                        htmlFor="doctor"
                        className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                      >
                        Enter Doctor Name
                      </label>
                    </div>
                    <div className="relative">
                      <input
                        id="symptoms"
                        value={userD.symptoms}
                        onChange={handleInputChange}
                        name="symp"
                        type="text"
                        className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-rose-600"
                        placeholder="enter comma seperated symptoms"
                      />
                      <label
                        htmlFor="symp"
                        className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                      >
                        Enter all the symptoms
                      </label>
                    </div>
                    <div className="relative">
                      <input
                        id="presc"
                        value={userD.presc}
                        onChange={handleInputChange}
                        name="pres"
                        type="text"
                        className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-rose-600"
                        placeholder="enter prescribtion"
                      />
                      <label
                        htmlFor="pres"
                        className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                      >
                        enter prescribtion
                      </label>
                    </div>
                    <div className="relative">
                      <select
                        id="hosp"
                        name="hosp"
                        value={userD.hosp}
                        onChange={handleInputChange}
                        class="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-rose-600"
                      >
                        <option selected>Hospitalized or not</option>

                        <option name="yes" value="Yes">
                          Yes
                        </option>
                        <option name="no" value="No">
                          No
                        </option>
                      </select>
                      <label
                        htmlFor="pres"
                        className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                      >
                        Hospitalized or not
                      </label>
                    </div>
                    <div className="relative">
                      <select
                        id="medi"
                        name="medi"
                        value={userD.medi}
                        onChange={handleInputChange}
                        class="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-rose-600"
                      >
                        <option selected>Mediclaim</option>

                        <option name="yes" value="Yes">
                          Yes
                        </option>
                        <option name="no" value="No">
                          No
                        </option>
                      </select>
                      <label
                        htmlFor="medi"
                        className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                      >
                        Mediclaim
                      </label>
                    </div>
                    <div className="relative">
                      <input
                        id="vdate"
                        value={userD.vdate}
                        onChange={handleInputChange}
                        name="visit"
                        type="date"
                        className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-rose-600"
                        placeholder="Enter date"
                      />
                      <label
                        htmlFor="visit"
                        className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                      >
                        Date
                      </label>
                    </div>

                    <input
                      type="submit"
                      value="Submit details"
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

export default Healthdetails;
