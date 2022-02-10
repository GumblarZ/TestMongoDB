const {validate:trueId} = require("uuid");
const Weapons = require("../models/weapons");

module.exports = {
    async getWeapon(req,res,next){
        const {id} = req.params;

        if(!trueId(id)) return res.status(400).json({message:"Invalid ID"});

        try {
           const weapon = await Weapons.findById(id); 
           res.weapon = weapon;
           
           if(!weapon) return res.status(400).json({error:"Weapon not found"});
        } catch (err) {
            res.status(500).json({error:err.message});
        }
        next();
    }
}