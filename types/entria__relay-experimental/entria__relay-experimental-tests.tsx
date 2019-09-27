import React from 'react';

import { fetchQuery, RelayEnvironmentProvider } from 'entria__relay-experimental';
import { Environment, RecordSource, Store, Network, graphql } from 'relay-runtime';

const source = new RecordSource();
const store = new Store(source);

function cacheHandler(operation: any, variables: { [key: string]: string }, cacheConfig: {}) {
    return fetch('/graphql', {
        method: 'POST',
        body: JSON.stringify({
            query: operation.text, // GraphQL text from input
            variables,
        }),
    }).then((response: any) => {
        return response.json();
    });
}

const network = Network.create(cacheHandler);

const environment = new Environment({
    network,
    store,
});

const query = graphql`
    query SomeQuery {
        someType
    }
`;

const variables = {};

const dispose = fetchQuery(environment, query, variables).subscribe({
    start: subsctiption => {},
    next: payload => {},
    error: (error: Error) => {},
    complete: () => {},
    unsubscribe: subscription => {},
});

dispose.unsubscribe();

function Providers() {
    return (
        <RelayEnvironmentProvider environment={environment}>
            <p>test</p>
        </RelayEnvironmentProvider>
    );
}
