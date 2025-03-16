//jshint esversion:6

const express = require("express");
const app = express();

app.get("/" , function(req , res){
    res.send("<h1>Hello World</h1>");
});

app.get("/contact" , function(req , res){
    res.send("<p>Contact me : 0772334571");
});

app.get("/about" , function(req,res){
    res.send("I'm Prabhavi Nathasha. I am an IT undergraduate at university of Moratuwa. I love coding.")
});

app.get("/hobbies" , function(req, res){
    res.send("<ul><li>Drawing pictures</li>, <li>Singing</li>, <li>Gardening</li>");
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