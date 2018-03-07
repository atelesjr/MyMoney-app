const mongoose = require('mongoose')
mongoose.Promise = global.Promise

module.exports = mongoose.connect('mongodb://localhost/mymoney',
    { useMongoClient: true }
)

// 
mongoose.Error.messages.general.required = "O atributo '{Path}' é obrigatório."
mongoose.Error.messages.Number.min = 
    "O '{VALUE}' informado é o menor que o limite mínimo de '{MIN}'."
mongoose.Error.messages.Number.max = 
    "O '{VALUE}' informado é o menor que o limite máximo de '{MAX}'."
mongoose.Error.messages.Number.max = "'{VALUE}' não é válido para o atributo '{PATH}'."

