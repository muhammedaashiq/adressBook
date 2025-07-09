const router = require('express').Router();
const bcrypt = require('bcrypt')


const User = require("../models")


router.post("/login")

router.post("/register", async (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password)
        return res
            .status(400)
            .json({ error: 'please enter all the required field.' })

    const emailReg = '/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/';

    if (name.length >= 25)
        return res
            .status(400)
            .json({ error: "name can only be less than 25 characters." })


    if (!emailReg.test(email))
        return res
            .status(400)
            .json({ error: 'Please enter a valid email address' })


    if (password.length <= 6)
        return res
            .status(400)
            .json({ error: "password must be atleaset 6 characters." })

    try {

        const hashedPassword = await bcrypt.hash(password, 12)
        const newUser = new User({ name, email, password: hashedPassword })

        const result = await newUser.save()

        return res.status(201).json({...result._doc})
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: err.messsage })
    }
})