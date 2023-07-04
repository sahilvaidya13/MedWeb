import React, { useRef, useEffect, useState } from "react";
import QRCode from "qrcode";
import Buffer from "buffer";
import User from "./User";
function Qrnew(props) {
  const [qrDataURL, setQRDataURL] = useState(null);

  const canvasRef = useRef(null);

  const data = localStorage.getItem("email");
  useEffect(() => {
    async function generateQRCode() {
      try {
        const url = await QRCode.toDataURL(data);
        setQRDataURL(url);
      } catch (err) {
        console.error(err);
      }
    }

    generateQRCode();
  }, [data]);
  //   const canvas = canvasRef.current;
  //   QRCode.toCanvas(canvas, base64Data, {
  //     width: 256,
  //     color: {
  //       dark: "#000000",
  //       light: "#ffffff",
  //     },
  //   });
  // }, [base64Data]);
  //   function decodeBase64(base64Data) {
  //     const decodedData = window.atob(base64Data);
  //     return decodedData;
  //   }

  //   const binaryData = Buffer.from(base64Data, "base64");
  //   const actualData = binaryData.toString();
  //   const decodedData = decodeBase64(base64Data);
  // const binaryData = Uint8Array.from(window.atob(base64Data), (c) =>
  //   c.charCodeAt(0)
  // ); // Convert Base64 to binary data
  // const actualData = new TextDecoder().decode(binaryData); // Convert binary data to string

  return (
    <div>
      {/* <canvas ref={canvasRef} />
      <h1>{actualData}</h1> */}
      {/* <img src={qrDataURL} alt="QR code" /> */}
      <User data={qrDataURL} />
    </div>
  );
}
export default Qrnew;
