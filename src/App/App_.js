import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';

import ConnectView from '../views/ConnectView';
import AuthView from '../views/AuthView';
import QuoteView from '../views/QuoteView';

class App extends Component {
  render() {
    const { isConnected, isAuthenticated } = this.props;
    if ( !isConnected ) { 
      return  <ConnectView />
    }
    if ( !isAuthenticated ) {
      return  <AuthView />
    }
    return <QuoteView />;
  }
}

App.propTypes = {
  isConnected: PropTypes.bool,
  isAuthenticated: PropTypes.bool,
};

App.defaultProps = {
  isConnected: false,
  isAuthenticated: false,
};

export default App;
