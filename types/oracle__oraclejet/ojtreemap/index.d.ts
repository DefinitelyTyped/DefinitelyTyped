import { DataProvider } from '../ojdataprovider';
import { dvtBaseComponent, dvtBaseComponentEventMap, dvtBaseComponentSettableProperties } from '../ojdvt-base';
import { JetElement, JetSettableProperties, JetElementCustomEvent, JetSetPropertyType } from '..';
export interface ojTreemap<K, D> extends dvtBaseComponent<ojTreemapSettableProperties<K, D>> {
    animationDuration: number;
    animationOnDataChange: 'auto' | 'none';
    animationOnDisplay: 'auto' | 'none';
    animationUpdateColor: string;
    as: string;
    colorLabel: string;
    data: DataProvider<K, D> | null;
    displayLevels: number;
    drilling: 'on' | 'off';
    groupGaps: 'all' | 'none' | 'outer';
    hiddenCategories: string[];
    highlightMatch: 'any' | 'all';
    highlightedCategories: string[];
    hoverBehavior: 'dim' | 'none';
    hoverBehaviorDelay: number;
    isolatedNode: any;
    layout: 'sliceAndDiceHorizontal' | 'sliceAndDiceVertical' | 'squarified';
    nodeContent: {
        renderer: ((context: ojTreemap.NodeContentContext<K, D>) => ({
            insert: Element | string;
        }));
    };
    nodeDefaults: {
        groupLabelDisplay: 'node' | 'off' | 'header';
        header: {
            backgroundColor: string;
            borderColor: string;
            hoverBackgroundColor: string;
            hoverInnerColor: string;
            hoverOuterColor: string;
            isolate: 'off' | 'on';
            labelHalign: 'center' | 'end' | 'start';
            labelStyle: object;
            selectedBackgroundColor: string;
            selectedInnerColor: string;
            selectedOuterColor: string;
            useNodeColor: 'on' | 'off';
        };
        hoverColor: string;
        labelDisplay: 'off' | 'node';
        labelHalign: 'start' | 'end' | 'center';
        labelMinLength: number;
        labelStyle: object;
        labelValign: 'top' | 'bottom' | 'center';
        selectedInnerColor: string;
        selectedOuterColor: string;
    };
    nodeSeparators: 'bevels' | 'gaps';
    rootNode: any;
    selection: any[];
    selectionMode: 'none' | 'single' | 'multiple';
    sizeLabel: string;
    sorting: 'on' | 'off';
    tooltip: {
        renderer: ((context: ojTreemap.TooltipContext<K, D>) => ({
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
        labelColor?: string;
        labelCountWithTotal?: string;
        labelDataVisualization?: string;
        labelInvalidData?: string;
        labelNoData?: string;
        labelSize?: string;
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
        tooltipIsolate?: string;
        tooltipRestore?: string;
    };
    onAnimationDurationChanged: ((event: JetElementCustomEvent<ojTreemap<K, D>["animationDuration"]>) => any) | null;
    onAnimationOnDataChangeChanged: ((event: JetElementCustomEvent<ojTreemap<K, D>["animationOnDataChange"]>) => any) | null;
    onAnimationOnDisplayChanged: ((event: JetElementCustomEvent<ojTreemap<K, D>["animationOnDisplay"]>) => any) | null;
    onAnimationUpdateColorChanged: ((event: JetElementCustomEvent<ojTreemap<K, D>["animationUpdateColor"]>) => any) | null;
    onAsChanged: ((event: JetElementCustomEvent<ojTreemap<K, D>["as"]>) => any) | null;
    onColorLabelChanged: ((event: JetElementCustomEvent<ojTreemap<K, D>["colorLabel"]>) => any) | null;
    onDataChanged: ((event: JetElementCustomEvent<ojTreemap<K, D>["data"]>) => any) | null;
    onDisplayLevelsChanged: ((event: JetElementCustomEvent<ojTreemap<K, D>["displayLevels"]>) => any) | null;
    onDrillingChanged: ((event: JetElementCustomEvent<ojTreemap<K, D>["drilling"]>) => any) | null;
    onGroupGapsChanged: ((event: JetElementCustomEvent<ojTreemap<K, D>["groupGaps"]>) => any) | null;
    onHiddenCategoriesChanged: ((event: JetElementCustomEvent<ojTreemap<K, D>["hiddenCategories"]>) => any) | null;
    onHighlightMatchChanged: ((event: JetElementCustomEvent<ojTreemap<K, D>["highlightMatch"]>) => any) | null;
    onHighlightedCategoriesChanged: ((event: JetElementCustomEvent<ojTreemap<K, D>["highlightedCategories"]>) => any) | null;
    onHoverBehaviorChanged: ((event: JetElementCustomEvent<ojTreemap<K, D>["hoverBehavior"]>) => any) | null;
    onHoverBehaviorDelayChanged: ((event: JetElementCustomEvent<ojTreemap<K, D>["hoverBehaviorDelay"]>) => any) | null;
    onIsolatedNodeChanged: ((event: JetElementCustomEvent<ojTreemap<K, D>["isolatedNode"]>) => any) | null;
    onLayoutChanged: ((event: JetElementCustomEvent<ojTreemap<K, D>["layout"]>) => any) | null;
    onNodeContentChanged: ((event: JetElementCustomEvent<ojTreemap<K, D>["nodeContent"]>) => any) | null;
    onNodeDefaultsChanged: ((event: JetElementCustomEvent<ojTreemap<K, D>["nodeDefaults"]>) => any) | null;
    onNodeSeparatorsChanged: ((event: JetElementCustomEvent<ojTreemap<K, D>["nodeSeparators"]>) => any) | null;
    onRootNodeChanged: ((event: JetElementCustomEvent<ojTreemap<K, D>["rootNode"]>) => any) | null;
    onSelectionChanged: ((event: JetElementCustomEvent<ojTreemap<K, D>["selection"]>) => any) | null;
    onSelectionModeChanged: ((event: JetElementCustomEvent<ojTreemap<K, D>["selectionMode"]>) => any) | null;
    onSizeLabelChanged: ((event: JetElementCustomEvent<ojTreemap<K, D>["sizeLabel"]>) => any) | null;
    onSortingChanged: ((event: JetElementCustomEvent<ojTreemap<K, D>["sorting"]>) => any) | null;
    onTooltipChanged: ((event: JetElementCustomEvent<ojTreemap<K, D>["tooltip"]>) => any) | null;
    onTouchResponseChanged: ((event: JetElementCustomEvent<ojTreemap<K, D>["touchResponse"]>) => any) | null;
    onOjBeforeDrill: ((event: ojTreemap.ojBeforeDrill) => any) | null;
    onOjDrill: ((event: ojTreemap.ojDrill) => any) | null;
    addEventListener<T extends keyof ojTreemapEventMap<K, D>>(type: T, listener: (this: HTMLElement, ev: ojTreemapEventMap<K, D>[T]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    getProperty<T extends keyof ojTreemapSettableProperties<K, D>>(property: T): ojTreemap<K, D>[T];
    getProperty(property: string): any;
    setProperty<T extends keyof ojTreemapSettableProperties<K, D>>(property: T, value: ojTreemapSettableProperties<K, D>[T]): void;
    setProperty<T extends string>(property: T, value: JetSetPropertyType<T, ojTreemapSettableProperties<K, D>>): void;
    setProperties(properties: ojTreemapSettablePropertiesLenient<K, D>): void;
    getContextByNode(node: Element): ojTreemap.NodeContext | null;
    getNode(subIdPath: any[]): ojTreemap.DataContext | null;
}
export namespace ojTreemap {
    interface ojBeforeDrill extends CustomEvent<{
        id: any;
        data: object;
        itemData: object;
        [propName: string]: any;
    }> {
    }
    interface ojDrill extends CustomEvent<{
        id: any;
        data: object;
        itemData: object;
        [propName: string]: any;
    }> {
    }
    // tslint:disable-next-line interface-over-type-literal
    type DataContext = {
        color: string;
        label: string;
        selected: boolean;
        size: number;
        tooltip: string;
    };
    // tslint:disable-next-line interface-over-type-literal
    type NodeContentContext<K, D> = {
        bounds: {
            x: number;
            y: number;
            width: number;
            height: number;
        };
        id: K;
        data: object;
        itemData: D;
        componentElement: Element;
    };
    // tslint:disable-next-line interface-over-type-literal
    type NodeContext = {
        subId: string;
        indexPath: number[];
    };
    // tslint:disable-next-line interface-over-type-literal
    type TooltipContext<K, D> = {
        parentElement: Element;
        id: K;
        label: string;
        value: number;
        color: string;
        data: object;
        itemData: D;
        componentElement: Element;
    };
}
export interface ojTreemapEventMap<K, D> extends dvtBaseComponentEventMap<ojTreemapSettableProperties<K, D>> {
    'ojBeforeDrill': ojTreemap.ojBeforeDrill;
    'ojDrill': ojTreemap.ojDrill;
    'animationDurationChanged': JetElementCustomEvent<ojTreemap<K, D>["animationDuration"]>;
    'animationOnDataChangeChanged': JetElementCustomEvent<ojTreemap<K, D>["animationOnDataChange"]>;
    'animationOnDisplayChanged': JetElementCustomEvent<ojTreemap<K, D>["animationOnDisplay"]>;
    'animationUpdateColorChanged': JetElementCustomEvent<ojTreemap<K, D>["animationUpdateColor"]>;
    'asChanged': JetElementCustomEvent<ojTreemap<K, D>["as"]>;
    'colorLabelChanged': JetElementCustomEvent<ojTreemap<K, D>["colorLabel"]>;
    'dataChanged': JetElementCustomEvent<ojTreemap<K, D>["data"]>;
    'displayLevelsChanged': JetElementCustomEvent<ojTreemap<K, D>["displayLevels"]>;
    'drillingChanged': JetElementCustomEvent<ojTreemap<K, D>["drilling"]>;
    'groupGapsChanged': JetElementCustomEvent<ojTreemap<K, D>["groupGaps"]>;
    'hiddenCategoriesChanged': JetElementCustomEvent<ojTreemap<K, D>["hiddenCategories"]>;
    'highlightMatchChanged': JetElementCustomEvent<ojTreemap<K, D>["highlightMatch"]>;
    'highlightedCategoriesChanged': JetElementCustomEvent<ojTreemap<K, D>["highlightedCategories"]>;
    'hoverBehaviorChanged': JetElementCustomEvent<ojTreemap<K, D>["hoverBehavior"]>;
    'hoverBehaviorDelayChanged': JetElementCustomEvent<ojTreemap<K, D>["hoverBehaviorDelay"]>;
    'isolatedNodeChanged': JetElementCustomEvent<ojTreemap<K, D>["isolatedNode"]>;
    'layoutChanged': JetElementCustomEvent<ojTreemap<K, D>["layout"]>;
    'nodeContentChanged': JetElementCustomEvent<ojTreemap<K, D>["nodeContent"]>;
    'nodeDefaultsChanged': JetElementCustomEvent<ojTreemap<K, D>["nodeDefaults"]>;
    'nodeSeparatorsChanged': JetElementCustomEvent<ojTreemap<K, D>["nodeSeparators"]>;
    'rootNodeChanged': JetElementCustomEvent<ojTreemap<K, D>["rootNode"]>;
    'selectionChanged': JetElementCustomEvent<ojTreemap<K, D>["selection"]>;
    'selectionModeChanged': JetElementCustomEvent<ojTreemap<K, D>["selectionMode"]>;
    'sizeLabelChanged': JetElementCustomEvent<ojTreemap<K, D>["sizeLabel"]>;
    'sortingChanged': JetElementCustomEvent<ojTreemap<K, D>["sorting"]>;
    'tooltipChanged': JetElementCustomEvent<ojTreemap<K, D>["tooltip"]>;
    'touchResponseChanged': JetElementCustomEvent<ojTreemap<K, D>["touchResponse"]>;
}
export interface ojTreemapSettableProperties<K, D> extends dvtBaseComponentSettableProperties {
    animationDuration: number;
    animationOnDataChange: 'auto' | 'none';
    animationOnDisplay: 'auto' | 'none';
    animationUpdateColor: string;
    as: string;
    colorLabel: string;
    data: DataProvider<K, D> | null;
    displayLevels: number;
    drilling: 'on' | 'off';
    groupGaps: 'all' | 'none' | 'outer';
    hiddenCategories: string[];
    highlightMatch: 'any' | 'all';
    highlightedCategories: string[];
    hoverBehavior: 'dim' | 'none';
    hoverBehaviorDelay: number;
    isolatedNode: any;
    layout: 'sliceAndDiceHorizontal' | 'sliceAndDiceVertical' | 'squarified';
    nodeContent: {
        renderer: ((context: ojTreemap.NodeContentContext<K, D>) => ({
            insert: Element | string;
        }));
    };
    nodeDefaults: {
        groupLabelDisplay: 'node' | 'off' | 'header';
        header: {
            backgroundColor: string;
            borderColor: string;
            hoverBackgroundColor: string;
            hoverInnerColor: string;
            hoverOuterColor: string;
            isolate: 'off' | 'on';
            labelHalign: 'center' | 'end' | 'start';
            labelStyle: object;
            selectedBackgroundColor: string;
            selectedInnerColor: string;
            selectedOuterColor: string;
            useNodeColor: 'on' | 'off';
        };
        hoverColor: string;
        labelDisplay: 'off' | 'node';
        labelHalign: 'start' | 'end' | 'center';
        labelMinLength: number;
        labelStyle: object;
        labelValign: 'top' | 'bottom' | 'center';
        selectedInnerColor: string;
        selectedOuterColor: string;
    };
    nodeSeparators: 'bevels' | 'gaps';
    rootNode: any;
    selection: any[];
    selectionMode: 'none' | 'single' | 'multiple';
    sizeLabel: string;
    sorting: 'on' | 'off';
    tooltip: {
        renderer: ((context: ojTreemap.TooltipContext<K, D>) => ({
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
        labelColor?: string;
        labelCountWithTotal?: string;
        labelDataVisualization?: string;
        labelInvalidData?: string;
        labelNoData?: string;
        labelSize?: string;
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
        tooltipIsolate?: string;
        tooltipRestore?: string;
    };
}
export interface ojTreemapSettablePropertiesLenient<K, D> extends Partial<ojTreemapSettableProperties<K, D>> {
    [key: string]: any;
}
export interface ojTreemapNode extends JetElement<ojTreemapNodeSettableProperties> {
    categories?: string[];
    color?: string;
    drilling?: 'on' | 'off' | 'inherit';
    groupLabelDisplay?: 'node' | 'off' | 'header';
    header?: {
        isolate?: 'off' | 'on';
        labelHalign?: 'center' | 'end' | 'start';
        labelStyle?: object;
        useNodeColor?: 'on' | 'off';
    };
    label?: string;
    labelDisplay?: 'off' | 'node';
    labelHalign?: 'start' | 'end' | 'center';
    labelStyle?: object;
    labelValign?: 'top' | 'bottom' | 'center';
    pattern?: 'smallChecker' | 'smallCrosshatch' | 'smallDiagonalLeft' | 'smallDiagonalRight' | 'smallDiamond' | 'smallTriangle' | 'largeChecker' | 'largeCrosshatch' | 'largeDiagonalLeft' |
       'largeDiagonalRight' | 'largeDiamond' | 'largeTriangle' | 'none';
    selectable?: 'off' | 'auto';
    shortDesc?: string;
    svgClassName?: string;
    svgStyle?: object;
    value: number;
    onCategoriesChanged: ((event: JetElementCustomEvent<ojTreemapNode["categories"]>) => any) | null;
    onColorChanged: ((event: JetElementCustomEvent<ojTreemapNode["color"]>) => any) | null;
    onDrillingChanged: ((event: JetElementCustomEvent<ojTreemapNode["drilling"]>) => any) | null;
    onGroupLabelDisplayChanged: ((event: JetElementCustomEvent<ojTreemapNode["groupLabelDisplay"]>) => any) | null;
    onHeaderChanged: ((event: JetElementCustomEvent<ojTreemapNode["header"]>) => any) | null;
    onLabelChanged: ((event: JetElementCustomEvent<ojTreemapNode["label"]>) => any) | null;
    onLabelDisplayChanged: ((event: JetElementCustomEvent<ojTreemapNode["labelDisplay"]>) => any) | null;
    onLabelHalignChanged: ((event: JetElementCustomEvent<ojTreemapNode["labelHalign"]>) => any) | null;
    onLabelStyleChanged: ((event: JetElementCustomEvent<ojTreemapNode["labelStyle"]>) => any) | null;
    onLabelValignChanged: ((event: JetElementCustomEvent<ojTreemapNode["labelValign"]>) => any) | null;
    onPatternChanged: ((event: JetElementCustomEvent<ojTreemapNode["pattern"]>) => any) | null;
    onSelectableChanged: ((event: JetElementCustomEvent<ojTreemapNode["selectable"]>) => any) | null;
    onShortDescChanged: ((event: JetElementCustomEvent<ojTreemapNode["shortDesc"]>) => any) | null;
    onSvgClassNameChanged: ((event: JetElementCustomEvent<ojTreemapNode["svgClassName"]>) => any) | null;
    onSvgStyleChanged: ((event: JetElementCustomEvent<ojTreemapNode["svgStyle"]>) => any) | null;
    onValueChanged: ((event: JetElementCustomEvent<ojTreemapNode["value"]>) => any) | null;
    addEventListener<T extends keyof ojTreemapNodeEventMap>(type: T, listener: (this: HTMLElement, ev: ojTreemapNodeEventMap[T]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    getProperty<T extends keyof ojTreemapNodeSettableProperties>(property: T): ojTreemapNode[T];
    getProperty(property: string): any;
    setProperty<T extends keyof ojTreemapNodeSettableProperties>(property: T, value: ojTreemapNodeSettableProperties[T]): void;
    setProperty<T extends string>(property: T, value: JetSetPropertyType<T, ojTreemapNodeSettableProperties>): void;
    setProperties(properties: ojTreemapNodeSettablePropertiesLenient): void;
}
export interface ojTreemapNodeEventMap extends HTMLElementEventMap {
    'categoriesChanged': JetElementCustomEvent<ojTreemapNode["categories"]>;
    'colorChanged': JetElementCustomEvent<ojTreemapNode["color"]>;
    'drillingChanged': JetElementCustomEvent<ojTreemapNode["drilling"]>;
    'groupLabelDisplayChanged': JetElementCustomEvent<ojTreemapNode["groupLabelDisplay"]>;
    'headerChanged': JetElementCustomEvent<ojTreemapNode["header"]>;
    'labelChanged': JetElementCustomEvent<ojTreemapNode["label"]>;
    'labelDisplayChanged': JetElementCustomEvent<ojTreemapNode["labelDisplay"]>;
    'labelHalignChanged': JetElementCustomEvent<ojTreemapNode["labelHalign"]>;
    'labelStyleChanged': JetElementCustomEvent<ojTreemapNode["labelStyle"]>;
    'labelValignChanged': JetElementCustomEvent<ojTreemapNode["labelValign"]>;
    'patternChanged': JetElementCustomEvent<ojTreemapNode["pattern"]>;
    'selectableChanged': JetElementCustomEvent<ojTreemapNode["selectable"]>;
    'shortDescChanged': JetElementCustomEvent<ojTreemapNode["shortDesc"]>;
    'svgClassNameChanged': JetElementCustomEvent<ojTreemapNode["svgClassName"]>;
    'svgStyleChanged': JetElementCustomEvent<ojTreemapNode["svgStyle"]>;
    'valueChanged': JetElementCustomEvent<ojTreemapNode["value"]>;
}
export interface ojTreemapNodeSettableProperties extends JetSettableProperties {
    categories?: string[];
    color?: string;
    drilling?: 'on' | 'off' | 'inherit';
    groupLabelDisplay?: 'node' | 'off' | 'header';
    header?: {
        isolate?: 'off' | 'on';
        labelHalign?: 'center' | 'end' | 'start';
        labelStyle?: object;
        useNodeColor?: 'on' | 'off';
    };
    label?: string;
    labelDisplay?: 'off' | 'node';
    labelHalign?: 'start' | 'end' | 'center';
    labelStyle?: object;
    labelValign?: 'top' | 'bottom' | 'center';
    pattern?: 'smallChecker' | 'smallCrosshatch' | 'smallDiagonalLeft' | 'smallDiagonalRight' | 'smallDiamond' | 'smallTriangle' | 'largeChecker' | 'largeCrosshatch' | 'largeDiagonalLeft' |
       'largeDiagonalRight' | 'largeDiamond' | 'largeTriangle' | 'none';
    selectable?: 'off' | 'auto';
    shortDesc?: string;
    svgClassName?: string;
    svgStyle?: object;
    value: number;
}
export interface ojTreemapNodeSettablePropertiesLenient extends Partial<ojTreemapNodeSettableProperties> {
    [key: string]: any;
}
