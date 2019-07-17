console.log("Starting weather App");

const yargs=require("yargs");
const geocode=require("./geocode/geocode");
const weather=require("./weather/weather");

var arg=yargs
.options({
    address:{
        demand:true,
        string:true,
        describe:'Enter the Address whose weather you want',
        alias:'a'
    }
})
.help()
.alias('help','h')
.argv;


geocode.geocodeadd(arg.address,(error,results)=>{
    if(error)
    {
        console.log(error);
    }
    else
    {
        console.log(JSON.stringify(results,undefined,2));
        console.log("_____________________________________________________________________");
        console.log("Weather Details:");
        console.log("_____________________________________________________________________");
        weather.getWeather(results.Latitude,results.Longitude,(weather)=>
        {
            console.log(JSON.stringify(weather,undefined,2));
        });
    }
});

