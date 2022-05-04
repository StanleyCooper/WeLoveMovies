import React from "react";
import { Link } from "react-router-dom";

function HeaderNav() {
  const navStyle = {
    background: "#181818",
    padding: "0.5rem 0 0.5rem",
  };

  const iconStyle = {
    background: "#DBA506",
    "border-radius": "4px",
    padding: "0.1rem",
    color: "black",
    "font-weight": "bold"
  }

  const bold = {
    "font-weight": "bold"
  }

  return (
    <ul className="nav justify-content-start" style={navStyle}>
      <li className="nav-item d-none d-lg-block d-xl-block">
        <Link className="font-poppins-heading nav-link mx-2 text-light" to="/">
          <h1 className="h5" style={iconStyle}>
            WeLoveMovies
          </h1>
        </Link>
      </li>
      <li className="nav-item">
        <Link
          className="nav-link mx-2 font-weight-light text-light"
          to="/movies"
          style={bold}
        >
          <h5>Movies</h5>
        </Link>
      </li>
      <li className="nav-item">
        <Link
          className="nav-link mx-2 font-weight-light text-light"
          to="/theaters"
          style={bold}
        >
          <h5>Theaters</h5>
        </Link>
      </li>
    </ul>
  );
}

export default HeaderNav;
