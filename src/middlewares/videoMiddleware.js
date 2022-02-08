const {validade: isUuid} = require("uuid");
const video = require("../models/video");
const { validate } = require("../models/video");
const Video = require("../models/video");

module.exports ={
    async validateId(request, response, next){
        const {id} = request.params;

        if(!isUuid(id)){
            return response.status(400).json({error : "Invalid ID."});
        }
        try {
            const video = await Video.findById(id);
            response.video = video;
            if(!video){
                return response.status(404).json({ error: "Video not found."});
            }
        } catch (error) {
            return response.status(500).json({ error : error.message});
        }
        next();
    }
}