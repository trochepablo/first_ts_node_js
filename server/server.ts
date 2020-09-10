import express = require('express');
const bodyParser = require('body-parser');
import { User } from '../entity/user';
// Create a new express app instance
const app: express.Application = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let users = Array<User>();

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.listen(3000, function () {
    console.log('App is listening on port 3000!');
});

app.post('/user', function(req, res){

    const newUser = new User(req.body.fullName, req.body.nickName, req.body.birthDate);
    users.push(newUser)

    const respuesta = {
        error: false,
        codigo: 200,
        mensaje: 'Usuario creado',
        respuesta: newUser
    };
    res.send(respuesta);
});

app.get('/user', function(req, res){
    console.log(users)
    res.send(users.find(u => u.nickName === req.body.nickName));
});

app.post('/post', function(req, res){
    const userToPost = users.find(u => u.nickName === req.body.nickName);

    if (userToPost) {
        userToPost.post(req.body.content)
    }
    
    const respuesta = {
        error: false,
        codigo: 200,
        mensaje: 'Posteo exitoso.',
        respuesta: userToPost
    };
    res.send(respuesta);
});