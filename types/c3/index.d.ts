// Type definitions for C3js 0.7
// Project: http://c3js.org/, https://github.com/c3js/c3
// Definitions by: Marc Climent <https://github.com/mcliment>
//                 Gerin Jacob <https://github.com/gerinjacob>
//                 Bernd Hacker <https://github.com/denyo>
//                 Dzmitry Shyndzin <https://github.com/dmitryshindin>
//                 Tim Niemueller <https://github.com/timn>
//                 Nate Mara <https://github.com/natemara>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as d3 from 'd3';

export as namespace c3;

export type Primitive = string | boolean | number | null;
export type PrimitiveArray = Array<string | boolean | number | null>;
export type FormatFunction = (v: any, id: string, i: number, j: number) => void;

export interface TargetIds {
    ids: ArrayOrString;
}

export type ArrayOrString = string[] | string;

export type YAxisName = "y" | "y2";
export type AxisName = "x" | YAxisName;

export interface ChartConfiguration {
    /**
     * The CSS selector or the element which the chart will be set to. D3 selection object can be specified. If other chart is set already, it will be replaced with the new one (only one chart
     * can be set in one element).
     * If this option is not specified, the chart will be generated but not be set. Instead, we can access the element by chart.element and set it by ourselves.
     * Note: When chart is not binded, c3 starts observing if chart.element is binded by MutationObserver. In this case, polyfill is required in IE9 and IE10 becuase they do not support
     * MutationObserver. On the other hand, if chart always will be binded, polyfill will not be required because MutationObserver will never be called.
     */
    bindto?: string | HTMLElement | d3.Selection<any, any, any, any> | null;
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
        width?:
            | number
            | {
                  /**
                   * Set the width of each bar by ratio
                   */
                  ratio: number;
                  /**
                   * Set max width of each bar
                   */
                  max?: number;
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
            threshold?: number;
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
            threshold?: number;
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
        /**
         * Whether this should be displayed
         * as a full circle instead of a
         * half circle.
         */
        fullCircle?: boolean;
    };

    spline?: {
        interpolation?: {
            /**
             * Set custom spline interpolation
             */
            type?:
                | 'linear'
                | 'linear-closed'
                | 'basis'
                | 'basis-open'
                | 'basis-closed'
                | 'bundle'
                | 'cardinal'
                | 'cardinal-open'
                | 'cardinal-closed'
                | 'monotone';
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
    json?: Record<string | number, unknown>;
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
    keys?: { x?: string; value: string[] };
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
    axes?: { [key in YAxisName]?: string };
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
    labels?:
        | boolean
        | { format: FormatFunction }
        | { format: { [key: string]: FormatFunction } };
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
    color?(color: string, d: any): string | d3.RGBColor | d3.HSLColor;
    /**
     * Set color for each data.
     */
    colors?: {
        [key: string]:
            | string
            | d3.RGBColor
            | d3.HSLColor
            | ((d: any) => string | d3.RGBColor | d3.HSLColor);
    };
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

export type Axis = {
    [key in YAxisName]?: YAxisConfiguration;
} & {
    /**
     * Switch x and y axis position.
     */
    rotated?: boolean;
    x?: XAxisConfiguration;
};

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
    /**
     * Set width of x axis tick.
     */
    width?: number;
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
    axis?: AxisName;
    position?: string;
    class?: string;
}

export interface RegionOptions {
    /**
     * The axis on which `start` and `end` values lie.
     */
    axis?: AxisName;
    /**
     * The point on the axis at which to start the region. If not provided, will
     * use the start edge of the axis.
     */
    start?: string | number | Date;
    /**
     * The point on the axis at which to end the region. If not provided, will
     * use the end edge of the axis.
     */
    end?: string | number | Date;
    /**
     * An optional class to apply to the region, which can be used for styling
     * or targeting.
     */
    class?: string;
    /**
     * Control the opacity of the region area.
     */
    opacity?: number;
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
    /**
     * Padding between legend elements.
     */
    padding?: number;

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
        /**
         * Tile settings for legend color display.
         */
        tile?: {
            /**
             * Tile width.
             */
            width?: number;
            /**
             * Tile height
             */
            height?: number;
        };
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
    position?(
        data: any,
        width: number,
        height: number,
        element: any,
    ): { top: number; left: number };
    /**
     * Set custom HTML for the tooltip.
     * Specified function receives data, defaultTitleFormat, defaultValueFormat and color of the data point to show. If tooltip.grouped is true, data includes multiple data points.
     */
    contents?(
        data: any,
        defaultTitleFormat: string,
        defaultValueFormat: string,
        color: any,
    ): string;
    /**
     * Set tooltip values order
     * Available Values: desc, asc, any[], function (data1, data2) { ... }, null
     */
    order?: string | any[] | ((data1: any, data2: any) => number) | null;
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
     * Set interaction type for zooming
     */
    type?: 'scroll' | 'drag';
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

    /**
     * How sensitive is each point to mouse cursor hover
     */
    sensitivity?: number;

    focus?: {
        expand: {
            /**
             * Whether to expand each point on focus.
             */
            enabled?: boolean;
            /**
             * The radius size of each point on focus.
             */
            r?: number;
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
     * NOTE: unload should be used if some data needs to be unloaded simultaneously. If you call unload API soon after/before load instead of unload param, chart will not be rendered properly
     * because of cancel of animation.
     * NOTE: done will be called after data loaded, but it's not after rendering. It's because rendering will finish after some transition and there is some time lag between loading and rendering.
     */
    load(args: {
        /** Data to load. */
        data?: Data;
        /** API url to load data from. If `data` is provided this will be ignored. */
        url?: string;
        /** An object to convert to data to load. Can be in the column form `{key1: [val1, val2, ...]; ...}` or in the row form `[{key1: val1; key2: val2}, ...]`. If `data` or `url` are provided this will be ignored. */
        json?: Record<string, PrimitiveArray> | Record<string, Primitive>[];
        /** If json is provided and is in row form, these keys are used to pull the data from each row. */
        keys?: {
            /** This is the key for the x-value in each row. */
            x?: string;
            /** List of remaining keys (besides the x key) to pull data for. */
            value: string[];
        };
        /** A list of rows, where the first row is the column names and the remaining rows are data.  If `data`, `url`, or `json` are provided this will be ignored.  this is ignored. */
        rows?: PrimitiveArray[];
        /** A list of columns, where the first element in each column is the ID and the remaining elements are data. If `data`, `url`, `json`, or 'rows' are provided, this will be ignored. */
        columns?: PrimitiveArray[];
        /** Match x columns to the corresponding data columns. */
        xs?: Record<string, string>;
        /** Match loaded data IDs with display names. */
        names?: Record<string, string>;
        /** If classes given, the classes specifed by `data.classes` will be updated. Keys should be data IDs and values should be classes to assign. */
        classes?: Record<string, string>;
        /** Array of arrays of data IDs. IDs that share a sub-array will be categorized together. */
        categories?: string[][];
        /** Match data IDs to their axes. */
        axes?: Record<string, AxisName>;
        /** Match data IDs to the colors to render that data as. */
        colors?: Record<string, string | d3.RGBColor | d3.HSLColor>;
        /** Select the plot type for the loaded data. */
        type?: string;
        /** Select the plot types for each individual data by ID. */
        types?: Record<string, string>;
        /** ID of data to remove, or list of IDs of data to remove, or `true` to remove all data. */
        unload?: true | ArrayOrString;
        /** Called when loading completes. */
        done?(): any;
    }): void;
    /**
     * Unload data from the chart.
     * @param args If given, will unload the data with the ids that match the string, the array of strings, or the `ids` argument of the object. If not given, will unload all data.
     * NOTE: If you call load API soon after/before unload, unload param of load should be used. Otherwise chart will not be rendered properly because of cancel of animation.
     */
    unload(args?: ArrayOrString | {
        ids?: ArrayOrString;
        /** Called after data is loaded, but not after rendering. This is because rendering will finish after some transition and there is some time lag between loading and rendering. */
        done(): any
    }): void;
    /**
     * Flow data to the chart. By this API, you can append new data points to the chart.
     * If data that has the same target id is given, the chart will be appended. Otherwise, new target will be added.
     * @param args The arguments object for this method.
     */
    flow(args: {
        /** An object to convert to data to load. Can be in the column form `{key1: [val1, val2, ...]; ...}` or in the row form `[{key1: val1; key2: val2}, ...]`. */
        json?: Record<string, PrimitiveArray> | Record<string, Primitive>[];
        /** If json is provided and is in row form, these keys are used to pull the data from each row. */
        keys?: {
            /** This is the key for the x-value in each row. */
            x?: string;
            /** List of remaining keys (besides the x key) to pull data for. */
            value: string[];
        };
        /** A list of rows, where the first row is the column names and the remaining rows are data. If this is provided and `json` is provided, this is ignored. */
        rows?: [string[], ...PrimitiveArray[]];
        /** A list of columns, where the first element in each column is the ID and the remaining elements are data. If `json` or `rows` are provided, this will be ignored. */
        columns?: [string, ...PrimitiveArray][];
        /** If given, the lower x edge will move to that point. If not given, the lower x edge will move by the number of given data points. */
        to?: string | number;
        /** If given, the lower x edge will move by the number of this argument. */
        length?: number;
        /** If given, the duration of the transition will be specified value. If not given, `transition.duration` will be used as default. */
        duration?: number;
        /** Will be called when the flow ends. */
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
     * @param groups An array of groups, each with an array of data IDs defining members of the groups.
     */
    groups(): string[][];
    groups<T extends string[][]>(groups: T): T;

    xgrids: GridOperations;

    ygrids: GridOperations;

    regions: {
        /**
         * Either get the regions or override the regions.
         * @param regions Regions will be replaced with this argument.
         * @returns The regions on the plot, after running this function.
         */
        (): RegionOptions[];
        <T extends RegionOptions[]>(regions: T): T;
        /**
         * Add new region. This API adds new region instead of replacing.
         * @param grids New region or regions to be added.
         * @returns The regions on the plot, after running this function.
         */
        add(): RegionOptions[];
        add(regions: RegionOptions | RegionOptions[]): RegionOptions[];
        /**
         * Remove regions from the chart.
         * @param args Arguments object. If not provided, removes all regions.
         * @returns The regions on the plot, after running this function.
         */
        remove(args?: {
            /** If provided, removes the regions that have all of the specified classes. Otherwise removes all regions. */
            classes?: string[];
            /** Transition duration for fade out. */
            duration?: number;
        }): RegionOptions[];
    };

    data: {
        /**
         * Get data loaded in the chart.
         * @param targetIds If this argument is given, this API returns the specified target data. If this argument is not given, all of data will be returned.
         */
        (targetIds?: ArrayOrString): DataSeries[];
        /**
         * Get data shown in the chart.
         * @param targetIds If this argument is given, this API filters the data with specified target ids. If this argument is not given, all shown data will be returned.
         */
        shown(targetIds?: ArrayOrString): DataSeries[];
        /**
         * Get values of the data loaded in the chart.
         * @param targetIds This API returns the values of specified target. If this argument is not given, null will be retruned.
         */
        values(targetIds?: ArrayOrString): number[] | null;
        /**
         * Set names of the data loaded in the chart.
         * @param names This is a map of current names to new names.
         * @returns Map of the old names to the new names. Only includes the names that were changed.
         */
        names(): {};
        names<T extends { [key: string]: string }>(names: T): T;
        /**
         * Get and set colors of the data loaded in the chart.
         * @param colors If this argument is given, the colors of data will be updated. If not given, the current colors will be returned. The format of this argument is the same as data.colors.
         * @returns A map of all data IDs to their current colors.
         */
        colors(colors?: {
            [key: string]: string | d3.RGBColor | d3.HSLColor;
        }): { [key: string]: string };
        /**
         * Get and set axes of the data loaded in the chart.
         * @param axes If this argument is given, the axes of data will be updated. This is a map of data IDs to their new axes' names.
         * @returns Map of the changed data IDs to their new axes' names.
         */
        axes(): {};
        axes<T extends { [key: string]: AxisName }>(axes: T): T;
    };

    /**
     * Get and/or set the value of a category.
     * @param i Index of the category to get or set.
     * @param category: Value to update the category to. If not provided, no change will be made.
     * @returns The value of the category after updating.
     */
    category(i: number, category?: string): string;

    /**
     * Get and/or set the categories.
     * @param categories: Value of the categories to update. If provided, will overwrite all categories. If not provided, no change will be made.
     * @returns The list of categories after updating.
     */
    categories(categories?: string[]): string[];

    /**
     * Get the color for the specified id.
     * @returns The color that the data series with the specified id has on the chart.
     */
    color(id: string): string;

    /**
     * Get and set x values for the chart.
     * @param x If x is given, x values of every target will be updated. If no argument is given, current x values will be returned as an Object whose keys are the target ids.
     */
    x(x?: PrimitiveArray): PrimitiveArray;

    /**
     * Get and set x values for the chart.
     * @param x If x is given, x values of every target will be updated. If no argument is given, current x values will be returned as an Object whose keys are the target ids.
     */
    xs(xs?: {
        [key: string]: PrimitiveArray;
    }): { [key: string]: PrimitiveArray };

    axis: {
        (): void;

        /**
         * Get and set axis labels.
         * @param labels If labels is given, specified axis' label will be updated.
         */
        labels(labels?: { [key in AxisName]?: string }): void;

        /**
         * Get and set axis min value.
         * @param min If an object is given, specified axis' min value will be updated. If a number is given, the min values for y and y2 will be updated.
         * @returns If `min` is *not* given, the current max values for each axis will be returned. Otherwise returns nothing.
         */
        min(): { [key in AxisName]: number };
        min(min: number | { [key in AxisName]?: number }): void;

        /**
         * Get and set axis max value.
         * @param max If an object is given, specified axis' max value will be updated. If a number is given, the max values for y and y2 will be updated.
         * @returns If `max` is *not* given, the current max values for each axis will be returned. Otherwise returns nothing.
         */
        max(): { [key in AxisName]: number };
        max(max: number | { [key in AxisName]?: number }): void;

        /**
         * Get and set axis min and max values.
         * @param range If range is given, specified axis' min and max value will be updated.
         * @returns If `range` is *not* given, returns the current min and max values for each axis.
         */
        range(): {
            min: { [key in AxisName]: number; };
            max: { [key in AxisName]: number; };
        };
        range(range: {
            min?: number | { [key in AxisName]?: number };
            max?: number | { [key in AxisName]?: number };
        }): void;
    };

    legend: {
        (): void;
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
    destroy(): null;

    internal: ChartInternal;
}

export interface ChartInternal {
    d3: typeof d3 | undefined;
    api: ChartAPI;
    config: InternalConfig;
    data: {
        targets: DataSeries[];
        [key: string]: unknown;
    };
    cache: unknown;
    axes: unknown;

    getDefaultConfig?: () => InternalConfig;
    additionalConfig?: Record<string | number, any>;
    loadConfig?: (config: Partial<InternalConfig>) => void;

    beforeInit?: () => void;
    afterInit?: () => void;
    init?: () => void;
    initParams?: () => void;
    initChartElements?: () => void;
    initWithData?: () => void;
    smoothLines?: (el: unknown[], type: string) => void;
    updateSizes?: () => void;
    updateTargets?: (targets: unknown) => void;
    showTargets?: () => void;
    redraw?: (options: RedrawOptions, transitions: unknown) => void;
    updateAndRedraw?: (options: UpdateAndRedrawOptions) => void;
    redrawWithoutRescale?: () => void;
    isTimeSeries?: () => boolean;
    isCategorized?: () => boolean;
    isCustomX?: () => boolean;
    isTimeSeriesY?: () => boolean;
    getTranslate?: (target: 'main' | 'context' | 'legend' | AxisName | 'subx' | 'arc') => string;
    initialOpacity?: (d: Record<string, unknown>) => 1 | 0;
    initialOpacityForCircle?: (d: Record<string, unknown>) => number;
    opacityForCircle?: (d: Record<string, unknown>) => number;
    opacityForText?: () => 1 | 0;
    xx?: (d: Record<string, unknown>) => unknown | null;
    xvCustom?: (d: Record<string | number, unknown>, xyValue: number | string | undefined | null) => number;
    yvCustom?: (d: Record<string | number, unknown>, xyValue: number | string | undefined | null) => number;
    xv?: (d: Record<string, unknown>) => number;
    yv?: (d: Record<string, unknown>) => number;
    subxx?: (d: Record<string, unknown>) => unknown | null;
    transformMain?: (withTransition: boolean, transitions: Record<string, unknown>) => void;
    transformAll?: (withTransition: boolean, transitions: Record<string, unknown>) => void;
    updateSvgSize?: () => void;
    updateDimension?: (withoutAxis: boolean) => void;
    observeInserted?: <T extends { node: () => Node }>(selection: T) => void;

    /**
     * Binds handlers to the window resize event.
     */
    bindResize?: () => void;

    /**
     * Binds handlers to the window focus event.
     */
    bindWindowFocus?: () => void;

    /**
     * Unbinds from the window focus event.
     */
    unbindWindowFocus?: () => void;

    generateResize?: <T = () => any>() => {
        (): void;
        add: (f: () => any) => void;
        remove: (f: () => any) => void;
    };

    endall?: <
        S extends { on: (event: string, callback: () => void) => any }, 
        T extends { each: (callback: () => void) => S }
    >(
        transition: T,
        callback: (...args: any[]) => any
    ) => void;
    
    generateWait?: <T extends {empty: () => boolean; transition: () => any}>() => {
        (callback: () => any): void;
        add: (transition: T) => void;
    }

    parseDate?: (date: Date | string | object | number) => Date;
    isTabVisible?: () => boolean;
    getPathBox?: (path: SVGPathElement) => {
        x: number;
        y: number;
        width: number;
        height: number;
    };
    CLASS?: Classes;

    /** True if currently flowing. */
    flowing?: boolean;
    generateFlow?: (args: {
        targets: DataSeries[];
        flow: {
            index?: unknown;
            length?: unknown;
            duration?: number;
            done?: () => void;
        };
        drawBar?: unknown;
        drawLine?: unknown;
        drawArea?: unknown;
        cx?: unknown;
        cy?: unknown;
        xv?: unknown;
        xForText?: unknown;
        yForText?: unknown;
        /** If not provided, will use `flow.duration`. */
        duration?: number;
    }) => void;

    [key: string]: any;
}

export interface DataSeries {
    id?: string;
    id_org?: string;
    values: DataPoint[];
}

export interface DataPoint {
    x: number;
    value: number;
    id: string;
    index: number;
}

export interface DataPoint {

}

interface GenerateResizeReturn extends Function {
    add: (f: Function) => void;
    remove: (f: Function) => void;
}

export interface RedrawOptions {
    [key: string]: boolean
}

export interface UpdateAndRedrawOptions {
    [key: string]: boolean
}

export interface InternalConfig {
    bindto: unknown;
    svg_classname: string | undefined;
    size_width: number | undefined;
    size_height: number | undefined;
    padding_left: number | undefined;
    padding_right: number | undefined;
    padding_top: number | undefined;
    padding_bottom: number | undefined;
    resize_auto: boolean;
    zoom_enabled: boolean;
    zoom_initialRange: number | undefined;
    zoom_type: string;
    zoom_disableDefaultBehavior: boolean;
    zoom_privileged: boolean;
    zoom_rescale: boolean;
    zoom_onzoom: () => void;
    zoom_onzoomstart: () => void;
    zoom_onzoomend: () => void;
    zoom_x_min: number | undefined;
    zoom_x_max: number | undefined;
    interaction_brighten: boolean;
    interaction_enabled: boolean;
    onmouseover: () => void;
    onmouseout: () => void;
    onresize: () => void;
    onresized: () => void;
    oninit: () => void;
    onrendered: () => void;
    transition_duration: number;
    data_epochs: string;
    data_x: unknown | undefined;
    data_xs: Record<string | number, unknown>;
    data_xFormat: string;
    data_xLocaltime: boolean;
    data_xSort: boolean;
    data_idConverter: <T extends unknown>(id: T) => T;
    data_names: Record<string | number, unknown>;
    data_classes: Record<string | number, unknown>;
    data_groups: unknown[];
    data_axes: Record<string | number, unknown>;
    data_type: unknown | undefined;
    data_types: Record<string | number, unknown>;
    data_labels: Record<string | number, unknown>;
    data_order: 'desc';
    data_regions: Record<string | number, unknown>;
    data_color: unknown | undefined;
    data_colors: Record<string | number, unknown>;
    data_hide: boolean;
    data_filter: unknown | undefined;
    data_selection_enabled: boolean;
    data_selection_grouped: boolean;
    data_selection_isselectable: () => boolean;
    data_selection_multiple: boolean;
    data_selection_draggable: boolean;
    data_onclick: () => void;
    data_onmouseover: () => void;
    data_onmouseout: () => void;
    data_onselected: () => void;
    data_onunselected: () => void;
    data_url: unknown | undefined;
    data_headers: unknown | undefined;
    data_json: unknown | undefined;
    data_rows: unknown | undefined;
    data_columns: unknown | undefined;
    data_mimeType: unknown | undefined;
    data_keys: unknown | undefined;

    data_empty_label_text: string;

    subchart_show: boolean;
    subchart_size_height: number;
    subchart_axis_x_show: boolean;
    subchart_onbrush: () => void;

    color_pattern: unknown[];
    color_threshold: Record<string | number, unknown>;

    legend_show: boolean;
    legend_hide: boolean;
    legend_position: string;
    legend_inset_anchor: string;
    legend_inset_x: number;
    legend_inset_y: number;
    legend_inset_step: unknown | undefined;
    legend_item_onclick: unknown | undefined;
    legend_item_onmouseover: unknown | undefined;
    legend_item_onmouseout: unknown | undefined;
    legend_equally: boolean;
    legend_padding: number;
    legend_item_tile_width: number;
    legend_item_tile_height: number;

    axis_rotated: boolean;
    axis_x_show: boolean;
    axis_x_type: string;
    axis_x_localtime: boolean;
    axis_x_categories: unknown[];
    axis_x_tick_centered: boolean;
    axis_x_tick_format: unknown | undefined;
    axis_x_tick_culling: Record<string | number, unknown>;
    axis_x_tick_culling_max: number;
    axis_x_tick_count: unknown | undefined;
    axis_x_tick_fit: boolean;
    axis_x_tick_values: unknown | null;
    axis_x_tick_rotate: number;
    axis_x_tick_outer: boolean;
    axis_x_tick_multiline: boolean;
    axis_x_tick_multilineMax: number;
    axis_x_tick_width: unknown | null;
    axis_x_max: unknown | undefined;
    axis_x_min: unknown | undefined;
    axis_x_padding: Record<string | number, unknown>;
    axis_x_height: unknown | undefined;
    axis_x_selection: unknown | undefined;
    axis_x_label: Record<string | number, unknown>;
    axis_x_inner: unknown | undefined;
    axis_y_show: boolean;
    axis_y_type: unknown | undefined;
    axis_y_max: unknown | undefined;
    axis_y_min: unknown | undefined;
    axis_y_inverted: boolean;
    axis_y_center: unknown | undefined;
    axis_y_inner: unknown | undefined;
    axis_y_label: Record<string | number, unknown>;
    axis_y_tick_format: unknown | undefined;
    axis_y_tick_outer: boolean;
    axis_y_tick_values: unknown | null;
    axis_y_tick_rotate: number;
    axis_y_tick_count: unknown | undefined;
    axis_y_tick_time_type: unknown | undefined;
    axis_y_tick_time_interval: unknown | undefined;
    axis_y_padding: Record<string | number, unknown>;
    axis_y_default: unknown | undefined;
    axis_y2_show: boolean;
    axis_y2_max: unknown | undefined;
    axis_y2_min: unknown | undefined;
    axis_y2_inverted: boolean;
    axis_y2_center: unknown | undefined;
    axis_y2_inner: unknown | undefined;
    axis_y2_label: Record<string | number, unknown>;
    axis_y2_tick_format: unknown | undefined;
    axis_y2_tick_outer: boolean;
    axis_y2_tick_values: unknown | null;
    axis_y2_tick_count: unknown | undefined;
    axis_y2_padding: Record<string | number, unknown>;
    axis_y2_default: unknown | undefined;

    grid_x_show: boolean;
    grid_x_type: string;
    grid_x_lines: unknown[];
    grid_y_show: boolean;
    // not used
    // grid_y_type: string,

    grid_y_lines: unknown[];
    grid_y_ticks: number;
    grid_focus_show: boolean;
    grid_lines_front: boolean;

    point_show: boolean;
    point_r: number;
    point_sensitivity: number;
    point_focus_expand_enabled: boolean;
    point_focus_expand_r: unknown | undefined;
    point_select_r: unknown | undefined;

    line_connectNull: boolean;
    line_step_type: string;

    bar_width: unknown | undefined;
    bar_width_ratio: number;
    bar_width_max: unknown | undefined;
    bar_zerobased: boolean;
    bar_space: number;

    area_zerobased: boolean;
    area_above: boolean;

    pie_label_show: boolean;
    pie_label_format: unknown | undefined;
    pie_label_threshold: number;
    pie_label_ratio: unknown | undefined;
    pie_expand: Record<string | number, unknown>;
    pie_expand_duration: number;

    gauge_fullCircle: boolean;
    gauge_label_show: boolean;
    gauge_labelLine_show: boolean;
    gauge_label_format: unknown | undefined;
    gauge_min: number;
    gauge_max: number;
    gauge_startingAngle: number;
    gauge_label_extents: unknown | undefined;
    gauge_units: unknown | undefined;
    gauge_width: unknown | undefined;
    gauge_arcs_minWidth: number;
    gauge_expand: Record<string | number, unknown>;
    gauge_expand_duration: number;

    donut_label_show: boolean;
    donut_label_format: unknown | undefined;
    donut_label_threshold: number;
    donut_label_ratio: unknown | undefined;
    donut_width: unknown | undefined;
    donut_title: string;
    donut_expand: Record<string | number, unknown>;
    donut_expand_duration: number;

    spline_interpolation_type: string;

    stanford_lines: unknown[];
    stanford_regions: unknown[];
    stanford_texts: unknown[];
    stanford_scaleMin: unknown | undefined;
    stanford_scaleMax: unknown | undefined;
    stanford_scaleWidth: unknown | undefined;
    stanford_scaleFormat: unknown | undefined;
    stanford_scaleValues: unknown | undefined;
    stanford_colors: unknown | undefined;
    stanford_padding: {
        top: number;
        right: number;
        bottom: number;
        left: number;
    };

    regions: unknown[];

    tooltip_show: boolean;
    tooltip_grouped: boolean;
    tooltip_order: unknown | undefined;
    tooltip_format_title: unknown | undefined;
    tooltip_format_name: unknown | undefined;
    tooltip_format_value: unknown | undefined;
    tooltip_horizontal: unknown | undefined;
    tooltip_position: unknown | undefined;
    tooltip_contents: (d: unknown, defaultTitleFormat: unknown, defaultValueFormat: unknown, color: unknown) => string;
    tooltip_init_show: boolean;
    tooltip_init_x: number;
    tooltip_init_position: {
        top: string;
        left: string;
    };
    tooltip_onshow: () => void;
    tooltip_onhide: () => void;

    title_text: unknown | undefined;
    title_padding: {
        top: number;
        right: number;
        bottom: number;
        left: number;
    };
    title_position: string;

    [key: string]: any;
    [key: number]: any;
}

// Including the default strings doesn't affect typing (yet) but it could be useful
export interface Classes {
    target: 'c3-target' | string;
    chart: 'c3-chart' | string;
    chartLine: 'c3-chart-line' | string;
    chartLines: 'c3-chart-lines' | string;
    chartBar: 'c3-chart-bar' | string;
    chartBars: 'c3-chart-bars' | string;
    chartText: 'c3-chart-text' | string;
    chartTexts: 'c3-chart-texts' | string;
    chartArc: 'c3-chart-arc' | string;
    chartArcs: 'c3-chart-arcs' | string;
    chartArcsTitle: 'c3-chart-arcs-title' | string;
    chartArcsBackground: 'c3-chart-arcs-background' | string;
    chartArcsGaugeUnit: 'c3-chart-arcs-gauge-unit' | string;
    chartArcsGaugeMax: 'c3-chart-arcs-gauge-max' | string;
    chartArcsGaugeMin: 'c3-chart-arcs-gauge-min' | string;
    selectedCircle: 'c3-selected-circle' | string;
    selectedCircles: 'c3-selected-circles' | string;
    eventRect: 'c3-event-rect' | string;
    eventRects: 'c3-event-rects' | string;
    eventRectsSingle: 'c3-event-rects-single' | string;
    eventRectsMultiple: 'c3-event-rects-multiple' | string;
    zoomRect: 'c3-zoom-rect' | string;
    brush: 'c3-brush' | string;
    dragZoom: 'c3-drag-zoom' | string;
    focused: 'c3-focused' | string;
    defocused: 'c3-defocused' | string;
    region: 'c3-region' | string;
    regions: 'c3-regions' | string;
    title: 'c3-title' | string;
    tooltipContainer: 'c3-tooltip-container' | string;
    tooltip: 'c3-tooltip' | string;
    tooltipName: 'c3-tooltip-name' | string;
    shape: 'c3-shape' | string;
    shapes: 'c3-shapes' | string;
    line: 'c3-line' | string;
    lines: 'c3-lines' | string;
    bar: 'c3-bar' | string;
    bars: 'c3-bars' | string;
    circle: 'c3-circle' | string;
    circles: 'c3-circles' | string;
    arc: 'c3-arc' | string;
    arcLabelLine: 'c3-arc-label-line' | string;
    arcs: 'c3-arcs' | string;
    area: 'c3-area' | string;
    areas: 'c3-areas' | string;
    empty: 'c3-empty' | string;
    text: 'c3-text' | string;
    texts: 'c3-texts' | string;
    gaugeValue: 'c3-gauge-value' | string;
    grid: 'c3-grid' | string;
    gridLines: 'c3-grid-lines' | string;
    xgrid: 'c3-xgrid' | string;
    xgrids: 'c3-xgrids' | string;
    xgridLine: 'c3-xgrid-line' | string;
    xgridLines: 'c3-xgrid-lines' | string;
    xgridFocus: 'c3-xgrid-focus' | string;
    ygrid: 'c3-ygrid' | string;
    ygrids: 'c3-ygrids' | string;
    ygridLine: 'c3-ygrid-line' | string;
    ygridLines: 'c3-ygrid-lines' | string;
    colorScale: 'c3-colorscale' | string;
    stanfordElements: 'c3-stanford-elements' | string;
    stanfordLine: 'c3-stanford-line' | string;
    stanfordLines: 'c3-stanford-lines' | string;
    stanfordRegion: 'c3-stanford-region' | string;
    stanfordRegions: 'c3-stanford-regions' | string;
    stanfordText: 'c3-stanford-text' | string;
    stanfordTexts: 'c3-stanford-texts' | string;
    axis: 'c3-axis' | string;
    axisX: 'c3-axis-x' | string;
    axisXLabel: 'c3-axis-x-label' | string;
    axisY: 'c3-axis-y' | string;
    axisYLabel: 'c3-axis-y-label' | string;
    axisY2: 'c3-axis-y2' | string;
    axisY2Label: 'c3-axis-y2-label' | string;
    legendBackground: 'c3-legend-background' | string;
    legendItem: 'c3-legend-item' | string;
    legendItemEvent: 'c3-legend-item-event' | string;
    legendItemTile: 'c3-legend-item-tile' | string;
    legendItemHidden: 'c3-legend-item-hidden' | string;
    legendItemFocused: 'c3-legend-item-focused' | string;
    dragarea: 'c3-dragarea' | string;
    EXPANDED: '_expanded_' | string;
    SELECTED: '_selected_' | string;
    INCLUDED: '_included_' | string;
}

export interface GridOperations {
    /**
     * Update the grid lines.
     * @param grids Grid lines will be replaced with this argument.
     */
    (grids: LineOptions[]): LineOptions[];
    /**
     * Add grid lines. This API adds new grid lines instead of replacing.
     * @param grids New grid lines will be added. It's possible to give an Object if only one line will be added.
     */
    add(grids: LineOptions[] | LineOptions): LineOptions[];
    /**
     * Remove grid lines.
     * @param params Specifies which grid line to remove. If not given, all of x/y grid lines will be removed. If empty, none will be removed
     */
    remove(params?: {
        /** If provided, will remove all gridlines with this class. */
        class?: string;
        /** If provided, will remove all gridlines at this value. */
        value?: number | string;
    }): void;
}

export function generate(config: ChartConfiguration): ChartAPI;
