const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
require("dotenv").config({path: ".env"});


const app = express();

app.use(express.static(__dirname + '/public/'));

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req,res){
    res.sendFile(__dirname + "/signup.html");
});

app.post("/", function(req,res){
    console.log(req.body);

    var data = {
        members: {
            email_address: req.body.email,
            status: "subscribed",
            merge_fields: {
                FNAME: req.body.fName,
                LNAME: req.body.lName
            }
        }
    }

    var jsonData = JSON.stringify(data);
})

app.listen(3000, function(){
    console.log("server listening on port 3000");
})
