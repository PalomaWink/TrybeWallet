import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  state = {
    despesa: 0,
    cambio: 'BRL',
  };

  componentDidMount() {
    this.handleChange();
  }

  handleChange = () => {
    const { expenses } = this.props;
    console.log(Object.values(expenses));
    const total = expenses;
    this.setState({
      despesa: total,
    });
  };

  render() {
    const { despesa, cambio } = this.state;
    const { email } = this.props;
    return (
      <div>
        <p data-testid="email-field">
          Email:
          { email }
        </p>
        <div>
          <p data-testid="total-field">
            Despesa total: R$
            { despesa }
          </p>
          <p data-testid="header-currency-field">{ cambio }</p>
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
  expenses: globalState.wallet,
});

export default connect(mapStateToProps)(Header);
