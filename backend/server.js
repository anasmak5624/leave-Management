// -- Add employee
// -- remove employee
// -- Add Leave
// -- login employee
'use strict';
const express = require('express')
const Userroutes = require('./router/user')
//const leaveroutes= require('./router/leave')
const addMemberRoutes = require('./router/addMember');
var app = express();
var mysql = require('mysql');
var bodyParser = require("body-parser");
var jsonParser = bodyParser.json()
require("dotenv").config();
var urlencodedParser = bodyParser.urlencoded({ extended: false })
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Anas@272001',
  database: 'leave_management'
});

connection.connect();
global.db = connection;
if (connection) { // mysql is started && connected successfully.
  console.log('Connection Success');
} else {
  console.log('Cant connect to db, Check ur db connection');
}
app.use("/", jsonParser, Userroutes);
app.use("/admin", jsonParser, addMemberRoutes);
app.listen(8000, () => {
  console.log("Leave Management")
});



