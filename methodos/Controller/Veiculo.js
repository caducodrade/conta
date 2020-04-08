const Veiculo = require('../Model/Veiculo')

module.exports = {
  //Index traz todos os registros pelo methodo Get
  async index(req,res){
    //Busca todos os registross
    let veiculos = await Veiculo.find();
    return res.json(veiculos);
  },

  //show traz um registro onde o id do registro é igual ao id assado na url
  async show(req, res){
    //Busca um registro no banco
    let veiculo = await Veiculo.findOne({_id : req.params.id});
    return res.json(veiculo);
  },

  //Store usa o methodo POST para gravar
  async store(req, res){
    //passa os dados que veio do post para uma variavel
    const nome = req.body.nome; 
    const motor = req.body.motor;   
    const portas = req.body.portas;
    const cor = req.body.cor;
    const combustivel = req.body.combustivel;
    const ano_fabricacao = req.body.ano_fabricacao;
    const ano_modelo = req.body.ano_modelo;
    const placa = req.body.placa;
    //busca se ja tem algum usuario com esse email
    let veiculo = await Veiculo.findOne({placa});
    //compara se houve resultado
    if(!veiculo){
      //se nao houver resultado grava o novo usuario
      veiculo = await Veiculo.create({nome,motor,portas,cor,combustivel,ano_fabricacao,ano_modelo,placa});
    }
    return res.json(veiculo);
  },
  
  //update pega o id, busca no banco esse registro, alreta ele no controlador e manda gravar
  async update(req, res){
    //recupero o registro
    let veiculo = await Veiculo.findOne({_id : req.params.id});
    //edito os registros
    user.nome = "agile";    
    //atualiza os dados no banco
    veiculo = await User.update(veiculo);

    return res.json(veiculo);
  },

  //delete = apaga o registro de cordo com o id pasasado no parametro
  async destroy(req, res){
    let veiculo = await Veiculo.deleteOne({_id : req.params.id});
    return res.json(veiculo);
  }
};