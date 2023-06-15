const express = require("express")
const multer=require("../Multer/multer")
const Router =express.Router()
const {createProfile}=require("../Controller/controller")

Router.post ("/create",createProfile)

module.exports=Router
