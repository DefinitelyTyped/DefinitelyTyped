/// <reference types='ojs/ojdataprovider'/>
declare namespace oj {  
  class ArrayDataProvider<K, D> implements DataProvider<K, D> {
    constructor(data: Array<any>|(()=> Array<any>), options?: {sortComparators?: SortComparators<D>, implicitSort?: SortCriterion<D>[], keys?: Array<any>|(()=> Array<any>), idAttribute?: string|Array<string>, keyAttributes?: string|Array<string>});
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
declare namespace oj {  
  interface SortComparators<D> {
  }

}
