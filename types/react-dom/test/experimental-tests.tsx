import React = require('react');
import ReactDOM = require('react-dom');
import 'react-dom/experimental';

function createRoot() {
    const root = ReactDOM.createRoot(document);

    // NOTE: I don't know yet how to use this; this is just the type it expects
    // in reality it will do nothing because the root isn't hydrate: true
    ReactDOM.unstable_scheduleHydration(document);

    root.render(<div>initial render</div>, () => {
        console.log('callback');
    });
}

function createBlockingRoot() {
    const root = ReactDOM.createBlockingRoot(document, {
        hydrate: true,
    });

    root.render(<div>initial render</div>, () => {
        console.log('callback');
    });
}

function updates() {
    // $ExpectType 0
    ReactDOM.unstable_discreteUpdates((): 0 => 0);
    // $ExpectType number
    ReactDOM.unstable_discreteUpdates((foo: number) => foo, 1);
    // $ExpectError
    ReactDOM.unstable_discreteUpdates((foo: number) => foo);

    ReactDOM.unstable_flushDiscreteUpdates();

    ReactDOM.unstable_flushControlled(() => {});
}
