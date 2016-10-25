/// <reference path="../react/react.d.ts" />
/// <reference path="./react-modal.d.ts"/>

import * as React from "react";
import * as ReactModal from 'react-modal';

class ExampleOfUsingReactModal extends React.Component<{}, {}> {
  render() {
    var onAfterOpenFn = () => { }
    var onRequestCloseFn = () => { }
    var customStyle = {
      overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(255, 255, 255, 0.75)'
      },
      content: {
        position: 'absolute',
        top: '40px',
        left: '40px',
        right: '40px',
        bottom: '40px',
        border: '1px solid #ccc',
        background: '#fff',
        overflow: 'auto',
        WebkitOverflowScrolling: 'touch',
        borderRadius: '4px',
        outline: 'none',
        padding: '20px'

      }
    }
    return (
      <ReactModal
        isOpen={true}
        onAfterOpen={onAfterOpenFn}
        onRequestClose={onRequestCloseFn}
        closeTimeoutMS={1000}
        style={customStyle}
        >
        <h1>Modal Content</h1>
        <p>Etc.</p>
      </ReactModal>
    );
  }
};
