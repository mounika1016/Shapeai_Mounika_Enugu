const { response } = require("express");
const express= require("express");
const bodyParser=require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.get("/",function(req,res)
{
    res.sendFile(__dirname+"/index.html");
});

app.post("/",function(req,res)
{    
    var n1=Number(req.body.num1);
    var n2=Number(req.body.num2);
    var result=n1+n2;
     res.send("<h1>This is answer</h1>= " + result);   
});


app.listen(3700,function()
{
    console.log("Server started on 3700 port");
});