import React from "react";
import cad1 from "../cad1.jpg";
import cad2 from "../cad2.jpg";
import cad3 from "../cad3.jpg";
import cad4 from "../cad4.jpg";

function CAD() {
  return (
    <div>
      <h2>CAD Services</h2>
      <p>
        Our CAD expertise supports companies in product design, simulation, and
        development. From concept to detailed engineering drawings, we deliver
        high-quality CAD solutions aligned with industry standards.
      </p>
      <ul>
        <li>2D & 3D CAD Design</li>
        <li>Mechanical & Industrial Drafting</li>
        <li>Design Validation & Optimization</li>
        <li>Prototype-ready Drawings</li>
        <li>Integration with product lifecycle documentation</li>
      </ul>

      {/* Image Gallery */}
      <div className="cad-gallery">
        <img src={cad1} alt="CAD Design Example 1" />
        <img src={cad2} alt="CAD Design Example 2" />
        <img src={cad3} alt="CAD Design Example 3" />
        <img src={cad4} alt="CAD Design Example 4" />
      </div>
    </div>
  );
}

export default CAD;
