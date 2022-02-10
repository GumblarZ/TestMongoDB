const mongoose = require("mongoose");
const link = "";
function connectToDatabase(){
    mongoose.connect(link,{
        useNewUrlParser: true,
        useUnifiedTopology:true
    });

    const db = mongoose.connection;

    db.on("error", (error)=>{
        console.error(error);
    });

    db.once("open", ()=>{
        console.log("Connected to the database!");
    });
}

module.exports = connectToDatabase;

