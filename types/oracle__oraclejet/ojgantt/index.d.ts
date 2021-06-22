import { ojTimeAxis } from '../ojtimeaxis';
import { Converter } from '../ojvalidation-base';
import { DataProvider } from '../ojdataprovider';
import { dvtTimeComponent, dvtTimeComponentEventMap, dvtTimeComponentSettableProperties } from '../ojtime-base';
import { JetElement, JetSettableProperties, JetElementCustomEvent, JetSetPropertyType } from '..';
export interface ojGantt<K1, K2, D1, D2> extends dvtTimeComponent<ojGanttSettableProperties<K1, K2, D1, D2>> {
    animationOnDataChange: 'auto' | 'none';
    animationOnDisplay: 'auto' | 'none';
    as: string;
    axisPosition: 'bottom' | 'top';
    dependencyData?: (DataProvider<K1, D1>);
    dnd: {
        move?: {
            tasks?: 'disabled' | 'enabled';
        };
    };
    end: string;
    gridlines: {
        horizontal?: 'hidden' | 'visible' | 'auto';
        vertical?: 'hidden' | 'visible' | 'auto';
    };
    majorAxis: {
        converter?: (ojTimeAxis.Converters | Converter<string>);
        height?: number;
        scale: 'seconds' | 'minutes' | 'hours' | 'days' | 'weeks' | 'months' | 'quarters' | 'years';
        zoomOrder?: string[];
    };
    minorAxis: {
        converter?: (ojTimeAxis.Converters | Converter<string>);
        height?: number;
        scale: 'seconds' | 'minutes' | 'hours' | 'days' | 'weeks' | 'months' | 'quarters' | 'years';
        zoomOrder?: string[];
    };
    referenceObjects: ojGantt.ReferenceObject[];
    rowAxis: {
        label?: {
            renderer: ((context: ojGantt.RowAxisLabelRendererContext<K2, D2>) => ({
                insert: Element;
            }));
        };
        maxWidth?: string;
        rendered?: 'on' | 'off';
        width?: string;
    };
    rowDefaults: {
        height?: number;
    };
    scrollPosition: {
        offsetY?: number;
        rowIndex?: number;
        y?: number;
    };
    selection: K2[];
    selectionMode: 'single' | 'multiple' | 'none';
    start: string;
    taskData?: (DataProvider<K2, D2>);
    taskDefaults: {
        baseline?: {
            borderRadius?: string;
            height?: number;
            svgClassName?: string;
            svgStyle?: object;
        };
        borderRadius?: string;
        height?: number;
        labelPosition?: (string | string[]);
        progress?: {
            borderRadius?: string;
            height?: string;
            svgClassName?: string;
            svgStyle?: object;
        };
        svgClassName?: string;
        svgStyle?: object;
        type?: 'normal' | 'milestone' | 'summary' | 'auto';
    };
    tooltip: {
        renderer: ((context: ojGantt.TooltipContext<K2, D2>) => ({
            insert: Element | string;
        } | {
            preventDefault: boolean;
        }));
    };
    valueFormats: {
        baselineDate?: {
            converter?: (Converter<string>);
            tooltipDisplay?: 'off' | 'auto';
            tooltipLabel?: string;
        };
        baselineEnd?: {
            converter?: (Converter<string>);
            tooltipDisplay?: 'off' | 'auto';
            tooltipLabel?: string;
        };
        baselineStart?: {
            converter?: (Converter<string>);
            tooltipDisplay?: 'off' | 'auto';
            tooltipLabel?: string;
        };
        date?: {
            converter?: (Converter<string>);
            tooltipDisplay?: 'off' | 'auto';
            tooltipLabel?: string;
        };
        end?: {
            converter?: (Converter<string>);
            tooltipDisplay?: 'off' | 'auto';
            tooltipLabel?: string;
        };
        label?: {
            tooltipDisplay?: 'off' | 'auto';
            tooltipLabel?: string;
        };
        progress?: {
            converter?: (Converter<number>);
            tooltipDisplay?: 'off' | 'auto';
            tooltipLabel?: string;
        };
        row?: {
            tooltipDisplay?: 'off' | 'auto';
            tooltipLabel?: string;
        };
        start?: {
            converter?: (Converter<string>);
            tooltipDisplay?: 'off' | 'auto';
            tooltipLabel?: string;
        };
    };
    viewportEnd: string;
    viewportStart: string;
    translations: {
        accessibleDependencyInfo?: string;
        accessiblePredecessorInfo?: string;
        accessibleSuccessorInfo?: string;
        accessibleTaskTypeMilestone?: string;
        accessibleTaskTypeSummary?: string;
        componentName?: string;
        finishFinishDependencyAriaDesc?: string;
        finishStartDependencyAriaDesc?: string;
        labelAndValue?: string;
        labelBaselineDate?: string;
        labelBaselineEnd?: string;
        labelBaselineStart?: string;
        labelClearSelection?: string;
        labelCountWithTotal?: string;
        labelDataVisualization?: string;
        labelDate?: string;
        labelEnd?: string;
        labelInvalidData?: string;
        labelLabel?: string;
        labelMoveBy?: string;
        labelNoData?: string;
        labelProgress?: string;
        labelRow?: string;
        labelStart?: string;
        startFinishDependencyAriaDesc?: string;
        startStartDependencyAriaDesc?: string;
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
        taskMoveCancelled?: string;
        taskMoveFinalized?: string;
        taskMoveInitiated?: string;
        taskMoveInitiatedInstruction?: string;
        taskMoveSelectionInfo?: string;
        tooltipZoomIn?: string;
        tooltipZoomOut?: string;
    };
    onAnimationOnDataChangeChanged: ((event: JetElementCustomEvent<ojGantt<K1, K2, D1, D2>["animationOnDataChange"]>) => any) | null;
    onAnimationOnDisplayChanged: ((event: JetElementCustomEvent<ojGantt<K1, K2, D1, D2>["animationOnDisplay"]>) => any) | null;
    onAsChanged: ((event: JetElementCustomEvent<ojGantt<K1, K2, D1, D2>["as"]>) => any) | null;
    onAxisPositionChanged: ((event: JetElementCustomEvent<ojGantt<K1, K2, D1, D2>["axisPosition"]>) => any) | null;
    onDependencyDataChanged: ((event: JetElementCustomEvent<ojGantt<K1, K2, D1, D2>["dependencyData"]>) => any) | null;
    onDndChanged: ((event: JetElementCustomEvent<ojGantt<K1, K2, D1, D2>["dnd"]>) => any) | null;
    onEndChanged: ((event: JetElementCustomEvent<ojGantt<K1, K2, D1, D2>["end"]>) => any) | null;
    onGridlinesChanged: ((event: JetElementCustomEvent<ojGantt<K1, K2, D1, D2>["gridlines"]>) => any) | null;
    onMajorAxisChanged: ((event: JetElementCustomEvent<ojGantt<K1, K2, D1, D2>["majorAxis"]>) => any) | null;
    onMinorAxisChanged: ((event: JetElementCustomEvent<ojGantt<K1, K2, D1, D2>["minorAxis"]>) => any) | null;
    onReferenceObjectsChanged: ((event: JetElementCustomEvent<ojGantt<K1, K2, D1, D2>["referenceObjects"]>) => any) | null;
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
    addEventListener<T extends keyof ojGanttEventMap<K1, K2, D1, D2>>(type: T, listener: (this: HTMLElement, ev: ojGanttEventMap<K1, K2, D1, D2>[T]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    getProperty<T extends keyof ojGanttSettableProperties<K1, K2, D1, D2>>(property: T): ojGantt<K1, K2, D1, D2>[T];
    getProperty(property: string): any;
    setProperty<T extends keyof ojGanttSettableProperties<K1, K2, D1, D2>>(property: T, value: ojGanttSettableProperties<K1, K2, D1, D2>[T]): void;
    setProperty<T extends string>(property: T, value: JetSetPropertyType<T, ojGanttSettableProperties<K1, K2, D1, D2>>): void;
    setProperties(properties: ojGanttSettablePropertiesLenient<K1, K2, D1, D2>): void;
    getContextByNode(node: Element): {
        subId: 'oj-gantt-row-label';
        index: number;
    } | {
        subId: 'oj-gantt-taskbar';
        rowIndex: number;
        index: number;
    } | null;
}
export namespace ojGantt {
    interface ojMove<K2, D2> extends CustomEvent<{
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
    }> {
    }
    interface ojViewportChange extends CustomEvent<{
        viewportStart: string;
        viewportEnd: string;
        majorAxisScale: string;
        minorAxisScale: string;
        [propName: string]: any;
    }> {
    }
    // tslint:disable-next-line interface-over-type-literal
    type Dependency<K1, K2> = {
        id: K1;
        predecessorTaskId: K2;
        shortDesc?: string;
        successorTaskId: K2;
        svgClassName?: string;
        svgStyle?: object;
        type?: 'startStart' | 'startFinish' | 'finishFinish' | 'finishStart';
    };
    // tslint:disable-next-line interface-over-type-literal
    type ReferenceObject = {
        svgClassName?: string;
        svgStyle?: object;
        value?: string;
    };
    // tslint:disable-next-line interface-over-type-literal
    type Row<K2> = {
        id?: any;
        label?: string;
        labelStyle?: object;
        tasks?: Array<RowTask<K2>>;
    };
    // tslint:disable-next-line interface-over-type-literal
    type RowAxisLabelRendererContext<K2, D2> = {
        parentElement: Element;
        rowData: Row<K2>;
        itemData: D2[];
        componentElement: Element;
        maxWidth: number;
        maxHeight: number;
    };
    // tslint:disable-next-line interface-over-type-literal
    type RowTask<K2> = {
        borderRadius?: string;
        end?: string;
        height?: number;
        id: K2;
        label?: string;
        labelPosition?: string | string[];
        labelStyle?: object;
        start?: string;
        shortDesc?: string;
        svgClassName?: string;
        svgStyle?: object;
        type?: 'normal' | 'milestone' | 'summary' | 'auto';
        progress?: {
            borderRadius?: string;
            height?: string;
            svgClassName?: string;
            svgStyle?: object;
            value?: number;
        };
        baseline?: {
            borderRadius?: string;
            end?: string;
            height?: number;
            start?: string;
            svgClassName?: string;
            svgStyle?: object;
        };
    };
    // tslint:disable-next-line interface-over-type-literal
    type TooltipContext<K2, D2> = {
        parentElement: Element;
        data: RowTask<K2>;
        rowData: Row<K2>;
        itemData: D2;
        componentElement: Element;
        color: string;
    };
}
export interface ojGanttEventMap<K1, K2, D1, D2> extends dvtTimeComponentEventMap<ojGanttSettableProperties<K1, K2, D1, D2>> {
    'ojMove': ojGantt.ojMove<K2, D2>;
    'ojViewportChange': ojGantt.ojViewportChange;
    'animationOnDataChangeChanged': JetElementCustomEvent<ojGantt<K1, K2, D1, D2>["animationOnDataChange"]>;
    'animationOnDisplayChanged': JetElementCustomEvent<ojGantt<K1, K2, D1, D2>["animationOnDisplay"]>;
    'asChanged': JetElementCustomEvent<ojGantt<K1, K2, D1, D2>["as"]>;
    'axisPositionChanged': JetElementCustomEvent<ojGantt<K1, K2, D1, D2>["axisPosition"]>;
    'dependencyDataChanged': JetElementCustomEvent<ojGantt<K1, K2, D1, D2>["dependencyData"]>;
    'dndChanged': JetElementCustomEvent<ojGantt<K1, K2, D1, D2>["dnd"]>;
    'endChanged': JetElementCustomEvent<ojGantt<K1, K2, D1, D2>["end"]>;
    'gridlinesChanged': JetElementCustomEvent<ojGantt<K1, K2, D1, D2>["gridlines"]>;
    'majorAxisChanged': JetElementCustomEvent<ojGantt<K1, K2, D1, D2>["majorAxis"]>;
    'minorAxisChanged': JetElementCustomEvent<ojGantt<K1, K2, D1, D2>["minorAxis"]>;
    'referenceObjectsChanged': JetElementCustomEvent<ojGantt<K1, K2, D1, D2>["referenceObjects"]>;
    'rowAxisChanged': JetElementCustomEvent<ojGantt<K1, K2, D1, D2>["rowAxis"]>;
    'rowDefaultsChanged': JetElementCustomEvent<ojGantt<K1, K2, D1, D2>["rowDefaults"]>;
    'scrollPositionChanged': JetElementCustomEvent<ojGantt<K1, K2, D1, D2>["scrollPosition"]>;
    'selectionChanged': JetElementCustomEvent<ojGantt<K1, K2, D1, D2>["selection"]>;
    'selectionModeChanged': JetElementCustomEvent<ojGantt<K1, K2, D1, D2>["selectionMode"]>;
    'startChanged': JetElementCustomEvent<ojGantt<K1, K2, D1, D2>["start"]>;
    'taskDataChanged': JetElementCustomEvent<ojGantt<K1, K2, D1, D2>["taskData"]>;
    'taskDefaultsChanged': JetElementCustomEvent<ojGantt<K1, K2, D1, D2>["taskDefaults"]>;
    'tooltipChanged': JetElementCustomEvent<ojGantt<K1, K2, D1, D2>["tooltip"]>;
    'valueFormatsChanged': JetElementCustomEvent<ojGantt<K1, K2, D1, D2>["valueFormats"]>;
    'viewportEndChanged': JetElementCustomEvent<ojGantt<K1, K2, D1, D2>["viewportEnd"]>;
    'viewportStartChanged': JetElementCustomEvent<ojGantt<K1, K2, D1, D2>["viewportStart"]>;
}
export interface ojGanttSettableProperties<K1, K2, D1, D2> extends dvtTimeComponentSettableProperties {
    animationOnDataChange: 'auto' | 'none';
    animationOnDisplay: 'auto' | 'none';
    as: string;
    axisPosition: 'bottom' | 'top';
    dependencyData?: (DataProvider<K1, D1>);
    dnd: {
        move?: {
            tasks?: 'disabled' | 'enabled';
        };
    };
    end: string;
    gridlines: {
        horizontal?: 'hidden' | 'visible' | 'auto';
        vertical?: 'hidden' | 'visible' | 'auto';
    };
    majorAxis: {
        converter?: (ojTimeAxis.Converters | Converter<string>);
        height?: number;
        scale: 'seconds' | 'minutes' | 'hours' | 'days' | 'weeks' | 'months' | 'quarters' | 'years';
        zoomOrder?: string[];
    };
    minorAxis: {
        converter?: (ojTimeAxis.Converters | Converter<string>);
        height?: number;
        scale: 'seconds' | 'minutes' | 'hours' | 'days' | 'weeks' | 'months' | 'quarters' | 'years';
        zoomOrder?: string[];
    };
    referenceObjects: ojGantt.ReferenceObject[];
    rowAxis: {
        label?: {
            renderer: ((context: ojGantt.RowAxisLabelRendererContext<K2, D2>) => ({
                insert: Element;
            }));
        };
        maxWidth?: string;
        rendered?: 'on' | 'off';
        width?: string;
    };
    rowDefaults: {
        height?: number;
    };
    scrollPosition: {
        offsetY?: number;
        rowIndex?: number;
        y?: number;
    };
    selection: K2[];
    selectionMode: 'single' | 'multiple' | 'none';
    start: string;
    taskData?: (DataProvider<K2, D2>);
    taskDefaults: {
        baseline?: {
            borderRadius?: string;
            height?: number;
            svgClassName?: string;
            svgStyle?: object;
        };
        borderRadius?: string;
        height?: number;
        labelPosition?: (string | string[]);
        progress?: {
            borderRadius?: string;
            height?: string;
            svgClassName?: string;
            svgStyle?: object;
        };
        svgClassName?: string;
        svgStyle?: object;
        type?: 'normal' | 'milestone' | 'summary' | 'auto';
    };
    tooltip: {
        renderer: ((context: ojGantt.TooltipContext<K2, D2>) => ({
            insert: Element | string;
        } | {
            preventDefault: boolean;
        }));
    };
    valueFormats: {
        baselineDate?: {
            converter?: (Converter<string>);
            tooltipDisplay?: 'off' | 'auto';
            tooltipLabel?: string;
        };
        baselineEnd?: {
            converter?: (Converter<string>);
            tooltipDisplay?: 'off' | 'auto';
            tooltipLabel?: string;
        };
        baselineStart?: {
            converter?: (Converter<string>);
            tooltipDisplay?: 'off' | 'auto';
            tooltipLabel?: string;
        };
        date?: {
            converter?: (Converter<string>);
            tooltipDisplay?: 'off' | 'auto';
            tooltipLabel?: string;
        };
        end?: {
            converter?: (Converter<string>);
            tooltipDisplay?: 'off' | 'auto';
            tooltipLabel?: string;
        };
        label?: {
            tooltipDisplay?: 'off' | 'auto';
            tooltipLabel?: string;
        };
        progress?: {
            converter?: (Converter<number>);
            tooltipDisplay?: 'off' | 'auto';
            tooltipLabel?: string;
        };
        row?: {
            tooltipDisplay?: 'off' | 'auto';
            tooltipLabel?: string;
        };
        start?: {
            converter?: (Converter<string>);
            tooltipDisplay?: 'off' | 'auto';
            tooltipLabel?: string;
        };
    };
    viewportEnd: string;
    viewportStart: string;
    translations: {
        accessibleDependencyInfo?: string;
        accessiblePredecessorInfo?: string;
        accessibleSuccessorInfo?: string;
        accessibleTaskTypeMilestone?: string;
        accessibleTaskTypeSummary?: string;
        componentName?: string;
        finishFinishDependencyAriaDesc?: string;
        finishStartDependencyAriaDesc?: string;
        labelAndValue?: string;
        labelBaselineDate?: string;
        labelBaselineEnd?: string;
        labelBaselineStart?: string;
        labelClearSelection?: string;
        labelCountWithTotal?: string;
        labelDataVisualization?: string;
        labelDate?: string;
        labelEnd?: string;
        labelInvalidData?: string;
        labelLabel?: string;
        labelMoveBy?: string;
        labelNoData?: string;
        labelProgress?: string;
        labelRow?: string;
        labelStart?: string;
        startFinishDependencyAriaDesc?: string;
        startStartDependencyAriaDesc?: string;
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
        taskMoveCancelled?: string;
        taskMoveFinalized?: string;
        taskMoveInitiated?: string;
        taskMoveInitiatedInstruction?: string;
        taskMoveSelectionInfo?: string;
        tooltipZoomIn?: string;
        tooltipZoomOut?: string;
    };
}
export interface ojGanttSettablePropertiesLenient<K1, K2, D1, D2> extends Partial<ojGanttSettableProperties<K1, K2, D1, D2>> {
    [key: string]: any;
}
export interface ojGanttDependency extends JetElement<ojGanttDependencySettableProperties> {
    predecessorTaskId: any;
    shortDesc: string | null;
    successorTaskId: any;
    svgClassName: string;
    svgStyle: object;
    type: 'finishStart' | 'finishFinish' | 'startStart' | 'startFinish';
    onPredecessorTaskIdChanged: ((event: JetElementCustomEvent<ojGanttDependency["predecessorTaskId"]>) => any) | null;
    onShortDescChanged: ((event: JetElementCustomEvent<ojGanttDependency["shortDesc"]>) => any) | null;
    onSuccessorTaskIdChanged: ((event: JetElementCustomEvent<ojGanttDependency["successorTaskId"]>) => any) | null;
    onSvgClassNameChanged: ((event: JetElementCustomEvent<ojGanttDependency["svgClassName"]>) => any) | null;
    onSvgStyleChanged: ((event: JetElementCustomEvent<ojGanttDependency["svgStyle"]>) => any) | null;
    onTypeChanged: ((event: JetElementCustomEvent<ojGanttDependency["type"]>) => any) | null;
    addEventListener<T extends keyof ojGanttDependencyEventMap>(type: T, listener: (this: HTMLElement, ev: ojGanttDependencyEventMap[T]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    getProperty<T extends keyof ojGanttDependencySettableProperties>(property: T): ojGanttDependency[T];
    getProperty(property: string): any;
    setProperty<T extends keyof ojGanttDependencySettableProperties>(property: T, value: ojGanttDependencySettableProperties[T]): void;
    setProperty<T extends string>(property: T, value: JetSetPropertyType<T, ojGanttDependencySettableProperties>): void;
    setProperties(properties: ojGanttDependencySettablePropertiesLenient): void;
}
export interface ojGanttDependencyEventMap extends HTMLElementEventMap {
    'predecessorTaskIdChanged': JetElementCustomEvent<ojGanttDependency["predecessorTaskId"]>;
    'shortDescChanged': JetElementCustomEvent<ojGanttDependency["shortDesc"]>;
    'successorTaskIdChanged': JetElementCustomEvent<ojGanttDependency["successorTaskId"]>;
    'svgClassNameChanged': JetElementCustomEvent<ojGanttDependency["svgClassName"]>;
    'svgStyleChanged': JetElementCustomEvent<ojGanttDependency["svgStyle"]>;
    'typeChanged': JetElementCustomEvent<ojGanttDependency["type"]>;
}
export interface ojGanttDependencySettableProperties extends JetSettableProperties {
    predecessorTaskId: any;
    shortDesc: string | null;
    successorTaskId: any;
    svgClassName: string;
    svgStyle: object;
    type: 'finishStart' | 'finishFinish' | 'startStart' | 'startFinish';
}
export interface ojGanttDependencySettablePropertiesLenient extends Partial<ojGanttDependencySettableProperties> {
    [key: string]: any;
}
export interface ojGanttRow extends JetElement<ojGanttRowSettableProperties> {
    label: string;
    labelStyle: object;
    onLabelChanged: ((event: JetElementCustomEvent<ojGanttRow["label"]>) => any) | null;
    onLabelStyleChanged: ((event: JetElementCustomEvent<ojGanttRow["labelStyle"]>) => any) | null;
    addEventListener<T extends keyof ojGanttRowEventMap>(type: T, listener: (this: HTMLElement, ev: ojGanttRowEventMap[T]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    getProperty<T extends keyof ojGanttRowSettableProperties>(property: T): ojGanttRow[T];
    getProperty(property: string): any;
    setProperty<T extends keyof ojGanttRowSettableProperties>(property: T, value: ojGanttRowSettableProperties[T]): void;
    setProperty<T extends string>(property: T, value: JetSetPropertyType<T, ojGanttRowSettableProperties>): void;
    setProperties(properties: ojGanttRowSettablePropertiesLenient): void;
}
export interface ojGanttRowEventMap extends HTMLElementEventMap {
    'labelChanged': JetElementCustomEvent<ojGanttRow["label"]>;
    'labelStyleChanged': JetElementCustomEvent<ojGanttRow["labelStyle"]>;
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
        borderRadius?: string;
        end?: string;
        height?: number;
        start?: string;
        svgClassName?: string;
        svgStyle?: object;
    };
    borderRadius: string;
    end: string;
    height: number | null;
    label: string;
    labelPosition: 'start' | 'innerCenter' | 'innerStart' | 'innerEnd' | 'end' | 'none';
    labelStyle: object;
    progress: {
        borderRadius?: string;
        height?: string;
        svgClassName?: string;
        svgStyle?: object;
        value?: number;
    };
    rowId?: any;
    shortDesc: string | null;
    start: string;
    svgClassName: string;
    svgStyle: object;
    type: 'normal' | 'milestone' | 'summary' | 'auto';
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
    addEventListener<T extends keyof ojGanttTaskEventMap>(type: T, listener: (this: HTMLElement, ev: ojGanttTaskEventMap[T]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    getProperty<T extends keyof ojGanttTaskSettableProperties>(property: T): ojGanttTask[T];
    getProperty(property: string): any;
    setProperty<T extends keyof ojGanttTaskSettableProperties>(property: T, value: ojGanttTaskSettableProperties[T]): void;
    setProperty<T extends string>(property: T, value: JetSetPropertyType<T, ojGanttTaskSettableProperties>): void;
    setProperties(properties: ojGanttTaskSettablePropertiesLenient): void;
}
export interface ojGanttTaskEventMap extends HTMLElementEventMap {
    'baselineChanged': JetElementCustomEvent<ojGanttTask["baseline"]>;
    'borderRadiusChanged': JetElementCustomEvent<ojGanttTask["borderRadius"]>;
    'endChanged': JetElementCustomEvent<ojGanttTask["end"]>;
    'heightChanged': JetElementCustomEvent<ojGanttTask["height"]>;
    'labelChanged': JetElementCustomEvent<ojGanttTask["label"]>;
    'labelPositionChanged': JetElementCustomEvent<ojGanttTask["labelPosition"]>;
    'labelStyleChanged': JetElementCustomEvent<ojGanttTask["labelStyle"]>;
    'progressChanged': JetElementCustomEvent<ojGanttTask["progress"]>;
    'rowIdChanged': JetElementCustomEvent<ojGanttTask["rowId"]>;
    'shortDescChanged': JetElementCustomEvent<ojGanttTask["shortDesc"]>;
    'startChanged': JetElementCustomEvent<ojGanttTask["start"]>;
    'svgClassNameChanged': JetElementCustomEvent<ojGanttTask["svgClassName"]>;
    'svgStyleChanged': JetElementCustomEvent<ojGanttTask["svgStyle"]>;
    'typeChanged': JetElementCustomEvent<ojGanttTask["type"]>;
}
export interface ojGanttTaskSettableProperties extends JetSettableProperties {
    baseline: {
        borderRadius?: string;
        end?: string;
        height?: number;
        start?: string;
        svgClassName?: string;
        svgStyle?: object;
    };
    borderRadius: string;
    end: string;
    height: number | null;
    label: string;
    labelPosition: 'start' | 'innerCenter' | 'innerStart' | 'innerEnd' | 'end' | 'none';
    labelStyle: object;
    progress: {
        borderRadius?: string;
        height?: string;
        svgClassName?: string;
        svgStyle?: object;
        value?: number;
    };
    rowId?: any;
    shortDesc: string | null;
    start: string;
    svgClassName: string;
    svgStyle: object;
    type: 'normal' | 'milestone' | 'summary' | 'auto';
}
export interface ojGanttTaskSettablePropertiesLenient extends Partial<ojGanttTaskSettableProperties> {
    [key: string]: any;
}
