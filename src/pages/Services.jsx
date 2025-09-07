import "../App.css";

export default function Services() {
  return (
    <div className="section services-page">
      <h2 className="page-title">What We Offer</h2>
      <p className="intro-text">
        RuVis Engineering provides a variety of innovative and comprehensive
        solutions. We deliver quality services in the most efficient way, and
        our experts work collaboratively with you to customize offerings to your
        particular needs. Book a meeting with one of our consultants to hear
        more about how we can assist your operations.
      </p>

      {/* Electronic Product Design */}
      <div className="service-block">
        <img
          src="explosion.png"
          alt="Electronic Product Design"
          className="service-img"
        />
        <div className="service-content">
          <h3>Electronic Product Design and Development</h3>
          <ul>
            <li>Product development from concept to finished product</li>
            <li>Consultancy for EMC (Radiated & Conducted Emissions/Immunity)</li>
            <li>Product value engineering & recycling</li>
            <li>Prototype build & engineering samples</li>
            <li>PCB fabrication & assembly</li>
            <li>BOM procurement & turnkey solutions</li>
            <li>Overlay, screen prints, laser prints, etc.</li>
            <li>
              Sheet Metal works, casting, machining, laser cutting on Aluminum
              & Steel
            </li>
            <li>Packing, end-caps, filler materials</li>
          </ul>
        </div>
      </div>

      {/* Website Design */}
      <div className="service-block reverse">
        <div className="service-content">
          <h3>Website Design and Development</h3>
          <p>
            We create professional, SEO-friendly websites that generate more
            business globally. Our responsive designs adapt to mobile and other
            devices, delivering an excellent viewing experience.
          </p>
          <ul>
            <li>SEO-friendly web solutions</li>
            <li>Business-focused design</li>
            <li>Responsive web design for all devices</li>
          </ul>
        </div>
        <img
          src="computer-circuit.jpg"
          alt="Website Development"
          className="service-img"
        />
      </div>

      {/* Mobile Apps */}
      <div className="service-block">
        <img src="mobile-view.jpg" alt="Mobile Apps" className="service-img" />
        <div className="service-content">
          <h3>Mobile Applications</h3>
          <p>
            We put your products at the customer’s fingertips with efficient and
            easy-to-use mobile applications.
          </p>
          <ul>
            <li>Expertise in React Native, Android, iOS</li>
            <li>Custom solutions to fit budget and timeline</li>
            <li>End-to-end design, development & deployment</li>
          </ul>
        </div>
      </div>

      {/* UI/UX */}
      <div className="service-block reverse">
        <div className="service-content">
          <h3>UI/UX Design</h3>
          <p>
            We design web and mobile applications that are elegant, intuitive,
            and engaging.
          </p>
          <ul>
            <li>User-centered design approach</li>
            <li>Modern, professional interfaces</li>
            <li>Enhanced customer engagement</li>
          </ul>
        </div>
        <img
          src="ux-design.jpg"
          alt="UI/UX Design"
          className="service-img"
        />
      </div>
    </div>
  );
}
