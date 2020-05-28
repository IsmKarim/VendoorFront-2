const express = require('express');
const app = express();
const path=require('path')

app.use(express.static(__dirname+'/dist/ecomm'));


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   next();
  });

  
app.listen(process.env.PORT || 4200);



app.get('/*', function(req,res){

    res.sendFile(path.join(__dirname+'/dist/ecomm/index.html'))
   
});


console.log("Marghoubi is a bitch");