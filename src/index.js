//* Requirement dependencies
const express = require("express"); //todo server asaah

//* DataBase iig export hiih
const database = require("./config/database");
// const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

//* Main server application

const app = express();

//* Main server configuration
app.use(express.json());
app.use(cors());

app.post("/user", (request, response) => {
  const { username, password } = request.body;
  database.query("SELECT * FROM user LIMIT 1", (err, result) => {
    if (err) throw err;

    _username = result[0].name;
    _password = result[0].password;

    if (username == _username && password == _password) {
      response.json({ type: "success" });
    } else {
      response.json({ type: "failed" });
    }
  });
});
// app.use(express.json());

//* Server listen on port

// app.listen(3003, () => {
//   console.log("Server listening on 3003 PORT...");
// });

const port = process.env.PORT;
app.listen(port, () => {
  console.log("Server listening on" + port);
});

// const port = process.env.PORT;
// server.listen(port, () => {
//     console.log("Server listening on " + port);
// });
