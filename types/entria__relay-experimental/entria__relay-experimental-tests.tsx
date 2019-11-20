import React from 'react';

import {
    fetchQuery,
    RelayEnvironmentProvider,
    useRelayEnvironment,
    useQuery,
    useFragment,
    useRefetchableFragment,
    usePaginationFragment,
} from 'entria__relay-experimental';
import { Environment, RecordSource, Store, Network } from 'relay-runtime';
import { graphql } from 'react-relay';

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
            <RelayComponent />
        </RelayEnvironmentProvider>
    );
}

function RelayComponent() {
    const { execute } = useRelayEnvironment();

    return (
        <React.Suspense fallback={<div>Loading...</div>}>
            <TodoList />
        </React.Suspense>
    );
}

interface Todo {
    id: string;
    name: string;
}

interface Data {
    variables: {};
    response: {
        todos: Todo[];
    };
}

function TodoList() {
    const data = useQuery<Data>(
        graphql`
            query TodoListQuery {
                viewer {
                    todos {
                        id
                        ...TodoItemFragment
                    }
                }
            }
        `,
        null,
        { fetchPolicy: 'store-only' },
    );

    return (
        <>
            {data.todos.map(todo => (
                <>
                    <TodoItem todo={todo} />
                    <TodoItemRefetchable todo={todo} />
                </>
            ))}
        </>
    );
}

interface TodoItemProps {
    todo: Todo;
}

function TodoItem(props: TodoItemProps) {
    const todo = useFragment<Todo>(
        graphql`
            fragment TodoItemFragment on Todo {
                id
                name
            }
        `,
        props.todo,
    );

    return <div>{todo.id}</div>;
}

function TodoItemRefetchable(props: TodoItemProps) {
    const [todo, refetch] = useRefetchableFragment(
        graphql`
            fragment TodoItemFragment on Todo @refetchable(queryName: "TodoItemFragmentRefetchQuery") {
                text
                isComplete
            }
        `,
        props.todo,
    );

    refetch(
        { id: 'id:2' },
        {
            onComplete: error => {
                console.info('teste');
            },
        },
    );

    return <div>todo.name</div>;
}

interface User {
    id: string;
    name: string;
    todos: Todo[];
}
interface UserData {
    variables: {};
    response: {
        node: User;
    };
}

function User() {
    const { node } = useQuery<UserData>(
        graphql`
            query UserQuery($id: ID!, $last: Int, $first: Int, $after: ID, $before: ID) {
                node(id: $id) {
                    ...UserFragment
                }
            }
        `,
        {
            id: '1',
            first: 1,
            last: null,
            before: null,
            after: 'cursor:1',
        },
    );

    return <UserTodos user={node} />;
}

interface UserTodosProps {
    user: User;
}

function UserTodos(props: UserTodosProps) {
    const {
        data,
        hasNext,
        hasPrevious,
        isLoadingNext,
        isLoadingPrevious,
        loadNext,
        loadPrevious,
        refetch,
    } = usePaginationFragment(
        graphql`
            fragment UserFragment on User @refetchable(queryName: "UserFragmentPaginationQuery") {
                id
                name
                todos(first: $first, last: $last, after: $after, before: $before)
                    @connection(key: "UserFragment_todos") {
                    edges {
                        node {
                            id
                            ...TodoFragment
                        }
                    }
                }
            }
        `,
        props.user,
    );

    return <div>{data.name}</div>;
}
