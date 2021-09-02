const mongoose = require('mongoose'),types=mongoose.Schema.Types;

/*-----  Students Schema  --- */
const MySchema = mongoose.Schema({
    id:{type:Number},
    firstName:{type:String},
    lastName:{type:String},
    age:{type:Number},
    nationality:{type:String},
},{timestamps: true});

const ItemModule = module.exports = mongoose.model("students",MySchema);
