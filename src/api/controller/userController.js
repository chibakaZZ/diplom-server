//* Requirement dependencies
const express = require("express");
const cors = require("cors");
const database = require("./config/database");
const bcrypt = require("bcrypt");
const { v4: uuid } = require("uuid");
const errorHandling = require("./helper/errorHandling");
const generatePassword = require("./helper/password");
const { request, response } = require("express");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors());

app.post("/signin", (request, response, next) => {
  const { username, password } = request.body;

  database.query(
    `SELECT * FROM registration WHERE name = '${username}' LIMIT 1`,
    async (err, result) => {
      if (err) {
        next(err);

        return;
      }

      if (result.length != 0 && result != null) {
        _username = result[0].name;
        _password = result[0].password;

        const login = await bcrypt.compare(password, _password);

        if (username == _username && password == _password) {
          response.json({ type: "success" });
        } else {
          response.json({ type: "failed" });
        }
      } else {
        response.json({ type: "user not found" });
      }
    }
  );
});

app.post("/signup", async (request, response, next) => {});

module.exports = signup = async(request, response, next);
