const mongoose = require('mongoose');

const charactereShema = new mongoose.Schema({
    _id:{
        type:String,
        require: true
    },
    name:{
        type:String,
        require: true
    },
    vision:{
        type:String,
        require: true
    },
    weaponType:{
        type:String,
        require: true
    },
    stars: {
        type:Number,
        require: true
    }
});

module.exports = mongoose.model("Characteres", charactereShema);