import { useMutation, useQuery, usePaginatedQuery } from 'react-query';

// Query - simple case
const querySimple = useQuery('todos', () => Promise.resolve('test'));
querySimple.data; // $ExpectType string | null
querySimple.error; // $ExpectType Error | null
querySimple.isFetching; // $ExpectType boolean
querySimple.refetch(); // $ExpectType Promise<void>
querySimple.fetchMore; // $ExpectError
querySimple.canFetchMore; // $ExpectError
querySimple.isFetchingMore; // $ExpectError

// Query Variables
const param = 'test';
const queryVariables = useQuery(['todos', { param }, 10], (key, variables, id) =>
    Promise.resolve(variables.param === 'test'),
);

queryVariables.data; // $ExpectType boolean | undefined
queryVariables.refetch(); // $ExpectType Promise<void>
queryVariables.refetch({ force: true }); // $ExpectError

const queryFn1 = (name: string, params: { bar: string }) => Promise.resolve(10);
const queryFn2 = () => Promise.resolve('test');

// Query with falsey query key
useQuery(false && ['foo', { bar: 'baz' }], queryFn1);
useQuery(false && ['foo', { bar: 'baz' }], queryFn2);
useQuery({
    queryKey: false && ['foo', { bar: 'baz' }],
    queryFn: queryFn1,
});

// Query with query key function
useQuery(() => ['foo', { bar: 'baz' }], queryFn1);
useQuery(() => ['foo', { bar: 'baz' }], queryFn2);

// Query with nested variabes
const queryNested = useQuery(
    [
        'key',
        {
            nested: {
                props: [1, 2],
            },
        },
    ],
    (key, variables) => Promise.resolve(variables.nested.props[0]),
);
queryNested.data; // $ExpectType number | undefined

// Paginated mode
const queryPaginated = usePaginatedQuery('key', () => Promise.resolve({ data: [1, 2, 3], next: true }), {
    refetchInterval: 1000,
    //paginated: true,
    //getCanFetchMore: (lastPage, allPages) => lastPage.next,
});
queryPaginated.resolvedData; // $ExpectType { data: number[]; next: boolean; }[] | undefined
queryPaginated.latestDate; // $ExpectType { data: number[]; next: boolean; }[] | undefined
queryPaginated.data; // $ExpectError

// Simple mutation
const mutation = () => Promise.resolve(['foo', 1]);

const [mutate] = useMutation(mutation, {
    // refetchQueries: ['todos', ['todo', { id: 5 }], 'reminders'],
    // refetchQueriesOnFailure: false,
});
mutate();
mutate(undefined, {
    throwOnError: true,
    // updateQuery: 'query',
    // waitForRefetchQueries: false,
});

// Invalid mutatation funciton
useMutation((arg1: string, arg2: string) => Promise.resolve()); // $ExpectError
useMutation((arg1: string) => null); // $ExpectError

// Mutation with variables
const [mutateWithVars] = useMutation(({ param }: { param: number }) => Promise.resolve(Boolean(param)), {
    useErrorBoundary: true,
    // refetchQueries: ['todos', ['todo', { id: 5 }], 'reminders'],
    // refetchQueriesOnFailure: false,
});

mutateWithVars(
    { param: 1 },
    {
        async onSuccess(data) {
            data; // $ExpectType boolean
        },
        // updateQuery: 'query',
        // waitForRefetchQueries: false,
    },
);

mutateWithVars({ param: 'test' }); // $ExpectError
