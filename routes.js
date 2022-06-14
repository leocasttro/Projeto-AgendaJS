const express = require('express');
const route = express.Router();

const homeController = require('./src/controllers/homeController')  //importando o que tem no home controller
const loginController = require('./src/controllers/loginController')
const contatoController = require('./src/controllers/contatoController')

const { loginRequired } = require('./src/middleware/middlewares');


//rotas da home
route.get('/', homeController.index); //Passa a referencia da função

//rotas de login
route.get('/login', loginController.index); //o /index pode ser ocultado 
route.post('/login/register', loginController.register);
route.post('/login/login', loginController.login);
route.get('/login/logout', loginController.logout);

//rotas de contato
route.get('/contato', loginRequired, contatoController.index);
route.post('/contato/register', loginRequired, contatoController.register);
route.get('/contato/:id', loginRequired, contatoController.editIndex);
route.post('/contato/edit/:id', loginRequired, contatoController.edit);
route.get('/contato/delete/:id', loginRequired, contatoController.delete);

module.exports = route;