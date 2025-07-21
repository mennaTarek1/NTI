const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('./userDB');
const router = express.Router(); 
const bcrypt = require('bcrypt');
const JWT_SECRET = "mmmmmmmmmmmmmmmmm";

function jwtcreate(req, res, next) {
    const user = req.user;
    const payload = {
        id: user.id,
        username: user.username,
        email: user.email    
    };
    const token = jwt.sign(payload, JWT_SECRET);
    req.token = token;
    next(); 
}

// REGISTER 
router.post('/register', async (req, res, next) => {
    
        const { username, email, password } = req.body;
        const hashpassword = await bcrypt.hash(password, 10);
        const newuser = new User({ username, email, password: hashpassword });
        await newuser.save();

        req.user = newuser; 
        next();
    
        res.status(500).json({ error: "Something went wrong during registration." });
    
}, jwtcreate, (req, res) => {
    res.status(201).json({ message: "User created", token: req.token });
});

module.exports = router;
