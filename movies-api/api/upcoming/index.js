import express from 'express';
import {
 getMovieReviews, getGenres
} from '../tmdb-api';
import upcomingMovieModel from './upcomingMovieModel';
import userModel from '..//users/userModel';

const router = express.Router();

router.get('/', (req, res, next) => {
  try{
    upcomingMovieModel.find().then(upcoming => res.status(200).send(upcoming))}
catch(next){
  next();
}
});

router.get('/:id', (req, res, next) => {
  const id = parseInt(req.params.id);
 upcomingMovieModel.findByMovieDBId(id).then(movie => res.status(200).send(movie)).catch(next);
  });

router.get('/:id/reviews', (req, res, next) => {
    const id = parseInt(req.params.id);
    getMovieReviews(id)
    .then(reviews => res.status(200).send(reviews))
    .catch((error) => next(error));
  });

  router.get('/:id/genres', (req, res, next) => {
    const id = parseInt(req.params.id);
    getGenres()
    .then(genres => res.status(200).send(genres))
    .catch((error) => next(error));
  });

export default router;