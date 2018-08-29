/// <reference types='ojs/ojtreedataprovider'/>
declare namespace oj {  
  class ArrayTreeDataProvider<K, D> implements TreeDataProvider<K, D> {
    constructor(data: Array<any>|(()=> Array<any>), options?: {sortComparators?: SortComparators<D>, implicitSort?: SortCriterion<D>[], keyAttributes?: string|Array<string>, keyAttributesScope?: 'global'|'siblings', childrenAttribute?: string});
    addEventListener(eventType: string, listener: EventListener): void
    containsKeys(params: FetchByKeysParameters<K>): Promise<ContainsKeysResults<K>>
    dispatchEvent(evt: Event): boolean
    fetchByKeys(params: FetchByKeysParameters<K>): Promise<FetchByKeysResults<K, D>>
    fetchByOffset(params: FetchByOffsetParameters<D>): Promise<FetchByOffsetResults<K, D>>
    fetchFirst<F extends FetchListResult<K, D>>(params?: FetchListParameters<D>): AsyncIterable<F>
    getCapability(capabilityName?: string): any
    getChildDataProvider(any): ArrayTreeDataProvider<K, D>
    getTotalSize(): Promise<number>;
    isEmpty(): 'yes'|'no'|'unknown';
    removeEventListener(eventType: string, listener: EventListener): void
  }

}
