import "../App.css";

export default function Software() {
  return (
    <div className="section software-page">
      <h2 className="page-title">Software Competency</h2>
      <p className="intro-text">
        We strive to provide our clients with the tools and services they need
        in order to excel. We are proud of our portfolio, helping our partners
        at every level of their organization.
      </p>

      

      {/* Capabilities Section */}
      <div className="service-block">
        <div className="service-content full-width">
          <h3>Capabilities</h3>
          <ul>
            <li>
              Expertise in Medical, Hospitality, Manufacturing, and Financial
              Services domains
            </li>
            <li>
              Product Development: e-commerce, GUI-based web, desktop, and
              mobile applications
            </li>
            <li>
              Latest technology trends: Single-page apps (SPA), Progressive Web
              Apps (PWA), AR, IoT
            </li>
            <li>
              Android platform & full-stack development with MEAN stack
            </li>
            <li>System Software development – Linux, RTOS, Middleware</li>
            <li>
              Experience with Networking, Communication products & Industry
              Protocols
            </li>
          </ul>
        </div>
      </div>

      {/* Office / Project Management Section */}
      <div className="service-block reverse">
        <div className="service-content">
          <h3>Program / Project Management</h3>
          <ul>
            <li>Large-scale Agile implementation & DevOps exposure</li>
            <li>Experience with Iterative, Incremental, Agile & Waterfall</li>
            <li>Proficiency in Agile SCRUM & SCRUMBAN models</li>
            <li>
              Support across the Software Development Life Cycle (SDLC) onsite
              & offshore
            </li>
            <li>
              Leading complex projects within budget & timelines with a focus on
              innovation
            </li>
          </ul>
        </div>
        
      </div>

      {/* Skills Section */}
      <div className="service-block">
        <div className="service-content full-width">
          <h3>Skills</h3>
          <p><strong>Front End Technologies:</strong></p>
          <p>
            JavaScript, ES6, Swift, Kotlin, HTML, CSS, XML, JQuery, React JS,
            React Native, Angular JS, Bootstrap, Xamarin, Ionic, Python
          </p>

          <p><strong>Back End Technologies:</strong></p>
          <p>Java-J2EE, Restful Web Services, Node JS</p>

          <p><strong>Databases and Tools:</strong></p>
          <p>
            Oracle, MS SQL Server, MongoDB, Firebase, SQLite, Access, DB2,
            Crystal Reports
          </p>
        </div>
      </div>
    </div>
  );
}
