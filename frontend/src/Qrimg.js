import React, { useEffect, useState } from "react";
// import QRCode from "qrcode";
import QRCode from "qrcode.react";

const Qrimg = () => {
  //   const [image, SetImage] = useState("");

  const image =
    "iVBORw0KGgoAAAANSUhEUgAAAIQAAACECAYAAABRRIOnAAAAAklEQVR4AewaftIAAAN9SURBVO3BQa7cVgADwe4H3f/KjBdZcCVgIM23nbDK/MLMvw4z5TBTDjPlMFMOM+UwUw4z5TBTDjPlMFMOM+UwUw4z5TBTDjPl4iGVn5SEOyotCd+k0pLQVH5SEp44zJTDTDnMlIuXJeFNKp9IQlP5RBLuqDyRhDepvOkwUw4z5TBTLr5M5RNJ+IRKS8KdJDSVOyrfpPKJJHzTYaYcZsphplz8zyWhqdxJwn/ZYaYcZsphplz8x6h8QuVOEu6otCT8zQ4z5TBTDjPl4suS8DdJwh2VNyXhT3KYKYeZcpgpFy9T+Z2S0FSeUGlJaCqfUPmTHWbKYaYcZsrFQ0n4k6i0JNxJwjcl4W9ymCmHmXKYKeYXHlBpSWgqb0rCN6l8Igl3VN6UhG86zJTDTDnMlIuHkvBEEp";
  //   QRCode.toDataURL(, { type: "png" }).then((img) => {
  //     SetImage(image);
  //   });

  return (
    <div>
      <QRCode value={image} size={256} />
    </div>
  );
};

export default Qrimg;
