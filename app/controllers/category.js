const model = require('../models/category')

exports.getDataofApp = (req, res)=>{
    res.send({
        data: "The aplication is working "
    })
}
exports.getDataCategory = (req, res) => {
    model.find({}, (err, docs) => {
        res.send({
            items : docs
        })
    })
}

exports.insertDataCategory = (req, res) => {
    const data = req.body
    model.create(data, (err, docs) => {
        if (err) {
            res.status(422.).send(err)
        } else {
            res.send({ data: docs})
        }
    })
}