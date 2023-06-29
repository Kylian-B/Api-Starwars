const mongoose = require( 'mongoose')
const {addUri} = require('../utils/addUri')

const model = "straships"

const schema = new mongoose.Schema({
    pilots: {
        type: Array
    },
    MGLT: {
        type: String
    },
    starship_class: {
        type: String
    },
    hyperdrive_rating: {
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

const Starship = mongoose.model( 'Starship', schema)


module.exports = { Starship }