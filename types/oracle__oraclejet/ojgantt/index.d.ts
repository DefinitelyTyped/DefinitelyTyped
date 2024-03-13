import { JetElement, JetElementCustomEvent, JetSetPropertyType, JetSettableProperties } from "..";
import { DataProvider } from "../ojdataprovider";
import { dvtTimeComponent, dvtTimeComponentEventMap, dvtTimeComponentSettableProperties } from "../ojtime-base";
import { ojTimeAxis } from "../ojtimeaxis";
import { Converter } from "../ojvalidation-base";
export interface ojGantt<K1, K2, D1, D2> extends dvtTimeComponent<ojGanttSettableProperties<K1, K2, D1, D2>> {
    animationOnDataChange: "auto" | "none";
    animationOnDisplay: "auto" | "none";
    as: string;
    axisPosition: "bottom" | "top";
    dependencyData?: (DataProvider<K1, D1>) | undefined;
    dnd: {
        move?: {
            tasks?: "disabled" | "enabled" | undefined;
        } | undefined;
    };
    end: string;
    gridlines: {
        horizontal?: "hidden" | "visible" | "auto" | undefined;
        vertical?: "hidden" | "visible" | "auto" | undefined;
    };
    majorAxis: {
        converter?: (ojTimeAxis.Converters | Converter<string>) | undefined;
        height?: number | undefined;
        scale: "seconds" | "minutes" | "hours" | "days" | "weeks" | "months" | "quarters" | "years";
        zoomOrder?: string[] | undefined;
    };
    minorAxis: {
        converter?: (ojTimeAxis.Converters | Converter<string>) | undefined;
        height?: number | undefined;
        scale: "seconds" | "minutes" | "hours" | "days" | "weeks" | "months" | "quarters" | "years";
        zoomOrder?: string[] | undefined;
    };
    referenceObjects: ojGantt.ReferenceObject[];
    rowAxis: {
        label?: {
            renderer: (context: ojGantt.RowAxisLabelRendererContext<K2, D2>) => {
                insert: Element;
            };
        } | undefined;
        maxWidth?: string | undefined;
        rendered?: "on" | "off" | undefined;
        width?: string | undefined;
    };
    rowDefaults: {
        height?: number | undefined;
    };
    scrollPosition: {
        offsetY?: number | undefined;
        rowIndex?: number | undefined;
        y?: number | undefined;
    };
    selection: K2[];
    selectionMode: "single" | "multiple" | "none";
    start: string;
    taskData?: (DataProvider<K2, D2>) | undefined;
    taskDefaults: {
        baseline?: {
            borderRadius?: string | undefined;
            height?: number | undefined;
            svgClassName?: string | undefined;
            svgStyle?: object | undefined;
        } | undefined;
        borderRadius?: string | undefined;
        height?: number | undefined;
        labelPosition?: (string | string[]) | undefined;
        progress?: {
            borderRadius?: string | undefined;
            height?: string | undefined;
            svgClassName?: string | undefined;
            svgStyle?: object | undefined;
        } | undefined;
        svgClassName?: string | undefined;
        svgStyle?: object | undefined;
        type?: "normal" | "milestone" | "summary" | "auto" | undefined;
    };
    tooltip: {
        renderer: (context: ojGantt.TooltipContext<K2, D2>) => {
            insert: Element | string;
        } | {
            preventDefault: boolean;
        };
    };
    valueFormats: {
        baselineDate?: {
            converter?: (Converter<string>) | undefined;
            tooltipDisplay?: "off" | "auto" | undefined;
            tooltipLabel?: string | undefined;
        } | undefined;
        baselineEnd?: {
            converter?: (Converter<string>) | undefined;
            tooltipDisplay?: "off" | "auto" | undefined;
            tooltipLabel?: string | undefined;
        } | undefined;
        baselineStart?: {
            converter?: (Converter<string>) | undefined;
            tooltipDisplay?: "off" | "auto" | undefined;
            tooltipLabel?: string | undefined;
        } | undefined;
        date?: {
            converter?: (Converter<string>) | undefined;
            tooltipDisplay?: "off" | "auto" | undefined;
            tooltipLabel?: string | undefined;
        } | undefined;
        end?: {
            converter?: (Converter<string>) | undefined;
            tooltipDisplay?: "off" | "auto" | undefined;
            tooltipLabel?: string | undefined;
        } | undefined;
        label?: {
            tooltipDisplay?: "off" | "auto" | undefined;
            tooltipLabel?: string | undefined;
        } | undefined;
        progress?: {
            converter?: (Converter<number>) | undefined;
            tooltipDisplay?: "off" | "auto" | undefined;
            tooltipLabel?: string | undefined;
        } | undefined;
        row?: {
            tooltipDisplay?: "off" | "auto" | undefined;
            tooltipLabel?: string | undefined;
        } | undefined;
        start?: {
            converter?: (Converter<string>) | undefined;
            tooltipDisplay?: "off" | "auto" | undefined;
            tooltipLabel?: string | undefined;
        } | undefined;
    };
    viewportEnd: string;
    viewportStart: string;
    translations: {
        accessibleDependencyInfo?: string | undefined;
        accessiblePredecessorInfo?: string | undefined;
        accessibleSuccessorInfo?: string | undefined;
        accessibleTaskTypeMilestone?: string | undefined;
        accessibleTaskTypeSummary?: string | undefined;
        componentName?: string | undefined;
        finishFinishDependencyAriaDesc?: string | undefined;
        finishStartDependencyAriaDesc?: string | undefined;
        labelAndValue?: string | undefined;
        labelBaselineDate?: string | undefined;
        labelBaselineEnd?: string | undefined;
        labelBaselineStart?: string | undefined;
        labelClearSelection?: string | undefined;
        labelCountWithTotal?: string | undefined;
        labelDataVisualization?: string | undefined;
        labelDate?: string | undefined;
        labelEnd?: string | undefined;
        labelInvalidData?: string | undefined;
        labelLabel?: string | undefined;
        labelMoveBy?: string | undefined;
        labelNoData?: string | undefined;
        labelProgress?: string | undefined;
        labelRow?: string | undefined;
        labelStart?: string | undefined;
        startFinishDependencyAriaDesc?: string | undefined;
        startStartDependencyAriaDesc?: string | undefined;
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
        taskMoveCancelled?: string | undefined;
        taskMoveFinalized?: string | undefined;
        taskMoveInitiated?: string | undefined;
        taskMoveInitiatedInstruction?: string | undefined;
        taskMoveSelectionInfo?: string | undefined;
        tooltipZoomIn?: string | undefined;
        tooltipZoomOut?: string | undefined;
    };
    onAnimationOnDataChangeChanged:
        | ((event: JetElementCustomEvent<ojGantt<K1, K2, D1, D2>["animationOnDataChange"]>) => any)
        | null;
    onAnimationOnDisplayChanged:
        | ((event: JetElementCustomEvent<ojGantt<K1, K2, D1, D2>["animationOnDisplay"]>) => any)
        | null;
    onAsChanged: ((event: JetElementCustomEvent<ojGantt<K1, K2, D1, D2>["as"]>) => any) | null;
    onAxisPositionChanged: ((event: JetElementCustomEvent<ojGantt<K1, K2, D1, D2>["axisPosition"]>) => any) | null;
    onDependencyDataChanged: ((event: JetElementCustomEvent<ojGantt<K1, K2, D1, D2>["dependencyData"]>) => any) | null;
    onDndChanged: ((event: JetElementCustomEvent<ojGantt<K1, K2, D1, D2>["dnd"]>) => any) | null;
    onEndChanged: ((event: JetElementCustomEvent<ojGantt<K1, K2, D1, D2>["end"]>) => any) | null;
    onGridlinesChanged: ((event: JetElementCustomEvent<ojGantt<K1, K2, D1, D2>["gridlines"]>) => any) | null;
    onMajorAxisChanged: ((event: JetElementCustomEvent<ojGantt<K1, K2, D1, D2>["majorAxis"]>) => any) | null;
    onMinorAxisChanged: ((event: JetElementCustomEvent<ojGantt<K1, K2, D1, D2>["minorAxis"]>) => any) | null;
    onReferenceObjectsChanged:
        | ((event: JetElementCustomEvent<ojGantt<K1, K2, D1, D2>["referenceObjects"]>) => any)
        | null;
    onRowAxisChanged: ((event: JetElementCustomEvent<ojGantt<K1, K2, D1, D2>["rowAxis"]>) => any) | null;
    onRowDefaultsChanged: ((event: JetElementCustomEvent<ojGantt<K1, K2, D1, D2>["rowDefaults"]>) => any) | null;
    onScrollPositionChanged: ((event: JetElementCustomEvent<ojGantt<K1, K2, D1, D2>["scrollPosition"]>) => any) | null;
    onSelectionChanged: ((event: JetElementCustomEvent<ojGantt<K1, K2, D1, D2>["selection"]>) => any) | null;
    onSelectionModeChanged: ((event: JetElementCustomEvent<ojGantt<K1, K2, D1, D2>["selectionMode"]>) => any) | null;
    onStartChanged: ((event: JetElementCustomEvent<ojGantt<K1, K2, D1, D2>["start"]>) => any) | null;
    onTaskDataChanged: ((event: JetElementCustomEvent<ojGantt<K1, K2, D1, D2>["taskData"]>) => any) | null;
    onTaskDefaultsChanged: ((event: JetElementCustomEvent<ojGantt<K1, K2, D1, D2>["taskDefaults"]>) => any) | null;
    onTooltipChanged: ((event: JetElementCustomEvent<ojGantt<K1, K2, D1, D2>["tooltip"]>) => any) | null;
    onValueFormatsChanged: ((event: JetElementCustomEvent<ojGantt<K1, K2, D1, D2>["valueFormats"]>) => any) | null;
    onViewportEndChanged: ((event: JetElementCustomEvent<ojGantt<K1, K2, D1, D2>["viewportEnd"]>) => any) | null;
    onViewportStartChanged: ((event: JetElementCustomEvent<ojGantt<K1, K2, D1, D2>["viewportStart"]>) => any) | null;
    onOjMove: ((event: ojGantt.ojMove<K2, D2>) => any) | null;
    onOjViewportChange: ((event: ojGantt.ojViewportChange) => any) | null;
    addEventListener<T extends keyof ojGanttEventMap<K1, K2, D1, D2>>(
        type: T,
        listener: (this: HTMLElement, ev: ojGanttEventMap<K1, K2, D1, D2>[T]) => any,
        useCapture?: boolean,
    ): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    getProperty<T extends keyof ojGanttSettableProperties<K1, K2, D1, D2>>(property: T): ojGantt<K1, K2, D1, D2>[T];
    getProperty(property: string): any;
    setProperty<T extends keyof ojGanttSettableProperties<K1, K2, D1, D2>>(
        property: T,
        value: ojGanttSettableProperties<K1, K2, D1, D2>[T],
    ): void;
    setProperty<T extends string>(
        property: T,
        value: JetSetPropertyType<T, ojGanttSettableProperties<K1, K2, D1, D2>>,
    ): void;
    setProperties(properties: ojGanttSettablePropertiesLenient<K1, K2, D1, D2>): void;
    getContextByNode(node: Element): {
        subId: "oj-gantt-row-label";
        index: number;
    } | {
        subId: "oj-gantt-taskbar";
        rowIndex: number;
        index: number;
    } | null;
}
export namespace ojGantt {
    interface ojMove<K2, D2> extends
        CustomEvent<{
            taskContexts: Array<{
                data: RowTask<K2>;
                rowData: Row<K2>;
                itemData: D2 | null;
                color: string;
            }>;
            value: string;
            start: string;
            end: string;
            baselineStart: string;
            baselineEnd: string;
            rowContext: {
                rowData: Row<K2>;
                componentElement: Element;
            };
            [propName: string]: any;
        }>
    {
    }
    interface ojViewportChange extends
        CustomEvent<{
            viewportStart: string;
            viewportEnd: string;
            majorAxisScale: string;
            minorAxisScale: string;
            [propName: string]: any;
        }>
    {
    }
    // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
    type Dependency<K1, K2> = {
        id: K1;
        predecessorTaskId: K2;
        shortDesc?: string | undefined;
        successorTaskId: K2;
        svgClassName?: string | undefined;
        svgStyle?: object | undefined;
        type?: "startStart" | "startFinish" | "finishFinish" | "finishStart" | undefined;
    };
    // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
    type ReferenceObject = {
        svgClassName?: string | undefined;
        svgStyle?: object | undefined;
        value?: string | undefined;
    };
    // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
    type Row<K2> = {
        id?: any;
        label?: string | undefined;
        labelStyle?: object | undefined;
        tasks?: Array<RowTask<K2>> | undefined;
    };
    // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
    type RowAxisLabelRendererContext<K2, D2> = {
        parentElement: Element;
        rowData: Row<K2>;
        itemData: D2[];
        componentElement: Element;
        maxWidth: number;
        maxHeight: number;
    };
    // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
    type RowTask<K2> = {
        borderRadius?: string | undefined;
        end?: string | undefined;
        height?: number | undefined;
        id: K2;
        label?: string | undefined;
        labelPosition?: string | string[] | undefined;
        labelStyle?: object | undefined;
        start?: string | undefined;
        shortDesc?: string | undefined;
        svgClassName?: string | undefined;
        svgStyle?: object | undefined;
        type?: "normal" | "milestone" | "summary" | "auto" | undefined;
        progress?: {
            borderRadius?: string | undefined;
            height?: string | undefined;
            svgClassName?: string | undefined;
            svgStyle?: object | undefined;
            value?: number | undefined;
        } | undefined;
        baseline?: {
            borderRadius?: string | undefined;
            end?: string | undefined;
            height?: number | undefined;
            start?: string | undefined;
            svgClassName?: string | undefined;
            svgStyle?: object | undefined;
        } | undefined;
    };
    // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
    type TooltipContext<K2, D2> = {
        parentElement: Element;
        data: RowTask<K2>;
        rowData: Row<K2>;
        itemData: D2;
        componentElement: Element;
        color: string;
    };
}
export interface ojGanttEventMap<K1, K2, D1, D2>
    extends dvtTimeComponentEventMap<ojGanttSettableProperties<K1, K2, D1, D2>>
{
    "ojMove": ojGantt.ojMove<K2, D2>;
    "ojViewportChange": ojGantt.ojViewportChange;
    "animationOnDataChangeChanged": JetElementCustomEvent<ojGantt<K1, K2, D1, D2>["animationOnDataChange"]>;
    "animationOnDisplayChanged": JetElementCustomEvent<ojGantt<K1, K2, D1, D2>["animationOnDisplay"]>;
    "asChanged": JetElementCustomEvent<ojGantt<K1, K2, D1, D2>["as"]>;
    "axisPositionChanged": JetElementCustomEvent<ojGantt<K1, K2, D1, D2>["axisPosition"]>;
    "dependencyDataChanged": JetElementCustomEvent<ojGantt<K1, K2, D1, D2>["dependencyData"]>;
    "dndChanged": JetElementCustomEvent<ojGantt<K1, K2, D1, D2>["dnd"]>;
    "endChanged": JetElementCustomEvent<ojGantt<K1, K2, D1, D2>["end"]>;
    "gridlinesChanged": JetElementCustomEvent<ojGantt<K1, K2, D1, D2>["gridlines"]>;
    "majorAxisChanged": JetElementCustomEvent<ojGantt<K1, K2, D1, D2>["majorAxis"]>;
    "minorAxisChanged": JetElementCustomEvent<ojGantt<K1, K2, D1, D2>["minorAxis"]>;
    "referenceObjectsChanged": JetElementCustomEvent<ojGantt<K1, K2, D1, D2>["referenceObjects"]>;
    "rowAxisChanged": JetElementCustomEvent<ojGantt<K1, K2, D1, D2>["rowAxis"]>;
    "rowDefaultsChanged": JetElementCustomEvent<ojGantt<K1, K2, D1, D2>["rowDefaults"]>;
    "scrollPositionChanged": JetElementCustomEvent<ojGantt<K1, K2, D1, D2>["scrollPosition"]>;
    "selectionChanged": JetElementCustomEvent<ojGantt<K1, K2, D1, D2>["selection"]>;
    "selectionModeChanged": JetElementCustomEvent<ojGantt<K1, K2, D1, D2>["selectionMode"]>;
    "startChanged": JetElementCustomEvent<ojGantt<K1, K2, D1, D2>["start"]>;
    "taskDataChanged": JetElementCustomEvent<ojGantt<K1, K2, D1, D2>["taskData"]>;
    "taskDefaultsChanged": JetElementCustomEvent<ojGantt<K1, K2, D1, D2>["taskDefaults"]>;
    "tooltipChanged": JetElementCustomEvent<ojGantt<K1, K2, D1, D2>["tooltip"]>;
    "valueFormatsChanged": JetElementCustomEvent<ojGantt<K1, K2, D1, D2>["valueFormats"]>;
    "viewportEndChanged": JetElementCustomEvent<ojGantt<K1, K2, D1, D2>["viewportEnd"]>;
    "viewportStartChanged": JetElementCustomEvent<ojGantt<K1, K2, D1, D2>["viewportStart"]>;
}
export interface ojGanttSettableProperties<K1, K2, D1, D2> extends dvtTimeComponentSettableProperties {
    animationOnDataChange: "auto" | "none";
    animationOnDisplay: "auto" | "none";
    as: string;
    axisPosition: "bottom" | "top";
    dependencyData?: (DataProvider<K1, D1>) | undefined;
    dnd: {
        move?: {
            tasks?: "disabled" | "enabled" | undefined;
        } | undefined;
    };
    end: string;
    gridlines: {
        horizontal?: "hidden" | "visible" | "auto" | undefined;
        vertical?: "hidden" | "visible" | "auto" | undefined;
    };
    majorAxis: {
        converter?: (ojTimeAxis.Converters | Converter<string>) | undefined;
        height?: number | undefined;
        scale: "seconds" | "minutes" | "hours" | "days" | "weeks" | "months" | "quarters" | "years";
        zoomOrder?: string[] | undefined;
    };
    minorAxis: {
        converter?: (ojTimeAxis.Converters | Converter<string>) | undefined;
        height?: number | undefined;
        scale: "seconds" | "minutes" | "hours" | "days" | "weeks" | "months" | "quarters" | "years";
        zoomOrder?: string[] | undefined;
    };
    referenceObjects: ojGantt.ReferenceObject[];
    rowAxis: {
        label?: {
            renderer: (context: ojGantt.RowAxisLabelRendererContext<K2, D2>) => {
                insert: Element;
            };
        } | undefined;
        maxWidth?: string | undefined;
        rendered?: "on" | "off" | undefined;
        width?: string | undefined;
    };
    rowDefaults: {
        height?: number | undefined;
    };
    scrollPosition: {
        offsetY?: number | undefined;
        rowIndex?: number | undefined;
        y?: number | undefined;
    };
    selection: K2[];
    selectionMode: "single" | "multiple" | "none";
    start: string;
    taskData?: (DataProvider<K2, D2>) | undefined;
    taskDefaults: {
        baseline?: {
            borderRadius?: string | undefined;
            height?: number | undefined;
            svgClassName?: string | undefined;
            svgStyle?: object | undefined;
        } | undefined;
        borderRadius?: string | undefined;
        height?: number | undefined;
        labelPosition?: (string | string[]) | undefined;
        progress?: {
            borderRadius?: string | undefined;
            height?: string | undefined;
            svgClassName?: string | undefined;
            svgStyle?: object | undefined;
        } | undefined;
        svgClassName?: string | undefined;
        svgStyle?: object | undefined;
        type?: "normal" | "milestone" | "summary" | "auto" | undefined;
    };
    tooltip: {
        renderer: (context: ojGantt.TooltipContext<K2, D2>) => {
            insert: Element | string;
        } | {
            preventDefault: boolean;
        };
    };
    valueFormats: {
        baselineDate?: {
            converter?: (Converter<string>) | undefined;
            tooltipDisplay?: "off" | "auto" | undefined;
            tooltipLabel?: string | undefined;
        } | undefined;
        baselineEnd?: {
            converter?: (Converter<string>) | undefined;
            tooltipDisplay?: "off" | "auto" | undefined;
            tooltipLabel?: string | undefined;
        } | undefined;
        baselineStart?: {
            converter?: (Converter<string>) | undefined;
            tooltipDisplay?: "off" | "auto" | undefined;
            tooltipLabel?: string | undefined;
        } | undefined;
        date?: {
            converter?: (Converter<string>) | undefined;
            tooltipDisplay?: "off" | "auto" | undefined;
            tooltipLabel?: string | undefined;
        } | undefined;
        end?: {
            converter?: (Converter<string>) | undefined;
            tooltipDisplay?: "off" | "auto" | undefined;
            tooltipLabel?: string | undefined;
        } | undefined;
        label?: {
            tooltipDisplay?: "off" | "auto" | undefined;
            tooltipLabel?: string | undefined;
        } | undefined;
        progress?: {
            converter?: (Converter<number>) | undefined;
            tooltipDisplay?: "off" | "auto" | undefined;
            tooltipLabel?: string | undefined;
        } | undefined;
        row?: {
            tooltipDisplay?: "off" | "auto" | undefined;
            tooltipLabel?: string | undefined;
        } | undefined;
        start?: {
            converter?: (Converter<string>) | undefined;
            tooltipDisplay?: "off" | "auto" | undefined;
            tooltipLabel?: string | undefined;
        } | undefined;
    };
    viewportEnd: string;
    viewportStart: string;
    translations: {
        accessibleDependencyInfo?: string | undefined;
        accessiblePredecessorInfo?: string | undefined;
        accessibleSuccessorInfo?: string | undefined;
        accessibleTaskTypeMilestone?: string | undefined;
        accessibleTaskTypeSummary?: string | undefined;
        componentName?: string | undefined;
        finishFinishDependencyAriaDesc?: string | undefined;
        finishStartDependencyAriaDesc?: string | undefined;
        labelAndValue?: string | undefined;
        labelBaselineDate?: string | undefined;
        labelBaselineEnd?: string | undefined;
        labelBaselineStart?: string | undefined;
        labelClearSelection?: string | undefined;
        labelCountWithTotal?: string | undefined;
        labelDataVisualization?: string | undefined;
        labelDate?: string | undefined;
        labelEnd?: string | undefined;
        labelInvalidData?: string | undefined;
        labelLabel?: string | undefined;
        labelMoveBy?: string | undefined;
        labelNoData?: string | undefined;
        labelProgress?: string | undefined;
        labelRow?: string | undefined;
        labelStart?: string | undefined;
        startFinishDependencyAriaDesc?: string | undefined;
        startStartDependencyAriaDesc?: string | undefined;
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
        taskMoveCancelled?: string | undefined;
        taskMoveFinalized?: string | undefined;
        taskMoveInitiated?: string | undefined;
        taskMoveInitiatedInstruction?: string | undefined;
        taskMoveSelectionInfo?: string | undefined;
        tooltipZoomIn?: string | undefined;
        tooltipZoomOut?: string | undefined;
    };
}
export interface ojGanttSettablePropertiesLenient<K1, K2, D1, D2>
    extends Partial<ojGanttSettableProperties<K1, K2, D1, D2>>
{
    [key: string]: any;
}
export interface ojGanttDependency extends JetElement<ojGanttDependencySettableProperties> {
    predecessorTaskId: any;
    shortDesc: string | null;
    successorTaskId: any;
    svgClassName: string;
    svgStyle: object;
    type: "finishStart" | "finishFinish" | "startStart" | "startFinish";
    onPredecessorTaskIdChanged: ((event: JetElementCustomEvent<ojGanttDependency["predecessorTaskId"]>) => any) | null;
    onShortDescChanged: ((event: JetElementCustomEvent<ojGanttDependency["shortDesc"]>) => any) | null;
    onSuccessorTaskIdChanged: ((event: JetElementCustomEvent<ojGanttDependency["successorTaskId"]>) => any) | null;
    onSvgClassNameChanged: ((event: JetElementCustomEvent<ojGanttDependency["svgClassName"]>) => any) | null;
    onSvgStyleChanged: ((event: JetElementCustomEvent<ojGanttDependency["svgStyle"]>) => any) | null;
    onTypeChanged: ((event: JetElementCustomEvent<ojGanttDependency["type"]>) => any) | null;
    addEventListener<T extends keyof ojGanttDependencyEventMap>(
        type: T,
        listener: (this: HTMLElement, ev: ojGanttDependencyEventMap[T]) => any,
        useCapture?: boolean,
    ): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    getProperty<T extends keyof ojGanttDependencySettableProperties>(property: T): ojGanttDependency[T];
    getProperty(property: string): any;
    setProperty<T extends keyof ojGanttDependencySettableProperties>(
        property: T,
        value: ojGanttDependencySettableProperties[T],
    ): void;
    setProperty<T extends string>(property: T, value: JetSetPropertyType<T, ojGanttDependencySettableProperties>): void;
    setProperties(properties: ojGanttDependencySettablePropertiesLenient): void;
}
export interface ojGanttDependencyEventMap extends HTMLElementEventMap {
    "predecessorTaskIdChanged": JetElementCustomEvent<ojGanttDependency["predecessorTaskId"]>;
    "shortDescChanged": JetElementCustomEvent<ojGanttDependency["shortDesc"]>;
    "successorTaskIdChanged": JetElementCustomEvent<ojGanttDependency["successorTaskId"]>;
    "svgClassNameChanged": JetElementCustomEvent<ojGanttDependency["svgClassName"]>;
    "svgStyleChanged": JetElementCustomEvent<ojGanttDependency["svgStyle"]>;
    "typeChanged": JetElementCustomEvent<ojGanttDependency["type"]>;
}
export interface ojGanttDependencySettableProperties extends JetSettableProperties {
    predecessorTaskId: any;
    shortDesc: string | null;
    successorTaskId: any;
    svgClassName: string;
    svgStyle: object;
    type: "finishStart" | "finishFinish" | "startStart" | "startFinish";
}
export interface ojGanttDependencySettablePropertiesLenient extends Partial<ojGanttDependencySettableProperties> {
    [key: string]: any;
}
export interface ojGanttRow extends JetElement<ojGanttRowSettableProperties> {
    label: string;
    labelStyle: object;
    onLabelChanged: ((event: JetElementCustomEvent<ojGanttRow["label"]>) => any) | null;
    onLabelStyleChanged: ((event: JetElementCustomEvent<ojGanttRow["labelStyle"]>) => any) | null;
    addEventListener<T extends keyof ojGanttRowEventMap>(
        type: T,
        listener: (this: HTMLElement, ev: ojGanttRowEventMap[T]) => any,
        useCapture?: boolean,
    ): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    getProperty<T extends keyof ojGanttRowSettableProperties>(property: T): ojGanttRow[T];
    getProperty(property: string): any;
    setProperty<T extends keyof ojGanttRowSettableProperties>(
        property: T,
        value: ojGanttRowSettableProperties[T],
    ): void;
    setProperty<T extends string>(property: T, value: JetSetPropertyType<T, ojGanttRowSettableProperties>): void;
    setProperties(properties: ojGanttRowSettablePropertiesLenient): void;
}
export interface ojGanttRowEventMap extends HTMLElementEventMap {
    "labelChanged": JetElementCustomEvent<ojGanttRow["label"]>;
    "labelStyleChanged": JetElementCustomEvent<ojGanttRow["labelStyle"]>;
}
export interface ojGanttRowSettableProperties extends JetSettableProperties {
    label: string;
    labelStyle: object;
}
export interface ojGanttRowSettablePropertiesLenient extends Partial<ojGanttRowSettableProperties> {
    [key: string]: any;
}
export interface ojGanttTask extends JetElement<ojGanttTaskSettableProperties> {
    baseline: {
        borderRadius?: string | undefined;
        end?: string | undefined;
        height?: number | undefined;
        start?: string | undefined;
        svgClassName?: string | undefined;
        svgStyle?: object | undefined;
    };
    borderRadius: string;
    end: string;
    height: number | null;
    label: string;
    labelPosition: "start" | "innerCenter" | "innerStart" | "innerEnd" | "end" | "none";
    labelStyle: object;
    progress: {
        borderRadius?: string | undefined;
        height?: string | undefined;
        svgClassName?: string | undefined;
        svgStyle?: object | undefined;
        value?: number | undefined;
    };
    rowId?: any;
    shortDesc: string | null;
    start: string;
    svgClassName: string;
    svgStyle: object;
    type: "normal" | "milestone" | "summary" | "auto";
    onBaselineChanged: ((event: JetElementCustomEvent<ojGanttTask["baseline"]>) => any) | null;
    onBorderRadiusChanged: ((event: JetElementCustomEvent<ojGanttTask["borderRadius"]>) => any) | null;
    onEndChanged: ((event: JetElementCustomEvent<ojGanttTask["end"]>) => any) | null;
    onHeightChanged: ((event: JetElementCustomEvent<ojGanttTask["height"]>) => any) | null;
    onLabelChanged: ((event: JetElementCustomEvent<ojGanttTask["label"]>) => any) | null;
    onLabelPositionChanged: ((event: JetElementCustomEvent<ojGanttTask["labelPosition"]>) => any) | null;
    onLabelStyleChanged: ((event: JetElementCustomEvent<ojGanttTask["labelStyle"]>) => any) | null;
    onProgressChanged: ((event: JetElementCustomEvent<ojGanttTask["progress"]>) => any) | null;
    onRowIdChanged: ((event: JetElementCustomEvent<ojGanttTask["rowId"]>) => any) | null;
    onShortDescChanged: ((event: JetElementCustomEvent<ojGanttTask["shortDesc"]>) => any) | null;
    onStartChanged: ((event: JetElementCustomEvent<ojGanttTask["start"]>) => any) | null;
    onSvgClassNameChanged: ((event: JetElementCustomEvent<ojGanttTask["svgClassName"]>) => any) | null;
    onSvgStyleChanged: ((event: JetElementCustomEvent<ojGanttTask["svgStyle"]>) => any) | null;
    onTypeChanged: ((event: JetElementCustomEvent<ojGanttTask["type"]>) => any) | null;
    addEventListener<T extends keyof ojGanttTaskEventMap>(
        type: T,
        listener: (this: HTMLElement, ev: ojGanttTaskEventMap[T]) => any,
        useCapture?: boolean,
    ): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    getProperty<T extends keyof ojGanttTaskSettableProperties>(property: T): ojGanttTask[T];
    getProperty(property: string): any;
    setProperty<T extends keyof ojGanttTaskSettableProperties>(
        property: T,
        value: ojGanttTaskSettableProperties[T],
    ): void;
    setProperty<T extends string>(property: T, value: JetSetPropertyType<T, ojGanttTaskSettableProperties>): void;
    setProperties(properties: ojGanttTaskSettablePropertiesLenient): void;
}
export interface ojGanttTaskEventMap extends HTMLElementEventMap {
    "baselineChanged": JetElementCustomEvent<ojGanttTask["baseline"]>;
    "borderRadiusChanged": JetElementCustomEvent<ojGanttTask["borderRadius"]>;
    "endChanged": JetElementCustomEvent<ojGanttTask["end"]>;
    "heightChanged": JetElementCustomEvent<ojGanttTask["height"]>;
    "labelChanged": JetElementCustomEvent<ojGanttTask["label"]>;
    "labelPositionChanged": JetElementCustomEvent<ojGanttTask["labelPosition"]>;
    "labelStyleChanged": JetElementCustomEvent<ojGanttTask["labelStyle"]>;
    "progressChanged": JetElementCustomEvent<ojGanttTask["progress"]>;
    "rowIdChanged": JetElementCustomEvent<ojGanttTask["rowId"]>;
    "shortDescChanged": JetElementCustomEvent<ojGanttTask["shortDesc"]>;
    "startChanged": JetElementCustomEvent<ojGanttTask["start"]>;
    "svgClassNameChanged": JetElementCustomEvent<ojGanttTask["svgClassName"]>;
    "svgStyleChanged": JetElementCustomEvent<ojGanttTask["svgStyle"]>;
    "typeChanged": JetElementCustomEvent<ojGanttTask["type"]>;
}
export interface ojGanttTaskSettableProperties extends JetSettableProperties {
    baseline: {
        borderRadius?: string | undefined;
        end?: string | undefined;
        height?: number | undefined;
        start?: string | undefined;
        svgClassName?: string | undefined;
        svgStyle?: object | undefined;
    };
    borderRadius: string;
    end: string;
    height: number | null;
    label: string;
    labelPosition: "start" | "innerCenter" | "innerStart" | "innerEnd" | "end" | "none";
    labelStyle: object;
    progress: {
        borderRadius?: string | undefined;
        height?: string | undefined;
        svgClassName?: string | undefined;
        svgStyle?: object | undefined;
        value?: number | undefined;
    };
    rowId?: any;
    shortDesc: string | null;
    start: string;
    svgClassName: string;
    svgStyle: object;
    type: "normal" | "milestone" | "summary" | "auto";
}
export interface ojGanttTaskSettablePropertiesLenient extends Partial<ojGanttTaskSettableProperties> {
    [key: string]: any;
}
