/// <reference types='ojs/ojcomponentcore'/>
/// <reference types='ojs/ojdataprovider'/>
/// <reference types='ojs/ojkeyset'/>
declare namespace oj {  
  class ojNavigationList<K, D> extends baseComponent<ojNavigationListSettableProperties<K,D>> {
    as: string;
    currentItem: K;
    data: oj.DataProvider<K, D>|null;
    display: 'all'|'icons';
    drillMode: 'none'|'collapsible'|'sliding';
    edge: 'top'|'start';
    expanded: KeySet.KeySet<K>;
    hierarchyMenuThreshold: number;
    item: {renderer?: (((context: oj.ojNavigationList.ItemContext<K,D>) => void)|null), selectable?: (((context: oj.ojNavigationList.ItemContext<K,D>) => boolean)|boolean)};
    overflow: 'popup'|'hidden';
    rootLabel: string|null;
    selection: K;
    translations: {defaultRootLabel?: string, hierMenuBtnLabel?: string, previousIcon?: string};
    onAsChanged: (event: CustomEvent)=> any;
    onCurrentItemChanged: (event: CustomEvent)=> any;
    onDataChanged: (event: CustomEvent)=> any;
    onDisplayChanged: (event: CustomEvent)=> any;
    onDrillModeChanged: (event: CustomEvent)=> any;
    onEdgeChanged: (event: CustomEvent)=> any;
    onExpandedChanged: (event: CustomEvent)=> any;
    onHierarchyMenuThresholdChanged: (event: CustomEvent)=> any;
    onItemChanged: (event: CustomEvent)=> any;
    onOverflowChanged: (event: CustomEvent)=> any;
    onRootLabelChanged: (event: CustomEvent)=> any;
    onSelectionChanged: (event: CustomEvent)=> any;
    onOjAnimateEnd: (event: oj.ojNavigationList.ojAnimateEnd)=> any;
    onOjAnimateStart: (event: oj.ojNavigationList.ojAnimateStart)=> any;
    onOjBeforeCollapse: (event: oj.ojNavigationList.ojBeforeCollapse)=> any;
    onOjBeforeCurrentItem: (event: oj.ojNavigationList.ojBeforeCurrentItem)=> any;
    onOjBeforeExpand: (event: oj.ojNavigationList.ojBeforeExpand)=> any;
    onOjBeforeSelect: (event: oj.ojNavigationList.ojBeforeSelect)=> any;
    onOjCollapse: (event: oj.ojNavigationList.ojCollapse)=> any;
    onOjExpand: (event: oj.ojNavigationList.ojExpand)=> any;

    addEventListener<T extends keyof ojNavigationListEventMap>(type: T, listener: (this: HTMLElement, ev: ojNavigationListEventMap[T]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    
    getContextByNode(node: Element): oj.ojNavigationList.NodeContext<K>|null;
    refresh(): void;
  }
  namespace ojNavigationList {
    class ojAnimateEnd extends CustomEvent<{action: string, element: Element, [propName: string]: any}> {
      
    }
  
    class ojAnimateStart extends CustomEvent<{action: string, element: Element, endCallback: (()=> void), [propName: string]: any}> {
      
    }
  
    class ojBeforeCollapse extends CustomEvent<{key: any, item: Element, [propName: string]: any}> {
      
    }
  
    class ojBeforeCurrentItem extends CustomEvent<{previousKey: any, previousItem: Element, key: any, item: Element, [propName: string]: any}> {
      
    }
  
    class ojBeforeExpand extends CustomEvent<{key: any, item: Element, [propName: string]: any}> {
      
    }
  
    class ojBeforeSelect extends CustomEvent<{key: any, item: Element, [propName: string]: any}> {
      
    }
  
    class ojCollapse extends CustomEvent<{key: any, item: Element, [propName: string]: any}> {
      
    }
  
    class ojExpand extends CustomEvent<{key: any, item: Element, [propName: string]: any}> {
      
    }
  }
  interface ojNavigationListEventMap extends oj.baseComponentEventMap {
    'ojAnimateEnd': oj.ojNavigationList.ojAnimateEnd;
    'ojAnimateStart': oj.ojNavigationList.ojAnimateStart;
    'ojBeforeCollapse': oj.ojNavigationList.ojBeforeCollapse;
    'ojBeforeCurrentItem': oj.ojNavigationList.ojBeforeCurrentItem;
    'ojBeforeExpand': oj.ojNavigationList.ojBeforeExpand;
    'ojBeforeSelect': oj.ojNavigationList.ojBeforeSelect;
    'ojCollapse': oj.ojNavigationList.ojCollapse;
    'ojExpand': oj.ojNavigationList.ojExpand;
    'asChanged': CustomEvent;
    'currentItemChanged': CustomEvent;
    'dataChanged': CustomEvent;
    'displayChanged': CustomEvent;
    'drillModeChanged': CustomEvent;
    'edgeChanged': CustomEvent;
    'expandedChanged': CustomEvent;
    'hierarchyMenuThresholdChanged': CustomEvent;
    'itemChanged': CustomEvent;
    'overflowChanged': CustomEvent;
    'rootLabelChanged': CustomEvent;
    'selectionChanged': CustomEvent;
  }
  interface ojNavigationListSettableProperties<K,D> extends baseComponentSettableProperties {
    as: string;
    currentItem: K;
    data: oj.DataProvider<K, D>|null;
    display: 'all'|'icons';
    drillMode: 'none'|'collapsible'|'sliding';
    edge: 'top'|'start';
    expanded: KeySet.KeySet<K>;
    hierarchyMenuThreshold: number;
    item: {renderer?: (((context: oj.ojNavigationList.ItemContext<K,D>) => void)|null), selectable?: (((context: oj.ojNavigationList.ItemContext<K,D>) => boolean)|boolean)};
    overflow: 'popup'|'hidden';
    rootLabel: string|null;
    selection: K;
    translations: {defaultRootLabel?: string, hierMenuBtnLabel?: string, previousIcon?: string}; 
  }
  namespace ojNavigationList {
    type ItemContext<K,D> =
    {
      componentElement: Element, datasource?: oj.DataProvider<K, D>, index: number, key: any, data: any, parentElement: Element
    }
  }
  namespace ojNavigationList {
    type NodeContext<K> =
    {
      subId: string, index: number, key: K, group: boolean, parent?: Element
    }
  }

}
declare namespace oj {  
  class ojTabBar<K, D> extends baseComponent<ojTabBarSettableProperties<K,D>> {
    as: string;
    currentItem: any;
    data: oj.DataProvider<K, D>|null;
    display: 'all'|'icons';
    edge: 'top'|'bottom'|'start'|'end';
    item: {renderer?: (((context: oj.ojTabBar.ItemContext<K, D>) => void)|null), selectable?: (((context: oj.ojTabBar.ItemContext<K, D>) => boolean)|boolean)};
    overflow: 'popup'|'hidden';
    reorderable: 'enabled'|'disabled';
    selection: any;
    truncation: 'none'|'progressive';
    translations: {accessibleReorderAfterItem?: string, accessibleReorderBeforeItem?: string, accessibleReorderTouchInstructionText?: string, labelCut?: string, labelPasteAfter?: string, labelPasteBefore?: string, labelRemove?: string, msgFetchingData?: string, msgNoData?: string, overflowItemLabel?: string, removeCueText?: string, selectedLabel?: string};
    onAsChanged: (event: CustomEvent)=> any;
    onCurrentItemChanged: (event: CustomEvent)=> any;
    onDataChanged: (event: CustomEvent)=> any;
    onDisplayChanged: (event: CustomEvent)=> any;
    onEdgeChanged: (event: CustomEvent)=> any;
    onItemChanged: (event: CustomEvent)=> any;
    onOverflowChanged: (event: CustomEvent)=> any;
    onReorderableChanged: (event: CustomEvent)=> any;
    onSelectionChanged: (event: CustomEvent)=> any;
    onTruncationChanged: (event: CustomEvent)=> any;
    onOjAnimateEnd: (event: oj.ojTabBar.ojAnimateEnd)=> any;
    onOjAnimateStart: (event: oj.ojTabBar.ojAnimateStart)=> any;
    onOjBeforeCurrentItem: (event: oj.ojTabBar.ojBeforeCurrentItem)=> any;
    onOjBeforeDeselect: (event: oj.ojTabBar.ojBeforeDeselect)=> any;
    onOjBeforeRemove: (event: oj.ojTabBar.ojBeforeRemove)=> any;
    onOjBeforeSelect: (event: oj.ojTabBar.ojBeforeSelect)=> any;
    onOjDeselect: (event: oj.ojTabBar.ojDeselect)=> any;
    onOjRemove: (event: oj.ojTabBar.ojRemove)=> any;
    onOjReorder: (event: oj.ojTabBar.ojReorder)=> any;

    addEventListener<T extends keyof ojTabBarEventMap>(type: T, listener: (this: HTMLElement, ev: ojTabBarEventMap[T]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    
    getContextByNode(node: Element): oj.ojTabBar.NodeContext<K>|null;
    refresh(): void;
  }
  namespace ojTabBar {
    class ojAnimateEnd extends CustomEvent<{action: string, element: Element, [propName: string]: any}> {
      
    }
  
    class ojAnimateStart extends CustomEvent<{action: string, element: Element, endCallback: (()=> void), [propName: string]: any}> {
      
    }
  
    class ojBeforeCurrentItem extends CustomEvent<{previousKey: any, previousItem: Element, key: any, item: Element, [propName: string]: any}> {
      
    }
  
    class ojBeforeDeselect extends CustomEvent<{fromKey: any, fromItem: Element, toKey: any, toItem: Element, [propName: string]: any}> {
      
    }
  
    class ojBeforeRemove extends CustomEvent<{item: Element, key: any, [propName: string]: any}> {
      
    }
  
    class ojBeforeSelect extends CustomEvent<{key: any, item: Element, [propName: string]: any}> {
      
    }
  
    class ojDeselect extends CustomEvent<{fromKey: any, fromItem: Element, toKey: any, toItem: Element, [propName: string]: any}> {
      
    }
  
    class ojRemove extends CustomEvent<{item: Element, key: any, [propName: string]: any}> {
      
    }
  
    class ojReorder extends CustomEvent<{item: Element, position: 'before'|'after', reference: Element, [propName: string]: any}> {
      
    }
  }
  interface ojTabBarEventMap extends oj.baseComponentEventMap {
    'ojAnimateEnd': oj.ojTabBar.ojAnimateEnd;
    'ojAnimateStart': oj.ojTabBar.ojAnimateStart;
    'ojBeforeCurrentItem': oj.ojTabBar.ojBeforeCurrentItem;
    'ojBeforeDeselect': oj.ojTabBar.ojBeforeDeselect;
    'ojBeforeRemove': oj.ojTabBar.ojBeforeRemove;
    'ojBeforeSelect': oj.ojTabBar.ojBeforeSelect;
    'ojDeselect': oj.ojTabBar.ojDeselect;
    'ojRemove': oj.ojTabBar.ojRemove;
    'ojReorder': oj.ojTabBar.ojReorder;
    'asChanged': CustomEvent;
    'currentItemChanged': CustomEvent;
    'dataChanged': CustomEvent;
    'displayChanged': CustomEvent;
    'edgeChanged': CustomEvent;
    'itemChanged': CustomEvent;
    'overflowChanged': CustomEvent;
    'reorderableChanged': CustomEvent;
    'selectionChanged': CustomEvent;
    'truncationChanged': CustomEvent;
  }
  interface ojTabBarSettableProperties<K,D> extends baseComponentSettableProperties {
    as: string;
    currentItem: any;
    data: oj.DataProvider<K, D>|null;
    display: 'all'|'icons';
    edge: 'top'|'bottom'|'start'|'end';
    item: {renderer?: (((context: oj.ojTabBar.ItemContext<K, D>) => void)|null), selectable?: (((context: oj.ojTabBar.ItemContext<K, D>) => boolean)|boolean)};
    overflow: 'popup'|'hidden';
    reorderable: 'enabled'|'disabled';
    selection: any;
    truncation: 'none'|'progressive';
    translations: {accessibleReorderAfterItem?: string, accessibleReorderBeforeItem?: string, accessibleReorderTouchInstructionText?: string, labelCut?: string, labelPasteAfter?: string, labelPasteBefore?: string, labelRemove?: string, msgFetchingData?: string, msgNoData?: string, overflowItemLabel?: string, removeCueText?: string, selectedLabel?: string}; 
  }
  namespace ojTabBar {
    type ItemContext<K, D> =
    {
      componentElement: Element, datasource?: oj.DataProvider<K, D>, index: number, key: K, data: D, parentElement: Element
    }
  }
  namespace ojTabBar {
    type NodeContext<K> =
    {
      subId: string, index: number, key: K
    }
  }

}
