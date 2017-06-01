// Type definitions for Victory 0.9.1
// Project: https://github.com/FormidableLabs/victory
// Definitions by: Alexey Svetliakov <https://github.com/asvetliakov>
//                 snerks <https://github.com/snerks>
//                 Krzysztof Cebula <https://github.com/Havret>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

/// <reference types="react"/>

declare module "victory" {
    import * as React from "react";
    /**
     * Single animation object to interpolate
     */
    export type AnimationStyle = { [key: string ]: string | number };
    /**
     * Animation styles to interpolate
     */
    export type AnimationData = AnimationStyle | AnimationStyle[];
    export type AnimationEasing =
        "back" | "backIn" | "backOut" | "backInOut" | "bounce" | "bounceIn" | "bounceOut" |
            "bounceInOut" | "circle" | "circleIn" | "circleOut" | "circleInOut" | "linear" |
            "linearIn" | "linearOut" | "linearInOut" | "cubic" | "cubicIn" | "cubicOut" |
            "cubicInOut" | "elastic" | "elasticIn" | "elasticOut" | "elasticInOut" | "exp" |
            "expIn" | "expOut" | "expInOut" | "poly" | "polyIn" | "polyOut" | "polyInOut" |
            "quad" | "quadIn" | "quadOut" | "quadInOut" | "sin" | "sinIn" | "sinOut" | "sinInOut";

    // Many victory components accept string or number or callback which returns string or number
    type StringOrNumberOrCallback = string | number | { (): string | number };

    /**
     * Style interface used in components/themeing
     */
    export interface VictoryStyleInterface {
        parent?: React.CSSProperties;
        data?: React.CSSProperties;
        labels?: React.CSSProperties;
        tickLabels?: React.CSSProperties;
    }

    export interface VictoryAnimationProps {
        /**
         * The child of should be a function that takes an object of tweened values and returns a component to render.
         * @param style
         */
        children?: (style: AnimationStyle) => React.ReactElement<any>;
        /**
         * The number of milliseconds the animation should take to complete.
         * @default 1000
         */
        duration?: number;
        /**
         * The easing prop specifies an easing function name to use for tweening.
         * @default "quadInOut"
         */
        easing?: AnimationEasing;
        /**
         * The delay prop specifies a delay in milliseconds before the animation begins.
         * If multiple values are in the animation queue, it is the delay between each animation.
         * @default 0
         */
        delay?: number;
        /**
         * The onEnd prop specifies a function to run when the animation ends. If multiple animations are in the queue, it is called after the last animation.
         */
        onEnd?: () => void;
        /**
         * The data prop specifies the latest set of values to tween to.
         * When this prop changes, VictoryAnimation will begin animating from the current value to the new value.
         * When given an array of values, VictoryAnimation will use it as an animation queue.
         * @default {}
         */
        data?: AnimationData;
    }

    /**
     * VictoryAnimation animates prop changes for any React component.
     * Just use a child function inside VictoryAnimation that accepts an object of tweened values and returns a component to render.
     */
    export class VictoryAnimation extends React.Component<VictoryAnimationProps, any> {}

    /**
     * Text anchor type
     */
    type TextAnchorType = "start" | "middle" | "end" | "inherit";
    /**
     * Vertical anchor type
     */
    type VerticalAnchorType = "start" | "middle" | "end";

    export interface VictoryLabelProps {
        /**
         * Specifies the angle to rotate the text by.
         */
        angle?: string | number;
        /**
         * The capHeight prop defines a text metric for the font being used: the expected height of capital letters.
         * This is necessary because of SVG, which (a) positions the *bottom* of the text at `y`, and (b) has no notion of line height.
         * The value should ideally use the same units as `lineHeight` and `dy`, preferably ems. If given a unitless number, it is assumed to be ems.
         * @default "0.71em"
         */
        capHeight?: StringOrNumberOrCallback;
        /**
         * Victory components can pass a datum prop to their label component. This can be used to calculate functional styles, and determine child text
         */
        datum?: {};
        /**
         * Labels that apply to an entire data series will recieve the entire series as `data` instead of an individual datum prop.
         */
        data?: any[];
        /**
         * The events prop attaches arbitrary event handlers to the label component.
         * Event handlers are currently only called with their corresponding events.
         */
        events?: React.DOMAttributes<any>;
        /**
         * All Victory components will pass a text prop to their label component.
         * This defines the content of the label when child nodes are absent. It will be ignored if children are provided.
         */
        text?: StringOrNumberOrCallback;
        /**
         * The children of this component define the content of the label.
         * This makes using the component similar to normal HTML spans or labels. strings, numbers, and functions of data / value are supported.
         */
        children?: StringOrNumberOrCallback;
        /**
         * The lineHeight prop defines how much space a single line of text should take up.
         * Note that SVG has no notion of line-height, so the positioning may differ slightly from what you would expect with CSS,
         * but the result is similar: a roughly equal amount of extra space is distributed above and below the line of text.
         * The value should ideally use the same units as `capHeight` and `dy`, preferably ems.
         * If given a unitless number, it is assumed to be ems.
         * @default 1
         */
        lineHeight?: StringOrNumberOrCallback;
        /**
         * The style prop applies CSS properties to the rendered `<text>` element.
         */
        style?: React.CSSProperties;
        /**
         * The textAnchor prop defines how the text is horizontally positioned relative to the given `x` and `y` coordinates.
         */
        textAnchor?: TextAnchorType | { (): TextAnchorType };
        /**
         * The verticalAnchor prop defines how the text is vertically positioned relative to the given `x` and `y` coordinates.
         */
        verticalAnchor?: VerticalAnchorType | { (): VerticalAnchorType };
        /**
         * The transform prop applies a transform to the rendered `<text>` element.
         * In addition to being a string, it can be an object containing transform definitions for easier authoring.
         */
        transform?: string | {} | { (): string | {} };
        /**
         * The x prop defines the x coordinate to use as a basis for horizontal positioning.
         */
        x?: number;
        /**
         * The y prop defines the y coordinate to use as a basis for vertical positioning.
         */
        y?: number;
        /**
         * The dx prop defines a horizontal shift from the `x` coordinate.
         */
        dx?: StringOrNumberOrCallback;
        /**
         * The dy prop defines a vertical shift from the `y` coordinate.
         * Since this component already accounts for `capHeight`, `lineHeight`, and `verticalAnchor`, this will usually not be necessary.
         */
        dy?: StringOrNumberOrCallback;
    }

    /**
     * VictoryLabel is a text component that provides several enhancements over SVG’s <text> element.
     */
    export class VictoryLabel extends React.Component<VictoryLabelProps, any> {}

    export interface VictoryContainerProps {
        /**
         * The style prop specifies styles for your VictoryContainer. Any valid inline style properties
         * will be applied. Height and width should be specified via the height
         * and width props, as they are used to calculate the alignment of
         * components within the container. Styles from the child component will
         * also be passed, if any exist.
         * @examples {border: 1px solid red}
         */
        style?: React.CSSProperties;
        /**
         * The height props specifies the height the svg viewBox of the container.
         * This value should be given as a number of pixels. If no height prop
         * is given, the height prop from the child component passed will be used.
         */
        height?: number;
        /**
         * The width props specifies the width of the svg viewBox of the container
         * This value should be given as a number of pixels. If no width prop
         * is given, the width prop from the child component passed will be used.
         */
        width?: number;
        /**
         * The events prop attaches arbitrary event handlers to the container component.
         * Event handlers passed from other Victory components are called with their
         * corresponding events as well as scale, style, width, height, and data when
         * applicable. Use the invert method to convert event coordinate information to
         * data. `scale.x.invert(evt.offsetX)`.
         * @examples {{ onClick: (evt) => alert(`x: ${evt.clientX}, y: ${evt.clientY}`)}}
         */
        events?: React.DOMAttributes<any>;
        /**
         * The title prop specifies the title to be applied to the SVG to assist
         * accessibility for screen readers. The more descriptive this title is, the more
         * useful it will be. If no title prop is passed, it will default to Victory Chart.
         * @example "Popularity of Dog Breeds by Percentage"
         * @default "Victory Chart"
         */
        title?: string;
        /**
         * The desc prop specifies the description of the chart/SVG to assist with
         * accessibility for screen readers. The more info about the chart provided in
         * the description, the more usable it will be for people using screen readers.
         * This prop defaults to an empty string.
         * @example "Golden retreivers make up 30%, Labs make up 25%, and other dog breeds are
         * not represented above 5% each."
         * @default ""
         */
        desc?: string;
    }
    export class VictoryContainer extends React.Component<VictoryContainerProps, any> {}

    // Note: Many SVG attributes are missed in CSSProperties interface
    export interface VictoryThemeDefinition {
        area?: VictoryStyleInterface;
        axis?: {
            axis: React.CSSProperties;
            axisLabel: React.CSSProperties;
            grid: React.CSSProperties;
            ticks: React.CSSProperties;
            tickLabels: React.CSSProperties;
        };
        bar?: VictoryStyleInterface;
        candlestick?: VictoryStyleInterface & {
            props: {
                width: number;
                height: number;
                candleColors: {
                    positive: string;
                    negative: string;
                };
            };
        };
        line?: VictoryStyleInterface;
        pie?: {
            props: {
                width: number;
                height: number;
                colorScale: string[];
            };
            style: VictoryStyleInterface;
        };
        scatter?: VictoryStyleInterface;
        props?: {
            width: number;
            height: number;
            colorScale: string[];
        };
    }

    interface VictoryThemeInterface {
        /**
         * Default theme
         */
        material: VictoryThemeDefinition;
    }
    /**
     * Available themes
     */
    export const VictoryTheme: VictoryThemeInterface;

    /**
     * Animate object used in components
     */
    export interface AnimatePropTypeInterface {
        /**
         * Animation duration
         */
        duration: number;
        /**
         * Animation end callback
         */
        onEnd?: () => void;
        /**
         * Animation exit transition configuration
         */
        onExit?: {
            duration?: number;
            before?: (datum: any) => AnimationStyle;
        };
        /**
         * Animation enter transition configuration
         */
        onEnter?: {
            duration?: number;
            before?: (datum: any) => AnimationStyle;
            after?: (datum: any) => AnimationStyle;
        };
        /**
         * The easing prop specifies an easing function name to use for tweening.
         * @default "quadInOut"
         */
        easing?: AnimationEasing;
    }

    /**
     * Return value for eventHandlers values
     */
    interface EventCallbackInterface<TTarget, TEventKey> {
        /**
         * Use only in:
         * - VictoryChart
         * - VictoryStack
         */
        childName?: string;
        target?: TTarget;
        eventKey?: TEventKey;
        /**
         * Will be called with the calculated props for the individual selected element and result will override
         * props of selected element via object assignment
         * @param props
         */
        mutation: (props: any) => any;
    }

    export interface EventPropTypeInterface<TTarget, TEventKey> {
        /**
         * Use only in:
         * - VictoryChart
         * - VictoryStack
         */
        childName?: string;
        /**
         * Targets may be any valid style namespace for a given component
         */
        target: TTarget;
        /**
         *
         */
        eventKey?: TEventKey;
        /**
         * Event handlers map. Keys are standard event names (such as onClick) and values are event callbacks
         */
        eventHandlers: {
            [key: string]: {
                (event: React.SyntheticEvent<any>): EventCallbackInterface<TTarget, TEventKey> } |
                { (event: React.SyntheticEvent<any>): EventCallbackInterface<TTarget, TEventKey>[]
            }
        };
    }

    /**
     * Data domain type
     */
    type DomainPropType = [number, number] | {
        x: [number, number];
        y: [number, number];
    };
    /**
     * Domain padding
     */
    type DomainPaddingPropType = number | {
        x?: number;
        y?: number;
    };

    /**
     * D3 scale function shape. Don't want to introduce typing dependency to d3
     */
    interface D3Scale {
        domain: () => any;
        range: () => any;
        copy: () => any;
    }
    /**
     * Acceptable scale types
     */
    type ScalePropType = "linear" | "time" | "log" | "sqrt";

    /**
     * Category prop type
     */
    type CategoryPropType = string[] | {
        x: string[]
        y: string[]
    };

    /**
     * Data getter property type
     */
    type DataGetterPropType = number | string | string[] | { (data: any): number | string | string[] };

    type InterpolationPropType = "basis" | "basisClosed" | "basisOpen" | "bundle" |
        "cardinal" | "cardinalClosed" | "cardinalOpen" |
        "catmullRom" | "catmullRomClosed" | "catmullRomOpen" |
        "linear" | "linearClosed" | "monotoneX" | "monotoneY" |
        "natural" | "radial" | "step" | "stepAfter" | "stepBefore";

    type ColorScalePropType = "greyscale" | "qualitative" | "heatmap" | "warm" | "cool" | "red" | "green" | "blue" | string[];
    /**
     * Common properties
     */
    interface VictoryCommonProps {
        /**
         * The animate prop specifies props for VictoryAnimation to use.
         * The animate prop should also be used to specify enter and exit
         * transition configurations with the `onExit` and `onEnter` namespaces respectively.
         * @example
         * {duration: 500, onExit: () => {}, onEnter: {duration: 500, before: () => ({y: 0})})}
         */
        animate?: AnimatePropTypeInterface;
        /**
         * The name prop is used to reference a component instance when defining shared events.
         */
        name?: string;
        /**
         * The height props specifies the height the svg viewBox of the chart container.
         * This value should be given as a number of pixels
         */
        height?: number;
        /**
         * The padding props specifies the amount of padding in number of pixels between
         * the edge of the chart and any rendered child components. This prop can be given
         * as a number or as an object with padding specified for top, bottom, left
         * and right.
         * @default 50
         */
        padding?: number | {
            top?: number;
            bottom?: number;
            left?: number;
            right?: number;
        };
        /**
         * The scale prop determines which scales your chart should use. This prop can be
         * given as a string specifying a supported scale ("linear", "time", "log", "sqrt"),
         * as a d3 scale function, or as an object with scales specified for x and y
         * @example d3Scale.time(), {x: "linear", y: "log"}
         * @default "linear"
         */
        scale?: ScalePropType | D3Scale | {
            x?: ScalePropType | D3Scale;
            y?: ScalePropType | D3Scale;
        };
        /**
         * The standalone prop determines whether the component will render a standalone svg
         * or a <g> tag that will be included in an external svg. Set standalone to false to
         * compose VictoryAxis with other components within an enclosing <svg> tag.
         * @default true
         */
        standalone?: boolean;
        /**
         * The width props specifies the width of the svg viewBox of the chart container
         * This value should be given as a number of pixels
         */
        width?: number;
        /**
         * The containerComponent prop takes an entire component which will be used to
         * create a container element for standalone charts.
         * The new element created from the passed containerComponent wil be provided with
         * these props from VictoryArea: height, width, children
         * (the chart itself) and style. Props that are not provided by the
         * child chart component include title and desc, both of which
         * are intended to add accessibility to Victory components. The more descriptive these props
         * are, the more accessible your data will be for people using screen readers.
         * Any of these props may be overridden by passing in props to the supplied component,
         * or modified or ignored within the custom component itself. If a dataComponent is
         * not provided, VictoryArea will use the default VictoryContainer component.
         * @example <VictoryContainer title="Chart of Dog Breeds" desc="This chart shows how popular each dog breed is by percentage in Seattle." />
         * @default <VictoryContainer/>
         */
        containerComponent?: React.ReactElement<any>;
        /**
         * The theme prop takes a style object with nested data, labels, and parent objects.
         * You can create this object yourself, or you can use a theme provided by Victory.
         * When using VictoryArea as a solo component, implement the theme directly on
         * VictoryArea. If you are wrapping VictoryArea in VictoryChart, VictoryStack, or
         * VictoryGroup, please call the theme on the outermost wrapper component instead.
         * @example theme={VictoryTheme.material}
         * http://www.github.com/FormidableLabs/victory-core/tree/master/src/victory-theme/material.js
         */
        theme?: VictoryThemeDefinition;
        /**
         * The groupComponent prop takes an entire component which will be used to
         * create group elements for use within container elements. This prop defaults
         * to a <g> tag on web, and a react-native-svg <G> tag on mobile
         * @default <g/>
         */
        groupComponent?: React.ReactElement<any>;
    }

    /**
     * Common properties for all data components
     */
    interface VictoryDatableProps {
        /**
         * The categories prop specifies how categorical data for a chart should be ordered.
         * This prop should be given as an array of string values, or an object with
         * these arrays of values specified for x and y. If this prop is not set,
         * categorical data will be plotted in the order it was given in the data array
         * @example ["dogs", "cats", "mice"]
         */
        categories?: CategoryPropType;
        /**
         * The data prop specifies the data to be plotted. Data should be in the form of an array
         * of data points, or an array of arrays of data points for multiple datasets.
         * Each data point may be any format you wish (depending on the `x` and `y` accessor props),
         * but by default, an object with x and y properties is expected.
         * @example [{x: 1, y: 2}, {x: 2, y: 3}], [[1, 2], [2, 3]],
         * [[{x: "a", y: 1}, {x: "b", y: 2}], [{x: "a", y: 2}, {x: "b", y: 3}]]
         */
        data?: any[];
        /**
         * The dataComponent prop takes an entire component which will be used to create an area.
         * The new element created from the passed dataComponent will be provided with the
         * following properties calculated by VictoryArea: a scale, style, events, interpolation,
         * and an array of modified data objects (including x, y, and calculated y0 and y1).
         * Any of these props may be overridden by passing in props to the supplied component,
         * or modified or ignored within the custom component itself. If a dataComponent is
         * not provided, VictoryArea will use its default Area component.
         * @default <Area/>
         */
        dataComponent?: React.ReactElement<any>;
        /**
         * The domain prop describes the range of values your chart will cover. This prop can be
         * given as a array of the minimum and maximum expected values for your bar chart,
         * or as an object that specifies separate arrays for x and y.
         * If this prop is not provided, a domain will be calculated from data, or other
         * available information.
         * @example [-1, 1], {x: [0, 100], y: [0, 1]}
         */
        domain?: DomainPropType;
        /**
         * The x prop specifies how to access the X value of each data point.
         * If given as a function, it will be run on each data point, and returned value will be used.
         * If given as an integer, it will be used as an array index for array-type data points.
         * If given as a string, it will be used as a property key for object-type data points.
         * If given as an array of strings, or a string containing dots or brackets,
         * it will be used as a nested object property path (for details see Lodash docs for _.get).
         * If `null` or `undefined`, the data value will be used as is (identity function/pass-through).
         * @example 0, 'x', 'x.value.nested.1.thing', 'x[2].also.nested', null, d => Math.sin(d)
         * @default "x"
         */
        x?: DataGetterPropType;
        /**
         * The y prop specifies how to access the Y value of each data point.
         * If given as a function, it will be run on each data point, and returned value will be used.
         * If given as an integer, it will be used as an array index for array-type data points.
         * If given as a string, it will be used as a property key for object-type data points.
         * If given as an array of strings, or a string containing dots or brackets,
         * it will be used as a nested object property path (for details see Lodash docs for _.get).
         * If `null` or `undefined`, the data value will be used as is (identity function/pass-through).
         * @example 0, 'y', 'y.value.nested.1.thing', 'y[2].also.nested', null, d => Math.sin(d)
         * @default "y"
         */
        y?: DataGetterPropType;
    }

    // Common labable interface
    interface VictoryLabableProps {
        /**
         * The labelComponent prop takes in an entire label component which will be used
         * to create a label for the area. The new element created from the passed labelComponent
         * will be supplied with the following properties: x, y, index, data, verticalAnchor,
         * textAnchor, angle, style, text, and events. any of these props may be overridden
         * by passing in props to the supplied component, or modified or ignored within
         * the custom component itself. If labelComponent is omitted, a new VictoryLabel
         * will be created with props described above. This labelComponent prop should be used to
         * provide a series label for VictoryArea. If individual labels are required for each
         * data point, they should be created by composing VictoryArea with VictoryScatter
         * @default <VictoryLabel/>
         */
        labelComponent?: React.ReactElement<any>;
    }

    interface VictoryMultiLabeableProps extends VictoryLabableProps {
        /**
         * The labels prop defines labels that will appear above each bar in your chart.
         * This prop should be given as an array of values or as a function of data.
         * If given as an array, the number of elements in the array should be equal to
         * the length of the data array. Labels may also be added directly to the data object
         * like data={[{x: 1, y: 1, label: "first"}]}.
         * @example ["spring", "summer", "fall", "winter"], (datum) => datum.title
         */
        labels?: string[] | { (data: any): string };
    }

    interface VictorySingleLabableProps extends VictoryLabableProps {
        /**
         * The label prop defines the label that will appear at the edge of the area.
         * This prop should be given a string or as a function of data. If individual
         * labels are required for each data point, they should be created by composing
         * VictoryArea with VictoryScatter
         * @example: "Series 1", (data) => `${data.length} points`
         */
        label?: string | { (data: any): string };
    }

    export interface VictoryAreaProps extends VictoryCommonProps, VictoryDatableProps, VictorySingleLabableProps {
        /**
         * The event prop take an array of event objects. Event objects are composed of
         * a target, an eventKey, and eventHandlers. Targets may be any valid style namespace
         * for a given component, so "data" and "labels" are all valid targets for VictoryArea events.
         * Since VictoryArea only renders a single element, the eventKey property is not used.
         * The eventHandlers object should be given as an object whose keys are standard
         * event names (i.e. onClick) and whose values are event callbacks. The return value
         * of an event handler is used to modify elemnts. The return value should be given
         * as an object or an array of objects with optional target and eventKey keys,
         * and a mutation key whose value is a function. The target and eventKey keys
         * will default to those corresponding to the element the event handler was attached to.
         * The mutation function will be called with the calculated props for the individual selected
         * element (i.e. an area), and the object returned from the mutation function
         * will override the props of the selected element via object assignment.
         * @example
         * events={[
         *   {
         *     target: "data",
         *     eventHandlers: {
         *       onClick: () => {
         *         return [
         *            {
         *              mutation: (props) => {
         *                return {style: merge({}, props.style, {fill: "orange"})};
         *              }
         *            }, {
         *              target: "labels",
         *              mutation: () => {
         *                return {text: "hey"};
         *              }
         *            }
         *          ];
         *       }
         *     }
         *   }
         * ]}
         *}}
         */
        events?: EventPropTypeInterface<"data" | "labels" | "parent", "all">[];
        /**
         * The interpolation prop determines how data points should be connected when plotting a line
         * @default "linear"
         */
        interpolation?: InterpolationPropType;
        /**
         * The samples prop specifies how many individual points to plot when plotting
         * y as a function of x. Samples is ignored if x props are provided instead.
         * @default 50
         */
        samples?: number;
        /**
         * The style prop specifies styles for your VictoryArea. Any valid inline style properties
         * will be applied. Height, width, and padding should be specified via the height,
         * width, and padding props, as they are used to calculate the alignment of
         * components within chart.
         * @example {data: {fill: "red"}, labels: {fontSize: 12}}
         */
        style?: VictoryStyleInterface;
    }
    /**
     * Draw area charts with React. VictoryArea is a composable component, so it doesn't include axes.
     * Add VictoryArea as a child of VictoryChart for a complete chart.
     */
    export class VictoryArea extends React.Component<VictoryAreaProps, any> {}

    export interface VictoryAxisProps extends VictoryCommonProps {
        /**
         * The axisComponent prop takes in an entire component which will be used
         * to create the axis line. The new element created from the passed axisComponent
         * will be supplied with the following properties: x1, y1, x2, y2, style and events.
         * Any of these props may be overridden by passing in props to the supplied component,
         * or modified or ignored within the custom component itself. If an axisComponent
         * is not supplied, VictoryAxis will render its default AxisLine component.
         * @default <AxisLine/>
         */
        axisComponent?: React.ReactElement<any>;
        /**
         * The axisLabelComponent prop takes in an entire component which will be used
         * to create the axis label. The new element created from the passed axisLabelComponent
         * will be supplied with the following properties: x, y, verticalAnchor, textAnchor,
         * angle, transform, style and events. Any of these props may be overridden by
         * passing in props to the supplied component, or modified or ignored within
         * the custom component itself. If an axisLabelComponent is not supplied, a new
         * VictoryLabel will be created with props described above
         * @default <VictoryLabel/>
         */
        axisLabelComponent?: React.ReactElement<any>;
        /**
         * This prop specifies whether a given axis is intended to cross another axis.
         */
        crossAxis?: boolean;
        /**
         * The dependentAxis prop specifies whether the axis corresponds to the
         * dependent variable (usually y). This prop is useful when composing axis
         * with other components to form a chart.
         */
        dependentAxis?: boolean;
        /**
         * The domain prop describes the range of values your axis will include. This prop should be
         * given as a array of the minimum and maximum expected values for your axis.
         * If this value is not given it will be calculated based on the scale or tickValues.
         * @examples [-1, 1]
         */
        domain?: DomainPropType;
        /**
         * The event prop take an array of event objects. Event objects are composed of
         * a target, an eventKey, and eventHandlers. Targets may be any valid style namespace
         * for a given component, so "axis", "axisLabel", "ticks", "tickLabels", and "grid" are
         * all valid targets for VictoryAxis events. The eventKey may optionally be used to select a
         * single element by index rather than an entire set. The eventHandlers object
         * should be given as an object whose keys are standard event names (i.e. onClick)
         * and whose values are event callbacks. The return value of an event handler
         * be used to modify other elemnts. The return value should be given as an object or
         * an array of objects with optional target and eventKey keys, and a mutation
         * key whose value is a function. The target and eventKey keys will default to those
         * corresponding to the element the event handler was attached to. The mutation
         * function will be called with the calculated props for the individual selected
         * element (i.e. a single tick), and the object returned from the mutation function
         * will override the props of the selected element via object assignment.
         * @examples
         * events={[
         *   {
         *     target: "grid",
         *     eventKey: 2,
         *     eventHandlers: {
         *       onClick: () => {
         *         return [
         *           {
         *             mutation: (props) => {
         *               return {style: merge({}, props.style, {stroke: "orange"})};
         *             }
         *           }, {
         *             target: "tickLabels",
         *             mutation: () => {
         *               return {text: "hey"};
         *             }
         *           }
         *         ];
         *       }
         *     }
         *   }
         * ]}
         *}}
         */
        events?: EventPropTypeInterface<"axis" | "axisLabel" | "grid" | "ticks" | "tickLabels" | "parent", number | string>[];
        /**
         * The gridComponent prop takes in an entire component which will be used
         * to create grid lines. The new element created from the passed gridComponent
         * will be supplied with the following properties: x1, y1, x2, y2, tick, style and events.
         * Any of these props may be overridden by passing in props to the supplied component,
         * or modified or ignored within the custom component itself. If a gridComponent
         * is not supplied, VictoryAxis will render its default GridLine component.
         * @default <GridLine/>
         */
        gridComponent?: React.ReactElement<any>;
        /**
         * The label prop defines the label that will appear along the axis. This
         * prop should be given as a value or an entire, HTML-complete label
         * component. If a label component is given, it will be cloned. The new
         * element's properties x, y, textAnchor, verticalAnchor, and transform
         * will have defaults provided by the axis; styles filled out with
         * defaults provided by the axis, and overrides from the label component.
         * If a value is given, a new VictoryLabel will be created with props and
         * styles from the axis.
         */
        label?: any;
        /**
         * This value describes how far from the "edge" of its permitted area each axis
         * will be set back in the x-direction.  If this prop is not given,
         * the offset is calculated based on font size, axis orientation, and label padding.
         */
        offsetX?: number;
        /**
         * This value describes how far from the "edge" of its permitted area each axis
         * will be set back in the y-direction.  If this prop is not given,
         * the offset is calculated based on font size, axis orientation, and label padding.
         */
        offsetY?: number;
        /**
         * The orientation prop specifies the position and orientation of your axis.
         */
        orientation?: "top" | "bottom" | "left" | "right";
        /**
         * The style prop specifies styles for your VictoryAxis. Any valid inline style properties
         * will be applied. Height, width, and padding should be specified via the height,
         * width, and padding props, as they are used to calculate the alignment of
         * components within chart.
         * @example {axis: {stroke: "#756f6a"}, grid: {stroke: "grey"}, ticks: {stroke: "grey"},
         * tickLabels: {fontSize: 10, padding: 5}, axisLabel: {fontSize: 16, padding: 20}}
         */
        style?: {
            parent?: React.CSSProperties;
            axis?: React.CSSProperties;
            axisLabel?: React.CSSProperties;
            grid?: React.CSSProperties;
            ticks?: React.CSSProperties;
            tickLabels?: React.CSSProperties;
        };
        /**
         * The tickComponent prop takes in an entire component which will be used
         * to create tick lines. The new element created from the passed tickComponent
         * will be supplied with the following properties: x1, y1, x2, y2, tick, style and events.
         * Any of these props may be overridden by passing in props to the supplied component,
         * or modified or ignored within the custom component itself. If a tickComponent
         * is not supplied, VictoryAxis will render its default Tick component.
         * @default <Tick/>
         */
        tickComponent?: React.ReactElement<any>;
        /**
         * The tickCount prop specifies approximately how many ticks should be drawn on the axis if
         * tickValues are not explicitly provided. This value is calculated by d3 scale and
         * prioritizes returning "nice" values and evenly spaced ticks over an exact number of ticks.
         * If you need an exact number of ticks, please specify them via the tickValues prop.
         * This prop must have a value greater than zero.
         * @default 5
         */
        tickCount?: number;
        /**
         * The tickLabelComponent prop takes in an entire component which will be used
         * to create the tick labels. The new element created from the passed tickLabelComponent
         * will be supplied with the following properties: x, y, verticalAnchor, textAnchor,
         * angle, tick, style and events. Any of these props may be overridden by
         * passing in props to the supplied component, or modified or ignored within
         * the custom component itself. If an tickLabelComponent is not supplied, a new
         * VictoryLabel will be created with props described above
         * @default <VictoryLabel/>
         */
        tickLabelComponent?: React.ReactElement<any>;
        /**
         * The tickFormat prop specifies how tick values should be expressed visually.
         * tickFormat can be given as a function to be applied to every tickValue, or as
         * an array of display values for each tickValue.
         * @example d3.time.format("%Y"), (x) => x.toPrecision(2), ["first", "second", "third"]
         */
        tickFormat?: any[] | { (data: any): string | number };
        /**
         * The tickValues prop explicitly specifies which tick values to draw on the axis.
         * @example ["apples", "bananas", "oranges"], [2, 4, 6, 8]
         */
        tickValues?: any[]
    }

    /**
     * VictoryAxis draws an SVG chart axis with React.
     * Styles and data can be customized by passing in your own values as properties to the component.
     * Data changes are animated with VictoryAnimation.
     */
    export class VictoryAxis extends React.Component<VictoryAxisProps, any> {}

    export interface VictoryBarProps extends VictoryCommonProps, VictoryDatableProps, VictoryMultiLabeableProps {
        /**
         * The event prop take an array of event objects. Event objects are composed of
         * a target, an eventKey, and eventHandlers. Targets may be any valid style namespace
         * for a given component, so "data" and "labels" are all valid targets for VictoryBar events.
         * The eventKey may optionally be used to select a single element by index rather than an entire
         * set. The eventHandlers object should be given as an object whose keys are standard
         * event names (i.e. onClick) and whose values are event callbacks. The return value
         * of an event handler is used to modify elemnts. The return value should be given
         * as an object or an array of objects with optional target and eventKey keys,
         * and a mutation key whose value is a function. The target and eventKey keys
         * will default to those corresponding to the element the event handler was attached to.
         * The mutation function will be called with the calculated props for the individual selected
         * element (i.e. a single bar), and the object returned from the mutation function
         * will override the props of the selected element via object assignment.
         * @example
         * events={[
         *   {
         *     target: "data",
         *     eventKey: "thisOne",
         *     eventHandlers: {
         *       onClick: () => {
         *         return [
         *            {
         *              eventKey: "theOtherOne",
         *              mutation: (props) => {
         *                return {style: merge({}, props.style, {fill: "orange"})};
         *              }
         *            }, {
         *              eventKey: "theOtherOne",
         *              target: "labels",
         *              mutation: () => {
         *                return {text: "hey"};
         *              }
         *            }
         *          ];
         *       }
         *     }
         *   }
         * ]}
         *}}
         */
        events?: EventPropTypeInterface<"data" | "labels" | "parent", number | string>[];
        /**
         * Similar to data accessor props `x` and `y`, this prop may be used to functionally
         * assign eventKeys to data
         */
        eventKey?: StringOrNumberOrCallback;
        /**
         * The horizontal prop determines whether the bars will be laid vertically or
         * horizontally. The bars will be vertical if this prop is false or unspecified,
         * or horizontal if the prop is set to true.
         */
        horizontal?: boolean;
        /**
         * The style prop specifies styles for your VictoryBar. Any valid inline style properties
         * will be applied. Height, width, and padding should be specified via the height,
         * width, and padding props, as they are used to calculate the alignment of
         * components within chart. In addition to normal style properties, angle and verticalAnchor
         * may also be specified via the labels object, and they will be passed as props to
         * VictoryLabel, or any custom labelComponent.
         * @example {data: {fill: "red", width: 8}, labels: {fontSize: 12}}
         */
        style?: VictoryStyleInterface;
    }
    /**
     * Draw SVG bar charts with React. VictoryBar is a composable component, so it doesn't include axes
     * Check out VictoryChart for complete bar charts and more.
     */
    export class VictoryBar extends React.Component<VictoryBarProps, any> {}

    export interface VictoryChartProps extends VictoryCommonProps {
        /**
         * The domain prop describes the range of values your chart will include. This prop can be
         * given as a array of the minimum and maximum expected values for your chart,
         * or as an object that specifies separate arrays for x and y.
         * If this prop is not provided, a domain will be calculated from data, or other
         * available information.
         * @example: [-1, 1], {x: [0, 100], y: [0, 1]}
         */
        domain?: DomainPropType;
        /**
         * The domainPadding prop specifies a number of pixels of padding to add to the
         * beginning and end of a domain. This prop is useful for explicitly spacing ticks farther
         * from the origin to prevent crowding. This prop should be given as an object with
         * numbers specified for x and y.
         */
        domainPadding?: DomainPaddingPropType;
        /**
         * The event prop take an array of event objects. Event objects are composed of
         * a childName, target, eventKey, and eventHandlers. Targets may be any valid style namespace
         * for a given component, (i.e. "data" and "labels"). The childName will refer to an
         * individual child of VictoryChart, either by its name prop, or by index. The eventKey
         * may optionally be used to select a single element by index or eventKey rather than
         * an entire set. The eventHandlers object should be given as an object whose keys are standard
         * event names (i.e. onClick) and whose values are event callbacks. The return value
         * of an event handler is used to modify elemnts. The return value should be given
         * as an object or an array of objects with optional target and eventKey and childName keys,
         * and a mutation key whose value is a function. The target and eventKey and childName keys
         * will default to those corresponding to the element the event handler was attached to.
         * The mutation function will be called with the calculated props for the individual selected
         * element (i.e. a single bar), and the object returned from the mutation function
         * will override the props of the selected element via object assignment.
         * @examples
         * events={[
         *   {
         *     target: "data",
         *     childName: "firstBar",
         *     eventHandlers: {
         *       onClick: () => {
         *         return [
         *            {
         *              childName: "secondBar",
         *              mutation: (props) => {
         *                return {style: merge({}, props.style, {fill: "orange"})};
         *              }
         *            }, {
         *              childName: "secondBar",
         *              target: "labels",
         *              mutation: () => {
         *                return {text: "hey"};
         *              }
         *            }
         *          ];
         *       }
         *     }
         *   }
         * ]}
         *}}
         */
        events?: EventPropTypeInterface<string, StringOrNumberOrCallback>[];
        /**
         * Similar to data accessor props `x` and `y`, this prop may be used to functionally
         * assign eventKeys to data
         */
        eventKey?: StringOrNumberOrCallback;
        /**
         * The style prop specifies styles for your chart. Any valid inline style properties
         * will be applied. Height, width, and padding should be specified via the height,
         * width, and padding props, as they are used to calculate the alignment of
         * components within chart.
         * @example {border: "1px solid #ccc", margin: "2%", maxWidth: "40%"}
         */
        style?: React.CSSProperties;
    }
    /**
     * A flexible charting component for React.
     * VictoryChart composes other Victory components into reusable charts.
     * Acting as a coordinator rather than a stand-alone component, VictoryChart reconciles props such as domain and scale for child components,
     * and provides a set of sensible defaults. This component works with:
     * - VictoryAxis
     * - VictoryLine
     * - VictoryScatter
     * - VictoryBar
     */
    export class VictoryChart extends React.Component<VictoryChartProps, any> {}

    export interface VictoryGroupProps extends VictoryCommonProps, VictoryMultiLabeableProps {
        /**
         * The categories prop specifies how categorical data for a chart should be ordered.
         * This prop should be given as an array of string values, or an object with
         * these values for x and y. When categories are not given as an object
         * When this prop is set on a wrapper component, it will dictate the categories of
         * its the children. If this prop is not set, any categories on child component
         * or categorical data, will be merged to create a shared set of categories.
         * @example ["dogs", "cats", "mice"]
         */
        categories?: CategoryPropType;
        /**
         * The colorScale prop is an optional prop that defines the color scale the chart's bars
         * will be created on. This prop should be given as an array of CSS colors, or as a string
         * corresponding to one of the built in color scales. VictoryBar will automatically assign
         * values from this color scale to the bars unless colors are explicitly provided in the
         * `dataAttributes` prop.
         */
        colorScale?: ColorScalePropType;
        /**
         * The domain prop describes the range of values your chart will include. This prop can be
         * given as a array of the minimum and maximum expected values for your chart,
         * or as an object that specifies separate arrays for x and y.
         * If this prop is not provided, a domain will be calculated from data, or other
         * available information.
         * @examples: [-1, 1], {x: [0, 100], y: [0, 1]}
         */
        domain?: DomainPropType;
        /**
         * The domainPadding prop specifies a number of pixels of padding to add to the
         * beginning and end of a domain. This prop is useful for explicitly spacing ticks farther
         * from the origin to prevent crowding. This prop should be given as an object with
         * numbers specified for x and y.
         */
        domainPadding?: DomainPaddingPropType;
        /**
         * The event prop take an array of event objects. Event objects are composed of
         * a childName, target, eventKey, and eventHandlers. Targets may be any valid style namespace
         * for a given component, (i.e. "data" and "labels"). The childName will refer to an
         * individual child of VictoryGroup, either by its name prop, or by index. The eventKey
         * may optionally be used to select a single element by index or eventKey rather than
         * an entire set. The eventHandlers object should be given as an object whose keys are standard
         * event names (i.e. onClick) and whose values are event callbacks. The return value
         * of an event handler is used to modify elemnts. The return value should be given
         * as an object or an array of objects with optional target and eventKey and childName keys,
         * and a mutation key whose value is a function. The target and eventKey and childName keys
         * will default to those corresponding to the element the event handler was attached to.
         * The mutation function will be called with the calculated props for the individual selected
         * element (i.e. a single bar), and the object returned from the mutation function
         * will override the props of the selected element via object assignment.
         * @examples
         * events={[
         *   {
         *     target: "data",
         *     childName: "firstBar",
         *     eventHandlers: {
         *       onClick: () => {
         *         return [
         *            {
         *              childName: "secondBar",
         *              mutation: (props) => {
         *                return {style: merge({}, props.style, {fill: "orange"})};
         *              }
         *            }, {
         *              childName: "secondBar",
         *              target: "labels",
         *              mutation: () => {
         *                return {text: "hey"};
         *              }
         *            }
         *          ];
         *       }
         *     }
         *   }
         * ]}
         *}}
         */
        events?: EventPropTypeInterface<"data" | "labels" | "parent", StringOrNumberOrCallback>[];
        /**
         * Similar to data accessor props `x` and `y`, this prop may be used to functionally
         * assign eventKeys to data
         */
        eventKey?: StringOrNumberOrCallback;
        /**
         * The horizontal prop determines whether the bars will be laid vertically or
         * horizontally. The bars will be vertical if this prop is false or unspecified,
         * or horizontal if the prop is set to true.
         */
        horizontal?: boolean;
        /**
         * The style prop specifies styles for your grouped chart. These styles will be
         * applied to all grouped children
         */
        style?: VictoryStyleInterface;
    }
    export class VictoryGroup extends React.Component<VictoryGroupProps, any> {}

    export interface VictoryLineProps extends VictoryCommonProps, VictoryDatableProps, VictorySingleLabableProps {
        /**
         * The event prop take an array of event objects. Event objects are composed of
         * a target, an eventKey, and eventHandlers. Targets may be any valid style namespace
         * for a given component, so "data" and "labels" are all valid targets for VictoryLine events.
         * Since VictoryLine only renders a single element, the eventKey property is not used.
         * The eventHandlers object should be given as an object whose keys are standard
         * event names (i.e. onClick) and whose values are event callbacks. The return value
         * of an event handler is used to modify elemnts. The return value should be given
         * as an object or an array of objects with optional target and eventKey keys,
         * and a mutation key whose value is a function. The target and eventKey keys
         * will default to those corresponding to the element the event handler was attached to.
         * The mutation function will be called with the calculated props for the individual selected
         * element (i.e. a line), and the object returned from the mutation function
         * will override the props of the selected element via object assignment.
         * @examples
         * events={[
         *   {
         *     target: "data",
         *     eventHandlers: {
         *       onClick: () => {
         *         return [
         *            {
         *              mutation: (props) => {
         *                return {style: merge({}, props.style, {stroke: "orange"})};
         *              }
         *            }, {
         *              target: "labels",
         *              mutation: () => {
         *                return {text: "hey"};
         *              }
         *            }
         *          ];
         *       }
         *     }
         *   }
         * ]}
         *}}
         */
        events?: EventPropTypeInterface<"data" | "labels" | "parent", number | string>[];
        /**
         * The interpolation prop determines how data points should be connected
         * when plotting a line
         */
        interpolation?: InterpolationPropType;
        /**
         * The samples prop specifies how many individual points to plot when plotting
         * y as a function of x. Samples is ignored if x props are provided instead.
         */
        samples?: number;
        /**
         * The style prop specifies styles for your VictoryLine. Any valid inline style properties
         * will be applied. Height, width, and padding should be specified via the height,
         * width, and padding props, as they are used to calculate the alignment of
         * components within chart. in addition to normal style properties, angle and verticalAnchor
         * may also be specified via the labels object, and they will be passed as props to
         * VictoryLabel, or any custom labelComponent.
         * @examples{data: {stroke: "red"}, labels: {fontSize: 12}}
         */
        style?: VictoryStyleInterface;
    }
    /**
     * VictoryLine creates a line based on data. VictoryLine is a composable component, so it does not include an axis.
     * Check out VictoryChart for easy to use line charts and more.
     */
    export class VictoryLine extends React.Component<VictoryLineProps, any> {}

    type ScatterSymbolType = "circle" | "diamond" | "plus" | "square" | "star" | "triangleDown" | "triangleUp";
    export interface VictoryScatterProps extends VictoryCommonProps, VictoryDatableProps, VictoryMultiLabeableProps {
        /**
         * The bubbleProperty prop indicates which property of the data object should be used
         * to scale data points in a bubble chart
         */
        bubbleProperty?: string;
        /**
         * The event prop take an array of event objects. Event objects are composed of
         * a target, an eventKey, and eventHandlers. Targets may be any valid style namespace
         * for a given component, so "data" and "labels" are all valid targets for VictoryScatter
         * events. The eventKey may optionally be used to select a single element by index rather than
         * an entire set. The eventHandlers object should be given as an object whose keys are standard
         * event names (i.e. onClick) and whose values are event callbacks. The return value
         * of an event handler is used to modify elemnts. The return value should be given
         * as an object or an array of objects with optional target and eventKey keys,
         * and a mutation key whose value is a function. The target and eventKey keys
         * will default to those corresponding to the element the event handler was attached to.
         * The mutation function will be called with the calculated props for the individual selected
         * element (i.e. a single bar), and the object returned from the mutation function
         * will override the props of the selected element via object assignment.
         * @examples
         * events={[
         *   {
         *     target: "data",
         *     eventKey: "thisOne",
         *     eventHandlers: {
         *       onClick: () => {
         *         return [
         *            {
         *              eventKey: "theOtherOne",
         *              mutation: (props) => {
         *                return {style: merge({}, props.style, {fill: "orange"})};
         *              }
         *            }, {
         *              eventKey: "theOtherOne",
         *              target: "labels",
         *              mutation: () => {
         *                return {text: "hey"};
         *              }
         *            }
         *          ];
         *       }
         *     }
         *   }
         * ]}
         *}}
         */
        events?: EventPropTypeInterface<"data" | "labels" | "parent", StringOrNumberOrCallback>[];
        /**
         * Similar to data accessor props `x` and `y`, this prop may be used to functionally
         * assign eventKeys to data
         */
        eventKey?: StringOrNumberOrCallback;
        /**
         * The maxBubbleSize prop sets an upper limit for scaling data points in a bubble chart
         */
        maxBubbleSize?: number;
        /**
         * The samples prop specifies how many individual points to plot when plotting
         * y as a function of x. Samples is ignored if x props are provided instead.
         */
        samples?: number;
        /**
         * The size prop determines how to scale each data point
         */
        size?: number | { (data: any): number };
        /**
         * The style prop specifies styles for your VictoryScatter. Any valid inline style properties
         * will be applied. Height, width, and padding should be specified via the height,
         * width, and padding props, as they are used to calculate the alignment of
         * components within chart. In addition to normal style properties, angle and verticalAnchor
         * may also be specified via the labels object, and they will be passed as props to
         * VictoryLabel, or any custom labelComponent.
         * @example {data: {fill: "red"}, labels: {fontSize: 12}}
         */
        style?: VictoryStyleInterface;
        /**
         * The symbol prop determines which symbol should be drawn to represent data points.
         */
        symbol?: ScatterSymbolType | { (data: any): ScatterSymbolType };
    }
    /**
     * VictoryScatter creates a scatter of points from data. VictoryScatter is a composable component, so it does not include an axis.
     * Check out VictoryChart for easy to use scatter plots and more.
     */
    export class VictoryScatter extends React.Component<VictoryScatterProps, any> {}

    export interface VictoryStackProps extends VictoryCommonProps, VictoryMultiLabeableProps {
        /**
         * The categories prop specifies how categorical data for a chart should be ordered.
         * This prop should be given as an array of string values, or an object with
         * these values for x and y. When categories are not given as an object
         * When this prop is set on a wrapper component, it will dictate the categories of
         * its the children. If this prop is not set, any categories on child component
         * or catigorical data, will be merged to create a shared set of categories.
         * @example ["dogs", "cats", "mice"]
         */
        categories?: CategoryPropType;
        /**
         * The colorScale prop is an optional prop that defines the color scale the chart's bars
         * will be created on. This prop should be given as an array of CSS colors, or as a string
         * corresponding to one of the built in color scales. VictoryBar will automatically assign
         * values from this color scale to the bars unless colors are explicitly provided in the
         * `dataAttributes` prop.
         */
        colorScale?: ColorScalePropType;
        /**
         * The domain prop describes the range of values your chart will include. This prop can be
         * given as a array of the minimum and maximum expected values for your chart,
         * or as an object that specifies separate arrays for x and y.
         * If this prop is not provided, a domain will be calculated from data, or other
         * available information.
         * @example: [-1, 1], {x: [0, 100], y: [0, 1]}
         */
        domain?: DomainPropType;
        /**
         * The domainPadding prop specifies a number of pixels of padding to add to the
         * beginning and end of a domain. This prop is useful for explicitly spacing ticks farther
         * from the origin to prevent crowding. This prop should be given as an object with
         * numbers specified for x and y.
         */
        domainPadding?: DomainPaddingPropType;
        /**
         * The event prop take an array of event objects. Event objects are composed of
         * a childName, target, eventKey, and eventHandlers. Targets may be any valid style namespace
         * for a given component, (i.e. "data" and "labels"). The childName will refer to an
         * individual child of VictoryStack, either by its name prop, or by index. The eventKey
         * may optionally be used to select a single element by index or eventKey rather than
         * an entire set. The eventHandlers object should be given as an object whose keys are standard
         * event names (i.e. onClick) and whose values are event callbacks. The return value
         * of an event handler is used to modify elemnts. The return value should be given
         * as an object or an array of objects with optional target and eventKey and childName keys,
         * and a mutation key whose value is a function. The target and eventKey and childName keys
         * will default to those corresponding to the element the event handler was attached to.
         * The mutation function will be called with the calculated props for the individual selected
         * element (i.e. a single bar), and the object returned from the mutation function
         * will override the props of the selected element via object assignment.
         * @examples
         * events={[
         *   {
         *     target: "data",
         *     childName: "firstBar",
         *     eventHandlers: {
         *       onClick: () => {
         *         return [
         *            {
         *              childName: "secondBar",
         *              mutation: (props) => {
         *                return {style: merge({}, props.style, {fill: "orange"})};
         *              }
         *            }, {
         *              childName: "secondBar",
         *              target: "labels",
         *              mutation: () => {
         *                return {text: "hey"};
         *              }
         *            }
         *          ];
         *       }
         *     }
         *   }
         * ]}
         *}}
         */
        events?: EventPropTypeInterface<"data" | "labels" | "parent", StringOrNumberOrCallback>[];
        /**
         * Similar to data accessor props `x` and `y`, this prop may be used to functionally
         * assign eventKeys to data
         */
        eventKey?: StringOrNumberOrCallback;
        /**
         * The horizontal prop determines whether the bars will be laid vertically or
         * horizontally. The bars will be vertical if this prop is false or unspecified,
         * or horizontal if the prop is set to true.
         */
        horizontal?: boolean;
        /**
         * The style prop specifies styles for your grouped chart. These styles will be
         * applied to all grouped children
         */
        style?: VictoryStyleInterface;
        /**
         * The xOffset prop is used for grouping stacks of bars. This prop will be set
         * by the VictoryGroup component wrapper, or can be set manually.
         */
        xOffset?: number;
    }
    export class VictoryStack extends React.Component<VictoryStackProps, any> {}

    export interface VictoryPieProps extends VictoryCommonProps, VictoryMultiLabeableProps {
        /**
         * The colorScale prop is an optional prop that defines the color scale the pie
         * will be created on. This prop should be given as an array of CSS colors, or as a string
         * corresponding to one of the built in color scales. VictoryPie will automatically assign
         * values from this color scale to the pie slices unless colors are explicitly provided in the
         * data object
         */
        colorScale?: ColorScalePropType;
        /**
         * The data prop specifies the data to be plotted,
         * where data X-value is the slice label (string or number),
         * and Y-value is the corresponding number value represented by the slice
         * Data should be in the form of an array of data points.
         * Each data point may be any format you wish (depending on the `x` and `y` accessor props),
         * but by default, an object with x and y properties is expected.
         * @example [{x: 1, y: 2}, {x: 2, y: 3}], [[1, 2], [2, 3]],
         * [[{x: "a", y: 1}, {x: "b", y: 2}], [{x: "a", y: 2}, {x: "b", y: 3}]]
         */
        data?: any[];
        /**
         * The dataComponent prop takes an entire, HTML-complete data component which will be used to
         * create slices for each datum in the pie chart. The new element created from the passed
         * dataComponent will have the property datum set by the pie chart for the point it renders;
         * properties style and pathFunction calculated by VictoryPie; an index property set
         * corresponding to the location of the datum in the data provided to the pie; events bound to
         * the VictoryPie; and the d3 compatible slice object.
         * If a dataComponent is not provided, VictoryPie's Slice component will be used.
         */
        dataComponent?: React.ReactElement<any>;
        /**
         * The labelRadius prop defines the radius of the arc that will be used for positioning each slice label.
         * If this prop is not set, the label radius will default to the radius of the pie + label padding.
         */
        labelRadius?: number;
        /**
         * The overall end angle of the pie in degrees. This prop is used in conjunction with
         * startAngle to create a pie that spans only a segment of a circle.
         */
        endAngle?: number;
        /**
         * The event prop takes an array of event objects. Event objects are composed of
         * a target, an eventKey, and eventHandlers. Targets may be any valid style namespace
         * for a given component, so "data" and "labels" are all valid targets for VictoryPie
         * events. The eventKey may optionally be used to select a single element by index rather than
         * an entire set. The eventHandlers object should be given as an object whose keys are standard
         * event names (i.e. onClick) and whose values are event callbacks. The return value
         * of an event handler is used to modify elemnts. The return value should be given
         * as an object or an array of objects with optional target and eventKey keys,
         * and a mutation key whose value is a function. The target and eventKey keys
         * will default to those corresponding to the element the event handler was attached to.
         * The mutation function will be called with the calculated props for the individual selected
         * element (i.e. a single bar), and the object returned from the mutation function
         * will override the props of the selected element via object assignment.
         * @examples
         * events={[
         *   {
         *     target: "data",
         *     eventKey: 1,
         *     eventHandlers: {
         *       onClick: () => {
         *         return [
         *            {
         *              eventKey: 2,
         *              mutation: (props) => {
         *                return {style: merge({}, props.style, {fill: "orange"})};
         *              }
         *            }, {
         *              eventKey: 2,
         *              target: "labels",
         *              mutation: () => {
         *                return {text: "hey"};
         *              }
         *            }
         *          ];
         *       }
         *     }
         *   }
         * ]}
         *}}
         */
        events?: EventPropTypeInterface<"data" | "labels" | "parent", StringOrNumberOrCallback | string[] | number[]>[];
        /**
         * Similar to data accessor props `x` and `y`, this prop may be used to functionally
         * assign eventKeys to data
         */
        eventKey?: StringOrNumberOrCallback;
        /**
         * When creating a donut chart, this prop determines the number of pixels between
         * the center of the chart and the inner edge of a donut. When this prop is set to zero
         * a regular pie chart is rendered.
         */
        innerRadius?: number;
        /**
         * Set the cornerRadius for every dataComponent (Slice by default) within VictoryPie
         */
        cornerRadius?: number;
        /**
         * The padAngle prop determines the amount of separation between adjacent data slices
         * in number of degrees
         */
        padAngle?: number;
        /**
         * The overall start angle of the pie in degrees. This prop is used in conjunction with
         * endAngle to create a pie that spans only a segment of a circle.
         */
        startAngle?: number;
        /**
         * The style prop specifies styles for your pie. VictoryPie relies on Radium,
         * so valid Radium style objects should work for this prop. Height, width, and
         * padding should be specified via the height, width, and padding props.
         * @example {data: {stroke: "black"}, label: {fontSize: 10}}
         */
        style?: VictoryStyleInterface;
        /**
         * The x prop specifies how to access the X value of each data point.
         * If given as a function, it will be run on each data point, and returned value will be used.
         * If given as an integer, it will be used as an array index for array-type data points.
         * If given as a string, it will be used as a property key for object-type data points.
         * If given as an array of strings, or a string containing dots or brackets,
         * it will be used as a nested object property path (for details see Lodash docs for _.get).
         * If `null` or `undefined`, the data value will be used as is (identity function/pass-through).
         * @example 0, 'x', 'x.value.nested.1.thing', 'x[2].also.nested', null, d => Math.sin(d)
         */
        x?: DataGetterPropType;
        /**
         * The y prop specifies how to access the Y value of each data point.
         * If given as a function, it will be run on each data point, and returned value will be used.
         * If given as an integer, it will be used as an array index for array-type data points.
         * If given as a string, it will be used as a property key for object-type data points.
         * If given as an array of strings, or a string containing dots or brackets,
         * it will be used as a nested object property path (for details see Lodash docs for _.get).
         * If `null` or `undefined`, the data value will be used as is (identity function/pass-through).
         * @example 0, 'y', 'y.value.nested.1.thing', 'y[2].also.nested', null, d => Math.sin(d)
         */
        y?: DataGetterPropType;
    }
    /**
     * victory-pie draws an SVG pie or donut chart with React.
     * Styles and data can be customized by passing in your own values as properties to the component.
     * Data changes are animated with VictoryAnimation.
     */
    export class VictoryPie extends React.Component<VictoryPieProps, any> {}
}
