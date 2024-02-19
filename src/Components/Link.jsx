import React, { useContext, useState } from "react";
import { AuthContext } from "../Context/CreateContext";
import QRCode from "qrcode.react";

const LinkExtractor = () => {
const { formData, setFormData } = useContext(AuthContext);
  const recipient1 = formData.upi;
  const amount1 = formData.amount;
  // Get the URL parameters
  const urlParams = new URLSearchParams(window.location.search);

  // Get the recipient UPI ID from the URL parameter 'pa'
  var recipient = urlParams.get("pa");
  
  // Get the amount from the URL parameter 'am'
  var amount = urlParams.get("am");

  var sender = urlParams.get("se");

  var note = urlParams.get("no");
 
  console.log(sender, " ", note);

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
  // https://upi-link-five.vercel.app/pay?pa=9664366346&am=1000

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
        <QRCode value={link} size={256} />
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
