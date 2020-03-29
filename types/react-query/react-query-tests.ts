import {
    useMutation,
    useQuery,
    usePaginatedQuery,
    useInfiniteQuery,
    useIsFetching,
    setConsole,
    ReactQueryProviderConfig,
} from 'react-query';

// Query - simple case
const querySimple = useQuery('todos', () => Promise.resolve('test'));
querySimple.data; // $ExpectType string | undefined
querySimple.error; // $ExpectType unknown
querySimple.isFetching; // $ExpectType boolean
querySimple.refetch(); // $ExpectType Promise<string>
querySimple.fetchMore; // $ExpectError
querySimple.canFetchMore; // $ExpectError
querySimple.isFetchingMore; // $ExpectError

// Query Variables
const param = 'test';
const queryVariables = useQuery(['todos', { param }, 10], (key, variables, id) =>
    Promise.resolve(variables.param === 'test'),
);

queryVariables.data; // $ExpectType boolean | undefined
queryVariables.refetch(); // $ExpectType Promise<boolean>
queryVariables.refetch({ force: true }); // $ExpectType Promise<boolean>

const queryFn1 = (name: string, params: { bar: string }) => Promise.resolve(10);
const queryFn2 = () => Promise.resolve('test');

declare const condition: boolean;

// Query with falsey query key
useQuery(condition && ['foo', { bar: 'baz' }], queryFn1);
useQuery(condition && ['foo', { bar: 'baz' }], queryFn2);
useQuery({
    queryKey: condition && ['foo', { bar: 'baz' }],
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

useQuery(['key', { a: 1 }], [{ b: true }, { c: 'c' }], (key1, key2, var1, var2) =>
    Promise.resolve(key1 === 'key' && key2.a === 1 && var1.b && var2.c === 'c'),
);

// Paginated mode
const queryPaginated = usePaginatedQuery('key', () => Promise.resolve({ data: [1, 2, 3], next: true }), {
    refetchInterval: 1000,
});
queryPaginated.resolvedData; // $ExpectType { data: number[]; next: boolean; } | undefined
queryPaginated.latestDate; // $ExpectType { data: number[]; next: boolean; } | undefined
queryPaginated.data; // $ExpectError

async function fetchWithCursor(key: string, cursor?: string) {
    return [1, 2, 3];
}
function getFetchMore(last: number[], all: number[][]) {
    return last.length ? String(all.length + 1) : false;
}

useInfiniteQuery<number[], [string], string>(['key'], fetchWithCursor, {
    getFetchMore: (last, all) => 'next',
});
useInfiniteQuery(['key'], fetchWithCursor, { getFetchMore });
useInfiniteQuery('key', fetchWithCursor, { getFetchMore });
useInfiniteQuery(() => condition && 'key', fetchWithCursor, { getFetchMore });
const infiniteQuery = useInfiniteQuery(['key'], fetchWithCursor, { getFetchMore });
// The next example does not work; the type for cursor does not get inferred.
// useInfiniteQuery(['key'], fetchWithCursor, {
//     getFetchMore: (last, all) => 'string',
// });

infiniteQuery.data; // $ExpectType number[][]
infiniteQuery.fetchMore(); // $ExpectType Promise<number[][]> | undefined
infiniteQuery.fetchMore('next'); // $ExpectType Promise<number[][]> | undefined

async function fetchWithCursor2(key: string, debuglog?: (...args: any[]) => void, cursor?: string) {
    if (debuglog) debuglog(key, cursor);
    return [1, 2, 3];
}
function log(...args: any[]) {}

useInfiniteQuery<number[], [string], [undefined | ((...args: any[]) => void)], string>(
    ['key'],
    [undefined],
    fetchWithCursor2,
    {
        getFetchMore: (last, all) => 'next',
    },
);
useInfiniteQuery(['key'], [log], fetchWithCursor2, { getFetchMore });
useInfiniteQuery('key', [log], fetchWithCursor2, { getFetchMore });
useInfiniteQuery(() => condition && 'key', [log], fetchWithCursor2, { getFetchMore });

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

useIsFetching(); // $ExpectType number

setConsole({ log, error: log, warn: log });

const globalConfig: ReactQueryProviderConfig = {
    onError(err, snapshot) {
        log('Error', err, snapshot);
    },
    onMutate(variables) {
        log(variables);
    },
    suspense: true,
};
