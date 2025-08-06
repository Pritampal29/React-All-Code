import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const handleLinkClick = () => setIsOpen(false);

  // Close menu if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        !event.target.closest(".menu-toggle")
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <header className="bg-dark">
      <Link to="/" className="logo">
        PRITAM PAL
      </Link>

      <button
        className="menu-toggle"
        aria-label="Toggle navigation menu"
        onClick={() => setIsOpen(!isOpen)}
      >
        &#9776;
      </button>

      <ul className={`nav-menu ${isOpen ? "open" : ""}`} ref={menuRef}>
        <button
          className="close-menu"
          aria-label="Close menu"
          onClick={() => setIsOpen(false)}
        >
          &times;
        </button>

        <li>
          {/* <a href="#" onClick={handleLinkClick}>
            Home
          </a> */}

          <NavLink to="/" onClick={handleLinkClick}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/todos" onClick={handleLinkClick}>
            Todos
          </NavLink>
        </li>
        <li>
          <NavLink to="/word-counter" onClick={handleLinkClick}>
            Word Counter
          </NavLink>
        </li>
        <li>
          <NavLink to="/calculator" onClick={handleLinkClick}>
            Calculator
          </NavLink>
        </li>
        <li>
          <NavLink to="/agecal" onClick={handleLinkClick}>
            Age Calculator
          </NavLink>
        </li>
        <li></li>
      </ul>
    </header>
  );
};

export default Header;
