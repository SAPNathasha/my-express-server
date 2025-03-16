//jshint esversion:6

const express = require("express");
const app = express();

app.get("/" , function(req , res){
    res.send("<h1>Hello World</h1>");
});


// app.get("/" , function(req,res){
//     console.log(request);
// })


// app.get("/" , function(req,res){
//     response.send("Hello");
// })
app.listen(3000 , function(){
    console.log("Server started on port 3000");
});