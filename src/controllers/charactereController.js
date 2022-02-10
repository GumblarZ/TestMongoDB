//const {response} = require("express");
//const { async } = require("regenerator-runtime");
const {v4: uuid} = require("uuid");
const Charactere = require("../models/characters");

module.exports = {
    async index(req,res){
        try{
            const characteres = await Charactere.find();
            return res.status(200).json({characteres});
        }
        catch(err){
            res.status(500).json({error: err.message});
        }
    },
    async store(req,res){
    
        const charactere = new Charactere({
            _id: uuid(),
            name: req.body.name,
            vision: req.body.vision,
            weaponType: req.body.weaponType,
            stars: req.body.stars
        })

        try{
          await charactere.save();
          return res.status(201).json({message:"Salvo com sucesso!"})  
        }catch(err){
            res.status(500).json({error: err.message});
        }
    },
    async update(req,res){
        const {name,vision,weaponType,stars} = req.body;
        if(name&&!vision&&!weaponType&&!stars) return res.status(400).json({error:"You must inform a new tittle or a link"});

        if(name) res.charactere.name = name;
        if(vision) res.charactere.vision = vision;
        if(weaponType) res.charactere.weaponType = weaponType;
        if(stars) res.charactere.stars = stars;

        try {
            await res.Charactere.save();
            return res.status(200).json({message:"Updated successfully"});
        } catch (err) {
            res.status(500).json({error:err.message});
        }
    },
    async delete(req,res){
        try {
            await res.charactere.remove();
            return res.status(200).json({message:"Charactere deleted successfully"});
        } catch (err) {
            return res.status(500).json({error:err.message});  
        }
    }
}