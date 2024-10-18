import { JetElement, JetElementCustomEvent, JetSetPropertyType, JetSettableProperties } from "..";
import { DataProvider } from "../ojdataprovider";
import { dvtBaseComponent, dvtBaseComponentEventMap, dvtBaseComponentSettableProperties } from "../ojdvt-base";
import { KeySet } from "../ojkeyset";
export interface ojSunburst<K, D> extends dvtBaseComponent<ojSunburstSettableProperties<K, D>> {
    animationDuration: number;
    animationOnDataChange: "auto" | "none";
    animationOnDisplay: "auto" | "none";
    animationUpdateColor: string;
    as: string;
    colorLabel: string;
    data: DataProvider<K, D> | null;
    displayLevels: number;
    drilling: "on" | "off";
    expanded: KeySet<K>;
    hiddenCategories: string[];
    highlightMatch: "any" | "all";
    highlightedCategories: string[];
    hoverBehavior: "dim" | "none";
    hoverBehaviorDelay: number;
    nodeDefaults: {
        borderColor: string;
        borderWidth: number;
        hoverColor: string;
        labelDisplay: "horizontal" | "rotated" | "off" | "auto";
        labelHalign: "inner" | "outer" | "center";
        labelMinLength: number;
        labelStyle: object;
        selectedInnerColor: string;
        selectedOuterColor: string;
        showDisclosure: "on" | "off";
    };
    rootNode: any;
    rootNodeContent: {
        renderer: (context: ojSunburst.RootNodeContext<K, D>) => {
            insert: Element | string;
        };
    };
    rotation: "off" | "on";
    selection: any[];
    selectionMode: "none" | "single" | "multiple";
    sizeLabel: string;
    sorting: "on" | "off";
    startAngle: number;
    tooltip: {
        renderer: (context: ojSunburst.TooltipContext<K, D>) => {
            insert: Element | string;
        } | {
            preventDefault: boolean;
        };
    };
    touchResponse: "touchStart" | "auto";
    translations: {
        componentName?: string | undefined;
        labelAndValue?: string | undefined;
        labelClearSelection?: string | undefined;
        labelColor?: string | undefined;
        labelCountWithTotal?: string | undefined;
        labelDataVisualization?: string | undefined;
        labelInvalidData?: string | undefined;
        labelNoData?: string | undefined;
        labelSize?: string | undefined;
        stateCollapsed?: string | undefined;
        stateDrillable?: string | undefined;
        stateExpanded?: string | undefined;
        stateHidden?: string | undefined;
        stateIsolated?: string | undefined;
        stateMaximized?: string | undefined;
        stateMinimized?: string | undefined;
        stateSelected?: string | undefined;
        stateUnselected?: string | undefined;
        stateVisible?: string | undefined;
        tooltipCollapse?: string | undefined;
        tooltipExpand?: string | undefined;
    };
    onAnimationDurationChanged: ((event: JetElementCustomEvent<ojSunburst<K, D>["animationDuration"]>) => any) | null;
    onAnimationOnDataChangeChanged:
        | ((event: JetElementCustomEvent<ojSunburst<K, D>["animationOnDataChange"]>) => any)
        | null;
    onAnimationOnDisplayChanged: ((event: JetElementCustomEvent<ojSunburst<K, D>["animationOnDisplay"]>) => any) | null;
    onAnimationUpdateColorChanged:
        | ((event: JetElementCustomEvent<ojSunburst<K, D>["animationUpdateColor"]>) => any)
        | null;
    onAsChanged: ((event: JetElementCustomEvent<ojSunburst<K, D>["as"]>) => any) | null;
    onColorLabelChanged: ((event: JetElementCustomEvent<ojSunburst<K, D>["colorLabel"]>) => any) | null;
    onDataChanged: ((event: JetElementCustomEvent<ojSunburst<K, D>["data"]>) => any) | null;
    onDisplayLevelsChanged: ((event: JetElementCustomEvent<ojSunburst<K, D>["displayLevels"]>) => any) | null;
    onDrillingChanged: ((event: JetElementCustomEvent<ojSunburst<K, D>["drilling"]>) => any) | null;
    onExpandedChanged: ((event: JetElementCustomEvent<ojSunburst<K, D>["expanded"]>) => any) | null;
    onHiddenCategoriesChanged: ((event: JetElementCustomEvent<ojSunburst<K, D>["hiddenCategories"]>) => any) | null;
    onHighlightMatchChanged: ((event: JetElementCustomEvent<ojSunburst<K, D>["highlightMatch"]>) => any) | null;
    onHighlightedCategoriesChanged:
        | ((event: JetElementCustomEvent<ojSunburst<K, D>["highlightedCategories"]>) => any)
        | null;
    onHoverBehaviorChanged: ((event: JetElementCustomEvent<ojSunburst<K, D>["hoverBehavior"]>) => any) | null;
    onHoverBehaviorDelayChanged: ((event: JetElementCustomEvent<ojSunburst<K, D>["hoverBehaviorDelay"]>) => any) | null;
    onNodeDefaultsChanged: ((event: JetElementCustomEvent<ojSunburst<K, D>["nodeDefaults"]>) => any) | null;
    onRootNodeChanged: ((event: JetElementCustomEvent<ojSunburst<K, D>["rootNode"]>) => any) | null;
    onRootNodeContentChanged: ((event: JetElementCustomEvent<ojSunburst<K, D>["rootNodeContent"]>) => any) | null;
    onRotationChanged: ((event: JetElementCustomEvent<ojSunburst<K, D>["rotation"]>) => any) | null;
    onSelectionChanged: ((event: JetElementCustomEvent<ojSunburst<K, D>["selection"]>) => any) | null;
    onSelectionModeChanged: ((event: JetElementCustomEvent<ojSunburst<K, D>["selectionMode"]>) => any) | null;
    onSizeLabelChanged: ((event: JetElementCustomEvent<ojSunburst<K, D>["sizeLabel"]>) => any) | null;
    onSortingChanged: ((event: JetElementCustomEvent<ojSunburst<K, D>["sorting"]>) => any) | null;
    onStartAngleChanged: ((event: JetElementCustomEvent<ojSunburst<K, D>["startAngle"]>) => any) | null;
    onTooltipChanged: ((event: JetElementCustomEvent<ojSunburst<K, D>["tooltip"]>) => any) | null;
    onTouchResponseChanged: ((event: JetElementCustomEvent<ojSunburst<K, D>["touchResponse"]>) => any) | null;
    onOjBeforeCollapse: ((event: ojSunburst.ojBeforeCollapse) => any) | null;
    onOjBeforeDrill: ((event: ojSunburst.ojBeforeDrill) => any) | null;
    onOjBeforeExpand: ((event: ojSunburst.ojBeforeExpand) => any) | null;
    onOjCollapse: ((event: ojSunburst.ojCollapse) => any) | null;
    onOjDrill: ((event: ojSunburst.ojDrill) => any) | null;
    onOjExpand: ((event: ojSunburst.ojExpand) => any) | null;
    onOjRotateInput: ((event: ojSunburst.ojRotateInput) => any) | null;
    addEventListener<T extends keyof ojSunburstEventMap<K, D>>(
        type: T,
        listener: (this: HTMLElement, ev: ojSunburstEventMap<K, D>[T]) => any,
        useCapture?: boolean,
    ): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    getProperty<T extends keyof ojSunburstSettableProperties<K, D>>(property: T): ojSunburst<K, D>[T];
    getProperty(property: string): any;
    setProperty<T extends keyof ojSunburstSettableProperties<K, D>>(
        property: T,
        value: ojSunburstSettableProperties<K, D>[T],
    ): void;
    setProperty<T extends string>(property: T, value: JetSetPropertyType<T, ojSunburstSettableProperties<K, D>>): void;
    setProperties(properties: ojSunburstSettablePropertiesLenient<K, D>): void;
    getContextByNode(node: Element): ojSunburst.NodeContext | null;
    getNode(subIdPath: any[]): ojSunburst.DataContext | null;
}
export namespace ojSunburst {
    interface ojBeforeCollapse extends
        CustomEvent<{
            id: any;
            data: object;
            itemData: object;
            [propName: string]: any;
        }>
    {
    }
    interface ojBeforeDrill extends
        CustomEvent<{
            id: any;
            data: object;
            itemData: object;
            [propName: string]: any;
        }>
    {
    }
    interface ojBeforeExpand extends
        CustomEvent<{
            id: any;
            data: object;
            itemData: object;
            [propName: string]: any;
        }>
    {
    }
    interface ojCollapse extends
        CustomEvent<{
            id: any;
            data: object;
            itemData: object;
            [propName: string]: any;
        }>
    {
    }
    interface ojDrill extends
        CustomEvent<{
            id: any;
            data: object;
            itemData: object;
            [propName: string]: any;
        }>
    {
    }
    interface ojExpand extends
        CustomEvent<{
            id: any;
            data: object;
            itemData: object;
            [propName: string]: any;
        }>
    {
    }
    interface ojRotateInput extends
        CustomEvent<{
            value: number;
            [propName: string]: any;
        }>
    {
    }
    // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
    type DataContext = {
        color: string;
        label: string;
        selected: boolean;
        size: number;
        tooltip: string;
    };
    // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
    type NodeContext = {
        subId: string;
        indexPath: number[];
    };
    // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
    type RootNodeContext<K, D> = {
        outerBounds: {
            x: number;
            y: number;
            width: number;
            height: number;
        };
        innerBounds: {
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
    // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
    type TooltipContext<K, D> = {
        parentElement: Element;
        id: K;
        label: string;
        value: number;
        radius: number;
        color: string;
        data: object;
        itemData: D;
        componentElement: Element;
    };
}
export interface ojSunburstEventMap<K, D> extends dvtBaseComponentEventMap<ojSunburstSettableProperties<K, D>> {
    "ojBeforeCollapse": ojSunburst.ojBeforeCollapse;
    "ojBeforeDrill": ojSunburst.ojBeforeDrill;
    "ojBeforeExpand": ojSunburst.ojBeforeExpand;
    "ojCollapse": ojSunburst.ojCollapse;
    "ojDrill": ojSunburst.ojDrill;
    "ojExpand": ojSunburst.ojExpand;
    "ojRotateInput": ojSunburst.ojRotateInput;
    "animationDurationChanged": JetElementCustomEvent<ojSunburst<K, D>["animationDuration"]>;
    "animationOnDataChangeChanged": JetElementCustomEvent<ojSunburst<K, D>["animationOnDataChange"]>;
    "animationOnDisplayChanged": JetElementCustomEvent<ojSunburst<K, D>["animationOnDisplay"]>;
    "animationUpdateColorChanged": JetElementCustomEvent<ojSunburst<K, D>["animationUpdateColor"]>;
    "asChanged": JetElementCustomEvent<ojSunburst<K, D>["as"]>;
    "colorLabelChanged": JetElementCustomEvent<ojSunburst<K, D>["colorLabel"]>;
    "dataChanged": JetElementCustomEvent<ojSunburst<K, D>["data"]>;
    "displayLevelsChanged": JetElementCustomEvent<ojSunburst<K, D>["displayLevels"]>;
    "drillingChanged": JetElementCustomEvent<ojSunburst<K, D>["drilling"]>;
    "expandedChanged": JetElementCustomEvent<ojSunburst<K, D>["expanded"]>;
    "hiddenCategoriesChanged": JetElementCustomEvent<ojSunburst<K, D>["hiddenCategories"]>;
    "highlightMatchChanged": JetElementCustomEvent<ojSunburst<K, D>["highlightMatch"]>;
    "highlightedCategoriesChanged": JetElementCustomEvent<ojSunburst<K, D>["highlightedCategories"]>;
    "hoverBehaviorChanged": JetElementCustomEvent<ojSunburst<K, D>["hoverBehavior"]>;
    "hoverBehaviorDelayChanged": JetElementCustomEvent<ojSunburst<K, D>["hoverBehaviorDelay"]>;
    "nodeDefaultsChanged": JetElementCustomEvent<ojSunburst<K, D>["nodeDefaults"]>;
    "rootNodeChanged": JetElementCustomEvent<ojSunburst<K, D>["rootNode"]>;
    "rootNodeContentChanged": JetElementCustomEvent<ojSunburst<K, D>["rootNodeContent"]>;
    "rotationChanged": JetElementCustomEvent<ojSunburst<K, D>["rotation"]>;
    "selectionChanged": JetElementCustomEvent<ojSunburst<K, D>["selection"]>;
    "selectionModeChanged": JetElementCustomEvent<ojSunburst<K, D>["selectionMode"]>;
    "sizeLabelChanged": JetElementCustomEvent<ojSunburst<K, D>["sizeLabel"]>;
    "sortingChanged": JetElementCustomEvent<ojSunburst<K, D>["sorting"]>;
    "startAngleChanged": JetElementCustomEvent<ojSunburst<K, D>["startAngle"]>;
    "tooltipChanged": JetElementCustomEvent<ojSunburst<K, D>["tooltip"]>;
    "touchResponseChanged": JetElementCustomEvent<ojSunburst<K, D>["touchResponse"]>;
}
export interface ojSunburstSettableProperties<K, D> extends dvtBaseComponentSettableProperties {
    animationDuration: number;
    animationOnDataChange: "auto" | "none";
    animationOnDisplay: "auto" | "none";
    animationUpdateColor: string;
    as: string;
    colorLabel: string;
    data: DataProvider<K, D> | null;
    displayLevels: number;
    drilling: "on" | "off";
    expanded: KeySet<K>;
    hiddenCategories: string[];
    highlightMatch: "any" | "all";
    highlightedCategories: string[];
    hoverBehavior: "dim" | "none";
    hoverBehaviorDelay: number;
    nodeDefaults: {
        borderColor: string;
        borderWidth: number;
        hoverColor: string;
        labelDisplay: "horizontal" | "rotated" | "off" | "auto";
        labelHalign: "inner" | "outer" | "center";
        labelMinLength: number;
        labelStyle: object;
        selectedInnerColor: string;
        selectedOuterColor: string;
        showDisclosure: "on" | "off";
    };
    rootNode: any;
    rootNodeContent: {
        renderer: (context: ojSunburst.RootNodeContext<K, D>) => {
            insert: Element | string;
        };
    };
    rotation: "off" | "on";
    selection: any[];
    selectionMode: "none" | "single" | "multiple";
    sizeLabel: string;
    sorting: "on" | "off";
    startAngle: number;
    tooltip: {
        renderer: (context: ojSunburst.TooltipContext<K, D>) => {
            insert: Element | string;
        } | {
            preventDefault: boolean;
        };
    };
    touchResponse: "touchStart" | "auto";
    translations: {
        componentName?: string | undefined;
        labelAndValue?: string | undefined;
        labelClearSelection?: string | undefined;
        labelColor?: string | undefined;
        labelCountWithTotal?: string | undefined;
        labelDataVisualization?: string | undefined;
        labelInvalidData?: string | undefined;
        labelNoData?: string | undefined;
        labelSize?: string | undefined;
        stateCollapsed?: string | undefined;
        stateDrillable?: string | undefined;
        stateExpanded?: string | undefined;
        stateHidden?: string | undefined;
        stateIsolated?: string | undefined;
        stateMaximized?: string | undefined;
        stateMinimized?: string | undefined;
        stateSelected?: string | undefined;
        stateUnselected?: string | undefined;
        stateVisible?: string | undefined;
        tooltipCollapse?: string | undefined;
        tooltipExpand?: string | undefined;
    };
}
export interface ojSunburstSettablePropertiesLenient<K, D> extends Partial<ojSunburstSettableProperties<K, D>> {
    [key: string]: any;
}
export interface ojSunburstNode extends JetElement<ojSunburstNodeSettableProperties> {
    borderColor?: string | undefined;
    borderWidth?: number | undefined;
    categories?: string[] | undefined;
    color?: string | undefined;
    drilling?: "on" | "off" | "inherit" | undefined;
    label?: string | undefined;
    labelDisplay?: "horizontal" | "rotated" | "off" | "auto" | undefined;
    labelHalign?: "inner" | "outer" | "center" | undefined;
    labelStyle?: object | undefined;
    pattern?:
        | "smallChecker"
        | "smallCrosshatch"
        | "smallDiagonalLeft"
        | "smallDiagonalRight"
        | "smallDiamond"
        | "smallTriangle"
        | "largeChecker"
        | "largeCrosshatch"
        | "largeDiagonalLeft"
        | "largeDiagonalRight"
        | "largeDiamond"
        | "largeTriangle"
        | "none"
        | undefined;
    radius?: number | undefined;
    selectable?: "off" | "auto" | undefined;
    shortDesc?: string | undefined;
    showDisclosure?: "on" | "off" | "inherit" | undefined;
    svgClassName?: string | undefined;
    svgStyle?: object | undefined;
    value: number;
    onBorderColorChanged: ((event: JetElementCustomEvent<ojSunburstNode["borderColor"]>) => any) | null;
    onBorderWidthChanged: ((event: JetElementCustomEvent<ojSunburstNode["borderWidth"]>) => any) | null;
    onCategoriesChanged: ((event: JetElementCustomEvent<ojSunburstNode["categories"]>) => any) | null;
    onColorChanged: ((event: JetElementCustomEvent<ojSunburstNode["color"]>) => any) | null;
    onDrillingChanged: ((event: JetElementCustomEvent<ojSunburstNode["drilling"]>) => any) | null;
    onLabelChanged: ((event: JetElementCustomEvent<ojSunburstNode["label"]>) => any) | null;
    onLabelDisplayChanged: ((event: JetElementCustomEvent<ojSunburstNode["labelDisplay"]>) => any) | null;
    onLabelHalignChanged: ((event: JetElementCustomEvent<ojSunburstNode["labelHalign"]>) => any) | null;
    onLabelStyleChanged: ((event: JetElementCustomEvent<ojSunburstNode["labelStyle"]>) => any) | null;
    onPatternChanged: ((event: JetElementCustomEvent<ojSunburstNode["pattern"]>) => any) | null;
    onRadiusChanged: ((event: JetElementCustomEvent<ojSunburstNode["radius"]>) => any) | null;
    onSelectableChanged: ((event: JetElementCustomEvent<ojSunburstNode["selectable"]>) => any) | null;
    onShortDescChanged: ((event: JetElementCustomEvent<ojSunburstNode["shortDesc"]>) => any) | null;
    onShowDisclosureChanged: ((event: JetElementCustomEvent<ojSunburstNode["showDisclosure"]>) => any) | null;
    onSvgClassNameChanged: ((event: JetElementCustomEvent<ojSunburstNode["svgClassName"]>) => any) | null;
    onSvgStyleChanged: ((event: JetElementCustomEvent<ojSunburstNode["svgStyle"]>) => any) | null;
    onValueChanged: ((event: JetElementCustomEvent<ojSunburstNode["value"]>) => any) | null;
    addEventListener<T extends keyof ojSunburstNodeEventMap>(
        type: T,
        listener: (this: HTMLElement, ev: ojSunburstNodeEventMap[T]) => any,
        useCapture?: boolean,
    ): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    getProperty<T extends keyof ojSunburstNodeSettableProperties>(property: T): ojSunburstNode[T];
    getProperty(property: string): any;
    setProperty<T extends keyof ojSunburstNodeSettableProperties>(
        property: T,
        value: ojSunburstNodeSettableProperties[T],
    ): void;
    setProperty<T extends string>(property: T, value: JetSetPropertyType<T, ojSunburstNodeSettableProperties>): void;
    setProperties(properties: ojSunburstNodeSettablePropertiesLenient): void;
}
export interface ojSunburstNodeEventMap extends HTMLElementEventMap {
    "borderColorChanged": JetElementCustomEvent<ojSunburstNode["borderColor"]>;
    "borderWidthChanged": JetElementCustomEvent<ojSunburstNode["borderWidth"]>;
    "categoriesChanged": JetElementCustomEvent<ojSunburstNode["categories"]>;
    "colorChanged": JetElementCustomEvent<ojSunburstNode["color"]>;
    "drillingChanged": JetElementCustomEvent<ojSunburstNode["drilling"]>;
    "labelChanged": JetElementCustomEvent<ojSunburstNode["label"]>;
    "labelDisplayChanged": JetElementCustomEvent<ojSunburstNode["labelDisplay"]>;
    "labelHalignChanged": JetElementCustomEvent<ojSunburstNode["labelHalign"]>;
    "labelStyleChanged": JetElementCustomEvent<ojSunburstNode["labelStyle"]>;
    "patternChanged": JetElementCustomEvent<ojSunburstNode["pattern"]>;
    "radiusChanged": JetElementCustomEvent<ojSunburstNode["radius"]>;
    "selectableChanged": JetElementCustomEvent<ojSunburstNode["selectable"]>;
    "shortDescChanged": JetElementCustomEvent<ojSunburstNode["shortDesc"]>;
    "showDisclosureChanged": JetElementCustomEvent<ojSunburstNode["showDisclosure"]>;
    "svgClassNameChanged": JetElementCustomEvent<ojSunburstNode["svgClassName"]>;
    "svgStyleChanged": JetElementCustomEvent<ojSunburstNode["svgStyle"]>;
    "valueChanged": JetElementCustomEvent<ojSunburstNode["value"]>;
}
export interface ojSunburstNodeSettableProperties extends JetSettableProperties {
    borderColor?: string | undefined;
    borderWidth?: number | undefined;
    categories?: string[] | undefined;
    color?: string | undefined;
    drilling?: "on" | "off" | "inherit" | undefined;
    label?: string | undefined;
    labelDisplay?: "horizontal" | "rotated" | "off" | "auto" | undefined;
    labelHalign?: "inner" | "outer" | "center" | undefined;
    labelStyle?: object | undefined;
    pattern?:
        | "smallChecker"
        | "smallCrosshatch"
        | "smallDiagonalLeft"
        | "smallDiagonalRight"
        | "smallDiamond"
        | "smallTriangle"
        | "largeChecker"
        | "largeCrosshatch"
        | "largeDiagonalLeft"
        | "largeDiagonalRight"
        | "largeDiamond"
        | "largeTriangle"
        | "none"
        | undefined;
    radius?: number | undefined;
    selectable?: "off" | "auto" | undefined;
    shortDesc?: string | undefined;
    showDisclosure?: "on" | "off" | "inherit" | undefined;
    svgClassName?: string | undefined;
    svgStyle?: object | undefined;
    value: number;
}
export interface ojSunburstNodeSettablePropertiesLenient extends Partial<ojSunburstNodeSettableProperties> {
    [key: string]: any;
}
