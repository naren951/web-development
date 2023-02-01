const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");
const config = require("dotenv").config({ path: ".env" });

const app = express();
app.use(express.static(__dirname + '/public/'));

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/signup.html");
});

app.post("/", function (req, res) {
    console.log(req.body);

    var data = {
        members: [{
            email_address: req.body.email,
            status: "subscribed",
            merge_fields: {
                FNAME: req.body.fName,
                LNAME: req.body.lName
            }
        }]
    }

    var jsonData = JSON.stringify(data);
    const url = `https://us13.api.mailchimp.com/3.0/lists/${config.parsed.LIST_ID}/`
    console.log(url)
    const options = {
        method: "POST",
        auth: `name:${config.parsed.API_KEY}1`
    }
    const request = https.request(url, options, function (response) {
        console.log(response.statusCode)
        if (response.statusCode === 200) {
            res.sendFile(__dirname + "/success.html");
        }
        else {
            res.sendFile(__dirname + "/failure.html")
        }
        response.on("data", (data) => {
            console.log(JSON.parse(data));
        })
    })
    request.write(jsonData)
    request.end()
})

app.post("/failure", function (req, res) {
    res.redirect("/")
})

app.listen(process.env.PORT || 3000, function () {
    console.log("server listening on port 3000");
})
