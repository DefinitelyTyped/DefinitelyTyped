// Type definitions for Highcharts 2.3.3
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
    minorTickInterval?: number;
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

interface HighchartsBoolOrAnimation extends HighchartsAnimation {
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

interface HighchartsColorOrGradient {
    linearGradient?: {
        x0: number; y0: number; x1: number; y1: number;
    };
    radialGradient?: {
        cx: number; cy: number; r: number;
    };
    stops?: any[][];
    
    brighten?(amount: number): HighchartsColorOrGradient;
    get?(type: string): string;
}

interface HighchartsBoolOrShadow {
    color?: string;
    offsetX?: number;
    offsetY?: number;
    opacity?: number;
    width?: number;
}

interface HighchartsChartResetZoomButton {
    position: HighchartsPosition;
    relativeTo?: string;
    theme?: any; //TO DO
}

interface HighchartsChartOptions {
    alignTicks?: boolean;
    animation?: HighchartsBoolOrAnimation;
    backgroundColor?: HighchartsColorOrGradient;
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
    plotBackGroundColor?: HighchartsColorOrGradient;
    plotBackGroundImage?: string;
    plotBorderColor?: string;
    plotBorderWidth?: number;
    plotShadow?: HighchartsBoolOrShadow;
    polar?: boolean;
    reflow?: boolean;
    renderTo?: any;
    resetZoomButton?: HighchartsChartResetZoomButton;
    selectionMarkerFill?: string;
    shadow?: HighchartsBoolOrShadow;
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
    backgroundColor?: HighchartsColorOrGradient;
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

interface HighchartsGlobalOptions {
    VMLRadialGradientURL?: string;
    canvasToolsURL?: string;
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

interface HighchartsLangOptions {
    decimalPoint?: string;
    downloadJPEG?: string;
    downloadPDF?: string;
    downloadPNG?: string;
    downloadSVG?: string;
    exportButtonTitle?: string;
    loading?: string;
    months?: string[];
    numericSymbols?: string[];
    printButtonTitle?: string;
    resetZoom?: string;
    resetZoomTitle?: string;
    shortMonths?: string[];
    thousandsSep?: string;
    weekdays?: string[];
}

interface HighchartsLegendNavigationOptions {
    activeColor?: string;
    animation?: HighchartsBoolOrAnimation;
    arrowSize?: number;
    inactiveColor?: string;
    style?: HighchartsCSSObject;
}

interface HighchartsLegendOptions {
    align?: string;
    backgroundColor?: HighchartsColorOrGradient;
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
    shadow?: HighchartsBoolOrShadow;
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
    backgroundColor: HighchartsColorOrGradient;
    borderColor?: string;
    borderWidth?: number;
    innerRadius?: string;
    outerRadius?: string;
}

interface HighchartsPaneOptions {
    background?: HighchartsPaneBackground[];
    center?: any[]; // [x,y] | ["50%","50%" ]
    endAngle?: number;
    startAngle?: number;
}

interface HighchartsDataLabels {
    align?: string;
    backgroundColor?: HighchartsColorOrGradient;
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
    shadow?: HighchartsBoolOrShadow;
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
    fillColor?: HighchartsColorOrGradient;
    fillOpacity?: boolean;
    id?: string;
    lineColor?: string;
    lineWidth?: number;
    marker?: HighchartsMarker;
    point?: {
        events: HighchartsPointEvents;
    };
    pointInterval?: number;
    pointPlacement?: string; // null, "on", "between"
    pointStart?: number;
    selected?: boolean;
    shadow?: HighchartsBoolOrShadow;
    showCheckbox?: boolean;
    showInLegend?: boolean;
    stacking?: string;
    states?: {
        hover: HighchartsAreaStates;
    };
    stickyTracking?: boolean;
    threshold?: number;
    tooltip?: HighchartsTooltipOptions;
    trackByArea?: boolean;
    turboThreshold?: number;
    visible?: number;
    zIndex?: number;
}

interface HighchartsRangeDataLabels {
    align?: string;
    backgroundColor?: HighchartsColorOrGradient;
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
    shadow?: HighchartsBoolOrShadow;
    staggerLines?: any; // ?? need to check API
    step?: any; // ?? need to check API
    style?: HighchartsCSSObject;
    useHTML?: boolean;
    verticalAlign?: string;
    xHigh?: number;
    xLow?: number;
    yHigh?: number;
    yLow?: number;
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
    fillColor?: HighchartsColorOrGradient;
    fillOpacity?: boolean;
    id?: string;
    lineColor?: string;
    lineWidth?: number;
    point?: {
        events: HighchartsPointEvents;
    };
    pointInterval?: number;
    pointPlacement?: string; // null, "on", "between"
    pointStart?: number;
    selected?: boolean;
    shadow?: HighchartsBoolOrShadow;
    showCheckbox?: boolean;
    showInLegend?: boolean;
    stacking?: string;
    states?: {
        hover: HighchartsAreaStates;
    };
    stickyTracking?: boolean;
    threshold?: number;
    trackByArea?: boolean;
    turboThreshold?: number;
    visible?: number;
    zIndex?: number;
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
    cursor?: string;
    dataLabels?: HighchartsDataLabels;
    enableMouseTracking?: boolean;
    events?: HighchartsPlotEvents;
    groupPadding?: number;
    grouping?: boolean;
    id?: string;
    minPointLength?: number;
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
    shadow?: HighchartsBoolOrShadow;
    showCheckbox?: boolean;
    showInLegend?: boolean;
    stacking?: string;
    states?: {
        hover: HighchartsBarStates;
    };
    stickyTracking?: boolean;
    tooltip?: HighchartsTooltipOptions;
    turboThreshold?: number;
    visible?: number;
    zIndex?: number;
}

interface HighchartsColumnRangeChart {
    allowPointSelect?: boolean;
    animation?: boolean;
    borderColor?: string;
    borderRadius?: number;
    borderWidth?: number;
    color?: string;
    colorByPoint?: boolean;
    cropThreshold?: number;
    cursor?: string;
    dataLabels?: HighchartsRangeDataLabels;
    enableMouseTracking?: boolean;
    events?: HighchartsPlotEvents;
    groupPadding?: number;
    grouping?: boolean;
    id?: string;
    minPointLength?: number;
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
    shadow?: HighchartsBoolOrShadow;
    showCheckbox?: boolean;
    showInLegend?: boolean;
    stacking?: string;
    states?: {
        hover: HighchartsBarStates;
    };
    stickyTracking?: boolean;
    tooltip?: HighchartsTooltipOptions;
    turboThreshold?: number;
    visible?: number;
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
    shadow?: HighchartsBoolOrShadow;
    showCheckbox?: boolean;
    showInLegend?: boolean;
    stacking?: string;
    states?: {
        hover: HighchartsAreaStates;
    };
    step?: boolean;
    stickyTracking?: boolean;
    tooltip?: HighchartsTooltipOptions;
    turboThreshold?: number;
    visible?: number;
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
    innerSize?: any; // string or number;
    lineWidth?: number;
    marker?: HighchartsMarker;
    point?: {
        events: HighchartsPointEvents;
    };
    pointPlacement?: string; // null, "on", "between"
    selected?: boolean;
    shadow?: HighchartsBoolOrShadow;
    showInLegend?: boolean;
    size?: any; // string or number;
    slicedOffset?: number;
    states?: {
        hover: HighchartsAreaStates;
    };
    stickyTracking?: boolean;
    tooltip?: HighchartsTooltipOptions;
    visible?: number;
    zIndex?: number;
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
    shadow?: HighchartsBoolOrShadow;
    showCheckbox?: boolean;
    showInLegend?: boolean;
    states?: {
        hover: HighchartsAreaStates;
    };
    stickyTracking?: boolean;
    tooltip?: HighchartsTooltipOptions;
    turboThreshold?: number;
    visible?: number;
    zIndex?: number;
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
    shadow?: HighchartsBoolOrShadow;
    showCheckbox?: boolean;
    showInLegend?: boolean;
    stacking?: string;
    states?: {
        hover: HighchartsAreaStates;
    };
    stickyTracking?: boolean;
    tooltip?: HighchartsTooltipOptions;
    turboThreshold?: number;
    visible?: number;
    zIndex?: number;
}

interface HighchartsSplineChart extends HighchartsSeriesChart {
}

interface HighchartsPlotOptions {
    area?: HighchartsAreaChart;
    arearange?: HighchartsAreaRangeChart;
    areaspline?: HighchartsAreaChart;
    areasplinerange?: HighchartsAreaRangeChart;
    bar?: HighchartsBarChart;
    column?: HighchartsBarChart;
    columnrange?: HighchartsColumnRangeChart;
    gauge?: HighchartsGaugeChart;
    line?: HighchartsLineChart;
    pie?: HighchartsPieChart;
    scatter?: HighchartsScatterChart;
    series?: HighchartsSeriesChart;
    spline?: HighchartsSplineChart;
}

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

interface HighchartsSeriesOptions {
    data?: any[]; // [value1,value2, ... ] | [[x1,y1],[x2,y2],... ] | HighchartsDataPoint[]
    index?: number;
    legendIndex?: number;
    name?: string;
    stack?: any; // String | Number | any to match
    type?: string;
    xAxis?: number;
    yAxis?: number;
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
    backgroundColor?: HighchartsColorOrGradient;
    borderColor?: string;
    borderRadius?: number;
    borderWidth?: number;
    crosshairs?: any; // boolean | [boolean,bool] | CrosshairObject | [CrosshairObject,CrosshairObject]
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
    exporting?: HighchartsExportingOptions;
    global?: HighchartsGlobalOptions;
    labels?: HighchartsLabelsOptions;
    lang?: HighchartsLangOptions;
    legend?: HighchartsLegendOptions;
    loading?: HighchartsLoadingOptions;
    navigation?: HighchartsNavigationOptions;
    pane?: HighchartsPaneOptions;
    plotOptions?: HighchartsPlotOptions;
    series?: HighchartsSeriesOptions[];
    subtitle?: HighchartsSubtitleOptions;
    title?: HighchartsTitleOptions;
    tooltip?: HighchartsTooltipOptions;
    xAxis?: HighchartsAxisOptions;
    yAxis?: HighchartsAxisOptions;
}


interface HighchartsAxisObject {
    addPlotBand(options: HighchartsPlotBands): void;
    addPlotLine(options: HighchartsPlotLines): void;
    getExtremes(): HighchartsExtremes;
    removePlotBand(id: string): void;
    removePlotLine(id: string): void;
    setCategories(categories: string[]): void;
    setCategories(categories: string[], redraw: boolean): void;
    setExtremes(min: number, max: number): void;
    setExtremes(min: number, max: number, redraw: boolean): void;
    setExtremes(min: number, max: number, redraw: boolean, animation: HighchartsBoolOrAnimation): void;
    setTitle(title: HighchartsAxisTitle): void;
    setTitle(title: HighchartsAxisTitle, redraw: boolean): void;
}

interface HighchartsChartObject {
    addSeries(options: HighchartsSeriesOptions): HighchartsSeriesOptions;
    addSeries(options: HighchartsSeriesOptions, redraw: boolean): HighchartsSeriesOptions;
    addSeries(options: HighchartsSeriesOptions, redraw: boolean, animation: boolean): HighchartsSeriesOptions;
    addSeries(options: HighchartsSeriesOptions, redraw: boolean, animation: HighchartsAnimation): HighchartsSeriesOptions;
    container: HTMLElement;
    destroy(): void;
    exportChart(): void;
    exportChart(options: HighchartsExportingOptions): void;
    exportChart(options: HighchartsExportingOptions, chartOptions: HighchartsChartOptions): void;
    get(id: string): any; // Axis|Series|Point
    getSVG(): string;
    getSVG(additionalOptions: HighchartsChartOptions): string;
    getSelectedPoints(): HighchartsPointObject[];
    getSelectedSeries(): HighchartsSeriesObject[];
    hideLoading(): void;
    options: HighchartsChartOptions;
    print(): void;
    redraw(): void;
    series: HighchartsSeriesObject[];
    setSize(width: number, height: number): void;
    setSize(width: number, height: number, anumation: boolean): void;
    setSize(width: number, height: number, anumation: HighchartsAnimation): void;
    setTitle(title: HighchartsTitleOptions): void;
    setTitle(title: HighchartsTitleOptions, subtitle: HighchartsSubtitleOptions): void;
    showLoading(): void;
    showLoading(str: string): void;
    xAxis: HighchartsAxisObject[];
    yAxis: HighchartsAxisObject[];

    renderer: HighchartsRendererObject;
}

interface HighchartsChart {
    new (options: HighchartsOptions): HighchartsChartObject;
    new (options: HighchartsOptions, callback: (chart: HighchartsChartObject) => void ): HighchartsChartObject;
}

interface HighchartsElementObject {
    add(): HighchartsElementObject;
    add(parent: HighchartsElementObject): HighchartsElementObject;
    attr(hash: any): HighchartsElementObject;
    css(hash: HighchartsCSSObject): HighchartsElementObject;
    destroy(): void;
    getBBox(): { x: number; y: number; height: number; width: number; };
    on(eventType: string, handler: () => void ): HighchartsElementObject;
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
    Color(color: HighchartsColorOrGradient): HighchartsColorOrGradient;

    dateFormat(format: string, time?: number, capitalize?: boolean): string;
    numberFormat(value: number, decimals?: number, decimalPoint?: string, thousandsSep?: string): string;
    setOptions(options: HighchartsOptions): HighchartsOptions;
    getOptions(): HighchartsOptions;
    
    map(array: any[], fn: Function): any[];
}
declare var Highcharts: HighchartsStatic;

interface HighchartsPointObject {
    category: any; // String|Number
    percentage: number;
    remove(): void;
    remove(redraw: boolean): void;
    remove(redraw: boolean, animation: boolean): void;
    remove(redraw: boolean, animation: HighchartsAnimation): void;
    select(): void;
    select(select: boolean): void;
    select(select: boolean, accumulate: boolean): void;
    selected: boolean;
    series: HighchartsSeriesObject;
    slice(): void;
    slice(sliced: boolean): void;
    slice(sliced: boolean, redraw: boolean): void;
    slice(sliced: boolean, redraw: boolean, animation: boolean): void;
    slice(sliced: boolean, redraw: boolean, animation: HighchartsAnimation): void;
    update(options: any): void;
    update(options: any, redraw: boolean): void;
    update(options: any, redraw: boolean, animation: boolean): void;
    update(options: any, redraw: boolean, animation: HighchartsAnimation): void;
    x: number;
    y: number;
}

interface HighchartsSeriesObject {
    addPoint(options: any): void;
    addPoint(options: any, redraw: boolean, shift: boolean): void;
    addPoint(options: any, redraw: boolean, shift: boolean, animation: boolean): void;
    addPoint(options: any, redraw: boolean, shift: boolean, animation: HighchartsAnimation): void;
    chart: HighchartsChartObject;
    data: HighchartsDataPoint[];
    hide(): void;
    options: HighchartsSeriesOptions;
    remove(): void;
    remove(redraw: boolean): void;
    name: string;
    points: HighchartsPointObject[];
    select(): void;
    select(selected?: boolean): void;
    selected: boolean;
    setData(data: number[]): void; // [value1,value2, ... ] 
    setData(data: number[], redraw: boolean): void;
    setData(data: number[][]): void; // [[x1,y1],[x2,y2],... ] 
    setData(data: number[][], redraw: boolean): void;
    setData(data: HighchartsDataPoint[]): void; // HighchartsDataPoint[]
    setData(data: HighchartsDataPoint[], redraw: boolean): void;
    setVisible(visible: boolean): void;
    setVisible(visible: boolean, redraw: boolean): void;
    show(): void;
    type: string;
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
