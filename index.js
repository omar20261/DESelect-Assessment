require('dotenv').config()
const express = require('express');
const app = express();

app.get('/',(req,res) => { res.send('<h1>Hello World</h1>') });



/*---------- app listening  ---------*/
let port = process.env.PORT||3000
app.listen(port,() => {  console.log('server started on port = '+port); });
/*-----------------------------------------------------------------------*/
module.exports = app;
