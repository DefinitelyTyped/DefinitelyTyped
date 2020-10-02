import {
    Disposable,
    FragmentPointer,
    GraphQLResponse,
    IEnvironment,
    Observable,
    Observer,
    OperationDescriptor,
    ReaderFragment,
    Snapshot,
} from 'relay-runtime';
import { Cache } from './LRUCache';

export type QueryResource = QueryResourceImpl;
export type FetchPolicy = 'store-only' | 'store-or-network' | 'store-and-network' | 'network-only';
export type RenderPolicy = 'full' | 'partial';

type QueryResourceCache = Cache<QueryResourceCacheEntry>;
interface QueryResourceCacheEntry {
    readonly cacheKey: string;
    getRetainCount(): number;
    getValue(): Error | Promise<void> | QueryResult;
    setValue(value: Error | Promise<void> | QueryResult): void;
    temporaryRetain(environment: IEnvironment): void;
    permanentRetain(environment: IEnvironment): Disposable;
}
interface QueryResult {
    cacheKey: string;
    fragmentNode: ReaderFragment;
    fragmentRef: FragmentPointer;
    operation: OperationDescriptor;
}

declare function getQueryCacheKey(
    operation: OperationDescriptor,
    fetchPolicy: FetchPolicy,
    renderPolicy: RenderPolicy,
): string;

declare function getQueryResult(operation: OperationDescriptor, cacheKey: string): QueryResult;

declare function createQueryResourceCacheEntry(
    cacheKey: string,
    operation: OperationDescriptor,
    value: Error | Promise<void> | QueryResult,
    onDispose: (entry: QueryResourceCacheEntry) => void,
): QueryResourceCacheEntry;

declare class QueryResourceImpl {
    constructor(environment: IEnvironment);

    /**
     * This function should be called during a Component's render function,
     * to either read an existing cached value for the query, or fetch the query
     * and suspend.
     */
    prepare(
        operation: OperationDescriptor,
        fetchObservable: Observable<GraphQLResponse>,
        maybeFetchPolicy: FetchPolicy | null,
        maybeRenderPolicy: RenderPolicy | null,
        observer?: Observer<Snapshot>,
        cacheKeyBuster?: string | number,
    ): QueryResult;

    /**
     * This function should be called during a Component's commit phase
     * (e.g. inside useEffect), in order to retain the operation in the Relay store
     * and transfer ownership of the operation to the component lifecycle.
     */
    retain(queryResult: QueryResult): Disposable;

    getCacheEntry(
        operation: OperationDescriptor,
        fetchPolicy: FetchPolicy,
        maybeRenderPolicy?: RenderPolicy,
    ): QueryResourceCacheEntry | null;
}

declare function createQueryResource(environment: IEnvironment): QueryResource;

declare function getQueryResourceForEnvironment(environment: IEnvironment): QueryResourceImpl;

export { createQueryResource, getQueryResourceForEnvironment };
