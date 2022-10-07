const express = require("express");
const bodyParser = require("body-parser");
const app = express()

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.sendFile(__dirname+"/index.html")
});

app.get("/bmi", function(req, res){
    res.sendFile(__dirname+"/bmi.html")
});

app.post("/", function(req, res){
    var result = parseFloat(req.body.num1) + parseFloat(req.body.num2)
    res.send("result: " + result)
})

app.post("/bmi", function(req, res){
    var result = Number(req.body.weight)/Math.pow(Number(req.body.height),2)
    res.send("result: " + result)
})

app.listen(3000, function(){
    console.log("server listening on port 3000")
})