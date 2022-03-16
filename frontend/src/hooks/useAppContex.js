import { useState } from "react";
import { useDataApi } from "./useDataApi";

export const useAppContex = () => {
  const [globalFavoriteDays] = useState([]);
  const { movies, setMovies, fetchMovieById } = useDataApi();

  return {
    globalFavoriteDays,
    movies,
    setMovies,
    fetchMovieById
  };
};
