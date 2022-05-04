import Header from "./shared/Header";
import Footer from "./shared/Footer";
import MoviesList from "./home/MoviesList";
import DetailedMoviesList from "./movies/DetailedMoviesList";
import FullMovie from "./movie/FullMovie";
import TheaterList from "./theaters/TheaterList";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="position-relative min-vh-100 d-flex flex-column justify-content-between">
        <Header />
        <Switch>
          <Route exact path="/">
            <MoviesList />
          </Route>
          <Route exact path="/movies">
            <DetailedMoviesList />
          </Route>
          <Route exact path="/movies/:movieId">
            <FullMovie />
          </Route>
          <Route exact path="/theaters">
            <TheaterList />
          </Route>
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
