import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../shared/constants/URLs.js";

export const useDataApi = (param) => {
  const [movies, setMovies] = useState([]);

  const fetchInitialMovies = async () => {
    await axios
      .get(`${BASE_URL}movies`)
      .then((res) => setMovies(res.data.movies.Search))
      .catch((err) => new Error())
  };

  const fetchMovieById = async (id, fn) => {
    await axios
      .get(`${BASE_URL}movies/movie`, {
        params: {id: id}
      })
      .then((res) => fn(res.data.movie))
      .catch((err) => new Error())
  }

  useEffect(() => {
    fetchInitialMovies();
  }, []);

  return {
    movies,
    setMovies,
    fetchMovieById
  };
};
