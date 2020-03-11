import { useMutation, useQuery, useInfiniteQuery, QueryKey, usePaginatedQuery, queryCache } from 'react-query';

const queryFn = () => Promise.resolve(true);

const queryKey1: QueryKey = 'key';
const queryKey2: QueryKey = ['key', 1];
const queryKey3: QueryKey = ['key', { foo: 'bar' }];
const queryKey4: QueryKey = ['key', { foo: 'bar' }, 123];

const invalidKey1: QueryKey = [{ foo: 'bar' }]; // $ExpectError
const invalidKey2: QueryKey = 123; // $ExpectError

// Query - simple case
const querySimple = useQuery('todos',
    (key: string) => Promise.resolve(key));

querySimple.status; // $ExpectType "loading" | "error" | "success"
querySimple.data; // $ExpectType string | undefined
querySimple.error; // $ExpectType Error | null
querySimple.isFetching; // $ExpectType boolean
querySimple.failureCount; // $ExpectType number
querySimple.refetch({force: true, thrownOnError: true}); // $ExpectType void

// Query Variables
const param = 'test';
const queryResult = useQuery(['todos', {param}],
    (key, variables) => Promise.resolve([param]));

queryResult.data; // $ExpectType string[] | undefined

// Discriminated union over status
if (queryResult.status === 'loading') {
    queryResult.data; // $ExpectType undefined
    queryResult.error; // $ExpectType null
}

if (queryResult.status === 'error') {
    queryResult.data; // $ExpectType undefined
    queryResult.error; // $ExpectType Error
}

if (queryResult.status === 'success') {
    queryResult.data; // $ExpectType string[]
    queryResult.error; // $ExpectType null
}

// Query with falsey query key
useQuery(false && ['foo', { bar: 'baz' }], queryFn);

// Query with nested variabes
const queryNested = useQuery(['key', {
    nested: {
        props: [1, 2]
    }
}], (key, variables) => Promise.resolve(variables.nested.props[0]));
queryNested.data; // $ExpectType number | undefined

// Query key arrays
useQuery(['todo', 123, {key: 'foo'}], (key, arg1, arg2) => {
    key; // $ExpectType string
    arg1; // $ExpectType number
    arg2; // $ExpectType { key: string; }
    return Promise.resolve();
});

// Query with query key function
useQuery(() => ['todo', 123, 'foo'], (
    key, // $ExpectType string
    arg1, // $ExpectType number
    arg2, // $ExpectType string
) => Promise.resolve());

// Paginated Query
const queryPaginated = usePaginatedQuery(['key', 0], (key, page) =>  Promise.resolve({data: [1, 2, 3]}));
queryPaginated.resolvedData; // $ExpectType { data: number[]; } | undefined
queryPaginated.latestData; // $ExpectType { data: number[]; } | undefined
queryPaginated.error; // $ExpectType Error | null
queryPaginated.isFetching; // $ExpectType boolean

// Infinite Query
const infiniteQuery = useInfiniteQuery(['projects', 0], (key, cursor) => {
    return Promise.resolve({
        nextCursor: cursor + 1
    });
}, {
    getFetchMore: (lastGroup, allGroups) => lastGroup.nextCursor,
});

infiniteQuery.fetchMore(10);
infiniteQuery.fetchMore({ page: 20 }); // $ExpectError

// Simple mutation
const mutation = () => Promise.resolve(['foo', 'bar']);
const [mutate, mutationState] = useMutation(mutation);
mutate();
// TODO: handle invalid argument passed to mutationFn
// mutate('arg'); // $ExpectError
mutationState.data; // $ExpectType string[] | undefined

// Discriminated union over status
if (mutationState.status === 'idle') {
    mutationState.data; // $ExpectType undefined
    mutationState.error; // $ExpectType null
}

if (mutationState.status === 'loading') {
    mutationState.data; // $ExpectType undefined
    mutationState.error; // $ExpectType null
}

if (mutationState.status === 'error') {
    mutationState.data; // $ExpectType undefined
    mutationState.error; // $ExpectType any
}

if (mutationState.status === 'success') {
    mutationState.data; // $ExpectType string[]
    mutationState.error; // $ExpectType null
}

// Mutation variables
const [mutateWithVars] = useMutation((variable: number) => Promise.resolve());
// TODO: handle required argument of mutationFn
// mutateWithVars(); // $ExpectError
mutateWithVars(1);
mutateWithVars(1, 2); // $ExpectError
mutateWithVars('foo'); // $ExpectError

// Mutate fn with optional vars
const [mutateWithOptionalVar] = useMutation((variable: number = 1) => Promise.resolve());
mutateWithVars();
mutateWithVars(1);

// Invalid mutatation funciton
useMutation((arg1: string, arg2: string) => Promise.resolve()); // $ExpectError
useMutation((arg1: string) => null); // $ExpectError
