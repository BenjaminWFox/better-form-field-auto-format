import React from 'react'
import PropTypes from 'prop-types'

export default function FormatableInputBetter({
  defaultValue, format, onChange, delayedFormat, ...rest
}) {

  const onInputValueChange = (val) => {
  const newValue = val.replace(/[^0-9]/g, '')

  if (format) {
    let formattedStr = format

    for (let i = 0; i < String(newValue).length; i += 1) {
      formattedStr = formattedStr.replace('#', newValue[i])
    }
    formattedStr = formattedStr.replace(/[#]/g, '')

    while (
      formattedStr[formattedStr.length - 1]
      && formattedStr[formattedStr.length - 1].match(/[^0-9]/)
    ) {
      formattedStr = formattedStr.substr(0, formattedStr.length - 1)
    }

    return formattedStr
  }

  return val
}

const handleOnBlur = (e) => {
  e.target.value = onInputValueChange(e.target.value)

  onChange(e)
}

const handleOnChange = (e) => {
  e.target.value = onInputValueChange(e.target.value)

  onChange(e)
}

return (
  <input
    onChange={handleOnChange}
    onBlur={handleOnBlur}
    {...rest}
  />
  )
}

FormatableInputBetter.defaultProps = {
defaultValue: '',
format: '',
onValueChange: null,
delayedFormat: false,
}

FormatableInputBetter.propTypes = {
delayedFormat: PropTypes.bool,
defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
format: PropTypes.string,
onValueChange: PropTypes.func,
onChange: PropTypes.func.isRequired,
}
