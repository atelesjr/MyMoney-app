const _ = require('lodash')
//referencia padrão

//midleware express (request, response, next
// node restful traz os erros
module.exports = (req, res, next) => {
    const bundle = res.locals.bundle

    if(bundle.errors) {
        const errors = parseErrors(bundle.errors) //array com as strings de erros
        res.status(500).json({errors}) //objeto erros é criado
    } else {
        next()
    }
}

//Converte para array de mensagens
const parseErrors = (nodeRestfulErrors) => {
    const errors = []
    _.forIn(nodeRestfulErrors, error => errors.push(error.message))
    return errors
}