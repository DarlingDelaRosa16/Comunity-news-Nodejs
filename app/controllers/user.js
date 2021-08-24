const model = require('../models/user')

exports.getDataUser = (req, res) => {
    const data = req.body
    model.findOne({
        userName: data.userName,
        password: data.password
    }, (err, docs) => {
        if (err) {
            res.status(422.).send(err)
        } else {
            res.send({ items : docs})
        }
    })
}

exports.insertDataUser = (req, res) => {
    const data = req.body
    model.create(data, (err, docs) => {
        if (err) {
            res.status(422.).send(err)
        } else {
            res.send({ data: docs})
        }
    })
}
