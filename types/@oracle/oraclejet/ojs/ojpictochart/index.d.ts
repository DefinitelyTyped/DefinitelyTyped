/// <reference types='ojs/ojdvt-base'/>
/// <reference types='ojs/ojdataprovider'/>
declare namespace oj {  
  class ojPictoChart<K, D> extends dvtBaseComponent<ojPictoChartSettableProperties<K, D>> {
    animationDuration?: number;
    animationOnDataChange: 'auto'|'none';
    animationOnDisplay: 'auto'|'popIn'|'alphaFade'|'zoom'|'none';
    as: string;
    columnCount: number|null;
    columnWidth: number|null;
    data: oj.DataProvider<K, D>|null;
    drilling: 'on'|'off';
    hiddenCategories: Array<string>;
    highlightMatch: 'any'|'all';
    highlightedCategories: Array<string>;
    hoverBehavior: 'dim'|'none';
    hoverBehaviorDelay: number;
    layout: 'vertical'|'horizontal';
    layoutOrigin: 'topEnd'|'bottomStart'|'bottomEnd'|'topStart';
    rowCount: number|null;
    rowHeight: number|null;
    selection: Array<K>;
    selectionMode: 'single'|'multiple'|'none';
    tooltip: {renderer: ((context: oj.ojPictoChart.TooltipContext<K>) => ({insert: Element|string}|{preventDefault: boolean}))|null};
    translations: {componentName?: string, labelAndValue?: string, labelClearSelection?: string, labelCountWithTotal?: string, labelDataVisualization?: string, labelInvalidData?: string, labelNoData?: string, stateCollapsed?: string, stateDrillable?: string, stateExpanded?: string, stateHidden?: string, stateIsolated?: string, stateMaximized?: string, stateMinimized?: string, stateSelected?: string, stateUnselected?: string, stateVisible?: string};
    onAnimationDurationChanged: (event: CustomEvent)=> any;
    onAnimationOnDataChangeChanged: (event: CustomEvent)=> any;
    onAnimationOnDisplayChanged: (event: CustomEvent)=> any;
    onAsChanged: (event: CustomEvent)=> any;
    onColumnCountChanged: (event: CustomEvent)=> any;
    onColumnWidthChanged: (event: CustomEvent)=> any;
    onDataChanged: (event: CustomEvent)=> any;
    onDrillingChanged: (event: CustomEvent)=> any;
    onHiddenCategoriesChanged: (event: CustomEvent)=> any;
    onHighlightMatchChanged: (event: CustomEvent)=> any;
    onHighlightedCategoriesChanged: (event: CustomEvent)=> any;
    onHoverBehaviorChanged: (event: CustomEvent)=> any;
    onHoverBehaviorDelayChanged: (event: CustomEvent)=> any;
    onLayoutChanged: (event: CustomEvent)=> any;
    onLayoutOriginChanged: (event: CustomEvent)=> any;
    onRowCountChanged: (event: CustomEvent)=> any;
    onRowHeightChanged: (event: CustomEvent)=> any;
    onSelectionChanged: (event: CustomEvent)=> any;
    onSelectionModeChanged: (event: CustomEvent)=> any;
    onTooltipChanged: (event: CustomEvent)=> any;
    onOjDrill: (event: oj.ojPictoChart.ojDrill)=> any;

    addEventListener<T extends keyof ojPictoChartEventMap>(type: T, listener: (this: HTMLElement, ev: ojPictoChartEventMap[T]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    
    getContextByNode(node: Element): oj.ojPictoChart.NodeContext|null;
    getItem(index: number): oj.ojPictoChart.ItemContext<K>|null;
    getItemCount(): number;
  }
  namespace ojPictoChart {
    class ojDrill extends CustomEvent<{id: any, [propName: string]: any}> {
      
    }
  }
  interface ojPictoChartEventMap extends oj.dvtBaseComponentEventMap {
    'ojDrill': oj.ojPictoChart.ojDrill;
    'animationDurationChanged': CustomEvent;
    'animationOnDataChangeChanged': CustomEvent;
    'animationOnDisplayChanged': CustomEvent;
    'asChanged': CustomEvent;
    'columnCountChanged': CustomEvent;
    'columnWidthChanged': CustomEvent;
    'dataChanged': CustomEvent;
    'drillingChanged': CustomEvent;
    'hiddenCategoriesChanged': CustomEvent;
    'highlightMatchChanged': CustomEvent;
    'highlightedCategoriesChanged': CustomEvent;
    'hoverBehaviorChanged': CustomEvent;
    'hoverBehaviorDelayChanged': CustomEvent;
    'layoutChanged': CustomEvent;
    'layoutOriginChanged': CustomEvent;
    'rowCountChanged': CustomEvent;
    'rowHeightChanged': CustomEvent;
    'selectionChanged': CustomEvent;
    'selectionModeChanged': CustomEvent;
    'tooltipChanged': CustomEvent;
  }
  interface ojPictoChartSettableProperties<K, D> extends dvtBaseComponentSettableProperties {
    animationDuration?: number;
    animationOnDataChange: 'auto'|'none';
    animationOnDisplay: 'auto'|'popIn'|'alphaFade'|'zoom'|'none';
    as: string;
    columnCount: number|null;
    columnWidth: number|null;
    data: oj.DataProvider<K, D>|null;
    drilling: 'on'|'off';
    hiddenCategories: Array<string>;
    highlightMatch: 'any'|'all';
    highlightedCategories: Array<string>;
    hoverBehavior: 'dim'|'none';
    hoverBehaviorDelay: number;
    layout: 'vertical'|'horizontal';
    layoutOrigin: 'topEnd'|'bottomStart'|'bottomEnd'|'topStart';
    rowCount: number|null;
    rowHeight: number|null;
    selection: Array<K>;
    selectionMode: 'single'|'multiple'|'none';
    tooltip: {renderer: ((context: oj.ojPictoChart.TooltipContext<K>) => ({insert: Element|string}|{preventDefault: boolean}))|null};
    translations: {componentName?: string, labelAndValue?: string, labelClearSelection?: string, labelCountWithTotal?: string, labelDataVisualization?: string, labelInvalidData?: string, labelNoData?: string, stateCollapsed?: string, stateDrillable?: string, stateExpanded?: string, stateHidden?: string, stateIsolated?: string, stateMaximized?: string, stateMinimized?: string, stateSelected?: string, stateUnselected?: string, stateVisible?: string}; 
  }
  namespace ojPictoChart {
    type ItemContext<K> =
    {
      color: string, count: number, id: K, name: string, selected: boolean, tooltip: string
    }
  }
  namespace ojPictoChart {
    type NodeContext =
    {
      subId: string, index: number
    }
  }
  namespace ojPictoChart {
    type TooltipContext<K> =
    {
      parentElement: Element, id: K, name: string, count: number, color: string, componentElement: Element
    }
  }

}
declare namespace oj {  
  class ojPictoChartItem extends JetElement<ojPictoChartItemSettableProperties> {
    borderColor: string;
    borderWidth: number;
    categories: Array<string>;
    color: string;
    columnSpan: number;
    count: number;
    drilling: 'inherit'|'off'|'on';
    name: string;
    rowSpan: number;
    shape: 'circle'|'diamond'|'human'|'plus'|'rectangle'|'square'|'star'|'triangleDown'|'triangleUp'|'none';
    shortDesc: string;
    source: string;
    sourceHover: string;
    sourceHoverSelected: string;
    sourceSelected: string;
    svgClassName: string;
    svgStyle: object;
    onBorderColorChanged: (event: CustomEvent)=> any;
    onBorderWidthChanged: (event: CustomEvent)=> any;
    onCategoriesChanged: (event: CustomEvent)=> any;
    onColorChanged: (event: CustomEvent)=> any;
    onColumnSpanChanged: (event: CustomEvent)=> any;
    onCountChanged: (event: CustomEvent)=> any;
    onDrillingChanged: (event: CustomEvent)=> any;
    onNameChanged: (event: CustomEvent)=> any;
    onRowSpanChanged: (event: CustomEvent)=> any;
    onShapeChanged: (event: CustomEvent)=> any;
    onShortDescChanged: (event: CustomEvent)=> any;
    onSourceChanged: (event: CustomEvent)=> any;
    onSourceHoverChanged: (event: CustomEvent)=> any;
    onSourceHoverSelectedChanged: (event: CustomEvent)=> any;
    onSourceSelectedChanged: (event: CustomEvent)=> any;
    onSvgClassNameChanged: (event: CustomEvent)=> any;
    onSvgStyleChanged: (event: CustomEvent)=> any;

    addEventListener<T extends keyof ojPictoChartItemEventMap>(type: T, listener: (this: HTMLElement, ev: ojPictoChartItemEventMap[T]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    
  }
  interface ojPictoChartItemEventMap extends oj.JetElementEventMap {
    'borderColorChanged': CustomEvent;
    'borderWidthChanged': CustomEvent;
    'categoriesChanged': CustomEvent;
    'colorChanged': CustomEvent;
    'columnSpanChanged': CustomEvent;
    'countChanged': CustomEvent;
    'drillingChanged': CustomEvent;
    'nameChanged': CustomEvent;
    'rowSpanChanged': CustomEvent;
    'shapeChanged': CustomEvent;
    'shortDescChanged': CustomEvent;
    'sourceChanged': CustomEvent;
    'sourceHoverChanged': CustomEvent;
    'sourceHoverSelectedChanged': CustomEvent;
    'sourceSelectedChanged': CustomEvent;
    'svgClassNameChanged': CustomEvent;
    'svgStyleChanged': CustomEvent;
  }
  interface ojPictoChartItemSettableProperties extends JetSettableProperties {
    borderColor: string;
    borderWidth: number;
    categories: Array<string>;
    color: string;
    columnSpan: number;
    count: number;
    drilling: 'inherit'|'off'|'on';
    name: string;
    rowSpan: number;
    shape: 'circle'|'diamond'|'human'|'plus'|'rectangle'|'square'|'star'|'triangleDown'|'triangleUp'|'none';
    shortDesc: string;
    source: string;
    sourceHover: string;
    sourceHoverSelected: string;
    sourceSelected: string;
    svgClassName: string;
    svgStyle: object; 
  }

}
