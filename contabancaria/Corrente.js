var conta = require('./Conta.js');
var corrente = require('./Corrente.js');

var Corrente = function(){
    this.limite = 500;
    this.taxa = 2; 
    this.dataAtual = new Date();
    this.dataCobra = new Date('2020-10-10');
}

Corrente.prototype.VerificaLimite = function(saque){
    if(saque <= this.limite + this.saldo){
        this.saque(saque);
        if(this.saldo < 0){

        }
    }else{
        console.log('ultrapassou o limite de '+ this.limite + 'reais');
    }
}

Corrente.prototype.CalculaJuros = function(){
    if(this.saldo < 0 && this.dataAtual.getDay() == this.dataCobra.getDay()){        
        this.saldo -= this.saldo * (this.taxa/100);;
    }
}

Corrente.prototype = new conta();

Corrente.prototype.contructor = Corrente;

function Corrente(){
    conta.call(this);
}