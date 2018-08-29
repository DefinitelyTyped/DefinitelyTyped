/// <reference types='ojs/ojdvt-base'/>
/// <reference types='ojs/ojdataprovider'/>
declare namespace oj {  
  class ojTagCloud<K, D> extends dvtBaseComponent<ojTagCloudSettableProperties<K, D>> {
    animationOnDataChange: 'auto'|'none';
    animationOnDisplay: 'auto'|'none';
    as: string;
    data: oj.DataProvider<K, D>|null;
    hiddenCategories: Array<string>;
    highlightMatch: 'any'|'all';
    highlightedCategories: Array<string>;
    hoverBehavior: 'dim'|'none';
    layout: 'cloud'|'rectangular';
    selection: Array<K>;
    selectionMode: 'single'|'multiple'|'none';
    styleDefaults: {animationDuration?: number, hoverBehaviorDelay?: number, svgStyle?: object};
    tooltip: {renderer: ((context: oj.ojTagCloud.TooltipContext<K>) => ({insert: Element|string}|{preventDefault: boolean}))};
    touchResponse: 'touchStart'|'auto';
    translations: {componentName?: string, labelAndValue?: string, labelClearSelection?: string, labelCountWithTotal?: string, labelDataVisualization?: string, labelInvalidData?: string, labelNoData?: string, stateCollapsed?: string, stateDrillable?: string, stateExpanded?: string, stateHidden?: string, stateIsolated?: string, stateMaximized?: string, stateMinimized?: string, stateSelected?: string, stateUnselected?: string, stateVisible?: string};
    onAnimationOnDataChangeChanged: (event: CustomEvent)=> any;
    onAnimationOnDisplayChanged: (event: CustomEvent)=> any;
    onAsChanged: (event: CustomEvent)=> any;
    onDataChanged: (event: CustomEvent)=> any;
    onHiddenCategoriesChanged: (event: CustomEvent)=> any;
    onHighlightMatchChanged: (event: CustomEvent)=> any;
    onHighlightedCategoriesChanged: (event: CustomEvent)=> any;
    onHoverBehaviorChanged: (event: CustomEvent)=> any;
    onLayoutChanged: (event: CustomEvent)=> any;
    onSelectionChanged: (event: CustomEvent)=> any;
    onSelectionModeChanged: (event: CustomEvent)=> any;
    onStyleDefaultsChanged: (event: CustomEvent)=> any;
    onTooltipChanged: (event: CustomEvent)=> any;
    onTouchResponseChanged: (event: CustomEvent)=> any;

    addEventListener<T extends keyof ojTagCloudEventMap>(type: T, listener: (this: HTMLElement, ev: ojTagCloudEventMap[T]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    
    getContextByNode(node: Element): oj.ojTagCloud.NodeContext|null;
    getItem(index: number): oj.ojTagCloud.ItemContext|null;
    getItemCount(): number;
  }
  interface ojTagCloudEventMap extends oj.dvtBaseComponentEventMap {
    'animationOnDataChangeChanged': CustomEvent;
    'animationOnDisplayChanged': CustomEvent;
    'asChanged': CustomEvent;
    'dataChanged': CustomEvent;
    'hiddenCategoriesChanged': CustomEvent;
    'highlightMatchChanged': CustomEvent;
    'highlightedCategoriesChanged': CustomEvent;
    'hoverBehaviorChanged': CustomEvent;
    'layoutChanged': CustomEvent;
    'selectionChanged': CustomEvent;
    'selectionModeChanged': CustomEvent;
    'styleDefaultsChanged': CustomEvent;
    'tooltipChanged': CustomEvent;
    'touchResponseChanged': CustomEvent;
  }
  interface ojTagCloudSettableProperties<K, D> extends dvtBaseComponentSettableProperties {
    animationOnDataChange: 'auto'|'none';
    animationOnDisplay: 'auto'|'none';
    as: string;
    data: oj.DataProvider<K, D>|null;
    hiddenCategories: Array<string>;
    highlightMatch: 'any'|'all';
    highlightedCategories: Array<string>;
    hoverBehavior: 'dim'|'none';
    layout: 'cloud'|'rectangular';
    selection: Array<K>;
    selectionMode: 'single'|'multiple'|'none';
    styleDefaults: {animationDuration?: number, hoverBehaviorDelay?: number, svgStyle?: object};
    tooltip: {renderer: ((context: oj.ojTagCloud.TooltipContext<K>) => ({insert: Element|string}|{preventDefault: boolean}))};
    touchResponse: 'touchStart'|'auto';
    translations: {componentName?: string, labelAndValue?: string, labelClearSelection?: string, labelCountWithTotal?: string, labelDataVisualization?: string, labelInvalidData?: string, labelNoData?: string, stateCollapsed?: string, stateDrillable?: string, stateExpanded?: string, stateHidden?: string, stateIsolated?: string, stateMaximized?: string, stateMinimized?: string, stateSelected?: string, stateUnselected?: string, stateVisible?: string}; 
  }
  namespace ojTagCloud {
    type ItemContext =
    {
      color: string, label: string, selected: boolean, tooltip: string, value: number
    }
  }
  namespace ojTagCloud {
    type NodeContext =
    {
      subId: string, index: number
    }
  }
  namespace ojTagCloud {
    type TooltipContext<K> =
    {
      color: string, componentElement: Element, id: K, label: string, parentElement: Element, value: number
    }
  }

}
declare namespace oj {  
  class ojTagCloudItem extends JetElement<ojTagCloudItemSettableProperties> {
    categories: Array<string>;
    color?: string;
    label: string;
    shortDesc: string;
    svgClassName: string;
    svgStyle: object;
    url: string;
    value: number|null;
    onCategoriesChanged: (event: CustomEvent)=> any;
    onColorChanged: (event: CustomEvent)=> any;
    onLabelChanged: (event: CustomEvent)=> any;
    onShortDescChanged: (event: CustomEvent)=> any;
    onSvgClassNameChanged: (event: CustomEvent)=> any;
    onSvgStyleChanged: (event: CustomEvent)=> any;
    onUrlChanged: (event: CustomEvent)=> any;
    onValueChanged: (event: CustomEvent)=> any;

    addEventListener<T extends keyof ojTagCloudItemEventMap>(type: T, listener: (this: HTMLElement, ev: ojTagCloudItemEventMap[T]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    
  }
  interface ojTagCloudItemEventMap extends oj.JetElementEventMap {
    'categoriesChanged': CustomEvent;
    'colorChanged': CustomEvent;
    'labelChanged': CustomEvent;
    'shortDescChanged': CustomEvent;
    'svgClassNameChanged': CustomEvent;
    'svgStyleChanged': CustomEvent;
    'urlChanged': CustomEvent;
    'valueChanged': CustomEvent;
  }
  interface ojTagCloudItemSettableProperties extends JetSettableProperties {
    categories: Array<string>;
    color?: string;
    label: string;
    shortDesc: string;
    svgClassName: string;
    svgStyle: object;
    url: string;
    value: number|null; 
  }

}
