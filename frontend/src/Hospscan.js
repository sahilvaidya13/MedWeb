import React, { useState } from "react";
import QrReader from "react-qr-scanner";
import Serve from "./Serve";
import Hcard from "./Hcard";
import Hospitalview from "./Hospitalview";
import { useEffect } from "react";
function Hospscan() {
  // const [result, setResult] = useState("No result");
  // const [mail, setmail] = useState("");

  // const handleScan = (data) => {
  //   if (data) {
  //     setIsScanning(false);
  //     setResult(data);
  //     setmail(result && result.text);
  //     fetcher();
  //   }
  // };

  // const handleError = (err) => {
  //   console.error(err);
  // };

  // const previewStyle = {
  //   height: 240,
  //   width: 320,
  // };

  //   const parsedData = JSON.parse(result);
  //   const text = parsedData.text;
  const [isScanning, setIsScanning] = useState(true);
  const [delay, setDelay] = useState(100);
  const [result, setResult] = useState("No result");
  const [userData, setUserData] = useState(null);
  const handleScan = (data) => {
    setResult(data);
  };

  const handleError = (err) => {
    console.error(err);
  };

  const mail = result && result.text;

  const fetcher = async () => {
    try {
      const response = await fetch(
        `https://medweb.onrender.com/api/h1/fetchqr?mail=${mail}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      setUserData(data);
      setIsScanning(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (mail) {
      fetcher();
    }
  }, [mail]);

  // const [email, setEmail] = useState("harshitapandit@gmail.com");
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch(
  //         `https://medweb.onrender.com/api/h1/hospfetch/${email}`
  //       );
  //       const jsonData = await response.json();
  //       setUserData(jsonData);

  //       console.log(jsonData);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   fetchData();
  // }, [email]);

  return (
    <div>
      {isScanning ? (
        <div>
          <QrReader
            className="ml-defm mt-40 rounded-3xl mx-auto overflow-hidden shadow-xl"
            delay={300}
            onError={handleError}
            onScan={handleScan}
            style={{ width: "30%" }}
          />
          <p className="mt-5 text-2xl font-semibold">
            Place qr code in this box.
          </p>
        </div>
      ) : (
        <div>
          <Serve info={userData} />
          {/* <Hcard info={userData} /> */}
        </div>
      )}
      {/* <QrReader
        delay={delay}
        // style={previewStyle}
        onError={handleError}
        onScan={handleScan}
      /> */}
      {/* <p>{JSON.stringify(result)}</p>
      <p>{result && result.text}</p> */}
      {/* <p>{JSON.stringify(userData)}</p> */}
    </div>
  );
}
export default Hospscan;
