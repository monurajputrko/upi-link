import React, { useContext, useState } from "react";
import { AuthContext } from "../Context/CreateContext";
import QRCode from "qrcode.react";
import './Link.css'

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

  var [link, setLink] = useState(
    `upi://pay?pa=${recipient}&pn=Monu&cu=INR&am=${amount}`
  );

  return (
    <div className="flex items-center justify-center">
      <section className="content pay">
        <p className=" mt3 ">
          Seeing this on PC? <br /> Scan QR Code with any UPI App.
        </p>
        <div
          style={{
            textAlign: "center",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            borderRadius: "8px",
            padding: "16px",
            display: "inline-block",
          }}
        >
          <QRCode value={link} size={256} />
        </div>
        <p className="payingtext">You are paying ₹ {amount}</p>
        <p className="payingtext">to</p>
        <p className="payingtext vpatext">{recipient}</p>
        {sender !== "" && <p className="payingtext vpatext">({sender})</p> }

        <div className="center">
          <a
            href={link}
            className="inline-flex border-2 items-center justify-center w-full px-5 py-3 mb-2 mr-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:w-auto focus:outline-none hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 btn"
          >
            <img
              src="https://ik.imagekit.io/pngserver/upi-p-logo.png"
              alt="UPI Icon"
              className="w-4 h-4 mr-2"
            />
            {/* <!-- Replace the CDN link and alt text with your icon URL and description --> */}
            Pay Now
          </a>
        </div>
      </section>
    </div>
  );
};

export default LinkExtractor;
