import { DataProvider } from '../ojdataprovider';
import { dvtBaseComponent, dvtBaseComponentEventMap, dvtBaseComponentSettableProperties } from '../ojdvt-base';
import { JetElement, JetSettableProperties, JetElementCustomEvent, JetSetPropertyType } from '..';
export interface ojTagCloud<K, D> extends dvtBaseComponent<ojTagCloudSettableProperties<K, D>> {
    animationOnDataChange: 'auto' | 'none';
    animationOnDisplay: 'auto' | 'none';
    as: string;
    data: DataProvider<K, D> | null;
    hiddenCategories: string[];
    highlightMatch: 'any' | 'all';
    highlightedCategories: string[];
    hoverBehavior: 'dim' | 'none';
    layout: 'cloud' | 'rectangular';
    selection: K[];
    selectionMode: 'single' | 'multiple' | 'none';
    styleDefaults: {
        animationDuration?: number;
        hoverBehaviorDelay?: number;
        svgStyle?: object;
    };
    tooltip: {
        renderer: ((context: ojTagCloud.TooltipContext<K>) => ({
            insert: Element | string;
        } | {
            preventDefault: boolean;
        }));
    };
    touchResponse: 'touchStart' | 'auto';
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
    onAnimationOnDataChangeChanged: ((event: JetElementCustomEvent<ojTagCloud<K, D>["animationOnDataChange"]>) => any) | null;
    onAnimationOnDisplayChanged: ((event: JetElementCustomEvent<ojTagCloud<K, D>["animationOnDisplay"]>) => any) | null;
    onAsChanged: ((event: JetElementCustomEvent<ojTagCloud<K, D>["as"]>) => any) | null;
    onDataChanged: ((event: JetElementCustomEvent<ojTagCloud<K, D>["data"]>) => any) | null;
    onHiddenCategoriesChanged: ((event: JetElementCustomEvent<ojTagCloud<K, D>["hiddenCategories"]>) => any) | null;
    onHighlightMatchChanged: ((event: JetElementCustomEvent<ojTagCloud<K, D>["highlightMatch"]>) => any) | null;
    onHighlightedCategoriesChanged: ((event: JetElementCustomEvent<ojTagCloud<K, D>["highlightedCategories"]>) => any) | null;
    onHoverBehaviorChanged: ((event: JetElementCustomEvent<ojTagCloud<K, D>["hoverBehavior"]>) => any) | null;
    onLayoutChanged: ((event: JetElementCustomEvent<ojTagCloud<K, D>["layout"]>) => any) | null;
    onSelectionChanged: ((event: JetElementCustomEvent<ojTagCloud<K, D>["selection"]>) => any) | null;
    onSelectionModeChanged: ((event: JetElementCustomEvent<ojTagCloud<K, D>["selectionMode"]>) => any) | null;
    onStyleDefaultsChanged: ((event: JetElementCustomEvent<ojTagCloud<K, D>["styleDefaults"]>) => any) | null;
    onTooltipChanged: ((event: JetElementCustomEvent<ojTagCloud<K, D>["tooltip"]>) => any) | null;
    onTouchResponseChanged: ((event: JetElementCustomEvent<ojTagCloud<K, D>["touchResponse"]>) => any) | null;
    addEventListener<T extends keyof ojTagCloudEventMap<K, D>>(type: T, listener: (this: HTMLElement, ev: ojTagCloudEventMap<K, D>[T]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    getProperty<T extends keyof ojTagCloudSettableProperties<K, D>>(property: T): ojTagCloud<K, D>[T];
    getProperty(property: string): any;
    setProperty<T extends keyof ojTagCloudSettableProperties<K, D>>(property: T, value: ojTagCloudSettableProperties<K, D>[T]): void;
    setProperty<T extends string>(property: T, value: JetSetPropertyType<T, ojTagCloudSettableProperties<K, D>>): void;
    setProperties(properties: ojTagCloudSettablePropertiesLenient<K, D>): void;
    getContextByNode(node: Element): ojTagCloud.NodeContext | null;
    getItem(index: number): ojTagCloud.ItemContext | null;
    getItemCount(): number;
}
export interface ojTagCloudEventMap<K, D> extends dvtBaseComponentEventMap<ojTagCloudSettableProperties<K, D>> {
    'animationOnDataChangeChanged': JetElementCustomEvent<ojTagCloud<K, D>["animationOnDataChange"]>;
    'animationOnDisplayChanged': JetElementCustomEvent<ojTagCloud<K, D>["animationOnDisplay"]>;
    'asChanged': JetElementCustomEvent<ojTagCloud<K, D>["as"]>;
    'dataChanged': JetElementCustomEvent<ojTagCloud<K, D>["data"]>;
    'hiddenCategoriesChanged': JetElementCustomEvent<ojTagCloud<K, D>["hiddenCategories"]>;
    'highlightMatchChanged': JetElementCustomEvent<ojTagCloud<K, D>["highlightMatch"]>;
    'highlightedCategoriesChanged': JetElementCustomEvent<ojTagCloud<K, D>["highlightedCategories"]>;
    'hoverBehaviorChanged': JetElementCustomEvent<ojTagCloud<K, D>["hoverBehavior"]>;
    'layoutChanged': JetElementCustomEvent<ojTagCloud<K, D>["layout"]>;
    'selectionChanged': JetElementCustomEvent<ojTagCloud<K, D>["selection"]>;
    'selectionModeChanged': JetElementCustomEvent<ojTagCloud<K, D>["selectionMode"]>;
    'styleDefaultsChanged': JetElementCustomEvent<ojTagCloud<K, D>["styleDefaults"]>;
    'tooltipChanged': JetElementCustomEvent<ojTagCloud<K, D>["tooltip"]>;
    'touchResponseChanged': JetElementCustomEvent<ojTagCloud<K, D>["touchResponse"]>;
}
export interface ojTagCloudSettableProperties<K, D> extends dvtBaseComponentSettableProperties {
    animationOnDataChange: 'auto' | 'none';
    animationOnDisplay: 'auto' | 'none';
    as: string;
    data: DataProvider<K, D> | null;
    hiddenCategories: string[];
    highlightMatch: 'any' | 'all';
    highlightedCategories: string[];
    hoverBehavior: 'dim' | 'none';
    layout: 'cloud' | 'rectangular';
    selection: K[];
    selectionMode: 'single' | 'multiple' | 'none';
    styleDefaults: {
        animationDuration?: number;
        hoverBehaviorDelay?: number;
        svgStyle?: object;
    };
    tooltip: {
        renderer: ((context: ojTagCloud.TooltipContext<K>) => ({
            insert: Element | string;
        } | {
            preventDefault: boolean;
        }));
    };
    touchResponse: 'touchStart' | 'auto';
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
export interface ojTagCloudSettablePropertiesLenient<K, D> extends Partial<ojTagCloudSettableProperties<K, D>> {
    [key: string]: any;
}
export namespace ojTagCloud {
    // tslint:disable-next-line interface-over-type-literal
    type ItemContext = {
        color: string;
        label: string;
        selected: boolean;
        tooltip: string;
        value: number;
    };
    // tslint:disable-next-line interface-over-type-literal
    type NodeContext = {
        subId: string;
        index: number;
    };
    // tslint:disable-next-line interface-over-type-literal
    type TooltipContext<K> = {
        color: string;
        componentElement: Element;
        id: K;
        label: string;
        parentElement: Element;
        value: number;
    };
}
export interface ojTagCloudItem extends JetElement<ojTagCloudItemSettableProperties> {
    categories: string[];
    color?: string;
    label: string;
    shortDesc: string;
    svgClassName: string;
    svgStyle: object;
    url: string;
    value: number | null;
    onCategoriesChanged: ((event: JetElementCustomEvent<ojTagCloudItem["categories"]>) => any) | null;
    onColorChanged: ((event: JetElementCustomEvent<ojTagCloudItem["color"]>) => any) | null;
    onLabelChanged: ((event: JetElementCustomEvent<ojTagCloudItem["label"]>) => any) | null;
    onShortDescChanged: ((event: JetElementCustomEvent<ojTagCloudItem["shortDesc"]>) => any) | null;
    onSvgClassNameChanged: ((event: JetElementCustomEvent<ojTagCloudItem["svgClassName"]>) => any) | null;
    onSvgStyleChanged: ((event: JetElementCustomEvent<ojTagCloudItem["svgStyle"]>) => any) | null;
    onUrlChanged: ((event: JetElementCustomEvent<ojTagCloudItem["url"]>) => any) | null;
    onValueChanged: ((event: JetElementCustomEvent<ojTagCloudItem["value"]>) => any) | null;
    addEventListener<T extends keyof ojTagCloudItemEventMap>(type: T, listener: (this: HTMLElement, ev: ojTagCloudItemEventMap[T]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    getProperty<T extends keyof ojTagCloudItemSettableProperties>(property: T): ojTagCloudItem[T];
    getProperty(property: string): any;
    setProperty<T extends keyof ojTagCloudItemSettableProperties>(property: T, value: ojTagCloudItemSettableProperties[T]): void;
    setProperty<T extends string>(property: T, value: JetSetPropertyType<T, ojTagCloudItemSettableProperties>): void;
    setProperties(properties: ojTagCloudItemSettablePropertiesLenient): void;
}
export interface ojTagCloudItemEventMap extends HTMLElementEventMap {
    'categoriesChanged': JetElementCustomEvent<ojTagCloudItem["categories"]>;
    'colorChanged': JetElementCustomEvent<ojTagCloudItem["color"]>;
    'labelChanged': JetElementCustomEvent<ojTagCloudItem["label"]>;
    'shortDescChanged': JetElementCustomEvent<ojTagCloudItem["shortDesc"]>;
    'svgClassNameChanged': JetElementCustomEvent<ojTagCloudItem["svgClassName"]>;
    'svgStyleChanged': JetElementCustomEvent<ojTagCloudItem["svgStyle"]>;
    'urlChanged': JetElementCustomEvent<ojTagCloudItem["url"]>;
    'valueChanged': JetElementCustomEvent<ojTagCloudItem["value"]>;
}
export interface ojTagCloudItemSettableProperties extends JetSettableProperties {
    categories: string[];
    color?: string;
    label: string;
    shortDesc: string;
    svgClassName: string;
    svgStyle: object;
    url: string;
    value: number | null;
}
export interface ojTagCloudItemSettablePropertiesLenient extends Partial<ojTagCloudItemSettableProperties> {
    [key: string]: any;
}
