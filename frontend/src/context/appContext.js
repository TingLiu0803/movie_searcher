import { createContext, useContext } from "react";
import { useAppContex } from "../hooks/useAppContex";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const {
   globalData,
   movies,
   setMovies,
   movie,
   fetchMovieById
  } = useAppContex();

  return (
    <AppContext.Provider
      value={{
        globalData,
        movies,
        setMovies,
        fetchMovieById
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useContextValue = () => useContext(AppContext);
