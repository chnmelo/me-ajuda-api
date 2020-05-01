const restful = require('node-restful')
const mongoose = restful.mongoose

const ajudoSchema = new mongoose.Schema({
    nome: {type: String, required: true},
    contato: {type: String, required: true},
    como: {type: String, required: true},
    ajuda_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Ajuda'
    },
})

module.exports = restful.model('Ajudo',ajudoSchema)