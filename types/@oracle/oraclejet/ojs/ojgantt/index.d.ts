/// <reference types='ojs/ojtime-base'/>
/// <reference types='ojs/ojdataprovider'/>
declare namespace oj {  
  class ojGantt<K1, K2, D1, D2> extends dvtTimeComponent<ojGanttSettableProperties<K1, K2, D1, D2>> {
    animationOnDataChange: 'auto'|'none';
    animationOnDisplay: 'auto'|'none';
    as: string;
    axisPosition: 'bottom'|'top';
    dependencyData?: (oj.DataProvider<K1, D1>);
    dnd: {move?: {tasks?: 'disabled'|'enabled'}};
    end: string;
    gridlines: {horizontal?: 'hidden'|'visible'|'auto', vertical?: 'hidden'|'visible'|'auto'};
    majorAxis: {converter?: (oj.ojTimeAxis.Converter|oj.Converter<string>), height?: number, scale: 'seconds'|'minutes'|'hours'|'days'|'weeks'|'months'|'quarters'|'years', zoomOrder?: Array<string>};
    minorAxis: {converter?: (oj.ojTimeAxis.Converter|oj.Converter<string>), height?: number, scale: 'seconds'|'minutes'|'hours'|'days'|'weeks'|'months'|'quarters'|'years', zoomOrder?: Array<string>};
    referenceObjects: Array<oj.ojGantt.ReferenceObject>;
    rowAxis: {label?: {renderer: ((context: oj.ojGantt.RowAxisLabelRendererContext<K2, D2>) => ({insert: Element}))}, maxWidth?: string, rendered?: 'on'|'off', width?: string};
    rowDefaults: {height?: number};
    scrollPosition: {offsetY?: number, rowIndex?: number, y?: number};
    selection: Array<K2>;
    selectionMode: 'single'|'multiple'|'none';
    start: string;
    taskData?: (oj.DataProvider<K2, D2>);
    taskDefaults: {baseline?: {borderRadius?: string, height?: number, svgClassName?: string, svgStyle?: object}, borderRadius?: string, height?: number, labelPosition?: (string|Array<string>), progress?: {borderRadius?: string, height?: string, svgClassName?: string, svgStyle?: object}, svgClassName?: string, svgStyle?: object, type?: 'normal'|'milestone'|'summary'|'auto'};
    tooltip: {renderer: ((context: oj.ojGantt.TooltipContext<K2, D2>) => ({insert: Element|string}|{preventDefault: boolean}))};
    valueFormats: {baselineDate?: {converter?: (oj.Converter<string>), tooltipDisplay?: 'off'|'auto', tooltipLabel?: string}, baselineEnd?: {converter?: (oj.Converter<string>), tooltipDisplay?: 'off'|'auto', tooltipLabel?: string}, baselineStart?: {converter?: (oj.Converter<string>), tooltipDisplay?: 'off'|'auto', tooltipLabel?: string}, date?: {converter?: (oj.Converter<string>), tooltipDisplay?: 'off'|'auto', tooltipLabel?: string}, end?: {converter?: (oj.Converter<string>), tooltipDisplay?: 'off'|'auto', tooltipLabel?: string}, label?: {tooltipDisplay?: 'off'|'auto', tooltipLabel?: string}, progress?: {converter?: (oj.Converter<number>), tooltipDisplay?: 'off'|'auto', tooltipLabel?: string}, row?: {tooltipDisplay?: 'off'|'auto', tooltipLabel?: string}, start?: {converter?: (oj.Converter<string>), tooltipDisplay?: 'off'|'auto', tooltipLabel?: string}};
    viewportEnd: string;
    viewportStart: string;
    translations: {accessibleDependencyInfo?: string, accessiblePredecessorInfo?: string, accessibleSuccessorInfo?: string, accessibleTaskTypeMilestone?: string, accessibleTaskTypeSummary?: string, componentName?: string, finishFinishDependencyAriaDesc?: string, finishStartDependencyAriaDesc?: string, labelAndValue?: string, labelBaselineDate?: string, labelBaselineEnd?: string, labelBaselineStart?: string, labelClearSelection?: string, labelCountWithTotal?: string, labelDataVisualization?: string, labelDate?: string, labelEnd?: string, labelInvalidData?: string, labelLabel?: string, labelMoveBy?: string, labelNoData?: string, labelProgress?: string, labelRow?: string, labelStart?: string, startFinishDependencyAriaDesc?: string, startStartDependencyAriaDesc?: string, stateCollapsed?: string, stateDrillable?: string, stateExpanded?: string, stateHidden?: string, stateIsolated?: string, stateMaximized?: string, stateMinimized?: string, stateSelected?: string, stateUnselected?: string, stateVisible?: string, taskMoveCancelled?: string, taskMoveFinalized?: string, taskMoveInitiated?: string, taskMoveInitiatedInstruction?: string, taskMoveSelectionInfo?: string, tooltipZoomIn?: string, tooltipZoomOut?: string};
    onAnimationOnDataChangeChanged: (event: CustomEvent)=> any;
    onAnimationOnDisplayChanged: (event: CustomEvent)=> any;
    onAsChanged: (event: CustomEvent)=> any;
    onAxisPositionChanged: (event: CustomEvent)=> any;
    onDependencyDataChanged: (event: CustomEvent)=> any;
    onDndChanged: (event: CustomEvent)=> any;
    onEndChanged: (event: CustomEvent)=> any;
    onGridlinesChanged: (event: CustomEvent)=> any;
    onMajorAxisChanged: (event: CustomEvent)=> any;
    onMinorAxisChanged: (event: CustomEvent)=> any;
    onReferenceObjectsChanged: (event: CustomEvent)=> any;
    onRowAxisChanged: (event: CustomEvent)=> any;
    onRowDefaultsChanged: (event: CustomEvent)=> any;
    onScrollPositionChanged: (event: CustomEvent)=> any;
    onSelectionChanged: (event: CustomEvent)=> any;
    onSelectionModeChanged: (event: CustomEvent)=> any;
    onStartChanged: (event: CustomEvent)=> any;
    onTaskDataChanged: (event: CustomEvent)=> any;
    onTaskDefaultsChanged: (event: CustomEvent)=> any;
    onTooltipChanged: (event: CustomEvent)=> any;
    onValueFormatsChanged: (event: CustomEvent)=> any;
    onViewportEndChanged: (event: CustomEvent)=> any;
    onViewportStartChanged: (event: CustomEvent)=> any;
    onOjMove: (event: oj.ojGantt.ojMove<K2, D2>)=> any;
    onOjViewportChange: (event: oj.ojGantt.ojViewportChange)=> any;

    addEventListener<T extends keyof ojGanttEventMap<K2, D2>>(type: T, listener: (this: HTMLElement, ev: ojGanttEventMap<K2, D2>[T]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    
    getContextByNode(node: Element): {subId: 'oj-gantt-row-label', index: number} | {subId: 'oj-gantt-taskbar', rowIndex: number, index: number} | null;
  }
  namespace ojGantt {
    class ojMove<K2, D2> extends CustomEvent<{taskContexts: Array<{data: oj.ojGantt.RowTask<K2>, rowData: oj.ojGantt.Row<K2>, itemData: D2|null, color: string}>, value: string, start: string, end: string, baselineStart: string, baselineEnd: string, rowContext: {rowData: oj.ojGantt.Row<K2>, componentElement: Element}, [propName: string]: any}> {
      
    }
  
    class ojViewportChange extends CustomEvent<{viewportStart: string, viewportEnd: string, majorAxisScale: string, minorAxisScale: string, [propName: string]: any}> {
      
    }
  }
  interface ojGanttEventMap<K2, D2> extends oj.dvtTimeComponentEventMap {
    'ojMove': oj.ojGantt.ojMove<K2, D2>;
    'ojViewportChange': oj.ojGantt.ojViewportChange;
    'animationOnDataChangeChanged': CustomEvent;
    'animationOnDisplayChanged': CustomEvent;
    'asChanged': CustomEvent;
    'axisPositionChanged': CustomEvent;
    'dependencyDataChanged': CustomEvent;
    'dndChanged': CustomEvent;
    'endChanged': CustomEvent;
    'gridlinesChanged': CustomEvent;
    'majorAxisChanged': CustomEvent;
    'minorAxisChanged': CustomEvent;
    'referenceObjectsChanged': CustomEvent;
    'rowAxisChanged': CustomEvent;
    'rowDefaultsChanged': CustomEvent;
    'scrollPositionChanged': CustomEvent;
    'selectionChanged': CustomEvent;
    'selectionModeChanged': CustomEvent;
    'startChanged': CustomEvent;
    'taskDataChanged': CustomEvent;
    'taskDefaultsChanged': CustomEvent;
    'tooltipChanged': CustomEvent;
    'valueFormatsChanged': CustomEvent;
    'viewportEndChanged': CustomEvent;
    'viewportStartChanged': CustomEvent;
  }
  interface ojGanttSettableProperties<K1, K2, D1, D2> extends dvtTimeComponentSettableProperties {
    animationOnDataChange: 'auto'|'none';
    animationOnDisplay: 'auto'|'none';
    as: string;
    axisPosition: 'bottom'|'top';
    dependencyData?: (oj.DataProvider<K1, D1>);
    dnd: {move?: {tasks?: 'disabled'|'enabled'}};
    end: string;
    gridlines: {horizontal?: 'hidden'|'visible'|'auto', vertical?: 'hidden'|'visible'|'auto'};
    majorAxis: {converter?: (oj.ojTimeAxis.Converter|oj.Converter<string>), height?: number, scale: 'seconds'|'minutes'|'hours'|'days'|'weeks'|'months'|'quarters'|'years', zoomOrder?: Array<string>};
    minorAxis: {converter?: (oj.ojTimeAxis.Converter|oj.Converter<string>), height?: number, scale: 'seconds'|'minutes'|'hours'|'days'|'weeks'|'months'|'quarters'|'years', zoomOrder?: Array<string>};
    referenceObjects: Array<oj.ojGantt.ReferenceObject>;
    rowAxis: {label?: {renderer: ((context: oj.ojGantt.RowAxisLabelRendererContext<K2, D2>) => ({insert: Element}))}, maxWidth?: string, rendered?: 'on'|'off', width?: string};
    rowDefaults: {height?: number};
    scrollPosition: {offsetY?: number, rowIndex?: number, y?: number};
    selection: Array<K2>;
    selectionMode: 'single'|'multiple'|'none';
    start: string;
    taskData?: (oj.DataProvider<K2, D2>);
    taskDefaults: {baseline?: {borderRadius?: string, height?: number, svgClassName?: string, svgStyle?: object}, borderRadius?: string, height?: number, labelPosition?: (string|Array<string>), progress?: {borderRadius?: string, height?: string, svgClassName?: string, svgStyle?: object}, svgClassName?: string, svgStyle?: object, type?: 'normal'|'milestone'|'summary'|'auto'};
    tooltip: {renderer: ((context: oj.ojGantt.TooltipContext<K2, D2>) => ({insert: Element|string}|{preventDefault: boolean}))};
    valueFormats: {baselineDate?: {converter?: (oj.Converter<string>), tooltipDisplay?: 'off'|'auto', tooltipLabel?: string}, baselineEnd?: {converter?: (oj.Converter<string>), tooltipDisplay?: 'off'|'auto', tooltipLabel?: string}, baselineStart?: {converter?: (oj.Converter<string>), tooltipDisplay?: 'off'|'auto', tooltipLabel?: string}, date?: {converter?: (oj.Converter<string>), tooltipDisplay?: 'off'|'auto', tooltipLabel?: string}, end?: {converter?: (oj.Converter<string>), tooltipDisplay?: 'off'|'auto', tooltipLabel?: string}, label?: {tooltipDisplay?: 'off'|'auto', tooltipLabel?: string}, progress?: {converter?: (oj.Converter<number>), tooltipDisplay?: 'off'|'auto', tooltipLabel?: string}, row?: {tooltipDisplay?: 'off'|'auto', tooltipLabel?: string}, start?: {converter?: (oj.Converter<string>), tooltipDisplay?: 'off'|'auto', tooltipLabel?: string}};
    viewportEnd: string;
    viewportStart: string;
    translations: {accessibleDependencyInfo?: string, accessiblePredecessorInfo?: string, accessibleSuccessorInfo?: string, accessibleTaskTypeMilestone?: string, accessibleTaskTypeSummary?: string, componentName?: string, finishFinishDependencyAriaDesc?: string, finishStartDependencyAriaDesc?: string, labelAndValue?: string, labelBaselineDate?: string, labelBaselineEnd?: string, labelBaselineStart?: string, labelClearSelection?: string, labelCountWithTotal?: string, labelDataVisualization?: string, labelDate?: string, labelEnd?: string, labelInvalidData?: string, labelLabel?: string, labelMoveBy?: string, labelNoData?: string, labelProgress?: string, labelRow?: string, labelStart?: string, startFinishDependencyAriaDesc?: string, startStartDependencyAriaDesc?: string, stateCollapsed?: string, stateDrillable?: string, stateExpanded?: string, stateHidden?: string, stateIsolated?: string, stateMaximized?: string, stateMinimized?: string, stateSelected?: string, stateUnselected?: string, stateVisible?: string, taskMoveCancelled?: string, taskMoveFinalized?: string, taskMoveInitiated?: string, taskMoveInitiatedInstruction?: string, taskMoveSelectionInfo?: string, tooltipZoomIn?: string, tooltipZoomOut?: string}; 
  }
  namespace ojGantt {
    type Dependency<K1, K2> =
    {
      id: K1, predecessorTaskId: K2, shortDesc?: string, successorTaskId: K2, svgClassName?: string, svgStyle?: object, type?: 'startStart'|'startFinish'|'finishFinish'|'finishStart'
    }
  }
  namespace ojGantt {
    type ReferenceObject =
    {
      svgClassName?: string, svgStyle?: object, value?: string
    }
  }
  namespace ojGantt {
    type Row<K2> =
    {
      id?: any, label?: string, labelStyle?: object, tasks?: Array<oj.ojGantt.RowTask<K2>>
    }
  }
  namespace ojGantt {
    type RowAxisLabelRendererContext<K2, D2> =
    {
      parentElement: Element, rowData: oj.ojGantt.Row<K2>, itemData: Array<D2>, componentElement: Element, maxWidth: number, maxHeight: number
    }
  }
  namespace ojGantt {
    type RowTask<K2> =
    {
      borderRadius?: string, end?: string, height?: number, id: K2, label?: string, labelPosition?: string|Array<string>, labelStyle?: object, start?: string, shortDesc?: string, svgClassName?: string, svgStyle?: object, type?: 'normal'|'milestone'|'summary'|'auto', progress?: {borderRadius?: string, height?: string, svgClassName?: string, svgStyle?: object, value?: number}, baseline?: {borderRadius?: string, end?: string, height?: number, start?: string, svgClassName?: string, svgStyle?: object}
    }
  }
  namespace ojGantt {
    type TooltipContext<K2, D2> =
    {
      parentElement: Element, data: oj.ojGantt.RowTask<K2>, rowData: oj.ojGantt.Row<K2>, itemData: D2, componentElement: Element, color: string
    }
  }

}
declare namespace oj {  
  class ojGanttDependency extends JetElement<ojGanttDependencySettableProperties> {
    predecessorTaskId: any;
    shortDesc: string|null;
    successorTaskId: any;
    svgClassName: string;
    svgStyle: object;
    type: 'finishStart'|'finishFinish'|'startStart'|'startFinish';
    onPredecessorTaskIdChanged: (event: CustomEvent)=> any;
    onShortDescChanged: (event: CustomEvent)=> any;
    onSuccessorTaskIdChanged: (event: CustomEvent)=> any;
    onSvgClassNameChanged: (event: CustomEvent)=> any;
    onSvgStyleChanged: (event: CustomEvent)=> any;
    onTypeChanged: (event: CustomEvent)=> any;

    addEventListener<T extends keyof ojGanttDependencyEventMap>(type: T, listener: (this: HTMLElement, ev: ojGanttDependencyEventMap[T]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    
  }
  interface ojGanttDependencyEventMap extends oj.JetElementEventMap {
    'predecessorTaskIdChanged': CustomEvent;
    'shortDescChanged': CustomEvent;
    'successorTaskIdChanged': CustomEvent;
    'svgClassNameChanged': CustomEvent;
    'svgStyleChanged': CustomEvent;
    'typeChanged': CustomEvent;
  }
  interface ojGanttDependencySettableProperties extends JetSettableProperties {
    predecessorTaskId: any;
    shortDesc: string|null;
    successorTaskId: any;
    svgClassName: string;
    svgStyle: object;
    type: 'finishStart'|'finishFinish'|'startStart'|'startFinish'; 
  }

}
declare namespace oj {  
  class ojGanttRow extends JetElement<ojGanttRowSettableProperties> {
    label: string;
    labelStyle: object;
    onLabelChanged: (event: CustomEvent)=> any;
    onLabelStyleChanged: (event: CustomEvent)=> any;

    addEventListener<T extends keyof ojGanttRowEventMap>(type: T, listener: (this: HTMLElement, ev: ojGanttRowEventMap[T]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    
  }
  interface ojGanttRowEventMap extends oj.JetElementEventMap {
    'labelChanged': CustomEvent;
    'labelStyleChanged': CustomEvent;
  }
  interface ojGanttRowSettableProperties extends JetSettableProperties {
    label: string;
    labelStyle: object; 
  }

}
declare namespace oj {  
  class ojGanttTask extends JetElement<ojGanttTaskSettableProperties> {
    baseline: {borderRadius?: string, end?: string, height?: number, start?: string, svgClassName?: string, svgStyle?: object};
    borderRadius: string;
    end: string;
    height: number|null;
    label: string;
    labelPosition: 'start'|'innerCenter'|'innerStart'|'innerEnd'|'end'|'none';
    labelStyle: object;
    progress: {borderRadius?: string, height?: string, svgClassName?: string, svgStyle?: object, value?: number};
    rowId?: any;
    shortDesc: string|null;
    start: string;
    svgClassName: string;
    svgStyle: object;
    type: 'normal'|'milestone'|'summary'|'auto';
    onBaselineChanged: (event: CustomEvent)=> any;
    onBorderRadiusChanged: (event: CustomEvent)=> any;
    onEndChanged: (event: CustomEvent)=> any;
    onHeightChanged: (event: CustomEvent)=> any;
    onLabelChanged: (event: CustomEvent)=> any;
    onLabelPositionChanged: (event: CustomEvent)=> any;
    onLabelStyleChanged: (event: CustomEvent)=> any;
    onProgressChanged: (event: CustomEvent)=> any;
    onRowIdChanged: (event: CustomEvent)=> any;
    onShortDescChanged: (event: CustomEvent)=> any;
    onStartChanged: (event: CustomEvent)=> any;
    onSvgClassNameChanged: (event: CustomEvent)=> any;
    onSvgStyleChanged: (event: CustomEvent)=> any;
    onTypeChanged: (event: CustomEvent)=> any;

    addEventListener<T extends keyof ojGanttTaskEventMap>(type: T, listener: (this: HTMLElement, ev: ojGanttTaskEventMap[T]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    
  }
  interface ojGanttTaskEventMap extends oj.JetElementEventMap {
    'baselineChanged': CustomEvent;
    'borderRadiusChanged': CustomEvent;
    'endChanged': CustomEvent;
    'heightChanged': CustomEvent;
    'labelChanged': CustomEvent;
    'labelPositionChanged': CustomEvent;
    'labelStyleChanged': CustomEvent;
    'progressChanged': CustomEvent;
    'rowIdChanged': CustomEvent;
    'shortDescChanged': CustomEvent;
    'startChanged': CustomEvent;
    'svgClassNameChanged': CustomEvent;
    'svgStyleChanged': CustomEvent;
    'typeChanged': CustomEvent;
  }
  interface ojGanttTaskSettableProperties extends JetSettableProperties {
    baseline: {borderRadius?: string, end?: string, height?: number, start?: string, svgClassName?: string, svgStyle?: object};
    borderRadius: string;
    end: string;
    height: number|null;
    label: string;
    labelPosition: 'start'|'innerCenter'|'innerStart'|'innerEnd'|'end'|'none';
    labelStyle: object;
    progress: {borderRadius?: string, height?: string, svgClassName?: string, svgStyle?: object, value?: number};
    rowId?: any;
    shortDesc: string|null;
    start: string;
    svgClassName: string;
    svgStyle: object;
    type: 'normal'|'milestone'|'summary'|'auto'; 
  }

}
