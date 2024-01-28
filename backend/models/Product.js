const { Schema, model } = require('mongoose')

const Propuct = new Schema ({
    header: {
        type: String,
        required: true
    },
    pice: {
        type: Number        
    },
    image: {
        type: String       
    }
})

module.exports = model('Propuct', Propuct)