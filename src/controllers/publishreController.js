const PublisherModel = require ("../models/PublishreModule")

const createPubl = async function (req, res) {
    let publ = req.body
    let publCreated = await PublisherModel.create(publ)
    res.send({data: publCreated})
}

module.exports.createPubl = createPubl