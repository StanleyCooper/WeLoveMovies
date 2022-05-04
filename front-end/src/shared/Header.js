import React from "react";
import HeaderNav from "./HeaderNav";

function Header() {
  const style = {
    background: `#000`,
    backgroundPosition: "center",
    backgroundSize: "100% auto",
  };

  const highlight = {
    color: "#DBA506",
    "font-weight": "bold"
  }

  return (
    <header
      className="jumbotron jumbotron-fluid text-white border-bottom border-dark pt-0"
      style={style}
    >
      <HeaderNav />
      <div className="container d-flex flex-column align-items-center pt-4">
        <h1 className="display-4">Find your next favorite movie!</h1>
        <p className="lead">
          <em style={highlight}>WeLoveMovies</em> is your source for finding reviews of movies in
          theatres near you.
        </p>
      </div>
    </header>
  );
}

export default Header;
