import React from "react";
import AuthContextProvider from "./Context/CreateContext";
import AllRoutes from "./AllRoutes";

const App = () => {
  return (
    <AuthContextProvider>
      <div className="App">
       <AllRoutes />
      </div>
    </AuthContextProvider>
  );
};

export default App;
