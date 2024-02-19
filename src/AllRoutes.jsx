import React from "react";
import { Route, Routes,} from "react-router-dom";
import Home from "./Components/Home";
import LinkExtractor from "./Components/Link";
import {Form} from "./Components/Form";
import { Test } from "./Components/Test";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/form" element={<Form />} />
      <Route path="/pay" element={<LinkExtractor />} />
      <Route path="/test" element={<Test />} />
    </Routes>
  );
};

export default AllRoutes;
