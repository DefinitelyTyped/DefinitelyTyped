import * as React from 'react';

import { Environment, RecordSource, Store, Network, commitMutation, FragmentRefs } from 'relay-runtime';
import {
    fetchQuery,
    graphql,
    RelayEnvironmentProvider,
    useRelayEnvironment,
    preloadQuery,
    usePreloadedQuery,
    useLazyLoadQuery,
    useFragment,
    useRefetchableFragment,
    usePaginationFragment,
    useBlockingPaginationFragment,
} from 'react-relay/hooks';

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
 * Tests of usePreloadedQuery
 * see https://relay.dev/docs/en/experimental/api-reference#usepreloadedquery
 */
function PreloadedQuery() {
    const appQuery = graphql`
        query AppQuery($id: ID!) {
            user(id: $id) {
                name
            }
        }
    `;

    const result = preloadQuery<AppQuery>(environment, appQuery, { id: '4' }, { fetchPolicy: 'store-or-network' });

    return function App() {
        const data = usePreloadedQuery(query, result);

        if (!data.user) return;
        return <h1>{data.user.name}</h1>;
    };
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
    readonly ' $refType': 'UserComponent_user';
}
type UserComponent_user$data = UserComponent_user;
interface UserComponent_user$key {
    readonly ' $data'?: UserComponent_user$data;
    readonly ' $fragmentRefs': FragmentRefs<'UserComponent_user'>;
}

function NonNullableFragment() {
    interface Props {
        user: UserComponent_user$key;
    }

    return function UserComponent(props: Props) {
        // $ExpectType UserComponent_user
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

        return null;
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
        return null;
    };
}

// Plural fragment @relay(plural: true)
type UserComponent_users = ReadonlyArray<{
    readonly id: string;
    readonly name: string;
    readonly profile_picture: {
        readonly uri: string;
    };
    readonly ' $refType': 'UserComponent_users';
}>;
type UserComponent_users$data = UserComponent_users;
type UserComponent_users$key = ReadonlyArray<{
    readonly ' $data'?: UserComponent_users$data;
    readonly ' $fragmentRefs': FragmentRefs<'UserComponent_users'>;
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
        lang?: string | null;
        id?: string | null;
    }
    interface CommentBodyRefetchQueryResponse {
        readonly node: {
            readonly ' $fragmentRefs': FragmentRefs<'CommentBody_comment'>;
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
        readonly ' $refType': 'CommentBody_comment';
    }
    type CommentBody_comment$data = CommentBody_comment;
    interface CommentBody_comment$key {
        readonly ' $data'?: CommentBody_comment$data;
        readonly ' $fragmentRefs': FragmentRefs<'CommentBody_comment'>;
    }

    interface Props {
        comment: CommentBody_comment$key;
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

        return (
            <>
                <p>{data!.body!.text}</p>
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
        count?: number;
        cursor?: string;
        id: string;
    }
    interface FriendsListPaginationQueryResponse {
        readonly node: {
            readonly ' $fragmentRefs': FragmentRefs<'FriendsListComponent_user'>;
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
        readonly ' $refType': 'FriendsListComponent_user';
    }
    type FriendsListComponent_user$data = FriendsListComponent_user;
    interface FriendsListComponent_user$key {
        readonly ' $data'?: FriendsListComponent_user$data;
        readonly ' $fragmentRefs': FragmentRefs<'FriendsListComponent_user'>;
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
        count?: number;
        cursor?: string;
        id: string;
    }
    interface FriendsListPaginationQueryResponse {
        readonly node: {
            readonly ' $fragmentRefs': FragmentRefs<'FriendsListComponent_user'>;
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
        readonly ' $refType': 'FriendsListComponent_user';
    }
    type FriendsListComponent_user$data = FriendsListComponent_user;
    interface FriendsListComponent_user$key {
        readonly ' $data'?: FriendsListComponent_user$data;
        readonly ' $fragmentRefs': FragmentRefs<'FriendsListComponent_user'>;
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
 * Tests for useBlockingPaginationFragment
 * see https://relay.dev/docs/en/experimental/api-reference#useblockingpaginationfragment
 */
function BlockingPaginationFragment() {
    interface FriendsListPaginationQueryVariables {
        count?: number;
        cursor?: string;
        id: string;
    }
    interface FriendsListPaginationQueryResponse {
        readonly node: {
            readonly ' $fragmentRefs': FragmentRefs<'FriendsListComponent_user'>;
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
        readonly ' $refType': 'FriendsListComponent_user';
    }
    type FriendsListComponent_user$data = FriendsListComponent_user;
    interface FriendsListComponent_user$key {
        readonly ' $data'?: FriendsListComponent_user$data;
        readonly ' $fragmentRefs': FragmentRefs<'FriendsListComponent_user'>;
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
            refetch, // For refetching connection
        } = useBlockingPaginationFragment<FriendsListPaginationQuery, FriendsListComponent_user$key>(
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

function BlockingPaginationFragment_WithNonNullUserProp() {
    interface FriendsListPaginationQueryVariables {
        count?: number;
        cursor?: string;
        id: string;
    }
    interface FriendsListPaginationQueryResponse {
        readonly node: {
            readonly ' $fragmentRefs': FragmentRefs<'FriendsListComponent_user'>;
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
        readonly ' $refType': 'FriendsListComponent_user';
    }
    type FriendsListComponent_user$data = FriendsListComponent_user;
    interface FriendsListComponent_user$key {
        readonly ' $data'?: FriendsListComponent_user$data;
        readonly ' $fragmentRefs': FragmentRefs<'FriendsListComponent_user'>;
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
            refetch, // For refetching connection
        } = useBlockingPaginationFragment<FriendsListPaginationQuery, FriendsListComponent_user$key>(
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
