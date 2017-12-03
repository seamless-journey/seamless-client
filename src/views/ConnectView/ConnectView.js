import { connect } from 'react-redux';
import { actions } from 'redux-bluetooth/build/webapp';

import Component from './ConnectView_';

const mapAction = {
  onConnect: actions.connectStore,
};

export default connect(null, mapAction)(Component);
