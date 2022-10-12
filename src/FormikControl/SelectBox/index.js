import React from 'react'
import { Field, ErrorMessage } from 'formik'
import TextError from '../TextError'
import Select from 'react-select'
function SelectBox (props) {
  const { label, options,name, ...rest } = props
  return (
    <div className='form-control'>
      <label htmlFor={name}>{label}</label>
      <Field name={name}>
        {({ form, field }) => {
          const { setFieldValue } = form
          const { value } = field
          console.log(field);
          return (
            <Select
              id={name}
              {...rest}
              options={options}
              value={value}
              onChange={val => setFieldValue(name, val)}
            />
          )
        }}
      </Field>
      <ErrorMessage component={TextError} name={name} />
    </div>
  )
}

export default SelectBox