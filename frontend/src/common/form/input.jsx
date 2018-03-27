import React from 'react'

export default props => (
   //redux-form passa um conjunto de propriedades no imput.
    <input {...props.input}
        className='form-control'
        placeholder={props.placeholder}
        readOnly={props.readOnly}
        type={props.type} />
)