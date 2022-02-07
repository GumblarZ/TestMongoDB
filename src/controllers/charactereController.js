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
    }
}