import {
    ConcreteRequest,
    Disposable,
    GraphQLResponse,
    Observer,
    ReaderFragment,
    ReaderPaginationMetadata,
    RequestDescriptor,
} from 'relay-runtime';

export type Direction = 'forward' | 'backward';

export type LoadMoreFn = (
    count: number,
    options?: {
        onComplete?: (arg: Error | null) => void;
    },
) => Disposable;

export interface UseLoadMoreFunctionArgs {
    direction: Direction;
    fragmentNode: ReaderFragment;
    fragmentIdentifier: string;
    fragmentOwner: RequestDescriptor | ReadonlyArray<RequestDescriptor | null> | null;
    fragmentData: unknown;
    connectionPathInFragmentData: ReadonlyArray<string | number>;
    fragmentRefPathInResponse: ReadonlyArray<string | number>;
    paginationRequest: ConcreteRequest;
    paginationMetadata: ReaderPaginationMetadata;
    componentDisplayName: string;
    observer: Observer<GraphQLResponse>;
    onReset: () => void;
}

export function useLoadMoreFunction(args: UseLoadMoreFunctionArgs): [LoadMoreFn, boolean, () => void];

export function getConnectionState(
    direction: Direction,
    fragmentNode: ReaderFragment,
    fragmentData: unknown,
    connectionPathInFragmentData: ReadonlyArray<string | number>,
): {
    cursor: string | null;
    hasMore: boolean;
};
