import { connect } from 'react-redux';

import { actions } from '../../store';

import Component from './AuthView_';

const mapAction = {
  onAuth: actions.auth,
};

export default connect(null, mapAction)(Component);
