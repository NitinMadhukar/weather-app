const express=require('express');
const bodyParser=require('body-parser');
const request=require('request');
const app=express();

const apiKey='1058c919506765813282e02501a4dc0f';


app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended:true}));

app.set('view engine','ejs');


app.get('/',function(req,res){
    res.render('index',{weather:null,error:null});
});

app.post('/',function(req,res){
    let city = req.body.city;   
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}` 
    
    request(url,function(err,response,body){
        if(err){
            res.render('index',{weather:null, error:'Error,please try again'});
        }
        else{
            let weather=JSON.parse(body);
            if(weather.main==undefined){
                res.render('index',{weather:null, error:'Error,please try again'});
            }
            else{
                let weatherT=`Its ${weather.main.temp} degree centigrade in ${weather.name}`;
                res.render('index',{weather:weatherT,error:null});
            }
        }
    });
    
});

app.listen(3000,function(){
    console.log('server is on port 3000!!');
});

