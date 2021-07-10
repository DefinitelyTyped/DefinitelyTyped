// Type definitions for Victory 33.1
// Project: https://github.com/FormidableLabs/victory, https://formidable.com/open-source/victory
// Definitions by: Alexey Svetliakov <https://github.com/asvetliakov>
//                 snerks <https://github.com/snerks>
//                 Krzysztof Cebula <https://github.com/Havret>
//                 Vitaliy Polyanskiy <https://github.com/alreadyExisted>
//                 James Lismore <https://github.com/jlismore>
//                 Stack Builders <https://github.com/stackbuilders>
//                 Esteban Ibarra <https://github.com/ibarrae>
//                 Dominic Lee <https://github.com/dominictwlee>
//                 Dave Vedder <https://github.com/veddermatic>
//                 Alec Flett <https://github.com/alecf>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

/// <reference types="react"/>

declare module 'victory' {
    import * as React from 'react';

    /**
     * Single animation object to interpolate
     */
    export type AnimationStyle = { [key: string]: string | number };

    /**
     * Animation styles to interpolate
     */

    export type AnimationData = AnimationStyle | AnimationStyle[];

    export type AnimationEasing =
        | 'back'
        | 'backIn'
        | 'backOut'
        | 'backInOut'
        | 'bounce'
        | 'bounceIn'
        | 'bounceOut'
        | 'bounceInOut'
        | 'circle'
        | 'circleIn'
        | 'circleOut'
        | 'circleInOut'
        | 'linear'
        | 'linearIn'
        | 'linearOut'
        | 'linearInOut'
        | 'cubic'
        | 'cubicIn'
        | 'cubicOut'
        | 'cubicInOut'
        | 'elastic'
        | 'elasticIn'
        | 'elasticOut'
        | 'elasticInOut'
        | 'exp'
        | 'expIn'
        | 'expOut'
        | 'expInOut'
        | 'poly'
        | 'polyIn'
        | 'polyOut'
        | 'polyInOut'
        | 'quad'
        | 'quadIn'
        | 'quadOut'
        | 'quadInOut'
        | 'sin'
        | 'sinIn'
        | 'sinOut'
        | 'sinInOut';

    /**
     * @see https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-8.html
     */
    type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;

    type BlockProps = {
        top?: number | undefined;
        bottom?: number | undefined;
        left?: number | undefined;
        right?: number | undefined;
    };

    type PaddingProps = number | BlockProps;

    /**
     * This is the first parameter of a callback when a callback is used to
     * resolve the value of a property instead of a concrete value.
     *
     * Note that additional properties here like `scale`, `x`, `y`, etc are resolved
     * values of properties from the VictoryXXXProps for each component.
     */
    interface CallbackArgs {
        active: boolean;
        datum: any;
        horizontal: boolean;
        x: number;
        y: number;
        scale?: {
            x?: D3Scale | undefined;
            y?: D3Scale | undefined;
        } | undefined;
    }
    type VictoryStringOrNumberCallback = (args: CallbackArgs) => string | number;
    type VictoryNumberCallback = (args: CallbackArgs) => number;
    type StringOrNumberOrCallback = string | number | VictoryStringOrNumberCallback;
    type NumberOrCallback = number | VictoryNumberCallback;

    type SliceNumberOrCallback<T, P = null> = number | ((props: Omit<T, P>) => number);

    type VictoryStyleObject = { [K in keyof React.CSSProperties]: StringOrNumberOrCallback };
    /**
     * Style interface used in components/themeing
     */
    export interface VictoryStyleInterface {
        parent?: VictoryStyleObject | undefined;
        data?: VictoryStyleObject | undefined;
        labels?: VictoryStyleObject | undefined;
    }

    export interface VictoryAnimationProps {
        /**
         * The child of should be a function that takes an object of tweened values and returns a component to render.
         * @param style
         */
        children?: ((style: AnimationStyle) => React.ReactElement) | undefined;
        /**
         * The number of milliseconds the animation should take to complete.
         * @default 1000
         */
        duration?: number | undefined;
        /**
         * The easing prop specifies an easing function name to use for tweening.
         * @default "quadInOut"
         */
        easing?: AnimationEasing | undefined;
        /**
         * The delay prop specifies a delay in milliseconds before the animation begins.
         * If multiple values are in the animation queue, it is the delay between each animation.
         * @default 0
         */
        delay?: number | undefined;
        /**
         * The onEnd prop specifies a function to run when the animation ends. If multiple animations are in the queue, it is called after the last animation.
         */
        onEnd?: (() => void) | undefined;
        /**
         * The data prop specifies the latest set of values to tween to.
         * When this prop changes, VictoryAnimation will begin animating from the current value to the new value.
         * When given an array of values, VictoryAnimation will use it as an animation queue.
         * @default {}
         */
        data?: AnimationData | undefined;
    }

    /**
     * VictoryAnimation animates prop changes for any React component.
     * Just use a child function inside VictoryAnimation that accepts an object of tweened values and returns a component to render.
     */
    export class VictoryAnimation extends React.Component<VictoryAnimationProps, any> {}

    /**
     * Text anchor type
     */
    type TextAnchorType = 'start' | 'middle' | 'end' | 'inherit';

    /**
     * Vertical anchor type
     */
    type VerticalAnchorType = 'start' | 'middle' | 'end';

    export interface VictoryLabelProps {
        /**
         * Specifies the angle to rotate the text by.
         */
        angle?: string | number | undefined;
        /**
         * The capHeight prop defines a text metric for the font being used: the expected height of capital letters.
         * This is necessary because of SVG, which (a) positions the *bottom* of the text at `y`, and (b) has no notion of line height.
         * The value should ideally use the same units as `lineHeight` and `dy`, preferably ems. If given a unitless number, it is assumed to be ems.
         * @default "0.71em"
         */
        capHeight?: StringOrNumberOrCallback | undefined;
        /**
         * The className prop specifies a class name that will be applied to the rendered text element.
         */
        className?: string | undefined;
        /**
         * Victory components can pass a datum prop to their label component. This can be used to calculate functional styles, and determine child text
         */
        datum?: {} | undefined;
        /**
         * Labels that apply to an entire data series will recieve the entire series as `data` instead of an individual datum prop.
         */
        data?: any[] | undefined;
        /**
         * The events prop attaches arbitrary event handlers to the label component.
         * Event handlers are currently only called with their corresponding events.
         */
        events?: React.DOMAttributes<any> | undefined;
        /**
         * The children of this component define the content of the label.
         * This makes using the component similar to normal HTML spans or labels. strings, numbers, and functions of data / value are supported.
         */
        children?: StringOrNumberOrCallback | undefined;
        /**
         * The labelPlacement prop is used to specify the placement of labels relative to the data point they represent.
         * This prop may be given as “vertical”, “parallel” or “perpendicular”. This props is particularly useful in polar
         * charts, where it may be desireable to position a label either parallel or perpendicular to its corresponding angle.
         * When this prop is not set, perpendicular label placement will be used for polar charts, and vertical label
         * placement will be used for cartesian charts.
         */
        labelPlacement?: 'parallel' | 'perpendicular' | 'vertical' | undefined;
        /**
         * The lineHeight prop defines how much space a single line of text should take up.
         * Note that SVG has no notion of line-height, so the positioning may differ slightly from what you would expect with CSS,
         * but the result is similar: a roughly equal amount of extra space is distributed above and below the line of text.
         * The value should ideally use the same units as `capHeight` and `dy`, preferably ems.
         * If given a unitless number, it is assumed to be ems.
         * @default 1
         */
        lineHeight?: StringOrNumberOrCallback | undefined;
        /**
         * Victory components will pass an origin prop is to define the center point in svg coordinates for polar charts.
         * **This prop should not be set manually.**
         */
        origin?: { x: number; y: number } | undefined;
        /**
         * Victory components can pass a boolean polar prop to specify whether a label is part of a polar chart.
         * **This prop should not be set manually.**
         */
        polar?: boolean | undefined;
        /**
         * The renderInPortal prop specifies whether VictoryLabel should render text in place or within a VictoryPortal.
         * Setting renderInPortal to true is equivalent to wrapping VictoryLabel in a VictoryPortal. This prop is false by default.
         */
        renderInPortal?: boolean | undefined;
        /**
         * The style prop applies CSS properties to the rendered `<text>` element.
         */
        style?: React.CSSProperties | React.CSSProperties[] | undefined;
        /**
         * The text prop defines the text VictoryLabel will render. The text prop may be given as a string, number, a function of datum,
         * or an array of any of these. Strings may include newline characters, which VictoryLabel will split into separate
         * <tspan/> elements. When text is given as an array, separate <tspan/> elements will be created for each element in the array.
         */
        text?: string[] | StringOrNumberOrCallback | undefined;
        /**
         * The textAnchor prop defines how the text is horizontally positioned relative to the given `x` and `y` coordinates.
         */
        textAnchor?: TextAnchorType | { (): TextAnchorType } | undefined;
        /**
         * The verticalAnchor prop defines how the text is vertically positioned relative to the given `x` and `y` coordinates.
         */
        verticalAnchor?: VerticalAnchorType | { (): VerticalAnchorType } | undefined;
        /**
         * The transform prop applies a transform to the rendered `<text>` element.
         * In addition to being a string, it can be an object containing transform definitions for easier authoring.
         */
        transform?: string | {} | { (): string | {} } | undefined;
        /**
         * The x prop defines the x coordinate to use as a basis for horizontal positioning.
         */
        x?: number | undefined;
        /**
         * The y prop defines the y coordinate to use as a basis for vertical positioning.
         */
        y?: number | undefined;
        /**
         * The dx prop defines a horizontal shift from the `x` coordinate.
         */
        dx?: StringOrNumberOrCallback | undefined;
        /**
         * The dy prop defines a vertical shift from the `y` coordinate.
         * Since this component already accounts for `capHeight`, `lineHeight`, and `verticalAnchor`, this will usually not be necessary.
         */
        dy?: StringOrNumberOrCallback | undefined;
    }

    /**
     * VictoryLabel is a text component that provides several enhancements over SVG’s <text> element.
     */
    export class VictoryLabel extends React.Component<VictoryLabelProps, any> {}

    export interface VictoryContainerProps {
        /**
         * The responsive prop specifies whether the rendered container should be a responsive container
         * with a viewBox attribute, or a static container with absolute width and height.
         * @default true
         */
        responsive?: boolean | undefined;
        /**
         * The style prop specifies styles for your VictoryContainer. Any valid inline style properties
         * will be applied. Height and width should be specified via the height
         * and width props, as they are used to calculate the alignment of
         * components within the container. Styles from the child component will
         * also be passed, if any exist.
         * @examples {border: 1px solid red}
         */
        style?: React.CSSProperties | undefined;
        /**
         * The height props specifies the height the svg viewBox of the container.
         * This value should be given as a number of pixels. If no height prop
         * is given, the height prop from the child component passed will be used.
         */
        height?: number | undefined;
        /**
         * The width props specifies the width of the svg viewBox of the container
         * This value should be given as a number of pixels. If no width prop
         * is given, the width prop from the child component passed will be used.
         */
        width?: number | undefined;
        /**
         * The events prop attaches arbitrary event handlers to the container component.
         * Event handlers passed from other Victory components are called with their
         * corresponding events as well as scale, style, width, height, and data when
         * applicable. Use the invert method to convert event coordinate information to
         * data. `scale.x.invert(evt.offsetX)`.
         * @examples {{ onClick: (evt) => alert(`x: ${evt.clientX}, y: ${evt.clientY}`)}}
         */
        events?: React.DOMAttributes<any> | undefined;
        /**
         * The title prop specifies the title to be applied to the SVG to assist
         * accessibility for screen readers. The more descriptive this title is, the more
         * useful it will be. If no title prop is passed, it will default to Victory Chart.
         * @example "Popularity of Dog Breeds by Percentage"
         * @default "Victory Chart"
         */
        title?: string | undefined;
        /**
         * The desc prop specifies the description of the chart/SVG to assist with
         * accessibility for screen readers. The more info about the chart provided in
         * the description, the more usable it will be for people using screen readers.
         * This prop defaults to an empty string.
         * @example "Golden retreivers make up 30%, Labs make up 25%, and other dog breeds are
         * not represented above 5% each."
         * @default ""
         */
        desc?: string | undefined;
    }

    export class VictoryContainer extends React.Component<VictoryContainerProps, any> {}

    type CursorData = {
        x: number;
        y: number;
    };

    export interface VictoryClipContainerProps {
        /**
         * `VictoryClipContainer` renders a single child, or an array of children in group element.
         */
        children?: React.ReactElement | React.ReactElement[] | undefined;
        /**
         * The `circleComponent` specifies the element to use when a `VictoryClipContainer` renders
         * a circular clip path. By default, `VictoryClipContainer` uses the `Circle` component.
         * @default circleComponent={<Circle/>}
         */
        circleComponent?: React.ReactElement | undefined;
        /**
         * The `className` prop specifies a class name that will be applied to the rendered element.
         * @example: className="myClipPath"
         */
        className?: string | undefined;
        /**
         * The `clipHeight` prop determines the base height of the rectangular clip path. This prop should be
         * given as a number. If this prop is not given, it will be calculated based on the height and padding
         * of the parent chart.
         */
        clipHeight?: number | undefined;
        /**
         * The `clipId` prop may be used to set a deterministic id for the container.
         * When a `clipId` is not manually set, a unique id will be generated.
         * It is usually necessary to set deterministic ids for automated testing.
         */
        clipId?: number | string | undefined;
        /**
         * The `clipPadding` prop is used when the clipped area should be larger than the range of a chart.
         * This prop should be given as an object with `top`, `bottom`, `left`, and `right` properties. Set
         * the `clipPadding` prop is useful for extending the visible area of a chart in some dimension so
         * that data or labels are not cut off.
         */
        clipPadding?: BlockProps | undefined;
        /**
         * The `clipPathComponent` prop specifies the clip path to apply to the rendered group when appropriate.
         * By default, `VictoryClipContainer` uses the `ClipPath` component.
         * @default clipPathComponent={<ClipPath/>}
         */
        clipPathComponent?: React.ReactElement | undefined;
        /**
         * The `clipWidth` prop determines the base width of the rectangular clip path. This prop should be
         * given as a number. If this prop is not given, it will be calculated based on the width and padding
         * of the parent chart.
         */
        clipWidth?: number | undefined;
        /**
         * The `events` prop attaches arbitrary event handlers to the group element.
         * This prop should be given as an object of event names and corresponding event handlers.
         * When events are provided via Victory's event system, event handlers will be called with
         * the event, the props of the component it is attached to, and an `eventKey` when applicable.
         * @example events={{onClick: (evt) => alert("x: " + evt.clientX)}}
         */
        events?: React.DOMAttributes<any> | undefined;
        /**
         * `VictoryClipContainer` uses the standard `groupComponent` prop.
         * @default groupComponent={<g/>}
         */
        groupComponent?: React.ReactElement | undefined;
        /**
         * Victory components will pass an `origin` prop is to define the center point in svg coordinates for polar charts.
         * **This prop should not be set manually.**
         */
        origin?: {
            x?: number | undefined;
            y?: number | undefined;
        } | undefined;
        /**
         * Victory components can pass a boolean `polar` prop to specify whether a label is part of a polar chart.
         * **This prop should not be set manually.**
         */
        polar?: boolean | undefined;
        /**
         * The `radius` prop determines the radius of the circular clip path used for polar charts. This prop should be
         * given as a number. If this prop is not given, it will be calculated based on the dimensions and padding
         * of the parent chart.
         */
        radius?: number | undefined;
        /**
         * The `rectComponent` specifies the element to use when a `VictoryClipContainer` renders a rectangular clip path.
         * By default, `VictoryClipContainer` uses the `Rect` component.
         * @default rectComponent={<Rect/>}
         */
        rectComponent?: React.ReactElement | undefined;
        /**
         * The `translateX` prop determines the offset of the clip path from the base x coordinate. This prop
         * should be given as a number. If this prop is not given, it will be calculated based on the padding
         * of the parent chart.
         */
        translateX?: number | undefined;
        /**
         * The `translateY` prop determines the offset of the clip path from the base y coordinate. This prop
         * should be given as a number. If this prop is not given, it will be calculated based on the padding
         * of the parent chart.
         */
        translateY?: number | undefined;
    }

    export class VictoryClipContainer extends React.Component<VictoryClipContainerProps, any> {}

    export interface VictoryCursorContainerProps extends VictoryContainerProps {
        /**
         * The cursorComponent prop takes a component instance which will be used to render a cursor element.
         * The new element created will be supplied with x1, y1, x2 and y2 positioning props.
         * If a cursorComponent is not supplied, a new Line component will be rendered.
         * @default cursorComponent={<Line/>}
         */
        cursorComponent?: React.ReactElement | undefined;
        /**
         * When the cursorDimension prop is set, the cursor will be a line to inspect the given dimension (either "x" or "y").
         * When this prop is not specified, the cursor will be a 2-dimensional crosshair.
         * For example, if you would like to inspect the time of time-series data, set dimension={"x"};
         * the cursor will then be a vertical line that will inspect the time value of the current mouse position.
         * @example cursorDimension="x"
         */
        cursorDimension?: 'x' | 'y' | undefined;
        /**
         * The cursorLabel prop defines the label that will appear next to the cursor.
         * A label will only appear if cursorLabel is set. This prop should be given as a
         * function of a point (an Object with x and y properties).
         * @example cursorLabel={(point) => point.x}
         */
        cursorLabel?: ((point: CursorData) => void) | undefined;
        /**
         * The cursorLabelComponent prop takes a component instance which will be
         * used to render a label for the cursor. The new element created from the passed
         * cursorLabelComponent will be supplied with the following props: x, y,
         * active, text. If cursorLabelComponent is omitted, a new VictoryLabel will be created with the props described above.
         * @default cursorLabelComponent={<VictoryLabel/>}
         */
        cursorLabelComponent?: React.ReactElement | undefined;
        /**
         * The cursorLabelOffset prop determines the pixel offset of the cursor label
         * from the cursor point. This prop should be an Object with x and y properties, or a
         * number to be used for both dimensions.
         * @default "{ x: 5, y: -10 }"
         */
        cursorLabelOffset?: number | CursorData | undefined;
        /**
         * Whenever the mouse is not over the chart, the cursor will not be displayed.
         * If instead you would like to keep it displayed, use the defaultCursorValue prop to set the default value.
         * The prop should be a point (an Object with x and y properties) for 2-dimensional cursors, or a number for 1-dimensional cursors.
         * @example defaultCursorValue={{x: 1, y: 1}}, defaultCursorValue={0}}
         */
        defaultCursorValue?: number | CursorData | undefined;
        /**
         * When the disable prop is set to true, VictoryCursorContainer events will not fire.
         */
        disable?: boolean | undefined;
        /**
         * When the cursorDimension prop is set, the cursor will be a line to inspect the given dimension (either "x" or "y").
         * When this prop is not specified, the cursor will be a 2-dimensional crosshair.
         * For example, if you would like to inspect the time of time-series data, set dimension={"x"};
         * the cursor will then be a vertical line that will inspect the time value of the current mouse position.
         * @example onChange={(value, props) => this.setState({cursorValue: value})}
         */
        onCursorChange?: ((value: CursorData, props: VictoryCursorContainerProps) => void) | undefined;
    }

    export class VictoryCursorContainer extends React.Component<VictoryCursorContainerProps, any> {}

    export interface VictoryBrushContainerProps extends VictoryContainerProps {
        /**
         * The optional allowDrag prop accepts a boolean that enables dragging behavior
         * for the highlighted brush area. Resizing will still be enabled when the allowDrag
         * prop is set to false.
         * @default true
         */
        allowDrag?: boolean | undefined;
        /**
         * The optional allowResize prop accepts a boolean that enables resizing the
         * highlighted brush area. Dragging will still be enabled when the allowResize
         * prop is set to false, but the dimensions of the brush area will be fixed.
         * @default true
         */
        allowResize?: boolean | undefined;
        /**
         * The brushComponent prop specifies the component to be rendered for the
         * highlighted area. This component will be supplied with the following props: x, y,
         * width, height, and style. When this prop is not specified, a <rect/> will be rendered.
         * @default brushComponent={<rect/>}
         */
        brushComponent?: React.ReactElement | undefined;
        /**
         * When the brushDimension prop is set, brushing will only be specific to the to
         * the given dimension (either "x" or "y"), and the entire domain of the other
         * dimension will be highlighted. When this prop is not specified, highlighting will
         * occur along both dimensions.
         * @example brushDimension="x"
         */
        brushDimension?: 'x' | 'y' | undefined;
        /**
         * The optional brushDomain prop describes the highlighted state. This prop is an
         * object that specifies separate arrays for x and y. Each array is a tuple that
         * describes the minimum and maximum values to render. If this prop is not provided
         * initially, the chart will render with the entire domain highlighted. When this prop
         * changes, the chart will render with a new highlighted domain.
         * @example brushDomain={{ x: [50, 100], y: [0, 100] }}
         */
        brushDomain?: DomainPropType | undefined;
        /**
         * The brushStyle adds custom styles to the brushComponent. This prop
         * should be given as an object of SVG style attributes.
         * @default "brushStyle={{ stroke: "transparent", fill: "black", fillOpacity: 0.1 }}"
         */
        brushStyle?: React.CSSProperties | undefined;
        /**
         * The defaultBrushArea prop specifies how the container will behave when a
         * region outside the active brush is clicked without selecting a new area. When the
         * prop is set to "all", the entire domain will be selected. When the prop is set to "none",
         * no new region will be selected, and any existing active brush will be cleared. When
         * the prop is set to "disable" the new selected region will default to the current active brush.
         */
        defaultBrushArea?: 'all' | 'none' | 'disable' | undefined;
        /**
         * When the disable prop is set to true, VictoryBrushContainer events will not fire.
         */
        disable?: boolean | undefined;
        /**
         * The handleComponent prop specifies the component to be rendered for each
         * handle for the highlighted area. This component will be supplied with the following
         * props: x, y, width, height, cursor, and style. When this prop is not
         * specified, a <rect/> will be rendered.
         * @default handleComponent={<rect/>}
         */
        handleComponent?: React.ReactElement | undefined;
        /**
         * The handleStyle adds custom styles to the handleComponents. This prop should be given as an object of SVG style attributes.
         *
         * Handles refer to the region on each highlighted area where the area may be
         * expanded. Only handles relevant to the given dimension will be rendered. For
         * example, when brushDimension="x" only "left" and "right" handles will be
         * rendered. Handles are automatically styled with cursors appropriate to their orientation.
         * @default "handleStyle={{ stroke: 'transparent', fill: 'transparent' }}"
         */
        handleStyle?: React.CSSProperties | undefined;
        /**
         * The optional onBrushDomainChange prop accepts an function to be called on
         * each update to the highlighted domain. The function accepts the parameters of
         * domain (the updated domain), and props (the props used by VictoryBrushContainer).
         * @example onBrushDomainChange={(domain, props) => handleDomainChange(domain, props)}
         */
        onBrushDomainChange?: ((domain: DomainPropType, props: VictoryBrushContainerProps) => void) | undefined;
    }

    export class VictoryBrushContainer extends React.Component<VictoryBrushContainerProps, any> {}

    export interface VictoryVoronoiContainerProps extends VictoryContainerProps {
        /**
         * When the activateData prop is set to true, the active prop will be set to true on all
         * data components within a voronoi area. When this prop is set to false, the onActivated
         * and onDeactivated callbacks will still fire, but no mutations to data components will
         * occur via Victory’s event system.
         */
        activateData?: boolean | undefined;
        /**
         * When the activateLabels prop is set to true, the active prop will be set to true on all
         * labels corresponding to points within a voronoi area. When this prop is set to false,
         * the onActivated and onDeactivated callbacks will still fire, but no mutations to label
         * components will occur via Victory’s event system. Labels defined directly on
         * VictoryVoronoiContainer via the labels prop will still appear when this prop is set to false.
         */
        activateLabels?: boolean | undefined;
        /**
         * When the disable prop is set to true, VictoryVoronoiContainer events will not fire.
         */
        disable?: boolean | undefined;
        /**
         * When a labels prop is provided to VictoryVoronoiContainer it will render a label component
         * rather than activating labels on the child components it renders. This is useful for
         * creating multi- point tooltips. This prop should be given as a function which will be called
         * once for each active point. The labels function will be called with the arguments point,
         * index, and points, where point refers to a single active point, index refers to the position
         * of that point in the array of active points, and points is an array of all active points.
         */
        labels?: ((point: any, index: number, points: any[]) => string) | undefined;
        /**
         * The labelComponent prop specified the component that will be rendered when labels are defined
         * on VictoryVoronoiContainer. If the labels prop is omitted, no label component will be rendered.
         */
        labelComponent?: React.ReactElement | undefined;
        /**
         * The onActivated prop accepts a function to be called whenever new data points are activated.
         * The function is called with the parameters points (an array of active data objects) and props
         * (the props used by VictoryVoronoiContainer).
         */
        onActivated?: ((points: any[], props: VictoryVoronoiContainerProps) => void) | undefined;
        /**
         * The onDeactivated prop accepts a function to be called whenever points are deactivated. The
         * function is called with the parameters points (an array of the newly-deactivated data objects)
         * and props (the props used by VictoryVoronoiContainer).
         */
        onDeactivated?: ((points: any[], props: VictoryVoronoiContainerProps) => void) | undefined;
        /**
         * When the radius prop is set, the voronoi areas associated with each data point will be no larger
         * than the given radius. This prop should be given as a number.
         */
        radius?: number | undefined;
        /**
         * The voronoiBlacklist prop is used to specify a list of components to ignore when calculating a
         * shared voronoi diagram. Components with a name prop matching an element in the voronoiBlacklist
         * array will be ignored by VictoryVoronoiContainer. Ignored components will never be flagged as
         * active, and will not contribute date to shared tooltips or labels.
         */
        voronoiBlacklist?: string[] | undefined;
        /**
         * When the voronoiDimension prop is set, voronoi selection will only take the given dimension into
         * account. For example, when dimension is set to “x”, all data points matching a particular x mouse
         * position will be activated regardless of y value. When this prop is not given, voronoi selection
         * is determined by both x any y values.
         */
        voronoiDimension?: 'x' | 'y' | undefined;
        /**
         * When the voronoiPadding prop is given, the area of the chart that will trigger voronoi events is
         * reduced by the given padding on every side. By default, no padding is applied, and the entire range
         * of a given chart may trigger voronoi events. This prop should be given as a number.
         */
        voronoiPadding?: number | undefined;
    }

    export class VictoryVoronoiContainer extends React.Component<VictoryVoronoiContainerProps, any> {}

    export interface VictoryZoomContainerProps extends VictoryContainerProps {
        /**
         * The optional allowPan prop accepts a boolean that enables the panning
         * functionality. Zooming will still be enabled when the allowPan prop is set to false.
         * @default true
         */
        allowPan?: boolean | undefined;
        /**
         * The optional allowZoom prop accepts a boolean that enables the zoom
         * functionality. Panning will still be enabled when the allowZoom prop is set to false.
         * @default true
         */
        allowZoom?: boolean | undefined;
        /**
         * VictoryZoomContainer works by clipping data outside of a given domain.
         * VictoryZoomContainer uses VictoryClipContainer by default.
         * This prop should not be replaced with a custom component, but you may want to set
         * props on VictoryClipContainer, such as clipPadding.
         * @example clipContainerComponent={<VictoryClipContainer clipPadding={{top: 10, right: 10}}}/>}
         */
        clipContainerComponent?: React.ReactElement | undefined;
        /**
         * When the zoomDimension prop is set, panning and zooming will be restricted to
         * the given dimension (either x or y), and the domain of the other dimension will
         * remain static. When this prop is not specified, both x and y dimensions will pan and zoom.
         * @example zoomDimension="x"
         */
        zoomDimension?: 'x' | 'y' | undefined;
        /**
         * The zoomDomain prop describes the zoomed state. This prop is an object that
         * specifies separate arrays for x and y. Each array is a tuple that describes the
         * minimum and maximum values to render. If this prop is not provided initially, the
         * chart will render without an initial zoom, displaying the entire dataset. Updates to
         * zoomDomain will trigger a re-render of the chart with the new domain.
         * @example zoomDomain={{x: [0, 100]}}
         */
        zoomDomain?: DomainPropType | undefined;
        /**
         * The brushStyle adds custom styles to the brushComponent. This prop
         * should be given as an object of SVG style attributes.
         * @default "brushStyle={{ stroke: 'transparent', fill: 'black', fillOpacity: 0.1 }}"
         */
        brushStyle?: React.CSSProperties | undefined;
        /**
         * The defaultBrushArea prop specifies how the container will behave when a
         * region outside the active brush is clicked without selecting a new area. When the
         * prop is set to "all", the entire domain will be selected. When the prop is set to "none",
         * no new region will be selected, and any existing active brush will be cleared. When
         * the prop is set to "disable" the new selected region will default to the current active brush.
         */
        defaultBrushArea?: 'all' | 'none' | 'disable' | undefined;
        /**
         * When the disable prop is set to true, VictoryBrushContainer events will not fire.
         */
        disable?: boolean | undefined;
        /**
         * When the disable prop is set to true, VictoryZoomContainer events will not fire.
         */
        downsample?: number | boolean | undefined;
        /**
         * The minimumZoom prop sets a minimum domain extent for the zoomed chart.
         * When the difference between the maximum and minimum of a zoomed domain is equal to the minimumZoom
         * in either dimension, the component will stop responding to events that would normally trigger zooming in.
         * Zooming out and panning will still be enabled. When this prop is not specified, the default minimum
         * zoom will cover 1 / 1000th of the original domain. This prop should be given as an object
         * with numeric values for x and y.
         * @example minimumZoom={{x: 1, y: 0.01}}
         */
        minimumZoom?: CursorData | undefined;
        /**
         * The optional onZoomDomainChange prop accepts an function to be called on each update to the visible domain.
         * The function accepts the parameters domain (the updated domain) and props (the props used by VictoryZoomContainer).
         * @example onZoomDomainChange={(domain, props) => handleDomainChange(domain, props)}
         */
        onZoomDomainChange?: ((domain: DomainPropType, props: VictoryZoomContainerProps) => void) | undefined;
    }

    export class VictoryZoomContainer extends React.Component<VictoryZoomContainerProps, any> {}

    type ThemeBaseProps = {
        width: number;
        height: number;
        colorScale: string[];
        padding?: number | undefined;
    };

    // Note: Many SVG attributes are missed in CSSProperties interface
    export interface VictoryThemeDefinition {
        area?: {
            style?: {
                data?: React.CSSProperties | undefined;
                labels?: React.CSSProperties | undefined;
            } | undefined;
        } & ThemeBaseProps | undefined;
        axis?: {
            style?: {
                axis?: React.CSSProperties | undefined;
                axisLabel?: React.CSSProperties | undefined;
                grid?: React.CSSProperties | undefined;
                ticks?: React.CSSProperties | undefined;
                tickLabels?: React.CSSProperties | undefined;
            } | undefined;
        } & ThemeBaseProps | undefined;
        bar?: {
            style?: {
                data?: React.CSSProperties | undefined;
                labels?: React.CSSProperties | undefined;
            } | undefined;
        } & ThemeBaseProps | undefined;
        boxplot?: {
            style?: {
                max?: React.CSSProperties | undefined;
                maxLabels?: React.CSSProperties | undefined;
                median?: React.CSSProperties | undefined;
                medianLabels?: React.CSSProperties | undefined;
                min?: React.CSSProperties | undefined;
                minLabels?: React.CSSProperties | undefined;
                q1?: React.CSSProperties | undefined;
                q1Labels?: React.CSSProperties | undefined;
                q3?: React.CSSProperties | undefined;
                q3Labels?: React.CSSProperties | undefined;
            } | undefined;
            boxWidth?: number | undefined;
        } & ThemeBaseProps | undefined;
        candlestick?: {
            style?: {
                data?: React.CSSProperties | undefined;
                labels?: React.CSSProperties | undefined;
            } | undefined;
            candleColors?: {
                positive?: string | undefined;
                negative?: string | undefined;
            } | undefined;
        } & ThemeBaseProps | undefined;
        chart?: ThemeBaseProps | undefined;
        errorbar?: {
            borderWidth?: number | undefined;
            style?: {
                data?: React.CSSProperties | undefined;
                labels?: React.CSSProperties | undefined;
            } | undefined;
        } & ThemeBaseProps | undefined;
        group?: ThemeBaseProps | undefined;
        legend?: {
            gutter?: number | undefined;
            orientation?: 'vertical' | 'horizontal' | undefined;
            titleOrientation?: OrientationTypes | undefined;
            style?: {
                data?: React.CSSProperties & {
                    type?: ScatterSymbolType | undefined;
                } | undefined;
                labels?: React.CSSProperties | undefined;
                title?: React.CSSProperties | undefined;
            } | undefined;
        } & ThemeBaseProps | undefined;
        line?: {
            style?: {
                data?: React.CSSProperties | undefined;
                labels?: React.CSSProperties | undefined;
            } | undefined;
        } & ThemeBaseProps | undefined;
        pie?: {
            style?: {
                data?: React.CSSProperties | undefined;
                labels?: React.CSSProperties | undefined;
            } | undefined;
        } & ThemeBaseProps | undefined;
        scatter?: {
            style?: {
                data?: React.CSSProperties | undefined;
                labels?: React.CSSProperties | undefined;
            } | undefined;
        } & ThemeBaseProps | undefined;
        stack?: ThemeBaseProps | undefined;
        tooltip?: {
            style?: React.CSSProperties | undefined;
            flyoutStyle?: React.CSSProperties | undefined;
            cornerRadius?: number | undefined;
            pointerLength?: number | undefined;
        } | undefined;
        voronoi?: {
            style?: {
                data?: React.CSSProperties | undefined;
                labels?: React.CSSProperties | undefined;
                flyout?: React.CSSProperties | undefined;
            } | undefined;
        } & ThemeBaseProps | undefined;
    }

    interface VictoryThemeInterface {
        /**
         * Default theme
         */
        grayscale: VictoryThemeDefinition;
        material: VictoryThemeDefinition;
    }

    /**
     * Available themes
     */
    export const VictoryTheme: VictoryThemeInterface;

    type OrientationTypes = 'top' | 'bottom' | 'left' | 'right';

    export interface VictoryTooltipProps {
        /**
         * The active prop specifies whether the tooltip component should be displayed.
         */
        active?: boolean | undefined;
        /**
         * When true, tooltip events will set the active prop on both data and label elements.
         * @default false
         */
        activateData?: boolean | undefined;
        /**
         * The angle prop specifies the angle to rotate the tooltip around its origin point.
         */
        angle?: string | number | undefined;
        /**
         * The cornerRadius prop determines corner radius of the flyout container. This prop may be given as a positive number or a function of datum.
         */
        cornerRadius?: NumberOrCallback | undefined;
        /**
         * Victory components can pass a datum prop to their label component. This can be used to calculate functional styles, and determine text.
         */
        datum?: {} | undefined;
        /**
         * Victory components can pass a data prop to their label component. This can be useful in custom components that need to make use of the entire dataset.
         */
        data?: any[] | undefined;
        /**
         * The dx prop defines a horizontal shift from the x coordinate.
         */
        dx?: StringOrNumberOrCallback | undefined;
        /**
         * The dy prop defines a vertical shift from the y coordinate.
         */
        dy?: StringOrNumberOrCallback | undefined;
        /**
         * The events prop attaches arbitrary event handlers to the label component. This prop should be given as an object of event names and corresponding event handlers.
         * When events are provided via Victory’s event system, event handlers will be called with the event, the props of the component is attached to, and an eventKey.
         * Examples: events={{onClick: (evt) => alert("x: " + evt.clientX)}}
         */
        events?: {} | undefined;
        /**
         * The flyoutHeight prop defines the height of the tooltip flyout. This prop may be given as a positive number or a function of datum. If this prop
         * is not set, flyoutHeight will be determined based on an approximate text size calculated from the text and style props provided to VictoryTooltip.
         */
        flyoutHeight?: NumberOrCallback | undefined;
        /**
         * The flyoutWidth prop defines the width of the tooltip flyout. This prop may be given as a positive number or a function of datum. If this prop is
         * not set, flyoutWidth will be determined based on an approximate text size calculated from the text and style props provided to VictoryTooltip.
         */
        flyoutWidth?: NumberOrCallback | undefined;
        /**
         * The style prop applies SVG style properties to the rendered flyout container. These props will be passed to the flyoutComponent.
         */
        flyoutStyle?: VictoryStyleObject | undefined;
        /**
         * The flyoutComponent prop takes a component instance which will be used to create the flyout path for each tooltip.
         * The new element created from the passed flyoutComponent will be supplied with the following properties: x, y, dx, dy,
         * index, datum, cornerRadius, pointerLength, pointerWidth, width, height, orientation, style, and events.
         * Any of these props may be overridden by passing in props to the supplied component, or modified or ignored within the custom component itself.
         * If flyoutComponent is omitted, a default Flyout component will be created with props described above.
         * Examples: flyoutComponent={<Flyout x={50} y={50}/>}, flyoutComponent={<MyCustomFlyout/>}
         * @default <Flyout/>
         */
        flyoutComponent?: React.ReactElement | undefined;
        /**
         * The groupComponent prop takes a component instance which will be used to create group elements for use within container elements. This prop defaults to a <g> tag.
         * @default groupComponent={<g/>}
         */
        groupComponent?: React.ReactElement | undefined;
        /**
         * This prop refers to the height of the svg that VictoryLabel is rendered within. This prop is passed from parents of VictoryLabel, and should not be set
         * manually. In versions before ^33.0.0 this prop referred to the height of the tooltip flyout. Please use flyoutHeight instead
         */
        height?: number | undefined;
        /**
         * The horizontal prop determines whether to plot the flyouts to the left / right of the (x, y) coordinate rather than top / bottom.
         * This is useful when an orientation prop is not provided, and data will determine the default orientation. i.e.
         * negative values result in a left orientation and positive values will result in a right orientation by default.
         */
        horizontal?: boolean | undefined;
        /**
         * The index prop represents the index of the datum in the data array.
         */
        index?: number | string | undefined;
        /**
         * The labelComponent prop takes a component instance which will be used to render each tooltip label.
         * The new element created from the passed labelComponent will be supplied with the following properties: x, y, index, datum, verticalAnchor, textAnchor, style, text, and events.
         * Any of these props may be overridden by passing in props to the supplied component, or modified or ignored within the custom component itself.
         * If labelComponent is omitted, a new VictoryLabel will be created with the props described above.
         * Examples: labelComponent={<VictoryLabel dy={20}/>}, labelComponent={<MyCustomLabel/>}
         * @default <VictoryLabel/>
         */
        labelComponent?: React.ReactElement | undefined;
        /**
         * The orientation prop determines which side of the (x, y) coordinate the tooltip should be rendered on.
         * This prop can be given as “top”, “bottom”, “left”, “right”, or as a function of datum that returns one of these values.
         * If this prop is not provided it will be determined from the sign of the datum, and the value of the horizontal prop.
         */
        orientation?: OrientationTypes | VictoryNumberCallback | undefined;
        /**
         * The pointerLength prop determines the length of the triangular pointer extending from the flyout. This prop may be given as a positive number or a function of datum.
         */
        pointerLength?: NumberOrCallback | undefined;
        /**
         * The pointerWidth prop determines the width of the base of the triangular pointer extending from
         * the flyout. This prop may be given as a positive number or a function of datum.
         */
        pointerWidth?: NumberOrCallback | undefined;
        /**
         * When renderInPortal is true, rendered tooltips will be wrapped in VictoryPortal and rendered within the Portal element
         * within VictoryContainer. Note: This prop should not be set to true when using a custom container element.
         */
        renderInPortal?: boolean | undefined;
        /**
         * The style prop applies CSS properties to the rendered `<text>` element.
         */
        style?: React.CSSProperties | undefined;
        /**
         * The text prop defines the text VictoryTooltip will render. The text prop may be given as a string, number, or function of datum.
         * When VictoryLabel is used as the labelComponent, strings may include newline characters, which VictoryLabel will split in to separate <tspan/> elements.
         */
        text?: StringOrNumberOrCallback | string[] | number[] | undefined;
        /**
         * VictoryAxis uses the standard theme prop. Read about it here
         * @default VictoryTheme.grayscale
         */
        theme?: VictoryThemeDefinition | undefined;
        /**
         * This prop refers to the width of the svg that VictoryLabel is rendered within. This prop is passed from parents of VictoryLabel,
         * and should not be set manually. In versions before ^33.0.0 this prop referred to the width of the tooltip flyout. Please use flyoutWidth instead
         */
        width?: number | undefined;
        /**
         * The x prop defines the x coordinate to use as a basis for horizontal positioning.
         */
        x?: number | undefined;
        /**
         * The y prop defines the y coordinate to use as a basis for vertical positioning.
         */
        y?: number | undefined;
    }

    export interface FlyoutProps extends VictoryCommonProps {
        /**
         * a flag signifying whether the component is active
         */
        active?: boolean | undefined;
        /**
         * the center coordinates of the flyout
         */
        center?: {
            x?: number | undefined;
            y?: number | undefined;
        } | undefined;
        /**
         * the class name that will be applied to the rendered element
         */
        className?: string | undefined;
        /**
         * the corner radius of the flyout
         */
        cornerRadius?: number | undefined;
        /**
         * the entire dataset if applicable
         */
        data?: any[] | undefined;
        /**
         * the data point corresponding to this flyout if applicable
         */
        datum?: object | undefined;
        /**
         * offset in the x dimension.
         */
        dx?: number | undefined;
        /**
         * offset in the y dimension.
         */
        dy?: number | undefined;
        /**
         * events to attach to the rendered element
         */
        events?: object | undefined;
        /**
         * the height of the flyout
         */
        height?: number | undefined;
        /**
         * an id to apply to the rendered component
         */
        id?: string | number | undefined;
        /**
         * the index of this flyout within the dataset
         */
        index?: number | undefined;
        orientation?: 'top' | 'bottom' | 'left' | 'right' | undefined;
        /**
         * the svg coordinates of the center point of a polar chart
         */
        origin?: object | undefined;
        /**
         * the rendered path element
         * @default pathComponent={<Path/>}
         */
        pathComponent?: React.ReactElement | undefined;
        /**
         * the length of the triangular pointer
         */
        pointerLength?: number | undefined;
        /**
         * the width of the base of the triangular pointer
         */
        pointerWidth?: number | undefined;
        /**
         * a flag specifying whether the component is part of a polar chart
         */
        polar?: boolean | undefined;
        /**
         * the aria role to assign to the element
         */
        role?: string | undefined;
        /**
         * the shape rendering attribute to apply to the rendered elements
         */
        shapeRendering?: string | undefined;
        /**
         * the styles to apply to the rendered element
         */
        style?: VictoryStyleObject | undefined;
        /**
         * a transform that will be supplied to elements this component renders
         */
        transform?: string | undefined;
        /**
         * the width of the flyout
         */
        width?: number | undefined;
        /**
         * the x coordinate of data point associated with this flyout
         */
        x?: number | undefined;
        /**
         * the y coordinate of data point associated with this flyout
         */
        y?: number | undefined;
    }

    /**
     * `VictoryTooltip` uses `Flyout` to render a flyout style path around text. `Flyout` renders `<Path>` element.
     */
    export class Flyout extends React.Component<FlyoutProps, any> {}

    /**
     * VictoryTooltip renders a tooltip component with a set of default events. When VictoryTooltip is used as a label
     * component for any Victory component that renders data, it will attach events to rendered data components that will activate the tooltip when hovered.
     * VictoryTooltip renders text as well as a configurable Flyout container.
     */
    export class VictoryTooltip extends React.Component<VictoryTooltipProps, any> {}

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
        onEnd?: (() => void) | undefined;
        /**
         * Animation exit transition configuration
         */
        onExit?: {
            duration?: number | undefined;
            before?: ((datum: any) => AnimationStyle) | undefined;
        } | undefined;
        /**
         * Animation enter transition configuration
         */
        onEnter?: {
            duration?: number | undefined;
            before?: ((datum: any) => AnimationStyle) | undefined;
            after?: ((datum: any) => AnimationStyle) | undefined;
        } | undefined;
        /**
         * Animation load transition configuration
         */
        onLoad?: {
            duration?: number | undefined;
            before?: ((datum: any) => AnimationStyle) | undefined;
            after?: ((datum: any) => AnimationStyle) | undefined;
        } | undefined;
        /**
         * The easing prop specifies an easing function name to use for tweening.
         * @default "quadInOut"
         */
        easing?: AnimationEasing | undefined;
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
        childName?: string | undefined;
        target?: TTarget | undefined;
        eventKey?: TEventKey | undefined;
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
        childName?: string | undefined;
        /**
         * Targets may be any valid style namespace for a given component
         */
        target: TTarget;

        eventKey?: TEventKey | undefined;
        /**
         * Event handlers map. Keys are standard event names (such as onClick) and values are event callbacks
         */
        eventHandlers: {
            [key: string]:
                | {
                      (event: React.SyntheticEvent<any>): EventCallbackInterface<TTarget, TEventKey>;
                  }
                | {
                      (event: React.SyntheticEvent<any>): EventCallbackInterface<TTarget, TEventKey>[];
                  };
        };
    }

    /**
     * Data domain type
     */
    type DomainTuple = [number, number] | [Date, Date];

    type DomainPropType = DomainTuple | { x?: DomainTuple | undefined; y: DomainTuple } | { x: DomainTuple; y?: DomainTuple | undefined };

    /**
     * Domain padding
     */
    type DomainPaddingPropType =
        | number
        | {
              x?: number | [number, number] | undefined;
              y?: number | [number, number] | undefined;
          };

    /**
     * D3 scale function shape. Don't want to introduce typing dependency to d3
     */
    interface D3Scale {
        (input: string | number): number;
        domain: () => any;
        range: () => any;
        copy: () => any;
    }

    /**
     * Acceptable scale types
     */
    type ScalePropType = 'linear' | 'time' | 'log' | 'sqrt';

    /**
     * Category prop type
     */
    type CategoryPropType =
        | string[]
        | { x: string[] }
        | { y: string[] }
        | {
              x: string[];
              y: string[];
          };

    /**
     * Data getter property type
     */
    type DataGetterPropType = number | string | string[] | { (data: any): number | string | string[] };

    type InterpolationPropType =
        | 'basis'
        | 'basisClosed'
        | 'basisOpen'
        | 'bundle'
        | 'cardinal'
        | 'cardinalClosed'
        | 'cardinalOpen'
        | 'catmullRom'
        | 'catmullRomClosed'
        | 'catmullRomOpen'
        | 'linear'
        | 'linearClosed'
        | 'monotoneX'
        | 'monotoneY'
        | 'natural'
        | 'radial'
        | 'step'
        | 'stepAfter'
        | 'stepBefore';

    type ColorScalePropType =
        | 'greyscale'
        | 'qualitative'
        | 'heatmap'
        | 'warm'
        | 'cool'
        | 'red'
        | 'green'
        | 'blue'
        | string[];

    /**
     * Common properties
     */
    interface VictoryCommonProps {
        /**
         * The animate prop specifies props for VictoryAnimation to use.
         * The animate prop should also be used to specify enter and exit
         * transition configurations with the `onExit` and `onEnter` namespaces respectively.
         * @example
         * {duration: 500, onExit: () => {}, onEnter: {duration: 500, before: () => ({y: 0})}}
         */
        animate?: boolean | AnimatePropTypeInterface | undefined;
        /**
         * The name prop is used to reference a component instance when defining shared events.
         */
        name?: string | undefined;
        /**
         * The height props specifies the height the svg viewBox of the chart container.
         * This value should be given as a number of pixels
         */
        height?: number | undefined;
        /**
         * The horizontal prop determines whether data will be plotted horizontally.
         * When this prop is set to true, the independent variable will be plotted on the y axis
         * and the dependent variable will be plotted on the x axis.
         * @default false
         */
        horizontal?: boolean | undefined;
        /**
         * The maxDomain prop defines a maximum domain value for a chart. This prop is useful in
         * situations where the maximum domain of a chart is static, while the minimum value
         * depends on data or other variable information.
         * If the domain prop is set in addition to maximumDomain, domain will be used.
         *
         * note: The x value supplied to the maxDomain prop refers to the independent variable,
         * and the y value refers to the dependent variable. This may cause confusion in
         * horizontal charts, as the independent variable will corresponds to the y axis.
         */
        maxDomain?: number | { x?: number | undefined; y?: number | undefined } | undefined;
        /**
         * The minDomain prop defines a minimum domain value for a chart. This prop is useful in
         * situations where the minimum domain of a chart is static, while the maximum value
         * depends on data or other variable information. If the domain prop is set in addition
         * to minimumDomain, domain will be used.
         *
         * note: The x value supplied to the minDomain prop refers to the independent variable,
         * and the y value refers to the dependent variable. This may cause confusion in
         * horizontal charts, as the independent variable will corresponds to the y axis.
         */
        minDomain?: number | { x?: number | undefined; y?: number | undefined } | undefined;
        /**
         * The padding props specifies the amount of padding in number of pixels between
         * the edge of the chart and any rendered child components. This prop can be given
         * as a number or as an object with padding specified for top, bottom, left
         * and right.
         * @default 50
         */
        padding?: PaddingProps | undefined;
        /**
         * The scale prop determines which scales your chart should use. This prop can be
         * given as a string specifying a supported scale ("linear", "time", "log", "sqrt"),
         * as a d3 scale function, or as an object with scales specified for x and y
         * @example d3Scale.time(), {x: "linear", y: "log"}
         * @default "linear"
         */
        scale?:
            | ScalePropType
            | D3Scale
            | {
                  x?: ScalePropType | D3Scale | undefined;
                  y?: ScalePropType | D3Scale | undefined;
              } | undefined;
        /**
         * By default `domainPadding` is coerced to existing quadrants. This means that if a given domain only
         * includes positive values, no amount of padding applied by `domainPadding` will result in a domain with
         * negative values. This is the desired behavior in most cases. For users that need to apply padding without
         * regard to quadrant, the `singleQuadrantDomainPadding` prop may be used. This prop may be given as a boolean
         * or an object with boolean values specified for "x" and/or "y". When this prop is false (or false for a given
         * dimension), padding will be applied without regard to quadrant. If this prop is not specified,
         * `domainPadding` will be coerced to existing quadrants.
         *
         * *note:* The `x` value supplied to the `singleQuadrantDomainPadding` prop refers to the *independent* variable,
         * and the `y` value refers to the *dependent* variable. This may cause confusion in horizontal charts, as the
         * independent variable will corresponds to the y axis.
         */
        singleQuadrantDomainPadding?: boolean | { x?: boolean | undefined; y?: boolean | undefined } | undefined;
        /**
         * The standalone prop determines whether the component will render a standalone svg
         * or a <g> tag that will be included in an external svg. Set standalone to false to
         * compose VictoryAxis with other components within an enclosing <svg> tag.
         * @default true
         */
        standalone?: boolean | undefined;
        /**
         * The width props specifies the width of the svg viewBox of the chart container
         * This value should be given as a number of pixels
         */
        width?: number | undefined;
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
        containerComponent?: React.ReactElement | undefined;
        /**
         * The theme prop takes a style object with nested data, labels, and parent objects.
         * You can create this object yourself, or you can use a theme provided by Victory.
         * When using VictoryArea as a solo component, implement the theme directly on
         * VictoryArea. If you are wrapping VictoryArea in VictoryChart, VictoryStack, or
         * VictoryGroup, please call the theme on the outermost wrapper component instead.
         * @example theme={VictoryTheme.material}
         * http://www.github.com/FormidableLabs/victory-core/tree/master/src/victory-theme/material.js
         */
        theme?: VictoryThemeDefinition | undefined;
        /**
         * The groupComponent prop takes an entire component which will be used to
         * create group elements for use within container elements. This prop defaults
         * to a <g> tag on web, and a react-native-svg <G> tag on mobile
         * @default <g/>
         */
        groupComponent?: React.ReactElement | undefined;
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
        categories?: CategoryPropType | undefined;
        /**
         * The data prop specifies the data to be plotted. Data should be in the form of an array
         * of data points, or an array of arrays of data points for multiple datasets.
         * Each data point may be any format you wish (depending on the `x` and `y` accessor props),
         * but by default, an object with x and y properties is expected.
         * @example [{x: 1, y: 2}, {x: 2, y: 3}], [[1, 2], [2, 3]],
         * [[{x: "a", y: 1}, {x: "b", y: 2}], [{x: "a", y: 2}, {x: "b", y: 3}]]
         */
        data?: any[] | undefined;
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
        dataComponent?: React.ReactElement | undefined;
        /**
         * The domain prop describes the range of values your chart will cover. This prop can be
         * given as a array of the minimum and maximum expected values for your bar chart,
         * or as an object that specifies separate arrays for x and y.
         * If this prop is not provided, a domain will be calculated from data, or other
         * available information.
         * @example [-1, 1], {x: [0, 100], y: [0, 1]}
         */
        domain?: DomainPropType | undefined;
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
        x?: DataGetterPropType | undefined;
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
        y?: DataGetterPropType | undefined;
        /**
         * Use y0 data accessor prop to determine how the component defines the baseline y0 data.
         * This prop is useful for defining custom baselines for components like VictoryBar or VictoryArea.
         * This prop may be given in a variety of formats.
         * @example 'last_quarter_profit', () => 10, 1, 'employees.salary', ["employees", "salary"]
         */
        y0?: DataGetterPropType | undefined;
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
        labelComponent?: React.ReactElement | undefined;
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
        labels?: string[] | { (data: any): string } | undefined;
    }

    interface VictorySingleLabableProps extends VictoryLabableProps {
        /**
         * The label prop defines the label that will appear at the edge of the area.
         * This prop should be given a string or as a function of data. If individual
         * labels are required for each data point, they should be created by composing
         * VictoryArea with VictoryScatter
         * @example: "Series 1", (data) => `${data.length} points`
         */
        label?: string | { (data: any): string } | undefined;
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
         */
        events?: EventPropTypeInterface<'data' | 'labels' | 'parent', 'all'>[] | undefined;
        /**
         * The interpolation prop determines how data points should be connected when plotting a line
         * @default "linear"
         */
        interpolation?: InterpolationPropType | undefined;
        /**
         * The labels prop defines the labels that will appear above each point.
         * This prop should be given as an array or as a function of data.
         */
        labels?: string[] | number[] | Function | undefined;
        /**
         * The samples prop specifies how many individual points to plot when plotting
         * y as a function of x. Samples is ignored if x props are provided instead.
         * @default 50
         */
        samples?: number | undefined;
        /**
         * The style prop specifies styles for your VictoryArea. Any valid inline style properties
         * will be applied. Height, width, and padding should be specified via the height,
         * width, and padding props, as they are used to calculate the alignment of
         * components within chart.
         * @example {data: {fill: "red"}, labels: {fontSize: 12}}
         */
        style?: VictoryStyleInterface | undefined;
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
        axisComponent?: React.ReactElement | undefined;
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
        axisLabelComponent?: React.ReactElement | undefined;
        /**
         * The axisValue prop may be used instead of axisAngle to position the
         * dependent axis. Ths prop is useful when dependent axes should line up
         * with values on the independent axis.
         */
        axisValue?: number | string | object | undefined;
        /**
         * This prop specifies whether a given axis is intended to cross another axis.
         */
        crossAxis?: boolean | undefined;
        /**
         * The dependentAxis prop specifies whether the axis corresponds to the
         * dependent variable (usually y). This prop is useful when composing axis
         * with other components to form a chart.
         */
        dependentAxis?: boolean | undefined;
        /**
         * The domain prop describes the range of values your axis will include. This prop should be
         * given as a array of the minimum and maximum expected values for your axis.
         * If this value is not given it will be calculated based on the scale or tickValues.
         * @examples [-1, 1]
         */
        domain?: DomainPropType | undefined;
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
         */
        events?: EventPropTypeInterface<
            'axis' | 'axisLabel' | 'grid' | 'ticks' | 'tickLabels' | 'parent',
            number | string
        >[] | undefined;
        /**
         * When true, this prop reduces the number of tick labels to fit the length of the axis.
         * Labels are removed at approximately even intervals from the original array of labels.
         * This feature only works well for labels that are approximately evenly spaced.
         * @default false
         */
        fixLabelOverlap?: boolean | undefined;
        /**
         * The gridComponent prop takes in an entire component which will be used
         * to create grid lines. The new element created from the passed gridComponent
         * will be supplied with the following properties: x1, y1, x2, y2, tick, style and events.
         * Any of these props may be overridden by passing in props to the supplied component,
         * or modified or ignored within the custom component itself. If a gridComponent
         * is not supplied, VictoryAxis will render its default GridLine component.
         * @default <GridLine/>
         */
        gridComponent?: React.ReactElement | undefined;
        /**
         * If true, this value will flip the domain of a given axis.
         */
        invertAxis?: boolean | undefined;
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
        offsetX?: number | undefined;
        /**
         * This value describes how far from the "edge" of its permitted area each axis
         * will be set back in the y-direction.  If this prop is not given,
         * the offset is calculated based on font size, axis orientation, and label padding.
         */
        offsetY?: number | undefined;
        /**
         * The orientation prop specifies the position and orientation of your axis.
         */
        orientation?: 'top' | 'bottom' | 'left' | 'right' | undefined;
        /**
         * The style prop defines the style of the component. The style prop should be given as an object
         * with styles defined for parent, axis, axisLabel, grid, ticks, and tickLabels. Any valid svg
         * styles are supported, but width, height, and padding should be specified via props as they
         * determine relative layout for components in VictoryChart. Functional styles may be defined for
         * grid, tick, and tickLabel style properties, and they will be evaluated with each tick.
         *
         * note: When a component is rendered as a child of another Victory component, or within a custom
         * <svg> element with standalone={false} parent styles will be applied to the enclosing <g> tag.
         * Many styles that can be applied to a parent <svg> will not be expressed when applied to a <g>.
         *
         * note: custom angle and verticalAnchor properties may be included in labels styles.
         */
        style?: {
            parent?: React.CSSProperties | undefined;
            axis?: React.CSSProperties | undefined;
            axisLabel?: React.CSSProperties | undefined;
            grid?: {
                [K in keyof React.CSSProperties]: string | number | ((tick?: any) => string | number);
            } | undefined;
            ticks?: {
                [K in keyof React.CSSProperties]: string | number | ((tick?: any) => string | number);
            } | undefined;
            tickLabels?: {
                [K in keyof React.CSSProperties]: string | number | ((tick?: any) => string | number);
            } | undefined;
        } | undefined;
        /**
         * The tickComponent prop takes in an entire component which will be used
         * to create tick lines. The new element created from the passed tickComponent
         * will be supplied with the following properties: x1, y1, x2, y2, tick, style and events.
         * Any of these props may be overridden by passing in props to the supplied component,
         * or modified or ignored within the custom component itself. If a tickComponent
         * is not supplied, VictoryAxis will render its default Tick component.
         * @default <Tick/>
         */
        tickComponent?: React.ReactElement | undefined;
        /**
         * The tickCount prop specifies approximately how many ticks should be drawn on the axis if
         * tickValues are not explicitly provided. This value is calculated by d3 scale and
         * prioritizes returning "nice" values and evenly spaced ticks over an exact number of ticks.
         * If you need an exact number of ticks, please specify them via the tickValues prop.
         * This prop must have a value greater than zero.
         * @default 5
         */
        tickCount?: number | undefined;
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
        tickLabelComponent?: React.ReactElement | undefined;
        /**
         * The tickFormat prop specifies how tick values should be expressed visually.
         * tickFormat can be given as a function to be applied to every tickValue, or as
         * an array of display values for each tickValue.
         * @example d3.time.format("%Y"), (x) => x.toPrecision(2), ["first", "second", "third"]
         */
        tickFormat?: any[] | { (tick: any, index: number, ticks: any[]): string | number } | undefined;
        /**
         * The tickValues prop explicitly specifies which tick values to draw on the axis.
         * @example ["apples", "bananas", "oranges"], [2, 4, 6, 8]
         */
        tickValues?: any[] | undefined;
    }

    /**
     * VictoryAxis draws an SVG chart axis with React.
     * Styles and data can be customized by passing in your own values as properties to the component.
     * Data changes are animated with VictoryAnimation.
     */
    export class VictoryAxis extends React.Component<VictoryAxisProps, any> {}

    export interface VictoryBarProps extends VictoryCommonProps, VictoryDatableProps, VictoryMultiLabeableProps {
        /**
         * The alignment prop specifies how bars should be aligned relative to their data points.
         * This prop may be given as “start”, “middle” or “end”. When this prop is not specified,
         * bars will have “middle” alignment relative to their data points.
         */
        alignment?: 'start' | 'middle' | 'end' | undefined;
        /**
         * The barRatio prop specifies an approximate ratio between bar widths and spaces between bars.
         * When width is not specified via the barWidth prop or in bar styles, the barRatio prop will
         * be used to calculate a default width for each bar given the total number of bars in the data series
         * and the overall width of the chart.
         */
        barRatio?: number | undefined;
        /**
         * The barWidth prop is used to specify the width of each bar. This prop may be given as
         * a number of pixels or as a function that returns a number. When this prop is given as
         * a function, it will be evaluated with the arguments datum, and active. When this value
         * is not given, a default value will be calculated based on the overall dimensions of
         * the chart, and the number of bars.
         */
        barWidth?: NumberOrCallback | undefined;
        /**
         * The cornerRadius prop specifies a radius to apply to each bar.
         * If this prop is given as a single number, the radius will only be applied to the top of each bar.
         * When this prop is given as a function, it will be evaluated with the arguments datum, and active.
         */
        cornerRadius?:
            | NumberOrCallback
            | {
                  top?: NumberOrCallback | undefined;
                  topLeft?: NumberOrCallback | undefined;
                  topRight?: NumberOrCallback | undefined;
                  bottom?: NumberOrCallback | undefined;
                  bottomLeft?: NumberOrCallback | undefined;
                  bottomRight?: NumberOrCallback | undefined;
              } | undefined;
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
         */
        events?: EventPropTypeInterface<'data' | 'labels' | 'parent', number | string>[] | undefined;
        /**
         * Similar to data accessor props `x` and `y`, this prop may be used to functionally
         * assign eventKeys to data
         */
        eventKey?: StringOrNumberOrCallback | undefined;
        /**
         * The horizontal prop determines whether the bars will be laid vertically or
         * horizontally. The bars will be vertical if this prop is false or unspecified,
         * or horizontal if the prop is set to true.
         */
        horizontal?: boolean | undefined;
        /**
         * The style prop specifies styles for your VictoryBar. Any valid inline style properties
         * will be applied. Height, width, and padding should be specified via the height,
         * width, and padding props, as they are used to calculate the alignment of
         * components within chart. In addition to normal style properties, angle and verticalAnchor
         * may also be specified via the labels object, and they will be passed as props to
         * VictoryLabel, or any custom labelComponent.
         * @example {data: {fill: "red", width: 8}, labels: {fontSize: 12}}
         */
        style?: VictoryStyleInterface | undefined;
    }

    /**
     * Draw SVG bar charts with React. VictoryBar is a composable component, so it doesn't include axes
     * Check out VictoryChart for complete bar charts and more.
     */
    export class VictoryBar extends React.Component<VictoryBarProps, any> {}

    export interface VictoryBoxPlotStyleInterface extends VictoryStyleInterface {
        max?: VictoryStyleObject | undefined;
        maxLabels?: VictoryStyleObject | undefined;
        min?: VictoryStyleObject | undefined;
        minLabels?: VictoryStyleObject | undefined;
        median?: VictoryStyleObject | undefined;
        medianLabels?: VictoryStyleObject | undefined;
        q1?: VictoryStyleObject | undefined;
        q1Labels?: VictoryStyleObject | undefined;
        q3?: VictoryStyleObject | undefined;
        q3Labels?: VictoryStyleObject | undefined;
    }

    export interface VictoryBoxPlotProps extends VictoryCommonProps, VictoryDatableProps {
        /**
         * The boxWidth prop specifies how wide each box should be. If the whiskerWidth
         * prop is not set, this prop will also determine the width of the whisker crosshair.
         */
        boxWidth?: number | undefined;
        /**
         * The domain prop describes the range of values your chart will include. This prop can be
         * given as a array of the minimum and maximum expected values for your chart,
         * or as an object that specifies separate arrays for x and y.
         * If this prop is not provided, a domain will be calculated from data, or other
         * available information.
         * @example: [-1, 1], {x: [0, 100], y: [0, 1]}
         */
        domain?: DomainPropType | undefined;
        /**
         * The domainPadding prop specifies a number of pixels of padding to add to the
         * beginning and end of a domain. This prop is useful for explicitly spacing ticks farther
         * from the origin to prevent crowding. This prop should be given as an object with
         * numbers specified for x and y.
         */
        domainPadding?: DomainPaddingPropType | undefined;
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
         */
        events?: EventPropTypeInterface<string, StringOrNumberOrCallback>[] | undefined;
        /**
         * Similar to data accessor props `x` and `y`, this prop may be used to functionally
         * assign eventKeys to data
         */
        eventKey?: StringOrNumberOrCallback | undefined;
        /**
         * The horizontal prop determines whether the bars will be laid vertically or
         * horizontally. The bars will be vertical if this prop is false or unspecified,
         * or horizontal if the prop is set to true.
         */
        horizontal?: boolean | undefined;
        /**
         * The labelOrientation prop determines where labels are placed relative to their
         * corresponding data. If this prop is not set, it will be set to “top” for
         * horizontal charts, and “right” for vertical charts.
         */
        labelOrientation?: 'top' | 'bottom' | 'left' | 'right' | undefined;
        /**
         * When the boolean labels prop is set to true, the values for min, max, median,
         * q1, and q3 will be displayed for each box. For more granular label control, use
         * the individual minLabels, maxLabels, medianLabels, q1Labels, and q3Labels props.
         */
        labels?: boolean | undefined;
        /**
         * Use the max data accessor prop to define the max value of a box plot.
         *
         * string: specify which property in an array of data objects should be used as the max value
         * @example // max="max_value"
         *
         * function: use a function to translate each element in a data array into a max value
         * @example // max={() => 10}
         *
         * path string or path array: specify which property in an array of nested data objects should
         * be used as a max value
         * @example // max="bonds.max", max={["bonds", "max"]}
         */
        max?: StringOrNumberOrCallback | string[] | undefined;
        /**
         * The maxComponent prop takes a component instance which will be responsible for rendering
         * an element to represent the maximum value of the box plot. The new element created from
         * the passed maxComponent will be provided with the following props calculated by
         * VictoryBoxPlot: datum, index, scale, style, events, majorWhisker and minorWhisker. The
         * majorWhisker and minorWhisker props are given as objects with values for x1, y1, x2 and
         * y2 that describes the lines that make up the major and minor whisker. Any of these
         * props may be overridden by passing in props to the supplied component, or modified or
         * ignored within the custom component itself. If a maxComponent is not provided,
         * VictoryBoxPlot will use its default Whisker component.
         */
        maxComponent?: React.ReactElement | undefined;
        /**
         * The maxLabelComponent prop takes a component instance which will be used to render the
         * label corresponding to the maximum value for each box. The new element created from the
         * passed maxLabelComponent will be supplied with the following props: x, y, datum, index,
         * scale, verticalAnchor, textAnchor, angle, transform, style and events. Any of these
         * props may be overridden by passing in props to the supplied component, or modified or
         * ignored within the custom component itself. If maxLabelComponent is omitted, a new
         * VictoryLabel will be created with props described above.
         */
        maxLabelComponent?: React.ReactElement | undefined;
        /**
         * Use the median data accessor prop to define the median value of a box plot.
         *
         * string: specify which property in an array of data objects should be used as the median value
         * @example // median="median_value"
         *
         * function: use a function to translate each element in a data array into a median value
         * @example // median={() => 10}
         *
         * path string or path array: specify which property in an array of nested data objects should
         * be used as a median value
         * @example // median="bonds.median", median={["bonds", "median"]}
         */
        median?: StringOrNumberOrCallback | string[] | undefined;
        /**
         * The medianComponent prop takes a component instance which will be responsible for rendering an
         * element to represent the median value of the box plot. The new element created from the passed
         * medianComponent will be provided with the following props calculated by VictoryBoxPlot: datum,
         * index, scale, style, events, x1, y1, x2 and y2 Any of these props may be overridden by passing
         * in props to the supplied component, or modified or ignored within the custom component itself.
         * If a medianComponent is not provided, VictoryBoxPlot will use its default Line component.
         */
        medianComponent?: React.ReactElement | undefined;
        /**
         * The medianLabelComponent prop takes a component instance which will be used to render the label
         * corresponding to the median value for each box. The new element created from the passed
         * medianLabelComponent will be supplied with the following props: x, y, datum, index, scale,
         * verticalAnchor, textAnchor, angle, transform, style and events. Any of these props may be overridden
         * by passing in props to the supplied component, or modified or ignored within the custom component
         * itself. If medianLabelComponent is omitted, a new VictoryLabel will be created with props described above.
         */
        medianLabelComponent?: React.ReactElement | undefined;
        /**
         * Use the min data accessor prop to define the min value of a box plot.
         *
         * string: specify which property in an array of data objects should be used as the min value
         * @example // min="min_value"
         *
         * function: use a function to translate each element in a data array into a min value
         * @example // min={() => 10}
         *
         * path string or path array: specify which property in an array of nested data objects should
         * be used as a min value
         * @example // min="bonds.min", min={["bonds", "min"]}
         */
        min?: StringOrNumberOrCallback | string[] | undefined;
        /**
         * The medianComponent prop takes a component instance which will be responsible for rendering an
         * element to represent the median value of the box plot. The new element created from the passed
         * medianComponent will be provided with the following props calculated by VictoryBoxPlot: datum,
         * index, scale, style, events, x1, y1, x2 and y2 Any of these props may be overridden by passing
         * in props to the supplied component, or modified or ignored within the custom component itself.
         * If a medianComponent is not provided, VictoryBoxPlot will use its default Line component.
         */
        minComponent?: React.ReactElement | undefined;
        /**
         * The minLabelComponent prop takes a component instance which will be used to render the label
         * corresponding to the minimum value for each box. The new element created from the passed
         * minLabelComponent will be supplied with the following props: x, y, datum, index, scale, verticalAnchor,
         * textAnchor, angle, transform, style and events. Any of these props may be overridden by passing in
         * props to the supplied component, or modified or ignored within the custom component itself. If
         * minLabelComponent is omitted, a new VictoryLabel will be created with props described above.
         */
        minLabelComponent?: React.ReactElement | undefined;
        /**
         * Use the q1 data accessor prop to define the q1 value of a box plot.
         *
         * string: specify which property in an array of data objects should be used as the q1 value
         * @example // q1="q1_value"
         *
         * function: use a function to translate each element in a data array into a q1 value
         * @example // q1={() => 10}
         *
         * path string or path array: specify which property in an array of nested data objects should
         * be used as a q1 value
         * @example // q1="bonds.q1", q1={["bonds", "q1"]}
         */
        q1?: StringOrNumberOrCallback | string[] | undefined;
        /**
         * The q1Component prop takes a component instance which will be responsible for rendering an
         * element to represent the q1 value of the box plot. The new element created from the passed
         * q1Component will be provided with the following props calculated by VictoryBoxPlot: datum,
         * index, scale, style, events, x, y, width and height Any of these props may be overridden by
         * passing in props to the supplied component, or modified or ignored within the custom component
         * itself. If a q1Component is not provided, VictoryBoxPlot will use its default Box component.
         */
        q1Component?: React.ReactElement | undefined;
        /**
         * The q1LabelComponent prop takes a component instance which will be used to render the label
         * corresponding to the q1 value for each box. The new element created from the passed q1LabelComponent
         * will be supplied with the following props: x, y, datum, index, scale, verticalAnchor, textAnchor,
         * angle, transform, style and events. Any of these props may be overridden by passing in props to
         * the supplied component, or modified or ignored within the custom component itself. If
         * q1LabelComponent is omitted, a new VictoryLabel will be created with props described above.
         */
        q1LabelComponent?: React.ReactElement | undefined;
        /**
         * Use the q3 data accessor prop to define the q3 value of a box plot.
         *
         * string: specify which property in an array of data objects should be used as the q3 value
         * @example // q3="q3_value"
         *
         * function: use a function to translate each element in a data array into a q3 value
         * @example // q3={() => 10}
         *
         * path string or path array: specify which property in an array of nested data objects should
         * be used as a q3 value
         * @example // q3="bonds.q3", q3={["bonds", "q3"]}
         */
        q3?: StringOrNumberOrCallback | string[] | undefined;
        /**
         * The q3Component prop takes a component instance which will be responsible for rendering an
         * element to represent the q3 value of the box plot. The new element created from the passed
         * q3Component will be provided with the following props calculated by VictoryBoxPlot: datum,
         * index, scale, style, events, x, y, width and height Any of these props may be overridden by
         * passing in props to the supplied component, or modified or ignored within the custom component
         * itself. If a q3Component is not provided, VictoryBoxPlot will use its default Box component.
         */
        q3Component?: React.ReactElement | undefined;
        /**
         * The q3LabelComponent prop takes a component instance which will be used to render the label
         * corresponding to the q3 value for each box. The new element created from the passed q3LabelComponent
         * will be supplied with the following props: x, y, datum, index, scale, verticalAnchor, textAnchor,
         * angle, transform, style and events. Any of these props may be overridden by passing in props to
         * the supplied component, or modified or ignored within the custom component itself. If q3LabelComponent
         * is omitted, a new VictoryLabel will be created with props described above.
         */
        q3LabelComponent?: React.ReactElement | undefined;
        /**
         * The style prop defines the style of the component. The style prop
         * should be given as an object with styles defined for parent, max,
         * maxLabels, min, minLabels, median, medianLabels, q1, q1Labels, q3,
         * q3Labels. Any valid svg styles are supported, but width, height, a
         * nd padding should be specified via props as they determine relative
         * layout for components in VictoryChart. Functional styles may be
         * defined for style properties, and they will be evaluated with each datum.
         */
        style?: VictoryBoxPlotStyleInterface | undefined;
        /**
         * The whiskerWidth prop specifies how wide each whisker crosshair should be. If the
         * whiskerWidth prop is not set, the width of the whisker crosshair will match
         * the width of the box.
         */
        whiskerWidth?: number | undefined;
    }

    /**
     * VictoryBoxPlot renders a box plot to describe the distribution of a set of data. Data for
     * VictoryBoxPlot may be given with summary statistics pre-calculated (min, median, max, q1, q3),
     * or as an array of raw data. VictoryBoxPlot can be composed with VictoryChart to create box plot charts.
     */
    export class VictoryBoxPlot extends React.Component<VictoryBoxPlotProps, any> {}

    export interface VictoryChartProps extends VictoryCommonProps {
        /**
         * The domain prop describes the range of values your chart will include. This prop can be
         * given as a array of the minimum and maximum expected values for your chart,
         * or as an object that specifies separate arrays for x and y.
         * If this prop is not provided, a domain will be calculated from data, or other
         * available information.
         * @example: [-1, 1], {x: [0, 100], y: [0, 1]}
         */
        domain?: DomainPropType | undefined;
        /**
         * The domainPadding prop specifies a number of pixels of padding to add to the
         * beginning and end of a domain. This prop is useful for explicitly spacing ticks farther
         * from the origin to prevent crowding. This prop should be given as an object with
         * numbers specified for x and y.
         */
        domainPadding?: DomainPaddingPropType | undefined;
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
         */
        events?: EventPropTypeInterface<string, StringOrNumberOrCallback>[] | undefined;
        /**
         * Similar to data accessor props `x` and `y`, this prop may be used to functionally
         * assign eventKeys to data
         */
        eventKey?: StringOrNumberOrCallback | undefined;
        /**
         * The style prop specifies styles for your chart. Any valid inline style properties
         * will be applied. Height, width, and padding should be specified via the height,
         * width, and padding props, as they are used to calculate the alignment of
         * components within chart.
         * @example {border: "1px solid #ccc", margin: "2%", maxWidth: "40%"}
         */
        style?: Pick<VictoryStyleInterface, 'parent'> | undefined;
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

    export interface VictoryGroupProps extends VictoryCommonProps, VictoryDatableProps, VictoryMultiLabeableProps {
        /**
         * The categories prop specifies how categorical data for a chart should be ordered.
         * This prop should be given as an array of string values, or an object with
         * these values for x and y. When categories are not given as an object
         * When this prop is set on a wrapper component, it will dictate the categories of
         * its the children. If this prop is not set, any categories on child component
         * or categorical data, will be merged to create a shared set of categories.
         * @example ["dogs", "cats", "mice"]
         */
        categories?: CategoryPropType | undefined;
        /**
         * The color prop is an optional prop that defines a single color to be applied to the
         * children of VictoryGroup. The color prop will override colors specified via colorScale.
         */
        color?: string | undefined;
        /**
         * The colorScale prop is an optional prop that defines the color scale the chart's bars
         * will be created on. This prop should be given as an array of CSS colors, or as a string
         * corresponding to one of the built in color scales. VictoryBar will automatically assign
         * values from this color scale to the bars unless colors are explicitly provided in the
         * `dataAttributes` prop.
         */
        colorScale?: ColorScalePropType | undefined;
        /**
         * The domain prop describes the range of values your chart will include. This prop can be
         * given as a array of the minimum and maximum expected values for your chart,
         * or as an object that specifies separate arrays for x and y.
         * If this prop is not provided, a domain will be calculated from data, or other
         * available information.
         * @examples: [-1, 1], {x: [0, 100], y: [0, 1]}
         */
        domain?: DomainPropType | undefined;
        /**
         * The domainPadding prop specifies a number of pixels of padding to add to the
         * beginning and end of a domain. This prop is useful for explicitly spacing ticks farther
         * from the origin to prevent crowding. This prop should be given as an object with
         * numbers specified for x and y.
         */
        domainPadding?: DomainPaddingPropType | undefined;
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
         */
        events?: EventPropTypeInterface<'data' | 'labels' | 'parent', StringOrNumberOrCallback>[] | undefined;
        /**
         * Similar to data accessor props `x` and `y`, this prop may be used to functionally
         * assign eventKeys to data
         */
        eventKey?: StringOrNumberOrCallback | undefined;
        /**
         * The horizontal prop determines whether the bars will be laid vertically or
         * horizontally. The bars will be vertical if this prop is false or unspecified,
         * or horizontal if the prop is set to true.
         */
        horizontal?: boolean | undefined;
        /**
         * The offset prop determines the number of pixels each element in a group should
         * be offset from its original position of the on the independent axis. In the
         * case of groups of bars, this number should be equal to the width of the bar
         * plus the desired spacing between bars.
         */
        offset?: number | undefined;
        /**
         * The style prop specifies styles for your grouped chart. These styles will be
         * applied to all grouped children
         */
        style?: VictoryStyleInterface | undefined;
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
         */
        events?: EventPropTypeInterface<'data' | 'labels' | 'parent', number | string>[] | undefined;
        /**
         * The interpolation prop determines how data points should be connected
         * when plotting a line
         */
        interpolation?: InterpolationPropType | undefined;
        /**
         * The samples prop specifies how many individual points to plot when plotting
         * y as a function of x. Samples is ignored if x props are provided instead.
         */
        samples?: number | undefined;
        /**
         * The labels prop defines the labels that will appear above each point.
         * This prop should be given as an array or as a function of data.
         */
        labels?: string[] | number[] | Function | undefined;
        /**
         * Use the sortKey prop to indicate how data should be sorted. This prop
         * is given directly to the lodash sortBy function to be executed on the
         * final dataset.
         */
        sortKey?: string | string[] | Function | undefined;
        /**
         * The style prop specifies styles for your VictoryLine. Any valid inline style properties
         * will be applied. Height, width, and padding should be specified via the height,
         * width, and padding props, as they are used to calculate the alignment of
         * components within chart. in addition to normal style properties, angle and verticalAnchor
         * may also be specified via the labels object, and they will be passed as props to
         * VictoryLabel, or any custom labelComponent.
         * @examples{data: {stroke: "red"}, labels: {fontSize: 12}}
         */
        style?: VictoryStyleInterface | undefined;
    }

    /**
     * VictoryLine creates a line based on data. VictoryLine is a composable component, so it does not include an axis.
     * Check out VictoryChart for easy to use line charts and more.
     */
    export class VictoryLine extends React.Component<VictoryLineProps, any> {}

    export interface VictoryLegendProps extends VictoryCommonProps, VictoryDatableProps, VictorySingleLabableProps {
        /**
         * The borderComponent prop takes a component instance which will be responsible
         * for rendering a border around the legend. The new element created from the passed
         * borderComponent will be provided with the following properties calculated by
         * VictoryLegend: x, y, width, height, and style. Any of these props may be
         * overridden by passing in props to the supplied component, or modified or ignored
         * within the custom component itself. If a borderComponent
         * is not provided, VictoryLegend will use its default Border component.
         * Please note that the default width and height calculated
         * for the border component is based on approximated
         * text measurements, and may need to be adjusted.
         * @default <Border/>
         */
        borderComponent?: React.ReactElement | undefined;
        /**
         * The borderPadding specifies the amount of padding that should
         * be added between the legend items and the border. This prop may be given as
         * a number, or asanobject with values specified for top, bottom, left, and right.
         * Please note that the default width and height calculated for the border
         * component is based on approximated text measurements, so padding may need to be adjusted.
         */
        borderPadding?: PaddingProps | undefined;
        /**
         * The centerTitle boolean prop specifies whether a legend title should be centered.
         */
        centerTitle?: boolean | undefined;
        /**
         * The colorScale prop defines a color scale to be applied to each data
         * symbol in VictoryLegend. This prop should be given as an array of CSS
         * colors, or as a string corresponding to one of the built in color
         * scales: "grayscale", "qualitative", "heatmap", "warm", "cool", "red",
         * "green", "blue". VictoryLegend will assign a color to each symbol by
         * index, unless they are explicitly specified in the data object.
         * Colors will repeat when there are more symbols than colors in the
         * provided colorScale.
         */
        colorScale?: ColorScalePropType | undefined;
        /**
         * Specify data via the data prop. VictoryLegend expects data as an
         * array of objects with name (required), symbol, and labels properties.
         * The data prop must be given as an array.
         */
        data?: Array<{
            name?: string | undefined;
            symbol?: {
                fill?: string | undefined;
                type?: string | undefined;
            } | undefined;
        }> | undefined;
        /**
         * The dataComponent prop takes a component instance which will be
         * responsible for rendering a data element used to associate a symbol
         * or color with each data series. The new element created from the
         * passed dataComponent will be provided with the following properties
         * calculated by VictoryLegend: x, y, size, style, and symbol. Any of
         * these props may be overridden by passing in props to the supplied
         * component, or modified or ignored within the custom component itself.
         * If a dataComponent is not provided, VictoryLegend will use its
         * default Point component.
         */
        dataComponent?: React.ReactElement | undefined;
        /**
         * VictoryLegend uses the standard eventKey prop to specify how event targets
         * are addressed. This prop is not commonly used.
         */
        eventKey?: StringOrNumberOrCallback | string[] | undefined;
        /**
         * VictoryLegend uses the standard events prop.
         */
        events?: EventPropTypeInterface<'data' | 'labels' | 'parent', StringOrNumberOrCallback>[] | undefined;
        /**
         * VictoryLegend uses the standard externalEventMutations prop.
         */
        externalEventMutations?: any[] | undefined;
        /**
         * The gutter prop defines the number of pixels between legend rows or
         * columns, depending on orientation. When orientation is horizontal,
         * gutters are between columns. When orientation is vertical, gutters
         * are the space between rows.
         */
        gutter?: number | { left: number; right: number } | undefined;
        /**
         * The itemsPerRow prop determines how many items to render in each row
         * of a horizontal legend, or in each column of a vertical legend. This
         * prop should be given as an integer. When this prop is not given,
         * legend items will be rendered in a single row or column.
         */
        itemsPerRow?: number | undefined;
        /**
         * The labelComponent prop takes a component instance which will be used
         * to render each legend label. The new element created from the passed
         * labelComponent will be supplied with the following properties: x, y,
         * style, and text. Any of these props may be overridden by passing in
         * props to the supplied component, or modified or ignored within the
         * custom component itself. If labelComponent is omitted, a new
         * VictoryLabel will be created with the props described above.
         */
        labelComponent?: React.ReactElement | undefined;
        /**
         * The orientation prop takes a string that defines whether legend data
         * are displayed in a row or column. When orientation is "horizontal",
         * legend items will be displayed in a single row. When orientation is
         * "vertical", legend items will be displayed in a single column. Line
         * and text-wrapping is not currently supported, so "vertical"
         * orientation is both the default setting and recommended for
         * displaying many series of data.
         * @default 'vertical'
         */
        orientation?: 'horizontal' | 'vertical' | undefined;
        /**
         * The rowGutter prop defines the number of pixels between legend rows.
         * This prop may be given as a number, or as an object with values
         * specified for “top” and “bottom” gutters. To set spacing between columns,
         * use the gutter prop.
         */
        rowGutter?: number | Omit<BlockProps, 'left' | 'right'> | undefined;
        /**
         * The style prop defines the style of the VictoryLegend component.
         * The style prop should be given as an object with styles defined for data, labels and
         * parent. Any valid svg styles are supported, but width, height, and
         * padding should be specified via props as they determine relative
         * layout for components in VictoryLegend.
         */
        style?: VictoryStyleInterface | undefined;
        /**
         * The symbolSpacer prop defines the number of pixels between data
         * components and label components.
         */
        symbolSpacer?: number | undefined;
        /**
         * The title prop specifies a title to render with the legend.
         * This prop should be given as a string, or an array of strings for multi-line titles.
         */
        title?: string | string[] | undefined;
        /**
         * The titleComponent prop takes a component instance which will be used to render
         * a title for the component. The new element created from the passed
         * labelComponent will be supplied with the following properties: x, y, index, data,
         * datum, verticalAnchor, textAnchor, style, text, and events. Any of these props
         * may be overridden by passing in props to the supplied component, or modified
         * or ignored within the custom component itself. If labelComponent is omitted,
         * a new VictoryLabel will be created with the props described above.
         */
        titleComponent?: React.ReactElement | undefined;
        /**
         * The titleOrientation prop specifies where the a title should be rendered
         * in relation to the rest of the legend. Possible values
         * for this prop are “top”, “bottom”, “left”, and “right”.
         * @default (provided by default theme): titleOrientation="top"
         */
        titleOrientation?: OrientationTypes | undefined;
        /**
         * The x and y props define the base position of the legend element.
         */
        x?: number | undefined;
        y?: number | undefined;
    }

    /**
     * VictoryLegend renders a chart legend component.
     */
    export class VictoryLegend extends React.Component<VictoryLegendProps, any> {}

    type ScatterSymbolType = 'circle' | 'diamond' | 'plus' | 'square' | 'star' | 'triangleDown' | 'triangleUp';

    export interface VictoryScatterProps extends VictoryCommonProps, VictoryDatableProps, VictoryMultiLabeableProps {
        /**
         * The bubbleProperty prop indicates which property of the data object should be used
         * to scale data points in a bubble chart
         */
        bubbleProperty?: string | undefined;
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
         */
        events?: EventPropTypeInterface<'data' | 'labels' | 'parent', StringOrNumberOrCallback>[] | undefined;
        /**
         * Similar to data accessor props `x` and `y`, this prop may be used to functionally
         * assign eventKeys to data
         */
        eventKey?: StringOrNumberOrCallback | undefined;
        /**
         * The maxBubbleSize prop sets an upper limit for scaling data points in a bubble chart
         */
        maxBubbleSize?: number | undefined;
        /**
         * The samples prop specifies how many individual points to plot when plotting
         * y as a function of x. Samples is ignored if x props are provided instead.
         */
        samples?: number | undefined;
        /**
         * The size prop determines how to scale each data point
         */
        size?: number | { (data: any): number } | undefined;
        /**
         * The style prop specifies styles for your VictoryScatter. Any valid inline style properties
         * will be applied. Height, width, and padding should be specified via the height,
         * width, and padding props, as they are used to calculate the alignment of
         * components within chart. In addition to normal style properties, angle and verticalAnchor
         * may also be specified via the labels object, and they will be passed as props to
         * VictoryLabel, or any custom labelComponent.
         * @example {data: {fill: "red"}, labels: {fontSize: 12}}
         */
        style?: VictoryStyleInterface | undefined;
        /**
         * The symbol prop determines which symbol should be drawn to represent data points.
         */
        symbol?: ScatterSymbolType | { (data: any): ScatterSymbolType } | undefined;
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
        categories?: CategoryPropType | undefined;
        /**
         * The colorScale prop is an optional prop that defines the color scale the chart's bars
         * will be created on. This prop should be given as an array of CSS colors, or as a string
         * corresponding to one of the built in color scales. VictoryBar will automatically assign
         * values from this color scale to the bars unless colors are explicitly provided in the
         * `dataAttributes` prop.
         */
        colorScale?: ColorScalePropType | undefined;
        /**
         * The domain prop describes the range of values your chart will include. This prop can be
         * given as a array of the minimum and maximum expected values for your chart,
         * or as an object that specifies separate arrays for x and y.
         * If this prop is not provided, a domain will be calculated from data, or other
         * available information.
         * @example: [-1, 1], {x: [0, 100], y: [0, 1]}
         */
        domain?: DomainPropType | undefined;
        /**
         * The domainPadding prop specifies a number of pixels of padding to add to the
         * beginning and end of a domain. This prop is useful for explicitly spacing ticks farther
         * from the origin to prevent crowding. This prop should be given as an object with
         * numbers specified for x and y.
         */
        domainPadding?: DomainPaddingPropType | undefined;
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
         */
        events?: EventPropTypeInterface<'data' | 'labels' | 'parent', StringOrNumberOrCallback>[] | undefined;
        /**
         * Similar to data accessor props `x` and `y`, this prop may be used to functionally
         * assign eventKeys to data
         */
        eventKey?: StringOrNumberOrCallback | undefined;
        /**
         * The horizontal prop determines whether the bars will be laid vertically or
         * horizontally. The bars will be vertical if this prop is false or unspecified,
         * or horizontal if the prop is set to true.
         */
        horizontal?: boolean | undefined;
        /**
         * The style prop specifies styles for your grouped chart. These styles will be
         * applied to all grouped children
         */
        style?: VictoryStyleInterface | undefined;
        /**
         * The xOffset prop is used for grouping stacks of bars. This prop will be set
         * by the VictoryGroup component wrapper, or can be set manually.
         */
        xOffset?: number | undefined;
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
        colorScale?: ColorScalePropType | undefined;
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
        data?: any[] | undefined;
        /**
         * The dataComponent prop takes an entire, HTML-complete data component which will be used to
         * create slices for each datum in the pie chart. The new element created from the passed
         * dataComponent will have the property datum set by the pie chart for the point it renders;
         * properties style and pathFunction calculated by VictoryPie; an index property set
         * corresponding to the location of the datum in the data provided to the pie; events bound to
         * the VictoryPie; and the d3 compatible slice object.
         * If a dataComponent is not provided, VictoryPie's Slice component will be used.
         */
        dataComponent?: React.ReactElement | undefined;
        /**
         * The labelRadius prop defines the radius of the arc that will be used for positioning each slice label.
         * If this prop is not set, the label radius will default to the radius of the pie + label padding.
         */
        labelRadius?: number | undefined;
        /**
         * The overall end angle of the pie in degrees. This prop is used in conjunction with
         * startAngle to create a pie that spans only a segment of a circle.
         */
        endAngle?: number | undefined;
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
         */
        events?: EventPropTypeInterface<'data' | 'labels' | 'parent', StringOrNumberOrCallback | string[] | number[]>[] | undefined;
        /**
         * Similar to data accessor props `x` and `y`, this prop may be used to functionally
         * assign eventKeys to data
         */
        eventKey?: StringOrNumberOrCallback | undefined;
        /**
         * Specifies the radius of the chart. If this property is not provided it is computed
         * from width, height, and padding props
         *
         */
        radius?: number | undefined;
        /**
         * The `innerRadius` prop determines the number of pixels between the center of the chart
         * and the inner edge of a donut chart. When this prop is set to zero a regular pie chart is rendered.
         * When this prop is given as a function, `innerRadius` will be evaluated for each slice
         * of the pie with the props corresponding to that slice
         */
        innerRadius?: number | ((props: VictorySliceProps) => number) | undefined;
        /**
         * Set the cornerRadius for every dataComponent (Slice by default) within VictoryPie
         */
        cornerRadius?: number | undefined;
        /**
         * The padAngle prop determines the amount of separation between adjacent data slices
         * in number of degrees
         */
        padAngle?: number | undefined;
        /**
         * The overall start angle of the pie in degrees. This prop is used in conjunction with
         * endAngle to create a pie that spans only a segment of a circle.
         */
        startAngle?: number | undefined;
        /**
         * The style prop specifies styles for your pie. VictoryPie relies on Radium,
         * so valid Radium style objects should work for this prop. Height, width, and
         * padding should be specified via the height, width, and padding props.
         * @example {data: {stroke: "black"}, label: {fontSize: 10}}
         */
        style?: VictoryStyleInterface | undefined;
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
        x?: DataGetterPropType | undefined;
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
        y?: DataGetterPropType | undefined;
    }

    /**
     * victory-pie draws an SVG pie or donut chart with React.
     * Styles and data can be customized by passing in your own values as properties to the component.
     * Data changes are animated with VictoryAnimation.
     */
    export class VictoryPie extends React.Component<VictoryPieProps, any> {}

    export type ContainerType = 'brush' | 'cursor' | 'selection' | 'voronoi' | 'zoom';

    /**
     * createContainer makes a container component with multiple behaviors.
     * It allows you to effectively combine any two of the following containers:
     * VictoryBrushContainer, VictoryCursorContainer, VictorySelectionContainer,
     * VictoryVoronoiContainer, or VictoryZoomContainer.
     * @param c1 : "brush" | "cursor" | "selection" | "voronoi" | "zoom"
     * @param c2 : "brush" | "cursor" | "selection" | "voronoi" | "zoom"
     */
    export function createContainer<V, W>(c1: ContainerType, c2: ContainerType): React.ComponentType<V & W>;

    export class VictoryPortal extends React.Component<VictoryPortalProps, any> {}

    export interface VictoryPortalProps {
        /**
         * The children of this component define the content of the label.
         * This makes using the component similar to normal HTML spans or labels. strings, numbers, and functions of data / value are supported.
         */
        children?: React.ReactElement | undefined;
        /**
         * The groupComponent prop takes a component instance which will be used to create a group element for VictoryPortal to render its child component into. This prop defaults to a <g> tag.
         */
        groupComponent?: React.ReactElement | undefined;
    }

    export interface VictorySliceProps extends VictoryCommonProps {
        /**
         * the corner radius to apply to this slice.
         * When this prop is given as a function
         * it will be called with the rest of the props supplied to Slice.
         */
        cornerRadius?: SliceNumberOrCallback<VictorySliceProps, 'cornerRadius'> | undefined;
        /**
         * the data point corresponding to this slice
         */
        datum?: object | undefined;
        /**
         * the inner radius of the slice.
         * When this prop is given as a function
         * it will be called with datum and active.
         */
        innerRadius?: number | ((props: {
            active?: boolean | undefined,
            datum?: object | undefined,
        }) => number) | undefined;
        /**
         * the angular padding to add to the slice.
         * When this prop is given as a function it will be called with
         * the rest of the props supplied to Slice.
         */
        padAngle?: SliceNumberOrCallback<VictorySliceProps, 'padAngle'> | undefined;
        /**
         * the rendered path element
         * @default pathComponent={<Path/>}
         */
        pathComponent?: React.ReactElement | undefined;
        /**
         * a function that calculates the path of a given slice.
         * When given, this prop will be called with the slice object
         */
        pathFunction?: ((props: VictorySliceProps) => string) | undefined;
        /**
         * the outer radius of the slice.
         * When this prop is given as a function it will be called with
         * the rest of the props supplied to Slice.
         */
        radius?: SliceNumberOrCallback<VictorySliceProps, 'radius'> | undefined;
        /**
         * an object specifying the `startAngle`, `endAngle`, `padAngle`,
         * and `data` of the slice
         */
        slice: {
            startAngle?: number | undefined;
            endAngle?: number | undefined;
            padAngle?: number | undefined;
            data?: any[] | undefined;
        };
        /**
         * the end angle the slice.
         * When this prop is given as a function it will be called
         * with the rest of the props supplied to Slice.
         */
        sliceEndAngle?: SliceNumberOrCallback<VictorySliceProps, 'sliceEndAngle'> | undefined;
        /**
         * the start angle the slice.
         * When this prop is given as a function it will be called
         * with the rest of the props supplied to Slice
         */
        sliceStartAngle?: SliceNumberOrCallback<VictorySliceProps, 'sliceStartAngle'> | undefined;
    }
}
