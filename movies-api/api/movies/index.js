import express from 'express';
import {
  getMovieReviews, getGenres
} from '../tmdb-api';
import movieModel from '..//movies/movieModel';


const router = express.Router();

router.get('/', (req, res, next) => {
  try{
  movieModel.find().then(movies => res.status(200).send(movies))}
catch(next){
  next();
}
});

  router.get('/:id', (req, res, next) => {
    const id = parseInt(req.params.id);
    movieModel.findByMovieDBId(id).then(movie => res.status(200).send(movie)).catch(next);
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