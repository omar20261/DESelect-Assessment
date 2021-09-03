require('dotenv').config();
const bodyParser=require('body-parser');
const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

/* ---------------- cors  ----------------*/
app.use(cors());
/*----------mongoose---------*/
const mongoose = require('mongoose');
mongoose.connect(process.env.DB_host).connection;
/*----------body parser---------*/
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb',extended:false}));
/*----------routes---------*/
require('./App/routes')(app);
/*---------- fn ---------*/
app.use(express.static(path.join(__dirname,'public')));
app.get('*',(req,res) => { res.sendFile(path.join(__dirname,'public/index.html')) });
/*---------- app listening  ---------*/
let port = process.env.PORT||3000
app.listen(port,() => {  console.log('server started on port = '+port); });
/*-----------------------------------------------------------------------*/
module.exports = app;
