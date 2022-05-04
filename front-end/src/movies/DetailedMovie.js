import React from "react";
import { Link } from "react-router-dom";
import AverageRating from "../movie/AverageRating";

function DetailedMovie({ movie }) {

  const headingStyle ={
    color: "#DBA506",
    "font-weight": "bold",
  }

  const bodyStyle ={
    color: "white",
  }

  const button = {
    background: "#DBA506",
    color: "black",
    "font-weight": "bold"
  }
  
  return (
    <section className="row mt-4" style={bodyStyle}>
      <article className="col-sm-12 col-md-6 col-lg-3">
        <img
          alt={`${movie.title} Poster`}
          className="rounded"
          src={movie.image_url}
          style={{ width: "100%" }}
        />
      </article>
      <aside className="col-sm-12 col-md-6 col-lg-9">
        <h3 className="font-poppins-heading mb-4" style={headingStyle}>{movie.title}</h3>
        <p>{movie.description}</p>
        <p>
          <strong>Runtime:</strong> {movie.runtime} minutes
        </p>
        <p>
          <strong>Rating:</strong> {movie.rating}
        </p>
        <AverageRating reviews={movie.reviews} />
        <Link to={`/movies/${movie.movie_id}`} className="btn" style={button}>
          See More
        </Link>
      </aside>
    </section>
  );
}

export default DetailedMovie;
