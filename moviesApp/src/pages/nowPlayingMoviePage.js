import React, { useContext } from "react";
import PageTemplate from '../components/templateMovieListPage'
import {MoviesContext} from '../contexts/moviesContext'
import AddToWatchListButton from '../components/buttons/addToWatchList'

const NowPlayingPage = () => {
const context = useContext(MoviesContext);
const nowPlaying = context.nowPlaying.filter((m) => { // New
return !("watchlist" in m);
});

return (
<PageTemplate
    title="Now Playing Movies"
    movies={nowPlaying}
    action={(nowPlaying) => {
    return <AddToWatchListButton movie={nowPlaying} />;
    }}
/>
);
};

export default NowPlayingPage;