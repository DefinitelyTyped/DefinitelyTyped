// Type definitions for Highstock 2.1.6
// Project: http://www.highcharts.com/

// Definitions by: David Deutsch <http://github.com/DavidKDeutsch>
// Definitions by: Dave Baumann <https://github.com/route2Dev>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as Highcharts from "highcharts";

declare namespace Highstock {
    interface ChartObject extends Highcharts.ChartObject {
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
        series?: Highcharts.IndividualSeriesOptions;
        xAxis?: Highcharts.AxisOptions;
        yAxis?: Highcharts.AxisOptions;
    }

    interface RangeSelectorButton {
        type: string; // Defines the timespan, can be one of 'millisecond', 'second', 'minute', 'day', 'week', 'month', 'ytd' (year to date), 'year' and 'all'.
        count?: number;
        text: string;
        dataGrouping?: any; // not sure how this works
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
        inputDateParser?(date: string): number;
        inputEditDateFormat?: string;
        inputEnabled?: boolean;
        inputPosition?: {
            align?: string;
            verticalAlign?: string;
            x?: number;
            y?: number;
        };
        inputStyle?: Highcharts.CSSObject;
        labelStyle?: Highcharts.CSSObject;
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

    interface AxisOptions extends Highcharts.AxisOptions {
        scrollbar?: ScrollbarOptions;
    }

    interface XAxisOptions extends AxisOptions {
        ordinal?: boolean;
        overscroll?: number;
    }

    interface YAxisOptions extends AxisOptions {
        height?: number | string;
        maxLength?: number | string;
        minLength?: number | string;
        resize?: {
            controlledAxis?: {
                next?: Array<number | string>;
                prev?: Array<number | string>;
            },
            cursor?: string;
            enabled?: boolean;
            lineColor?: string;
            lineDashStyle?: string;
            lineWidth?: number;
            x?: number;
            y?: number;
        };
        reversedStacks?: boolean;
        tooltipValueFormat?: string;
        top?: number | string;
    }

    interface Options extends Highcharts.Options {
        navigator?: NavigatorOptions;
        rangeSelector?: RangeSelectorOptions;
        scrollbar?: ScrollbarOptions;
        xAxis?: XAxisOptions[] |XAxisOptions;
        yAxis?: YAxisOptions[] | YAxisOptions;
    }

    interface Chart {
        new (options: Options): ChartObject;
        new (options: Options, callback: (chart: ChartObject) => void): ChartObject;
    }

    interface Static extends Highcharts.Static {
        StockChart: Chart;
        stockChart(renderTo: string | HTMLElement, options: Options, callback?: (chart: ChartObject) => void): ChartObject;
    }
}

declare global {
    interface JQuery {
        highcharts(type: "StockChart"): Highstock.ChartObject;
        /**
         * Creates a new Highcharts.Chart for the current JQuery selector; usually
         * a div selected by $('#container')
         * @param options Options for this chart
         * @return current selector the current JQuery selector
         */
        highcharts(type: "StockChart", options: Highstock.Options): JQuery;
        /**
         * Creates a new Highcharts.Chart for the current JQuery selector; usually
         * a div selected by $('#container')
         * @param options Options for this chart
         * @param callback Callback function used to manipulate the constructed chart instance
         * @return current selector the current JQuery selector
         */
        highcharts(type: "StockChart", options: Highstock.Options, callback: (chart: Highstock.ChartObject) => void): JQuery;

        highcharts(type: string): Highcharts.ChartObject;
        highcharts(type: string, options: Highcharts.Options): JQuery;
        highcharts(type: string, options: Highcharts.Options, callback: (chart: Highcharts.ChartObject) => void): JQuery;
    }
}

declare const Highstock: Highstock.Static;
export = Highstock;
export as namespace Highstock;
