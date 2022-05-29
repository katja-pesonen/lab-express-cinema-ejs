const express = require('express');
const Movie = require('../models/Movie.model');
const router = express.Router();

/* GET details page */


router.get("/movies/:movieId", (req, res, next) => {

  const { movieId }  = req.params;
  //console.log(req.params.movieId);

    Movie.findById(movieId)
       .then((movie) => {
        console.log(movie);
         res.render('/views/details.ejs', { title, director, stars, image, description, showtime });
       })
       .catch((err) => {console.log(err)})
     });


 module.exports = router;