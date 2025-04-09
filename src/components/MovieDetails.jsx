import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const API = `https://www.omdbapi.com/?i=${movieId}&apikey=6d0fc472`;

    fetch(API)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Errore nella fetch");
        }
      })
      .then((data) => {
        console.log("DATA", data);
        if (data.Response === "True") {
          setMovie(data);
        } else {
          throw new Error("Film non trovato");
        }
      })
      .catch((err) => {
        console.error("Errore:", err);
      });
  }, [movieId]);

  if (!movie)
    return (
      <div className="text-center bg-dark">
        <Spinner animation="border" variant="primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );

  return (
    <div>
      <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 row-cols-xl-6 g-2 bg-dark pt-4 ps-4 pe-4 justify-content-center">
        <div className="col text-center px-1" key={movie.imdbID}>
          <div className="details-container">
            <h2 className="text-white">{movie.Title}</h2>
            <p className="text-white">{movie.Runtime}</p>
            <img className="img-fluid" src={movie.Poster} alt={movie.Title} />
            <h3 className="text-white pt-3">{movie.Year}</h3>
            <h4 className="text-white">{movie.Genre}</h4>
            <h5 className="text-white">{movie.Director}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
