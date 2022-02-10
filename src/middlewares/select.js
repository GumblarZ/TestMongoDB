const {validate:trueId} = require("uuid");
const Characteres = require("../models/characters");

module.exports = {
    async getCharactere(req, res, next){
        const {id} = req.params;

        if(!trueId(id)) return res.status(400).json({error:"Invalid ID"});

        try {
            const charactere = await Characteres.findById(id);
            res.charactere = charactere;

            if(!charactere) return res.status(400).json({error: "Charatere not found"});
        } catch (err) {
            return res.status(500).json({error: err.message});
        }
        next();
    }
}