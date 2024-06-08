const mysql = require("mysql");
const express = require("express");
const bodyParser = require("body-parser");
const encoder = bodyParser.urlencoded();

var path= require('path');

const app = express();
app.use(express.static(path.join(__dirname,'/assets')));
app.use(express.static(path.join(__dirname,'/public')));

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "login" 

});
connection.connect(function(error){
    if(error) throw error
    else console.log("connected to the database succesfully")
});


app.get("/",function(req,res){
    res.sendFile(__dirname + "/index.html");
})

app.post("/",encoder,function(req,res){
    var username=req.body.username;
    var password=req.body.password;

    connection.query("select * from login.signin where email = ? and password = ?",[username,password],function(error,results,fields){
        if(results.length > 0){
            res.redirect("/index");
        }else{
            res.redirect("wrong password");

        }
        res.end();
    })
})

app.post("/1",encoder,function(req,res){
    var username1=req.body.username1;
    var password1=req.body.password1;
    const sql = "INSERT INTO `login`.`signin` ( `email`, `password`) VALUES (?, ?)";

    connection.query(sql,[username1,password1],function(error,results,fields){
        if(error){
            res.redirect("wrong wrong");
        }else{
            res.redirect("/index");

        }
        res.end();
    })
})

app.get("/register.html",function(req,res){
    res.sendFile(__dirname + "/register.html");
})
app.get("/login.html",function(req,res){
    res.sendFile(__dirname + "/login.html");
})
app.get("/about1.html",function(req,res){
    res.sendFile(__dirname + "/about1.html");
})
app.get("/in.html",function(req,res){
    res.sendFile(__dirname + "/in.html")
})


app.get("/index",function(req,res){
    res.sendFile(__dirname + "/index.html")
})





if (typeof window !== 'undefined'){
    
var coll = document.getElementsByClassName("collapsible");

for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("active");

        var content = this.nextElementSibling;

        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }

    });
}

function getTime() {
    let today = new Date();
    hours = today.getHours();
    minutes = today.getMinutes();

    if (hours < 10) {
        hours = "0" + hours;
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    let time = hours + ":" + minutes;
    return time;
}

// Gets the first message
function firstBotMessage() {
    let firstMessage = "How can I help you?"
    document.getElementById("botStarterMessage").innerHTML = '<p class="botText"><span>' + firstMessage + '</span></p>';

    let time = getTime();

    $("#chat-timestamp").append(time);
    document.getElementById("userInput").scrollIntoView(false);
}

firstBotMessage();

// Retrieves the response
function getHardResponse(userText) {
    let botResponse = getBotResponse(userText);
    let botHtml = '<p class="botText"><span>' + botResponse + '</span></p>';
    $("#chatbox").append(botHtml);

    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

//Gets the text text from the input box and processes it
function getResponse() {
    let userText = $("#textInput").val();

    if (userText == "") {
        userText = "I want help";
    }

    let userHtml = '<p class="userText"><span>' + userText + '</span></p>';

    $("#textInput").val("");
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    setTimeout(() => {
        getHardResponse(userText);
    }, 1000)

}

// Handles sending text via button clicks
function buttonSendText(sampleText) {
    let userHtml = '<p class="userText"><span>' + sampleText + '</span></p>';

    $("#textInput").val("");
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    //Uncomment this if you want the bot to respond to this buttonSendText event
    // setTimeout(() => {
    //     getHardResponse(sampleText);
    // }, 1000)
}

function sendButton() {
    getResponse();
}

function heartButton() {
    buttonSendText("Heart clicked!")
}

// Press enter to send a message
$("#textInput").keypress(function (e) {
    if (e.which == 13) {
        getResponse();
    }
});

}

























app.listen(3000);