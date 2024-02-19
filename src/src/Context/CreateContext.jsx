import React, { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

function AuthContextProvider({ children }) {
  var [recipient, setRecipient] = useState("");
  var [amount, setAmount] = useState("");
  var [link, setLink] = useState("");

  // useEffect(() => {
  //   try {
  //     var urlObject = new URL(window.location.href);
  //     var urlParams = new URLSearchParams(urlObject.search);
  //     setRecipient(urlObject.pathname.split("/").pop());
  //      setAmount(urlParams.get("am"));

  //     setRecipient(recipient);
  //     setAmount(amount);
  //   } catch (error) {
  //     console.error("Error extracting data from URL:", error);
  //   }
  // }, []);

  if (
    recipient === null ||
    recipient === "" ||
    amount === null ||
    amount === ""
  ) {
    setRecipient("9664366346");
    setAmount("10");
    setLink(`upi://pay?pa=${recipient}@ybl&pn=Monu&cu=INR&am=${amount}`);
  }

  

  return (
    <AuthContext.Provider value={{ recipient, amount, link,setAmount,setRecipient }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
