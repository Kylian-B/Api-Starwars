const mongoose = require( 'mongoose')
const {addUri} = require('../utils/addUri')

const model = "vehicles"

const schema = new mongoose.Schema({
    vehicle_class: {
        type: String
    },
    pilots: {
        type: Array
    },
    uri: {
        type: String
    },
})


schema.post('find', function(doc, next) {
    doc = addUri(model, doc)
    next()
})

const Vehicle = mongoose.model( 'Vehicle', schema)

module.exports = { Vehicle }