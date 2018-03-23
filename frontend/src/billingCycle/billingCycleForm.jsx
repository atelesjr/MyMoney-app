import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import LabelAndInput from '../common/form/labelAndInput'

class BillingCycleForm extends Component {
    
    render() {
        const { handleSubmit } = this.props
        return (
            <form role='form' onSubmit={handleSubmit}>
                <div className='box-body'>
                    <Field name='name' component={LabelAndInput}
                        label='Nome' cols='12 4' placeholder='Informe o nome' />
                    <Field name='month' component={LabelAndInput} type='number'
                        label='Mês' cols='12 4' placeholder='Informe o mês' />
                    <Field name='year' component={LabelAndInput} type='number'
                        label='Ano' cols='12 4' placeholder='Informe o ano' />
                </div>
                <div className='box-footer'>
                    <button type='submit' 
                        className='btn btn-primary'>Submit</button>
                </div>
            </form>
        )
    }
}

//reduxForm tem funcionalidade similar ao connect - decorator
//destroyOnUnmount - cria flag para não destroi os dados do formularios na alteração
export default reduxForm({form: 'billingCycleForm', destroyOnUnmount:
false})(BillingCycleForm)