import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  state = {
    despesa: '0',
    cambio: 'BRL',
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
  email: PropTypes.string.isRequired,
};

const mapStateToProps = (globalState) => ({
  ...globalState.user,
});

export default connect(mapStateToProps)(Header);
