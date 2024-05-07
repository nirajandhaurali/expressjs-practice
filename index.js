const express = require("express");

const app=express(); 
const bodyparser = require("body-parser");
app.use(bodyparser.urlencoded({extended:  false}));
const port = 4000;

app.get("/",(req,res)=>{     
   res.sendfile("./index.html") ; 
   
});

app.post("/api/login",(req,res)=>{        
    res.send('<h1>login success </h1>');
});

app.listen(port,()=> {
    console.log('server is created on port: 4000');


});

app.get("/about",(req,res)=>{              
    res.send("<h1>about</h1>")
})

app.get("/contact",(req,res)=>{            
    res.send("<h1>congtact</h1>")
})




app.get("/api/v1/userdata",(req,res)=>{            
    res.json(
        {
            id:"1",
            email:"nirajan@34"
        }
    );
});

app.post("/api/v1/register",(req,res)=> 
    {
    
       
        res.json({
            name:"nirajan",
            email: "nirajan@gmail.com"
        });
    }
)
