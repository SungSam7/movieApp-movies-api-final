import React from "react";
import ReactDOM from "react-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import HomePage from "./pages/homePage";
import MoviePage from './pages/movieDetailsPage'
import { BrowserRouter, Route, Redirect, Switch, Link } from "react-router-dom"    // CHANGED
import FavoriteMoviesPage from './pages/favoritesMoviesPage'       // NEW
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader'
import UpcomingMoviePage from "./pages/upcomingMoviePage";
import MoviesContextProvider from "./contexts/moviesContext";
import GenresContextProvider from "./contexts/genresContext";
import AddMovieReviewPage from './pages/addMovieReviewPage';
import AddToWatchListPage from './pages/addToWatchListPage';
import TopRatedMoviePage from "./pages/topRatedMoviePage";
import PopularMoviePage from "./pages/popularMoviePage";
import NowPlayingMoviePage from "./pages/nowPlayingMoviePage";


const App = () => {
  return (
    <BrowserRouter>
      <div className="jumbotron">
        <SiteHeader /> 
        <div className="container-fluid">
          <MoviesContextProvider>
            <GenresContextProvider>
          <Switch>
            <Route exact path="/reviews/form" component={AddMovieReviewPage} />
            <Route path="/reviews/:id" component={MovieReviewPage} />
            <Route path="/movies/upcoming" component={UpcomingMoviePage}/>
            <Route path="/movies/topRated" component={TopRatedMoviePage}/>
            <Route path="/movies/popular" component={PopularMoviePage}/>
            <Route path="/movies/nowPlaying" component={NowPlayingMoviePage}/>
            <Route exact path="/movies/favorites" component={FavoriteMoviesPage} />
            <Route exact path="/movies/watchlist" component={AddToWatchListPage}/>
            <Route path="/movies/:id" component={MoviePage} />
            <Route path="/" component={HomePage} />
            <Redirect from="*" to="/" />
          </Switch>
          </GenresContextProvider> 
          </MoviesContextProvider>
        </div>
      </div>
    </BrowserRouter>
    );
  };
  
  ReactDOM.render(<App />, document.getElementById("root"));