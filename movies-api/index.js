import dotenv from 'dotenv';
import express from 'express';
import moviesRouter from './api/movies';
import upcomingRouter from './api/upcoming';
import nowPlayingRouter from './api/nowPlaying';
import topRatedRouter from './api/topRated';
import bodyParser from 'body-parser';
import './db';
import {loadUsers, loadMovies, loadUpcoming, loadNowPlaying, loadTopRated} from './seedData';
import usersRouter from './api/users';
import session from 'express-session';

import passport from './authenticate';

dotenv.config();

const app = express();

 /* if the error in development then send stack trace to display whole error,
  if it's in production then just send error message  */

const errHandler = (err, req, res,) => {
 
  if(process.env.NODE_ENV === 'production') {
    return res.status(500).send(`Something went wrong!`);
  }
 
};

if (process.env.SEED_DB) {
  loadUsers();
  loadMovies();
  loadUpcoming();
  loadNowPlaying();
  loadTopRated();
}



const port = process.env.PORT;

app.use(session({
  secret: 'ilikecake',
  resave: true,
  saveUninitialized: true
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use(express.static('public'));



app.use(passport.initialize());
app.use('/api/users', usersRouter);

app.use('/api/movies', moviesRouter);

app.use('/api/upcoming', upcomingRouter);

app.use('/api/nowPlaying', nowPlayingRouter);

app.use('./api/topRated',topRatedRouter);

app.use(errHandler);

app.listen(port, () => {
  console.info(`Server running at ${port}`);
});


