import { useEffect, useState } from "react";
import Logo from "./Logo.jsx";
import YearSelector from "./YearSelector";
import { UNIT_NAME, CORE_COMMITTEE_URL } from "../config";

export default function Navbar({ year, onYearChange }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const close = () => setMenuOpen(false);

  // Close the mobile menu with the Esc key
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e) => e.key === "Escape" && close();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  return (
    <header className="nav-wrap">
      <nav className="container nav glass" aria-label="Main">
        <a className="brand" href="#top" onClick={close}>
          <span className="logo-chip">
            <Logo />
          </span>
          {UNIT_NAME}
        </a>

        <div id="nav-menu" className={`nav-links${menuOpen ? " open" : ""}`}>
          <a href="#about" onClick={close}>
            About
          </a>

          <a href={CORE_COMMITTEE_URL} onClick={close}>
            Core Committee
          </a>
          <a href="#events" onClick={close}>
            Events
          </a>
          <a href="#gallery" onClick={close}>
            Gallery
          </a>
          <a href="#contact" onClick={close}>
            Contact
          </a>
        </div>

        <YearSelector year={year} onChange={onYearChange} />

        {/* Hamburger: visible on small screens only */}
        <button
          type="button"
          className={`menu-btn${menuOpen ? " open" : ""}`}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="nav-menu"
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>
    </header>
  );
}
