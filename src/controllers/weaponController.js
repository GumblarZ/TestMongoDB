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
            type:req.body.type,
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
    },
    async update(req,res){
        const {name,type,rarity,stat,passive} = req.body;
        if(!name&&!type&&!rarity&&!stat&&!passive) return res.status(400).json({error:"You must inform a new tittle or a link"});

        if(name) res.weapon.name = name;
        if(type) res.weapon.type = type;
        if(rarity) res.weapon.rarity = rarity;
        if(stat) res.weapon.stat = stat;
        if(passive) res.weapon.passive = passsive;

        try {
            await res.weapon.save();
            return res.status(200).json({message:"Updated successfully"});
        } catch (err) {
            res.status(500).json({error:err.message});
        }
    },
    async delete(req,res){
       try {
        await res.weapon.remove();
        return res.status(200).json({message:"Weapon deleted successfully"});
       } catch (err) {
            return res.status(500).json({error:err.message});
       } 
    }
}