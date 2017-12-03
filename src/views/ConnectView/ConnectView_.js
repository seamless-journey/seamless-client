import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import BluetoothIcon from 'material-ui-icons/Bluetooth';

import './ConnectView.css';

function cn(name) {
  return `views__ConnectView__${name}`;
}

class ConnectView extends PureComponent {
  constructor(props) {
    super(props);

    this.handlerConnect = this.handlerConnect.bind(this);
  }

  handlerConnect() {
    const { onConnect } = this.props;
    onConnect('Seamless');
  }
  
  render() {
    return (
      <div className={cn('layout')}>
        <Button fab color="primary" onClick={this.handlerConnect} >
          <BluetoothIcon />
        </Button>
      </div>
    );
  }
}

ConnectView.propTypes = {
  onConnect: PropTypes.func,
};

ConnectView.defaultProps = {
  onConnect: () => true,
};

export default ConnectView;
