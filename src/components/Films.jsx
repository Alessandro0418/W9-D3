import { Component } from "react";
import { Link } from "react-router-dom";

const API1 = "https://www.omdbapi.com/?s=Avengers&apikey=6d0fc472";
const API2 =
  "https://www.omdbapi.com/?s=The%20Lord%20Of%20Rings&apikey=6d0fc472";
const API3 = "https://www.omdbapi.com/?s=Disney&apikey=6d0fc472";

class Films extends Component {
  state = {
    avengersFilms: [],
    lordOfTheRingsFilms: [],
    disney: [],
  };

  getFilms = () => {
    fetch(API1)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("FILM NON RECUPERATI");
        }
      })
      .then((data) => {
        console.log("DATA", data);
        this.setState({
          avengersFilms: data.Search,
        });
      })
      .catch((err) => {
        console.log(err);
      });

    fetch(API2)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("FILM NON RECUPERATI");
        }
      })
      .then((data) => {
        this.setState({
          lordOfTheRingsFilms: data.Search,
        });
      })
      .catch((err) => {
        console.log(err);
      });

    fetch(API3)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("FILM NON RECUPERATI");
        }
      })
      .then((data) => {
        this.setState({
          disney: data.Search,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  componentDidMount = () => {
    this.getFilms();
  };

  render() {
    const { avengersFilms, lordOfTheRingsFilms, disney } = this.state;

    return (
      <div>
        {/* Avengers */}
        {avengersFilms.length > 0 ? (
          <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 row-cols-xl-6 g-2 bg-dark pt-4 ps-4 pe-4">
            {avengersFilms.slice(0, 6).map((film) => (
              <div className="col text-center px-1" key={film.imdbID}>
                <div className="film-container">
                  <img
                    className="img-fluid"
                    src={film.Poster}
                    alt={film.Title}
                  />
                  <div className="film-title">{film.Title}</div>
                  <Link
                    className="btn btn-primary"
                    to={`/movie-details/${film.imdbID}`}
                  ></Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-white">Caricamento in corso...</p>
        )}

        <h4 className="bg-dark text-white ps-4 pt-4 m-0">
          The Lord Of The Rings
        </h4>

        {/* LORD OF THE RINGS */}
        {lordOfTheRingsFilms.length > 0 ? (
          <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 row-cols-xl-6 g-2 bg-dark pt-4 ps-4 pe-4">
            {lordOfTheRingsFilms.slice(0, 6).map((film) => (
              <div className="col text-center px-1" key={film.imdbID}>
                <div className="film-container">
                  <img
                    className="img-fluid"
                    src={film.Poster}
                    alt={film.Title}
                  />
                  <div className="film-title">{film.Title}</div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-white">
            Caricamento in corso... Lord of the Rings
          </p>
        )}

        <h4 className="bg-dark text-white ps-4 pt-4 m-0">Disney</h4>

        {/* Disney */}
        {disney.length > 0 ? (
          <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 row-cols-xl-6 g-2 bg-dark pt-4 ps-4 pe-4">
            {disney.slice(0, 6).map((film) => (
              <div className="col text-center px-1" key={film.imdbID}>
                <div className="film-container">
                  <img
                    className="img-fluid"
                    src={film.Poster}
                    alt={film.Title}
                    style={{
                      objectFit: "cover",
                      height: "100%",
                      borderRadius: "8px",
                    }}
                  />
                  <div className="film-title">{film.Title}</div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-white">
            Caricamento in corso... Lord of the Rings
          </p>
        )}
      </div>
    );
  }
}

export default Films;
