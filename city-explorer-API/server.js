'use strict';
const express =require ('express');
const app =express();
const weatherData=require('./data/weather.json');
const cors=require('cors');
require('dotenv').config();
const PORT = process.env.PORT;
app.use(cors());
app.get('/',(req,res)=>{
    res.send('hello');
});
//---1

app.get('/weather',(req,res)=>{

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
}
/*app.get('/error',(req,res)=>{
    res.status(500).send('sorry :we dont have this city');});*/

//---2
app.listen(PORT,()=>{console.log(`server start on ${PORT}`);})

