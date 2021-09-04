const model = require('../models/user')

exports.getDataUser = async (req, res) => {
    const data = req.body
    const user = await model.findOne({
        userName: data.userName,
        password: data.password
    })
    if(!user){res.send("Error in User")}
    else{ res.send({user})}
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
