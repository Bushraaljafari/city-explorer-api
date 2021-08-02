'use strict';
const express =require ('express');
const app =express();
const weatherData=require('./data/weather.json');
const cors=require('cors');
require('dotenv').config();
const PORT = process.env.PORT;
app.use(cors());
//---1
app.get('/weather',(req,res)=>{
    const reqCity=req.query.cityName;
    const availableCityData=weatherData.find(element=>{
          if(reqCity.toLowerCase()===element.city_name.toLowerCase()){
              return element;
          }
          res.status(500).send('sorry :we dont have this city')  
      }  
    );
//---4
    const chosenCity=availableCityData.data.map(element=>{
        return new Forecast(element);
    }
        );
        //----5
        res.send(chosenCity);
       


})
//---3
class Forecast{
    constructor(item){
        this.description= item.weather.description;
        this.date=item.valid_date;
        this.temp=item.temp;
        this.low_temp=item.low_temp;
        this.max_temp=item.max_temp;

    }
}
/*app.get('/error',(req,res)=>{
    res.status(500).send('sorry :we dont have this city')
}
)*/
//---2
app.listen(PORT,()=>{console.log(`server start on ${PORT}`);})

