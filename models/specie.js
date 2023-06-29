const mongoose = require( 'mongoose')
const {addUri} = require('../utils/addUri')

const model = "species"

const schema = new mongoose.Schema({
    edited: {
        type: String
    },
    classification: {
        type: String
    },
    name: {
        type: String
    },
    designation: {
        type: String
    },
    created: {
        type: String
    },
    eye_colors: {
        type: String
    },
    
    people: {
        type: Array
    },
    skin_colors: {
        type: String
    },
    language: {
        type: String
    },
    hair_colors: {
        type: String
    },
    homeworld: {
        type: String
    },
    average_lifespan: {
        type: String
    },
    average_height: {
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

const Specie = mongoose.model( 'Specie', schema)


module.exports = { Specie }