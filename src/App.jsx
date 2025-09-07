import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Software from "./pages/Software";
import MedicalQMS from "./pages/MedicalQMS";
import CAD from "./pages/CAD";
import SoftwareSolutions from "./pages/SoftwareSolutions";

import "./App.css";

export default function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/software" element={<Software />} />
            <Route path="/contact" element={<Contact />} />

            {/* Services with nested routes */}
            <Route path="/services" element={<Services />}>
              {/* Redirect /services to /services/medical-qms */}
              <Route index element={<Navigate to="medical-qms" replace />} />
              <Route path="medical-qms" element={<MedicalQMS />} />
              <Route path="cad" element={<CAD />} />
              <Route path="software-solutions" element={<SoftwareSolutions />} />
            </Route>
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
