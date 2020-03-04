import { useMutation, useQuery, useInfiniteQuery, QueryKey, QueryFunction, usePaginatedQuery, QueryKeyVariablesArgs } from "react-query";

const queryFn = () => Promise.resolve(true);
const queryFn1: QueryFunction<boolean> = () => Promise.resolve(true);
const queryFn2: QueryFunction<boolean> = () => Promise.resolve(true);
const queryFn3: QueryFunction<boolean, [number, {foo: 'bar'}]> = (arg1: string, arg2: number, arg3: {foo: string}) => Promise.resolve(true);

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
querySimple.refetch(); // $ExpectType Promise<any>

// Query Variables
const param = 'test';
const queryVariables = useQuery(['todos', {param}],
    (key, variables) => Promise.resolve(variables.param === 'test'));

queryVariables.data; // $ExpectType boolean | undefined
queryVariables.refetch({variables: {param: 'foo'}}); // $ExpectType Promise<any>
queryVariables.refetch({variables: {other: 'foo'}}); // $ExpectError

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
useInfiniteQuery(['projects', 0], (key, cursor) => {
    return Promise.resolve({
        nextCursor: cursor + 1
    });
}, {
    getFetchMore: (lastGroup, allGroups) => lastGroup.nextCursor,
});

// Simple mutation
const mutation = () => Promise.resolve(['foo', 'bar']);

const [mutate, {data, error, status}] = useMutation(mutation);
mutate();
mutate(undefined, {
    updateQuery: 'query',
    waitForRefetchQueries: false
});
data; // $ExpectType string[] | undefined

// Invalid mutatation funciton
useMutation((arg1: string, arg2: string) => Promise.resolve()); // $ExpectError
useMutation((arg1: string) => null); // $ExpectError
