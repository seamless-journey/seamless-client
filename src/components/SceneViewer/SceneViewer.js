import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { AFrameRenderer, Marker } from 'react-web-ar'
import { Entity } from "aframe-react";

import './SceneViewer.css';

function cn(name) {
  return `components__SceneViewer__${name}`;
}

class SceneViewer extends PureComponent {
  render() {
    return (
      <AFrameRenderer 
        inherent={true}>
        <Marker parameters={{ preset: "hiro" }}>
          {/* <a-gltf-model 
            scale="0.5 0.5 0.5"
            rotation="-90 0 0"
            position="0 0 1"
            src="./ancient/scene.gltf"></a-gltf-model> */}

          <Entity
              geometry={{ primitive: "box" }}
              material={{ color: "red", opacity: 0.5 }}
              position={{ x: 0, y: 0.5, z: 0 }}
            />
        </Marker>
      </AFrameRenderer>        
    );
  }
}

SceneViewer.propTypes = {
};

SceneViewer.defaultProps = {
};

export default SceneViewer;
