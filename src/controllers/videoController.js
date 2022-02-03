const {response} = require("express");
const {v4: uuid} = require("uuid");
const Video = require("../models/video");

module.exports = {
    async index(request, response){
        try {
            const videos = await Video.find();
            return response.status(200).json({videos})
        }catch(err){
            response.status(500).json({ error: err.message});
        }
    },
    async store(request, response){
        const {title, link } = request.body;

        if(!title || !link){
            return response.status(400).json({ error: "Missing title or link."});
        }

        const video = new Video({
            _id: uuid(),
            title,
            link,
            liked: false
        })
        try{
            await video.save();
            return response.status(201).json({message: "video salvo"});
        }catch(err){
            response.status(400).json({ error: err.message});
        }
    }
}