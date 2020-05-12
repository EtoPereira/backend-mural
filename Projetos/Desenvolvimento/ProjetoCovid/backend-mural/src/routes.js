const express = require('express');

const TurmasController = require('./controllers/turmas.controller');
const PerfilController = require('./controllers/perfil.controller');
const PublicacoesController = require('./controllers/publicacoes.controller');
const SessionController = require('./controllers/session.controller')

const ProfessorController = require('./controllers/professores.controller');

const routes = express.Router();

routes.post('/sessions', SessionController.create);

routes.get('/turmas', TurmasController.index);
routes.post('/turmas', TurmasController.create);

routes.get('/professores', ProfessorController.index);
routes.post('/professores', ProfessorController.create);

routes.get('/perfil', PerfilController.index);


routes.get('/publicacoes', PublicacoesController.index );
routes.post('/publicacoes', PublicacoesController.create );




module.exports = routes;

