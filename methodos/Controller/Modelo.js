const Modelo = require('../Model/Modelo')

module.exports = {
  //Index traz todos os registros pelo methodo Get
  async index(req,res){
    //Busca todos os registross
    let modelos = await Modelo.find();
    return res.json(modelos);
  },

  //show traz um registro onde o id do registro é igual ao id assado na url
  async show(req, res){
    //Busca um registro no banco
    let modelo = await Modelo.findOne({_id : req.params.id});
    return res.json(modelo);
  },

  //Store usa o methodo POST para gravar
  async store(req, res){
    //passa os dados que veio do post para uma variavel
    const nome = req.body.nome;    
    //busca se ja tem algum usuaro com esse email
    let modelo = await Modelo.findOne({nome});
    //compara se houve resultado
    if(!modelo){
      //se nao houver resultado grava o novo usuario
      modelo = await Modelo.create({nome});
    }
    return res.json(modelo);
  },
  
  //update pega o id, busca no banco esse registro, alreta ele no controlador e manda gravar
  async update(req, res){
    //recupero o registro
    let modelo = await Modelo.findOne({_id : req.params.id});
    //edito os registros
    user.nome = "corolla";    
    //atualiza os dados no banco
    modelo = await User.update(modelo);

    return res.json(modelo);
  },

  //delete = apaga o registro de cordo com o id pasasado no parametro
  async destroy(req, res){
    let modelo = await Modelo.deleteOne({_id : req.params.id});
    return res.json(modelo);
  }
};