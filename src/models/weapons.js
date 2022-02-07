const mongoose = require('mongoose');

const weaponShema = new mongoose.Schema({
    _id:{
        type:String,
        require: true
    },
    name:{
        type:String,
        require: true
    },
    rarity:{
        type:Number,
        require: true
    },
    stat:{
        statType:{
            type:String,
            require: true
        },
        statValue:{
            type:Number,
            require: true
        }
    },
    passive:{
        type:String,
        require: true
    }
});

module.exports = mongoose.model("Weapons", weaponShema);