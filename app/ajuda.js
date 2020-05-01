const restful = require('node-restful')
const mongoose = restful.mongoose

const ajudaSchema = new mongoose.Schema({
    nome: {type: String, required: true},
    contato: {type: String, required: true},
    cidade: {type: String, required: true},
    logradouro: {type: String, required: false},
    descricao: {type: String, required: true},
})

module.exports = restful.model('Ajuda',ajudaSchema)