import React, { ReactNode, useState } from "react";
import Link from "next/link";

interface PropType {
  children: ReactNode;
}

const Navbar = (props: PropType) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-secondary fixed-top">
        <div className="container-fluid">
          <Link href="/" className="navbar-brand">
            Home
          </Link>
          <button
            className={`navbar-toggler ${isMenuOpen ? "collapsed" : ""}`}
            type="button"
            onClick={handleMenuToggle}
            aria-expanded={isMenuOpen ? "true" : "false"}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`}
          >
            <ul className="navbar-nav">
              <li className={`nav-item`}>
                <Link href="/filter" className="nav-link">
                  Filters
                </Link>
              </li>
              <li className={`nav-item `}>
                <Link href="/expense" className="nav-link">
                  Expense
                </Link>
              </li>
              <li className="nav-item">
                <Link href="#" className="nav-link disabled">
                  Disabled
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {props.children}
    </>
  );
};

export default Navbar;
