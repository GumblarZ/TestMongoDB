const mongoose = require("mongoose");
const link = "mongodb+srv://gumblarz:$darklaw24@cluster0.5wbt1.mongodb.net/genshinData?retryWrites=true&w=majority";
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

