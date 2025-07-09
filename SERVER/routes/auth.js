const router = require('express').Router();
const User = require("../models")
router.post("/login")

router.post("/register",(req,res) => {
    try{

    }catch(err){
        console.error(err);
        return res.status(500).json({ error: err.messsage })
    }
})