// Type definitions for Chartist v0.11.0
// Project: https://github.com/gionkunz/chartist-js
// Definitions by: Matt Gibbs <https://github.com/mtgibbs>
//                 Simon Pfeifer <https://github.com/psimonski>
//                 Anastasiia Antonova <https://github.com/affilnost>
//                 Sunny Juneja <https://github.com/sunnyrjuneja>
//                 Benjamin Dobell <https://github.com/Benjamin-Dobell>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.1

declare namespace Chartist {

    interface ChartistStatic {

        /**
         * Precision level used internally in Chartist for rounding. If you require more decimal places you can increase this number.
         */
        precision: number;

        /**
         * A map with characters to escape for strings to be safely used as attribute values.
         */
        escapingMap: IChartistEscapeMap;

        /**
         * This is just a convention. Usage is demonstrated in the official Chartist examples, but by default this property is undefined.
         *
         * Note: Plugin modules tend to export themselves, so it's suggested you use/import them as you would any other TypeScript module.
         */
        plugins?: IChartistPlugins;

        Bar: ChartistBarChartStatic;
        Pie: ChartistPieChartStatic;
        Line: ChartistLineChartStatic;

        AutoScaleAxis: ChartistAutoScaleAxisStatic;
        FixedScaleAxis: ChartistFixedScaleAxisStatic;
        StepAxis: ChartistStepAxisStatic;

        Svg: ChartistSvgStatic;
        Interpolation: ChartistInterpolationStatic;

        noop: <T>(value: T) => T;

        /**
         * Generates a-z from a number 0 to 26
         */
        alphaNumerate: (n: number) => string;

        /**
         * Simple recursive object extend
         */
        extend<A extends object, B extends object>(target: A, source: B): Extend<A, B>;
        extend<A extends object, B extends object, C extends object>(target: A, source1: B, source2: C): Extend<A, Extend<B, C>>;
        extend<A extends object, B extends object, C extends object, D extends object>(target: A, source1: B, source2: C, source3: D): Extend<A, Extend<B, Extend<C, D>>>;
        extend<A extends object, B extends object, C extends object, D extends object, E extends object>(target: A, source1: B, source2: C, source3: D, source4: E): Extend<A, Extend<B, Extend<C, Extend<D, E>>>>;
        extend(target: object, ...sources: object[]): any;

        /**
         * Replaces all occurrences of subStr in str with newSubStr and returns a new string.
         */
        replaceAll(str: string, subStr: string, newSubStr: string): string;

        /**
         * Converts a number to a string with a unit. If a string is passed then this will be returned unmodified.
         */
        ensureUnit(value: number, unit: string): string;

        /**
         * Converts a number or string to a quantity object.
         */
        quantity(input: string | number): Object;

        /**
         * This is a wrapper around document.querySelector that will return the query if it's already of type Node
         */
        querySelector<T extends Node>(query: T | string): T | null;

        /**
         * Functional style helper to produce array with given length initialized with undefined values
         */
        times(length: number): Array<any>;

        /**
         * Sum helper to be used in reduce functions
         */
        sum(previous: number, current: number): number;

        /**
         * Multiply helper to be used in `Array.map` for multiplying each value of an array with a factor.
         */
        mapMultiply(factor: number): (num: number) => number;

        /**
         * Add helper to be used in `Array.map` for adding a addend to each value of an array.
         */
        mapAdd(addend: number): (num: number) => number;

        /**
         * Map for multi dimensional arrays where their nested arrays will be mapped in serial. The output array will have the length of the largest nested array. The callback function is called with variable arguments where each argument is the nested array value (or undefined if there are no more values).
         */
        serialMap(arr: Array<any>, cb: Function): Array<any>;

        /**
         * This helper function can be used to round values with certain precision level after decimal. This is used to prevent rounding errors near float point precision limit.
         */
        roundWithPrecision(value: number, digits?: number): number;

        /**
         * This function serializes arbitrary data to a string. In case of data that can't be easily converted to a string, this function will create a wrapper object and serialize the data using JSON.stringify. The outcoming string will always be escaped using Chartist.escapingMap.
         * If called with null or undefined the function will return immediately with null or undefined.
         */
        serialize(data: Object | string | number): string;

        /**
         * This function de-serializes a string previously serialized with Chartist.serialize. The string will always be unescaped using Chartist.escapingMap before it's returned. Based on the input value the return type can be Number, String or Object. JSON.parse is used with try / catch to see if the unescaped string can be parsed into an Object and this Object will be returned on success.
         */
        deserialize(data: string): Object | string | number;

        /**
         * Create or reinitialize the SVG element for the chart
         */
        createSvg(container: Node, width: string, height: string, className: string): IChartistSvg<SVGElement>;

        /**
         * Reverses the series, labels and series data arrays.
         */
        reverseData(data: IChartistData): IChartistData;

        /**
         * Convert data series into plain array
         */
        getDataArray(data: IChartistData, reverse: boolean, multi: true): ChartistScalarDataArray | ChartistRecursiveScalarDataArray;
        getDataArray(data: IChartistData, reverse?: boolean, multi?: false): ChartistXYDataArray | ChartistRecursiveXYDataArray;

        /**
         * Converts a number (or partially defined padding object) into a padding object.
         */
        normalizePadding(padding: number | Partial<ChartistPadding>, fallback: number): ChartistPadding;

        /**
         * Calculate the order of magnitude for the chart scale
         */
        orderOfMagnitude(value: number): number;

        /**
         * Project a data length into screen coordinates (pixels)
         */
        projectLength(axisLength: number, length: number, bounds: ChartistBounds): number;

        /**
         * Get the height of the area in the chart for the data series
         */
        getAvailableHeight(svg: IChartistSvg<any>, options: IChartOptions): number;

        /**
         * Get highest and lowest value of data array. This Array contains the data that will be visualized in the chart.
         */
        getHighLow(data: ChartistDataArray, options: IChartOptions, dimension: 'x' | 'y'): ChartistHighLow;

        /**
         * Checks if a value can be safely coerced to a number. This includes all values except null which result in finite numbers when coerced. This excludes NaN, since it's not finite.
         */
        isNumber(value: any): boolean;

        /**
         * Returns true on all falsey values except the numeric value 0.
         */
        isFalseyButZero(value: any): boolean;

        /**
         * Returns a number if the passed parameter is a valid number or the function will return undefined. On all other values than a valid number, this function will return undefined.
         */
        getNumberOrUndefined(value: any): number | undefined;

        /**
         * Checks if provided value object is multi value (contains x or y properties)
         */
        isMultiValue(value: any): boolean;

        /**
         * Checks if provided value object is multi value (contains x or y properties)
         */
        getMultiValue(value: any, dimension?: 'x' | 'y', defaultValue?: number): number;

        /**
         * Pollard Rho Algorithm to find smallest factor of an integer value. There are more efficient algorithms for factorization, but this one is quite efficient and not so complex.
         */
        rho(num: number): number;

        /**
         * Calculate and retrieve all the bounds for the chart and return them in one array
         */
        getBounds(axisLength: number, highLow: ChartistHighLow, scaleMinSpace: number, onlyInteger?: boolean): ChartistBounds;

        /**
         * Calculate cartesian coordinates of polar coordinates
         */
        polarToCartesian(centerX: number, centerY: number, radius: number, angleInDegrees: number): {x: number, y: number};

        /**
         * Initialize chart drawing rectangle (area where chart is drawn) x1,y1 = bottom left / x2,y2 = top right
         */
        createChartRect (svg: IChartistSvg<any>, options: IChartOptions, fallbackPadding: number): IChartistRect;

        /**
         * Creates a grid line based on a projected value.
         */
        createGrid(position: number, index: number, axis: IChartistAxis<ChartistAxisUnitX> | IChartistAxis<ChartistAxisUnitY>, offset: number, length: number, group: IChartistSvg<SVGGElement>, classes: string[], eventEmitter: IChartistEventEmitter): void;

        /**
         * Creates a grid background rect and emits the draw event.
         */
        createGridBackground(gridGroup: IChartistSvg<SVGGElement>, chartRect: IChartistRect, className: string, eventEmitter: IChartistEventEmitter): void;

        /**
         * Creates a label based on a projected value and an axis.
         */
        createLabel(position: number, length: number, index: number, labels: Object[], axis: IChartistAxis<ChartistAxisUnitX> | IChartistAxis<ChartistAxisUnitY>, axisOffset: number, labelOffset: {x: number, y: number}, group: IChartistSvg<SVGGElement>, classes: string[], useForeignObject: boolean, eventEmitter: IChartistEventEmitter): void;

        /**
         * Provides options handling functionality with callback for options changes triggered by responsive options and media query matches
         */
        optionsProvider<T extends IChartOptions>(options: T, responsiveOptions: Array<IResponsiveOptionTuple<T>>, eventEmitter: IChartistEventEmitter): IChartistOptionsProvider<T>;
    }

    type Extend<A, B> = A extends object ? (
        Pick<A, Exclude<keyof A, keyof B>> & {
        [K in keyof B]: K extends keyof A ? Extend<A[K], B[K]> : B[K];
    }) : B

    interface IChartistEscapeMap {
        [Key: string]: string;
    }

    interface IResponsiveOptionTuple<T extends IChartOptions> extends Array<string | T> {
        0: string;
        1: T;
    }

    export interface IChartistOptionsProvider<T extends IChartOptions> {
        removeMediaQueryListeners(): void;
        getCurrentOptions(): T;
    }

    // Plugins can use TypeScript module/interface merging to strongly type their args.
    interface IChartistPlugins {
        [key: string]: (...args: any) => ChartistPlugin;
    }

    export type ChartistPlugin = (chart: Chartist.IChartistBase<any, any>, data?: any) => void;

    type ChartistScalarDataArray = Array<number | undefined>
    type ChartistXYDataArray = Array<{x?: number, y?: number}>

    interface ChartistRecursiveScalarDataArray extends Array<ChartistScalarDataArray | ChartistRecursiveScalarDataArray> {}
    interface ChartistRecursiveXYDataArray extends Array<ChartistXYDataArray | ChartistRecursiveXYDataArray> {}

    type ChartistDataArray = ChartistScalarDataArray | ChartistXYDataArray | ChartistRecursiveScalarDataArray | ChartistRecursiveXYDataArray

    type ChartistScalarValueObject = {
        meta?: any,
    } & ({
        value: number | null,
    } | {
        data: number | null,
    });

    type ChartistXYValueObject = {
        x: number | Date,
        y: number,
        meta?: any,
    };

    type ChartistScalarValueSeriesObject = ChartistScalarValueObject & {
        className?: string,
        name?: string,
    };

    type ChartistXYValueSeriesObject = ChartistXYValueObject & {
        className?: string,
        name?: string,
    };

    type ChartistArraySeriesObject = {
        className?: string,
        name?: string,
    } & ({
        value: Array<number | null> | ChartistScalarValueObject[] | ChartistXYValueObject[],
    } | {
        data: Array<number | null> | ChartistScalarValueObject[] | ChartistXYValueObject[],
    });

    type ChartistValueSeries = Array<number | null> | ChartistScalarValueSeriesObject[] | ChartistXYValueSeriesObject[] | ChartistArraySeriesObject
    type ChartistArraySeries = Array<number | null>[] | ChartistScalarValueObject[][] | ChartistXYValueObject[][] | ChartistArraySeriesObject[]

    interface IChartistBaseData {
        labels?: string[] | number[] | Date[];
    }

    export interface IChartistArrayData extends IChartistBaseData {
        series: ChartistArraySeries;
    }

    export type ChartistSeries = ChartistValueSeries | ChartistArraySeries;

    type ChartistScalarSeriesObject = {
        className?: string,
        name?: string,
    } & ({
        value: Array<number | null> | ChartistScalarValueObject[],
    } | {
        data: Array<number | null> | ChartistScalarValueObject[],
    });

    export interface IChartistScalarData extends IChartistBaseData {
        series: Array<number | null> | ChartistScalarValueSeriesObject[] | ChartistArraySeriesObject;
    }

    export interface IChartistData extends IChartistBaseData {
        series: ChartistSeries;
    }

    export type ChartistBounds = {
        high: number;
        low: number;
        valueRange: number;
        oom: number;
        step: number;
        min: number;
        max: number;
        range: number;
        numberOfSteps: number;
        values: number[];
    };

    export type ChartistHighLow = {
        high: number;
        low: number;
    };

    export type ChartistPadding = {
        top: number,
        right: number,
        bottom: number,
        left: number,
    }

    export type ChartistRange = {
        min: number;
        max: number;
    };

    export interface IChartistRect {
        x1: number;
        y1: number;
        x2: number;
        y2: number;
        padding: ChartistPadding;
        width: () => number;
        height: () => number;
    }

    export type ChartistAxisUnitX = {
        pos: 'x';
        len: 'width';
        dir: 'horizontal';
        rectStart: 'x1';
        rectEnd: 'x2';
        rectOffset: 'y2';
    };

    export type ChartistAxisUnitY = {
        pos: 'y';
        len: 'height';
        dir: 'vertical';
        rectStart: 'y2';
        rectEnd: 'y1';
        rectOffset: 'x1';
    };

    export interface IChartistAxisOptions {
        highLow?: ChartistHighLow;
        labelInterpolationFnc?: (tick: any, index: number) => Object;
        labelOffset?: {
            x?: number;
            y?: number;
        };
        offset?: number;
        position?: 'start' | 'end';
        referenceValue?: number; // Only used by AutoScaleAxis and FixedScaleAxis, however internally Chartist assigns this option indiscriminately.
        showLabel?: boolean;
        showGrid?: boolean;
    }

    export interface IChartistAxis<
        U extends ChartistAxisUnitX | ChartistAxisUnitY,
        T = Object,
        O extends IChartistAxisOptions = IChartistAxisOptions
    > {
        chartRect: IChartistRect;
        axisLength: number;
        gridOffset: number;
        ticks: T[];
        options: O;
        units: U;
        counterUnits: U extends ChartistAxisUnitX ? ChartistAxisUnitY : ChartistAxisUnitX;

        projectValue(value: number, index: number, data: ChartistDataArray): number;
    }

    export interface IChartistAutoScaleAxisOptions extends IChartistAxisOptions {
        high?: number;
        low?: number;
        scaleMinSpace?: number;
        onlyInteger?: boolean;
    }

    export interface IChartistAutoScaleAxis<U extends ChartistAxisUnitX | ChartistAxisUnitY>
        extends IChartistAxis<U, number, IChartistAutoScaleAxisOptions> {
        bounds: ChartistBounds;
        range: ChartistRange;
    }

    interface ChartistAutoScaleAxisStatic {
        new <U extends ChartistAxisUnitX | ChartistAxisUnitY>(
            axisUnit: ChartistAxisUnitX | ChartistAxisUnitY,
            data: ChartistDataArray,
            chartRect: IChartistRect,
            options?: IChartistAutoScaleAxisOptions
        ): IChartistAutoScaleAxis<U>;
    }

    export interface IChartistFixedScaleAxisOptions extends IChartistAxisOptions {
        high?: number;
        low?: number;
        divisor?: number;
        ticks?: number[];
    }

    export interface IChartistFixedScaleAxis<U extends ChartistAxisUnitX | ChartistAxisUnitY>
        extends IChartistAxis<U, number, IChartistFixedScaleAxisOptions> {
        divisor: number;
        stepLength: number;
    }

    interface ChartistFixedScaleAxisStatic {
        new <U extends ChartistAxisUnitX | ChartistAxisUnitY>(
            axisUnit: ChartistAxisUnitX | ChartistAxisUnitY,
            data: ChartistDataArray,
            chartRect: IChartistRect,
            options?: IChartistFixedScaleAxisOptions
        ): IChartistFixedScaleAxis<U>;
    }

    export interface IChartistStepAxisOptions extends IChartistAxisOptions {
        ticks?: Object[];
        stretch?: boolean;
    }

    export interface IChartistStepAxis<U extends ChartistAxisUnitX | ChartistAxisUnitY>
        extends IChartistAxis<U, Object, IChartistStepAxisOptions> {
        stepLength: number;
    }

    interface ChartistStepAxisStatic {
        new<U extends ChartistAxisUnitX | ChartistAxisUnitY>(axisUnit: ChartistAxisUnitX | ChartistAxisUnitY, data: ChartistDataArray, chartRect: IChartistRect, options?: IChartistStepAxisOptions): IChartistStepAxis<U>;
    }

    export interface IChartistAreaDrawEvent {
        type: 'area';
        axisX: IChartistAxis<ChartistAxisUnitX>;
        axisY: IChartistAxis<ChartistAxisUnitY>;
        chartRect: IChartistRect;
        element: IChartistSvg<SVGPathElement>;
        group: IChartistSvg<SVGPathElement>;
        index: number;
        path: IChartistSvgPath;
        series: ChartistArraySeries;
        seriesIndex: number;
        values: number[] | Array<{ x: number; y: number }>;
    }

    export interface IChartistBarDrawEvent {
        type: 'bar';
        axisX: IChartistAxis<ChartistAxisUnitX>;
        axisY: IChartistAxis<ChartistAxisUnitY>;
        chartRect: IChartistRect;
        element: IChartistSvg<SVGLineElement>;
        group: IChartistSvg<SVGGElement>;
        index: number;
        meta: any;
        series: ChartistValueSeries | ChartistArraySeries;
        seriesIndex: number;
        value: number;
        x1: number;
        x2: number;
        y1: number;
        y2: number;
    }

    export interface IChartistGridBackgroundDrawEvent {
        type: 'gridBackground';
        group: IChartistSvg<SVGGElement>;
        element: IChartistSvg<SVGRectElement>;
    }

    export interface IChartistGridDrawEvent {
        type: 'grid';
        axis: IChartistAxis<ChartistAxisUnitX> | IChartistAxis<ChartistAxisUnitY>;
        index: number;
        group: IChartistSvg<SVGGElement>;
        element: IChartistSvg<SVGLineElement>;
        x1: number;
        x2: number;
        y1: number;
        y2: number;
    }

    export interface IChartistLabelDrawEvent {
        type: 'label';
        axis: IChartistAxis<ChartistAxisUnitX> | IChartistAxis<ChartistAxisUnitY>;
        element: IChartistSvg<SVGTextElement>;
        group: IChartistSvg<SVGGElement>;
        height?: number;
        index: number;
        text: string;
        width?: number;
        x: number;
        y: number;
    }

    export interface IChartistLineDrawEvent {
        type: 'line';
        axisX: IChartistAxis<ChartistAxisUnitX>;
        axisY: IChartistAxis<ChartistAxisUnitY>;
        chartRect: IChartistRect;
        element: IChartistSvg<SVGPathElement>;
        group: IChartistSvg<SVGGElement>;
        index: number;
        path: IChartistSvgPath;
        series: ChartistArraySeries;
        seriesIndex: number;
        seriesMeta: any;
        values: number[] | Array<{ x: number; y: number }>;
    }

    export interface IChartistPointDrawEvent {
        type: 'point';
        axisX: IChartistAxis<ChartistAxisUnitX>;
        axisY: IChartistAxis<ChartistAxisUnitY>;
        element: IChartistSvg<SVGLineElement>;
        group: IChartistSvg<SVGGElement>;
        index: number;
        meta?: any;
        series: ChartistArraySeriesObject;
        seriesIndex: number;
        value: { x?: number; y?: number };
        x: number;
        y: number;
    }

    export interface IChartistSliceDrawEvent {
        type: 'slice';
        center: { x: number; y: number };
        element: IChartistSvg<SVGPathElement>;
        endAngle: number;
        group: IChartistSvg<SVGGElement>;
        index: number;
        meta: any;
        path: IChartistSvgPath;
        radius: number;
        series: ChartistValueSeries;
        startAngle: number;
        totalDataSum: number;
        value: number;
    }

    export type ChartistDrawEvent =
        | IChartistAreaDrawEvent
        | IChartistBarDrawEvent
        | IChartistGridBackgroundDrawEvent
        | IChartistGridDrawEvent
        | IChartistLabelDrawEvent
        | IChartistLineDrawEvent
        | IChartistPointDrawEvent
        | IChartistSliceDrawEvent;

    export interface IChartistEventEmitter {
        /**
         * Add an event handler for a specific event
         */
        addEventHandler(event: 'draw', handler: (event: ChartistDrawEvent) => void): this;
        addEventHandler(event: string, handler: Function): this;

        /**
         * Remove an event handler of a specific event name or remove all event handlers for a specific event.
         */
        removeEventHandler(event: string, handler?: Function): this;

        /**
         * Use this function to emit an event. All handlers that are listening for this event will be triggered with the data parameter.
         */
        emit(event: 'draw', handler: (event: ChartistDrawEvent) => void): this;
        emit(event: string, data?: any): void;
    }

    export interface IChartistBase<D extends IChartistBaseData, O extends IChartOptions> {
        container: any;
        data: D;
        defaultOptions: O;
        options: O;
        responsiveOptions: Array<IResponsiveOptionTuple<O>>;

        eventEmitter: IChartistEventEmitter;

        supportsForeignObject: boolean;
        supportsAnimations: boolean;
        resizeListener: any;

        update(data: Object, options?: O, override?: boolean): void;

        detach(): void;

        /**
         * Use this function to register event handlers. The handler callbacks are synchronous and will run in the main thread rather than the event loop.
         */
        on: IChartistEventEmitter['addEventHandler'];

        /**
         * Use this function to un-register event handlers. If the handler function parameter is omitted all handlers for the given event will be un-registered.
         */
        off: IChartistEventEmitter['removeEventHandler'];
    }

    interface IChartistBarChart extends IChartistBase<IChartistData, IBarChartOptions> {
    }

    interface ChartistBarChartStatic {
        new (target: any, data: IChartistData, options?: IBarChartOptions, responsiveOptions?: Array<IResponsiveOptionTuple<IBarChartOptions>>): IChartistBarChart;
    }

    interface IChartistLineChart extends IChartistBase<IChartistArrayData, ILineChartOptions> {
    }

    interface ChartistLineChartStatic {
        new (target: any, data: IChartistArrayData, options?: ILineChartOptions, responsiveOptions?: Array<IResponsiveOptionTuple<ILineChartOptions>>): IChartistLineChart;
    }

    interface IChartistPieChart extends IChartistBase<IChartistScalarData, IPieChartOptions> {
    }

    interface ChartistPieChartStatic {
        new (target: any, data: IChartistScalarData, options?: IPieChartOptions, responsiveOptions?: Array<IResponsiveOptionTuple<IPieChartOptions>>): IChartistPieChart;
    }

    type ChartistChartAutoScaleAxisOptions = IChartistAutoScaleAxisOptions & {
        type: ChartistAutoScaleAxisStatic,
    }

    type ChartistChartFixedScaleAxisOptions = IChartistFixedScaleAxisOptions & {
        type: ChartistFixedScaleAxisStatic,
    }

    type ChartistChartStepAxisOptions = IChartistStepAxisOptions & {
        type: ChartistStepAxisStatic,
    }

    type ChartistChartAxisOptions = ChartistChartAutoScaleAxisOptions | ChartistChartFixedScaleAxisOptions | ChartistChartStepAxisOptions

    interface IChartOptions {
        /**
         * If true the whole data is reversed including labels, the series order as well as the whole series data arrays.
         */
        reverseData?: boolean;

        plugins?: Array<ChartistPlugin | [ChartistPlugin, any]>;
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
         * If specified the donut segments will be drawn as shapes instead of strokes.
         */
        donutSolid?: boolean;

        /**
         * Specify the donut stroke width, currently done in javascript for convenience. May move to CSS styles in the future.
         * This option can be set as number or string to specify a relative width (i.e. 100 or '30%').
         */
        donutWidth?: number | string;

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
        labelInterpolationFnc?: (value: any, index: number) => Object;

        /**
         * Label direction can be 'neutral', 'explode' or 'implode'.  Default is 'neutral'.  The labels anchor will be positioned based on those settings as well as the fact if the labels are on the right or left side of the center of the chart. Usually explode is useful when labels are positioned far away from the center.
         */
        labelDirection?: string;

        /**
         * If true the whole data is reversed including labels, the series order as well as the whole series data arrays.
         */
        reverseData?: boolean;

        /**
         * If true empty values will be ignored to avoid drawing unncessary slices and labels
         */
        ignoreEmptyValues?: boolean;
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
        axisX?: ChartistChartAxisOptions | (this['stackBars'] extends true ? IChartistStepAxisOptions : IChartistAutoScaleAxisOptions);
        axisY?: ChartistChartAxisOptions | (this['stackBars'] extends true ? IChartistAutoScaleAxisOptions : IChartistStepAxisOptions);
        width?: number | string;
        height?: number | string;
        high?: number;
        low?: number;
        ticks?: Array<string | number>;
        onlyInteger?: boolean;
        chartPadding?: IChartPadding;
        seriesBarDistance?: number;

        /**
         * If set to true this property will cause the series bars to be stacked and form a total for each series point. This will also influence the y-axis and the overall bounds of the chart. In stacked mode the seriesBarDistance property will have no effect.
         */
        stackBars?: boolean;
        stackMode?: 'overlap' | 'accumulate';

        horizontalBars?: boolean;
        distributeSeries?: boolean;
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
        axisX?: ChartistChartAxisOptions | IChartistStepAxisOptions;
        axisY?: ChartistChartAxisOptions | IChartistAutoScaleAxisOptions;
        width?: number | string;
        height?: number | string;
        showLine?: boolean;
        showPoint?: boolean;
        showArea?: boolean;
        areaBase?: number;
        lineSmooth?: Function | boolean;
        low?: number;
        high?: number;
        ticks?: Array<string | number>;
        chartPadding?: IChartPadding;
        fullWidth?: boolean;
        classNames?: ILineChartClasses;
        series?: {
            [key: string]: {
                lineSmooth?: Function | boolean;
                showLine?: boolean;
                showPoint?: boolean;
                showArea?: boolean;
                areaBase?: number;
            }
        }
    }

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
        gridBackground?: string;
        vertical?: string;
        horizontal?: string;
        start?: string;
        end?: string;
    }

    type SVGElementName = SVGElement | keyof SVGElementTagNameMap;
    type SVGElementType<T extends SVGElementName> = T extends keyof SVGElementTagNameMap ? SVGElementTagNameMap[T] : T;

    interface ChartistSvgStatic {
        new<T extends SVGElementName>(name: T, attributes?: Object, className?: string, parent?: Object, insertFirst?: boolean): IChartistSvg<SVGElementType<T>>;

        Easing: ChartistEasingStatic;

        List: ChartistSvgListStatic;

        Path: ChartistSvgPathStatic;

        /**
         * This method checks for support of a given SVG feature like Extensibility, SVG-animation or the like. Check http://www.w3.org/TR/SVG11/feature for a detailed list.
         */
        isSupported(feature: string): boolean;
    }

    interface IChartistSvg<E extends SVGElement> {

        // Don't let the underscore deceive you, this is documented public behavior (e.g. used in animation examples).
        _node: E;

        /**
         * Set attributes on, or gets an attribute of, the current SVG element of the wrapper you're currently working on.
         */
        attr(attributes: string, ns?: string): string;
        attr(attributes: {[key: string]: string}): this;

        /**
         * Returns a copy of the current SVG element.
         */
        clone(): this;

        /**
         * Create a new SVG element whose wrapper object will be selected for further operations. This way you can also create nested groups easily.
         */
        elem<T extends SVGElementName>(name: T, attributes?: Object, className?: string, insertFirst?: boolean): IChartistSvg<SVGElementType<T>>;

        /**
         * Returns the parent Chartist.SVG wrapper object
         */
        parent<T extends SVGElement = SVGElement>(): IChartistSvg<T>;

        /**
         * This method returns a Chartist.Svg wrapper around the root SVG element of the current tree.
         */
        root<T extends SVGElement = SVGElement>(): IChartistSvg<T>;

        /**
         * Find the first child SVG element of the current element that matches a CSS selector. The returned object is a Chartist.Svg wrapper.
         */
        querySelector<K extends SVGElementName>(selectors: K): IChartistSvg<SVGElementType<K>> | null;

        /**
         * Find the all child SVG elements of the current element that match a CSS selector. The returned object is a Chartist.Svg.List wrapper.
         */
        querySelectorAll<K extends SVGElementName>(selectors: K): ChartistSvgList<SVGElementType<K>> | null;

        /**
         * This method creates a foreignObject (see https://developer.mozilla.org/en-US/docs/Web/SVG/Element/foreignObject) that allows to embed HTML content into a SVG graphic. With the help of foreignObjects you can enable the usage of regular HTML elements inside of SVG where they are subject for SVG positioning and transformation but the Browser will use the HTML rendering capabilities for the containing DOM.
         */
        foreignObject(content: any, attributes?: Object, className?: string, insertFirst?: boolean): IChartistSvg<SVGForeignObjectElement>;

        /**
         * This method adds a new text element to the current Chartist.Svg wrapper.
         */
        text(t: string): this;

        /**
         * This method will clear all child nodes of the current wrapper object.
         */
        empty(): this;

        /**
         * This method will cause the current wrapper to remove itself from its parent wrapper. Use this method if you'd like to get rid of an element in a given DOM structure.
         */
        remove<T extends SVGElement = SVGElement>(): IChartistSvg<T>;

        /**
         * This method will replace the element with a new element that can be created outside of the current DOM.
         */
        replace<T extends SVGElement>(newElement: IChartistSvg<T>): IChartistSvg<T>;

        /**
         * This method will append an element to the current element as a child.
         */
        append<T extends SVGElement>(element: IChartistSvg<T>, insertFirst?: boolean): this;

        /**
         * Returns an array of class names that are attached to the current wrapper element. This method can not be chained further.
         */
        classes(): Array<string>;

        /**
         * Adds one or a space separated list of classes to the current element and ensures the classes are only existing once.
         *
         * @method addClass
         * @param names {string} A white space separated list of class names
         */
        addClass(names: string): this;

        /**
         * Removes one or a space separated list of classes from the current element.
         *
         * @method removeClass
         * @param names {string} A white space separated list of class names
         */
        removeClass(names: string): this;

        /**
         * Removes all classes from the current element.
         */
        removeAllClasses(): this;

        /**
         * Get element width using `getBoundingClientRect`
         */
        width(): number;

        /**
         * Get element height using `getBoundingClientRect`
         */
        height(): number;

        /**
         * The animate function lets you animate the current element with SMIL animations. You can add animations for multiple attributes at the same time by using an animation definition object. This object should contain SMIL animation attributes.
         */
        animate(animations: IChartistAnimations, guided?: boolean, eventEmitter?: IChartistEventEmitter): this;
    }

    interface IChartistAnimations {
        [Key: string]: IChartistAnimationOptions;
    }

    interface IChartistAnimationOptions {
        id?: string;
        dur: string | number;
        from: string | number;
        to: string | number;
        easing?: IChartistEasingDefinition | string;
        fill?: string;
        begin?: string | number;
    }

    interface IChartistEasingDefinition {
        0: number;
        1: number;
        2: number;
        3: number;
    }

    interface ChartistEasingStatic {
        easeInSine: IChartistEasingDefinition;
        easeOutSine: IChartistEasingDefinition;
        easeInOutSine: IChartistEasingDefinition;
        easeInQuad: IChartistEasingDefinition;
        easeOutQuad: IChartistEasingDefinition;
        easeInOutQuad: IChartistEasingDefinition;
        easeInCubic: IChartistEasingDefinition;
        easeOutCubic: IChartistEasingDefinition;
        easeInOutCubic: IChartistEasingDefinition;
        easeInQuart: IChartistEasingDefinition;
        easeOutQuart: IChartistEasingDefinition;
        easeInOutQuart: IChartistEasingDefinition;
        easeInQuint: IChartistEasingDefinition;
        easeOutQuint: IChartistEasingDefinition;
        easeInOutQuint: IChartistEasingDefinition;
        easeInExpo: IChartistEasingDefinition;
        easeOutExpo: IChartistEasingDefinition;
        easeInOutExpo: IChartistEasingDefinition;
        easeInCirc: IChartistEasingDefinition;
        easeOutCirc: IChartistEasingDefinition;
        easeInOutCirc: IChartistEasingDefinition;
        easeInBack: IChartistEasingDefinition;
        easeOutBack: IChartistEasingDefinition;
        easeInOutBack: IChartistEasingDefinition;
    }

    interface ChartistInterpolationStatic {

        /**
         * This interpolation function does not smooth the path and the result is only containing lines and no curves.
         */
        none(options?: IChartistInterpolationOptions): Function;

        /**
         * Simple smoothing creates horizontal handles that are positioned with a fraction of the length between two data points. You can use the divisor option to specify the amount of smoothing.
         */
        simple(options?: IChartistSimpleInterpolationOptions): Function;

        /**
         * Cardinal / Catmull-Rome spline interpolation is the default smoothing function in Chartist. It produces nice results where the splines will always meet the points. It produces some artifacts though when data values are increased or decreased rapidly. The line may not follow a very accurate path and if the line should be accurate this smoothing function does not produce the best results.
         */
        cardinal(options?: IChartistCardinalInterpolationOptions): Function;

        /**
         * Step interpolation will cause the line chart to move in steps rather than diagonal or smoothed lines. This interpolation will create additional points that will also be drawn when the showPoint option is enabled.
         */
        step(options?: IChartistStepInterpolationOptions): Function;
    }

    interface IChartistInterpolationOptions {
        fillHoles?: boolean;
    }

    interface IChartistSimpleInterpolationOptions extends IChartistInterpolationOptions {
        divisor?: number;
    }

    interface IChartistCardinalInterpolationOptions extends IChartistInterpolationOptions {
        tension?: number;
    }

    interface IChartistStepInterpolationOptions extends IChartistInterpolationOptions {
        postpone?: boolean;
    }

    interface ChartistSvgList<E extends SVGElement> {
        parent: IChartistSvg<E>['parent'];
        querySelector: IChartistSvg<E>['querySelector'];
        querySelectorAll: IChartistSvg<E>['querySelectorAll'];
        replace: IChartistSvg<E>['replace'];
        append: IChartistSvg<E>['append'];
        classes: IChartistSvg<E>['classes'];
        height: IChartistSvg<E>['height'];
        width: IChartistSvg<E>['width'];

        svgElements: IChartistSvg<E>[];
    }

    interface ChartistSvgListStatic {
        new<T extends SVGElement = SVGElement>(nodeList: T[] | NodeListOf<T>): ChartistSvgList<T>;
    }

    export interface IChartistMovePathElement {
        command: 'M' | 'm';
        x: number;
        y: number;
        data?: any;
    }

    export interface IChartistLinePathElement {
        command: 'L' | 'l';
        x: number;
        y: number;
        data?: any;
    }

    export interface IChartistCurvePathElement {
        command: 'C' | 'c';
        x1: number;
        y1: number;
        x2: number;
        y2: number;
        x: number;
        y: number;
        data?: any;
    }

    export interface IChartistArcPathElement {
        command: 'A' | 'a';
        rx: number;
        ry: number;
        xAr: number;
        lAf: number;
        sf: number;
        x: number;
        y: number;
        data?: any;
    }

    export type ChartistSvgPathElement = IChartistMovePathElement | IChartistLinePathElement | IChartistCurvePathElement | IChartistArcPathElement

    export type ChartistSvgPathTransformFunc = (pathElement: ChartistSvgPathElement, paramName: string, pathElementIndex: number, paramIndex: number, pathElements: ChartistSvgPathElement[]) => void;

    export interface IChartistSvgPathOptions {
        accuracy: number;
    }

    export interface IChartistSvgPath {
        pathElements: ChartistSvgPathElement[];
        pos: number;
        close: boolean;
        options: IChartistSvgPathOptions;

        /**
         * This function clones a whole path object with all its properties. This is a deep clone and path element objects will also be cloned.
         */
        clone(): this;

        /**
         * Gets or sets the current position (cursor) inside of the path. You can move around the cursor freely but limited to 0 or the count of existing elements. All modifications with element functions will insert new elements at the position of this cursor.
         */
        position(pos: number): this;
        position(): number;

        /**
         * Removes elements from the path starting at the current position.
         */
        remove(count: number): this;

        /**
         * Use this function to add a new move SVG path element.
         */
        move(
            x: number,
            y: number,
            relative?: boolean,
            data?: any
        ): this;

        /**
         * Use this function to add a new line SVG path element.
         */
        line(
            x: number,
            y: number,
            relative?: boolean,
            data?: any
        ): this;

        /**
         * Use this function to add a new curve SVG path element.
         */
        curve(
            x1: number,
            y1: number,
            x2: number,
            y2: number,
            x: number,
            y: number,
            relative?: boolean,
            data?: any,
        ): this;

        /**
         * Use this function to add a new non-bezier curve SVG path element.
         */
        arc(
            rx: number,
            ry: number,
            xAr: number,
            lAf: number,
            sf: number,
            x: number,
            y: number,
            relative?: boolean,
            data?: any
        ): this;

        /**
         * Parses an SVG path seen in the d attribute of path elements, and inserts the parsed elements into the existing path object at the current cursor position. Any closing path indicators (Z at the end of the path) will be ignored by the parser as this is provided by the close option in the options of the path object.
         */
        parse(path: string): this;

        /**
         * This function renders to current SVG path object into a final SVG string that can be used in the d attribute of SVG path elements. It uses the accuracy option to round big decimals. If the close parameter was set in the constructor of this path object then a path closing Z will be appended to the output string.
         */
        stringify(): string;

        /**
         * Scales all elements in the current SVG path object. There is an individual parameter for each coordinate. Scaling will also be done for control points of curves, affecting the given coordinate.
         */
        scale(x: number, y: number): this;

        /**
         * Translates all elements in the current SVG path object. The translation is relative and there is an individual parameter for each coordinate. Translation will also be done for control points of curves, affecting the given coordinate.
         */
        translate(x: number, y: number): this;

        /**
         * Translates all elements in the current SVG path object. The translation is relative and there is an individual parameter for each coordinate. Translation will also be done for control points of curves, affecting the given coordinate.
         */
        transform(transformFnc: ChartistSvgPathTransformFunc): this;
    }

    interface ChartistSvgPathStatic {
        /**
         * Contains the descriptors of supported element types in a SVG path.
         */
        elementDescriptions: {[command: string]: string[]};

        new(close?: boolean, options?: IChartistSvgPathOptions): IChartistSvgPath;

        /**
         * This static function on `Chartist.Svg.Path` is joining multiple paths together into one paths.
         */
        join(paths: IChartistSvgPath[], close?: boolean, options?: IChartistSvgPathOptions): IChartistSvgPath;
    }
}

declare var Chartist: Chartist.ChartistStatic;

export = Chartist;
export as namespace Chartist;
