/// <reference types='ojs/ojdataprovider'/>
declare namespace oj {  
  class ListDataProviderView<K, D, Kin, Din> implements DataProvider<K, D> {
    dataMapping: DataMapping<K, D, Kin, Din>;
    from: any;
    offset: number;
    sortCriteria: SortCriterion<D>[];
    constructor(dataProvider: DataProvider<K, D>, options?: {from?: object, offset?: number, sortCriteria?: SortCriterion<D>[], dataMapping?: DataMapping<K, D, Kin, Din>});
    addEventListener(eventType: string, listener: EventListener): void
    containsKeys(params: FetchByKeysParameters<K>): Promise<ContainsKeysResults<K>>
    dispatchEvent(evt: Event): boolean
    fetchByKeys(params: FetchByKeysParameters<K>): Promise<FetchByKeysResults<K, D>>
    fetchByOffset(params: FetchByOffsetParameters<D>): Promise<FetchByOffsetResults<K, D>>
    fetchFirst<F extends FetchListResult<K, D>>(params?: FetchListParameters<D>): AsyncIterable<F>
    getCapability(capabilityName: string)
    getTotalSize(): Promise<number>;
    isEmpty(): 'yes'|'no'|'unknown';
    removeEventListener(eventType: string, listener: EventListener): void
  }

}
