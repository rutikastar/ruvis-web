 import { Link } from "react-router-dom";
import "../App.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">RuVis Engineering</h1>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        
        <Link to="/software">Software</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}
