const express = require("express");


const routes = require("./routes");
const connectToDatabase = require("./database");

connectToDatabase();
const app = express();
const port = 3333;

app.use(express.json());
app.use(routes);

app.listen(port, ()=>{
    console.log(`backend started at http://localhost:${port}`);
});

