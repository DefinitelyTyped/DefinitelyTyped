/// <reference types='ojs/ojdataprovider'/>
declare namespace oj {  
  class DeferredDataProvider<K, D> implements DataProvider<K, D> {
    constructor(dataProvider: Promise<oj.DataProvider<K, D>>[], capabilityFunc: Function);
    addEventListener(eventType: string, listener: EventListener): any;
    containsKeys(params: FetchByKeysParameters<K>): Promise<ContainsKeysResults<K>>
    dispatchEvent(evt: Event): boolean;
    fetchByKeys(params: FetchByKeysParameters<K>): Promise<FetchByKeysResults<K, D>>
    fetchByOffset(params: FetchByOffsetParameters<D>): Promise<FetchByOffsetResults<K, D>>
    fetchFirst<F extends FetchListResult<K, D>>(params?: FetchListParameters<D>): AsyncIterable<F>
    getCapability(capabilityName: string): object;
    getTotalSize(): Promise<number>;
    isEmpty(): 'yes'|'no'|'unknown';
    removeEventListener(eventType: string, listener: EventListener): any;
  }

}
