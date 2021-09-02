const students = require('./controller/students');

module.exports = function (app) {
    app.get('/Hello',(req,res) => { res.send('<h1>Hello World</h1>') });

    app.post('/init',students.InitStudents);

    app.get('/students',students.getStudents);

    app.post('/new',students.AddStudent);

}