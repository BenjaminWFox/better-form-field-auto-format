import React from 'react'
import PropTypes from 'prop-types'
import FormatableInputBetter from './formatable-input-better'
import FormatableInputOriginal from './formatable-input-original'

export default function PhoneInput({
  isBetter, id, labelText, placeholder, autoComplete, value, onChange, required, ...rest
}) {
  return isBetter 
  ? (<FormatableInputBetter
      id={id}
      labelText={labelText}
      placeholder={placeholder}
      autoComplete={autoComplete}
      value={value}
      required={required}
      // invalid={!isFormFieldValid('date_of_birth', value, required)}
      invalidText="Please enter a valid date in format: MM/DD/YYYY"
      format="(###) ###-####"
      onChange={onChange}
      {...rest}
    />
  )
  : (
  <FormatableInputOriginal
    id={id}
    labelText={labelText}
    placeholder={placeholder}
    autoComplete={autoComplete}
    value={value}
    required={required}
    // invalid={!isFormFieldValid('date_of_birth', value, required)}
    invalidText="Please enter a valid date in format: MM/DD/YYYY"
    format="(###) ###-####"
    onChange={onChange}
    {...rest}
    />
  )
}

PhoneInput.defaultProps = {
  autoComplete: true,
  value: '',
  required: false,
  placeholder: '(###) ###-####',
  labelText: 'Phone Number',
}

PhoneInput.propTypes = {
  id: PropTypes.string.isRequired,
  labelText: PropTypes.string,
  placeholder: PropTypes.string,
  autoComplete: PropTypes.bool,
  value: PropTypes.string,
  onChange: PropTypes.string.isRequired,
  required: PropTypes.string,
}
