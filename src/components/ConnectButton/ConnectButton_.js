import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import BluetoothIcon from 'material-ui-icons/Bluetooth';
import BluetoothConnectedIcon from 'material-ui-icons/BluetoothConnected';

class ConnectButton extends PureComponent {
  constructor(props) {
    super(props);

    this.handlerClick = this.handlerClick.bind(this);
  }

  handlerClick() {
    const { onConnect, onDisconnect, isConnected } = this.props;
    if ( !isConnected ) { 
      onConnect('Seamless');
    } else {
      onDisconnect();
    }
  }
  
  render() {
    const { isConnected, className = '' } = this.props;
    return (
      <Button fab color="accent" onClick={this.handlerClick} className={className} >
        { isConnected ? <BluetoothConnectedIcon /> : <BluetoothIcon /> }
      </Button>
    );
  }
}

ConnectButton.propTypes = {
  className: PropTypes.string,
  isConnected: PropTypes.bool,
  onConnect: PropTypes.func,
  onDisconnect: PropTypes.func,
};

ConnectButton.defaultProps = {
  isConnected: false,
  onConnect: () => true,
  onDisconnect: () => true,
};

export default ConnectButton;
