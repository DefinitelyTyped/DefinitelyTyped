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
    color: string;
    highlight: string;
    label: string;
}

interface Chart {
    new (context: CanvasRenderingContext2D): Chart;
    Line(data: LinearChartData, options?: {});
    Bar(data: LinearChartData, options?: {});
    Radar(data: LinearChartData, options?: {});

    PolarArea(data: CircularChartData[], options?: {});
    Pie(data: CircularChartData[], options?: {});
    Doughnut(data: CircularChartData[], options?: {});

}

declare var Chart: Chart;
