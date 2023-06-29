const mongoose = require( 'mongoose')
const {addUri} = require('../utils/addUri')

const model = "films"

const schema = new mongoose.Schema( {
    starships: {
        type: Array
    },
    created: {
        type: Date,
        default: Date.now
    },
    edited: {
        type: Date,
        default: Date.now
    },
    vehicles: {
        type: Array
    },
    
    planets: {
        type: Array
    },
    producer: {
        type: String
    },
    title: {
        type: String
    },
  
    episode_id: {
        type: Number
    },
    director: {
        type: String
    },
    release_date: {
        type: String
    },
    opening_crawl: {
        type: String
    },
    characters: {
        type: Array
    },
    species: {
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

const Film = mongoose.model( 'Film', schema)

module.exports = { Film }