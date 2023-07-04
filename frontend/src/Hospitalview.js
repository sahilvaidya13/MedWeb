import React from "react";
import Hcard from "./Hcard";

const Hospitalview = () => {
  return (
    <div className="grid grid-cols-10 ">
      <div className="col-span-2 bg-hero h-screen">
        {/* <img src="https://img.freepik.com/free-photo/heart-shape-stethoscope-medical-subjects_23-2150254029.jpg?w=2000"></img> */}
      </div>
      <div className="col-span-5">
        <Hcard />
      </div>
      <div className="col-span-3"></div>
    </div>
  );
};

export default Hospitalview;
