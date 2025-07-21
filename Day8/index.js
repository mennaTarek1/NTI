const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({path:'./config.env'});
const postroute = require('./postroute')
const post = require('./postDB');
const jwt = require('jsonwebtoken');


mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("database is here");
}).catch((err)=>{
    console.log("Error",err)

});
app.use(express.json());
app.use ("/posts",postroute);
const port = process.env.PORT||8000;
app.listen(port,'127.0.0.1',()=>{
    console.log("server running now ");
});


///user
///admin
// get/admin/dashboard  
// user/Profiler
// user/update/post/id
// jwt::: json web token // passport
// header: enq:hs256
//         type:jwt
//         Payload: userid
//         email
//         role
//         secretkey: "//////////////////////"
//         token "fdsopghadsohgwpohg[ewhg[pewhg[ewhg[pewh[ghew[hg[0wqhg=0 whg"
//         Signature 








