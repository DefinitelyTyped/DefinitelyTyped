import { DataProvider } from '../ojdataprovider';
import { dvtBaseComponent, dvtBaseComponentEventMap, dvtBaseComponentSettableProperties } from '../ojdvt-base';
import { JetElement, JetSettableProperties, JetElementCustomEvent, JetSetPropertyType } from '..';
export interface ojThematicMap<K1, K2, K3, D1, D2, D3> extends dvtBaseComponent<ojThematicMapSettableProperties<K1, K2, K3, D1, D2, D3>> {
    animationDuration: number;
    animationOnDisplay: 'auto' | 'none';
    areaData: DataProvider<K1, D1> | null;
    as: string;
    focusRenderer: ((context: ojThematicMap.RendererContext<K1, K2, K3, D1, D2, D3>) => {
        insert: SVGElement;
    } | void) | null;
    hiddenCategories: string[];
    highlightMatch: 'any' | 'all';
    highlightedCategories: string[];
    hoverBehavior: 'dim' | 'none';
    hoverRenderer: ((context: ojThematicMap.RendererContext<K1, K2, K3, D1, D2, D3>) => {
        insert: SVGElement;
    } | void) | null;
    initialZooming: 'auto' | 'none';
    isolatedItem: K1;
    labelDisplay: 'on' | 'off' | 'auto';
    labelType: 'long' | 'short';
    linkData: DataProvider<K2, D2> | null;
    mapProvider: {
        geo: object;
        propertiesKeys: {
            id: string;
            longLabel?: string;
            shortLabel?: string;
        };
    };
    markerData: DataProvider<K3, D3> | null;
    markerZoomBehavior: 'zoom' | 'fixed';
    maxZoom: number;
    panning: 'auto' | 'none';
    renderer: ((context: ojThematicMap.RendererContext<K1, K2, K3, D1, D2, D3>) => {
        insert: SVGElement;
    } | void) | null;
    selection: Array<K1 | K2 | K3>;
    selectionMode: 'single' | 'multiple' | 'none';
    selectionRenderer: ((context: ojThematicMap.RendererContext<K1, K2, K3, D1, D2, D3>) => {
        insert: SVGElement;
    } | void) | null;
    styleDefaults: {
        areaSvgStyle?: object;
        dataAreaDefaults?: {
            borderColor?: string;
            hoverColor?: string;
            selectedInnerColor?: string;
            selectedOuterColor?: string;
        };
        dataMarkerDefaults?: {
            borderColor?: string;
            borderStyle?: 'none' | 'solid';
            borderWidth?: number;
            color?: string;
            height?: number;
            labelStyle?: object;
            opacity?: number;
            shape?: 'circle' | 'diamond' | 'ellipse' | 'human' | 'plus' | 'rectangle' | 'square' | 'star' | 'triangleDown' | 'triangleUp' | string;
            width?: number;
        };
        hoverBehaviorDelay?: number;
        labelStyle?: object;
        linkDefaults?: {
            color?: string;
            width?: number;
        };
    };
    tooltip: {
        renderer: ((context: ojThematicMap.TooltipContext<K1, K2, K3, D1, D2, D3>) => ({
            insert: Element | string;
        } | {
            preventDefault: boolean;
        }));
    };
    tooltipDisplay: 'auto' | 'labelAndShortDesc' | 'none' | 'shortDesc';
    touchResponse: 'touchStart' | 'auto';
    zooming: 'auto' | 'none';
    translations: {
        componentName?: string;
        labelAndValue?: string;
        labelClearSelection?: string;
        labelCountWithTotal?: string;
        labelDataVisualization?: string;
        labelInvalidData?: string;
        labelNoData?: string;
        stateCollapsed?: string;
        stateDrillable?: string;
        stateExpanded?: string;
        stateHidden?: string;
        stateIsolated?: string;
        stateMaximized?: string;
        stateMinimized?: string;
        stateSelected?: string;
        stateUnselected?: string;
        stateVisible?: string;
    };
    onAnimationDurationChanged: ((event: JetElementCustomEvent<ojThematicMap<K1, K2, K3, D1, D2, D3>["animationDuration"]>) => any) | null;
    onAnimationOnDisplayChanged: ((event: JetElementCustomEvent<ojThematicMap<K1, K2, K3, D1, D2, D3>["animationOnDisplay"]>) => any) | null;
    onAreaDataChanged: ((event: JetElementCustomEvent<ojThematicMap<K1, K2, K3, D1, D2, D3>["areaData"]>) => any) | null;
    onAsChanged: ((event: JetElementCustomEvent<ojThematicMap<K1, K2, K3, D1, D2, D3>["as"]>) => any) | null;
    onFocusRendererChanged: ((event: JetElementCustomEvent<ojThematicMap<K1, K2, K3, D1, D2, D3>["focusRenderer"]>) => any) | null;
    onHiddenCategoriesChanged: ((event: JetElementCustomEvent<ojThematicMap<K1, K2, K3, D1, D2, D3>["hiddenCategories"]>) => any) | null;
    onHighlightMatchChanged: ((event: JetElementCustomEvent<ojThematicMap<K1, K2, K3, D1, D2, D3>["highlightMatch"]>) => any) | null;
    onHighlightedCategoriesChanged: ((event: JetElementCustomEvent<ojThematicMap<K1, K2, K3, D1, D2, D3>["highlightedCategories"]>) => any) | null;
    onHoverBehaviorChanged: ((event: JetElementCustomEvent<ojThematicMap<K1, K2, K3, D1, D2, D3>["hoverBehavior"]>) => any) | null;
    onHoverRendererChanged: ((event: JetElementCustomEvent<ojThematicMap<K1, K2, K3, D1, D2, D3>["hoverRenderer"]>) => any) | null;
    onInitialZoomingChanged: ((event: JetElementCustomEvent<ojThematicMap<K1, K2, K3, D1, D2, D3>["initialZooming"]>) => any) | null;
    onIsolatedItemChanged: ((event: JetElementCustomEvent<ojThematicMap<K1, K2, K3, D1, D2, D3>["isolatedItem"]>) => any) | null;
    onLabelDisplayChanged: ((event: JetElementCustomEvent<ojThematicMap<K1, K2, K3, D1, D2, D3>["labelDisplay"]>) => any) | null;
    onLabelTypeChanged: ((event: JetElementCustomEvent<ojThematicMap<K1, K2, K3, D1, D2, D3>["labelType"]>) => any) | null;
    onLinkDataChanged: ((event: JetElementCustomEvent<ojThematicMap<K1, K2, K3, D1, D2, D3>["linkData"]>) => any) | null;
    onMapProviderChanged: ((event: JetElementCustomEvent<ojThematicMap<K1, K2, K3, D1, D2, D3>["mapProvider"]>) => any) | null;
    onMarkerDataChanged: ((event: JetElementCustomEvent<ojThematicMap<K1, K2, K3, D1, D2, D3>["markerData"]>) => any) | null;
    onMarkerZoomBehaviorChanged: ((event: JetElementCustomEvent<ojThematicMap<K1, K2, K3, D1, D2, D3>["markerZoomBehavior"]>) => any) | null;
    onMaxZoomChanged: ((event: JetElementCustomEvent<ojThematicMap<K1, K2, K3, D1, D2, D3>["maxZoom"]>) => any) | null;
    onPanningChanged: ((event: JetElementCustomEvent<ojThematicMap<K1, K2, K3, D1, D2, D3>["panning"]>) => any) | null;
    onRendererChanged: ((event: JetElementCustomEvent<ojThematicMap<K1, K2, K3, D1, D2, D3>["renderer"]>) => any) | null;
    onSelectionChanged: ((event: JetElementCustomEvent<ojThematicMap<K1, K2, K3, D1, D2, D3>["selection"]>) => any) | null;
    onSelectionModeChanged: ((event: JetElementCustomEvent<ojThematicMap<K1, K2, K3, D1, D2, D3>["selectionMode"]>) => any) | null;
    onSelectionRendererChanged: ((event: JetElementCustomEvent<ojThematicMap<K1, K2, K3, D1, D2, D3>["selectionRenderer"]>) => any) | null;
    onStyleDefaultsChanged: ((event: JetElementCustomEvent<ojThematicMap<K1, K2, K3, D1, D2, D3>["styleDefaults"]>) => any) | null;
    onTooltipChanged: ((event: JetElementCustomEvent<ojThematicMap<K1, K2, K3, D1, D2, D3>["tooltip"]>) => any) | null;
    onTooltipDisplayChanged: ((event: JetElementCustomEvent<ojThematicMap<K1, K2, K3, D1, D2, D3>["tooltipDisplay"]>) => any) | null;
    onTouchResponseChanged: ((event: JetElementCustomEvent<ojThematicMap<K1, K2, K3, D1, D2, D3>["touchResponse"]>) => any) | null;
    onZoomingChanged: ((event: JetElementCustomEvent<ojThematicMap<K1, K2, K3, D1, D2, D3>["zooming"]>) => any) | null;
    addEventListener<T extends keyof ojThematicMapEventMap<K1, K2, K3, D1, D2, D3>>(type: T, listener: (this: HTMLElement, ev: ojThematicMapEventMap<K1, K2, K3, D1, D2, D3>[T]) => any,
       useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    getProperty<T extends keyof ojThematicMapSettableProperties<K1, K2, K3, D1, D2, D3>>(property: T): ojThematicMap<K1, K2, K3, D1, D2, D3>[T];
    getProperty(property: string): any;
    setProperty<T extends keyof ojThematicMapSettableProperties<K1, K2, K3, D1, D2, D3>>(property: T, value: ojThematicMapSettableProperties<K1, K2, K3, D1, D2, D3>[T]): void;
    setProperty<T extends string>(property: T, value: JetSetPropertyType<T, ojThematicMapSettableProperties<K1, K2, K3, D1, D2, D3>>): void;
    setProperties(properties: ojThematicMapSettablePropertiesLenient<K1, K2, K3, D1, D2, D3>): void;
    getArea(index: number): ojThematicMap.DataContext | null;
    getContextByNode(node: Element): ojThematicMap.NodeContext | null;
    getLink(index: number): ojThematicMap.DataContext | null;
    getMarker(index: number): ojThematicMap.DataContext | null;
}
export interface ojThematicMapEventMap<K1, K2, K3, D1, D2, D3> extends dvtBaseComponentEventMap<ojThematicMapSettableProperties<K1, K2, K3, D1, D2, D3>> {
    'animationDurationChanged': JetElementCustomEvent<ojThematicMap<K1, K2, K3, D1, D2, D3>["animationDuration"]>;
    'animationOnDisplayChanged': JetElementCustomEvent<ojThematicMap<K1, K2, K3, D1, D2, D3>["animationOnDisplay"]>;
    'areaDataChanged': JetElementCustomEvent<ojThematicMap<K1, K2, K3, D1, D2, D3>["areaData"]>;
    'asChanged': JetElementCustomEvent<ojThematicMap<K1, K2, K3, D1, D2, D3>["as"]>;
    'focusRendererChanged': JetElementCustomEvent<ojThematicMap<K1, K2, K3, D1, D2, D3>["focusRenderer"]>;
    'hiddenCategoriesChanged': JetElementCustomEvent<ojThematicMap<K1, K2, K3, D1, D2, D3>["hiddenCategories"]>;
    'highlightMatchChanged': JetElementCustomEvent<ojThematicMap<K1, K2, K3, D1, D2, D3>["highlightMatch"]>;
    'highlightedCategoriesChanged': JetElementCustomEvent<ojThematicMap<K1, K2, K3, D1, D2, D3>["highlightedCategories"]>;
    'hoverBehaviorChanged': JetElementCustomEvent<ojThematicMap<K1, K2, K3, D1, D2, D3>["hoverBehavior"]>;
    'hoverRendererChanged': JetElementCustomEvent<ojThematicMap<K1, K2, K3, D1, D2, D3>["hoverRenderer"]>;
    'initialZoomingChanged': JetElementCustomEvent<ojThematicMap<K1, K2, K3, D1, D2, D3>["initialZooming"]>;
    'isolatedItemChanged': JetElementCustomEvent<ojThematicMap<K1, K2, K3, D1, D2, D3>["isolatedItem"]>;
    'labelDisplayChanged': JetElementCustomEvent<ojThematicMap<K1, K2, K3, D1, D2, D3>["labelDisplay"]>;
    'labelTypeChanged': JetElementCustomEvent<ojThematicMap<K1, K2, K3, D1, D2, D3>["labelType"]>;
    'linkDataChanged': JetElementCustomEvent<ojThematicMap<K1, K2, K3, D1, D2, D3>["linkData"]>;
    'mapProviderChanged': JetElementCustomEvent<ojThematicMap<K1, K2, K3, D1, D2, D3>["mapProvider"]>;
    'markerDataChanged': JetElementCustomEvent<ojThematicMap<K1, K2, K3, D1, D2, D3>["markerData"]>;
    'markerZoomBehaviorChanged': JetElementCustomEvent<ojThematicMap<K1, K2, K3, D1, D2, D3>["markerZoomBehavior"]>;
    'maxZoomChanged': JetElementCustomEvent<ojThematicMap<K1, K2, K3, D1, D2, D3>["maxZoom"]>;
    'panningChanged': JetElementCustomEvent<ojThematicMap<K1, K2, K3, D1, D2, D3>["panning"]>;
    'rendererChanged': JetElementCustomEvent<ojThematicMap<K1, K2, K3, D1, D2, D3>["renderer"]>;
    'selectionChanged': JetElementCustomEvent<ojThematicMap<K1, K2, K3, D1, D2, D3>["selection"]>;
    'selectionModeChanged': JetElementCustomEvent<ojThematicMap<K1, K2, K3, D1, D2, D3>["selectionMode"]>;
    'selectionRendererChanged': JetElementCustomEvent<ojThematicMap<K1, K2, K3, D1, D2, D3>["selectionRenderer"]>;
    'styleDefaultsChanged': JetElementCustomEvent<ojThematicMap<K1, K2, K3, D1, D2, D3>["styleDefaults"]>;
    'tooltipChanged': JetElementCustomEvent<ojThematicMap<K1, K2, K3, D1, D2, D3>["tooltip"]>;
    'tooltipDisplayChanged': JetElementCustomEvent<ojThematicMap<K1, K2, K3, D1, D2, D3>["tooltipDisplay"]>;
    'touchResponseChanged': JetElementCustomEvent<ojThematicMap<K1, K2, K3, D1, D2, D3>["touchResponse"]>;
    'zoomingChanged': JetElementCustomEvent<ojThematicMap<K1, K2, K3, D1, D2, D3>["zooming"]>;
}
export interface ojThematicMapSettableProperties<K1, K2, K3, D1, D2, D3> extends dvtBaseComponentSettableProperties {
    animationDuration: number;
    animationOnDisplay: 'auto' | 'none';
    areaData: DataProvider<K1, D1> | null;
    as: string;
    focusRenderer: ((context: ojThematicMap.RendererContext<K1, K2, K3, D1, D2, D3>) => {
        insert: SVGElement;
    } | void) | null;
    hiddenCategories: string[];
    highlightMatch: 'any' | 'all';
    highlightedCategories: string[];
    hoverBehavior: 'dim' | 'none';
    hoverRenderer: ((context: ojThematicMap.RendererContext<K1, K2, K3, D1, D2, D3>) => {
        insert: SVGElement;
    } | void) | null;
    initialZooming: 'auto' | 'none';
    isolatedItem: K1;
    labelDisplay: 'on' | 'off' | 'auto';
    labelType: 'long' | 'short';
    linkData: DataProvider<K2, D2> | null;
    mapProvider: {
        geo: object;
        propertiesKeys: {
            id: string;
            longLabel?: string;
            shortLabel?: string;
        };
    };
    markerData: DataProvider<K3, D3> | null;
    markerZoomBehavior: 'zoom' | 'fixed';
    maxZoom: number;
    panning: 'auto' | 'none';
    renderer: ((context: ojThematicMap.RendererContext<K1, K2, K3, D1, D2, D3>) => {
        insert: SVGElement;
    } | void) | null;
    selection: Array<K1 | K2 | K3>;
    selectionMode: 'single' | 'multiple' | 'none';
    selectionRenderer: ((context: ojThematicMap.RendererContext<K1, K2, K3, D1, D2, D3>) => {
        insert: SVGElement;
    } | void) | null;
    styleDefaults: {
        areaSvgStyle?: object;
        dataAreaDefaults?: {
            borderColor?: string;
            hoverColor?: string;
            selectedInnerColor?: string;
            selectedOuterColor?: string;
        };
        dataMarkerDefaults?: {
            borderColor?: string;
            borderStyle?: 'none' | 'solid';
            borderWidth?: number;
            color?: string;
            height?: number;
            labelStyle?: object;
            opacity?: number;
            shape?: 'circle' | 'diamond' | 'ellipse' | 'human' | 'plus' | 'rectangle' | 'square' | 'star' | 'triangleDown' | 'triangleUp' | string;
            width?: number;
        };
        hoverBehaviorDelay?: number;
        labelStyle?: object;
        linkDefaults?: {
            color?: string;
            width?: number;
        };
    };
    tooltip: {
        renderer: ((context: ojThematicMap.TooltipContext<K1, K2, K3, D1, D2, D3>) => ({
            insert: Element | string;
        } | {
            preventDefault: boolean;
        }));
    };
    tooltipDisplay: 'auto' | 'labelAndShortDesc' | 'none' | 'shortDesc';
    touchResponse: 'touchStart' | 'auto';
    zooming: 'auto' | 'none';
    translations: {
        componentName?: string;
        labelAndValue?: string;
        labelClearSelection?: string;
        labelCountWithTotal?: string;
        labelDataVisualization?: string;
        labelInvalidData?: string;
        labelNoData?: string;
        stateCollapsed?: string;
        stateDrillable?: string;
        stateExpanded?: string;
        stateHidden?: string;
        stateIsolated?: string;
        stateMaximized?: string;
        stateMinimized?: string;
        stateSelected?: string;
        stateUnselected?: string;
        stateVisible?: string;
    };
}
export interface ojThematicMapSettablePropertiesLenient<K1, K2, K3, D1, D2, D3> extends Partial<ojThematicMapSettableProperties<K1, K2, K3, D1, D2, D3>> {
    [key: string]: any;
}
export namespace ojThematicMap {
    // tslint:disable-next-line interface-over-type-literal
    type DataContext = {
        color: string;
        label: string;
        selected: boolean;
        tooltip: string;
    };
    // tslint:disable-next-line interface-over-type-literal
    type NodeContext = {
        subId: string;
        index: number;
    };
    // tslint:disable-next-line interface-over-type-literal
    type RendererContext<K1, K2, K3, D1, D2, D3> = {
        color: string;
        componentElement: Element;
        data: object;
        id: K1 | K2 | K3;
        itemData: D1 | D2 | D3;
        label: string;
        location: string | null;
        parentElement: Element;
        previousState: {
            hovered: boolean;
            selected: boolean;
            focused: boolean;
        };
        renderDefaultFocus: (() => void);
        renderDefaultHover: (() => void);
        renderDefaultSelection: (() => void);
        root: Element | null;
        state: {
            hovered: boolean;
            selected: boolean;
            focused: boolean;
        };
        x: number | null;
        y: number | null;
    };
    // tslint:disable-next-line interface-over-type-literal
    type TooltipContext<K1, K2, K3, D1, D2, D3> = {
        color: string | null;
        componentElement: Element;
        data: object | null;
        id: K1 | K2 | K3;
        itemData: D1 | D2 | D3;
        label: string | null;
        location: string | null;
        locationName: string | null;
        parentElement: Element;
        tooltip: string;
        x: number;
        y: number;
    };
}
export interface ojThematicMapArea extends JetElement<ojThematicMapAreaSettableProperties> {
    categories: string[];
    color: string;
    label: string;
    labelStyle: object;
    location: string;
    opacity: number;
    selectable: 'auto' | 'off';
    shortDesc: string;
    svgClassName: string;
    svgStyle: object;
    onCategoriesChanged: ((event: JetElementCustomEvent<ojThematicMapArea["categories"]>) => any) | null;
    onColorChanged: ((event: JetElementCustomEvent<ojThematicMapArea["color"]>) => any) | null;
    onLabelChanged: ((event: JetElementCustomEvent<ojThematicMapArea["label"]>) => any) | null;
    onLabelStyleChanged: ((event: JetElementCustomEvent<ojThematicMapArea["labelStyle"]>) => any) | null;
    onLocationChanged: ((event: JetElementCustomEvent<ojThematicMapArea["location"]>) => any) | null;
    onOpacityChanged: ((event: JetElementCustomEvent<ojThematicMapArea["opacity"]>) => any) | null;
    onSelectableChanged: ((event: JetElementCustomEvent<ojThematicMapArea["selectable"]>) => any) | null;
    onShortDescChanged: ((event: JetElementCustomEvent<ojThematicMapArea["shortDesc"]>) => any) | null;
    onSvgClassNameChanged: ((event: JetElementCustomEvent<ojThematicMapArea["svgClassName"]>) => any) | null;
    onSvgStyleChanged: ((event: JetElementCustomEvent<ojThematicMapArea["svgStyle"]>) => any) | null;
    addEventListener<T extends keyof ojThematicMapAreaEventMap>(type: T, listener: (this: HTMLElement, ev: ojThematicMapAreaEventMap[T]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    getProperty<T extends keyof ojThematicMapAreaSettableProperties>(property: T): ojThematicMapArea[T];
    getProperty(property: string): any;
    setProperty<T extends keyof ojThematicMapAreaSettableProperties>(property: T, value: ojThematicMapAreaSettableProperties[T]): void;
    setProperty<T extends string>(property: T, value: JetSetPropertyType<T, ojThematicMapAreaSettableProperties>): void;
    setProperties(properties: ojThematicMapAreaSettablePropertiesLenient): void;
}
export interface ojThematicMapAreaEventMap extends HTMLElementEventMap {
    'categoriesChanged': JetElementCustomEvent<ojThematicMapArea["categories"]>;
    'colorChanged': JetElementCustomEvent<ojThematicMapArea["color"]>;
    'labelChanged': JetElementCustomEvent<ojThematicMapArea["label"]>;
    'labelStyleChanged': JetElementCustomEvent<ojThematicMapArea["labelStyle"]>;
    'locationChanged': JetElementCustomEvent<ojThematicMapArea["location"]>;
    'opacityChanged': JetElementCustomEvent<ojThematicMapArea["opacity"]>;
    'selectableChanged': JetElementCustomEvent<ojThematicMapArea["selectable"]>;
    'shortDescChanged': JetElementCustomEvent<ojThematicMapArea["shortDesc"]>;
    'svgClassNameChanged': JetElementCustomEvent<ojThematicMapArea["svgClassName"]>;
    'svgStyleChanged': JetElementCustomEvent<ojThematicMapArea["svgStyle"]>;
}
export interface ojThematicMapAreaSettableProperties extends JetSettableProperties {
    categories: string[];
    color: string;
    label: string;
    labelStyle: object;
    location: string;
    opacity: number;
    selectable: 'auto' | 'off';
    shortDesc: string;
    svgClassName: string;
    svgStyle: object;
}
export interface ojThematicMapAreaSettablePropertiesLenient extends Partial<ojThematicMapAreaSettableProperties> {
    [key: string]: any;
}
export interface ojThematicMapLink extends JetElement<ojThematicMapLinkSettableProperties> {
    categories: string[];
    color: string;
    endLocation: {
        id?: any;
        location?: string;
        x?: number;
        y?: number;
    };
    selectable: 'auto' | 'off';
    shortDesc: string;
    startLocation: {
        id?: any;
        location?: string;
        x?: number;
        y?: number;
    };
    svgClassName: string;
    svgStyle: object;
    width: number;
    onCategoriesChanged: ((event: JetElementCustomEvent<ojThematicMapLink["categories"]>) => any) | null;
    onColorChanged: ((event: JetElementCustomEvent<ojThematicMapLink["color"]>) => any) | null;
    onEndLocationChanged: ((event: JetElementCustomEvent<ojThematicMapLink["endLocation"]>) => any) | null;
    onSelectableChanged: ((event: JetElementCustomEvent<ojThematicMapLink["selectable"]>) => any) | null;
    onShortDescChanged: ((event: JetElementCustomEvent<ojThematicMapLink["shortDesc"]>) => any) | null;
    onStartLocationChanged: ((event: JetElementCustomEvent<ojThematicMapLink["startLocation"]>) => any) | null;
    onSvgClassNameChanged: ((event: JetElementCustomEvent<ojThematicMapLink["svgClassName"]>) => any) | null;
    onSvgStyleChanged: ((event: JetElementCustomEvent<ojThematicMapLink["svgStyle"]>) => any) | null;
    onWidthChanged: ((event: JetElementCustomEvent<ojThematicMapLink["width"]>) => any) | null;
    addEventListener<T extends keyof ojThematicMapLinkEventMap>(type: T, listener: (this: HTMLElement, ev: ojThematicMapLinkEventMap[T]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    getProperty<T extends keyof ojThematicMapLinkSettableProperties>(property: T): ojThematicMapLink[T];
    getProperty(property: string): any;
    setProperty<T extends keyof ojThematicMapLinkSettableProperties>(property: T, value: ojThematicMapLinkSettableProperties[T]): void;
    setProperty<T extends string>(property: T, value: JetSetPropertyType<T, ojThematicMapLinkSettableProperties>): void;
    setProperties(properties: ojThematicMapLinkSettablePropertiesLenient): void;
}
export interface ojThematicMapLinkEventMap extends HTMLElementEventMap {
    'categoriesChanged': JetElementCustomEvent<ojThematicMapLink["categories"]>;
    'colorChanged': JetElementCustomEvent<ojThematicMapLink["color"]>;
    'endLocationChanged': JetElementCustomEvent<ojThematicMapLink["endLocation"]>;
    'selectableChanged': JetElementCustomEvent<ojThematicMapLink["selectable"]>;
    'shortDescChanged': JetElementCustomEvent<ojThematicMapLink["shortDesc"]>;
    'startLocationChanged': JetElementCustomEvent<ojThematicMapLink["startLocation"]>;
    'svgClassNameChanged': JetElementCustomEvent<ojThematicMapLink["svgClassName"]>;
    'svgStyleChanged': JetElementCustomEvent<ojThematicMapLink["svgStyle"]>;
    'widthChanged': JetElementCustomEvent<ojThematicMapLink["width"]>;
}
export interface ojThematicMapLinkSettableProperties extends JetSettableProperties {
    categories: string[];
    color: string;
    endLocation: {
        id?: any;
        location?: string;
        x?: number;
        y?: number;
    };
    selectable: 'auto' | 'off';
    shortDesc: string;
    startLocation: {
        id?: any;
        location?: string;
        x?: number;
        y?: number;
    };
    svgClassName: string;
    svgStyle: object;
    width: number;
}
export interface ojThematicMapLinkSettablePropertiesLenient extends Partial<ojThematicMapLinkSettableProperties> {
    [key: string]: any;
}
export interface ojThematicMapMarker extends JetElement<ojThematicMapMarkerSettableProperties> {
    borderColor: string;
    borderStyle: 'solid' | 'none';
    borderWidth: number;
    categories: string[];
    color: string;
    height: number;
    label: string;
    labelPosition: 'bottom' | 'center' | 'top';
    labelStyle: object;
    location: string;
    opacity: number;
    rotation: number;
    selectable: 'auto' | 'off';
    shape?: 'circle' | 'diamond' | 'ellipse' | 'human' | 'plus' | 'rectangle' | 'square' | 'star' | 'triangleDown' | 'triangleUp' | string;
    shortDesc: string;
    source: string;
    sourceHover: string;
    sourceHoverSelected: string;
    sourceSelected: string;
    svgClassName: string;
    svgStyle: object;
    value: number;
    width: number;
    x: number | null;
    y: number | null;
    onBorderColorChanged: ((event: JetElementCustomEvent<ojThematicMapMarker["borderColor"]>) => any) | null;
    onBorderStyleChanged: ((event: JetElementCustomEvent<ojThematicMapMarker["borderStyle"]>) => any) | null;
    onBorderWidthChanged: ((event: JetElementCustomEvent<ojThematicMapMarker["borderWidth"]>) => any) | null;
    onCategoriesChanged: ((event: JetElementCustomEvent<ojThematicMapMarker["categories"]>) => any) | null;
    onColorChanged: ((event: JetElementCustomEvent<ojThematicMapMarker["color"]>) => any) | null;
    onHeightChanged: ((event: JetElementCustomEvent<ojThematicMapMarker["height"]>) => any) | null;
    onLabelChanged: ((event: JetElementCustomEvent<ojThematicMapMarker["label"]>) => any) | null;
    onLabelPositionChanged: ((event: JetElementCustomEvent<ojThematicMapMarker["labelPosition"]>) => any) | null;
    onLabelStyleChanged: ((event: JetElementCustomEvent<ojThematicMapMarker["labelStyle"]>) => any) | null;
    onLocationChanged: ((event: JetElementCustomEvent<ojThematicMapMarker["location"]>) => any) | null;
    onOpacityChanged: ((event: JetElementCustomEvent<ojThematicMapMarker["opacity"]>) => any) | null;
    onRotationChanged: ((event: JetElementCustomEvent<ojThematicMapMarker["rotation"]>) => any) | null;
    onSelectableChanged: ((event: JetElementCustomEvent<ojThematicMapMarker["selectable"]>) => any) | null;
    onShapeChanged: ((event: JetElementCustomEvent<ojThematicMapMarker["shape"]>) => any) | null;
    onShortDescChanged: ((event: JetElementCustomEvent<ojThematicMapMarker["shortDesc"]>) => any) | null;
    onSourceChanged: ((event: JetElementCustomEvent<ojThematicMapMarker["source"]>) => any) | null;
    onSourceHoverChanged: ((event: JetElementCustomEvent<ojThematicMapMarker["sourceHover"]>) => any) | null;
    onSourceHoverSelectedChanged: ((event: JetElementCustomEvent<ojThematicMapMarker["sourceHoverSelected"]>) => any) | null;
    onSourceSelectedChanged: ((event: JetElementCustomEvent<ojThematicMapMarker["sourceSelected"]>) => any) | null;
    onSvgClassNameChanged: ((event: JetElementCustomEvent<ojThematicMapMarker["svgClassName"]>) => any) | null;
    onSvgStyleChanged: ((event: JetElementCustomEvent<ojThematicMapMarker["svgStyle"]>) => any) | null;
    onValueChanged: ((event: JetElementCustomEvent<ojThematicMapMarker["value"]>) => any) | null;
    onWidthChanged: ((event: JetElementCustomEvent<ojThematicMapMarker["width"]>) => any) | null;
    onXChanged: ((event: JetElementCustomEvent<ojThematicMapMarker["x"]>) => any) | null;
    onYChanged: ((event: JetElementCustomEvent<ojThematicMapMarker["y"]>) => any) | null;
    addEventListener<T extends keyof ojThematicMapMarkerEventMap>(type: T, listener: (this: HTMLElement, ev: ojThematicMapMarkerEventMap[T]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    getProperty<T extends keyof ojThematicMapMarkerSettableProperties>(property: T): ojThematicMapMarker[T];
    getProperty(property: string): any;
    setProperty<T extends keyof ojThematicMapMarkerSettableProperties>(property: T, value: ojThematicMapMarkerSettableProperties[T]): void;
    setProperty<T extends string>(property: T, value: JetSetPropertyType<T, ojThematicMapMarkerSettableProperties>): void;
    setProperties(properties: ojThematicMapMarkerSettablePropertiesLenient): void;
}
export interface ojThematicMapMarkerEventMap extends HTMLElementEventMap {
    'borderColorChanged': JetElementCustomEvent<ojThematicMapMarker["borderColor"]>;
    'borderStyleChanged': JetElementCustomEvent<ojThematicMapMarker["borderStyle"]>;
    'borderWidthChanged': JetElementCustomEvent<ojThematicMapMarker["borderWidth"]>;
    'categoriesChanged': JetElementCustomEvent<ojThematicMapMarker["categories"]>;
    'colorChanged': JetElementCustomEvent<ojThematicMapMarker["color"]>;
    'heightChanged': JetElementCustomEvent<ojThematicMapMarker["height"]>;
    'labelChanged': JetElementCustomEvent<ojThematicMapMarker["label"]>;
    'labelPositionChanged': JetElementCustomEvent<ojThematicMapMarker["labelPosition"]>;
    'labelStyleChanged': JetElementCustomEvent<ojThematicMapMarker["labelStyle"]>;
    'locationChanged': JetElementCustomEvent<ojThematicMapMarker["location"]>;
    'opacityChanged': JetElementCustomEvent<ojThematicMapMarker["opacity"]>;
    'rotationChanged': JetElementCustomEvent<ojThematicMapMarker["rotation"]>;
    'selectableChanged': JetElementCustomEvent<ojThematicMapMarker["selectable"]>;
    'shapeChanged': JetElementCustomEvent<ojThematicMapMarker["shape"]>;
    'shortDescChanged': JetElementCustomEvent<ojThematicMapMarker["shortDesc"]>;
    'sourceChanged': JetElementCustomEvent<ojThematicMapMarker["source"]>;
    'sourceHoverChanged': JetElementCustomEvent<ojThematicMapMarker["sourceHover"]>;
    'sourceHoverSelectedChanged': JetElementCustomEvent<ojThematicMapMarker["sourceHoverSelected"]>;
    'sourceSelectedChanged': JetElementCustomEvent<ojThematicMapMarker["sourceSelected"]>;
    'svgClassNameChanged': JetElementCustomEvent<ojThematicMapMarker["svgClassName"]>;
    'svgStyleChanged': JetElementCustomEvent<ojThematicMapMarker["svgStyle"]>;
    'valueChanged': JetElementCustomEvent<ojThematicMapMarker["value"]>;
    'widthChanged': JetElementCustomEvent<ojThematicMapMarker["width"]>;
    'xChanged': JetElementCustomEvent<ojThematicMapMarker["x"]>;
    'yChanged': JetElementCustomEvent<ojThematicMapMarker["y"]>;
}
export interface ojThematicMapMarkerSettableProperties extends JetSettableProperties {
    borderColor: string;
    borderStyle: 'solid' | 'none';
    borderWidth: number;
    categories: string[];
    color: string;
    height: number;
    label: string;
    labelPosition: 'bottom' | 'center' | 'top';
    labelStyle: object;
    location: string;
    opacity: number;
    rotation: number;
    selectable: 'auto' | 'off';
    shape?: 'circle' | 'diamond' | 'ellipse' | 'human' | 'plus' | 'rectangle' | 'square' | 'star' | 'triangleDown' | 'triangleUp' | string;
    shortDesc: string;
    source: string;
    sourceHover: string;
    sourceHoverSelected: string;
    sourceSelected: string;
    svgClassName: string;
    svgStyle: object;
    value: number;
    width: number;
    x: number | null;
    y: number | null;
}
export interface ojThematicMapMarkerSettablePropertiesLenient extends Partial<ojThematicMapMarkerSettableProperties> {
    [key: string]: any;
}
