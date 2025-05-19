const db=require("../config/db")
const Homme=db.Homme
module.exports = {
    
    getAllHomme: function(req, res) {
        const users=Homme.findAll()
        .then(users => {
            res.send(users);
        })
        .catch(err => {
            res.status(500).send("err");
        })},
    getOneHomme: function(req, res) {
        var userid=req.params.id
        Homme.findByPk(userid)
        .then(users => {
            res.send(users);
        })
        .catch(err => {
            res.status(500).send("err");
        })


    },
    addHomme: function(req, res) {
    var add=req.body
    Homme.create(add)
    .then(users => {
        res.send(users);
    })
    .catch(err => {
        res.status(500).send("err");
    })

    },
    deliteHomme:function (req,res){
        const id = req.params.id;

        Homme.destroy({ where: { id: id } })
.then(users => {
    res.send(users);
})
.catch(err => {
    res.status(500).send("err");
})

    },

    UPDATEHomme:function(req,res){
        const id = req.params.id;

        Hommeomme.update (req.body,{ where: { id: id } })
        .then(users => {
            res.send(users);
        })
        .catch(err => {
            res.status(500).send("err");
        })



    }

}