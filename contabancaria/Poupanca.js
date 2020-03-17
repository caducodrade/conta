var Conta = require('./Conta.js');
var Poupanca = require('./Poupanca.js');

var Poupanca = function(){
    this.aniversario = new Date('2020-03-11');
    this.rendimento = 0.50;
    this.dataAtual = new Date()
}

Poupanca.prototype.Rende = function(){
    if(this.aniversario.getDay() ==  this.dataAtual.getDay()){
        return this.saldo = this.saldo + (this.saldo * this.rendimento)/100;
    }
}   

//Define a classe Poupança
function Poupanca(){
    Conta.call(this);
}

//Herda a classe Conta
Poupanca.prototype = new Conta();

//correige o ponteiro construto, para apontar para a poupanca
Poupanca.prototype.constructor = Poupanca;

module.exports  = Poupanca;