<h1 align="center">Welcome To Movie_Searcher Take-Home Project 👋</h1>

## ✨ Demo

`Movie_searcher` is able to enter the titles of movies and find there detail information:

<p align="center">
  <img width="700" align="center" src="https://media3.giphy.com/media/Egpd6p53jxqMOgnWGI/giphy.gif?cid=790b76112b39521359cdca29066db470eb21b558d37d476f&rid=giphy.gif&ct=g" alt="demo"/>
</p>

Example of utilizing `custom hook` to fetch data:

```javascript
// The package.json is not required to run README-MD-GENERATOR
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
```

## 🚀 Installation

`git clone git@github.com:TingLiu0803/movie_searcher.git` in terminal

Go cd to the folder then `npm install` the frontend and backend separately

Enter npm start separately in `frontend` and `backend`

## Code Contributors

This is for code test, so this is completed within 48 hours by myself

## Author

👤 **Eric Liu**

- https: //www.linkedin.com/in/ting-liu-0803/
- Github: https://github.com/TingLiu0803?tab=repositories
