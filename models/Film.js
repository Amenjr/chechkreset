const mongoose = require('mongoose');


const FilmSchema = new mongoose.Schema({
    titre:{type:String,required:true},
    desc:String,
    photo:String,
    trailer:String,
    
    rate:Number
})
module.exports=mongoose.model('movie',FilmSchema);