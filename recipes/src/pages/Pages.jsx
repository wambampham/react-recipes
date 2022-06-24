import React from "react";
import Home from "./Home";
import Cuisine from "./Cuisine";
import { Route, Routes } from "react-router-dom";

function Pages() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cuisine/:type" element={<Cuisine />} />
      {/* adding /:type allows for links not ending in just /cuisine exactly to redirect to that page */}
    </Routes>
  );
}

export default Pages;
