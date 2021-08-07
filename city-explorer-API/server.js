'use strict';
const express =require ('express');
const app =express();
//const weatherData=require('./data/weather.json');
//const axios = require('axios');
const cors=require('cors');
require('dotenv').config();
const PORT = process.env.PORT;
//const WEATHER_API_KEY=process.env.WEATHER_API_KEY; 
//const MOVIE_API_KEY=process.env.MOVIE_API_KEY;
app.use(cors());


app.get('/',(req,res)=>{
    res.send('hello');
});
//---1

/*app.get('/weather',(req,res)=>{

    try{
    const {searchQuery,lat,lon}=req.query;//disstracturing assigment---to assign value in obj
   // const reqCity=req.query.cityName;
    const availableCityData=weatherData.find(element=>{
     if  (element.city_name.toLowerCase() ===searchQuery.toLowerCase()||(`${element.lat}`===lat
       &&`${element.lon}`===lon)){
           return element;
       }
        
    } 
    );
//---4
    const chosenCity=availableCityData.data.map(value=>{
        return new Forecast(value);
    }
        );
        //----5
        res.send(chosenCity);}
        catch(e){
        res.status(500).send('sorry :we dont have this city');
    }

});
//---3
class Forecast{
    constructor(item){
        this.description= `${item.weather.description}`;
        this.date=item.valid_date;
        this.temp=item.temp;
        this.low_temp=item.low_temp;
        this.max_temp=item.max_temp;

    }
}*/
//******************** */
const gettingWeather = require('./controller/Forecast.controller');
const gettingMovies = require('./controller/Movies.controller');


app.get('/weather',gettingWeather)
app.get('/movies',gettingMovies)
//--------
/*function gettingWeather(req,res){
    let {lat,lon}=req.query;
    let weathUrlReq=`https://api.weatherbit.io/v2.0/forecast/daily?key=${WEATHER_API_KEY}&lat=${lat}&lon=${lon}`
     //await
      axios.get(weathUrlReq)
     .then(results=>{
        let value=results.data.data[0];
       // console.log('result.data.data',value);
        let weatherData=new Forecast(value);
        res.send(weatherData);

    })
    .catch(err=>{
        res.status(500).send(`we have error on getting adata ${err}`)
    })
}

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

     






class Forecast{
    constructor(item){
        this.description= `"low of  ${item.min_temp} , high of ${item.max_temp} with ${item.weather.description}"`;
        this.date=item.datetime;
    }}


    class Movies {
        constructor(item){
            this.title=item.original_title;
            this.overview=item.overview;
            this.votes=item.vote_count
            // iam not sure about img 
            this.img=item.poster_path;
            this.popularity=item.popularity;
           
            this.released_on=item.release_date;
        }
    }
*/

//---2
/////----------???????????
app.listen(PORT,()=>{console.log(`server start on ${PORT}`);})

////////