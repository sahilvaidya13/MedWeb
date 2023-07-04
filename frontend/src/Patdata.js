import React from "react";
import "./Patdata.css";
import Hcard from "./Hcard";
const patients = [
  {
    id: 0,
    Name: "xyz",
    Age: "100",
  },
  {
    id: 0,
    Name: "xyz",
    Age: "100",
  },
];
const Patdata = () => {
  return patients.map((e) => (
    <div className="patdata">
      <div className="hist">
        <Hcard />
      </div>
      <div className="Pdata">
        <h2>{e.Name}</h2>
        <h2>{e.Age}</h2>
      </div>
    </div>
  ));
};
export default Patdata;
