import "./index.css";
import axios from "axios";
import { useContextValue } from "../../context/index";
import { useState, useEffect } from "react";
import { BASE_URL } from "../../shared/constants/URLs";
import { title } from "../../shared/constants/constantStrings";
import LoadingPage from "../../components/LoadingPage/index";

const SearchBar = () => {
  const [formData, setFormData] = useState("");
  const [delayed, setDelayed] = useState(true);
  const { setMovies } = useContextValue();

  const onChange = ({ target }) => {
    setFormData(target.value);
  };

  const searchMovies = async () => {
    await axios
      .get(`${BASE_URL}movies/search`, {
        params: { searchTerm: formData }
      })
      .then((res) => {
        let result = res.data.search.Search
        if (result) {
          setMovies(res.data.search.Search);
        }
      })
      .catch((err) => new Error());
  };

  useEffect(() => {
    const timeout = setTimeout(() => setDelayed(false), 400);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (formData) searchMovies();
  }, [formData]);

  return !delayed ? (
    <div className="search_bar">
      <h1 className="title">{title}</h1>
      <input
        type="text"
        className="input"
        placeholder="Enter title of the movie : >"
        onChange={onChange}
      />
    </div>
  ) : "";
};

export default SearchBar;
