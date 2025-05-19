const { UPDATE } = require("sequelize/lib/query-types");
const db=require("../config/db")
const Famme=db.Famme
module.exports = {
    
    getAllFamme: function(req, res) {
        const users=Famme.findAll()
        .then(users => {
            res.send(users);
        })
        .catch(err => {
            res.status(500).send("err");
        })},
    getOneFamme: function(req, res) {
        var userid=req.params.id
        Famme.findByPk(userid)
        .then(users => {
            res.send(users);
        })
        .catch(err => {
            res.status(500).send("err");
        })


    },
    addFamme: function(req, res) {
    var add=req.body
    Famme.create(add)
    .then(users => {
        res.send(users);
    })
    .catch(err => {
        res.status(500).send("err");
    })

    },
    deliteFamme:function (req,res){
        const id = req.params.id;

        Famme.destroy({ where: { id: id } })
.then(users => {
    res.send(users);
})
.catch(err => {
    res.status(500).send("err");
})

    },

    UPDATEFamme:function(req,res){
        const id = req.params.id;

        Famme.update (req.body,{ where: { id: id } })
        .then(users => {
            res.send(users);
        })
        .catch(err => {
            res.status(500).send("err");
        })



    }

}