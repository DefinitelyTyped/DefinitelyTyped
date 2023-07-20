import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as ReactIs from 'react-is';

// Below is taken from README of react-is
// Determining if a Component is Valid

interface CompProps {
    forwardedRef: React.Ref<any>;
    children?: React.ReactNode | undefined;
}

class ClassComponent extends React.Component<CompProps> {
  render() {
    return React.createElement('div');
  }
}

const FunctionComponent = () => React.createElement('div');

const ForwardRefComponent = React.forwardRef((props, ref) =>
  React.createElement(ClassComponent, { forwardedRef: ref, ...props })
);

const LazyComponent = React.lazy(() =>
  Promise.resolve({ default: ForwardRefComponent })
);

const MemoComponent = React.memo(FunctionComponent);

const Context = React.createContext(false);

ReactIs.isValidElementType('div'); // true
ReactIs.isValidElementType(ClassComponent); // true
ReactIs.isValidElementType(FunctionComponent); // true
ReactIs.isValidElementType(ForwardRefComponent); // true
ReactIs.isValidElementType(Context.Provider); // true
ReactIs.isValidElementType(Context.Consumer); // true
ReactIs.isValidElementType(React.createFactory('div')); // true
ReactIs.isValidElementType(LazyComponent);
ReactIs.isValidElementType(MemoComponent);

// Determining an Element's Type

// AsyncMode - unstable_AsyncMode is not implemented in @types/react yet
// ReactIs.isAsyncMode(<React.unstable_AsyncMode />); // true
// ReactIs.typeOf(<React.unstable_AsyncMode />) === ReactIs.AsyncMode; // true

// Context
const ThemeContext = React.createContext('blue');

ReactIs.isContextConsumer(<ThemeContext.Consumer children={FunctionComponent} />); // true
ReactIs.isContextProvider(<ThemeContext.Provider children={<FunctionComponent />} value='black' />); // true
ReactIs.typeOf(<ThemeContext.Consumer children={FunctionComponent} />) === ReactIs.ContextConsumer; // true
ReactIs.typeOf(<ThemeContext.Provider children={<FunctionComponent />} value='black' />) === ReactIs.ContextProvider; // true

// Element
ReactIs.isElement(<div />); // true
ReactIs.typeOf(<div />) === ReactIs.Element; // true

// Fragment
ReactIs.isFragment(<></>); // true
ReactIs.typeOf(<></>) === ReactIs.Fragment; // true

// Portal
const div = document.createElement('div');
const portal = ReactDOM.createPortal(<div />, div);

ReactIs.isPortal(portal); // true
ReactIs.typeOf(portal) === ReactIs.Portal; // true

// StrictMode
ReactIs.isStrictMode(<React.StrictMode />); // true
ReactIs.typeOf(<React.StrictMode />) === ReactIs.StrictMode; // true

// Verify typeOf accepts any type of value (taken from tests of react-is)
ReactIs.typeOf('abc') === undefined;
ReactIs.typeOf(true) === undefined;
ReactIs.typeOf(123) === undefined;
ReactIs.typeOf({}) === undefined;
ReactIs.typeOf(null) === undefined;
ReactIs.typeOf(undefined) === undefined;

// ForwardRef
ReactIs.isForwardRef(<ForwardRefComponent />); // true
ReactIs.typeOf(<ForwardRefComponent />) === ReactIs.ForwardRef; // true

// Lazy
ReactIs.isLazy(LazyComponent); // true
ReactIs.typeOf(LazyComponent) === ReactIs.Lazy; // true

// Memo
ReactIs.isMemo(MemoComponent); // true
ReactIs.typeOf(MemoComponent) === ReactIs.Memo; // true

// Suspense
ReactIs.isForwardRef(<React.Suspense fallback={<FunctionComponent />} />); // true
ReactIs.typeOf(<React.Suspense fallback={<FunctionComponent />} />) === ReactIs.Suspense; // true
