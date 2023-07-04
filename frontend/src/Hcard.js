import React from "react";
import "./Hcard.css";
const history = [
  {
    doctor: "alex",
    symp: "cold, cough",
    pres: "crosin",
    hosp: "no",
    visit: "2 May",
  },
  {
    doctor: "Dr. Salunnke",
    symp: "cold, cough",
    pres: "crosin",
    hosp: "no",
    visit: "2 May",
  },
];
const Hcard = ({ info }) => {
  const val = info.health_cred;

  return info.map((p) =>
    p.health_cred.map((vl) => (
      <div className="pl-8 pt-2 pb-2 pr-4 m-2 bg-lgrey rounded-xl w-full flex">
        <div className="text-left">
          <h4 className="font-bold text-3xl mb-5 mt-3">{vl.doctor}</h4>
          <div className="flex">
            <p className=" font-semibold">symptoms :</p>
            <h3 className="ml-2"> {vl.symp}</h3>
          </div>

          <div className="flex">
            <p className="font-semibold">Hospitalized :</p>
            <p className="ml-2">{vl.hosp}</p>
          </div>
          <p className="font-semibold">prescribtion :</p>
          <p className="detail">{vl.pres}</p>
        </div>
        <div className="mt-8 ml-96">
          <p className="font-semibold">Visited :</p>
          <p>{vl.visit}</p>
        </div>
      </div>
    ))
  );
};
export default Hcard;
