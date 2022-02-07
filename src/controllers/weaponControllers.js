const {v4: uuid} = require("uuid");
const Weapon = require("../models/weapons");

module.exports = {
    async index(req,res){
        try{
            const weapons = await Weapon.find();
            return res.status(200).json({weapons});
        }
        catch(err){
            res.status(500).json({error: err.message});
        }
    },
    async store(req,res){
    
        const weapon = new Weapon({
            _id: uuid(),
            name:req.body.name,
            rarity:req.body.rarity,
            stat:{
                statType:req.body.stat.statType,
                statValue:req.body.stat.statValue
            },
            passive:req.body.passive
        })

        try{
          await weapon.save();
          return res.status(201).json({message:"Salvo com sucesso!"})  
        }catch(err){
            res.status(500).json({error: err.message});
        }
    }
}