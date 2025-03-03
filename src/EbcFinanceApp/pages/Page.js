import React from "react";
import Navbar from "../nav/Navbar";
import { Outlet } from "react-router-dom";
import "./pagesstyles/pagesstyle.css";
export default function Page() {
  return (
    <main className="page-main">
      {/* <section className="page-header">
        <h4>EBCFinance</h4>
      
      </section> */}
      <section className="navbar-cx">
        <Navbar />
      </section>


      <section className="content-cx">
        <Outlet />
      </section>
    </main>
  );
}
