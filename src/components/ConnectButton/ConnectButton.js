import { connect } from 'react-redux';
import { actions } from 'redux-bluetooth/build/webapp';

import { selectors } from '../../store';

import Component from './ConnectButton_';

const mapState = (state) => ({ 
  isConnected: selectors.isConnected(state),
});

const mapAction = {
  onConnect: actions.connectStore,
  onDisconnect: actions.disconnectStore,
};

export default connect(mapState, mapAction)(Component);
