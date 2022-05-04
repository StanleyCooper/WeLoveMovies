import React from "react";
import { Link } from "react-router-dom";

function HeaderNav() {
  const navStyle = {
    background: "#181818",
    padding: "0.5rem 0 0.5rem",
  };

  const titleStyle = {
    "border-radius": "4px",
    padding: "0.1rem",
    color: "#DBA506",
    "font-weight": "bold"
  }

  const iconStyle = {
    background: "#DBA506",
    "border-radius": "4px",
    padding: "0.2rem",
    color: "#DBA506",
  }

  const bold = {
    "font-weight": "bold"
  }

  return (
    <ul className="nav justify-content-start" style={navStyle}>
      <li className="nav-item d-none-lg">
        <Link className="font-poppins-heading nav-link mx-2 text-light" to="/">
          <div style={iconStyle}>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="black" class="bi bi-film" viewBox="0 0 16 16">
              <path d="M0 1a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1zm4 0v6h8V1H4zm8 8H4v6h8V9zM1 1v2h2V1H1zm2 3H1v2h2V4zM1 7v2h2V7H1zm2 3H1v2h2v-2zm-2 3v2h2v-2H1zM15 1h-2v2h2V1zm-2 3v2h2V4h-2zm2 3h-2v2h2V7zm-2 3v2h2v-2h-2zm2 3h-2v2h2v-2z"/>
            </svg>
          </div>
        </Link>
      </li>
      <li className="nav-item d-none d-lg-block d-xl-block">
        <Link className="font-poppins-heading nav-link mx-2 text-light" to="/">
          <h1 className="h5" style={titleStyle}>
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
