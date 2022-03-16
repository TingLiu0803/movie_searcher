import "./index.css";
import axios from "axios";
import { useContextValue } from "../../context/index";
import { useState, useEffect } from "react";
import { BASE_URL } from "../../shared/constants/URLs";

const SearchBar = () => {
  const [formData, setFormData] = useState("");
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
    if (formData) searchMovies();
  }, [formData]);

  return (
    <div className="search_bar">
      <input
        type="text"
        className="input"
        placeholder="Enter title of the movie : >"
        onChange={onChange}
      />
    </div>
  );
};

export default SearchBar;
