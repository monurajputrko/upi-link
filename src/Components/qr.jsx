import React, { useState } from "react";
import QRCode from "qrcode.react";

function QRCodeGenerator() {
  const [inputData, setInputData] = useState("");

  const handleChange = (e) => {
    setInputData(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={inputData}
        onChange={handleChange}
        placeholder="Enter text or URL"
      />
      {inputData && <QRCode value={inputData} />}
    </div>
  );
}

export default QRCodeGenerator;
