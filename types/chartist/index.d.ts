// Type definitions for Chartist v0.9.81
// Project: https://github.com/gionkunz/chartist-js
// Definitions by: Matt Gibbs <https://github.com/mtgibbs>, Simon Pfeifer <https://github.com/psimonski>, Anastasiia Antonova <https://github.com/affilnost>, Sunny Juneja <https://github.com/sunnyrjuneja>, Sam Raudabaugh <https://github.com/raudabaugh>, Manuel Borrajo <https://github.com/borrajo>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

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

        Pie: IChartistPieChart;
        Bar: IChartistBarChart;
        Line: IChartistLineChart;
        Candle: IChartistCandleChart;

        FixedScaleAxis: IFixedScaleAxisStatic;
        AutoScaleAxis: IAutoScaleAxisStatic;
        StepAxis: IStepAxisStatic;

        Svg: ChartistSvgStatic;
        Interpolation: ChartistInterpolationStatic;

        noop: Function;

        alphaNumerate(n: number): string;

        extend(target: Object, ...sources: Object[]): Object;

        replaceAll(str: string, subStr: string, newSubStr: string): string;

        ensureUnit(value: number, unit: string): string;

        quantity(input: string | number): Object;

        query(query: Node | string): Node;

        times(length: number): Array<any>;

        sum(previous: number, current: number): number;

        mapMultiply(factor: number): (num: number) => number;

        mapAdd(addend: number): (num: number) => number;

        serialMap(arr: Array<any>, cb: Function): Array<any>;

        roundWithPrecision(value: number, digits?: number): number;

        getMultiValue(value: any, dimension?: any): number; // this method is not documented, but it is used in the examples

        serialize(data: Object | string | number): string;

        deserialize(data: string): Object | string | number;

        createSvg(container: Node, width: string, height: string, className: string): Object; // TODO: Figure out if this is returning a ChartistSVGWrapper or an actual SVGElement

        plugins: any;
    }

    interface IChartistEscapeMap {
        [Key: string]: string;
    }

    interface IResponsiveOptionTuple<T extends IChartOptions> extends Array<string | T> {
        0: string;
        1: T;
    }

    // these have no other purpose than to help define the types that can be placed on
    // a line chart axisX
    // in the actual chartist library these are classes that project their options onto
    // the parent class
    interface IFixedScaleAxisStatic {
    }

    interface IAutoScaleAxisStatic {
    }

    interface IStepAxisStatic {
    }

    // data formats are not well documented on all the ways they can be passed to the constructors
    // this definition gives some intellisense, but does not protect the user from misuse
    // TODO: come in and tidy this up and make it fit better
    interface IChartistData {
        labels?: Array<string> | Array<number> | Array<Date>;
        series: Array<IChartistSeriesData> | Array<Array<IChartistSeriesData>> | Array<Array<IChartistData>> | Array<number> | Array<Array<number>>;
    }

    interface IChartistSeriesData {
        name?: string;
        value?: number;
        data?: Array<number> | Array<{ x: number | Date, y: number }>;
        className?: string;
        meta?: any;
    }

    interface IChartistBase<T extends IChartOptions> {
        container: any;
        data: IChartistData;
        defaultOptions: T;
        options: T;
        responsiveOptions: Array<IResponsiveOptionTuple<T>>;

        // this most likely doesn't need to be exposed to the user
        eventEmitter: any;

        supportsForeignObject: boolean;
        supportsAnimations: boolean;
        resizeListener: any;

        plugins?: Array<any>; // all of these plugins seem to be functions with options, but keeping type any for now

        update(data: Object, options?: T, override?: boolean): void;

        detach(): void;

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
        new (target: any, data: IChartistData, options?: IPieChartOptions, responsiveOptions?: Array<IResponsiveOptionTuple<IPieChartOptions>>): IChartistPieChart;
    }

    interface IChartistLineChart extends IChartistBase<ILineChartOptions> {
        new (target: any, data: IChartistData, options?: ILineChartOptions, responsiveOptions?: Array<IResponsiveOptionTuple<ILineChartOptions>>): IChartistLineChart;
    }

    interface IChartistBarChart extends IChartistBase<IBarChartOptions> {
        new (target: any, data: IChartistData, options?: IBarChartOptions, responsiveOptions?: Array<IResponsiveOptionTuple<IBarChartOptions>>): IChartistBarChart;
    }

    interface IChartistCandleChart extends IChartistBase<ICandleChartOptions> {
        new (target: any, data: IChartistData, options?: ICandleChartOptions, responsiveOptions?: Array<IResponsiveOptionTuple<ICandleChartOptions>>): IChartistCandleChart;
    }

    interface IChartOptions {
        /**
         * If true the whole data is reversed including labels, the series order as well as the whole series data arrays.
         */
        reverseData?: boolean;

        plugins?: Array<any>;
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
        labelInterpolationFnc?: Function;

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
        axisX?: IBarChartAxis;
        axisY?: IBarChartAxis;
        width?: number | string;
        height?: number | string;
        high?: number;
        low?: number;
        ticks?: Array<string | number>;
        onlyInteger?: boolean;
        chartPadding?: IChartPadding;
        seriesBarDistance?: number;
        /**
         * Override the class names that are used to generate the SVG structure of the chart
         */
        classNames?: IBarChartClasses;
        /**
         * If set to true this property will cause the series bars to be stacked and form a total for each series point. This will also influence the y-axis and the overall bounds of the chart. In stacked mode the seriesBarDistance property will have no effect.
         */
        stackBars?: boolean;
        stackMode?: 'overlap' | 'accumulate';

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
        axisX?: IChartistStepAxis | IChartistFixedScaleAxis | IChartistAutoScaleAxis;
        axisY?: IChartistStepAxis | IChartistFixedScaleAxis | IChartistAutoScaleAxis;
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
    }

    interface IChartistStepAxis extends ILineChartAxis {
        type?: IStepAxisStatic;
        ticks?: Array<string> | Array<number>;
        stretch?: boolean;
    }

    interface IChartistFixedScaleAxis extends ILineChartAxis {
        type?: IFixedScaleAxisStatic;
        high?: number;
        low?: number;
        divisor?: number;
        ticks?: Array<string> | Array<number>;
    }

    interface IChartistAutoScaleAxis extends ILineChartAxis {
        high?: number;
        low?: number;
        scaleMinSpace?: number;
        onlyInteger?: boolean;
        referenceValue?: number;
        type?: IAutoScaleAxisStatic;
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

    interface ICandleChartOptions extends IChartOptions {

        /**
         * Options for X-Axis
         */
        axisX?: ICandleChartAxis;

        /**
         * Options for Y-Axis
         */
        axisY?: ICandleChartAxis;

        /**
         * Specify a fixed width for the chart as a string (i.e. '100px' or '50%')
         */
        width?: number | string;

        /**
         * Specify a fixed height for the chart as a string (i.e. '100px' or '50%')
         */
        height?: number | string;

        /**
         * Overriding the natural high of the chart allows you to zoom in or limit the charts highest displayed value
         */
        hight?: number | string;

        /**
         * Overriding the natural low of the chart allows you to zoom in or limit the charts lowest displayed value
         */
        low?: number | string;

        /**
         * Width of candle body in pixel (IMO is 2 px best minimum value)
         */
        candleWidth?: number | string;

        /**
         * Width of candle wick in pixel (IMO is 1 px best minimum value)
         */
        candleWickWidth?: number | string;

        /**
         * Use calculated x-axis step length, depending on the number of quotes to display, as candle width. Otherwise the candleWidth is being used.
         */
        useStepLengthAsCandleWidth?: boolean | string;

        /**
         * Use 1/3 of candle body width as width for the candle wick, otherwise the candleWickWidth is being used.
         */
        useOneThirdAsCandleWickWidth?: boolean | string;

        /**
         * Padding of the chart drawing area to the container element and labels as a number or padding object {top: 5, right: 5, bottom: 5, left: 5}
         */
        chartPadding?: IChartPadding | number;

        /**
         * When set to true, the last grid line on the x-axis is not drawn and the chart elements will expand to the full available width of the chart. For the last label to be drawncorrectly you might need to add chart padding or offset the last label with a draw event handler.
         */
        fullWidth?: boolean | string;

        /**
         * Override the class names that get used to generate the SVG structure of the chart
         */
        classNames?: ICandleChartClasses;
    }

    interface ICandleChartAxis {
        /**
         * The offset of the chart drawing area to the border of the container
         */
        offset?: number;
        /**
         * Position where labels are placed. Can be set to `start` or `end` where `start` is equivalent to left or top on vertical axis and `end` is equivalent to right or bottom on horizontal axis.
         */
        position?: string;
        /**
         * Allows you to correct label positioning on this axis by positive or negative x and y offset.
         */
        labelOffset?: {
            x?: number;
            y?: number;
        };
        /**
         * If labels should be shown or not
         */
        showLabel?: boolean;
        /**
         * If the axis grid should be drawn or not
         */
        showGrid?: boolean;
        /**
         * Interpolation function that allows you to intercept the value from the axis label
         */
        labelInterpolationFnc?: Function;
        /**
         * Set the axis type to be used to project values on this axis. If not defined, Chartist.StepAxis will be used for the X-Axis, where the ticks option will be set to the labels in the data and the stretch option will be set to the global fullWidth option. This type can be changed to any axis constructor available (e.g. Chartist.FixedScaleAxis), where all axis options should be present here.
         */
        type?: any;
    }

    interface ICandleChartClasses {
        chart?: string;
        label?: string;
        labelGroup?: string;
        series?: string;
        candlePositive?: string;
        candleNegative?: string,
        grid?: string,
        gridGroup?: string,
        gridBackground?: string,
        vertical?: string,
        horizontal?: string,
        start?: string,
        end?: string,
    }


    interface ChartistSvgStatic {
        new (name?: HTMLElement | string, attributes?: Object, className?: string, parent?: Object, insertFirst?: boolean): IChartistSvg;

        Easing: ChartistEasingStatic;

        /**
         * This method checks for support of a given SVG feature like Extensibility, SVG-animation or the like. Check http://www.w3.org/TR/SVG11/feature for a detailed list.
         */
        isSupported(feature: string): boolean;
    }

    interface IChartistSvg {
        /**
         * The SVG DOM element wrapped by IChartistSvg
         */
        _node: HTMLElement;

        /**
         * Set attributes on the current SVG element of the wrapper you're currently working on.
         */
        attr(attributes: Object | string, ns?: string): Object | string;

        /**
         * Create a new SVG element whose wrapper object will be selected for further operations. This way you can also create nested groups easily.
         */
        elem(name: string, attributes?: Object, className?: string, insertFirst?: boolean): IChartistSvg;

        /**
         * Returns the parent Chartist.SVG wrapper object
         */
        parent(): IChartistSvg;

        /**
         * This method returns a Chartist.Svg wrapper around the root SVG element of the current tree.
         */
        root(): IChartistSvg;

        /**
         * Find the first child SVG element of the current element that matches a CSS selector. The returned object is a Chartist.Svg wrapper.
         */
        querySelector(selector: string): IChartistSvg;

        /**
         * Find the all child SVG elements of the current element that match a CSS selector. The returned object is a Chartist.Svg.List wrapper.
         */
        querySelectorAll(selector: string): any; // this returns an svg wrapper list in the docs, need to see if that's just an array or a special list

        /**
         * This method creates a foreignObject (see https://developer.mozilla.org/en-US/docs/Web/SVG/Element/foreignObject) that allows to embed HTML content into a SVG graphic. With the help of foreignObjects you can enable the usage of regular HTML elements inside of SVG where they are subject for SVG positioning and transformation but the Browser will use the HTML rendering capabilities for the containing DOM.
         */
        foreignObject(content: any, attributes?: Object, className?: string, insertFirst?: boolean): IChartistSvg;

        /**
         * This method adds a new text element to the current Chartist.Svg wrapper.
         */
        text(t: string): IChartistSvg;

        /**
         * This method will clear all child nodes of the current wrapper object.
         */
        empty(): IChartistSvg;

        /**
         * This method will cause the current wrapper to remove itself from its parent wrapper. Use this method if you'd like to get rid of an element in a given DOM structure.
         */
        remove(): IChartistSvg;

        /**
         * This method will replace the element with a new element that can be created outside of the current DOM.
         */
        replace(): IChartistSvg;

        /**
         * This method will append an element to the current element as a child.
         */
        append(element: IChartistSvg, insertFirst?: boolean): IChartistSvg;

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
        addClass(names: string): IChartistSvg;

        /**
         * Removes one or a space separated list of classes from the current element.
         *
         * @method removeClass
         * @param names {string} A white space separated list of class names
         */
        removeClass(names: string): IChartistSvg;

        /**
         * Removes all classes from the current element.
         */
        removeAllClasses(): IChartistSvg;

        /**
         * Get element height with fallback to svg BoundingBox or parent container dimensions
         */
        height(): number;

        /**
         * The animate function lets you animate the current element with SMIL animations. You can add animations for multiple attributes at the same time by using an animation definition object. This object should contain SMIL animation attributes.
         */
        animate(animations: IChartistAnimations, guided: boolean, eventEmitter: Object): IChartistSvg;

        /**
         * "Safe" way to get property value from svg BoundingBox. This is a workaround. Firefox throws an NS_ERROR_FAILURE error if getBBox() is called on an invisible node.
         * THIS IS A WORKAROUND
         */
        getBBoxProperty(node: SVGElement, prop: string): string; // TODO: find a good example of this and add it to the tests, it might belong to static
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
        begin?: string;
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
}

declare var Chartist: Chartist.ChartistStatic;

export = Chartist;
export as namespace Chartist;
