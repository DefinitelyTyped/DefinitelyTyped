// Type definitions for Highstock 2.1.5
// Project: http://www.highcharts.com/
// Definitions by: David Deutsch <http://github.com/DavidKDeutsch>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="highcharts.d.ts" />

interface HighstockChartObject extends HighchartsChartObject {
    options: HighstockOptions;
}

interface HighstockNavigatorOptions {
    adaptToUpdatedData?: boolean;
    baseSeries?: string | number;
    enabled?: boolean;
    handles?: {
        backgroundColor?: string;
        borderColor?: string;
    };
    height?: number;
    margin?: number;
    maskFill?: string;
    maskInside?: boolean;
    outlineColor?: string;
    outlineWidth?: number;
    series?: HighchartsIndividualSeriesOptions;
    xAxis?: HighchartsAxisOptions;
    yAxis?: HighchartsAxisOptions;
}

interface RangeSelectorButton {
    type: string; //Defines the timespan, can be one of 'millisecond', 'second', 'minute', 'day', 'week', 'month', 'ytd' (year to date), 'year' and 'all'.
    count?: number;
    text: string;
    dataGrouping?: any; //not sure how this works
}

interface HighstockRangeSelectorOptions {
    allButtonsEnabled?: boolean;
    buttonSpacing?: number;
    buttonTheme?: any;
    buttons?: RangeSelectorButton[];
    enabled?: boolean;
    inputBoxBorderColor?: string;
    inputBoxHeight?: number;
    inputBoxWidth?: number;
    inputDateFormat?: string;
    inputDateParser?: (date: string) => number;
    inputEditDateFormat?: string;
    inputEnabled?: boolean;
    inputPosition?: {
        align?: string;
        verticalAlign?: string;
        x?: number;
        y?: number;
    };
    inputStyle?: HighchartsCSSObject;
    labelStyle?: HighchartsCSSObject;
    selected?: number;
}

interface HighstockScrollbarOptions {
    barBackgroundColor?: string;
    barBorderColor?: string;
    barBorderRadius?: number;
    barBorderWidth?: number;
    buttonArrowColor?: string;
    buttonBackgroundColor?: string;
    buttonBorderColor?: string;
    buttonBorderRadius?: number;
    buttonBorderWidth?: number;
    enabled?: boolean;
    height?: number;
    liveRedraw?: boolean;
    minWidth?: number;
    rifleColor?: string;
    trackBackgroundColor?: string;
    trackBorderColor?: string;
    trackBorderRadius?: number;
    trackBorderWidth?: number;
}

interface HighstockOptions extends HighchartsOptions {
    navigator?: HighstockNavigatorOptions; 
    rangeSelector?: HighstockRangeSelectorOptions; 
    scrollbar?: HighstockScrollbarOptions; 
}

interface HighstockChart {
    new (options: HighstockOptions): HighstockChartObject;
    new (options: HighstockOptions, callback: (chart: HighstockChartObject) => void): HighstockChartObject;
}

interface HighchartsStatic {
    StockChart: HighstockChart; 
}

interface JQuery {
    highcharts(type: "StockChart"): HighstockChartObject;
    /**
    * Creates a new Highcharts.Chart for the current JQuery selector; usually
    * a div selected by $('#container')
    * @param {HighchartsOptions} options Options for this chart
    * @return current {JQuery} selector the current JQuery selector
    **/
    highcharts(type: "StockChart", options: HighstockOptions): JQuery;
    /**
    * Creates a new Highcharts.Chart for the current JQuery selector; usually
    * a div selected by $('#container')
    * @param {HighchartsOptions} options Options for this chart
    * @param callback Callback function used to manipulate the constructed chart instance
    * @return current {JQuery} selector the current JQuery selector
    **/
    highcharts(type: "StockChart", options: HighstockOptions, callback: (chart: HighstockChartObject) => void): JQuery;


    highcharts(type: string): HighchartsChartObject;
    highcharts(type: string, options: HighchartsOptions): JQuery;
    highcharts(type: string, options: HighchartsOptions, callback: (chart: HighchartsChartObject) => void): JQuery;
}
