/// <reference types="../next"/>
import React = require('react');
import ReactDOM = require('react-dom');

function createRoot() {
    const root = ReactDOM.createRoot(document);

    root.render(<div>initial render</div>);
}

function hydrateRoot() {
    const legacyHydrateable = ReactDOM.createRoot(document, {
        hydrate: true,
        hydrationOptions: {
            onHydrated: () => {
                console.log('hydrated');
            },
            onDeleted: () => {
                console.log('deleted');
            },
        },
    });

    const hydrateable = ReactDOM.hydrateRoot(document, <div>initial render</div>, {
        onHydrated: () => {
            console.log('hydrated');
        },
        onDeleted: () => {
            console.log('deleted');
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
