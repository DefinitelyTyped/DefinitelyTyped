/// <reference types='ojs/ojdvt-base'/>
/// <reference types='ojs/ojdataprovider'/>
declare namespace oj {  
  class ojThematicMap<K1, K2, K3, D1, D2, D3> extends dvtBaseComponent<ojThematicMapSettableProperties<K1, K2, K3, D1, D2, D3>> {
    animationDuration: number;
    animationOnDisplay: 'auto'|'none';
    areaData: oj.DataProvider<K1, D1>|null;
    as: string;
    focusRenderer: ((context: oj.ojThematicMap.RendererContext<K1, K2, K3, D1, D2, D3>) => ({insert: SVGElement}|void));
    hiddenCategories: Array<string>;
    highlightMatch: 'any'|'all';
    highlightedCategories: Array<string>;
    hoverBehavior: 'dim'|'none';
    hoverRenderer: ((context: oj.ojThematicMap.RendererContext<K1, K2, K3, D1, D2, D3>) => ({insert: SVGElement}|void));
    initialZooming: 'auto'|'none';
    isolatedItem: K1;
    labelDisplay: 'on'|'off'|'auto';
    labelType: 'long'|'short';
    linkData: oj.DataProvider<K2, D2>|null;
    mapProvider: {geo: object, propertiesKeys: {id: string, longLabel?: string, shortLabel?: string}};
    markerData: oj.DataProvider<K3, D3>|null;
    markerZoomBehavior: 'zoom'|'fixed';
    maxZoom: number;
    panning: 'auto'|'none';
    renderer: ((context: oj.ojThematicMap.RendererContext<K1, K2, K3, D1, D2, D3>) => ({insert: SVGElement}|void));
    selection: Array<K1|K2|K3>;
    selectionMode: 'single'|'multiple'|'none';
    selectionRenderer: ((context: oj.ojThematicMap.RendererContext<K1, K2, K3, D1, D2, D3>) => ({insert: SVGElement}|void));
    styleDefaults: {areaSvgStyle?: object, dataAreaDefaults?: {borderColor?: string, hoverColor?: string, selectedInnerColor?: string, selectedOuterColor?: string}, dataMarkerDefaults?: {borderColor?: string, borderStyle?: 'none'|'solid', borderWidth?: number, color?: string, height?: number, labelStyle?: object, opacity?: number, shape?: 'circle'|'diamond'|'ellipse'|'human'|'plus'|'rectangle'|'square'|'star'|'triangleDown'|'triangleUp'|string, width?: number}, hoverBehaviorDelay?: number, labelStyle?: object, linkDefaults?: {color?: string, width?: number}};
    tooltip: {renderer: ((context: oj.ojThematicMap.TooltipContext<K1, K2, K3, D1, D2, D3>) => ({insert: Element|string}|{preventDefault: boolean}))};
    tooltipDisplay: 'auto'|'labelAndShortDesc'|'none'|'shortDesc';
    touchResponse: 'touchStart'|'auto';
    zooming: 'auto'|'none';
    translations: {componentName?: string, labelAndValue?: string, labelClearSelection?: string, labelCountWithTotal?: string, labelDataVisualization?: string, labelInvalidData?: string, labelNoData?: string, stateCollapsed?: string, stateDrillable?: string, stateExpanded?: string, stateHidden?: string, stateIsolated?: string, stateMaximized?: string, stateMinimized?: string, stateSelected?: string, stateUnselected?: string, stateVisible?: string};
    onAnimationDurationChanged: (event: CustomEvent)=> any;
    onAnimationOnDisplayChanged: (event: CustomEvent)=> any;
    onAreaDataChanged: (event: CustomEvent)=> any;
    onAsChanged: (event: CustomEvent)=> any;
    onFocusRendererChanged: (event: CustomEvent)=> any;
    onHiddenCategoriesChanged: (event: CustomEvent)=> any;
    onHighlightMatchChanged: (event: CustomEvent)=> any;
    onHighlightedCategoriesChanged: (event: CustomEvent)=> any;
    onHoverBehaviorChanged: (event: CustomEvent)=> any;
    onHoverRendererChanged: (event: CustomEvent)=> any;
    onInitialZoomingChanged: (event: CustomEvent)=> any;
    onIsolatedItemChanged: (event: CustomEvent)=> any;
    onLabelDisplayChanged: (event: CustomEvent)=> any;
    onLabelTypeChanged: (event: CustomEvent)=> any;
    onLinkDataChanged: (event: CustomEvent)=> any;
    onMapProviderChanged: (event: CustomEvent)=> any;
    onMarkerDataChanged: (event: CustomEvent)=> any;
    onMarkerZoomBehaviorChanged: (event: CustomEvent)=> any;
    onMaxZoomChanged: (event: CustomEvent)=> any;
    onPanningChanged: (event: CustomEvent)=> any;
    onRendererChanged: (event: CustomEvent)=> any;
    onSelectionChanged: (event: CustomEvent)=> any;
    onSelectionModeChanged: (event: CustomEvent)=> any;
    onSelectionRendererChanged: (event: CustomEvent)=> any;
    onStyleDefaultsChanged: (event: CustomEvent)=> any;
    onTooltipChanged: (event: CustomEvent)=> any;
    onTooltipDisplayChanged: (event: CustomEvent)=> any;
    onTouchResponseChanged: (event: CustomEvent)=> any;
    onZoomingChanged: (event: CustomEvent)=> any;

    addEventListener<T extends keyof ojThematicMapEventMap>(type: T, listener: (this: HTMLElement, ev: ojThematicMapEventMap[T]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    
    getArea(index: number): oj.ojThematicMap.DataContext|null;
    getContextByNode(node: Element): oj.ojThematicMap.NodeContext|null;
    getLink(index: number): oj.ojThematicMap.DataContext|null;
    getMarker(index: number): oj.ojThematicMap.DataContext|null;
  }
  interface ojThematicMapEventMap extends oj.dvtBaseComponentEventMap {
    'animationDurationChanged': CustomEvent;
    'animationOnDisplayChanged': CustomEvent;
    'areaDataChanged': CustomEvent;
    'asChanged': CustomEvent;
    'focusRendererChanged': CustomEvent;
    'hiddenCategoriesChanged': CustomEvent;
    'highlightMatchChanged': CustomEvent;
    'highlightedCategoriesChanged': CustomEvent;
    'hoverBehaviorChanged': CustomEvent;
    'hoverRendererChanged': CustomEvent;
    'initialZoomingChanged': CustomEvent;
    'isolatedItemChanged': CustomEvent;
    'labelDisplayChanged': CustomEvent;
    'labelTypeChanged': CustomEvent;
    'linkDataChanged': CustomEvent;
    'mapProviderChanged': CustomEvent;
    'markerDataChanged': CustomEvent;
    'markerZoomBehaviorChanged': CustomEvent;
    'maxZoomChanged': CustomEvent;
    'panningChanged': CustomEvent;
    'rendererChanged': CustomEvent;
    'selectionChanged': CustomEvent;
    'selectionModeChanged': CustomEvent;
    'selectionRendererChanged': CustomEvent;
    'styleDefaultsChanged': CustomEvent;
    'tooltipChanged': CustomEvent;
    'tooltipDisplayChanged': CustomEvent;
    'touchResponseChanged': CustomEvent;
    'zoomingChanged': CustomEvent;
  }
  interface ojThematicMapSettableProperties<K1, K2, K3, D1, D2, D3> extends dvtBaseComponentSettableProperties {
    animationDuration: number;
    animationOnDisplay: 'auto'|'none';
    areaData: oj.DataProvider<K1, D1>|null;
    as: string;
    focusRenderer: ((context: oj.ojThematicMap.RendererContext<K1, K2, K3, D1, D2, D3>) => ({insert: SVGElement}|void));
    hiddenCategories: Array<string>;
    highlightMatch: 'any'|'all';
    highlightedCategories: Array<string>;
    hoverBehavior: 'dim'|'none';
    hoverRenderer: ((context: oj.ojThematicMap.RendererContext<K1, K2, K3, D1, D2, D3>) => ({insert: SVGElement}|void));
    initialZooming: 'auto'|'none';
    isolatedItem: K1;
    labelDisplay: 'on'|'off'|'auto';
    labelType: 'long'|'short';
    linkData: oj.DataProvider<K2, D2>|null;
    mapProvider: {geo: object, propertiesKeys: {id: string, longLabel?: string, shortLabel?: string}};
    markerData: oj.DataProvider<K3, D3>|null;
    markerZoomBehavior: 'zoom'|'fixed';
    maxZoom: number;
    panning: 'auto'|'none';
    renderer: ((context: oj.ojThematicMap.RendererContext<K1, K2, K3, D1, D2, D3>) => ({insert: SVGElement}|void));
    selection: Array<K1|K2|K3>;
    selectionMode: 'single'|'multiple'|'none';
    selectionRenderer: ((context: oj.ojThematicMap.RendererContext<K1, K2, K3, D1, D2, D3>) => ({insert: SVGElement}|void));
    styleDefaults: {areaSvgStyle?: object, dataAreaDefaults?: {borderColor?: string, hoverColor?: string, selectedInnerColor?: string, selectedOuterColor?: string}, dataMarkerDefaults?: {borderColor?: string, borderStyle?: 'none'|'solid', borderWidth?: number, color?: string, height?: number, labelStyle?: object, opacity?: number, shape?: 'circle'|'diamond'|'ellipse'|'human'|'plus'|'rectangle'|'square'|'star'|'triangleDown'|'triangleUp'|string, width?: number}, hoverBehaviorDelay?: number, labelStyle?: object, linkDefaults?: {color?: string, width?: number}};
    tooltip: {renderer: ((context: oj.ojThematicMap.TooltipContext<K1, K2, K3, D1, D2, D3>) => ({insert: Element|string}|{preventDefault: boolean}))};
    tooltipDisplay: 'auto'|'labelAndShortDesc'|'none'|'shortDesc';
    touchResponse: 'touchStart'|'auto';
    zooming: 'auto'|'none';
    translations: {componentName?: string, labelAndValue?: string, labelClearSelection?: string, labelCountWithTotal?: string, labelDataVisualization?: string, labelInvalidData?: string, labelNoData?: string, stateCollapsed?: string, stateDrillable?: string, stateExpanded?: string, stateHidden?: string, stateIsolated?: string, stateMaximized?: string, stateMinimized?: string, stateSelected?: string, stateUnselected?: string, stateVisible?: string}; 
  }
  namespace ojThematicMap {
    type DataContext =
    {
      color: string, label: string, selected: boolean, tooltip: string
    }
  }
  namespace ojThematicMap {
    type NodeContext =
    {
      subId: string, index: number
    }
  }
  namespace ojThematicMap {
    type RendererContext<K1,K2,K3,D1,D2,D3> =
    {
      color: string, componentElement: Element, data: object, id: K1|K2|K3, itemData: D1|D2|D3, label: string, location: string|null, parentElement: Element, previousState: {hovered: boolean, selected: boolean, focused: boolean}, renderDefaultFocus: (()=> void), renderDefaultHover: (()=> void), renderDefaultSelection: (()=> void), root: Element|null, state: {hovered: boolean, selected: boolean, focused: boolean}, x: number|null, y: number|null
    }
  }
  namespace ojThematicMap {
    type TooltipContext<K1,K2,K3,D1,D2,D3> =
    {
      color: string|null, componentElement: Element, data: object|null, id: K1|K2|K3, itemData: D1|D2|D3, label: string|null, location: string|null, locationName: string|null, parentElement: Element, tooltip: string, x: number, y: number
    }
  }

}
declare namespace oj {  
  class ojThematicMapArea extends JetElement<ojThematicMapAreaSettableProperties> {
    categories: Array<string>;
    color: string;
    label: string;
    labelStyle: object;
    location: string;
    opacity: number;
    selectable: 'auto'|'off';
    shortDesc: string;
    svgClassName: string;
    svgStyle: object;
    onCategoriesChanged: (event: CustomEvent)=> any;
    onColorChanged: (event: CustomEvent)=> any;
    onLabelChanged: (event: CustomEvent)=> any;
    onLabelStyleChanged: (event: CustomEvent)=> any;
    onLocationChanged: (event: CustomEvent)=> any;
    onOpacityChanged: (event: CustomEvent)=> any;
    onSelectableChanged: (event: CustomEvent)=> any;
    onShortDescChanged: (event: CustomEvent)=> any;
    onSvgClassNameChanged: (event: CustomEvent)=> any;
    onSvgStyleChanged: (event: CustomEvent)=> any;

    addEventListener<T extends keyof ojThematicMapAreaEventMap>(type: T, listener: (this: HTMLElement, ev: ojThematicMapAreaEventMap[T]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    
  }
  interface ojThematicMapAreaEventMap extends oj.JetElementEventMap {
    'categoriesChanged': CustomEvent;
    'colorChanged': CustomEvent;
    'labelChanged': CustomEvent;
    'labelStyleChanged': CustomEvent;
    'locationChanged': CustomEvent;
    'opacityChanged': CustomEvent;
    'selectableChanged': CustomEvent;
    'shortDescChanged': CustomEvent;
    'svgClassNameChanged': CustomEvent;
    'svgStyleChanged': CustomEvent;
  }
  interface ojThematicMapAreaSettableProperties extends JetSettableProperties {
    categories: Array<string>;
    color: string;
    label: string;
    labelStyle: object;
    location: string;
    opacity: number;
    selectable: 'auto'|'off';
    shortDesc: string;
    svgClassName: string;
    svgStyle: object; 
  }

}
declare namespace oj {  
  class ojThematicMapLink extends JetElement<ojThematicMapLinkSettableProperties> {
    categories: Array<string>;
    color: string;
    endLocation: {id?: any, location?: string, x?: number, y?: number};
    selectable: 'auto'|'off';
    shortDesc: string;
    startLocation: {id?: any, location?: string, x?: number, y?: number};
    svgClassName: string;
    svgStyle: object;
    width: number;
    onCategoriesChanged: (event: CustomEvent)=> any;
    onColorChanged: (event: CustomEvent)=> any;
    onEndLocationChanged: (event: CustomEvent)=> any;
    onSelectableChanged: (event: CustomEvent)=> any;
    onShortDescChanged: (event: CustomEvent)=> any;
    onStartLocationChanged: (event: CustomEvent)=> any;
    onSvgClassNameChanged: (event: CustomEvent)=> any;
    onSvgStyleChanged: (event: CustomEvent)=> any;
    onWidthChanged: (event: CustomEvent)=> any;

    addEventListener<T extends keyof ojThematicMapLinkEventMap>(type: T, listener: (this: HTMLElement, ev: ojThematicMapLinkEventMap[T]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    
  }
  interface ojThematicMapLinkEventMap extends oj.JetElementEventMap {
    'categoriesChanged': CustomEvent;
    'colorChanged': CustomEvent;
    'endLocationChanged': CustomEvent;
    'selectableChanged': CustomEvent;
    'shortDescChanged': CustomEvent;
    'startLocationChanged': CustomEvent;
    'svgClassNameChanged': CustomEvent;
    'svgStyleChanged': CustomEvent;
    'widthChanged': CustomEvent;
  }
  interface ojThematicMapLinkSettableProperties extends JetSettableProperties {
    categories: Array<string>;
    color: string;
    endLocation: {id?: any, location?: string, x?: number, y?: number};
    selectable: 'auto'|'off';
    shortDesc: string;
    startLocation: {id?: any, location?: string, x?: number, y?: number};
    svgClassName: string;
    svgStyle: object;
    width: number; 
  }

}
declare namespace oj {  
  class ojThematicMapMarker extends JetElement<ojThematicMapMarkerSettableProperties> {
    borderColor: string;
    borderStyle: 'solid'|'none';
    borderWidth: number;
    categories: Array<string>;
    color: string;
    height: number;
    label: string;
    labelPosition: 'bottom'|'center'|'top';
    labelStyle: object;
    location: string;
    opacity: number;
    rotation: number;
    selectable: 'auto'|'off';
    shape?: 'circle'|'diamond'|'ellipse'|'human'|'plus'|'rectangle'|'square'|'star'|'triangleDown'|'triangleUp'|string;
    shortDesc: string;
    source: string;
    sourceHover: string;
    sourceHoverSelected: string;
    sourceSelected: string;
    svgClassName: string;
    svgStyle: object;
    value: number;
    width: number;
    x: number|null;
    y: number|null;
    onBorderColorChanged: (event: CustomEvent)=> any;
    onBorderStyleChanged: (event: CustomEvent)=> any;
    onBorderWidthChanged: (event: CustomEvent)=> any;
    onCategoriesChanged: (event: CustomEvent)=> any;
    onColorChanged: (event: CustomEvent)=> any;
    onHeightChanged: (event: CustomEvent)=> any;
    onLabelChanged: (event: CustomEvent)=> any;
    onLabelPositionChanged: (event: CustomEvent)=> any;
    onLabelStyleChanged: (event: CustomEvent)=> any;
    onLocationChanged: (event: CustomEvent)=> any;
    onOpacityChanged: (event: CustomEvent)=> any;
    onRotationChanged: (event: CustomEvent)=> any;
    onSelectableChanged: (event: CustomEvent)=> any;
    onShapeChanged: (event: CustomEvent)=> any;
    onShortDescChanged: (event: CustomEvent)=> any;
    onSourceChanged: (event: CustomEvent)=> any;
    onSourceHoverChanged: (event: CustomEvent)=> any;
    onSourceHoverSelectedChanged: (event: CustomEvent)=> any;
    onSourceSelectedChanged: (event: CustomEvent)=> any;
    onSvgClassNameChanged: (event: CustomEvent)=> any;
    onSvgStyleChanged: (event: CustomEvent)=> any;
    onValueChanged: (event: CustomEvent)=> any;
    onWidthChanged: (event: CustomEvent)=> any;
    onXChanged: (event: CustomEvent)=> any;
    onYChanged: (event: CustomEvent)=> any;

    addEventListener<T extends keyof ojThematicMapMarkerEventMap>(type: T, listener: (this: HTMLElement, ev: ojThematicMapMarkerEventMap[T]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    
  }
  interface ojThematicMapMarkerEventMap extends oj.JetElementEventMap {
    'borderColorChanged': CustomEvent;
    'borderStyleChanged': CustomEvent;
    'borderWidthChanged': CustomEvent;
    'categoriesChanged': CustomEvent;
    'colorChanged': CustomEvent;
    'heightChanged': CustomEvent;
    'labelChanged': CustomEvent;
    'labelPositionChanged': CustomEvent;
    'labelStyleChanged': CustomEvent;
    'locationChanged': CustomEvent;
    'opacityChanged': CustomEvent;
    'rotationChanged': CustomEvent;
    'selectableChanged': CustomEvent;
    'shapeChanged': CustomEvent;
    'shortDescChanged': CustomEvent;
    'sourceChanged': CustomEvent;
    'sourceHoverChanged': CustomEvent;
    'sourceHoverSelectedChanged': CustomEvent;
    'sourceSelectedChanged': CustomEvent;
    'svgClassNameChanged': CustomEvent;
    'svgStyleChanged': CustomEvent;
    'valueChanged': CustomEvent;
    'widthChanged': CustomEvent;
    'xChanged': CustomEvent;
    'yChanged': CustomEvent;
  }
  interface ojThematicMapMarkerSettableProperties extends JetSettableProperties {
    borderColor: string;
    borderStyle: 'solid'|'none';
    borderWidth: number;
    categories: Array<string>;
    color: string;
    height: number;
    label: string;
    labelPosition: 'bottom'|'center'|'top';
    labelStyle: object;
    location: string;
    opacity: number;
    rotation: number;
    selectable: 'auto'|'off';
    shape?: 'circle'|'diamond'|'ellipse'|'human'|'plus'|'rectangle'|'square'|'star'|'triangleDown'|'triangleUp'|string;
    shortDesc: string;
    source: string;
    sourceHover: string;
    sourceHoverSelected: string;
    sourceSelected: string;
    svgClassName: string;
    svgStyle: object;
    value: number;
    width: number;
    x: number|null;
    y: number|null; 
  }

}
