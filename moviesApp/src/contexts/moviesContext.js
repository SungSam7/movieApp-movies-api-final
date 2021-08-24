import React, { useEffect, createContext, useReducer } from "react";
import { getMovies, getUpcomingMovies, getTopRatedMovies, getPopularMovies,getNowPlayingMovies, } from "../api/tmdb-api";

export const MoviesContext = createContext(null);

const reducer = (state, action) => {
  switch (action.type) {
    case "add-favorite":
      return {
        movies: state.movies.map((m) =>
          m.id === action.payload.movie.id ? { ...m, favorite: true } : m
        ),

        upcoming: [...state.upcoming], popular:[...state.popular], nowPlaying:[...state.nowPlaying], topRated:[...state.topRated],
      };
      case "add-watchlist":
      return {
        upcoming: state.upcoming.map((m) =>
          m.id === action.payload.movie.id ? { ...m, watchlist: true } : m
        ),
      //  nowPlaying: state.nowPlaying.map((m)=>
       // m.id === action.payload.movie.id ? {...m, watchlist: true} : m
       // ),

      //  popular: state.popular.map((m) =>
      //  m.id === action.payload.movie.id ? { ...m, watchlist: true } : m
     // ),

        movies: [...state.movies], topRated:[...state.topRated], nowPlaying:[...state.nowPlaying], popular:[...state.popular],
      };
    case "load":
      return { movies: action.payload.movies, upcoming: [...state.upcoming], topRated:[...state.topRated], popular:[...state.popular],nowPlaying:[...state.nowPlaying] };
    case "load-upcoming":
      return { upcoming: action.payload.movies, movies: [...state.movies], topRated:[...state.topRated],popular:[...state.popular],nowPlaying:[...state.nowPlaying] };
    case "load-topRated":
      return { topRated: action.payload.movies, movies: [...state.movies] , upcoming: [...state.upcoming], popular:[...state.popular],nowPlaying:[...state.nowPlaying] };
    case "load-popular":
      return { popular: action.payload.movies, movies: [...state.movies] , upcoming: [...state.upcoming], topRated:[...state.topRated], nowPlaying:[...state.nowPlaying] };
    case "load-nowPlaying":
      return { nowPlaying: action.payload.movies, movies: [...state.movies] , upcoming: [...state.upcoming], topRated:[...state.topRated], popular:[...state.popular] };
    case "add-review":
      return {
          movies: state.movies.map((m) =>
            m.id === action.payload.movie.id
              ? { ...m, review: action.payload.review }
              : m
          ),
          upcoming: [...state.upcoming], topRated: [...state.topRated], popular:[...state.popular], nowPlaying:[...state.popular],
        };
    default:
      return state;
  }
};

const MoviesContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, { movies: [], upcoming: [], topRated: [], popular:[], nowPlaying:[] });

  const addToFavorites = (movieId) => {
    const index = state.movies.map((m) => m.id).indexOf(movieId);
    dispatch({ type: "add-favorite", payload: { movie: state.movies[index] } });
   // const index2 = state.topRated.map((m) => m.id).indexOf(movieId);
   // dispatch({ type: "add-favorite", payload: { movie: state.topRated[index2] } });
  };

  const addToWatchList = (movieId) => {
    const index = state.upcoming.map((m) => m.id).indexOf(movieId);
    dispatch({ type: "add-watchlist", payload: { movie: state.upcoming[index] } });
    //const inde = state.nowPlaying.map((w) => w.id).indexOf(movieId);
   // dispatch({ type: "add-watchlist", payload: { movie: state.nowPlaying[inde], } });
  };

  const addReview = (movie, review) => {
    dispatch({ type: "add-review", payload: { movie, review } });
  };

  useEffect(() => {
    getMovies().then((movies) => {
      dispatch({ type: "load", payload: { movies } });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getUpcomingMovies().then((movies) => {
      dispatch({ type: "load-upcoming", payload: { movies } });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getTopRatedMovies().then((movies) => {
      dispatch({ type: "load-topRated", payload: { movies } });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getPopularMovies().then((movies) => {
      dispatch({ type: "load-popular", payload: { movies } });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getNowPlayingMovies().then((movies) => {
      dispatch({ type: "load-nowPlaying", payload: { movies } });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <MoviesContext.Provider
      value={{
        movies: state.movies,
        upcoming: state.upcoming,
        topRated: state.topRated,
        popular: state.popular,
        nowPlaying: state.nowPlaying,
        addToWatchList: addToWatchList,
        addToFavorites: addToFavorites,
        addReview: addReview,
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;