import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import QrReader from 'react-qr-reader'

class AuthReader extends PureComponent {

  render() {
    const { className = '', onAuth } = this.props;
    return (
      <QrReader
        className={className}
        delay={300}
        onError={console.error}
        onScan={onAuth}
      />
    );
  }
}

AuthReader.propTypes = {
  className: PropTypes.string,
  onAuth: PropTypes.func,
};

AuthReader.defaultProps = {
  onAuth: () => true,
};

export default AuthReader;
