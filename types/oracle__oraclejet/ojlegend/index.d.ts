import { KeySet } from '../ojkeyset';
import { DataProvider } from '../ojdataprovider';
import { dvtBaseComponent, dvtBaseComponentEventMap, dvtBaseComponentSettableProperties } from '../ojdvt-base';
import { JetElement, JetSettableProperties, JetElementCustomEvent, JetSetPropertyType } from '..';
export interface ojLegend<K, D> extends dvtBaseComponent<ojLegendSettableProperties<K, D>> {
    as: string;
    data: DataProvider<K, D> | null;
    drilling: 'on' | 'off';
    expanded: KeySet<K> | null;
    halign: 'center' | 'end' | 'start';
    hiddenCategories: string[];
    hideAndShowBehavior: 'on' | 'off';
    highlightedCategories: string[];
    hoverBehavior: 'dim' | 'none';
    hoverBehaviorDelay: number;
    orientation: 'horizontal' | 'vertical';
    scrolling: 'off' | 'asNeeded';
    symbolHeight: number;
    symbolWidth: number;
    textStyle?: object;
    valign: 'middle' | 'bottom' | 'top';
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
    onAsChanged: ((event: JetElementCustomEvent<ojLegend<K, D>["as"]>) => any) | null;
    onDataChanged: ((event: JetElementCustomEvent<ojLegend<K, D>["data"]>) => any) | null;
    onDrillingChanged: ((event: JetElementCustomEvent<ojLegend<K, D>["drilling"]>) => any) | null;
    onExpandedChanged: ((event: JetElementCustomEvent<ojLegend<K, D>["expanded"]>) => any) | null;
    onHalignChanged: ((event: JetElementCustomEvent<ojLegend<K, D>["halign"]>) => any) | null;
    onHiddenCategoriesChanged: ((event: JetElementCustomEvent<ojLegend<K, D>["hiddenCategories"]>) => any) | null;
    onHideAndShowBehaviorChanged: ((event: JetElementCustomEvent<ojLegend<K, D>["hideAndShowBehavior"]>) => any) | null;
    onHighlightedCategoriesChanged: ((event: JetElementCustomEvent<ojLegend<K, D>["highlightedCategories"]>) => any) | null;
    onHoverBehaviorChanged: ((event: JetElementCustomEvent<ojLegend<K, D>["hoverBehavior"]>) => any) | null;
    onHoverBehaviorDelayChanged: ((event: JetElementCustomEvent<ojLegend<K, D>["hoverBehaviorDelay"]>) => any) | null;
    onOrientationChanged: ((event: JetElementCustomEvent<ojLegend<K, D>["orientation"]>) => any) | null;
    onScrollingChanged: ((event: JetElementCustomEvent<ojLegend<K, D>["scrolling"]>) => any) | null;
    onSymbolHeightChanged: ((event: JetElementCustomEvent<ojLegend<K, D>["symbolHeight"]>) => any) | null;
    onSymbolWidthChanged: ((event: JetElementCustomEvent<ojLegend<K, D>["symbolWidth"]>) => any) | null;
    onTextStyleChanged: ((event: JetElementCustomEvent<ojLegend<K, D>["textStyle"]>) => any) | null;
    onValignChanged: ((event: JetElementCustomEvent<ojLegend<K, D>["valign"]>) => any) | null;
    onOjDrill: ((event: ojLegend.ojDrill) => any) | null;
    addEventListener<T extends keyof ojLegendEventMap<K, D>>(type: T, listener: (this: HTMLElement, ev: ojLegendEventMap<K, D>[T]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    getProperty<T extends keyof ojLegendSettableProperties<K, D>>(property: T): ojLegend<K, D>[T];
    getProperty(property: string): any;
    setProperty<T extends keyof ojLegendSettableProperties<K, D>>(property: T, value: ojLegendSettableProperties<K, D>[T]): void;
    setProperty<T extends string>(property: T, value: JetSetPropertyType<T, ojLegendSettableProperties<K, D>>): void;
    setProperties(properties: ojLegendSettablePropertiesLenient<K, D>): void;
    getContextByNode(node: Element): ojLegend.NodeContext | null;
    getItem(subIdPath: any[]): ojLegend.ItemContext | null;
    getPreferredSize(): ojLegend.PreferredSize | null;
    getSection(subIdPath: any[]): ojLegend.SectionContext | null;
}
export namespace ojLegend {
    interface ojDrill extends CustomEvent<{
        id: any;
        [propName: string]: any;
    }> {
    }
    // tslint:disable-next-line interface-over-type-literal
    type ItemContext = {
        text: string;
    };
    // tslint:disable-next-line interface-over-type-literal
    type NodeContext = {
        itemIndex: number;
        sectionIndexPath: number[];
        subId: string;
    };
    // tslint:disable-next-line interface-over-type-literal
    type PreferredSize = {
        width: number;
        height: number;
    };
    // tslint:disable-next-line interface-over-type-literal
    type SectionContext = {
        title: string;
        sections: object[];
        items: object[];
        getSection: {
            title: string;
            sections: string;
            items: boolean;
        };
        getItems: {
            text: string;
        };
    };
}
export interface ojLegendEventMap<K, D> extends dvtBaseComponentEventMap<ojLegendSettableProperties<K, D>> {
    'ojDrill': ojLegend.ojDrill;
    'asChanged': JetElementCustomEvent<ojLegend<K, D>["as"]>;
    'dataChanged': JetElementCustomEvent<ojLegend<K, D>["data"]>;
    'drillingChanged': JetElementCustomEvent<ojLegend<K, D>["drilling"]>;
    'expandedChanged': JetElementCustomEvent<ojLegend<K, D>["expanded"]>;
    'halignChanged': JetElementCustomEvent<ojLegend<K, D>["halign"]>;
    'hiddenCategoriesChanged': JetElementCustomEvent<ojLegend<K, D>["hiddenCategories"]>;
    'hideAndShowBehaviorChanged': JetElementCustomEvent<ojLegend<K, D>["hideAndShowBehavior"]>;
    'highlightedCategoriesChanged': JetElementCustomEvent<ojLegend<K, D>["highlightedCategories"]>;
    'hoverBehaviorChanged': JetElementCustomEvent<ojLegend<K, D>["hoverBehavior"]>;
    'hoverBehaviorDelayChanged': JetElementCustomEvent<ojLegend<K, D>["hoverBehaviorDelay"]>;
    'orientationChanged': JetElementCustomEvent<ojLegend<K, D>["orientation"]>;
    'scrollingChanged': JetElementCustomEvent<ojLegend<K, D>["scrolling"]>;
    'symbolHeightChanged': JetElementCustomEvent<ojLegend<K, D>["symbolHeight"]>;
    'symbolWidthChanged': JetElementCustomEvent<ojLegend<K, D>["symbolWidth"]>;
    'textStyleChanged': JetElementCustomEvent<ojLegend<K, D>["textStyle"]>;
    'valignChanged': JetElementCustomEvent<ojLegend<K, D>["valign"]>;
}
export interface ojLegendSettableProperties<K, D> extends dvtBaseComponentSettableProperties {
    as: string;
    data: DataProvider<K, D> | null;
    drilling: 'on' | 'off';
    expanded: KeySet<K> | null;
    halign: 'center' | 'end' | 'start';
    hiddenCategories: string[];
    hideAndShowBehavior: 'on' | 'off';
    highlightedCategories: string[];
    hoverBehavior: 'dim' | 'none';
    hoverBehaviorDelay: number;
    orientation: 'horizontal' | 'vertical';
    scrolling: 'off' | 'asNeeded';
    symbolHeight: number;
    symbolWidth: number;
    textStyle?: object;
    valign: 'middle' | 'bottom' | 'top';
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
export interface ojLegendSettablePropertiesLenient<K, D> extends Partial<ojLegendSettableProperties<K, D>> {
    [key: string]: any;
}
export interface ojLegendItem extends JetElement<ojLegendItemSettableProperties> {
    borderColor?: string;
    categories?: string[];
    categoryVisibility?: 'hidden' | 'visible';
    color?: string;
    drilling?: 'on' | 'off' | 'inherit';
    lineStyle?: 'dotted' | 'dashed' | 'solid';
    lineWidth?: number;
    markerColor?: string;
    markerShape: 'circle' | 'diamond' | 'ellipse' | 'human' | 'plus' | 'rectangle' | 'square' | 'star' | 'triangleDown' | 'triangleUp' | string;
    markerSvgClassName?: string;
    markerSvgStyle?: object;
    pattern?: 'smallChecker' | 'smallCrosshatch' | 'smallDiagonalLeft' | 'smallDiagonalRight' | 'smallDiamond' | 'smallTriangle' | 'largeChecker' | 'largeCrosshatch' | 'largeDiagonalLeft' |
       'largeDiagonalRight' | 'largeDiamond' | 'largeTriangle' | 'none';
    shortDesc?: string;
    source?: string;
    svgClassName?: string;
    svgStyle?: object;
    symbolType?: 'line' | 'lineWithMarker' | 'image' | 'marker';
    text: string;
    onBorderColorChanged: ((event: JetElementCustomEvent<ojLegendItem["borderColor"]>) => any) | null;
    onCategoriesChanged: ((event: JetElementCustomEvent<ojLegendItem["categories"]>) => any) | null;
    onCategoryVisibilityChanged: ((event: JetElementCustomEvent<ojLegendItem["categoryVisibility"]>) => any) | null;
    onColorChanged: ((event: JetElementCustomEvent<ojLegendItem["color"]>) => any) | null;
    onDrillingChanged: ((event: JetElementCustomEvent<ojLegendItem["drilling"]>) => any) | null;
    onLineStyleChanged: ((event: JetElementCustomEvent<ojLegendItem["lineStyle"]>) => any) | null;
    onLineWidthChanged: ((event: JetElementCustomEvent<ojLegendItem["lineWidth"]>) => any) | null;
    onMarkerColorChanged: ((event: JetElementCustomEvent<ojLegendItem["markerColor"]>) => any) | null;
    onMarkerShapeChanged: ((event: JetElementCustomEvent<ojLegendItem["markerShape"]>) => any) | null;
    onMarkerSvgClassNameChanged: ((event: JetElementCustomEvent<ojLegendItem["markerSvgClassName"]>) => any) | null;
    onMarkerSvgStyleChanged: ((event: JetElementCustomEvent<ojLegendItem["markerSvgStyle"]>) => any) | null;
    onPatternChanged: ((event: JetElementCustomEvent<ojLegendItem["pattern"]>) => any) | null;
    onShortDescChanged: ((event: JetElementCustomEvent<ojLegendItem["shortDesc"]>) => any) | null;
    onSourceChanged: ((event: JetElementCustomEvent<ojLegendItem["source"]>) => any) | null;
    onSvgClassNameChanged: ((event: JetElementCustomEvent<ojLegendItem["svgClassName"]>) => any) | null;
    onSvgStyleChanged: ((event: JetElementCustomEvent<ojLegendItem["svgStyle"]>) => any) | null;
    onSymbolTypeChanged: ((event: JetElementCustomEvent<ojLegendItem["symbolType"]>) => any) | null;
    onTextChanged: ((event: JetElementCustomEvent<ojLegendItem["text"]>) => any) | null;
    addEventListener<T extends keyof ojLegendItemEventMap>(type: T, listener: (this: HTMLElement, ev: ojLegendItemEventMap[T]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    getProperty<T extends keyof ojLegendItemSettableProperties>(property: T): ojLegendItem[T];
    getProperty(property: string): any;
    setProperty<T extends keyof ojLegendItemSettableProperties>(property: T, value: ojLegendItemSettableProperties[T]): void;
    setProperty<T extends string>(property: T, value: JetSetPropertyType<T, ojLegendItemSettableProperties>): void;
    setProperties(properties: ojLegendItemSettablePropertiesLenient): void;
}
export interface ojLegendItemEventMap extends HTMLElementEventMap {
    'borderColorChanged': JetElementCustomEvent<ojLegendItem["borderColor"]>;
    'categoriesChanged': JetElementCustomEvent<ojLegendItem["categories"]>;
    'categoryVisibilityChanged': JetElementCustomEvent<ojLegendItem["categoryVisibility"]>;
    'colorChanged': JetElementCustomEvent<ojLegendItem["color"]>;
    'drillingChanged': JetElementCustomEvent<ojLegendItem["drilling"]>;
    'lineStyleChanged': JetElementCustomEvent<ojLegendItem["lineStyle"]>;
    'lineWidthChanged': JetElementCustomEvent<ojLegendItem["lineWidth"]>;
    'markerColorChanged': JetElementCustomEvent<ojLegendItem["markerColor"]>;
    'markerShapeChanged': JetElementCustomEvent<ojLegendItem["markerShape"]>;
    'markerSvgClassNameChanged': JetElementCustomEvent<ojLegendItem["markerSvgClassName"]>;
    'markerSvgStyleChanged': JetElementCustomEvent<ojLegendItem["markerSvgStyle"]>;
    'patternChanged': JetElementCustomEvent<ojLegendItem["pattern"]>;
    'shortDescChanged': JetElementCustomEvent<ojLegendItem["shortDesc"]>;
    'sourceChanged': JetElementCustomEvent<ojLegendItem["source"]>;
    'svgClassNameChanged': JetElementCustomEvent<ojLegendItem["svgClassName"]>;
    'svgStyleChanged': JetElementCustomEvent<ojLegendItem["svgStyle"]>;
    'symbolTypeChanged': JetElementCustomEvent<ojLegendItem["symbolType"]>;
    'textChanged': JetElementCustomEvent<ojLegendItem["text"]>;
}
export interface ojLegendItemSettableProperties extends JetSettableProperties {
    borderColor?: string;
    categories?: string[];
    categoryVisibility?: 'hidden' | 'visible';
    color?: string;
    drilling?: 'on' | 'off' | 'inherit';
    lineStyle?: 'dotted' | 'dashed' | 'solid';
    lineWidth?: number;
    markerColor?: string;
    markerShape: 'circle' | 'diamond' | 'ellipse' | 'human' | 'plus' | 'rectangle' | 'square' | 'star' | 'triangleDown' | 'triangleUp' | string;
    markerSvgClassName?: string;
    markerSvgStyle?: object;
    pattern?: 'smallChecker' | 'smallCrosshatch' | 'smallDiagonalLeft' | 'smallDiagonalRight' | 'smallDiamond' | 'smallTriangle' | 'largeChecker' | 'largeCrosshatch' | 'largeDiagonalLeft' |
       'largeDiagonalRight' | 'largeDiamond' | 'largeTriangle' | 'none';
    shortDesc?: string;
    source?: string;
    svgClassName?: string;
    svgStyle?: object;
    symbolType?: 'line' | 'lineWithMarker' | 'image' | 'marker';
    text: string;
}
export interface ojLegendItemSettablePropertiesLenient extends Partial<ojLegendItemSettableProperties> {
    [key: string]: any;
}
export interface ojLegendSection extends JetElement<ojLegendSectionSettableProperties> {
    collapsible?: 'on' | 'off';
    text?: string;
    textHalign?: 'center' | 'end' | 'start';
    textStyle?: object;
    onCollapsibleChanged: ((event: JetElementCustomEvent<ojLegendSection["collapsible"]>) => any) | null;
    onTextChanged: ((event: JetElementCustomEvent<ojLegendSection["text"]>) => any) | null;
    onTextHalignChanged: ((event: JetElementCustomEvent<ojLegendSection["textHalign"]>) => any) | null;
    onTextStyleChanged: ((event: JetElementCustomEvent<ojLegendSection["textStyle"]>) => any) | null;
    addEventListener<T extends keyof ojLegendSectionEventMap>(type: T, listener: (this: HTMLElement, ev: ojLegendSectionEventMap[T]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    getProperty<T extends keyof ojLegendSectionSettableProperties>(property: T): ojLegendSection[T];
    getProperty(property: string): any;
    setProperty<T extends keyof ojLegendSectionSettableProperties>(property: T, value: ojLegendSectionSettableProperties[T]): void;
    setProperty<T extends string>(property: T, value: JetSetPropertyType<T, ojLegendSectionSettableProperties>): void;
    setProperties(properties: ojLegendSectionSettablePropertiesLenient): void;
}
export interface ojLegendSectionEventMap extends HTMLElementEventMap {
    'collapsibleChanged': JetElementCustomEvent<ojLegendSection["collapsible"]>;
    'textChanged': JetElementCustomEvent<ojLegendSection["text"]>;
    'textHalignChanged': JetElementCustomEvent<ojLegendSection["textHalign"]>;
    'textStyleChanged': JetElementCustomEvent<ojLegendSection["textStyle"]>;
}
export interface ojLegendSectionSettableProperties extends JetSettableProperties {
    collapsible?: 'on' | 'off';
    text?: string;
    textHalign?: 'center' | 'end' | 'start';
    textStyle?: object;
}
export interface ojLegendSectionSettablePropertiesLenient extends Partial<ojLegendSectionSettableProperties> {
    [key: string]: any;
}
