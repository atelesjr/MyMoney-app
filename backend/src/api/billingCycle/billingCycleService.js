const BillingCycle = require('./billingCycle')
const errorHandler = require('../common/errorHandler')

//API Restful

 //método do HTTP
BillingCycle.methods(['get', 'post', 'put', 'delete'])
// na atualização retorna o novo objeto e não o antigo.
BillingCycle.updateOptions({new: true, runValidators: true})
BillingCycle.after('post', errorHandler).after('put', errorHandler)

//Configuração de rotas---------------------------
//Retorna quantidade de registros da tabela do mongo.
BillingCycle.route('count', (req, res, next) => {
    BillingCycle.count((error, value)=> {
        if(error){
            /*dá resposta status 500 e parse para json 
            com objeto com atributo errors que recebe array de erros */
            res.status(500).json({ errors: [error] })
        } else {
            //retorna o atributo com a quantidade de registros
            res.json({value}) 
        }
    })
})

// sumário do ciclo de pagamentos
BillingCycle.route('summary', (req, res, next) => {
    // função aggregate que usa operadores do Mongo
    BillingCycle.aggregate(
        //$project  tira campos que nao interessa, extrai determinados atributos do objeto
        { $project: { 
            credit:  { $sum: "$credits.value"}, 
            debt: { $sum: "$debts.value" }
        }}, 
        //agroupa - GroupBy
        { $group: { 
            _id: null, 
            credit: { $sum: "$credit"}, debt: {$sum: "$debt"} 
        }},
        // id = falso, aparecer apenas crédito e débito 1= true
        { $project: { _id: 0, credit: 1, debt: 1 } }, (error, result) => {
            if(error) {
                res.status(500).json( { errors: [error] } )
            } else {
            //se caso resultado for nulto, credito 0 e debt 00
            res.json( result[0] || { credit: 0, debt: 0 } )
            }
        }
    )
})

module.exports = BillingCycle