import React, { useContext, useState } from "react";
import { AuthContext } from "../Context/CreateContext";

const LinkExtractor = () => {
  // const { recipient, amount } = useContext(AuthContext);
  const recipient1 = "ok";
  const amount1 = "test";
  // Get the URL parameters
  const urlParams = new URLSearchParams(window.location.search);

  // Get the recipient UPI ID from the URL parameter 'pa'
  var recipient = urlParams.get("pa");
  
  // Get the amount from the URL parameter 'am'
  var amount = urlParams.get("am");
 

  if (recipient === "" || recipient === null) {
    recipient = recipient1;
  }
  if (amount === "" || amount === null) {
    amount = amount1;
  }

  console.log(recipient);
   console.log(amount);
  // console.log("Recipient:", recipient);
  // console.log("Amount:", amount);

  var [link, setLink] = useState(
    `upi://pay?pa=${recipient}&pn=Monu&cu=INR&am=${amount}`
  );
  // console.log(link);
  // const link = "";
  return (
    <div>
      <div>
        upi://pay?pa=${recipient}&pn=Monu&cu=INR&am=${amount}
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
