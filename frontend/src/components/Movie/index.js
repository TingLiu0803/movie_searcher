import "./index.css";
import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useContextValue } from "../../context/appContext.js";
import { yearString } from "../../shared/constants/constantStrings";
import { altImageUrl } from "../../shared/constants/URLs";

const Movie = ({ img, imdbID, title, year, type }) => {
  const history = useHistory();
  const [setMovie] = useState({});
  const { fetchMovieById } = useContextValue();
  const { id } = useParams();
  const onClick = () => {
    history.push(`/movie/${imdbID}`);
  };

  useEffect(() => {
    fetchMovieById(id, setMovie);
  }, []);

  return (
    <div className="Movie" key={imdbID}>
      <h2>{title}</h2>
      <h3>{`${yearString} ${year}`}</h3>
      <button onClick={onClick}>
        <img 
          className="movie_img"
          src={img === "N/A" ? altImageUrl : img} 
          alt=""
        />
      </button>
    </div>
  );
};

export default Movie;
