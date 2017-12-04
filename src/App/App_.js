import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';
import Typography from 'material-ui/Typography';
import Toolbar from 'material-ui/Toolbar';

import ConnectButton from '../components/ConnectButton';
import AuthReader from '../components/AuthReader';
import QuoteGenerator from '../components/QuoteGenerator';

import './App.css';

class App extends PureComponent {
  render() {
    const { isConnected, isAuthenticated } = this.props;
    return (<div className="app__main">
      <AppBar position="static">
        <Toolbar className="app__toolbar">
          <Typography type="title" color="inherit" className="app__title">
            Seamless
          </Typography>
          <ConnectButton className="app__connect"/>
        </Toolbar>
      </AppBar>
      { isConnected && !isAuthenticated && <AuthReader className="app__container" /> }
      { isConnected && isAuthenticated && <QuoteGenerator className="app__container" /> }
    </div>);
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
