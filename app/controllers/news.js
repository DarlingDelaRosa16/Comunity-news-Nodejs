const { mongoose} = require('mongoose')
const model = require('../models/news')

const options = {
    page : 1,
    limit: 10
}

const parseId = (id) => {
    return mongoose.type.ObjectId(id)
}

exports.getDataNewsComunity = (req, res) => {
    const id = req.params.id
    model.paginate({
        comunityId: id
    }, options, (err, docs) => {
        res.send({
            items : docs
        })
    })
}

exports.getDataNewsCategory = (req, res) => {
    const id = req.params.id
    model.paginate({
        categoryId: id
    }, options, (err, docs) => {
        res.send({
            items : docs
        })
    })
}

exports.getDetailsNews = (req, res) => {
    const id = req.params.id
    model.findOne({
        _id: id
    }, (err, docs) => {
        res.send({
            items : docs
        })
    })
}

exports.insertDataNews = (req, res) => {
    const data = req.body
    model.create(data, (err, docs) => {
        if (err) {
            res.status(422.).send(err)
        } else {
            res.send({ data: docs})
        }
    })
}
