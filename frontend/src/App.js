import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AppContextProvider } from "./context/index";
import MovieList from "./components/MovieList/index.js";
import MovieDetail from "./components/MovieDetail/index.js"

const App = () => {
  return (
    <AppContextProvider>
      <Router>
        <div className="app_container">
          <Switch>
            <Route exact path="/">
              <MovieList />
            </Route>
            <Route exact path="/movie/:id">
              <MovieDetail />
            </Route>
          </Switch>
        </div>
      </Router>
    </AppContextProvider>
  );
};

export default App;
