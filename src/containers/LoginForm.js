import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchUser } from '../utilz/apiCalls';
import { signIn } from '../actions';

class LoginForm extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: ''
    }
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({ [e.target.name] : e.target.value })
  }

  handleSubmit = async (e) => {
    // e.preventDefault();
    const { email, password } = this.state
    let user = await fetchUser(email, password)
    this.props.setUser(user);
    this.clearInputs()
  }

  clearInputs = () => {
    this.setState({email: '', password: ''})
  }

  render() {
    return (
      <form className='login-form'>
        <input 
          type='email' 
          name='email' 
          className='login-input' 
          placeholder='E-Mail...'
          onChange={this.handleChange}
          value={this.state.email}
        />
        <input 
          type='password' 
          name='password' 
          className='login-input' 
          placeholder='Password...' 
          onChange={this.handleChange}
          value={this.state.password}
        />
        <NavLink
          to='/'
          className='login-input login-btn'
          onClick={(e) => this.handleSubmit(e)}
        >
            Sign-In
        </NavLink>
        <NavLink
          to='/signup'
          className='login-create-acct-btn'
        >
          <p className='login-create-acct'>
            Don't have an account?  Create one now!
          </p>
        </NavLink>
      </form>
    )
  }
}

const mapStateToProps = (state) => ({
  user: state.user
})

const mapDispatchToProps = (dispatch) => ({
  setUser: (user) => dispatch(signIn(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
