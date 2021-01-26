import {
    ConcreteRequest,
    Disposable,
    DisposeFn,
    GraphQLResponse,
    Observer,
    OperationType,
    ReaderFragment,
    ReaderPaginationMetadata,
    VariablesOf,
} from 'relay-runtime';

export type Direction = 'forward' | 'backward';

export type LoadMoreFn<TQuery extends OperationType> = (
    count: number,
    options?: {
        onComplete?: (arg: Error | null) => void;
        UNSTABLE_extraVariables?: Partial<VariablesOf<TQuery>>;
    },
) => Disposable;

export interface UseLoadMoreFunctionArgs {
    direction: Direction;
    fragmentNode: ReaderFragment;
    fragmentRef: unknown;
    fragmentIdentifier: string;
    fragmentData: unknown;
    connectionPathInFragmentData: ReadonlyArray<string | number>;
    identifierField?: string | null;
    paginationRequest: ConcreteRequest;
    paginationMetadata: ReaderPaginationMetadata;
    componentDisplayName: string;
    observer: Observer<GraphQLResponse>;
    onReset: () => void;
}

export function useLoadMoreFunction<TQuery extends OperationType>(
    args: UseLoadMoreFunctionArgs,
): // tslint:disable-next-line no-unnecessary-generics
[LoadMoreFn<TQuery>, boolean, DisposeFn];

export function getConnectionState(
    direction: Direction,
    fragmentNode: ReaderFragment,
    fragmentData: unknown,
    connectionPathInFragmentData: ReadonlyArray<string | number>,
): {
    cursor?: string | null;
    hasMore: boolean;
};
