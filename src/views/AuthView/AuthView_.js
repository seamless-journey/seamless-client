import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import QrReader from 'react-qr-reader'

import './AuthView.css';

function cn(name) {
  return `views__AuthView__${name}`;
}

class AuthView extends PureComponent {

  render() {
    const { onAuth } = this.props;
    return (
      <div className={cn('layout')}>
        <QrReader
          className={cn('reader')}
          delay={300}
          onError={console.error}
          onScan={onAuth}
        />
      </div>
    );
  }
}

AuthView.propTypes = {
  onAuth: PropTypes.func,
};

AuthView.defaultProps = {
  onAuth: () => true,
};

export default AuthView;
