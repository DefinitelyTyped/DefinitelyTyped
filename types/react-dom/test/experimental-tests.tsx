import ReactDOM = require('react-dom');
import 'react-dom/experimental';

// NOTE: I don't know yet how to use this; this is just the type it expects
// in reality it will do nothing because the root isn't hydrate: true
ReactDOM.unstable_scheduleHydration(document);

function updates() {
    ReactDOM.unstable_flushControlled(() => {});
}
