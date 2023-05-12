import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { AddRegister } from '../redux/actions';

class Login extends Component {
  state = {
    email: '',
    password: '',
    buttonDisable: true,
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    }, () => {
      const { email, password } = this.state;
      console.log(password);
      const emailValidation = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+$/i;
      const number = 6;
      this.setState({
        buttonDisable: !(password.length >= number && emailValidation.test(email)),
      });
    });
  };

  handleClick = () => {
    const { email } = this.state;
    const { dispatch, history } = this.props;
    dispatch(AddRegister(email));
    history.push('/carteira');
  };

  render() {
    const { email, password, buttonDisable } = this.state;
    return (
      <div>
        <fieldset>
          <h3>Login</h3>
          <label htmlFor="inputEmail">
            E-mail
            <input
              data-testid="email-input"
              placeholder="Digite seu email"
              name="email"
              type="email"
              id="inputEmail"
              value={ email }
              onChange={ (e) => this.handleChange(e) }
            />
          </label>
          <label htmlFor="inputPassword">
            Senha
            <input
              data-testid="password-input"
              placeholder="Digite sua senha"
              name="password"
              type="password"
              id="inputPassword"
              value={ password }
              onChange={ (e) => this.handleChange(e) }
            />
          </label>
          <button
            type="button"
            disabled={ buttonDisable }
            onClick={ this.handleClick }
          >
            Entrar
          </button>
        </fieldset>
      </div>
    );
  }
}

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default connect()(Login);
