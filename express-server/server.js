const express = require("express");
const app = express();


app.get("/", function(req, res){
    res.send("BRuH")
});
app.get("/contact", function(req, res){
    res.send("narendiran.work@gmail.com")
});
app.get("/about", function(req, res){
    res.send("Narendiran Arthanarieswaran")
});

app.listen(3000, function (){
    console.log("Server listening on port 3000");
});