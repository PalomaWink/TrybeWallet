import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    const inicialValue = 0;
    const { email, expenses } = this.props;
    return (
      <div>
        <p data-testid="email-field">
          Email:
          { email }
        </p>
        <div>
          <p data-testid="total-field">
            Despesa Total: R$
            { expenses.length ? expenses
              .reduce((acc, expense) => acc + Number(expense.value)
                * Number(expense.exchangeRates[expense.currency].ask), 0).toFixed(2)
              : inicialValue.toFixed(2) }
          </p>
          <p data-testid="header-currency-field">BRL</p>
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  /* dispatch: PropTypes.func.isRequired, */
  email: PropTypes.string.isRequired,
  expenses: PropTypes.objectOf(PropTypes.string).isRequired,
};

const mapStateToProps = (globalState) => ({
  ...globalState.user,
  expenses: globalState.wallet.expenses,
});

export default connect(mapStateToProps)(Header);
