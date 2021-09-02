require('dotenv').config();
const bodyParser=require('body-parser');
const express = require('express');
const app = express();

/*----------mongoose---------*/
const mongoose = require('mongoose');
mongoose.connect(process.env.DB_host).connection;


/*----------body parser---------*/
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb',extended:false}));
/*----------routes---------*/
require('./App/routes')(app);

/*---------- app listening  ---------*/
let port = process.env.PORT||3000
app.listen(port,() => {  console.log('server started on port = '+port); });
/*-----------------------------------------------------------------------*/
module.exports = app;
