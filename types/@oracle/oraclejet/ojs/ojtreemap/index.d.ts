/// <reference types='ojs/ojdvt-base'/>
/// <reference types='ojs/ojdataprovider'/>
declare namespace oj {  
  class ojTreemap<K, D> extends dvtBaseComponent<ojTreemapSettableProperties<K, D>> {
    animationDuration: number;
    animationOnDataChange: 'auto'|'none';
    animationOnDisplay: 'auto'|'none';
    animationUpdateColor: string;
    as: string;
    colorLabel: string;
    data: oj.DataProvider<K, D>|null;
    displayLevels: number;
    drilling: 'on'|'off';
    groupGaps: 'all'|'none'|'outer';
    hiddenCategories: Array<string>;
    highlightMatch: 'any'|'all';
    highlightedCategories: Array<string>;
    hoverBehavior: 'dim'|'none';
    hoverBehaviorDelay: number;
    isolatedNode: any;
    layout: 'sliceAndDiceHorizontal'|'sliceAndDiceVertical'|'squarified';
    nodeContent: {renderer: ((context: oj.ojTreemap.NodeContentContext<K, D>) => ({insert: Element|string}))};
    nodeDefaults: {groupLabelDisplay: 'node'|'off'|'header', header: {backgroundColor: string, borderColor: string, hoverBackgroundColor: string, hoverInnerColor: string, hoverOuterColor: string, isolate: 'off'|'on', labelHalign: 'center'|'end'|'start', labelStyle: object, selectedBackgroundColor: string, selectedInnerColor: string, selectedOuterColor: string, useNodeColor: 'on'|'off'}, hoverColor: string, labelDisplay: 'off'|'node', labelHalign: 'start'|'end'|'center', labelMinLength: number, labelStyle: object, labelValign: 'top'|'bottom'|'center', selectedInnerColor: string, selectedOuterColor: string};
    nodeSeparators: 'bevels'|'gaps';
    rootNode: any;
    selection: Array<any>;
    selectionMode: 'none'|'single'|'multiple';
    sizeLabel: string;
    sorting: 'on'|'off';
    tooltip: {renderer: ((context: oj.ojTreemap.TooltipContext<K, D>) => ({insert: Element|string}|{preventDefault: boolean}))};
    touchResponse: 'touchStart'|'auto';
    translations: {componentName?: string, labelAndValue?: string, labelClearSelection?: string, labelColor?: string, labelCountWithTotal?: string, labelDataVisualization?: string, labelInvalidData?: string, labelNoData?: string, labelSize?: string, stateCollapsed?: string, stateDrillable?: string, stateExpanded?: string, stateHidden?: string, stateIsolated?: string, stateMaximized?: string, stateMinimized?: string, stateSelected?: string, stateUnselected?: string, stateVisible?: string, tooltipIsolate?: string, tooltipRestore?: string};
    onAnimationDurationChanged: (event: CustomEvent)=> any;
    onAnimationOnDataChangeChanged: (event: CustomEvent)=> any;
    onAnimationOnDisplayChanged: (event: CustomEvent)=> any;
    onAnimationUpdateColorChanged: (event: CustomEvent)=> any;
    onAsChanged: (event: CustomEvent)=> any;
    onColorLabelChanged: (event: CustomEvent)=> any;
    onDataChanged: (event: CustomEvent)=> any;
    onDisplayLevelsChanged: (event: CustomEvent)=> any;
    onDrillingChanged: (event: CustomEvent)=> any;
    onGroupGapsChanged: (event: CustomEvent)=> any;
    onHiddenCategoriesChanged: (event: CustomEvent)=> any;
    onHighlightMatchChanged: (event: CustomEvent)=> any;
    onHighlightedCategoriesChanged: (event: CustomEvent)=> any;
    onHoverBehaviorChanged: (event: CustomEvent)=> any;
    onHoverBehaviorDelayChanged: (event: CustomEvent)=> any;
    onIsolatedNodeChanged: (event: CustomEvent)=> any;
    onLayoutChanged: (event: CustomEvent)=> any;
    onNodeContentChanged: (event: CustomEvent)=> any;
    onNodeDefaultsChanged: (event: CustomEvent)=> any;
    onNodeSeparatorsChanged: (event: CustomEvent)=> any;
    onRootNodeChanged: (event: CustomEvent)=> any;
    onSelectionChanged: (event: CustomEvent)=> any;
    onSelectionModeChanged: (event: CustomEvent)=> any;
    onSizeLabelChanged: (event: CustomEvent)=> any;
    onSortingChanged: (event: CustomEvent)=> any;
    onTooltipChanged: (event: CustomEvent)=> any;
    onTouchResponseChanged: (event: CustomEvent)=> any;
    onOjBeforeDrill: (event: oj.ojTreemap.ojBeforeDrill)=> any;
    onOjDrill: (event: oj.ojTreemap.ojDrill)=> any;

    addEventListener<T extends keyof ojTreemapEventMap>(type: T, listener: (this: HTMLElement, ev: ojTreemapEventMap[T]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    
    getContextByNode(node: Element): oj.ojTreemap.NodeContext|null;
    getNode(subIdPath: Array<any>): oj.ojTreemap.DataContext|null;
  }
  namespace ojTreemap {
    class ojBeforeDrill extends CustomEvent<{id: any, data: object, itemData: object, [propName: string]: any}> {
      
    }
  
    class ojDrill extends CustomEvent<{id: any, data: object, itemData: object, [propName: string]: any}> {
      
    }
  }
  interface ojTreemapEventMap extends oj.dvtBaseComponentEventMap {
    'ojBeforeDrill': oj.ojTreemap.ojBeforeDrill;
    'ojDrill': oj.ojTreemap.ojDrill;
    'animationDurationChanged': CustomEvent;
    'animationOnDataChangeChanged': CustomEvent;
    'animationOnDisplayChanged': CustomEvent;
    'animationUpdateColorChanged': CustomEvent;
    'asChanged': CustomEvent;
    'colorLabelChanged': CustomEvent;
    'dataChanged': CustomEvent;
    'displayLevelsChanged': CustomEvent;
    'drillingChanged': CustomEvent;
    'groupGapsChanged': CustomEvent;
    'hiddenCategoriesChanged': CustomEvent;
    'highlightMatchChanged': CustomEvent;
    'highlightedCategoriesChanged': CustomEvent;
    'hoverBehaviorChanged': CustomEvent;
    'hoverBehaviorDelayChanged': CustomEvent;
    'isolatedNodeChanged': CustomEvent;
    'layoutChanged': CustomEvent;
    'nodeContentChanged': CustomEvent;
    'nodeDefaultsChanged': CustomEvent;
    'nodeSeparatorsChanged': CustomEvent;
    'rootNodeChanged': CustomEvent;
    'selectionChanged': CustomEvent;
    'selectionModeChanged': CustomEvent;
    'sizeLabelChanged': CustomEvent;
    'sortingChanged': CustomEvent;
    'tooltipChanged': CustomEvent;
    'touchResponseChanged': CustomEvent;
  }
  interface ojTreemapSettableProperties<K, D> extends dvtBaseComponentSettableProperties {
    animationDuration: number;
    animationOnDataChange: 'auto'|'none';
    animationOnDisplay: 'auto'|'none';
    animationUpdateColor: string;
    as: string;
    colorLabel: string;
    data: oj.DataProvider<K, D>|null;
    displayLevels: number;
    drilling: 'on'|'off';
    groupGaps: 'all'|'none'|'outer';
    hiddenCategories: Array<string>;
    highlightMatch: 'any'|'all';
    highlightedCategories: Array<string>;
    hoverBehavior: 'dim'|'none';
    hoverBehaviorDelay: number;
    isolatedNode: any;
    layout: 'sliceAndDiceHorizontal'|'sliceAndDiceVertical'|'squarified';
    nodeContent: {renderer: ((context: oj.ojTreemap.NodeContentContext<K, D>) => ({insert: Element|string}))};
    nodeDefaults: {groupLabelDisplay: 'node'|'off'|'header', header: {backgroundColor: string, borderColor: string, hoverBackgroundColor: string, hoverInnerColor: string, hoverOuterColor: string, isolate: 'off'|'on', labelHalign: 'center'|'end'|'start', labelStyle: object, selectedBackgroundColor: string, selectedInnerColor: string, selectedOuterColor: string, useNodeColor: 'on'|'off'}, hoverColor: string, labelDisplay: 'off'|'node', labelHalign: 'start'|'end'|'center', labelMinLength: number, labelStyle: object, labelValign: 'top'|'bottom'|'center', selectedInnerColor: string, selectedOuterColor: string};
    nodeSeparators: 'bevels'|'gaps';
    rootNode: any;
    selection: Array<any>;
    selectionMode: 'none'|'single'|'multiple';
    sizeLabel: string;
    sorting: 'on'|'off';
    tooltip: {renderer: ((context: oj.ojTreemap.TooltipContext<K, D>) => ({insert: Element|string}|{preventDefault: boolean}))};
    touchResponse: 'touchStart'|'auto';
    translations: {componentName?: string, labelAndValue?: string, labelClearSelection?: string, labelColor?: string, labelCountWithTotal?: string, labelDataVisualization?: string, labelInvalidData?: string, labelNoData?: string, labelSize?: string, stateCollapsed?: string, stateDrillable?: string, stateExpanded?: string, stateHidden?: string, stateIsolated?: string, stateMaximized?: string, stateMinimized?: string, stateSelected?: string, stateUnselected?: string, stateVisible?: string, tooltipIsolate?: string, tooltipRestore?: string}; 
  }
  namespace ojTreemap {
    type DataContext =
    {
      color: string, label: string, selected: boolean, size: number, tooltip: string
    }
  }
  namespace ojTreemap {
    type NodeContentContext<K, D> =
    {
      bounds: {x: number, y: number, width: number, height: number}, id: K, data: object, itemData: D, componentElement: Element
    }
  }
  namespace ojTreemap {
    type NodeContext =
    {
      subId: string, indexPath: Array<number>
    }
  }
  namespace ojTreemap {
    type TooltipContext<K, D> =
    {
      parentElement: Element, id: K, label: string, value: number, color: string, data: object, itemData: D, componentElement: Element
    }
  }

}
declare namespace oj {  
  class ojTreemapNode extends JetElement<ojTreemapNodeSettableProperties> {
    categories?: Array<string>;
    color?: string;
    drilling?: 'on'|'off'|'inherit';
    groupLabelDisplay?: 'node'|'off'|'header';
    header?: {isolate?: 'off'|'on', labelHalign?: 'center'|'end'|'start', labelStyle?: object, useNodeColor?: 'on'|'off'};
    label?: string;
    labelDisplay?: 'off'|'node';
    labelHalign?: 'start'|'end'|'center';
    labelStyle?: object;
    labelValign?: 'top'|'bottom'|'center';
    pattern?: 'smallChecker'|'smallCrosshatch'|'smallDiagonalLeft'|'smallDiagonalRight'|'smallDiamond'|'smallTriangle'|'largeChecker'|'largeCrosshatch'|'largeDiagonalLeft'|'largeDiagonalRight'|'largeDiamond'|'largeTriangle'|'none';
    selectable?: 'off'|'auto';
    shortDesc?: string;
    svgClassName?: string;
    svgStyle?: object;
    value: number;
    onCategoriesChanged: (event: CustomEvent)=> any;
    onColorChanged: (event: CustomEvent)=> any;
    onDrillingChanged: (event: CustomEvent)=> any;
    onGroupLabelDisplayChanged: (event: CustomEvent)=> any;
    onHeaderChanged: (event: CustomEvent)=> any;
    onLabelChanged: (event: CustomEvent)=> any;
    onLabelDisplayChanged: (event: CustomEvent)=> any;
    onLabelHalignChanged: (event: CustomEvent)=> any;
    onLabelStyleChanged: (event: CustomEvent)=> any;
    onLabelValignChanged: (event: CustomEvent)=> any;
    onPatternChanged: (event: CustomEvent)=> any;
    onSelectableChanged: (event: CustomEvent)=> any;
    onShortDescChanged: (event: CustomEvent)=> any;
    onSvgClassNameChanged: (event: CustomEvent)=> any;
    onSvgStyleChanged: (event: CustomEvent)=> any;
    onValueChanged: (event: CustomEvent)=> any;

    addEventListener<T extends keyof ojTreemapNodeEventMap>(type: T, listener: (this: HTMLElement, ev: ojTreemapNodeEventMap[T]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    
  }
  interface ojTreemapNodeEventMap extends oj.JetElementEventMap {
    'categoriesChanged': CustomEvent;
    'colorChanged': CustomEvent;
    'drillingChanged': CustomEvent;
    'groupLabelDisplayChanged': CustomEvent;
    'headerChanged': CustomEvent;
    'labelChanged': CustomEvent;
    'labelDisplayChanged': CustomEvent;
    'labelHalignChanged': CustomEvent;
    'labelStyleChanged': CustomEvent;
    'labelValignChanged': CustomEvent;
    'patternChanged': CustomEvent;
    'selectableChanged': CustomEvent;
    'shortDescChanged': CustomEvent;
    'svgClassNameChanged': CustomEvent;
    'svgStyleChanged': CustomEvent;
    'valueChanged': CustomEvent;
  }
  interface ojTreemapNodeSettableProperties extends JetSettableProperties {
    categories?: Array<string>;
    color?: string;
    drilling?: 'on'|'off'|'inherit';
    groupLabelDisplay?: 'node'|'off'|'header';
    header?: {isolate?: 'off'|'on', labelHalign?: 'center'|'end'|'start', labelStyle?: object, useNodeColor?: 'on'|'off'};
    label?: string;
    labelDisplay?: 'off'|'node';
    labelHalign?: 'start'|'end'|'center';
    labelStyle?: object;
    labelValign?: 'top'|'bottom'|'center';
    pattern?: 'smallChecker'|'smallCrosshatch'|'smallDiagonalLeft'|'smallDiagonalRight'|'smallDiamond'|'smallTriangle'|'largeChecker'|'largeCrosshatch'|'largeDiagonalLeft'|'largeDiagonalRight'|'largeDiamond'|'largeTriangle'|'none';
    selectable?: 'off'|'auto';
    shortDesc?: string;
    svgClassName?: string;
    svgStyle?: object;
    value: number; 
  }

}
