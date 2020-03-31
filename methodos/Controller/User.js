//insert, show, store, update, destroy

module.exports = {
    index(req, res){
        return res.json({
            idade : req.query.idade,
            sexo  : req.query.sexo,
            email : req.query.email,
            status: req.query.status,
            idade: req.query.idade,
        });
    },
    show(req, res){
        return res.json({ id: req.params.id });
    },
    store(req, res){
        return res.Json({mensagem : "gravar"});
    },
    update(req, res){
        return res.json({
            id   : req.params.id,
            body : req.params.body
        });
    },
    destroy(req, res){
        return res.json({ id : req.params.id });
    }
};