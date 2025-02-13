import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

import { Outlet } from "react-router-dom";
// import setCountryData2 from "./Store/dataSlice";

import { setCountryData2 } from "./Store/dataSlice";
import Navbar from "./EbcFinanceApp/nav/Navbar";
import MyRouter from "./EbcFinanceApp/MyRouter";


function App() {
  const toggle = useSelector((state) => state.data.toggle);
  const themeMode = useSelector((state) => state.data.themeMode);
  const countryData = useSelector((state) => state.data.countryData);
  const dispatch = useDispatch();
 

  // useEffect(() => {
  //   let url = "https://restcountries.com/v2/all";
  //   fetch(url)
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       // console.log(data);
  //       dispatch(setCountryData2(data));
  //     });
  // },[dispatch]);

  return (
    <div
      className={`flex-col  ${
        toggle
          ? themeMode.lightTheme.lightThemeBg
          : themeMode.darkTheme.darkThemeBg
      }`}
    >
     {/* <Navbar/> */}
     <MyRouter/>
      <Outlet />
    </div>
  );
}

export default App;
