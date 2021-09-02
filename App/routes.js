module.exports = function (app) {
    app.get('/Hello',(req,res) => { res.send('<h1>Hello World</h1>') });
    
}