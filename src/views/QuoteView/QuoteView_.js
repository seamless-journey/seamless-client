import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import './QuoteView.css';

function cn(name) {
  return `views__QuoteView__${name}`;
}

class QuoteView extends PureComponent {
  render() {
    const { quote, onGenerate } = this.props;
    return (
      <div className={cn('layout')}>
        <div className={cn('quote')} >{quote || ''}</div>
        <Button raised color="primary" className={cn('generate')} onClick={onGenerate}>Generate</Button>
      </div>
    );
  }
}

QuoteView.propTypes = {
  quote: PropTypes.string,
  onGenerate: PropTypes.func,
};

QuoteView.defaultProps = {
  onGenerate: () => true,
};

export default QuoteView;
