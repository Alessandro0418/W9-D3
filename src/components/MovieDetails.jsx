import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

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
        console.log("DATA ricevuti", data);
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

  if (!movie) return <p>Loading...</p>;

  return (
    <div>
      <h2>{movie.Title}</h2>
      <p>Year: {movie.Year}</p>
      <p>Type: {movie.Type}</p>
      <img src={movie.Poster} alt={movie.Title} />
    </div>
  );
};

export default MovieDetails;
