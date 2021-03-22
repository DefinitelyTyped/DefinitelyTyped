import {
    useMutation,
    useQuery,
    usePaginatedQuery,
    useInfiniteQuery,
    useIsFetching,
    setConsole,
    ReactQueryProviderConfig,
} from 'react-query';

function simpleQuery() {
    // Query - simple case
    const querySimple = useQuery('todos', () => Promise.resolve('test'));
    querySimple.data; // $ExpectType string | undefined
    querySimple.error; // $ExpectType unknown
    querySimple.isFetching; // $ExpectType boolean
    querySimple.refetch(); // $ExpectType Promise<string>
    querySimple.fetchMore; // $ExpectError
    querySimple.canFetchMore; // $ExpectError
    querySimple.isFetchingMore; // $ExpectError
}

function queryWithVariables() {
    // Query Variables
    const param = 'test';
    const queryVariables = useQuery(['todos', { param }, 10], (key, variables, id) =>
        Promise.resolve(variables.param === 'test'),
    );

    queryVariables.data; // $ExpectType boolean | undefined
    queryVariables.refetch(); // $ExpectType Promise<boolean>
    queryVariables.refetch({ force: true }); // $ExpectType Promise<boolean>
}

function invalidSimpleQuery() {
    // first element in the key must be a string
    useQuery([10, 'a'], async (id, key) => id); // $ExpectError
}

function conditionalQuery(condition: boolean) {
    const queryFn1 = (name: string, params: { bar: string }) => Promise.resolve(10);
    const queryFn2 = () => Promise.resolve('test');

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
}

function queryWithObjectSyntax(condition: boolean) {
    useQuery({
        queryKey: ['key'],
        queryFn: async key => key,
    }).data; // $ExpectType string | undefined

    useQuery({
        queryKey: ['key', 10],
        variables: [true, 20],
        queryFn: async (
            key, // $ExpectType string
            id, // $ExpectType number
            var1, // $ExpectType boolean
            var2, // $ExpectType number
        ) => 'yay!',
    }).data; // $ExpectType string | undefined

    useQuery({
        queryKey: 'key',
        variables: [true, 20],
        queryFn: async (
            key, // $ExpectType "key"
            var1, // $ExpectType boolean
            var2, // $ExpectType number
        ) => 'yay!',
    }).data; // $ExpectType string | undefined

    useQuery({
        queryKey: condition && 'key',
        queryFn: async (
            key, // $ExpectType "key"
        ) => 10,
    }).data; // $ExpectType number | undefined
}

function queryWithNestedKey() {
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
}

function queryWithComplexKeysAndVariables() {
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
}

function paginatedQuery() {
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
}

function paginatedQueryWithObjectSyntax(condition: boolean) {
    usePaginatedQuery({
        queryKey: condition && ['key', { a: 10 }],
        variables: [true],
        queryFn: async (key, { a }, debug) => (key === 'key' && a === 10 && debug ? 'yes' : 'no'),
    }).latestData; // $ExpectType "yes" | "no" | undefined
    usePaginatedQuery({
        queryKey: 'key',
        variables: [true],
        queryFn: async (key, debug) => (key === 'key' && debug ? 'yes' : 'no'),
    }).latestData; // $ExpectType "yes" | "no" | undefined
    usePaginatedQuery({
        queryKey: condition && (() => condition && 'key'),
        variables: [10],
        queryFn: async (key, level) => (key === 'key' && level === 10 ? 'yes' : 'no'),
    }).latestData; // $ExpectType "yes" | "no" | undefined
}

function simpleInfiniteQuery(condition: boolean) {
    async function fetchWithCursor(key: string, cursor?: string) {
        return [1, 2, 3];
    }
    function getFetchMore(last: number[], all: number[][]) {
        return last.length ? String(all.length + 1) : false;
    }

    useInfiniteQuery<number[], [string], string>(['key'], fetchWithCursor, {
        getFetchMore: (
            last, // $ExpectType number[]
            all, // $ExpectType number[][]
        ) => 'next',
        // type of data in success is the array of results
        onSuccess(
            data, // $ExpectType number[][]
        ) {},
        onSettled(
            data, // $ExpectType number[][] | undefined
            error, // $ExpectType unknown
        ) {},
        initialData: () =>
            condition
                ? [
                      [1, 2],
                      [2, 3],
                  ]
                : undefined,
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
}

function infiniteQueryWithObjectSyntax(condition: boolean) {
    useInfiniteQuery({
        queryKey: ['key', 1],
        queryFn: async (key, id, next = 0) => ({ next: next + 1 }),
        config: {
            getFetchMore: (last: { next: number }) => last.next, // annotation on this type is required to infer the type
        },
    }).data; // $ExpectType { next: number; }[]
    useInfiniteQuery({
        queryKey: condition && (() => condition && ['key', 1]),
        queryFn: async (key, id, next = 0) => ({ next: next + 1 }),
        config: {
            getFetchMore: (last: { next: number }) => last.next, // annotation on this type is required to infer the type
        },
    }).data; // $ExpectType { next: number; }[]
    useInfiniteQuery({
        queryKey: 'key',
        queryFn: async (
            key, // $ExpectType "key"
            next = 0,
        ) => ({ next: next + 1 }),
        config: {
            getFetchMore: (last: { next: number }) => last.next, // annotation on this type is required to infer the type
        },
    }).data; // $ExpectType { next: number; }[]
    useInfiniteQuery({
        queryKey: condition && (() => condition && ('key' as const)),
        queryFn: async (
            key, // $ExpectType "key"
            next = 0,
        ) => ({ next: next + 1 }),
        config: {
            getFetchMore: (last: { next: number }) => last.next, // annotation on this type is required to infer the type
        },
    }).data; // $ExpectType { next: number; }[]
}

function log(...args: any[]) {}

function infiniteQueryWithVariables(condition: boolean) {
    async function fetchWithCursor2(key: string, debuglog?: (...args: any[]) => void, cursor?: string) {
        if (debuglog) debuglog(key, cursor);
        return [1, 2, 3];
    }
    function getFetchMore(last: number[], all: number[][]) {
        return last.length ? String(all.length + 1) : false;
    }

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
}

function simpleMutation() {
    // Simple mutation
    const mutation = () => Promise.resolve(['foo', 'bar']);

    const [mutate] = useMutation(mutation, {
        onSuccess(result) {
            result; // $ExpectType string[]
        },
    });
    mutate();
    mutate(undefined, {
        throwOnError: true,
        onSettled(result, error) {
            result; // $ExpectType string[] | undefined
            error; // $ExpectType unknown
        },
    });

    // Invalid mutatation funciton
    useMutation((arg1: string, arg2: string) => Promise.resolve()); // $ExpectError
    useMutation((arg1: string) => null); // $ExpectError
}

function mutationWithVariables() {
    // Mutation with variables
    const [mutateWithVars] = useMutation(({ param }: { param: number }) => Promise.resolve(Boolean(param)), {
        useErrorBoundary: true,
        onMutate(variables) {
            variables; // $ExpectType { param: number; }
            return { snapshot: variables.param };
        },
    });

    mutateWithVars(
        { param: 1 },
        {
            async onSuccess(data) {
                data; // $ExpectType boolean
            },
        },
    );

    mutateWithVars({ param: 'test' }); // $ExpectError
}

function helpers() {
    useIsFetching(); // $ExpectType number

    setConsole({ log, error: log, warn: log });
}

function globalConfig() {
    const globalConfig: ReactQueryProviderConfig = {
        onError(err, snapshot) {
            log('Error', err, snapshot);
        },
        onMutate(variables) {
            log(variables);
        },
        suspense: true,
    };
}

function dataDiscriminatedUnion() {
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
}

function mutationStatusDiscriminatedUnion() {
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
}
