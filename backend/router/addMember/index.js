const expressrouter = require("express").Router();
const authcontroller = require("..//..//controller/addMember");
expressrouter
    .route("/addMember")
    .post((req, res, next) => authcontroller.addMember(req, res, next));
expressrouter
    .route("/getMember")
    .get((req, res, next) => authcontroller.getMember(req, res, next));
expressrouter
    .route("/deleteMember")
    .delete((req, res, next) => authcontroller.deleteMember(req, res, next));    
module.exports = expressrouter;