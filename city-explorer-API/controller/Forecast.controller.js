const axios = require('axios');
const WEATHER_API_KEY=process.env.WEATHER_API_KEY; 
const Forecast = require('../models/Forecast.model');

function gettingWeather(req,res){
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
module.exports = gettingWeather;
