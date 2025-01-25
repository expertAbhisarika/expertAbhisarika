const Route = require('express').Router();
const Controller = require('../controllers/controllers');
Route.post('/user', Controller.createUser);
Route.get('/user',Controller.getUsers);
module.exports = Route;