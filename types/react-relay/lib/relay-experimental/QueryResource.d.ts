import type {
    Disposable,
    FetchPolicy,
    FragmentPointer,
    GraphQLResponse,
    IEnvironment,
    Observable,
    Observer,
    OperationDescriptor,
    ReaderFragment,
    RenderPolicy,
    Snapshot,
    Subscription,
} from 'relay-runtime';
import type { Cache } from './LRUCache';

export type QueryResource = QueryResourceImpl;

type QueryResourceCache = Cache<QueryResourceCacheEntry>;

interface QueryResourceCacheEntry {
    readonly cacheKey: string;
    readonly CacheKey: string;

    getRetainCount(): number;

    getNetworkSubscription(): Subscription | null | undefined;

    setNetworkSubscription(subscription?: Subscription | null): void;

    getValue(): Error | Promise<void> | QueryResult;

    setValue(arg: Error | Promise<void> | QueryResult): void;

    temporaryRetain(environment: IEnvironment): Disposable;

    permanentRetain(environment: IEnvironment): Disposable;
}

interface QueryResult {
    cacheKey: string;
    fragmentNode: ReaderFragment;
    fragmentRef: FragmentPointer;
    operation: OperationDescriptor;
}

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
        maybeFetchPolicy: FetchPolicy | null | undefined,
        maybeRenderPolicy: RenderPolicy | null | undefined,
        observer: Observer<Snapshot> | null | undefined,
        cacheKeyBuster: string | number | null | undefined,
        profilerContext: unknown,
    ): QueryResult;

    /**
     * This function should be called during a Component's commit phase
     * (e.g. inside useEffect), in order to retain the operation in the Relay store
     * and transfer ownership of the operation to the component lifecycle.
     */
    retain(queryResult: QueryResult, profilerContext: unknown): Disposable;

    getCacheEntry(
        operation: OperationDescriptor,
        fetchPolicy: FetchPolicy,
        maybeRenderPolicy?: RenderPolicy,
    ): QueryResourceCacheEntry | null | undefined;
}

export function createQueryResource(environment: IEnvironment): QueryResource;

export function getQueryResourceForEnvironment(environment: IEnvironment): QueryResourceImpl;
