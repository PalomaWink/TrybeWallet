import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { actionFetchAPI, othersInformations, conclusionEdit } from '../redux/actions';
import getFetchAPI from '../services/fetchAPI';

class WalletForm extends Component {
  state = {
    id: 0,
    value: '',
    description: '',
    currency: 'USD',
    method: 'Dinheiro',
    tag: 'Alimentação',
  };

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(actionFetchAPI());
  }

  componentDidUpdate(prevProps) {
    const { id } = this.state;
    const { editor, idToEdit, expenses } = this.props;
    if (editor && prevProps.editor !== editor) {
      const index = expenses.findIndex((element) => element.id === idToEdit);
      this.setState({
        oldID: id,
        ...expenses[index],
      });
    }
    /* if (!editor && prevProps.editor) {
      this.setState({
        ...prevState,
      });
    } */
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  handleClick = async () => {
    const { dispatch } = this.props;
    const { id } = this.state;
    const result = await getFetchAPI();

    dispatch(othersInformations({ ...this.state, exchangeRates: result }));
    this.setState({
      id: id + 1,
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    });
  };

  handleClickEdit = () => {
    const { dispatch } = this.props;
    const updateExpense = { ...this.state };
    delete updateExpense.oldID;
    dispatch(conclusionEdit(updateExpense));
    this.setState({
      value: '',
      description: '',
      currency: '',
      method: '',
      tag: '',
    });
  };

  render() {
    const { currencies, editor } = this.props;
    const { value, description, method, currency, tag } = this.state;
    return (
      <div>
        <label htmlFor="inputValue">
          Valor:
          <input
            type="number"
            id="inputValue"
            data-testid="value-input"
            name="value"
            value={ value }
            onChange={ (e) => this.handleChange(e) }
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
            onChange={ (e) => this.handleChange(e) }
          />
        </label>
        <select
          data-testid="currency-input"
          name="currency"
          value={ currency }
          onChange={ this.handleChange }
        >
          {currencies.map((cur) => (
            <option key={ cur }>{ cur }</option>
          ))}
        </select>
        <select
          data-testid="method-input"
          name="method"
          value={ method }
          onChange={ this.handleChange }
        >
          <option>Dinheiro</option>
          <option>Cartão de crédito</option>
          <option>Cartão de débito</option>
        </select>
        <select
          data-testid="tag-input"
          name="tag"
          value={ tag }
          onChange={ this.handleChange }
        >
          <option>Alimentação</option>
          <option>Lazer</option>
          <option>Trabalho</option>
          <option>Transporte</option>
          <option>Saúde</option>
        </select>
        {!editor ? (
          <button
            type="button"
            onClick={ this.handleClick }
          >
            Adicionar despesa
          </button>
        ) : (
          <button
            type="button"
            onClick={ this.handleClickEdit }
          >
            Editar despesas
          </button>
        )}
      </div>
    );
  }
}

WalletForm.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  dispatch: PropTypes.func.isRequired,
  editor: PropTypes.bool.isRequired,
  idToEdit: PropTypes.number.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const mapStateToProps = (globalState) => ({
  ...globalState.wallet,
});

export default connect(mapStateToProps)(WalletForm);
