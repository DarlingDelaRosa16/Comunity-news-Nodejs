const model = require('../models/comunity')

exports.getDataComunity = (req, res) => {
    model.find({}, (err, docs) => {
        res.send({
            items : docs
        })
    })
}

exports.getEspesificComunity = (req, res) => {
    const id = req.params.id
    model.find({
        categoryId: id
    }, (err, docs) => {
        res.send({
            items : docs
        })
    })
}

exports.insertDataComunity = (req, res) => {
    const data = req.body
    model.create(data, (err, docs) => {
        if (err) {
            res.status(422.).send(err)
        } else {
            res.send({ data: docs})
        }
    })
}