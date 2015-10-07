// Type definitions for Chartist v0.9.4
// Project: https://github.com/gionkunz/chartist-js
// Definitions by: Matt Gibbs <https://github.com/mtgibbs>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module Chartist {
  interface ChartistStatic {
    Pie: IChartistPieChart;
    Bar: IChartistBarChart;
    Line: IChartistLineChart;

    Svg: any;
    noop: Function;
  }

  interface IResponsiveOptionTuple<T extends IChartOptions> extends Array<string | T> {
    0: string;
    1: T;
  }

  interface IChartistBase<T extends IChartOptions> {
    container: any;
    data: Object;
    defaultOptions: T;
    options: T;
    responsiveOptions: Array<IResponsiveOptionTuple<T>>;

    // this most likely doesn't need to be exposed to the user
    eventEmitter: any;

    supportsForeignObject: boolean;
    supportsAnimations: boolean;
    resizeListener: any;

    update(data: Object, options?: T, override?: boolean): void;
    detatch(): void;

    /**
     * Use this function to register event handlers. The handler callbacks are synchronous and will run in the main thread rather than the event loop.
     *
     * @method on
     * @param event {string} Name of the event. Check the examples for supported events.
     * @param handler {Function} The handler function that will be called when an event with the given name was emitted. This function will receive a data argument which contains event data. See the example for more details.
     */
    on(event: string, handler: Function): IChartistBase<T>;

    /**
     * Use this function to un-register event handlers. If the handler function parameter is omitted all handlers for the given event will be un-registered.
     *
     * @method off
     * @param event {string} Name of the event for which a handler should be removed
     * @param handler {Function} The handler function that that was previously used to register a new event handler. This handler will be removed from the event handler list. If this parameter is omitted then all event handlers for the given event are removed from the list.
     */
    off(event: string, handler?: Function): IChartistBase<T>;
  }

  interface IChartistPieChart extends IChartistBase<IPieChartOptions> {
    new (target: any, data: Object, options?: IPieChartOptions, responsiveOptions?: Array<IResponsiveOptionTuple<IPieChartOptions>>): IChartistPieChart;
  }

  interface IChartistLineChart extends IChartistBase<ILineChartOptions> {
    new (target: any, data: Object, options?: ILineChartOptions, responsiveOptions?: Array<IResponsiveOptionTuple<ILineChartOptions>>): IChartistLineChart;
  }

  interface IChartistBarChart extends IChartistBase<IBarChartOptions> {
    new (target: any, data: Object, options?: IBarChartOptions, responsiveOptions?: Array<IResponsiveOptionTuple<IBarChartOptions>>): IChartistBarChart;
  }

  interface IChartOptions {
    /**
     * If true the whole data is reversed including labels, the series order as well as the whole series data arrays.
     */
    reverseData?: boolean;
  }

  interface IPieChartOptions extends IChartOptions {
    /**
     * Specify a fixed width for the chart as a string (i.e. '100px' or '50%')
     */
    width?: number | string;

    /**
     * Specify a fixed height for the chart as a string (i.e. '100px' or '50%')
     */
    height?: number | string;

    /**
     * Padding of the chart drawing area to the container element and labels as a number or padding object {top: 5, right: 5, bottom: 5, left: 5}
     */
    chartPadding?: IChartPadding | number;

    /**
     * Override the class names that are used to generate the SVG structure of the chart
     */
    classNames?: IPieChartClasses;

    /**
     * The start angle of the pie chart in degrees where 0 points north. A higher value offsets the start angle clockwise.
     */
    startAngle?: number;

    /**
     * An optional total you can specify. By specifying a total value, the sum of the values in the series must be this total in order to draw a full pie. You can use this parameter to draw only parts of a pie or gauge charts.
     */
    total?: number;

    /**
     * If specified the donut CSS classes will be used and strokes will be drawn instead of pie slices.
     */
    donut?: boolean;

    /**
     * Specify the donut stroke width, currently done in javascript for convenience.
     */
    donutWidth?: number;

    /**
     * Specify if a label should be shown or not
     */
    showLabel?: boolean;

    /**
     * Label position offset from the standard position which is half distance of the radius. This value can be either positive or negative. Positive values will position the label away from the center.
     */
    labelOffset?: number;

    /**
     * This option can be set to 'inside', 'outside' or 'center'. Positioned with 'inside' the labels will be placed on half the distance of the radius to the border of the Pie by respecting the 'labelOffset'. The 'outside' option will place the labels at the border of the pie and 'center' will place the labels in the absolute center point of the chart. The 'center' option only makes sense in conjunction with the 'labelOffset' option.
     */
    labelPosition?: string;

    /**
     * An interpolation function for the label value
     */
    labelInterpolationFnc?: Function;

    /**
     * Label direction can be 'neutral', 'explode' or 'implode'.  Default is 'neutral'.  The labels anchor will be positioned based on those settings as well as the fact if the labels are on the right or left side of the center of the chart. Usually explode is useful when labels are positioned far away from the center.
     */
    labelDirection?: string;
  }

  interface IChartPadding {
    top?: number;
    right?: number;
    bottom?: number;
    left?: number;
  }

  interface IPieChartClasses {
    chartPie?: string;
    chartDonut?: string;
    series?: string;
    slicePie?: string;
    sliceDonut?: string;
    label?: string;
  }

  interface IBarChartOptions extends IChartOptions {
    axisX?: IBarChartAxis;
    axisY?: IBarChartAxis;
    width?: number | string;
    height?: number | string;
    high?: number;
    low?: number;
    onlyInteger?: boolean;
    chartPadding?: IChartPadding;
    seriesBarDistance?: number;

    /**
     * If set to true this property will cause the series bars to be stacked and form a total for each series point. This will also influence the y-axis and the overall bounds of the chart. In stacked mode the seriesBarDistance property will have no effect.
     */
    stackBars?: boolean;

    horizontalBars?: boolean;
    distributeSeries?: boolean;
  }

  interface IBarChartAxis {
    offset?: number;
    position?: string;
    labelOffset?: {
      x?: number;
      y?: number;
    };
    showLabel?: boolean;
    showGrid?: boolean;
    labelInterpolationFnc?: Function;
    scaleMinSpace?: number;
    onlyInteger?: boolean;
  }

  interface IBarChartClasses {
    chart?: string;
    horizontalBars?: string;
    label?: string;
    labelGroup?: string;
    series?: string;
    bar?: string;
    grid?: string;
    gridGroup?: string;
    vertical?: string;
    horizontal?: string;
    start?: string;
    end?: string;
  }

  interface ILineChartOptions extends IChartOptions {
    axisX?: ILineChartXAxis;
    axisY?: ILineChartYAxis;
    width?: number | string;
    height?: number | string;
    showLine?: boolean;
    showPoint?: boolean;
    showArea?: boolean;
    areaBase?: number;
    lineSmooth?: boolean;
    low?: number;
    high?: number;
    chartPadding?: IChartPadding;
    fullWidth?: boolean;
    reverseData?: boolean;
    classNames?: ILineChartClasses;
  }

  interface ILineChartAxis {
    offset?: number;
    position?: string;
    labelOffset?: {
      x?: number;
      y?: number;
    };
    showLabel?: boolean;
    showGrid?: boolean;
    labelInterpolationFnc?: Function;
    type?: any;
  }

  interface ILineChartXAxis extends ILineChartAxis {
  }

  interface ILineChartYAxis extends ILineChartAxis {
    scaleMinSpace?: number;
    onlyInteger?: boolean;
  }

  // TODO: Finish documenting all of the defaults
  interface ILineChartClasses {
    /**
     * Default is 'ct-chart-line'
     */
    chart?: string;
    label?: string;
    labelGroup?: string;
    series?: string;
    line?: string;
    point?: string;
    area?: string;
    grid?: string;
    gridGroup?: string;
    vertical?: string;
    horizontal?: string;
    start?: string;
    end?: string;
  }
}

declare var Chartist: Chartist.ChartistStatic;
