import {
    ConcreteRequest,
    ConnectionHandler,
    Environment,
    getDefaultMissingFieldHandlers,
    Network,
    QueryResponseCache,
    ROOT_ID,
    ROOT_TYPE,
    RecordProxy,
    RecordSource,
    RecordSourceSelectorProxy,
    Store,
    commitLocalUpdate,
} from 'relay-runtime';

const source = new RecordSource();
const store = new Store(source);
const storeWithNullOptions = new Store(source, {
    gcScheduler: null,
    operationLoader: null,
    gcReleaseBufferSize: null,
});
const storeWithOptions = new Store(source, {
    gcScheduler: () => undefined,
    operationLoader: {
        get: () => null,
        load: () => Promise.resolve(null),
    },
    gcReleaseBufferSize: 10,
});

// ~~~~~~~~~~~~~~~~~~~~~
// Network Layer
// ~~~~~~~~~~~~~~~~~~~~~
// Define a function that fetches the results of an operation (query/mutation/etc)
// and returns its results as a Promise:
function fetchQuery(operation: any, variables: { [key: string]: string }, cacheConfig: {}) {
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

// Create a network layer from the fetch function
const network = Network.create(fetchQuery);

// Create a cache for storing query responses
const cache = new QueryResponseCache({ size: 250, ttl: 60000 });

// ~~~~~~~~~~~~~~~~~~~~~
// Environment
// ~~~~~~~~~~~~~~~~~~~~~
const environment = new Environment({
    handlerProvider, // Can omit.
    network,
    store,
    missingFieldHandlers: [
        ...getDefaultMissingFieldHandlers(),
        // Example from https://relay.dev/docs/en/experimental/a-guided-tour-of-relay
        {
            handle(field, record, argValues) {
                if (
                    record != null &&
                    record.__typename === ROOT_TYPE &&
                    field.name === 'user' &&
                    argValues.hasOwnProperty('id')
                ) {
                    // If field is user(id: $id), look up the record by the value of $id
                    return argValues.id;
                }
                if (
                    record != null &&
                    record.__typename === ROOT_TYPE &&
                    field.name === 'story' &&
                    argValues.hasOwnProperty('story_id')
                ) {
                    // If field is story(story_id: $story_id), look up the record by the
                    // value of $story_id.
                    return argValues.story_id;
                }

                return null;
            },
            kind: 'linked',
        },
    ],
    log: (logEvent) => {
        switch (logEvent.name) {
            case 'execute.start':
            case 'execute.next':
            case 'execute.error':
            case 'execute.info':
            case 'execute.complete':
            case 'execute.unsubscribe':
            case 'queryresource.fetch':
            default:
                break;
        }
    }
});

// ~~~~~~~~~~~~~~~~~~~~~
// Handler Provider
// ~~~~~~~~~~~~~~~~~~~~~

function handlerProvider(handle: any) {
    switch (handle) {
        // Augment (or remove from) this list:
        case 'connection':
            return ConnectionHandler;
        // case 'viewer':
        //     // ViewerHandler is special-cased and does not have an `update` method
        //     return ViewerHandler;
    }
    throw new Error(`handlerProvider: No handler provided for ${handle}`);
}

function storeUpdater(store: RecordSourceSelectorProxy) {
    const mutationPayload = store.getRootField('sendConversationMessage');
    const newMessageEdge = mutationPayload!.getLinkedRecord('messageEdge');
    const conversationStore = store.get('a-conversation-id');
    const connection = ConnectionHandler.getConnection(conversationStore!, 'Messages_messages');
    if (connection) {
        ConnectionHandler.insertEdgeBefore(connection, newMessageEdge!);
    }
}

interface MessageEdge {
    readonly id: string;
}

interface SendConversationMessageMutationResponse {
    readonly sendConversationMessage: {
        readonly messageEdge: MessageEdge & {
            error: string;
        };
    };
}

interface TConversation {
    id: string;
}

function passToHelper(edge: RecordProxy<MessageEdge>) {
    edge.getValue('id');
}

function storeUpdaterWithTypes(store: RecordSourceSelectorProxy<SendConversationMessageMutationResponse>) {
    const mutationPayload = store.getRootField('sendConversationMessage');
    const newMessageEdge = mutationPayload.getLinkedRecord('messageEdge');
    const id = newMessageEdge.getValue('id');
    const conversationStore = store.get<TConversation>(id);
    const connection = ConnectionHandler.getConnection(conversationStore!, 'Messages_messages');
    if (connection) {
        ConnectionHandler.insertEdgeBefore(connection, newMessageEdge);
    }
    passToHelper(newMessageEdge);
}

// ~~~~~~~~~~~~~~~~~~~~~
// Source
// ~~~~~~~~~~~~~~~~~~~~~

store.publish(source);

// ~~~~~~~~~~~~~~~~~~~~~
// commitLocalUpdate
// ~~~~~~~~~~~~~~~~~~~~~

commitLocalUpdate(environment, store => {
    const root = store.get(ROOT_ID);
    root!.setValue('foo', 'localKey');
});

// ~~~~~~~~~~~~~~~~~~~~~
// ConcreteRequest
// ~~~~~~~~~~~~~~~~~~~~~

/*
# client schema
extend type Query {
  foo: Boolean!
}
*/

/*
// component
graphql`
  query FooQuery {
    __typename
    foo
  }
`;
*/

/*
query FooQuery {
  __typename
}
*/

/* tslint:disable:only-arrow-functions no-var-keyword prefer-const */
const node: ConcreteRequest = (function() {
    var v0 = [
        {
            kind: 'ScalarField',
            alias: null,
            name: '__typename',
            args: null,
            storageKey: null,
        },
        {
            kind: 'ClientExtension',
            selections: [
                {
                    kind: 'ScalarField',
                    alias: null,
                    name: 'foo',
                    args: null,
                    storageKey: null,
                },
            ],
        },
    ];
    return {
        kind: 'Request',
        fragment: {
            kind: 'Fragment',
            name: 'FooQuery',
            type: 'Query',
            metadata: null,
            argumentDefinitions: [],
            selections: v0 /*: any*/,
        },
        operation: {
            kind: 'Operation',
            name: 'FooQuery',
            argumentDefinitions: [],
            selections: v0 /*: any*/,
        },
        params: {
            operationKind: 'query',
            name: 'FooQuery',
            id: null,
            text: 'query FooQuery {\n  __typename\n}\n',
            metadata: {},
        },
    };
})();
/* tslint:enable:only-arrow-functions no-var-keyword prefer-const */
