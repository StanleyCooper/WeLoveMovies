import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ErrorAlert from "../shared/ErrorAlert";
import { listMovies } from "../utils/api";

function MoviesList() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    setError(null);
    const abortController = new AbortController();
    listMovies(abortController.signal).then(setMovies).catch(setError);

    return () => abortController.abort();
  }, []);

  const headingStyle ={
    color: "#DBA506",
    "font-weight": "bold",
    "padding-left": "2rem",
  
  }
  const movieTitleStyle ={
    color: "white",
    "font-weight": "bold",
  }

  const movieBackground = {
    background: "#181818",
    "border-radius": "4px"
  }

  const list = movies.map((movie) => (
    <article key={movie.movie_id} className="col-sm-12 col-md-6 col-lg-3">
      <div className="card mt-4 mx-1 h-auto" style={movieBackground}>
        <img
          alt={`${movie.title} Poster`}
          className="card-img-top rounded"
          src={movie.image_url}
          style={{ width: "100%" }}
        />
        <Link
          to={`/movies/${movie.movie_id}`}
          className="stretched-link text-dark"
        >
          <h3 className="font-poppins-heading text-center mt-2" style={movieTitleStyle}>{movie.title}</h3>
        </Link>
      </div>
    </article>
  ));

  return (
    <main>
      <div className="px-5">
        <ErrorAlert error={error} /> 
        <h2 className="font-poppins ml-4" style={headingStyle}>Now Showing</h2>
        <div>
          <section className="d-inline-flex flex-wrap px-5">{list}</section>
        </div>
      </div>
    </main>
  );
}

export default MoviesList;
