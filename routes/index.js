const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.model');


/* GET home (index) page */

router.get('/', (req, res, next) => res.render('index'));


/* GET movies page */

router.get('/movies', (req, res, next) => {
    Movie.find()
    .then (movies => {
        console.log(movies);
        res.render('movies', {movies});
    })
    .catch(error => {console.log(error)})
});
 

/* GET movie details page (via the id number) */

router.get("/movies/:movieId", (req, res, next) => {

   const { movieId }  = req.params;
   console.log('movie id:', movieId);
 
     Movie.findById(movieId)
        .then((movie) => {
         console.log(movie);
          res.render('details', { movie });
        })
        .catch((err) => {console.log(err)})
      });
   


module.exports = router;
