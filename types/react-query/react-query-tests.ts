import { useMutation, useQuery } from "react-query";

const queryFn = () => Promise.resolve();

// Query - simple case
const querySimple = useQuery('todos',
    () => Promise.resolve('test'));
querySimple.data; // $ExpectType string | null
querySimple.error; // $ExpectType Error | null
querySimple.isLoading; // $ExpectType boolean
querySimple.refetch(); // $ExpectType Promise<void>
queryPaginated.fetchMore; // $ExpectError
queryPaginated.canFetchMore; // $ExpectError
queryPaginated.isFetchingMore; // $ExpectError

// Query Variables
const param = 'test';
const queryVariables = useQuery(['todos', {param}],
    (variables) => Promise.resolve(variables.param === 'test'));

queryVariables.data; // $ExpectType boolean | null
queryVariables.refetch({variables: {param: 'foo'}}); // $ExpectType Promise<void>
queryVariables.refetch({variables: {other: 'foo'}}); // $ExpectError

// Query with falsey query key
useQuery(false && ['foo', { bar: 'baz' }], queryFn);

// Query with query key function
useQuery(() => ['foo', { bar: 'baz' }], queryFn);

// Query with nested variabes
const queryNested = useQuery(['key', {
    nested: {
        props: [1, 2]
    }
}], (variables) => Promise.resolve(variables.nested.props[0]));
queryNested.data; // $ExpectType number | null

// Paginated mode
const queryPaginated = useQuery('key', () => Promise.resolve({data: [1, 2, 3], next: true}), {
    refetchInterval: 1000,
    paginated: true,
    getCanFetchMore: (lastPage, allPages) => lastPage.next
});
queryPaginated.data; // $ExpectType { data: number[]; next: boolean; }[] | null
queryPaginated.fetchMore; // $ExpectType (variables?: {} | undefined) => Promise<{ data: number[]; next: boolean; }> || (variables?: object | undefined) => Promise<{ data: number[]; next: boolean; }>
queryPaginated.canFetchMore; // $ExpectType boolean
queryPaginated.isFetchingMore; // $ExpectType boolean

// Paginated mode - check if getCanFetchMore is required
useQuery('key', () => Promise.resolve(), {paginated: true}); // $ExpectError

// Simple mutation
const mutation = () => Promise.resolve(['foo', 1]);

const [mutate] = useMutation(mutation, {
    refetchQueries: ['todos', ['todo', { id: 5 }], 'reminders'],
    refetchQueriesOnFailure: false
});
mutate();
mutate(undefined, {
    updateQuery: 'query',
    waitForRefetchQueries: false
});

// Invalid mutatation funciton
useMutation((arg1: string, arg2: string) => Promise.resolve()); // $ExpectError
useMutation((arg1: string) => null); // $ExpectError

// Mutation with variables
const [mutateWithVars] = useMutation(
    ({param}: {param: number}) => Promise.resolve(Boolean(param)),
    {
    refetchQueries: ['todos', ['todo', { id: 5 }], 'reminders'],
    refetchQueriesOnFailure: false
});

mutateWithVars({param: 1}, {
  updateQuery: 'query',
  waitForRefetchQueries: false
});

mutateWithVars({param: 'test'}); // $ExpectError
