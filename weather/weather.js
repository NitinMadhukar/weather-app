const request= require("request");

var getWeather=(lat, lng, callback)=>{
    request({
        url:`https://api.darksky.net/forecast/aa56cba5f635dbf5f6cbb7b90bff1bcc/${lat},${lng}`,
        json:true
    }, (error, response, body)=>{
        callback(body.currently);
    });
};
module.exports={
    getWeather:getWeather
};