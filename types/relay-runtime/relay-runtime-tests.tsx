import {
    Environment,
    Network,
    RecordSource,
    Store,
} from 'relay-runtime';

const source = new RecordSource();
const store = new Store(source);

// ~~~~~~~~~~~~~~~~~~~~~
// Network Layer
// ~~~~~~~~~~~~~~~~~~~~~
// Define a function that fetches the results of an operation (query/mutation/etc)
// and returns its results as a Promise:
function fetchQuery(
    operation: any,
    variables: { [key: string]: string },
    cacheConfig: {},
) {
    return fetch('/graphql', {
        method: 'POST',
        headers: {
        // Add authentication and other headers here
        'content-type': 'application/json'
        },
        body: JSON.stringify({
        query: operation.text, // GraphQL text from input
        variables,
        }),
    }).then(response => {
        return response.json();
    });
}

// Create a network layer from the fetch function
const network = Network.create(fetchQuery);

// ~~~~~~~~~~~~~~~~~~~~~
// Environment
// ~~~~~~~~~~~~~~~~~~~~~
const environment = new Environment({
    handlerProvider, // Can omit.
    network,
    store,
});

// ~~~~~~~~~~~~~~~~~~~~~
// Handler Provider
// ~~~~~~~~~~~~~~~~~~~~~

import {
    ConnectionHandler,
    ViewerHandler,
} from 'relay-runtime';

function handlerProvider(handle: any) {
    switch (handle) {
        // Augment (or remove from) this list:
        case 'connection': return ConnectionHandler;
        case 'viewer': return ViewerHandler;
    }
    throw new Error(
        `handlerProvider: No handler provided for ${handle}`
    );
}
