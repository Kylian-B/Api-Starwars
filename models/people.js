const mongoose = require( 'mongoose')
const {addUri} = require('../utils/addUri')
 
const model = "people"

const schema = new mongoose.Schema({
    edited: {
        type: Date,
        default: Date.now
    },
    name: {
        type: String
    },
    created: {
        type: Date,
        default: Date.now
    },
    gender: {
        type: String
    },
    skin_color: {
        type: String
    },
    hair_color: {
        type: String
    },
    height: {
        type: String
    },
    eye_color: {
        type: String
    },
    mass: {
        type: String
    },
    homeworld: {
        type: Number
    },
    birth_year: {
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

const People = mongoose.model( 'People', schema)


module.exports = { People }