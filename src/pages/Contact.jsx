export default function Contact() {
  return (
    <div style={{ padding: "50px 20px", textAlign: "center" }}>
      <h2 style={{ fontSize: "2rem", marginBottom: "1rem", color: "#003566" }}>
        Contact Us
      </h2>

      {/* Contact Form */}
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          maxWidth: "500px",
          margin: "0 auto",
          textAlign: "left",
        }}
      >
        <input
          type="text"
          placeholder="Your Name"
          style={{
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "6px",
            fontSize: "1rem",
          }}
        />
        <input
          type="email"
          placeholder="Your Email"
          style={{
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "6px",
            fontSize: "1rem",
          }}
        />
        <textarea
          placeholder="Your Message"
          rows="5"
          style={{
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "6px",
            fontSize: "1rem",
          }}
        ></textarea>
        <button
          type="submit"
          style={{
            backgroundColor: "#003566",
            color: "#fff",
            padding: "12px",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            fontSize: "1rem",
            transition: "background 0.3s ease",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#001d3d")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#003566")}
        >
          Send Message
        </button>
      </form>

      {/* Reach Out Section */}
      <div
        style={{
          marginTop: "40px",
          padding: "20px",
          backgroundColor: "#f8f9fa",
          borderRadius: "8px",
          display: "inline-block",
          textAlign: "left",
        }}
      >
        <h3 style={{ color: "#003566", marginBottom: "10px" }}>
          Reach Out to Us
        </h3>
        <p style={{ margin: "5px 0", fontSize: "1.1rem" }}>
          📧 Email:{" "}
          <a
            href="mailto:ruvisengineering@gmail.com"
            style={{ color: "#0077b6", textDecoration: "none" }}
          >
            ruvisengineering@gmail.com
          </a>
        </p>
        <p style={{ margin: "5px 0", fontSize: "1.1rem" }}>📞 Phone: 459749857</p>
      </div>
    </div>
  );
}
