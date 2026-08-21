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
} from "relay-runtime";

export type Direction = "forward" | "backward";

export type LoadMoreFn<TQuery extends OperationType> = (
    count: number,
    options?: {
        onComplete?: ((arg: Error | null) => void) | undefined;
        UNSTABLE_extraVariables?: Partial<VariablesOf<TQuery>> | undefined;
    },
) => Disposable;

export interface UseLoadMoreFunctionArgs {
    direction: Direction;
    fragmentNode: ReaderFragment;
    fragmentRef: unknown;
    fragmentIdentifier: string;
    fragmentData: unknown;
    connectionPathInFragmentData: ReadonlyArray<string | number>;
    identifierField?: string | null | undefined;
    paginationRequest: ConcreteRequest;
    paginationMetadata: ReaderPaginationMetadata;
    componentDisplayName: string;
    observer: Observer<GraphQLResponse>;
    onReset: () => void;
}
// eslint-disable-next-line @definitelytyped/no-unnecessary-generics
export function useLoadMoreFunction<TQuery extends OperationType>(
    args: UseLoadMoreFunctionArgs,
): [LoadMoreFn<TQuery>, boolean, DisposeFn];

export function getConnectionState(
    direction: Direction,
    fragmentNode: ReaderFragment,
    fragmentData: unknown,
    connectionPathInFragmentData: ReadonlyArray<string | number>,
): {
    cursor?: string | null | undefined;
    hasMore: boolean;
};
