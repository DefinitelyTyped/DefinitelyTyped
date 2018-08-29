/// <reference types='ojs/ojcomponentcore'/>
/// <reference types='ojs/ojkeyset'/>
/// <reference types='ojs/ojdataprovider'/>
declare namespace oj {  
  class ojListView<K, D> extends baseComponent<ojListViewSettableProperties<K,D>> {
    as: string;
    currentItem: K;
    data: oj.DataProvider<K, D>;
    dnd: {drag?: {items: {dataTypes?: string|Array<string>, drag?: ((param0: Event)=> void), dragEnd?: ((param0: Event)=> void), dragStart?: ((param0: Event, param1: {items:Array<Element>})=> void)}}, drop?: {items: {dataTypes?: string|Array<string>, dragEnter?: ((param0: Event, param1: {item:Element})=> void), dragLeave?: ((param0: Event, param1: {item:Element})=> void), dragOver?: ((param0: Event, param1: {item:Element})=> void), drop?: ((param0: Event, param1: oj.ojListView.ItemsDropContext)=> void)}}, reorder: {items: 'enabled'|'disabled'}};
    drillMode: 'collapsible'|'none';
    expanded: KeySet.KeySet<K>;
    readonly firstSelectedItem: {key: K, data: D};
    groupHeaderPosition: 'static'|'sticky';
    item: {focusable?: ((param0: oj.ojListView.ItemContext<K,D>) => boolean)|boolean, renderer?: ((param0: oj.ojListView.ItemContext<K,D>) => {insert: Element|string}|undefined)|null, selectable?: ((param0: oj.ojListView.ItemContext<K,D>) => boolean)|boolean};
    scrollPolicy: 'auto'|'loadMoreOnScroll';
    scrollPolicyOptions: {fetchSize?: number, maxCount?: number, scroller?: Element};
    scrollPosition: {x?: number, y?: number, index?: number, parent?: K, key?: K, offsetX?: number, offsetY?: number};
    selection: Array<K>;
    selectionMode: 'none'|'single'|'multiple';
    selectionRequired: boolean;
    translations: {accessibleNavigateSkipItems?: string, accessibleReorderAfterItem?: string, accessibleReorderBeforeItem?: string, accessibleReorderInsideItem?: string, accessibleReorderTouchInstructionText?: string, indexerCharacters?: string, labelCopy?: string, labelCut?: string, labelPaste?: string, labelPasteAfter?: string, labelPasteBefore?: string, msgFetchingData?: string, msgNoData?: string};
    onAsChanged: (event: CustomEvent)=> any;
    onCurrentItemChanged: (event: CustomEvent)=> any;
    onDataChanged: (event: CustomEvent)=> any;
    onDndChanged: (event: CustomEvent)=> any;
    onDrillModeChanged: (event: CustomEvent)=> any;
    onExpandedChanged: (event: CustomEvent)=> any;
    onFirstSelectedItemChanged: (event: CustomEvent)=> any;
    onGroupHeaderPositionChanged: (event: CustomEvent)=> any;
    onItemChanged: (event: CustomEvent)=> any;
    onScrollPolicyChanged: (event: CustomEvent)=> any;
    onScrollPolicyOptionsChanged: (event: CustomEvent)=> any;
    onScrollPositionChanged: (event: CustomEvent)=> any;
    onSelectionChanged: (event: CustomEvent)=> any;
    onSelectionModeChanged: (event: CustomEvent)=> any;
    onSelectionRequiredChanged: (event: CustomEvent)=> any;
    onOjAnimateEnd: (event: oj.ojListView.ojAnimateEnd)=> any;
    onOjAnimateStart: (event: oj.ojListView.ojAnimateStart)=> any;
    onOjBeforeCollapse: (event: oj.ojListView.ojBeforeCollapse<K>)=> any;
    onOjBeforeCurrentItem: (event: oj.ojListView.ojBeforeCurrentItem<K>)=> any;
    onOjBeforeExpand: (event: oj.ojListView.ojBeforeExpand<K>)=> any;
    onOjCollapse: (event: oj.ojListView.ojCollapse<K>)=> any;
    onOjCopy: (event: oj.ojListView.ojCopy)=> any;
    onOjCut: (event: oj.ojListView.ojCut)=> any;
    onOjExpand: (event: oj.ojListView.ojExpand<K>)=> any;
    onOjPaste: (event: oj.ojListView.ojPaste)=> any;
    onOjReorder: (event: oj.ojListView.ojReorder)=> any;

    addEventListener<T extends keyof ojListViewEventMap<K>>(type: T, listener: (this: HTMLElement, ev: ojListViewEventMap<K>[T]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    
    getContextByNode(node: Element): oj.ojListView.ContextByNode<K>|null;
    getDataForVisibleItem(context: {key?: K, index?: number, parent?: Element}): D;
    refresh(): void;
    scrollToItem(item: {key: K}): void;
  }
  namespace ojListView {
    class ojAnimateEnd extends CustomEvent<{action: string, element: Element, [propName: string]: any}> {
      
    }
  
    class ojAnimateStart extends CustomEvent<{action: string, element: Element, endCallback: (()=> void), [propName: string]: any}> {
      
    }
  
    class ojBeforeCollapse<K> extends CustomEvent<{key: K, item: Element, [propName: string]: any}> {
      
    }
  
    class ojBeforeCurrentItem<K> extends CustomEvent<{previousKey: K, previousItem: Element, key: K, item: Element, [propName: string]: any}> {
      
    }
  
    class ojBeforeExpand<K> extends CustomEvent<{key: K, item: Element, [propName: string]: any}> {
      
    }
  
    class ojCollapse<K> extends CustomEvent<{key: K, item: Element, [propName: string]: any}> {
      
    }
  
    class ojCopy extends CustomEvent<{items: Array<Element>, [propName: string]: any}> {
      
    }
  
    class ojCut extends CustomEvent<{items: Array<Element>, [propName: string]: any}> {
      
    }
  
    class ojExpand<K> extends CustomEvent<{key: K, item: Element, [propName: string]: any}> {
      
    }
  
    class ojPaste extends CustomEvent<{item: Element, [propName: string]: any}> {
      
    }
  
    class ojReorder extends CustomEvent<{items: Array<Element>, position: string, reference: Element, [propName: string]: any}> {
      
    }
  }
  interface ojListViewEventMap<K> extends oj.baseComponentEventMap {
    'ojAnimateEnd': oj.ojListView.ojAnimateEnd;
    'ojAnimateStart': oj.ojListView.ojAnimateStart;
    'ojBeforeCollapse': oj.ojListView.ojBeforeCollapse<K>;
    'ojBeforeCurrentItem': oj.ojListView.ojBeforeCurrentItem<K>;
    'ojBeforeExpand': oj.ojListView.ojBeforeExpand<K>;
    'ojCollapse': oj.ojListView.ojCollapse<K>;
    'ojCopy': oj.ojListView.ojCopy;
    'ojCut': oj.ojListView.ojCut;
    'ojExpand': oj.ojListView.ojExpand<K>;
    'ojPaste': oj.ojListView.ojPaste;
    'ojReorder': oj.ojListView.ojReorder;
    'asChanged': CustomEvent;
    'currentItemChanged': CustomEvent;
    'dataChanged': CustomEvent;
    'dndChanged': CustomEvent;
    'drillModeChanged': CustomEvent;
    'expandedChanged': CustomEvent;
    'firstSelectedItemChanged': CustomEvent;
    'groupHeaderPositionChanged': CustomEvent;
    'itemChanged': CustomEvent;
    'scrollPolicyChanged': CustomEvent;
    'scrollPolicyOptionsChanged': CustomEvent;
    'scrollPositionChanged': CustomEvent;
    'selectionChanged': CustomEvent;
    'selectionModeChanged': CustomEvent;
    'selectionRequiredChanged': CustomEvent;
  }
  interface ojListViewSettableProperties<K,D> extends baseComponentSettableProperties {
    as: string;
    currentItem: K;
    data: oj.DataProvider<K, D>;
    dnd: {drag?: {items: {dataTypes?: string|Array<string>, drag?: ((param0: Event)=> void), dragEnd?: ((param0: Event)=> void), dragStart?: ((param0: Event, param1: {items:Array<Element>})=> void)}}, drop?: {items: {dataTypes?: string|Array<string>, dragEnter?: ((param0: Event, param1: {item:Element})=> void), dragLeave?: ((param0: Event, param1: {item:Element})=> void), dragOver?: ((param0: Event, param1: {item:Element})=> void), drop?: ((param0: Event, param1: oj.ojListView.ItemsDropContext)=> void)}}, reorder: {items: 'enabled'|'disabled'}};
    drillMode: 'collapsible'|'none';
    expanded: KeySet.KeySet<K>;
    readonly firstSelectedItem: {key: K, data: D};
    groupHeaderPosition: 'static'|'sticky';
    item: {focusable?: ((param0: oj.ojListView.ItemContext<K,D>) => boolean)|boolean, renderer?: ((param0: oj.ojListView.ItemContext<K,D>) => {insert: Element|string}|undefined)|null, selectable?: ((param0: oj.ojListView.ItemContext<K,D>) => boolean)|boolean};
    scrollPolicy: 'auto'|'loadMoreOnScroll';
    scrollPolicyOptions: {fetchSize?: number, maxCount?: number, scroller?: Element};
    scrollPosition: {x?: number, y?: number, index?: number, parent?: K, key?: K, offsetX?: number, offsetY?: number};
    selection: Array<K>;
    selectionMode: 'none'|'single'|'multiple';
    selectionRequired: boolean;
    translations: {accessibleNavigateSkipItems?: string, accessibleReorderAfterItem?: string, accessibleReorderBeforeItem?: string, accessibleReorderInsideItem?: string, accessibleReorderTouchInstructionText?: string, indexerCharacters?: string, labelCopy?: string, labelCut?: string, labelPaste?: string, labelPasteAfter?: string, labelPasteBefore?: string, msgFetchingData?: string, msgNoData?: string}; 
  }
  namespace ojListView {
    type ContextByNode<K> =
    {
      subId: string, key: K, index: number, parent?: Element, group?: boolean
    }
  }
  namespace ojListView {
    type ItemContext<K,D> =
    {
      datasource: oj.DataProvider<K, D>, index: number, key: K, data: D, parentElement: Element, depth?: number, parentKey?: K, leaf?: boolean
    }
  }
  namespace ojListView {
    type ItemsDropContext =
    {
      item: Element, position: 'before'|'after'|'inside', reorder: boolean
    }
  }

}
