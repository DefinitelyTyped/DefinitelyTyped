import { DataProvider } from '../ojdataprovider';
import { dvtBaseComponent, dvtBaseComponentEventMap, dvtBaseComponentSettableProperties } from '../ojdvt-base';
import { JetElement, JetSettableProperties, JetElementCustomEvent, JetSetPropertyType } from '..';
export interface ojPictoChart<K, D> extends dvtBaseComponent<ojPictoChartSettableProperties<K, D>> {
    animationDuration?: number;
    animationOnDataChange: 'auto' | 'none';
    animationOnDisplay: 'auto' | 'popIn' | 'alphaFade' | 'zoom' | 'none';
    as: string;
    columnCount: number | null;
    columnWidth: number | null;
    data: DataProvider<K, D> | null;
    drilling: 'on' | 'off';
    hiddenCategories: string[];
    highlightMatch: 'any' | 'all';
    highlightedCategories: string[];
    hoverBehavior: 'dim' | 'none';
    hoverBehaviorDelay: number;
    layout: 'vertical' | 'horizontal';
    layoutOrigin: 'topEnd' | 'bottomStart' | 'bottomEnd' | 'topStart';
    rowCount: number | null;
    rowHeight: number | null;
    selection: K[];
    selectionMode: 'single' | 'multiple' | 'none';
    tooltip: {
        renderer: ((context: ojPictoChart.TooltipContext<K>) => ({
            insert: Element | string;
        } | {
            preventDefault: boolean;
        })) | null;
    };
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
    onAnimationDurationChanged: ((event: JetElementCustomEvent<ojPictoChart<K, D>["animationDuration"]>) => any) | null;
    onAnimationOnDataChangeChanged: ((event: JetElementCustomEvent<ojPictoChart<K, D>["animationOnDataChange"]>) => any) | null;
    onAnimationOnDisplayChanged: ((event: JetElementCustomEvent<ojPictoChart<K, D>["animationOnDisplay"]>) => any) | null;
    onAsChanged: ((event: JetElementCustomEvent<ojPictoChart<K, D>["as"]>) => any) | null;
    onColumnCountChanged: ((event: JetElementCustomEvent<ojPictoChart<K, D>["columnCount"]>) => any) | null;
    onColumnWidthChanged: ((event: JetElementCustomEvent<ojPictoChart<K, D>["columnWidth"]>) => any) | null;
    onDataChanged: ((event: JetElementCustomEvent<ojPictoChart<K, D>["data"]>) => any) | null;
    onDrillingChanged: ((event: JetElementCustomEvent<ojPictoChart<K, D>["drilling"]>) => any) | null;
    onHiddenCategoriesChanged: ((event: JetElementCustomEvent<ojPictoChart<K, D>["hiddenCategories"]>) => any) | null;
    onHighlightMatchChanged: ((event: JetElementCustomEvent<ojPictoChart<K, D>["highlightMatch"]>) => any) | null;
    onHighlightedCategoriesChanged: ((event: JetElementCustomEvent<ojPictoChart<K, D>["highlightedCategories"]>) => any) | null;
    onHoverBehaviorChanged: ((event: JetElementCustomEvent<ojPictoChart<K, D>["hoverBehavior"]>) => any) | null;
    onHoverBehaviorDelayChanged: ((event: JetElementCustomEvent<ojPictoChart<K, D>["hoverBehaviorDelay"]>) => any) | null;
    onLayoutChanged: ((event: JetElementCustomEvent<ojPictoChart<K, D>["layout"]>) => any) | null;
    onLayoutOriginChanged: ((event: JetElementCustomEvent<ojPictoChart<K, D>["layoutOrigin"]>) => any) | null;
    onRowCountChanged: ((event: JetElementCustomEvent<ojPictoChart<K, D>["rowCount"]>) => any) | null;
    onRowHeightChanged: ((event: JetElementCustomEvent<ojPictoChart<K, D>["rowHeight"]>) => any) | null;
    onSelectionChanged: ((event: JetElementCustomEvent<ojPictoChart<K, D>["selection"]>) => any) | null;
    onSelectionModeChanged: ((event: JetElementCustomEvent<ojPictoChart<K, D>["selectionMode"]>) => any) | null;
    onTooltipChanged: ((event: JetElementCustomEvent<ojPictoChart<K, D>["tooltip"]>) => any) | null;
    onOjDrill: ((event: ojPictoChart.ojDrill) => any) | null;
    addEventListener<T extends keyof ojPictoChartEventMap<K, D>>(type: T, listener: (this: HTMLElement, ev: ojPictoChartEventMap<K, D>[T]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    getProperty<T extends keyof ojPictoChartSettableProperties<K, D>>(property: T): ojPictoChart<K, D>[T];
    getProperty(property: string): any;
    setProperty<T extends keyof ojPictoChartSettableProperties<K, D>>(property: T, value: ojPictoChartSettableProperties<K, D>[T]): void;
    setProperty<T extends string>(property: T, value: JetSetPropertyType<T, ojPictoChartSettableProperties<K, D>>): void;
    setProperties(properties: ojPictoChartSettablePropertiesLenient<K, D>): void;
    getContextByNode(node: Element): ojPictoChart.NodeContext | null;
    getItem(index: number): ojPictoChart.ItemContext<K> | null;
    getItemCount(): number;
}
export namespace ojPictoChart {
    interface ojDrill extends CustomEvent<{
        id: any;
        [propName: string]: any;
    }> {
    }
    // tslint:disable-next-line interface-over-type-literal
    type ItemContext<K> = {
        color: string;
        count: number;
        id: K;
        name: string;
        selected: boolean;
        tooltip: string;
    };
    // tslint:disable-next-line interface-over-type-literal
    type NodeContext = {
        subId: string;
        index: number;
    };
    // tslint:disable-next-line interface-over-type-literal
    type TooltipContext<K> = {
        parentElement: Element;
        id: K;
        name: string;
        count: number;
        color: string;
        componentElement: Element;
    };
}
export interface ojPictoChartEventMap<K, D> extends dvtBaseComponentEventMap<ojPictoChartSettableProperties<K, D>> {
    'ojDrill': ojPictoChart.ojDrill;
    'animationDurationChanged': JetElementCustomEvent<ojPictoChart<K, D>["animationDuration"]>;
    'animationOnDataChangeChanged': JetElementCustomEvent<ojPictoChart<K, D>["animationOnDataChange"]>;
    'animationOnDisplayChanged': JetElementCustomEvent<ojPictoChart<K, D>["animationOnDisplay"]>;
    'asChanged': JetElementCustomEvent<ojPictoChart<K, D>["as"]>;
    'columnCountChanged': JetElementCustomEvent<ojPictoChart<K, D>["columnCount"]>;
    'columnWidthChanged': JetElementCustomEvent<ojPictoChart<K, D>["columnWidth"]>;
    'dataChanged': JetElementCustomEvent<ojPictoChart<K, D>["data"]>;
    'drillingChanged': JetElementCustomEvent<ojPictoChart<K, D>["drilling"]>;
    'hiddenCategoriesChanged': JetElementCustomEvent<ojPictoChart<K, D>["hiddenCategories"]>;
    'highlightMatchChanged': JetElementCustomEvent<ojPictoChart<K, D>["highlightMatch"]>;
    'highlightedCategoriesChanged': JetElementCustomEvent<ojPictoChart<K, D>["highlightedCategories"]>;
    'hoverBehaviorChanged': JetElementCustomEvent<ojPictoChart<K, D>["hoverBehavior"]>;
    'hoverBehaviorDelayChanged': JetElementCustomEvent<ojPictoChart<K, D>["hoverBehaviorDelay"]>;
    'layoutChanged': JetElementCustomEvent<ojPictoChart<K, D>["layout"]>;
    'layoutOriginChanged': JetElementCustomEvent<ojPictoChart<K, D>["layoutOrigin"]>;
    'rowCountChanged': JetElementCustomEvent<ojPictoChart<K, D>["rowCount"]>;
    'rowHeightChanged': JetElementCustomEvent<ojPictoChart<K, D>["rowHeight"]>;
    'selectionChanged': JetElementCustomEvent<ojPictoChart<K, D>["selection"]>;
    'selectionModeChanged': JetElementCustomEvent<ojPictoChart<K, D>["selectionMode"]>;
    'tooltipChanged': JetElementCustomEvent<ojPictoChart<K, D>["tooltip"]>;
}
export interface ojPictoChartSettableProperties<K, D> extends dvtBaseComponentSettableProperties {
    animationDuration?: number;
    animationOnDataChange: 'auto' | 'none';
    animationOnDisplay: 'auto' | 'popIn' | 'alphaFade' | 'zoom' | 'none';
    as: string;
    columnCount: number | null;
    columnWidth: number | null;
    data: DataProvider<K, D> | null;
    drilling: 'on' | 'off';
    hiddenCategories: string[];
    highlightMatch: 'any' | 'all';
    highlightedCategories: string[];
    hoverBehavior: 'dim' | 'none';
    hoverBehaviorDelay: number;
    layout: 'vertical' | 'horizontal';
    layoutOrigin: 'topEnd' | 'bottomStart' | 'bottomEnd' | 'topStart';
    rowCount: number | null;
    rowHeight: number | null;
    selection: K[];
    selectionMode: 'single' | 'multiple' | 'none';
    tooltip: {
        renderer: ((context: ojPictoChart.TooltipContext<K>) => ({
            insert: Element | string;
        } | {
            preventDefault: boolean;
        })) | null;
    };
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
export interface ojPictoChartSettablePropertiesLenient<K, D> extends Partial<ojPictoChartSettableProperties<K, D>> {
    [key: string]: any;
}
export interface ojPictoChartItem extends JetElement<ojPictoChartItemSettableProperties> {
    borderColor: string;
    borderWidth: number;
    categories: string[];
    color: string;
    columnSpan: number;
    count: number;
    drilling: 'inherit' | 'off' | 'on';
    name: string;
    rowSpan: number;
    shape?: 'circle' | 'diamond' | 'human' | 'plus' | 'rectangle' | 'square' | 'star' | 'triangleDown' | 'triangleUp' | 'none' | string;
    shortDesc: string;
    source: string;
    sourceHover: string;
    sourceHoverSelected: string;
    sourceSelected: string;
    svgClassName: string;
    svgStyle: object;
    onBorderColorChanged: ((event: JetElementCustomEvent<ojPictoChartItem["borderColor"]>) => any) | null;
    onBorderWidthChanged: ((event: JetElementCustomEvent<ojPictoChartItem["borderWidth"]>) => any) | null;
    onCategoriesChanged: ((event: JetElementCustomEvent<ojPictoChartItem["categories"]>) => any) | null;
    onColorChanged: ((event: JetElementCustomEvent<ojPictoChartItem["color"]>) => any) | null;
    onColumnSpanChanged: ((event: JetElementCustomEvent<ojPictoChartItem["columnSpan"]>) => any) | null;
    onCountChanged: ((event: JetElementCustomEvent<ojPictoChartItem["count"]>) => any) | null;
    onDrillingChanged: ((event: JetElementCustomEvent<ojPictoChartItem["drilling"]>) => any) | null;
    onNameChanged: ((event: JetElementCustomEvent<ojPictoChartItem["name"]>) => any) | null;
    onRowSpanChanged: ((event: JetElementCustomEvent<ojPictoChartItem["rowSpan"]>) => any) | null;
    onShapeChanged: ((event: JetElementCustomEvent<ojPictoChartItem["shape"]>) => any) | null;
    onShortDescChanged: ((event: JetElementCustomEvent<ojPictoChartItem["shortDesc"]>) => any) | null;
    onSourceChanged: ((event: JetElementCustomEvent<ojPictoChartItem["source"]>) => any) | null;
    onSourceHoverChanged: ((event: JetElementCustomEvent<ojPictoChartItem["sourceHover"]>) => any) | null;
    onSourceHoverSelectedChanged: ((event: JetElementCustomEvent<ojPictoChartItem["sourceHoverSelected"]>) => any) | null;
    onSourceSelectedChanged: ((event: JetElementCustomEvent<ojPictoChartItem["sourceSelected"]>) => any) | null;
    onSvgClassNameChanged: ((event: JetElementCustomEvent<ojPictoChartItem["svgClassName"]>) => any) | null;
    onSvgStyleChanged: ((event: JetElementCustomEvent<ojPictoChartItem["svgStyle"]>) => any) | null;
    addEventListener<T extends keyof ojPictoChartItemEventMap>(type: T, listener: (this: HTMLElement, ev: ojPictoChartItemEventMap[T]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    getProperty<T extends keyof ojPictoChartItemSettableProperties>(property: T): ojPictoChartItem[T];
    getProperty(property: string): any;
    setProperty<T extends keyof ojPictoChartItemSettableProperties>(property: T, value: ojPictoChartItemSettableProperties[T]): void;
    setProperty<T extends string>(property: T, value: JetSetPropertyType<T, ojPictoChartItemSettableProperties>): void;
    setProperties(properties: ojPictoChartItemSettablePropertiesLenient): void;
}
export interface ojPictoChartItemEventMap extends HTMLElementEventMap {
    'borderColorChanged': JetElementCustomEvent<ojPictoChartItem["borderColor"]>;
    'borderWidthChanged': JetElementCustomEvent<ojPictoChartItem["borderWidth"]>;
    'categoriesChanged': JetElementCustomEvent<ojPictoChartItem["categories"]>;
    'colorChanged': JetElementCustomEvent<ojPictoChartItem["color"]>;
    'columnSpanChanged': JetElementCustomEvent<ojPictoChartItem["columnSpan"]>;
    'countChanged': JetElementCustomEvent<ojPictoChartItem["count"]>;
    'drillingChanged': JetElementCustomEvent<ojPictoChartItem["drilling"]>;
    'nameChanged': JetElementCustomEvent<ojPictoChartItem["name"]>;
    'rowSpanChanged': JetElementCustomEvent<ojPictoChartItem["rowSpan"]>;
    'shapeChanged': JetElementCustomEvent<ojPictoChartItem["shape"]>;
    'shortDescChanged': JetElementCustomEvent<ojPictoChartItem["shortDesc"]>;
    'sourceChanged': JetElementCustomEvent<ojPictoChartItem["source"]>;
    'sourceHoverChanged': JetElementCustomEvent<ojPictoChartItem["sourceHover"]>;
    'sourceHoverSelectedChanged': JetElementCustomEvent<ojPictoChartItem["sourceHoverSelected"]>;
    'sourceSelectedChanged': JetElementCustomEvent<ojPictoChartItem["sourceSelected"]>;
    'svgClassNameChanged': JetElementCustomEvent<ojPictoChartItem["svgClassName"]>;
    'svgStyleChanged': JetElementCustomEvent<ojPictoChartItem["svgStyle"]>;
}
export interface ojPictoChartItemSettableProperties extends JetSettableProperties {
    borderColor: string;
    borderWidth: number;
    categories: string[];
    color: string;
    columnSpan: number;
    count: number;
    drilling: 'inherit' | 'off' | 'on';
    name: string;
    rowSpan: number;
    shape?: 'circle' | 'diamond' | 'human' | 'plus' | 'rectangle' | 'square' | 'star' | 'triangleDown' | 'triangleUp' | 'none' | string;
    shortDesc: string;
    source: string;
    sourceHover: string;
    sourceHoverSelected: string;
    sourceSelected: string;
    svgClassName: string;
    svgStyle: object;
}
export interface ojPictoChartItemSettablePropertiesLenient extends Partial<ojPictoChartItemSettableProperties> {
    [key: string]: any;
}
