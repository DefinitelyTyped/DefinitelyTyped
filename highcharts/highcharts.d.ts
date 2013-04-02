// Type definitions for Highcharts 2.3.3
// Project: http://www.highcharts.com/
// Definitions by: Damiano Gambarotto <http://github.com/damianog>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

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
    enabled?: bool;
    formatter?: () => string;
    overflow?: string;
    rotation?: number;
    staggerLines?: number;
    step?: number;
    style?: HighchartsCSSObject;
    useHTML?: bool;
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
    allowDecimals?: bool;
    alternateGridColor?: string;
    categories?: string[];
    dateTimeLabelFormats?: HighchartsDateTimeFormats;
    endOnTick?: bool;
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
    opposite?: bool;
    plotBands?: HighchartsPlotBands;
    plotLines?: HighchartsPlotLines;
    reversed?: bool;
    showEmpty?: bool;
    showFirstLabel?: bool;
    showLastLabel?: bool;
    startOfWeek?: number;
    startOnTick?: bool;
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
    addSeries?: (event?: Event) => bool;
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
    alignTicks?: bool;
    animation?: HighchartsBoolOrAnimation;
    backgroundColor?: HighchartsColorOrGradient;
    borderColor?: string;
    borderRadius?: number;
    borderWidth?: number;
    className?: string;
    defaultSeriesType?: string;
    events?: HighchartsChartEvents;
    height?: number;
    ignoreHiddenSeries?: bool;
    inverted?: bool;
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
    polar?: bool;
    reflow?: bool;
    renderTo?: any;
    resetZoomButton?: HighchartsChartResetZoomButton;
    selectionMarkerFill?: string;
    shadow?: HighchartsBoolOrShadow;
    showAxes?: bool;
    spacingBottom?: number;
    spacingLeft?: number;
    spacingRight?: number;
    spacingTop?: number;
    style?: HighchartsCSSObject;
    type?: string;
    whidth?: number;
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
    enabled?: bool;
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
    enabled?: bool;
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
    enableImages?: bool;
    enabled?: bool;
    filename?: string;
    type?: string;
    url?: string;
    width?: number;
}

interface HighchartsGlobalOptions {
    VMLRadialGradientURL?: string;
    canvasToolsURL?: string;
    useUTC?: bool;
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
    enabled?: bool;
    floating?: bool;
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
    reversed?: bool;
    rtl?: bool;
    verticalAlign?: string;
    shadow?: HighchartsBoolOrShadow;
    style?: HighchartsCSSObject;
    symbolPadding?: number;
    symbolWidth?: number;
    useHTML?: number;
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
    crop?: bool;
    enabled?: bool;
    formatter?: () => any;
    overflow?: string;
    padding?: number;
    rotation?: number;
    shadow?: HighchartsBoolOrShadow;
    staggerLines?: any; // ?? need to check API
    step?: any; // ?? need to check API
    style?: HighchartsCSSObject;
    useHTML?: bool;
    verticalAlign?: string;
    x?: number;
    y?: number;
}

interface HighchartsAreaCheckboxEvent extends Event {
    checked: bool;
}

interface HighchartsAreaClickEvent extends Event {
    point: HighchartsPointObject;
}

interface HighchartsPlotEvents {
    checkboxClick?: (event: HighchartsAreaCheckboxEvent) => bool;
    click?: (event: HighchartsAreaClickEvent) => void;
    hide?: () => void;
    legendItemClick?: (event: Event) => bool;
    mouseOut?: (event: Event) => void;
    mouseOver?: (event: Event) => void;
    show?: () => void;
}

interface HighchartsMarkerState {
    enabled?: bool;
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
    click?: (event: Event) => bool;
    mouseOut?: (event: Event) => void;
    mouseOver?: (event: Event) => void;
    remove?: (event: Event) => bool;
    select?: (event: Event) => bool;
    unselect?: (event: Event) => bool;
    update?: (event: Event) => bool;
}

interface HighchartsAreaStates {
    enabled?: bool;
    lineWidth?: number;
    marker?: HighchartsMarker;
}

interface HighchartsBarStates extends HighchartsAreaStates {
    brightness?: number;
}

interface HighchartsAreaChart {
    allowPointSelect?: bool;
    animation?: bool;
    color?: string;
    connectEnds?: bool;
    connectNulls?: bool;
    cropThreshold?: number;
    cursor?: string;
    dashStyle?: string; //Solid ShortDash ShortDot ShortDashDot ShortDashDotDot Dot Dash LongDash DashDot LongDashDot LongDashDotDot
    dataLabels?: HighchartsDataLabels;
    enableMouseTracking?: bool;
    events?: HighchartsPlotEvents;
    fillColor?: HighchartsColorOrGradient;
    fillOpacity?: bool;
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
    selected?: bool;
    shadow?: HighchartsBoolOrShadow;
    showCheckbox?: bool;
    showInLegend?: bool;
    stacking?: string;
    states?: {
        hover: HighchartsAreaStates;
    };
    stickyTracking?: bool;
    threshold?: number;
    tooltip?: HighchartsTooltipOptions;
    trackByArea?: bool;
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
    crop?: bool;
    enabled?: bool;
    formatter?: () => any;
    overflow?: string;
    padding?: number;
    rotation?: number;
    shadow?: HighchartsBoolOrShadow;
    staggerLines?: any; // ?? need to check API
    step?: any; // ?? need to check API
    style?: HighchartsCSSObject;
    useHTML?: bool;
    verticalAlign?: string;
    xHigh?: number;
    xLow?: number;
    yHigh?: number;
    yLow?: number;
}

interface HighchartsAreaRangeChart {
    allowPointSelect?: bool;
    animation?: bool;
    color?: string;
    connectNulls?: bool;
    cropThreshold?: number;
    cursor?: string;
    dashStyle?: string; //Solid ShortDash ShortDot ShortDashDot ShortDashDotDot Dot Dash LongDash DashDot LongDashDot LongDashDotDot
    dataLabels?: HighchartsRangeDataLabels;
    enableMouseTracking?: bool;
    events?: HighchartsPlotEvents;
    fillColor?: HighchartsColorOrGradient;
    fillOpacity?: bool;
    id?: string;
    lineColor?: string;
    lineWidth?: number;
    point?: {
        events: HighchartsPointEvents;
    };
    pointInterval?: number;
    pointPlacement?: string; // null, "on", "between"
    pointStart?: number;
    selected?: bool;
    shadow?: HighchartsBoolOrShadow;
    showCheckbox?: bool;
    showInLegend?: bool;
    stacking?: string;
    states?: {
        hover: HighchartsAreaStates;
    };
    stickyTracking?: bool;
    threshold?: number;
    trackByArea?: bool;
    turboThreshold?: number;
    visible?: number;
    zIndex?: number;
}

interface HighchartsBarChart {
    allowPointSelect?: bool;
    animation?: bool;
    borderColor?: string;
    borderRadius?: number;
    borderWidth?: number;
    color?: string;
    colorByPoint?: bool;
    cropThreshold?: number;
    cursor?: string;
    dataLabels?: HighchartsDataLabels;
    enableMouseTracking?: bool;
    events?: HighchartsPlotEvents;
    groupPadding?: number;
    grouping?: bool;
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
    selected?: bool;
    shadow?: HighchartsBoolOrShadow;
    showCheckbox?: bool;
    showInLegend?: bool;
    stacking?: string;
    states?: {
        hover: HighchartsBarStates;
    };
    stickyTracking?: bool;
    tooltip?: HighchartsTooltipOptions;
    turboThreshold?: number;
    visible?: number;
    zIndex?: number;
}

interface HighchartsColumnRangeChart {
    allowPointSelect?: bool;
    animation?: bool;
    borderColor?: string;
    borderRadius?: number;
    borderWidth?: number;
    color?: string;
    colorByPoint?: bool;
    cropThreshold?: number;
    cursor?: string;
    dataLabels?: HighchartsRangeDataLabels;
    enableMouseTracking?: bool;
    events?: HighchartsPlotEvents;
    groupPadding?: number;
    grouping?: bool;
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
    selected?: bool;
    shadow?: HighchartsBoolOrShadow;
    showCheckbox?: bool;
    showInLegend?: bool;
    stacking?: string;
    states?: {
        hover: HighchartsBarStates;
    };
    stickyTracking?: bool;
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
    animation?: bool;
    color?: string;
    cursor?: string;
    datalabels?: HighchartsDataLabels;
    dial?: HighchartsDial;
    enableMouseTracking?: bool;
    events?: HighchartsPlotEvents;
    id?: string;
    pivot?: HighchartsPivot;
    point?: {
        events: HighchartsPointEvents;
    };
    selected?: bool;
    showCheckbox?: bool;
    showInLegend?: bool;
    states?: {
        hover: HighchartsAreaStates;
    };
    stickyTracking?: bool;
    tooltip?: HighchartsTooltipOptions;
    visible?: bool;
    zIndex?: number;
}

interface HighchartsLineChart {
    allowPointSelect?: bool;
    animation?: bool;
    color?: string;
    connectEnds?: bool;
    connectNulls?: bool;
    cropThreshold?: number;
    cursor?: string;
    dashStyle?: string; //Solid ShortDash ShortDot ShortDashDot ShortDashDotDot Dot Dash LongDash DashDot LongDashDot LongDashDotDot
    dataLabels?: HighchartsDataLabels;
    enableMouseTracking?: bool;
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
    selected?: bool;
    shadow?: HighchartsBoolOrShadow;
    showCheckbox?: bool;
    showInLegend?: bool;
    stacking?: string;
    states?: {
        hover: HighchartsAreaStates;
    };
    step?: bool;
    stickyTracking?: bool;
    tooltip?: HighchartsTooltipOptions;
    turboThreshold?: number;
    visible?: number;
    zIndex?: number;
}

interface HighchartsPieChart {
    allowPointSelect?: bool;
    animation?: bool;
    borderColor?: string;
    borderWidth?: number;
    center?: string[];
    color?: string;
    cursor?: string;
    dataLabels?: HighchartsDataLabels;
    enableMouseTracking?: bool;
    events?: HighchartsPlotEvents;
    id?: string;
    ignoreHiddenPoint?: bool;
    innerSize?: any; // string or number;
    lineWidth?: number;
    marker?: HighchartsMarker;
    point?: {
        events: HighchartsPointEvents;
    };
    pointPlacement?: string; // null, "on", "between"
    selected?: bool;
    shadow?: HighchartsBoolOrShadow;
    showInLegend?: bool;
    size?: any; // string or number;
    slicedOffset?: number;
    states?: {
        hover: HighchartsAreaStates;
    };
    stickyTracking?: bool;
    tooltip?: HighchartsTooltipOptions;
    visible?: number;
    zIndex?: number;
}

interface HighchartsScatterChart {
    allowPointSelect?: bool;
    animation?: bool;
    color?: string;
    connectNulls?: bool;
    cropThreshold?: number;
    cursor?: string;
    dashStyle?: string; //Solid ShortDash ShortDot ShortDashDot ShortDashDotDot Dot Dash LongDash DashDot LongDashDot LongDashDotDot
    dataLabels?: HighchartsDataLabels;
    enableMouseTracking?: bool;
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
    selected?: bool;
    shadow?: HighchartsBoolOrShadow;
    showCheckbox?: bool;
    showInLegend?: bool;
    states?: {
        hover: HighchartsAreaStates;
    };
    stickyTracking?: bool;
    tooltip?: HighchartsTooltipOptions;
    turboThreshold?: number;
    visible?: number;
    zIndex?: number;
}

// General options for all series types
interface HighchartsSeriesChart {
    allowPointSelect?: bool;
    animation?: bool;
    color?: string;
    connectEnds?: bool;
    connectNulls?: bool;
    cropThreshold?: number;
    cursor?: string;
    dashStyle?: string; //Solid ShortDash ShortDot ShortDashDot ShortDashDotDot Dot Dash LongDash DashDot LongDashDot LongDashDotDot
    dataLabels?: HighchartsDataLabels;
    enableMouseTracking?: bool;
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
    selected?: bool;
    shadow?: HighchartsBoolOrShadow;
    showCheckbox?: bool;
    showInLegend?: bool;
    stacking?: string;
    states?: {
        hover: HighchartsAreaStates;
    };
    stickyTracking?: bool;
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
    sliced?: bool;
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
    floating?: bool;
    style?: HighchartsCSSObject;
    text?: string;
    useHTML?: bool;
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
    animation?: bool;
    backgroundColor?: HighchartsColorOrGradient;
    borderColor?: string;
    borderRadius?: number;
    borderWidth?: number;
    crosshairs?: any; // bool | [bool,bool] | CrosshairObject | [CrosshairObject,CrosshairObject]
    enabled?: bool;
    footerFormat?: string;
    formatter?: () => any;
    pointFormat?: string;
    positioner?: (labelWidth: number, labelHeight: number, point: HighchartsPlotPoint) => { x: number; y: number; };
    shadow?: bool;
    shared?: bool;
    snap?: number;
    style?: HighchartsCSSObject;
    useHTML?: bool;
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
    setCategories(categories: string[], redraw: bool): void;
    setExtremes(min: number, max: number): void;
    setExtremes(min: number, max: number, redraw: bool): void;
    setExtremes(min: number, max: number, redraw: bool, animation: HighchartsBoolOrAnimation): void;
    setTitle(title: HighchartsAxisTitle): void;
    setTitle(title: HighchartsAxisTitle, redraw: bool): void;
}

interface HighchartsChartObject {
    addSeries(options: HighchartsSeriesOptions): HighchartsSeriesOptions;
    addSeries(options: HighchartsSeriesOptions, redraw: bool): HighchartsSeriesOptions;
    addSeries(options: HighchartsSeriesOptions, redraw: bool, animation: bool): HighchartsSeriesOptions;
    addSeries(options: HighchartsSeriesOptions, redraw: bool, animation: HighchartsAnimation): HighchartsSeriesOptions;
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
    series: HighchartsSeriesChart[];
    setSize(width: number, height: number): void;
    setSize(width: number, height: number, anumation: bool): void;
    setSize(width: number, height: number, anumation: HighchartsAnimation): void;
    setTitle(title: HighchartsTitleOptions): void;
    setTitle(title: HighchartsTitleOptions, subtitle: HighchartsSubtitleOptions): void;
    showLoading(): void;
    showLoading(str: string);
    xAxis: HighchartsAxisObject[];
    yAxis: HighchartsAxisObject[];

    renderer: HighchartsRendererObject;
}

interface HighchartsChart {
    new (options: HighchartsOptions): HighchartsChartObject;
    new (options: HighchartsOptions, callback: (event: Event) => void ): HighchartsChartObject;
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

    dateFormat(format: string, time?: number, capitalize?: bool): string;
    numberFormat(value: number, decimals?: number, decimalPoint?: string, thousandsSep?: string): string;
    setOptions(options: HighchartsOptions): any;
}
declare var Highcharts: HighchartsStatic;

interface HighchartsPointObject {
    category: any; // String|Number
    percentage: number;
    remove(): void;
    remove(redraw: bool): void;
    remove(redraw: bool, animation: bool): void;
    remove(redraw: bool, animation: HighchartsAnimation): void;
    select(): void;
    select(select: bool): void;
    select(select: bool, accumulate: bool): void;
    selected: bool;
    series: HighchartsSeriesObject;
    slice(): void;
    slice(sliced: bool): void;
    slice(sliced: bool, redraw: bool): void;
    slice(sliced: bool, redraw: bool, animation: bool): void;
    slice(sliced: bool, redraw: bool, animation: HighchartsAnimation): void;
    update(options: any): void;
    update(options: any, redraw: bool): void;
    update(options: any, redraw: bool, animation: bool): void;
    update(options: any, redraw: bool, animation: HighchartsAnimation): void;
    x: number;
    y: number;
}

interface HighchartsSeriesObject {
    addPoint(options: any);
    addPoint(options: any, redraw: bool, shift: bool);
    addPoint(options: any, redraw: bool, shift: bool, animation: bool);
    addPoint(options: any, redraw: bool, shift: bool, animation: HighchartsAnimation);
    chart: HighchartsChartObject;
    data: HighchartsDataPoint[];
    hide(): void;
    options: HighchartsSeriesOptions;
    remove(): void;
    remove(redraw: bool);
    name: string;
    points: HighchartsPointObject[];
    select(): void;
    select(selected?: bool): void;
    selected: bool;
    setData(data: number[]): void; // [value1,value2, ... ] 
    setData(data: number[], redraw: bool): void;
    setData(data: number[][]): void; // [[x1,y1],[x2,y2],... ] 
    setData(data: number[][], redraw: bool): void;
    setData(data: HighchartsDataPoint[]): void; // HighchartsDataPoint[]
    setData(data: HighchartsDataPoint[], redraw: bool): void;
    show(): void;
    type: string;
    visible: bool;
    xAxis: HighchartsAxisObject;
    yAxis: HighchartsAxisObject;
}
