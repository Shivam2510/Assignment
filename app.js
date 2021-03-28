const express = require('express');
const https = require('https');
const bodyParser = require('body-Parser');

const app = express();
app.use(bodyParser.urlencoded({extented:true}));

app.get("/", function(req,res){

  res.sendFile(__dirname + "/index.html");


})

const request = require('request');

const  test = function (roll,callback) {
    request({ url: "https://terriblytinytales.com/testapi?rollnumber=" + roll }, (error, response, body) => {
            callback(roll,body)
    })
}

const arr = [1,2,3,4,5,5,6,6,7,8,8,12,23,43]
arr.forEach((roll)=>{
    test(roll,(roll,body)=>{
        console.log(roll+ " -> "+body)
    })
})



app.listen(3000, function(){
  console.log("Server is running on port 3000");
})
