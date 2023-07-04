import React from "react";
import "./Serve.css";
import { useNavigate } from "react-router-dom";
import Hcard from "./Hcard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaPhone } from "react-icons/fa";
import { FaMailBulk } from "react-icons/fa";
function Serve({ info }) {
  const navigate = useNavigate();
  const { name, age, sex, phone, email } = info;
  const handleLogOut = () => {
    navigate("/");
  };
  const handleDetails = () => {
    navigate("/hdet");
  };
  // const { name, age } = basic_cred;
  return (
    <div className="grid grid-cols-10">
      <div className="col-span-2 bg-hero h-screen">
        <p className="text-5xl mt-16 font-extrabold">MEDWEB</p>
      </div>
      <div className="col-span-5 w-full ml-10 ">
        <h1 className="font-bold text-3xl text-left m-8">User Medical Data</h1>
        <Hcard className="bg-lgrey rounded-2xl" info={info} />
      </div>
      <div className="col-span-3 ml-20 w-80 mb-10  text-left ">
        <img
          className="bg-lgrey rounded-xl ml-10 w-80 mb-11 mt-24"
          src="https://icon.freeholidaypng.com/20200825/zjy/reading-book-for-world-teachers-day-5f4507bcba50f8.58110376.png"
        ></img>
        {info.map((p) => (
          <div className="ml-10 bg-lgrey rounded-xl p-8 w-80 mt-1">
            <h1 className="text-2xl font-semibold">Mr. {p.name}</h1>
            <h2>{p.age}</h2>
            <h2>{p.sex}</h2>
            <div className="flex">
              <FaMailBulk className="mt-2" />
              <h2 className="ml-2">{p.email}</h2>
            </div>

            <div className="flex">
              <FaPhone className="mt-2" />
              <h2 className="ml-2">{p.phone}</h2>
            </div>
          </div>
        ))}
        <div className="flex ml-10 mt-3">
          <button
            class="bg-red-500 hover:bg-red-700 text-white font-bold p-1.5 m-2 rounded "
            onClick={handleDetails}
          >
            Enter Health Details
          </button>

          <button
            class="bg-red-500 hover:bg-red-700 text-white font-bold p-1.5 m-2 rounded"
            onClick={handleLogOut}
          >
            Back to main
          </button>
        </div>
      </div>
    </div>
  );
}

export default Serve;
