import userModel from '../api/users/userModel';
import movieModel from '../api/movies/movieModel';
import upcomingMovieModel from '../api/upcoming/upcomingMovieModel';
import nowPlayingMovieModel from '../api/nowPlaying/nowPlayingMovieModel';
import topRatedMovieModel from '../api/topRated/topRatedMovieModel';
import {movies} from './movies.js';
import {upcomingMovies} from './upcoming.js';
import {nowPlayingMovies} from './nowPlaying.js';
import {topRatedMovies} from './topRated.js';

const users = [
  {
    'username': 'user1',
    'password': 'test1',
  },
  {
    'username': 'user2',
    'password': 'test2',
  },
];

// deletes all user documents in collection and inserts test data
export async function loadUsers() {
  console.log('load user Data');
    try {
      await userModel.deleteMany();
      await users.forEach(user => userModel.create(user));
      console.info(`${users.length} users were successfully stored.`);
    } catch (err) {
      console.error(`failed to Load user Data: ${err}`);
    }
  }

  export async function loadUpcoming() {
    console.log('load seed data');
    console.log(upcomingMovies.length);
    try {
      await upcomingMovieModel.deleteMany();
      await upcomingMovieModel.collection.insertMany(upcomingMovies);
      console.info(`${upcomingMovies.length} Movies were successfully stored.`);
    } catch (err) {
      console.error(`failed to Load movie Data: ${err}`);
    }
  }

  export async function loadNowPlaying() {
    console.log('load seed data');
    console.log(nowPlayingMovies.length);
    try {
      await nowPlayingMovieModel.deleteMany();
      await nowPlayingMovieModel.collection.insertMany(nowPlayingMovies);
      console.info(`${nowPlayingMovies.length} Movies were successfully stored.`);
    } catch (err) {
      console.error(`failed to Load movie Data: ${err}`);
    }
  }

  export async function loadTopRated() {
    console.log('load seed data');
    console.log(topRatedMovies.length);
    try {
      await topRatedMovieModel.deleteMany();
      await topRatedMovieModel.collection.insertMany(topRatedMovies);
      console.info(`${topRatedMovies.length} Movies were successfully stored.`);
    } catch (err) {
      console.error(`failed to Load movie Data: ${err}`);
    }
  }


export async function loadMovies() {
  console.log('load seed data');
  console.log(movies.length);
  try {
    await movieModel.deleteMany();
    await movieModel.collection.insertMany(movies);
    console.info(`${movies.length} Movies were successfully stored.`);
  } catch (err) {
    console.error(`failed to Load movie Data: ${err}`);
  }
 // deletes all movies documents in collection and inserts test data
}