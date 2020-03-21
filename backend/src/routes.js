const {
    Router
} = require('express');
const routes = Router();
const DevController = require('./controllers/DevControllers')
const SearchController = require('./controllers/SearchController')

routes.get('/devs',DevController.index);
routes.post('/devs',DevController.store);
routes.get('/search',SearchController.index);

module.exports = routes; //exportando para usar em outros arquivos js
//da aplicação