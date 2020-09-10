"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var bodyParser = require('body-parser');
var user_1 = require("../entity/user");
// Create a new express app instance
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
var users = Array();
app.get('/', function (req, res) {
    res.send('Hello World!');
});
app.listen(3000, function () {
    console.log('App is listening on port 3000!');
});
app.post('/user', function (req, res) {
    var newUser = new user_1.User(req.body.fullName, req.body.nickName, req.body.birthDate);
    users.push(newUser);
    var respuesta = {
        error: false,
        codigo: 200,
        mensaje: 'Usuario creado',
        respuesta: newUser
    };
    res.send(respuesta);
});
app.get('/user', function (req, res) {
    console.log(users);
    res.send(users.find(function (u) { return u.nickName === req.body.nickName; }));
});
app.post('/post', function (req, res) {
    var userToPost = users.find(function (u) { return u.nickName === req.body.nickName; });
    if (userToPost) {
        userToPost.post(req.body.content);
    }
    var respuesta = {
        error: false,
        codigo: 200,
        mensaje: 'Posteo exitoso.',
        respuesta: userToPost
    };
    res.send(respuesta);
});
