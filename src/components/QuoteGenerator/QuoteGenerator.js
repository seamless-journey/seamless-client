import { connect } from 'react-redux';

import { actions, selectors } from '../../store';

import Component from './QuoteGenerator_';

const mapState = (state) => ({ 
  quote: selectors.getQuote(state),
});

const mapAction = {
  onNotAuth: actions.notAuth,
  onGenerate: actions.generate,
};

export default connect(mapState, mapAction)(Component);
