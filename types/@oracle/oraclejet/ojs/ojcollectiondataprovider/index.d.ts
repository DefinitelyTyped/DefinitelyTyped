/// <reference types='ojs/ojdataprovider'/>
declare namespace oj {  
  class CollectionDataProvider<K, D> implements DataProvider<K, D> {
    constructor(collection: oj.Collection);
    addEventListener(eventType: string, listener: EventListener): void
    containsKeys(params: FetchByKeysParameters<K>): Promise<ContainsKeysResults<K>>
    dispatchEvent(evt: Event): boolean
    fetchByKeys(params: FetchByKeysParameters<K>): Promise<FetchByKeysResults<K, D>>
    fetchByOffset(params: FetchByOffsetParameters<D>): Promise<FetchByOffsetResults<K, D>>
    fetchFirst<F extends FetchListResult<K, D>>(params?: FetchListParameters<D>): AsyncIterable<F>
    getCapability(capabilityName?: string): any
    getTotalSize(): Promise<number>;
    isEmpty(): 'yes'|'no'|'unknown';
    removeEventListener(eventType: string, listener: EventListener): void
  }

}
