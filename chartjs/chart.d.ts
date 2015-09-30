// Type definitions for Chart.js
// Project: https://github.com/nnnick/Chart.js
// Definitions by: Steve Fenton <https://github.com/Steve-Fenton>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

interface ChartDataSet {
    label: string;
    fillColor: string;
    strokeColor: string;

    /* Line, Radar */
    pointColor?: string;
    pointStrokeColor?: string;
    pointHighlightFill?: string;
    pointHighlightStroke?: string;

    /* Bar */
    highlightFill?: string;
    highlightStroke?: string;
    data: number[];
}

interface LinearChartData {
    labels: string[];
    datasets: ChartDataSet[];
}

interface CircularChartData {
    value: number;
    color?: string;
    highlight?: string;
    label?: string;
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
    customTooltips: (tooltip: any) => void;
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
    customTooltips?: (tooltip: boolean | Object) => void;
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

interface PointsAtEvent {
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
    getPointsAtEvent: (event: Event) => PointsAtEvent[];
    update: () => void;
    addData: (valuesArray: number[], label: string) => void;
    removeData: () => void;
}

interface CircularInstance extends ChartInstance {
    getSegmentsAtEvent: (event: Event) => {}[];
    update: () => void;
    addData: (valuesArray: CircularChartData, index?: number) => void;
    removeData: (index: number) => void;
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
    Bar(data: LinearChartData, options?: BarChartOptions): LinearInstance;
    Radar(data: LinearChartData, options?: RadarChartOptions): LinearInstance;

    PolarArea(data: CircularChartData[], options?: PolarAreaChartOptions): CircularInstance;
    Pie(data: CircularChartData[], options?: PieChartOptions): CircularInstance;
    Doughnut(data: CircularChartData[], options?: PieChartOptions): CircularInstance;
}

declare var Chart: {
    new (context: CanvasRenderingContext2D): Chart;
    defaults: {
        global: ChartSettings;
    }
};
