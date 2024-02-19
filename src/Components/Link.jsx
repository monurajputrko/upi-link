import React, { useContext, useState } from "react";
import { AuthContext } from "../Context/CreateContext";

const LinkExtractor = () => {
  const { recipient, amount } = useContext(AuthContext);
  var [link, setLink] = useState(`upi://pay?pa=${recipient}@ybl&pn=Monu&cu=INR&am=${amount}`);
  // console.log(link);
  // const link = "";
  return (
    <div>
      <div>
        upi://pay?pa=${recipient}@ybl&pn=Monu&cu=INR&am=${amount}
      </div>
      <section className="content pay">
        <p className="computerprompt">
          Seeing this on PC? Scan QR Code with any UPI App.
        </p>
        <p className="payingtext">You are paying ₹ {amount}</p>
        <p className="payingtext">to</p>
        <p className="payingtext vpatext">{recipient}</p>
        <div className="center">
          <a href={link} target="_blank" rel="noopener noreferrer">
            Go to External Website
          </a>
        </div>
      </section>
    </div>
  );
};

export default LinkExtractor;
