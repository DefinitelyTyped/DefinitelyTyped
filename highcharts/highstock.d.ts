// Type definitions for Highstock 2.1.5
// Project: http://www.highcharts.com/
// Definitions by: David Deutsch <http://github.com/DavidKDeutsch>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="highcharts.d.ts" />

declare namespace __Highstock {
    interface ChartObject extends __Highcharts.ChartObject {
        options: Options;
    }

    interface NavigatorOptions {
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
        series?: __Highcharts.IndividualSeriesOptions;
        xAxis?: __Highcharts.AxisOptions;
        yAxis?: __Highcharts.AxisOptions;
    }

    interface RangeSelectorButton {
        type: string; //Defines the timespan, can be one of 'millisecond', 'second', 'minute', 'day', 'week', 'month', 'ytd' (year to date), 'year' and 'all'.
        count?: number;
        text: string;
        dataGrouping?: any; //not sure how this works
    }

    interface RangeSelectorOptions {
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
        inputStyle?: __Highcharts.CSSObject;
        labelStyle?: __Highcharts.CSSObject;
        selected?: number;
    }

    interface ScrollbarOptions {
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

    interface Options extends __Highcharts.Options {
        navigator?: NavigatorOptions;
        rangeSelector?: RangeSelectorOptions;
        scrollbar?: ScrollbarOptions;
    }

    interface Chart {
        new (options: Options): ChartObject;
        new (options: Options, callback: (chart: ChartObject) => void): ChartObject;
    }

    interface Static extends __Highcharts.Static {
        StockChart: Chart;
    }
}


interface JQuery {
    highcharts(type: "StockChart"): __Highstock.ChartObject;
    /**
     * Creates a new Highcharts.Chart for the current JQuery selector; usually
     * a div selected by $('#container')
     * @param {__Highcharts.Options} options Options for this chart
     * @return current {JQuery} selector the current JQuery selector
     **/
    highcharts(type: "StockChart", options: __Highstock.Options): JQuery;
    /**
     * Creates a new Highcharts.Chart for the current JQuery selector; usually
     * a div selected by $('#container')
     * @param {__Highcharts.Options} options Options for this chart
     * @param callback Callback function used to manipulate the constructed chart instance
     * @return current {JQuery} selector the current JQuery selector
     **/
    highcharts(type: "StockChart", options: __Highstock.Options, callback: (chart: __Highstock.ChartObject) => void): JQuery;


    highcharts(type: string): __Highcharts.ChartObject;
    highcharts(type: string, options: __Highcharts.Options): JQuery;
    highcharts(type: string, options: __Highcharts.Options, callback: (chart: __Highcharts.ChartObject) => void): JQuery;
}
