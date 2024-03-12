const express = require("express");
const app=express();



app.get("/",(req,res)=>{
    res.send("Chat App")
})








app.listen(3000, ()=> 
console.log("Server Running on port 3000")
);

