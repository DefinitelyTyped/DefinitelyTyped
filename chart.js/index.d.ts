// Type definitions for Chart.js
// Project: https://github.com/nnnick/Chart.js
// Definitions by: Alberto Nuti <https://github.com/anuti>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare enum ChartType {
    line, bar, radar, doughnut, polarArea, bubble
}
declare enum TimeUnit {
    millisecond, second, minute,
    hour, day, week,
    month, quarter, year
}
interface ChartLegendItem {
    text?: string;
    fillStyle?: string;
    hidden?: boolean;
    lineCap?: string;
    lineDash?: number[];
    lineDashOffset?: number;
    lineJoin?: string;
    lineWidth?: number;
    strokeStyle?: string;
}
interface ChartTooltipItem {
    xLabel?: string;
    yLabel?: string;
    datasetIndex?: number;
    index?: number;
}
interface ChartTooltipCallback {
    beforeTitle?: (item?: ChartTooltipItem[], data?: any) => void;
    title?: (item?: ChartTooltipItem[], data?: any) => void;
    afterTitle?: (item?: ChartTooltipItem[], data?: any) => void;
    beforeBody?: (item?: ChartTooltipItem[], data?: any) => void;
    beforeLabel?: (tooltipItem?: ChartTooltipItem, data?: any) => void;
    label?: (tooltipItem?: ChartTooltipItem, data?: any) => void;
    afterLabel?: (tooltipItem?: ChartTooltipItem, data?: any) => void;
    afterBody?: (item?: ChartTooltipItem[], data?: any) => void;
    beforeFooter?: (item?: ChartTooltipItem[], data?: any) => void;
    footer?: (item?: ChartTooltipItem[], data?: any) => void;
    afterfooter?: (item?: ChartTooltipItem[], data?: any) => void;
}
interface ChartAnimationParameter {
    chartInstance?: any;
    animationObject?: any;
}
interface ChartPoint {
    x?: number;
    y?: number;
}

interface ChartConfiguration {
    type?: string;
    data?: ChartData;
    options?: ChartOptions;
}

interface ChartData {

}

interface LinearChartData extends ChartData {
    labels?: string[];
    datasets?: ChartDataSets[];
}

interface ChartOptions {
    responsive?: boolean;
    responsiveAnimationDuration?: number;
    maintainAspectRatio?: boolean;
    events?: string[];
    onClick?: (any?: any) => any;
    title?: ChartTitleOptions;
    legend?: ChartLegendOptions;
    tooltips?: ChartTooltipOptions;
    hover?: ChartHoverOptions;
    animation?: ChartAnimationOptions;
    elements?: ChartElementsOptions;
    scales?: ChartScales;
}

interface ChartFontOptions {
    defaultFontColor?: ChartColor;
    defaultFontFamily?: string;
    defaultFontSize?: number;
    defaultFontStyle?: string;
}

interface ChartTitleOptions {
    display?: boolean;
    position?: string;
    fullWdith?: boolean;
    fontSize?: number;
    fontFamily?: string;
    fontColor?: ChartColor;
    fontStyle?: string;
    padding?: number;
    text?: string;
}

interface ChartLegendOptions {
    display?: boolean;
    position?: string;
    fullWidth?: boolean;
    onClick?: (event: any, legendItem: any) => void;
    labels?: ChartLegendLabelOptions;
}

interface ChartLegendLabelOptions {
    boxWidth?: number;
    fontSize?: number;
    fontStyle?: number;
    fontColor?: ChartColor;
    fontFamily?: string;
    padding?: number;
    generateLabels?: (chart: any) => any;
}

interface ChartTooltipOptions {
    enabled?: boolean;
    custom?: (a: any) => void;
    mode?: string;
    backgroundColor?: ChartColor;
    titleFontFamily?: string;
    titleFontSize?: number;
    titleFontStyle?: string;
    titleFontColor?: ChartColor;
    titleSpacing?: number;
    titleMarginBottom?: number;
    bodyFontFamily?: string;
    bodyFontSize?: number;
    bodyFontStyle?: string;
    bodyFontColor?: ChartColor;
    bodySpacing?: number;
    footerFontFamily?: string;
    footerFontSize?: number;
    footerFontStyle?: string;
    footerFontColor?: ChartColor;
    footerSpacing?: number;
    footerMarginTop?: number;
    xPadding?: number;
    yPadding?: number;
    caretSize?: number;
    cornerRadius?: number;
    multiKeyBackground?: string;
    callbacks?: ChartTooltipCallback;
}

interface ChartHoverOptions {
    mode?: string;
    animationDuration?: number;
    onHover?: (active: any) => void;
}

interface ChartAnimationObject {
    currentStep?: number;
    numSteps?: number;
    easing?: string;
    render?: (arg: any) => void;
    onAnimationProgress?: (arg: any) => void;
    onAnimationComplete?: (arg: any) => void;
}

interface ChartAnimationOptions {
    duration?: number;
    easing?: string;
    onProgress?: (chart: any) => void;
    onComplete?: (chart: any) => void;
}

interface ChartElementsOptions {
    point?: ChartPointOptions;
    line?: ChartLineOptions;
    arg?: ChartArcOtpions;
    rectangle?: ChartRectangleOptions;
}

interface ChartArcOtpions {
    backgroundColor?: ChartColor;
    borderColor?: ChartColor;
    borderWidth?: number;
}

interface ChartLineOptions {
    tension?: number;
    backgroundColor?: ChartColor;
    borderWidth?: number;
    borderColor?: ChartColor;
    borderCapStyle?: string;
    borderDash?: any[];
    borderDashOffset?: number;
    borderJoinStyle?: string;
}

interface ChartPointOptions {
    radius?: number;
    pointStyle?: string;
    backgroundColor?: ChartColor;
    borderWidth?: number;
    borderColor?: ChartColor;
    hitRadius?: number;
    hoverRadius?: number;
    hoverBorderWidth?: number;
}

interface ChartRectangleOptions {
    backgroundColor?: ChartColor;
    borderWidth?: number;
    borderColor?: ChartColor;
    borderSkipped?: string;
}
interface GridLineOptions {
    display?: boolean;
    color?: ChartColor;
    lineWidth?: number;
    drawBorder?: boolean;
    drawOnChartArea?: boolean;
    drawticks?: boolean;
    tickMarkLength?: number;
    zeroLineWidth?: number;
    zeroLineColor?: ChartColor;
    offsetGridLines?: boolean;
}

interface ScaleTitleOptions {
    display?: boolean;
    labelString?: string;
    fontColor?: ChartColor;
    fontFamily?: string;
    fontSize?: number;
    fontStyle?: string;
}

interface TickOptions {
    autoSkip?: boolean;
    callback?: (value: any, index: any, values: any) => string;
    display?: boolean;
    fontColor?: ChartColor;
    fontFamily?: string;
    fontSize?: number;
    fontStyle?: string;
    labelOffset?: number;
    maxRotation?: number;
    minRotation?: number;
    mirror?: boolean;
    padding?: number;
    reverse?: boolean;
    min?: any;
    max?: any;
}
interface AngleLineOptions {
    display?: boolean;
    color?: ChartColor;
    lineWidth?: number;
}

interface PointLabelOptions {
    callback?: (arg: any) => any;
    fontColor?: ChartColor;
    fontFamily?: string;
    fontSize?: number;
    fontStyle?: string;
}

interface TickOptions {
    backdropColor?: ChartColor;
    backdropPaddingX?: number;
    backdropPaddingY?: number;
    maxTicksLimit?: number;
    showLabelBackdrop?: boolean;
}
interface LinearTickOptions extends TickOptions {
    beginAtZero?: boolean;
    min?: number;
    max?: number;
    maxTicksLimit?: number;
    stepSize?: number;
    suggestedMin?: number;
    suggestedMax?: number;
}

interface LogarithmicTickOptions extends TickOptions {
    min?: number;
    max?: number;
}

type ChartColor = string | CanvasGradient | CanvasPattern;

interface ChartDataSets {
    backgroundColor?: ChartColor;
    borderWidth?: number;
    borderColor?: ChartColor;
    borderCapStyle?: string;
    borderDash?: number[];
    borderDashOffset?: number;
    borderJoinStyle?: string;
    data?: number[] | ChartPoint[];
    fill?: boolean;
    label?: string;
    lineTension?: number;
    pointBorderColor?: ChartColor | ChartColor[];
    pointBackgroundColor?: ChartColor | ChartColor[];
    pointBorderWidth?: number | number[];
    pointRadius?: number | number[];
    pointHoverRadius?: number | number[];
    pointHitRadius?: number | number[];
    pointHoverBackgroundColor?: ChartColor | ChartColor[];
    pointHoverBorderColor?: ChartColor | ChartColor[];
    pointHoverBorderWidth?: number | number[];
    pointStyle?: string | string[] | HTMLImageElement | HTMLImageElement[];
    xAxisID?: string;
    yAxisID?: string;
}

interface ChartScales {
    type?: string;
    display?: boolean;
    position?: string;
    beforeUpdate?: (scale?: any) => void;
    beforeSetDimension?: (scale?: any) => void;
    beforeDataLimits?: (scale?: any) => void;
    beforeBuildTicks?: (scale?: any) => void;
    beforeTickToLabelConversion?: (scale?: any) => void;
    beforeCalculateTickRotation?: (scale?: any) => void;
    beforeFit?: (scale?: any) => void;
    afterUpdate?: (scale?: any) => void;
    afterSetDimension?: (scale?: any) => void;
    afterDataLimits?: (scale?: any) => void;
    afterBuildTicks?: (scale?: any) => void;
    afterTickToLabelConversion?: (scale?: any) => void;
    afterCalculateTickRotation?: (scale?: any) => void;
    afterFit?: (scale?: any) => void;
    gridLines?: GridLineOptions;
    scaleLabel?: ScaleTitleOptions;
    ticks?: TickOptions;
    xAxes?: ChartXAxe[];
    yAxes?: ChartYAxe[];
}

interface ChartXAxe {
    type?: string;
    display?: boolean;
    id?: string;
    stacked?: boolean;
    categoryPercentage?: number;
    barPercentage?: number;
    barThickness?: number;
    gridLines?: GridLineOptions;
    position?: string;
    ticks?: TickOptions;
    time?: TimeScale;
    scaleLabel?: ScaleTitleOptions;
}

interface ChartYAxe {
    type?: string;
    display?: boolean;
    id?: string;
    stacked?: boolean;
    position?: string;
    ticks?: TickOptions;
    scaleLabel?: ScaleTitleOptions;
}

interface LinearScale extends ChartScales {
    ticks?: LinearTickOptions;
}

interface LogarithmicScale extends ChartScales {
    ticks?: LogarithmicTickOptions;
}

interface TimeScale extends ChartScales {
    format?: string;
    displayFormats?: string;
    isoWeekday?: boolean;
    max?: string;
    min?: string;
    parser?: string | ((arg: any) => any);
    round?: string;
    tooltipFormat?: string;
    unit?: string | TimeUnit;
    unitStepSize?: number;
}

interface RadialLinearScale {
    lineArc?: boolean;
    angleLines?: AngleLineOptions;
    pointLabels?: PointLabelOptions;
    ticks?: TickOptions;
}

declare class Chart {
    constructor (context: CanvasRenderingContext2D, options: ChartConfiguration);
    config: ChartConfiguration;
    destroy: () => {};
    update: (duration?: any, lazy?: any) => {};
    render: (duration?: any, lazy?: any) => {};
    stop: () => {};
    resize: () => {};
    clear: () => {};
    toBase64: () => string;
    generateLegend: () => {};
    getElementAtEvent: (e: any) => {};
    getElementsAtEvent: (e: any) => {}[];
    getDatasetAtEvent: (e: any) => {}[];

    defaults: {
        global: ChartOptions;
    }
}
