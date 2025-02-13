import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./Homepage";
import SingleCountry from "./SingleCountry";
import Home from "./Home";
import BorderCountry from "./BorderCountry";
export default function MyRouter() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/homepage" element={<Home />}>
          <Route path="/homepage/:name" element={<SingleCountry />} />
        
        </Route>
        <Route path="bordercountry/:eachBorderName" element={<BorderCountry />} />
      </Routes>
    </div>
  );
}
