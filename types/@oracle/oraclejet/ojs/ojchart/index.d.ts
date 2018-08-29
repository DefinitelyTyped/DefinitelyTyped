/// <reference types='ojs/ojdvt-base'/>
/// <reference types='ojs/ojdataprovider'/>
declare namespace oj {  
  class ojChart<K, D> extends dvtBaseComponent<ojChartSettableProperties<K, D>> {
    animationOnDataChange: 'auto'|'slideToLeft'|'slideToRight'|'none';
    animationOnDisplay: 'auto'|'alphaFade'|'zoom'|'none';
    as: string;
    coordinateSystem: 'polar'|'cartesian';
    data: oj.DataProvider<K, D>|null;
    dataCursor: 'off'|'on'|'auto';
    dataCursorBehavior: 'smooth'|'snap'|'auto';
    dataCursorPosition: {x: number|string, y: number, y2: number};
    dataLabel: ((context: oj.ojChart.DataLabelContext) => ({insert: Element|string}|{preventDefault: boolean}));
    dnd: {drag: {groups: {dataTypes: string|Array<string>, drag: ((param0: Event)=> void), dragEnd: ((param0: Event)=> void), dragStart: ((param0: Event, param1: object)=> void)}, items: {dataTypes: string|Array<string>, drag: ((param0: Event)=> void), dragEnd: ((param0: Event)=> void), dragStart: ((param0: Event, param1: object)=> void)}, series: {dataTypes: string|Array<string>, drag: ((param0: Event)=> void), dragEnd: ((param0: Event)=> void), dragStart: ((param0: Event, param1: object)=> void)}}, drop: {legend: {dataTypes: string|Array<string>, dragEnter: ((param0: Event, param1: object)=> void), dragLeave: ((param0: Event, param1: object)=> void), dragOver: ((param0: Event, param1: object)=> void), drop: ((param0: Event, param1: object)=> void)}, plotArea: {dataTypes: string|Array<string>, dragEnter: ((param0: Event, param1: object)=> void), dragLeave: ((param0: Event, param1: object)=> void), dragOver: ((param0: Event, param1: object)=> void), drop: ((param0: Event, param1: object)=> void)}, xAxis: {dataTypes: string|Array<string>, dragEnter: ((param0: Event, param1: object)=> void), dragLeave: ((param0: Event, param1: object)=> void), dragOver: ((param0: Event, param1: object)=> void), drop: ((param0: Event, param1: object)=> void)}, y2Axis: {dataTypes: string|Array<string>, dragEnter: ((param0: Event, param1: object)=> void), dragLeave: ((param0: Event, param1: object)=> void), dragOver: ((param0: Event, param1: object)=> void), drop: ((param0: Event, param1: object)=> void)}, yAxis: {dataTypes: string|Array<string>, dragEnter: ((param0: Event, param1: object)=> void), dragLeave: ((param0: Event, param1: object)=> void), dragOver: ((param0: Event, param1: object)=> void), drop: ((param0: Event, param1: object)=> void)}}};
    dragMode: 'pan'|'zoom'|'select'|'off'|'user';
    drilling: 'on'|'seriesOnly'|'groupsOnly'|'off';
    groupComparator: ((param0: object, param1: Object)=> number)|null;
    hiddenCategories: Array<string>;
    hideAndShowBehavior: 'withRescale'|'withoutRescale'|'none';
    highlightMatch: 'any'|'all';
    highlightedCategories: Array<string>;
    hoverBehavior: 'dim'|'none';
    initialZooming: 'first'|'last'|'none';
    legend: {backgroundColor: string, borderColor: string, maxSize: string, position: 'start'|'end'|'bottom'|'top'|'auto', referenceObjectSection: {title: string, titleHalign: 'center'|'end'|'start', titleStyle: object}, rendered: 'on'|'off'|'auto', scrolling: 'off'|'asNeeded', sections: Array<{items: Array<{borderColor: string, categories: Array<string>, categoryVisibility: 'hidden'|'visible', color: string, id: string, lineStyle: 'dotted'|'dashed'|'solid', lineWidth: number, markerColor: string, markerShape?: 'circle'|'diamond'|'human'|'plus'|'rectangle'|'square'|'star'|'triangleDown'|'triangleUp'|string, pattern: 'smallChecker'|'smallCrosshatch'|'smallDiagonalLeft'|'smallDiagonalRight'|'smallDiamond'|'smallTriangle'|'largeChecker'|'largeCrosshatch'|'largeDiagonalLeft'|'largeDiagonalRight'|'largeDiamond'|'largeTriangle'|'none', shortDesc: string, source: string, symbolType: 'line'|'lineWithMarker'|'image'|'marker', text: string}>, sections: Array<object>, title: string, titleHalign: 'center'|'end'|'start', titleStyle: object}>, seriesSection: {title: string, titleHalign: 'center'|'end'|'start', titleStyle: object}, size: string, symbolHeight: number, symbolWidth: number, textStyle: object, title: string, titleHalign: 'center'|'end'|'start', titleStyle: object};
    orientation: 'horizontal'|'vertical';
    otherThreshold: number;
    overview: {content: object, height: string, rendered: 'on'|'off'};
    pieCenter: {converter: object, label: string, labelStyle: object, renderer: ((context: oj.ojChart.PieCenterContext) => ({insert: Element|string}|{preventDefault: boolean})), scaling: 'none'|'thousand'|'million'|'billion'|'trillion'|'quadrillion'|'auto'};
    plotArea: {backgroundColor: string, borderColor: string, borderWidth: number, rendered: 'off'|'on'};
    polarGridShape: 'polygon'|'circle';
    selection: Array<K>;
    selectionMode: 'single'|'multiple'|'none';
    seriesComparator: ((param0: object, param1: Object)=> number)|null;
    sorting: 'ascending'|'descending'|'off';
    splitDualY: 'on'|'off'|'auto';
    splitterPosition: number;
    stack: 'on'|'off';
    stackLabel: 'on'|'off';
    styleDefaults: {animationDownColor: string, animationDuration: number, animationIndicators: 'none'|'all', animationUpColor: string, barGapRatio: number, borderColor: string, borderWidth: number, boxPlot: {medianSvgClassName: string, medianSvgStyle: object, whiskerEndLength: string, whiskerEndSvgClassName: string, whiskerEndSvgStyle: object, whiskerSvgClassName: string, whiskerSvgStyle: object}, colors: Array<string>, dataCursor: {lineColor: string, lineStyle: 'dotted'|'dashed'|'solid', lineWidth: number, markerColor: string, markerDisplayed: 'off'|'on', markerSize: number}, dataItemGaps: string, dataLabelPosition: 'center'|'outsideSlice'|'aboveMarker'|'belowMarker'|'beforeMarker'|'afterMarker'|'insideBarEdge'|'outsideBarEdge'|'none'|'auto', dataLabelStyle: object|Array<object>, funnelBackgroundColor: string, groupSeparators: {color: string, rendered: 'off'|'auto'}, hoverBehaviorDelay: number, lineStyle: 'dotted'|'dashed'|'solid', lineType: 'straight'|'curved'|'stepped'|'centeredStepped'|'segmented'|'centeredSegmented'|'none'|'auto', lineWidth: number, markerColor: string, markerDisplayed: 'on'|'off'|'auto', markerShape?: 'auto'|'circle'|'diamond'|'human'|'plus'|'square'|'star'|'triangleDown'|'triangleUp'|string, markerSize: number, marqueeBorderColor: string, marqueeColor: string, maxBarWidth: number, otherColor: string, patterns: Array<string>, pieFeelerColor: string, pieInnerRadius: number, selectionEffect: 'explode'|'highlightAndExplode'|'highlight', seriesEffect: 'color'|'pattern'|'gradient', shapes: Array<string>, stackLabelStyle: object, stockFallingColor: string, stockRangeColor: string, stockRisingColor: string, stockVolumeColor: string, threeDEffect: 'on'|'off', tooltipLabelStyle: object, tooltipValueStyle: object};
    timeAxisType: 'enabled'|'mixedFrequency'|'skipGaps'|'disabled'|'auto';
    tooltip: {renderer: ((context: oj.ojChart.TooltipContext) => ({insert: Element|string}|{preventDefault: boolean}))};
    touchResponse: 'touchStart'|'auto';
    type: 'line'|'area'|'lineWithArea'|'stock'|'boxPlot'|'combo'|'pie'|'scatter'|'bubble'|'funnel'|'pyramid'|'bar';
    valueFormats: {close: {converter: object, scaling: 'none'|'thousand'|'million'|'billion'|'trillion'|'quadrillion'|'auto', tooltipDisplay: 'off'|'auto', tooltipLabel: string}, group: {tooltipDisplay: 'off'|'auto', tooltipLabel: string|Array<string>}, high: {converter: object, scaling: 'none'|'thousand'|'million'|'billion'|'trillion'|'quadrillion'|'auto', tooltipDisplay: 'off'|'auto', tooltipLabel: string}, label: {converter: object, scaling: 'none'|'thousand'|'million'|'billion'|'trillion'|'quadrillion'|'auto'}, low: {converter: object, scaling: 'none'|'thousand'|'million'|'billion'|'trillion'|'quadrillion'|'auto', tooltipDisplay: 'off'|'auto', tooltipLabel: string}, open: {converter: object, scaling: 'none'|'thousand'|'million'|'billion'|'trillion'|'quadrillion'|'auto', tooltipDisplay: 'off'|'auto', tooltipLabel: string}, q1: {converter: object, scaling: 'none'|'thousand'|'million'|'billion'|'trillion'|'quadrillion'|'auto', tooltipDisplay: 'off'|'auto', tooltipLabel: string}, q2: {converter: object, scaling: 'none'|'thousand'|'million'|'billion'|'trillion'|'quadrillion'|'auto', tooltipDisplay: 'off'|'auto', tooltipLabel: string}, q3: {converter: object, scaling: 'none'|'thousand'|'million'|'billion'|'trillion'|'quadrillion'|'auto', tooltipDisplay: 'off'|'auto', tooltipLabel: string}, series: {tooltipDisplay: 'off'|'auto', tooltipLabel: string}, targetValue: {converter: object, scaling: 'none'|'thousand'|'million'|'billion'|'trillion'|'quadrillion'|'auto', tooltipDisplay: 'off'|'auto', tooltipLabel: string}, value: {converter: object, scaling: 'none'|'thousand'|'million'|'billion'|'trillion'|'quadrillion'|'auto', tooltipDisplay: 'off'|'auto', tooltipLabel: string}, volume: {converter: object, scaling: 'none'|'thousand'|'million'|'billion'|'trillion'|'quadrillion'|'auto', tooltipDisplay: 'off'|'auto', tooltipLabel: string}, x: {converter: object, scaling: 'none'|'thousand'|'million'|'billion'|'trillion'|'quadrillion'|'auto', tooltipDisplay: 'off'|'auto', tooltipLabel: string}, y: {converter: object, scaling: 'none'|'thousand'|'million'|'billion'|'trillion'|'quadrillion'|'auto', tooltipDisplay: 'off'|'auto', tooltipLabel: string}, y2: {converter: object, scaling: 'none'|'thousand'|'million'|'billion'|'trillion'|'quadrillion'|'auto', tooltipDisplay: 'off'|'auto', tooltipLabel: string}, z: {converter: object, scaling: 'none'|'thousand'|'million'|'billion'|'trillion'|'quadrillion'|'auto', tooltipDisplay: 'off'|'auto', tooltipLabel: string}};
    xAxis: {axisLine: {lineColor: string, lineWidth: number, rendered: 'off'|'on'}, baselineScaling: 'min'|'zero', dataMax: number, dataMin: number, majorTick: {baselineColor: 'inherit'|'auto', baselineStyle: 'dotted'|'dashed'|'solid', baselineWidth: number, lineColor: string, lineStyle: 'dotted'|'dashed'|'solid', lineWidth: number, rendered: 'on'|'off'|'auto'}, max: number|string, maxSize: string, min: number|string, minStep: number, minorStep: number, minorTick: {lineColor: string, lineStyle: 'dotted'|'dashed'|'solid', lineWidth: number, rendered: 'on'|'off'|'auto'}, referenceObjects: Array<{categories: Array<string>, color: string, displayInLegend: 'on'|'off', high: number, id: string, lineStyle: 'dotted'|'dashed'|'solid', lineType: 'curved'|'stepped'|'centeredStepped'|'segmented'|'centeredSegmented'|'straight', lineWidth: number, location: 'front'|'back', low: number, shortDesc: string, svgClassName: string, svgStyle: object, text: string, type: 'area'|'line', value: number}>, rendered: 'off'|'on', scale: 'log'|'linear', size: string, step: number, tickLabel: {converter: object, rendered: 'off'|'on', rotation: 'none'|'auto', scaling: 'none'|'thousand'|'million'|'billion'|'trillion'|'quadrillion'|'auto', style: object}, title: string, titleStyle: object, viewportEndGroup: number|string, viewportMax: number|string, viewportMin: number|string, viewportStartGroup: number|string};
    y2Axis: {alignTickMarks: 'off'|'on', axisLine: {lineColor: string, lineWidth: number, rendered: 'on'|'off'|'auto'}, baselineScaling: 'min'|'zero', dataMax: number, dataMin: number, majorTick: {baselineColor: 'inherit'|'auto', baselineStyle: 'dotted'|'dashed'|'solid', baselineWidth: number, lineColor: string, lineStyle: 'dotted'|'dashed'|'solid', lineWidth: number, rendered: 'on'|'off'|'auto'}, max: number, maxSize: string, min: number, minStep: number, minorStep: number, minorTick: {lineColor: string, lineStyle: 'dotted'|'dashed'|'solid', lineWidth: number, rendered: 'on'|'off'|'auto'}, position: 'start'|'end'|'top'|'bottom'|'auto', referenceObjects: Array<{categories: Array<string>, color: string, displayInLegend: 'on'|'off', high: number, id: string, items: Array<{high: number, low: number, value: number, x: number|string}>, lineStyle: 'dotted'|'dashed'|'solid', lineType: 'curved'|'stepped'|'centeredStepped'|'segmented'|'centeredSegmented'|'straight', lineWidth: number, location: 'front'|'back', low: number, shortDesc: string, svgClassName: string, svgStyle: object, text: string, type: 'area'|'line', value: number}>, rendered: 'off'|'on', scale: 'log'|'linear', size: string, step: number, tickLabel: {converter: object, position: 'inside'|'outside', rendered: 'off'|'on', scaling: 'none'|'thousand'|'million'|'billion'|'trillion'|'quadrillion'|'auto', style: object}, title: string, titleStyle: object};
    yAxis: {axisLine: {lineColor: string, lineWidth: number, rendered: 'on'|'off'|'auto'}, baselineScaling: 'min'|'zero', dataMax: number, dataMin: number, majorTick: {baselineColor: 'inherit'|'auto', baselineStyle: 'dotted'|'dashed'|'solid', baselineWidth: number, lineColor: string, lineStyle: 'dotted'|'dashed'|'solid', lineWidth: number, rendered: 'on'|'off'|'auto'}, max: number, maxSize: string, min: number, minStep: number, minorStep: number, minorTick: {lineColor: string, lineStyle: 'dotted'|'dashed'|'solid', lineWidth: number, rendered: 'on'|'off'|'auto'}, position: 'start'|'end'|'top'|'bottom'|'auto', referenceObjects: Array<{categories: Array<string>, color: string, displayInLegend: 'on'|'off', high: number, id: string, items: Array<{high: number, low: number, value: number, x: number|string}>, lineStyle: 'dotted'|'dashed'|'solid', lineType: 'curved'|'stepped'|'centeredStepped'|'segmented'|'centeredSegmented'|'straight', lineWidth: number, location: 'front'|'back', low: number, shortDesc: string, svgClassName: string, svgStyle: object, text: string, type: 'area'|'line', value: number}>, rendered: 'off'|'on', scale: 'log'|'linear', size: string, step: number, tickLabel: {converter: object, position: 'inside'|'outside', rendered: 'off'|'on', scaling: 'none'|'thousand'|'million'|'billion'|'trillion'|'quadrillion'|'auto', style: object}, title: string, titleStyle: object, viewportMax: number, viewportMin: number};
    zoomAndScroll: 'delayedScrollOnly'|'liveScrollOnly'|'delayed'|'live'|'off';
    zoomDirection: 'x'|'y'|'auto';
    translations: {componentName?: string, labelAndValue?: string, labelClearSelection?: string, labelClose?: string, labelCountWithTotal?: string, labelDataVisualization?: string, labelDate?: string, labelDefaultGroupName?: string, labelGroup?: string, labelHigh?: string, labelInvalidData?: string, labelLow?: string, labelNoData?: string, labelOpen?: string, labelOther?: string, labelPercentage?: string, labelQ1?: string, labelQ2?: string, labelQ3?: string, labelSeries?: string, labelTargetValue?: string, labelValue?: string, labelVolume?: string, labelX?: string, labelY?: string, labelZ?: string, stateCollapsed?: string, stateDrillable?: string, stateExpanded?: string, stateHidden?: string, stateIsolated?: string, stateMaximized?: string, stateMinimized?: string, stateSelected?: string, stateUnselected?: string, stateVisible?: string, tooltipPan?: string, tooltipSelect?: string, tooltipZoom?: string};
    onAnimationOnDataChangeChanged: (event: CustomEvent)=> any;
    onAnimationOnDisplayChanged: (event: CustomEvent)=> any;
    onAsChanged: (event: CustomEvent)=> any;
    onCoordinateSystemChanged: (event: CustomEvent)=> any;
    onDataChanged: (event: CustomEvent)=> any;
    onDataCursorChanged: (event: CustomEvent)=> any;
    onDataCursorBehaviorChanged: (event: CustomEvent)=> any;
    onDataCursorPositionChanged: (event: CustomEvent)=> any;
    onDataLabelChanged: (event: CustomEvent)=> any;
    onDndChanged: (event: CustomEvent)=> any;
    onDragModeChanged: (event: CustomEvent)=> any;
    onDrillingChanged: (event: CustomEvent)=> any;
    onGroupComparatorChanged: (event: CustomEvent)=> any;
    onHiddenCategoriesChanged: (event: CustomEvent)=> any;
    onHideAndShowBehaviorChanged: (event: CustomEvent)=> any;
    onHighlightMatchChanged: (event: CustomEvent)=> any;
    onHighlightedCategoriesChanged: (event: CustomEvent)=> any;
    onHoverBehaviorChanged: (event: CustomEvent)=> any;
    onInitialZoomingChanged: (event: CustomEvent)=> any;
    onLegendChanged: (event: CustomEvent)=> any;
    onOrientationChanged: (event: CustomEvent)=> any;
    onOtherThresholdChanged: (event: CustomEvent)=> any;
    onOverviewChanged: (event: CustomEvent)=> any;
    onPieCenterChanged: (event: CustomEvent)=> any;
    onPlotAreaChanged: (event: CustomEvent)=> any;
    onPolarGridShapeChanged: (event: CustomEvent)=> any;
    onSelectionChanged: (event: CustomEvent)=> any;
    onSelectionModeChanged: (event: CustomEvent)=> any;
    onSeriesComparatorChanged: (event: CustomEvent)=> any;
    onSortingChanged: (event: CustomEvent)=> any;
    onSplitDualYChanged: (event: CustomEvent)=> any;
    onSplitterPositionChanged: (event: CustomEvent)=> any;
    onStackChanged: (event: CustomEvent)=> any;
    onStackLabelChanged: (event: CustomEvent)=> any;
    onStyleDefaultsChanged: (event: CustomEvent)=> any;
    onTimeAxisTypeChanged: (event: CustomEvent)=> any;
    onTooltipChanged: (event: CustomEvent)=> any;
    onTouchResponseChanged: (event: CustomEvent)=> any;
    onTypeChanged: (event: CustomEvent)=> any;
    onValueFormatsChanged: (event: CustomEvent)=> any;
    onXAxisChanged: (event: CustomEvent)=> any;
    onY2AxisChanged: (event: CustomEvent)=> any;
    onYAxisChanged: (event: CustomEvent)=> any;
    onZoomAndScrollChanged: (event: CustomEvent)=> any;
    onZoomDirectionChanged: (event: CustomEvent)=> any;
    onOjDrill: (event: oj.ojChart.ojDrill)=> any;
    onOjSelectInput: (event: oj.ojChart.ojSelectInput)=> any;
    onOjViewportChange: (event: oj.ojChart.ojViewportChange)=> any;
    onOjViewportChangeInput: (event: oj.ojChart.ojViewportChangeInput)=> any;

    addEventListener<T extends keyof ojChartEventMap>(type: T, listener: (this: HTMLElement, ev: ojChartEventMap[T]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    
    getContextByNode(node: Element): oj.ojChart.PieCenterLabelContext|oj.ojChart.LegendItemContext|oj.ojChart.ReferenceObject|oj.ojChart.GroupContext|oj.ojChart.AxisTitleContext|oj.ojChart.ItemContext|oj.ojChart.SeriesContext;
    getDataItem(seriesIndex: number, groupIndex: number): object|null;
    getGroup(groupIndex: string): string;
    getGroupCount(): number;
    getLegend(): object;
    getPlotArea(): object;
    getSeries(seriesIndex: string): string;
    getSeriesCount(): number;
    getValuesAt(x: number, y: number): object;
    getXAxis(): object;
    getY2Axis(): object;
    getYAxis(): object;
  }
  namespace ojChart {
    class ojDrill extends CustomEvent<{id: string, series: string, group: string, data: object, itemData: object, seriesData: object, groupData: Array<any>, [propName: string]: any}> {
      
    }
  
    class ojSelectInput extends CustomEvent<{items: Array<any>, selectionData: Array<{data: object, itemData: object, groupData: Array<any>, seriesData: object}>, endGroup: string, startGroup: string, xMax: number, xMin: number, yMax: number, yMin: number, [propName: string]: any}> {
      
    }
  
    class ojViewportChange extends CustomEvent<{endGroup: string, startGroup: string, xMax: number, xMin: number, yMax: number, yMin: number, [propName: string]: any}> {
      
    }
  
    class ojViewportChangeInput extends CustomEvent<{endGroup: string, startGroup: string, xMax: number, xMin: number, yMax: number, yMin: number, [propName: string]: any}> {
      
    }
  }
  interface ojChartEventMap extends oj.dvtBaseComponentEventMap {
    'ojDrill': oj.ojChart.ojDrill;
    'ojSelectInput': oj.ojChart.ojSelectInput;
    'ojViewportChange': oj.ojChart.ojViewportChange;
    'ojViewportChangeInput': oj.ojChart.ojViewportChangeInput;
    'animationOnDataChangeChanged': CustomEvent;
    'animationOnDisplayChanged': CustomEvent;
    'asChanged': CustomEvent;
    'coordinateSystemChanged': CustomEvent;
    'dataChanged': CustomEvent;
    'dataCursorChanged': CustomEvent;
    'dataCursorBehaviorChanged': CustomEvent;
    'dataCursorPositionChanged': CustomEvent;
    'dataLabelChanged': CustomEvent;
    'dndChanged': CustomEvent;
    'dragModeChanged': CustomEvent;
    'drillingChanged': CustomEvent;
    'groupComparatorChanged': CustomEvent;
    'hiddenCategoriesChanged': CustomEvent;
    'hideAndShowBehaviorChanged': CustomEvent;
    'highlightMatchChanged': CustomEvent;
    'highlightedCategoriesChanged': CustomEvent;
    'hoverBehaviorChanged': CustomEvent;
    'initialZoomingChanged': CustomEvent;
    'legendChanged': CustomEvent;
    'orientationChanged': CustomEvent;
    'otherThresholdChanged': CustomEvent;
    'overviewChanged': CustomEvent;
    'pieCenterChanged': CustomEvent;
    'plotAreaChanged': CustomEvent;
    'polarGridShapeChanged': CustomEvent;
    'selectionChanged': CustomEvent;
    'selectionModeChanged': CustomEvent;
    'seriesComparatorChanged': CustomEvent;
    'sortingChanged': CustomEvent;
    'splitDualYChanged': CustomEvent;
    'splitterPositionChanged': CustomEvent;
    'stackChanged': CustomEvent;
    'stackLabelChanged': CustomEvent;
    'styleDefaultsChanged': CustomEvent;
    'timeAxisTypeChanged': CustomEvent;
    'tooltipChanged': CustomEvent;
    'touchResponseChanged': CustomEvent;
    'typeChanged': CustomEvent;
    'valueFormatsChanged': CustomEvent;
    'xAxisChanged': CustomEvent;
    'y2AxisChanged': CustomEvent;
    'yAxisChanged': CustomEvent;
    'zoomAndScrollChanged': CustomEvent;
    'zoomDirectionChanged': CustomEvent;
  }
  interface ojChartSettableProperties<K, D> extends dvtBaseComponentSettableProperties {
    animationOnDataChange: 'auto'|'slideToLeft'|'slideToRight'|'none';
    animationOnDisplay: 'auto'|'alphaFade'|'zoom'|'none';
    as: string;
    coordinateSystem: 'polar'|'cartesian';
    data: oj.DataProvider<K, D>|null;
    dataCursor: 'off'|'on'|'auto';
    dataCursorBehavior: 'smooth'|'snap'|'auto';
    dataCursorPosition: {x: number|string, y: number, y2: number};
    dataLabel: ((context: oj.ojChart.DataLabelContext) => ({insert: Element|string}|{preventDefault: boolean}));
    dnd: {drag: {groups: {dataTypes: string|Array<string>, drag: ((param0: Event)=> void), dragEnd: ((param0: Event)=> void), dragStart: ((param0: Event, param1: object)=> void)}, items: {dataTypes: string|Array<string>, drag: ((param0: Event)=> void), dragEnd: ((param0: Event)=> void), dragStart: ((param0: Event, param1: object)=> void)}, series: {dataTypes: string|Array<string>, drag: ((param0: Event)=> void), dragEnd: ((param0: Event)=> void), dragStart: ((param0: Event, param1: object)=> void)}}, drop: {legend: {dataTypes: string|Array<string>, dragEnter: ((param0: Event, param1: object)=> void), dragLeave: ((param0: Event, param1: object)=> void), dragOver: ((param0: Event, param1: object)=> void), drop: ((param0: Event, param1: object)=> void)}, plotArea: {dataTypes: string|Array<string>, dragEnter: ((param0: Event, param1: object)=> void), dragLeave: ((param0: Event, param1: object)=> void), dragOver: ((param0: Event, param1: object)=> void), drop: ((param0: Event, param1: object)=> void)}, xAxis: {dataTypes: string|Array<string>, dragEnter: ((param0: Event, param1: object)=> void), dragLeave: ((param0: Event, param1: object)=> void), dragOver: ((param0: Event, param1: object)=> void), drop: ((param0: Event, param1: object)=> void)}, y2Axis: {dataTypes: string|Array<string>, dragEnter: ((param0: Event, param1: object)=> void), dragLeave: ((param0: Event, param1: object)=> void), dragOver: ((param0: Event, param1: object)=> void), drop: ((param0: Event, param1: object)=> void)}, yAxis: {dataTypes: string|Array<string>, dragEnter: ((param0: Event, param1: object)=> void), dragLeave: ((param0: Event, param1: object)=> void), dragOver: ((param0: Event, param1: object)=> void), drop: ((param0: Event, param1: object)=> void)}}};
    dragMode: 'pan'|'zoom'|'select'|'off'|'user';
    drilling: 'on'|'seriesOnly'|'groupsOnly'|'off';
    groupComparator: ((param0: object, param1: Object)=> number)|null;
    hiddenCategories: Array<string>;
    hideAndShowBehavior: 'withRescale'|'withoutRescale'|'none';
    highlightMatch: 'any'|'all';
    highlightedCategories: Array<string>;
    hoverBehavior: 'dim'|'none';
    initialZooming: 'first'|'last'|'none';
    legend: {backgroundColor: string, borderColor: string, maxSize: string, position: 'start'|'end'|'bottom'|'top'|'auto', referenceObjectSection: {title: string, titleHalign: 'center'|'end'|'start', titleStyle: object}, rendered: 'on'|'off'|'auto', scrolling: 'off'|'asNeeded', sections: Array<{items: Array<{borderColor: string, categories: Array<string>, categoryVisibility: 'hidden'|'visible', color: string, id: string, lineStyle: 'dotted'|'dashed'|'solid', lineWidth: number, markerColor: string, markerShape?: 'circle'|'diamond'|'human'|'plus'|'rectangle'|'square'|'star'|'triangleDown'|'triangleUp'|string, pattern: 'smallChecker'|'smallCrosshatch'|'smallDiagonalLeft'|'smallDiagonalRight'|'smallDiamond'|'smallTriangle'|'largeChecker'|'largeCrosshatch'|'largeDiagonalLeft'|'largeDiagonalRight'|'largeDiamond'|'largeTriangle'|'none', shortDesc: string, source: string, symbolType: 'line'|'lineWithMarker'|'image'|'marker', text: string}>, sections: Array<object>, title: string, titleHalign: 'center'|'end'|'start', titleStyle: object}>, seriesSection: {title: string, titleHalign: 'center'|'end'|'start', titleStyle: object}, size: string, symbolHeight: number, symbolWidth: number, textStyle: object, title: string, titleHalign: 'center'|'end'|'start', titleStyle: object};
    orientation: 'horizontal'|'vertical';
    otherThreshold: number;
    overview: {content: object, height: string, rendered: 'on'|'off'};
    pieCenter: {converter: object, label: string, labelStyle: object, renderer: ((context: oj.ojChart.PieCenterContext) => ({insert: Element|string}|{preventDefault: boolean})), scaling: 'none'|'thousand'|'million'|'billion'|'trillion'|'quadrillion'|'auto'};
    plotArea: {backgroundColor: string, borderColor: string, borderWidth: number, rendered: 'off'|'on'};
    polarGridShape: 'polygon'|'circle';
    selection: Array<K>;
    selectionMode: 'single'|'multiple'|'none';
    seriesComparator: ((param0: object, param1: Object)=> number)|null;
    sorting: 'ascending'|'descending'|'off';
    splitDualY: 'on'|'off'|'auto';
    splitterPosition: number;
    stack: 'on'|'off';
    stackLabel: 'on'|'off';
    styleDefaults: {animationDownColor: string, animationDuration: number, animationIndicators: 'none'|'all', animationUpColor: string, barGapRatio: number, borderColor: string, borderWidth: number, boxPlot: {medianSvgClassName: string, medianSvgStyle: object, whiskerEndLength: string, whiskerEndSvgClassName: string, whiskerEndSvgStyle: object, whiskerSvgClassName: string, whiskerSvgStyle: object}, colors: Array<string>, dataCursor: {lineColor: string, lineStyle: 'dotted'|'dashed'|'solid', lineWidth: number, markerColor: string, markerDisplayed: 'off'|'on', markerSize: number}, dataItemGaps: string, dataLabelPosition: 'center'|'outsideSlice'|'aboveMarker'|'belowMarker'|'beforeMarker'|'afterMarker'|'insideBarEdge'|'outsideBarEdge'|'none'|'auto', dataLabelStyle: object|Array<object>, funnelBackgroundColor: string, groupSeparators: {color: string, rendered: 'off'|'auto'}, hoverBehaviorDelay: number, lineStyle: 'dotted'|'dashed'|'solid', lineType: 'straight'|'curved'|'stepped'|'centeredStepped'|'segmented'|'centeredSegmented'|'none'|'auto', lineWidth: number, markerColor: string, markerDisplayed: 'on'|'off'|'auto', markerShape?: 'auto'|'circle'|'diamond'|'human'|'plus'|'square'|'star'|'triangleDown'|'triangleUp'|string, markerSize: number, marqueeBorderColor: string, marqueeColor: string, maxBarWidth: number, otherColor: string, patterns: Array<string>, pieFeelerColor: string, pieInnerRadius: number, selectionEffect: 'explode'|'highlightAndExplode'|'highlight', seriesEffect: 'color'|'pattern'|'gradient', shapes: Array<string>, stackLabelStyle: object, stockFallingColor: string, stockRangeColor: string, stockRisingColor: string, stockVolumeColor: string, threeDEffect: 'on'|'off', tooltipLabelStyle: object, tooltipValueStyle: object};
    timeAxisType: 'enabled'|'mixedFrequency'|'skipGaps'|'disabled'|'auto';
    tooltip: {renderer: ((context: oj.ojChart.TooltipContext) => ({insert: Element|string}|{preventDefault: boolean}))};
    touchResponse: 'touchStart'|'auto';
    type: 'line'|'area'|'lineWithArea'|'stock'|'boxPlot'|'combo'|'pie'|'scatter'|'bubble'|'funnel'|'pyramid'|'bar';
    valueFormats: {close: {converter: object, scaling: 'none'|'thousand'|'million'|'billion'|'trillion'|'quadrillion'|'auto', tooltipDisplay: 'off'|'auto', tooltipLabel: string}, group: {tooltipDisplay: 'off'|'auto', tooltipLabel: string|Array<string>}, high: {converter: object, scaling: 'none'|'thousand'|'million'|'billion'|'trillion'|'quadrillion'|'auto', tooltipDisplay: 'off'|'auto', tooltipLabel: string}, label: {converter: object, scaling: 'none'|'thousand'|'million'|'billion'|'trillion'|'quadrillion'|'auto'}, low: {converter: object, scaling: 'none'|'thousand'|'million'|'billion'|'trillion'|'quadrillion'|'auto', tooltipDisplay: 'off'|'auto', tooltipLabel: string}, open: {converter: object, scaling: 'none'|'thousand'|'million'|'billion'|'trillion'|'quadrillion'|'auto', tooltipDisplay: 'off'|'auto', tooltipLabel: string}, q1: {converter: object, scaling: 'none'|'thousand'|'million'|'billion'|'trillion'|'quadrillion'|'auto', tooltipDisplay: 'off'|'auto', tooltipLabel: string}, q2: {converter: object, scaling: 'none'|'thousand'|'million'|'billion'|'trillion'|'quadrillion'|'auto', tooltipDisplay: 'off'|'auto', tooltipLabel: string}, q3: {converter: object, scaling: 'none'|'thousand'|'million'|'billion'|'trillion'|'quadrillion'|'auto', tooltipDisplay: 'off'|'auto', tooltipLabel: string}, series: {tooltipDisplay: 'off'|'auto', tooltipLabel: string}, targetValue: {converter: object, scaling: 'none'|'thousand'|'million'|'billion'|'trillion'|'quadrillion'|'auto', tooltipDisplay: 'off'|'auto', tooltipLabel: string}, value: {converter: object, scaling: 'none'|'thousand'|'million'|'billion'|'trillion'|'quadrillion'|'auto', tooltipDisplay: 'off'|'auto', tooltipLabel: string}, volume: {converter: object, scaling: 'none'|'thousand'|'million'|'billion'|'trillion'|'quadrillion'|'auto', tooltipDisplay: 'off'|'auto', tooltipLabel: string}, x: {converter: object, scaling: 'none'|'thousand'|'million'|'billion'|'trillion'|'quadrillion'|'auto', tooltipDisplay: 'off'|'auto', tooltipLabel: string}, y: {converter: object, scaling: 'none'|'thousand'|'million'|'billion'|'trillion'|'quadrillion'|'auto', tooltipDisplay: 'off'|'auto', tooltipLabel: string}, y2: {converter: object, scaling: 'none'|'thousand'|'million'|'billion'|'trillion'|'quadrillion'|'auto', tooltipDisplay: 'off'|'auto', tooltipLabel: string}, z: {converter: object, scaling: 'none'|'thousand'|'million'|'billion'|'trillion'|'quadrillion'|'auto', tooltipDisplay: 'off'|'auto', tooltipLabel: string}};
    xAxis: {axisLine: {lineColor: string, lineWidth: number, rendered: 'off'|'on'}, baselineScaling: 'min'|'zero', dataMax: number, dataMin: number, majorTick: {baselineColor: 'inherit'|'auto', baselineStyle: 'dotted'|'dashed'|'solid', baselineWidth: number, lineColor: string, lineStyle: 'dotted'|'dashed'|'solid', lineWidth: number, rendered: 'on'|'off'|'auto'}, max: number|string, maxSize: string, min: number|string, minStep: number, minorStep: number, minorTick: {lineColor: string, lineStyle: 'dotted'|'dashed'|'solid', lineWidth: number, rendered: 'on'|'off'|'auto'}, referenceObjects: Array<{categories: Array<string>, color: string, displayInLegend: 'on'|'off', high: number, id: string, lineStyle: 'dotted'|'dashed'|'solid', lineType: 'curved'|'stepped'|'centeredStepped'|'segmented'|'centeredSegmented'|'straight', lineWidth: number, location: 'front'|'back', low: number, shortDesc: string, svgClassName: string, svgStyle: object, text: string, type: 'area'|'line', value: number}>, rendered: 'off'|'on', scale: 'log'|'linear', size: string, step: number, tickLabel: {converter: object, rendered: 'off'|'on', rotation: 'none'|'auto', scaling: 'none'|'thousand'|'million'|'billion'|'trillion'|'quadrillion'|'auto', style: object}, title: string, titleStyle: object, viewportEndGroup: number|string, viewportMax: number|string, viewportMin: number|string, viewportStartGroup: number|string};
    y2Axis: {alignTickMarks: 'off'|'on', axisLine: {lineColor: string, lineWidth: number, rendered: 'on'|'off'|'auto'}, baselineScaling: 'min'|'zero', dataMax: number, dataMin: number, majorTick: {baselineColor: 'inherit'|'auto', baselineStyle: 'dotted'|'dashed'|'solid', baselineWidth: number, lineColor: string, lineStyle: 'dotted'|'dashed'|'solid', lineWidth: number, rendered: 'on'|'off'|'auto'}, max: number, maxSize: string, min: number, minStep: number, minorStep: number, minorTick: {lineColor: string, lineStyle: 'dotted'|'dashed'|'solid', lineWidth: number, rendered: 'on'|'off'|'auto'}, position: 'start'|'end'|'top'|'bottom'|'auto', referenceObjects: Array<{categories: Array<string>, color: string, displayInLegend: 'on'|'off', high: number, id: string, items: Array<{high: number, low: number, value: number, x: number|string}>, lineStyle: 'dotted'|'dashed'|'solid', lineType: 'curved'|'stepped'|'centeredStepped'|'segmented'|'centeredSegmented'|'straight', lineWidth: number, location: 'front'|'back', low: number, shortDesc: string, svgClassName: string, svgStyle: object, text: string, type: 'area'|'line', value: number}>, rendered: 'off'|'on', scale: 'log'|'linear', size: string, step: number, tickLabel: {converter: object, position: 'inside'|'outside', rendered: 'off'|'on', scaling: 'none'|'thousand'|'million'|'billion'|'trillion'|'quadrillion'|'auto', style: object}, title: string, titleStyle: object};
    yAxis: {axisLine: {lineColor: string, lineWidth: number, rendered: 'on'|'off'|'auto'}, baselineScaling: 'min'|'zero', dataMax: number, dataMin: number, majorTick: {baselineColor: 'inherit'|'auto', baselineStyle: 'dotted'|'dashed'|'solid', baselineWidth: number, lineColor: string, lineStyle: 'dotted'|'dashed'|'solid', lineWidth: number, rendered: 'on'|'off'|'auto'}, max: number, maxSize: string, min: number, minStep: number, minorStep: number, minorTick: {lineColor: string, lineStyle: 'dotted'|'dashed'|'solid', lineWidth: number, rendered: 'on'|'off'|'auto'}, position: 'start'|'end'|'top'|'bottom'|'auto', referenceObjects: Array<{categories: Array<string>, color: string, displayInLegend: 'on'|'off', high: number, id: string, items: Array<{high: number, low: number, value: number, x: number|string}>, lineStyle: 'dotted'|'dashed'|'solid', lineType: 'curved'|'stepped'|'centeredStepped'|'segmented'|'centeredSegmented'|'straight', lineWidth: number, location: 'front'|'back', low: number, shortDesc: string, svgClassName: string, svgStyle: object, text: string, type: 'area'|'line', value: number}>, rendered: 'off'|'on', scale: 'log'|'linear', size: string, step: number, tickLabel: {converter: object, position: 'inside'|'outside', rendered: 'off'|'on', scaling: 'none'|'thousand'|'million'|'billion'|'trillion'|'quadrillion'|'auto', style: object}, title: string, titleStyle: object, viewportMax: number, viewportMin: number};
    zoomAndScroll: 'delayedScrollOnly'|'liveScrollOnly'|'delayed'|'live'|'off';
    zoomDirection: 'x'|'y'|'auto';
    translations: {componentName?: string, labelAndValue?: string, labelClearSelection?: string, labelClose?: string, labelCountWithTotal?: string, labelDataVisualization?: string, labelDate?: string, labelDefaultGroupName?: string, labelGroup?: string, labelHigh?: string, labelInvalidData?: string, labelLow?: string, labelNoData?: string, labelOpen?: string, labelOther?: string, labelPercentage?: string, labelQ1?: string, labelQ2?: string, labelQ3?: string, labelSeries?: string, labelTargetValue?: string, labelValue?: string, labelVolume?: string, labelX?: string, labelY?: string, labelZ?: string, stateCollapsed?: string, stateDrillable?: string, stateExpanded?: string, stateHidden?: string, stateIsolated?: string, stateMaximized?: string, stateMinimized?: string, stateSelected?: string, stateUnselected?: string, stateVisible?: string, tooltipPan?: string, tooltipSelect?: string, tooltipZoom?: string}; 
  }
  namespace ojChart {
    type AxisTitleContext =
    {
      axis: 'xAxis'|'yAxis'|'y2Axis', subId: string
    }
  }
  namespace ojChart {
    type DataLabelContext =
    {
      id: any, series: string, group: string|Array<string>, value: number, targetValue: number, x: number|string, y: number, z: number, low: number, high: number, open: number, close: number, volume: number, label: string, totalValue: number, data: object|null, itemData: object|null, seriesData: object|null, groupData: object|null, componentElement: Element
    }
  }
  namespace ojChart {
    type GroupContext =
    {
      indexPath: Array<any>, subId: string
    }
  }
  namespace ojChart {
    type ItemContext =
    {
      seriesIndex: number, itemIndex: number, subId: string
    }
  }
  namespace ojChart {
    type LegendItemContext =
    {
      sectionIndexPath: Array<any>, itemIndex: number, subId: string
    }
  }
  namespace ojChart {
    type PieCenterContext =
    {
      outerBounds: object, innerBounds: object, label: string, componentElement: Element
    }
  }
  namespace ojChart {
    type PieCenterLabelContext =
    {
      subId: string
    }
  }
  namespace ojChart {
    type ReferenceObject =
    {
      axis: 'xAxis'|'yAxis'|'y2Axis', index: number, subId: string
    }
  }
  namespace ojChart {
    type SeriesContext =
    {
      itemIndex: number, subId: string
    }
  }
  namespace ojChart {
    type TooltipContext =
    {
      parentElement: Element, id: any, series: string, group: string|Array<string>, label: string, value: number, x: number|string, y: number, z: number, low: number, high: number, open: number, close: number, volume: number, targetValue: number, data: object|null, itemData: object|null, seriesData: object|null, groupData: object|null, componentElement: Element, color: string
    }
  }

}
declare namespace oj {  
  class ojChartGroup extends JetElement<ojChartGroupSettableProperties> {
    drilling?: 'on'|'off'|'inherit';
    labelStyle?: object;
    name?: string;
    shortDesc?: string;
    onDrillingChanged: (event: CustomEvent)=> any;
    onLabelStyleChanged: (event: CustomEvent)=> any;
    onNameChanged: (event: CustomEvent)=> any;
    onShortDescChanged: (event: CustomEvent)=> any;

    addEventListener<T extends keyof ojChartGroupEventMap>(type: T, listener: (this: HTMLElement, ev: ojChartGroupEventMap[T]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    
  }
  interface ojChartGroupEventMap extends oj.JetElementEventMap {
    'drillingChanged': CustomEvent;
    'labelStyleChanged': CustomEvent;
    'nameChanged': CustomEvent;
    'shortDescChanged': CustomEvent;
  }
  interface ojChartGroupSettableProperties extends JetSettableProperties {
    drilling?: 'on'|'off'|'inherit';
    labelStyle?: object;
    name?: string;
    shortDesc?: string; 
  }

}
declare namespace oj {  
  class ojChartItem extends JetElement<ojChartItemSettableProperties> {
    borderColor?: string;
    borderWidth?: number;
    boxPlot?: {medianSvgClassName?: string, medianSvgStyle?: object, q2Color?: string, q2SvgClassName?: string, q2SvgStyle?: object, q3SvgClassName?: string, q3SvgStyle?: object, whiskerEndLength?: string, whiskerEndSvgClassName?: string, whiskerEndSvgStyle?: object, whiskerSvgClassName?: string, whiskerSvgStyle?: object};
    categories?: Array<string>;
    close?: number;
    color?: string;
    drilling?: 'on'|'off'|'inherit';
    groupId: Array<string>;
    high?: number;
    items?: Array<object>|Array<number>;
    label?: string|Array<string>;
    labelPosition?: 'center'|'outsideSlice'|'aboveMarker'|'belowMarker'|'beforeMarker'|'afterMarker'|'insideBarEdge'|'outsideBarEdge'|'none'|'auto';
    labelStyle?: object|Array<object>;
    low?: number;
    markerDisplayed?: 'on'|'off'|'auto';
    markerShape?: 'circle'|'diamond'|'human'|'plus'|'square'|'star'|'triangleDown'|'triangleUp'|'auto'|string;
    markerSize?: number;
    open?: number;
    pattern?: 'smallChecker'|'smallCrosshatch'|'smallDiagonalLeft'|'smallDiagonalRight'|'smallDiamond'|'smallTriangle'|'largeChecker'|'largeCrosshatch'|'largeDiagonalLeft'|'largeDiagonalRight'|'largeDiamond'|'largeTriangle'|'auto';
    q1?: number;
    q2?: number;
    q3?: number;
    seriesId: string;
    shortDesc?: string;
    source?: string;
    sourceHover?: string;
    sourceHoverSelected?: string;
    sourceSelected?: string;
    svgClassName?: string;
    svgStyle?: object;
    targetValue?: number;
    value?: number;
    volume?: number;
    x?: number|string;
    y?: number;
    z?: number;
    onBorderColorChanged: (event: CustomEvent)=> any;
    onBorderWidthChanged: (event: CustomEvent)=> any;
    onBoxPlotChanged: (event: CustomEvent)=> any;
    onCategoriesChanged: (event: CustomEvent)=> any;
    onCloseChanged: (event: CustomEvent)=> any;
    onColorChanged: (event: CustomEvent)=> any;
    onDrillingChanged: (event: CustomEvent)=> any;
    onGroupIdChanged: (event: CustomEvent)=> any;
    onHighChanged: (event: CustomEvent)=> any;
    onItemsChanged: (event: CustomEvent)=> any;
    onLabelChanged: (event: CustomEvent)=> any;
    onLabelPositionChanged: (event: CustomEvent)=> any;
    onLabelStyleChanged: (event: CustomEvent)=> any;
    onLowChanged: (event: CustomEvent)=> any;
    onMarkerDisplayedChanged: (event: CustomEvent)=> any;
    onMarkerShapeChanged: (event: CustomEvent)=> any;
    onMarkerSizeChanged: (event: CustomEvent)=> any;
    onOpenChanged: (event: CustomEvent)=> any;
    onPatternChanged: (event: CustomEvent)=> any;
    onQ1Changed: (event: CustomEvent)=> any;
    onQ2Changed: (event: CustomEvent)=> any;
    onQ3Changed: (event: CustomEvent)=> any;
    onSeriesIdChanged: (event: CustomEvent)=> any;
    onShortDescChanged: (event: CustomEvent)=> any;
    onSourceChanged: (event: CustomEvent)=> any;
    onSourceHoverChanged: (event: CustomEvent)=> any;
    onSourceHoverSelectedChanged: (event: CustomEvent)=> any;
    onSourceSelectedChanged: (event: CustomEvent)=> any;
    onSvgClassNameChanged: (event: CustomEvent)=> any;
    onSvgStyleChanged: (event: CustomEvent)=> any;
    onTargetValueChanged: (event: CustomEvent)=> any;
    onValueChanged: (event: CustomEvent)=> any;
    onVolumeChanged: (event: CustomEvent)=> any;
    onXChanged: (event: CustomEvent)=> any;
    onYChanged: (event: CustomEvent)=> any;
    onZChanged: (event: CustomEvent)=> any;

    addEventListener<T extends keyof ojChartItemEventMap>(type: T, listener: (this: HTMLElement, ev: ojChartItemEventMap[T]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    
  }
  interface ojChartItemEventMap extends oj.JetElementEventMap {
    'borderColorChanged': CustomEvent;
    'borderWidthChanged': CustomEvent;
    'boxPlotChanged': CustomEvent;
    'categoriesChanged': CustomEvent;
    'closeChanged': CustomEvent;
    'colorChanged': CustomEvent;
    'drillingChanged': CustomEvent;
    'groupIdChanged': CustomEvent;
    'highChanged': CustomEvent;
    'itemsChanged': CustomEvent;
    'labelChanged': CustomEvent;
    'labelPositionChanged': CustomEvent;
    'labelStyleChanged': CustomEvent;
    'lowChanged': CustomEvent;
    'markerDisplayedChanged': CustomEvent;
    'markerShapeChanged': CustomEvent;
    'markerSizeChanged': CustomEvent;
    'openChanged': CustomEvent;
    'patternChanged': CustomEvent;
    'q1Changed': CustomEvent;
    'q2Changed': CustomEvent;
    'q3Changed': CustomEvent;
    'seriesIdChanged': CustomEvent;
    'shortDescChanged': CustomEvent;
    'sourceChanged': CustomEvent;
    'sourceHoverChanged': CustomEvent;
    'sourceHoverSelectedChanged': CustomEvent;
    'sourceSelectedChanged': CustomEvent;
    'svgClassNameChanged': CustomEvent;
    'svgStyleChanged': CustomEvent;
    'targetValueChanged': CustomEvent;
    'valueChanged': CustomEvent;
    'volumeChanged': CustomEvent;
    'xChanged': CustomEvent;
    'yChanged': CustomEvent;
    'zChanged': CustomEvent;
  }
  interface ojChartItemSettableProperties extends JetSettableProperties {
    borderColor?: string;
    borderWidth?: number;
    boxPlot?: {medianSvgClassName?: string, medianSvgStyle?: object, q2Color?: string, q2SvgClassName?: string, q2SvgStyle?: object, q3SvgClassName?: string, q3SvgStyle?: object, whiskerEndLength?: string, whiskerEndSvgClassName?: string, whiskerEndSvgStyle?: object, whiskerSvgClassName?: string, whiskerSvgStyle?: object};
    categories?: Array<string>;
    close?: number;
    color?: string;
    drilling?: 'on'|'off'|'inherit';
    groupId: Array<string>;
    high?: number;
    items?: Array<object>|Array<number>;
    label?: string|Array<string>;
    labelPosition?: 'center'|'outsideSlice'|'aboveMarker'|'belowMarker'|'beforeMarker'|'afterMarker'|'insideBarEdge'|'outsideBarEdge'|'none'|'auto';
    labelStyle?: object|Array<object>;
    low?: number;
    markerDisplayed?: 'on'|'off'|'auto';
    markerShape?: 'circle'|'diamond'|'human'|'plus'|'square'|'star'|'triangleDown'|'triangleUp'|'auto'|string;
    markerSize?: number;
    open?: number;
    pattern?: 'smallChecker'|'smallCrosshatch'|'smallDiagonalLeft'|'smallDiagonalRight'|'smallDiamond'|'smallTriangle'|'largeChecker'|'largeCrosshatch'|'largeDiagonalLeft'|'largeDiagonalRight'|'largeDiamond'|'largeTriangle'|'auto';
    q1?: number;
    q2?: number;
    q3?: number;
    seriesId: string;
    shortDesc?: string;
    source?: string;
    sourceHover?: string;
    sourceHoverSelected?: string;
    sourceSelected?: string;
    svgClassName?: string;
    svgStyle?: object;
    targetValue?: number;
    value?: number;
    volume?: number;
    x?: number|string;
    y?: number;
    z?: number; 
  }

}
declare namespace oj {  
  class ojChartSeries extends JetElement<ojChartSeriesSettableProperties> {
    areaColor?: string;
    areaSvgClassName?: string;
    areaSvgStyle?: object;
    assignedToY2?: 'on'|'off';
    borderColor?: string;
    borderWidth?: number;
    boxPlot?: {medianSvgClassName?: string, medianSvgStyle?: object, q2Color?: string, q2SvgClassName?: string, q2SvgStyle?: object, q3Color?: string, q3SvgClassName?: string, q3SvgStyle?: object, whiskerEndLength?: string, whiskerEndSvgClassName?: string, whiskerEndSvgStyle?: object, whiskerSvgClassName?: string, whiskerSvgStyle?: object};
    categories?: Array<string>;
    color?: string;
    displayInLegend?: 'on'|'off'|'auto';
    drilling?: 'on'|'off'|'inherit';
    lineStyle?: 'dotted'|'dashed'|'solid';
    lineType?: 'straight'|'curved'|'stepped'|'centeredStepped'|'segmented'|'centeredSegmented'|'none'|'auto';
    lineWidth?: number;
    markerColor?: string;
    markerDisplayed?: 'on'|'off'|'auto';
    markerShape?: 'circle'|'diamond'|'human'|'plus'|'square'|'star'|'triangleDown'|'triangleUp'|'auto'|string;
    markerSize?: number;
    markerSvgClassName?: string;
    markerSvgStyle?: object;
    name?: string;
    pattern?: 'smallChecker'|'smallCrosshatch'|'smallDiagonalLeft'|'smallDiagonalRight'|'smallDiamond'|'smallTriangle'|'largeChecker'|'largeCrosshatch'|'largeDiagonalLeft'|'largeDiagonalRight'|'largeDiamond'|'largeTriangle'|'auto';
    pieSliceExplode?: number;
    shortDesc?: string;
    source?: string;
    sourceHover?: string;
    sourceHoverSelected?: string;
    sourceSelected?: string;
    stackCategory?: string;
    svgClassName?: string;
    svgStyle?: object;
    type?: 'bar'|'line'|'area'|'lineWithArea'|'candlestick'|'boxPlot'|'auto';
    onAreaColorChanged: (event: CustomEvent)=> any;
    onAreaSvgClassNameChanged: (event: CustomEvent)=> any;
    onAreaSvgStyleChanged: (event: CustomEvent)=> any;
    onAssignedToY2Changed: (event: CustomEvent)=> any;
    onBorderColorChanged: (event: CustomEvent)=> any;
    onBorderWidthChanged: (event: CustomEvent)=> any;
    onBoxPlotChanged: (event: CustomEvent)=> any;
    onCategoriesChanged: (event: CustomEvent)=> any;
    onColorChanged: (event: CustomEvent)=> any;
    onDisplayInLegendChanged: (event: CustomEvent)=> any;
    onDrillingChanged: (event: CustomEvent)=> any;
    onLineStyleChanged: (event: CustomEvent)=> any;
    onLineTypeChanged: (event: CustomEvent)=> any;
    onLineWidthChanged: (event: CustomEvent)=> any;
    onMarkerColorChanged: (event: CustomEvent)=> any;
    onMarkerDisplayedChanged: (event: CustomEvent)=> any;
    onMarkerShapeChanged: (event: CustomEvent)=> any;
    onMarkerSizeChanged: (event: CustomEvent)=> any;
    onMarkerSvgClassNameChanged: (event: CustomEvent)=> any;
    onMarkerSvgStyleChanged: (event: CustomEvent)=> any;
    onNameChanged: (event: CustomEvent)=> any;
    onPatternChanged: (event: CustomEvent)=> any;
    onPieSliceExplodeChanged: (event: CustomEvent)=> any;
    onShortDescChanged: (event: CustomEvent)=> any;
    onSourceChanged: (event: CustomEvent)=> any;
    onSourceHoverChanged: (event: CustomEvent)=> any;
    onSourceHoverSelectedChanged: (event: CustomEvent)=> any;
    onSourceSelectedChanged: (event: CustomEvent)=> any;
    onStackCategoryChanged: (event: CustomEvent)=> any;
    onSvgClassNameChanged: (event: CustomEvent)=> any;
    onSvgStyleChanged: (event: CustomEvent)=> any;
    onTypeChanged: (event: CustomEvent)=> any;

    addEventListener<T extends keyof ojChartSeriesEventMap>(type: T, listener: (this: HTMLElement, ev: ojChartSeriesEventMap[T]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    
  }
  interface ojChartSeriesEventMap extends oj.JetElementEventMap {
    'areaColorChanged': CustomEvent;
    'areaSvgClassNameChanged': CustomEvent;
    'areaSvgStyleChanged': CustomEvent;
    'assignedToY2Changed': CustomEvent;
    'borderColorChanged': CustomEvent;
    'borderWidthChanged': CustomEvent;
    'boxPlotChanged': CustomEvent;
    'categoriesChanged': CustomEvent;
    'colorChanged': CustomEvent;
    'displayInLegendChanged': CustomEvent;
    'drillingChanged': CustomEvent;
    'lineStyleChanged': CustomEvent;
    'lineTypeChanged': CustomEvent;
    'lineWidthChanged': CustomEvent;
    'markerColorChanged': CustomEvent;
    'markerDisplayedChanged': CustomEvent;
    'markerShapeChanged': CustomEvent;
    'markerSizeChanged': CustomEvent;
    'markerSvgClassNameChanged': CustomEvent;
    'markerSvgStyleChanged': CustomEvent;
    'nameChanged': CustomEvent;
    'patternChanged': CustomEvent;
    'pieSliceExplodeChanged': CustomEvent;
    'shortDescChanged': CustomEvent;
    'sourceChanged': CustomEvent;
    'sourceHoverChanged': CustomEvent;
    'sourceHoverSelectedChanged': CustomEvent;
    'sourceSelectedChanged': CustomEvent;
    'stackCategoryChanged': CustomEvent;
    'svgClassNameChanged': CustomEvent;
    'svgStyleChanged': CustomEvent;
    'typeChanged': CustomEvent;
  }
  interface ojChartSeriesSettableProperties extends JetSettableProperties {
    areaColor?: string;
    areaSvgClassName?: string;
    areaSvgStyle?: object;
    assignedToY2?: 'on'|'off';
    borderColor?: string;
    borderWidth?: number;
    boxPlot?: {medianSvgClassName?: string, medianSvgStyle?: object, q2Color?: string, q2SvgClassName?: string, q2SvgStyle?: object, q3Color?: string, q3SvgClassName?: string, q3SvgStyle?: object, whiskerEndLength?: string, whiskerEndSvgClassName?: string, whiskerEndSvgStyle?: object, whiskerSvgClassName?: string, whiskerSvgStyle?: object};
    categories?: Array<string>;
    color?: string;
    displayInLegend?: 'on'|'off'|'auto';
    drilling?: 'on'|'off'|'inherit';
    lineStyle?: 'dotted'|'dashed'|'solid';
    lineType?: 'straight'|'curved'|'stepped'|'centeredStepped'|'segmented'|'centeredSegmented'|'none'|'auto';
    lineWidth?: number;
    markerColor?: string;
    markerDisplayed?: 'on'|'off'|'auto';
    markerShape?: 'circle'|'diamond'|'human'|'plus'|'square'|'star'|'triangleDown'|'triangleUp'|'auto'|string;
    markerSize?: number;
    markerSvgClassName?: string;
    markerSvgStyle?: object;
    name?: string;
    pattern?: 'smallChecker'|'smallCrosshatch'|'smallDiagonalLeft'|'smallDiagonalRight'|'smallDiamond'|'smallTriangle'|'largeChecker'|'largeCrosshatch'|'largeDiagonalLeft'|'largeDiagonalRight'|'largeDiamond'|'largeTriangle'|'auto';
    pieSliceExplode?: number;
    shortDesc?: string;
    source?: string;
    sourceHover?: string;
    sourceHoverSelected?: string;
    sourceSelected?: string;
    stackCategory?: string;
    svgClassName?: string;
    svgStyle?: object;
    type?: 'bar'|'line'|'area'|'lineWithArea'|'candlestick'|'boxPlot'|'auto'; 
  }

}
declare namespace oj {  
  class ojSparkChart<K, D> extends dvtBaseComponent<ojSparkChartSettableProperties<K, D>> {
    animationDuration: number|null;
    animationOnDataChange: 'auto'|'none';
    animationOnDisplay: 'auto'|'none';
    areaColor: string;
    areaSvgClassName: string;
    areaSvgStyle: object;
    as: string;
    barGapRatio: number;
    baselineScaling: 'zero'|'min';
    color: string;
    data: oj.DataProvider<K, D>|null;
    firstColor: string;
    highColor: string;
    lastColor: string;
    lineStyle: 'dotted'|'dashed'|'solid';
    lineType: 'curved'|'stepped'|'centeredStepped'|'segmented'|'centeredSegmented'|'none'|'straight';
    lineWidth: number;
    lowColor: string;
    markerShape: 'square'|'circle'|'diamond'|'plus'|'triangleDown'|'triangleUp'|'human'|'star'|'auto';
    markerSize: number;
    referenceObjects: Array<oj.ojSparkChart.ReferenceObject>;
    svgClassName: string;
    svgStyle: object;
    tooltip: {renderer: ((context: oj.ojSparkChart.TooltipContext) => ({insert: Element|string}|{preventDefault: boolean}))|null};
    type: 'area'|'lineWithArea'|'bar'|'line';
    visualEffects: 'none'|'auto';
    translations: {componentName?: string, labelAndValue?: string, labelClearSelection?: string, labelCountWithTotal?: string, labelDataVisualization?: string, labelInvalidData?: string, labelNoData?: string, stateCollapsed?: string, stateDrillable?: string, stateExpanded?: string, stateHidden?: string, stateIsolated?: string, stateMaximized?: string, stateMinimized?: string, stateSelected?: string, stateUnselected?: string, stateVisible?: string};
    onAnimationDurationChanged: (event: CustomEvent)=> any;
    onAnimationOnDataChangeChanged: (event: CustomEvent)=> any;
    onAnimationOnDisplayChanged: (event: CustomEvent)=> any;
    onAreaColorChanged: (event: CustomEvent)=> any;
    onAreaSvgClassNameChanged: (event: CustomEvent)=> any;
    onAreaSvgStyleChanged: (event: CustomEvent)=> any;
    onAsChanged: (event: CustomEvent)=> any;
    onBarGapRatioChanged: (event: CustomEvent)=> any;
    onBaselineScalingChanged: (event: CustomEvent)=> any;
    onColorChanged: (event: CustomEvent)=> any;
    onDataChanged: (event: CustomEvent)=> any;
    onFirstColorChanged: (event: CustomEvent)=> any;
    onHighColorChanged: (event: CustomEvent)=> any;
    onLastColorChanged: (event: CustomEvent)=> any;
    onLineStyleChanged: (event: CustomEvent)=> any;
    onLineTypeChanged: (event: CustomEvent)=> any;
    onLineWidthChanged: (event: CustomEvent)=> any;
    onLowColorChanged: (event: CustomEvent)=> any;
    onMarkerShapeChanged: (event: CustomEvent)=> any;
    onMarkerSizeChanged: (event: CustomEvent)=> any;
    onReferenceObjectsChanged: (event: CustomEvent)=> any;
    onSvgClassNameChanged: (event: CustomEvent)=> any;
    onSvgStyleChanged: (event: CustomEvent)=> any;
    onTooltipChanged: (event: CustomEvent)=> any;
    onTypeChanged: (event: CustomEvent)=> any;
    onVisualEffectsChanged: (event: CustomEvent)=> any;

    addEventListener<T extends keyof ojSparkChartEventMap>(type: T, listener: (this: HTMLElement, ev: ojSparkChartEventMap[T]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    
    getDataItem(itemIndex: number): oj.ojSparkChart.ItemContext|null;
  }
  interface ojSparkChartEventMap extends oj.dvtBaseComponentEventMap {
    'animationDurationChanged': CustomEvent;
    'animationOnDataChangeChanged': CustomEvent;
    'animationOnDisplayChanged': CustomEvent;
    'areaColorChanged': CustomEvent;
    'areaSvgClassNameChanged': CustomEvent;
    'areaSvgStyleChanged': CustomEvent;
    'asChanged': CustomEvent;
    'barGapRatioChanged': CustomEvent;
    'baselineScalingChanged': CustomEvent;
    'colorChanged': CustomEvent;
    'dataChanged': CustomEvent;
    'firstColorChanged': CustomEvent;
    'highColorChanged': CustomEvent;
    'lastColorChanged': CustomEvent;
    'lineStyleChanged': CustomEvent;
    'lineTypeChanged': CustomEvent;
    'lineWidthChanged': CustomEvent;
    'lowColorChanged': CustomEvent;
    'markerShapeChanged': CustomEvent;
    'markerSizeChanged': CustomEvent;
    'referenceObjectsChanged': CustomEvent;
    'svgClassNameChanged': CustomEvent;
    'svgStyleChanged': CustomEvent;
    'tooltipChanged': CustomEvent;
    'typeChanged': CustomEvent;
    'visualEffectsChanged': CustomEvent;
  }
  interface ojSparkChartSettableProperties<K, D> extends dvtBaseComponentSettableProperties {
    animationDuration: number|null;
    animationOnDataChange: 'auto'|'none';
    animationOnDisplay: 'auto'|'none';
    areaColor: string;
    areaSvgClassName: string;
    areaSvgStyle: object;
    as: string;
    barGapRatio: number;
    baselineScaling: 'zero'|'min';
    color: string;
    data: oj.DataProvider<K, D>|null;
    firstColor: string;
    highColor: string;
    lastColor: string;
    lineStyle: 'dotted'|'dashed'|'solid';
    lineType: 'curved'|'stepped'|'centeredStepped'|'segmented'|'centeredSegmented'|'none'|'straight';
    lineWidth: number;
    lowColor: string;
    markerShape: 'square'|'circle'|'diamond'|'plus'|'triangleDown'|'triangleUp'|'human'|'star'|'auto';
    markerSize: number;
    referenceObjects: Array<oj.ojSparkChart.ReferenceObject>;
    svgClassName: string;
    svgStyle: object;
    tooltip: {renderer: ((context: oj.ojSparkChart.TooltipContext) => ({insert: Element|string}|{preventDefault: boolean}))|null};
    type: 'area'|'lineWithArea'|'bar'|'line';
    visualEffects: 'none'|'auto';
    translations: {componentName?: string, labelAndValue?: string, labelClearSelection?: string, labelCountWithTotal?: string, labelDataVisualization?: string, labelInvalidData?: string, labelNoData?: string, stateCollapsed?: string, stateDrillable?: string, stateExpanded?: string, stateHidden?: string, stateIsolated?: string, stateMaximized?: string, stateMinimized?: string, stateSelected?: string, stateUnselected?: string, stateVisible?: string}; 
  }
  namespace ojSparkChart {
    type Item =
    {
      borderColor: string, color: string, date: Date, high: number, low: number, markerDisplayed: 'on'|'off', markerShape: 'square'|'circle'|'diamond'|'plus'|'triangleDown'|'triangleUp'|'human'|'star'|'auto'|string, markerSize: number, svgClassName: string, svgStyle: object, value: number
    }
  }
  namespace ojSparkChart {
    type ItemContext =
    {
      borderColor: string, color: string, date: Date, high: number, low: number, value: number
    }
  }
  namespace ojSparkChart {
    type ReferenceObject =
    {
      color?: string, high?: number, lineWidth?: number, lineStyle: 'dotted'|'dashed'|'solid', location: 'front'|'back', low?: number, svgClassName?: string, svgStyle?: object, type: 'area'|'line', value?: number
    }
  }
  namespace ojSparkChart {
    type TooltipContext =
    {
      color: string, componentElement: Element, parentElement: Element
    }
  }

}
declare namespace oj {  
  class ojSparkChartItem extends JetElement<ojSparkChartItemSettableProperties> {
    borderColor: string;
    color: string;
    date: string;
    high: number|null;
    low: number|null;
    markerDisplayed: 'off'|'on';
    markerShape: 'auto'|'circle'|'diamond'|'human'|'plus'|'square'|'star'|'triangleDown'|'triangleUp';
    markerSize: number;
    svgClassName: string;
    svgStyle: object;
    value: number|null;
    onBorderColorChanged: (event: CustomEvent)=> any;
    onColorChanged: (event: CustomEvent)=> any;
    onDateChanged: (event: CustomEvent)=> any;
    onHighChanged: (event: CustomEvent)=> any;
    onLowChanged: (event: CustomEvent)=> any;
    onMarkerDisplayedChanged: (event: CustomEvent)=> any;
    onMarkerShapeChanged: (event: CustomEvent)=> any;
    onMarkerSizeChanged: (event: CustomEvent)=> any;
    onSvgClassNameChanged: (event: CustomEvent)=> any;
    onSvgStyleChanged: (event: CustomEvent)=> any;
    onValueChanged: (event: CustomEvent)=> any;

    addEventListener<T extends keyof ojSparkChartItemEventMap>(type: T, listener: (this: HTMLElement, ev: ojSparkChartItemEventMap[T]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    
  }
  interface ojSparkChartItemEventMap extends oj.JetElementEventMap {
    'borderColorChanged': CustomEvent;
    'colorChanged': CustomEvent;
    'dateChanged': CustomEvent;
    'highChanged': CustomEvent;
    'lowChanged': CustomEvent;
    'markerDisplayedChanged': CustomEvent;
    'markerShapeChanged': CustomEvent;
    'markerSizeChanged': CustomEvent;
    'svgClassNameChanged': CustomEvent;
    'svgStyleChanged': CustomEvent;
    'valueChanged': CustomEvent;
  }
  interface ojSparkChartItemSettableProperties extends JetSettableProperties {
    borderColor: string;
    color: string;
    date: string;
    high: number|null;
    low: number|null;
    markerDisplayed: 'off'|'on';
    markerShape: 'auto'|'circle'|'diamond'|'human'|'plus'|'square'|'star'|'triangleDown'|'triangleUp';
    markerSize: number;
    svgClassName: string;
    svgStyle: object;
    value: number|null; 
  }

}
