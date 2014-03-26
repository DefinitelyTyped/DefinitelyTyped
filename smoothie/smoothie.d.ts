// Type definitions for Smoothie Charts 1.21
// Project: https://github.com/joewalnes/smoothie
// Definitions by: Drew Noakes <https://drewnoakes.com>
//                 Mike H. Hawley <https://github.com/mikehhawley>
// Definitions: https://github.com/borisyankov/DefinitelyTyped/smoothie

// NOTE this reference is here to make the DefinitelyTyped `npm test` suite pass and
//      may be removed if you are using this module declaration in isolation from the
//      rest of DefinitelyTyped.
/// <reference path="../node/node.d.ts" />

declare module "smoothie"
{
    export interface ITimeSeriesOptions
    {
        resetBounds?: boolean;
        resetBoundsInterval?: number;
    }

    export interface ITimeSeriesPresentationOptions
    {
        stokeStyle?: string;
        fillStyle?: string;
        lineWidth?: number;
    }

    export class TimeSeries
    {
        /**
         * Initialises a new <code>TimeSeries</code> with optional data options.
         *
         * Options are of the form (defaults shown):
         *
         * <pre>
         * {
         *   resetBounds: true,        // enables/disables automatic scaling of the y-axis
         *   resetBoundsInterval: 3000 // the period between scaling calculations, in millis
         * }
         * </pre>
         *
         * Presentation options for TimeSeries are specified as an argument to <code>SmoothieChart.addTimeSeries</code>.
         */
        constructor(options?: ITimeSeriesOptions);

        /**
         * Recalculate the min/max values for this <code>TimeSeries</code> object.
         *
         * This causes the graph to scale itself in the y-axis.
         */
        resetBounds(): void;

        /**
         * Adds a new data point to the <code>TimeSeries</code>, preserving chronological order.
         *
         * @param timestamp the position, in time, of this data point
         * @param value the value of this data point
         * @param sumRepeatedTimeStampValues if <code>timestamp</code> has an exact match in the series, this flag controls
         * whether it is replaced, or the values summed (defaults to false.)
         */
        append(timestamp: number, value: number, sumRepeatedTimeStampValues?: boolean): void;

        dropOldData(oldestValidTime: number, maxDataSetLength: number): void;
    }

    export interface IGridOptions
    {
        /** The background colour of the chart. */
        fillStyle?: string;
        /** The pixel width of grid lines. */
        lineWidth?: number;
        /** Colour of grid lines. */
        stokeStyle?: string;
        /** Distance between vertical grid lines. */
        millisPerLine?: number;
        /** Controls whether grid lines are 1px sharp, or softened. */
        sharpLines?: boolean;
        /** Number of vertical sections marked out by horizontal grid lines. */
        verticalSections?: number;
        /** Whether the grid lines trace the border of the chart or not. */
        borderVisible?: boolean;
    }

    export interface ILabelOptions
    {
        /** Enables/disables labels showing the min/max values. */
        disabled?: boolean;
        /** Colour for text of labels. */
        fillStyle?: string;
        fontSize?: number;
        fontFamily?: string;
        precision?: number;
    }

    export interface IRange { min: number; max: number }

    export interface IHorizontalLine
    {
        value?: number;
        color?: string;
        lineWidth?: number;
    }

    export interface IChartOptions
    {
        /** Specify to clamp the lower y-axis to a given value. */
        minValue?: number;
        /** Specify to clamp the upper y-axis to a given value. */
        maxValue?: number;
        /** Allows proportional padding to be added above the chart. for 10% padding, specify 1.1. */
        maxValueScale?: number;
        yRangeFunction?: (range:IRange)=>IRange;
        /** Controls the rate at which y-value zoom animation occurs. */
        scaleSmoothing?: number;
        /** Sets the speed at which the chart pans by. */
        millisPerPixel?: number;
        /** Whether to render at different DPI depending upon the device. Enabled by default. */
        enableDpiScaling?: boolean;
        yMinFormatter?: (min:number, precision:number)=>string;
        yMaxFormatter?: (max:number, precision:number)=>string;
        maxDataSetLength?: number;
        /** One of: 'bezier', 'linear', 'step' */
        interpolation?: string;
        /** Optional function to format time stamps for bottom of chart. You may use <code>SmoothieChart.timeFormatter</code>, or your own/ */
        timestampFormatter?: (date:Date)=>string;
        horizontalLines?: IHorizontalLine[];

        grid?: IGridOptions;

        labels?: ILabelOptions;
    }

    /**
     * Initialises a new <code>SmoothieChart</code>.
     *
     * Options are optional and may be sparsely populated. Just specify the values you
     * need and the rest will be given sensible defaults.
     */
    export class SmoothieChart
    {
        constructor(chartOptions?: IChartOptions);

        /**
         * Adds a <code>TimeSeries</code> to this chart, with optional presentation options.
         */
        addTimeSeries(series: TimeSeries, seriesOptions?: ITimeSeriesPresentationOptions): void;

        /**
         * Removes the specified <code>TimeSeries</code> from the chart.
         */
        removeTimeSeries(series: TimeSeries): void;

        /**
         * Gets render options for the specified <code>TimeSeries</code>.
         *
         * As you may use a single <code>TimeSeries</code> in multiple charts with different formatting in each usage,
         * these settings are stored in the chart.
         */
        getTimeSeriesOptions(timeSeries: TimeSeries): ITimeSeriesPresentationOptions;

        /**
         * Brings the specified <code>TimeSeries</code> to the top of the chart. It will be rendered last.
         */
        bringToFront(timeSeries: TimeSeries): void;

        /**
         * Instructs the <code>SmoothieChart</code> to start rendering to the provided canvas, with specified delay.
         *
         * @param canvas the target canvas element
         * @param delayMillis an amount of time to wait before a data point is shown. This can prevent the end of the series
         * from appearing on screen, with new values flashing into view, at the expense of some latency.
         */
        streamTo(canvas: HTMLCanvasElement, delayMillis?: number): void;

        /**
         * Starts the animation of this chart. Called by <code>streamTo</code>.
         */
        start(): void;

        /**
         * Stops the animation of this chart.
         */
        stop(): void;

        updateValueRange(): void;

        render(canvas?: HTMLCanvasElement, time?: number): void;
    }
}
