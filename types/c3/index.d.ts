// Type definitions for c3 0.7
// Project: http://c3js.org/, https://github.com/c3js/c3
// Definitions by: Marc Climent <https://github.com/mcliment>
//                 Gerin Jacob <https://github.com/gerinjacob>
//                 Bernd Hacker <https://github.com/denyo>
//                 Dzmitry Shyndzin <https://github.com/dmitryshindin>
//                 Tim Niemueller <https://github.com/timn>
//                 Nate Mara <https://github.com/natemara>
//                 Ian Sanders <https://github.com/iansan5653>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

import * as d3 from 'd3';

export as namespace c3;

export function generate(config: ChartConfiguration): ChartAPI;

export const version: string;

export type Primitive = string | boolean | number | Date | null;
export type PrimitiveArray = Primitive[];
export type ArrayOrSingle<T extends any> = T | T[];
export type ArrayOrString = ArrayOrSingle<string>;
/** Zoomed domain in the form `[minimum, maximum]` where `minimum` and `maximum` are the values at the edges of the visible x-axis. */
export type Domain = [number, number];

/**
 * Formatter function for data labels.
 * D3 formatter function can be set (e.g. `d3.format('$')`).
 * @param v The value of the data point where the label is shown.
 * @param id The id of the data where the label is shown.
 * @param i The index of the data point where the label is shown.
 * @param j The sub index of the data point where the label is shown.
 * @returns The formatted data label.
 */
export type FormatFunction = (v: number | {valueOf(): number}, id: string, i: number, j: number) => string;

export type YAxisName = "y" | "y2";
export type AxisName = "x" | YAxisName;
export type ChartType = "line" | "spline" | "step" | "area" | "area-spline" | "area-step" | "bar" | "scatter" | "stanford" | "pie" | "donut" | "gauge";

export interface SidePadding {
    /** Right padding. */
    right?: number;
    /** Left padding. */
    left?: number;
}
export interface Padding extends SidePadding {
    /** Top padding. */
    top?: number;
    /** Bottom padding. */
    bottom?: number;
}

export interface ChartConfiguration {
    /**
     * The CSS selector or the element which the chart will be set to. D3 selection object can be specified. If other chart is set already, it will be replaced with the new one (only one chart
     * can be set in one element).
     * If this option is not specified, the chart will be generated but not be set. Instead, we can access the element by chart.element and set it by ourselves.
     * Note: When chart is not binded, c3 starts observing if chart.element is binded by MutationObserver. In this case, polyfill is required in IE9 and IE10 becuase they do not support
     * MutationObserver. On the other hand, if chart always will be binded, polyfill will not be required because MutationObserver will never be called.
     */
    bindto?: string | HTMLElement | d3.Selection<any, any, any, any> | null;

    svg?: {
        /** Class to assign to the chart's container SVG element. */
        classname?: string;
    };

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

    padding?: Padding;

    resize?: {
        /**
         * Indicate if the chart should automatically get resized when the window gets resized.
         */
        auto?: boolean;
    };

    color?: {
        /**
         * Set custom color pattern. Order matches the order of the data.
         */
        pattern?: string[];
        /**
         * **Experimental.**
         */
        threshold?: {
            unit?: string;
            values?: unknown[];
            /** Defaults to `100`. */
            max?: number;
        };
    };

    interaction?: {
        /**
         * Indicate if the chart should have interactions.
         * If `false` is set, all of interactions (showing/hiding tooltip, selection, mouse events, etc) will be disabled.
         */
        enabled?: boolean;
        brighten?: boolean;
    };

    transition?: {
        /**
         * Set duration of transition (in milliseconds) for chart animation.
         * Note: If `0` or `null` set, transition will be skipped. So, this makes initial rendering faster especially in case you have a lot of data.
         */
        duration?: number | null;
    };

    /**
     * Set a callback to execute when the chart is initialized.
     */
    oninit?(this: ChartInternal): void;

    /**
     * Set a callback which is executed when the chart is rendered. Basically, this callback will be called in each time when the chart is redrawed.
     */
    onrendered?(this: ChartInternal): void;

    /**
     * Set a callback to execute when mouse enters the chart.
     */
    onmouseover?(this: ChartInternal): void;

    /**
     * Set a callback to execute when mouse leaves the chart.
     */
    onmouseout?(this: ChartInternal): void;

    /**
     * Set a callback to execute when user resizes the screen.
     */
    onresize?(this: ChartInternal): void;

    /**
     * Set a callback to execute when screen resize finished.
     */
    onresized?(this: ChartInternal): void;

    data: Data;

    axis?: AxesOptions;

    grid?: GridOptions;

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

    line?: LineOptions;

    area?: {
        /**
         * Set if min or max value will be 0 on area chart.
         */
        zerobased?: boolean;
    };

    bar?: {
        /**
         * Change the width of bars. If ratio is specified, change the width of bar chart by ratio.
         */
        width?:
            | number
            | {
                  /**
                   * Set the width of each bar by ratio
                   * Defaults to `0.6`.
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
        label?: LabelOptionsWithThreshold;
        /**
         * Enable or disable expanding pie pieces.
         */
        expand?: ExpandOptions;
    };

    donut?: {
        label?: LabelOptionsWithThreshold;
        /**
         * Enable or disable expanding pie pieces.
         */
        expand?: ExpandOptions;
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
        label?: LabelOptions;
        labelLine?: {
            show?: boolean;
        }
        /**
         * Enable or disable expanding gauge.
         */
        expand?: ExpandOptions;
        /**
         * Set min value of the gauge.
         * Defaults to `0`.
         */
        min?: number;
        /**
         * Set max value of the gauge.
         * Defaults to `100`.
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
         * Defaults to `false`.
         */
        fullCircle?: boolean;
        arcs?: {
            /**
             * Defaults to `5`.
             */
            minWidth?: number;
        }
    };

    spline?: {
        interpolation?: {
            /**
             * Set custom spline interpolation
             */
            type?: 'linear' | 'linear-closed' | 'basis' | 'basis-open' | 'basis-closed' | 'bundle' | 'cardinal' | 'cardinal-open' | 'cardinal-closed' | 'monotone';
        };
    };

    stanford?: {
        /** Show lines anywhere in the chart. */
        lines?: Array<{
            value_x1?: number;
            value_y1?: number;
            value_x2?: number;
            value_y2?: number;
            /** Class to apply to the line. */
            class?: string;
        }>;
        /** Add regions to the chart. */
        regions?: Array<{
            /** Points should be added in counter-clockwise direction  to close the polygon. */
            points: Array<{
                x: number;
                y: number;
            }>;
            text?: string;
            opacity?: number;
            /** Class to apply to the region. */
            class?: string;
        }>;
        /** Show text anywhere inside the chart. */
        texts?: Array<{
            /** x-position. */
            x?: number;
            /** y-position. */
            y?: number;
            /** Text content to show. */
            content?: string;
            /** Class to apply to the text. */
            class?: string;
        }>;
        /** Change the minimum value of the stanford color scale. */
        scaleMin?: number;
        /** Change the maximum value of the stanford color scale. */
        scaleMax?: number;
        /**
         * Change the width of the stanford color scale.
         * Defaults to `20`.
         */
        scaleWidth?: undefined;
        /**
         * Set formatter for stanford color scale axis tick text.
         * This option accepts the string 'pow10', a d3.format object and any function you define.
         * Defauls to `d3.format("d")`.
         */
        scaleFormat?: 'pow10' | ((arg0: number) => string);
        /**
         * Set the values for stanford color scale axis tick text. This option accepts a function that returns an array of numbers.
         */
        scaleValues?: (minValue: number, maxValue: number) => number[];
        /**
         * Set the color interpolator for stanford color scale. This option is a
         * `d3.interpolate*` object or any function you definethat receives a
         * value between `0` and `1`, and returns a color as string.
         */
        colors?: (value: number) => string;
        /**
         * Set the padding for the Stanford color scale.
         */
        padding?: Padding;
    };

    title?: {
        /**
         * Chart title text.
         */
        text?: string;
        /**
         * Spacing around the title.
         */
        padding?: Padding;
        /**
         * Position the title relative to the chart.
         */
        title_position?: "right" | "center" | "left";
    };
}

export interface LabelOptions {
    /**
     * Show or hide label on each pie piece.
     */
    show?: boolean;
    /**
     * Set formatter for the label on each pie piece.
     */
    format?(value: number, ratio: number, id: string): string | number;
}

export type ExpandOptions = boolean | {
    /** Transition duration for expanding. */
    duration?: number;
};

export interface LabelOptionsWithThreshold extends LabelOptions {
    /**
     * Set threshold to show/hide labels.
     * Defaults to `0.05`.
     */
    threshold?: number;
    ratio?: unknown;
}

export interface Data {
    /**
     * Load a CSV or JSON file from a URL. Note that this will not work if loading via the `"file://"` protocol as most browsers with block `XMLHTTPRequests`.
     */
    url?: string;
    /**
     * Specify headers for the data request if `data.url` is provided.
     */
    headers?: unknown;
    /**
     * Parse a JSON object for data. Can be in the column form `{key1: [val1, val2, ...]; ...}` or in the row form `[{key1: val1; key2: val2}, ...]`. If `url` is provided this will be ignored.
     */
    json?: Record<string, PrimitiveArray> | Array<Record<string, Primitive>>;
    /**
     * A list of rows, where the first row is the column names and the remaining rows are data.  If `url` or `json` are provided this will be ignored.
     */
    rows?: PrimitiveArray[];
    /**
     * A list of columns, where the first element in each column is the ID and the remaining elements are data. If `url`, `json`, or `rows` are provided, this will be ignored.
     */
    columns?: Array<[string, ...PrimitiveArray]>;
    /**
     * Used if loading JSON via `data.url`.
     */
    mimeType?: string;
    /**
     * If `data.json` is provided and is in row form, these keys are used to pull the data from each row.
     */
    keys?: {
        /** This is the key for the x-value in each row. */
        x?: string;
        /** List of remaining keys (besides the x key) to pull data for. */
        value: string[];
    };
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
     * Default is `"%Y-%m-%d"`.
     * @see https://github.com/d3/d3-time-format#locale_format For a list of valid format specifiers.
     */
    xFormat?: string;
    /**
     * Set to `true` to parse dates and times as local time.
     * **Experimental.**
     */
    xLocaltime?: boolean;
    /**
     * Set to `true` to sort x values.
     * **Experimental.**
     */
    xSort?: boolean;
    /**
     * Set custom data display names.
     */
    names?: { [key: string]: string };
    /**
     * Set custom data classes for styling.
     * If this option is specified, the element g for the data has an additional class that has the prefix `c3-target-` (e.g. `c3-target-additional-data1-class`).
     */
    classes?: { [key: string]: string };
    /**
     * Set groups for the data for stacking.
     */
    groups?: string[][];
    /**
     * Set y axis the data related to.
     */
    axes?: { [key: string]: AxisName };
    /**
     * Set chart type at once.
     * If this option is specified, the type will be applied to every data. This setting can be overwritten for individual data by `data.types`.
     */
    type?: ChartType;
    /**
     * Set chart type for each data.
     * This setting overwrites the chart-wide `data.type` setting.
     */
    types?: { [key: string]: ChartType };
    /**
     * Show labels on each data points or set formatter function for data labels.
     * Control all labels with a boolean value or `format` function, or control behavior for individual data with a `format` object.
     */
    labels?:
        | boolean
        | { format: FormatFunction }
        | { format: { [key: string]: boolean | FormatFunction } };
    /**
     * Define the order of the data.
     * This option changes the order of stacking the data and pieces of pie/donut. If null specified, it will be the order the data loaded. If function specified, it will be used to sort the data
     * and it will recieve the data as argument.
     */
    order?: "asc" | "desc" | ((...data: DataSeries[]) => number) | null;
    /**
     * Define regions for each data.
     * The values must be an array for each data and it should include an object that has start, end, style. If start is not set, the start will be the first data point. If end is not set, the
     * end will be the last data point.
     * Currently this option supports only line chart and dashed style. If this option specified, the line will be dashed only in the regions.
     */
    regions?: { [key: string]: RegionOptions[] };
    /**
     * Set color converter function.
     * The function is called for each data ID, for each data series, and for each individual point.
     */
    color?: (color: string, d: string | DataSeries | DataPoint) => string | d3.RGBColor | d3.HSLColor;
    /**
     * Set color for each data.
     * If a function is specified, it is called once each with the data ID, the data series, and each point.
     */
    colors?: {
        [key: string]:
            | string
            | d3.RGBColor
            | d3.HSLColor
            | ((d: string | DataSeries | DataPoint) => string | d3.RGBColor | d3.HSLColor);
    };
    /**
     * Hide each data when the chart appears.
     * If true specified, all of data will be hidden. If multiple ids specified as an array, those will be hidden.
     */
    hide?: boolean | string[];
    /**
     * Specify a filter function to selectively load data.
     * @param series The data series for which to decide whether to show or not.
     * @param index The index of the data series in the data.
     * @param allSeries Array of all data series, whether filtered or not.
     * @returns `true` if the series should be shown, `false` if it should be hidden.
     */
    filter?: (series: DataSeries, index: number, allSeries: DataSeries[]) => boolean;
    /**
     * Set text displayed when empty data.
     * Defaults to `""`.
     */
    empty?: { label: { text: string } };

    selection?: {
        /**
         * Enable or disable selecting data.
         * If this option is set `true`, we can select the data points and get/set its state of selection by API (e.g. `select`, `unselect`, `selected`).
         * Defaults to `false`.
         */
        enabled?: boolean;
        /**
         * Set grouped selection enabled.
         * If this option set `true`, multiple data points that have same x value will be selected by one selection.
         * Defaults to `false`.
         */
        grouped?: boolean;
        /**
         * Set multiple data points selection enabled.
         * If this option set `true`, multiple data points can have the selected
         * state at the same time. If `false` set, only one data point can have
         * the selected state and the others will be unselected when the new data point is selected.
         */
        multiple?: boolean;
        /**
         * Enable to select data points by dragging.
         * If this option set `true`, data points can be selected by dragging.
         *
         * **Note**: If this option set `true`, scrolling on the chart will be disabled because dragging event will handle the event.
         */
        draggable?: boolean;
        /**
         * Prevent specific data from being selected. Only called if `selection.enabled` is `true`.
         * @param d The data series to decide for.
         * @returns `false` if selection should be disabled for this data.
         */
        isselectable?(this: Record<string, any>, d: DataSeries): boolean;
    };
    /**
     * Set a callback for click event on each data point.
     * @param d The data point that was clicked.
     * @param element The element for the data point that was clicked.
     */
    onclick?(this: ChartAPI, d: DataPoint, element: SVGElement): void;
    /**
     * Set a callback for mouseover event on each data point.
     * @param d The data point that was moused over.
     * @param element The element for that point. Not passed for some chart types, line 'line'.
     */
    onmouseover?(this: ChartAPI, d: DataPoint, element?: SVGElement): void;
    /**
     * Set a callback for mouseout event on each data point.
     * @param d The data point that the mouse left.
     * @param element The element for that point. Not passed for some chart types, line 'line'.
     */
    onmouseout?(this: ChartAPI, d: DataPoint, element?: SVGElement): void;
    /**
     * Set a callback for data selection.
     * @param d The data point that was selected.
     * @param element The element for the data point that was selected.
     */
    onselected?(this: ChartAPI, d: DataPoint, element: SVGElement): void;
    /**
     * Set a callback for data deselection.
     * @param d The data point that was unselected.
     * @param element The element for the data point that was unselected.
     */
    onunselected?(this: ChartAPI, d: DataPoint, element: SVGElement): void;
    /**
     * For Stanford charts, specify the key of the epochs data, which maps values to their color.
     * Defaults to `"epochs"`.
     */
    epochs?: string;

    /**
     * Convert data IDs with this function before creating chart.
     * @param id The original ID string.
     * @returns The converted ID string.
     */
    idConverter?(id: string): string;
}

export interface AxesOptions {
    /**
     * Switch x and y axis position.
     */
    rotated?: boolean;
    /** x axis configuration. */
    x?: XAxisConfiguration;
    /** y axis configuration. */
    y?: YAxisConfigurationWithTime;
    /** y2 axis configuration. */
    y2?: YAxisConfiguration;
}

export interface AxisConfiguration {
    /**
     * Show or hide the axis.
     */
    show?: boolean;
    /**
     * Set padding for axis.
     * If this option is set, the range of axis will increase/decrease according to the values. If no padding is needed in the range of axis, `0` should be set. On category axis, this option
     * will be ignored.
     */
    padding?: Padding;
    /**
     * Set label on axis.
     * Valid horizontal axis positions: inner-right (default), inner-center, inner-left, outer-right, outer-center, outer-left
     * Valid vertical axis positions: inner-top, inner-middle, inner-bottom, outer-top, outer-middle, outer-bottom
     */
    label?:
        | string
        | {
              /** The label text to show. */
              text: string;
              /** The position of the label. */
              position:
                  | 'inner-right'
                  | 'inner-center'
                  | 'inner-left'
                  | 'outer-right'
                  | 'outer-center'
                  | 'outer-left'
                  | 'inner-top'
                  | 'inner-middle'
                  | 'inner-bottom'
                  | 'outer-top'
                  | 'outer-middle'
                  | 'outer-bottom';
          };
    /**
     * Set max value of the axis.
     */
    max?: string | number | Date;
    /**
     * Set min value of the axis.
     */
    min?: string | number | Date;
    /**
     * Show the axis inside of the chart.
     */
    inner?: boolean;
}

export interface XAxisConfiguration extends AxisConfiguration {
    /**
     * Set type of x axis.
     * Defaults to `"indexed"`.
     */
    type?: "timeseries" | "category" | "indexed";
    /**
     * Set how to treat the timezone of x values.
     * If `true` (default), treat x value as localtime. If `false`, convert to UTC internally.
     */
    localtime?: boolean;
    /**
     * Set category names on category axis.
     * This must be an array that includes category names in string. If category names are included in the date by `data.x` option, this is not required.
     */
    categories?: string[];

    tick?: XTickConfiguration;

    /**
     * Set height of x axis.
     * The height of x axis can be set manually by this option. If you need more space for x axis, please use this option for that. The unit is pixel.
     */
    height?: number;
    /**
     * Set default extent for subchart and zoom. This can be an array or function that returns an array.
     */
    extent?: number[] | (() => number[]);
    selection?: unknown;
}

export interface YAxisConfiguration extends AxisConfiguration {
    /**
     * Change the direction of y axis.
     * If true set, the direction will be from the top to the bottom.
     */
    inverted?: boolean;
    /**
     * Set center value of y axis.
     */
    center?: number;

    tick?: YTickConfiguration;

    /**
     * Set default range of y axis. This option set the default value for y axis when there is no data on init.
     */
    default?: [number, number];

    max?: number;
    min?: number;
}

export interface YAxisConfigurationWithTime extends YAxisConfiguration {
    tick?: YTickConfigurationWithTime;
    type?: unknown;
}

export interface TickConfiguration {
    /**
     * Show x axis outer tick.
     */
    outer?: boolean;
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
     * The number of x axis ticks to show.
     * This option hides tick lines together with tick text. If this option is used on timeseries axis, the ticks position will be determined precisely and not nicely positioned (e.g. it will
     * have rough second value).
     */
    count?: number;
}

export interface XTickConfiguration extends TickConfiguration {
    /**
     * A function to format x-axis tick values. A format string is also supported for timeseries data.
     */
    format?: string | ((x: number | Date) => string | number);

    /**
     * Centerise ticks on category axis
     */
    centered?: boolean;
    /**
     * Setting for culling ticks.
     * If `true` is set, the ticks will be culled, then only limitted tick text will be shown.
     * This option does not hide the tick lines. If `false` is set, all of ticks will be shown.
     */
    culling?:
      | boolean
      | {
          /**
           * The number of tick texts will be adjusted to less than this value.
           */
          max: number;
        };
    /**
     * Fit x axis ticks.
     * If `true` set, the ticks will be positioned nicely. If `false` set, the ticks will be positioned
     * according to x value of the data points.
     */
    fit?: boolean;
    /**
     * Set width of x axis tick.
     */
    width?: number;
    multiline?: boolean;
    multilineMax?: number;
}

export interface YTickConfiguration extends TickConfiguration {
    /**
     * A function to format y-axis tick values.
     */
    format?: (x: number) => string | number;
}

export interface YTickConfigurationWithTime extends YTickConfiguration {
    time?: {
        type?: unknown;
        interval?: unknown;
    };
}

export interface GridOptions {
    x?: AxisGridOptions;
    y?: AxisGridOptions;
    focus?: {
        show?: boolean;
    };
    lines?: {
        front?: boolean;
    };
}

export interface AxisGridOptions {
    /**
     * Show grids along an axis.
     */
    show?: boolean;
    /**
     * Show additional grid lines along x axis.
     * If x axis is `category` axis, value can be category name. If x axis is `timeseries` axis, value can be date string, `Date` object and unixtime integer.
     */
    lines?: GridLineOptions[];
    /** Not used. */
    type?: string;
}

export interface GridLineOptions {
    /** Value to place the grid line at. */
    value: string | number | Date;
    text?: string;
    position?: "start" | "end" | "middle";
    /** Class to give the grid line for styling. */
    class?: string;
}

export interface GridLineOptionsWithAxis extends GridLineOptions {
    axis?: AxisName;
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
    /**
     * If `'dashed'`, renders the line as dashed in this range instead of showing a region block.
     */
    style?: "dashed";
}

export interface LegendOptions {
    /**
     * Show or hide legend.
     * Defaults to `true`.
     */
    show?: boolean;
    /**
     * Hide legend
     * If true given, all legend will be hidden. If string or array given, only the legend that has the id will be hidden.
     * Defaults to `false`.
     */
    hide?: boolean | ArrayOrString;
    /**
     * Change the position of legend.
     */
    position?: "bottom" | "right" | "inset";
    /**
     * Change inset legend attributes. Ignored unless `legend.position` is `"inset"`.
     */
    inset?: {
        /**
         * Decides the position of the legend.
         * Defaults to `"top-left"`.
         */
        anchor?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
        /**
         * Set the horizontal position of the legend based on the anchor.
         * Defaults to `10`.
         */
        x?: number;
        /**
         * Set the vertical position of the legend based on the anchor.
         * Defaults to `0`.
         */
        y?: number;
        /**
         * Defines the max step the legend has (e.g. If `step=2` and legend has 3 items, the legend has 2 columns).
         */
        step?: number;
    };
    /**
     * Padding between legend elements.
     * Defaults to `0`.
     */
    padding?: number;

    item?: {
        /**
         * Set click event handler to the legend item.
         * @param id The ID of the legend item.
         */
        onclick?(this: ChartInternal, id: string): void;
        /**
         * Set mouseover event handler to the legend item.
         * @param id The ID of the legend item.
         */
        onmouseover?(this: ChartInternal, id: string): void;
        /**
         * Set mouseout event handler to the legend item.
         * @param id The ID of the legend item.
         */
        onmouseout?(this: ChartInternal, id: string): void;
        /**
         * Tile settings for legend color display.
         */
        tile?: {
            /**
             * Tile width.
             * Defaults to `10`.
             */
            width?: number;
            /**
             * Tile height.
             * Defaults to `10`.
             */
            height?: number;
        };
    };

    /**
     * Defaults to `false`.
     */
    equally?: boolean;
}

export interface TooltipOptions {
    /**
     * Show or hide tooltip.
     * Defaults to `true`.
     */
    show?: boolean;
    /**
     * Set if tooltip is grouped or not for the data points.
     * Defaults to `true`.
     */
    grouped?: boolean;
    format?: {
        /**
         * Set format for the title of tooltip.
         * @param x Value of the data point to show.
         * @param index Index of the data point to show.
         */
        title?(x: Primitive, index: number): string;
        /**
         * Set format for the name of each data in tooltip.
         * @param ratio Will be `undefined` if the chart is not donut/pie/gauge.
         */
        name?(name: string, ratio: number | undefined, id: string, index: number): string;
        /**
         * Set format for the value of each data in tooltip.
         * @param ratio Will be `undefined` if the chart is not donut/pie/gauge.
         * @returns If `undefined` returned, the row of that value will be skipped.
         */
        value?(value: Primitive, ratio: number | undefined, id: string, index: number): string | undefined;
    };
    /** Show the tooltips based on the horizontal position of the mouse. */
    horizontal?: boolean;
    /**
     * Set custom position for the tooltip. This option can be used to modify the tooltip position by returning object that has top and left.
     */
    position?(
        this: ChartInternal,
        data: Primitive,
        width: number,
        height: number,
        element: SVGElement,
    ): { top: number; left: number };
    /**
     * Set custom HTML for the tooltip.
     * @param data If `tooltip.grouped` is true, data includes multiple data points.
     */
    contents?(
        this: ChartInternal,
        data: DataPoint[],
        defaultTitleFormat: (...args: unknown[]) => unknown,
        defaultValueFormat: (...args: unknown[]) => unknown,
        color: (...args: unknown[]) => unknown,
    ): string;
    /**
     * Set tooltip values order.
     */
    order?: "desc" | "asc" | unknown[] | ((data1: unknown, data2: unknown) => number) | null;
    init?: {
        show?: boolean;
        x?: number;
        position?: {
            /** Defaults to `"0px"`. */
            top?: string;
            /** Defaults to `"50px"`. */
            left?: string;
        };
    };
    // onshow?: () => void; // Not used
    // onhide?: () => void; // Not used
}

export interface SubchartOptions {
    /**
     * Show sub chart on the bottom of the chart.
     * Defaults to `false`.
     */
    show?: boolean;
    size?: {
        /**
         * Change the height of the subchart.
         */
        height: number;
    };
    axis?: {
        x?: {
            show: boolean;
        }
    };
    /**
     * Set callback for brush event.
     * Specified function receives the current zoomed x domain.
     */
    onbrush?(this: ChartAPI, domain: Domain): void;
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
     * Set callback that is called when the chart is zooming. Specified function receives the zoomed domain.
     */
    onzoom?(this: ChartAPI, domain: Domain): void;
    /**
     * Set callback that is called when zooming starts. Specified function receives the zoom event.
     */
    onzoomstart?(this: ChartAPI, event: Event): void;
    /**
     * Set callback that is called when zooming ends. Specified function receives the zoomed domain.
     */
    onzoomend?(this: ChartAPI, domain: Domain): void;
    /**
     * Set the initial minimum and maximum x-axis zoom values.
     */
    initialRange?: Domain;
    /**
     * Disable the default animation of zoom. This option is useful when you want to get the zoomed domain by `onzoom` or `onzoomend` handlers and override the default animation behavior.
     * @see https://github.com/c3js/c3/pull/2439 for details.
     */
    disableDefaultBehavior?: boolean;

    priveleged?: boolean;
    x?: {
        min?: number;
        max?: number;
    };
    /**
     * Change zoom extent.
     * **Experimental.**
     */
    extent?: [number, number];
}

export interface PointOptions {
    /**
     * Whether to show each point in line.
     * Defaults to `true`.
     */
    show?: boolean;
    /**
     * The radius size of each point.
     * Defaults to `2.5`. If it's a function, will call for each point.
     */
    r?: number | ((this: ChartInternal, d: DataPoint) => number);

    /**
     * How sensitive is each point to mouse cursor hover.
     * Defaults to `10`.
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

export interface LineOptions {
    /**
     * Set if null data point will be connected or not.
     * If `true` set, the region of null data will be connected without any data point.
     * If `false` set, the region of null data will not be connected and get empty.
     */
    connectNull?: boolean;
    step?: {
        /**
         * Change step type for step chart.
         * Defaults to `"step"`.
         */
        type: "step" | "step-before" | "step-after";
    };
}

export interface ShowHideOptions {
    /** Controls whether the legend will be shown or hidden along with the data. */
    withLegend?: boolean;
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
     * @param targetIds You can specify multiple data sets by giving an array of ID strings. If no argument is given, all of data will be shown.
     * @param options Options object.
     */
    show(targetIds?: ArrayOrString, options?: ShowHideOptions): void;
    /**
     * This API hides specified targets.
     * @param targetIds You can specify multiple data sets by giving an array of ID strings. If no argument is given, all of data will be hidden.
     * @param options Options object.
     */
    hide(targetIds?: ArrayOrString, options?: ShowHideOptions): void;
    /**
     * This API toggles (shows or hides) specified targets.
     * @param targetIds You can specify multiple data sets by giving an array of ID strings. If no argument is given, all of data will be toggled.
     * @param options Options object.
     */
    toggle(targetIds?: ArrayOrString, options?: ShowHideOptions): void;
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
        /**
         * An object to convert to data to load. Can be in the column form
         * (`{key1: [val1, val2, ...]; ...}`) or in the row form (`[{key1: val1; key2: val2}, ...]`).
         * If `data` or `url` are provided this will be ignored.
         */
        json?: Record<string, PrimitiveArray> | Array<Record<string, Primitive>>;
        /** If json is provided and is in row form, these keys are used to pull the data from each row. */
        keys?: {
            /** This is the key for the x-value in each row. */
            x?: string;
            /** List of remaining keys (besides the x key) to pull data for. */
            value: string[];
        };
        /** A list of rows, where the first row is the column names and the remaining rows are data.  If `data`, `url`, or `json` are provided this will be ignored.  */
        rows?: PrimitiveArray[];
        /** A list of columns, where the first element in each column is the ID and the remaining elements are data. If `data`, `url`, `json`, or 'rows' are provided, this will be ignored. */
        columns?: Array<[string, ...PrimitiveArray]>;
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
        done?(): void;
    }): void;
    /**
     * Unload data from the chart.
     * @param args If given, will unload the data with the ids that match the string, the array of strings, or the `ids` argument of the object. If not given, will unload all data.
     * NOTE: If you call load API soon after/before unload, unload param of load should be used. Otherwise chart will not be rendered properly because of cancel of animation.
     */
    unload(args?: ArrayOrString | {
        ids?: ArrayOrString;
        /** Called after data is loaded, but not after rendering. This is because rendering will finish after some transition and there is some time lag between loading and rendering. */
        done?: () => void;
    }): void;
    /**
     * Flow data to the chart. By this API, you can append new data points to the chart.
     * If data that has the same target id is given, the chart will be appended. Otherwise, new target will be added.
     * @param args The arguments object for this method.
     */
    flow(args: {
        /** An object to convert to data to load. Can be in the column form `{key1: [val1, val2, ...]; ...}` or in the row form `[{key1: val1; key2: val2}, ...]`. */
        json?: Record<string, PrimitiveArray> | Array<Record<string, Primitive>>;
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
        columns?: Array<[string, ...PrimitiveArray]>;
        /** If given, the lower x edge will move to that point. If not given, the lower x edge will move by the number of given data points. */
        to?: string | number;
        /** If given, the lower x edge will move by the number of this argument. */
        length?: number;
        /** If given, the duration of the transition will be specified value. If not given, `transition.duration` will be used as default. */
        duration?: number;
        /** Will be called when the flow ends. */
        done?(): void;
    }): void;
    /**
     * Change data point state to selected. By this API, you can select data points. To use this API, `data.selection.enabled` needs to be `true`.
     * @param ids Specify target ids to be selected. If this argument is not given, all targets will be the candidate.
     * @param indices Specify indices to be selected. If this argument is not given, all data points will be the candidate.
     * @param resetOther If this argument is set true, the data points that are not specified by ids, indices will be unselected.
     */
    select(ids?: string[], indices?: number[], resetOther?: boolean): void;
    /**
     * Change data point state to unselected. By this API, you can unselect data points. To use this API, `data.selection.enabled` needs to be `true`.
     * @param ids Specify target ids to be unselected. If this argument is not given, all targets will be the candidate.
     * @param indices Specify indices to be unselected. If this argument is not given, all data points will be the candidate.
     */
    unselect(ids?: string[], indices?: number[]): void;
    /**
     * Get selected data points. By this API, you can get selected data points information. To use this API, `data.selection.enabled` needs to be `true`.
     * @param targetId You can filter the result by giving target id that you want to get. If not given, all of data points will be returned.
     */
    selected(targetId?: string): Data;
    /**
     * Change the type of the chart.
     * @param type Specify the type to be transformed. The types listed in data.type can be used.
     * @param targetIds Specify target data IDs to be transformed. If not given, all targets will be the candidate.
     */
    transform(type: ChartType, targetIds?: ArrayOrString): void;
    /**
     * Update groups for the targets.
     * @param groups An array of groups, each with an array of data IDs defining members of the groups.
     */
    groups(): string[][];
    groups<T extends string[][]>(groups?: T): T;

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
        add(regions?: ArrayOrSingle<RegionOptions>): RegionOptions[];
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
    category(i: number): string;
    category<T extends string>(i: number, category: T): T;

    /**
     * Get and/or set the categories.
     * @param categories: Value of the categories to update. If provided, will overwrite all categories. If not provided, no change will be made.
     * @returns The list of categories after updating.
     */
    categories(): string[];
    categories<T extends string[]>(categories: T): T;

    /**
     * Get the color for the specified id.
     * @returns The color that the data series with the specified id has on the chart.
     */
    color(id: string): string;

    /**
     * Get and set x values for the chart. Same as `xs` method.
     * @param x If given, x values of every target will be updated.
     * @returns A map of data IDs to their x IDs after running this function.
     */
    x(x?: {
        [key: string]: PrimitiveArray;
    }): { [key: string]: PrimitiveArray };

    /**
     * Get and set x values for the chart. Same as `x` method.
     * @param x If given, x values of every target will be updated.
     * @returns A map of data IDs to their x IDs after running this function.
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
         * @param domain If given, the chart will be zoomed to the given domain.
         * @returns `domain`, if given; otherwise the current zoom range of the chart.
         */
        (domain?: number[]): number[];

        /**
         * Enable and disable zooming.
         * @param enabled If enabled is `true`, the feature of zooming will be enabled. If `false` is given, it will be disabled.
         */
        enable(enabled: boolean): void;

        /**
         * Set or get the maximum x value of the chart for zooming.
         * @param max The new maximum zoom value.
         * @returns If `max` is _not_ given, will return the existing zoom value.
         *
         */
        max(): number;
        max(max: number): void;

        /**
         * Set or get the minimum x value of the chart for zooming.
         * @param min The new minimum zoom value.
         * @returns If `min` is _not_ given, will return the existing zoom value.
         *
         */
        min(): number;
        min(min: number): void;

        /**
         * Set or get both the max and min zoom values at the same time.
         * @param range An object with max and/or min values.
         * @returns If `range` is _not_ given, returns an object with current max and min zoom values.
         */
        range(): {
            max: number;
            min: number;
        }
        range(range: {
            max?: number;
            min?: number;
        }): void;
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
    // Not a typo - returns `null` not `void`
    destroy(): null;

    tooltip: {
        (): void;
        show(args: {
            mouse: unknown;
            data?: {
                targets: DataSeries[];
            };
            id?: string;
            x?: number;
        }): void;
        hide(): void;
    };

    internal: ChartInternal;
}

export interface ChartInternal {
    /** Access the external Chart API. */
    api: ChartAPI;
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

export interface RedrawOptions {
    [key: string]: boolean;
}

export interface UpdateAndRedrawOptions {
    [key: string]: boolean;
}

export interface GridOperations {
    /**
     * Update the grid lines.
     * @param grids Grid lines will be replaced with this argument.
     */
    (): GridLineOptionsWithAxis[];
    <T extends GridLineOptionsWithAxis[]>(grids: T): T;
    /**
     * Add grid lines. This API adds new grid lines instead of replacing.
     * @param grids New grid lines will be added. It's possible to give an Object if only one line will be added.
     */
    add(grids: ArrayOrSingle<GridLineOptionsWithAxis>): GridLineOptionsWithAxis[];
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
