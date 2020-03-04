import { useMutation, useQuery, useInfiniteQuery, QueryKey, QueryFunction, usePaginatedQuery } from "react-query";

const queryFn: QueryFunction<string, [string, number]> = (arg1: string, arg2: number) => Promise.resolve('string');
const queryKey1: QueryKey = 'key';
const queryKey2: QueryKey = ['key', 1];
const queryKey3: QueryKey = ['key', { foo: 'bar' }];
const queryKey4: QueryKey = ['key', { foo: 'bar' }, 123];

const invalidKey1: QueryKey = [{ foo: 'bar' }]; // $ExpectError
const invalidKey2: QueryKey = 123; // $ExpectError

// Query - simple case
const querySimple = useQuery('todos',
    () => Promise.resolve('test'));

querySimple.status; // $ExpectType 'loading' | 'error' | 'success'
querySimple.data; // $ExpectType string | null
querySimple.error; // $ExpectType Error | null
querySimple.isFetching; // $ExpectType boolean
querySimple.failureCount; // $ExpectType boolean
querySimple.refetch(); // $ExpectType Promise<void>


// Query Variables
const param = 'test';
const queryVariables = useQuery(['todos', {param}],
    (key, variables) => Promise.resolve(variables.param === 'test'));

queryVariables.data; // $ExpectType boolean | null
queryVariables.refetch({variables: {param: 'foo'}}); // $ExpectType Promise<void>
queryVariables.refetch({variables: {other: 'foo'}}); // $ExpectError

// Query with falsey query key
useQuery(false && ['foo', { bar: 'baz' }], queryFn);

// Query with nested variabes
const queryNested = useQuery(['key', {
    nested: {
        props: [1, 2]
    }
}], (key, variables) => Promise.resolve(variables.nested.props[0]));
queryNested.data; // $ExpectType number | null

// Query key arrays
useQuery(['todo', 123, {key: 'foo'}], (key, arg1, arg2) => {
    key; // $ExpectType string
    arg1; // $ExpectType number
    arg2; // $ExpectType {key: string}
    return Promise.resolve();
});

// Query with query key function
useQuery(() => ['todo', 123, {key: 'foo'}], (key, arg1, arg2) => {
    key; // $ExpectType string
    arg1; // $ExpectType number
    arg2; // $ExpectType {key: string};
    return Promise.resolve()
});

// Paginated Query
const queryPaginated = usePaginatedQuery(['key', 0], (key, page) =>  Promise.resolve({data: [1, 2, 3]}));
queryPaginated.resolvedData; // $ExpectType { data: number[]}[] | undefined
queryPaginated.latestData; // $ExpectType { data: number[]}[] | undefined
queryPaginated.error; // $ExpectType Error
queryPaginated.isFetching; // $ExpectType boolean

// Infinite Query
useInfiniteQuery(['projects', 0], (key, cursor) => {
    return Promise.resolve({
        nextCursor: cursor + 1
    });
}, {
    getFetchMore: (lastGroup, allGroups) => lastGroup.nextCursor,
})

// Simple mutation
const mutation = () => Promise.resolve(['foo', 1]);

const [mutate, {data, error, status}] = useMutation(mutation);
mutate();
mutate(undefined, {
    updateQuery: 'query',
    waitForRefetchQueries: false
});
data; // $ExpectType [string, number] | undefined

// Invalid mutatation funciton
useMutation((arg1: string, arg2: string) => Promise.resolve()); // $ExpectError
useMutation((arg1: string) => null); // $ExpectError

