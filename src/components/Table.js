import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import '../index.css';

class Table extends Component {
  render() {
    const { expenses } = this.props;
    console.log(expenses);
    return (
      <table>
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </tr>
        </thead>
        <tbody>
          {expenses.lenght > 0 && expenses.map((infos) => (
            <tr key={ infos.id }>
              <td>{infos.description}</td>
              <td>{infos.tag}</td>
              <td>{infos.method}</td>
              <td>{infos.value}</td>
              <td>{infos.exchangeRates[infos.currency].name}</td>
              <td>{infos.currency}</td>
              <td>{infos.value * infos.exchangeRates[infos.currency].ask}</td>
              <td>Real</td>
              <td>Botão</td>
            </tr>))}
        </tbody>
      </table>
    );
  }
}

Table.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const mapStateToProps = (globalState) => ({
  expenses: globalState.wallet.expenses,
});

export default connect(mapStateToProps)(Table);
