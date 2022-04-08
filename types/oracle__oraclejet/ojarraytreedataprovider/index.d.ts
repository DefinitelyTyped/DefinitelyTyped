import { DataProvider, SortCriterion, FetchByKeysParameters, ContainsKeysResults, FetchByKeysResults, FetchByOffsetParameters, FetchByOffsetResults, FetchListResult,
   FetchListParameters } from '../ojdataprovider';
import ArrayDataProvider = require('../ojarraydataprovider');
import TreeDataProvider = require('../ojtreedataprovider');
declare class ArrayTreeDataProvider<K, D> implements TreeDataProvider<K, D> {
    constructor(data: any[] | (() => any[]), options?: {
        sortComparators?: ArrayDataProvider.SortComparators<D>;
        implicitSort?: Array<SortCriterion<D>>;
        keyAttributes?: string | string[];
        keyAttributesScope?: 'global' | 'siblings';
        childrenAttribute?: string;
    });
    addEventListener(eventType: string, listener: EventListener): void;
    containsKeys(params: FetchByKeysParameters<K>): Promise<ContainsKeysResults<K>>;
    dispatchEvent(evt: Event): boolean;
    fetchByKeys(params: FetchByKeysParameters<K>): Promise<FetchByKeysResults<K, D>>;
    fetchByOffset(params: FetchByOffsetParameters<D>): Promise<FetchByOffsetResults<K, D>>;
    fetchFirst(params?: FetchListParameters<D>): AsyncIterable<FetchListResult<K, D>>;
    getCapability(capabilityName?: string): any;
    getChildDataProvider(parentKey: any): ArrayTreeDataProvider<K, D>;
    getTotalSize(): Promise<number>;
    isEmpty(): 'yes' | 'no' | 'unknown';
    removeEventListener(eventType: string, listener: EventListener): void;
}
export = ArrayTreeDataProvider;
