const axios = require('axios');

const MOVIE_API_KEY=process.env.MOVIE_API_KEY;
const Movies = require('../models/Movies.model');



function gettingMovies(req,res){
    let reqMovies=req.query
    let moviesulr=`https://api.themoviedb.org/3/search/movie?api_key=${MOVIE_API_KEY}&query=${reqMovies}`
   // await 
   axios.get(moviesulr)
    .then(results=>{
        let value=results.data.data[0];
        let movies=new Movies (value);;
        res.send(movies);
    })
    .catch(err=>{
        res.status(500).send(` we have error on getting adata ${err}`)
    })
}

module.exports = gettingMovies;