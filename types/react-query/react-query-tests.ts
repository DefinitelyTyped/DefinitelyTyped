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
// first element in the key must be a string
useQuery([10, 'a'], async (id, key) => id); // $ExpectError

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

useQuery(['key', { a: 1 }], [{ b: { x: 1 } }, { c: { x: 1 } }], (
    key1, // $ExpectType string
    key2, // ExpectType { a: number }
    var1, // $ExpectType { b: { x: number; }; }
    var2, // $ExpectType { c: { x: number; }; }
) => Promise.resolve(key1 === 'key' && key2.a === 1 && var1.b.x === 1 && var2.c.x === 1));

// custom key
const longKey: [string, ...number[]] = ['key', 1, 2, 3, 4, 5];
useQuery(
    longKey,
    async (
        key, // $ExpectType string
        ...ids // $ExpectType number[]
    ) => 100,
).data; // $ExpectType number | undefined

const longVariables: [boolean, ...object[]] = [true, {}];
useQuery(
    ['key'],
    longVariables,
    async (
        key, // $ExpectType string
        var1, // $ExpectType boolean
        ...vars // $ExpectType object[]
    ) => 100,
).data; // $ExpectType number | undefined

// the following example cannot work properly, as it would require concatenating tuples with infinite tails.
// ts-toolbelt library's `List.Concat` cannot do the job. It would be possible to do with `typescript-tuple` and additional trick.
// useQuery<number, typeof longKey, typeof longVariables>(longKey, longVariables, async (
//     key,        // $ExpectType string // <-- currently boolean?!
//     keyOrVar,   // $ExpectType number | boolean // <-- currently object
//     ...rest     // $ExpectType number | object  // <-- currently object[]
// ) => 100).data; // $ExpectType number | undefined

// Paginated mode
const queryPaginated = usePaginatedQuery('key', () => Promise.resolve({ data: [1, 2, 3], next: true }), {
    refetchInterval: 1000,
});
queryPaginated.resolvedData; // $ExpectType { data: number[]; next: boolean; } | undefined
queryPaginated.latestData; // $ExpectType { data: number[]; next: boolean; } | undefined
queryPaginated.data; // $ExpectError

// Discriminated union over status
if (queryPaginated.status === 'loading') {
    queryPaginated.resolvedData; // $ExpectType { data: number[]; next: boolean; } | undefined
    queryPaginated.latestData; // $ExpectType { data: number[]; next: boolean; } | undefined
    queryPaginated.error; // $ExpectType unknown
}

if (queryPaginated.status === 'error') {
    queryPaginated.resolvedData; // $ExpectType { data: number[]; next: boolean; } | undefined
    queryPaginated.latestData; // $ExpectType { data: number[]; next: boolean; } | undefined
    queryPaginated.error; // $ExpectType unknown
}

if (queryPaginated.status === 'success') {
    queryPaginated.resolvedData; // $ExpectType { data: number[]; next: boolean; }
    queryPaginated.latestData; // $ExpectType { data: number[]; next: boolean; }
    queryPaginated.error; // $ExpectType null
}

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

// Tests from PR #42830
function pr42830() {
    const queryFn = () => Promise.resolve(true);

    // const queryKey1: QueryKey = 'key';
    // const queryKey2: QueryKey = ['key', 1];
    // const queryKey3: QueryKey = ['key', { foo: 'bar' }];
    // const queryKey4: QueryKey = ['key', { foo: 'bar' }, 123];

    // const invalidKey1: QueryKey = [{ foo: 'bar' }]; // $ExpectError
    // const invalidKey2: QueryKey = 123; // $ExpectError

    // Query - simple case
    const querySimple = useQuery('todos', (key: string) => Promise.resolve(key));

    querySimple.status; // $ExpectType "loading" | "error" | "success"
    querySimple.data; // $ExpectType string | undefined

    // corrected
    // querySimple.error; // $ExpectType Error | null
    querySimple.error; // $ExpectType unknown

    querySimple.isFetching; // $ExpectType boolean
    querySimple.failureCount; // $ExpectType number

    // correct
    // querySimple.refetch({force: true, thrownOnError: true}); // $ExpectType void
    querySimple.refetch({ force: true, throwOnError: true }); // $ExpectType Promise<string>

    // Query Variables
    const param = 'test';
    const queryResult = useQuery(['todos', { param }], (key, variables) => Promise.resolve([param]));

    queryResult.data; // $ExpectType string[] | undefined

    // Discriminated union over status
    if (queryResult.status === 'loading') {
        queryResult.data; // $ExpectType string[] | undefined
        queryResult.error; // $ExpectType unknown
    }

    if (queryResult.status === 'error') {
        // disabled
        queryResult.data; // $ExpectType string[] | undefined
        queryResult.error; // $ExpectType unknown
    }

    if (queryResult.status === 'success') {
        // disabled
        queryResult.data; // $ExpectType string[]
        queryResult.error; // $ExpectType null
    }

    // Query with falsey query key
    useQuery(false && ['foo', { bar: 'baz' }], queryFn);

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

    // Query key arrays
    useQuery(['todo', 123, { key: 'foo' }], (key, arg1, arg2) => {
        key; // $ExpectType string
        arg1; // $ExpectType number
        arg2; // $ExpectType { key: string; }
        return Promise.resolve();
    });

    // Query with query key function
    useQuery(
        () => ['todo', 123, 'foo'],
        (
            key, // $ExpectType string
            arg1, // $ExpectType number
            arg2, // $ExpectType string
        ) => Promise.resolve(),
    );

    // Paginated Query
    const queryPaginated = usePaginatedQuery(['key', 0], (key, page) => Promise.resolve({ data: [1, 2, 3] }));
    queryPaginated.resolvedData; // $ExpectType { data: number[]; } | undefined
    queryPaginated.latestData; // $ExpectType { data: number[]; } | undefined
    // corrected
    // queryPaginated.error; // $ExpectType Error | null
    queryPaginated.error; // $ExpectType unknown
    queryPaginated.isFetching; // $ExpectType boolean

    // Infinite Query
    // corrected
    // const infiniteQuery = useInfiniteQuery(['projects', 0], (key, cursor) => {
    // if key is [string, number] then function must take (key: string, id: number, cursor?: number)
    const infiniteQuery = useInfiniteQuery(
        ['projects', 0],
        (key, id, cursor: number = 0) => {
            // added
            key; // $ExpectType string
            id; // $ExpectType number
            return Promise.resolve({
                nextCursor: cursor + 1,
            });
        },
        {
            getFetchMore: (lastGroup, allGroups) => lastGroup.nextCursor,
        },
    );

    infiniteQuery.fetchMore(10);
    infiniteQuery.fetchMore({ page: 20 }); // $ExpectError

    // Simple mutation
    const mutation = () => Promise.resolve(['foo', 'bar']);
    const [mutate, mutationState] = useMutation(mutation);
    mutate();
    // enabled
    // TODO: handle invalid argument passed to mutationFn
    // mutate('arg'); // $ExpectError
    mutate('arg'); // $ExpectError
    mutationState.data; // $ExpectType string[] | undefined

    // Discriminated union over status
    if (mutationState.status === 'idle') {
        mutationState.data; // $ExpectType undefined
        mutationState.error; // $ExpectType null
    }

    if (mutationState.status === 'loading') {
        mutationState.data; // $ExpectType undefined
        // corrected
        // mutationState.error; // $ExpectType null
        mutationState.error; // $ExpectType undefined
    }

    if (mutationState.status === 'error') {
        mutationState.data; // $ExpectType undefined
        mutationState.error; // $ExpectType unknown
    }

    if (mutationState.status === 'success') {
        mutationState.data; // $ExpectType string[]
        mutationState.error; // $ExpectType undefined
    }

    // Mutation variables
    const [mutateWithVars] = useMutation((variable: number) => Promise.resolve());
    // enabled
    // TODO: handle required argument of mutationFn
    // mutateWithVars(); // $ExpectError
    mutateWithVars(); // $ExpectError
    mutateWithVars(1);
    mutateWithVars(1, 2); // $ExpectError
    mutateWithVars('foo'); // $ExpectError

    // Mutate fn with optional vars
    const [mutateWithOptionalVar] = useMutation((variable: number = 1) => Promise.resolve());
    // corrected
    // mutateWithVars();
    mutateWithOptionalVar();
    // corrected
    // mutateWithVars(1);
    mutateWithOptionalVar(1);

    // Invalid mutatation funciton
    useMutation((arg1: string, arg2: string) => Promise.resolve()); // $ExpectError
    useMutation((arg1: string) => null); // $ExpectError
}
