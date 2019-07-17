
const request =require('request');
var geocode=(address)=>
{
    return new Promise((resolve,reject)=>
    {
        request({
            url:`https://nominatim.openstreetmap.org/search/${encodeURIComponent(address)}?format=json&email=nk2176342@gmail.com&addressdetails=1&limit=1`,
            json:true
        },
        (error,response,body)=>
        {
            if(error)
            {
                reject(" Unable to connect to google servers.");
            }
            else if(body.length===0)
            {
                reject("Unable to find that address");
            }
            else 
            {
            resolve({
            Address:body[0].display_name,
            Latitude:body[0].lat,
            Longitude:body[0].lon
            });
            }
        });
    });
};

geocode("422003").then((result)=>{
console.log(result);
},(error)=>{
console.log(error);
}
);