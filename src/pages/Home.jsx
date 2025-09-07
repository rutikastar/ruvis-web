import React from "react";
import "../App.css";

function Home() {
  return (
    <div>
      {/* Hero Section with Background Image */}
      <div
        className="hero hero-bg"
        style={{
          backgroundImage: 'url("/engineering-bg.jpg")',
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          
          paddingTop:"120px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center"
        }}
      >
        <h1>
          <span className="contrast-blue">Engineering and You</span>
        </h1>
        <p>
          <span className="dark-blue">Innovating solutions for a better tomorrow.</span>
        </p>
        <button>Learn More</button>
      </div>

      {/* Example Section */}
      <div className="section">
        <h2>Welcome to RuVis Engineering</h2>
        <p>We deliver cutting-edge engineering solutions across healthcare, lighting, automotive, and industrial sectors, with expertise in software, electronics, and product development.
        </p>
      </div>
    </div>
  );
}

export default Home;
