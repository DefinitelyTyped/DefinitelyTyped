import * as React from 'react';
import {
    EntryPoint,
    EntryPointComponent,
    EntryPointContainer,
    fetchQuery,
    graphql,
    IEnvironmentProvider,
    JSResourceReference,
    loadEntryPoint,
    loadQuery,
    PreloadedQuery,
    RelayEnvironmentProvider,
    useEntryPointLoader,
    useFragment,
    useLazyLoadQuery,
    useClientQuery,
    useMutation,
    usePaginationFragment,
    usePreloadedQuery,
    useQueryLoader,
    useRefetchableFragment,
    useRelayEnvironment,
    useSubscription,
} from 'react-relay/hooks';

import {
    commitMutation,
    ConcreteRequest,
    Environment,
    FragmentRefs,
    GraphQLSubscriptionConfig,
    Network,
    RecordSource,
    Store,
} from 'relay-runtime';

const source = new RecordSource();
const store = new Store(source);

function cacheHandler(operation: any, variables: { [key: string]: string }, _cacheConfig: {}) {
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

const environmentProvider: IEnvironmentProvider<any> = {
    getEnvironment(): Environment {
        return environment;
    },
};

// tslint:disable-next-line no-unnecessary-generics
declare function JSResource<TModule extends any>(): JSResourceReference<TModule>;

const query = graphql`
    query SomeQuery {
        someType
    }
`;

const variables = {};

/**
 * Test of fetchQuery
 */
const dispose = fetchQuery(environment, query, variables).subscribe({
    start: subsctiption => {},
    next: payload => {},
    error: (error: Error) => {},
    complete: () => {},
    unsubscribe: subscription => {},
});

dispose.unsubscribe();

interface AppQueryVariables {
    id: string;
}

interface AppQueryResponse {
    readonly user: {
        readonly name: string;
    } | null;
}

interface AppQuery {
    readonly response: AppQueryResponse;
    readonly variables: AppQueryVariables;
}

/**
 * Test of RelayEnvironmentProvider
 * see https://relay.dev/docs/en/experimental/api-reference#relayenvironmentprovider
 */
function Provider() {
    return (
        <RelayEnvironmentProvider environment={environment}>
            <div />
        </RelayEnvironmentProvider>
    );
}

/**
 * Test of useRelayEnvironment
 * see https://relay.dev/docs/en/experimental/api-reference#userelayenvironment
 */
function RelayEnvironment() {
    const environment = useRelayEnvironment();

    const handler = React.useCallback(() => {
        const mutation = graphql`
            mutation AddTodoMutation($input: AddTodoInput!) {
                addTodo(input: $input) {
                    todoEdge {
                        __typename
                        cursor
                        node {
                            complete
                            id
                            text
                        }
                    }
                    viewer {
                        id
                        totalCount
                    }
                }
            }
        `;

        commitMutation(environment, { mutation, variables: {} });
    }, [environment]);

    return (
        <React.Suspense fallback={<div>Loading...</div>}>
            <div />
        </React.Suspense>
    );
}

/**
 * Tests for useLazyLoadQuery
 * see https://relay.dev/docs/en/experimental/api-reference#uselazyloadquery
 */
function LazyLoadQuery() {
    return function App() {
        const data = useLazyLoadQuery<AppQuery>(
            graphql`
                query AppQuery($id: ID!) {
                    user(id: $id) {
                        name
                    }
                }
            `,
            { id: '4' },
            { fetchPolicy: 'store-and-network', networkCacheConfig: { force: true } },
        );

        return <h1>{data.user!.name}</h1>;
    };
}

/**
 * Tests for useClientQuery
 * see https://relay.dev/docs/en/experimental/api-reference#useClientQuery
 */
function ClientQuery() {
    return function App() {
        const data = useClientQuery<AppQuery>(
            graphql`
                query AppQuery($id: ID!) {
                    user(id: $id) {
                        name
                    }
                }
            `,
            { id: '4' },
        );

        return <h1>{data.user!.name}</h1>;
    };
}

/**
 * Tests for useFragment
 * see https://relay.dev/docs/en/experimental/api-reference#usefragment
 */

// Regular fragment.
interface UserComponent_user {
    readonly id: string;
    readonly name: string;
    readonly profile_picture: {
        readonly uri: string;
    };
    readonly ' $fragmentType': 'UserComponent_user';
}

type UserComponent_user$data = UserComponent_user;

interface UserComponent_user$key {
    readonly ' $data'?: UserComponent_user$data | undefined;
    readonly ' $fragmentSpreads': FragmentRefs<'UserComponent_user'>;
}

function NonNullableFragment() {
    interface Props {
        user: UserComponent_user$key;
    }

    return function UserComponent(props: Props) {
        // $ExpectType UserComponent_user
        const data = useFragment(
            graphql`
                fragment UserComponent_user on User {
                    name
                    profile_picture(scale: 2) {
                        uri
                    }
                }
            `,
            props.user,
        );

        return data.name;
    };
}

function NullableFragment() {
    interface Props {
        user: UserComponent_user$key | null;
    }

    return function UserComponent(props: Props) {
        // $ExpectType UserComponent_user | null
        useFragment(
            graphql`
                fragment UserComponent_user on User {
                    name
                    profile_picture(scale: 2) {
                        uri
                    }
                }
            `,
            props.user,
        );
    };
}

// Plural fragment @relay(plural: true)
type UserComponent_users = ReadonlyArray<{
    readonly id: string;
    readonly name: string;
    readonly profile_picture: {
        readonly uri: string;
    };
    readonly ' $fragmentType': 'UserComponent_users';
}>;
type UserComponent_users$data = UserComponent_users;
type UserComponent_users$key = ReadonlyArray<{
    readonly ' $data'?: UserComponent_users$data | undefined;
    readonly ' $fragmentSpreads': FragmentRefs<'UserComponent_users'>;
}>;

function NonNullableArrayFragment() {
    interface Props {
        users: UserComponent_users$key;
    }

    return function UserComponent(props: Props) {
        const data = useFragment(
            graphql`
                fragment UserComponent_users on User @relay(plural: true) {
                    name
                    profile_picture(scale: 2) {
                        uri
                    }
                }
            `,
            props.users,
        );

        return data.map(d => (
            <>
                <h1>{d.name}</h1>
                <div>
                    <img src={d.profile_picture.uri} />
                </div>
            </>
        ));
    };
}

function NullableArrayFragment() {
    interface Props {
        users: UserComponent_users$key | null;
    }

    return function UserComponent(props: Props) {
        const data = useFragment(
            graphql`
                fragment UserComponent_users on User @relay(plural: true) {
                    name
                    profile_picture(scale: 2) {
                        uri
                    }
                }
            `,
            props.users,
        );

        return data!.map(d => (
            <>
                <h1>{d.name}</h1>
                <div>
                    <img src={d.profile_picture.uri} />
                </div>
            </>
        ));
    };
}

function ArrayOfNullableFragment() {
    interface Props {
        users: ReadonlyArray<UserComponent_users$key[0] | null>;
    }

    return function UserComponent(props: Props) {
        const data = useFragment(
            graphql`
                fragment UserComponent_users on User @relay(plural: true) {
                    name
                    profile_picture(scale: 2) {
                        uri
                    }
                }
            `,
            props.users,
        );

        return data.map(d => (
            <>
                <h1>{d.name}</h1>
                <div>
                    <img src={d.profile_picture.uri} />
                </div>
            </>
        ));
    };
}

/**
 * Tests for useRefetchableFragment
 * see https://relay.dev/docs/en/experimental/api-reference#userefetchablefragment
 */
function RefetchableFragment() {
    interface CommentBodyRefetchQueryVariables {
        lang: string;
        id: string;
    }

    interface CommentBodyRefetchQueryResponse {
        readonly node: {
            readonly ' $fragmentSpreads': FragmentRefs<'CommentBody_comment'>;
        } | null;
    }

    interface CommentBodyRefetchQuery {
        readonly response: CommentBodyRefetchQueryResponse;
        readonly variables: CommentBodyRefetchQueryVariables;
    }

    interface CommentBody_comment {
        readonly body: {
            readonly text: string;
        } | null;
        readonly id: string | null;
        readonly ' $fragmentType': 'CommentBody_comment';
    }

    type CommentBody_comment$data = CommentBody_comment;

    interface CommentBody_comment$key {
        readonly ' $data'?: CommentBody_comment$data | undefined;
        readonly ' $fragmentSpreads': FragmentRefs<'CommentBody_comment'>;
    }

    interface Props {
        comment: CommentBody_comment$key;
        commentNullable: CommentBody_comment$key | null;
    }

    return function CommentBody(props: Props) {
        const [data, refetch] = useRefetchableFragment<CommentBodyRefetchQuery, CommentBody_comment$key>(
            graphql`
                fragment CommentBody_comment on Comment @refetchable(queryName: "CommentBodyRefetchQuery") {
                    body(lang: $lang) {
                        text
                    }
                }
            `,
            props.comment,
        );
        const [dataNullable] = useRefetchableFragment<CommentBodyRefetchQuery, CommentBody_comment$key>(
            graphql`
                fragment CommentBody_comment on Comment @refetchable(queryName: "CommentBodyRefetchQuery") {
                    body(lang: $lang) {
                        text
                    }
                }
            `,
            props.commentNullable,
        );

        return (
            <>
                <p>{data.body!.text}</p>
                <p>{dataNullable!.body!.text}</p>
                <button onClick={() => refetch({ lang: 'SPANISH' }, { fetchPolicy: 'store-or-network' })}>
                    Translate Comment
                </button>
            </>
        );
    };
}

/**
 * Tests for usePaginationFragment
 * see https://relay.dev/docs/en/experimental/api-reference#userefetchablefragment
 */
function PaginationFragment() {
    interface FriendsListPaginationQueryVariables {
        count?: number | undefined;
        cursor?: string | undefined;
        id: string;
    }

    interface FriendsListPaginationQueryResponse {
        readonly node: {
            readonly ' $fragmentSpreads': FragmentRefs<'FriendsListComponent_user'>;
        };
    }

    interface FriendsListPaginationQuery {
        readonly response: FriendsListPaginationQueryResponse;
        readonly variables: FriendsListPaginationQueryVariables;
    }

    interface FriendsListComponent_user {
        readonly name: string;
        readonly friends: {
            readonly edges: ReadonlyArray<{
                readonly node: {
                    readonly name: string;
                    readonly age: number;
                };
            }>;
        };
        readonly id: string;
        readonly ' $fragmentType': 'FriendsListComponent_user';
    }

    type FriendsListComponent_user$data = FriendsListComponent_user;

    interface FriendsListComponent_user$key {
        readonly ' $data'?: FriendsListComponent_user$data | undefined;
        readonly ' $fragmentSpreads': FragmentRefs<'FriendsListComponent_user'>;
    }

    interface Props {
        user: FriendsListComponent_user$key | null;
    }

    return function FriendsList(props: Props) {
        const {
            data,
            loadNext,
            loadPrevious,
            hasNext,
            hasPrevious,
            isLoadingNext,
            isLoadingPrevious,
            refetch, // For refetching connection
        } = usePaginationFragment<FriendsListPaginationQuery, FriendsListComponent_user$key>(
            graphql`
                fragment FriendsListComponent_user on User @refetchable(queryName: "FriendsListPaginationQuery") {
                    name
                    friends(first: $count, after: $cursor) @connection(key: "FriendsList_user_friends") {
                        edges {
                            node {
                                name
                                age
                            }
                        }
                    }
                }
            `,
            props.user,
        );

        return (
            <>
                <h1>Friends of {data!.name}:</h1>

                {data!.friends.edges.map(({ node }) => (
                    <div>
                        {node.name} - {node.age}
                    </div>
                ))}

                <button onClick={() => loadNext(10)}>Load more friends</button>
            </>
        );
    };
}

function PaginationFragment_WithNonNullUserProp() {
    interface FriendsListPaginationQueryVariables {
        count?: number | undefined;
        cursor?: string | undefined;
        id: string;
    }

    interface FriendsListPaginationQueryResponse {
        readonly node: {
            readonly ' $fragmentSpreads': FragmentRefs<'FriendsListComponent_user'>;
        };
    }

    interface FriendsListPaginationQuery {
        readonly response: FriendsListPaginationQueryResponse;
        readonly variables: FriendsListPaginationQueryVariables;
    }

    interface FriendsListComponent_user {
        readonly name: string;
        readonly friends: {
            readonly edges: ReadonlyArray<{
                readonly node: {
                    readonly name: string;
                    readonly age: number;
                };
            }>;
        };
        readonly id: string;
        readonly ' $fragmentType': 'FriendsListComponent_user';
    }

    type FriendsListComponent_user$data = FriendsListComponent_user;

    interface FriendsListComponent_user$key {
        readonly ' $data'?: FriendsListComponent_user$data | undefined;
        readonly ' $fragmentSpreads': FragmentRefs<'FriendsListComponent_user'>;
    }

    interface Props {
        user: FriendsListComponent_user$key;
    }

    return function FriendsList(props: Props) {
        const {
            data,
            loadNext,
            loadPrevious,
            hasNext,
            hasPrevious,
            isLoadingNext,
            isLoadingPrevious,
            refetch, // For refetching connection
        } = usePaginationFragment<FriendsListPaginationQuery, FriendsListComponent_user$key>(
            graphql`
                fragment FriendsListComponent_user on User @refetchable(queryName: "FriendsListPaginationQuery") {
                    name
                    friends(first: $count, after: $cursor) @connection(key: "FriendsList_user_friends") {
                        edges {
                            node {
                                name
                                age
                            }
                        }
                    }
                }
            `,
            props.user,
        );

        return (
            <>
                <h1>Friends of {data.name}:</h1>

                {data.friends.edges.map(({ node }) => (
                    <div>
                        {node.name} - {node.age}
                    </div>
                ))}

                <button onClick={() => loadNext(10)}>Load more friends</button>
            </>
        );
    };
}

/**
 * Tests for useMutation
 * see https://relay.dev/docs/en/experimental/api-reference#usemutation
 */
function Mutation() {
    interface FeedbackLikeMutationRawResponse {
        readonly feedback_like: {
            readonly feedback: {
                readonly id: string;
                readonly viewer_does_like?: boolean | null | undefined;
                readonly like_count?: number | null | undefined;
            };
        } | null;
    }

    interface FeedbackLikeMutationResponse {
        readonly feedback_like: {
            readonly feedback: {
                readonly id: string;
                readonly viewer_does_like?: boolean | null | undefined;
                readonly like_count?: number | null | undefined;
            };
        } | null;
    }

    interface FeedbackLikeMutationVariables {
        input: {
            id: string;
            text: string;
        };
    }

    interface FeedbackLikeMutation {
        readonly rawResponse: FeedbackLikeMutationRawResponse;
        readonly response: FeedbackLikeMutationResponse;
        readonly variables: FeedbackLikeMutationVariables;
    }

    return function LikeButton() {
        const [commit, isInFlight] = useMutation<FeedbackLikeMutation>(graphql`
            mutation FeedbackLikeMutation($input: FeedbackLikeData!) @raw_response_type {
                feedback_like(data: $input) {
                    feedback {
                        id
                        viewer_does_like
                        like_count
                    }
                }
            }
        `);
        if (isInFlight) {
            return <div>loading</div>;
        }
        return (
            <button
                onClick={() => {
                    commit({
                        variables: {
                            input: {
                                id: '123',
                                text: 'text',
                            },
                        },
                        onCompleted(data) {
                            console.log(data);

                            if (data.feedback_like == null) {
                                return;
                            }

                            console.log(data.feedback_like.feedback.id);
                            console.log(data.feedback_like.feedback.like_count);
                            console.log(data.feedback_like.feedback.viewer_does_like);
                        },
                        optimisticResponse: {
                            feedback_like: {
                                feedback: {
                                    id: '1',
                                },
                            },
                        },
                    });
                }}
            />
        );
    };
}

/**
 * Tests for useSubscription
 * see https://relay.dev/docs/en/experimental/api-reference#usesubscription
 */
function Subscription() {
    interface SubscriptionVariables {
        id: string;
    }

    interface SubscriptionResponse {
        readonly store: {
            readonly id: string;
            readonly value1: number;
            readonly value2: number;
        };
    }

    interface Subscription {
        readonly response: SubscriptionResponse;
        readonly variables: SubscriptionVariables;
    }

    interface Props {
        id: string;
    }

    return function SubscriptionComponent({ id }: Props) {
        const subscriptionConfig: GraphQLSubscriptionConfig<Subscription> = React.useMemo(
            () => ({
                subscription: graphql`
                    subscription subscriptionComponentSubscription($id: ID!) {
                        store(id: $id) {
                            id
                            value1
                            value2
                        }
                    }
                `,
                variables: { id },
            }),
            [id],
        );

        useSubscription(subscriptionConfig);

        return <p>The subscription has been started in the background.</p>;
    };
}

/**
 * Tests for useQueryLoader
 * see https://relay.dev/docs/en/experimental/api-reference#usequeryloader
 */
function QueryLoader() {
    const query = graphql`
        query AppQuery($id: ID!) {
            user(id: $id) {
                name
            }
        }
    `;

    const [queryReference, loadQuery, disposeQuery] = useQueryLoader<AppQuery>(query);

    function QueryFetcherExample(): React.ReactElement {
        React.useEffect(() => {
            loadQuery({ id: 'EXAMPLE' }, { fetchPolicy: 'store-only' });
            return disposeQuery;
        });

        return (
            <>
                {queryReference != null && (
                    <>
                        <React.Suspense fallback="Loading">
                            <NameDisplay queryReference={queryReference} />
                        </React.Suspense>
                    </>
                )}
            </>
        );
    }

    function NameDisplay({ queryReference }: { queryReference: PreloadedQuery<AppQuery> }) {
        const data = usePreloadedQuery(query, queryReference);

        if (data.user) {
            return <h1>{data.user.name}</h1>;
        } else {
            return null;
        }
    }
}

/**
 * Tests for loadQuery
 * see https://github.com/facebook/relay/blob/master/packages/relay-experimental/loadQuery.js
 */
function LoadQuery() {
    interface AppQueryVariables {
        id: string;
    }

    interface AppQueryResponse {
        readonly user: {
            readonly name: string;
        };
    }

    interface AppQuery {
        readonly response: AppQueryResponse;
        readonly variables: AppQueryVariables;
    }

    const query = graphql`
        query AppQuery($id: ID!) {
            user(id: $id) {
                name
            }
        }
    `;

    const variables: AppQueryVariables = {
        id: '1',
    };

    const preloadedQuery = loadQuery<AppQuery>(environment, query, variables, {
        fetchPolicy: 'store-or-network',
        networkCacheConfig: {
            force: true,
        },
    });

    function ShouldPassIntoUsePreloadQuery({ preloadedQuery }: { preloadedQuery: PreloadedQuery<AppQuery> }) {
        const data = usePreloadedQuery(query, preloadedQuery); // $ExpectType AppQueryResponse

        return <>{data.user.name}</>;
    }

    // To depict some sort of running app
    function App() {
        return <ShouldPassIntoUsePreloadQuery preloadedQuery={preloadedQuery} />;
    }
}

/*
EntryPoint tests
 */

function EntryPointTests() {
    interface SomeQueryResponse {
        readonly post: {
            readonly name: string;
        };
    }

    interface SomeQueryVariables {
        slug: string;
    }

    interface SomeQuery {
        readonly response: SomeQueryResponse;
        readonly variables: SomeQueryVariables;
    }

    const query = graphql`
        query SomeQuery($slug: String!) {
            post {
                name
            }
        }
    ` as ConcreteRequest;

    // RootEntrypoint.entrypoint
    const RootEntryPointComponent: EntryPointComponent<{ someQueryRef: SomeQuery }, {}, { onClick: () => void }> = ({
        queries,
        props,
    }) => {
        const data = usePreloadedQuery(query, queries.someQueryRef);

        return <button onClick={props.onClick}>{data.post.name}</button>;
    };

    interface Params {
        slug: string;
    }

    const entrypoint: EntryPoint<typeof RootEntryPointComponent, Params> = {
        root: JSResource<typeof RootEntryPointComponent>(),
        getPreloadProps(
            // $ExpectType Params
            params,
        ) {
            return {
                queries: {
                    someQueryRef: {
                        parameters: query,
                        variables: {
                            slug: params.slug,
                        },
                    },
                },
            };
        },
    };

    const entrypointReference = loadEntryPoint(environmentProvider, entrypoint, {
        slug: 'test-slug',
    });

    // $ExpectType SomeQueryVariables
    const vars = entrypointReference.queries.someQueryRef.variables;

    /*
    EntrypointContainer Tests
     */
    function EntryPointContainerTests() {
        return (
            <EntryPointContainer
                entryPointReference={entrypointReference}
                props={{
                    onClick() {},
                }}
            />
        );
    }

    /*
    EntryPointContainerNested Tests
     */
    function EntryPointContainerNested() {
        const entrypointA: EntryPoint<typeof RootEntryPointComponent, Params> = {
            root: JSResource(),
            getPreloadProps(params) {
                return {
                    queries: {
                        someQueryRef: {
                            parameters: query,
                            variables: {
                                slug: params.slug,
                            },
                        },
                    },
                };
            },
        };

        const entrypointB: EntryPoint<typeof RootEntryPointComponent, { author: string }> = {
            root: JSResource(),
            getPreloadProps(params) {
                console.log(params.author);
                return {
                    queries: {
                        someQueryRef: {
                            parameters: query,
                            variables: {
                                slug: '/test',
                            },
                        },
                    },
                };
            },
        };

        const SuperParentComponent: EntryPointComponent<
            {},
            { mainPanelA?: typeof entrypointA | undefined; mainPanelB?: typeof entrypointB | undefined },
            {},
            { foo: 'bar' }
        > = ({ entryPoints, extraProps }) => {
            const onClick = () => {
                console.log(extraProps.foo);
            };

            return (
                <>
                    {entryPoints.mainPanelA ? (
                        <EntryPointContainer
                            entryPointReference={entryPoints.mainPanelA}
                            props={{
                                onClick,
                            }}
                        />
                    ) : null}
                    {entryPoints.mainPanelB ? (
                        <EntryPointContainer
                            entryPointReference={entryPoints.mainPanelB}
                            props={{
                                onClick,
                            }}
                        />
                    ) : null}
                </>
            );
        };

        const entrypoint: EntryPoint<typeof SuperParentComponent, { route: string }> = {
            root: JSResource(),
            getPreloadProps(params) {
                return {
                    entryPoints:
                        params.route === 'a'
                            ? {
                                  mainPanelA: {
                                      entryPoint: entrypointA,
                                      entryPointParams: {
                                          slug: 'hello',
                                      },
                                  },
                              }
                            : {
                                  mainPanelB: {
                                      entryPoint: entrypointB,
                                      entryPointParams: {
                                          author: 'world',
                                      },
                                  },
                              },
                    queries: {},
                    extraProps: {
                        foo: 'bar',
                    },
                };
            },
        };

        const entrypointReference = loadEntryPoint(environmentProvider, entrypoint, {
            route: 'b',
        });

        return <EntryPointContainer entryPointReference={entrypointReference} props={{}} />;
    }

    /*
    useEntryPointLoader Tests
     */
    function UseEntryPointLoaderTests() {
        const [queryReference, entryPointLoaderCallback, dispose] = useEntryPointLoader(
            environmentProvider,
            entrypoint,
        );

        React.useEffect(() => {
            entryPointLoaderCallback({
                slug: 'test-slug',
            });

            return dispose;
        }, []);

        return queryReference ? (
            <EntryPointContainer
                entryPointReference={queryReference}
                props={{
                    onClick() {},
                }}
            />
        ) : null;
    }
}
