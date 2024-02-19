import React, { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children })=> {
  var [recipient1, setRecipient] = useState("");
  var [amount1, setAmount] = useState("");
  var [link, setLink] = useState("");

 useEffect(() => {
   try {
     var urlObject = new URL(window.location.href);
     var urlParams = new URLSearchParams(urlObject.search);
     setRecipient(urlObject.pathname.split("/").pop());
     setAmount(urlParams.get("am"));
     setLink(`upi://pay?pa=${recipient1}@ybl&pn=Monu&cu=INR&am=${amount1}`);
   } catch (error) {
     console.error("Error extracting data from URL:", error);
   }
 }, [amount1,recipient1]);


  if (
    recipient1 === null ||
    recipient1 === "" ||
    amount1 === null ||
    amount1 === ""
  ) {
    setRecipient("9664366346");
    setAmount("10");
    setLink(`upi://pay?pa=${recipient1}@ybl&pn=Monu&cu=INR&am=${amount1}`);
  }

  

  return (
    <AuthContext.Provider value={{ recipient1, amount1, link,setAmount,setRecipient }}>
      {children}
    </AuthContext.Provider>
  );
}

