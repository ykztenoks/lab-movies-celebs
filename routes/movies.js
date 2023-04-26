var express = require('express');
var router = express.Router();

const Celebrity = require('../models/Celebrity.model')
const Movie = require('../models/Movie.model')

router.get('/all-movies', (req, res, next) => {
    res.render('movies/movies.hbs')
})

router.get('/add-movie', (req, res, next) => {

    Celebrity.find()
        .then((celebrities) => {
            
            res.render('movies/new-movie.hbs', {celebrities})
        })
        .catch((err) => {
            console.log(err)
        })

})

module.exports = router;