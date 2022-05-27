const express = require('express');
const Movie = require('../models/Movie.model');
const router = express.Router();

/* GET home page */

router.get('/', (req, res, next) => {
    Movie.find()
    .then (movies => {
        console.log(movies);
        res.render('movies', {movies});
    })
    .catch(error => {console.log(error)})
});


module.exports = router;