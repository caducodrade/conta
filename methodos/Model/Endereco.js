const mongoose = require('mongoose');

const EnderecoSchema =  new mongoose.Schema({
    cep : String, 
    logradouro : String, 
    complemento : String, 
    bairro : String, 
    localidade : String, 
    uf : String, 
    ibge : Number, 
    user_id : String
});

module.exports = mongoose.model('Endereco', EnderecoSchema);