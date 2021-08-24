# Web App Dev 2: Web API Labs

Assignment 2 - Web API.

Name: Alan O Brien
Features.

    Integrated Assignment 1 React App - This is a nicer looking front end to display the movies on.
    Upcoming Movie Page - A page showing upcoming movies
    Top Rated Movies Page - A list of the top rated movies on tmdb
    Favourites Page - A page which contains favourite movies added by the user.
    Watchlist Page - Which contains movies added by the user.

Installation Requirements

Install the following , Node, NPM, MongoDB instance. Also having the desktop version of postman will help for verifying Gets and Pushes. You must have git installled on the VS code terminal also.

Here is how I installed git and was able to commit my changes to my repo.

git clone http:\myrepo.git

followed by installation

git install

API Configuration

When creating the API I had to ensure I had a .env file which stored important data which alllowed you me to access certain features such as using my tmdb api key to retrieve movies.

NODE_ENV=development
PORT=8080
HOST=
mongoDB=YourMongoURL
seedDb=true
secret=YourJWTSecret

I also had to ensure I had a git ignore as to avoid unnecessary git commits to my repo. The most important thing to add to this is to ignore node_modules as that contains many files that do not need to be updated.

API Design

General API Design:

	GET 	POST 	PUT 	DELETE
/api/movies 	Gets a list of movies 	N/A 	N/A 	 
/api/movies/{movieid} 	Get a Movie 	N/A 	N/A 	N/A
/api/movies/{movieid}/reviews 	Get all reviews for movie 	Create a new review for a movie
/api/upcoming Gets a list of Upcoming Movies
/api/nowPlaying Gets a list of Now Playing Movies
/api/topRated Gets a list of Top Rated Movies

Security and Authentication

Security and authentication is only implemented in the backend Api but not in the frontend react app. There are a list of users with a stored password and a user can sign in and access a personalised list of movies. 

My React App has 7 Pages. 4 of them are integrated with the web api. The home page, upcoming page, now playing and top rated page.

export const getMovies = () => {
  return fetch(
     '/api/movies',{headers: {
       'Authorization': window.localStorage.getItem('token')
    }
  }
  )
    .then(res => res.json())
    .then(json => {return json.results;});
};

export const getUpcomingMovies = () => {
  return fetch(
     '/api/upcoming',{headers: {
       'Authorization': window.localStorage.getItem('token')
    }
  }
  )
    .then(res => res.json())
    .then(json => {return json.results;});
};

export const getNowPlaying = () => {
  return fetch(
     '/api/nowPlaying',{headers: {
       'Authorization': window.localStorage.getItem('token')
    }
  }
  )
    .then(res => res.json())
    .then(json => {return json.results;});
};
