import {
    ContainsKeysResults,
    DataProvider,
    FetchByKeysParameters,
    FetchByKeysResults,
    FetchByOffsetParameters,
    FetchByOffsetResults,
    FetchListParameters,
    FetchListResult,
    SortCriterion,
} from "../ojdataprovider";
declare class ArrayDataProvider<K, D> implements DataProvider<K, D> {
    constructor(data: any[] | (() => any[]), options?: {
        sortComparators?: ArrayDataProvider.SortComparators<D> | undefined;
        implicitSort?: Array<SortCriterion<D>> | undefined;
        keys?: any[] | (() => any[]) | undefined;
        idAttribute?: string | string[] | undefined;
        keyAttributes?: string | string[] | undefined;
    });
    addEventListener(eventType: string, listener: EventListener): void;
    containsKeys(params: FetchByKeysParameters<K>): Promise<ContainsKeysResults<K>>;
    dispatchEvent(evt: Event): boolean;
    fetchByKeys(params: FetchByKeysParameters<K>): Promise<FetchByKeysResults<K, D>>;
    fetchByOffset(params: FetchByOffsetParameters<D>): Promise<FetchByOffsetResults<K, D>>;
    fetchFirst(params?: FetchListParameters<D>): AsyncIterable<FetchListResult<K, D>>;
    getCapability(capabilityName?: string): any;
    getTotalSize(): Promise<number>;
    isEmpty(): "yes" | "no" | "unknown";
    removeEventListener(eventType: string, listener: EventListener): void;
}
export = ArrayDataProvider;
declare namespace ArrayDataProvider {
    interface SortComparators<D> {
        comparators: Map<keyof D, (a: any, b: any) => number>;
    }
}
