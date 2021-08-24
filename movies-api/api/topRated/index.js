import express from 'express';
import {
 getMovieReviews, getGenres
} from '../tmdb-api';
import topRatedMovieModel from './topRatedMovieModel';
import userModel from '..//users/userModel';

const router = express.Router();

router.get('/', (req, res, next) => {
  try{
    topRatedMovieModel.find().then(topRated => res.status(200).send(topRated))}
catch(next){
  next();
}
});

router.get('/:id', (req, res, next) => {
  const id = parseInt(req.params.id);
 topRatedMovieModel.findByMovieDBId(id).then(movie => res.status(200).send(movie)).catch(next);
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