import "./index.css";
import Movie from "../Movie/index";
import SearchBar from "../SearchBar/index";
import { useContextValue } from "../../context/appContext.js";

const MovieList = () => {
  const { movies } = useContextValue();

  return (
    <div className="MovieList">
      <SearchBar />
      {movies
        ? movies?.map((eachMovie) => (
            <Movie
              key={eachMovie.imdbID}
              img={eachMovie.Poster}
              imdbID={eachMovie.imdbID}
              title={eachMovie.Title}
              year={eachMovie.Year}
              type={eachMovie.Type}
            />
          ))
        : ""}
    </div>
  );
};

export default MovieList;
