// Type definitions for Raphael 2.3
// Project: http://raphaeljs.com
// Definitions by: CheCoxshall <https://github.com/CheCoxshall>
//                 blutorange <https://github.com/blutorange>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// Minimum TypeScript Version: 3.2

/**
 * Dummy type alias for a VML element (vector markup language). Might be replaced with the actual API at some point.
 *
 * Vector Markup Language (VML) was an XML-based file format for two-dimensional vector graphics. It was specified in
 * Part 4 of the Office Open XML standards ISO/IEC 29500 and ECMA-376. According to the specification, VML is a
 * deprecated format included in Office Open XML for legacy reasons only.
 */
export type VMLElement = Element;

/**
 * Dummy type alias for a VML circle element. Might be replaced with the actual API at some point.
 */
export type VMLCircleElement = VMLElement;

/**
 * Dummy type alias for a VML ellipse element. Might be replaced with the actual API at some point.
 */
export type VMLEllipseElement = VMLElement;

/**
 * Dummy type alias for a VML image element. Might be replaced with the actual API at some point.
 */
export type VMLImageElement = VMLElement;

/**
 * Dummy type alias for a VML path element. Might be replaced with the actual API at some point.
 */
export type VMLPathElement = VMLElement;

/**
 * Dummy type alias for a VML rect element. Might be replaced with the actual API at some point.
 */
export type VMLRectElement = VMLElement;

/**
 * Dummy type alias for a VML text element. Might be replaced with the actual API at some point.
 */
export type VMLTextElement = VMLElement;

/**
 * The names of the base shapes that can be created on the {@link RaphaelPaper|canvas}. Used, for example, by the
 * {@link RaphaelStatic|Raphael()} constructor.
 */
export type RaphaelShapeType = "circle" | "ellipse" | "image" | "rect" | "text" | "path" | "set";

/**
 * Represents the technology used by Raphaël, depending on the browser support.
 * - `SVG`: Scalable vector graphics are used.
 * - `VML`: Vector markup language is used.
 * - `(empty string)`: Neither technology can be used. Raphaël will not work.
 *
 * Vector Markup Language (VML) was an XML-based file format for two-dimensional vector graphics. It was specified in
 * Part 4 of the Office Open XML standards ISO/IEC 29500 and ECMA-376. According to the specification, VML is a
 * deprecated format included in Office Open XML for legacy reasons only.
 */
export type RaphaelTechnology = "" | "SVG" | "VML";

/**
 * Represents the base line of a piece of text.
 */
export type RaphaelFontOrigin = "baseline" | "middle";

/**
 * Represents the stroke dash types supported by Raphaël.
 */
export type RaphaelDashArrayType = "" | "-" | "." | "-." | "-.." | ". " | "- " | "--" | "- ." | "--." | "--..";

/**
 * Represents the line cap types supported by Raphaël. See {@link RaphaelBaseElement.attr}.
 */
export type RaphaelLineCapType = "butt" | "square" | "round";

/**
 * Represents the line join types supported by Raphaël. See {@link RaphaelBaseElement.attr}.
 */
export type RaphaelLineJoinType = "bevel" | "round" | "miter";

/**
 * Represents the text anchor types supported by Raphaël. See {@link RaphaelBaseElement.attr}.
 */
export type RaphaelTextAnchorType = "start" | "middle" | "end";

/**
 * Names of the easing {@link RaphaelBuiltinEasingFormula}s that are available by default. See also the
 * {@link RaphaelStatic.easing_formulas} object.
 */
export type RaphaelBuiltinEasingFormula =
    "linear"
    | "<"
    | ">"
    | "<>"
    | "backIn"
    | "backOut"
    | "elastic"
    | "bounce"
    | "ease-in"
    | "easeIn"
    | "ease-out"
    | "easeOut"
    | "ease-in-out"
    | "easeInOut"
    | "back-in"
    | "back-out";

// see https://github.com/microsoft/TypeScript/issues/29729
/**
 * Names of the easing {@link RaphaelBuiltinEasingFormula}s that may be added by the user. See also the
 * {@link RaphaelStatic.easing_formulas} object.
 */
export type RaphaelCustomEasingFormula = string & {};

/**
 * Represents a single command of an SVG path string, such as a `moveto` or `lineto` command.
 *
 * Please note that Raphaël splits path strings such as `H 10 20` into two segments: `["H", 10]` and `["H", 20]`.
 */
export type RaphaelPathSegment =
    // move to
    ["M", number, number]
    | ["m", number, number]
    // line to
    | ["L", number, number]
    | ["l", number, number]
    // horizontal line to
    | ["H", number]
    | ["h", number]
    // vertical line to
    | ["V", number]
    | ["v", number]
    // quadratic bezier curve to
    | ["Q", number, number, number, number]
    | ["q", number, number, number, number]
    // smooth quadratic bezier curve to
    | ["T", number, number]
    | ["t", number, number]
    // curve to
    | ["C", number, number, number, number, number, number]
    | ["c", number, number, number, number, number, number]
    // smooth curve to
    | ["S", number, number, number, number]
    | ["s", number, number, number, number]
    // arc
    | ["A", number, number, number, number, number, number, number]
    | ["a", number, number, number, number, number, number, number]
    // Catmull-Rom curveto
    | ["R", number, number]
    | ["r", number, number]
    // close
    | ["Z"]
    | ["z"];

/**
 * Represents a single transform operation:
 *
 * - `t`: A translation operation. Parameters are [deltaX, deltaY]
 * - `s`: A scaling operation. Parameters are [scaleX, scaleY, originX, originY]
 * - `r`: A rotation operation: Parameters are [angleInDegrees, originX, originY]
 * - `m`: A general matrix transform. Parameters are [a, b, c, d, e, f], see {@link RaphaelMatrix}.
 */
export type RaphaelTransformSegment =
    // translate
    ["t", number, number]
    // scale (scale-x, scale-y, origin-x, origin-y)
    | ["s", number, number, number, number]
    | ["s", number, number]
    // rotate
    | ["r", number, number, number]
    | ["r", number]
    // general matrix transform
    | ["m", number, number, number, number, number, number]
    ;

/**
 * Array that can be passed to the {@link RaphaelStatic|Raphael()} constructor. The first three arguments in the
 * array are, in order:
 *
 * - `containerID`: ID of the element which is going to be a parent for drawing surface.
 * - `width`: Width for the canvas.
 * - `height`: Height for the canvas.
 *
 * The remaining items are {@link RaphaelShapeDescriptor|descriptor objects} for the shapes that are created
 * initially.
 */
export type RaphaelConstructionOptionsArray4 = [
    string,
    number,
    number,
    ...RaphaelShapeDescriptor[]
];

/**
 * Array that can be passed to the {@link RaphaelStatic|Raphael()} constructor. The first four arguments in the
 * array are, in order:
 *
 * - `x`: x coordinate of the viewport where the canvas is created.
 * - `y`: y coordinate of the viewport where the canvas is created.
 * - `width`: Width for the canvas.
 * - `height`: Height for the canvas.
 *
 * The remaining items are {@link RaphaelShapeDescriptor|descriptor objects} for the shapes that are created
 * initially.
 */
export type RaphaelConstructionOptionsArray5 = [
    number,
    number,
    number,
    number,
    ...RaphaelShapeDescriptor[]
];

/**
 * An easing formula for smoothly interpolating between two values. The formula is passed the normalized animation
 * time and should return the relative animation position at that time.
 */
export type RaphaelEasingFormula =
    /**
     * @param normalizedAnimationTime A percentage between `0` and `1`, with `0` representing the beginning and `1`
     * representing the end of the animation time.
     * @return The relative animation position, a percentage between `0` and `1` for where the animation should be at
     * the given animation time.
     */
    (normalizedAnimationTime: number) => number;

/**
 * Distinguishes between a {@link RaphaelSet} and other {@link RaphaelElement}s. When an event handler is added to
 * a set, it is called with the this context set to the elements contained in the set. Otherwise, when the handler
 * is added to an element, it is called with the this context set to that element.
 * @param TTechnology Type of the technology used by this paper, either `SVG` or `VML`.
 * @param TBase A raphael element or set to unwrap.
 * @return If the element to unwrap is a {@link RaphaelSet}, a {@link RaphaelElement}. Otherwise, the given element.
 */
export type RaphaelUnwrapElement<
    TTechnology extends RaphaelTechnology,
    TBase extends RaphaelBaseElement<TTechnology>
    > = TBase extends RaphaelSet<TTechnology> ? RaphaelElement<TTechnology> : TBase;

/**
 * Callback that is invoked once an animation is complete.
 * @param ThisContext Type of the argument passed as the this context.
 */
export type RaphaelOnAnimationCompleteHandler<ThisContext> = (this: ThisContext) => void;

/**
 * A basic event handler for some common events on {@link RaphaelElement}s, such as `click` and `dblclick`.
 * @param ThisContext Type of the this context of the handler.
 * @param TEvent Type of the event passed to the handler.
 */
export type RaphaelBasicEventHandler<ThisContext, TEvent extends Event> =
    /**
     * @param event The original DOM event that triggered the event this handler was registered for.
     * @return A value that is returned as the return value of the `document.addEventListener` callback.
     */
    (this: ThisContext, event: TEvent) => any;

/**
 * Represents the handler callback that is called when dragging starts. See {@link RaphaelBaseElement.drag}.
 * @param ThisContext The type of the this context of the handler.
 */
export type RaphaelDragOnStartHandler<ThisContext> =
    /**
     * @param x position of the mouse
     * @param y position of the mouse
     * @param event DOM event object
     * @return A value that is returned as the return value of the `document.addEventListener` callback.
     */
    (this: ThisContext, x: number, y: number, event: DragEvent) => any;

/**
 * Represents the handler callback that is called when the pointer is moved while dragging. See
 * {@link RaphaelBaseElement.drag}.
 * @param ThisContext The type of the this context of the handler.
 */
export type RaphaelDragOnMoveHandler<ThisContext> =
    /**
     * @param deltaX How much the pointer has moved in the horizontal direction compared to when this handler was most
     * recently invoked.
     * @param deltaY How much the pointer has moved in the vertical direction compared to when this handler was most
     * recently invoked.
     * @param mouseX The current horizontal position of the mouse.
     * @param mouseY The current vertical position of the mouse.
     * @return A value that is returned as the return value of the `document.addEventListener` callback.
     */
    (this: ThisContext, deltaX: number, deltaY: number, mouseX: number, mouseY: number, event: DragEvent) => any;

/**
 * Represents an event handler for when the pointer moves over another element while dragging. See also
 * {@link RaphaelBaseElement.onDragOver}.
 * @param TTechnology Type of the technology used by this paper, either `SVG` or `VML`.
 * @param ThisContext Type of the this context of the callback.
 */
export type RaphaelDragOnOverHandler<
    TTechnology extends RaphaelTechnology = "SVG" | "VML",
    ThisContext = RaphaelElement<TTechnology>
    > =
    /**
     * @param targetElement The element you are dragging over.
     * @return A value that is returned as the return value of the `document.addEventListener` callback.
     */
    (this: ThisContext, targetElement: RaphaelElement<TTechnology>) => any;

/**
 * Represents the handler callback that is called when dragging ends. See {@link RaphaelBaseElement.drag}.
 * @param ThisContext The type of the this context of the handler.
 */
export type RaphaelDragOnEndHandler<ThisContext> =
    /**
     * @param event DOM event object
     * @return A value that is returned as the return value of the `document.addEventListener` callback.
     */
    (this: ThisContext, event: DragEvent) => any;

/**
 * You can add your own method to elements, see {@link RaphaelStatic.el} for more details.
 *
 * Plugin methods may take any arbitrary number of parameters and may return any value. When possible, consider
 * return `this` to allow for chaining.
 *
 * @param TTechnology Type of the technology used by this paper, either `SVG` or `VML`.
 * @param TArgs Type of the arguments required by this element method plugin. These arguments need to be passed
 * when the method is called on an {@link RaphaelElement}.
 * @param TRetVal Type of the value that is returned by this element method plugin. This is also the value that
 * is returned when the method is called on a {@link RaphaelElement}.
 */
export type RaphaelElementPluginMethod<
    TTechnology extends RaphaelTechnology = "SVG" | "VML",
    TArgs extends any[] = any,
    TRetVal = any
    > =
    /**
     * @param args The arguments, as required by this element plugin. They need to be passed when the plugin method
     * is called on a {@link RaphaelElement}.
     * @return The value that should be returned by this plugin method. This is also the value that is returned when
     * this plugin method is called on a {@link RaphaelElement}.
     */
    (this: RaphaelElement<TTechnology>, ...args: TArgs) => TRetVal;

/**
 * You can add your own method to set, see {@link RaphaelStatic.st} for more details.
 *
 * Plugin methods may take any arbitrary number of parameters and may return any value. When possible, consider
 * return `this` to allow for chaining.
 *
 * @param TTechnology Type of the technology used by this paper, either `SVG` or `VML`.
 * @param TArgs Type of the arguments required by this set method plugin. These arguments need to be passed
 * when the method is called on an {@link RaphaelSet}.
 * @param TRetVal Type of the value that is returned by this set method plugin. This is also the value that
 * is returned when the method is called on a {@link RaphaelSet}.
 */
export type RaphaelSetPluginMethod<
    TTechnology extends RaphaelTechnology = "SVG" | "VML",
    TArgs extends any[] = any,
    TRetVal = any
    > =
    /**
     * @param args The arguments, as required by this set plugin. They need to be passed when the plugin method
     * is called on a {@link RaphaelSet}.
     * @return The value that should be returned by this plugin method. This is also the value that is returned when
     * this plugin method is called on a {@link RaphaelSet}.
     */
    (this: RaphaelSet<TTechnology>, ...args: TArgs) => TRetVal;

/**
 * You can add your own method to the canvas, see {@link RaphaelStatic.fn} for more details.
 *
 * Plugin methods may take any arbitrary number of parameters and may return any value. When possible, consider
 * return `this` to allow for chaining.
 *
 * @param TTechnology Type of the technology used by this paper, either `SVG` or `VML`.
 * @param TArgs Type of the arguments required by this paper method plugin. These arguments need to be passed
 * when the method is called on an {@link RaphaelPaper}.
 * @param TRetVal Type of the value that is returned by this paper method plugin. This is also the value that
 * is returned when the method is called on a {@link RaphaelPaper}.
 */
export type RaphaelPaperPluginMethod<
    TTechnology extends RaphaelTechnology = "SVG" | "VML",
    TArgs extends any[] = any,
    TRetVal = any
    > =
    /**
     * @param args The arguments, as required by this paper plugin. They need to be passed when the plugin method
     * is called on a {@link RaphaelPaper}.
     * @return The value that should be returned by this plugin method. This is also the value that is returned when
     * this plugin method is called on a {@link RaphaelPaper}.
     */
    (this: RaphaelPaper<TTechnology>, ...args: TArgs) => TRetVal;

/**
 * If you have a set of attributes that you would like to represent as a function of some number you can do it
 * easily with custom attributes, see {@link RaphaelPaper.customAttributes} for more details.
 *
 * @param TTechnology Type of the technology used by this paper, either `SVG` or `VML`.
 */
export type RaphaelCustomAttribute<
    TTechnology extends RaphaelTechnology = "SVG" | "VML",
    TArgs extends number[] = any
    > =
    /**
     * @param values Numerical values for this custom attribute.
     * @return The SVG attributes for the given values.
     */
    (this: RaphaelElement<TTechnology>, ...values: TArgs) => Partial<RaphaelAttributes>;

/**
 * Represents a result or return value of an operation that can fail, such as due to illegal arguments. For example,
 * {@link RaphaelStatic.getRGB} returns an error if the string could not be parsed.
 *
 * This adds an `error` property. When it is set to to `true`, the operation was not successful - such as when an
 * input string could not be parsed or the arguments are out of range.
 *
 * @param T Type of the result when the operation did not fail.
 */
export type RaphaelPotentialFailure<T extends {}> = T & {
    /**
     * If present and set to `1`, indicates that the operation that produced this result failed. Other fields
     * properties in this object may not be valid.
     */
    error?: number;
};

/**
 * You can add your own method to the canvas. Please note that you can create your own namespaces inside the
 * {@link RaphaelStatic.fn} object - methods will be run in the context of {@link RaphaelPaper|canvas} anyway:
 *
 * ```javascript
 * Raphael.fn.arrow = function (x1, y1, x2, y2, size) {
 *   return this.path( ... );
 * };
 * // or create namespace
 * Raphael.fn.mystuff = {
 *   arrow: function () {…},
 *   star: function () {…},
 *   // etc...
 * };
 *
 * var paper = Raphael(10, 10, 630, 480);
 * // then use it
 * paper.arrow(10, 10, 30, 30, 5).attr({fill: "#f00"});
 * paper.mystuff.arrow();
 * paper.mystuff.star();
 * ```
 *
 * @param TTechnology Type of the technology used by this paper, either `SVG` or `VML`.
 * @param T Type of the paper or sub namespace in the paper.
 */
export type RaphaelPaperPluginRegistry<
    TTechnology extends RaphaelTechnology = "SVG" | "VML",
    T extends {} = RaphaelPaper<TTechnology>> = {
        /**
         * Either the paper plugin method or a new namespace with methods.
         */
        [P in keyof T]: T[P] extends (...args: any) => any
        ? RaphaelPaperPluginMethod<TTechnology, Parameters<T[P]>, ReturnType<T[P]>>
        : RaphaelPaperPluginRegistry<TTechnology, T[P]>;
    };

/**
 * You can add your own method to elements. This is useful when you want to hack default functionality or want
 * to wrap some common transformation or attributes in one method. In contrast to canvas methods, you can
 * redefine element method at any time. Expending element methods would not affect set.
 *
 * ```javascript
 * Raphael.el.red = function () {
 *   this.attr({fill: "#f00"});
 * };
 * // then use it
 * paper.circle(100, 100, 20).red();
 * ```
 *
 * @param TTechnology Type of the technology used by this paper, either `SVG` or `VML`.
 */
export type RaphaelElementPluginRegistry<
    TTechnology extends RaphaelTechnology = "SVG" | "VML"
    > = {
        [P in keyof RaphaelElement<TTechnology>]: RaphaelElement<TTechnology>[P] extends (...args: any) => any
        ? RaphaelElementPluginMethod<
            TTechnology,
            Parameters<RaphaelElement<TTechnology>[P]>,
            ReturnType<RaphaelElement<TTechnology>[P]>
        >
        : never;
    };

/**
 * You can add your own method to elements and sets. It is wise to add a set method for each element method you
 * added, so you will be able to call the same method on sets too. See also {@link el}.
 *
 * ```javascript
 * Raphael.el.red = function() {
 *   this.attr({fill: "#f00"});
 * };
 *
 * Raphael.st.red = function() {
 *   this.forEach(function () {
 *     this.red();
 *   });
 * };
 *
 * // then use it
 * paper.set(paper.circle(100, 100, 20), paper.circle(110, 100, 20)).red();
 * ```
 *
 * @param TTechnology Type of the technology used by this paper, either `SVG` or `VML`.
 */
export type RaphaelSetPluginRegistry<
    TTechnology extends RaphaelTechnology = "SVG" | "VML"
    > = {
        [P in keyof RaphaelSet<TTechnology>]: RaphaelSet<TTechnology>[P] extends (...args: any) => any
        ? RaphaelSetPluginMethod<
            TTechnology,
            Parameters<RaphaelSet<TTechnology>[P]>,
            ReturnType<RaphaelSet<TTechnology>[P]>>
        : never;
    };

/**
 * Represents the SVG and VML native elements that implement a particular abstract element, such as circle and paths.
 * @typeparam TSvg Type of the native SVG element.
 * @typeparam TVml Type of the native VML element.
 */
export interface RaphaelElementByTechnologyMap<
    TSvg extends SVGElement = SVGElement,
    TVml extends VMLElement = VMLElement
    > {
    SVG: TSvg;
    VML: TVml;
    "": never;
}

/**
 * A map between the abstract element shapes and their implementation for each supported {@link RaphaelTechnology}.
 */
export interface RaphaelElementImplementationMap {
    /** The elements that implement the {@link RaphaelPaper.circle} shape. */
    circle: RaphaelElementByTechnologyMap<SVGCircleElement, VMLCircleElement>;

    /** The elements that implement the {@link RaphaelPaper.ellipse} shape. */
    ellipse: RaphaelElementByTechnologyMap<SVGEllipseElement, VMLEllipseElement>;

    /** The elements that implement the {@link RaphaelPaper.image} shape. */
    image: RaphaelElementByTechnologyMap<SVGImageElement, VMLImageElement>;

    /** The elements that implement the {@link RaphaelPaper.path} shape. */
    path: RaphaelElementByTechnologyMap<SVGPathElement, VMLPathElement>;

    /** The elements that implement the {@link RaphaelPaper.rect} shape. */
    rect: RaphaelElementByTechnologyMap<SVGRectElement, VMLRectElement>;

    /** The elements that implement the {@link RaphaelPaper.text} shape. */
    text: RaphaelElementByTechnologyMap<SVGTextElement, VMLTextElement>;
}

/**
 * Represents a two dimensional point, with a cartesian x and y coordinate.
 */
export interface RaphaelCartesianPoint {
    /** The x coordinate of the point. */
    x: number;
    /** The y coordinate of the point. */
    y: number;
}

/**
 * Represents a two dimensional point on a curve, with a cartesian x and y coordinate, and the derivate of that
 * point on the curve.
 */
export interface RaphaelCartesianCurvePoint extends RaphaelCartesianPoint {
    /**
     * Angle of the curve derivative of the curve at the point.
     */
    alpha: number;
}

/**
 * Represents a point on a cubic bezier curve, the result of {@link RaphaelStatic.findDotsAtSegment}.
 */
export interface RaphaelCubicBezierCurvePointInfo extends RaphaelCartesianCurvePoint {
    /**
     * The end point of the cubic bezier curve.
     */
    end: RaphaelCartesianPoint;

    /**
     * The left anchor point of the cubic bezier curve.
     */
    m: RaphaelCartesianPoint;

    /**
     * The right anchor point of the cubic bezier curve.
     */
    n: RaphaelCartesianPoint;

    /**
     * The start point of the cubic bezier curve.
     */
    start: RaphaelCartesianPoint;
}

/**
 * Represents a parsed RGB color, such as the result of {@link RaphaelStatic.getRGB}.
 */
export interface RaphaelRgbComponentInfo {
    /** Hex string of the color, in the format `#XXXXXX`. */
    hex: string;

    /** The RGB red channel */
    r: number;

    /** The RGB green channel */
    g: number;

    /** The RGB blue channel */
    b: number;
}

/**
 * Represents a parsed HSB color, such as the result of {@link RaphaelStatic.rgb2hsb}.
 */
export interface RaphaelHsbComponentInfo {
    /**
     * The HSB or HSL hue channel.
     */
    h: number;

    /**
     * The HSB or HSL saturation channel.
     */
    s: number;

    /**
     * The HSB brightness channel.
     */
    b: number;
}

/**
 * Represents a parsed HSL color, such as the result of {@link RaphaelStatic.rgb2hsl}.
 */
export interface RaphaelHslComponentInfo {
    /**
     * The HSB or HSL hue channel.
     */
    h: number;

    /**
     * The HSB or HSL saturation channel.
     */
    s: number;

    /**
     * The HSL luminosity channel.
     */
    l: number;
}

/**
 * Represents the result of a call to {@link RaphaelStatic.color}, i.e. information about the RGB and HSV/L color
 * channels.
 */
export interface RaphaelFullComponentInfo extends RaphaelRgbComponentInfo, RaphaelHsbComponentInfo, RaphaelHslComponentInfo { }

/**
 * Represents an axis aligned bounding box, see {@link RaphaelBaseElement.getBBox}.
 */
export interface RaphaelAxisAlignedBoundingBox {
    /**
     * Horizontal coordinate of the top left corner.
     */
    x: number;
    /**
     * Vertical coordinate of the top left corner.
     */
    y: number;
    /**
     * Width of the bounding box.
     */
    width: number;
    /**
     * Height of the bounding box.
     */
    height: number;
}

/**
 * Represents the settings for a glow-like effect. See also {@link RaphaelBaseElement.glow}.
 */
export interface RaphaelGlowSettings {
    /** The glow color, default is `black`. */
    color: string;

    /** Whether the glow effect will be filled, default is `false`. */
    fill: boolean;

    /** Horizontal offset, default is `0`. */
    offsetx: number;

    /** Vertical offset, default is `0`. */
    offsety: number;

    /** Opacity of the glow effect, default is `0.5`. */
    opacity: number;

    /** size of the glow, default is `10`. */
    width: number;
}

/**
 * Represents the status of a {@link RaphaelAnimation}, i.e. the progress of the animation.
 */
export interface RaphaelAnimationStatus {
    /** The animation to which the status applies. */
    anim: RaphaelAnimation;
    /** The current status of the animation, i.e. the normalized animation time, a value between `0` and `1`. */
    status: number;
}

/**
 * Represents the SVG attributes that can be set on an SVG element, such as `stroke`, `width`, or `height`. See also
 * {@link RaphaelBaseElement.attr}.
 *
 * ## Gradients
 *
 * ### Linear gradient format
 *
 * ```
 * <angle>-<colour>[-<colour>[:<offset>]]*-<colour>
 * ```
 *
 * For example, valid gradient are:
 * - `90-#fff-#000`: 90° gradient from white to black
 * - `0-#fff-#f00:20-#000`: 0° gradient from white via red (at 20%) to black.
 *
 * ### Radial gradient format
 *
 * ```
 * r[(<fx>, <fy>)]<colour>[-<colour>[:<offset>]]*-<colour>
 * ```
 *
 * For example, valid radial gradient are:
 *
 * - `r#fff-#000`: gradient from white to black
 * - `r(0.25, 0.75)#fff-#000`: gradient from white to black with focus point at 0.25, 0.75.
 *
 * Focus point coordinates are in the range [0,1]. Radial gradients can only be applied to circles and ellipses.
 *
 * ## Colour Parsing
 *
 * The following are all recognized as valid colors:
 *
 * - Colour name, such as "red", "green", "cornflowerblue", etc)
 * - `#RGB`: shortened HTML colour: ("#000", "#fc0", etc)
 * - `#RRGGBB`: full length HTML colour: ("#000000", "#bd2300")
 * - `rgb(RRR, GGG, BBB)`: red, green and blue channels’ values: ("rgb(200, 100, 0)")
 * - `rgb(RRR%, GGG%, BBB%)`: same as above, but in %: ("rgb(100%, 175%, 0%)")
 * - `rgba(RRR, GGG, BBB, AAA)`: red, green and blue channels’ values: ("rgba(200, 100, 0, .5)")
 * - `rgba(RRR%, GGG%, BBB%, AAA%)`: same as above, but in %: ("rgba(100%, 175%, 0%, 50%)")
 * - `hsb(HHH, SSS, BBB)`: hue, saturation and brightness values: ("hsb(0.5, 0.25, 1)")
 * - `hsb(HHH%, SSS%, BBB%)`: same as above, but in %
 * - `hsba(HHH, SSS, BBB, AAA)`: same as above, but with opacity
 * - `hsl(HHH, SSS, LLL)`: almost the same as hsb, see Wikipedia page
 * - `hsl(HHH%, SSS%, LLL%)`: same as above, but in %
 * - `hsla(HHHH, SSS, LLL, AAA)`: same as above, but with opacity
 *
 * Optionally for hsb and hsl you could specify hue as a degree: "hsl(240deg, 1, .5)" or, if you want to go fancy, "hsl(240°, 1, .5)"
 */
export interface RaphaelAttributes {
    /**
     * Arrowhead on the end of the path. The format for the string is `<type>[-<width>[-<length>]]`.
     *
     * Possible value for `type` are:
     * - classic
     * - block
     * - open
     * - oval
     * - diamond
     * - none
     *
     * Possible value for `width` are:
     * - wide
     * - narrow
     * - medium
     *
     * Possible values for `length` are
     * - long
     * - short
     * - medium
     */
    "arrow-end": string;

    /**
     * Comma or space separated values: `x`, `y`, `width` and `height`.
     */
    "clip-rect": string;

    /**
     * CSS type of the cursor.
     */
    cursor: string;

    /**
     * Horizontal coordinate of the origin of the circle.
     */
    cx: number;

    /**
     * Vertical coordinate of the origin of the circle.
     */
    cy: number;

    /**
     * Colour, gradient or image.
     */
    fill: string;

    /**
     * Opacity of the fill color.
     */
    "fill-opacity": number;

    /**
     * The combined font family and font size, e.g. `10px "Arial"`.
     */
    font: string;

    /**
     * Name of the font family to use.
     */
    "font-family": string;

    /**
     * Font size in pixels.
     */
    "font-size": number | string;

    /**
     * Font weight as a number, usually between `100` to `900`. Can also be `"bold"` etc.
     */
    "font-weight": string;

    /**
     * The height of e.g. a rectangle in pixels.
     */
    height: number;

    /**
     * URL, if specified element behaves as hyperlink.
     */
    href: string;

    /**
     * Opacity of the element, usually between `0` and `1`.
     */
    opacity: number;

    /**
     * An SVG path string, e.g. `M 10 10 L 20 10 Z`.
     */
    path: string;

    /**
     * Radius of the circle in pixels.
     */
    r: number;

    /**
     * Horizontal half-axis of the ellipse in pixels.
     */
    rx: number;

    /**
     * Vertical half-axis of the ellipse in pixels.
     */
    ry: number;

    /**
     * Image URL, only works for {@link RaphaelPaper.image} elements.
     */
    src: string;

    /**
     * CSS stroke color.
     */
    stroke: string;

    /**
     * Controls the pattern of dashes and gaps used to form the shape of a path's stroke.
     */
    "stroke-dasharray": RaphaelDashArrayType;

    /**
     * Specifies the shape to be used at the end of open subpaths when they are stroked, and the shape to be drawn
     * for zero length subpaths whether they are open or closed.
     */
    "stroke-linecap": RaphaelLineCapType;

    /**
     * Specifies the shape to be used at the corners of paths or basic shapes when they are stroked.
     */
    "stroke-linejoin": RaphaelLineJoinType;

    /**
     * When two line segments meet at a sharp angle and a value of `miter`, `miter-clip`, or `arcs` has been
     * specified for `stroke-linejoin`, it is possible for the join to extend far beyond the thickness of the line
     * stroking the path. The `stroke-miterlimit` imposes a limit on the extent of the line join.
     */
    "stroke-miterlimit": number;

    /**
     * Opacity of the stroke, usually between `0` and `1`.
     */
    "stroke-opacity": number;

    /**
     * Width of the stroke in pixels.
     */
    "stroke-width": number;

    /**
     * Used with {@link href}.
     */
    target: string;

    /**
     * Contents of the text element.
     */
    text: string;

    /**
     * Used to align (start-, middle- or end-alignment) a string of pre-formatted text or auto-wrapped text where
     * the wrapping area is determined from the `inline-size` property relative to a given point.
     */
    "text-anchor": RaphaelTextAnchorType;

    /**
     * Will create a tooltip with a given text.
     */
    title: string;

    /**
     * The transform property of this element.
     */
    transform: string | RaphaelTransformSegment | RaphaelTransformSegment[];

    /**
     * The width of e.g. a rectangle in pixels.
     */
    width: number;

    /**
     * The horizontal x coordinate in pixels.
     */
    x: number;

    /**
     * The vertical y coordinate in pixels.
     */
    y: number;
}

/**
 * Represents the {@link RaphaelAttributes} returned when reading the value of an attribute via
 * {@link RaphaelBaseElement.attr}. Writing to an attribute allows different types for some attributes that are
 * normalized to canonical type.
 */
export interface RaphaelReadAttributes extends RaphaelAttributes {
    /**
     * The transform property of this element.
     */
    transform: RaphaelTransformSegment[];
}

/**
 * Represents the primitive transformations that, when applied successively, result in a given matrix. See
 * {@link RaphaelMatrix.split}.
 */
export interface RaphaelMatrixTransformInfo {
    /** Translation in the horizontal direction. */
    dx: number;

    /** Translation in the vertical direction. */
    dy: number;

    /** Scaling factor in the horizontal direction. */
    scalex: number;

    /** Scaling factor in the vertical direction. */
    scaley: number;

    /** Shearing coefficient. */
    shear: number;

    /** Rotation in degree. */
    rotate: number;

    /**
     * Whether the matrix can be represented via simple transformations. If this set to `false` the other properties
     * of this instance are devoid of meaning and should not be accessed.
     */
    isSimple: boolean;
}

/**
 * Represents an animation, i.e. a function that interpolates between two or more values.
 */
export interface RaphaelAnimation {
    /**
     * Creates a copy this existing animation object with the given delay.
     * @param delay Number of milliseconds that represent the delay between the start of the animation start and
     * the actual animation.
     * @return A copy of this animation with the given delay.
     */
    delay(delay: number): RaphaelAnimation;

    /**
     * Creates a copy of existing animation object with given repetition.
     * @param repeat Number iterations of animation. For a never-ending animation pass `Infinity`.
     * @return A copy of this animation that repeats the given number of times.
     */
    repeat(repeat: number): RaphaelAnimation;
}

/**
 * Represents the characteristics of a {@link RaphaelFont}.
 */
export interface RaphaelFontFace {
    /**
     * The ascent property of this font, such as `270`.
     *
     * The ascent is the recommended distance above the baseline for singled spaced text.
     */
    ascent: number | string;

    /**
     * The axis aligned bounding box of all glyphs, such as `-11 -274 322 94` (top left corner and width and height).
     */
    bbox: string;

    /**
     * The descent property of this font, such as `-90`.
     *
     * The ascent is the recommended distance below the baseline for singled spaced text
     */
    descent: number | string;

    /**
     * The font family property of this font.
     */
    "font-family": string;

    /**
     * The font stretch property of this font, such as `normal`.
     */
    "font-stretch": string;

    /**
     * The font style property of this font.
     */
    "font-style": string;

    /**
     * The weight of this font, such as `200`.
     */
    "font-weight": number | string;

    /**
     * The units-per-em property of this font.
     *
     * The units-per-em attribute specifies the number of coordinate units on the "em square", an abstract square whose
     * height is the intended distance between lines of type in the same type size.
     */
    "units-per-em": number | string;

    /**
     * The panose-1 classification of this font.
     *
     * Panose-1 is a system for describing characteristics of Latin fonts that is based on calculable quantities:
     * dimensions, angles, shapes, etc. It is based on a set of 10 numbers, which take values between 0 and 15. A font
     * thus becomes a vector in a 10-dimensional space, and one can calculate the distance between two fonts as a
     * Cartesian distance.
     */
    "panose-1": string;

    /**
     * When an underline is drawn below a glyph, the vertical offset of that underline. Usually negative, such as `36`.
     */
    "underline-position": number | string;

    /**
     * The thickness of the underline, when a glyph is underlined, such as `18`.
     */
    "underline-thickness": number | string;

    /**
     * The range of characters this font contains, such as `U+0020-U+00F3`.
     */
    "unicode-range": string;

    /**
     * The x-height property of this font.
     *
     * The x-height, or corpus size, is the distance between the baseline and the mean line of lower-case letters.
     */
    "x-height": number | string;
}

/**
 * Represents a glyph (character) in a {@link RaphaelFont}.
 */
export interface RaphaelFontGlyph {
    /** An SVG path string for drawing this glyph. */
    d: string;

    /** The width of this glyph. */
    w: number;
}

/**
 * Represents a font object as used by Raphaël.
 *
 * This needs to be a Cufon font object, see https://github.com/sorccu/cufon.
 */
export interface RaphaelFont {
    /** The font faces that are available in this font. */
    face: Partial<RaphaelFontFace>;

    /** The glyphs that are available in this font. */
    glyphs: Record<string, Partial<RaphaelFontGlyph>>;

    /** The width of this font. */
    w: number;
}

/**
 * Base interface implemented by all elements: {@link RaphaelElement}, {@link RaphaelPath}, and {@link RaphaelSet}.
 *
 * An element is an object that can be drawn on the screen, such as via SVG or VML.
 * @typeparam TTechnology The target {@link RaphaelTechnology}.
 */
export interface RaphaelBaseElement<
    TTechnology extends RaphaelTechnology = "SVG" | "VML"
    > {
    /**
     * Creates and starts animation for given element.
     * @param targetAttributes Final attributes for the element, see also {@link attr}.
     * @param durationMilliseconds Number of milliseconds for the animation to run.
     * @param easing Easing type. Accept one of {@link RaphaelStatic.easing_formulas} or CSS forms such as
     * `cubic‐bezier(XX, XX, XX, XX)`.
     * @param onAnimationComplete Callback function. Will be called at the end of animation.
     * @return this element for chaining.
     */
    animate(
        targetAttributes: Partial<RaphaelAttributes>,
        durationMilliseconds: number,
        easing?: RaphaelBuiltinEasingFormula | RaphaelCustomEasingFormula,
        onAnimationComplete?: RaphaelOnAnimationCompleteHandler<this>
    ): this;

    /**
     * Creates and starts animation for given element.
     * @param animation The animation to apply to this element. Use {@link RaphaelStatic.animation} to create an
     * animation.
     * @return this element for chaining.
     */
    animate(animation: RaphaelAnimation): this;

    /**
     * Acts similar to {@link animate}, but ensures that the given animation runs in sync with another given
     * element.
     * @param otherElement Element to sync with.
     * @param otherAnimation animation to sync with.
     * @param targetAttributes Final attributes for the element, see also {@link attr}.
     * @param durationMilliseconds Number of milliseconds for the animation to run.
     * @param easing Easing type. Accept one of RaphaelStatic.easing_formulas or CSS forma such as
     * `cubic‐bezier(XX, XX, XX, XX)`.
     * @param onAnimationComplete Callback function. Will be called at the end of animation.
     * @return this element for chaining.
     */
    animateWith(
        otherElement: RaphaelElement<TTechnology>,
        otherAnimation: RaphaelAnimation,
        targetAttributes: Partial<RaphaelAttributes>,
        durationMilliseconds: number,
        easing?: RaphaelBuiltinEasingFormula | RaphaelCustomEasingFormula,
        onAnimationComplete?: RaphaelOnAnimationCompleteHandler<this>
    ): this;

    /**
     * Acts similar to {@link animate}, but ensures that the given animation runs in sync with another given element.
     * @param otherElement Element to sync with.
     * @param otherAnimation animation to sync with.
     * @param animation The animation to apply to this element. Use {@link RaphaelStatic.animation} to create an
     * animation.
     * @return this element for chaining.
     */
    animateWith(
        otherElement: RaphaelElement<TTechnology>,
        otherAnimation: RaphaelAnimation,
        animation: RaphaelAnimation
    ): this;

    /**
     * Set the given attribute of this element to the given value.
     * @typeparam K Type of the attribute name to set.
     * @param attributeName Name of an attribute to set.
     * @param attributeValue New value for the attribute.
     * @return this element for chaining.
     */
    attr<K extends keyof RaphaelAttributes>(attributeName: K, attributeValue: RaphaelAttributes[K] | undefined): this;

    /**
     * Finds the current value of the given attribute.
     * @typeparam K Type of the attribute name to read.
     * @param attributeName Name of the attribute to read.
     * @return The value of the given attribute, or `undefined` if the attribute is unset or does not exist.
     */
    attr<K extends keyof RaphaelReadAttributes>(attributeName: K): RaphaelReadAttributes[K] | undefined;

    /**
     * Finds the current value of the given attributes.
     * @typeparam K Type of the attribute names to read.
     * @param attributeNames Names of the attributes to read.
     * @return A tuple with the values of the given attribute names.
     */
    attr<
        // Trick compiler into inferring a tuple type without the consumer having to specify the tuple type explicitly
        // https://github.com/microsoft/TypeScript/issues/22679
        K extends (Array<keyof RaphaelReadAttributes> & { "0"?: keyof RaphaelReadAttributes })
    >(attributeNames: K): {
            [P in keyof K]: K[P] extends keyof RaphaelReadAttributes
            ? RaphaelReadAttributes[K[P]] | undefined
            : never
        };

    /**
     * Writes the given attributes to this element.
     * @param attributes Attributes to set on this element.
     * @return this element for chaining.
     */
    attr(attributes: Partial<RaphaelAttributes>): this;

    /**
     * Adds an event handler for the click event to this element.
     * @param handler Handler for the event.
     * @return this element for chaining.
     */
    click(handler: RaphaelBasicEventHandler<RaphaelUnwrapElement<TTechnology, this>, MouseEvent>): this;

    /**
     * Create a new element with all properties and attributes of this element.
     * @return A clone of this element.
     */
    clone(): this;

    /**
     * Retrieves the value associated with the given key. See also {@link removeData}.
     * @param key Key of the datum to retrieve.
     * @return The data associated with the given key.
     */
    data(key: string): any;

    /**
     * Adds the given value associated with the given key. See also {@link removeData}.
     * @param key Key of the datum to store.
     * @param value Datum to store.
     */
    data(key: string, value: any): this;

    /**
     * Adds an event handler for the double click event to this element.
     * @param handler Handler for the event.
     * @return this element for chaining.
     */
    dblclick(handler: RaphaelBasicEventHandler<RaphaelUnwrapElement<TTechnology, this>, MouseEvent>): this;

    /**
     * Adds the event handlers for a drag of this element.
     * @typeparam MoveThisContext Type of the this context for the `onMove` handler.
     * @typeparam StartThisContext Type of the this context for the `onStart` handler.
     * @typeparam EndThisContext Type of the this context for the `onEnd` handler.
     * @param onMoveHandler Handler for when the pointer is moved while dragging.
     * @param onStartHandler Handler for when the dragging starts.
     * @param onEndHandler Handler for when the dragging ends.
     * @param moveThisContext The this context with which the `onMove` handler is invoked.
     * @param startThisContext The this context with which the `onStart` handler is invoked.
     * @param endThisContext The this context with which the `onEnd` handler is invoked.
     * @return this element for chaining.
     */
    drag<
        MoveThisContext = RaphaelUnwrapElement<TTechnology, this>,
        StartThisContext = RaphaelUnwrapElement<TTechnology, this>,
        EndThisContext = RaphaelUnwrapElement<TTechnology, this>
    >(
        onMoveHandler: RaphaelDragOnMoveHandler<MoveThisContext>,
        onStartHandler: RaphaelDragOnStartHandler<StartThisContext>,
        onEndHandler: RaphaelDragOnEndHandler<EndThisContext>,
        moveThisContext?: MoveThisContext,
        startThisContext?: StartThisContext,
        endThisContext?: EndThisContext
    ): this;

    /**
     * Returns a bounding box for this element.
     * @param isWithoutTransform `true` if you want to have bounding box before transformations are applied.
     * Default is `false`.
     * @return The smallest bounding box that contains this element.
     */
    getBBox(isWithoutTransform?: boolean): RaphaelAxisAlignedBoundingBox;

    /**
     * Return a set of elements that create a glow-like effect around this element.
     *
     * Note: Glow is not connected to the element. If you change element attributes it will not adjust itself.
     * @param glow Optional settings for the glow effect.
     * @return A set of elements that produce the given glow effect.
     */
    glow(glow?: Partial<RaphaelGlowSettings>): RaphaelSet<TTechnology>;

    /**
     * Makes this element invisible. See also {@link RaphaelElement.show}.
     * @return this element for chaining.
     */
    hide(): this;

    /**
     * Adds event handlers for the hover events to this element.
     * @typeparam HoverInThisContext Type of the this context for the `onHoverIn` handler.
     * @typeparam HoverOutThisContext Type of the this context for the `onHoverOut` handler.
     * @param onHoverInHandler Handler for when the pointer enters this element.
     * @param onHoverOutHandler Handler for when the pointer leaves this element.
     * @param hoverInThisContext The this context with which the `onHoverIn` handler is invoked.
     * @param hoverOutThisContext The this context with which the `onHoverOut` handler is invoked.
     * @return this element for chaining.
     */
    hover<
        HoverInThisContext = RaphaelUnwrapElement<TTechnology, this>,
        HoverOutThisContext = RaphaelUnwrapElement<TTechnology, this>,
        >(
            onHoverInHandler: RaphaelBasicEventHandler<HoverInThisContext, MouseEvent>,
            onHoverOutHandler: RaphaelBasicEventHandler<HoverOutThisContext, MouseEvent>,
            hoverInThisContext?: HoverInThisContext,
            hoverOutThisContext?: HoverOutThisContext
        ): this;

    /**
     * Inserts current object after the given one in the DOM.
     * @param element Element to insert.
     * @return this element for chaining.
     */
    insertAfter(element: RaphaelElement<TTechnology>): this;

    /**
     * Inserts current object before the given one.
     * @param element Element to insert.
     * @return this element for chaining.
     */
    insertBefore(element: RaphaelElement<TTechnology>): this;

    /**
     * The current transform matrix representing the total transform of this element.
     */
    matrix: RaphaelMatrix;

    /**
     * Adds an event handler for the mousedown event to this element.
     * @param handler Handler for the event.
     * @return this element for chaining.
     */
    mousedown(handler: RaphaelBasicEventHandler<RaphaelUnwrapElement<TTechnology, this>, MouseEvent>): this;

    /**
     * Adds an event handler for the mousemove event to this element.
     * @param handler Handler for the event.
     * @return this element for chaining.
     */
    mousemove(handler: RaphaelBasicEventHandler<RaphaelUnwrapElement<TTechnology, this>, MouseEvent>): this;

    /**
     * Adds an event handler for the mouseout event to this element.
     * @param handler Handler for the event.
     * @return this element for chaining.
     */
    mouseout(handler: RaphaelBasicEventHandler<RaphaelUnwrapElement<TTechnology, this>, MouseEvent>): this;

    /**
     * Adds an event handler for the mouseover event to this element.
     * @param handler Handler for the event.
     * @return this element for chaining.
     */
    mouseover(handler: RaphaelBasicEventHandler<RaphaelUnwrapElement<TTechnology, this>, MouseEvent>): this;

    /**
     * Adds an event handler for the mouseup event to this element.
     * @param handler Handler for the event.
     * @return this element for chaining.
     */
    mouseup(handler: RaphaelBasicEventHandler<RaphaelUnwrapElement<TTechnology, this>, MouseEvent>): this;

    /**
     * Shortcut for assigning an event handler for the `drag.over.<id>` event, where `id` is the ID of the element,
     * see {@link RaphaelElement.id}.
     * @param onDragOverHandler Handler for event, first argument would be the element you are dragging over
     * @return this element for chaining.
     */
    onDragOver(onDragOverHandler: RaphaelDragOnOverHandler<TTechnology, RaphaelUnwrapElement<TTechnology, this>>): this;

    /**
     * Stops an animation of this element with the ability to resume it later on.
     * @param anim Animation to pause. If not given, pauses all current animations.
     * @return this element for chaining.
     */
    pause(anim?: RaphaelAnimation): this;

    /**
     * Removes this element from the paper.
     */
    remove(): void;

    /**
     * Removes the value associated with this element by the given key. If the key is not provided, removes all the
     * data of this element.
     * @param key Key of the datum to remove.
     * @return this element for chaining.
     */
    removeData(key?: string): this;

    /**
     * Resumes animation if it was paused with {@link RaphaelElement.pause} method.
     * @param anim The animation that was paused. If not given, resumes all currently paused animations.
     * @return this element for chaining.
     */
    resume(anim?: RaphaelAnimation): this;

    /**
     * Rotates this element by the given angle around the given point.
     * @param degrees Angle in degrees by which to rotate.
     * @param centerX Horizontal coordinate of the center of rotation.
     * @param centerY Vertical coordinate of the center of rotation.
     * @return this element for chaining.
     */
    rotate(degrees: number, centerX: number, centerY: number): this;

    /**
     * Rotates this element by the given angle around the center of this shape.
     * @param degrees Angle in degrees by which to rotate.
     * @return this element for chaining.
     */
    rotate(degrees: number): this;

    /**
     * Scales this element by the given scale factor, relative to the given center.
     * @param scaleFactorX Horizontal part of the scale factor.
     * @param scaleFactorY Vertical part of the scale factor.
     * @param centerX Horizontal coordinate of the center of the scaling operation.
     * @param centerY Vertical coordinate of the center of the scaling operation.
     * @return this element for chaining.
     */
    scale(scaleFactorX: number, scaleFactorY: number, centerX: number, centerY: number): this;

    /**
     * Scales this element by the given scale factor. The center of this
     * shape is used as the center of the scaling operation.
     * @param scaleFactorX Horizontal part of the scale factor.
     * @param scaleFactorY Vertical part of the scale factor. If not given, defaults to `scaleFactorX`.
     * @return this element for chaining.
     */
    scale(scaleFactorX: number, scaleFactorY?: number): this;

    /**
     * Sets the status of animation of the element in milliseconds. Similar to {@link status} method.
     * @param animation Animation for which to set the status.
     * @param value Number of milliseconds from the beginning of the animation.
     * @return this element for chaining.
     */
    setTime(animation: RaphaelAnimation, value: number): this;

    /**
     * Makes this element visible. See also {@link RaphaelElement.hide}.
     * @return this element for chaining.
     */
    show(): this;

    /**
     * Gets the status (normalized animation time) of the current animations of this element.
     * @return The status of all animations currently playing.
     */
    status(): RaphaelAnimationStatus[];

    /**
     * Gets the status of the given animation of this element.
     * @param animation Animation object for which to retrieve the status.
     * @return The current value (normalized animation time) of the given animation.
     */
    status(animation: RaphaelAnimation): number;

    /**
     * Sets the status of the given animation of this element to the given value. This will cause the animation to
     * jump to the given position.
     * @param animation Animation object for which to set the status.
     * @param value New value (normalized animation time) for the animation, between `0` and `1`.
     * @return this element for chaining.
     */
    status(animation: RaphaelAnimation, value: number): this;

    /**
     * Stops all or the the given animation of this element.
     * @param animation An animation to stop. If not given, stops all animations currently playing.
     * @return this element for chaining.
     */
    stop(animation?: RaphaelAnimation): this;

    /**
     * Moves this element so it is the furthest from the viewer’s eyes, behind other elements.
     * @return this element for chaining.
     */
    toBack(): this;

    /**
     * Moves this element so it is the closest to the viewer’s eyes, on top of other elements.
     * @return this element for chaining.
     */
    toFront(): this;

    /**
     * Adds an event handler for the touchcancel event to this element.
     * @param handler Handler for the event.
     * @return this element for chaining.
     */
    touchcancel(handler: RaphaelBasicEventHandler<RaphaelUnwrapElement<TTechnology, this>, TouchEvent>): this;

    /**
     * Adds an event handler for the touchend event to this element.
     * @param handler Handler for the event.
     * @return this element for chaining.
     */
    touchend(handler: RaphaelBasicEventHandler<RaphaelUnwrapElement<TTechnology, this>, TouchEvent>): this;

    /**
     * Adds an event handler for the touchmove event to this element.
     * @param handler Handler for the event.
     * @return this element for chaining.
     */
    touchmove(handler: RaphaelBasicEventHandler<RaphaelUnwrapElement<TTechnology, this>, TouchEvent>): this;

    /**
     * Adds an event handler for the touchstart event to this element.
     * @param handler Handler for the event.
     * @return this element for chaining.
     */
    touchstart(handler: RaphaelBasicEventHandler<RaphaelUnwrapElement<TTechnology, this>, TouchEvent>): this;

    /**
     * Returns the current transformation of this element. This transformation is separate to other attributes, i.e.
     * translation does not change x or y of the rectangle. The format of transformation string is similar to the
     * path string syntax:
     *
     * ```
     * "t100,100r30,100,100s2,2,100,100r45s1.5"
     * ```
     *
     * Each letter is a command. There are four commands:
     * - `t` is for translate
     * - `r` is for rotate,
     * - `s` is for scale
     * - `m` is for matrix.
     *
     * So, the example line above could be read like
     *
     * ```
     * translate by 100, 100;
     * rotate 30° around 100, 100;
     * scale twice around 100, 100;
     * rotate 45° around centre;
     * scale 1.5 times relative to centre
     * ```
     *
     * As you can see rotate and scale commands have origin coordinates as optional parameters, the default is the
     * centre point of the element. Matrix accepts six parameters.
     *
     * ```javascript
     * // to get current value call it without parameters
     * console.log(el.transform());
     * ```
     *
     * @return The current transformation of this element.
     */
    transform(): string;

    /**
     * Adds transformation to this element which is separate to other attributes, i.e. translation does not change x
     * or y of the rectangle. The format of transformation string is similar to the path string syntax:
     *
     * ```
     * "t100,100r30,100,100s2,2,100,100r45s1.5"
     * ```
     *
     * Each letter is a command. There are four commands:
     * - `t` is for translate
     * - `r` is for rotate,
     * - `s` is for scale
     * - `m` is for matrix.
     *
     * So, the example line above could be read like
     *
     * ```
     * translate by 100, 100;
     * rotate 30° around 100, 100;
     * scale twice around 100, 100;
     * rotate 45° around centre;
     * scale 1.5 times relative to centre
     * ```
     *
     * As you can see rotate and scale commands have origin coordinates as optional parameters, the default is the
     * centre point of the element. Matrix accepts six parameters.
     *
     * ```javascript
     * var el = paper.rect(10, 20, 300, 200);
     *
     * // translate 100, 100, rotate 45°, translate -100, 0
     * el.transform("t100,100r45t-100,0");
     *
     * // if you want you can append or prepend transformations
     * el.transform("...t50,50");
     * el.transform("s2...");
     *
     * // or even wrap
     * el.transform("t50,50...t-50-50");
     *
     * // to reset transformation call method with empty string
     * el.transform("");
     * ```
     *
     * @param A transform string by which to transform this element.
     * @return this element for chaining.
     */
    transform(transformString: string): this;

    /**
     * Translates this element by the given amount.
     * @param deltaX Amount by which to translate in the horizontal direction.
     * @param deltaY Amount by which to translate in the vertical direction.
     * @return this element for chaining.
     */
    translate(deltaX: number, deltaY: number): this;

    /**
     * Removes an event handler for the click event from this element. See {@link click}.
     * @param handler A handler to remove.
     * @return this element for chaining.
     */
    unclick(handler: RaphaelBasicEventHandler<RaphaelUnwrapElement<TTechnology, this>, MouseEvent>): this;

    /**
     * Removes an event handler for the double click event from this element. See {@link dblclick}.
     * @param handler A handler to remove.
     * @return this element for chaining.
     */
    undblclick(handler: RaphaelBasicEventHandler<RaphaelUnwrapElement<TTechnology, this>, MouseEvent>): this;

    /**
     * Removes all drag event handlers from this element.
     * @return this element for chaining.
     */
    undrag(): this;

    /**
     * Removes the event handlers for the hover event from this element. See {@link hover}.
     * @param onHoverInHandler Hover-in handler to remove.
     * @param onHoverOutHandler Hover-out handler to remove.
     * @return this element for chaining.
     */
    unhover(
        onHoverInHandler: RaphaelBasicEventHandler<any, MouseEvent>,
        onHoverOutHandler: RaphaelBasicEventHandler<any, MouseEvent>,
    ): this;

    /**
     * Removes an event handler for the mousedown event from this element. See {@link mousedown}.
     * @param handler A handler to remove.
     * @return this element for chaining.
     */
    unmousedown(handler: RaphaelBasicEventHandler<RaphaelUnwrapElement<TTechnology, this>, MouseEvent>): this;

    /**
     * Removes an event handler for the mousemove event from this element. See {@link mousemove}.
     * @param handler A handler to remove.
     * @return this element for chaining.
     */
    unmousemove(handler: RaphaelBasicEventHandler<RaphaelUnwrapElement<TTechnology, this>, MouseEvent>): this;

    /**
     * Removes an event handler for the mouseout event from this element. See {@link mouseout}.
     * @param handler A handler to remove.
     * @return this element for chaining.
     */
    unmouseout(handler: RaphaelBasicEventHandler<RaphaelUnwrapElement<TTechnology, this>, MouseEvent>): this;

    /**
     * Removes an event handler for the mouseover event from this element. See {@link mouseover}.
     * @param handler A handler to remove.
     * @return this element for chaining.
     */
    unmouseover(handler: RaphaelBasicEventHandler<RaphaelUnwrapElement<TTechnology, this>, MouseEvent>): this;

    /**
     * Removes an event handler for the mouseup event from this element. See {@link mouseup}.
     * @param handler A handler to remove.
     * @return this element for chaining.
     */
    unmouseup(handler: RaphaelBasicEventHandler<RaphaelUnwrapElement<TTechnology, this>, MouseEvent>): this;

    /**
     * Removes an event handler for the touchcancel event from this element. See {@link touchcancel}.
     * @param handler A handler to remove.
     * @return this element for chaining.
     */
    untouchcancel(handler: RaphaelBasicEventHandler<RaphaelUnwrapElement<TTechnology, this>, TouchEvent>): this;

    /**
     * Removes an event handler for the touchend event from this element. See {@link touchend}.
     * @param handler A handler to remove.
     * @return this element for chaining.
     */
    untouchend(handler: RaphaelBasicEventHandler<RaphaelUnwrapElement<TTechnology, this>, TouchEvent>): this;

    /**
     * Removes an event handler for the touchmove event from this element. See {@link touchmove}.
     * @param handler A handler to remove.
     * @return this element for chaining.
     */
    untouchmove(handler: RaphaelBasicEventHandler<RaphaelUnwrapElement<TTechnology, this>, TouchEvent>): this;

    /**
     * Removes an event handler for the touchstart event from this element. See {@link touchstart}.
     * @param handler A handler to remove.
     * @return this element for chaining.
     */
    untouchstart(handler: RaphaelBasicEventHandler<RaphaelUnwrapElement<TTechnology, this>, TouchEvent>): this;
}

/**
 * Abstracts the elements that can be created by Raphaël, such as circles, rectangles, and paths.
 *
 * Elements are implemented either via SVG or VML, see {@link RaphaelTechnology}.
 *
 * @typeparam TTechnology Type of the technology used by this paper, either `SVG` or `VML`.
 * @typeparam TNode Type of the native DOM element used by this element, such as {@link SVGRectElement}.
 */
export interface RaphaelElement<
    TTechnology extends RaphaelTechnology = "SVG" | "VML",
    TNode extends RaphaelElementByTechnologyMap[TTechnology] = RaphaelElementByTechnologyMap[TTechnology]
    > extends RaphaelBaseElement<TTechnology> {
    /**
     * Unique id of the element. Especially useful when you want to listen to events of the element, because all
     * events are fired in format `<module>.<action>.<id>`. Also useful for the {@link RaphaelPaper.getById} method.
     */
    id: number;

    /** Reference to the next element in the hierarchy. */
    next: RaphaelElement<TTechnology> | null;

    /**
     * Gives you a reference to the DOM object, so you can assign event handlers or just mess around.
     *
     * Note: __Don’t mess with it.__
     */
    node: TNode;

    /** Internal reference to paper where object drawn. Mainly for use in plugins and element extensions. */
    paper: RaphaelPaper<TTechnology>;

    /** Reference to the previous element in the hierarchy. */
    prev: RaphaelElement<TTechnology> | null;

    /** Internal reference to Raphaël object, in case it is not available. */
    raphael: RaphaelStatic | undefined;

    /** The type of this element, e.g. `circle` or `path`. */
    type: RaphaelShapeType | string;
}

/**
 * Represents a specific type of {@link RaphaelElement}, a path element. This element has got some additional
 * methods.
 * @typeparam TTechnology The target {@link RaphaelTechnology}.
 */
export interface RaphaelPath<
    TTechnology extends RaphaelTechnology = "SVG" | "VML"
    > extends RaphaelElement<TTechnology, RaphaelElementImplementationMap["path"][TTechnology]> {
    /**
     * The type of this element, i.e. `path`.
     */
    type: "path";

    /**
     * Finds the coordinates of the point located at the given length on this path.
     * @param length Length at which to get the point.
     * @return The point located at the given length on this path.
     */
    getPointAtLength(length: number): RaphaelCartesianCurvePoint;

    /**
     * Return a sub path of this path from the given length to the given length.
     * @param from Position of the start of the segment.
     * @param to Position of the end of the segment
     * @return An SVG path string for the segment.
     */
    getSubpath(from: number, to: number): string;

    /**
     * Finds the total length of this path.
     * @return The length of this path in pixels
     */
    getTotalLength(): number;
}

/**
 * A set represents a collection of {@link RaphaelElement}s in a fixed order.
 * @typeparam TTechnology Type of the technology used by this paper, either `SVG` or `VML`.
 */
export interface RaphaelSet<
    TTechnology extends RaphaelTechnology = "SVG" | "VML"
    > extends ArrayLike<RaphaelElement<TTechnology>>, RaphaelBaseElement<TTechnology> {
    /**
     * Removes all elements from the set
     */
    clear(): void;

    /**
     * Removes given element from the set
     * @param element An element to remove from the set.
     * @return `true` if object was found and removed from the set
     */
    exclude(element: RaphaelElement<TTechnology>): boolean;

    /**
     * Executes given function for each element in the set.
     *
     * If callback function returns `false` it will stop the loop running.
     *
     * @typeparam ThisContext Type of the this context for the callback.
     * @param callback Callback that is invoked with each element in this set.
     * @param thisContext Optional this context that is passed to the callback.
     * @return this set for chaining.
     */
    forEach<ThisContext = Window>(
        callback: (this: ThisContext, element: RaphaelElement<TTechnology>) => boolean | void,
        thisArg?: ThisContext
    ): this;

    /**
     * Removes last element and returns it.
     * @return The last element in this set, if any.
     */
    pop(): RaphaelElement<TTechnology> | undefined;

    /**
     * Adds each argument to the current set.
     * @return this set for chaining.
     */
    push(...elements: Array<RaphaelElement<TTechnology>>): this;

    /**
     * Removes given element from the set.
     * @param index Position of the deletion
     * @param count Number of element to remove
     * @param elementsToAdd Elements to insert at the given position.
     * @return The set elements that were deleted.
     */
    splice(index: number, count: number, ...elementsToAdd: Array<RaphaelElement<TTechnology>>): RaphaelSet<TTechnology>;
}

/**
 * Represents a 2x3 matrix for affine transformations in homogenous coordinates. This allows for translations as
 * well as rotations, scaling, and shearing.
 *
 * The six components a-f of a matrix are arranged like this:
 *
 * ```
 * +---+---+---+
 * | a | c | e |
 * | b | d | f |
 * +---+---+---+
 * ```
 */
export interface RaphaelMatrix {
    /**
     * The matrix component at the first row, first column.
     */
    a: number;

    /**
     * The matrix component at the second row, first column.
     */
    b: number;

    /**
     * The matrix component at the first row, second column.
     */
    c: number;

    /**
     * The matrix component at the second row, second column.
     */
    d: number;

    /**
     * The matrix component at the third row, first column.
     */
    e: number;

    /**
     * The matrix component at the third row, second column.
     */
    f: number;

    /**
     * Adds the given matrix to this matrix component-wise.
     *
     * The parameters a-f form a 2x3 matrix and are arranged like this.
     *
     * ```
     * +---+---+---+
     * | a | c | e |
     * | b | d | f |
     * +---+---+---+
     * ```
     *
     * @param a The matrix component at the first row, first column.
     * @param b The matrix component at the second row, first column.
     * @param c The matrix component at the first row, second column.
     * @param d The matrix component at the second row, second column.
     * @param e The matrix component at the third row, first column.
     * @param f The matrix component at the third row, second column.
     */
    add(a: number, b: number, c: number, d: number, e: number, f: number): void;

    /**
     * Creates a copy of this matrix and returns it.
     * @return A new matrix that is equal to this matrix.
     */
    clone(): RaphaelMatrix;

    /**
     * Creates a new matrix that represents the inverse affine transformation of this matrix.
     * @return A new matrix that represents the inverse affine transformation of this matrix.
     */
    invert(): RaphaelMatrix;

    /**
     * Applies a rotation to this matrix.
     * @param a The angle of the rotation, in degrees.
     * @param x Horizontal coordinate of the origin of the rotation.
     * @param y Vertical coordinate of the origin of the rotation.
     */
    rotate(a: number, x: number, y: number): void;

    /**
     * Applies a scaling operation to this matrix.
     * @param x Horizontal coordinate of the origin of the scaling.
     * @param y Vertical coordinate of the origin of the scaling. If not specified, default to same value as `x`.
     */
    scale(x: number, y?: number): void;

    /**
     * Applies a scaling operation to this matrix.
     * @param x Horizontal coordinate of the origin of the scaling.
     * @param y Vertical coordinate of the origin of the scaling.
     * @param cx Amount by which to scale in the horizontal direction.
     * @param cy Amount by which to scale in the vertical direction.
     */
    scale(x: number, y: number, cx: number, cy: number): void;

    /**
     * Splits matrix into primitive transformations.
     * @return Information regarding how this matrix can be produced by applying a chain of primitive transformations.
     */
    split(): RaphaelMatrixTransformInfo;

    /**
     * Creates a transform string that represents given matrix, such as `t0,0s1,1,0,0r0,0,0`.
     * @return A CSS transform string that represents given matrix.
     */
    toTransformString(): string;

    /**
     * Applies a translation to this matrix.
     * @param dx Amount by which to translate in the horizontal direction.
     * @param dy Amount by which to translate in the vertical direction.
     */
    translate(x: number, y: number): void;

    /**
     * Applies this transformation matrix to the given point and returns the x coordinate of that transformed point.
     * See also {@link y}.
     * @param x Horizontal coordinate of a point to transform.
     * @param y Vertical coordinate of a point to transform.
     */
    x(x: number, y: number): number;

    /**
     * Applies this transformation matrix to the given point and returns the y coordinate of that transformed point.
     * See also {@link x}.
     * @param x Horizontal coordinate of a point to transform.
     * @param y Vertical coordinate of a point to transform.
     */
    y(x: number, y: number): number;
}

/**
 * Interface for a paper that may be implemented either via VML or SVG, see {@link RaphaelTechnology}.
 *
 * The paper that represents a drawing surface, implemented via SVG.
 *
 * You can use the paper to draw shapes such as circles or paths.
 *
 * @typeparam TTechnology Type of the technology used by this paper, either `SVG` or `VML`.
 */
export interface RaphaelPaper<
    TTechnology extends RaphaelTechnology = "SVG" | "VML",
    > {
    /**
     * Points to the bottom element on the paper. `null` when there is no element.
     */
    bottom: RaphaelElement<TTechnology> | null;

    /**
     * The SVG element used by this paper.
     */
    canvas: RaphaelElementByTechnologyMap[TTechnology];

    /**
     * Draws a circle.
     * @param x x coordinate of the center.
     * @param y y coordinate of the center.
     * @param radius Radius of the circle.
     * @return The newly created element representing the circle.
     */
    circle(x: number, y: number, radius: number): RaphaelElement<TTechnology, RaphaelElementImplementationMap["circle"][TTechnology]>;

    /**
     * Clears the paper, i.e. removes all the elements.
     */
    clear(): void;

    /**
     * If you have a set of attributes that you would like to represent as a function of some number you can do it
     * easily with custom attributes:
     *
     * ```javascript
     * paper.customAttributes.hue = function (num) {
     *   num = num % 1;
     *   return {fill: "hsb(" + num + ", .75, 1)"};
     * };
     *
     * // Custom attribute "hue" will change fill
     * // to be given hue with fixed saturation and brightness.
     * // Now you can use it like this:
     * var c = paper.circle(10, 10, 10).attr({hue: .45});
     * // or even like this:
     * c.animate({hue: 1}, 1e3);
     *
     * // You could also create custom attribute
     * // with multiple parameters:
     * paper.customAttributes.hsb = function (h, s, b) {
     *   return {fill: "hsb(" + [h, s, b].join(",") + ")"};
     * };
     * c.attr({hsb: ".5 .8 1"});
     * c.animate({hsb: "1 0 .5"}, 1e3);
     * ```
     *
     * __Note to TypeScript users__
     *
     * To declare your plugin, you should extend the `raphael` module and add to the {@link RaphaelAttributes}:
     *
     * ```typescript
     * import { RaphaelAttributes } from "raphael"
     * declare module "raphael" {
     *   interface RaphaelAttributes {
     *     hue: number;
     *     hsb: string;
     *   }
     * }
     * ```
     */
    customAttributes: Record<keyof RaphaelAttributes, RaphaelCustomAttribute<TTechnology>>;

    /**
     * Draws an ellipse.
     * @param x x coordinate of the center.
     * @param y y coordinate of the center.
     * @param radiusX Horizontal half-axis of the ellipse.
     * @param radiusY Vertical half-axis of the ellipse.
     * @return The newly created element representing the ellipse.
     */
    ellipse(x: number, y: number, radiusX: number, radiusY: number): RaphaelElement<TTechnology, RaphaelElementImplementationMap["ellipse"][TTechnology]>;

    /**
     * Executes given function for each element on the paper
     *
     * If callback function returns `false` it will stop the loop running.
     * @typeparam Type of the this context for the callback.
     * @param callback Callback that is invoked with each element on the paper.
     * @param thisContext Optional this context that is passed to the callback.
     * @return this paper for chaining.
     */
    forEach<T = Window>(callback: (this: T, element: RaphaelElement<TTechnology>) => boolean | void, thisContext?: T): this;

    /**
     * Returns an element by its internal ID.
     * @param id ID of an element to fetch.
     * @return The element with the given ID, or `null` if no such element exists.
     */
    getById(id: number): RaphaelElement<TTechnology> | null;

    /**
     * Return the topmost element at given point.
     *
     * ```javascript
     * paper.getElementByPoint(mouseX, mouseY).attr({stroke: "#f00"});
     * ```
     *
     * @param x x coordinate from the top left corner of the window.
     * @param y y coordinate from the top left corner of the window.
     * @return The topmost element at given point, `null` if no such element exists..
     */
    getElementByPoint(x: number, y: number): RaphaelElement<TTechnology> | null;

    /**
     * Finds font object in the registered fonts by given parameters. You could specify only one word from the font
     * name, like `Myriad` for `Myriad Pr`.
     *
     * ```javascript
     * paper.print(100, 100, "Test string", paper.getFont("Times", 800), 30);
     * ```
     *
     * @param family Font family name or any word from it
     * @param weight Font weight
     * @param style Font style
     * @param stretch Font stretch
     * @return The font object with the given options, or `undefined` if no such font exists.
     */
    getFont(family: string, weight?: string | number, style?: string, stretch?: string): RaphaelFont | undefined;

    /**
     * The height of this pager.
     */
    height: number;

    /**
     * Embeds an image into this paper.
     *
     * ```javascript
     * var c = paper.image("apple.png", 10, 10, 80, 80);
     * ```
     *
     * @param src URI of the source image.
     * @param x x coordinate position
     * @param y y coordinate position
     * @param width Width of the image
     * @param height Height of the image
     * @return The newly created element representing the image.
     */
    image(src: string, x: number, y: number, width: number, height: number): RaphaelElement<TTechnology, RaphaelElementImplementationMap["image"][TTechnology]>;

    /**
     * Creates a path element by given path data string.
     *
     * Path string consists of one-letter commands, followed by comma separated arguments in numerical form:
     *
     * ```
     * "M10,20L30,40"
     * ```
     *
     * For example:
     *
     * ```javascript
     * var c = paper.path("M10 10L90 90");
     * // draw a diagonal line:
     * // move to 10,10, line to 90,90
     * ```
     *
     * @param pathString Path string in SVG format.
     * @return The newly created element representing the path.
     */
    path(pathString?: string | RaphaelPathSegment | ReadonlyArray<RaphaelPathSegment>): RaphaelPath<TTechnology>;

    /**
     * Creates set of shapes to represent given font at given position with given size. Result of the method is set
     * object (see {@link set}) which contains each letter as separate path object.
     *
     * ```javascript
     * var txt = r.print(10, 50, "print", r.getFont("Arial"), 30).attr({fill: "#fff"});
     * // following line will paint first letter in red
     * txt[0].attr({fill: "#f00"});
     * ```
     *
     * @param x x Position of the text
     * @param y y Position of the text
     * @param str Text to print
     * @param font Font object, see {@link getFont}.
     * @param size Size of the font, default is 16.
     * @param origin Whether the text is centered on the baseline or middle line.
     * @param letterSpacing Number between `-1` and `1`, default is `0`.
     * @return Each letter as separate {@link RaphaelPath|path object}.
     */
    print(x: number, y: number, str: string, font: RaphaelFont, size?: number, origin?: RaphaelFontOrigin, letterSpacing?: number): RaphaelSet<TTechnology>;

    /**
     * Points to the {@link RaphaelStatic|Raphael} object/function.
     */
    raphael: RaphaelStatic<TTechnology>;

    /**
     * Draws a rectangle.
     * @param x x coordinate of the top left corner.
     * @param y y coordinate of the top left corner
     * @param width Width of th rectangle.
     * @param height Height of th rectangle.
     * @param r Radius for rounded corners, default is `0`.
     * @return The newly created element representing the rectangle.
     */
    rect(x: number, y: number, width: number, height: number, r?: number): RaphaelElement<TTechnology, RaphaelElementImplementationMap["rect"][TTechnology]>;

    /**
     * Removes this paper from the DOM.
     */
    remove(): void;

    /**
     * Fixes the issue of Firefox and IE9 regarding subpixel rendering. If paper is dependant on other elements
     * after reflow it could shift half pixel which cause for lines to lost their crispness. This method fixes the
     * issue.
     */
    renderfix(): void;

    /**
     * There is an inconvenient rendering bug in Safari (WebKit): sometimes the rendering should be forced. This
     * method should help with dealing with this bug.
     */
    safari(): void;

    /**
     * Creates array-like object to keep and operate several elements at once. Warning: it doesn't create any
     * elements for itself in the page, it just groups existing elements. Sets act as pseudo elements - all methods
     * available to an element can be used on a set.
     * @param elements Elements to add to the  set.
     * @return A newly created set with the given elements.
     */
    set(elements: Array<RaphaelElement<TTechnology>>): RaphaelSet<TTechnology>;

    /**
     * Creates array-like object to keep and operate several elements at once. Warning: it doesn't create any
     * elements for itself in the page, it just groups existing elements. Sets act as pseudo elements - all methods
     * available to an element can be used on a set.
     *
     * ```javascript
     * var st = paper.set();
     * st.push(
     *   paper.circle(10, 10, 5),
     *   paper.circle(30, 10, 5)
     * );
     * st.attr({fill: "red"}); // changes the fill of both circles
     * ```
     *
     * @param elements Elements to add to the  set.
     * @return A newly created set with the given elements.
     */
    set(...elements: Array<RaphaelElement<TTechnology>>): RaphaelSet<TTechnology>;

    /**
     * See {@link setStart}. This method finishes catching elements and returns the resulting set.
     * @return A set with all the elements added to this paper since {@link setStart} was called.
     */
    setFinish(): RaphaelSet<TTechnology>;

    /**
     * If you need to change dimensions of the canvas, call this method.
     * @param width New width of the canvas.
     * @param height New height of the canvas.
     * @return this paper for chaining.
     */
    setSize(width: number, height: number): this;

    /**
     * Creates a {@link set}. All elements that will be created after calling this method and before calling
     * {@link setFinish} will be added to the set.
     *
     * ```javascript
     * paper.setStart();
     * paper.circle(10, 10, 5),
     * paper.circle(30, 10, 5)
     * var st = paper.setFinish();
     * st.attr({fill: "red"}); // changes the fill of both circles
     * ```
     */
    setStart(): void;

    /**
     * Sets the view box of the paper. Practically it gives you ability to zoom and pan whole paper surface by
     * specifying new boundaries.
     * @param x New x position, default is `0`.
     * @param y New y position, default is `0`.
     * @param w New width of the canvas.
     * @param h New height of the canvas.
     * @param fit `true` if you want graphics to fit into new boundary box
     * @return this paper for chaining.
     */
    setViewBox(x: number, y: number, w: number, h: number, fit?: boolean): this;

    /**
     * Draws a text string. If you need line breaks, put `\n` in the string.
     * @param x x coordinate position.
     * @param y y coordinate position.
     * @param text The text string to draw.
     * @return The newly created element representing the drawn text.
     */
    text(x: number, y: number, text: string): RaphaelElement<TTechnology, RaphaelElementImplementationMap["text"][TTechnology]>;

    /**
     * Points to the topmost element on the paper. `null` when there is no element.
     */
    top: RaphaelElement<TTechnology> | null;

    /**
     * The width of this paper.
     */
    width: number;
}

/**
 * Describes a shape that can be created on the canvas.
 */
export interface RaphaelShapeDescriptor extends Partial<RaphaelAttributes> {
    /** Type of the shape, e.g. `circle` or `rect`. Could also be a custom plugin shape. */
    type: RaphaelShapeType | string;
}

/**
 * Represents the type of the {@link RaphaelStatic.getColor} property. It is both callable and has got an additional
 * property with a utility method.
 */
export interface RaphaelStaticGetColor {
    /**
     * On each call returns next colour in the spectrum. To reset it back to red call
     * {@link RaphaelStaticGetColor.reset|Raphael.getColor.reset}.
     * @param Brightness, default is `0.75`.
     * @return Hex representation of the color.
     */
    (brightness?: number): string;

    /**
     * Resets spectrum position for {@link RaphaelStaticGetColor|Raphael.getColor} back to red.
     */
    reset(): void;
}

/**
 * Interface for the main object exported by the Raphaël library.
 *
 * Raphaël is a small JavaScript library that should simplify your work with vector graphics on the web. If you want to
 * create your own specific chart or image crop and rotate widget, for example, you can achieve it simply and easily
 * with this library.
 *
 * You use this library via the globally available {@link RaphaelStatic|Raphael} object:
 *
 * ```javascript
 * // Creates canvas 320 × 200 at 10, 50
 * var paper = Raphael(10, 50, 320, 200);
 *
 * // Creates circle at x = 50, y = 40, with radius 10
 * var circle = paper.circle(50, 40, 10);
 *
 * // Sets the fill attribute of the circle to red (#f00)
 * circle.attr("fill", "#f00");
 *
 * // Sets the stroke attribute of the circle to white
 * circle.attr("stroke", "#fff");
 * ```
 *
 * See https://dmitrybaranovskiy.github.io/raphael/
 *
 * @typeparam TTechnology The target {@link RaphaelTechnology}.
 */
export interface RaphaelStatic<
    TTechnology extends RaphaelTechnology = "SVG" | "VML"
    > {
    /**
     * Creates a canvas object on which to draw. You must do this first, as all future calls to drawing methods
     * from this instance will be bound to this canvas.
     *
     * @param container DOM element or its ID which is going to be a parent for drawing surface.
     * @param width Width for the canvas.
     * @param height Height for the canvas.
     * @param callback Callback function which is going to be executed in the context of newly created paper.
     * @return A new raphael paper that can be used for drawing shapes to the canvas.
     */
    (container: HTMLElement | string, width: number, height: number, callback?: (this: RaphaelPaper<TTechnology>) => void): RaphaelPaper<TTechnology>;

    /**
     * Creates a canvas object on which to draw. You must do this first, as all future calls to drawing methods
     * from this instance will be bound to this canvas.
     *
     * @param x x coordinate of the viewport where the canvas is created.
     * @param y y coordinate of the viewport where the canvas is created.
     * @param width Width for the canvas.
     * @param height Height for the canvas.
     * @param callback Callback function which is going to be executed in the context of newly created paper.
     * @return A new raphael paper that can be used for drawing shapes to the canvas.
     */
    (x: number, y: number, width: number, height: number, callback?: (this: RaphaelPaper<TTechnology>) => void): RaphaelPaper<TTechnology>;

    /**
     * Creates a canvas object on which to draw. You must do this first, as all future calls to drawing methods
     * from this instance will be bound to this canvas.
     *
     * @param The first 3 or 4 elements in the array are equal to `[containerID, width, height]` or
     * `[x, y, width, height]`. The rest are element descriptions in format `{type: type, <attributes>}`.
     * @param callback Callback function which is going to be executed in the context of newly created paper.
     * @return A new raphael paper that can be used for drawing shapes to the canvas.
     */
    (all: RaphaelConstructionOptionsArray4 | RaphaelConstructionOptionsArray5, callback?: (this: RaphaelPaper<TTechnology>) => void): RaphaelSet<TTechnology>;

    /**
     * @param onReadyCallback Function that is going to be called on DOM ready event. You can also subscribe to this
     * event via Eve's `DOMLoad` event. In this case the method returns `undefined`.
     * @return A new raphael paper that can be used for drawing shapes to the canvas.
     */
    (onReadyCallback?: (this: Window) => void): RaphaelPaper<TTechnology>;

    /**
     * Creates a canvas object on which to draw. You must do this first, as all future calls to drawing methods
     * from this instance will be bound to this canvas.
     *
     * @param container DOM element or its ID which is going to be a parent for drawing surface.
     * @param width Width for the canvas.
     * @param height Height for the canvas.
     * @param callback Callback function which is going to be executed in the context of newly created paper.
     * @return A new raphael paper that can be used for drawing shapes to the canvas.
     */
    new(container: HTMLElement | string, width: number, height: number, callback?: (this: RaphaelPaper<TTechnology>) => void): RaphaelPaper<TTechnology>;

    /**
     * Creates a canvas object on which to draw. You must do this first, as all future calls to drawing methods
     * from this instance will be bound to this canvas.
     *
     * @param x x coordinate of the viewport where the canvas is created.
     * @param y y coordinate of the viewport where the canvas is created.
     * @param width Width for the canvas.
     * @param height Height for the canvas.
     * @param callback Callback function which is going to be executed in the context of newly created paper.
     * @return A new raphael paper that can be used for drawing shapes to the canvas.
     */
    new(x: number, y: number, width: number, height: number, callback?: (this: RaphaelPaper<TTechnology>) => void): RaphaelPaper<TTechnology>;

    /**
     * Creates a canvas object on which to draw. You must do this first, as all future calls to drawing methods
     * from this instance will be bound to this canvas.
     *
     * @param The first 3 or 4 elements in the array are equal to `[containerID, width, height]` or
     * `[x, y, width, height]`. The rest are element descriptions in format `{type: type, <attributes>}`.
     * @param callback Callback function which is going to be executed in the context of newly created paper.
     * @return A new raphael paper that can be used for drawing shapes to the canvas.
     */
    new(all: RaphaelConstructionOptionsArray4 | RaphaelConstructionOptionsArray5, callback?: (this: RaphaelPaper<TTechnology>) => void): RaphaelSet<TTechnology>;

    /**
     * @param onReadyCallback Function that is going to be called on DOM ready event. You can also subscribe to this
     * event via Eve's `DOMLoad` event. In this case the method returns `undefined`.
     * @return A new raphael paper that can be used for drawing shapes to the canvas.
     */
    new(onReadyCallback?: (this: Window) => void): RaphaelPaper<TTechnology>;

    /**
     * Returns angle between two or three points
     * @param x1 x coordinate of first point
     * @param y1 y coordinate of first point
     * @param x2 x coordinate of second point
     * @param y2 y coordinate of second point
     * @param x3 x coordinate of third point
     * @param y3 y coordinate of third point
     * @return The angle in degrees.
     */
    angle(x1: number, y1: number, x2: number, y2: number, x3?: number, y3?: number): number;

    /**
     * Creates an animation object that can be passed to the {@link RaphaelElement.animate} or
     * {@link RaphaelElement.animateWith} methods. See also the {@link RaphaelAnimation.delay} and
     * {@link RaphaelAnimation.repeat} methods.
     * @param params
     * @param milliseconds Number of milliseconds for animation to run
     * @param easing easing type. Accept one of {@link RaphaelStatic.easing_formulas} or CSS format:
     * `cubic‐bezier(XX, XX, XX, XX)`
     * @param callback Callback function. Will be called at the end of animation.
     */
    animation(
        params: Partial<RaphaelAttributes>,
        milliseconds: number, easing?: RaphaelBuiltinEasingFormula | RaphaelCustomEasingFormula,
        callback?: (this: RaphaelElement<TTechnology>) => void
    ): RaphaelAnimation;

    /**
     * Parses the color string and returns object with all values for the given color.
     * @param color Color string in one of the supported formats, see {@link RaphaelStatic.getRGB}.
     * @return Combined RGB & HSB object with the information about the color.
     */
    color(color: string): RaphaelPotentialFailure<RaphaelFullComponentInfo>;

    /**
     * Transform angle from radians to degrees.
     * @param radians An angle in radians.
     * @return The given angle in degrees.
     */
    deg(radians: number): number;

    /**
     * Object that contains easing formulas for animation. You could extend it with your own. By default it has
     * the easing methods as defined in {@link RaphaelBuiltinEasingFormula}.
     */
    easing_formulas: Record<RaphaelBuiltinEasingFormula | RaphaelCustomEasingFormula, RaphaelEasingFormula>;

    /**
     * You can add your own method to elements. This is useful when you want to hack default functionality or want
     * to wrap some common transformation or attributes in one method. In contrast to canvas methods, you can
     * redefine element method at any time. Expending element methods would not affect set.
     *
     * ```javascript
     * Raphael.el.red = function () {
     *   this.attr({fill: "#f00"});
     * };
     * // then use it
     * paper.circle(100, 100, 20).red();
     * ```
     *
     * __Note to TypeScript users__
     *
     * To declare your plugin, you should extend the `raphael` module and add to the {@link RaphaelElement}:
     *
     * ```typescript
     * import { RaphaelElement } from "raphael"
     * declare module "raphael" {
     *   interface RaphaelElement {
     *     red(): void;
     *     colored(r: number, g: number, b: number): this;
     *    }
     * }
     * ```
     */
    el: RaphaelElementPluginRegistry<TTechnology>;

    /**
     * Utility method to find dot coordinates on the given cubic bezier curve at the given position.
     * @param startPointX x of the first point of the curve.
     * @param startPointY y of the first point of the curve.
     * @param anchor1X x of the first anchor of the curve.
     * @param anchor1Y y of the first anchor of the curve.
     * @param anchor2X x of the second anchor of the curve.
     * @param anchor2Y y of the second anchor of the curve.
     * @param endPointX x of the second point of the curve.
     * @param endPointY y of the second point of the curve.
     * @param positionOnCurve Position on the curve, between `0` and `1`.
     * @return The point at the specified cubic bezier curve at the given position.
     */
    findDotsAtSegment(
        startPointX: number, startPointY: number,
        anchor1X: number, anchor1Y: number,
        anchor2X: number, anchor2Y: number,
        endPointX: number, endPointY: number,
        positionOnCurve: number
    ): RaphaelCubicBezierCurvePointInfo;

    /**
     * You can add your own method to the canvas. For example if you want to draw a pie chart, you can create your
     * own pie chart function and ship it as a Raphaël plugin. To do this you need to extend the `Raphael.fn`
     * object.
     *
     * Please note that you can create your own namespaces inside the fn object, methods will be run in the context
     * of the canvas. You should alter the fn object before a Raphaël instance is created, otherwise it will take no
     * effect.
     *
     * ```javascript
     * Raphael.fn.arrow = function (x1, y1, x2, y2, size) {
     *   return this.path( ... );
     * };
     * // or create namespace
     * Raphael.fn.mystuff = {
     *   arrow: function () {…},
     *   star: function () {…},
     *   // etc...
     * };
     *
     * var paper = Raphael(10, 10, 630, 480);
     * // then use it
     * paper.arrow(10, 10, 30, 30, 5).attr({fill: "#f00"});
     * paper.mystuff.arrow();
     * paper.mystuff.star();
     * ```
     *
     * __Note to TypeScript users__
     *
     * To declare your plugin, you should extend the `raphael` module and add to the {@link RaphaelPaper}:
     *
     * ```typescript
     * import { RaphaelPaper, RaphaelPath } from "raphael"
     * declare module "raphael" {
     *   interface RaphaelPaper {
     *     arrow(x1: number, y1: number, x2: number, y2: number, size: number): RaphaelPath;
     *     mystuff: {
     *       arrow(flag: boolean): number;
     *       star(): void;
     *     };
     *   }
     * }
     * ```
     */
    fn: RaphaelPaperPluginRegistry<TTechnology>;

    /**
     * Simple format function. Replaces construction of type `{<number>}` with the corresponding argument.
     *
     * ```javascript
     * var x = 10;
     * var y = 20;
     * var width = 40;
     * var height = 50;
     *
     * // this will draw a rectangular shape equivalent to "M10,20h40v50h-40z"
     * paper.path(Raphael.format("M{1},{2}h{3}v{4}h{5}z", x, y, width, height, -width));
     * ```
     *
     * See also {@link format}.
     *
     * @param token String to format.
     * @param parameters Arguments that will be treated as parameters for replacement. They will be coerced to type
     * `string`.
     * @return The formatted string.
     */
    format(token: string, ...parameters: any[]): string;

    /**
     * A little bit more advanced format function than {@link format}. Replaces construction of type `{<name>}`
     * with the corresponding argument.
     *
     * ```javascript
     * // this will draw a rectangular shape equivalent to "M10,20h40v50h-40z"
     * paper.path(Raphael.format("M{x},{y}h{dim.width}v{dim.height}h{dim['negative width']}z", {
     *   x: 10,
     *   y: 20,
     *   dim: {
     *     width: 40,
     *     height: 50,
     *     "negative width": -40
     *   }
     * }));
     * ```
     *
     * @param token String to format.
     * @param json Object with properties that will be used as a replacement.
     * @return The formatted string.
     */
    fullfill(token: string, json: Record<string, any>): string;

    /**
     * On each call returns next colour in the spectrum. Also contains a utility method to reset it back to red via
     * {@link RaphaelStaticGetColor.reset|Raphael.getColor.reset}
     */
    getColor: RaphaelStaticGetColor;

    /**
     * Return coordinates of the point located at the given length on the given path.
     * @param path SVG path string.
     * @param length Length at which to get the point.
     * @return The point located at the given length on the given path.
     */
    getPointAtLength(path: string, length: number): RaphaelCartesianCurvePoint;

    /**
     * Parses a color string as an RGB object. Takes a color string in one of the following formats:
     *
     * - Colour name (`red`, `green`, `cornflowerblue`, etc)
     * - `#RGB` - shortened HTML colour: (`#000`, `#fc0`, etc)
     * - `#RRGGBB` - full length HTML colour: (`#000000`, `#bd2300`)
     * - `rgb(RRR, GGG, BBB)` - red, green and blue channels' values: (`rgb(200, 100, 0)`)
     * - `rgb(RRR%, GGG%, BBB%)` - same as above, but in %: (`rgb(100%, 175%, 0%)`)
     * - `hsb(HHH, SSS, BBB)` - hue, saturation and brightness values: (`hsb(0.5, 0.25, 1)`)
     * - `hsb(HHH%, SSS%, BBB%)` - same as above, but in %
     * - `hsl(HHH, SSS, LLL)` - same as hsb
     * - `hsl(HHH%, SSS%, LLL%)` - same as hsb
     *
     * @param color Color string to be parsed.
     * @return The RGB components of the parsed color string.
     */
    getRGB(color: string): RaphaelPotentialFailure<RaphaelRgbComponentInfo>;

    /**
     * Return sub path of a given path from given length to given length.
     * @param path SVG path string
     * @param from Position of the start of the segment
     * @param to Position of the end of the segment
     * @return Path string for the segment.
     */
    getSubpath(path: string, from: number, to: number): string;

    /**
     * Returns length of the given path in pixels.
     * @param path SVG path string.
     * @return The length of the path.
     */
    getTotalLength(path: string): number;

    /**
     * Converts HSB values to hex representation of the color.
     * @param hue Hue channel
     * @param saturation Saturation channel.
     * @param brightness Brightness channel.
     * @return Hex representation of the color.
     */
    hsb(hue: number, saturation: number, brightness: number): string;

    /**
     * Converts HSB values to RGB object.
     * @param hue Hue channel.
     * @param saturation Saturation channel.
     * @param brightness Brightness channel.
     * @return The color in the RGB color system.
     */
    hsb2rgb(hue: number, saturation: number, brightness: number): RaphaelRgbComponentInfo;

    /**
     * Converts HSL values to hex representation of the colour.
     * @param hue Hue channel.
     * @param saturation Saturation channel.
     * @param luminosity Luminosity channel.
     * @return Hex representation of the color.
     */
    hsl(hue: number, saturation: number, luminosity: number): string;

    /**
     * Converts HSL values to RGB object.
     * @param hue Hue channel.
     * @param saturation Saturation channel.
     * @param luminosity Luminosity channel.
     * @return The color in the RGB color system.
     */
    hsl2rgb(hue: number, saturation: number, luminosity: number): RaphaelRgbComponentInfo;

    /**
     * Handy replacement for typeof operator.
     * @param object An object whose type to check.
     * @param type Type to check.
     * @return `true` if the object is of the given type, or `false` otherwise.
     */
    is(object: any, type: "undefined"): object is undefined;

    /**
     * Handy replacement for typeof operator.
     * @param object An object whose type to check.
     * @param type Type to check.
     * @return `true` if the object is of the given type, or `false` otherwise.
     */
    is(object: any, type: "null"): object is null;

    /**
     * Handy replacement for typeof operator.
     * @param object An object whose type to check.
     * @param type Type to check.
     * @return `true` if the object is of the given type, or `false` otherwise.
     */
    is(object: any, type: "boolean"): object is boolean;

    /**
     * Handy replacement for typeof operator.
     * @param object An object whose type to check.
     * @param type Type to check.
     * @return `true` if the object is of the given type, or `false` otherwise.
     */
    is(object: any, type: "number"): object is number;

    /**
     * Handy replacement for typeof operator.
     * @param object An object whose type to check.
     * @param type Type to check.
     * @return `true` if the object is of the given type, or `false` otherwise.
     */
    is(object: any, type: "symbol"): object is symbol;

    /**
     * Handy replacement for typeof operator.
     * @param object An object whose type to check.
     * @param type Type to check.
     * @return `true` if the object is of the given type, or `false` otherwise.
     */
    is(object: any, type: "string"): object is string;

    /**
     * Handy replacement for typeof operator.
     * @param object An object whose type to check.
     * @param type Type to check.
     * @return `true` if the object is of the given type, or `false` otherwise.
     */
    is(object: any, type: "object"): object is object | null;

    /**
     * Handy replacement for typeof operator.
     * @param object An object whose type to check.
     * @param type Type to check.
     * @return `true` if the object is of the given type, or `false` otherwise.
     */
    is(object: any, type: "function"): object is (...args: any[]) => any;

    /**
     * Handy replacement for typeof operator.
     * @param object An object whose type to check.
     * @param type Type to check.
     * @return `true` if the object is of the given type, or `false` otherwise.
     */
    is(object: any, type: "array"): object is any[];

    /**
     * Handy replacement for typeof operator.
     * @param object An object whose type to check.
     * @param type Type to check for.
     * @return `true` if the object is of the given type, or `false` otherwise.
     */
    is(object: any, type: string): boolean;

    /**
     * Utility method for creating a 2x3 matrix based on given parameters:
     *
     * ```
     * +---+---+---+
     * | a | c | e |
     * | b | d | f |
     * +---+---+---+
     * ```
     *
     * @param a The matrix component at the first row, first column.
     * @param b The matrix component at the second row, first column.
     * @param c The matrix component at the first row, second column.
     * @param d The matrix component at the second row, second column.
     * @param e The matrix component at the third row, first column.
     * @param f The matrix component at the third row, second column.
     * @return A matrix based on the given parameters.
     */
    matrix(a: number, b: number, c: number, d: number, e: number, f: number): RaphaelMatrix;

    /**
     * If you want to leave no trace of Raphaël (Well, Raphaël creates only one global variable `Raphael`, but
     * anyway.) You can use ninja method. Beware, that in this case plugins could stop working, because they are
     * depending on the existence of the global variable.
     * @return The Raphael object with all available methods.
     */
    ninja(): this;

    /**
     * Utility method that parses given path string into an array of arrays of path segments.
     * @param pathString Path string or array of segments (in the last case it will be returned straight away).
     * @return Array of path segments.
     */
    parsePathString(pathString: string | RaphaelPathSegment | ReadonlyArray<RaphaelPathSegment>): RaphaelPathSegment[];

    /**
     * Utility method that parses given path string into an array of transformations.
     * @param transformString Transform string or array of transformations (in the last case it will be returned
     * straight away).
     * @return Array of transformations.
     */
    parseTransformString(transformString: string | RaphaelTransformSegment | ReadonlyArray<RaphaelTransformSegment>): RaphaelTransformSegment[];

    /**
     * Utility method that converts path to a new path where all segments are cubic bezier curves.
     * @param pathString A path string or array of segments.
     * @return Array of path segments.
     */
    path2curve(pathString: string | RaphaelPathSegment | ReadonlyArray<RaphaelPathSegment>): RaphaelPathSegment[];

    /**
     * Utility method that converts a path to its relative form.
     * @param pathString A path string or array of segments.
     * @return Array of path segments.
     */
    pathToRelative(pathString: string | RaphaelPathSegment | ReadonlyArray<RaphaelPathSegment>): RaphaelPathSegment[];

    /**
     * Transform angle from degrees to radians.
     * @param degrees An angle in degrees.
     * @return The given angle in radians.
     */
    rad(degrees: number): number;

    /**
     * Adds given font to the registered set of fonts for Raphaël. Should be used as an internal call from within
     * Cufón's font file. Returns original parameter, so it could be used with chaining.
     *
     * See http://wiki.github.com/sorccu/cufon/about
     *
     * @param font The font to register.
     * @return The font you passed in
     */
    registerFont(font: RaphaelFont): RaphaelFont;

    /**
     * Converts RGB values to hex representation of the colour.
     * @param red The red channel.
     * @param green The green channel.
     * @param blue The blue channel.
     * @return Hex representation of the color.
     */
    rgb(red: number, green: number, blue: number): string;

    /**
     * Converts RGB values to HSB values.
     * @param red The red channel.
     * @param green The green channel.
     * @param blue The blue channel.
     * @return The given color in the HSB color format.
     */
    rgb2hsb(red: number, green: number, blue: number): RaphaelHsbComponentInfo;

    /**
     * Converts RGB values to HSB values.
     * @param red The red channel.
     * @param green The green channel.
     * @param blue The blue channel.
     * @return The given color in the HSL color format.
     */
    rgb2hsl(red: number, green: number, blue: number): RaphaelHslComponentInfo;

    /**
     * Used when you need to draw in IFRAME. Switches window to the iframe one.
     * @param newWindow The new window object
     */
    setWindow(newWindow: Window): void;

    /**
     * Snaps the given value to the given grid.
     * @param values Array of grid values or step of the grid.
     * @param value Value to adjust.
     * @param tolerance Tolerance for snapping. Default is `10`.
     * @return The adjusted value.
     */
    snapTo(values: number | ReadonlyArray<number>, value: number, tolerance?: number): number;

    /**
     * You can add your own method to elements and sets. It is wise to add a set method for each element method you
     * added, so you will be able to call the same method on sets too. See also {@link el}.
     *
     * ```javascript
     * Raphael.el.red = function() {
     *   this.attr({fill: "#f00"});
     * };
     *
     * Raphael.st.red = function() {
     *   this.forEach(function () {
     *     this.red();
     *   });
     * };
     *
     * // then use it
     * paper.set(paper.circle(100, 100, 20), paper.circle(110, 100, 20)).red();
     * ```
     *
     * __Note to TypeScript users__
     *
     * To declare your plugin, you should extend the `raphael` module and add to the {@link RaphaelSet}:
     *
     * ```typescript
     * import { RaphaelSet } from "raphael"
     * declare module "raphael" {
     *   interface RaphaelSet {
     *     green(): void;
     *     colorized(r: number, g: number, b: number): this;
     *   }
     * }
     * ```
     */
    st: RaphaelSetPluginRegistry<TTechnology>;

    /**
     * `true` if browser supports SVG (scalable vector graphics), or `false` otherwise.
     */
    svg: boolean;

    /**
     * The technology used by Raphaël for the graphics.
     */
    type: TTechnology;

    /**
     * True if browser supports VML (vector markup language).
     */
    vml: boolean;
}

declare const R: RaphaelStatic;
export default R;

declare global {
    /**
     * The global entry point for all features offered by the Raphaël library.
     *
     * Raphaël is a small JavaScript library that should simplify your work with vector graphics on the web. If you want
     * to create your own specific chart or image crop and rotate widget, for example, you can achieve it simply and
     * easily with this library.
     *
     * You use this library via the globally available {@link RaphaelStatic|Raphael} object:
     *
     * ```javascript
     * // Creates canvas 320 × 200 at 10, 50
     * var paper = Raphael(10, 50, 320, 200);
     *
     * // Creates circle at x = 50, y = 40, with radius 10
     * var circle = paper.circle(50, 40, 10);
     *
     * // Sets the fill attribute of the circle to red (#f00)
     * circle.attr("fill", "#f00");
     *
     * // Sets the stroke attribute of the circle to white
     * circle.attr("stroke", "#fff");
     * ```
     *
     * See https://dmitrybaranovskiy.github.io/raphael/
     */
    const Raphael: RaphaelStatic;
}
