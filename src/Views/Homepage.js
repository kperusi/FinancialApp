import React, { Suspense } from "react";
import "../Styles/main.css";
import "../Styles/margins.css";
import Select from "./Select";
import Searchbar from "./Searchbar";
import { useSelector, useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
// import { selectToggleHandler } from "../Store/dataSlice";
const Display = React.lazy(()=>import("./Display"));


function Homepage() {
  const toggle = useSelector((state) => state.data.toggle);
  const themeMode = useSelector((state) => state.data.themeMode);
  const dispatch = useDispatch();

  return (
    <>
      <main
        className={`flex-col f-h ${
          toggle
            ? themeMode.lightTheme.lightThemeBg
            : themeMode.darkTheme.darkThemeBg
        }`}
       
      >
        <section
          className={`flex-rw space-bt p-lr-1 m-t-4`}
         
        >
          <Searchbar />
          <Select />
        </section>

        <section
          className="m-t-4 j-ct flex-rw"
          
        >
          <Suspense fallback={<div style={{border:'1px black solid'}}>Loading...</div>}>
            <Display />
          </Suspense>


          
        </section>
      </main>
      <Outlet />
    </>
  );
}

export default Homepage;
