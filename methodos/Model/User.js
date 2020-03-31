const mongoose = require('mongoose');

const userSchema = new.mongoose.Schema({
    nome: String,
    email: String,
    senha: String,
    idade: Number,
    status: Boolean
});

module.export = mongoose.model('User', UserSchema);