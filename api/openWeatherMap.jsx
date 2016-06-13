var axios=require("axios");

const API_KEY="your-api-key";
const WEATHER_MAP_API_URL=`http://api.openweathermap.org/data/2.5/weather?units=metric&appid=${API_KEY}`;


module.exports={
  getTemp:function(location){
   var encodedLocation=encodeURIComponent(location);
   var requestUrl=`${WEATHER_MAP_API_URL}&q=${location}`;

   return axios.get(requestUrl).then(function(res){
     if(res.data.cod && res.data.message){
       throw new Error(res.data.message);
     }else{
       return res.data.main.temp;
     }
   },function(res){
     throw new Error(res.data.message);
   });
  }
};
