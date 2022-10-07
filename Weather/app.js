const express = require("express");
const https  = require("https");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}))

app.get("/", function(req,res){
    res.sendFile(__dirname+"/index.html");
});


app.post("/",function(req,res){
    
    const query = req.body.cityName;
    const appid = "8f80137a9757a57db31a15ba86fd735c";
    const units = "metric";
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=" + appid + "&units=" + units; 

    https.get(url , function(response){
        response.on("data",function(data){
            const weatherData = JSON.parse(data);
            const temp = weatherData.main.temp;
            const description = weatherData.weather[0].description;
            const icon = weatherData.weather[0].icon;
            res.write("<h1>The Weather in " + query + " is currently " + description + "</h1>"); 
            res.write("<h1>The temperature in " + query + " is " + temp +"</h1>");
            res.write("<img src='http://openweathermap.org/img/wn/"+icon+"@2x.png'/>");
            res.send();
        })
            
        
        });
});



app.listen(3000,function(){
    console.log("Server Listening on port 3000")
})