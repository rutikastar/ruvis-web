import "../App.css";

export default function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} RuVis Engineering. All rights reserved.</p>
    </footer>
  );
}
