import React from 'react';

import {
    fetchQuery,
    RelayEnvironmentProvider,
    useRelayEnvironment,
    useQuery,
    useFragment,
    useRefetchableFragment,
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
