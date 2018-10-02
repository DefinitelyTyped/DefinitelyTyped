export interface AttributeFilterOperator<D> {
    attribute: string;
    op: AttributeFilterOperator.AttributeOperator;
    value: any;
}
export namespace AttributeFilterOperator {
    type AttributeOperator = "$co" | "$eq" | "$ew" | "$pr" | "$gt" | "$ge" | "$lt" | "$le" | "$ne" | "$regex" | "$sw";
}
export interface CompoundFilterOperator<D> {
    criteria: Array<FilterOperator<D>>;
    op: CompoundFilterOperator.CompoundOperator;
}
export namespace CompoundFilterOperator {
    type CompoundOperator = "$and" | "$or";
}
export interface ContainsKeysResults<K> {
    containsParameters: FetchByKeysParameters<K>;
    results: Set<K>;
}
export interface DataMapping<K, D, Kin, Din> {
    mapFields: (item: Item<Kin, Din>) => Item<K, D>;
    mapFilterCriterion?: (filterCriterion: Array<FilterOperator<D>>) => Array<FilterOperator<Din>>;
    mapSortCriteria?: (sortCriteria: Array<SortCriterion<D>>) => Array<SortCriterion<Din>>;
    unmapSortCriteria?: (sortCriteria: Array<SortCriterion<Din>>) => Array<SortCriterion<D>>;
}
export interface DataProvider<K, D> extends EventTarget {
    containsKeys(parameters: FetchByKeysParameters<K>): Promise<ContainsKeysResults<K>>;
    fetchByKeys(parameters: FetchByKeysParameters<K>): Promise<FetchByKeysResults<K, D>>;
    fetchByOffset(parameters: FetchByOffsetParameters<D>): Promise<FetchByOffsetResults<K, D>>;
    fetchFirst(parameters?: FetchListParameters<D>): AsyncIterable<FetchListResult<K, D>>;
    getCapability(capabilityName: string): any;
    getTotalSize(): Promise<number>;
    isEmpty(): 'yes' | 'no' | 'unknown';
}
export interface DataProviderAddOperationEventDetail<K, D> extends DataProviderOperationEventDetail<K, D> {
    addBeforeKeys?: K[];
    parentKeys?: K[];
}
export interface DataProviderMutationEventDetail<K, D> {
    add?: DataProviderAddOperationEventDetail<K, D>;
    remove?: DataProviderOperationEventDetail<K, D>;
    update?: DataProviderOperationEventDetail<K, D>;
}
export interface DataProviderOperationEventDetail<K, D> {
    data?: D[];
    indexes?: number[];
    keys: Set<K>;
    metadata?: Array<ItemMetadata<K>>;
}
export interface FetchByKeysCapability<D> {
    implementation: 'iteration' | 'lookup';
}
export namespace FetchByKeysMixin {
    function applyMixin(derivedCtor: {
        new (): DataProvider<any, any>;
    }): any;
}
export interface FetchByKeysParameters<K> {
    keys: Set<K>;
}
export interface FetchByKeysResults<K, D> {
    fetchParameters: FetchByKeysParameters<K>;
    results: Map<K, Item<K, D>>;
}
export interface FetchByOffsetCapability<D> {
    implementation: 'iteration' | 'randomAccess';
}
export namespace FetchByOffsetMixin {
    function applyMixin(derivedCtor: {
        new (): DataProvider<any, any>;
    }): any;
}
export interface FetchByOffsetParameters<D> extends FetchListParameters<D> {
    offset: number;
}
export interface FetchByOffsetResults<K, D> {
    done: boolean;
    fetchParameters: FetchByOffsetParameters<D>;
    results: Array<Item<K, D>>;
}
export interface FetchListParameters<D> {
    filterCriterion?: FilterOperator<D>;
    size: number;
    sortCriteria?: Array<SortCriterion<D>>;
}
export interface FetchListResult<K, D> {
    data: D[];
    fetchParameters: FetchListParameters<D>;
    metadata: Array<ItemMetadata<K>>;
}
export interface FilterCapability {
    operators: string[];
}
export interface FilterOperator<D> {
    op: AttributeFilterOperator.AttributeOperator | CompoundFilterOperator.CompoundOperator;
    filter(data: any[]): any[];
}
export interface Item<K, D> {
    data: D;
    metadata: ItemMetadata<K>;
}
export interface ItemMetadata<K> {
    key: K;
}
export interface SortCapability<D> {
    attributes: 'none' | 'single' | 'multiple';
}
export interface SortCriterion<D> {
    attribute: keyof D;
    direction: string;
}
