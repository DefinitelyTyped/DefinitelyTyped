// Type definitions for Chart.js
// Project: https://github.com/nnnick/Chart.js
// Definitions by: Steve Fenton <https://github.com/Steve-Fenton>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

interface ChartDataSet {
    label: string;
    fillColor: string;
    strokeColor: string;
}

interface LinearChartDataSet extends ChartDataSet {
    pointColor?: string;
    pointStrokeColor?: string;
    pointHighlightFill?: string;
    pointHighlightStroke?: string;
    data: number[];
    points?: ChartElement[];
}

interface BarChartDataSet extends ChartDataSet {
    highlightFill?: string;
    highlightStroke?: string;
    data: number[];
    bars?: ChartElement[];
}

interface CircularChartDataSet {
    label?: string;
    color?: string;
    highlight?: string;
    value: number;
}

interface LinearChartData {
    labels: string[];
    datasets: LinearChartDataSet[];
}

interface BarChartData {
    labels: string[];
    datasets: BarChartDataSet[];
}

interface ChartSettings {
    animation: boolean;
    animationSteps: number;
    animationEasing: string;
    showScale: boolean;
    scaleOverride: boolean;
    scaleSteps: number;
    scaleStepWidth: number;
    scaleStartValue: number;
    scaleLineColor: string;
    scaleLineWidth: number;
    scaleShowLabels: boolean;
    scaleLabel: string;
    scaleIntegersOnly: boolean;
    scaleBeginAtZero: boolean;
    scaleFontFamily: string;
    scaleFontSize: number;
    scaleFontStyle: string;
    scaleFontColor: string;
    responsive: boolean;
    maintainAspectRatio: boolean;
    showTooltips: boolean;
    tooltipEvents: string[];
    customTooltips: boolean | ((tooltip: any) => any);
    tooltipFillColor: string;
    tooltipFontFamily: string;
    tooltipFontSize: number;
    tooltipFontStyle: string;
    tooltipFontColor: string;
    tooltipTitleFontFamily: string;
    tooltipTitleFontSize: number;
    tooltipTitleFontStyle: string;
    tooltipTitleFontColor: string;
    tooltipYPadding: number;
    tooltipXPadding: number;
    tooltipCaretSize: number;
    tooltipCornerRadius: number;
    tooltipXOffset: number;
    tooltipTemplate: string;
    multiTooltipTemplate: string;
    onAnimationProgress: () => any;
    onAnimationComplete: () => any;
}

interface ChartOptions {
    animation?: boolean;
    animationSteps?: number;
    animationEasing?: string;
    showScale?: boolean;
    scaleOverride?: boolean;
    scaleSteps?: number;
    scaleStepWidth?: number;
    scaleStartValue?: number;
    scaleLineColor?: string;
    scaleLineWidth?: number;
    scaleShowLabels?: boolean;
    scaleLabel?: string;
    scaleIntegersOnly?: boolean;
    scaleBeginAtZero?: boolean;
    scaleFontFamily?: string;
    scaleFontSize?: number;
    scaleFontStyle?: string;
    scaleFontColor?: string;
    responsive?: boolean;
    maintainAspectRatio?: boolean;
    showTooltips?: boolean;
    customTooltips?: boolean | ((tooltip: any) => any);
    tooltipEvents?: string[];
    tooltipFillColor?: string;
    tooltipFontFamily?: string;
    tooltipFontSize?: number;
    tooltipFontStyle?: string;
    tooltipFontColor?: string;
    tooltipTitleFontFamily?: string;
    tooltipTitleFontSize?: number;
    tooltipTitleFontStyle?: string;
    tooltipTitleFontColor?: string;
    tooltipYPadding?: number;
    tooltipXPadding?: number;
    tooltipCaretSize?: number;
    tooltipCornerRadius?: number;
    tooltipXOffset?: number;
    tooltipTemplate?: string;
    multiTooltipTemplate?: string;
    onAnimationProgress?: () => void;
    onAnimationComplete?: () => void;
    scaleShowGridLines?: boolean;
    scaleGridLineColor?: string;
    scaleGridLineWidth?: number;
    scaleShowHorizontalLines?: boolean;
    scaleShowVerticalLines?: boolean;
    bezierCurve?: boolean;
    bezierCurveTension?: number;
    pointDot?: boolean;
    pointDotRadius?: number;
    pointDotStrokeWidth?: number;
    pointHitDetectionRadius?: number;
    datasetStroke?: boolean;
    datasetStrokeWidth?: number;
    datasetFill?: boolean;
    legendTemplate?: string;
}

interface ChartElement {
    value: number;
    label: string;
    datasetLabel: string;
    strokeColor: string;
    fillColor: string;
    highlightFill: string;
    highlightStroke: string;
    x: number;
    y: number;
}

interface ChartInstance {
    clear: () => void;
    stop: () => void;
    resize: () => void;
    destroy: () => void;
    toBase64Image: () => string;
    generateLegend: () => string;
}

interface LinearInstance extends ChartInstance {
    getPointsAtEvent: (event: Event) => ChartElement[];
    update: () => void;
    addData: (valuesArray: number[], label: string) => void;
    removeData: () => void;
    datasets: LinearChartDataSet[];
}

interface BarInstance extends ChartInstance {
    getBarsAtEvent: (event: Event) => ChartElement[];
    update: () => void;
    addData: (valuesArray: number[], label: string) => void;
    removeData: () => void;
    datasets: BarChartDataSet[];
}

interface CircularInstance extends ChartInstance {
    getSegmentsAtEvent: (event: Event) => ChartElement[];
    update: () => void;
    addData: (valuesArray: CircularChartDataSet, index?: number) => void;
    removeData: (index?: number) => void;
    segments: ChartElement[];
}

interface LineChartOptions extends ChartOptions {
}

interface BarChartOptions extends ChartOptions {
    barShowStroke?: boolean;
    barStrokeWidth?: number;
    barValueSpacing?: number;
    barDatasetSpacing?: number;
}

interface RadarChartOptions extends ChartOptions {
    scaleShowLine?: boolean;
    angleShowLineOut?: boolean;
    angleLineColor?: string;
    angleLineWidth?: number;
    pointLabelFontFamily?: string;
    pointLabelFontStyle?: string;
    pointLabelFontSize?: number;
    pointLabelFontColor?: string;
}

interface PolarAreaChartOptions extends ChartOptions {
    scaleShowLabelBackdrop?: boolean;
    scaleBackdropColor?: string;
    scaleBackdropPaddingY?: number;
    scaleBackdropPaddingX?: number;
    scaleShowLine?: boolean;
    segmentShowStroke?: boolean;
    segmentStrokeColor?: string;
    segmentStrokeWidth?: number;
    animateRotate?: boolean;
    animateScale?: boolean;
}

interface PieChartOptions extends ChartOptions {
    segmentShowStroke?: boolean;
    segmentStrokeColor?: string;
    segmentStrokeWidth?: number;
    percentageInnerCutout?: number;
    animateRotate?: boolean;
    animateScale?: boolean;
}

interface Chart {
    Line(data: LinearChartData, options?: LineChartOptions): LinearInstance;
    Bar(data: BarChartData, options?: BarChartOptions): BarInstance;
    Radar(data: LinearChartData, options?: RadarChartOptions): LinearInstance;

    PolarArea(data: CircularChartDataSet[], options?: PolarAreaChartOptions): CircularInstance;
    Pie(data: CircularChartDataSet[], options?: PieChartOptions): CircularInstance;
    Doughnut(data: CircularChartDataSet[], options?: PieChartOptions): CircularInstance;
}

declare var Chart: {
    new (context: CanvasRenderingContext2D): Chart;
    defaults: {
        global: ChartSettings;
    }
};
