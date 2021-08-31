const model = require('../models/category')

exports.getDataofApp = (req, res)=>{
    res.send({
        data: "__dirname + category, comunity, news, user"
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