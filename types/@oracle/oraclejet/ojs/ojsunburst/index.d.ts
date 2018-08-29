/// <reference types='ojs/ojdvt-base'/>
declare namespace oj {  
  class ojSunburst<K, D> extends dvtBaseComponent<ojSunburstSettableProperties<K, D>> {
    animationDuration: number;
    animationOnDataChange: 'auto'|'none';
    animationOnDisplay: 'auto'|'none';
    animationUpdateColor: string;
    as: string;
    colorLabel: string;
    data: oj.DataProvider<K, D>|null;
    displayLevels: number;
    drilling: 'on'|'off';
    expanded: KeySet.KeySet<K>;
    hiddenCategories: Array<string>;
    highlightMatch: 'any'|'all';
    highlightedCategories: Array<string>;
    hoverBehavior: 'dim'|'none';
    hoverBehaviorDelay: number;
    nodeDefaults: {borderColor: string, borderWidth: number, hoverColor: string, labelDisplay: 'horizontal'|'rotated'|'off'|'auto', labelHalign: 'inner'|'outer'|'center', labelMinLength: number, labelStyle: object, selectedInnerColor: string, selectedOuterColor: string, showDisclosure: 'on'|'off'};
    rootNode: any;
    rootNodeContent: {renderer: ((context: oj.ojSunburst.RootNodeContext<K, D>) => ({insert: Element|string}))};
    rotation: 'off'|'on';
    selection: Array<any>;
    selectionMode: 'none'|'single'|'multiple';
    sizeLabel: string;
    sorting: 'on'|'off';
    startAngle: number;
    tooltip: {renderer: ((context: oj.ojSunburst.TooltipContext<K, D>) => ({insert: Element|string}|{preventDefault: boolean}))};
    touchResponse: 'touchStart'|'auto';
    translations: {componentName?: string, labelAndValue?: string, labelClearSelection?: string, labelColor?: string, labelCountWithTotal?: string, labelDataVisualization?: string, labelInvalidData?: string, labelNoData?: string, labelSize?: string, stateCollapsed?: string, stateDrillable?: string, stateExpanded?: string, stateHidden?: string, stateIsolated?: string, stateMaximized?: string, stateMinimized?: string, stateSelected?: string, stateUnselected?: string, stateVisible?: string, tooltipCollapse?: string, tooltipExpand?: string};
    onAnimationDurationChanged: (event: CustomEvent)=> any;
    onAnimationOnDataChangeChanged: (event: CustomEvent)=> any;
    onAnimationOnDisplayChanged: (event: CustomEvent)=> any;
    onAnimationUpdateColorChanged: (event: CustomEvent)=> any;
    onAsChanged: (event: CustomEvent)=> any;
    onColorLabelChanged: (event: CustomEvent)=> any;
    onDataChanged: (event: CustomEvent)=> any;
    onDisplayLevelsChanged: (event: CustomEvent)=> any;
    onDrillingChanged: (event: CustomEvent)=> any;
    onExpandedChanged: (event: CustomEvent)=> any;
    onHiddenCategoriesChanged: (event: CustomEvent)=> any;
    onHighlightMatchChanged: (event: CustomEvent)=> any;
    onHighlightedCategoriesChanged: (event: CustomEvent)=> any;
    onHoverBehaviorChanged: (event: CustomEvent)=> any;
    onHoverBehaviorDelayChanged: (event: CustomEvent)=> any;
    onNodeDefaultsChanged: (event: CustomEvent)=> any;
    onRootNodeChanged: (event: CustomEvent)=> any;
    onRootNodeContentChanged: (event: CustomEvent)=> any;
    onRotationChanged: (event: CustomEvent)=> any;
    onSelectionChanged: (event: CustomEvent)=> any;
    onSelectionModeChanged: (event: CustomEvent)=> any;
    onSizeLabelChanged: (event: CustomEvent)=> any;
    onSortingChanged: (event: CustomEvent)=> any;
    onStartAngleChanged: (event: CustomEvent)=> any;
    onTooltipChanged: (event: CustomEvent)=> any;
    onTouchResponseChanged: (event: CustomEvent)=> any;
    onOjBeforeCollapse: (event: oj.ojSunburst.ojBeforeCollapse)=> any;
    onOjBeforeDrill: (event: oj.ojSunburst.ojBeforeDrill)=> any;
    onOjBeforeExpand: (event: oj.ojSunburst.ojBeforeExpand)=> any;
    onOjCollapse: (event: oj.ojSunburst.ojCollapse)=> any;
    onOjDrill: (event: oj.ojSunburst.ojDrill)=> any;
    onOjExpand: (event: oj.ojSunburst.ojExpand)=> any;
    onOjRotateInput: (event: oj.ojSunburst.ojRotateInput)=> any;

    addEventListener<T extends keyof ojSunburstEventMap>(type: T, listener: (this: HTMLElement, ev: ojSunburstEventMap[T]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    
    getContextByNode(node: Element): oj.ojSunburst.NodeContext|null;
    getNode(subIdPath: Array<any>): oj.ojSunburst.DataContext|null;
  }
  namespace ojSunburst {
    class ojBeforeCollapse extends CustomEvent<{id: any, data: object, itemData: object, [propName: string]: any}> {
      
    }
  
    class ojBeforeDrill extends CustomEvent<{id: any, data: object, itemData: object, [propName: string]: any}> {
      
    }
  
    class ojBeforeExpand extends CustomEvent<{id: any, data: object, itemData: object, [propName: string]: any}> {
      
    }
  
    class ojCollapse extends CustomEvent<{id: any, data: object, itemData: object, [propName: string]: any}> {
      
    }
  
    class ojDrill extends CustomEvent<{id: any, data: object, itemData: object, [propName: string]: any}> {
      
    }
  
    class ojExpand extends CustomEvent<{id: any, data: object, itemData: object, [propName: string]: any}> {
      
    }
  
    class ojRotateInput extends CustomEvent<{value: number, [propName: string]: any}> {
      
    }
  }
  interface ojSunburstEventMap extends oj.dvtBaseComponentEventMap {
    'ojBeforeCollapse': oj.ojSunburst.ojBeforeCollapse;
    'ojBeforeDrill': oj.ojSunburst.ojBeforeDrill;
    'ojBeforeExpand': oj.ojSunburst.ojBeforeExpand;
    'ojCollapse': oj.ojSunburst.ojCollapse;
    'ojDrill': oj.ojSunburst.ojDrill;
    'ojExpand': oj.ojSunburst.ojExpand;
    'ojRotateInput': oj.ojSunburst.ojRotateInput;
    'animationDurationChanged': CustomEvent;
    'animationOnDataChangeChanged': CustomEvent;
    'animationOnDisplayChanged': CustomEvent;
    'animationUpdateColorChanged': CustomEvent;
    'asChanged': CustomEvent;
    'colorLabelChanged': CustomEvent;
    'dataChanged': CustomEvent;
    'displayLevelsChanged': CustomEvent;
    'drillingChanged': CustomEvent;
    'expandedChanged': CustomEvent;
    'hiddenCategoriesChanged': CustomEvent;
    'highlightMatchChanged': CustomEvent;
    'highlightedCategoriesChanged': CustomEvent;
    'hoverBehaviorChanged': CustomEvent;
    'hoverBehaviorDelayChanged': CustomEvent;
    'nodeDefaultsChanged': CustomEvent;
    'rootNodeChanged': CustomEvent;
    'rootNodeContentChanged': CustomEvent;
    'rotationChanged': CustomEvent;
    'selectionChanged': CustomEvent;
    'selectionModeChanged': CustomEvent;
    'sizeLabelChanged': CustomEvent;
    'sortingChanged': CustomEvent;
    'startAngleChanged': CustomEvent;
    'tooltipChanged': CustomEvent;
    'touchResponseChanged': CustomEvent;
  }
  interface ojSunburstSettableProperties<K, D> extends dvtBaseComponentSettableProperties {
    animationDuration: number;
    animationOnDataChange: 'auto'|'none';
    animationOnDisplay: 'auto'|'none';
    animationUpdateColor: string;
    as: string;
    colorLabel: string;
    data: oj.DataProvider<K, D>|null;
    displayLevels: number;
    drilling: 'on'|'off';
    expanded: KeySet.KeySet<K>;
    hiddenCategories: Array<string>;
    highlightMatch: 'any'|'all';
    highlightedCategories: Array<string>;
    hoverBehavior: 'dim'|'none';
    hoverBehaviorDelay: number;
    nodeDefaults: {borderColor: string, borderWidth: number, hoverColor: string, labelDisplay: 'horizontal'|'rotated'|'off'|'auto', labelHalign: 'inner'|'outer'|'center', labelMinLength: number, labelStyle: object, selectedInnerColor: string, selectedOuterColor: string, showDisclosure: 'on'|'off'};
    rootNode: any;
    rootNodeContent: {renderer: ((context: oj.ojSunburst.RootNodeContext<K, D>) => ({insert: Element|string}))};
    rotation: 'off'|'on';
    selection: Array<any>;
    selectionMode: 'none'|'single'|'multiple';
    sizeLabel: string;
    sorting: 'on'|'off';
    startAngle: number;
    tooltip: {renderer: ((context: oj.ojSunburst.TooltipContext<K, D>) => ({insert: Element|string}|{preventDefault: boolean}))};
    touchResponse: 'touchStart'|'auto';
    translations: {componentName?: string, labelAndValue?: string, labelClearSelection?: string, labelColor?: string, labelCountWithTotal?: string, labelDataVisualization?: string, labelInvalidData?: string, labelNoData?: string, labelSize?: string, stateCollapsed?: string, stateDrillable?: string, stateExpanded?: string, stateHidden?: string, stateIsolated?: string, stateMaximized?: string, stateMinimized?: string, stateSelected?: string, stateUnselected?: string, stateVisible?: string, tooltipCollapse?: string, tooltipExpand?: string}; 
  }
  namespace ojSunburst {
    type DataContext =
    {
      color: string, label: string, selected: boolean, size: number, tooltip: string
    }
  }
  namespace ojSunburst {
    type NodeContext =
    {
      subId: string, indexPath: Array<number>
    }
  }
  namespace ojSunburst {
    type RootNodeContext<K, D> =
    {
      outerBounds: {x: number, y: number, width: number, height: number}, innerBounds: {x: number, y: number, width: number, height: number}, id: K, data: object, itemData: D, componentElement: Element
    }
  }
  namespace ojSunburst {
    type TooltipContext<K, D> =
    {
      parentElement: Element, id: K, label: string, value: number, radius: number, color: string, data: object, itemData: D, componentElement: Element
    }
  }

}
declare namespace oj {  
  class ojSunburstNode extends JetElement<ojSunburstNodeSettableProperties> {
    borderColor?: string;
    borderWidth?: number;
    categories?: Array<string>;
    color?: string;
    drilling?: 'on'|'off'|'inherit';
    label?: string;
    labelDisplay?: 'horizontal'|'rotated'|'off'|'auto';
    labelHalign?: 'inner'|'outer'|'center';
    labelStyle?: object;
    pattern?: 'smallChecker'|'smallCrosshatch'|'smallDiagonalLeft'|'smallDiagonalRight'|'smallDiamond'|'smallTriangle'|'largeChecker'|'largeCrosshatch'|'largeDiagonalLeft'|'largeDiagonalRight'|'largeDiamond'|'largeTriangle'|'none';
    radius?: number;
    selectable?: 'off'|'auto';
    shortDesc?: string;
    showDisclosure?: 'on'|'off'|'inherit';
    svgClassName?: string;
    svgStyle?: object;
    value: number;
    onBorderColorChanged: (event: CustomEvent)=> any;
    onBorderWidthChanged: (event: CustomEvent)=> any;
    onCategoriesChanged: (event: CustomEvent)=> any;
    onColorChanged: (event: CustomEvent)=> any;
    onDrillingChanged: (event: CustomEvent)=> any;
    onLabelChanged: (event: CustomEvent)=> any;
    onLabelDisplayChanged: (event: CustomEvent)=> any;
    onLabelHalignChanged: (event: CustomEvent)=> any;
    onLabelStyleChanged: (event: CustomEvent)=> any;
    onPatternChanged: (event: CustomEvent)=> any;
    onRadiusChanged: (event: CustomEvent)=> any;
    onSelectableChanged: (event: CustomEvent)=> any;
    onShortDescChanged: (event: CustomEvent)=> any;
    onShowDisclosureChanged: (event: CustomEvent)=> any;
    onSvgClassNameChanged: (event: CustomEvent)=> any;
    onSvgStyleChanged: (event: CustomEvent)=> any;
    onValueChanged: (event: CustomEvent)=> any;

    addEventListener<T extends keyof ojSunburstNodeEventMap>(type: T, listener: (this: HTMLElement, ev: ojSunburstNodeEventMap[T]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    
  }
  interface ojSunburstNodeEventMap extends oj.JetElementEventMap {
    'borderColorChanged': CustomEvent;
    'borderWidthChanged': CustomEvent;
    'categoriesChanged': CustomEvent;
    'colorChanged': CustomEvent;
    'drillingChanged': CustomEvent;
    'labelChanged': CustomEvent;
    'labelDisplayChanged': CustomEvent;
    'labelHalignChanged': CustomEvent;
    'labelStyleChanged': CustomEvent;
    'patternChanged': CustomEvent;
    'radiusChanged': CustomEvent;
    'selectableChanged': CustomEvent;
    'shortDescChanged': CustomEvent;
    'showDisclosureChanged': CustomEvent;
    'svgClassNameChanged': CustomEvent;
    'svgStyleChanged': CustomEvent;
    'valueChanged': CustomEvent;
  }
  interface ojSunburstNodeSettableProperties extends JetSettableProperties {
    borderColor?: string;
    borderWidth?: number;
    categories?: Array<string>;
    color?: string;
    drilling?: 'on'|'off'|'inherit';
    label?: string;
    labelDisplay?: 'horizontal'|'rotated'|'off'|'auto';
    labelHalign?: 'inner'|'outer'|'center';
    labelStyle?: object;
    pattern?: 'smallChecker'|'smallCrosshatch'|'smallDiagonalLeft'|'smallDiagonalRight'|'smallDiamond'|'smallTriangle'|'largeChecker'|'largeCrosshatch'|'largeDiagonalLeft'|'largeDiagonalRight'|'largeDiamond'|'largeTriangle'|'none';
    radius?: number;
    selectable?: 'off'|'auto';
    shortDesc?: string;
    showDisclosure?: 'on'|'off'|'inherit';
    svgClassName?: string;
    svgStyle?: object;
    value: number; 
  }

}
