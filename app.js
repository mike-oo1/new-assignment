const express = require("express")
const app =express()
app.use(express.json())
app.use("/api",route)
const route =require("./Router/route")
const config =require("./Config/config")


module.exports= app