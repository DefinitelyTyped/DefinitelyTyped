/// <reference types="../next"/>
import React = require('react');
import ReactDOM = require('react-dom');

function createRoot() {
    const root = ReactDOM.createRoot(document);

    root.render(<div>initial render</div>);
}

function hydrateRoot() {
    const legacyHydrateable = ReactDOM.createRoot(document, {
        identifierPrefix: 'legacy-app',
    });

    const hydrateable = ReactDOM.hydrateRoot(document, <div>initial render</div>, {
        onHydrated: () => {
            console.log('hydrated');
        },
        onDeleted: () => {
            console.log('deleted');
        },
        identifierPrefix: 'react-18-app',
        onRecoverableError: error => {
            console.error(error);
        },
    });
    hydrateable.render(<div>render update</div>);
    ReactDOM.hydrateRoot(document, {
        // Forgot `initialChildren`
        // $ExpectError
        onHydrated: () => {
            console.log('hydrated');
        },
        onDeleted: () => {
            console.log('deleted');
        },
    });
}
