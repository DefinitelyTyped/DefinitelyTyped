import { createClient } from 'graphqurl';

// $ExpectType Client
createClient({
    endpoint: 'https://my-graphql-endpoint/graphql',
    headers: {
        Authorization: 'Bearer <token>'
    },
    websocket: {
        endpoint: 'https://my-graphql-endpoint/graphql',
        shouldRetry: false,
        parameters: { someData: 'abc123' },
        onConnectionSuccess: () => {  },
        onConnectionError: err => {  },
        onConnectionKeepAlive: () => {  }
    }
});
