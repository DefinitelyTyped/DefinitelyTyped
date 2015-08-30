// Type definitions for Highcharts 4.0.4
// Project: http://www.highcharts.com/
// Definitions by: Damiano Gambarotto <http://github.com/damianog>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../jquery/jquery.d.ts" />

interface HighchartsPosition {
    align?: string;
    verticalAlign?: string;
    x?: number;
    y?: number;
}

interface HighchartsDateTimeFormats {
    millisecond?: string; // '%H:%M:%S.%L'
    second?: string; // '%H:%M:%S'
    minute?: string; // '%H:%M'
    hour?: string; // '%H:%M'
    day?: string; // '%e. %b'
    week?: string; // '%e. %b'
    month?: string; // '%b \'%y'
    year?: string; // '%Y'
}

interface HighchartsAxisEvent extends Event {
    min: number;
    max: number;
}

interface HighchartsAxisLabels {
    align?: string;
    enabled?: boolean;
    formatter?: () => string;
    overflow?: string;
    rotation?: number;
    staggerLines?: number;
    step?: number;
    style?: HighchartsCSSObject;
    useHTML?: boolean;
    x?: number;
    y?: number;
}

interface HighchartsMousePlotEvents {
    click?: (event?: Event) => void;
    mouseover?: (event?: Event) => void;
    mouseout?: (event?: Event) => void;
    mousemove?: (event?: Event) => void;
}

interface HighchartsPlotLabel {
    align?: string;
    rotation?: number;
    style?: HighchartsCSSObject;
    text?: string;
    textAlign?: string; // "top", "middle" or "bottom
    x?: number;
    y?: number;
}

interface HighchartsPlotBands {
    color?: string;
    events?: HighchartsMousePlotEvents;
    from?: number;
    id?: string;
    label?: HighchartsPlotLabel;
    to?: number;
    zIndex?: number;
}

interface HighchartsPlotLines {
    color?: string;
    dashStyle?: string; //Solid ShortDash ShortDot ShortDashDot ShortDashDotDot Dot Dash LongDash DashDot LongDashDot LongDashDotDot
    events?: HighchartsMousePlotEvents;
    id?: string;
    label?: HighchartsPlotLabel;
    value?: number;
    width?: number;
    zIndex?: number;
}

interface HighchartsAxisTitle {
    align?: string;
    margin?: number;
    offset?: number;
    rotation?: number;
    style?: HighchartsCSSObject;
    text?: string;
}

interface HighchartsAxisOptions {
    allowDecimals?: boolean;
    alternateGridColor?: string;
    categories?: string[];
    dateTimeLabelFormats?: HighchartsDateTimeFormats;
    endOnTick?: boolean;
    events?: {
        afterSetExtremes?: (event: HighchartsAxisEvent) => void;
        setExtremes?: (event: HighchartsAxisEvent) => void;
    };
    gridLineColor?: string;
    gridLineDashStyle?: string;
    gridLineWidth?: number;
    id?: string;
    labels?: HighchartsAxisLabels;
    lineColor?: string;
    lineWidth?: number;
    linkedTo?: number;
    max?: number;
    maxPadding?: number;
    maxZoom?: number;
    min?: number;
    minPadding?: number;
    minRange?: number;
    minTickInterval?: number;
    minorTickColor?: string;
    minorTickInterval?: number|string;
    minorTickLength?: number;
    minorTickPosition?: string; // 'inside' 'outside'
    minorTickWidth?: number;
    offset?: number;
    opposite?: boolean;
    plotBands?: HighchartsPlotBands;
    plotLines?: HighchartsPlotLines;
    reversed?: boolean;
    showEmpty?: boolean;
    showFirstLabel?: boolean;
    showLastLabel?: boolean;
    startOfWeek?: number;
    startOnTick?: boolean;
    tickColor?: string;
    tickInterval?: number;
    tickLength?: number;
    tickPixelInterval?: number;
    tickPosition?: string; // "inside" or "outside"
    tickWidth?: number;
    tickmarkPlacement?: string; // "between" or "on"
    title?: HighchartsAxisTitle;
    type?: string; // "linear", "logarithmic" or "datetime"
}

interface HighchartsExtremes {
    dataMax: number;
    dataMin: number;
    max: number;
    min: number;
}

interface HighchartsAnimation {
    duration?: number;
    easing?: string; // "linear" | "swing"
}

interface HighchartsSelectionEvent extends Event {
    xAxis: HighchartsAxisOptions[];
    yAxis: HighchartsAxisOptions[];
}

interface HighchartsChartEvents {
    addSeries?: (event?: Event) => boolean;
    click?: (event?: Event) => void;
    load?: (event?: Event) => void;
    redraw?: (event: Event) => void;
    selection?: (event: HighchartsSelectionEvent) => void;
}

interface HighchartsGradient {
    linearGradient?: {
        x1: number; y1: number; x2: number; y2: number;
    };
    radialGradient?: {
        cx: number; cy: number; r: number;
    };
    stops?: any[][];
    brighten? (amount: number): string | HighchartsGradient;
    get? (type: string): string;
}

interface HighchartsShadow {
    color?: string;
    offsetX?: number;
    offsetY?: number;
    opacity?: number;
    width?: number;
}

interface HighchartsChartResetZoomButton {
    position: HighchartsPosition;
    relativeTo?: string;
    theme?: HighchartsChartResetZoomButtonTheme;
}

interface HighchartsChartResetZoomButtonTheme {
    fill?: string; //css HEX colours.
    stroke?: string;//css HEX colours.
    r?: number; // Radius %
    states?: any; // HTML element states eg: hover, with css attributes in object.
    display?: string; // css attr eg: 'none'
}

interface HighchartsChartOptions {
    alignTicks?: boolean;
    animation?: boolean | HighchartsAnimation;
    backgroundColor?: string | HighchartsGradient;
    borderColor?: string;
    borderRadius?: number;
    borderWidth?: number;
    className?: string;
    defaultSeriesType?: string;
    events?: HighchartsChartEvents;
    height?: number;
    ignoreHiddenSeries?: boolean;
    inverted?: boolean;
    margin?: number[];
    marginBottom?: number;
    marginLeft?: number;
    marginRight?: number;
    marginTop?: number;
    plotBackGroundColor?: string | HighchartsGradient;
    plotBackGroundImage?: string;
    plotBorderColor?: string;
    plotBorderWidth?: number;
    plotShadow?: boolean | HighchartsShadow;
    polar?: boolean;
    reflow?: boolean;
    renderTo?: any;
    resetZoomButton?: HighchartsChartResetZoomButton;
    selectionMarkerFill?: string;
    shadow?: boolean | HighchartsShadow;
    showAxes?: boolean;
    spacingBottom?: number;
    spacingLeft?: number;
    spacingRight?: number;
    spacingTop?: number;
    style?: HighchartsCSSObject;
    type?: string;
    width?: number;
    zoomType?: string;
}

interface HighchartsCSSObject {
    background?: string;
    border?: string;
    color?: string;
    cursor?: string;
    font?: string;
    fontSize?: string;
    fontWeight?: string;
    left?: string;
    opacity?: number;
    padding?: string;
    position?: string;
    top?: string;
}

interface HighchartsCreditsOptions {
    enabled?: boolean;
    href?: string;
    position?: HighchartsPosition;
    style?: HighchartsCSSObject;
    text?: string;
}

interface HighchartsMenuItem {
    text: string;
    onclick: () => void;
}

interface HighchartsButton {
    align?: string;
    backgroundColor?: string | HighchartsGradient;
    borderColor?: string;
    borderRadius?: number;
    borderWidth?: number;
    verticalAlign?: string;
    enabled?: boolean;
    height?: number;
    hoverBorderColor?: string;
    hoverSymbolFill?: string;
    hoverSimbolStroke?: string;
    menuItems?: HighchartsMenuItem[];
    onclick?: () => void;
    symbol?: string;
    simbolFill?: string;
    simbolSize?: number;
    symbolStroke?: string;
    symbolStrokeWidth?: number;
    symbolX?: number;
    symbolY?: number;
    width?: number;
    x?: number;
    y?: number;
}

interface HighchartsExportingOptions {
    buttons?: {
        exportButton?: HighchartsButton;
        printButton?: HighchartsButton;
    };
    enableImages?: boolean;
    enabled?: boolean;
    filename?: string;
    type?: string;
    url?: string;
    width?: number;
}

interface HighchartsGlobalObject {
    Date?: any;
    VMLRadialGradientURL?: string;
    canvasToolsURL?: string;
    timezoneOffset?: number;
    useUTC?: boolean;
}

interface HighchartsLabelItem {
    html: string;
    style: HighchartsCSSObject;
}

interface HighchartsLabelsOptions {
    items?: HighchartsLabelItem[];
    style?: HighchartsCSSObject;
}

interface HighchartsLangObject {
    contextButtonTitle?: string;
    decimalPoint?: string;
    downloadJPEG?: string;
    downloadPDF?: string;
    downloadPNG?: string;
    downloadSVG?: string;
    drillUpText?: string;
    loading?: string;
    months?: string[];
    noData?: string;
    numericSymbols?: string[];
    printChart?: string;
    resetZoom?: string;
    resetZoomTitle?: string;
    shortMonths?: string[];
    thousandsSep?: string;
    weekdays?: string[];
}

interface HighchartsLegendNavigationOptions {
    activeColor?: string;
    animation?: boolean | HighchartsAnimation;
    arrowSize?: number;
    inactiveColor?: string;
    style?: HighchartsCSSObject;
}

interface HighchartsLegendOptions {
    align?: string;
    backgroundColor?: string | HighchartsGradient;
    borderColor?: string;
    borderRadius?: number;
    borderWidth?: number;
    enabled?: boolean;
    floating?: boolean;
    itemHiddenStyle?: HighchartsCSSObject;
    itemHoverStyle?: HighchartsCSSObject;
    itemMarginBottom?: number;
    itemMarginTop?: number;
    itemStyle?: HighchartsCSSObject;
    itemWidth?: number;
    labelFormatter?: () => string;
    layout?: string;
    lineHeight?: string;
    margin?: number;
    maxHeight?: number;
    navigation?: HighchartsLegendNavigationOptions;
    padding?: number;
    reversed?: boolean;
    rtl?: boolean;
    verticalAlign?: string;
    shadow?: boolean | HighchartsShadow;
    style?: HighchartsCSSObject;
    symbolPadding?: number;
    symbolWidth?: number;
    useHTML?: boolean;
    width?: number;
    x?: number;
    y?: number;
}

interface HighchartsLoadingOptions {
    hideDuration?: number;
    labelStyle?: HighchartsCSSObject;
    showDuration?: number;
    style?: HighchartsCSSObject;
}

interface HighchartsNavigationOptions {
    buttonOptions?: HighchartsButton;
    menuItemHoverStyle?: HighchartsCSSObject;
    menuItemStyle?: HighchartsCSSObject;
    menuStyle?: HighchartsCSSObject;
}

// Not sure of this interface
interface HighchartsPaneBackground {
    backgroundColor: string | HighchartsGradient;
    borderColor?: string;
    borderWidth?: number;
    innerRadius?: string;
    outerRadius?: string;
}

interface HighchartsPaneOptions {
    background?: HighchartsPaneBackground[];
    center?: [number|string, number|string]; // [x,y] | ["50%","50%" ]
    endAngle?: number;
    size?: number | string;
    startAngle?: number;
}

interface HighchartsDataLabels {
    align?: string;
    backgroundColor?: string | HighchartsGradient;
    borderColor?: string;
    borderRadius?: number;
    borderWidth?: number;
    color?: string;
    crop?: boolean;
    enabled?: boolean;
    formatter?: () => any;
    overflow?: string;
    padding?: number;
    rotation?: number;
    shadow?: boolean | HighchartsShadow;
    staggerLines?: any; // ?? need to check API
    step?: any; // ?? need to check API
    style?: HighchartsCSSObject;
    useHTML?: boolean;
    verticalAlign?: string;
    x?: number;
    y?: number;
}

interface HighchartsAreaCheckboxEvent extends Event {
    checked: boolean;
}

interface HighchartsAreaClickEvent extends Event {
    point: HighchartsPointObject;
}

interface HighchartsPlotEvents {
    checkboxClick?: (event: HighchartsAreaCheckboxEvent) => boolean;
    click?: (event: HighchartsAreaClickEvent) => void;
    hide?: () => void;
    legendItemClick?: (event: Event) => boolean;
    mouseOut?: (event: Event) => void;
    mouseOver?: (event: Event) => void;
    show?: () => void;
}

interface HighchartsMarkerState {
    enabled?: boolean;
    fillColor?: string;
    lineColor?: string;
    lineWidth?: number;
    radius?: number;
}

interface HighchartsMarker extends HighchartsMarkerState {
    states?: {
        hover?: HighchartsMarkerState;
        select?: HighchartsMarkerState;
    };
    symbol?: string; // null, "circle", "square", "diamond", "triangle" "triangle-down" or "url(graphic.png)"
}

interface HighchartsPointEvents {
    click?: (event: Event) => boolean;
    mouseOut?: (event: Event) => void;
    mouseOver?: (event: Event) => void;
    remove?: (event: Event) => boolean;
    select?: (event: Event) => boolean;
    unselect?: (event: Event) => boolean;
    update?: (event: Event) => boolean;
}

interface HighchartsAreaStates {
    enabled?: boolean;
    lineWidth?: number;
    marker?: HighchartsMarker;
}

interface HighchartsBarStates extends HighchartsAreaStates {
    brightness?: number;
}

interface HighchartsRangeDataLabels {
    align?: string;
    backgroundColor?: string | HighchartsGradient;
    borderColor?: string;
    borderRadius?: number;
    borderWidth?: number;
    color?: string;
    crop?: boolean;
    defer?: boolean;
    enabled?: boolean;
    format?: string;
    formatter?: () => any;
    inside?: boolean;
    overflow?: string;
    padding?: number;
    rotation?: number;
    shadow?: boolean | HighchartsShadow;
    style?: HighchartsCSSObject;
    useHTML?: boolean;
    verticalAlign?: string;
    xHigh?: number;
    xLow?: number;
    yHigh?: number;
    yLow?: number;
    zIndex?: number;
}

interface HighchartsDial {
    backgroundColor?: string;
    baseLength?: string;
    baseWidth?: number;
    borderColor?: string;
    borderWidth?: number;
    radius?: string;
    rearLength?: string;
    topWidth?: number;
}

interface HighchartsPivot {
    backgroundColor?: string;
    borderColor?: string;
    borderWidth?: number;
    radius?: number;
}

interface HighchartsAreaChart {
    allowPointSelect?: boolean;
    animation?: boolean;
    color?: string;
    connectEnds?: boolean;
    connectNulls?: boolean;
    cropThreshold?: number;
    cursor?: string;
    dashStyle?: string; //Solid ShortDash ShortDot ShortDashDot ShortDashDotDot Dot Dash LongDash DashDot LongDashDot LongDashDotDot
    dataLabels?: HighchartsDataLabels;
    enableMouseTracking?: boolean;
    events?: HighchartsPlotEvents;
    fillColor?: string | HighchartsGradient;
    fillOpacity?: number;
    linkedTo?: string;
    lineColor?: string;
    lineWidth?: number;
    marker?: HighchartsMarker;
    negativeColor?: string;
    negativeFillColor?: string;
    point?: {
        events: HighchartsPointEvents;
    };
    pointInterval?: number;
    pointPlacement?: string | number; // null, "on", "between"
    pointStart?: number;
    selected?: boolean;
    shadow?: boolean | HighchartsShadow;
    showCheckbox?: boolean;
    showInLegend?: boolean;
    stacking?: string;
    states?: {
        hover: HighchartsAreaStates;
    };
    step?: string;
    stickyTracking?: boolean;
    threshold?: number;
    tooltip?: HighchartsTooltipOptions;
    trackByArea?: boolean;
    turboThreshold?: number;
    visible?: boolean;
    zIndex?: number;
}

interface HighchartsAreaRangeChart {
    allowPointSelect?: boolean;
    animation?: boolean;
    color?: string;
    connectNulls?: boolean;
    cropThreshold?: number;
    cursor?: string;
    dashStyle?: string; //Solid ShortDash ShortDot ShortDashDot ShortDashDotDot Dot Dash LongDash DashDot LongDashDot LongDashDotDot
    dataLabels?: HighchartsRangeDataLabels;
    enableMouseTracking?: boolean;
    events?: HighchartsPlotEvents;
    fillColor?: string | HighchartsGradient;
    fillOpacity?: number;
    lineColor?: string;
    lineWidth?: number;
    linkedTo?: string;
    negativeColor?: string;
    negativeFillColor?: string;
    point?: {
        events: HighchartsPointEvents;
    };
    pointInterval?: number;
    pointPlacement?: string | number; // null, "on", "between"
    pointStart?: number;
    selected?: boolean;
    shadow?: boolean | HighchartsShadow;
    showCheckbox?: boolean;
    showInLegend?: boolean;
    stacking?: string;
    states?: {
        hover: HighchartsAreaStates;
    };
    step?: string;
    stickyTracking?: boolean;
    tooltip?: HighchartsTooltipOptions;
    threshold?: number;
    trackByArea?: boolean;
    turboThreshold?: number;
    visible?: boolean;
}

interface HighchartsAreaSplineChart extends HighchartsAreaChart {
    connectEnds?: boolean;
}

interface HighchartsAreaSplineRangeChart extends HighchartsAreaRangeChart {
}

interface HighchartsBarChart {
    allowPointSelect?: boolean;
    animation?: boolean;
    borderColor?: string;
    borderRadius?: number;
    borderWidth?: number;
    color?: string;
    colorByPoint?: boolean;
    cropThreshold?: number;
    colors?: string[];
    cursor?: string;
    dataLabels?: HighchartsDataLabels;
    depth?: number;
    edgeColor?: string;
    edgeWidth?: number;
    enableMouseTracking?: boolean;
    events?: HighchartsPlotEvents;
    groupPadding?: number;
    groupZPadding?: number;
    grouping?: boolean;
    linkedTo?: string;
    minPointLength?: number;
    negativeColor?: string;
    point?: {
        events: HighchartsPointEvents;
    };
    pointInterval?: number;
    pointPadding?: number;
    pointPlacement?: string; // null, "on", "between"
    pointRange?: number;
    pointStart?: number;
    pointWidth?: number;
    selected?: boolean;
    shadow?: boolean | HighchartsShadow;
    showCheckbox?: boolean;
    showInLegend?: boolean;
    stacking?: string;
    states?: {
        hover: HighchartsBarStates;
    };
    stickyTracking?: boolean;
    threshold?: number;
    tooltip?: HighchartsTooltipOptions;
    turboThreshold?: number;
    visible?: boolean;
}

interface HighchartsBoxPlotChart {
    allowPointSelect?: boolean;
    color?: string;
    colorByPoint?: boolean;
    colors?: string[];
    cursor?: string;
    depth?: number;
    edgecolor?: string;
    edgewidth?: number;
    enableMouseTracking?: boolean;
    events?: HighchartsPlotEvents;
    fillColor?: string;
    groupPadding?: number;
    groupZPadding?: number;
    grouping?: boolean;
    lineWidth?: number;
    linkedTo?: string;
    medianColor?: string;
    negativeColor?: string;
    point?: {
        events: HighchartsPointEvents;
    };
    pointInterval?: number;
    pointPadding?: number;
    pointPlacement?: string | number;
    pointRange?: number;
    pointStart?: number;
    pointWidth?: number;
    selected?: boolean;
    showCheckbox?: boolean;
    showInLegend?: boolean;
    states?: {
        hover: HighchartsBarStates;
    };
    stemColor?: string;
    stemDashStyle?: string;
    stemWidth?: number;
    stickyTracking?: boolean;
    tooltip?: HighchartsTooltipOptions;
    turboThreshold?: number;
    visible?: boolean;
    whiskerColor?: string;
    whiskerLength?: number | string; // 100 | "50%"
    whiskerWidth?: number;
}

interface HighchartsBubbleChart {
    allowPointSelect?: boolean;
    animation?: boolean;
    color?: string;
    cropThreshold?: number;
    cursor?: string;
    dashStyle?: string; //Solid ShortDash ShortDot ShortDashDot ShortDashDotDot Dot Dash LongDash DashDot LongDashDot LongDashDotDot
    dataLabels?: HighchartsRangeDataLabels;
    displayNegative?: boolean;
    enableMouseTracking?: boolean;
    events?: HighchartsPlotEvents;
    lineWidth?: number;
    linkedTo?: string;
    marker?: HighchartsMarker;
    maxSize?: string;
    minSize?: string;
    negativeColor?: string;
    point?: {
        events: HighchartsPointEvents;
    };
    pointInterval?: number;
    pointStart?: number;
    selected?: boolean;
    shadow?: boolean | HighchartsShadow;
    showCheckbox?: boolean;
    showInLegend?: boolean;
    sizeBy?: string;
    states?: {
        hover: HighchartsBarStates;
    };
    stickyTracking?: boolean;
    tooltip?: HighchartsTooltipOptions;
    turboThreshold?: number;
    visible?: boolean;
    zMax?: number;
    zMin?: number;
    zThreshold?: number;
}

interface HighchartsColumnChart extends HighchartsBarChart {
}

interface HighchartsColumnRangeChart {
    allowPointSelect?: boolean;
    animation?: boolean;
    borderColor?: string;
    borderRadius?: number;
    borderWidth?: number;
    color?: string;
    colorByPoint?: boolean;
    colors?: string[];
    cropThreshold?: number;
    cursor?: string;
    dataLabels?: HighchartsRangeDataLabels;
    enableMouseTracking?: boolean;
    events?: HighchartsPlotEvents;
    groupPadding?: number;
    grouping?: boolean;
    linkedTo?: string;
    minPointLength?: number;
    negativeColor?: string;
    point?: {
        events: HighchartsPointEvents;
    };
    pointInterval?: number;
    pointPadding?: number;
    pointPlacement?: string | number; // null, "on", "between"
    pointRange?: number;
    pointStart?: number;
    pointWidth?: number;
    selected?: boolean;
    shadow?: boolean | HighchartsShadow;
    showCheckbox?: boolean;
    showInLegend?: boolean;
    stacking?: string;
    states?: {
        hover: HighchartsBarStates;
    };
    stickyTracking?: boolean;
    tooltip?: HighchartsTooltipOptions;
    turboThreshold?: number;
    visible?: boolean;
}

interface HighchartsErrorBarChart {
    // TODO
}

interface HighchartsFunnelChart {
    // TODO
}

interface HighchartsGaugeChart {
    animation?: boolean;
    color?: string;
    cursor?: string;
    datalabels?: HighchartsDataLabels;
    dial?: HighchartsDial;
    enableMouseTracking?: boolean;
    events?: HighchartsPlotEvents;
    id?: string;
    pivot?: HighchartsPivot;
    point?: {
        events: HighchartsPointEvents;
    };
    selected?: boolean;
    showCheckbox?: boolean;
    showInLegend?: boolean;
    states?: {
        hover: HighchartsAreaStates;
    };
    stickyTracking?: boolean;
    tooltip?: HighchartsTooltipOptions;
    visible?: boolean;
    zIndex?: number;
}

interface HighchartsHeatMapChart {
    // TODO
}

interface HighchartsLineChart {
    allowPointSelect?: boolean;
    animation?: boolean;
    color?: string;
    connectEnds?: boolean;
    connectNulls?: boolean;
    cropThreshold?: number;
    cursor?: string;
    dashStyle?: string; //Solid ShortDash ShortDot ShortDashDot ShortDashDotDot Dot Dash LongDash DashDot LongDashDot LongDashDotDot
    dataLabels?: HighchartsDataLabels;
    enableMouseTracking?: boolean;
    events?: HighchartsPlotEvents;
    id?: string;
    lineWidth?: number;
    marker?: HighchartsMarker;
    point?: {
        events: HighchartsPointEvents;
    };
    pointInterval?: number;
    pointPlacement?: string; // null, "on", "between"
    pointStart?: number;
    selected?: boolean;
    shadow?: boolean | HighchartsShadow;
    showCheckbox?: boolean;
    showInLegend?: boolean;
    stacking?: string;
    states?: {
        hover: HighchartsAreaStates;
    };
    step?: boolean|string;
    stickyTracking?: boolean;
    tooltip?: HighchartsTooltipOptions;
    turboThreshold?: number;
    visible?: boolean;
    zIndex?: number;
}

interface HighchartsPieChart {
    allowPointSelect?: boolean;
    animation?: boolean;
    borderColor?: string;
    borderWidth?: number;
    center?: string[];
    color?: string;
    cursor?: string;
    dataLabels?: HighchartsDataLabels;
    enableMouseTracking?: boolean;
    events?: HighchartsPlotEvents;
    id?: string;
    ignoreHiddenPoint?: boolean;
    innerSize?: number | string;
    lineWidth?: number;
    marker?: HighchartsMarker;
    point?: {
        events: HighchartsPointEvents;
    };
    pointPlacement?: string; // null, "on", "between"
    selected?: boolean;
    shadow?: boolean | HighchartsShadow;
    showInLegend?: boolean;
    size?: number | string;
    slicedOffset?: number;
    states?: {
        hover: HighchartsAreaStates;
    };
    stickyTracking?: boolean;
    tooltip?: HighchartsTooltipOptions;
    visible?: boolean;
    zIndex?: number;
}

interface HighchartsPolygonChart {
    // TODO
}

interface HighchartsPyramidChart {
    // TODO
}

interface HighchartsScatterChart {
    allowPointSelect?: boolean;
    animation?: boolean;
    color?: string;
    connectNulls?: boolean;
    cropThreshold?: number;
    cursor?: string;
    dashStyle?: string; //Solid ShortDash ShortDot ShortDashDot ShortDashDotDot Dot Dash LongDash DashDot LongDashDot LongDashDotDot
    dataLabels?: HighchartsDataLabels;
    enableMouseTracking?: boolean;
    events?: HighchartsPlotEvents;
    id?: string;
    lineWidth?: number;
    marker?: HighchartsMarker;
    point?: {
        events: HighchartsPointEvents;
    };
    pointInterval?: number;
    pointPlacement?: string; // null, "on", "between"
    pointStart?: number;
    selected?: boolean;
    shadow?: boolean | HighchartsShadow;
    showCheckbox?: boolean;
    showInLegend?: boolean;
    states?: {
        hover: HighchartsAreaStates;
    };
    stickyTracking?: boolean;
    tooltip?: HighchartsTooltipOptions;
    turboThreshold?: number;
    visible?: boolean;
    zIndex?: number;
}

interface HighchartsSolidGaugeChart {
    // TODO
}

interface HighchartsSplineChart extends HighchartsSeriesChart {
}

interface HighchartsTreeMapChart {
    // TODO
}

interface HighchartsWaterFallChart {
    // TODO
}


// General options for all series types
interface HighchartsSeriesChart {
    allowPointSelect?: boolean;
    animation?: boolean;
    color?: string;
    connectEnds?: boolean;
    connectNulls?: boolean;
    cropThreshold?: number;
    cursor?: string;
    dashStyle?: string; //Solid ShortDash ShortDot ShortDashDot ShortDashDotDot Dot Dash LongDash DashDot LongDashDot LongDashDotDot
    dataLabels?: HighchartsDataLabels;
    enableMouseTracking?: boolean;
    events?: HighchartsPlotEvents;
    lineWidth?: number;
    marker?: HighchartsMarker;
    point?: {
        events: HighchartsPointEvents;
    };
    pointInterval?: number;
    pointPlacement?: string; // null, "on", "between"
    pointStart?: number;
    selected?: boolean;
    shadow?: boolean | HighchartsShadow;
    showCheckbox?: boolean;
    showInLegend?: boolean;
    stacking?: string;
    states?: {
        hover: HighchartsAreaStates;
    };
    stickyTracking?: boolean;
    tooltip?: HighchartsTooltipOptions;
    turboThreshold?: number;
    visible?: boolean;
    zIndex?: number;
}

interface HighchartsPlotOptions {
    area?: HighchartsAreaChart;
    arearange?: HighchartsAreaRangeChart;
    areaspline?: HighchartsAreaSplineChart;
    areasplinerange?: HighchartsAreaSplineRangeChart;
    bar?: HighchartsBarChart;
    boxplot?: HighchartsBoxPlotChart;
    bubble?: HighchartsBubbleChart;
    column?: HighchartsColumnChart;
    columnrange?: HighchartsColumnRangeChart;
    errorbar?: HighchartsErrorBarChart;
    funnel?: HighchartsFunnelChart;
    gauge?: HighchartsGaugeChart;
    heatmap?: HighchartsHeatMapChart;
    line?: HighchartsLineChart;
    pie?: HighchartsPieChart;
    polygon?: HighchartsPolygonChart;
    pyramid?: HighchartsPyramidChart;
    scatter?: HighchartsScatterChart;
    series?: HighchartsSeriesChart;
    solidgauge?: HighchartsSolidGaugeChart;
    spline?: HighchartsSplineChart;
    treemap?: HighchartsTreeMapChart;
    waterfall?: HighchartsWaterFallChart;
}

/* You will rarely, if ever, want to use this interface directly. Instead it is much more useful to use one of the derived
 * interfaces (HighchartsAreaChartSeriesOptions, HighchartsLineChartSeriesOptions, etc.)
 */
interface HighchartsIndividualSeriesOptions {
    data?: number[]|[number, number][]| HighchartsDataPoint[]; // [value1,value2, ... ] | [[x1,y1],[x2,y2],... ] | HighchartsDataPoint[]
    id?: string;
    index?: number;
    legendIndex?: number;
    name?: string;
    stack?: any; // type doesn't matter, as long as grouped series' stack options match each other.
    type?: string;
    xAxis?: string | number;
    yAxis?: string | number;
}

interface HighchartsSeriesOptions extends HighchartsIndividualSeriesOptions, HighchartsSeriesChart { }

interface HighchartsAreaChartSeriesOptions extends HighchartsIndividualSeriesOptions, HighchartsAreaChart { }
interface HighchartsAreaRangeChartSeriesOptions extends HighchartsIndividualSeriesOptions, HighchartsAreaRangeChart { }
interface HighchartsAreaSplineChartSeriesOptions extends HighchartsIndividualSeriesOptions, HighchartsAreaSplineChart { }
interface HighchartsAreaSplineRangeChartSeriesOptions extends HighchartsIndividualSeriesOptions, HighchartsAreaSplineRangeChart { }
interface HighchartsBarChartSeriesOptions extends HighchartsIndividualSeriesOptions, HighchartsBarChart { }
interface HighchartsBoxPlotChartSeriesOptions extends HighchartsIndividualSeriesOptions, HighchartsBoxPlotChart { }
interface HighchartsBubbleChartSeriesOptions extends HighchartsIndividualSeriesOptions, HighchartsBubbleChart { }
interface HighchartsColumnChartSeriesOptions extends HighchartsIndividualSeriesOptions, HighchartsColumnChart { }
interface HighchartsColumnRangeChartSeriesOptions extends HighchartsIndividualSeriesOptions, HighchartsColumnRangeChart { }
interface HighchartsErrorBarChartSeriesOptions extends HighchartsIndividualSeriesOptions, HighchartsErrorBarChart { }
interface HighchartsFunnelChartSeriesOptions extends HighchartsIndividualSeriesOptions, HighchartsFunnelChart { }
interface HighchartsGaugeChartSeriesOptions extends HighchartsIndividualSeriesOptions, HighchartsGaugeChart { }
interface HighchartsHeatMapSeriesOptions extends HighchartsIndividualSeriesOptions, HighchartsHeatMapChart { }
interface HighchartsLineChartSeriesOptions extends HighchartsIndividualSeriesOptions, HighchartsLineChart { }
interface HighchartsPieChartSeriesOptions extends HighchartsIndividualSeriesOptions, HighchartsPieChart { }
interface HighchartsPolygonChartSeriesOptions extends HighchartsIndividualSeriesOptions, HighchartsPolygonChart { }
interface HighchartsPyramidChartSeriesOptions extends HighchartsIndividualSeriesOptions, HighchartsPyramidChart { }
interface HighchartsScatterChartSeriesOptions extends HighchartsIndividualSeriesOptions, HighchartsScatterChart { }
interface HighchartsSolidGaugeChartSeriesOptions extends HighchartsIndividualSeriesOptions, HighchartsSolidGaugeChart { }
interface HighchartsSplineChartSeriesOptions extends HighchartsIndividualSeriesOptions, HighchartsSplineChart { }
interface HighchartsTreeMapChartSeriesOptions extends HighchartsIndividualSeriesOptions, HighchartsTreeMapChart { }
interface HighchartsWaterFallChartSeriesOptions extends HighchartsIndividualSeriesOptions, HighchartsWaterFallChart { }

interface HighchartsDataPoint {
    color?: string;
    dataLabels?: HighchartsDataLabels;
    events?: HighchartsPointEvents;
    id?: string;
    legendIndex?: number;
    marker?: HighchartsMarker;
    name?: string;
    sliced?: boolean;
    x?: number;
    y?: number;
}

interface HighchartsSeriesOptions extends HighchartsSeriesChart {
    type?: string;
    data?: number[]| number[][]| HighchartsDataPoint[];
    index?: number;
    legendIndex?: number;
    name?: string;
    stack?: string | number;
    xAxis?: string | number;
    yAxis?: string | number;
}

interface HighchartsSubtitleOptions {
    align?: string;
    verticalAlign?: string;
    floating?: boolean;
    style?: HighchartsCSSObject;
    text?: string;
    useHTML?: boolean;
    x?: number;
    y?: number;
}

interface HighchartsTitleOptions extends HighchartsSubtitleOptions {
    margin?: number;
}

interface HighchartsCrosshairObject {
    color?: string;
    width?: number;
    dashStyle?: string; //Solid ShortDash ShortDot ShortDashDot ShortDashDotDot Dot Dash LongDash DashDot LongDashDot LongDashDotDot
    zIndex?: number;
}

interface HighchartsPlotPoint {
    plotX: number;
    plotY: number;
}

interface HighchartsTooltipOptions {
    animation?: boolean;
    backgroundColor?: string | HighchartsGradient;
    borderColor?: string;
    borderRadius?: number;
    borderWidth?: number;
    crosshairs?: boolean |[boolean, boolean]| HighchartsCrosshairObject |[HighchartsCrosshairObject, HighchartsCrosshairObject];
    enabled?: boolean;
    footerFormat?: string;
    formatter?: () => any;
    pointFormat?: string;
    positioner?: (labelWidth: number, labelHeight: number, point: HighchartsPlotPoint) => { x: number; y: number; };
    shadow?: boolean;
    shared?: boolean;
    snap?: number;
    style?: HighchartsCSSObject;
    useHTML?: boolean;
    valueDecimals?: number;
    valuePrefix?: string;
    valueSuffix?: string;
    xDateFormat?: string;
}

interface HighchartsOptions {
    chart?: HighchartsChartOptions;
    colors?: string[];
    credits?: HighchartsCreditsOptions;
    data?: any; // TODO
    drilldown?: any; // TODO
    exporting?: HighchartsExportingOptions;
    labels?: HighchartsLabelsOptions;
    legend?: HighchartsLegendOptions;
    loading?: HighchartsLoadingOptions;
    navigation?: HighchartsNavigationOptions;
    noData?: any; // TODO
    pane?: HighchartsPaneOptions;
    plotOptions?: HighchartsPlotOptions;
    series?: HighchartsIndividualSeriesOptions[];
    subtitle?: HighchartsSubtitleOptions;
    title?: HighchartsTitleOptions;
    tooltip?: HighchartsTooltipOptions;
    xAxis?: HighchartsAxisOptions;
    yAxis?: HighchartsAxisOptions;
}

interface HighchartsGlobalOptions extends HighchartsOptions {
    global?: HighchartsGlobalObject;
    lang?: HighchartsLangObject;
}

interface HighchartsAxisObject {
    addPlotBand(options: HighchartsPlotBands): void;
    addPlotLine(options: HighchartsPlotLines): void;
    getExtremes(): HighchartsExtremes;
    remove(redraw?: boolean): void;
    removePlotBand(id: string): void;
    removePlotLine(id: string): void;
    setCategories(categories: string[]): void;
    setCategories(categories: string[], redraw: boolean): void;
    setExtremes(min: number, max: number): void;
    setExtremes(min: number, max: number, redraw: boolean): void;
    setExtremes(min: number, max: number, redraw: boolean, animation: boolean | HighchartsAnimation): void;
    setTitle(title: HighchartsAxisTitle, redraw?: boolean): void;
    toPixels(value: number, paneCoordinates?: boolean): number;
    toValue(pixel: number, paneCoordinates?: boolean): number;
    update(options: HighchartsAxisOptions, redraw?: boolean): void;
}

interface HighchartsChartObject {
    addAxis(options: HighchartsAxisOptions, isX?: boolean, redraw?: boolean, animation?: boolean | HighchartsAnimation): HighchartsAxisObject;
    addSeries<T extends HighchartsIndividualSeriesOptions>(options: T, redraw?: boolean, animation?: boolean | HighchartsAnimation): T;
    addSeriesAsDrilldown(point: HighchartsPointObject, seriesOptions: HighchartsSeriesOptions): void;
    container: HTMLElement;
    destroy(): void;
    drillUp(): void;
    exportChart(): void;
    exportChart(options: HighchartsExportingOptions): void;
    exportChart(options: HighchartsExportingOptions, chartOptions: HighchartsChartOptions): void;
    get(id: string): HighchartsAxisObject | HighchartsSeriesObject | HighchartsPointObject;
    getSVG(): string;
    getSVG(additionalOptions: HighchartsChartOptions): string;
    getSelectedPoints(): HighchartsPointObject[];
    getSelectedSeries(): HighchartsSeriesObject[];
    hideLoading(): void;
    options: HighchartsChartOptions;
    print(): void;
    redraw(): void;
    reflow(): void;
    series: HighchartsSeriesObject[];
    setSize(width: number, height: number): void;
    setSize(width: number, height: number, animation: boolean): void;
    setSize(width: number, height: number, animation: HighchartsAnimation): void;
    setTitle(title: HighchartsTitleOptions): void;
    setTitle(title: HighchartsTitleOptions, subtitle: HighchartsSubtitleOptions): void;
    setTitle(title: HighchartsTitleOptions, subtitle: HighchartsSubtitleOptions, redraw: boolean): void;
    showLoading(): void;
    showLoading(str: string): void;
    xAxis: HighchartsAxisObject[];
    yAxis: HighchartsAxisObject[];

    renderer: HighchartsRendererObject;
}

interface HighchartsChart {
    new (options: HighchartsOptions): HighchartsChartObject;
    new (options: HighchartsOptions, callback: (chart: HighchartsChartObject) => void): HighchartsChartObject;
}

interface HighchartsElementObject {
    add(): HighchartsElementObject;
    add(parent: HighchartsElementObject): HighchartsElementObject;
    animate(attributes: any, animation?: any): HighchartsElementObject;
    attr(hash: any): HighchartsElementObject;
    css(hash: HighchartsCSSObject): HighchartsElementObject;
    destroy(): void;
    getBBox(): { x: number; y: number; height: number; width: number; };
    on(eventType: string, handler: () => void): HighchartsElementObject;
    toFront(): HighchartsElementObject;
}

interface HighchartsRendererObject {
    arc(centerX: number, centerY: number, outerRadius: number, innerRadius: number, start: number, end: number): HighchartsElementObject;
    circle(centerX: number, centerY: number, radius: number): HighchartsElementObject;
    g(name: string): HighchartsElementObject;
    image(source: string, x: number, y: number, width: number, height: number): HighchartsElementObject;
    path(path: any[]): HighchartsElementObject;
    rect(x: number, y: number, width: number, height: number, cornerRadius: number): HighchartsElementObject;
    text(str: string, x: number, y: number): HighchartsElementObject;
}

interface HighchartsRenderer {
    new (parentNode: HTMLElement, width: number, height: number): HighchartsRendererObject;
}

interface HighchartsStatic {
    Chart: HighchartsChart;
    Renderer: HighchartsRenderer;
    Color(color: string | HighchartsGradient): string | HighchartsGradient;

    dateFormat(format: string, time?: number, capitalize?: boolean): string;
    numberFormat(value: number, decimals?: number, decimalPoint?: string, thousandsSep?: string): string;
    setOptions(options: HighchartsGlobalOptions): HighchartsOptions;
    getOptions(): HighchartsOptions;

    map(array: any[], fn: Function): any[];
}

declare var Highcharts: HighchartsStatic;

interface HighchartsPointObject {
    category: string | number;
    percentage: number;
    remove(redraw?: boolean, animation?: boolean|HighchartsAnimation): void;
    select(): void;
    select(select: boolean): void;
    select(select: boolean, accumulate: boolean): void;
    selected: boolean;
    series: HighchartsSeriesObject;
    slice(sliced?: boolean, redraw?: boolean, animation?: boolean|HighchartsAnimation): void;
    total: number;
    update(options: number | [number, number] | HighchartsDataPoint, redraw?: boolean, animation?: boolean | HighchartsAnimation): void;
    x: number;
    y: number;
}

interface HighchartsSeriesObject {
    addPoint(options: number |[number, number]| HighchartsDataPoint, redraw?: boolean, shift?: boolean, animation?: boolean | HighchartsAnimation): void;
    chart: HighchartsChartObject;
    data: HighchartsPointObject[];
    hide(): void;
    name: string;
    options: HighchartsSeriesOptions;
    remove(redraw?: boolean): void;
    select(selected?: boolean): void;
    selected: boolean;
    setData(data: number[] | number[][] | HighchartsDataPoint[], redraw?: boolean, animation?: boolean | HighchartsAnimation, updatePoints?: boolean): void;
    setVisible(visible: boolean, redraw?: boolean): void;
    show(): void;
    type: string;
    update(options: HighchartsSeriesOptions, redraw?: boolean): void;
    visible: boolean;
    xAxis: HighchartsAxisObject;
    yAxis: HighchartsAxisObject;
}

interface JQuery {
    highcharts(): HighchartsChartObject;
    /**
    * Creates a new Highcharts.Chart for the current JQuery selector; usually
    * a div selected by $('#container')
    * @param {HighchartsOptions} options Options for this chart
    * @return current {JQuery} selector the current JQuery selector
    **/
    highcharts(options: HighchartsOptions): JQuery;
    /**
    * Creates a new Highcharts.Chart for the current JQuery selector; usually
    * a div selected by $('#container')
    * @param {HighchartsOptions} options Options for this chart
    * @param callback Callback function used to manipulate the constructed chart instance
    * @return current {JQuery} selector the current JQuery selector
    **/
    highcharts(options: HighchartsOptions, callback: (chart: HighchartsChartObject) => void): JQuery;
}
