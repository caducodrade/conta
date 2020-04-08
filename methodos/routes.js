const express = require('express');
const routes = express.Router();
const UserController = require('./Controller/User')
const ModeloController = require('./Controller/Modelo')
const MarcaController = require('./Controller/Marca')
const VeiculoController = require('./Controller/Veiculo')

//Index =Listagem 
//Show = Visualizar os dados gravados
//Store = Gravar
//Destroy = Delete
//este exemplo é o mesmo da segundo exemplo só que simpificado
//app.get('/', (req, res) => res.send('Hello World!'));

//este exemplo completo de uma reuqisição simples
routes.get('/',function(req, res){
    res.send("Hello word");
})

//Get => Buscar info -- Select para listagem de infos
//req.query = acessar a query ou params (filtros)
//localhost:3000/?idade=37&sexo=M
routes.get('/users', UserController.index);
routes.get('/modelos', ModeloController.index);
routes.get('/marcas', MarcaController.index);
routes.get('/veiculos', VeiculoController.index);

//este exemplo de get onde traz um usuario com base no id passado
routes.get('/users/:id', UserController.show);
routes.get('/modelos/:id', ModeloController.show);
routes.get('/marcas/:id', MarcaController.show);
routes.get('/veiculos/:id', VeiculoController.show);

//Methodo POST // Create -- Gravação
//Formulario de login e senha  por exemplo
// vai enviar o login e a senha no corpo da requisição
routes.post('/users', UserController.store);
routes.post('/modelos', ModeloController.store);
routes.post('/marcas', MarcaController.store);
routes.post('/veiculos', VeiculoController.store);

//Mehodo PUT é usado para fazer o update para atualizar os dados do banco de dados
// localhost:3000/users/5
routes.put('/users/:id', UserController.update);
routes.put('/modelos/:id', ModeloController.update);
routes.put('/marcas/:id', MarcaController.update);
routes.put('/veiculos/:id', VeiculoController.update);

//Methodo Delete - Serve para deletar um registro
routes.delete('/users/:id',UserController.destroy);
routes.delete('/modelos/:id',ModeloController.destroy);
routes.delete('/marcas/:id',MarcaController.destroy);
routes.delete('/veiculos/:id',VeiculoController.destroy);

module.exports = routes;