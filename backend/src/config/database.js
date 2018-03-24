const mongoose = require('mongoose')
// pega api de promise do node referenciando globalmente a todos módulos 
//Promise será descontinuado
mongoose.Promise = global.Promise


module.exports = mongoose.connect('mongodb://localhost/mymoney',
    { useMongoClient: true }
)

// Para substiuir a mensage de erro em portuguès
// PATH = variável nome do atributo
mongoose.Error.messages.general.required = 
    "O atributo '{PATH}' é obrigatório."
mongoose.Error.messages.Number.min = 
    "O '{VALUE}' informado é menor que o limite mínimo de '{MIN}'."
mongoose.Error.messages.Number.max = 
    "O '{VALUE}' informado é maior que o limite máximo de '{MAX}'."
mongoose.Error.messages.String.enum = 
    "'{VALUE}' não é válido para o atributo '{PATH}'."
//enum - vando um valor está fora da do range.

