const express = require('express');//Importanto o módulo express
const mongoose = require('mongoose');//Importado por causa do Banco de dados
const routes =  require('./routes');//importanto do arquico routes.js

const app = express(); 
mongoose.connect('mongodb+srv://omnistack:s4LCanUQnnLSaJ@cluster0-wszo2.mongodb.net/week10?retryWrites=true&w=majority',{
    useNewUrlParser: true, 
    useUnifiedTopology: true,
});
 
/* métodos http : GET; POST; PUT; DELETE */
app.use(express.json());//cadastrando o tipo json para o express
app.use(routes);//Todas as rotas da aplicação estão cadastradas no express
/*TIPOS DE PARÂMETROS:

Query params: request.query(filtros, ordenação, paginação, ...) - usa no método get
Route params: request.params (Identificar um recurso na alteração ou remoção) - Usa no método put ou delete
body: request.body (Dados para criação ou alteração de um registro)
*/


app.listen(3000);//configurando a porta local.