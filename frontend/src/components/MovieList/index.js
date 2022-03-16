import "./index.css";
import { useState, useEffect } from "react";
import Movie from "../Movie/index";
import SearchBar from "../SearchBar/index";
import { useContextValue } from "../../context/appContext.js";
import LoadingPage from "../../components/LoadingPage/index";

const MovieList = () => {
  const { movies } = useContextValue();
  const [delayed, setDelayed] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setDelayed(false), 1000);
    return () => clearTimeout(timeout);
  }, []);

  return !delayed ? (
    <div className="MovieList">
      <SearchBar />
      {movies?.map((eachMovie) => (
        <Movie
          key={eachMovie.imdbID}
          img={eachMovie.Poster}
          imdbID={eachMovie.imdbID}
          title={eachMovie.Title}
          year={eachMovie.Year}
          type={eachMovie.Type}
        />
      ))}
    </div>
  ) : (
    <LoadingPage />
  );
};

export default MovieList;
