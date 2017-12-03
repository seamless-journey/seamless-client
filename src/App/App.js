import { connect } from 'react-redux';
import { selectors } from '../store';

import Component from './App_';

const mapState = (state) => ({ 
  isConnected: selectors.isConnected(state),
  isAuthenticated: selectors.isAuthenticated(state),
});

export default connect(mapState)(Component);
