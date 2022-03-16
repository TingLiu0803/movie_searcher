import "./index.css";
import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useContextValue } from "../../context/appContext.js";
import {
  actors,
  awards,
  director,
  rating,
  released,
  runtime
} from "../../shared/constants/constantStrings";
import { altImageUrl } from "../../shared/constants/URLs";

const MovieDetail = () => {
  const history = useHistory();
  const [movie, setMovie] = useState({});
  const { fetchMovieById } = useContextValue();
  const { id } = useParams();
  const onClick = () => {
    history.push(`/`);
  };

  useEffect(() => {
    fetchMovieById(id, setMovie);
  }, []);

  return (
    <div className="MovieDetail" key={movie.imdbID}>
      <h1>{movie.Title}</h1>
      <div className="top_note">
        <h3>{`${rating} ${movie.imdbRating}`}</h3>
        <div className="detail_p_container">
          <p className="detail_p">{`${released} ${movie.Released}`}</p>
          <p className="detail_p">{`${runtime} ${movie.Runtime}`}</p>
        </div>
      </div>
      <button onClick={onClick}>
        <img
          className="movie_img"
          src={movie.Poster === "N/A" ? altImageUrl : movie.Poster}
          alt=""
        />
      </button>
      <h3>{`${director} ${movie.Director}`}</h3>
      <h3>{`${actors} ${movie.Actors}`}</h3>
      <h3>{`${awards} ${movie.Awards}`}</h3>
      <p>{movie.Plot}</p>
    </div>
  );
};

export default MovieDetail;
