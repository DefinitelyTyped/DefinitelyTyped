/// <reference types='ojs/ojdvt-base'/>
/// <reference types='ojs/ojdataprovider'/>
declare namespace oj {  
  class ojLegend<K, D> extends dvtBaseComponent<ojLegendSettableProperties<K, D>> {
    as: string;
    data: oj.DataProvider<K, D>|null;
    drilling: 'on'|'off';
    expanded: KeySet.KeySet<K>|null;
    halign: 'center'|'end'|'start';
    hiddenCategories: Array<string>;
    hideAndShowBehavior: 'on'|'off';
    highlightedCategories: Array<string>;
    hoverBehavior: 'dim'|'none';
    hoverBehaviorDelay: number;
    orientation: 'horizontal'|'vertical';
    scrolling: 'off'|'asNeeded';
    symbolHeight: number;
    symbolWidth: number;
    textStyle?: object;
    valign: 'middle'|'bottom'|'top';
    translations: {componentName?: string, labelAndValue?: string, labelClearSelection?: string, labelCountWithTotal?: string, labelDataVisualization?: string, labelInvalidData?: string, labelNoData?: string, stateCollapsed?: string, stateDrillable?: string, stateExpanded?: string, stateHidden?: string, stateIsolated?: string, stateMaximized?: string, stateMinimized?: string, stateSelected?: string, stateUnselected?: string, stateVisible?: string};
    onAsChanged: (event: CustomEvent)=> any;
    onDataChanged: (event: CustomEvent)=> any;
    onDrillingChanged: (event: CustomEvent)=> any;
    onExpandedChanged: (event: CustomEvent)=> any;
    onHalignChanged: (event: CustomEvent)=> any;
    onHiddenCategoriesChanged: (event: CustomEvent)=> any;
    onHideAndShowBehaviorChanged: (event: CustomEvent)=> any;
    onHighlightedCategoriesChanged: (event: CustomEvent)=> any;
    onHoverBehaviorChanged: (event: CustomEvent)=> any;
    onHoverBehaviorDelayChanged: (event: CustomEvent)=> any;
    onOrientationChanged: (event: CustomEvent)=> any;
    onScrollingChanged: (event: CustomEvent)=> any;
    onSymbolHeightChanged: (event: CustomEvent)=> any;
    onSymbolWidthChanged: (event: CustomEvent)=> any;
    onTextStyleChanged: (event: CustomEvent)=> any;
    onValignChanged: (event: CustomEvent)=> any;
    onOjDrill: (event: oj.ojLegend.ojDrill)=> any;

    addEventListener<T extends keyof ojLegendEventMap>(type: T, listener: (this: HTMLElement, ev: ojLegendEventMap[T]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    
    getContextByNode(node: Element): oj.ojLegend.NodeContext|null;
    getItem(subIdPath: Array<any>): oj.ojLegend.ItemContext|null;
    getPreferredSize(): oj.ojLegend.PreferredSize|null;
    getSection(subIdPath: Array<any>): oj.ojLegend.SectionContext|null;
  }
  namespace ojLegend {
    class ojDrill extends CustomEvent<{id: any, [propName: string]: any}> {
      
    }
  }
  interface ojLegendEventMap extends oj.dvtBaseComponentEventMap {
    'ojDrill': oj.ojLegend.ojDrill;
    'asChanged': CustomEvent;
    'dataChanged': CustomEvent;
    'drillingChanged': CustomEvent;
    'expandedChanged': CustomEvent;
    'halignChanged': CustomEvent;
    'hiddenCategoriesChanged': CustomEvent;
    'hideAndShowBehaviorChanged': CustomEvent;
    'highlightedCategoriesChanged': CustomEvent;
    'hoverBehaviorChanged': CustomEvent;
    'hoverBehaviorDelayChanged': CustomEvent;
    'orientationChanged': CustomEvent;
    'scrollingChanged': CustomEvent;
    'symbolHeightChanged': CustomEvent;
    'symbolWidthChanged': CustomEvent;
    'textStyleChanged': CustomEvent;
    'valignChanged': CustomEvent;
  }
  interface ojLegendSettableProperties<K, D> extends dvtBaseComponentSettableProperties {
    as: string;
    data: oj.DataProvider<K, D>|null;
    drilling: 'on'|'off';
    expanded: KeySet.KeySet<K>|null;
    halign: 'center'|'end'|'start';
    hiddenCategories: Array<string>;
    hideAndShowBehavior: 'on'|'off';
    highlightedCategories: Array<string>;
    hoverBehavior: 'dim'|'none';
    hoverBehaviorDelay: number;
    orientation: 'horizontal'|'vertical';
    scrolling: 'off'|'asNeeded';
    symbolHeight: number;
    symbolWidth: number;
    textStyle?: object;
    valign: 'middle'|'bottom'|'top';
    translations: {componentName?: string, labelAndValue?: string, labelClearSelection?: string, labelCountWithTotal?: string, labelDataVisualization?: string, labelInvalidData?: string, labelNoData?: string, stateCollapsed?: string, stateDrillable?: string, stateExpanded?: string, stateHidden?: string, stateIsolated?: string, stateMaximized?: string, stateMinimized?: string, stateSelected?: string, stateUnselected?: string, stateVisible?: string}; 
  }
  namespace ojLegend {
    type ItemContext =
    {
      text: string
    }
  }
  namespace ojLegend {
    type NodeContext =
    {
      itemIndex: number, sectionIndexPath: Array<number>, subId: string
    }
  }
  namespace ojLegend {
    type PreferredSize =
    {
      width: number, height: number
    }
  }
  namespace ojLegend {
    type SectionContext =
    {
      title: string, sections: Array<object>, items: Array<object>, getSection: {title: string, sections: string, items: boolean}, getItems: {text: string}
    }
  }

}
declare namespace oj {  
  class ojLegendItem extends JetElement<ojLegendItemSettableProperties> {
    borderColor?: string;
    categories?: Array<string>;
    categoryVisibility?: 'hidden'|'visible';
    color?: string;
    drilling?: 'on'|'off'|'inherit';
    lineStyle?: 'dotted'|'dashed'|'solid';
    lineWidth?: number;
    markerColor?: string;
    markerShape: 'circle'|'diamond'|'ellipse'|'human'|'plus'|'rectangle'|'square'|'star'|'triangleDown'|'triangleUp'|string;
    markerSvgClassName?: string;
    markerSvgStyle?: object;
    pattern?: 'smallChecker'|'smallCrosshatch'|'smallDiagonalLeft'|'smallDiagonalRight'|'smallDiamond'|'smallTriangle'|'largeChecker'|'largeCrosshatch'|'largeDiagonalLeft'|'largeDiagonalRight'|'largeDiamond'|'largeTriangle'|'none';
    shortDesc?: string;
    source?: string;
    svgClassName?: string;
    svgStyle?: object;
    symbolType?: 'line'|'lineWithMarker'|'image'|'marker';
    text: string;
    onBorderColorChanged: (event: CustomEvent)=> any;
    onCategoriesChanged: (event: CustomEvent)=> any;
    onCategoryVisibilityChanged: (event: CustomEvent)=> any;
    onColorChanged: (event: CustomEvent)=> any;
    onDrillingChanged: (event: CustomEvent)=> any;
    onLineStyleChanged: (event: CustomEvent)=> any;
    onLineWidthChanged: (event: CustomEvent)=> any;
    onMarkerColorChanged: (event: CustomEvent)=> any;
    onMarkerShapeChanged: (event: CustomEvent)=> any;
    onMarkerSvgClassNameChanged: (event: CustomEvent)=> any;
    onMarkerSvgStyleChanged: (event: CustomEvent)=> any;
    onPatternChanged: (event: CustomEvent)=> any;
    onShortDescChanged: (event: CustomEvent)=> any;
    onSourceChanged: (event: CustomEvent)=> any;
    onSvgClassNameChanged: (event: CustomEvent)=> any;
    onSvgStyleChanged: (event: CustomEvent)=> any;
    onSymbolTypeChanged: (event: CustomEvent)=> any;
    onTextChanged: (event: CustomEvent)=> any;

    addEventListener<T extends keyof ojLegendItemEventMap>(type: T, listener: (this: HTMLElement, ev: ojLegendItemEventMap[T]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    
  }
  interface ojLegendItemEventMap extends oj.JetElementEventMap {
    'borderColorChanged': CustomEvent;
    'categoriesChanged': CustomEvent;
    'categoryVisibilityChanged': CustomEvent;
    'colorChanged': CustomEvent;
    'drillingChanged': CustomEvent;
    'lineStyleChanged': CustomEvent;
    'lineWidthChanged': CustomEvent;
    'markerColorChanged': CustomEvent;
    'markerShapeChanged': CustomEvent;
    'markerSvgClassNameChanged': CustomEvent;
    'markerSvgStyleChanged': CustomEvent;
    'patternChanged': CustomEvent;
    'shortDescChanged': CustomEvent;
    'sourceChanged': CustomEvent;
    'svgClassNameChanged': CustomEvent;
    'svgStyleChanged': CustomEvent;
    'symbolTypeChanged': CustomEvent;
    'textChanged': CustomEvent;
  }
  interface ojLegendItemSettableProperties extends JetSettableProperties {
    borderColor?: string;
    categories?: Array<string>;
    categoryVisibility?: 'hidden'|'visible';
    color?: string;
    drilling?: 'on'|'off'|'inherit';
    lineStyle?: 'dotted'|'dashed'|'solid';
    lineWidth?: number;
    markerColor?: string;
    markerShape: 'circle'|'diamond'|'ellipse'|'human'|'plus'|'rectangle'|'square'|'star'|'triangleDown'|'triangleUp'|string;
    markerSvgClassName?: string;
    markerSvgStyle?: object;
    pattern?: 'smallChecker'|'smallCrosshatch'|'smallDiagonalLeft'|'smallDiagonalRight'|'smallDiamond'|'smallTriangle'|'largeChecker'|'largeCrosshatch'|'largeDiagonalLeft'|'largeDiagonalRight'|'largeDiamond'|'largeTriangle'|'none';
    shortDesc?: string;
    source?: string;
    svgClassName?: string;
    svgStyle?: object;
    symbolType?: 'line'|'lineWithMarker'|'image'|'marker';
    text: string; 
  }

}
declare namespace oj {  
  class ojLegendSection extends JetElement<ojLegendSectionSettableProperties> {
    collapsible?: 'on'|'off';
    text?: string;
    textHalign?: 'center'|'end'|'start';
    textStyle?: object;
    onCollapsibleChanged: (event: CustomEvent)=> any;
    onTextChanged: (event: CustomEvent)=> any;
    onTextHalignChanged: (event: CustomEvent)=> any;
    onTextStyleChanged: (event: CustomEvent)=> any;

    addEventListener<T extends keyof ojLegendSectionEventMap>(type: T, listener: (this: HTMLElement, ev: ojLegendSectionEventMap[T]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    
  }
  interface ojLegendSectionEventMap extends oj.JetElementEventMap {
    'collapsibleChanged': CustomEvent;
    'textChanged': CustomEvent;
    'textHalignChanged': CustomEvent;
    'textStyleChanged': CustomEvent;
  }
  interface ojLegendSectionSettableProperties extends JetSettableProperties {
    collapsible?: 'on'|'off';
    text?: string;
    textHalign?: 'center'|'end'|'start';
    textStyle?: object; 
  }

}
