const Students = require('../models/students');
let StudentsArray = [
    {id:1,firstName:'John',lastName:'Doe',age:24,nationality:'English'},
    {id:2,firstName:'Jan',lastName:'Dewaele',age:27,nationality:'Belgian'},
    {id:3,firstName:'Jonathan',lastName:'Van Driessen',age:33,nationality:'Belgian'},
    {id:4,firstName:'Anthony',lastName:'Lamot',age:30,nationality:'Belgian'},
    {id:5,firstName:'Tim',lastName:'Ferris',age:36,nationality:'American'},
    {id:6,firstName:'Melinda',lastName:'Gates',age:63,nationality:'American'},
    {id:7,firstName:'Jan',lastName:'De Hollande',age:13,nationality:'Dutch'},
    {id:8,firstName:'Maarten',lastName:'De Vriendt',age:47,nationality:'Dutch'},
    {id:9,firstName:'Furkan',lastName:'Kursun',age:23,nationality:'Turkish'},
]

/*================== ( Init Students ) ====================*/
exports.InitStudents = (req,res)=>{
    Students.insertMany(StudentsArray,{},(err,doc)=>{
        if(err){return res.json({Error: err});}
        res.json({message:'you have initiated successfully'})
    })
}

/*================== ( Add new Student ) ====================*/
exports.AddStudent = (req,res)=>{
    let {id, firstName,lastName, age, nationality} = req.body;
    let newItem = new Students({id,firstName,lastName,age,nationality});
    newItem.save((err,doc)=>{
        if(err){return res.json({Error: err});}
        res.json({message:'you have added a new student successfully',student: doc})
    })
}

/*================== ( get Students ) ====================*/
exports.getStudents = (req,res)=>{
    Students.find({},(err,docs)=>{
        if(err){return res.json({Error: err});}
        res.json(docs)
    });
}
