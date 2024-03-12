const express = require("express");
const app=express();
const PORT = process.env.PORT || 3000;
import express from "express";
import dotenv from "dotenv";


dotenv.config();
app.get("/",(req,res)=>{
    res.send("Chat App")
})








app.listen(PORT, ()=> 
console.log(`Server Running on port ${PORT}`)
);

