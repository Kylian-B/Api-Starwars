const mongoose = require( 'mongoose')
const {addUri} = require('../utils/addUri')

const model = "planets"

const schema = new mongoose.Schema({
    edited: {
        type: Date,
        default: Date.now
    },
    created: {
        type: Date,
        default: Date.now
    },
    climate: {
        type: String
    },
    surface_water: {
        type: String
    },
    name: {
        type: String
    },
    diameter: {
        type: String
    },
    rotation_period: {
        type: String
    },
    terrain: {
        type: String
    },
    gravity: {
        type: String
    },
    orbital_period: {
        type: String
    },
    population: {
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

const Planet = mongoose.model( 'Planet', schema)

module.exports = { Planet }