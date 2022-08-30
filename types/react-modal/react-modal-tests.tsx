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
    const reactModalRef = React.useRef<ReactModal>();
    // typed params of `OnAfterOpen` callback
    const onAfterOpenFn: ReactModal.OnAfterOpenCallback = ({ contentEl, overlayEl }) => {
        console.assert(contentEl === reactModalRef.current.portal.content);
        console.assert(overlayEl === reactModalRef.current.portal.overlay);
    };
    const onAfterCloseFn = () => { };
    const onRequestCloseFn = (event: React.MouseEvent | React.KeyboardEvent) => { };
    const customStyle: ReactModal.Styles = {
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
      describedby: 'describedby',
      modal: true,
    };
    const customDataVariables = {
      dataOne: 'one',
      dataTwo: 'two'
    };
    return (
      <ReactModal
        id="modal-id"
        isOpen={true}
        onAfterOpen={onAfterOpenFn}
        onAfterClose={onAfterCloseFn}
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
        testId="modal-content"
        >
        <h1>Modal Content</h1>
        <p>Etc.</p>
      </ReactModal>
    );
  }
}

const MyWrapperComponent: React.FC = () => {
    const reactModaRef = React.useRef<ReactModal>();
    // typed params of `OnAfterOpen` are optional for backward compatible types
    const onAfterOpenOptionalObjFn = () => {};

    React.useLayoutEffect(() => {
        reactModaRef.current.portal.overlay.getAttribute('foo');
        reactModaRef.current.portal.content.focus();
    });

    return (
        <ReactModal isOpen
            onAfterOpen={onAfterOpenOptionalObjFn}
            overlayElement={(props, contentElement) => <StyledOverlay {...props}>{contentElement}</StyledOverlay>}
            contentElement={(props, children) => <StyledContent {...props}>{children}</StyledContent>}
            ref={reactModaRef}>
            Hello, World!
        </ReactModal>
    );
};

const StyledContent = React.forwardRef<HTMLDivElement, React.ComponentPropsWithoutRef<"div">>(({ children, className, ...props }, ref) => {
  return <div {...props} className={`sc-content ${className}`} ref={ref}>{children}</div>;
});

const StyledOverlay = React.forwardRef<HTMLDivElement, React.ComponentPropsWithoutRef<"div">>(({ children, className, ...props }, ref) => {
  return <div {...props} className={`sc-overlay ${className}`} ref={ref}>{children}</div>;
});

// tests for `appElement`
const el1 = document.createElement("div");
const el2 = document.getElementById("foo");
const el1Children = el1.children;
const fooClassList = document.querySelectorAll(".foo");

const appElementTestHtmlElement = <ReactModal isOpen appElement={el1} />;
const appElementTestHtmlElementArray = <ReactModal isOpen appElement={[el1, el2]} />;
const appElementTestHtmlCollection = <ReactModal isOpen appElement={el1Children} />;
const appElementTestNodeList = <ReactModal isOpen appElement={fooClassList} />;
// @ts-expect-error
const appElementTestExpectError = <ReactModal isOpen appElement={{}} />;
