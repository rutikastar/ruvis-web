import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import bgImage from "../engineering-bg.jpg"; // relative path

function Home() {
  const items = [
    "End-to-end product design and development",
    "CAD & simulation for mechanical and industrial projects",
    "Prototyping with advanced additive manufacturing",
    "Software & electronics solutions",
    "Quality Management Systems (QMS) and compliance",
  ];

  const itemRefs = useRef([]);
  const [visibleItems, setVisibleItems] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = itemRefs.current.indexOf(entry.target);
            if (!visibleItems.includes(index)) {
              setVisibleItems((prev) => [...prev, index]);
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    itemRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      itemRefs.current.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, [visibleItems]);

  return (
    <div className="home-page">
      {/* Hero Section */}
      <div
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          paddingTop: "140px",
          paddingBottom: "100px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          color: "#fff",
        }}
      >
        <h1
          style={{
            fontSize: "2.5rem",
            fontWeight: "bold",
            marginBottom: "1rem",
            color: "#90e0ef",
          }}
        >
          Engineering Innovation for Tomorrow
        </h1>
        <p
          style={{
            fontSize: "1.2rem",
            marginBottom: "1.5rem",
            color: "#caf0f8",
          }}
        >
          Precision, creativity, and technology to bring your ideas to life.
        </p>

        {/* Learn More Button with Link */}
        <Link to="/services" style={{ textDecoration: "none" }}>
          <button
            style={{
              backgroundColor: "#003566",
              color: "#fff",
              border: "none",
              padding: "12px 24px",
              fontSize: "1rem",
              borderRadius: "8px",
              cursor: "pointer",
              transition: "background 0.3s ease",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#001d3d")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#003566")}
          >
            Learn More
          </button>
        </Link>
      </div>

      {/* Intro Section */}
      <div
        style={{
          padding: "50px 20px",
          textAlign: "center",
          backgroundColor: "#f8f9fa",
        }}
      >
        <h2 style={{ fontSize: "2rem", marginBottom: "1rem", color: "#003566" }}>
          Welcome to RuVis Engineering
        </h2>
        <p style={{ maxWidth: "800px", margin: "0 auto", fontSize: "1.1rem" }}>
          At RuVis Engineering, we combine innovation with precision to deliver
          world-class solutions across industries. From concept to prototype to
          fully functional products, our team ensures high-quality outcomes that
          empower businesses and transform ideas into reality.
        </p>
      </div>

      {/* Highlights Section */}
      <div
        style={{
          padding: "50px 20px",
          backgroundColor: "#fff",
          textAlign: "center",
        }}
      >
        <h3
          style={{
            fontSize: "1.8rem",
            marginBottom: "1.2rem",
            color: "#003566",
          }}
        >
          What We Offer
        </h3>
        <ul
          style={{
            listStyle: "none",
            padding: 0,
            margin: "0 auto",
            maxWidth: "600px",
            textAlign: "left",
          }}
        >
          {items.map((item, index) => (
            <li
              key={index}
              ref={(el) => (itemRefs.current[index] = el)}
              style={{
                fontSize: "1.1rem",
                margin: "0.8rem 0",
                padding: "10px",
                opacity: visibleItems.includes(index) ? 1 : 0,
                transform: visibleItems.includes(index)
                  ? "translateY(0)"
                  : "translateY(30px)",
                transition: "all 0.6s ease",
                backgroundColor: "#f8f9fa",
                borderRadius: "6px",
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Home;
