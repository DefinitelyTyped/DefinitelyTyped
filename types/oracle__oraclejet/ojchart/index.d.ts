import { DataProvider } from '../ojdataprovider';
import { dvtBaseComponent, dvtBaseComponentEventMap, dvtBaseComponentSettableProperties } from '../ojdvt-base';
import { JetElement, JetSettableProperties, JetElementCustomEvent, JetSetPropertyType } from '..';
export interface ojChart<K, D> extends dvtBaseComponent<ojChartSettableProperties<K, D>> {
    animationOnDataChange: 'auto' | 'slideToLeft' | 'slideToRight' | 'none';
    animationOnDisplay: 'auto' | 'alphaFade' | 'zoom' | 'none';
    as: string;
    coordinateSystem: 'polar' | 'cartesian';
    data: DataProvider<K, D> | null;
    dataCursor: 'off' | 'on' | 'auto';
    dataCursorBehavior: 'smooth' | 'snap' | 'auto';
    dataCursorPosition: {
        x: number | string;
        y: number;
        y2: number;
    };
    dataLabel: ((context: ojChart.DataLabelContext) => ({
        insert: Element | string;
    } | {
        preventDefault: boolean;
    }));
    dnd: {
        drag: {
            groups: {
                dataTypes: string | string[];
                drag: ((param0: Event) => void);
                dragEnd: ((param0: Event) => void);
                dragStart: ((param0: Event, param1: object) => void);
            };
            items: {
                dataTypes: string | string[];
                drag: ((param0: Event) => void);
                dragEnd: ((param0: Event) => void);
                dragStart: ((param0: Event, param1: object) => void);
            };
            series: {
                dataTypes: string | string[];
                drag: ((param0: Event) => void);
                dragEnd: ((param0: Event) => void);
                dragStart: ((param0: Event, param1: object) => void);
            };
        };
        drop: {
            legend: {
                dataTypes: string | string[];
                dragEnter: ((param0: Event, param1: object) => void);
                dragLeave: ((param0: Event, param1: object) => void);
                dragOver: ((param0: Event, param1: object) => void);
                drop: ((param0: Event, param1: object) => void);
            };
            plotArea: {
                dataTypes: string | string[];
                dragEnter: ((param0: Event, param1: object) => void);
                dragLeave: ((param0: Event, param1: object) => void);
                dragOver: ((param0: Event, param1: object) => void);
                drop: ((param0: Event, param1: object) => void);
            };
            xAxis: {
                dataTypes: string | string[];
                dragEnter: ((param0: Event, param1: object) => void);
                dragLeave: ((param0: Event, param1: object) => void);
                dragOver: ((param0: Event, param1: object) => void);
                drop: ((param0: Event, param1: object) => void);
            };
            y2Axis: {
                dataTypes: string | string[];
                dragEnter: ((param0: Event, param1: object) => void);
                dragLeave: ((param0: Event, param1: object) => void);
                dragOver: ((param0: Event, param1: object) => void);
                drop: ((param0: Event, param1: object) => void);
            };
            yAxis: {
                dataTypes: string | string[];
                dragEnter: ((param0: Event, param1: object) => void);
                dragLeave: ((param0: Event, param1: object) => void);
                dragOver: ((param0: Event, param1: object) => void);
                drop: ((param0: Event, param1: object) => void);
            };
        };
    };
    dragMode: 'pan' | 'zoom' | 'select' | 'off' | 'user';
    drilling: 'on' | 'seriesOnly' | 'groupsOnly' | 'off';
    groupComparator: ((param0: object, param1: object) => number) | null;
    hiddenCategories: string[];
    hideAndShowBehavior: 'withRescale' | 'withoutRescale' | 'none';
    highlightMatch: 'any' | 'all';
    highlightedCategories: string[];
    hoverBehavior: 'dim' | 'none';
    initialZooming: 'first' | 'last' | 'none';
    legend: {
        backgroundColor: string;
        borderColor: string;
        maxSize: string;
        position: 'start' | 'end' | 'bottom' | 'top' | 'auto';
        referenceObjectSection: {
            title: string;
            titleHalign: 'center' | 'end' | 'start';
            titleStyle: object;
        };
        rendered: 'on' | 'off' | 'auto';
        scrolling: 'off' | 'asNeeded';
        sections: Array<{
            items: Array<{
                borderColor: string;
                categories: string[];
                categoryVisibility: 'hidden' | 'visible';
                color: string;
                id: string;
                lineStyle: 'dotted' | 'dashed' | 'solid';
                lineWidth: number;
                markerColor: string;
                markerShape?: 'circle' | 'diamond' | 'human' | 'plus' | 'rectangle' | 'square' | 'star' | 'triangleDown' | 'triangleUp' | string;
                pattern: 'smallChecker' | 'smallCrosshatch' | 'smallDiagonalLeft' | 'smallDiagonalRight' | 'smallDiamond' | 'smallTriangle' | 'largeChecker' | 'largeCrosshatch' | 'largeDiagonalLeft' |
                   'largeDiagonalRight' | 'largeDiamond' | 'largeTriangle' | 'none';
                shortDesc: string;
                source: string;
                symbolType: 'line' | 'lineWithMarker' | 'image' | 'marker';
                text: string;
            }>;
            sections: object[];
            title: string;
            titleHalign: 'center' | 'end' | 'start';
            titleStyle: object;
        }>;
        seriesSection: {
            title: string;
            titleHalign: 'center' | 'end' | 'start';
            titleStyle: object;
        };
        size: string;
        symbolHeight: number;
        symbolWidth: number;
        textStyle: object;
        title: string;
        titleHalign: 'center' | 'end' | 'start';
        titleStyle: object;
    };
    orientation: 'horizontal' | 'vertical';
    otherThreshold: number;
    overview: {
        content: object;
        height: string;
        rendered: 'on' | 'off';
    };
    pieCenter: {
        converter: object;
        label: string;
        labelStyle: object;
        renderer: ((context: ojChart.PieCenterContext) => ({
            insert: Element | string;
        } | {
            preventDefault: boolean;
        }));
        scaling: 'none' | 'thousand' | 'million' | 'billion' | 'trillion' | 'quadrillion' | 'auto';
    };
    plotArea: {
        backgroundColor: string;
        borderColor: string;
        borderWidth: number;
        rendered: 'off' | 'on';
    };
    polarGridShape: 'polygon' | 'circle';
    selection: K[];
    selectionMode: 'single' | 'multiple' | 'none';
    seriesComparator: ((param0: object, param1: object) => number) | null;
    sorting: 'ascending' | 'descending' | 'off';
    splitDualY: 'on' | 'off' | 'auto';
    splitterPosition: number;
    stack: 'on' | 'off';
    stackLabel: 'on' | 'off';
    styleDefaults: {
        animationDownColor: string;
        animationDuration: number;
        animationIndicators: 'none' | 'all';
        animationUpColor: string;
        barGapRatio: number;
        borderColor: string;
        borderWidth: number;
        boxPlot: {
            medianSvgClassName: string;
            medianSvgStyle: object;
            whiskerEndLength: string;
            whiskerEndSvgClassName: string;
            whiskerEndSvgStyle: object;
            whiskerSvgClassName: string;
            whiskerSvgStyle: object;
        };
        colors: string[];
        dataCursor: {
            lineColor: string;
            lineStyle: 'dotted' | 'dashed' | 'solid';
            lineWidth: number;
            markerColor: string;
            markerDisplayed: 'off' | 'on';
            markerSize: number;
        };
        dataItemGaps: string;
        dataLabelPosition: 'center' | 'outsideSlice' | 'aboveMarker' | 'belowMarker' | 'beforeMarker' | 'afterMarker' | 'insideBarEdge' | 'outsideBarEdge' | 'none' | 'auto';
        dataLabelStyle: object | object[];
        funnelBackgroundColor: string;
        groupSeparators: {
            color: string;
            rendered: 'off' | 'auto';
        };
        hoverBehaviorDelay: number;
        lineStyle: 'dotted' | 'dashed' | 'solid';
        lineType: 'straight' | 'curved' | 'stepped' | 'centeredStepped' | 'segmented' | 'centeredSegmented' | 'none' | 'auto';
        lineWidth: number;
        markerColor: string;
        markerDisplayed: 'on' | 'off' | 'auto';
        markerShape?: 'auto' | 'circle' | 'diamond' | 'human' | 'plus' | 'square' | 'star' | 'triangleDown' | 'triangleUp' | string;
        markerSize: number;
        marqueeBorderColor: string;
        marqueeColor: string;
        maxBarWidth: number;
        otherColor: string;
        patterns: string[];
        pieFeelerColor: string;
        pieInnerRadius: number;
        selectionEffect: 'explode' | 'highlightAndExplode' | 'highlight';
        seriesEffect: 'color' | 'pattern' | 'gradient';
        shapes: string[];
        stackLabelStyle: object;
        stockFallingColor: string;
        stockRangeColor: string;
        stockRisingColor: string;
        stockVolumeColor: string;
        threeDEffect: 'on' | 'off';
        tooltipLabelStyle: object;
        tooltipValueStyle: object;
    };
    timeAxisType: 'enabled' | 'mixedFrequency' | 'skipGaps' | 'disabled' | 'auto';
    tooltip: {
        renderer: ((context: ojChart.TooltipContext) => ({
            insert: Element | string;
        } | {
            preventDefault: boolean;
        }));
    };
    touchResponse: 'touchStart' | 'auto';
    type: 'line' | 'area' | 'lineWithArea' | 'stock' | 'boxPlot' | 'combo' | 'pie' | 'scatter' | 'bubble' | 'funnel' | 'pyramid' | 'bar';
    valueFormats: {
        close: {
            converter: object;
            scaling: 'none' | 'thousand' | 'million' | 'billion' | 'trillion' | 'quadrillion' | 'auto';
            tooltipDisplay: 'off' | 'auto';
            tooltipLabel: string;
        };
        group: {
            tooltipDisplay: 'off' | 'auto';
            tooltipLabel: string | string[];
        };
        high: {
            converter: object;
            scaling: 'none' | 'thousand' | 'million' | 'billion' | 'trillion' | 'quadrillion' | 'auto';
            tooltipDisplay: 'off' | 'auto';
            tooltipLabel: string;
        };
        label: {
            converter: object;
            scaling: 'none' | 'thousand' | 'million' | 'billion' | 'trillion' | 'quadrillion' | 'auto';
        };
        low: {
            converter: object;
            scaling: 'none' | 'thousand' | 'million' | 'billion' | 'trillion' | 'quadrillion' | 'auto';
            tooltipDisplay: 'off' | 'auto';
            tooltipLabel: string;
        };
        open: {
            converter: object;
            scaling: 'none' | 'thousand' | 'million' | 'billion' | 'trillion' | 'quadrillion' | 'auto';
            tooltipDisplay: 'off' | 'auto';
            tooltipLabel: string;
        };
        q1: {
            converter: object;
            scaling: 'none' | 'thousand' | 'million' | 'billion' | 'trillion' | 'quadrillion' | 'auto';
            tooltipDisplay: 'off' | 'auto';
            tooltipLabel: string;
        };
        q2: {
            converter: object;
            scaling: 'none' | 'thousand' | 'million' | 'billion' | 'trillion' | 'quadrillion' | 'auto';
            tooltipDisplay: 'off' | 'auto';
            tooltipLabel: string;
        };
        q3: {
            converter: object;
            scaling: 'none' | 'thousand' | 'million' | 'billion' | 'trillion' | 'quadrillion' | 'auto';
            tooltipDisplay: 'off' | 'auto';
            tooltipLabel: string;
        };
        series: {
            tooltipDisplay: 'off' | 'auto';
            tooltipLabel: string;
        };
        targetValue: {
            converter: object;
            scaling: 'none' | 'thousand' | 'million' | 'billion' | 'trillion' | 'quadrillion' | 'auto';
            tooltipDisplay: 'off' | 'auto';
            tooltipLabel: string;
        };
        value: {
            converter: object;
            scaling: 'none' | 'thousand' | 'million' | 'billion' | 'trillion' | 'quadrillion' | 'auto';
            tooltipDisplay: 'off' | 'auto';
            tooltipLabel: string;
        };
        volume: {
            converter: object;
            scaling: 'none' | 'thousand' | 'million' | 'billion' | 'trillion' | 'quadrillion' | 'auto';
            tooltipDisplay: 'off' | 'auto';
            tooltipLabel: string;
        };
        x: {
            converter: object;
            scaling: 'none' | 'thousand' | 'million' | 'billion' | 'trillion' | 'quadrillion' | 'auto';
            tooltipDisplay: 'off' | 'auto';
            tooltipLabel: string;
        };
        y: {
            converter: object;
            scaling: 'none' | 'thousand' | 'million' | 'billion' | 'trillion' | 'quadrillion' | 'auto';
            tooltipDisplay: 'off' | 'auto';
            tooltipLabel: string;
        };
        y2: {
            converter: object;
            scaling: 'none' | 'thousand' | 'million' | 'billion' | 'trillion' | 'quadrillion' | 'auto';
            tooltipDisplay: 'off' | 'auto';
            tooltipLabel: string;
        };
        z: {
            converter: object;
            scaling: 'none' | 'thousand' | 'million' | 'billion' | 'trillion' | 'quadrillion' | 'auto';
            tooltipDisplay: 'off' | 'auto';
            tooltipLabel: string;
        };
    };
    xAxis: {
        axisLine: {
            lineColor: string;
            lineWidth: number;
            rendered: 'off' | 'on';
        };
        baselineScaling: 'min' | 'zero';
        dataMax: number;
        dataMin: number;
        majorTick: {
            baselineColor: 'inherit' | 'auto';
            baselineStyle: 'dotted' | 'dashed' | 'solid';
            baselineWidth: number;
            lineColor: string;
            lineStyle: 'dotted' | 'dashed' | 'solid';
            lineWidth: number;
            rendered: 'on' | 'off' | 'auto';
        };
        max: number | string;
        maxSize: string;
        min: number | string;
        minStep: number;
        minorStep: number;
        minorTick: {
            lineColor: string;
            lineStyle: 'dotted' | 'dashed' | 'solid';
            lineWidth: number;
            rendered: 'on' | 'off' | 'auto';
        };
        referenceObjects: Array<{
            categories: string[];
            color: string;
            displayInLegend: 'on' | 'off';
            high: number;
            id: string;
            lineStyle: 'dotted' | 'dashed' | 'solid';
            lineType: 'curved' | 'stepped' | 'centeredStepped' | 'segmented' | 'centeredSegmented' | 'straight';
            lineWidth: number;
            location: 'front' | 'back';
            low: number;
            shortDesc: string;
            svgClassName: string;
            svgStyle: object;
            text: string;
            type: 'area' | 'line';
            value: number;
        }>;
        rendered: 'off' | 'on';
        scale: 'log' | 'linear';
        size: string;
        step: number;
        tickLabel: {
            converter: object;
            rendered: 'off' | 'on';
            rotation: 'none' | 'auto';
            scaling: 'none' | 'thousand' | 'million' | 'billion' | 'trillion' | 'quadrillion' | 'auto';
            style: object;
        };
        title: string;
        titleStyle: object;
        viewportEndGroup: number | string;
        viewportMax: number | string;
        viewportMin: number | string;
        viewportStartGroup: number | string;
    };
    y2Axis: {
        alignTickMarks: 'off' | 'on';
        axisLine: {
            lineColor: string;
            lineWidth: number;
            rendered: 'on' | 'off' | 'auto';
        };
        baselineScaling: 'min' | 'zero';
        dataMax: number;
        dataMin: number;
        majorTick: {
            baselineColor: 'inherit' | 'auto';
            baselineStyle: 'dotted' | 'dashed' | 'solid';
            baselineWidth: number;
            lineColor: string;
            lineStyle: 'dotted' | 'dashed' | 'solid';
            lineWidth: number;
            rendered: 'on' | 'off' | 'auto';
        };
        max: number;
        maxSize: string;
        min: number;
        minStep: number;
        minorStep: number;
        minorTick: {
            lineColor: string;
            lineStyle: 'dotted' | 'dashed' | 'solid';
            lineWidth: number;
            rendered: 'on' | 'off' | 'auto';
        };
        position: 'start' | 'end' | 'top' | 'bottom' | 'auto';
        referenceObjects: Array<{
            categories: string[];
            color: string;
            displayInLegend: 'on' | 'off';
            high: number;
            id: string;
            items: Array<{
                high: number;
                low: number;
                value: number;
                x: number | string;
            }>;
            lineStyle: 'dotted' | 'dashed' | 'solid';
            lineType: 'curved' | 'stepped' | 'centeredStepped' | 'segmented' | 'centeredSegmented' | 'straight';
            lineWidth: number;
            location: 'front' | 'back';
            low: number;
            shortDesc: string;
            svgClassName: string;
            svgStyle: object;
            text: string;
            type: 'area' | 'line';
            value: number;
        }>;
        rendered: 'off' | 'on';
        scale: 'log' | 'linear';
        size: string;
        step: number;
        tickLabel: {
            converter: object;
            position: 'inside' | 'outside';
            rendered: 'off' | 'on';
            scaling: 'none' | 'thousand' | 'million' | 'billion' | 'trillion' | 'quadrillion' | 'auto';
            style: object;
        };
        title: string;
        titleStyle: object;
    };
    yAxis: {
        axisLine: {
            lineColor: string;
            lineWidth: number;
            rendered: 'on' | 'off' | 'auto';
        };
        baselineScaling: 'min' | 'zero';
        dataMax: number;
        dataMin: number;
        majorTick: {
            baselineColor: 'inherit' | 'auto';
            baselineStyle: 'dotted' | 'dashed' | 'solid';
            baselineWidth: number;
            lineColor: string;
            lineStyle: 'dotted' | 'dashed' | 'solid';
            lineWidth: number;
            rendered: 'on' | 'off' | 'auto';
        };
        max: number;
        maxSize: string;
        min: number;
        minStep: number;
        minorStep: number;
        minorTick: {
            lineColor: string;
            lineStyle: 'dotted' | 'dashed' | 'solid';
            lineWidth: number;
            rendered: 'on' | 'off' | 'auto';
        };
        position: 'start' | 'end' | 'top' | 'bottom' | 'auto';
        referenceObjects: Array<{
            categories: string[];
            color: string;
            displayInLegend: 'on' | 'off';
            high: number;
            id: string;
            items: Array<{
                high: number;
                low: number;
                value: number;
                x: number | string;
            }>;
            lineStyle: 'dotted' | 'dashed' | 'solid';
            lineType: 'curved' | 'stepped' | 'centeredStepped' | 'segmented' | 'centeredSegmented' | 'straight';
            lineWidth: number;
            location: 'front' | 'back';
            low: number;
            shortDesc: string;
            svgClassName: string;
            svgStyle: object;
            text: string;
            type: 'area' | 'line';
            value: number;
        }>;
        rendered: 'off' | 'on';
        scale: 'log' | 'linear';
        size: string;
        step: number;
        tickLabel: {
            converter: object;
            position: 'inside' | 'outside';
            rendered: 'off' | 'on';
            scaling: 'none' | 'thousand' | 'million' | 'billion' | 'trillion' | 'quadrillion' | 'auto';
            style: object;
        };
        title: string;
        titleStyle: object;
        viewportMax: number;
        viewportMin: number;
    };
    zoomAndScroll: 'delayedScrollOnly' | 'liveScrollOnly' | 'delayed' | 'live' | 'off';
    zoomDirection: 'x' | 'y' | 'auto';
    translations: {
        componentName?: string;
        labelAndValue?: string;
        labelClearSelection?: string;
        labelClose?: string;
        labelCountWithTotal?: string;
        labelDataVisualization?: string;
        labelDate?: string;
        labelDefaultGroupName?: string;
        labelGroup?: string;
        labelHigh?: string;
        labelInvalidData?: string;
        labelLow?: string;
        labelNoData?: string;
        labelOpen?: string;
        labelOther?: string;
        labelPercentage?: string;
        labelQ1?: string;
        labelQ2?: string;
        labelQ3?: string;
        labelSeries?: string;
        labelTargetValue?: string;
        labelValue?: string;
        labelVolume?: string;
        labelX?: string;
        labelY?: string;
        labelZ?: string;
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
        tooltipPan?: string;
        tooltipSelect?: string;
        tooltipZoom?: string;
    };
    onAnimationOnDataChangeChanged: ((event: JetElementCustomEvent<ojChart<K, D>["animationOnDataChange"]>) => any) | null;
    onAnimationOnDisplayChanged: ((event: JetElementCustomEvent<ojChart<K, D>["animationOnDisplay"]>) => any) | null;
    onAsChanged: ((event: JetElementCustomEvent<ojChart<K, D>["as"]>) => any) | null;
    onCoordinateSystemChanged: ((event: JetElementCustomEvent<ojChart<K, D>["coordinateSystem"]>) => any) | null;
    onDataChanged: ((event: JetElementCustomEvent<ojChart<K, D>["data"]>) => any) | null;
    onDataCursorChanged: ((event: JetElementCustomEvent<ojChart<K, D>["dataCursor"]>) => any) | null;
    onDataCursorBehaviorChanged: ((event: JetElementCustomEvent<ojChart<K, D>["dataCursorBehavior"]>) => any) | null;
    onDataCursorPositionChanged: ((event: JetElementCustomEvent<ojChart<K, D>["dataCursorPosition"]>) => any) | null;
    onDataLabelChanged: ((event: JetElementCustomEvent<ojChart<K, D>["dataLabel"]>) => any) | null;
    onDndChanged: ((event: JetElementCustomEvent<ojChart<K, D>["dnd"]>) => any) | null;
    onDragModeChanged: ((event: JetElementCustomEvent<ojChart<K, D>["dragMode"]>) => any) | null;
    onDrillingChanged: ((event: JetElementCustomEvent<ojChart<K, D>["drilling"]>) => any) | null;
    onGroupComparatorChanged: ((event: JetElementCustomEvent<ojChart<K, D>["groupComparator"]>) => any) | null;
    onHiddenCategoriesChanged: ((event: JetElementCustomEvent<ojChart<K, D>["hiddenCategories"]>) => any) | null;
    onHideAndShowBehaviorChanged: ((event: JetElementCustomEvent<ojChart<K, D>["hideAndShowBehavior"]>) => any) | null;
    onHighlightMatchChanged: ((event: JetElementCustomEvent<ojChart<K, D>["highlightMatch"]>) => any) | null;
    onHighlightedCategoriesChanged: ((event: JetElementCustomEvent<ojChart<K, D>["highlightedCategories"]>) => any) | null;
    onHoverBehaviorChanged: ((event: JetElementCustomEvent<ojChart<K, D>["hoverBehavior"]>) => any) | null;
    onInitialZoomingChanged: ((event: JetElementCustomEvent<ojChart<K, D>["initialZooming"]>) => any) | null;
    onLegendChanged: ((event: JetElementCustomEvent<ojChart<K, D>["legend"]>) => any) | null;
    onOrientationChanged: ((event: JetElementCustomEvent<ojChart<K, D>["orientation"]>) => any) | null;
    onOtherThresholdChanged: ((event: JetElementCustomEvent<ojChart<K, D>["otherThreshold"]>) => any) | null;
    onOverviewChanged: ((event: JetElementCustomEvent<ojChart<K, D>["overview"]>) => any) | null;
    onPieCenterChanged: ((event: JetElementCustomEvent<ojChart<K, D>["pieCenter"]>) => any) | null;
    onPlotAreaChanged: ((event: JetElementCustomEvent<ojChart<K, D>["plotArea"]>) => any) | null;
    onPolarGridShapeChanged: ((event: JetElementCustomEvent<ojChart<K, D>["polarGridShape"]>) => any) | null;
    onSelectionChanged: ((event: JetElementCustomEvent<ojChart<K, D>["selection"]>) => any) | null;
    onSelectionModeChanged: ((event: JetElementCustomEvent<ojChart<K, D>["selectionMode"]>) => any) | null;
    onSeriesComparatorChanged: ((event: JetElementCustomEvent<ojChart<K, D>["seriesComparator"]>) => any) | null;
    onSortingChanged: ((event: JetElementCustomEvent<ojChart<K, D>["sorting"]>) => any) | null;
    onSplitDualYChanged: ((event: JetElementCustomEvent<ojChart<K, D>["splitDualY"]>) => any) | null;
    onSplitterPositionChanged: ((event: JetElementCustomEvent<ojChart<K, D>["splitterPosition"]>) => any) | null;
    onStackChanged: ((event: JetElementCustomEvent<ojChart<K, D>["stack"]>) => any) | null;
    onStackLabelChanged: ((event: JetElementCustomEvent<ojChart<K, D>["stackLabel"]>) => any) | null;
    onStyleDefaultsChanged: ((event: JetElementCustomEvent<ojChart<K, D>["styleDefaults"]>) => any) | null;
    onTimeAxisTypeChanged: ((event: JetElementCustomEvent<ojChart<K, D>["timeAxisType"]>) => any) | null;
    onTooltipChanged: ((event: JetElementCustomEvent<ojChart<K, D>["tooltip"]>) => any) | null;
    onTouchResponseChanged: ((event: JetElementCustomEvent<ojChart<K, D>["touchResponse"]>) => any) | null;
    onTypeChanged: ((event: JetElementCustomEvent<ojChart<K, D>["type"]>) => any) | null;
    onValueFormatsChanged: ((event: JetElementCustomEvent<ojChart<K, D>["valueFormats"]>) => any) | null;
    onXAxisChanged: ((event: JetElementCustomEvent<ojChart<K, D>["xAxis"]>) => any) | null;
    onY2AxisChanged: ((event: JetElementCustomEvent<ojChart<K, D>["y2Axis"]>) => any) | null;
    onYAxisChanged: ((event: JetElementCustomEvent<ojChart<K, D>["yAxis"]>) => any) | null;
    onZoomAndScrollChanged: ((event: JetElementCustomEvent<ojChart<K, D>["zoomAndScroll"]>) => any) | null;
    onZoomDirectionChanged: ((event: JetElementCustomEvent<ojChart<K, D>["zoomDirection"]>) => any) | null;
    onOjDrill: ((event: ojChart.ojDrill) => any) | null;
    onOjSelectInput: ((event: ojChart.ojSelectInput) => any) | null;
    onOjViewportChange: ((event: ojChart.ojViewportChange) => any) | null;
    onOjViewportChangeInput: ((event: ojChart.ojViewportChangeInput) => any) | null;
    addEventListener<T extends keyof ojChartEventMap<K, D>>(type: T, listener: (this: HTMLElement, ev: ojChartEventMap<K, D>[T]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    getProperty<T extends keyof ojChartSettableProperties<K, D>>(property: T): ojChart<K, D>[T];
    getProperty(property: string): any;
    setProperty<T extends keyof ojChartSettableProperties<K, D>>(property: T, value: ojChartSettableProperties<K, D>[T]): void;
    setProperty<T extends string>(property: T, value: JetSetPropertyType<T, ojChartSettableProperties<K, D>>): void;
    setProperties(properties: ojChartSettablePropertiesLenient<K, D>): void;
    getContextByNode(node: Element): ojChart.PieCenterLabelContext | ojChart.LegendItemContext | ojChart.ReferenceObject | ojChart.GroupContext | ojChart.AxisTitleContext | ojChart.ItemContext |
       ojChart.SeriesContext;
    getDataItem(seriesIndex: number, groupIndex: number): object | null;
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
export namespace ojChart {
    interface ojDrill extends CustomEvent<{
        id: string;
        series: string;
        group: string;
        data: object;
        itemData: object;
        seriesData: object;
        groupData: any[];
        [propName: string]: any;
    }> {
    }
    interface ojSelectInput extends CustomEvent<{
        items: string[];
        selectionData: Array<{
            data: object;
            itemData: object;
            groupData: any[];
            seriesData: object;
        }>;
        endGroup: string;
        startGroup: string;
        xMax: number;
        xMin: number;
        yMax: number;
        yMin: number;
        [propName: string]: any;
    }> {
    }
    interface ojViewportChange extends CustomEvent<{
        endGroup: string;
        startGroup: string;
        xMax: number;
        xMin: number;
        yMax: number;
        yMin: number;
        [propName: string]: any;
    }> {
    }
    interface ojViewportChangeInput extends CustomEvent<{
        endGroup: string;
        startGroup: string;
        xMax: number;
        xMin: number;
        yMax: number;
        yMin: number;
        [propName: string]: any;
    }> {
    }
    // tslint:disable-next-line interface-over-type-literal
    type AxisTitleContext = {
        axis: 'xAxis' | 'yAxis' | 'y2Axis';
        subId: string;
    };
    // tslint:disable-next-line interface-over-type-literal
    type DataLabelContext = {
        id: any;
        series: string;
        group: string | string[];
        value: number;
        targetValue: number;
        x: number | string;
        y: number;
        z: number;
        low: number;
        high: number;
        open: number;
        close: number;
        volume: number;
        label: string;
        totalValue: number;
        data: object | null;
        itemData: object | null;
        seriesData: object | null;
        groupData: object | null;
        componentElement: Element;
    };
    // tslint:disable-next-line interface-over-type-literal
    type GroupContext = {
        indexPath: any[];
        subId: string;
    };
    // tslint:disable-next-line interface-over-type-literal
    type ItemContext = {
        seriesIndex: number;
        itemIndex: number;
        subId: string;
    };
    // tslint:disable-next-line interface-over-type-literal
    type LegendItemContext = {
        sectionIndexPath: any[];
        itemIndex: number;
        subId: string;
    };
    // tslint:disable-next-line interface-over-type-literal
    type PieCenterContext = {
        outerBounds: object;
        innerBounds: object;
        label: string;
        componentElement: Element;
    };
    // tslint:disable-next-line interface-over-type-literal
    type PieCenterLabelContext = {
        subId: string;
    };
    // tslint:disable-next-line interface-over-type-literal
    type ReferenceObject = {
        axis: 'xAxis' | 'yAxis' | 'y2Axis';
        index: number;
        subId: string;
    };
    // tslint:disable-next-line interface-over-type-literal
    type SeriesContext = {
        itemIndex: number;
        subId: string;
    };
    // tslint:disable-next-line interface-over-type-literal
    type TooltipContext = {
        parentElement: Element;
        id: any;
        series: string;
        group: string | string[];
        label: string;
        value: number;
        x: number | string;
        y: number;
        z: number;
        low: number;
        high: number;
        open: number;
        close: number;
        volume: number;
        targetValue: number;
        data: object | null;
        itemData: object | null;
        seriesData: object | null;
        groupData: object | null;
        componentElement: Element;
        color: string;
    };
}
export interface ojChartEventMap<K, D> extends dvtBaseComponentEventMap<ojChartSettableProperties<K, D>> {
    'ojDrill': ojChart.ojDrill;
    'ojSelectInput': ojChart.ojSelectInput;
    'ojViewportChange': ojChart.ojViewportChange;
    'ojViewportChangeInput': ojChart.ojViewportChangeInput;
    'animationOnDataChangeChanged': JetElementCustomEvent<ojChart<K, D>["animationOnDataChange"]>;
    'animationOnDisplayChanged': JetElementCustomEvent<ojChart<K, D>["animationOnDisplay"]>;
    'asChanged': JetElementCustomEvent<ojChart<K, D>["as"]>;
    'coordinateSystemChanged': JetElementCustomEvent<ojChart<K, D>["coordinateSystem"]>;
    'dataChanged': JetElementCustomEvent<ojChart<K, D>["data"]>;
    'dataCursorChanged': JetElementCustomEvent<ojChart<K, D>["dataCursor"]>;
    'dataCursorBehaviorChanged': JetElementCustomEvent<ojChart<K, D>["dataCursorBehavior"]>;
    'dataCursorPositionChanged': JetElementCustomEvent<ojChart<K, D>["dataCursorPosition"]>;
    'dataLabelChanged': JetElementCustomEvent<ojChart<K, D>["dataLabel"]>;
    'dndChanged': JetElementCustomEvent<ojChart<K, D>["dnd"]>;
    'dragModeChanged': JetElementCustomEvent<ojChart<K, D>["dragMode"]>;
    'drillingChanged': JetElementCustomEvent<ojChart<K, D>["drilling"]>;
    'groupComparatorChanged': JetElementCustomEvent<ojChart<K, D>["groupComparator"]>;
    'hiddenCategoriesChanged': JetElementCustomEvent<ojChart<K, D>["hiddenCategories"]>;
    'hideAndShowBehaviorChanged': JetElementCustomEvent<ojChart<K, D>["hideAndShowBehavior"]>;
    'highlightMatchChanged': JetElementCustomEvent<ojChart<K, D>["highlightMatch"]>;
    'highlightedCategoriesChanged': JetElementCustomEvent<ojChart<K, D>["highlightedCategories"]>;
    'hoverBehaviorChanged': JetElementCustomEvent<ojChart<K, D>["hoverBehavior"]>;
    'initialZoomingChanged': JetElementCustomEvent<ojChart<K, D>["initialZooming"]>;
    'legendChanged': JetElementCustomEvent<ojChart<K, D>["legend"]>;
    'orientationChanged': JetElementCustomEvent<ojChart<K, D>["orientation"]>;
    'otherThresholdChanged': JetElementCustomEvent<ojChart<K, D>["otherThreshold"]>;
    'overviewChanged': JetElementCustomEvent<ojChart<K, D>["overview"]>;
    'pieCenterChanged': JetElementCustomEvent<ojChart<K, D>["pieCenter"]>;
    'plotAreaChanged': JetElementCustomEvent<ojChart<K, D>["plotArea"]>;
    'polarGridShapeChanged': JetElementCustomEvent<ojChart<K, D>["polarGridShape"]>;
    'selectionChanged': JetElementCustomEvent<ojChart<K, D>["selection"]>;
    'selectionModeChanged': JetElementCustomEvent<ojChart<K, D>["selectionMode"]>;
    'seriesComparatorChanged': JetElementCustomEvent<ojChart<K, D>["seriesComparator"]>;
    'sortingChanged': JetElementCustomEvent<ojChart<K, D>["sorting"]>;
    'splitDualYChanged': JetElementCustomEvent<ojChart<K, D>["splitDualY"]>;
    'splitterPositionChanged': JetElementCustomEvent<ojChart<K, D>["splitterPosition"]>;
    'stackChanged': JetElementCustomEvent<ojChart<K, D>["stack"]>;
    'stackLabelChanged': JetElementCustomEvent<ojChart<K, D>["stackLabel"]>;
    'styleDefaultsChanged': JetElementCustomEvent<ojChart<K, D>["styleDefaults"]>;
    'timeAxisTypeChanged': JetElementCustomEvent<ojChart<K, D>["timeAxisType"]>;
    'tooltipChanged': JetElementCustomEvent<ojChart<K, D>["tooltip"]>;
    'touchResponseChanged': JetElementCustomEvent<ojChart<K, D>["touchResponse"]>;
    'typeChanged': JetElementCustomEvent<ojChart<K, D>["type"]>;
    'valueFormatsChanged': JetElementCustomEvent<ojChart<K, D>["valueFormats"]>;
    'xAxisChanged': JetElementCustomEvent<ojChart<K, D>["xAxis"]>;
    'y2AxisChanged': JetElementCustomEvent<ojChart<K, D>["y2Axis"]>;
    'yAxisChanged': JetElementCustomEvent<ojChart<K, D>["yAxis"]>;
    'zoomAndScrollChanged': JetElementCustomEvent<ojChart<K, D>["zoomAndScroll"]>;
    'zoomDirectionChanged': JetElementCustomEvent<ojChart<K, D>["zoomDirection"]>;
}
export interface ojChartSettableProperties<K, D> extends dvtBaseComponentSettableProperties {
    animationOnDataChange: 'auto' | 'slideToLeft' | 'slideToRight' | 'none';
    animationOnDisplay: 'auto' | 'alphaFade' | 'zoom' | 'none';
    as: string;
    coordinateSystem: 'polar' | 'cartesian';
    data: DataProvider<K, D> | null;
    dataCursor: 'off' | 'on' | 'auto';
    dataCursorBehavior: 'smooth' | 'snap' | 'auto';
    dataCursorPosition: {
        x: number | string;
        y: number;
        y2: number;
    };
    dataLabel: ((context: ojChart.DataLabelContext) => ({
        insert: Element | string;
    } | {
        preventDefault: boolean;
    }));
    dnd: {
        drag: {
            groups: {
                dataTypes: string | string[];
                drag: ((param0: Event) => void);
                dragEnd: ((param0: Event) => void);
                dragStart: ((param0: Event, param1: object) => void);
            };
            items: {
                dataTypes: string | string[];
                drag: ((param0: Event) => void);
                dragEnd: ((param0: Event) => void);
                dragStart: ((param0: Event, param1: object) => void);
            };
            series: {
                dataTypes: string | string[];
                drag: ((param0: Event) => void);
                dragEnd: ((param0: Event) => void);
                dragStart: ((param0: Event, param1: object) => void);
            };
        };
        drop: {
            legend: {
                dataTypes: string | string[];
                dragEnter: ((param0: Event, param1: object) => void);
                dragLeave: ((param0: Event, param1: object) => void);
                dragOver: ((param0: Event, param1: object) => void);
                drop: ((param0: Event, param1: object) => void);
            };
            plotArea: {
                dataTypes: string | string[];
                dragEnter: ((param0: Event, param1: object) => void);
                dragLeave: ((param0: Event, param1: object) => void);
                dragOver: ((param0: Event, param1: object) => void);
                drop: ((param0: Event, param1: object) => void);
            };
            xAxis: {
                dataTypes: string | string[];
                dragEnter: ((param0: Event, param1: object) => void);
                dragLeave: ((param0: Event, param1: object) => void);
                dragOver: ((param0: Event, param1: object) => void);
                drop: ((param0: Event, param1: object) => void);
            };
            y2Axis: {
                dataTypes: string | string[];
                dragEnter: ((param0: Event, param1: object) => void);
                dragLeave: ((param0: Event, param1: object) => void);
                dragOver: ((param0: Event, param1: object) => void);
                drop: ((param0: Event, param1: object) => void);
            };
            yAxis: {
                dataTypes: string | string[];
                dragEnter: ((param0: Event, param1: object) => void);
                dragLeave: ((param0: Event, param1: object) => void);
                dragOver: ((param0: Event, param1: object) => void);
                drop: ((param0: Event, param1: object) => void);
            };
        };
    };
    dragMode: 'pan' | 'zoom' | 'select' | 'off' | 'user';
    drilling: 'on' | 'seriesOnly' | 'groupsOnly' | 'off';
    groupComparator: ((param0: object, param1: object) => number) | null;
    hiddenCategories: string[];
    hideAndShowBehavior: 'withRescale' | 'withoutRescale' | 'none';
    highlightMatch: 'any' | 'all';
    highlightedCategories: string[];
    hoverBehavior: 'dim' | 'none';
    initialZooming: 'first' | 'last' | 'none';
    legend: {
        backgroundColor: string;
        borderColor: string;
        maxSize: string;
        position: 'start' | 'end' | 'bottom' | 'top' | 'auto';
        referenceObjectSection: {
            title: string;
            titleHalign: 'center' | 'end' | 'start';
            titleStyle: object;
        };
        rendered: 'on' | 'off' | 'auto';
        scrolling: 'off' | 'asNeeded';
        sections: Array<{
            items: Array<{
                borderColor: string;
                categories: string[];
                categoryVisibility: 'hidden' | 'visible';
                color: string;
                id: string;
                lineStyle: 'dotted' | 'dashed' | 'solid';
                lineWidth: number;
                markerColor: string;
                markerShape?: 'circle' | 'diamond' | 'human' | 'plus' | 'rectangle' | 'square' | 'star' | 'triangleDown' | 'triangleUp' | string;
                pattern: 'smallChecker' | 'smallCrosshatch' | 'smallDiagonalLeft' | 'smallDiagonalRight' | 'smallDiamond' | 'smallTriangle' | 'largeChecker' | 'largeCrosshatch' | 'largeDiagonalLeft' |
                   'largeDiagonalRight' | 'largeDiamond' | 'largeTriangle' | 'none';
                shortDesc: string;
                source: string;
                symbolType: 'line' | 'lineWithMarker' | 'image' | 'marker';
                text: string;
            }>;
            sections: object[];
            title: string;
            titleHalign: 'center' | 'end' | 'start';
            titleStyle: object;
        }>;
        seriesSection: {
            title: string;
            titleHalign: 'center' | 'end' | 'start';
            titleStyle: object;
        };
        size: string;
        symbolHeight: number;
        symbolWidth: number;
        textStyle: object;
        title: string;
        titleHalign: 'center' | 'end' | 'start';
        titleStyle: object;
    };
    orientation: 'horizontal' | 'vertical';
    otherThreshold: number;
    overview: {
        content: object;
        height: string;
        rendered: 'on' | 'off';
    };
    pieCenter: {
        converter: object;
        label: string;
        labelStyle: object;
        renderer: ((context: ojChart.PieCenterContext) => ({
            insert: Element | string;
        } | {
            preventDefault: boolean;
        }));
        scaling: 'none' | 'thousand' | 'million' | 'billion' | 'trillion' | 'quadrillion' | 'auto';
    };
    plotArea: {
        backgroundColor: string;
        borderColor: string;
        borderWidth: number;
        rendered: 'off' | 'on';
    };
    polarGridShape: 'polygon' | 'circle';
    selection: K[];
    selectionMode: 'single' | 'multiple' | 'none';
    seriesComparator: ((param0: object, param1: object) => number) | null;
    sorting: 'ascending' | 'descending' | 'off';
    splitDualY: 'on' | 'off' | 'auto';
    splitterPosition: number;
    stack: 'on' | 'off';
    stackLabel: 'on' | 'off';
    styleDefaults: {
        animationDownColor: string;
        animationDuration: number;
        animationIndicators: 'none' | 'all';
        animationUpColor: string;
        barGapRatio: number;
        borderColor: string;
        borderWidth: number;
        boxPlot: {
            medianSvgClassName: string;
            medianSvgStyle: object;
            whiskerEndLength: string;
            whiskerEndSvgClassName: string;
            whiskerEndSvgStyle: object;
            whiskerSvgClassName: string;
            whiskerSvgStyle: object;
        };
        colors: string[];
        dataCursor: {
            lineColor: string;
            lineStyle: 'dotted' | 'dashed' | 'solid';
            lineWidth: number;
            markerColor: string;
            markerDisplayed: 'off' | 'on';
            markerSize: number;
        };
        dataItemGaps: string;
        dataLabelPosition: 'center' | 'outsideSlice' | 'aboveMarker' | 'belowMarker' | 'beforeMarker' | 'afterMarker' | 'insideBarEdge' | 'outsideBarEdge' | 'none' | 'auto';
        dataLabelStyle: object | object[];
        funnelBackgroundColor: string;
        groupSeparators: {
            color: string;
            rendered: 'off' | 'auto';
        };
        hoverBehaviorDelay: number;
        lineStyle: 'dotted' | 'dashed' | 'solid';
        lineType: 'straight' | 'curved' | 'stepped' | 'centeredStepped' | 'segmented' | 'centeredSegmented' | 'none' | 'auto';
        lineWidth: number;
        markerColor: string;
        markerDisplayed: 'on' | 'off' | 'auto';
        markerShape?: 'auto' | 'circle' | 'diamond' | 'human' | 'plus' | 'square' | 'star' | 'triangleDown' | 'triangleUp' | string;
        markerSize: number;
        marqueeBorderColor: string;
        marqueeColor: string;
        maxBarWidth: number;
        otherColor: string;
        patterns: string[];
        pieFeelerColor: string;
        pieInnerRadius: number;
        selectionEffect: 'explode' | 'highlightAndExplode' | 'highlight';
        seriesEffect: 'color' | 'pattern' | 'gradient';
        shapes: string[];
        stackLabelStyle: object;
        stockFallingColor: string;
        stockRangeColor: string;
        stockRisingColor: string;
        stockVolumeColor: string;
        threeDEffect: 'on' | 'off';
        tooltipLabelStyle: object;
        tooltipValueStyle: object;
    };
    timeAxisType: 'enabled' | 'mixedFrequency' | 'skipGaps' | 'disabled' | 'auto';
    tooltip: {
        renderer: ((context: ojChart.TooltipContext) => ({
            insert: Element | string;
        } | {
            preventDefault: boolean;
        }));
    };
    touchResponse: 'touchStart' | 'auto';
    type: 'line' | 'area' | 'lineWithArea' | 'stock' | 'boxPlot' | 'combo' | 'pie' | 'scatter' | 'bubble' | 'funnel' | 'pyramid' | 'bar';
    valueFormats: {
        close: {
            converter: object;
            scaling: 'none' | 'thousand' | 'million' | 'billion' | 'trillion' | 'quadrillion' | 'auto';
            tooltipDisplay: 'off' | 'auto';
            tooltipLabel: string;
        };
        group: {
            tooltipDisplay: 'off' | 'auto';
            tooltipLabel: string | string[];
        };
        high: {
            converter: object;
            scaling: 'none' | 'thousand' | 'million' | 'billion' | 'trillion' | 'quadrillion' | 'auto';
            tooltipDisplay: 'off' | 'auto';
            tooltipLabel: string;
        };
        label: {
            converter: object;
            scaling: 'none' | 'thousand' | 'million' | 'billion' | 'trillion' | 'quadrillion' | 'auto';
        };
        low: {
            converter: object;
            scaling: 'none' | 'thousand' | 'million' | 'billion' | 'trillion' | 'quadrillion' | 'auto';
            tooltipDisplay: 'off' | 'auto';
            tooltipLabel: string;
        };
        open: {
            converter: object;
            scaling: 'none' | 'thousand' | 'million' | 'billion' | 'trillion' | 'quadrillion' | 'auto';
            tooltipDisplay: 'off' | 'auto';
            tooltipLabel: string;
        };
        q1: {
            converter: object;
            scaling: 'none' | 'thousand' | 'million' | 'billion' | 'trillion' | 'quadrillion' | 'auto';
            tooltipDisplay: 'off' | 'auto';
            tooltipLabel: string;
        };
        q2: {
            converter: object;
            scaling: 'none' | 'thousand' | 'million' | 'billion' | 'trillion' | 'quadrillion' | 'auto';
            tooltipDisplay: 'off' | 'auto';
            tooltipLabel: string;
        };
        q3: {
            converter: object;
            scaling: 'none' | 'thousand' | 'million' | 'billion' | 'trillion' | 'quadrillion' | 'auto';
            tooltipDisplay: 'off' | 'auto';
            tooltipLabel: string;
        };
        series: {
            tooltipDisplay: 'off' | 'auto';
            tooltipLabel: string;
        };
        targetValue: {
            converter: object;
            scaling: 'none' | 'thousand' | 'million' | 'billion' | 'trillion' | 'quadrillion' | 'auto';
            tooltipDisplay: 'off' | 'auto';
            tooltipLabel: string;
        };
        value: {
            converter: object;
            scaling: 'none' | 'thousand' | 'million' | 'billion' | 'trillion' | 'quadrillion' | 'auto';
            tooltipDisplay: 'off' | 'auto';
            tooltipLabel: string;
        };
        volume: {
            converter: object;
            scaling: 'none' | 'thousand' | 'million' | 'billion' | 'trillion' | 'quadrillion' | 'auto';
            tooltipDisplay: 'off' | 'auto';
            tooltipLabel: string;
        };
        x: {
            converter: object;
            scaling: 'none' | 'thousand' | 'million' | 'billion' | 'trillion' | 'quadrillion' | 'auto';
            tooltipDisplay: 'off' | 'auto';
            tooltipLabel: string;
        };
        y: {
            converter: object;
            scaling: 'none' | 'thousand' | 'million' | 'billion' | 'trillion' | 'quadrillion' | 'auto';
            tooltipDisplay: 'off' | 'auto';
            tooltipLabel: string;
        };
        y2: {
            converter: object;
            scaling: 'none' | 'thousand' | 'million' | 'billion' | 'trillion' | 'quadrillion' | 'auto';
            tooltipDisplay: 'off' | 'auto';
            tooltipLabel: string;
        };
        z: {
            converter: object;
            scaling: 'none' | 'thousand' | 'million' | 'billion' | 'trillion' | 'quadrillion' | 'auto';
            tooltipDisplay: 'off' | 'auto';
            tooltipLabel: string;
        };
    };
    xAxis: {
        axisLine: {
            lineColor: string;
            lineWidth: number;
            rendered: 'off' | 'on';
        };
        baselineScaling: 'min' | 'zero';
        dataMax: number;
        dataMin: number;
        majorTick: {
            baselineColor: 'inherit' | 'auto';
            baselineStyle: 'dotted' | 'dashed' | 'solid';
            baselineWidth: number;
            lineColor: string;
            lineStyle: 'dotted' | 'dashed' | 'solid';
            lineWidth: number;
            rendered: 'on' | 'off' | 'auto';
        };
        max: number | string;
        maxSize: string;
        min: number | string;
        minStep: number;
        minorStep: number;
        minorTick: {
            lineColor: string;
            lineStyle: 'dotted' | 'dashed' | 'solid';
            lineWidth: number;
            rendered: 'on' | 'off' | 'auto';
        };
        referenceObjects: Array<{
            categories: string[];
            color: string;
            displayInLegend: 'on' | 'off';
            high: number;
            id: string;
            lineStyle: 'dotted' | 'dashed' | 'solid';
            lineType: 'curved' | 'stepped' | 'centeredStepped' | 'segmented' | 'centeredSegmented' | 'straight';
            lineWidth: number;
            location: 'front' | 'back';
            low: number;
            shortDesc: string;
            svgClassName: string;
            svgStyle: object;
            text: string;
            type: 'area' | 'line';
            value: number;
        }>;
        rendered: 'off' | 'on';
        scale: 'log' | 'linear';
        size: string;
        step: number;
        tickLabel: {
            converter: object;
            rendered: 'off' | 'on';
            rotation: 'none' | 'auto';
            scaling: 'none' | 'thousand' | 'million' | 'billion' | 'trillion' | 'quadrillion' | 'auto';
            style: object;
        };
        title: string;
        titleStyle: object;
        viewportEndGroup: number | string;
        viewportMax: number | string;
        viewportMin: number | string;
        viewportStartGroup: number | string;
    };
    y2Axis: {
        alignTickMarks: 'off' | 'on';
        axisLine: {
            lineColor: string;
            lineWidth: number;
            rendered: 'on' | 'off' | 'auto';
        };
        baselineScaling: 'min' | 'zero';
        dataMax: number;
        dataMin: number;
        majorTick: {
            baselineColor: 'inherit' | 'auto';
            baselineStyle: 'dotted' | 'dashed' | 'solid';
            baselineWidth: number;
            lineColor: string;
            lineStyle: 'dotted' | 'dashed' | 'solid';
            lineWidth: number;
            rendered: 'on' | 'off' | 'auto';
        };
        max: number;
        maxSize: string;
        min: number;
        minStep: number;
        minorStep: number;
        minorTick: {
            lineColor: string;
            lineStyle: 'dotted' | 'dashed' | 'solid';
            lineWidth: number;
            rendered: 'on' | 'off' | 'auto';
        };
        position: 'start' | 'end' | 'top' | 'bottom' | 'auto';
        referenceObjects: Array<{
            categories: string[];
            color: string;
            displayInLegend: 'on' | 'off';
            high: number;
            id: string;
            items: Array<{
                high: number;
                low: number;
                value: number;
                x: number | string;
            }>;
            lineStyle: 'dotted' | 'dashed' | 'solid';
            lineType: 'curved' | 'stepped' | 'centeredStepped' | 'segmented' | 'centeredSegmented' | 'straight';
            lineWidth: number;
            location: 'front' | 'back';
            low: number;
            shortDesc: string;
            svgClassName: string;
            svgStyle: object;
            text: string;
            type: 'area' | 'line';
            value: number;
        }>;
        rendered: 'off' | 'on';
        scale: 'log' | 'linear';
        size: string;
        step: number;
        tickLabel: {
            converter: object;
            position: 'inside' | 'outside';
            rendered: 'off' | 'on';
            scaling: 'none' | 'thousand' | 'million' | 'billion' | 'trillion' | 'quadrillion' | 'auto';
            style: object;
        };
        title: string;
        titleStyle: object;
    };
    yAxis: {
        axisLine: {
            lineColor: string;
            lineWidth: number;
            rendered: 'on' | 'off' | 'auto';
        };
        baselineScaling: 'min' | 'zero';
        dataMax: number;
        dataMin: number;
        majorTick: {
            baselineColor: 'inherit' | 'auto';
            baselineStyle: 'dotted' | 'dashed' | 'solid';
            baselineWidth: number;
            lineColor: string;
            lineStyle: 'dotted' | 'dashed' | 'solid';
            lineWidth: number;
            rendered: 'on' | 'off' | 'auto';
        };
        max: number;
        maxSize: string;
        min: number;
        minStep: number;
        minorStep: number;
        minorTick: {
            lineColor: string;
            lineStyle: 'dotted' | 'dashed' | 'solid';
            lineWidth: number;
            rendered: 'on' | 'off' | 'auto';
        };
        position: 'start' | 'end' | 'top' | 'bottom' | 'auto';
        referenceObjects: Array<{
            categories: string[];
            color: string;
            displayInLegend: 'on' | 'off';
            high: number;
            id: string;
            items: Array<{
                high: number;
                low: number;
                value: number;
                x: number | string;
            }>;
            lineStyle: 'dotted' | 'dashed' | 'solid';
            lineType: 'curved' | 'stepped' | 'centeredStepped' | 'segmented' | 'centeredSegmented' | 'straight';
            lineWidth: number;
            location: 'front' | 'back';
            low: number;
            shortDesc: string;
            svgClassName: string;
            svgStyle: object;
            text: string;
            type: 'area' | 'line';
            value: number;
        }>;
        rendered: 'off' | 'on';
        scale: 'log' | 'linear';
        size: string;
        step: number;
        tickLabel: {
            converter: object;
            position: 'inside' | 'outside';
            rendered: 'off' | 'on';
            scaling: 'none' | 'thousand' | 'million' | 'billion' | 'trillion' | 'quadrillion' | 'auto';
            style: object;
        };
        title: string;
        titleStyle: object;
        viewportMax: number;
        viewportMin: number;
    };
    zoomAndScroll: 'delayedScrollOnly' | 'liveScrollOnly' | 'delayed' | 'live' | 'off';
    zoomDirection: 'x' | 'y' | 'auto';
    translations: {
        componentName?: string;
        labelAndValue?: string;
        labelClearSelection?: string;
        labelClose?: string;
        labelCountWithTotal?: string;
        labelDataVisualization?: string;
        labelDate?: string;
        labelDefaultGroupName?: string;
        labelGroup?: string;
        labelHigh?: string;
        labelInvalidData?: string;
        labelLow?: string;
        labelNoData?: string;
        labelOpen?: string;
        labelOther?: string;
        labelPercentage?: string;
        labelQ1?: string;
        labelQ2?: string;
        labelQ3?: string;
        labelSeries?: string;
        labelTargetValue?: string;
        labelValue?: string;
        labelVolume?: string;
        labelX?: string;
        labelY?: string;
        labelZ?: string;
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
        tooltipPan?: string;
        tooltipSelect?: string;
        tooltipZoom?: string;
    };
}
export interface ojChartSettablePropertiesLenient<K, D> extends Partial<ojChartSettableProperties<K, D>> {
    [key: string]: any;
}
export interface ojChartGroup extends JetElement<ojChartGroupSettableProperties> {
    drilling?: 'on' | 'off' | 'inherit';
    labelStyle?: object;
    name?: string;
    shortDesc?: string;
    onDrillingChanged: ((event: JetElementCustomEvent<ojChartGroup["drilling"]>) => any) | null;
    onLabelStyleChanged: ((event: JetElementCustomEvent<ojChartGroup["labelStyle"]>) => any) | null;
    onNameChanged: ((event: JetElementCustomEvent<ojChartGroup["name"]>) => any) | null;
    onShortDescChanged: ((event: JetElementCustomEvent<ojChartGroup["shortDesc"]>) => any) | null;
    addEventListener<T extends keyof ojChartGroupEventMap>(type: T, listener: (this: HTMLElement, ev: ojChartGroupEventMap[T]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    getProperty<T extends keyof ojChartGroupSettableProperties>(property: T): ojChartGroup[T];
    getProperty(property: string): any;
    setProperty<T extends keyof ojChartGroupSettableProperties>(property: T, value: ojChartGroupSettableProperties[T]): void;
    setProperty<T extends string>(property: T, value: JetSetPropertyType<T, ojChartGroupSettableProperties>): void;
    setProperties(properties: ojChartGroupSettablePropertiesLenient): void;
}
export interface ojChartGroupEventMap extends HTMLElementEventMap {
    'drillingChanged': JetElementCustomEvent<ojChartGroup["drilling"]>;
    'labelStyleChanged': JetElementCustomEvent<ojChartGroup["labelStyle"]>;
    'nameChanged': JetElementCustomEvent<ojChartGroup["name"]>;
    'shortDescChanged': JetElementCustomEvent<ojChartGroup["shortDesc"]>;
}
export interface ojChartGroupSettableProperties extends JetSettableProperties {
    drilling?: 'on' | 'off' | 'inherit';
    labelStyle?: object;
    name?: string;
    shortDesc?: string;
}
export interface ojChartGroupSettablePropertiesLenient extends Partial<ojChartGroupSettableProperties> {
    [key: string]: any;
}
export interface ojChartItem extends JetElement<ojChartItemSettableProperties> {
    borderColor?: string;
    borderWidth?: number;
    boxPlot?: {
        medianSvgClassName?: string;
        medianSvgStyle?: object;
        q2Color?: string;
        q2SvgClassName?: string;
        q2SvgStyle?: object;
        q3SvgClassName?: string;
        q3SvgStyle?: object;
        whiskerEndLength?: string;
        whiskerEndSvgClassName?: string;
        whiskerEndSvgStyle?: object;
        whiskerSvgClassName?: string;
        whiskerSvgStyle?: object;
    };
    categories?: string[];
    close?: number;
    color?: string;
    drilling?: 'on' | 'off' | 'inherit';
    groupId: Array<(string | number)>;
    high?: number;
    items?: object[] | number[];
    label?: string | string[];
    labelPosition?: 'center' | 'outsideSlice' | 'aboveMarker' | 'belowMarker' | 'beforeMarker' | 'afterMarker' | 'insideBarEdge' | 'outsideBarEdge' | 'none' | 'auto';
    labelStyle?: object | object[];
    low?: number;
    markerDisplayed?: 'on' | 'off' | 'auto';
    markerShape?: 'circle' | 'diamond' | 'human' | 'plus' | 'square' | 'star' | 'triangleDown' | 'triangleUp' | 'auto' | string;
    markerSize?: number;
    open?: number;
    pattern?: 'smallChecker' | 'smallCrosshatch' | 'smallDiagonalLeft' | 'smallDiagonalRight' | 'smallDiamond' | 'smallTriangle' | 'largeChecker' | 'largeCrosshatch' | 'largeDiagonalLeft' |
       'largeDiagonalRight' | 'largeDiamond' | 'largeTriangle' | 'auto';
    q1?: number;
    q2?: number;
    q3?: number;
    seriesId: string | number;
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
    x?: number | string;
    y?: number;
    z?: number;
    onBorderColorChanged: ((event: JetElementCustomEvent<ojChartItem["borderColor"]>) => any) | null;
    onBorderWidthChanged: ((event: JetElementCustomEvent<ojChartItem["borderWidth"]>) => any) | null;
    onBoxPlotChanged: ((event: JetElementCustomEvent<ojChartItem["boxPlot"]>) => any) | null;
    onCategoriesChanged: ((event: JetElementCustomEvent<ojChartItem["categories"]>) => any) | null;
    onCloseChanged: ((event: JetElementCustomEvent<ojChartItem["close"]>) => any) | null;
    onColorChanged: ((event: JetElementCustomEvent<ojChartItem["color"]>) => any) | null;
    onDrillingChanged: ((event: JetElementCustomEvent<ojChartItem["drilling"]>) => any) | null;
    onGroupIdChanged: ((event: JetElementCustomEvent<ojChartItem["groupId"]>) => any) | null;
    onHighChanged: ((event: JetElementCustomEvent<ojChartItem["high"]>) => any) | null;
    onItemsChanged: ((event: JetElementCustomEvent<ojChartItem["items"]>) => any) | null;
    onLabelChanged: ((event: JetElementCustomEvent<ojChartItem["label"]>) => any) | null;
    onLabelPositionChanged: ((event: JetElementCustomEvent<ojChartItem["labelPosition"]>) => any) | null;
    onLabelStyleChanged: ((event: JetElementCustomEvent<ojChartItem["labelStyle"]>) => any) | null;
    onLowChanged: ((event: JetElementCustomEvent<ojChartItem["low"]>) => any) | null;
    onMarkerDisplayedChanged: ((event: JetElementCustomEvent<ojChartItem["markerDisplayed"]>) => any) | null;
    onMarkerShapeChanged: ((event: JetElementCustomEvent<ojChartItem["markerShape"]>) => any) | null;
    onMarkerSizeChanged: ((event: JetElementCustomEvent<ojChartItem["markerSize"]>) => any) | null;
    onOpenChanged: ((event: JetElementCustomEvent<ojChartItem["open"]>) => any) | null;
    onPatternChanged: ((event: JetElementCustomEvent<ojChartItem["pattern"]>) => any) | null;
    onQ1Changed: ((event: JetElementCustomEvent<ojChartItem["q1"]>) => any) | null;
    onQ2Changed: ((event: JetElementCustomEvent<ojChartItem["q2"]>) => any) | null;
    onQ3Changed: ((event: JetElementCustomEvent<ojChartItem["q3"]>) => any) | null;
    onSeriesIdChanged: ((event: JetElementCustomEvent<ojChartItem["seriesId"]>) => any) | null;
    onShortDescChanged: ((event: JetElementCustomEvent<ojChartItem["shortDesc"]>) => any) | null;
    onSourceChanged: ((event: JetElementCustomEvent<ojChartItem["source"]>) => any) | null;
    onSourceHoverChanged: ((event: JetElementCustomEvent<ojChartItem["sourceHover"]>) => any) | null;
    onSourceHoverSelectedChanged: ((event: JetElementCustomEvent<ojChartItem["sourceHoverSelected"]>) => any) | null;
    onSourceSelectedChanged: ((event: JetElementCustomEvent<ojChartItem["sourceSelected"]>) => any) | null;
    onSvgClassNameChanged: ((event: JetElementCustomEvent<ojChartItem["svgClassName"]>) => any) | null;
    onSvgStyleChanged: ((event: JetElementCustomEvent<ojChartItem["svgStyle"]>) => any) | null;
    onTargetValueChanged: ((event: JetElementCustomEvent<ojChartItem["targetValue"]>) => any) | null;
    onValueChanged: ((event: JetElementCustomEvent<ojChartItem["value"]>) => any) | null;
    onVolumeChanged: ((event: JetElementCustomEvent<ojChartItem["volume"]>) => any) | null;
    onXChanged: ((event: JetElementCustomEvent<ojChartItem["x"]>) => any) | null;
    onYChanged: ((event: JetElementCustomEvent<ojChartItem["y"]>) => any) | null;
    onZChanged: ((event: JetElementCustomEvent<ojChartItem["z"]>) => any) | null;
    addEventListener<T extends keyof ojChartItemEventMap>(type: T, listener: (this: HTMLElement, ev: ojChartItemEventMap[T]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    getProperty<T extends keyof ojChartItemSettableProperties>(property: T): ojChartItem[T];
    getProperty(property: string): any;
    setProperty<T extends keyof ojChartItemSettableProperties>(property: T, value: ojChartItemSettableProperties[T]): void;
    setProperty<T extends string>(property: T, value: JetSetPropertyType<T, ojChartItemSettableProperties>): void;
    setProperties(properties: ojChartItemSettablePropertiesLenient): void;
}
export interface ojChartItemEventMap extends HTMLElementEventMap {
    'borderColorChanged': JetElementCustomEvent<ojChartItem["borderColor"]>;
    'borderWidthChanged': JetElementCustomEvent<ojChartItem["borderWidth"]>;
    'boxPlotChanged': JetElementCustomEvent<ojChartItem["boxPlot"]>;
    'categoriesChanged': JetElementCustomEvent<ojChartItem["categories"]>;
    'closeChanged': JetElementCustomEvent<ojChartItem["close"]>;
    'colorChanged': JetElementCustomEvent<ojChartItem["color"]>;
    'drillingChanged': JetElementCustomEvent<ojChartItem["drilling"]>;
    'groupIdChanged': JetElementCustomEvent<ojChartItem["groupId"]>;
    'highChanged': JetElementCustomEvent<ojChartItem["high"]>;
    'itemsChanged': JetElementCustomEvent<ojChartItem["items"]>;
    'labelChanged': JetElementCustomEvent<ojChartItem["label"]>;
    'labelPositionChanged': JetElementCustomEvent<ojChartItem["labelPosition"]>;
    'labelStyleChanged': JetElementCustomEvent<ojChartItem["labelStyle"]>;
    'lowChanged': JetElementCustomEvent<ojChartItem["low"]>;
    'markerDisplayedChanged': JetElementCustomEvent<ojChartItem["markerDisplayed"]>;
    'markerShapeChanged': JetElementCustomEvent<ojChartItem["markerShape"]>;
    'markerSizeChanged': JetElementCustomEvent<ojChartItem["markerSize"]>;
    'openChanged': JetElementCustomEvent<ojChartItem["open"]>;
    'patternChanged': JetElementCustomEvent<ojChartItem["pattern"]>;
    'q1Changed': JetElementCustomEvent<ojChartItem["q1"]>;
    'q2Changed': JetElementCustomEvent<ojChartItem["q2"]>;
    'q3Changed': JetElementCustomEvent<ojChartItem["q3"]>;
    'seriesIdChanged': JetElementCustomEvent<ojChartItem["seriesId"]>;
    'shortDescChanged': JetElementCustomEvent<ojChartItem["shortDesc"]>;
    'sourceChanged': JetElementCustomEvent<ojChartItem["source"]>;
    'sourceHoverChanged': JetElementCustomEvent<ojChartItem["sourceHover"]>;
    'sourceHoverSelectedChanged': JetElementCustomEvent<ojChartItem["sourceHoverSelected"]>;
    'sourceSelectedChanged': JetElementCustomEvent<ojChartItem["sourceSelected"]>;
    'svgClassNameChanged': JetElementCustomEvent<ojChartItem["svgClassName"]>;
    'svgStyleChanged': JetElementCustomEvent<ojChartItem["svgStyle"]>;
    'targetValueChanged': JetElementCustomEvent<ojChartItem["targetValue"]>;
    'valueChanged': JetElementCustomEvent<ojChartItem["value"]>;
    'volumeChanged': JetElementCustomEvent<ojChartItem["volume"]>;
    'xChanged': JetElementCustomEvent<ojChartItem["x"]>;
    'yChanged': JetElementCustomEvent<ojChartItem["y"]>;
    'zChanged': JetElementCustomEvent<ojChartItem["z"]>;
}
export interface ojChartItemSettableProperties extends JetSettableProperties {
    borderColor?: string;
    borderWidth?: number;
    boxPlot?: {
        medianSvgClassName?: string;
        medianSvgStyle?: object;
        q2Color?: string;
        q2SvgClassName?: string;
        q2SvgStyle?: object;
        q3SvgClassName?: string;
        q3SvgStyle?: object;
        whiskerEndLength?: string;
        whiskerEndSvgClassName?: string;
        whiskerEndSvgStyle?: object;
        whiskerSvgClassName?: string;
        whiskerSvgStyle?: object;
    };
    categories?: string[];
    close?: number;
    color?: string;
    drilling?: 'on' | 'off' | 'inherit';
    groupId: Array<(string | number)>;
    high?: number;
    items?: object[] | number[];
    label?: string | string[];
    labelPosition?: 'center' | 'outsideSlice' | 'aboveMarker' | 'belowMarker' | 'beforeMarker' | 'afterMarker' | 'insideBarEdge' | 'outsideBarEdge' | 'none' | 'auto';
    labelStyle?: object | object[];
    low?: number;
    markerDisplayed?: 'on' | 'off' | 'auto';
    markerShape?: 'circle' | 'diamond' | 'human' | 'plus' | 'square' | 'star' | 'triangleDown' | 'triangleUp' | 'auto' | string;
    markerSize?: number;
    open?: number;
    pattern?: 'smallChecker' | 'smallCrosshatch' | 'smallDiagonalLeft' | 'smallDiagonalRight' | 'smallDiamond' | 'smallTriangle' | 'largeChecker' | 'largeCrosshatch' | 'largeDiagonalLeft' |
       'largeDiagonalRight' | 'largeDiamond' | 'largeTriangle' | 'auto';
    q1?: number;
    q2?: number;
    q3?: number;
    seriesId: string | number;
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
    x?: number | string;
    y?: number;
    z?: number;
}
export interface ojChartItemSettablePropertiesLenient extends Partial<ojChartItemSettableProperties> {
    [key: string]: any;
}
export interface ojChartSeries extends JetElement<ojChartSeriesSettableProperties> {
    areaColor?: string;
    areaSvgClassName?: string;
    areaSvgStyle?: object;
    assignedToY2?: 'on' | 'off';
    borderColor?: string;
    borderWidth?: number;
    boxPlot?: {
        medianSvgClassName?: string;
        medianSvgStyle?: object;
        q2Color?: string;
        q2SvgClassName?: string;
        q2SvgStyle?: object;
        q3Color?: string;
        q3SvgClassName?: string;
        q3SvgStyle?: object;
        whiskerEndLength?: string;
        whiskerEndSvgClassName?: string;
        whiskerEndSvgStyle?: object;
        whiskerSvgClassName?: string;
        whiskerSvgStyle?: object;
    };
    categories?: string[];
    color?: string;
    displayInLegend?: 'on' | 'off' | 'auto';
    drilling?: 'on' | 'off' | 'inherit';
    lineStyle?: 'dotted' | 'dashed' | 'solid';
    lineType?: 'straight' | 'curved' | 'stepped' | 'centeredStepped' | 'segmented' | 'centeredSegmented' | 'none' | 'auto';
    lineWidth?: number;
    markerColor?: string;
    markerDisplayed?: 'on' | 'off' | 'auto';
    markerShape?: 'circle' | 'diamond' | 'human' | 'plus' | 'square' | 'star' | 'triangleDown' | 'triangleUp' | 'auto' | string;
    markerSize?: number;
    markerSvgClassName?: string;
    markerSvgStyle?: object;
    name?: string;
    pattern?: 'smallChecker' | 'smallCrosshatch' | 'smallDiagonalLeft' | 'smallDiagonalRight' | 'smallDiamond' | 'smallTriangle' | 'largeChecker' | 'largeCrosshatch' | 'largeDiagonalLeft' |
       'largeDiagonalRight' | 'largeDiamond' | 'largeTriangle' | 'auto';
    pieSliceExplode?: number;
    shortDesc?: string;
    source?: string;
    sourceHover?: string;
    sourceHoverSelected?: string;
    sourceSelected?: string;
    stackCategory?: string;
    svgClassName?: string;
    svgStyle?: object;
    type?: 'bar' | 'line' | 'area' | 'lineWithArea' | 'candlestick' | 'boxPlot' | 'auto';
    onAreaColorChanged: ((event: JetElementCustomEvent<ojChartSeries["areaColor"]>) => any) | null;
    onAreaSvgClassNameChanged: ((event: JetElementCustomEvent<ojChartSeries["areaSvgClassName"]>) => any) | null;
    onAreaSvgStyleChanged: ((event: JetElementCustomEvent<ojChartSeries["areaSvgStyle"]>) => any) | null;
    onAssignedToY2Changed: ((event: JetElementCustomEvent<ojChartSeries["assignedToY2"]>) => any) | null;
    onBorderColorChanged: ((event: JetElementCustomEvent<ojChartSeries["borderColor"]>) => any) | null;
    onBorderWidthChanged: ((event: JetElementCustomEvent<ojChartSeries["borderWidth"]>) => any) | null;
    onBoxPlotChanged: ((event: JetElementCustomEvent<ojChartSeries["boxPlot"]>) => any) | null;
    onCategoriesChanged: ((event: JetElementCustomEvent<ojChartSeries["categories"]>) => any) | null;
    onColorChanged: ((event: JetElementCustomEvent<ojChartSeries["color"]>) => any) | null;
    onDisplayInLegendChanged: ((event: JetElementCustomEvent<ojChartSeries["displayInLegend"]>) => any) | null;
    onDrillingChanged: ((event: JetElementCustomEvent<ojChartSeries["drilling"]>) => any) | null;
    onLineStyleChanged: ((event: JetElementCustomEvent<ojChartSeries["lineStyle"]>) => any) | null;
    onLineTypeChanged: ((event: JetElementCustomEvent<ojChartSeries["lineType"]>) => any) | null;
    onLineWidthChanged: ((event: JetElementCustomEvent<ojChartSeries["lineWidth"]>) => any) | null;
    onMarkerColorChanged: ((event: JetElementCustomEvent<ojChartSeries["markerColor"]>) => any) | null;
    onMarkerDisplayedChanged: ((event: JetElementCustomEvent<ojChartSeries["markerDisplayed"]>) => any) | null;
    onMarkerShapeChanged: ((event: JetElementCustomEvent<ojChartSeries["markerShape"]>) => any) | null;
    onMarkerSizeChanged: ((event: JetElementCustomEvent<ojChartSeries["markerSize"]>) => any) | null;
    onMarkerSvgClassNameChanged: ((event: JetElementCustomEvent<ojChartSeries["markerSvgClassName"]>) => any) | null;
    onMarkerSvgStyleChanged: ((event: JetElementCustomEvent<ojChartSeries["markerSvgStyle"]>) => any) | null;
    onNameChanged: ((event: JetElementCustomEvent<ojChartSeries["name"]>) => any) | null;
    onPatternChanged: ((event: JetElementCustomEvent<ojChartSeries["pattern"]>) => any) | null;
    onPieSliceExplodeChanged: ((event: JetElementCustomEvent<ojChartSeries["pieSliceExplode"]>) => any) | null;
    onShortDescChanged: ((event: JetElementCustomEvent<ojChartSeries["shortDesc"]>) => any) | null;
    onSourceChanged: ((event: JetElementCustomEvent<ojChartSeries["source"]>) => any) | null;
    onSourceHoverChanged: ((event: JetElementCustomEvent<ojChartSeries["sourceHover"]>) => any) | null;
    onSourceHoverSelectedChanged: ((event: JetElementCustomEvent<ojChartSeries["sourceHoverSelected"]>) => any) | null;
    onSourceSelectedChanged: ((event: JetElementCustomEvent<ojChartSeries["sourceSelected"]>) => any) | null;
    onStackCategoryChanged: ((event: JetElementCustomEvent<ojChartSeries["stackCategory"]>) => any) | null;
    onSvgClassNameChanged: ((event: JetElementCustomEvent<ojChartSeries["svgClassName"]>) => any) | null;
    onSvgStyleChanged: ((event: JetElementCustomEvent<ojChartSeries["svgStyle"]>) => any) | null;
    onTypeChanged: ((event: JetElementCustomEvent<ojChartSeries["type"]>) => any) | null;
    addEventListener<T extends keyof ojChartSeriesEventMap>(type: T, listener: (this: HTMLElement, ev: ojChartSeriesEventMap[T]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    getProperty<T extends keyof ojChartSeriesSettableProperties>(property: T): ojChartSeries[T];
    getProperty(property: string): any;
    setProperty<T extends keyof ojChartSeriesSettableProperties>(property: T, value: ojChartSeriesSettableProperties[T]): void;
    setProperty<T extends string>(property: T, value: JetSetPropertyType<T, ojChartSeriesSettableProperties>): void;
    setProperties(properties: ojChartSeriesSettablePropertiesLenient): void;
}
export interface ojChartSeriesEventMap extends HTMLElementEventMap {
    'areaColorChanged': JetElementCustomEvent<ojChartSeries["areaColor"]>;
    'areaSvgClassNameChanged': JetElementCustomEvent<ojChartSeries["areaSvgClassName"]>;
    'areaSvgStyleChanged': JetElementCustomEvent<ojChartSeries["areaSvgStyle"]>;
    'assignedToY2Changed': JetElementCustomEvent<ojChartSeries["assignedToY2"]>;
    'borderColorChanged': JetElementCustomEvent<ojChartSeries["borderColor"]>;
    'borderWidthChanged': JetElementCustomEvent<ojChartSeries["borderWidth"]>;
    'boxPlotChanged': JetElementCustomEvent<ojChartSeries["boxPlot"]>;
    'categoriesChanged': JetElementCustomEvent<ojChartSeries["categories"]>;
    'colorChanged': JetElementCustomEvent<ojChartSeries["color"]>;
    'displayInLegendChanged': JetElementCustomEvent<ojChartSeries["displayInLegend"]>;
    'drillingChanged': JetElementCustomEvent<ojChartSeries["drilling"]>;
    'lineStyleChanged': JetElementCustomEvent<ojChartSeries["lineStyle"]>;
    'lineTypeChanged': JetElementCustomEvent<ojChartSeries["lineType"]>;
    'lineWidthChanged': JetElementCustomEvent<ojChartSeries["lineWidth"]>;
    'markerColorChanged': JetElementCustomEvent<ojChartSeries["markerColor"]>;
    'markerDisplayedChanged': JetElementCustomEvent<ojChartSeries["markerDisplayed"]>;
    'markerShapeChanged': JetElementCustomEvent<ojChartSeries["markerShape"]>;
    'markerSizeChanged': JetElementCustomEvent<ojChartSeries["markerSize"]>;
    'markerSvgClassNameChanged': JetElementCustomEvent<ojChartSeries["markerSvgClassName"]>;
    'markerSvgStyleChanged': JetElementCustomEvent<ojChartSeries["markerSvgStyle"]>;
    'nameChanged': JetElementCustomEvent<ojChartSeries["name"]>;
    'patternChanged': JetElementCustomEvent<ojChartSeries["pattern"]>;
    'pieSliceExplodeChanged': JetElementCustomEvent<ojChartSeries["pieSliceExplode"]>;
    'shortDescChanged': JetElementCustomEvent<ojChartSeries["shortDesc"]>;
    'sourceChanged': JetElementCustomEvent<ojChartSeries["source"]>;
    'sourceHoverChanged': JetElementCustomEvent<ojChartSeries["sourceHover"]>;
    'sourceHoverSelectedChanged': JetElementCustomEvent<ojChartSeries["sourceHoverSelected"]>;
    'sourceSelectedChanged': JetElementCustomEvent<ojChartSeries["sourceSelected"]>;
    'stackCategoryChanged': JetElementCustomEvent<ojChartSeries["stackCategory"]>;
    'svgClassNameChanged': JetElementCustomEvent<ojChartSeries["svgClassName"]>;
    'svgStyleChanged': JetElementCustomEvent<ojChartSeries["svgStyle"]>;
    'typeChanged': JetElementCustomEvent<ojChartSeries["type"]>;
}
export interface ojChartSeriesSettableProperties extends JetSettableProperties {
    areaColor?: string;
    areaSvgClassName?: string;
    areaSvgStyle?: object;
    assignedToY2?: 'on' | 'off';
    borderColor?: string;
    borderWidth?: number;
    boxPlot?: {
        medianSvgClassName?: string;
        medianSvgStyle?: object;
        q2Color?: string;
        q2SvgClassName?: string;
        q2SvgStyle?: object;
        q3Color?: string;
        q3SvgClassName?: string;
        q3SvgStyle?: object;
        whiskerEndLength?: string;
        whiskerEndSvgClassName?: string;
        whiskerEndSvgStyle?: object;
        whiskerSvgClassName?: string;
        whiskerSvgStyle?: object;
    };
    categories?: string[];
    color?: string;
    displayInLegend?: 'on' | 'off' | 'auto';
    drilling?: 'on' | 'off' | 'inherit';
    lineStyle?: 'dotted' | 'dashed' | 'solid';
    lineType?: 'straight' | 'curved' | 'stepped' | 'centeredStepped' | 'segmented' | 'centeredSegmented' | 'none' | 'auto';
    lineWidth?: number;
    markerColor?: string;
    markerDisplayed?: 'on' | 'off' | 'auto';
    markerShape?: 'circle' | 'diamond' | 'human' | 'plus' | 'square' | 'star' | 'triangleDown' | 'triangleUp' | 'auto' | string;
    markerSize?: number;
    markerSvgClassName?: string;
    markerSvgStyle?: object;
    name?: string;
    pattern?: 'smallChecker' | 'smallCrosshatch' | 'smallDiagonalLeft' | 'smallDiagonalRight' | 'smallDiamond' | 'smallTriangle' | 'largeChecker' | 'largeCrosshatch' | 'largeDiagonalLeft' |
       'largeDiagonalRight' | 'largeDiamond' | 'largeTriangle' | 'auto';
    pieSliceExplode?: number;
    shortDesc?: string;
    source?: string;
    sourceHover?: string;
    sourceHoverSelected?: string;
    sourceSelected?: string;
    stackCategory?: string;
    svgClassName?: string;
    svgStyle?: object;
    type?: 'bar' | 'line' | 'area' | 'lineWithArea' | 'candlestick' | 'boxPlot' | 'auto';
}
export interface ojChartSeriesSettablePropertiesLenient extends Partial<ojChartSeriesSettableProperties> {
    [key: string]: any;
}
export interface ojSparkChart<K, D> extends dvtBaseComponent<ojSparkChartSettableProperties<K, D>> {
    animationDuration: number | null;
    animationOnDataChange: 'auto' | 'none';
    animationOnDisplay: 'auto' | 'none';
    areaColor: string;
    areaSvgClassName: string;
    areaSvgStyle: object;
    as: string;
    barGapRatio: number;
    baselineScaling: 'zero' | 'min';
    color: string;
    data: DataProvider<K, D> | null;
    firstColor: string;
    highColor: string;
    lastColor: string;
    lineStyle: 'dotted' | 'dashed' | 'solid';
    lineType: 'curved' | 'stepped' | 'centeredStepped' | 'segmented' | 'centeredSegmented' | 'none' | 'straight';
    lineWidth: number;
    lowColor: string;
    markerShape: 'auto' | 'circle' | 'diamond' | 'human' | 'plus' | 'square' | 'star' | 'triangleDown' | 'triangleUp' | string;
    markerSize: number;
    referenceObjects: ojSparkChart.ReferenceObject[];
    svgClassName: string;
    svgStyle: object;
    tooltip: {
        renderer: ((context: ojSparkChart.TooltipContext) => ({
            insert: Element | string;
        } | {
            preventDefault: boolean;
        })) | null;
    };
    type: 'area' | 'lineWithArea' | 'bar' | 'line';
    visualEffects: 'none' | 'auto';
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
    onAnimationDurationChanged: ((event: JetElementCustomEvent<ojSparkChart<K, D>["animationDuration"]>) => any) | null;
    onAnimationOnDataChangeChanged: ((event: JetElementCustomEvent<ojSparkChart<K, D>["animationOnDataChange"]>) => any) | null;
    onAnimationOnDisplayChanged: ((event: JetElementCustomEvent<ojSparkChart<K, D>["animationOnDisplay"]>) => any) | null;
    onAreaColorChanged: ((event: JetElementCustomEvent<ojSparkChart<K, D>["areaColor"]>) => any) | null;
    onAreaSvgClassNameChanged: ((event: JetElementCustomEvent<ojSparkChart<K, D>["areaSvgClassName"]>) => any) | null;
    onAreaSvgStyleChanged: ((event: JetElementCustomEvent<ojSparkChart<K, D>["areaSvgStyle"]>) => any) | null;
    onAsChanged: ((event: JetElementCustomEvent<ojSparkChart<K, D>["as"]>) => any) | null;
    onBarGapRatioChanged: ((event: JetElementCustomEvent<ojSparkChart<K, D>["barGapRatio"]>) => any) | null;
    onBaselineScalingChanged: ((event: JetElementCustomEvent<ojSparkChart<K, D>["baselineScaling"]>) => any) | null;
    onColorChanged: ((event: JetElementCustomEvent<ojSparkChart<K, D>["color"]>) => any) | null;
    onDataChanged: ((event: JetElementCustomEvent<ojSparkChart<K, D>["data"]>) => any) | null;
    onFirstColorChanged: ((event: JetElementCustomEvent<ojSparkChart<K, D>["firstColor"]>) => any) | null;
    onHighColorChanged: ((event: JetElementCustomEvent<ojSparkChart<K, D>["highColor"]>) => any) | null;
    onLastColorChanged: ((event: JetElementCustomEvent<ojSparkChart<K, D>["lastColor"]>) => any) | null;
    onLineStyleChanged: ((event: JetElementCustomEvent<ojSparkChart<K, D>["lineStyle"]>) => any) | null;
    onLineTypeChanged: ((event: JetElementCustomEvent<ojSparkChart<K, D>["lineType"]>) => any) | null;
    onLineWidthChanged: ((event: JetElementCustomEvent<ojSparkChart<K, D>["lineWidth"]>) => any) | null;
    onLowColorChanged: ((event: JetElementCustomEvent<ojSparkChart<K, D>["lowColor"]>) => any) | null;
    onMarkerShapeChanged: ((event: JetElementCustomEvent<ojSparkChart<K, D>["markerShape"]>) => any) | null;
    onMarkerSizeChanged: ((event: JetElementCustomEvent<ojSparkChart<K, D>["markerSize"]>) => any) | null;
    onReferenceObjectsChanged: ((event: JetElementCustomEvent<ojSparkChart<K, D>["referenceObjects"]>) => any) | null;
    onSvgClassNameChanged: ((event: JetElementCustomEvent<ojSparkChart<K, D>["svgClassName"]>) => any) | null;
    onSvgStyleChanged: ((event: JetElementCustomEvent<ojSparkChart<K, D>["svgStyle"]>) => any) | null;
    onTooltipChanged: ((event: JetElementCustomEvent<ojSparkChart<K, D>["tooltip"]>) => any) | null;
    onTypeChanged: ((event: JetElementCustomEvent<ojSparkChart<K, D>["type"]>) => any) | null;
    onVisualEffectsChanged: ((event: JetElementCustomEvent<ojSparkChart<K, D>["visualEffects"]>) => any) | null;
    addEventListener<T extends keyof ojSparkChartEventMap<K, D>>(type: T, listener: (this: HTMLElement, ev: ojSparkChartEventMap<K, D>[T]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    getProperty<T extends keyof ojSparkChartSettableProperties<K, D>>(property: T): ojSparkChart<K, D>[T];
    getProperty(property: string): any;
    setProperty<T extends keyof ojSparkChartSettableProperties<K, D>>(property: T, value: ojSparkChartSettableProperties<K, D>[T]): void;
    setProperty<T extends string>(property: T, value: JetSetPropertyType<T, ojSparkChartSettableProperties<K, D>>): void;
    setProperties(properties: ojSparkChartSettablePropertiesLenient<K, D>): void;
    getDataItem(itemIndex: number): ojSparkChart.ItemContext | null;
}
export interface ojSparkChartEventMap<K, D> extends dvtBaseComponentEventMap<ojSparkChartSettableProperties<K, D>> {
    'animationDurationChanged': JetElementCustomEvent<ojSparkChart<K, D>["animationDuration"]>;
    'animationOnDataChangeChanged': JetElementCustomEvent<ojSparkChart<K, D>["animationOnDataChange"]>;
    'animationOnDisplayChanged': JetElementCustomEvent<ojSparkChart<K, D>["animationOnDisplay"]>;
    'areaColorChanged': JetElementCustomEvent<ojSparkChart<K, D>["areaColor"]>;
    'areaSvgClassNameChanged': JetElementCustomEvent<ojSparkChart<K, D>["areaSvgClassName"]>;
    'areaSvgStyleChanged': JetElementCustomEvent<ojSparkChart<K, D>["areaSvgStyle"]>;
    'asChanged': JetElementCustomEvent<ojSparkChart<K, D>["as"]>;
    'barGapRatioChanged': JetElementCustomEvent<ojSparkChart<K, D>["barGapRatio"]>;
    'baselineScalingChanged': JetElementCustomEvent<ojSparkChart<K, D>["baselineScaling"]>;
    'colorChanged': JetElementCustomEvent<ojSparkChart<K, D>["color"]>;
    'dataChanged': JetElementCustomEvent<ojSparkChart<K, D>["data"]>;
    'firstColorChanged': JetElementCustomEvent<ojSparkChart<K, D>["firstColor"]>;
    'highColorChanged': JetElementCustomEvent<ojSparkChart<K, D>["highColor"]>;
    'lastColorChanged': JetElementCustomEvent<ojSparkChart<K, D>["lastColor"]>;
    'lineStyleChanged': JetElementCustomEvent<ojSparkChart<K, D>["lineStyle"]>;
    'lineTypeChanged': JetElementCustomEvent<ojSparkChart<K, D>["lineType"]>;
    'lineWidthChanged': JetElementCustomEvent<ojSparkChart<K, D>["lineWidth"]>;
    'lowColorChanged': JetElementCustomEvent<ojSparkChart<K, D>["lowColor"]>;
    'markerShapeChanged': JetElementCustomEvent<ojSparkChart<K, D>["markerShape"]>;
    'markerSizeChanged': JetElementCustomEvent<ojSparkChart<K, D>["markerSize"]>;
    'referenceObjectsChanged': JetElementCustomEvent<ojSparkChart<K, D>["referenceObjects"]>;
    'svgClassNameChanged': JetElementCustomEvent<ojSparkChart<K, D>["svgClassName"]>;
    'svgStyleChanged': JetElementCustomEvent<ojSparkChart<K, D>["svgStyle"]>;
    'tooltipChanged': JetElementCustomEvent<ojSparkChart<K, D>["tooltip"]>;
    'typeChanged': JetElementCustomEvent<ojSparkChart<K, D>["type"]>;
    'visualEffectsChanged': JetElementCustomEvent<ojSparkChart<K, D>["visualEffects"]>;
}
export interface ojSparkChartSettableProperties<K, D> extends dvtBaseComponentSettableProperties {
    animationDuration: number | null;
    animationOnDataChange: 'auto' | 'none';
    animationOnDisplay: 'auto' | 'none';
    areaColor: string;
    areaSvgClassName: string;
    areaSvgStyle: object;
    as: string;
    barGapRatio: number;
    baselineScaling: 'zero' | 'min';
    color: string;
    data: DataProvider<K, D> | null;
    firstColor: string;
    highColor: string;
    lastColor: string;
    lineStyle: 'dotted' | 'dashed' | 'solid';
    lineType: 'curved' | 'stepped' | 'centeredStepped' | 'segmented' | 'centeredSegmented' | 'none' | 'straight';
    lineWidth: number;
    lowColor: string;
    markerShape: 'auto' | 'circle' | 'diamond' | 'human' | 'plus' | 'square' | 'star' | 'triangleDown' | 'triangleUp' | string;
    markerSize: number;
    referenceObjects: ojSparkChart.ReferenceObject[];
    svgClassName: string;
    svgStyle: object;
    tooltip: {
        renderer: ((context: ojSparkChart.TooltipContext) => ({
            insert: Element | string;
        } | {
            preventDefault: boolean;
        })) | null;
    };
    type: 'area' | 'lineWithArea' | 'bar' | 'line';
    visualEffects: 'none' | 'auto';
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
export interface ojSparkChartSettablePropertiesLenient<K, D> extends Partial<ojSparkChartSettableProperties<K, D>> {
    [key: string]: any;
}
export namespace ojSparkChart {
    // tslint:disable-next-line interface-over-type-literal
    type Item = {
        borderColor: string;
        color: string;
        date: Date;
        high: number;
        low: number;
        markerDisplayed: 'on' | 'off';
        markerShape: 'square' | 'circle' | 'diamond' | 'plus' | 'triangleDown' | 'triangleUp' | 'human' | 'star' | 'auto' | string;
        markerSize: number;
        svgClassName: string;
        svgStyle: object;
        value: number;
    };
    // tslint:disable-next-line interface-over-type-literal
    type ItemContext = {
        borderColor: string;
        color: string;
        date: Date;
        high: number;
        low: number;
        value: number;
    };
    // tslint:disable-next-line interface-over-type-literal
    type ReferenceObject = {
        color?: string;
        high?: number;
        lineWidth?: number;
        lineStyle: 'dotted' | 'dashed' | 'solid';
        location: 'front' | 'back';
        low?: number;
        svgClassName?: string;
        svgStyle?: object;
        type: 'area' | 'line';
        value?: number;
    };
    // tslint:disable-next-line interface-over-type-literal
    type TooltipContext = {
        color: string;
        componentElement: Element;
        parentElement: Element;
    };
}
export interface ojSparkChartItem extends JetElement<ojSparkChartItemSettableProperties> {
    borderColor: string;
    color: string;
    date: string;
    high: number | null;
    low: number | null;
    markerDisplayed: 'off' | 'on';
    markerShape?: 'auto' | 'circle' | 'diamond' | 'human' | 'plus' | 'square' | 'star' | 'triangleDown' | 'triangleUp' | string;
    markerSize: number;
    svgClassName: string;
    svgStyle: object;
    value: number | null;
    onBorderColorChanged: ((event: JetElementCustomEvent<ojSparkChartItem["borderColor"]>) => any) | null;
    onColorChanged: ((event: JetElementCustomEvent<ojSparkChartItem["color"]>) => any) | null;
    onDateChanged: ((event: JetElementCustomEvent<ojSparkChartItem["date"]>) => any) | null;
    onHighChanged: ((event: JetElementCustomEvent<ojSparkChartItem["high"]>) => any) | null;
    onLowChanged: ((event: JetElementCustomEvent<ojSparkChartItem["low"]>) => any) | null;
    onMarkerDisplayedChanged: ((event: JetElementCustomEvent<ojSparkChartItem["markerDisplayed"]>) => any) | null;
    onMarkerShapeChanged: ((event: JetElementCustomEvent<ojSparkChartItem["markerShape"]>) => any) | null;
    onMarkerSizeChanged: ((event: JetElementCustomEvent<ojSparkChartItem["markerSize"]>) => any) | null;
    onSvgClassNameChanged: ((event: JetElementCustomEvent<ojSparkChartItem["svgClassName"]>) => any) | null;
    onSvgStyleChanged: ((event: JetElementCustomEvent<ojSparkChartItem["svgStyle"]>) => any) | null;
    onValueChanged: ((event: JetElementCustomEvent<ojSparkChartItem["value"]>) => any) | null;
    addEventListener<T extends keyof ojSparkChartItemEventMap>(type: T, listener: (this: HTMLElement, ev: ojSparkChartItemEventMap[T]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    getProperty<T extends keyof ojSparkChartItemSettableProperties>(property: T): ojSparkChartItem[T];
    getProperty(property: string): any;
    setProperty<T extends keyof ojSparkChartItemSettableProperties>(property: T, value: ojSparkChartItemSettableProperties[T]): void;
    setProperty<T extends string>(property: T, value: JetSetPropertyType<T, ojSparkChartItemSettableProperties>): void;
    setProperties(properties: ojSparkChartItemSettablePropertiesLenient): void;
}
export interface ojSparkChartItemEventMap extends HTMLElementEventMap {
    'borderColorChanged': JetElementCustomEvent<ojSparkChartItem["borderColor"]>;
    'colorChanged': JetElementCustomEvent<ojSparkChartItem["color"]>;
    'dateChanged': JetElementCustomEvent<ojSparkChartItem["date"]>;
    'highChanged': JetElementCustomEvent<ojSparkChartItem["high"]>;
    'lowChanged': JetElementCustomEvent<ojSparkChartItem["low"]>;
    'markerDisplayedChanged': JetElementCustomEvent<ojSparkChartItem["markerDisplayed"]>;
    'markerShapeChanged': JetElementCustomEvent<ojSparkChartItem["markerShape"]>;
    'markerSizeChanged': JetElementCustomEvent<ojSparkChartItem["markerSize"]>;
    'svgClassNameChanged': JetElementCustomEvent<ojSparkChartItem["svgClassName"]>;
    'svgStyleChanged': JetElementCustomEvent<ojSparkChartItem["svgStyle"]>;
    'valueChanged': JetElementCustomEvent<ojSparkChartItem["value"]>;
}
export interface ojSparkChartItemSettableProperties extends JetSettableProperties {
    borderColor: string;
    color: string;
    date: string;
    high: number | null;
    low: number | null;
    markerDisplayed: 'off' | 'on';
    markerShape?: 'auto' | 'circle' | 'diamond' | 'human' | 'plus' | 'square' | 'star' | 'triangleDown' | 'triangleUp' | string;
    markerSize: number;
    svgClassName: string;
    svgStyle: object;
    value: number | null;
}
export interface ojSparkChartItemSettablePropertiesLenient extends Partial<ojSparkChartItemSettableProperties> {
    [key: string]: any;
}
