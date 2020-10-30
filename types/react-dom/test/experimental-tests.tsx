import React = require('react');
import ReactDOM = require('react-dom');
import 'react-dom/experimental';

function createRoot() {
    const root = ReactDOM.unstable_createRoot(document);

    // NOTE: I don't know yet how to use this; this is just the type it expects
    // in reality it will do nothing because the root isn't hydrate: true
    ReactDOM.unstable_scheduleHydration(document);

    root.render(<div>initial render</div>, () => {
        console.log('callback');
    });
}

function createBlockingRoot() {
    const root = ReactDOM.unstable_createBlockingRoot(document, {
        hydrate: true,
    });

    root.render(<div>initial render</div>, () => {
        console.log('callback');
    });
}

function updates() {
    ReactDOM.unstable_flushControlled(() => {});
}
