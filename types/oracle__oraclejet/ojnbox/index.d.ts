import { JetElement, JetElementCustomEvent, JetSetPropertyType, JetSettableProperties } from "..";
import { DataProvider } from "../ojdataprovider";
import { dvtBaseComponent, dvtBaseComponentEventMap, dvtBaseComponentSettableProperties } from "../ojdvt-base";
export interface ojNBox<K, D> extends dvtBaseComponent<ojNBoxSettableProperties<K, D>> {
    animationOnDataChange: "auto" | "none";
    animationOnDisplay: "auto" | "none";
    as: string;
    cellContent: "counts" | "auto";
    cellMaximize: "off" | "on";
    cells: Promise<ojNBox.Cell[]> | null;
    columns: Promise<ojNBox.Column[]> | null;
    columnsTitle: string;
    countLabel: (context: ojNBox.CountLabelContext) => string | null;
    data: DataProvider<K, D> | null;
    groupAttributes: "color" | "indicatorColor" | "indicatorIconColor" | "indicatorIconPattern" | "indicatorIconShape";
    groupBehavior: "acrossCells" | "none" | "withinCell";
    hiddenCategories: string[];
    highlightMatch: "any" | "all";
    highlightedCategories: string[];
    hoverBehavior: "dim" | "none";
    labelTruncation: "ifRequired" | "on";
    maximizedColumn: string;
    maximizedRow: string;
    otherColor: string;
    otherThreshold: number;
    rows: Promise<ojNBox.Row[]> | null;
    rowsTitle: string;
    selection: K[];
    selectionMode: "none" | "single" | "multiple";
    styleDefaults: {
        animationDuration: number;
        cellDefaults: {
            labelHalign: "center" | "end" | "start";
            labelStyle: object;
            maximizedSvgStyle: object;
            minimizedSvgStyle: object;
            showCount: "on" | "off" | "auto";
            svgStyle: object;
        };
        columnLabelStyle: object;
        columnsTitleStyle: object;
        hoverBehaviorDelay: number;
        nodeDefaults: {
            borderColor: string;
            borderWidth: number;
            color: string;
            iconDefaults: {
                borderColor: string;
                borderRadius: string;
                borderWidth: number;
                color: string;
                height: number;
                opacity: number;
                pattern:
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
                    | "none";
                shape:
                    | "circle"
                    | "ellipse"
                    | "square"
                    | "plus"
                    | "diamond"
                    | "triangleUp"
                    | "triangleDown"
                    | "human"
                    | "rectangle"
                    | "star";
                source: string;
                width: number;
            };
            indicatorColor: string;
            indicatorIconDefaults: {
                borderColor: string;
                borderRadius: string;
                borderWidth: number;
                color: string;
                height: number;
                opacity: number;
                pattern:
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
                    | "none";
                shape:
                    | "circle"
                    | "ellipse"
                    | "square"
                    | "plus"
                    | "diamond"
                    | "triangleUp"
                    | "triangleDown"
                    | "human"
                    | "rectangle"
                    | "star";
                source: string;
                width: number;
            };
            labelStyle: object;
            secondaryLabelStyle: object;
        };
        rowLabelStyle: object;
        rowsTitleStyle: object;
    };
    tooltip: {
        renderer:
            | ((context: ojNBox.TooltipContext<K>) => {
                insert: Element | string;
            } | {
                preventDefault: boolean;
            })
            | null;
    };
    touchResponse: "touchStart" | "auto";
    translations: {
        componentName?: string | undefined;
        highlightedCount?: string | undefined;
        labelAdditionalData?: string | undefined;
        labelAndValue?: string | undefined;
        labelClearSelection?: string | undefined;
        labelCountWithTotal?: string | undefined;
        labelDataVisualization?: string | undefined;
        labelGroup?: string | undefined;
        labelInvalidData?: string | undefined;
        labelNoData?: string | undefined;
        labelOther?: string | undefined;
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
    };
    onAnimationOnDataChangeChanged:
        | ((event: JetElementCustomEvent<ojNBox<K, D>["animationOnDataChange"]>) => any)
        | null;
    onAnimationOnDisplayChanged: ((event: JetElementCustomEvent<ojNBox<K, D>["animationOnDisplay"]>) => any) | null;
    onAsChanged: ((event: JetElementCustomEvent<ojNBox<K, D>["as"]>) => any) | null;
    onCellContentChanged: ((event: JetElementCustomEvent<ojNBox<K, D>["cellContent"]>) => any) | null;
    onCellMaximizeChanged: ((event: JetElementCustomEvent<ojNBox<K, D>["cellMaximize"]>) => any) | null;
    onCellsChanged: ((event: JetElementCustomEvent<ojNBox<K, D>["cells"]>) => any) | null;
    onColumnsChanged: ((event: JetElementCustomEvent<ojNBox<K, D>["columns"]>) => any) | null;
    onColumnsTitleChanged: ((event: JetElementCustomEvent<ojNBox<K, D>["columnsTitle"]>) => any) | null;
    onCountLabelChanged: ((event: JetElementCustomEvent<ojNBox<K, D>["countLabel"]>) => any) | null;
    onDataChanged: ((event: JetElementCustomEvent<ojNBox<K, D>["data"]>) => any) | null;
    onGroupAttributesChanged: ((event: JetElementCustomEvent<ojNBox<K, D>["groupAttributes"]>) => any) | null;
    onGroupBehaviorChanged: ((event: JetElementCustomEvent<ojNBox<K, D>["groupBehavior"]>) => any) | null;
    onHiddenCategoriesChanged: ((event: JetElementCustomEvent<ojNBox<K, D>["hiddenCategories"]>) => any) | null;
    onHighlightMatchChanged: ((event: JetElementCustomEvent<ojNBox<K, D>["highlightMatch"]>) => any) | null;
    onHighlightedCategoriesChanged:
        | ((event: JetElementCustomEvent<ojNBox<K, D>["highlightedCategories"]>) => any)
        | null;
    onHoverBehaviorChanged: ((event: JetElementCustomEvent<ojNBox<K, D>["hoverBehavior"]>) => any) | null;
    onLabelTruncationChanged: ((event: JetElementCustomEvent<ojNBox<K, D>["labelTruncation"]>) => any) | null;
    onMaximizedColumnChanged: ((event: JetElementCustomEvent<ojNBox<K, D>["maximizedColumn"]>) => any) | null;
    onMaximizedRowChanged: ((event: JetElementCustomEvent<ojNBox<K, D>["maximizedRow"]>) => any) | null;
    onOtherColorChanged: ((event: JetElementCustomEvent<ojNBox<K, D>["otherColor"]>) => any) | null;
    onOtherThresholdChanged: ((event: JetElementCustomEvent<ojNBox<K, D>["otherThreshold"]>) => any) | null;
    onRowsChanged: ((event: JetElementCustomEvent<ojNBox<K, D>["rows"]>) => any) | null;
    onRowsTitleChanged: ((event: JetElementCustomEvent<ojNBox<K, D>["rowsTitle"]>) => any) | null;
    onSelectionChanged: ((event: JetElementCustomEvent<ojNBox<K, D>["selection"]>) => any) | null;
    onSelectionModeChanged: ((event: JetElementCustomEvent<ojNBox<K, D>["selectionMode"]>) => any) | null;
    onStyleDefaultsChanged: ((event: JetElementCustomEvent<ojNBox<K, D>["styleDefaults"]>) => any) | null;
    onTooltipChanged: ((event: JetElementCustomEvent<ojNBox<K, D>["tooltip"]>) => any) | null;
    onTouchResponseChanged: ((event: JetElementCustomEvent<ojNBox<K, D>["touchResponse"]>) => any) | null;
    addEventListener<T extends keyof ojNBoxEventMap<K, D>>(
        type: T,
        listener: (this: HTMLElement, ev: ojNBoxEventMap<K, D>[T]) => any,
        useCapture?: boolean,
    ): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    getProperty<T extends keyof ojNBoxSettableProperties<K, D>>(property: T): ojNBox<K, D>[T];
    getProperty(property: string): any;
    setProperty<T extends keyof ojNBoxSettableProperties<K, D>>(
        property: T,
        value: ojNBoxSettableProperties<K, D>[T],
    ): void;
    setProperty<T extends string>(property: T, value: JetSetPropertyType<T, ojNBoxSettableProperties<K, D>>): void;
    setProperties(properties: ojNBoxSettablePropertiesLenient<K, D>): void;
    getCell(rowValue: string, columnValue: string): object | null;
    getColumn(columnValue: string): object | null;
    getColumnCount(): number;
    getColumnsTitle(): string;
    getContextByNode(node: Element): object | null;
    getDialog(): object | null;
    getGroupBehavior(): string;
    getGroupNode(groupCategory: string): object | null;
    getRow(rowValue: string): object | null;
    getRowCount(): number;
    getRowsTitle(): string;
}
export interface ojNBoxEventMap<K, D> extends dvtBaseComponentEventMap<ojNBoxSettableProperties<K, D>> {
    "animationOnDataChangeChanged": JetElementCustomEvent<ojNBox<K, D>["animationOnDataChange"]>;
    "animationOnDisplayChanged": JetElementCustomEvent<ojNBox<K, D>["animationOnDisplay"]>;
    "asChanged": JetElementCustomEvent<ojNBox<K, D>["as"]>;
    "cellContentChanged": JetElementCustomEvent<ojNBox<K, D>["cellContent"]>;
    "cellMaximizeChanged": JetElementCustomEvent<ojNBox<K, D>["cellMaximize"]>;
    "cellsChanged": JetElementCustomEvent<ojNBox<K, D>["cells"]>;
    "columnsChanged": JetElementCustomEvent<ojNBox<K, D>["columns"]>;
    "columnsTitleChanged": JetElementCustomEvent<ojNBox<K, D>["columnsTitle"]>;
    "countLabelChanged": JetElementCustomEvent<ojNBox<K, D>["countLabel"]>;
    "dataChanged": JetElementCustomEvent<ojNBox<K, D>["data"]>;
    "groupAttributesChanged": JetElementCustomEvent<ojNBox<K, D>["groupAttributes"]>;
    "groupBehaviorChanged": JetElementCustomEvent<ojNBox<K, D>["groupBehavior"]>;
    "hiddenCategoriesChanged": JetElementCustomEvent<ojNBox<K, D>["hiddenCategories"]>;
    "highlightMatchChanged": JetElementCustomEvent<ojNBox<K, D>["highlightMatch"]>;
    "highlightedCategoriesChanged": JetElementCustomEvent<ojNBox<K, D>["highlightedCategories"]>;
    "hoverBehaviorChanged": JetElementCustomEvent<ojNBox<K, D>["hoverBehavior"]>;
    "labelTruncationChanged": JetElementCustomEvent<ojNBox<K, D>["labelTruncation"]>;
    "maximizedColumnChanged": JetElementCustomEvent<ojNBox<K, D>["maximizedColumn"]>;
    "maximizedRowChanged": JetElementCustomEvent<ojNBox<K, D>["maximizedRow"]>;
    "otherColorChanged": JetElementCustomEvent<ojNBox<K, D>["otherColor"]>;
    "otherThresholdChanged": JetElementCustomEvent<ojNBox<K, D>["otherThreshold"]>;
    "rowsChanged": JetElementCustomEvent<ojNBox<K, D>["rows"]>;
    "rowsTitleChanged": JetElementCustomEvent<ojNBox<K, D>["rowsTitle"]>;
    "selectionChanged": JetElementCustomEvent<ojNBox<K, D>["selection"]>;
    "selectionModeChanged": JetElementCustomEvent<ojNBox<K, D>["selectionMode"]>;
    "styleDefaultsChanged": JetElementCustomEvent<ojNBox<K, D>["styleDefaults"]>;
    "tooltipChanged": JetElementCustomEvent<ojNBox<K, D>["tooltip"]>;
    "touchResponseChanged": JetElementCustomEvent<ojNBox<K, D>["touchResponse"]>;
}
export interface ojNBoxSettableProperties<K, D> extends dvtBaseComponentSettableProperties {
    animationOnDataChange: "auto" | "none";
    animationOnDisplay: "auto" | "none";
    as: string;
    cellContent: "counts" | "auto";
    cellMaximize: "off" | "on";
    cells: ojNBox.Cell[] | Promise<ojNBox.Cell[]> | null;
    columns: ojNBox.Column[] | Promise<ojNBox.Column[]> | null;
    columnsTitle: string;
    countLabel: (context: ojNBox.CountLabelContext) => string | null;
    data: DataProvider<K, D> | null;
    groupAttributes: "color" | "indicatorColor" | "indicatorIconColor" | "indicatorIconPattern" | "indicatorIconShape";
    groupBehavior: "acrossCells" | "none" | "withinCell";
    hiddenCategories: string[];
    highlightMatch: "any" | "all";
    highlightedCategories: string[];
    hoverBehavior: "dim" | "none";
    labelTruncation: "ifRequired" | "on";
    maximizedColumn: string;
    maximizedRow: string;
    otherColor: string;
    otherThreshold: number;
    rows: ojNBox.Row[] | Promise<ojNBox.Row[]> | null;
    rowsTitle: string;
    selection: K[];
    selectionMode: "none" | "single" | "multiple";
    styleDefaults: {
        animationDuration: number;
        cellDefaults: {
            labelHalign: "center" | "end" | "start";
            labelStyle: object;
            maximizedSvgStyle: object;
            minimizedSvgStyle: object;
            showCount: "on" | "off" | "auto";
            svgStyle: object;
        };
        columnLabelStyle: object;
        columnsTitleStyle: object;
        hoverBehaviorDelay: number;
        nodeDefaults: {
            borderColor: string;
            borderWidth: number;
            color: string;
            iconDefaults: {
                borderColor: string;
                borderRadius: string;
                borderWidth: number;
                color: string;
                height: number;
                opacity: number;
                pattern:
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
                    | "none";
                shape:
                    | "circle"
                    | "ellipse"
                    | "square"
                    | "plus"
                    | "diamond"
                    | "triangleUp"
                    | "triangleDown"
                    | "human"
                    | "rectangle"
                    | "star";
                source: string;
                width: number;
            };
            indicatorColor: string;
            indicatorIconDefaults: {
                borderColor: string;
                borderRadius: string;
                borderWidth: number;
                color: string;
                height: number;
                opacity: number;
                pattern:
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
                    | "none";
                shape:
                    | "circle"
                    | "ellipse"
                    | "square"
                    | "plus"
                    | "diamond"
                    | "triangleUp"
                    | "triangleDown"
                    | "human"
                    | "rectangle"
                    | "star";
                source: string;
                width: number;
            };
            labelStyle: object;
            secondaryLabelStyle: object;
        };
        rowLabelStyle: object;
        rowsTitleStyle: object;
    };
    tooltip: {
        renderer:
            | ((context: ojNBox.TooltipContext<K>) => {
                insert: Element | string;
            } | {
                preventDefault: boolean;
            })
            | null;
    };
    touchResponse: "touchStart" | "auto";
    translations: {
        componentName?: string | undefined;
        highlightedCount?: string | undefined;
        labelAdditionalData?: string | undefined;
        labelAndValue?: string | undefined;
        labelClearSelection?: string | undefined;
        labelCountWithTotal?: string | undefined;
        labelDataVisualization?: string | undefined;
        labelGroup?: string | undefined;
        labelInvalidData?: string | undefined;
        labelNoData?: string | undefined;
        labelOther?: string | undefined;
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
    };
}
export interface ojNBoxSettablePropertiesLenient<K, D> extends Partial<ojNBoxSettableProperties<K, D>> {
    [key: string]: any;
}
export namespace ojNBox {
    // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
    type Cell = {
        label?: string | undefined;
        column: string;
        labelHalign?: string | undefined;
        labelStyle?: object | undefined;
        svgClassName?: string | undefined;
        svgStyle?: object | undefined;
        maximizedSvgStyle?: object | undefined;
        maximizedSvgClassName?: string | undefined;
        minimizedSvgStyle?: object | undefined;
        minimizedSvgClassName?: string | undefined;
        row: string;
        showCount?: "on" | "off" | "auto" | string | undefined;
        shortDesc?: string | undefined;
    };
    // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
    type Column = {
        id: string;
        label?: string | undefined;
        labelStyle?: object | undefined;
    };
    // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
    type CountLabelContext = {
        row: string;
        column: string;
        nodeCount: number;
        totalNodeCount: number;
        highlightedNodeCount: number;
    };
    // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
    type Row = {
        id: string;
        label?: string | undefined;
        labelStyle?: object | undefined;
    };
    // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
    type TooltipContext<K> = {
        parentElement: Element;
        id: K;
        label: string;
        secondaryLabel: string;
        row: string;
        column: string;
        color: string;
        indicatorColor: string;
        componentElement: Element;
    };
}
export interface ojNBoxNode extends JetElement<ojNBoxNodeSettableProperties> {
    borderColor: string;
    borderWidth: number;
    categories: string[];
    color?: string | undefined;
    column: string;
    groupCategory?: string | undefined;
    icon?: {
        borderColor?: string | undefined;
        borderRadius?: string | undefined;
        borderWidth: number;
        color?: string | undefined;
        height?: number | null | undefined;
        opacity: number;
        pattern?:
            | "largeChecker"
            | "largeCrosshatch"
            | "largeDiagonalLeft"
            | "largeDiagonalRight"
            | "largeDiamond"
            | "largeTriangle"
            | "none"
            | "mallChecker"
            | "smallCrosshatch"
            | "smallDiagonalLeft"
            | "smallDiagonalRight"
            | "smallDiamond"
            | "smallTriangle"
            | undefined;
        shape?:
            | "circle"
            | "diamond"
            | "ellipse"
            | "human"
            | "plus"
            | "rectangle"
            | "square"
            | "star"
            | "triangleDown"
            | "triangleUp"
            | string
            | undefined;
        source?: string | undefined;
        svgClassName: string;
        svgStyle?: object | undefined;
        width?: number | null | undefined;
    } | undefined;
    indicatorColor?: string | undefined;
    indicatorIcon?: {
        borderColor?: string | undefined;
        borderRadius?: string | undefined;
        borderWidth: number;
        color?: string | undefined;
        height?: number | null | undefined;
        opacity: number;
        pattern?:
            | "largeChecker"
            | "largeCrosshatch"
            | "largeDiagonalLeft"
            | "largeDiagonalRight"
            | "largeDiamond"
            | "largeTriangle"
            | "none"
            | "smallChecker"
            | "smallCrosshatch"
            | "smallDiagonalLeft"
            | "smallDiagonalRight"
            | "smallDiamond"
            | "smallTriangle"
            | undefined;
        shape?:
            | "circle"
            | "diamond"
            | "ellipse"
            | "human"
            | "plus"
            | "rectangle"
            | "square"
            | "star"
            | "triangleDown"
            | "triangleUp"
            | string
            | undefined;
        source?: string | null | undefined;
        svgClassName: string;
        svgStyle?: object | null | undefined;
        width?: number | null | undefined;
    } | undefined;
    label: string;
    row: string;
    secondaryLabel: string;
    shortDesc: string;
    svgClassName: string;
    svgStyle: object | null;
    xPercentage?: number | null | undefined;
    yPercentage?: number | null | undefined;
    onBorderColorChanged: ((event: JetElementCustomEvent<ojNBoxNode["borderColor"]>) => any) | null;
    onBorderWidthChanged: ((event: JetElementCustomEvent<ojNBoxNode["borderWidth"]>) => any) | null;
    onCategoriesChanged: ((event: JetElementCustomEvent<ojNBoxNode["categories"]>) => any) | null;
    onColorChanged: ((event: JetElementCustomEvent<ojNBoxNode["color"]>) => any) | null;
    onColumnChanged: ((event: JetElementCustomEvent<ojNBoxNode["column"]>) => any) | null;
    onGroupCategoryChanged: ((event: JetElementCustomEvent<ojNBoxNode["groupCategory"]>) => any) | null;
    onIconChanged: ((event: JetElementCustomEvent<ojNBoxNode["icon"]>) => any) | null;
    onIndicatorColorChanged: ((event: JetElementCustomEvent<ojNBoxNode["indicatorColor"]>) => any) | null;
    onIndicatorIconChanged: ((event: JetElementCustomEvent<ojNBoxNode["indicatorIcon"]>) => any) | null;
    onLabelChanged: ((event: JetElementCustomEvent<ojNBoxNode["label"]>) => any) | null;
    onRowChanged: ((event: JetElementCustomEvent<ojNBoxNode["row"]>) => any) | null;
    onSecondaryLabelChanged: ((event: JetElementCustomEvent<ojNBoxNode["secondaryLabel"]>) => any) | null;
    onShortDescChanged: ((event: JetElementCustomEvent<ojNBoxNode["shortDesc"]>) => any) | null;
    onSvgClassNameChanged: ((event: JetElementCustomEvent<ojNBoxNode["svgClassName"]>) => any) | null;
    onSvgStyleChanged: ((event: JetElementCustomEvent<ojNBoxNode["svgStyle"]>) => any) | null;
    onXPercentageChanged: ((event: JetElementCustomEvent<ojNBoxNode["xPercentage"]>) => any) | null;
    onYPercentageChanged: ((event: JetElementCustomEvent<ojNBoxNode["yPercentage"]>) => any) | null;
    addEventListener<T extends keyof ojNBoxNodeEventMap>(
        type: T,
        listener: (this: HTMLElement, ev: ojNBoxNodeEventMap[T]) => any,
        useCapture?: boolean,
    ): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    getProperty<T extends keyof ojNBoxNodeSettableProperties>(property: T): ojNBoxNode[T];
    getProperty(property: string): any;
    setProperty<T extends keyof ojNBoxNodeSettableProperties>(
        property: T,
        value: ojNBoxNodeSettableProperties[T],
    ): void;
    setProperty<T extends string>(property: T, value: JetSetPropertyType<T, ojNBoxNodeSettableProperties>): void;
    setProperties(properties: ojNBoxNodeSettablePropertiesLenient): void;
}
export interface ojNBoxNodeEventMap extends HTMLElementEventMap {
    "borderColorChanged": JetElementCustomEvent<ojNBoxNode["borderColor"]>;
    "borderWidthChanged": JetElementCustomEvent<ojNBoxNode["borderWidth"]>;
    "categoriesChanged": JetElementCustomEvent<ojNBoxNode["categories"]>;
    "colorChanged": JetElementCustomEvent<ojNBoxNode["color"]>;
    "columnChanged": JetElementCustomEvent<ojNBoxNode["column"]>;
    "groupCategoryChanged": JetElementCustomEvent<ojNBoxNode["groupCategory"]>;
    "iconChanged": JetElementCustomEvent<ojNBoxNode["icon"]>;
    "indicatorColorChanged": JetElementCustomEvent<ojNBoxNode["indicatorColor"]>;
    "indicatorIconChanged": JetElementCustomEvent<ojNBoxNode["indicatorIcon"]>;
    "labelChanged": JetElementCustomEvent<ojNBoxNode["label"]>;
    "rowChanged": JetElementCustomEvent<ojNBoxNode["row"]>;
    "secondaryLabelChanged": JetElementCustomEvent<ojNBoxNode["secondaryLabel"]>;
    "shortDescChanged": JetElementCustomEvent<ojNBoxNode["shortDesc"]>;
    "svgClassNameChanged": JetElementCustomEvent<ojNBoxNode["svgClassName"]>;
    "svgStyleChanged": JetElementCustomEvent<ojNBoxNode["svgStyle"]>;
    "xPercentageChanged": JetElementCustomEvent<ojNBoxNode["xPercentage"]>;
    "yPercentageChanged": JetElementCustomEvent<ojNBoxNode["yPercentage"]>;
}
export interface ojNBoxNodeSettableProperties extends JetSettableProperties {
    borderColor: string;
    borderWidth: number;
    categories: string[];
    color?: string | undefined;
    column: string;
    groupCategory?: string | undefined;
    icon?: {
        borderColor?: string | undefined;
        borderRadius?: string | undefined;
        borderWidth: number;
        color?: string | undefined;
        height?: number | null | undefined;
        opacity: number;
        pattern?:
            | "largeChecker"
            | "largeCrosshatch"
            | "largeDiagonalLeft"
            | "largeDiagonalRight"
            | "largeDiamond"
            | "largeTriangle"
            | "none"
            | "mallChecker"
            | "smallCrosshatch"
            | "smallDiagonalLeft"
            | "smallDiagonalRight"
            | "smallDiamond"
            | "smallTriangle"
            | undefined;
        shape?:
            | "circle"
            | "diamond"
            | "ellipse"
            | "human"
            | "plus"
            | "rectangle"
            | "square"
            | "star"
            | "triangleDown"
            | "triangleUp"
            | string
            | undefined;
        source?: string | undefined;
        svgClassName: string;
        svgStyle?: object | undefined;
        width?: number | null | undefined;
    } | undefined;
    indicatorColor?: string | undefined;
    indicatorIcon?: {
        borderColor?: string | undefined;
        borderRadius?: string | undefined;
        borderWidth: number;
        color?: string | undefined;
        height?: number | null | undefined;
        opacity: number;
        pattern?:
            | "largeChecker"
            | "largeCrosshatch"
            | "largeDiagonalLeft"
            | "largeDiagonalRight"
            | "largeDiamond"
            | "largeTriangle"
            | "none"
            | "smallChecker"
            | "smallCrosshatch"
            | "smallDiagonalLeft"
            | "smallDiagonalRight"
            | "smallDiamond"
            | "smallTriangle"
            | undefined;
        shape?:
            | "circle"
            | "diamond"
            | "ellipse"
            | "human"
            | "plus"
            | "rectangle"
            | "square"
            | "star"
            | "triangleDown"
            | "triangleUp"
            | string
            | undefined;
        source?: string | null | undefined;
        svgClassName: string;
        svgStyle?: object | null | undefined;
        width?: number | null | undefined;
    } | undefined;
    label: string;
    row: string;
    secondaryLabel: string;
    shortDesc: string;
    svgClassName: string;
    svgStyle: object | null;
    xPercentage?: number | null | undefined;
    yPercentage?: number | null | undefined;
}
export interface ojNBoxNodeSettablePropertiesLenient extends Partial<ojNBoxNodeSettableProperties> {
    [key: string]: any;
}
