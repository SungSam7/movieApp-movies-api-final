import React, { useContext } from "react";
import PageTemplate from '../components/templateMovieListPage'
import {MoviesContext} from '../contexts/moviesContext'
import AddToWatchListButton from '../components/buttons/addToWatchList'

const PopularPage = () => {
const context = useContext(MoviesContext);
const popular = context.popular.filter((m) => { // New
return !("watchlist" in m);
});

return (
<PageTemplate
    title="Popular Movies"
    movies={popular}
    action={(popular) => {
    return <AddToWatchListButton movie={popular} />;
    }}
/>
);
};

export default PopularPage;