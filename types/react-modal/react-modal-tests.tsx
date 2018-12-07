import * as React from "react";
import ReactModal = require('react-modal');

// tests for static method
// string
ReactModal.setAppElement("#main");
// HTMLElement
ReactModal.setAppElement(document.getElementById("#main"));

class ExampleOfUsingReactModal extends React.Component {
  contentRef: HTMLDivElement;
  overlayRef: HTMLDivElement;
  render() {
    const onAfterOpenFn = () => { };
    const onRequestCloseFn = () => { };
    const customStyle = {
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
    };
    const customClasses = {
      afterOpen: 'afterOpen',
      base: 'base',
      beforeClose: 'beforeClose'
    };
    const customOverlayClasses = {
      afterOpen: 'afterOpen',
      base: 'base',
      beforeClose: 'beforeClose'
    };
    const customAriaVariables = {
      labelledby: 'labelledby',
      describedby: 'describedby'
    };
    const customDataVariables = {
      dataOne: 'one',
      dataTwo: 'two'
    };
    return (
      <ReactModal
        isOpen={true}
        onAfterOpen={onAfterOpenFn}
        onRequestClose={onRequestCloseFn}
        contentLabel="demo label"
        closeTimeoutMS={1000}
        style={customStyle}
        className={customClasses}
        overlayClassName={customOverlayClasses}
        bodyOpenClassName={'bodyOpenClassName'}
        htmlOpenClassName={'htmlOpenClassName'}
        aria={customAriaVariables}
        data={customDataVariables}
        contentRef={instance => this.contentRef = instance}
        overlayRef={instance => this.overlayRef = instance}
        >
        <h1>Modal Content</h1>
        <p>Etc.</p>
      </ReactModal>
    );
  }
}
