import React from 'react';
import logo from './logo.svg';
import './App.css';
import DOBInput from './components/dob-input'
import PhoneInput from './components/phone-input'

function App() {
  const [field, setField] = React.useState('')
  const [field2, setField2] = React.useState('')
  const [field3, setField3] = React.useState('')
  const [field4, setField4] = React.useState('')

  const handleChange = (e) => {
    setField(e.target.value)
  }

  const handleChange2 = (e) => {
    setField2(e.target.value)
  }

  const handleChange3 = (e) => {
    setField3(e.target.value)
  }

  const handleChange4 = (e) => {
    setField4(e.target.value)
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="example-group">
          <div className="example">
          <p>Less great:</p>
          <DOBInput
            style={{ padding: '10px', fontSize: '1em' }}
            id="dob-input-1"
            autoComplete={false}
            value={field}
            onChange={handleChange}
            required
          />
          </div>
          <div className="example">
          <p>More great:</p>
          <DOBInput
            style={{ padding: '10px', fontSize: '1em' }}
            id="dob-input-2"
            isBetter
            autoComplete={false}
            value={field2}
            onChange={handleChange2}
            required
          />
          </div>
        </div>
        <div class="example-group">
        <div className="example">
          <p>Less great:</p>
          <PhoneInput
            style={{ padding: '10px', fontSize: '1em' }}
            id="phone-input-1"
            autoComplete={false}
            value={field3}
            onChange={handleChange3}
            required
          />
          </div>
          <div className="example">
          <p>More great:</p>
          <PhoneInput
            style={{ padding: '10px', fontSize: '1em' }}
            id="phone-input-2"
            isBetter
            autoComplete={false}
            value={field4}
            onChange={handleChange4}
            required
          />
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
