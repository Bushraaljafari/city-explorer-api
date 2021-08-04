class Forecast{
    constructor(item){
        this.description= `"low of  ${item.min_temp} , high of ${item.max_temp} with ${item.weather.description}"`;
        this.date=item.datetime;
    }}


module.exports = Forecast;