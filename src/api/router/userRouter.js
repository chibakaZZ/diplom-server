const express = require("express");

const roter = express.Router;
const userController = require("../controller/userController");

router.post("/login", userController.login());

router.post("/signup", userController.signup());
