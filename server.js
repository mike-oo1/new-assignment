const express = require("express")
const mongoose =require("mongoose")
const config = require("./Config/config.js")
const route=require("./Router/route.js")
const app =express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))


mongoose
.connect("mongodb://127.0.0.1/ProfileAssignment")
.then(()=>{
    console.log("connected to database")
}).then(()=>{
    app.listen(( 6700),()=>{
        console.log("server is running on port")
    })
})
.catch((error)=>{
    console.log(error.message)

})