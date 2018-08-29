declare namespace oj {  
  interface AttributeFilterOperator<D> {
    attribute: string;
    op: oj.AttributeFilterOperator.AttributeOperator;
    value: any;
  }
  namespace AttributeFilterOperator {
    enum AttributeOperator {
      $co,
      $eq,
      $ew,
      $pr,
      $gt,
      $ge,
      $lt,
      $le,
      $ne,
      $regex,
      $sw,
    }
  }


}
declare namespace oj {  
  interface CompoundFilterOperator<D> {
    criteria: FilterOperator<D>[];
    op: oj.CompoundFilterOperator.CompoundOperator;
  }
  namespace CompoundFilterOperator {
    enum CompoundOperator {
      $and,
      $or,
    }
  }


}
declare namespace oj {  
  interface ContainsKeysResults<K> {
    containsParameters: FetchByKeysParameters<K>;
    results: Set<K>;
  }

}
declare namespace oj {  
  interface DataMapping <K, D, Kin, Din> {
    mapFields: (item: Item<Kin, Din>) => Item<K, D>;
    mapFilterCriterion?: (filterCriterion: FilterOperator<D>[]) => FilterOperator<Din>[];
    mapSortCriteria?: (sortCriteria: SortCriterion<D>[]) => SortCriterion<Din>[];
    unmapSortCriteria?: (sortCriteria: SortCriterion<Din>[]) => SortCriterion<D>[];
  }

}
declare namespace oj {  
  interface DataProvider<K, D> extends EventTarget {
    containsKeys(parameters : FetchByKeysParameters<K>) : Promise<ContainsKeysResults<K>>
    fetchByKeys(parameters : FetchByKeysParameters<K>) : Promise<FetchByKeysResults<K, D>>
    fetchByOffset(parameters: FetchByOffsetParameters<D>): Promise<FetchByOffsetResults<K, D>>
    fetchFirst(FetchListParameters?): AsyncIterable<FetchListResult<K, D>>
    getCapability(capabilityName: string): any
    getTotalSize(): Promise<number>;
    isEmpty(): 'yes' | 'no' | 'unknown'
  }

}
declare namespace oj {  
  interface DataProviderAddOperationEventDetail<K, D> extends DataProviderOperationEventDetail<K, D> {
    afterKeys?: Set<K>;
  }

}
declare namespace oj {  
  class DataProviderMutationEvent<K, D> implements Event {
    AT_TARGET: number;
    BUBBLING_PHASE: number;
    CAPTURING_PHASE: number;
    NONE: number;
    bubbles: boolean;
    cancelBubble: boolean;
    cancelable: boolean;
    composed: boolean;
    currentTarget: EventTarget;
    deepPath: () => EventTarget[];
    defaultPrevented: boolean;
    detail: DataProviderMutationEventDetail<K, D>;
    eventPhase: number;
    initEvent: (eventTypeArg: string, canBubbleArg: boolean, cancelableArg: boolean) => void;
    isTrusted: boolean;
    preventDefault: () => void;
    returnValue: boolean;
    scoped: boolean;
    srcElement: Element|null;
    stopImmediatePropagation: () => void;
    stopPropagation: () => void;
    target: EventTarget;
    timeStamp: number;
    type: string;
    constructor(detail: DataProviderMutationEventDetail<K, D>);
  }

}
declare namespace oj {  
  interface DataProviderMutationEventDetail<K, D> {
    add?: DataProviderAddOperationEventDetail<K, D>;
    remove?: DataProviderOperationEventDetail<K, D>;
    update?: DataProviderOperationEventDetail<K, D>;
  }

}
declare namespace oj {  
  interface DataProviderOperationEventDetail<K, D> {
    data?: D[];
    indexes?: number[];
    keys: Set<K>;
    metadata?: ItemMetadata<K>[];
  }

}
declare namespace oj {  
  class DataProviderRefreshEvent implements Event {
    AT_TARGET: number;
    BUBBLING_PHASE: number;
    CAPTURING_PHASE: number;
    NONE: number;
    bubbles: boolean;
    cancelBubble: boolean;
    cancelable: boolean;
    composed: boolean;
    currentTarget: EventTarget;
    deepPath: () => EventTarget[];
    defaultPrevented: boolean;
    eventPhase: number;
    initEvent: (eventTypeArg: string, canBubbleArg: boolean, cancelableArg: boolean) => void;
    isTrusted: boolean;
    preventDefault: () => void;
    returnValue: boolean;
    scoped: boolean;
    srcElement: Element|null;
    stopImmediatePropagation: () => void;
    stopPropagation: () => void;
    target: EventTarget;
    timeStamp: number;
    type: string;
    constructor();
  }

}
declare namespace oj {  
  interface FetchByKeysCapability<D> {
    implementation: 'iteration'|'lookup';
  }

}
declare namespace oj {  
  class FetchByKeysMixin {
    static applyMixin(derivedCtor: Function): any;
  }

}
declare namespace oj {  
  interface FetchByKeysParameters<K> {
    keys: Set<K>;
  }

}
declare namespace oj {  
  interface FetchByKeysResults<K, D> {
    fetchParameters: FetchByKeysParameters<K>;
    results: Map<K, Item<K, D>>;
  }

}
declare namespace oj {  
  interface FetchByOffsetCapability<D> {
    implementation: 'iteration'|'randomAccess';
  }

}
declare namespace oj {  
  class FetchByOffsetMixin {
    static applyMixin(derivedCtor: Function): any;
  }

}
declare namespace oj {  
  interface FetchByOffsetParameters<D> extends FetchListParameters<D> {
    offset: number;
  }

}
declare namespace oj {  
  interface FetchByOffsetResults<K, D> {
    done: boolean;
    fetchParameters: FetchByOffsetParameters<D>;
    results: Array<Item<K, D>>;
  }

}
declare namespace oj {  
  interface FetchListParameters<D> {
    filterCriterion?: FilterOperator<D>;
    size: number;
    sortCriteria?: SortCriterion<D>[];
  }

}
declare namespace oj {  
  interface FetchListResult<K, D> {
    data: D[];
    fetchParameters: FetchListParameters<D>;
    metadata: ItemMetadata<K>[];
  }

}
declare namespace oj {  
  interface FilterCapability {
    operators: Array<string>;
  }

}
declare namespace oj {  
  interface FilterOperator<D> {
    op: oj.AttributeFilterOperator.AttributeOperator|oj.CompoundFilterOperator.CompoundOperator;
    filter(data: Array<any>): Array<any>;
  }

}
declare namespace oj {  
  interface Item<K, D> {
    data: D;
    metadata: ItemMetadata<K>;
  }

}
declare namespace oj {  
  interface ItemMetadata<K> {
    key: K;
  }

}
declare namespace oj {  
  interface SortCapability<D> {
    attributes: 'none'|'single'|'multiple';
  }

}
declare namespace oj {  
  interface SortCriterion<D> {
    attribute: keyof D;
    direction: string;
  }

}
