import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { actionFetchAPI } from '../redux/actions';

class WalletForm extends Component {
  state = {
    valueInput: '0',
    description: '',
  };

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(actionFetchAPI());
  }

  render() {
    const { currencies } = this.props;
    const { valueInput, description } = this.state;
    return (
      <div>
        <label htmlFor="inputValue">
          Valor:
          <input
            type="text"
            id="inputValue"
            data-testid="value-input"
            name="value"
            value={ valueInput }
            /* onChange={ this.handleChange } */
          />
        </label>
        <label htmlFor="description">
          Descrição:
          <input
            type="text"
            id="description"
            name="description"
            data-testid="description-input"
            value={ description }
            /* onChange={ this.handleChange } */
          />
        </label>
        <select data-testid="currency-input">
          {currencies.map((cur) => (
            <option key={ cur }>{ cur }</option>
          ))}
        </select>
        <select data-testid="method-input">
          <option>Dinheiro</option>
          <option>Cartão de crédito</option>
          <option>Cartão de débito</option>
        </select>
        <select data-testid="tag-input">
          <option>Alimentação</option>
          <option>Lazer</option>
          <option>Trabalho</option>
          <option>Transporte</option>
          <option>Saúde</option>
        </select>
      </div>
    );
  }
}

WalletForm.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (globalState) => ({
  ...globalState.wallet,
});

export default connect(mapStateToProps)(WalletForm);
