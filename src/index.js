//* Requirement dependencies
const express = require("express"); //todo server asaah
const mysql = require("mysql");
// const database = require("./config/database");
// const bodyParser = require("body-parser");
// const cors = require("cors");
// require("dotenv").config();

//* Main server application

const app = express();

//* Main server configuration

app.use(express.json());

// server.use(express.json());
// server.use(cors());

// server.post("/user", (req, res, next) => {

//     database.query("SELECT name FROM user", (err, result) => {
//         if (err) throw err

//         console.log(req.body.username)

//         if (req.body.username === result[0].name) {
//             res.send("OK")

//         } else {
//             res.send("KO")
//         }
//     });
// });

//* Data base connection

const database = mysql.createConnection({
  host: "localhost",
  password: "pass1234",
  user: "root",
  database: "test",
});

database.connect((err) => {
  if (err) throw err;

  console.log("Database connected");
});

app.get("/user", (req, res) => {
  database.query("SELECT * FROM user;", (err, result) => {
    if (err) throw err;

    res.json(result);
  });
});

//* Server listen on port

app.listen(3003, () => {
  console.log("Server listening on 3003 PORT...");
});

// const port = process.env.PORT;
// server.listen(port, () => {
//     console.log("Server listening on " + port);
// });
