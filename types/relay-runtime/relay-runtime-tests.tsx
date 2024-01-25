import {
    __internal,
    CacheConfig,
    commitLocalUpdate,
    commitMutation,
    ConcreteRequest,
    ConnectionHandler,
    ConnectionInterface,
    createOperationDescriptor,
    DataID,
    Environment,
    fetchQuery,
    FragmentRefs,
    getDefaultMissingFieldHandlers,
    getRequest,
    graphql,
    isPromise,
    Network,
    PreloadableConcreteRequest,
    QueryResponseCache,
    ReaderFragment,
    ReaderInlineDataFragment,
    readInlineData,
    RecordProxy,
    RecordSource,
    RecordSourceSelectorProxy,
    requestSubscription,
    ROOT_ID,
    ROOT_TYPE,
    Store,
    Variables,
} from "relay-runtime";

import * as multiActorEnvironment from "relay-runtime/multi-actor-environment";

const source = new RecordSource();
const store = new Store(source);
const storeWithNullOptions = new Store(source, {
    gcScheduler: null,
    operationLoader: null,
    gcReleaseBufferSize: null,
    queryCacheExpirationTime: null,
});
const storeWithOptions = new Store(source, {
    gcScheduler: () => undefined,
    operationLoader: {
        get: () => null,
        load: () => Promise.resolve(null),
    },
    gcReleaseBufferSize: 10,
    queryCacheExpirationTime: 1000,
});

// ~~~~~~~~~~~~~~~~~~~~~
// Network Layer
// ~~~~~~~~~~~~~~~~~~~~~
// Define a function that fetches the results of an operation (query/mutation/etc)
// and returns its results as a Promise:
function fetchFunction(operation: any, variables: { [key: string]: string }, cacheConfig: {}) {
    return fetch("/graphql", {
        method: "POST",
        body: JSON.stringify({
            query: operation.text, // GraphQL text from input
            variables,
        }),
    }).then((response: any) => {
        return response.json();
    });
}

// Create a network layer from the fetch function
const network = Network.create(fetchFunction);

// Create a cache for storing query responses
const cache = new QueryResponseCache({ size: 250, ttl: 60000 });

// ~~~~~~~~~~~~~~~~~~~~~
// Environment
// ~~~~~~~~~~~~~~~~~~~~~

const isServer = false;

const options = {
    test: true,
};

const treatMissingFieldsAsNull = false;

const environment = new Environment({
    handlerProvider, // Can omit.
    network,
    store,
    isServer,
    options,
    treatMissingFieldsAsNull,
    missingFieldHandlers: [
        ...getDefaultMissingFieldHandlers(),
        // Example from https://relay.dev/docs/en/experimental/a-guided-tour-of-relay
        {
            handle(field, record, argValues) {
                if (
                    record != null
                    && record.getType() === ROOT_TYPE
                    && field.name === "user"
                    && argValues.hasOwnProperty("id")
                ) {
                    // If field is user(id: $id), look up the record by the value of $id
                    return argValues.id;
                }
                if (
                    record != null
                    && record.getType() === ROOT_TYPE
                    && field.name === "story"
                    && argValues.hasOwnProperty("story_id")
                ) {
                    // If field is story(story_id: $story_id), look up the record by the
                    // value of $story_id.
                    return argValues.story_id;
                }

                return null;
            },
            kind: "linked",
        },
    ],
    log: logEvent => {
        switch (logEvent.name) {
            case "network.start":
            case "network.complete":
            case "network.error":
            case "network.info":
            case "network.unsubscribe":
            case "execute.start":
            case "queryresource.fetch":
            default:
                break;
        }
    },
    requiredFieldLogger: arg => {
        if (arg.kind === "missing_field.log") {
            console.log(arg.fieldPath, arg.owner);
        } else if (arg.kind === "missing_field.throw") {
            console.log(arg.fieldPath, arg.owner);
        } else {
            arg.kind; // $ExpectType "relay_resolver.error"
            console.log(arg.fieldPath, arg.owner, arg.error);
        }
    },
});

// ~~~~~~~~~~~~~~~~~~~~~
// Handler Provider
// ~~~~~~~~~~~~~~~~~~~~~

function handlerProvider(handle: any) {
    switch (handle) {
        // Augment (or remove from) this list:
        case "connection":
            return ConnectionHandler;
            // case 'viewer':
            //     // ViewerHandler is special-cased and does not have an `update` method
            //     return ViewerHandler;
    }
    throw new Error(`handlerProvider: No handler provided for ${handle}`);
}

// Updatable fragment.
interface UserFragment_updatable$data {
    name: string | null;
    readonly id: string;
    readonly " $fragmentType": "UserFragment_updatable";
}
interface UserFragment_updatable$key {
    readonly " $data"?: UserFragment_updatable$data;
    readonly $updatableFragmentSpreads: FragmentRefs<"UserFragment_updatable">;
}

// Updatable query.
interface UserQuery$data {
    userName: string;
}
interface UserQuery {
    response: UserQuery$data;
    variables: {};
}

commitMutation<{
    response: { setUsername?: { name?: string | null } | null };
    variables: { name: string };
}>(environment, {
    mutation: graphql`
        mutation setUserName($name: String!) {
            setUsername(name: $name) {
                name
            }
        }
    `,
    variables: { name: "" },
    updater(store, data) {
        const newName = data?.setUsername?.name;
        newName && store.get("userid")?.setValue(newName, "name");
    },
});

function storeUpdater(store: RecordSourceSelectorProxy, dataRef: UserFragment_updatable$key) {
    store.invalidateStore();
    const mutationPayload = store.getRootField("sendConversationMessage");
    const newMessageEdge = mutationPayload!.getLinkedRecord("messageEdge");
    const conversationStore = store.get("a-conversation-id");
    conversationStore!.invalidateRecord();
    const connection = ConnectionHandler.getConnection(conversationStore!, "Messages_messages");
    if (connection) {
        ConnectionHandler.insertEdgeBefore(connection, newMessageEdge!);
    }
    const { updatableData: updatableFragment } = store.readUpdatableFragment(
        graphql`
            fragment UserComponent_user on User {
                name
            }
        `,
        dataRef,
    );
    updatableFragment.name = "NewName";

    const { updatableData: updatableQuery } = store.readUpdatableQuery<UserQuery>(
        graphql`
            query UserQuery {
                user {
                    name
                }
            }
        `,
        {},
    );
    updatableQuery.userName = "NewName";
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
    edge.getValue("id");
}

function storeUpdaterWithTypes(store: RecordSourceSelectorProxy<SendConversationMessageMutationResponse>) {
    store.invalidateStore();
    const mutationPayload = store.getRootField("sendConversationMessage");
    const newMessageEdge = mutationPayload.getLinkedRecord("messageEdge");
    const id = newMessageEdge.getValue("id");
    const conversationStore = store.get<TConversation>(id);
    conversationStore!.invalidateRecord();
    const connection = ConnectionHandler.getConnection(conversationStore!, "Messages_messages");
    if (connection) {
        ConnectionHandler.insertEdgeBefore(connection, newMessageEdge);
    }
    passToHelper(newMessageEdge);
}

function connectionHandlerWithoutStore() {
    let connectionId: DataID;

    connectionId = ConnectionHandler.getConnectionID("4", "ConnectionQuery_friends");

    connectionId = ConnectionHandler.getConnectionID("4", "ConnectionQuery_friends", null);

    connectionId = ConnectionHandler.getConnectionID("4", "ConnectionQuery_friends", {
        orderby: ["first name"],
    });
}

// ~~~~~~~~~~~~~~~~~~~~~
// Source
// ~~~~~~~~~~~~~~~~~~~~~

store.publish(source);
const get_store_recorditem = store.getSource().get("someDataId");
// $ExpectType Record<TConversation> | null | undefined
const get_store_recorditem_typed = store.getSource().get<TConversation>("someDataId");

// ~~~~~~~~~~~~~~~~~~~~~
// commitLocalUpdate
// ~~~~~~~~~~~~~~~~~~~~~

commitLocalUpdate(environment, store => {
    const root = store.get(ROOT_ID);
    root!.setValue("foo", "localKey");
});

// ~~~~~~~~~~~~~~~~~~~~~~~~~~
// PreloadableConcreteRequest
// ~~~~~~~~~~~~~~~~~~~~~~~~~~

type FooQuery$variables = Record<PropertyKey, never>;
// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
type FooQuery$data = {
    readonly foo: string | null | undefined;
};
// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
type FooQuery = {
    response: FooQuery$data;
    variables: FooQuery$variables;
};

const preloadableNode: PreloadableConcreteRequest<FooQuery> = {
    kind: "PreloadableConcreteRequest",
    params: {
        operationKind: "query",
        name: "FooQuery",
        id: null,
        cacheID: "2e5967148a8303de3c58059c0eaa87c6",
        text: "query FooQuery {\n  foo\n}\n",
        metadata: {},
    },
};

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
            kind: "ScalarField",
            alias: null,
            name: "__typename",
            args: null,
            storageKey: null,
        },
        {
            kind: "ClientExtension",
            selections: [
                {
                    kind: "ScalarField",
                    alias: null,
                    name: "foo",
                    args: null,
                    storageKey: null,
                },
            ],
        },
    ];
    return {
        kind: "Request",
        fragment: {
            kind: "Fragment",
            name: "FooQuery",
            type: "Query",
            metadata: null,
            argumentDefinitions: [],
            selections: v0, /*: any*/
        },
        operation: {
            kind: "Operation",
            name: "FooQuery",
            argumentDefinitions: [],
            selections: v0, /*: any*/
        },
        params: {
            operationKind: "query",
            name: "FooQuery",
            id: null,
            cacheID: "2e5967148a8303de3c58059c0eaa87c6",
            text: "query FooQuery {\n  __typename\n}\n",
            metadata: {},
        },
    };
})();
/* tslint:enable:only-arrow-functions no-var-keyword prefer-const */

// ~~~~~~~~~~~~~~~~~~~~~
// ReaderFragment
// ~~~~~~~~~~~~~~~~~~~~~

/*
graphql`
  query TestQueryWithLiteral($latArg: String, $lonArg: String) {
    route(
      waypoints: [
        {lat: $latArg, lon: $lonArg}
        {lat: null, lon: $latArg}
        {lat: $lonArg, lon: "1234"}
      ]
    ) {
      __typename
    }
  }
`,
 */
const nodeFragment: ReaderFragment = {
    argumentDefinitions: [
        {
            defaultValue: null,
            kind: "LocalArgument",
            name: "latArg",
        },
        {
            defaultValue: null,
            kind: "LocalArgument",
            name: "lonArg",
        },
    ],
    kind: "Fragment",
    metadata: null,
    name: "TestQueryWithLiteral",
    selections: [
        {
            alias: null,
            args: [
                {
                    items: [
                        {
                            fields: [
                                {
                                    kind: "Variable",
                                    name: "lat",
                                    variableName: "latArg",
                                },
                                {
                                    kind: "Variable",
                                    name: "lon",
                                    variableName: "lonArg",
                                },
                            ],
                            kind: "ObjectValue",
                            name: "waypoints.0",
                        },
                        {
                            fields: [
                                {
                                    kind: "Literal",
                                    name: "lat",
                                    value: null,
                                },
                                {
                                    kind: "Variable",
                                    name: "lon",
                                    variableName: "latArg",
                                },
                            ],
                            kind: "ObjectValue",
                            name: "waypoints.1",
                        },
                        {
                            fields: [
                                {
                                    kind: "Variable",
                                    name: "lat",
                                    variableName: "lonArg",
                                },
                                {
                                    kind: "Literal",
                                    name: "lon",
                                    value: "1234",
                                },
                            ],
                            kind: "ObjectValue",
                            name: "waypoints.2",
                        },
                    ],
                    kind: "ListValue",
                    name: "waypoints",
                },
            ],
            concreteType: "Route",
            kind: "LinkedField",
            name: "route",
            plural: false,
            selections: [
                {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "__typename",
                    storageKey: null,
                },
            ],
            storageKey: null,
        },
    ],
    type: "Query",
    abstractKey: null,
};

// ~~~~~~~~~~~~~~~~~~~~~
// readInlineData
// ~~~~~~~~~~~~~~~~~~~~~

interface Module_data {
    readonly id: string;
    readonly " $fragmentType": "Module_data";
}
type Module_data$data = Module_data;
interface Module_data$key {
    readonly " $data"?: Module_data$data;
    readonly " $fragmentSpreads": FragmentRefs<"Module_data">;
}

function readData(dataRef: Module_data$key) {
    // $ExpectType Module_data
    readInlineData(
        graphql`
            fragment Module_data on Data @inline {
                id
            }
        `,
        dataRef,
    );
}

interface Module_InlineDataFragment {
    readonly kind: "InlineDataFragment";
    readonly name: string;
}
function readNullableData(dataRef: Module_data$key) {
    // $ExpectType Module_data
    readInlineData(
        graphql`
            fragment Module_data on Data @inline {
                id
            }
        `,
        dataRef,
    );
}

const readerInlineDataFragment: ReaderInlineDataFragment = {
    kind: "InlineDataFragment",
    name: "myFragment_data",
};
function readInlineDataFragment(dataRef: Module_data$key) {
    // $ExpectType Module_data
    readInlineData(readerInlineDataFragment, dataRef);
}

// ~~~~~~~~~~~~~~~~~~~~~
// INTERNAL-ONLY
// ~~~~~~~~~~~~~~~~~~~~~

const p = Promise.resolve() as unknown;
if (isPromise(p)) {
    p.then(() => console.log("Indeed a promise"));
}

const gqlQuery = graphql`
    query ExampleQuery($pageID: ID!) {
        page(id: $pageID) {
            name
        }
    }
`;

const pageID = "110798995619330";
const cacheConfig: CacheConfig = { force: true };
const request = getRequest(gqlQuery);
const variables: Variables = { pageID };
const dataID: DataID = "dataID";
const operation = createOperationDescriptor(request, variables);
const operationWithCacheConfig = createOperationDescriptor(request, variables, cacheConfig);
const operationWithDataID = createOperationDescriptor(request, variables, undefined, dataID);
const operationWithAll = createOperationDescriptor(request, variables, cacheConfig, dataID);

// ~~~~~~~~~~~~~~~~~~~~~~~
// MULTI ACTOR ENVIRONMENT
// ~~~~~~~~~~~~~~~~~~~~~~~

function multiActors() {
    const environment = new multiActorEnvironment.MultiActorEnvironment({
        createNetworkForActor(
            id, // $ExpectType string
        ) {
            return network;
        },
        createStoreForActor(
            id, // $ExpectType string
        ) {
            return store;
        },
    });

    // $ExpectType ActorEnvironment
    const actor = environment.forActor("test");

    environment
        .execute(actor, {
            operation,
        })
        .toPromise();
}

// ~~~~~~~~~~~~~~~~~~~~~~~
// Relay Resolvers
// ~~~~~~~~~~~~~~~~~~~~~~~

const { readFragment } = __internal.ResolverFragments;

// Regular fragment.
interface UserComponent_user {
    readonly id: string;
    readonly name: string;
    readonly profile_picture: {
        readonly uri: string;
    };
    readonly " $fragmentType": "UserComponent_user";
}

type UserComponent_user$data = UserComponent_user;

interface UserComponent_user$key {
    readonly " $data"?: UserComponent_user$data | undefined;
    readonly " $fragmentSpreads": FragmentRefs<"UserComponent_user">;
}

function NonNullableFragmentResolver(userKey: UserComponent_user$key) {
    // $ExpectType UserComponent_user
    const data = readFragment(
        graphql`
            fragment UserComponent_user on User {
                name
                profile_picture(scale: 2) {
                    uri
                }
            }
        `,
        userKey,
    );

    return `${data.name}, ${data.profile_picture.uri}`;
}

function NullableFragmentResolver(userKey: UserComponent_user$key | null) {
    // $ExpectType UserComponent_user | null
    readFragment(
        graphql`
            fragment UserComponent_user on User {
                name
                profile_picture(scale: 2) {
                    uri
                }
            }
        `,
        userKey,
    );
}

// Plural fragment @relay(plural: true)
type UserComponent_users = ReadonlyArray<{
    readonly id: string;
    readonly name: string;
    readonly profile_picture: {
        readonly uri: string;
    };
    readonly " $fragmentType": "UserComponent_users";
}>;
type UserComponent_users$data = UserComponent_users;
type UserComponent_users$key = ReadonlyArray<{
    readonly " $data"?: UserComponent_users$data | undefined;
    readonly " $fragmentSpreads": FragmentRefs<"UserComponent_users">;
}>;

function NonNullableArrayFragmentResolver(usersKey: UserComponent_users$key) {
    const data = readFragment(
        graphql`
            fragment UserComponent_users on User @relay(plural: true) {
                name
                profile_picture(scale: 2) {
                    uri
                }
            }
        `,
        usersKey,
    );

    return data.map(thing => `${thing.id}: ${thing.name}, ${thing.profile_picture}`);
}

function NullableArrayFragmentResolver(usersKey: UserComponent_users$key | null) {
    const data = readFragment(
        graphql`
            fragment UserComponent_users on User @relay(plural: true) {
                name
                profile_picture(scale: 2) {
                    uri
                }
            }
        `,
        usersKey,
    );

    return data?.map(thing => `${thing.id}: ${thing.name}, ${thing.profile_picture}`);
}

function ArrayOfNullableFragmentResolver(usersKey: ReadonlyArray<UserComponent_users$key[0] | null>) {
    const data = readFragment(
        graphql`
            fragment UserComponent_users on User @relay(plural: true) {
                name
                profile_picture(scale: 2) {
                    uri
                }
            }
        `,
        usersKey,
    );

    return data?.map(thing => `${thing.id}: ${thing.name}, ${thing.profile_picture}`);
}

// ~~~~~~~~~~~~~~~~~~~~~
// fetchQuery
// ~~~~~~~~~~~~~~~~~~~~~

fetchQuery(
    environment,
    node,
    { variable: true },
    {
        networkCacheConfig: { force: true, poll: 1234 },
        fetchPolicy: "network-only",
    },
);

// ~~~~~~~~~~~~~~~~~~~~~
// requestSubscription
// ~~~~~~~~~~~~~~~~~~~~~

requestSubscription(environment, {
    cacheConfig: { force: true, poll: 1234 },
    subscription: node,
    variables: { variable: true },
    onCompleted: () => {
        return;
    },
    onError: _error => {
        return;
    },
    onNext: _response => {
        return;
    },
    updater: (_store, _data) => {
        return;
    },
});

// ~~~~~~~~~~~~~~~~~~~~~
// ConnectionInterface
// ~~~~~~~~~~~~~~~~~~~~~

const { CURSOR, EDGES, END_CURSOR, HAS_NEXT_PAGE, HAS_PREV_PAGE, NODE, PAGE_INFO, PAGE_INFO_TYPE, START_CURSOR } =
    ConnectionInterface.get();

ConnectionInterface.inject({
    CURSOR: "cursor",
    EDGES: "edges",
    END_CURSOR: "endCursor",
    HAS_NEXT_PAGE: "hasNextPage",
    HAS_PREV_PAGE: "hasPrevPage",
    NODE: "node",
    PAGE_INFO: "pageInfo",
    PAGE_INFO_TYPE: "PageInfo",
    START_CURSOR: "startCursor",
});

// ~~~~~~~~~~~~~~~~~~
// Provided variables
// ~~~~~~~~~~~~~~~~~~

__internal.withProvidedVariables({
    one: "value",
}, {
    two: {
        get() {
            return "value";
        },
    },
});

__internal.withProvidedVariables.tests_only_resetDebugCache?.();
