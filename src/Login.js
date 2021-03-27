import React from 'react'
import './Login.css'

class Login extends React.Component {
  saveEmail = (e) => {
    this.setState({ email: e.target.value })
  }
  savePassword = (e) => {
    this.setState({ password: e.target.value })
  }
  submit = () => {
    alert('Hello')
  }
  render() {
    return (
      <div>
        <div classname='login'>
          <div className='child'>
            <h1 className='logintxt'>Login</h1>
            <input
              name='email'
              type='text'
              placeholder='e-mail'
              onChange={this.saveEmail}
              className='inputs'
            />
            <br />
            <input
              name='password'
              type='text'
              placeholder='password'
              onChange={this.savePassword}
              className='inputs'
            />
            <br />
            <button className='submtbtn' onClick={this.submit}>
              Submit
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Login
