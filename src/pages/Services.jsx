import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "../App.css";

function Services() {
  return (
    <div className="section">
      <h1>Our Services</h1>
      <div className="tabs">
        <NavLink to="medical-qms" className="tab">Medical QMS</NavLink>
        <NavLink to="cad" className="tab">CAD</NavLink>
        <NavLink to="software-solutions" className="tab">Software & Solutions</NavLink>
      </div>
      <div className="tab-content">
        <Outlet />
      </div>
    </div>
  );
}

export default Services;
