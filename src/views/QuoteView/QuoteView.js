import { connect } from 'react-redux';

import { actions, selectors } from '../../store';

import Component from './QuoteView_';

const mapState = (state) => ({ 
  quote: selectors.getQuote(state),
});

const mapAction = {
  onGenerate: actions.generate,
};

export default connect(mapState, mapAction)(Component);
