const expressrouter = require("express").Router();
const authcontroller = require("..//..//controller/user");
expressrouter
    .route("/signup")
    .post((req, res, next) => authcontroller.signup(req, res, next));
expressrouter
    .route("/login")
    .get((req, res, next) => authcontroller.login(req, res, next));

module.exports = expressrouter;