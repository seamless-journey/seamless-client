import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import SyncIcon from 'material-ui-icons/Sync';
import SyncDisabledIcon from 'material-ui-icons/SyncDisabled';
import FormatQuoteIcon from 'material-ui-icons/FormatQuote';

import './QuoteGenerator.css';

function cn(name) {
  return `components__QuoteGenerator__${name}`;
}

class QuoteGenerator extends PureComponent {
  render() {
    const { className = '', quote, onNotAuth, onGenerate } = this.props;
    return (
      <div className={`${cn('layout')} ${className}`}>
        <div className={cn('quote')} >
          { quote && <FormatQuoteIcon className={cn('quote__icon')} /> }
          { quote ? <span>{quote}</span> : null }
        </div>
        <div className={cn('buttons')} >
          <Button fab raised color="accent" className={cn('generate')} onClick={onNotAuth}>
            <SyncDisabledIcon />
          </Button>
          <Button fab raised color="primary" className={cn('generate')} onClick={onGenerate}>
            <SyncIcon />
          </Button>
        </div>
      </div>
    );
  }
}

QuoteGenerator.propTypes = {
  className: PropTypes.string,
  quote: PropTypes.string,
  onGenerate: PropTypes.func,
  onNotAuth: PropTypes.func,
};

QuoteGenerator.defaultProps = {
  onGenerate: () => true,
  onNotAuth: () => true,
};

export default QuoteGenerator;
