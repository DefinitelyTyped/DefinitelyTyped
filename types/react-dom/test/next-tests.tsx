/// <reference types="../next"/>
import React = require('react');
import ReactDOMClient = require('react-dom/client');

function createRoot() {
    const root = ReactDOMClient.createRoot(document.documentElement);

    root.render(<div>initial render</div>);

    // only makes sense for `hydrateRoot`
    // $ExpectError
    ReactDOMClient.createRoot(document);
}

function hydrateRoot() {
    const hydrateable = ReactDOMClient.hydrateRoot(document, <div>initial render</div>, {
        identifierPrefix: 'react-18-app',
        onRecoverableError: error => {
            console.error(error);
        },
    });
    hydrateable.render(<div>render update</div>);
    ReactDOMClient.hydrateRoot(document, {
        // Forgot `initialChildren`
        // $ExpectError
        identifierPrefix: 'react-18-app',
    });
}
