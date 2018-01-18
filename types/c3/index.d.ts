// Type definitions for C3js 0.4
// Project: http://c3js.org/
// Definitions by: Marc Climent <https://github.com/mcliment>
//                 Gerin Jacob <https://github.com/gerinjacob>
//                 Bernd Hacker <https://github.com/denyo>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

import * as d3 from "d3";

export as namespace c3;

export type PrimitiveArray = Array<string | boolean | number | null>;
export type FormatFunction = (v: any, id: string, i: number, j: number) => void;

export interface TargetIds {
    ids: ArrayOrString;
}

export type ArrayOrString = string[] | string;

export interface ChartConfiguration {
    /**
     * The CSS selector or the element which the chart will be set to. D3 selection object can be specified. If other chart is set already, it will be replaced with the new one (only one chart
     * can be set in one element).
     * If this option is not specified, the chart will be generated but not be set. Instead, we can access the element by chart.element and set it by ourselves.
     * Note: When chart is not binded, c3 starts observing if chart.element is binded by MutationObserver. In this case, polyfill is required in IE9 and IE10 becuase they do not support
     * MutationObserver. On the other hand, if chart always will be binded, polyfill will not be required because MutationObserver will never be called.
     */
    bindto?: string | HTMLElement | d3.Selection<any> | null;
    size?: {
        /**
         * The desired width of the chart element.
         * If this option is not specified, the width of the chart will be calculated by the size of the parent element it's appended to.
         * Note: This option should be specified if possible because it can improve its performance because some size calculations will be skipped by an explicit value.
         */
        width?: number;
        /**
         * The desired height of the chart element.
         * If this option is not specified, the height of the chart will be calculated by the size of the parent element it's appended to.
         */
        height?: number;
    };

    padding?: {
        /**
         * The padding on the top of the chart.
         */
        top?: number;
        /**
         * The padding on the right of the chart.
         */
        right?: number;
        /**
         * The padding on the bottom of the chart.
         */
        bottom?: number;
        /**
         * The padding on the left of the chart.
         */
        left?: number;
    };

    resize?: {
        /**
         * Indicate if the chart should automatically get resized when the window gets resized.
         */
        auto?: boolean;
    };

    color?: {
        /**
         * Set custom color pattern.
         */
        pattern?: string[];
        threshold?: any; // Undocumented
    };

    interaction?: {
        /**
         * Indicate if the chart should have interactions.
         * If false is set, all of interactions (showing/hiding tooltip, selection, mouse events, etc) will be disabled.
         */
        enabled?: boolean;
    };

    transition?: {
        /**
         * Set duration of transition (in milliseconds) for chart animation.
         * Note: If 0 or null set, transition will be skipped. So, this makes initial rendering faster especially in case you have a lot of data.
         */
        duration?: number;
    };

    /**
     * Set a callback to execute when the chart is initialized.
     */
    oninit?(): void;

    /**
     * Set a callback which is executed when the chart is rendered. Basically, this callback will be called in each time when the chart is redrawed.
     */
    onrendered?(): void;

    /**
     * Set a callback to execute when mouse enters the chart.
     */
    onmouseover?(): void;

    /**
     * Set a callback to execute when mouse leaves the chart.
     */
    onmouseout?(): void;

    /**
     * Set a callback to execute when user resizes the screen.
     */
    onresize?(): void;

    /**
     * Set a callback to execute when screen resize finished.
     */
    onresized?(): void;

    data: Data;

    axis?: Axis;

    grid?: Grid;

    /**
     * Show rectangles inside the chart.
     * This option accepts array including object that has axis, start, end and class. The keys start, end and class are optional.
     * axis must be x, y or y2. start and end should be the value where regions start and end. If not specified, the edge values will be used. If timeseries x axis, date string, Date object and
     * unixtime integer can be used. If class is set, the region element will have it as class.
     */
    regions?: RegionOptions[];

    legend?: LegendOptions;

    tooltip?: TooltipOptions;

    subchart?: SubchartOptions;

    zoom?: ZoomOptions;

    point?: PointOptions;

    line?: {
        /**
         * Set if null data point will be connected or not.
         * If true set, the region of null data will be connected without any data point. If false set, the region of null data will not be connected and get empty.
         */
        connectNull?: boolean;
        /**
         * Change step type for step chart. 'step', 'step-before' and 'step-after' can be used.
         */
        step?: {
            type: string;
        };
    };

    area?: {
        /**
         * Set if min or max value will be 0 on area chart.
         */
        zerobased?: boolean;
    };

    bar?: {
        /**
         * Change the width of bar chart. If ratio is specified, change the width of bar chart by ratio.
         */
        width?: number | {
            /**
             * Set the width of each bar by ratio
             */
            ratio: number,
            /**
             * Set max width of each bar
             */
            max?: number
        };
        /**
         * Set if min or max value will be 0 on bar chart.
         */
        zerobased?: boolean;
        /**
         * Set space between bars in bar charts
         */
        space?: number;
    };

    pie?: {
        label?: {
            /**
             * Show or hide label on each pie piece.
             */
            show?: boolean;
            /**
             * Set formatter for the label on each pie piece.
             */
            format?(value: number, ratio: number, id: string): string;
            /**
             * Set threshold to show/hide labels.
             */
            threshold?: number
        };
        /**
         * Enable or disable expanding pie pieces.
         */
        expand?: boolean;
    };

    donut?: {
        label?: {
            /**
             * Show or hide label on each donut piece.
             */
            show?: boolean;
            /**
             * Set formatter for the label on each donut piece.
             */
            format?(value: number, ratio: number, id: string): string;
            /**
             * Set threshold to show/hide labels.
             */
            threshold?: number
        };
        /**
         * Enable or disable expanding pie pieces.
         */
        expand?: boolean;
        /**
         * Set width of donut chart.
         */
        width?: number;
        /**
         * Set title of donut chart.
         */
        title?: string;
    };

    gauge?: {
        label?: {
            /**
             * Show or hide label on gauge.
             */
            show?: boolean;
            /**
             * Set formatter for the label on gauge.
             */
            format?(value: any, ratio: number): string;
        };
        /**
         * Enable or disable expanding gauge.
         */
        expand?: boolean;
        /**
         * Set min value of the gauge.
         */
        min?: number;
        /**
         * Set max value of the gauge.
         */
        max?: number;
        /**
         * Set units of the gauge.
         */
        units?: string;
        /**
         * Set width of gauge chart.
         */
        width?: number;
    };

    spline?: {
        interpolation?: {
            /**
             * Set custom spline interpolation
             */
            type?: 'linear' | 'linear-closed' | 'basis' | 'basis-open' | 'basis-closed' | 'bundle' | 'cardinal' | 'cardinal-open' | 'cardinal-closed' | 'monotone';
        };
    };
}

export interface Data {
    /**
     * Load a CSV or JSON file from a URL. Note that this will not work if loading via the "file://" protocol as most browsers with block XMLHTTPRequests.
     */
    url?: string;
    /**
     * Parse a JSON object for data.
     */
    json?: {};
    /**
     * Load data from a multidimensional array, with the first element containing the data names, the following containing related data in that order.
     */
    rows?: PrimitiveArray[];
    /*
        * Load data from a multidimensional array, with each element containing an array consisting of a datum name and associated data values.
        */
    columns?: PrimitiveArray[];
    /**
     * Used if loading JSON via data.url
     */
    mimeType?: string;
    /**
     * Choose which JSON object keys correspond to desired data.
     */
    keys?: { x?: string; value: string[]; };
    /**
     * Specify the key of x values in the data.
     * We can show the data with non-index x values by this option. This option is required when the type of x axis is timeseries. If this option is set on category axis, the values of the data
     * on the key will be used for category names.
     */
    x?: string;
    /**
     * Specify the keys of the x values for each data.
     * This option can be used if we want to show the data that has different x values.
     */
    xs?: { [key: string]: string };
    /**
     * Set a format to parse string specifed as x.
     * Default is %Y-%m-%d
     */
    xFormat?: string;
    // xLocaltime?: any;
    // xSort?: any;
    /**
     * Set custom data name.
     */
    names?: { [key: string]: string };
    /**
     * Set custom data class.
     * If this option is specified, the element g for the data has an additional class that has the prefix c3-target- (e.g. c3-target-additional-data1-class).
     */
    classes?: { [key: string]: string };
    /**
     * Set groups for the data for stacking.
     */
    groups?: string[][];
    /**
     * Set y axis the data related to. y and y2 can be used.
     */
    axes?: { [key: string]: string };
    /**
     * Set chart type at once.
     * If this option is specified, the type will be applied to every data. This setting can be overwritten by data.types.
     * Available Values: line, spline, step, area, area-spline, area-step, bar, scatter, pie, donut, gauge
     */
    type?: string;
    /**
     * Set chart type for each data.
     * This setting overwrites data.type setting.
     */
    types?: { [key: string]: string };
    /**
     * Show labels on each data points or set formatter function for data labels.
     * The formatter function receives 4 arguments such as v, id, i, j and it must return a string that will be shown as the label. The arguments are:
     * - v is the value of the data point where the label is shown.
     * - id is the id of the data where the label is shown.
     * - i is the index of the data point where the label is shown.
     * - j is the sub index of the data point where the label is shown.
     * Formatter function can be defined for each data by specifying as an object and D3 formatter function can be set (e.g. d3.format('$'))
     */
    labels?: boolean |
    { format: FormatFunction } |
    { format: { [key: string]: FormatFunction } };
    /**
     * Define the order of the data.
     * This option changes the order of stacking the data and pieces of pie/donut. If null specified, it will be the order the data loaded. If function specified, it will be used to sort the data
     * and it will recieve the data as argument.
     * Available Values: desc, asc, function (data1, data2) { ... }, null
     */
    order?: string | ((...data: string[]) => void) | null;
    /**
     * Define regions for each data.
     * The values must be an array for each data and it should include an object that has start, end, style. If start is not set, the start will be the first data point. If end is not set, the
     * end will be the last data point.
     * Currently this option supports only line chart and dashed style. If this option specified, the line will be dashed only in the regions.
     */
    regions?: { [key: string]: any };
    /**
     * Set color converter function.
     * This option should a function and the specified function receives color (e.g. '#ff0000') and d that has data parameters like id, value, index, etc. And it must return a string that
     * represents color (e.g. '#00ff00').
     */
    color?(color: string, d: any): string | d3.Rgb;
    /**
     * Set color for each data.
     */
    colors?: { [key: string]: string | d3.Rgb | ((d: any) => string | d3.Rgb) };
    /**
     * Hide each data when the chart appears.
     * If true specified, all of data will be hidden. If multiple ids specified as an array, those will be hidden.
     */
    hide?: boolean | string[];
    /**
     * Set text displayed when empty data.
     */
    empty?: { label: { text: string } };

    selection?: {
        enabled?: boolean;
        grouped?: boolean;
        multiple?: boolean;
        draggable?: boolean;
        isselectable?(d?: any): boolean;
    };
    /**
     * Set a callback for click event on each data point.
     * This callback will be called when each data point clicked and will receive d and element as the arguments.
     * - d is the data clicked and element is the element clicked. In this callback, this will be the Chart object.
     */
    onclick?(d: any, element: any): void;
    /**
     * Set a callback for mouseover event on each data point.
     * This callback will be called when mouse cursor moves onto each data point and will receive d as the argument.
     * - d is the data where mouse cursor moves onto. In this callback, this will be the Chart object.
     */
    onmouseover?(d: any, element?: any): void;
    /**
     * Set a callback for mouseout event on each data point.
     * This callback will be called when mouse cursor moves out each data point and will receive d as the argument.
     * - d is the data where mouse cursor moves out. In this callback, this will be the Chart object.
     */
    onmouseout?(d: any, element?: any): void;

    onselected?(d: any, element?: any): void;

    onunselected?(d: any, element?: any): void;
}

export interface Axis {
    /**
     * Switch x and y axis position.
     */
    rotated?: boolean;
    x?: XAxisConfiguration;
    y?: YAxisConfiguration;
    y2?: YAxisConfiguration;
}

export interface XAxisConfiguration {
    /**
     * Show or hide x axis.
     */
    show?: boolean;
    /**
     * Set type of x axis (timeseries, category, indexed)
     */
    type?: string;
    /**
     * Set how to treat the timezone of x values.
     * If true, treat x value as localtime. If false, convert to UTC internally.
     */
    localtime?: boolean;
    /**
     * Set category names on category axis.
     * This must be an array that includes category names in string. If category names are included in the date by data.x option, this is not required.
     */
    categories?: string[];

    tick?: XTickConfiguration;
    /**
     * Set max value of x axis range.
     */
    max?: string | number | Date;
    /**
     * Set min value of x axis range.
     */
    min?: string | number | Date;
    /**
     * Set padding for x axis.
     * If this option is set, the range of x axis will increase/decrease according to the values. If no padding is needed in the ragen of x axis, 0 should be set. On category axis, this option
     * will be ignored.
     */
    padding?: {
        left?: number;
        right?: number;
    };
    /**
     * Set height of x axis.
     * The height of x axis can be set manually by this option. If you need more space for x axis, please use this option for that. The unit is pixel.
     */
    height?: number;
    /**
     * Set default extent for subchart and zoom. This can be an array or function that returns an array.
     */
    extent?: number[] | (() => number[]);
    /**
     * Set label on x axis.
     * You can set x axis label and change its position by this option. string and object can be passed and we can change the poisiton by passing object that has position key. Available position
     * differs according to the axis direction (vertical or horizontal). If string set, the position will be the default.
     * Valid horizontal positions: inner-right (Default), inner-center, inner-left, outer-right, outer-center, outer-left
     * Valid vertical positions: inner-top, inner-middle, inner-bottom, outer-top, outer-middle, outer-bottom
     */
    label?: string | { text: string; position: string };
}

export interface YAxisConfiguration {
    /**
     * Show or hide y axis.
     */
    show?: boolean;
    /**
     * Show y axis inside of the chart.
     */
    inner?: boolean;
    /**
     * Set max value of y axis.
     */
    max?: number;
    /**
     * Set min value of y axis.
     */
    min?: number;
    /**
     * Change the direction of y axis.
     * If true set, the direction will be from the top to the bottom.
     */
    inverted?: boolean;
    /**
     * Set center value of y axis.
     */
    center?: number;
    /**
     * Set label on y axis. This option works in the same way as axis.x.label.
     * Valid horizontal positions: inner-right (Default), inner-center, inner-left, outer-right, outer-center, outer-left
     * Valid vertical positions: inner-top, inner-middle, inner-bottom, outer-top, outer-middle, outer-bottom
     */
    label?: string | { text: string; position: string };
    tick?: YTickConfiguration;
    /**
     * Set padding for y axis.
     * You can set padding for y axis to create more space on the edge of the axis. This option accepts object and it can include top and bottom. top, bottom will be treated as pixels.
     */
    padding?: {
        top?: number;
        bottom?: number;
    };
    /**
     * Set default range of y axis. This option set the default value for y axis when there is no data on init.
     */
    default?: number[];
}

export interface XTickConfiguration {
    /**
     * Centerise ticks on category axis
     */
    centered?: boolean;
    /**
     * A function to format tick value. Format string is also available for timeseries data.
     */
    format?: string | ((x: number | Date) => string | number);
    /**
     * Setting for culling ticks.
     * If true is set, the ticks will be culled, then only limitted tick text will be shown. This option does not hide the tick lines. If false is set, all of ticks will be shown.
     */
    culling?: boolean | CullingConfiguration;
    /**
     * The number of x axis ticks to show.
     * This option hides tick lines together with tick text. If this option is used on timeseries axis, the ticks position will be determined precisely and not nicely positioned (e.g. it will
     * have rough second value).
     */
    count?: number;
    /**
     * Fit x axis ticks.
     * If true set, the ticks will be positioned nicely. If false set, the ticks will be positioned according to x value of the data points.
     */
    fit?: boolean;
    /**
     * Set the x values of ticks manually.
     * If this option is provided, the position of the ticks will be determined based on those values. This option works with timeseries data and the x values will be parsed accoding to the type
     * of the value and data.xFormat option.
     */
    values?: number[] | string[];
    /**
     * Rotate x axis tick text. If you set negative value, it will rotate to opposite direction.
     */
    rotate?: number;
    /**
     * Show x axis outer tick.
     */
    outer?: boolean;
    multiline?: boolean; // Undocumented
}

export interface YTickConfiguration {
    /**
     * Set formatter for y axis tick text.
     * This option accepts d3.format object as well as a function you define.
     */
    format?(x: number): string;
    /**
     * Show or hide outer tick.
     */
    outer?: boolean;
    /**
     * Set the y values of ticks manually.
     */
    values?: number[];
    /**
     * The number of y axis ticks to show.
     * The position of the ticks will be calculated precisely, so the values on the ticks will not be rounded nicely. In the case, axis.y.tick.format or axis.y.tick.values will be helpful.
     */
    count?: number;
}

export interface CullingConfiguration {
    /**
     * The number of tick texts will be adjusted to less than this value.
     */
    max: number;
}

export interface Grid {
    x?: {
        /**
         * Show grids along x axis.
         */
        show?: boolean;
        /**
         * Show additional grid lines along x axis.
         * This option accepts array including object that has value, text, position and class. text, position and class are optional. For position, start, middle and end (default) are available.
         * If x axis is category axis, value can be category name. If x axis is timeseries axis, value can be date string, Date object and unixtime integer.
         */
        lines?: LineOptions[];
    };
    y?: {
        /**
         * Show grids along y axis.
         */
        show?: boolean;
        /**
         * Show additional grid lines along y axis.
         * This option accepts array including object that has value, text, position and class.
         */
        lines?: LineOptions[];
    };
}

export interface LineOptions {
    value: string | number | Date;
    text?: string;
    axis?: string;
    position?: string;
    class?: string;
}

export interface RegionOptions {
    axis?: string;
    start?: string | number | Date;
    end?: string | number | Date;
    class?: string;
}

export interface LegendOptions {
    /**
     * Show or hide legend.
     */
    show?: boolean;
    /**
     * Hide legend
     * If true given, all legend will be hidden. If string or array given, only the legend that has the id will be hidden.
     */
    hide?: boolean | ArrayOrString;
    /**
     * Change the position of legend.
     * Currently bottom, right and inset are supported.
     */
    position?: string;
    /**
     * Change inset legend attributes.
     * This option accepts object that has the keys anchor, x, y and step.
     * anchor decides the position of the legend. These anchors are available: top-left, top-right, bottom-left, bottom-right
     * x and y set the position of the legend based on the anchor.
     * step defines the max step the lagend has (e.g. If 2 set and legend has 3 legend item, the legend 2 columns).
     */
    inset?: {
        anchor?: string;
        x?: number;
        y?: number;
        step?: number;
    };

    item?: {
        /**
         * Set click event handler to the legend item.
         */
        onclick?(id: any): void;
        /**
         * Set mouseover event handler to the legend item.
         */
        onmouseover?(id: any): void;
        /**
         * Set mouseout event handler to the legend item.
         */
        onmouseout?(id: any): void;
    };
}

export interface TooltipOptions {
    /**
     * Show or hide tooltip.
     */
    show?: boolean;
    /**
     * Set if tooltip is grouped or not for the data points.
     */
    grouped?: boolean;
    format?: {
        /**
         * Set format for the title of tooltip. Specified function receives x of the data point to show.
         */
        title?(x: any): string;
        /**
         * Set format for the name of each data in tooltip. Specified function receives name, ratio, id and index of the data point to show. ratio will be undefined if the chart is not
         * donut/pie/gauge.
         */
        name?(name: string, ratio: number, id: string, index: number): string;
        /**
         * Set format for the value of each data in tooltip.
         * Specified function receives name, ratio, id and index of the data point to show. ratio will be undefined if the chart is not donut/pie/gauge.
         * If undefined returned, the row of that value will be skipped.
         */
        value?(value: any, ratio: number, id: string, index: number): string;
    };
    /**
     * Set custom position for the tooltip. This option can be used to modify the tooltip position by returning object that has top and left.
     */
    position?(data: any, width: number, height: number, element: any): { top: number; left: number };
    /**
     * Set custom HTML for the tooltip.
     * Specified function receives data, defaultTitleFormat, defaultValueFormat and color of the data point to show. If tooltip.grouped is true, data includes multiple data points.
     */
    contents?(data: any, defaultTitleFormat: string, defaultValueFormat: string, color: any): string;
}

export interface SubchartOptions {
    /**
     * Show sub chart on the bottom of the chart.
     */
    show?: boolean;
    size?: {
        /**
         * Change the height of the subchart.
         */
        height: number;
    };
    /**
     * Set callback for brush event.
     * Specified function receives the current zoomed x domain.
     */
    onbrush?(domain: any): void;
}

export interface ZoomOptions {
    /**
     * Enable zooming.
     */
    enabled?: boolean;
    /**
     * Enable to rescale after zooming. If true set, y domain will be updated according to the zoomed region.
     */
    rescale?: boolean;
    /**
     * Change zoom extent.
     */
    extent?: [number, number];
    /**
     * Set callback that is called when the chart is zooming. Specified function receives the zoomed domain.
     */
    onzoom?(domain: any): void;
    /**
     * Set callback that is called when zooming starts. Specified function receives the zoom event.
     */
    onzoomstart?(event: Event): void;
    /**
     * Set callback that is called when zooming ends. Specified function receives the zoomed domain.
     */
    onzoomend?(domain: any): void;
}

export interface PointOptions {
    /**
     * Whether to show each point in line.
     */
    show?: boolean;
    /**
     * The radius size of each point.
     */
    r?: number | ((d: any) => number);

    focus?: {
        expand: {
            /**
             * Whether to expand each point on focus.
             */
            enabled?: boolean;
            /**
             * The radius size of each point on focus.
             */
            r?: number
        };
    };

    select?: {
        /**
         * The radius size of each point on selected.
         */
        r?: number;
    };
}

export interface ChartAPI {
    /**
     * This API highlights specified targets and fade out the others.
     * You can specify multiple targets by giving an array that includes id as String. If no argument is given, all of targets will be highlighted.
     */
    focus(targetIds?: ArrayOrString): void;
    /**
     * This API fades out specified targets and reverts the others.
     * You can specify multiple targets by giving an array that includes id as String. If no argument is given, all of targets will be faded out.
     */
    defocus(targetIds?: ArrayOrString): void;
    /**
     * This API reverts specified targets.
     * You can specify multiple targets by giving an array that includes id as String. If no argument is given, all of targets will be reverted.
     */
    revert(targetIds?: ArrayOrString): void;

    /**
     * This API shows specified targets.
     * You can specify multiple targets by giving an array that includes id as String. If no argument is given, all of targets will be shown.
     * If withLegend is set true, legend will be shown together with the specified data.
     */
    show(targetIds?: ArrayOrString, options?: { withLegend: boolean }): void;
    /**
     * This API hides specified targets.
     * You can specify multiple targets by giving an array that includes id as String. If no argument is given, all of targets will be hidden.
     * If withLegend is set true, legend will be hidden together with the specified data.
     */
    hide(targetIds?: ArrayOrString, options?: { withLegend: boolean }): void;
    /**
     * This API toggles (shows or hides) specified targets.
     * You can specify multiple targets by giving an array that includes id as String. If no argument is given, all of targets will be toggles.
     * If withLegend is set true, legend will be toggled together with the specified data.
     */
    toggle(targetIds?: ArrayOrString, options?: { withLegend: boolean }): void;
    /**
     * Load data to the chart.
     * If url, json, rows and columns given, the data will be loaded. If data that has the same target id is given, the chart will be updated. Otherwise, new target will be added.
     * If classes given, the classes specifed by data.classes will be updated. classes must be Object that has target id as keys.
     * If categories given, the categories specifed by axis.x.categories or data.x will be updated. categories must be Array.
     * If axes given, the axes specifed by data.axes will be updated. axes must be Object that has target id as keys.
     * If colors given, the colors specifed by data.colors will be updated. colors must be Object that has target id as keys.
     * If type or types given, the type of targets will be updated. type must be String and types must be Object.
     * If unload given, data will be unloaded before loading new data. If true given, all of data will be unloaded. If target ids given as String or Array, specified targets will be unloaded.
     * If done given, the specified function will be called after data loded.
     * NOTE: unload should be used if some data needs to be unloaded simultaneously. If you call unload API soon after/before load instead of unload param, chart will not be rendered properly
     * because of cancel of animation.
     * NOTE: done will be called after data loaded, but it's not after rendering. It's because rendering will finish after some transition and there is some time lag between loading and rendering.
     */
    load(args: {
        url?: string;
        json?: {};
        keys?: { x?: string; value: string[]; }
        rows?: PrimitiveArray[];
        columns?: PrimitiveArray[];
        names?: { [key: string]: string };
        classes?: { [key: string]: string };
        categories?: string[];
        axes?: { [key: string]: string };
        colors?: { [key: string]: string | d3.Rgb };
        type?: string;
        types?: { [key: string]: string };
        unload?: boolean | ArrayOrString;
        done?(): any;
    }): void;
    /**
     * Unload data to the chart.
     * You can specify multiple targets by giving an array that includes id as String. If no argument is given, all of targets will be toggles.
     * If ids given, the data that has specified target id will be unloaded. ids should be String or Array. If ids is not specified, all data will be unloaded.
     * If done given, the specified function will be called after data loded.
     * NOTE: If you call load API soon after/before unload, unload param of load should be used. Otherwise chart will not be rendered properly because of cancel of animation.
     * NOTE: done will be called after data loaded, but it's not after rendering. It's because rendering will finish after some transition and there is some time lag between loading and rendering.
     */
    unload(targetIds?: TargetIds, done?: () => any): any;
    /**
     * Flow data to the chart. By this API, you can append new data points to the chart.
     * If json, rows and columns given, the data will be loaded. If data that has the same target id is given, the chart will be appended. Otherwise, new target will be added. One of these is
     * required when calling. If json specified, keys is required as well as data.json
     * If to is given, the lower x edge will move to that point. If not given, the lower x edge will move by the number of given data points.
     * If length is given, the lower x edge will move by the number of this argument.
     * If duration is given, the duration of the transition will be specified value. If not given, transition.duration will be used as default.
     * If done is given, the specified function will be called when flow ends.
     */
    flow(args: {
        json?: {};
        keys?: { x?: string; value: string[]; }
        rows?: PrimitiveArray[];
        columns?: PrimitiveArray[];
        to?: any;
        length?: number;
        duration?: number;
        done?(): any;
    }): void;
    /**
     * Change data point state to selected. By this API, you can select data points. To use this API, data.selection.enabled needs to be set true.
     * @param ids Specify target ids to be selected. If this argument is not given, all targets will be the candidate.
     * @param indices Specify indices to be selected. If this argument is not given, all data points will be the candidate.
     * @param resetOthers If this argument is set true, the data points that are not specified by ids, indices will be unselected.
     */
    select(ids?: string[], indices?: number[], resetOthers?: boolean): void;
    /**
     * Change data point state to unselected. By this API, you can unselect data points. To use this API, data.selection.enabled needs to be set true.
     * @param ids Specify target ids to be unselected. If this argument is not given, all targets will be the candidate.
     * @param indices Specify indices to be unselected. If this argument is not given, all data points will be the candidate.
     */
    unselect(ids?: string[], indices?: number[]): void;
    /**
     * Get selected data points. By this API, you can get selected data points information. To use this API, data.selection.enabled needs to be set true.
     * @param targetId You can filter the result by giving target id that you want to get. If not given, all of data points will be returned.
     */
    selected(targetId?: string): Data;
    /**
     * Change the type of the chart.
     * @param type Specify the type to be transformed. The types listed in data.type can be used.
     * @param targetIds Specify targets to be transformed. If not given, all targets will be the candidate.
     */
    transform(type: string, targetIds?: ArrayOrString): void;
    /**
     * Update groups for the targets.
     * @param groups This argument needs to be an Array that includes one or more Array that includes target ids to be grouped.
     */
    groups(groups: string[][]): void;

    xgrids: GridOperations;

    ygrids: GridOperations;

    regions: {
        /**
         * Update regions.
         * @param regions Regions will be replaced with this argument. The format of this argument is the same as regions.
         */
        (regions: any[]): void;
        /**
         * Add new region. This API adds new region instead of replacing like regions.
         * @param grids New region will be added. The format of this argument is the same as regions and it's possible to give an Object if only one region will be added.
         */
        add(regions: any[] | {}): void;
        /**
         * Remove regions. This API removes regions.
         * @param args This argument should include classes. If classes is given, the regions that have one of the specified classes will be removed. If args is not given, all of regions will be
         * removed.
         */
        remove(args?: { value?: number | string; class?: string }): void;
    };

    data: {
        /**
         * Get data loaded in the chart.
         * @param targetIds If this argument is given, this API returns the specified target data. If this argument is not given, all of data will be returned.
         */
        (targetIds?: ArrayOrString): Data;
        /**
         * Get data shown in the chart.
         * @param targetIds If this argument is given, this API filters the data with specified target ids. If this argument is not given, all shown data will be returned.
         */
        shown(targetIds?: ArrayOrString): Data;
        /**
         * Get values of the data loaded in the chart.
         * @param targetIds This API returns the values of specified target. If this argument is not given, null will be retruned.
         */
        values(targetIds?: ArrayOrString): any[];
        /**
         * Get and set names of the data loaded in the chart.
         * @param names If this argument is given, the names of data will be updated. If not given, the current names will be returned. The format of this argument is the same as data.names.
         */
        names(names?: { [key: string]: string }): { [key: string]: string };
        /**
         * Get and set colors of the data loaded in the chart.
         * @param colors If this argument is given, the colors of data will be updated. If not given, the current colors will be returned. The format of this argument is the same as data.colors.
         */
        colors(colors?: { [key: string]: string | d3.Rgb }): { [key: string]: string };
        /**
         * Get and set axes of the data loaded in the chart.
         * @param axes If this argument is given, the axes of data will be updated. If not given, the current axes will be returned. The format of this argument is the same as data.axes.
         */
        axes(axes?: { [key: string]: string }): { [key: string]: string };
    };

    /**
     * Gets and sets the value a category
     * @param index Index of the category to get or set
     * @param category: Value of the category to update
     */
    category(index: number, category?: string): string;

    /**
     * Get and set the categories
     * @param categories: Value of the categories to update
     */
    categories(categories?: string[]): string[];

    /**
     * Get the color for the specified targetId
     */
    color(targetId: string): string;

    /**
     * Get and set x values for the chart.
     * @param x If x is given, x values of every target will be updated. If no argument is given, current x values will be returned as an Object whose keys are the target ids.
     */
    x(x?: PrimitiveArray): PrimitiveArray;

    /**
     * Get and set x values for the chart.
     * @param x If x is given, x values of every target will be updated. If no argument is given, current x values will be returned as an Object whose keys are the target ids.
     */
    xs(xs?: { [key: string]: PrimitiveArray }): { [key: string]: PrimitiveArray };

    axis: {
        /**
         * Get and set axis labels.
         * @param labels If labels is given, specified axis' label will be updated.
         */
        labels(labels?: { [key: string]: string }): { [key: string]: string }
        /**
         * Get and set axis min value.
         * @param min If min is given, specified axis' min value will be updated. If no argument is given, the current min values for each axis will be returned.
         */
        min(min?: number | { [key: string]: number }): number | { [key: string]: number }
        /**
         * Get and set axis max value.
         * @param max If max is given, specified axis' max value will be updated. If no argument is given, the current max values for each axis will be returned.
         */
        max(max?: number | { [key: string]: number }): number | { [key: string]: number }
        /**
         * Get and set axis min and max value.
         * @param range If range is given, specified axis' min and max value will be updated. If no argument is given, the current min and max values for each axis will be returned.
         */
        range(range?: { min?: number | { [key: string]: number }; max?: number | { [key: string]: number } }): { min: number | { [key: string]: number }; max: number | { [key: string]: number } }
    };

    legend: {
        /**
         * Show legend for each target.
         * @param targetIds If targetIds is given, specified target's legend will be shown. If only one target is the candidate, String can be passed. If no argument is given, all of target's
         * legend will be shown.
         */
        show(targetIds?: ArrayOrString): void;
        /**
         * Hide legend for each target.
         * @param targetIds If targetIds is given, specified target's legend will be hidden. If only one target is the candidate, String can be passed. If no argument is given, all of target's
         * legend will be hidden.
         */
        hide(targetIds?: ArrayOrString): void;
    };

    zoom: {
        /**
         * Zoom by giving x domain.
         * @param domain If domain is given, the chart will be zoomed to the given domain. If no argument is given, the current zoomed domain will be returned.
         */
        (domain?: number[]): number[];

        /**
         * Enable and disable zooming.
         * @param enabled If enabled is true, the feature of zooming will be enabled. If false is given, it will be disabled.
         */
        enable(enabled: boolean): void;
    };

    /**
     * Unzoom to the original domain.
     */
    unzoom(): void;

    /**
     * Resize the chart. If no size is specified it will resize to fit.
     * @param size This argument should include width and height in pixels.
     */
    resize(size?: { width?: number; height?: number }): void;

    /**
     * Force to redraw.
     */
    flush(): void;

    /**
     * Reset the chart object and remove element and events completely.
     */
    destroy(): void;
}

export interface GridOperations {
    /**
     * Update the x/y grid lines.
     * @param grids X/Y grid lines will be replaced with this argument. The format of this argument is the same as grid.x.lines or grid.y.lines.
     */
    (grids: any[]): void;
    /**
     * Add x/y grid lines. This API adds new x/y grid lines instead of replacing like xgrids.
     * @param grids New x/y grid lines will be added. The format of this argument is the same as grid.x.lines or grid.y.lines and it's possible to give an Object if only one line will be added.
     */
    add(grids: any[] | {}): void;
    /**
     * Remove x/y grid lines. This API removes x/y grid lines.
     * @param args This argument should include value or class. If value is given, the x/y grid lines that have specified x/y value will be removed. If class is given, the x/y grid lines that
     * have specified class will be removed. If args is not given, all of x/y grid lines will be removed.
     */
    remove(args?: { class?: string; value?: number | string }): void;
}

export function generate(config: ChartConfiguration): ChartAPI;
