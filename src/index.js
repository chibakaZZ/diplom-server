//* Requirement dependencies
const express = require("express");
const database = require("./config/database");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();


const server = express();

server.use(express.json());
server.use(cors());

server.post("/user", (req, res, next) => {


    database.query("SELECT name FROM user", (err, result) => {
        if (err) throw err

        console.log(req.body.username)

        if (req.body.username === result[0].name) {
            res.send("OK")

        } else {
            res.send("KO")
        }
    });
});

//* Server listen on port
const port = process.env.PORT;
server.listen(port, () => {
    console.log("Server listening on " + port);
});