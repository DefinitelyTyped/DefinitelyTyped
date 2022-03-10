/// <reference types="../next"/>
import React = require('react');
import ReactDOMClient = require('react-dom/client');

function createRoot() {
    const root = ReactDOMClient.createRoot(document);

    root.render(<div>initial render</div>);
}

function hydrateRoot() {
    const legacyHydrateable = ReactDOMClient.createRoot(document, {
        identifierPrefix: 'legacy-app',
    });

    const hydrateable = ReactDOMClient.hydrateRoot(document, <div>initial render</div>, {
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
    ReactDOMClient.hydrateRoot(document, {
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
