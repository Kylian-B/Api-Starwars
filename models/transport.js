const mongoose = require( 'mongoose')
const {addUri} = require('../utils/addUri')

const model = "transports"

const schema = new mongoose.Schema({
    edited: {
        type: Date,
        default: Date.now
    },
    consumables :{
        type: String
    },
    name :{
        type: String
    },
    created: {
        type: Date,
        default: Date.now
    },
    cargo_capacity :{
        type: Number
    },
    passengers :{
        type: Number
    },
    max_atmosphering_speed :{
        type: Number
    },
    crew :{
        type: Number
    },
    length :{
        type: Number
    },
    model :{
        type: String
    },
    cost_in_credits :{
        type: Number
    },
    manufacturer :{
        type: String
    },
    uri: {
        type: String
    },
})

schema.post('find', function(doc, next) {
    doc = addUri(model, doc)
    next()
})

const Transport = mongoose.model( 'Transport', schema)


module.exports = { Transport }