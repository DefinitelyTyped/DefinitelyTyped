import {
    ContainsKeysResults,
    DataMapping,
    DataProvider,
    FetchAttribute,
    FetchByKeysParameters,
    FetchByKeysResults,
    FetchByOffsetParameters,
    FetchByOffsetResults,
    FetchListParameters,
    FetchListResult,
    SortCriterion,
} from "../ojdataprovider";
declare class ListDataProviderView<K, D, Kin, Din> implements DataProvider<K, D> {
    attributes: Array<string | FetchAttribute>;
    dataMapping: DataMapping<K, D, Kin, Din>;
    from: Kin;
    offset: number;
    sortCriteria: Array<SortCriterion<D>>;
    constructor(dataProvider: DataProvider<K, D>, options?: {
        from?: Kin | undefined;
        offset?: number | undefined;
        sortCriteria?: Array<SortCriterion<D>> | undefined;
        dataMapping?: DataMapping<K, D, Kin, Din> | undefined;
        attributes?: Array<string | FetchAttribute> | undefined;
    });
    addEventListener(eventType: string, listener: EventListener): void;
    containsKeys(params: FetchByKeysParameters<K>): Promise<ContainsKeysResults<K>>;
    dispatchEvent(evt: Event): boolean;
    fetchByKeys(params: FetchByKeysParameters<K>): Promise<FetchByKeysResults<K, D>>;
    fetchByOffset(params: FetchByOffsetParameters<D>): Promise<FetchByOffsetResults<K, D>>;
    fetchFirst(params?: FetchListParameters<D>): AsyncIterable<FetchListResult<K, D>>;
    getCapability(capabilityName: string): any;
    getTotalSize(): Promise<number>;
    isEmpty(): "yes" | "no" | "unknown";
    removeEventListener(eventType: string, listener: EventListener): void;
}
export = ListDataProviderView;
