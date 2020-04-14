const request=require('request');
const argv=require('yargs').argv;

let apiKey='1058c919506765813282e02501a4dc0f';
let city = argv.c|| 'portland';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`


request(url,function(err,response,body){
    if(err){
        console.log('error:',error);
    }
    else {
        let weather=JSON.parse(body)
        let message=`it's ${weather.main.temp} degree centigrade in ${weather.name}.`;
        console.log(message);
        // console.log('body:',body);
    }
});


