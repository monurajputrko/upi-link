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
      {inputData && (
        <div
          style={{
            textAlign: "center",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            borderRadius: "8px",
            padding: "16px",
            display: "inline-block",
          }}
        >
          <QRCode value={inputData} size={256} />
        </div>
      )}
    </div>
  );
}

export default QRCodeGenerator;
