// This module does not really exist.
// This is just to get `export as namespace fabric;` to work and to be re-exportable from `index.d.ts`.

export as namespace fabric;

export const isLikelyNode: boolean;
export const isTouchSupported: boolean;
export const version: string;
export const iMatrix: number[];
export let textureSize: number;
export let copiedText: string;
export let copiedTextStyle: any[];
export let charWidthsCache: {
    [key: string]: { // example: montserrat
        [key: string]: { // example: normal_normal
            [key: string]: number; // example: A: 286
        };
    };
};

/////////////////////////////////////////////////////////////
// fabric Functions
/////////////////////////////////////////////////////////////

export function createCanvasForNode(width: number, height: number): Canvas;

// Parse
// ----------------------------------------------------------
/**
 * Creates markup containing SVG referenced elements like patterns, gradients etc.
 * @param canvas instance of fabric.Canvas
 */
export function createSVGRefElementsMarkup(canvas: StaticCanvas): string;
/**
 * Creates markup containing SVG font faces
 * @param objects Array of fabric objects
 */
export function createSVGFontFacesMarkup(objects: Object[]): string;
/**
 * Takes string corresponding to an SVG document, and parses it into a set of fabric objects
 * @param [reviver] Method for further parsing of SVG elements, called after each fabric object created.
 */
export function loadSVGFromString(
    string: string,
    callback: (results: Object[], options: any) => void,
    reviver?: Function,
): void;
/**
 * Takes url corresponding to an SVG document, and parses it into a set of fabric objects.
 * Note that SVG is fetched via XMLHttpRequest, so it needs to conform to SOP (Same Origin Policy)
 * @param {String} url URL to get a SVG from
 * @param {Function} callback Callback is invoked when svg has been loaded
 * @param {Function} [reviver] Method for further parsing of SVG elements, called after each fabric object created.
 * @param {Object} [options] options for crossOrigin
 * @param {String} [options.crossOrigin] crossOrigin settings
 */
export function loadSVGFromURL(
    url: string,
    callback: (results: Object[], options: any) => void,
    reviver?: Function,
    options?: { crossOrigin?: string | undefined },
): void;
/**
 * Returns CSS rules for a given SVG document
 * @param doc SVG document to parse
 */
export function getCSSRules(doc: SVGElement): any;

export function parseElements(elements: any[], callback: Function, options: any, reviver?: Function): void;
/**
 * Parses "points" attribute, returning an array of values
 * @param points points attribute string
 */
export function parsePointsAttribute(points: string): any[];
/**
 * Parses "style" attribute, retuning an object with values
 * @param element Element to parse
 */
export function parseStyleAttribute(element: SVGElement): any;
/**
 * Transforms an array of svg elements to corresponding fabric.* instances
 * @param elements Array of elements to parse
 * @param callback Being passed an array of fabric instances (transformed from SVG elements)
 * @param [options] Options object
 * @param [reviver] Method for further parsing of SVG elements, called after each fabric object created.
 */
export function parseElements(elements: SVGElement[], callback: Function, options?: any, reviver?: Function): void;
/**
 * Returns an object of attributes' name/value, given element and an array of attribute names;
 * Parses parent "g" nodes recursively upwards.
 * @param element Element to parse
 * @param attributes Array of attributes to parse
 */
export function parseAttributes(element: HTMLElement, attributes: string[], svgUid?: string): { [key: string]: string };
/**
 * Parses an SVG document, returning all of the gradient declarations found in it
 * @param doc SVG document to parse
 */
export function getGradientDefs(doc: SVGElement): { [key: string]: any };
/**
 * Parses a short font declaration, building adding its properties to a style object
 * @param value font declaration
 * @param oStyle definition
 */
export function parseFontDeclaration(value: string, oStyle: any): void;
/**
 * Parses an SVG document, converts it to an array of corresponding fabric.* instances and passes them to a callback
 * @param doc SVG document to parse
 * @param callback Callback to call when parsing is finished; It's being passed an array of elements (parsed from a document).
 * @param [reviver] Method for further parsing of SVG elements, called after each fabric object created.
 */
export function parseSVGDocument(
    doc: SVGElement,
    callback: (results: Object[], options: any) => void,
    reviver?: Function,
): void;
/**
 * Parses "transform" attribute, returning an array of values
 * @param attributeValue String containing attribute value
 */
export function parseTransformAttribute(attributeValue: string): number[];

// fabric Log
// ---------------
/**
 * Wrapper around `console.log` (when available)
 */
export function log(...values: any[]): void;
/**
 * Wrapper around `console.warn` (when available)
 */
export function warn(...values: any[]): void;

///////////////////////////////////////////////////////////////////////////////
// Data Object Interfaces - These interface are not specific part of fabric,
// They are just helpful for for defining function parameters
//////////////////////////////////////////////////////////////////////////////
interface IDataURLOptions {
    /**
     * The format of the output image. Either "jpeg" or "png"
     */
    format?: string | undefined;
    /**
     * Quality level (0..1). Only used for jpeg
     */
    quality?: number | undefined;
    /**
     * Multiplier to scale by
     */
    multiplier?: number | undefined;
    /**
     * Cropping left offset. Introduced in v1.2.14
     */
    left?: number | undefined;
    /**
     * Cropping top offset. Introduced in v1.2.14
     */
    top?: number | undefined;
    /**
     * Cropping width. Introduced in v1.2.14
     */
    width?: number | undefined;
    /**
     * Cropping height. Introduced in v1.2.14
     */
    height?: number | undefined;
    enableRetinaScaling?: boolean | undefined;
    withoutTransform?: boolean | undefined;
    withoutShadow?: boolean | undefined;
}

interface IEvent<E extends Event = Event> {
    e: E;
    target?: Object | undefined;
    subTargets?: Object[] | undefined;
    selected?: Object[] | undefined;
    deselected?: Object[] | undefined;
    action?: string | undefined;
    button?: number | undefined;
    isClick?: boolean | undefined;
    pointer?: Point | undefined;
    absolutePointer?: Point | undefined;
    transform?: Transform | undefined;
    currentTarget?: Object | undefined;
    currentSubTargets?: Object[] | undefined;
}

interface IFillOptions {
    /**
     * options.source Pattern source
     */
    source: string | HTMLImageElement;
    /**
     * Repeat property of a pattern (one of repeat, repeat-x, repeat-y or no-repeat)
     */
    repeat?: string | undefined;
    /**
     * Pattern horizontal offset from object's left/top corner
     */
    offsetX?: number | undefined;
    /**
     * Pattern vertical offset from object's left/top corner
     */
    offsetY?: number | undefined;
}

interface IToSVGOptions {
    /**
     * If true xml tag is not included
     */
    suppressPreamble?: boolean | undefined;
    /**
     * SVG viewbox object
     */
    viewBox?: IViewBox | undefined;
    /**
     * Encoding of SVG output
     */
    encoding?: string | undefined;
    /**
     * desired width of svg with or without units
     */
    width?: number | string | undefined;
    /**
     * desired height of svg with or without units
     */
    height?: number | string | undefined;
}

interface IViewBox {
    /**
     * x-cooridnate of viewbox
     */
    x: number;
    /**
     * y-coordinate of viewbox
     */
    y: number;
    /**
     * Width of viewbox
     */
    width: number;
    /**
     * Height of viewbox
     */
    height: number;
}

///////////////////////////////////////////////////////////////////////////////
// Mixins Interfaces
//////////////////////////////////////////////////////////////////////////////
interface ICollection<T> {
    _objects: Object[];

    /**
     * Adds objects to collection, then renders canvas (if `renderOnAddRemove` is not `false`)
     * Objects should be instances of (or inherit from) fabric.Object
     * @param object Zero or more fabric instances
     */
    add(...object: Object[]): T;

    /**
     * Inserts an object into collection at specified index, then renders canvas (if `renderOnAddRemove` is not `false`)
     * An object should be an instance of (or inherit from) fabric.Object
     * @param object Object to insert
     * @param index Index to insert object at
     * @param nonSplicing When `true`, no splicing (shifting) of objects occurs
     * @return thisArg
     * @chainable
     */
    insertAt(object: Object, index: number, nonSplicing: boolean): T;

    /**
     * Removes objects from a collection, then renders canvas (if `renderOnAddRemove` is not `false`)
     * @param object Zero or more fabric instances
     * @return thisArg
     * @chainable
     */
    remove(...object: Object[]): T;

    /**
     * Executes given function for each object in this group
     * @param context Context (aka thisObject)
     * @return thisArg
     */
    forEachObject(callback: (element: Object, index: number, array: Object[]) => void, context?: any): T;

    /**
     * Returns an array of children objects of this instance
     * Type parameter introduced in 1.3.10
     * @param [type] When specified, only objects of this type are returned
     */
    getObjects(type?: string): Object[];

    /**
     * Returns object at specified index
     * @return thisArg
     */
    item(index: number): T;

    /**
     * Returns true if collection contains no objects
     * @return true if collection is empty
     */
    isEmpty(): boolean;

    /**
     * Returns a size of a collection (i.e: length of an array containing its objects)
     * @return Collection size
     */
    size(): number;

    /**
     * Returns true if collection contains an object
     * @param object Object to check against
     * @return `true` if collection contains an object
     */
    contains(object: Object): boolean;

    /**
     * Returns number representation of a collection complexity
     * @return complexity
     */
    complexity(): number;
}

type EventName =
    | "object:modified"
    | "object:moving"
    | "object:scaling"
    | "object:rotating"
    | "object:skewing"
    | "object:resizing"
    | "object:selected"
    | "object:added"
    | "object:removed"
    | "group:selected"
    | "before:transform"
    | "before:selection:cleared"
    | "selection:cleared"
    | "selection:created"
    | "selection:updated"
    | "mouse:up"
    | "mouse:down"
    | "mouse:move"
    | "mouse:up:before"
    | "mouse:down:before"
    | "mouse:move:before"
    | "mouse:dblclick"
    | "mouse:wheel"
    | "mouse:over"
    | "mouse:out"
    | "drop:before"
    | "drop"
    | "dragover"
    | "dragenter"
    | "dragleave"
    | "before:render"
    | "after:render"
    | "before:path:created"
    | "path:created"
    | "canvas:cleared"
    | "moving"
    | "scaling"
    | "rotating"
    | "skewing"
    | "resizing"
    | "mouseup"
    | "mousedown"
    | "mousemove"
    | "mouseup:before"
    | "mousedown:before"
    | "mousemove:before"
    | "mousedblclick"
    | "mousewheel"
    | "mouseover"
    | "mouseout"
    | "drop:before"
    | "drop"
    | "dragover"
    | "dragenter"
    | "dragleave";

interface IObservable<T> {
    /**
     * Observes specified event
     * @param eventName Event name (eg. 'after:render')
     * @param handler Function that receives a notification when an event of the specified type occurs
     */
    on(eventName: EventName, handler: (e: IEvent<MouseEvent>) => void): T;
    on(eventName: "mouse:wheel", handler: (e: IEvent<WheelEvent>) => void): T;
    on(eventName: string, handler: (e: IEvent) => void): T;

    /**
     * Stops event observing for a particular event handler. Calling this method
     * without arguments removes all handlers for all events
     * @param eventName Event name (eg. 'after:render') or object with key/value pairs (eg. {'after:render': handler, 'selection:cleared': handler})
     * @param handler Function to be deleted from EventListeners
     */
    off(eventName?: string | any, handler?: (e: IEvent) => void): T;

    /**
     * Fires event with an optional options object
     * @param {String} eventName Event name to fire
     * @param {Object} [options] Options object
     * @return {Self} thisArg
     * @chainable
     */
    fire(eventName: string, options?: any): T;
}

interface Callbacks {
    /** Invoked on completion */
    onComplete?: Function | undefined;
    /** Invoked on every step of animation */
    onChange?: Function | undefined;
}

// animation mixin
// ----------------------------------------------------
interface ICanvasAnimation<T> {
    FX_DURATION: number;
    /**
     * Centers object horizontally with animation.
     * @param object Object to center
     */
    fxCenterObjectH(object: Object, callbacks?: Callbacks): T;

    /**
     * Centers object vertically with animation.
     * @param object Object to center
     */
    fxCenterObjectV(object: Object, callbacks?: Callbacks): T;

    /**
     * Same as `fabric.Canvas#remove` but animated
     * @param object Object to remove
     * @chainable
     */
    fxRemove(object: Object): T;

    /**
     * Same as {@link fabric.Canvas.prototype.straightenObject}, but animated
     * @param {fabric.Object} object Object to straighten
     * @return {fabric.Canvas} thisArg
     * @chainable
     */
    fxStraightenObject(object: Object): T;
}
interface IObjectAnimation<T> {
    /**
     * Animates object's properties
     * object.animate('left', ..., {duration: ...});
     * @param property Property to animate
     * @param value Value to animate property
     * @param options The animation options
     */
    animate(property: string, value: number | string, options?: IAnimationOptions): Object;
    /**
     * Animates object's properties
     * object.animate({ left: ..., top: ... }, { duration: ... });
     * @param properties Properties to animate with values to animate to
     * @param options The animation options
     */
    animate(properties: { [key: string]: number | string }, options?: IAnimationOptions): Object;
}
interface IAnimationOptions {
    /**
     * Allows to specify starting value of animatable property (if we don't want current value to be used).
     */
    from?: string | number | undefined;
    /**
     * Defaults to 500 (ms). Can be used to change duration of an animation.
     */
    duration?: number | undefined;
    /**
     * Callback; invoked on every value change
     */
    onChange?: Function | undefined;
    /**
     * Callback; invoked when value change is completed
     */
    onComplete?: Function | undefined;

    /**
     * Easing function. Default: fabric.util.ease.easeInSine
     */
    easing?: Function | undefined;
    /**
     *  Value to modify the property by, default: end - start
     */
    by?: number | undefined;
}

///////////////////////////////////////////////////////////////////////////////
// General Fabric Interfaces
//////////////////////////////////////////////////////////////////////////////
export class Color {
    /**
     * Color class
     * The purpose of Color is to abstract and encapsulate common color operations;
     * @param color optional in hex or rgb(a) format
     */
    constructor(color?: string);

    /**
     * Returns source of this color (where source is an array representation; ex: [200, 200, 100, 1])
     */
    getSource(): number[];

    /**
     * Sets source of this color (where source is an array representation; ex: [200, 200, 100, 1])
     */
    setSource(source: number[]): void;

    /**
     * Returns color represenation in RGB format ex: rgb(0-255,0-255,0-255)
     */
    toRgb(): string;

    /**
     * Returns color represenation in RGBA format ex: rgba(0-255,0-255,0-255,0-1)
     */
    toRgba(): string;

    /**
     * Returns color represenation in HSL format ex: hsl(0-360,0%-100%,0%-100%)
     */
    toHsl(): string;

    /**
     * Returns color represenation in HSLA format ex: hsla(0-360,0%-100%,0%-100%,0-1)
     */
    toHsla(): string;

    /**
     * Returns color represenation in HEX format ex: FF5555
     */
    toHex(): string;

    /**
     * Returns color representation in HEXA format
     * @return {String} ex: FF5555CC
     */
    toHexa(): string;

    /**
     * Gets value of alpha channel for this color
     */
    getAlpha(): number;

    /**
     * Sets value of alpha channel for this color
     * @param alpha Alpha value 0-1
     */
    setAlpha(alpha: number): void;

    /**
     * Transforms color to its grayscale representation
     */
    toGrayscale(): Color;

    /**
     * Transforms color to its black and white representation
     */
    toBlackWhite(threshold: number): Color;
    /**
     * Overlays color with another color
     */
    overlayWith(otherColor: string | Color): Color;

    /**
     * Returns new color object, when given a color in RGB format
     * @param color Color value ex: rgb(0-255,0-255,0-255)
     */
    static fromRgb(color: string): Color;
    /**
     * Returns new color object, when given a color in RGBA format
     * @param color Color value ex: rgb(0-255,0-255,0-255)
     */
    static fromRgba(color: string): Color;
    /**
     * Returns array represenatation (ex: [100, 100, 200, 1]) of a color that's in RGB or RGBA format
     * @param color Color value ex: rgb(0-255,0-255,0-255), rgb(0%-100%,0%-100%,0%-100%)
     */
    static sourceFromRgb(color: string): number[];
    /**
     * Returns new color object, when given a color in HSL format
     * @param color Color value ex: hsl(0-260,0%-100%,0%-100%)
     */
    static fromHsl(color: string): Color;
    /**
     * Returns new color object, when given a color in HSLA format
     * @param color Color value ex: hsl(0-260,0%-100%,0%-100%)
     */
    static fromHsla(color: string): Color;
    /**
     * Returns array represenatation (ex: [100, 100, 200, 1]) of a color that's in HSL or HSLA format.
     * @param color Color value ex: hsl(0-360,0%-100%,0%-100%) or hsla(0-360,0%-100%,0%-100%, 0-1)
     */
    static sourceFromHsl(color: string): number[];
    /**
     * Returns new color object, when given a color in HEX format
     * @param color Color value ex: FF5555
     */
    static fromHex(color: string): Color;

    /**
     * Returns array represenatation (ex: [100, 100, 200, 1]) of a color that's in HEX format
     * @param color ex: FF5555
     */
    static sourceFromHex(color: string): number[];
    /**
     * Returns new color object, when given color in array representation (ex: [200, 100, 100, 0.5])
     */
    static fromSource(source: number[]): Color;
    /**
     * Regex matching color in HEX format (ex: #FF5544CC, #FF5555, 010155, aff)
     * @static
     * @field
     */
    static reHex: RegExp;
    /**
     * Regex matching color in HSL or HSLA formats (ex: hsl(200, 80%, 10%), hsla(300, 50%, 80%, 0.5), hsla( 300 , 50% , 80% , 0.5 ))
     * @static
     * @field
     */
    static reHSLa: RegExp;
    /**
     * Regex matching color in RGB or RGBA formats (ex: rgb(0, 0, 0), rgba(255, 100, 10, 0.5), rgba( 255 , 100 , 10 , 0.5 ), rgb(1,1,1), rgba(100%, 60%, 10%, 0.5))
     * @static
     * @field
     */
    static reRGBa: RegExp;
}

interface IGradientOptionsCoords {
    x1?: number | undefined;
    y1?: number | undefined;
    x2?: number | undefined;
    y2?: number | undefined;
    r1?: number | undefined;
    r2?: number | undefined;
}

type IGradientOptionsColorStops = Array<{
    offset: number;
    color: string;
}>;

interface IGradientOptions {
    /**
     * Horizontal offset for aligning gradients coming from SVG when outside pathgroups
     */
    offsetX?: number | undefined;
    /**
     * Vertical offset for aligning gradients coming from SVG when outside pathgroups
     */
    offsetY?: number | undefined;
    type?: string | undefined;
    coords?: IGradientOptionsCoords | undefined;
    /**
     * Color stops object eg. {0:string; 1:string;
     */
    colorStops?: IGradientOptionsColorStops | undefined;
    gradientTransform?: any;
}

interface OGradientOptions {
    type?: string | undefined;
    x1?: number | undefined;
    y1?: number | undefined;
    x2?: number | undefined;
    y2?: number | undefined;
    r1?: number | undefined;
    r2?: number | undefined;
    colorStops?: {
        [key: string]: string;
    } | undefined;
    gradientTransform?: any;
}

export interface Gradient extends IGradientOptions {}
export class Gradient {
    /**
     * Constructor
     * @param {Object} options Options object with type, coords, gradientUnits and colorStops
     * @param {Object} [options.type] gradient type linear or radial
     * @param {Object} [options.gradientUnits] gradient units
     * @param {Object} [options.offsetX] SVG import compatibility
     * @param {Object} [options.offsetY] SVG import compatibility
     * @param {Object[]} options.colorStops contains the colorstops.
     * @param {Object} options.coords contains the coords of the gradient
     * @param {Number} [options.coords.x1] X coordiante of the first point for linear or of the focal point for radial
     * @param {Number} [options.coords.y1] Y coordiante of the first point for linear or of the focal point for radial
     * @param {Number} [options.coords.x2] X coordiante of the second point for linear or of the center point for radial
     * @param {Number} [options.coords.y2] Y coordiante of the second point for linear or of the center point for radial
     * @param {Number} [options.coords.r1] only for radial gradient, radius of the inner circle
     * @param {Number} [options.coords.r2] only for radial gradient, radius of the external circle
     * @return {fabric.Gradient} thisArg
     */
    constructor(options: {
        type?: string | undefined;
        gradientUnits?: any;
        offsetX?: any;
        offsetY?: any;
        colorStops?: IGradientOptionsColorStops | undefined;
        coords?: IGradientOptionsCoords | undefined;
    });
    /**
     * Adds another colorStop
     * @param colorStop Object with offset and color
     */
    addColorStop(colorStop: any): Gradient;
    /**
     * Returns object representation of a gradient
     */
    toObject(propertiesToInclude?: any): any;
    /**
     * Returns SVG representation of an gradient
     * @param {Object} object Object to create a gradient for
     * @return {String} SVG representation of an gradient (linear/radial)
     */
    toSVG(object: any): string;
    /**
     * Returns an instance of CanvasGradient
     * @param ctx Context to render on
     */
    toLive(ctx: CanvasRenderingContext2D): CanvasGradient;
    /**
     * Returns {@link fabric.Gradient} instance from an SVG element
     * @static
     * @param {SVGGradientElement} el SVG gradient element
     * @param {fabric.Object} instance
     * @return {fabric.Gradient} Gradient instance
     * @see http://www.w3.org/TR/SVG/pservers.html#LinearGradientElement
     * @see http://www.w3.org/TR/SVG/pservers.html#RadialGradientElement
     */
    static fromElement(el: SVGGradientElement, instance: Object): Gradient;
}

export class Intersection {
    status?: string | undefined;

    points?: Point[] | undefined;

    constructor(status?: string);
    /**
     * Appends a point to intersection
     */
    appendPoint(point: Point): Intersection;
    /**
     * Appends points to intersection
     */
    appendPoints(points: Point[]): Intersection;
    /**
     * Checks if one line intersects another
     */
    static intersectLineLine(a1: Point, a2: Point, b1: Point, b2: Point): Intersection;
    /**
     * Checks if line intersects polygon
     */
    static intersectLinePolygon(a1: Point, a2: Point, points: Point[]): Intersection;
    /**
     * Checks if polygon intersects another polygon
     */
    static intersectPolygonPolygon(points1: Point[], points2: Point[]): Intersection;
    /**
     * Checks if polygon intersects rectangle
     */
    static intersectPolygonRectangle(points: Point[], r1: Point, r2: Point): Intersection;
}

interface IPatternOptions {
    /**
     * Repeat property of a pattern (one of repeat, repeat-x, repeat-y or no-repeat)
     */
    repeat?: string | undefined;

    /**
     * Pattern horizontal offset from object's left/top corner
     */
    offsetX?: number | undefined;

    /**
     * Pattern vertical offset from object's left/top corner
     */
    offsetY?: number | undefined;
    /**
     * crossOrigin value (one of "", "anonymous", "use-credentials")
     * @see https://developer.mozilla.org/en-US/docs/HTML/CORS_settings_attributes
     */
    crossOrigin?: "" | "anonymous" | "use-credentials" | undefined;
    /**
     * Transform matrix to change the pattern, imported from svgs
     */
    patternTransform?: number[] | undefined;
    /**
     * The source for the pattern
     */
    source: string | HTMLImageElement;
}
export interface Pattern extends IPatternOptions {}
export class Pattern {
    /**
     * Unique identifier
     */
    id: number;

    constructor(options?: IPatternOptions);
    /**
     * Returns object representation of a pattern
     * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
     * @return {Object} Object representation of a pattern instance
     */
    toObject(propertiesToInclude: any): any;
    /**
     * Returns SVG representation of a pattern
     * @param {fabric.Object} object
     * @return {String} SVG representation of a pattern
     */
    toSVG(object: Object): string;
    setOptions(options: IPatternOptions): void;
    /**
     * Returns an instance of CanvasPattern
     * @param {CanvasRenderingContext2D} ctx Context to create pattern
     * @return {CanvasPattern}
     */
    toLive(ctx: CanvasRenderingContext2D): CanvasPattern;
}
interface IPoint {
    x: number;
    y: number;
}
export class Point implements IPoint {
    x: number;
    y: number;
    type: string;
    constructor(x: number, y: number);
    /**
     * Adds another point to this one and returns another one
     * @param {fabric.Point} that
     * @return {fabric.Point} new Point instance with added values
     */
    add(that: IPoint): Point;
    /**
     * Adds another point to this one
     * @param {fabric.Point} that
     * @return {fabric.Point} thisArg
     * @chainable
     */
    addEquals(that: IPoint): Point;
    /**
     * Adds value to this point and returns a new one
     * @param {Number} scalar
     * @return {fabric.Point} new Point with added value
     */
    scalarAdd(scalar: number): Point;
    /**
     * Adds value to this point
     * @param {Number} scalar
     * @return {fabric.Point} thisArg
     * @chainable
     */
    scalarAddEquals(scalar: number): Point;
    /**
     * Subtracts another point from this point and returns a new one
     * @param {fabric.Point} that
     * @return {fabric.Point} new Point object with subtracted values
     */
    subtract(that: IPoint): Point;
    /**
     * Subtracts another point from this point
     * @param {fabric.Point} that
     * @return {fabric.Point} thisArg
     * @chainable
     */
    subtractEquals(that: IPoint): Point;
    /**
     * Subtracts value from this point and returns a new one
     * @param {Number} scalar
     * @return {fabric.Point}
     */
    scalarSubtract(scalar: number): Point;
    /**
     * Subtracts value from this point
     * @param {Number} scalar
     * @return {fabric.Point} thisArg
     * @chainable
     */
    scalarSubtractEquals(scalar: number): Point;
    /**
     * Multiplies this point by a value and returns a new one
     * @param {Number} scalar
     * @return {fabric.Point}
     */
    multiply(scalar: number): Point;
    /**
     * Multiplies this point by a value
     * @param {Number} scalar
     * @return {fabric.Point} thisArg
     * @chainable
     */
    multiplyEquals(scalar: number): Point;
    /**
     * Divides this point by a value and returns a new one
     * @param {Number} scalar
     * @return {fabric.Point}
     */
    divide(scalar: number): Point;
    /**
     * Divides this point by a value
     * @param {Number} scalar
     * @return {fabric.Point} thisArg
     * @chainable
     */
    divideEquals(scalar: number): Point;
    /**
     * Returns true if this point is equal to another one
     * @param {fabric.Point} that
     * @return {Boolean}
     */
    eq(that: IPoint): Point;
    /**
     * Returns true if this point is less than another one
     * @param {fabric.Point} that
     * @return {Boolean}
     */
    lt(that: IPoint): Point;
    /**
     * Returns true if this point is less than or equal to another one
     * @param {fabric.Point} that
     * @return {Boolean}
     */
    lte(that: IPoint): Point;
    /**
     * Returns true if this point is greater another one
     * @param {fabric.Point} that
     * @return {Boolean}
     */
    gt(that: IPoint): Point;
    /**
     * Returns true if this point is greater than or equal to another one
     * @param {fabric.Point} that
     * @return {Boolean}
     */
    gte(that: IPoint): Point;
    /**
     * Returns new point which is the result of linear interpolation with this one and another one
     * @param {fabric.Point} that
     * @param {Number} t , position of interpolation, between 0 and 1 default 0.5
     * @return {fabric.Point}
     */
    lerp(that: IPoint, t: number): Point;
    /**
     * Returns distance from this point and another one
     * @param {fabric.Point} that
     * @return {Number}
     */
    distanceFrom(that: IPoint): number;
    /**
     * Returns the point between this point and another one
     * @param {fabric.Point} that
     * @return {fabric.Point}
     */
    midPointFrom(that: IPoint): Point;
    /**
     * Returns a new point which is the min of this and another one
     * @param {fabric.Point} that
     * @return {fabric.Point}
     */
    min(that: IPoint): Point;
    /**
     * Returns a new point which is the max of this and another one
     * @param {fabric.Point} that
     * @return {fabric.Point}
     */
    max(that: IPoint): Point;
    /**
     * Returns string representation of this point
     * @return {String}
     */
    toString(): string;
    /**
     * Sets x/y of this point
     * @param {Number} x
     * @param {Number} y
     * @chainable
     */
    setXY(x: number, y: number): Point;
    /**
     * Sets x of this point
     * @param {Number} x
     * @chainable
     */
    setX(x: number): Point;
    /**
     * Sets y of this point
     * @param {Number} y
     * @chainable
     */
    setY(y: number): Point;
    /**
     * Sets x/y of this point from another point
     * @param {fabric.Point} that
     * @chainable
     */
    setFromPoint(that: IPoint): Point;
    /**
     * Swaps x/y of this point and another point
     * @param {fabric.Point} that
     */
    swap(that: IPoint): Point;
    /**
     * return a cloned instance of the point
     * @return {fabric.Point}
     */
    clone(): Point;
}
interface IShadowOptions {
    /**
     * Shadow color
     */
    color?: string | undefined;
    /**
     * Shadow blur
     */
    blur?: number | undefined;
    /**
     * Shadow horizontal offset
     */
    offsetX?: number | undefined;
    /**
     * Shadow vertical offset
     */
    offsetY?: number | undefined;
    /**
     * Whether the shadow should affect stroke operations
     */
    affectStroke?: boolean | undefined;
    /**
     * Indicates whether toObject should include default values
     */
    includeDefaultValues?: boolean | undefined;
    /**
     * When `false`, the shadow will scale with the object.
     * When `true`, the shadow's offsetX, offsetY, and blur will not be affected by the object's scale.
     * default to false
     * @default
     */
    nonScaling?: boolean | undefined;
}
export interface Shadow extends IShadowOptions {}
export class Shadow {
    constructor(options?: IShadowOptions | string);
    initialize(options?: IShadowOptions | string): Shadow;
    /**
     * Returns a string representation of an instance
     * @see http://www.w3.org/TR/css-text-decor-3/#text-shadow
     * @return {String} Returns CSS3 text-shadow declaration
     */
    toString(): string;
    /**
     * Returns SVG representation of a shadow
     * @param {fabric.Object} object
     * @return {String} SVG representation of a shadow
     */
    toSVG(object: Object): string;
    /**
     * Returns object representation of a shadow
     * @return {Object} Object representation of a shadow instance
     */
    toObject(): any;
    /**
     * Regex matching shadow offsetX, offsetY and blur (ex: "2px 2px 10px rgba(0,0,0,0.2)", "rgb(0,255,0) 2px 2px")
     * @static
     * @field
     */
    static reOffsetsAndBlur: RegExp;
}

///////////////////////////////////////////////////////////////////////////////
// Canvas Interfaces
//////////////////////////////////////////////////////////////////////////////
interface ICanvasDimensions {
    /**
     * Width of canvas element
     */
    width: number | string;
    /**
     * Height of canvas element
     */
    height: number | string;
}
interface ICanvasDimensionsOptions {
    /**
     * Set the given dimensions only as canvas backstore dimensions
     */
    backstoreOnly?: boolean | undefined;
    /**
     * Set the given dimensions only as css dimensions
     */
    cssOnly?: boolean | undefined;
}

interface IStaticCanvasOptions {
    /**
     * Background color of canvas instance.
     * Should be set via {@link fabric.StaticCanvas#setBackgroundColor}.
     */
    backgroundColor?: string | Pattern | undefined;
    /**
     * Background image of canvas instance.
     * Should be set via {@link fabric.StaticCanvas#setBackgroundImage}.
     * <b>Backwards incompatibility note:</b> The "backgroundImageOpacity"
     * and "backgroundImageStretch" properties are deprecated since 1.3.9.
     * Use {@link fabric.Image#opacity}, {@link fabric.Image#width} and {@link fabric.Image#height}.
     * since 2.4.0 image caching is active, please when putting an image as background, add to the
     * canvas property a reference to the canvas it is on. Otherwise the image cannot detect the zoom
     * vale. As an alternative you can disable image objectCaching
     */
    backgroundImage?: Image | string | undefined;
    /**
     * Overlay color of canvas instance.
     * Should be set via {@link fabric.StaticCanvas#setOverlayColor}
     * @since 1.3.9
     */
    overlayColor?: string | Pattern | undefined;
    /**
     * Overlay image of canvas instance.
     * Should be set via {@link fabric.StaticCanvas#setOverlayImage}.
     * <b>Backwards incompatibility note:</b> The "overlayImageLeft"
     * and "overlayImageTop" properties are deprecated since 1.3.9.
     * Use {@link fabric.Image#left} and {@link fabric.Image#top}.
     * since 2.4.0 image caching is active, please when putting an image as overlay, add to the
     * canvas property a reference to the canvas it is on. Otherwise the image cannot detect the zoom
     * vale. As an alternative you can disable image objectCaching
     */
    overlayImage?: Image | undefined;
    /**
     * Indicates whether toObject/toDatalessObject should include default values
     * if set to false, takes precedence over the object value.
     */
    includeDefaultValues?: boolean | undefined;
    /**
     * Indicates whether objects' state should be saved
     */
    stateful?: boolean | undefined;
    /**
     * Indicates whether {@link fabric.Collection.add}, {@link fabric.Collection.insertAt} and {@link fabric.Collection.remove},
     * {@link fabric.StaticCanvas.moveTo}, {@link fabric.StaticCanvas.clear} and many more, should also re-render canvas.
     * Disabling this option will not give a performance boost when adding/removing a lot of objects to/from canvas at once
     * since the renders are quequed and executed one per frame.
     * Disabling is suggested anyway and managing the renders of the app manually is not a big effort ( canvas.requestRenderAll() )
     * Left default to true to do not break documentation and old app, fiddles.
     */
    renderOnAddRemove?: boolean | undefined;
    /**
     * Indicates whether object controls (borders/controls) are rendered above overlay image
     */
    controlsAboveOverlay?: boolean | undefined;
    /**
     * Indicates whether the browser can be scrolled when using a touchscreen and dragging on the canvas
     */
    allowTouchScrolling?: boolean | undefined;
    /**
     * Indicates whether this canvas will use image smoothing, this is on by default in browsers
     */
    imageSmoothingEnabled?: boolean | undefined;
    /**
     * The transformation (in the format of Canvas transform) which focuses the viewport
     */
    viewportTransform?: number[] | undefined;
    /**
     * if set to false background image is not affected by viewport transform
     * @since 1.6.3
     */
    backgroundVpt?: boolean | undefined;
    /**
     * if set to false overlay image is not affected by viewport transform
     * @since 1.6.3
     */
    overlayVpt?: boolean | undefined;
    /**
     * When true, canvas is scaled by devicePixelRatio for better rendering on retina screens
     */
    enableRetinaScaling?: boolean | undefined;
    /**
     * Describe canvas element extension over design
     * properties are tl,tr,bl,br.
     * if canvas is not zoomed/panned those points are the four corner of canvas
     * if canvas is viewportTransformed you those points indicate the extension
     * of canvas element in plain untrasformed coordinates
     * The coordinates get updated with @method calcViewportBoundaries.
     */
    vptCoords?: {
        tl: { x: number; y: number };
        tr: { x: number; y: number };
        bl: { x: number; y: number };
        br: { x: number; y: number };
    } | undefined;
    /**
     * Based on vptCoords and object.aCoords, skip rendering of objects that
     * are not included in current viewport.
     * May greatly help in applications with crowded canvas and use of zoom/pan
     * If One of the corner of the bounding box of the object is on the canvas
     * the objects get rendered.
     */
    skipOffscreen?: boolean | undefined;
    /**
     * a fabricObject that, without stroke define a clipping area with their shape. filled in black
     * the clipPath object gets used when the canvas has rendered, and the context is placed in the
     * top left corner of the canvas.
     * clipPath will clip away controls, if you do not want this to happen use controlsAboveOverlay = true
     */
    clipPath?: Object | undefined;
    /**
     * When true, getSvgTransform() will apply the StaticCanvas.viewportTransform to the SVG transformation. When true,
     * a zoomed canvas will then produce zoomed SVG output.
     */
    svgViewportTransformation?: boolean | undefined;
    /**
     * When the option is enabled, PointerEvent is used instead of MouseEvent.
     */
    enablePointerEvents?: boolean | undefined;
}

export interface StaticCanvas
    extends IObservable<StaticCanvas>, IStaticCanvasOptions, ICollection<StaticCanvas>, ICanvasAnimation<StaticCanvas>
{
    toJSON(propertiesToInclude?: string[]): { version: string; objects: Object[] };
    toDatalessJSON(propertiesToInclude?: string[]): { version: string; objects: Object[] };
    toObject(propertiesToInclude?: string[]): { version: string; objects: Object[] };
    toDatalessObject(propertiesToInclude?: string[]): { version: string; objects: Object[] };
}
export class StaticCanvas {
    /**
     * Constructor
     * @param {HTMLElement | String} el <canvas> element to initialize instance on
     * @param {Object} [options] Options object
     * @return {Object} thisArg
     */
    constructor(element: HTMLCanvasElement | string | null, options?: ICanvasOptions);

    _activeObject?: Object | Group | undefined;

    freeDrawingBrush: BaseBrush;

    /**
     * Calculates canvas element offset relative to the document
     * This method is also attached as "resize" event handler of window
     * @return {fabric.Canvas} instance
     * @chainable
     */
    calcOffset(): Canvas;

    /**
     * Sets {@link fabric.StaticCanvas#overlayImage|overlay image} for this canvas
     * @param {(fabric.Image|String)} image fabric.Image instance or URL of an image to set overlay to
     * @param {Function} callback callback to invoke when image is loaded and set as an overlay
     * @param {Object} [options] Optional options to set for the {@link fabric.Image|overlay image}.
     * @return {fabric.Canvas} thisArg
     * @chainable
     */
    setOverlayImage(image: Image | string, callback: Function, options?: IImageOptions): Canvas;

    /**
     * Sets {@link fabric.StaticCanvas#backgroundImage|background image} for this canvas
     * @param {(fabric.Image|String)} image fabric.Image instance or URL of an image to set background to
     * @param {Function} callback Callback to invoke when image is loaded and set as background
     * @param {Object} [options] Optional options to set for the {@link fabric.Image|background image}.
     * @return {fabric.Canvas} thisArg
     * @chainable
     */
    setBackgroundImage(image: Image | string, callback: Function, options?: IImageOptions): Canvas;

    /**
     * Sets {@link fabric.StaticCanvas#overlayColor|foreground color} for this canvas
     * @param {(String|fabric.Pattern)} overlayColor Color or pattern to set foreground color to
     * @param {Function} callback Callback to invoke when foreground color is set
     * @return {fabric.Canvas} thisArg
     * @chainable
     */
    setOverlayColor(overlayColor: string | Pattern, callback: Function): Canvas;

    /**
     * Sets {@link fabric.StaticCanvas#backgroundColor|background color} for this canvas
     * @param {(String|fabric.Pattern)} backgroundColor Color or pattern to set background color to
     * @param {Function} callback Callback to invoke when background color is set
     * @return {fabric.Canvas} thisArg
     * @chainable
     */
    setBackgroundColor(backgroundColor: string | Pattern | Gradient, callback: Function): Canvas;

    /**
     * Returns canvas width (in px)
     * @return {Number}
     */
    getWidth(): number;

    /**
     * Returns canvas height (in px)
     * @return {Number}
     */
    getHeight(): number;

    /**
     * Sets width of this canvas instance
     * @param {Number|String} value                         Value to set width to
     * @param {Object}        [options]                     Options object
     * @return {fabric.Canvas} instance
     * @chainable true
     */
    setWidth(value: number | string, options?: ICanvasDimensionsOptions): Canvas;

    /**
     * Sets height of this canvas instance
     * @param value                         Value to set height to
     * @param        [options]                     Options object
     * @return {fabric.Canvas} instance
     * @chainable true
     */
    setHeight(value: number | string, options?: ICanvasDimensionsOptions): Canvas;

    /**
     * Sets dimensions (width, height) of this canvas instance. when options.cssOnly flag active you should also supply the unit of measure (px/%/em)
     * @param        dimensions                    Object with width/height properties
     * @param        [options]                     Options object
     * @return {fabric.Canvas} thisArg
     * @chainable
     */
    setDimensions(dimensions: ICanvasDimensions, options?: ICanvasDimensionsOptions): Canvas;

    /**
     * Returns canvas zoom level
     */
    getZoom(): number;

    /**
     * Sets viewport transform of this canvas instance
     * @param {Array} vpt the transform in the form of context.transform
     * @return {fabric.Canvas} instance
     * @chainable
     */
    setViewportTransform(vpt: number[]): Canvas;

    /**
     * Sets zoom level of this canvas instance, zoom centered around point
     * @param {fabric.Point} point to zoom with respect to
     * @param {Number} value to set zoom to, less than 1 zooms out
     * @return {fabric.Canvas} instance
     * @chainable true
     */
    zoomToPoint(point: IPoint, value: number): Canvas;

    /**
     * Sets zoom level of this canvas instance
     * @param {Number} value to set zoom to, less than 1 zooms out
     * @return {fabric.Canvas} instance
     * @chainable
     */
    setZoom(value: number): Canvas;

    /**
     * Pan viewport so as to place point at top left corner of canvas
     * @param {fabric.Point} point to move to
     * @return {fabric.Canvas} instance
     * @chainable
     */
    absolutePan(point: IPoint): Canvas;

    /**
     * Pans viewpoint relatively
     * @param {fabric.Point} point (position vector) to move by
     * @return {fabric.Canvas} instance
     * @chainable
     */
    relativePan(point: IPoint): Canvas;

    /**
     * Returns <canvas> element corresponding to this instance
     * @return {HTMLCanvasElement}
     */
    getElement(): HTMLCanvasElement;

    /**
     * Clears specified context of canvas element
     * @param ctx Context to clear
     * @chainable
     */
    clearContext(ctx: CanvasRenderingContext2D): Canvas;

    /**
     * Returns context of canvas where objects are drawn
     * @return {CanvasRenderingContext2D}
     */
    getContext(): CanvasRenderingContext2D;

    /**
     * Clears all contexts (background, main, top) of an instance
     * @return {fabric.Canvas} thisArg
     * @chainable
     */
    clear(): Canvas;

    /**
     * Renders the canvas
     * @return {fabric.Canvas} instance
     * @chainable
     */
    renderAll(): Canvas;

    /**
     * Function created to be instance bound at initialization
     * used in requestAnimationFrame rendering
     * Let the fabricJS call it. If you call it manually you could have more
     * animationFrame stacking on to of each other
     * for an imperative rendering, use canvas.renderAll
     * @return {fabric.Canvas} instance
     * @chainable
     */
    renderAndReset(): Canvas;

    /**
     * Append a renderAll request to next animation frame.
     * unless one is already in progress, in that case nothing is done
     * a boolean flag will avoid appending more.
     * @return {fabric.Canvas} instance
     * @chainable
     */
    requestRenderAll(): Canvas;

    /**
     * Calculate the position of the 4 corner of canvas with current viewportTransform.
     * helps to determinate when an object is in the current rendering viewport using
     * object absolute coordinates ( aCoords )
     * @return {Object} points.tl
     * @chainable
     */
    calcViewportBoundaries(): { tl: Point; br: Point; tr: Point; bl: Point };

    /**
     * Renders background, objects, overlay and controls.
     * @param {CanvasRenderingContext2D} ctx
     * @param {Array} objects to render
     * @return {fabric.Canvas} instance
     * @chainable
     */
    renderCanvas(ctx: CanvasRenderingContext2D, objects: Object[]): Canvas;

    /**
     * Paint the cached clipPath on the lowerCanvasEl
     * @param {CanvasRenderingContext2D} ctx Context to render on
     */
    drawClipPathOnCanvas(ctx: CanvasRenderingContext2D): void;

    /**
     * Returns coordinates of a center of canvas.
     * Returned value is an object with top and left properties
     * @return {Object} object with "top" and "left" number values
     */
    getCenter(): { top: number; left: number };

    /**
     * Centers object horizontally in the canvas
     * @param {fabric.Object} object Object to center horizontally
     * @return {fabric.Canvas} thisArg
     */
    centerObjectH(object: Object): Canvas;

    /**
     * Centers object vertically in the canvas
     * @param {fabric.Object} object Object to center vertically
     * @return {fabric.Canvas} thisArg
     * @chainable
     */
    centerObjectV(object: Object): Canvas;

    /**
     * Centers object vertically and horizontally in the canvas
     * @param {fabric.Object} object Object to center vertically and horizontally
     * @return {fabric.Canvas} thisArg
     * @chainable
     */
    centerObject(object: Object): Canvas;

    /**
     * Centers object vertically and horizontally in the viewport
     * @param {fabric.Object} object Object to center vertically and horizontally
     * @return {fabric.Canvas} thisArg
     * @chainable
     */
    viewportCenterObject(object: Object): Canvas;

    /**
     * Centers object horizontally in the viewport, object.top is unchanged
     * @param {fabric.Object} object Object to center vertically and horizontally
     * @return {fabric.Canvas} thisArg
     * @chainable
     */
    viewportCenterObjectH(object: Object): Canvas;

    /**
     * Centers object Vertically in the viewport, object.top is unchanged
     * @param {fabric.Object} object Object to center vertically and horizontally
     * @return {fabric.Canvas} thisArg
     * @chainable
     */
    viewportCenterObjectV(object: Object): Canvas;

    /**
     * Calculate the point in canvas that correspond to the center of actual viewport.
     * @return {fabric.Point} vpCenter, viewport center
     */
    getVpCenter(): Point;

    /**
     * Returs dataless JSON representation of canvas
     * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
     * @return {String} json string
     */
    toDatalessJSON(propertiesToInclude?: string[]): { version: string; objects: Object[] };

    /**
     * Returns JSON representation of canvas
     * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
     * @return {String} JSON string
     */
    toJSON(propertiesToInclude?: string[]): { version: string; objects: Object[] };

    /**
     * Returns object representation of canvas
     * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
     * @return {Object} object representation of an instance
     */
    toObject(propertiesToInclude?: string[]): any;

    /**
     * Returns dataless object representation of canvas
     * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
     * @return {Object} object representation of an instance
     */
    toDatalessObject(propertiesToInclude?: string[]): any;

    /**
     * Returns SVG representation of canvas
     * @param [options] Options object for SVG output
     * @param [reviver] Method for further parsing of svg elements, called after each fabric object converted into svg representation.
     * @return {String} SVG string
     */
    toSVG(options?: IToSVGOptions, reviver?: Function): string;

    /**
     * Moves an object or the objects of a multiple selection
     * to the bottom of the stack of drawn objects
     * @param {fabric.Object} object Object to send to back
     * @return {fabric.Canvas} thisArg
     * @chainable
     */
    sendToBack(object: Object): Canvas;

    /**
     * Moves an object or the objects of a multiple selection
     * to the top of the stack of drawn objects
     * @param {fabric.Object} object Object to send
     * @return {fabric.Canvas} thisArg
     * @chainable
     */
    bringToFront(object: Object): Canvas;

    /**
     * Moves an object or a selection down in stack of drawn objects
     * An optional paramter, intersecting allowes to move the object in behind
     * the first intersecting object. Where intersection is calculated with
     * bounding box. If no intersection is found, there will not be change in the
     * stack.
     * @param {fabric.Object} object Object to send
     * @param {Boolean} [intersecting] If `true`, send object behind next lower intersecting object
     * @return {fabric.Canvas} thisArg
     * @chainable
     */
    sendBackwards(object: Object, intersecting?: boolean): Canvas;

    /**
     * Moves an object or a selection up in stack of drawn objects
     * An optional paramter, intersecting allowes to move the object in front
     * of the first intersecting object. Where intersection is calculated with
     * bounding box. If no intersection is found, there will not be change in the
     * stack.
     * @param {fabric.Object} object Object to send
     * @param {Boolean} [intersecting] If `true`, send object in front of next upper intersecting object
     * @return {fabric.Canvas} thisArg
     * @chainable
     */
    bringForward(object: Object, intersecting?: boolean): Canvas;

    /**
     * Moves an object to specified level in stack of drawn objects
     * @param {fabric.Object} object Object to send
     * @param {Number} index Position to move to
     * @return {fabric.Canvas} thisArg
     * @chainable
     */
    moveTo(object: Object, index: number): Canvas;

    /**
     * Clears a canvas element and dispose objects
     * @return {fabric.Canvas} thisArg
     * @chainable     */
    dispose(): Canvas;

    /**
     * Returns a string representation of an instance
     * @return {String} string representation of an instance
     */
    toString(): string;

    /**
     * @static
     * @default
     */
    static EMPTY_JSON: string;

    /**
     * Provides a way to check support of some of the canvas methods
     * (either those of HTMLCanvasElement itself, or rendering context)
     *
     * @param {String} methodName Method to check support for;
     *                            Could be one of "setLineDash"
     * @return {Boolean | null} `true` if method is supported (or at least exists),
     *                          `null` if canvas element or context can not be initialized
     */
    static supports(methodName: "getImageData" | "toDataURL" | "toDataURLWithQuality" | "setLineDash"): boolean;

    /**
     * Exports canvas element to a dataurl image. Note that when multiplier is used, cropping is scaled appropriately
     * @param [options] Options object
     */
    toDataURL(options?: IDataURLOptions): string;

    /**
     * Returns JSON representation of canvas
     * @param [propertiesToInclude] Any properties that you might want to additionally include in the output
     */
    static toJSON(propertiesToInclude?: string[]): { version: string; objects: Object[] };

    /**
     * Clones canvas instance
     * @param [callback] Receives cloned instance as a first argument
     * @param [properties] Array of properties to include in the cloned canvas and children
     */
    clone(callback?: any, properties?: string[]): void;

    /**
     * Clones canvas instance without cloning existing data.
     * This essentially copies canvas dimensions, clipping properties, etc.
     * but leaves data empty (so that you can populate it with your own)
     * @param [callback] Receives cloned instance as a first argument
     */
    cloneWithoutData(callback?: any): void;

    /**
     * Create a new HTMLCanvas element painted with the current canvas content.
     * No need to resize the actual one or repaint it.
     * Will transfer object ownership to a new canvas, paint it, and set everything back.
     * This is an intermediary step used to get to a dataUrl but also it is useful to
     * create quick image copies of a canvas without passing for the dataUrl string
     * @param {Number} [multiplier] a zoom factor.
     * @param {Object} [cropping] Cropping informations
     * @param {Number} [cropping.left] Cropping left offset.
     * @param {Number} [cropping.top] Cropping top offset.
     * @param {Number} [cropping.width] Cropping width.
     * @param {Number} [cropping.height] Cropping height.
     */
    toCanvasElement(
        multiplier?: number,
        cropping?: Readonly<{
            left?: number;
            top?: number;
            width?: number;
            height?: number;
        }>,
    ): HTMLCanvasElement;

    /**
     * Populates canvas with data from the specified JSON.
     * JSON format must conform to the one of {@link fabric.Canvas#toJSON}
     * @param {String|Object} json JSON string or object
     * @param {Function} callback Callback, invoked when json is parsed
     *                            and corresponding objects (e.g: {@link fabric.Image})
     *                            are initialized
     * @param {Function} [reviver] Method for further parsing of JSON elements, called after each fabric object created.
     * @return {fabric.Canvas} instance
     */
    loadFromJSON(json: any, callback: Function, reviver?: Function): Canvas;

    /**
     * Creates markup containing SVG font faces,
     * font URLs for font faces must be collected by developers
     * and are not extracted from the DOM by fabricjs
     * @param {Array} objects Array of fabric objects
     * @return {String}
     */

    createSVGFontFacesMarkup(objects: any[]): string;
    /**
     * Creates markup containing SVG referenced elements like patterns, gradients etc.
     * @return {String}
     */

    createSVGRefElementsMarkup(): string;
    /**
     * Straightens object, then rerenders canvas
     * @param {fabric.Object} object Object to straighten
     * @return {fabric.Canvas} thisArg
     * @chainable
     */

    straightenObject(object: Object): Canvas;
}

interface ICanvasOptions extends IStaticCanvasOptions {
    /**
     * When true, objects can be transformed by one side (unproportionally)
     * when dragged on the corners that normally would not do that.
     * @default
     * @since fabric 4.0 // changed name and default value
     */
    uniformScaling?: boolean | undefined;

    /**
     * Indicates which key enable unproportional scaling
     * values: 'altKey', 'shiftKey', 'ctrlKey'.
     * If `null` or 'none' or any other string that is not a modifier key
     * feature is disabled feature disabled.
     * @since 1.6.2
     */
    uniScaleKey?: string | undefined;

    /**
     * When true, objects use center point as the origin of scale transformation.
     * <b>Backwards incompatibility note:</b> This property replaces "centerTransform" (Boolean).
     */
    centeredScaling?: boolean | undefined;

    /**
     * When true, objects use center point as the origin of rotate transformation.
     * <b>Backwards incompatibility note:</b> This property replaces "centerTransform" (Boolean).
     */
    centeredRotation?: boolean | undefined;

    /**
     * Color of object's fill
     */
    fill?: string | Pattern | Gradient | undefined;

    /**
     * Indicates which key enable centered Transform
     * values: 'altKey', 'shiftKey', 'ctrlKey'.
     * If `null` or 'none' or any other string that is not a modifier key
     * feature is disabled feature disabled.
     * @since 1.6.2
     * @default
     */
    centeredKey?: string | undefined;

    /**
     * Indicates which key enable alternate action on corner
     * values: 'altKey', 'shiftKey', 'ctrlKey'.
     * If `null` or 'none' or any other string that is not a modifier key
     * feature is disabled feature disabled.
     * @since 1.6.2
     * @default
     */
    altActionKey?: string | undefined;

    /**
     * Indicates that canvas is interactive. This property should not be changed.
     */
    interactive?: boolean | undefined;

    /**
     * Indicates whether group selection should be enabled
     */
    selection?: boolean | undefined;

    /**
     * Indicates which key or keys enable multiple click selection
     * Pass value as a string or array of strings
     * values: 'altKey', 'shiftKey', 'ctrlKey'.
     * If `null` or empty or containing any other string that is not a modifier key
     * feature is disabled.
     * @since 1.6.2
     * @default
     */
    selectionKey?: string | string[] | undefined;

    /**
     * Indicates which key enable alternative selection
     * in case of target overlapping with active object
     * values: 'altKey', 'shiftKey', 'ctrlKey'.
     * For a series of reason that come from the general expectations on how
     * things should work, this feature works only for preserveObjectStacking true.
     * If `null` or 'none' or any other string that is not a modifier key
     * feature is disabled.
     * @since 1.6.5
     * @default
     */
    altSelectionKey?: string | null | undefined;

    /**
     * Color of selection
     */
    selectionColor?: string | undefined;

    /**
     * Default dash array pattern
     * If not empty the selection border is dashed
     */
    selectionDashArray?: number[] | undefined;

    /**
     * Color of the border of selection (usually slightly darker than color of selection itself)
     */
    selectionBorderColor?: string | undefined;

    /**
     * Width of a line used in object/group selection
     */
    selectionLineWidth?: number | undefined;

    /**
     * Select only shapes that are fully contained in the dragged selection rectangle.
     * @default
     */
    selectionFullyContained?: boolean | undefined;

    /**
     * Default cursor value used when hovering over an object on canvas
     */
    hoverCursor?: string | undefined;

    /**
     * Default cursor value used when moving an object on canvas
     */
    moveCursor?: string | undefined;

    /**
     * Default cursor value used for the entire canvas
     */
    defaultCursor?: string | undefined;

    /**
     * Cursor value used during free drawing
     */
    freeDrawingCursor?: string | undefined;

    /**
     * Cursor value used for rotation point
     */
    rotationCursor?: string | undefined;

    /**
     * Cursor value used for disabled elements ( corners with disabled action )
     * @since 2.0.0
     * @default
     */
    notAllowedCursor?: string | undefined;

    /**
     * Default element class that's given to wrapper (div) element of canvas
     */
    containerClass?: string | undefined;

    /**
     * When true, object detection happens on per-pixel basis rather than on per-bounding-box
     */
    perPixelTargetFind?: boolean | undefined;

    /**
     * Number of pixels around target pixel to tolerate (consider active) during object detection
     */
    targetFindTolerance?: number | undefined;

    /**
     * When true, target detection is skipped when hovering over canvas. This can be used to improve performance.
     */
    skipTargetFind?: boolean | undefined;

    /**
     * When true, mouse events on canvas (mousedown/mousemove/mouseup) result in free drawing.
     * After mousedown, mousemove creates a shape,
     * and then mouseup finalizes it and adds an instance of `fabric.Path` onto canvas.
     */
    isDrawingMode?: boolean | undefined;

    /**
     * Indicates whether objects should remain in current stack position when selected.
     * When false objects are brought to top and rendered as part of the selection group
     */
    preserveObjectStacking?: boolean | undefined;

    /**
     * Indicates the angle that an object will lock to while rotating.
     * @since 1.6.7
     */
    snapAngle?: number | undefined;

    /**
     * Indicates the distance from the snapAngle the rotation will lock to the snapAngle.
     * When `null`, the snapThreshold will default to the snapAngle.
     * @since 1.6.7
     * @default
     */
    snapThreshold?: null | number | undefined;

    /**
     * Indicates if the right click on canvas can output the context menu or not
     * @since 1.6.5
     * @default
     */
    stopContextMenu?: boolean | undefined;

    /**
     * Indicates if the canvas can fire right click events
     * @since 1.6.5
     * @default
     */
    fireRightClick?: boolean | undefined;

    /**
     * Indicates if the canvas can fire middle click events
     * @since 1.7.8
     * @default
     */
    fireMiddleClick?: boolean | undefined;

    /**
     * Keep track of the subTargets for Mouse Events
     * @since 3.6.0
     * @default
     */
    targets?: Object[] | undefined;

    /**
     * Canvas width
     * @default
     */
    width?: number | undefined;

    /**
     * Canvas height
     * @default
     */
    height?: number | undefined;
}
export interface Canvas extends StaticCanvas {}
export interface Canvas extends ICanvasOptions {}
export class Canvas {
    /**
     * Constructor
     * @param element <canvas> element to initialize instance on
     * @param [options] Options object
     */
    constructor(element: HTMLCanvasElement | string | null, options?: ICanvasOptions);
    /**
     * Constructor
     * @param {HTMLCanvasElement | String} element <canvas> element to initialize instance on
     * @param {Object} [options] Options object
     * @return {Object} thisArg
     */
    initialize(element: HTMLCanvasElement | string | null, options?: ICanvasOptions): Canvas;

    /**
     * When true, target detection is skipped when hovering over canvas. This can be used to improve performance.
     * @default
     */
    skipTargetFind: boolean;
    _activeObject: Object;
    _objects: Object[];
    targets: Object[];
    /**
     * Indicates which key enable alternative selection
     * in case of target overlapping with active object
     * values: 'altKey', 'shiftKey', 'ctrlKey'.
     * For a series of reason that come from the general expectations on how
     * things should work, this feature works only for preserveObjectStacking true.
     * If `null` or 'none' or any other string that is not a modifier key
     * feature is disabled.
     * @since 1.6.5
     * @default
     */
    altSelectionKey?: string | undefined;

    /**
     * Renders both the top canvas and the secondary container canvas.
     * @return {fabric.Canvas} instance
     * @chainable
     */
    renderAll(): Canvas;
    /**
     * Method to render only the top canvas.
     * Also used to render the group selection box.
     * @return {fabric.Canvas} thisArg
     * @chainable
     */
    renderTop(): Canvas;
    /**
     * Checks if point is contained within an area of given object
     * @param {Event} e Event object
     * @param {fabric.Object} target Object to test against
     * @param {Object} [point] x,y object of point coordinates we want to check.
     * @return {Boolean} true if point is contained within an area of given object
     */
    containsPoint(e: Event, target: Object, point?: { x: number; y: number }): boolean;
    /**
     * Returns true if object is transparent at a certain location
     * @param {fabric.Object} target Object to check
     * @param {Number} x Left coordinate
     * @param {Number} y Top coordinate
     * @return {Boolean}
     */
    isTargetTransparent(target: Object, x: number, y: number): boolean;
    /**
     * Set the cursor type of the canvas element
     * @param {String} value Cursor type of the canvas element.
     * @see http://www.w3.org/TR/css3-ui/#cursor
     */
    setCursor(value: string): void;
    /**
     * Method that determines what object we are clicking on
     * the skipGroup parameter is for internal use, is needed for shift+click action
     * 11/09/2018 TODO: would be cool if findTarget could discern between being a full target
     * or the outside part of the corner.
     * @param {Event} e mouse event
     * @param {Boolean} skipGroup when true, activeGroup is skipped and only objects are traversed through
     * @return {fabric.Object} the target found
     */
    findTarget(e: Event, skipGroup: boolean): Object | undefined;
    /**
     * Returns pointer coordinates without the effect of the viewport
     * @param {Object} pointer with "x" and "y" number values
     * @return {Object} object with "x" and "y" number values
     */
    restorePointerVpt(pointer: IPoint): any;
    /**
     * Returns pointer coordinates relative to canvas.
     * Can return coordinates with or without viewportTransform.
     * ignoreZoom false gives back coordinates that represent
     * the point clicked on canvas element.
     * ignoreZoom true gives back coordinates after being processed
     * by the viewportTransform ( sort of coordinates of what is displayed
     * on the canvas where you are clicking.
     * ignoreZoom true = HTMLElement coordinates relative to top,left
     * ignoreZoom false, default = fabric space coordinates, the same used for shape position
     * To interact with your shapes top and left you want to use ignoreZoom true
     * most of the time, while ignoreZoom false will give you coordinates
     * compatible with the object.oCoords system.
     * of the time.
     * @param {Event} e
     * @param {Boolean} ignoreZoom
     * @return {Object} object with "x" and "y" number values
     */
    getPointer(e: Event, ignoreZoom?: boolean): { x: number; y: number };
    /**
     * Returns context of canvas where object selection is drawn
     * @return {CanvasRenderingContext2D}
     */
    getSelectionContext(): CanvasRenderingContext2D;
    /**
     * Returns <canvas> element on which object selection is drawn
     * @return {HTMLCanvasElement}
     */
    getSelectionElement(): HTMLCanvasElement;
    /**
     * Returns currently active object
     * @return {fabric.Object} active object
     */
    getActiveObject(): Object | null;
    /**
     * Returns an array with the current selected objects
     * @return {fabric.Object} active object
     */
    getActiveObjects(): Object[];
    /**
     * Sets given object as the only active object on canvas
     * @param {fabric.Object} object Object to set as an active one
     * @param {Event} [e] Event (passed along when firing "object:selected")
     * @return {fabric.Canvas} thisArg
     * @chainable
     */
    setActiveObject(object: Object, e?: Event): Canvas;
    /**
     * Discards currently active object and fire events. If the function is called by fabric
     * as a consequence of a mouse event, the event is passed as a parameter and
     * sent to the fire function for the custom events. When used as a method the
     * e param does not have any application.
     * @param {event} e
     * @return {fabric.Canvas} thisArg
     * @chainable
     */
    discardActiveObject(e?: Event): Canvas;
    /**
     * Clears a canvas element and removes all event listeners
     * @return {fabric.Canvas} thisArg
     * @chainable
     */
    dispose(): Canvas;
    /**
     * Clears all contexts (background, main, top) of an instance
     * @return {fabric.Canvas} thisArg
     * @chainable
     */
    clear(): Canvas;
    /**
     * Draws objects' controls (borders/controls)
     * @param {CanvasRenderingContext2D} ctx Context to render controls on
     */
    drawControls(ctx: CanvasRenderingContext2D): void;
    /**
     * @return {Boolean} true if the scaling occurred
     */
    _setObjectScale(
        localMouse: Point,
        transform: any,
        lockScalingX: boolean,
        lockScalingY: boolean,
        by: "x" | "y" | "equally" | undefined,
        lockScalingFlip: boolean,
        _dim: Point,
    ): boolean;
    /**
     * Scales object by invoking its scaleX/scaleY methods
     * @param {Number} x pointer's x coordinate
     * @param {Number} y pointer's y coordinate
     * @param {String} by Either 'x' or 'y' - specifies dimension constraint by which to scale an object.
     *                    When not provided, an object is scaled by both dimensions equally
     * @return {Boolean} true if the scaling occurred
     */
    _scaleObject(x: number, y: number, by?: "x" | "y" | "equally"): boolean;
    /**
     * @param {fabric.Object} obj Object that was removed
     */
    _onObjectRemoved(obj: Object): void;
    /**
     * @param {fabric.Object} obj Object that was added
     */
    _onObjectAdded(obj: Object): void;
    /**
     * Resets the current transform to its original values and chooses the type of resizing based on the event
     */
    _resetCurrentTransform(): void;
    /**
     * Compares the old activeObject with the current one and fires correct events
     * @param {fabric.Object} obj old activeObject
     */
    _fireSelectionEvents(oldObjects: Object[], e?: Event): void;
    /**
     * @param {Object} object to set as active
     * @param {Event} [e] Event (passed along when firing "object:selected")
     * @return {Boolean} true if the selection happened
     */
    _setActiveObject(object: fabric.Object, e?: Event): boolean;
    /**
     * Returns pointer coordinates relative to canvas.
     * Can return coordinates with or without viewportTransform.
     * ignoreZoom false gives back coordinates that represent
     * the point clicked on canvas element.
     * ignoreZoom true gives back coordinates after being processed
     * by the viewportTransform ( sort of coordinates of what is displayed
     * on the canvas where you are clicking.
     * ignoreZoom true = HTMLElement coordinates relative to top,left
     * ignoreZoom false, default = fabric space coordinates, the same used for shape position
     * To interact with your shapes top and left you want to use ignoreZoom true
     * most of the time, while ignoreZoom false will give you coordinates
     * compatible with the object.oCoords system.
     * of the time.
     * @param {Event} e
     * @param {Boolean} ignoreZoom
     * @return {Object} object with "x" and "y" number values
     */
    getPointer(e: Event, ignoreZoom: boolean): { x: number; y: number };
    /**
     * Function used to search inside objects an object that contains pointer in bounding box or that contains pointerOnCanvas when painted
     * @param {Array} [objects] objects array to look into
     * @param {Object} [pointer] x,y object of point coordinates we want to check.
     * @return {fabric.Object} object that contains pointer
     */
    _searchPossibleTargets(objects: Object[], pointer: { x: number; y: number }): Object;

    static EMPTY_JSON: string;
    /**
     * Provides a way to check support of some of the canvas methods
     * (either those of HTMLCanvasElement itself, or rendering context)
     * @param methodName Method to check support for; Could be one of "getImageData", "toDataURL", "toDataURLWithQuality" or "setLineDash"
     */
    static supports(methodName: "getImageData" | "toDataURL" | "toDataURLWithQuality" | "setLineDash"): boolean;
    /**
     * Returns JSON representation of canvas
     * @param [propertiesToInclude] Any properties that you might want to additionally include in the output
     */
    static toJSON(propertiesToInclude?: string[]): { version: string; objects: Object[] };
    /**
     * Removes all event listeners
     */
    removeListeners(): void;
}

///////////////////////////////////////////////////////////////////////////////
// Shape Interfaces
//////////////////////////////////////////////////////////////////////////////

interface ICircleOptions extends IObjectOptions {
    /**
     * Radius of this circle
     */
    radius?: number | undefined;
    /**
     * Start angle of the circle, moving clockwise
     */
    startAngle?: number | undefined;
    /**
     * End angle of the circle
     */
    endAngle?: number | undefined;
}
export interface Circle extends Object, ICircleOptions {}
export class Circle {
    constructor(options?: ICircleOptions);
    /**
     * Returns horizontal radius of an object (according to how an object is scaled)
     */
    getRadiusX(): number;
    /**
     * Returns vertical radius of an object (according to how an object is scaled)
     */
    getRadiusY(): number;
    /**
     * Sets radius of an object (and updates width accordingly)
     */
    setRadius(value: number): number;
    /**
     * Returns svg representation of an instance
     * @return {Array} an array of strings with the specific svg representation
     * of the instance
     */
    _toSVG(): string;
    /**
     * List of attribute names to account for when parsing SVG element (used by {@link fabric.Circle.fromElement})
     */
    static ATTRIBUTE_NAMES: string[];
    /**
     * Returns Circle instance from an SVG element
     * @param element Element to parse
     * @param [options] Options object
     */
    static fromElement(element: SVGElement, options: ICircleOptions): Circle;
    /**
     * Returns Circle instance from an object representation
     * @param object Object to create an instance from
     */
    static fromObject(object: any): Circle;
}

interface IEllipseOptions extends IObjectOptions {
    /**
     * Horizontal radius
     */
    rx?: number | undefined;
    /**
     * Vertical radius
     */
    ry?: number | undefined;
}
export interface Ellipse extends Object, IEllipseOptions {}
export class Ellipse {
    constructor(options?: IEllipseOptions);
    /**
     * Returns horizontal radius of an object (according to how an object is scaled)
     */
    getRx(): number;
    /**
     * Returns Vertical radius of an object (according to how an object is scaled)
     */
    getRy(): number;
    /**
     * Returns svg representation of an instance
     * @return {Array} an array of strings with the specific svg representation
     * of the instance
     */
    _toSVG(): string;
    /**
     * List of attribute names to account for when parsing SVG element (used by {@link fabric.Ellipse.fromElement})
     */
    static ATTRIBUTE_NAMES: string[];
    /**
     * Returns Ellipse instance from an SVG element
     * @param element Element to parse
     * @param [options] Options object
     */
    static fromElement(element: SVGElement, options?: IEllipseOptions): Ellipse;
    /**
     * Returns Ellipse instance from an object representation
     * @param object Object to create an instance from
     */
    static fromObject(object: any): Ellipse;
}
interface IGroupOptions extends IObjectOptions {
    /**
     * Indicates if click, mouseover, mouseout events & hoverCursor should also check for subtargets
     */
    subTargetCheck?: boolean | undefined;
    /**
     * setOnGroup is a method used for TextBox that is no more used since 2.0.0 The behavior is still
     * available setting this boolean to true.
     * @since 2.0.0
     * @default
     */
    useSetOnGroup?: boolean | undefined;
}
export interface Group extends Object, ICollection<Group>, IGroupOptions {}
export class Group {
    /**
     * Constructor
     * @param objects Group objects
     * @param [options] Options object
     */
    constructor(objects?: Object[], options?: IGroupOptions, isAlreadyGrouped?: boolean);
    /**
     * Adds an object to a group; Then recalculates group's dimension, position.
     * @param [Object] object
     * @return thisArg
     * @chainable
     */
    addWithUpdate(object?: Object): Group;
    /**
     * Removes an object from a group; Then recalculates group's dimension, position.
     * @return thisArg
     * @chainable
     */
    removeWithUpdate(object: Object): Group;
    /**
     * Renders instance on a given context
     * @param ctx context to render instance on
     */
    render(ctx: CanvasRenderingContext2D): void;
    /**
     * Decide if the object should cache or not. Create its own cache level
     * objectCaching is a global flag, wins over everything
     * needsItsOwnCache should be used when the object drawing method requires
     * a cache step. None of the fabric classes requires it.
     * Generally you do not cache objects in groups because the group outside is cached.
     * @return {Boolean}
     */
    shouldCache(): boolean;
    /**
     * Check if this object or a child object will cast a shadow
     * @return {Boolean}
     */
    willDrawShadow(): boolean;
    /**
     * Check if this group or its parent group are caching, recursively up
     * @return {Boolean}
     */
    isOnACache(): boolean;
    /**
     * Execute the drawing operation for an object on a specified context
     * @param {CanvasRenderingContext2D} ctx Context to render on
     */
    drawObject(ctx: CanvasRenderingContext2D): void;
    /**
     * Check if cache is dirty
     */
    isCacheDirty(skipCanvas?: boolean): boolean;
    /**
     * Realises the transform from this group onto the supplied object
     * i.e. it tells you what would happen if the supplied object was in
     * the group, and then the group was destroyed. It mutates the supplied
     * object.
     * @param {fabric.Object} object
     * @return {fabric.Object} transformedObject
     */
    realizeTransform(object: Object): Object;
    /**
     * Destroys a group (restoring state of its objects)
     * @return {fabric.Group} thisArg
     * @chainable
     */
    destroy(): Group;
    /**
     * make a group an active selection, remove the group from canvas
     * the group has to be on canvas for this to work.
     * @return {fabric.ActiveSelection} thisArg
     * @chainable
     */
    toActiveSelection(): ActiveSelection;
    /**
     * Destroys a group (restoring state of its objects)
     * @return {fabric.Group} thisArg
     * @chainable
     */
    ungroupOnCanvas(): Group;
    /**
     * Sets coordinates of all group objects
     * @return thisArg
     * @chainable
     */
    setObjectsCoords(): Group;
    /**
     * Returns svg representation of an instance
     * @param [reviver] Method for further parsing of svg representation.
     * @return svg representation of an instance
     */
    toSVG(reviver?: Function): string;
    /**
     * Returns svg clipPath representation of an instance
     * @param {Function} [reviver] Method for further parsing of svg representation.
     * @return {String} svg representation of an instance
     */
    toClipPathSVG(reviver?: Function): string;
    /**
     * Adds an object to a group; Then recalculates group's dimension, position.
     * @param {Object} object
     * @return {fabric.Group} thisArg
     * @chainable
     */
    addWithUpdate(object: Object): Group;
    /**
     * Retores original state of each of group objects (original state is that which was before group was created).
     * @return {fabric.Group} thisArg
     * @chainable
     */
    _restoreObjectsState(): Group;
    /** */
    _calcBounds(onlyWidthHeight?: boolean): void;
    /**
     * @param {Boolean} [skipCoordsChange] if true, coordinates of objects enclosed in a group do not change
     */
    _updateObjectsCoords(center?: Point): void;
    /**
     * Retores original state of each of group objects (original state is that which was before group was created).
     * @return {fabric.Group} thisArg
     * @chainable
     */
    _restoreObjectsState(): Group;
    /** */
    _onObjectRemoved(object: Object): void;
    /**
     * Returns {@link fabric.Group} instance from an object representation
     * @param object Object to create a group from
     * @param [callback] Callback to invoke when an group instance is created
     */
    static fromObject(object: any, callback: (group: Group) => any): void;
}

///////////////////////////////////////////////////////////////////////////////
// ActiveSelection
//////////////////////////////////////////////////////////////////////////////
export interface ActiveSelection extends Group, ICollection<Group> {}
export class ActiveSelection {
    /**
     * Constructor
     * @param objects ActiveSelection objects
     * @param [options] Options object
     */
    constructor(objects?: Object[], options?: IObjectOptions);
    /**
     * Constructor
     * @param {Object} objects ActiveSelection objects
     * @param {Object} [options] Options object
     * @return {Object} thisArg
     */
    initialize(objects: ActiveSelection, options?: IObjectOptions): Object;
    /**
     * Change te activeSelection to a normal group,
     * High level function that automatically adds it to canvas as
     * active object. no events fired.
     */
    toGroup(): Group;
    /**
     * Returns {@link fabric.ActiveSelection} instance from an object representation
     * @param object Object to create a group from
     * @param [callback] Callback to invoke when an ActiveSelection instance is created
     */
    static fromObject(object: any, callback: Function): void;
}

interface IImageOptions extends IObjectOptions {
    /**
     * crossOrigin value (one of "", "anonymous", "allow-credentials")
     */
    crossOrigin?: string | undefined;
    /**
     * When calling {@link fabric.Image.getSrc}, return value from element src with `element.getAttribute('src')`.
     * This allows for relative urls as image src.
     * @since 2.7.0
     */
    srcFromAttribute?: boolean | undefined;
    /**
     * minimum scale factor under which any resizeFilter is triggered to resize the image
     * 0 will disable the automatic resize. 1 will trigger automatically always.
     * number bigger than 1 are not implemented yet.
     */
    minimumScaleTrigger?: number | undefined;
    /**
     * key used to retrieve the texture representing this image
     * @since 2.0.0
     */
    cacheKey?: string | undefined;
    /**
     * Image crop in pixels from original image size.
     * @since 2.0.0
     */
    cropX?: number | undefined;
    /**
     * Image crop in pixels from original image size.
     * @since 2.0.0
     */
    cropY?: number | undefined;
    /**
     * Image filter array
     */
    filters?: IBaseFilter[] | undefined;
}
interface Image extends Object, IImageOptions {}
export class Image {
    /**
     * Constructor
     * @param element Image element
     * @param [options] Options object
     */
    constructor(element: string | HTMLImageElement | HTMLCanvasElement | HTMLVideoElement, options?: IImageOptions);
    /**
     * Returns image or video element which this instance is based on
     * @return Image or Video element
     */
    getElement(): HTMLImageElement | HTMLVideoElement;
    /**
     * Sets image or video element for this instance to a specified one.
     * If filters defined they are applied to new image.
     * You might need to call `canvas.renderAll` and `object.setCoords` after replacing, to render new image and update controls area.
     * @param element image element
     * @param [options] Options object
     */
    setElement(element: HTMLImageElement | HTMLVideoElement, options?: IImageOptions): Image;
    /**
     * Delete a single texture if in webgl mode
     */
    removeTexture(key: any): void;
    /**
     * Delete textures, reference to elements and eventually JSDOM cleanup
     */
    dispose(): void;
    /**
     * Returns original size of an image
     * @return Object with "width" and "height" properties
     */
    getOriginalSize(): { width: number; height: number };
    /**
     * Returns true if an image has crop applied, inspecting values of cropX,cropY,width,hight.
     * @return {Boolean}
     */
    hasCrop(): boolean;
    /**
     * Returns svg representation of an instance
     * @return {Array} an array of strings with the specific svg representation
     * of the instance
     */
    _toSVG(): string;
    /**
     * Returns source of an image
     * @return Source of an image
     */
    getSrc(): string;
    /**
     * Sets source of an image
     * @param {String} src Source string (URL)
     * @param {Function} [callback] Callback is invoked when image has been loaded (and all filters have been applied)
     * @param {Object} [options] Options object
     * @return {fabric.Image} thisArg
     * @chainable
     */
    setSrc(src: string, callback?: Function, options?: IImageOptions): Image;
    applyResizeFilters(): void;
    /**
     * Applies filters assigned to this image (from "filters" array) or from filter param
     * @param {Array} filters to be applied
     * @return {thisArg} return the fabric.Image object
     * @chainable
     */
    applyFilters(filters?: IBaseFilter[]): Image;
    /**
     * Calculate offset for center and scale factor for the image in order to respect
     * the preserveAspectRatio attribute
     * @return {Object}
     */
    parsePreserveAspectRatioAttribute(): any;
    /**
     * Creates an instance of fabric.Image from an URL string
     * @param url URL to create an image from
     * @param [callback] Callback to invoke when image is created (newly created image is passed as a first argument)
     * @param [imgOptions] Options object
     */
    static fromURL(url: string, callback?: (image: Image) => void, imgOptions?: IImageOptions): Image;
    /**
     * Returns Image instance from an SVG element
     * @param element Element to parse
     * @param callback Callback to execute when fabric.Image object is created
     * @param [options] Options object
     */
    static fromElement(element: SVGElement, callback: Function, options?: IImageOptions): Image;
    /**
     * Default CSS class name for canvas
     */
    static CSS_CANVAS: string;
    static filters: IAllFilters;
    static ATTRIBUTE_NAMES: string[];
}

interface ILineOptions extends IObjectOptions {
    /**
     * x value or first line edge
     */
    x1?: number | undefined;
    /**
     * x value or second line edge
     */
    x2?: number | undefined;
    /**
     * y value or first line edge
     */
    y1?: number | undefined;
    /**
     * y value or second line edge
     */
    y2?: number | undefined;
}
export interface Line extends Object, ILineOptions {}
export class Line {
    /**
     * Constructor
     * @param [points] Array of points
     * @param [options] Options object
     */
    constructor(points?: number[], objObjects?: ILineOptions);
    /**
     * Returns svg representation of an instance
     * @return {Array} an array of strings with the specific svg representation
     * of the instance
     */
    _toSVG(): string;
    /**
     * Returns fabric.Line instance from an SVG element
     * @static
     * @param {SVGElement} element Element to parse
     * @param {Object} [options] Options object
     * @param {Function} [callback] callback function invoked after parsing
     */
    static fromElement(element: SVGElement, callback?: Function, options?: ILineOptions): Line;
    /**
     * Returns fabric.Line instance from an object representation
     * @param object Object to create an instance from
     */
    static fromObject(object: any): Line;
    static ATTRIBUTE_NAMES: string[];
    /**
     * Produces a function that calculates distance from canvas edge to Line origin.
     */
    makeEdgeToOriginGetter(
        propertyNames: { origin: number; axis1: any; axis2: any; dimension: any },
        originValues: { nearest: any; center: any; farthest: any },
    ): Function;
    /**
     * Recalculates line points given width and height
     */
    calcLinePoints(): { x1: number; x2: number; y1: number; y2: number };
}

interface IObjectOptions {
    /**
     * Type of an object (rect, circle, path, etc.).
     * Note that this property is meant to be read-only and not meant to be modified.
     * If you modify, certain parts of Fabric (such as JSON loading) won't work correctly.
     */
    type?: string | undefined;

    /**
     * Horizontal origin of transformation of an object (one of "left", "right", "center")
     */
    originX?: string | undefined;

    /**
     * Vertical origin of transformation of an object (one of "top", "bottom", "center")
     */
    originY?: string | undefined;

    /**
     * Top position of an object. Note that by default it's relative to object center. You can change this by setting originY={top/center/bottom}
     */
    top?: number | undefined;

    /**
     * Left position of an object. Note that by default it's relative to object center. You can change this by setting originX={left/center/right}
     */
    left?: number | undefined;

    /**
     * Object width
     */
    width?: number | undefined;

    /**
     * Object height
     */
    height?: number | undefined;

    /**
     * Object scale factor (horizontal)
     */
    scaleX?: number | undefined;

    /**
     * Object scale factor (vertical)
     */
    scaleY?: number | undefined;

    /**
     * When true, an object is rendered as flipped horizontally
     */
    flipX?: boolean | undefined;

    /**
     * When true, an object is rendered as flipped vertically
     */
    flipY?: boolean | undefined;

    /**
     * Opacity of an object
     */
    opacity?: number | undefined;

    /**
     * Angle of rotation of an object (in degrees)
     */
    angle?: number | undefined;

    /**
     * Object skew factor (horizontal)
     */
    skewX?: number | undefined;

    /**
     * Object skew factor (vertical)
     */
    skewY?: number | undefined;

    /**
     * Size of object's controlling corners (in pixels)
     */
    cornerSize?: number | undefined;

    /**
     * When true, object's controlling corners are rendered as transparent inside (i.e. stroke instead of fill)
     */
    transparentCorners?: boolean | undefined;

    /**
     * Default cursor value used when hovering over this object on canvas
     */
    hoverCursor?: string | undefined;

    /**
     * Default cursor value used when moving an object on canvas
     */
    moveCursor?: string | undefined;

    /**
     * Padding between object and its controlling borders (in pixels)
     */
    padding?: number | undefined;

    /**
     * Color of controlling borders of an object (when it's active)
     */
    borderColor?: string | undefined;

    /**
     * Array specifying dash pattern of an object's border (hasBorder must be true)
     */
    borderDashArray?: number[] | undefined;

    /**
     * Color of controlling corners of an object (when it's active)
     */
    cornerColor?: string | undefined;

    /**
     * Color of controlling corners of an object (when it's active and transparentCorners false)
     */
    cornerStrokeColor?: string | undefined;

    /**
     * Specify style of control, 'rect' or 'circle'
     */
    cornerStyle?: "rect" | "circle" | undefined;

    /**
     * Array specifying dash pattern of an object's control (hasBorder must be true)
     */
    cornerDashArray?: number[] | undefined;

    /**
     * When true, this object will use center point as the origin of transformation
     * when being scaled via the controls.
     * <b>Backwards incompatibility note:</b> This property replaces "centerTransform" (Boolean).
     */
    centeredScaling?: boolean | undefined;

    /**
     * When true, this object will use center point as the origin of transformation
     * when being rotated via the controls.
     * <b>Backwards incompatibility note:</b> This property replaces "centerTransform" (Boolean).
     */
    centeredRotation?: boolean | undefined;

    /**
     * Color of object's fill
     */
    fill?: string | Pattern | Gradient | undefined;

    /**
     * Fill rule used to fill an object
     * accepted values are nonzero, evenodd
     * Backwards incompatibility note: This property was used for setting globalCompositeOperation until v1.4.12, use `globalCompositeOperation` instead
     */
    fillRule?: string | undefined;

    /**
     * Composite rule used for canvas globalCompositeOperation
     */
    globalCompositeOperation?: string | undefined;

    /**
     * Background color of an object. Only works with text objects at the moment.
     */
    backgroundColor?: string | undefined;

    /**
     * Selection Background color of an object. colored layer behind the object when it is active.
     * does not mix good with globalCompositeOperation methods.
     */
    selectionBackgroundColor?: string | undefined;

    /**
     * When defined, an object is rendered via stroke and this property specifies its color
     */
    stroke?: string | undefined;

    /**
     * Width of a stroke used to render this object
     */
    strokeWidth?: number | undefined;

    /**
     * Array specifying dash pattern of an object's stroke (stroke must be defined)
     */
    strokeDashArray?: number[] | undefined;

    /**
     * Line offset of an object's stroke
     * @default
     */
    strokeDashOffset?: number | undefined;

    /**
     * Line endings style of an object's stroke (one of "butt", "round", "square")
     */
    strokeLineCap?: string | undefined;

    /**
     * Corner style of an object's stroke (one of "bevil", "round", "miter")
     */
    strokeLineJoin?: string | undefined;

    /**
     * Maximum miter length (used for strokeLineJoin = "miter") of an object's stroke
     */
    strokeMiterLimit?: number | undefined;

    /**
     * Shadow object representing shadow of this shape
     */
    shadow?: Shadow | string | undefined;

    /**
     * Opacity of object's controlling borders when object is active and moving
     */
    borderOpacityWhenMoving?: number | undefined;

    /**
     * Scale factor of object's controlling borders
     */
    borderScaleFactor?: number | undefined;

    /**
     * Minimum allowed scale value of an object
     */
    minScaleLimit?: number | undefined;

    /**
     * When set to `false`, an object can not be selected for modification (using either point-click-based or group-based selection).
     * But events still fire on it.
     */
    selectable?: boolean | undefined;

    /**
     * When set to `false`, an object can not be a target of events. All events propagate through it. Introduced in v1.3.4
     */
    evented?: boolean | undefined;

    /**
     * When set to `false`, an object is not rendered on canvas
     */
    visible?: boolean | undefined;

    /**
     * When set to `false`, object's controls are not displayed and can not be used to manipulate object
     */
    hasControls?: boolean | undefined;

    /**
     * When set to `false`, object's controlling borders are not rendered
     */
    hasBorders?: boolean | undefined;

    /**
     * When set to `false`, object's controlling rotating point will not be visible or selectable
     */
    hasRotatingPoint?: boolean | undefined;

    /**
     * Offset for object's controlling rotating point (when enabled via `hasRotatingPoint`)
     */
    rotatingPointOffset?: number | undefined;

    /**
     * When set to `true`, objects are "found" on canvas on per-pixel basis rather than according to bounding box
     */
    perPixelTargetFind?: boolean | undefined;

    /**
     * When `false`, default object's values are not included in its serialization
     */
    includeDefaultValues?: boolean | undefined;

    /**
     * When `true`, object horizontal movement is locked
     */
    lockMovementX?: boolean | undefined;

    /**
     * When `true`, object vertical movement is locked
     */
    lockMovementY?: boolean | undefined;

    /**
     * When `true`, object rotation is locked
     */
    lockRotation?: boolean | undefined;

    /**
     * When `true`, object horizontal scaling is locked
     */
    lockScalingX?: boolean | undefined;

    /**
     * When `true`, object vertical scaling is locked
     */
    lockScalingY?: boolean | undefined;

    /**
     * When `true`, object non-uniform scaling is locked
     */
    lockUniScaling?: boolean | undefined;

    /**
     * When `true`, object horizontal skewing is locked
     */
    lockSkewingX?: boolean | undefined;

    /**
     * When `true`, object vertical skewing is locked
     */
    lockSkewingY?: boolean | undefined;

    /**
     * When `true`, object cannot be flipped by scaling into negative values
     */
    lockScalingFlip?: boolean | undefined;

    /**
     * When `true`, object is not exported in OBJECT/JSON
     * since 1.6.3
     * @default
     */
    excludeFromExport?: boolean | undefined;

    /**
     * When `true`, object is cached on an additional canvas.
     */
    objectCaching?: boolean | undefined;

    /**
     * When `true`, object properties are checked for cache invalidation. In some particular
     * situation you may want this to be disabled ( spray brush, very big, groups)
     * or if your application does not allow you to modify properties for groups child you want
     * to disable it for groups.
     * default to false
     * since 1.7.0
     * @default false
     */
    statefullCache?: boolean | undefined;

    /**
     * When `true`, cache does not get updated during scaling. The picture will get blocky if scaled
     * too much and will be redrawn with correct details at the end of scaling.
     * this setting is performance and application dependant.
     * default to true
     * since 1.7.0
     */
    noScaleCache?: boolean | undefined;

    /**
     * When `false`, the stoke width will scale with the object.
     * When `true`, the stroke will always match the exact pixel size entered for stroke width.
     * default to false
     * @since 2.6.0
     * @default false
     */
    strokeUniform?: boolean | undefined;

    /**
     * When set to `true`, object's cache will be rerendered next render call.
     */
    dirty?: boolean | undefined;

    /**
     * Determines if the fill or the stroke is drawn first (one of "fill" or "stroke")
     */
    paintFirst?: string | undefined;

    /**
     * List of properties to consider when checking if state
     * of an object is changed (fabric.Object#hasStateChanged)
     * as well as for history (undo/redo) purposes
     */
    stateProperties?: string[] | undefined;

    /**
     * List of properties to consider when checking if cache needs refresh
     * Those properties are checked by statefullCache ON ( or lazy mode if we want ) or from single
     * calls to Object.set(key, value). If the key is in this list, the object is marked as dirty
     * and refreshed at the next render
     */
    cacheProperties?: string[] | undefined;

    /**
     * A fabricObject that, without stroke define a clipping area with their shape. filled in black
     * the clipPath object gets used when the object has rendered, and the context is placed in the center
     * of the object cacheCanvas.
     * If you want 0,0 of a clipPath to align with an object center, use clipPath.originX/Y to 'center'
     */
    clipPath?: Object | undefined;

    /**
     * Meaningful ONLY when the object is used as clipPath.
     * if true, the clipPath will make the object clip to the outside of the clipPath
     * since 2.4.0
     * @default false
     */
    inverted?: boolean | undefined;

    /**
     * Meaningful ONLY when the object is used as clipPath.
     * if true, the clipPath will have its top and left relative to canvas, and will
     * not be influenced by the object transform. This will make the clipPath relative
     * to the canvas, but clipping just a particular object.
     * WARNING this is beta, this feature may change or be renamed.
     * since 2.4.0
     * @default false
     */
    absolutePositioned?: boolean | undefined;

    /**
     * Not used by fabric, just for convenience
     */
    name?: string | undefined;

    /**
     * Not used by fabric, just for convenience
     */
    data?: any;
    /**
     * Describe object's corner position in canvas element coordinates.
     * properties are tl,mt,tr,ml,mr,bl,mb,br,mtr for the main controls.
     * each property is an object with x, y and corner.
     * The `corner` property contains in a similar manner the 4 points of the
     * interactive area of the corner.
     * The coordinates depends from this properties: width, height, scaleX, scaleY
     * skewX, skewY, angle, strokeWidth, viewportTransform, top, left, padding.
     * The coordinates get updated with @method setCoords.
     * You can calculate them without updating with @method calcCoords;
     */
    oCoords?:
        | { tl: Point; mt: Point; tr: Point; ml: Point; mr: Point; bl: Point; mb: Point; br: Point; mtr: Point }
        | undefined;
    /**
     * Describe object's corner position in canvas object absolute coordinates
     * properties are tl,tr,bl,br and describe the four main corner.
     * each property is an object with x, y, instance of Fabric.Point.
     * The coordinates depends from this properties: width, height, scaleX, scaleY
     * skewX, skewY, angle, strokeWidth, top, left.
     * Those coordinates are usefull to understand where an object is. They get updated
     * with oCoords but they do not need to be updated when zoom or panning change.
     * The coordinates get updated with @method setCoords.
     * You can calculate them without updating with @method calcCoords(true);
     */
    aCoords?: { bl: Point; br: Point; tl: Point; tr: Point } | undefined;
    /**
     * storage for object full transform matrix
     */
    matrixCache?: any;
    /**
     * storage for object transform matrix
     */
    ownMatrixCache?: any;

    /**
     * Indicates the angle that an object will lock to while rotating. Can get from canvas.
     */
    snapAngle?: number | undefined;
    /**
     * Indicates the distance from the snapAngle the rotation will lock to the snapAngle. Can get from canvas.
     */
    snapThreshold?: null | number | undefined;
    /**
     * The group the object is part of
     */
    group?: Group | undefined;
    /**
     * The canvas the object belongs to
     */
    canvas?: Canvas | undefined;
}
export interface Object extends IObservable<Object>, IObjectOptions, IObjectAnimation<Object> {}
export class Object {
    _controlsVisibility: {
        bl?: boolean | undefined;
        br?: boolean | undefined;
        mb?: boolean | undefined;
        ml?: boolean | undefined;
        mr?: boolean | undefined;
        mt?: boolean | undefined;
        tl?: boolean | undefined;
        tr?: boolean | undefined;
        mtr?: boolean | undefined;
    };

    controls: { [key: string]: Control };

    constructor(options?: IObjectOptions);
    initialize(options?: IObjectOptions): Object;

    /* Sets object's properties from options
     * @param {Object} [options] Options object
     */
    setOptions(options: IObjectOptions): void;

    /**
     * Transforms context when rendering an object
     * @param {CanvasRenderingContext2D} ctx Context
     */
    transform(ctx: CanvasRenderingContext2D): void;

    /**
     * Returns an object representation of an instance
     * @param [propertiesToInclude] Any properties that you might want to additionally include in the output
     */
    toObject(propertiesToInclude?: string[]): any;

    /**
     * Returns (dataless) object representation of an instance
     * @param [propertiesToInclude] Any properties that you might want to additionally include in the output
     */
    toDatalessObject(propertiesToInclude?: string[]): any;

    /**
     * Returns a string representation of an instance
     */
    toString(): string;

    /**
     * Return the object scale factor counting also the group scaling
     * @return {Object} object with scaleX and scaleY properties
     */
    getObjectScaling(): { scaleX: number; scaleY: number };

    /**
     * Return the object scale factor counting also the group scaling, zoom and retina
     * @return {Object} object with scaleX and scaleY properties
     */
    getTotalObjectScaling(): { scaleX: number; scaleY: number };

    /**
     * Return the object opacity counting also the group property
     * @return {Number}
     */
    getObjectOpacity(): number;

    /**
     * This callback function is called by the parent group of an object every
     * time a non-delegated property changes on the group. It is passed the key
     * and value as parameters. Not adding in this function's signature to avoid
     * Travis build error about unused variables.
     */
    setOnGroup(): void;

    /**
     * Retrieves viewportTransform from Object's canvas if possible
     */
    getViewportTransform(): any[];

    /**
     * Renders an object on a specified context
     * @param {CanvasRenderingContext2D} ctx Context to render on
     */
    render(ctx: CanvasRenderingContext2D): void;

    /**
     * When set to `true`, force the object to have its own cache, even if it is inside a group
     * it may be needed when your object behave in a particular way on the cache and always needs
     * its own isolated canvas to render correctly.
     * Created to be overridden
     * since 1.7.12
     * @returns false
     */
    needsItsOwnCache(): boolean;

    /**
     * Decide if the object should cache or not. Create its own cache level
     * objectCaching is a global flag, wins over everything
     * needsItsOwnCache should be used when the object drawing method requires
     * a cache step. None of the fabric classes requires it.
     * Generally you do not cache objects in groups because the group outside is cached.
     * @return {Boolean}
     */
    shouldCache(): boolean;

    /**
     * Check if this object or a child object will cast a shadow
     * used by Group.shouldCache to know if child has a shadow recursively
     * @return {Boolean}
     */
    willDrawShadow(): boolean;

    /**
     * Execute the drawing operation for an object clipPath
     * @param {CanvasRenderingContext2D} ctx Context to render on
     */
    drawClipPathOnCache(ctx: CanvasRenderingContext2D): void;

    /**
     * Execute the drawing operation for an object on a specified context
     * @param {CanvasRenderingContext2D} ctx Context to render on
     */
    drawObject(ctx: CanvasRenderingContext2D): void;

    /**
     * Paint the cached copy of the object on the target context.
     * @param {CanvasRenderingContext2D} ctx Context to render on
     */
    drawCacheOnCanvas(ctx: CanvasRenderingContext2D): void;

    /**
     * Check if cache is dirty
     * @param {Boolean} skipCanvas skip canvas checks because this object is painted
     * on parent canvas.
     */
    isCacheDirty(skipCanvas?: boolean): boolean;

    /**
     * Clones an instance, using a callback method will work for every object.
     * @param callback Callback is invoked with a clone as a first argument
     * @param [propertiesToInclude] Any properties that you might want to additionally include in the output
     */
    clone(callback: Function, propertiesToInclude?: string[]): void;

    /**
     * Creates an instance of fabric.Image out of an object
     * @param callback callback, invoked with an instance as a first argument
     */
    cloneAsImage(callback: Function, options?: IDataURLOptions): Object;

    /**
     * Converts an object into a HTMLCanvas element
     * @param {Object} options Options object
     * @param {Number} [options.multiplier=1] Multiplier to scale by
     * @param {Number} [options.left] Cropping left offset. Introduced in v1.2.14
     * @param {Number} [options.top] Cropping top offset. Introduced in v1.2.14
     * @param {Number} [options.width] Cropping width. Introduced in v1.2.14
     * @param {Number} [options.height] Cropping height. Introduced in v1.2.14
     * @param {Boolean} [options.enableRetinaScaling] Enable retina scaling for clone image. Introduce in 1.6.4
     * @param {Boolean} [options.withoutTransform] Remove current object transform ( no scale , no angle, no flip, no skew ). Introduced in 2.3.4
     * @param {Boolean} [options.withoutShadow] Remove current object shadow. Introduced in 2.4.2
     * @return {HTMLCanvasElement} Returns a new HTMLCanvasElement painted with the current canvas object
     */
    toCanvasElement(options?: IDataURLOptions): HTMLCanvasElement;

    /**
     * Converts an object into a data-url-like string
     * @param options Options object
     */
    toDataURL(options: IDataURLOptions): string;

    /**
     * Returns true if specified type is identical to the type of an instance
     * @param type Type to check against
     */
    isType(type: string): boolean;

    /**
     * Returns complexity of an instance
     */
    complexity(): number;

    /**
     * Returns a JSON representation of an instance
     * @param [propertiesToInclude] Any properties that you might want to additionally include in the output
     */
    toJSON(propertiesToInclude?: string[]): { version: string; objects: Object[] };

    /**
     * Sets "angle" of an instance
     * @param angle Angle value
     */
    rotate(angle: number): Object;

    /**
     * Centers object horizontally on canvas to which it was added last.
     * You might need to call `setCoords` on an object after centering, to update controls area.
     */
    centerH(): Object;

    /**
     * Centers object horizontally on current viewport of canvas to which it was added last.
     * You might need to call `setCoords` on an object after centering, to update controls area.
     * @return {fabric.Object} thisArg
     * @chainable
     */
    viewportCenterH(): Object;

    /**
     * Centers object vertically on canvas to which it was added last.
     * You might need to call `setCoords` on an object after centering, to update controls area.
     */
    centerV(): Object;

    /**
     * Centers object vertically on current viewport of canvas to which it was added last.
     * You might need to call `setCoords` on an object after centering, to update controls area.
     * @return {fabric.Object} thisArg
     * @chainable
     */
    viewportCenterV(): Object;

    /**
     * Centers object vertically and horizontally on canvas to which is was added last
     * You might need to call `setCoords` on an object after centering, to update controls area.
     */
    center(): Object;

    /**
     * Centers object on current viewport of canvas to which it was added last.
     * You might need to call `setCoords` on an object after centering, to update controls area.
     * @return {fabric.Object} thisArg
     * @chainable
     */
    viewportCenter(): Object;

    /**
     * Returns coordinates of a pointer relative to an object
     * @param e Event to operate upon
     * @param [pointer] Pointer to operate upon (instead of event)
     */
    getLocalPointer(e: Event | undefined, pointer?: { x: number; y: number }): { x: number; y: number };

    /**
     * Basic getter
     * @param property Property name
     */
    get<K extends keyof this>(property: K): this[K];

    /**
     * Sets property to a given value.
     * When changing position/dimension -related properties (left, top, scale, angle, etc.) `set` does not update position of object's borders/controls.
     * If you need to update those, call `setCoords()`.
     * @param key Property name
     * @param value Property value (if function, the value is passed into it and its return value is used as a new one)
     */
    set<K extends keyof this>(key: K, value: this[K] | ((value: this[K]) => this[K])): Object;

    /**
     * Sets property to a given value.
     * When changing position/dimension -related properties (left, top, scale, angle, etc.) `set` does not update position of object's borders/controls.
     * If you need to update those, call `setCoords()`.
     * @param options Property object, iterate over the object properties
     */
    set(options: Partial<this>): Object;

    /**
     * Toggles specified property from `true` to `false` or from `false` to `true`
     * @param property Property to toggle
     */
    toggle(property: keyof this): Object;

    /**
     * Sets sourcePath of an object
     * @param value Value to set sourcePath to
     */
    setSourcePath(value: string): Object;

    /**
     * Sets "angle" of an instance
     * @param angle Angle value
     */
    setAngle(angle: number): Object;

    /**
     * Sets object's properties from options
     * @param [options] Options object
     */
    setOptions(options?: any): void;
    /**
     * Sets sourcePath of an object
     * @param value Value to set sourcePath to
     */
    setSourcePath(value: string): Object;
    // functions from object svg export mixin
    // -----------------------------------------------------------------------------------------------------------------------------------
    /**
     * Returns styles-string for svg-export
     * @param {Boolean} skipShadow a boolean to skip shadow filter output
     * @return {String}
     */
    getSvgStyles(skipShadow?: boolean): string;
    /**
     * Returns transform-string for svg-export
     * @param {Boolean} use the full transform or the single object one.
     * @return {String}
     */
    getSvgTransform(full?: boolean, additionalTransform?: string): string;
    /**
     * Returns transform-string for svg-export from the transform matrix of single elements
     */
    getSvgTransformMatrix(): string;

    // functions from stateful mixin
    // -----------------------------------------------------------------------------------------------------------------------------------
    /**
     * Returns true if object state (one of its state properties) was changed
     * @param {String} [propertySet] optional name for the set of property we want to save
     * @return {Boolean} true if instance' state has changed since `{@link fabric.Object#saveState}` was called
     */
    hasStateChanged(propertySet: string): boolean;
    /**
     * Saves state of an object
     * @param [options] Object with additional `stateProperties` array to include when saving state
     * @return thisArg
     */
    saveState(options?: { stateProperties?: any[] | undefined; propertySet?: string | undefined }): Object;
    /**
     * Setups state of an object
     * @param {Object} [options] Object with additional `stateProperties` array to include when saving state
     * @return {fabric.Object} thisArg
     */
    setupState(options?: any): Object;
    // functions from object straightening mixin
    // -----------------------------------------------------------------------------------------------------------------------------------
    /**
     * Straightens an object (rotating it from current angle to one of 0, 90, 180, 270, etc. depending on which is closer)
     */
    straighten(): Object;
    /**
     * Same as straighten but with animation
     */
    fxStraighten(callbacks: Callbacks): Object;

    // functions from object stacking mixin
    // -----------------------------------------------------------------------------------------------------------------------------------
    /**
     * Moves an object up in stack of drawn objects
     * @param [intersecting] If `true`, send object in front of next upper intersecting object
     */
    bringForward(intersecting?: boolean): Object;
    /**
     * Moves an object to the top of the stack of drawn objects
     */
    bringToFront(): Object;
    /**
     * Moves an object down in stack of drawn objects
     * @param [intersecting] If `true`, send object behind next lower intersecting object
     */
    sendBackwards(intersecting?: boolean): Object;
    /**
     * Moves an object to the bottom of the stack of drawn objects
     */
    sendToBack(): Object;
    /**
     * Moves an object to specified level in stack of drawn objects
     * @param index New position of object
     */
    moveTo(index: number): Object;

    // functions from object origin mixin
    // -----------------------------------------------------------------------------------------------------------------------------------
    /**
     * Translates the coordinates from origin to center coordinates (based on the object's dimensions)
     * @param point The point which corresponds to the originX and originY params
     * @param originX Horizontal origin: 'left', 'center' or 'right'
     * @param originY Vertical origin: 'top', 'center' or 'bottom'
     */
    translateToCenterPoint(point: Point, originX: string, originY: string): Point;

    /**
     * Translates the coordinates from center to origin coordinates (based on the object's dimensions)
     * @param center The point which corresponds to center of the object
     * @param originX Horizontal origin: 'left', 'center' or 'right'
     * @param originY Vertical origin: 'top', 'center' or 'bottom'
     */
    translateToOriginPoint(center: Point, originX: string, originY: string): Point;
    /**
     * Returns the real center coordinates of the object
     */
    getCenterPoint(): Point;

    /**
     * Returns the coordinates of the object as if it has a different origin
     * @param {String} originX Horizontal origin: 'left', 'center' or 'right'
     * @param {String} originY Vertical origin: 'top', 'center' or 'bottom'
     * @return {fabric.Point}
     */
    getPointByOrigin(originX: string, originY: string): Point;

    /**
     * Returns the point in local coordinates
     * @param point The point relative to the global coordinate system
     * @param originX Horizontal origin: 'left', 'center' or 'right'
     * @param originY Vertical origin: 'top', 'center' or 'bottom'
     */
    toLocalPoint(point: Point, originX: string, originY: string): Point;

    /**
     * Sets the position of the object taking into consideration the object's origin
     * @param pos The new position of the object
     * @param originX Horizontal origin: 'left', 'center' or 'right'
     * @param originY Vertical origin: 'top', 'center' or 'bottom'
     */
    setPositionByOrigin(pos: Point, originX: string, originY: string): void;

    /**
     * @param to One of 'left', 'center', 'right'
     */
    adjustPosition(to: string): void;

    // functions from interactivity mixin
    // -----------------------------------------------------------------------------------------------------------------------------------
    /**
     * Draws borders of an object's bounding box.
     * Requires public properties: width, height
     * Requires public options: padding, borderColor
     * @param {CanvasRenderingContext2D} ctx Context to draw on
     * @param {Object} styleOverride object to override the object style
     * @return {fabric.Object} thisArg
     * @chainable
     */
    drawBorders(ctx: CanvasRenderingContext2D, styleOverride?: any): Object;

    /**
     * Draws borders of an object's bounding box when it is inside a group.
     * Requires public properties: width, height
     * Requires public options: padding, borderColor
     * @param {CanvasRenderingContext2D} ctx Context to draw on
     * @param {object} options object representing current object parameters
     * @param {Object} styleOverride object to override the object style
     * @return {fabric.Object} thisArg
     * @chainable
     */
    drawBordersInGroup(ctx: CanvasRenderingContext2D, options?: any, styleOverride?: any): Object;

    /**
     * Draws corners of an object's bounding box.
     * Requires public properties: width, height
     * Requires public options: cornerSize, padding
     * @param {CanvasRenderingContext2D} ctx Context to draw on
     * @param {Object} styleOverride object to override the object style
     * @return {fabric.Object} thisArg
     * @chainable
     */
    drawControls(ctx: CanvasRenderingContext2D, styleOverride?: any): Object;

    /**
     * Draws a colored layer behind the object, inside its selection borders.
     * Requires public options: padding, selectionBackgroundColor
     * this function is called when the context is transformed
     * has checks to be skipped when the object is on a staticCanvas
     * @param {CanvasRenderingContext2D} ctx Context to draw on
     * @return {fabric.Object} thisArg
     * @chainable
     */
    drawSelectionBackground(ctx: CanvasRenderingContext2D): Object;

    /**
     * Draws corners of an object's bounding box.
     * Requires public properties: width, height
     * Requires public options: cornerSize, padding
     * @param ctx Context to draw on
     */
    drawCorners(context: CanvasRenderingContext2D): Object;

    /**
     * Returns true if the specified control is visible, false otherwise.
     * @param controlName The name of the control. Possible values are 'tl', 'tr', 'br', 'bl', 'ml', 'mt', 'mr', 'mb', 'mtr'.
     */
    isControlVisible(controlName: string): boolean;
    /**
     * Sets the visibility of the specified control.
     * @param controlName The name of the control. Possible values are 'tl', 'tr', 'br', 'bl', 'ml', 'mt', 'mr', 'mb', 'mtr'.
     * @param visible true to set the specified control visible, false otherwise
     */
    setControlVisible(controlName: string, visible: boolean): Object;

    /**
     * Sets the visibility state of object controls.
     * @param [options] Options object
     */
    setControlsVisibility(options?: {
        bl?: boolean | undefined;
        br?: boolean | undefined;
        mb?: boolean | undefined;
        ml?: boolean | undefined;
        mr?: boolean | undefined;
        mt?: boolean | undefined;
        tl?: boolean | undefined;
        tr?: boolean | undefined;
        mtr?: boolean | undefined;
    }): this;

    // functions from geometry mixin
    // -------------------------------------------------------------------------------------------------------------------------------
    /**
     * Sets corner position coordinates based on current angle, width and height.
     * oCoords are used to find the corners
     * aCoords are used to quickly find an object on the canvas
     * lineCoords are used to quickly find object during pointer events.
     * See {@link https://github.com/kangax/fabric.js/wiki/When-to-call-setCoords|When-to-call-setCoords}
     * @param {Boolean} [skipCorners] skip calculation of oCoords.
     * @return {fabric.Object} thisArg
     * @chainable
     */
    setCoords(skipCorners?: boolean): this;
    /**
     * Returns coordinates of object's bounding rectangle (left, top, width, height)
     * the box is intented as aligned to axis of canvas.
     * @param {Boolean} [absolute] use coordinates without viewportTransform
     * @param {Boolean} [calculate] use coordinates of current position instead of .oCoords / .aCoords
     * @return {Object} Object with left, top, width, height properties
     */
    getBoundingRect(
        absolute?: boolean,
        calculate?: boolean,
    ): { left: number; top: number; width: number; height: number };
    /**
     * Checks if object is fully contained within area of another object
     * @param {Object} other Object to test
     * @param {Boolean} [absolute] use coordinates without viewportTransform
     * @param {Boolean} [calculate] use coordinates of current position instead of .oCoords
     * @return {Boolean} true if object is fully contained within area of another object
     */
    isContainedWithinObject(other: Object, absolute?: boolean, calculate?: boolean): boolean;
    /**
     * Checks if object is fully contained within area formed by 2 points
     * @param pointTL top-left point of area
     * @param pointBR bottom-right point of area
     */
    isContainedWithinRect(pointTL: any, pointBR: any, absolute?: boolean, calculate?: boolean): boolean;
    /**
     * Checks if point is inside the object
     * @param {fabric.Point} point Point to check against
     * @param {Object} [lines] object returned from @method _getImageLines
     * @param {Boolean} [absolute] use coordinates without viewportTransform
     * @param {Boolean} [calculate] use coordinates of current position instead of .oCoords
     * @return {Boolean} true if point is inside the object
     */
    containsPoint(point: Point, lines?: any, absolute?: boolean, calculate?: boolean): boolean;
    /**
     * Scales an object (equally by x and y)
     * @param value Scale factor
     * @return thisArg
     */
    scale(value: number): Object;
    /**
     * Scales an object to a given height, with respect to bounding box (scaling by x/y equally)
     * @param value New height value
     */
    scaleToHeight(value: number, absolute?: boolean): this;
    /**
     * Scales an object to a given width, with respect to bounding box (scaling by x/y equally)
     * @param value New width value
     */
    scaleToWidth(value: number, absolute?: boolean): this;
    /**
     * Checks if object intersects with another object
     * @param {Object} other Object to test
     * @param {Boolean} [absolute] use coordinates without viewportTransform
     * @param {Boolean} [calculate] use coordinates of current position instead of .oCoords
     * @return {Boolean} true if object intersects with another object
     */
    intersectsWithObject(other: Object, absolute?: boolean, calculate?: boolean): boolean;
    /**
     * Checks if object intersects with an area formed by 2 points
     * @param {Object} pointTL top-left point of area
     * @param {Object} pointBR bottom-right point of area
     * @param {Boolean} [absolute] use coordinates without viewportTransform
     * @param {Boolean} [calculate] use coordinates of current position instead of .oCoords
     * @return {Boolean} true if object intersects with an area formed by 2 points
     */
    intersectsWithRect(pointTL: any, pointBR: any, absolute?: boolean, calculate?: boolean): boolean;

    /**
     * Animates object's properties
     * object.animate('left', ..., {duration: ...});
     * @param property Property to animate
     * @param value Value to animate property
     * @param options The animation options
     */
    animate(property: string, value: number | string, options?: IAnimationOptions): Object;
    /**
     * Animates object's properties
     * object.animate({ left: ..., top: ... }, { duration: ... });
     * @param properties Properties to animate with values to animate to
     * @param options The animation options
     */
    animate(properties: { [key: string]: number | string }, options?: IAnimationOptions): Object;
    /**
     * Calculate and returns the .coords of an object.
     * @return {Object} Object with tl, tr, br, bl ....
     * @chainable
     */
    calcCoords(absolute?: boolean): any;
    /**
     * calculate trasform Matrix that represent current transformation from
     * object properties.
     * @param {Boolean} [skipGroup] return transformMatrix for object and not go upward with parents
     * @return {Array} matrix Transform Matrix for the object
     */
    calcTransformMatrix(skipGroup?: boolean): any[];
    /**
     * calculate transform matrix that represents the current transformations from the
     * object's properties, this matrix does not include the group transformation
     * @return {Array} transform matrix for the object
     */
    calcOwnMatrix(): any[];
    /**
     * return correct set of coordinates for intersection
     */
    getCoords(absolute?: boolean, calculate?: boolean): [fabric.Point, fabric.Point, fabric.Point, fabric.Point];
    /**
     * Returns height of an object bounding box counting transformations
     * before 2.0 it was named getHeight();
     * @return {Number} height value
     */
    getScaledHeight(): number;
    /**
     * Returns width of an object bounding box counting transformations
     * before 2.0 it was named getWidth();
     * @return {Number} width value
     */
    getScaledWidth(): number;
    /**
     * Returns id attribute for svg output
     * @return {String}
     */
    getSvgCommons(): string;
    /**
     * Returns filter for svg shadow
     * @return {String}
     */
    getSvgFilter(): string;
    /**
     * Returns styles-string for svg-export
     * @param {Object} style the object from which to retrieve style properties
     * @param {Boolean} useWhiteSpace a boolean to include an additional attribute in the style.
     * @return {String}
     */
    getSvgSpanStyles(style: any, useWhiteSpace?: boolean): string;
    /**
     * Returns text-decoration property for svg-export
     * @param {Object} style the object from which to retrieve style properties
     * @return {String}
     */
    getSvgTextDecoration(style: any): string;
    /**
     * Checks if object is contained within the canvas with current viewportTransform
     * the check is done stopping at first point that appears on screen
     * @param {Boolean} [calculate] use coordinates of current position instead of .aCoords
     * @return {Boolean} true if object is fully or partially contained within canvas
     */
    isOnScreen(calculate?: boolean): boolean;
    /**
     * Checks if object is partially contained within the canvas with current viewportTransform
     * @param {Boolean} [calculate] use coordinates of current position instead of .oCoords
     * @return {Boolean} true if object is partially contained within canvas
     */
    isPartiallyOnScreen(calculate?: boolean): boolean;
    /**
     * This callback function is called every time _discardActiveObject or _setActiveObject
     * try to to deselect this object. If the function returns true, the process is cancelled
     * @return {Boolean} true to cancel selection
     */
    onDeselect(options: { e?: Event | undefined; object?: Object | undefined }): boolean;
    /**
     * This callback function is called every time _discardActiveObject or _setActiveObject
     * try to to deselect this object. If the function returns true, the process is cancelled
     * @param {Object} [options] options sent from the upper functions
     * @param {Event} [options.e] event if the process is generated by an event
     */
    onDeselect(options: { e?: Event | undefined; object?: fabric.Object | undefined }): boolean;
    /**
     * This callback function is called every time _discardActiveObject or _setActiveObject
     * try to to select this object. If the function returns true, the process is cancelled
     */
    onSelect(options: { e?: Event | undefined }): boolean;
    /**
     * Returns svg clipPath representation of an instance
     * @param {Function} [reviver] Method for further parsing of svg representation.
     * @return {String} svg representation of an instance
     */
    toClipPathSVG(reviver?: Function): string;
    /**
     * Returns svg representation of an instance
     * @param {Function} [reviver] Method for further parsing of svg representation.
     * @return {String} svg representation of an instance
     */
    toSVG(reviver?: Function): string;
    /**
     * Translates the coordinates from a set of origin to another (based on the object's dimensions)
     * @param {fabric.Point} point The point which corresponds to the originX and originY params
     * @param {String} fromOriginX Horizontal origin: 'left', 'center' or 'right'
     * @param {String} fromOriginY Vertical origin: 'top', 'center' or 'bottom'
     * @param {String} toOriginX Horizontal origin: 'left', 'center' or 'right'
     * @param {String} toOriginY Vertical origin: 'top', 'center' or 'bottom'
     * @return {fabric.Point}
     */
    translateToGivenOrigin(
        pointL: Point,
        fromOriginX: string,
        fromOriginY: string,
        toOriginX: string,
        toOriginY: string,
    ): Point;
    /*
     * Calculate object dimensions from its properties
     * @private
     * @return {Object} .x width dimension
     * @return {Object} .y height dimension
     */
    _getNonTransformedDimensions(): { x: number; y: number };
    /**
     * Returns the top, left coordinates
     * @return {fabric.Point}
     */
    _getLeftTopCoords(): Point;
    /*
     * Calculate object bounding box dimensions from its properties scale, skew.
     * @private
     * @return {Object} .x width dimension
     * @return {Object} .y height dimension
     */
    _getTransformedDimensions(skewX?: number, skewY?: number): { x: number; y: number };

    /**
     * @param {CanvasRenderingContext2D} ctx Context to render on
     */
    _renderFill(ctx: CanvasRenderingContext2D): void;
    /**
     * @param ctx
     */
    _renderStroke(ctx: CanvasRenderingContext2D): void;
    /**
     * @param {CanvasRenderingContext2D} ctx Context to render on
     */
    _removeShadow(ctx: CanvasRenderingContext2D): void;
    /**
     * Sets line dash
     * @param {CanvasRenderingContext2D} ctx Context to set the dash line on
     * @param {Array} dashArray array representing dashes
     * @param {Function} alternative function to call if browser does not support lineDash
     */
    _setLineDash(
        ctx: CanvasRenderingContext2D,
        dashArray: number[],
        alternative?: (ctx: CanvasRenderingContext2D) => void,
    ): void;
    /**
     * @param {CanvasRenderingContext2D} ctx Context to render on
     * @param {Object} filler fabric.Pattern or fabric.Gradient
     * @return {Object} offset.offsetX offset for text rendering
     * @return {Object} offset.offsetY offset for text rendering
     */
    _applyPatternGradientTransform(ctx: CanvasRenderingContext2D, filler: string | Pattern | Gradient): void;
    /**
     * @param {CanvasRenderingContext2D} ctx Context to render on
     */
    _render(ctx: CanvasRenderingContext2D): void;
    /**
     * @param {CanvasRenderingContext2D} ctx Context to render on
     */
    _renderPaintInOrder(ctx: CanvasRenderingContext2D): void;
    /**
     * Returns the instance of the control visibility set for this object.
     * @returns {Object}
     */
    _getControlsVisibility(): {
        tl: boolean;
        tr: boolean;
        br: boolean;
        bl: boolean;
        ml: boolean;
        mt: boolean;
        mr: boolean;
        mb: boolean;
        mtr: boolean;
    };
    /**
     * Determines which corner has been clicked
     * @param {Object} pointer The pointer indicating the mouse position
     * @return {String|Boolean} corner code (tl, tr, bl, br, etc.), or false if nothing is found
     */
    _findTargetCorner(pointer: {
        x: number;
        y: number;
    }): boolean | "bl" | "br" | "mb" | "ml" | "mr" | "mt" | "tl" | "tr" | "mtr";
    /**
     * @param {String} key
     * @param {*} value
     */
    _set(key: string, value: any): Object;
    /**
     * Creates fabric Object instance
     * @param {string} Class name
     * @param {fabric.Object} Original object
     * @param {Function} Callback when complete
     * @param {Object} Extra parameters for fabric.Object
     * @return {fabric.Object}
     */
    static _fromObject(className: string, object: Object, callback?: Function, extraParam?: any): Object;
    /**
     * Defines the number of fraction digits to use when serializing object values.
     */
    static NUM_FRACTION_DIGITS?: number | undefined;
}

interface IPathOptions extends IObjectOptions {
    /**
     * Array of path points
     */
    path?: Point[] | undefined;
}
export interface Path extends Object, IPathOptions {}
export class Path {
    /**
     * Constructor
     * @param path Path data (sequence of coordinates and corresponding "command" tokens)
     * @param [options] Options object
     */
    constructor(path?: string | Point[], options?: IPathOptions);

    pathOffset: Point;

    /**
     * Returns svg clipPath representation of an instance
     * @param {Function} [reviver] Method for further parsing of svg representation.
     * @return {String} svg representation of an instance
     */
    toClipPathSVG(reviver?: Function): string;
    /**
     * Returns svg representation of an instance
     * @param [reviver] Method for further parsing of svg representation.
     * @return svg representation of an instance
     */
    toSVG(reviver?: Function): string;
    /**
     * Creates an instance of fabric.Path from an SVG <path> element
     * @param element to parse
     * @param callback Callback to invoke when an fabric.Path instance is created
     * @param [options] Options object
     */
    static fromElement(element: SVGElement, callback: Function, options?: IPathOptions): Path;
    /**
     * Creates an instance of fabric.Path from an object
     * @param callback Callback to invoke when an fabric.Path instance is created
     */
    static fromObject(object: any, callback: Function): Path;
    /**
     * List of attribute names to account for when parsing SVG element (used by `fabric.Polygon.fromElement`)
     */
    static ATTRIBUTE_NAMES: string[];
}
export interface Polygon extends IPolylineOptions {}
export class Polygon extends Polyline {
    /**
     * Constructor
     * @param points Array of points
     * @param [options] Options object
     */
    constructor(points: Array<{ x: number; y: number }>, options?: IPolylineOptions);
    /**
     * Returns Polygon instance from an SVG element
     * @param element Element to parse
     * @param [options] Options object
     */
    static fromElement(element: SVGElement, options?: IPolylineOptions): Polygon;
    /**
     * Returns fabric.Polygon instance from an object representation
     * @param object Object to create an instance from
     */
    static fromObject(object: any): Polygon;
}

interface IPolylineOptions extends IObjectOptions {
    /**
     * Points array
     */
    points?: Point[] | undefined;
}
export interface Polyline extends IPolylineOptions {}
export class Polyline extends Object {
    /**
     * Constructor
     * @param points Array of points (where each point is an object with x and y)
     * @param [options] Options object
     * @param [skipOffset] Whether points offsetting should be skipped
     */
    constructor(points: Array<{ x: number; y: number }>, options?: IPolylineOptions);

    pathOffset: Point;

    /**
     * Calculate the polygon min and max point from points array,
     * returning an object with left, top, width, height to measure the polygon size
     * @return {Object} object.left X coordinate of the polygon leftmost point
     * @return {Object} object.top Y coordinate of the polygon topmost point
     * @return {Object} object.width distance between X coordinates of the polygon leftmost and rightmost point
     * @return {Object} object.height distance between Y coordinates of the polygon topmost and bottommost point
     */
    _calcDimensions(): { left: number; top: number; width: number; height: number };
    /**
     * List of attribute names to account for when parsing SVG element (used by `fabric.Polygon.fromElement`)
     */
    static ATTRIBUTE_NAMES: string[];
    /**
     * Returns Polyline  instance from an SVG element
     * @param element Element to parse
     * @param [options] Options object
     */
    static fromElement(element: SVGElement, options?: IPolylineOptions): Polyline;
    /**
     * Returns fabric.Polyline instance from an object representation
     * @param object Object to create an instance from
     */
    static fromObject(object: any): Polyline;
}

interface IRectOptions extends IObjectOptions {
    /**
     * Horizontal border radius
     */
    rx?: number | undefined;

    /**
     * Vertical border radius
     */
    ry?: number | undefined;
}

export interface Rect extends IRectOptions {}
export class Rect extends Object {
    /**
     * Constructor
     * @param [options] Options object
     */
    constructor(options?: IRectOptions);
    /**
     * List of attribute names to account for when parsing SVG element (used by `fabric.Rect.fromElement`)
     */
    static ATTRIBUTE_NAMES: string[];
    /**
     * Returns Rect instance from an SVG element
     * @param element Element to parse
     * @param [options] Options object
     */
    static fromElement(element: SVGElement, options?: IRectOptions): Rect;
    /**
     * Returns Rect instance from an object representation
     * @param object Object to create an instance from
     */
    static fromObject(object: any): Rect;
}

interface TextOptions extends IObjectOptions {
    type?: string | undefined;
    /**
     * Font size (in pixels)
     */
    fontSize?: number | undefined;
    /**
     * Font weight (e.g. bold, normal, 400, 600, 800)
     */
    fontWeight?: string | number | undefined;
    /**
     * Font family
     */
    fontFamily?: string | undefined;
    /**
     * Text decoration underline.
     */
    underline?: boolean | undefined;
    /**
     * Text decoration overline.
     */
    overline?: boolean | undefined;
    /**
     * Text decoration linethrough.
     */
    linethrough?: boolean | undefined;
    /**
     * Text alignment. Possible values: "left", "center", "right", "justify",
     * "justify-left", "justify-center" or "justify-right".
     */
    textAlign?: string | undefined;
    /**
     * Font style . Possible values: "", "normal", "italic" or "oblique".
     */
    fontStyle?: "" | "normal" | "italic" | "oblique" | undefined;
    /**
     * Line height
     */
    lineHeight?: number | undefined;
    /**
     * Superscript schema object (minimum overlap)
     */
    superscript?: { size: number; baseline: number } | undefined;
    /**
     * Subscript schema object (minimum overlap)
     */
    subscript?: { size: number; baseline: number } | undefined;
    /**
     * Background color of text lines
     */
    textBackgroundColor?: string | undefined;
    /**
     * When defined, an object is rendered via stroke and this property specifies its color.
     * <b>Backwards incompatibility note:</b> This property was named "strokeStyle" until v1.1.6
     */
    stroke?: string | undefined;
    /**
     * Shadow object representing shadow of this shape.
     * <b>Backwards incompatibility note:</b> This property was named "textShadow" (String) until v1.2.11
     */
    shadow?: Shadow | string | undefined;
    /**
     * additional space between characters
     * expressed in thousands of em unit
     */
    charSpacing?: number | undefined;
    /**
     * Object containing character styles - top-level properties -> line numbers,
     * 2nd-level properties - charater numbers
     */
    styles?: any;
    /**
     * Baseline shift, stlyes only, keep at 0 for the main text object
     */
    deltaY?: number | undefined;
    /**
     * Text input direction. supporting RTL languages.
     */
    direction?: "ltr" | "rtl" | undefined;
    text?: string | undefined;
    /**
     * List of properties to consider when checking if cache needs refresh
     */
    cacheProperties?: string[] | undefined;
    /**
     * List of properties to consider when checking if
     * state of an object is changed ({@link fabric.Object#hasStateChanged})
     * as well as for history (undo/redo) purposes
     */
    stateProperties?: string[] | undefined;
}
export interface Text extends TextOptions {}
export class Text extends Object {
    _text: string[];
    cursorOffsetCache: { top: number; left: number };
    /**
     * Properties which when set cause object to change dimensions
     */
    _dimensionAffectingProps: string[];
    /**
     * List of lines in text object
     */
    textLines: string[];
    /**
     * List of grapheme lines in text object
     */
    _textLines: string[][];
    /**
     * List of unwrapped grapheme lines in text object
     */
    _unwrappedTextLines: string[][];
    /**
     * Use this regular expression to filter for whitespaces that is not a new line.
     * Mostly used when text is 'justify' aligned.
     */
    _reSpacesAndTabs: RegExp;
    /**
     * Use this regular expression to filter for whitespace that is not a new line.
     * Mostly used when text is 'justify' aligned.
     */
    _reSpaceAndTab: RegExp;
    /**
     * List of line widths
     */
    __lineWidths: number[];
    /**
     * List of line heights
     */
    __lineHeights: number[];
    /**
     * Contains characters bounding boxes for each line and char
     * Array of char grapheme bounding boxes
     */
    __charBounds?:
        | Array<
            Array<
                {
                    width: number;
                    left: number;
                    height?: number | undefined;
                    kernedWidth?: number | undefined;
                    deltaY?: number | undefined;
                }
            >
        >
        | undefined;
    /**
     * Text Line proportion to font Size (in pixels)
     */
    _fontSizeMult: number;
    /** */
    _fontSizeFraction: number;
    /** */
    __skipDimension: boolean;
    /**
     * use this size when measuring text. To avoid IE11 rounding errors
     * @default
     */
    CACHE_FONT_SIZE: number;

    /**
     * Constructor
     * @param text Text string
     * @param [options] Options object
     */
    constructor(text: string, options?: TextOptions);

    /**
     * Return a context for measurement of text string.
     * if created it gets stored for reuse
     * @return {fabric.Text} thisArg
     */
    getMeasuringContext(): CanvasRenderingContext2D;

    /**
     * Initialize or update text dimensions.
     * Updates this.width and this.height with the proper values.
     * Does not return dimensions.
     */
    initDimensions(): void;

    /**
     * Enlarge space boxes and shift the others
     */
    enlargeSpaces(): void;

    /**
     * Detect if the text line is ended with an hard break
     * text and itext do not have wrapping, return false
     * @return {Boolean}
     */
    isEndOfWrapping(lineIndex: number): boolean;

    /**
     * Returns string representation of an instance
     */
    toString(): string;

    /**
     * Computes height of character at given position
     * @param {Number} line the line number
     * @param {Number} char the character number
     * @return {Number} fontSize of the character
     */
    getHeightOfChar(line: number, char: number): number;

    /**
     * measure a text line measuring all characters.
     * @param {Number} lineIndex line number
     * @return {Object} object.width total width of characters
     * @return {Object} object.numOfSpaces length of chars that match this._reSpacesAndTabs
     */
    measureLine(lineIndex: number): { width: number; numOfSpaces: number };

    /**
     * Calculate height of line at 'lineIndex'
     * @param {Number} lineIndex index of line to calculate
     * @return {Number}
     */
    getHeightOfLine(lineIndex: number): number;

    /**
     * Calculate text box height
     */
    calcTextHeight(): number;

    /**
     * Turns the character into a 'superior figure' (i.e. 'superscript')
     * @param {Number} start selection start
     * @param {Number} end selection end
     * @returns {fabric.Text} thisArg
     * @chainable
     */
    setSuperscript(start: number, end: number): Text;

    /**
     * Turns the character into an 'inferior figure' (i.e. 'subscript')
     * @param {Number} start selection start
     * @param {Number} end selection end
     * @returns {fabric.Text} thisArg
     * @chainable
     */
    setSubscript(start: number, end: number): Text;

    /**
     * Retrieves the value of property at given character position
     * @param {Number} lineIndex the line number
     * @param {Number} charIndex the charater number
     * @param {String} property the property name
     * @returns the value of 'property'
     */
    getValueOfPropertyAt(lineIndex: number, charIndex: number, property: string): any;

    static DEFAULT_SVG_FONT_SIZE: number;

    /**
     * Returns fabric.Text instance from an SVG element (<b>not yet implemented</b>)
     * @static
     * @param {SVGElement} element Element to parse
     * @param {Function} callback callback function invoked after parsing
     * @param {Object} [options] Options object
     */
    static fromElement(element: SVGElement, callback?: Function, options?: TextOptions): Text;

    /**
     * Returns fabric.Text instance from an object representation
     * @static
     * @param {Object} object Object to create an instance from
     * @param {Function} [callback] Callback to invoke when an fabric.Text instance is created
     */
    static fromObject(object: any, callback?: Function): Text;

    /**
     * Check if characters in a text have a value for a property
     * whose value matches the textbox's value for that property.  If so,
     * the character-level property is deleted.  If the character
     * has no other properties, then it is also deleted.  Finally,
     * if the line containing that character has no other characters
     * then it also is deleted.
     *
     * @param {string} property The property to compare between characters and text.
     */
    cleanStyle(property: string): void;

    /**
     * Returns 2d representation (lineIndex and charIndex) of cursor (or selection start)
     * @param {Number} [selectionStart] Optional index. When not given, current selectionStart is used.
     * @param {Boolean} [skipWrapping] consider the location for unwrapped lines. usefull to manage styles.
     */
    get2DCursorLocation(selectionStart?: number, skipWrapping?: boolean): { lineIndex: number; charIndex: number };

    /**
     * return a new object that contains all the style property for a character
     * the object returned is newly created
     * @param {Number} lineIndex of the line where the character is
     * @param {Number} charIndex position of the character on the line
     * @return {Object} style object
     */
    getCompleteStyleDeclaration(lineIndex: number, charIndex: number): any;

    /**
     * Gets style of a current selection/cursor (at the start position)
     * if startIndex or endIndex are not provided, slectionStart or selectionEnd will be used.
     * @param {Number} [startIndex] Start index to get styles at
     * @param {Number} [endIndex] End index to get styles at, if not specified selectionEnd or startIndex + 1
     * @param {Boolean} [complete] get full style or not
     * @return {Array} styles an array with one, zero or more Style objects
     */
    getSelectionStyles(startIndex?: number, endIndex?: number, complete?: boolean): any[];

    /**
     * Returns styles-string for svg-export
     * @param {Boolean} skipShadow a boolean to skip shadow filter output
     * @return {String}
     */
    getSvgStyles(skipShadow?: boolean): string;

    /**
     * Returns true if object has no styling or no styling in a line
     * @param {Number} lineIndex , lineIndex is on wrapped lines.
     * @return {Boolean}
     */
    isEmptyStyles(lineIndex: number): boolean;

    /**
     * Remove a style property or properties from all individual character styles
     * in a text object.  Deletes the character style object if it contains no other style
     * props.  Deletes a line style object if it contains no other character styles.
     *
     * @param {String} props The property to remove from character styles.
     */
    removeStyle(property: string): void;

    /**
     * Sets style of a current selection, if no selection exist, do not set anything.
     * @param {Object} [styles] Styles object
     * @param {Number} [startIndex] Start index to get styles at
     * @param {Number} [endIndex] End index to get styles at, if not specified selectionEnd or startIndex + 1
     * @return {fabric.IText} thisArg
     * @chainable
     */
    setSelectionStyles(styles: any, startIndex?: number, endIndex?: number): Text;

    /**
     * Returns true if object has a style property or has it ina specified line
     * @param {Number} lineIndex
     * @return {Boolean}
     */
    styleHas(property: string, lineIndex?: number): boolean;

    /**
     * Measure a single line given its index. Used to calculate the initial
     * text bounding box. The values are calculated and stored in __lineWidths cache.
     * @param {Number} lineIndex line number
     * @return {Number} Line width
     */
    getLineWidth(lineIndex: number): number;

    /**
     * @param {Number} lineIndex index text line
     * @return {Number} Line left offset
     */
    _getLineLeftOffset(lineIndex: number): number;

    /**
     * apply all the character style to canvas for rendering
     * @param {String} _char
     * @param {CanvasRenderingContext2D} ctx Context to render on
     * @param {Number} lineIndex
     * @param {Number} charIndex
     * @param {Object} [decl]
     */
    _applyCharStyles(
        method: string,
        ctx: CanvasRenderingContext2D,
        lineIndex: number,
        charIndex: number,
        styleDeclaration: any,
    ): void;

    /**
     * get the reference, not a clone, of the style object for a given character
     * @param {Number} lineIndex
     * @param {Number} charIndex
     * @return {Object} style object
     */
    _getStyleDeclaration(lineIndex: number, charIndex: number): any;

    /**
     * Generate an object that translates the style object so that it is
     * broken up by visual lines (new lines and automatic wrapping).
     * The original text styles object is broken up by actual lines (new lines only),
     * which is only sufficient for Text / IText
     */
    _generateStyleMap(textInfo: {
        _unwrappedLines: string[];
        lines: string[];
        graphemeText: string[];
        graphemeLines: string[];
    }): { [s: number]: { line: number; offset: number } };

    /**
     * Gets the width of character spacing
     */
    _getWidthOfCharSpacing(): number;

    /**
     * measure and return the width of a single character.
     * possibly overridden to accommodate different measure logic or
     * to hook some external lib for character measurement
     * @param {String} char to be measured
     * @param {Object} charStyle style of char to be measured
     * @param {String} [previousChar] previous char
     * @param {Object} [prevCharStyle] style of previous char
     * @return {Object} object contained char width anf kerned width
     */
    _measureChar(
        _char: string,
        charStyle: any,
        previousChar: string,
        prevCharStyle: any,
    ): { width: number; kernedWidth: number };

    /**
     * @param {String} method
     * @param {CanvasRenderingContext2D} ctx Context to render on
     * @param {String} line Content of the line
     * @param {Number} left
     * @param {Number} top
     * @param {Number} lineIndex
     * @param {Number} charOffset
     */
    _renderChars(
        method: string,
        ctx: CanvasRenderingContext2D,
        line: string,
        left: number,
        top: number,
        lineIndex: number,
    ): void;

    /**
     * @param {String} method
     * @param {CanvasRenderingContext2D} ctx Context to render on
     * @param {Number} lineIndex
     * @param {Number} charIndex
     * @param {String} _char
     * @param {Number} left Left coordinate
     * @param {Number} top Top coordinate
     * @param {Number} lineHeight Height of the line
     */
    _renderChar(
        method: string,
        ctx: CanvasRenderingContext2D,
        lineIndex: number,
        charIndex: number,
        _char: string,
        left: number,
        top: number,
    ): void;

    /**
     * @param {String} method Method name ("fillText" or "strokeText")
     * @param {CanvasRenderingContext2D} ctx Context to render on
     * @param {Array} line Text to render
     * @param {Number} left Left position of text
     * @param {Number} top Top position of text
     * @param {Number} lineIndex Index of a line in a text
     */
    _renderTextLine(
        method: string,
        ctx: CanvasRenderingContext2D,
        line: string[],
        left: number,
        top: number,
        lineIndex: number,
    ): void;

    /**
     * @param {CanvasRenderingContext2D} ctx Context to render on
     */
    _renderText(ctx: CanvasRenderingContext2D): void;

    /** */
    _clearCache(): void;

    /**
     * Divides text into lines of text and lines of graphemes.
     * @returns {Object} Lines and text in the text
     */
    _splitText(): { _unwrappedLines: string[]; lines: string[]; graphemeText: string[]; graphemeLines: string[] };

    /**
     * @param {Object} prevStyle
     * @param {Object} thisStyle
     */
    _hasStyleChanged(prevStyle: any, thisStyle: any): boolean;

    /**
     * Set the font parameter of the context with the object properties or with charStyle
     * @param {CanvasRenderingContext2D} ctx Context to render on
     * @param {Object} [charStyle] object with font style properties
     * @param {String} [charStyle.fontFamily] Font Family
     * @param {Number} [charStyle.fontSize] Font size in pixels. ( without px suffix )
     * @param {String} [charStyle.fontWeight] Font weight
     * @param {String} [charStyle.fontStyle] Font style (italic|normal)
     */
    _setTextStyles(
        ctx: CanvasRenderingContext2D,
        charStyle?: { fontFamily: string; fontSize: number; fontWieght: string; fontStyle: string },
        forMeasuring?: boolean,
    ): void;

    /**
     * @param {String} method Method name ("fillText" or "strokeText")
     * @param {CanvasRenderingContext2D} ctx Context to render on
     * @param {String} line Text to render
     * @param {Number} left Left position of text
     * @param {Number} top Top position of text
     * @param {Number} lineIndex Index of a line in a text
     */
    _renderTextLine(
        method: string,
        ctx: CanvasRenderingContext2D,
        line: string,
        left: number,
        top: number,
        lineIndex: number,
    ): void;

    /** */
    _shouldClearDimensionCache(): boolean;
}
interface ITextOptions extends TextOptions {
    /**
     * Index where text selection starts (or where cursor is when there is no selection)
     */
    selectionStart?: number | undefined;
    /**
     * Index where text selection ends
     */
    selectionEnd?: number | undefined;
    /**
     * Color of text selection
     */
    selectionColor?: string | undefined;
    /**
     * Indicates whether text is selected
     */
    selected?: boolean | undefined;
    /**
     * Indicates whether text is in editing mode
     */
    isEditing?: boolean | undefined;
    /**
     * Indicates whether a text can be edited
     */
    editable?: boolean | undefined;
    /**
     * Border color of text object while it's in editing mode
     */
    editingBorderColor?: string | undefined;
    /**
     * Width of cursor (in px)
     */
    cursorWidth?: number | undefined;
    /**
     * Color of default cursor (when not overwritten by character style)
     */
    cursorColor?: string | undefined;
    /**
     * Delay between cursor blink (in ms)
     */
    cursorDelay?: number | undefined;
    /**
     * Duration of cursor fadein (in ms)
     */
    cursorDuration?: number | undefined;
    /**
     * Indicates whether internal text char widths can be cached
     */
    caching?: boolean | undefined;
    /**
     * Helps determining when the text is in composition, so that the cursor
     * rendering is altered.
     */
    inCompositionMode?: boolean | undefined;
    path?: string | undefined;
    useNative?: boolean | undefined;
    /**
     * For functionalities on keyDown + ctrl || cmd
     */
    ctrlKeysMapDown?: any;
    /**
     * For functionalities on keyUp + ctrl || cmd
     */
    ctrlKeysMapUp?: any;
    /**
     * For functionalities on keyDown
     * Map a special key to a function of the instance/prototype
     * If you need different behaviour for ESC or TAB or arrows, you have to change
     * this map setting the name of a function that you build on the fabric.Itext or
     * your prototype.
     * the map change will affect all Instances unless you need for only some text Instances
     * in that case you have to clone this object and assign your Instance.
     * this.keysMap = fabric.util.object.clone(this.keysMap);
     * The function must be in fabric.Itext.prototype.myFunction And will receive event as args[0]
     */
    keysMap?: any;
    /**
     * Exposes underlying hidden text area
     */
    hiddenTextarea?: HTMLTextAreaElement | undefined;
}
export interface IText extends ITextOptions {}
export class IText extends Text {
    fromPaste: boolean;
    /** */
    _currentCursorOpacity: number;
    /** */
    _reSpace: RegExp;
    /**
     * Constructor
     * @param text Text string
     * @param [options] Options object
     */
    constructor(text: string, options?: ITextOptions);
    /**
     * Sets selection start (left boundary of a selection)
     * @param {Number} index Index to set selection start to
     */
    setSelectionStart(index: number): void;
    /**
     * Sets selection end (right boundary of a selection)
     * @param {Number} index Index to set selection end to
     */
    setSelectionEnd(index: number): void;
    /**
     * Prepare and clean the contextTop
     */
    clearContextTop(skipRestore?: boolean): void;
    /**
     * Renders cursor or selection (depending on what exists)
     */
    renderCursorOrSelection(): void;
    /**
     * Renders cursor
     * @param {Object} boundaries
     * @param {CanvasRenderingContext2D} ctx transformed context to draw on
     */
    renderCursor(boundaries: any, ctx: CanvasRenderingContext2D): void;
    /**
     * Renders text selection
     * @param {Object} boundaries Object with left/top/leftOffset/topOffset
     * @param {CanvasRenderingContext2D} ctx transformed context to draw on
     */
    renderSelection(boundaries: any, ctx: CanvasRenderingContext2D): void;
    /**
     * High level function to know the height of the cursor.
     * the currentChar is the one that precedes the cursor
     * Returns fontSize of char at the current cursor
     * @return {Number} Character font size
     */
    getCurrentCharFontSize(): number;
    /**
     * High level function to know the color of the cursor.
     * the currentChar is the one that precedes the cursor
     * Returns color (fill) of char at the current cursor
     * @return {String} Character color (fill)
     */
    getCurrentCharColor(): string;
    /**
     * Returns fabric.IText instance from an object representation
     * @static
     * @param {Object} object Object to create an instance from
     * @param {function} [callback] invoked with new instance as argument
     */
    static fromObject(object: any, callback?: Function): IText;
    /**
     * Initializes all the interactive behavior of IText
     */
    initBehavior(): void;
    /**
     * Initializes "added" event handler
     */
    initAddedHandler(): void;
    /**
     * Initializes delayed cursor
     */
    initDelayedCursor(): void;
    /**
     * Aborts cursor animation and clears all timeouts
     */
    abortCursorAnimation(): void;
    /**
     * Selects entire text
     * @return {fabric.IText} thisArg
     * @chainable
     */
    selectAll(): IText;
    /**
     * Returns selected text
     * @return {String}
     */
    getSelectedText(): string;
    /**
     * Find new selection index representing start of current word according to current selection index
     * @param {Number} startFrom Surrent selection index
     * @return {Number} New selection index
     */
    findWordBoundaryLeft(startFrom: number): number;
    /**
     * Find new selection index representing end of current word according to current selection index
     * @param {Number} startFrom Current selection index
     * @return {Number} New selection index
     */
    findWordBoundaryRight(startFrom: number): number;
    /**
     * Find new selection index representing start of current line according to current selection index
     * @param {Number} startFrom Current selection index
     * @return {Number} New selection index
     */
    findLineBoundaryLeft(startFrom: number): number;
    /**
     * Find new selection index representing end of current line according to current selection index
     * @param {Number} startFrom Current selection index
     * @return {Number} New selection index
     */
    findLineBoundaryRight(startFrom: number): number;
    /**
     * Finds index corresponding to beginning or end of a word
     * @param {Number} selectionStart Index of a character
     * @param {Number} direction 1 or -1
     * @return {Number} Index of the beginning or end of a word
     */
    searchWordBoundary(selectionStart: number, direction: number): number;
    /**
     * Selects a word based on the index
     * @param {Number} selectionStart Index of a character
     */
    selectWord(selectionStart: number): void;
    /**
     * Selects a line based on the index
     * @param {Number} selectionStart Index of a character
     * @return {fabric.IText} thisArg
     * @chainable
     */
    selectLine(selectionStart: number): IText;
    /**
     * Enters editing state
     * @return {fabric.IText} thisArg
     * @chainable
     */
    enterEditing(e?: MouseEvent): IText;
    /**
     * Initializes "mousemove" event handler
     */
    initMouseMoveHandler(): void;
    /**
     * Exits from editing state
     * @return {fabric.IText} thisArg
     * @chainable
     */
    exitEditing(): IText;
    /**
     * remove and reflow a style block from start to end.
     * @param {Number} start linear start position for removal (included in removal)
     * @param {Number} end linear end position for removal ( excluded from removal )
     */
    removeStyleFromTo(start: number, end: number): void;
    /**
     * Shifts line styles up or down
     * @param {Number} lineIndex Index of a line
     * @param {Number} offset Can any number?
     */
    shiftLineStyles(lineIndex: number, offset: number): void;
    /**
     * Inserts new style object
     * @param {Number} lineIndex Index of a line
     * @param {Number} charIndex Index of a char
     * @param {Number} qty number of lines to add
     * @param {Array} copiedStyle Array of objects styles
     */
    insertNewlineStyleObject(lineIndex: number, charIndex: number, qty: number, copiedStyle: any[]): void;
    /**
     * Inserts style object for a given line/char index
     * @param {Number} lineIndex Index of a line
     * @param {Number} charIndex Index of a char
     * @param {Number} quantity number Style object to insert, if given
     * @param {Array} copiedStyle array of style objecs
     */
    insertCharStyleObject(lineIndex: number, charIndex: number, quantity: number, copiedStyle: any[]): void;
    /**
     * Inserts style object(s)
     * @param {Array} insertedText Characters at the location where style is inserted
     * @param {Number} start cursor index for inserting style
     * @param {Array} [copiedStyle] array of style objects to insert.
     */
    insertNewStyleBlock(insertedText: any[], start: number, copiedStyle?: any[]): void;
    /**
     * Set the selectionStart and selectionEnd according to the ne postion of cursor
     * mimic the key - mouse navigation when shift is pressed.
     */
    setSelectionStartEndWithShift(start: number, end: number, newSelection: number): void;
    /**
     * Copies selected text
     */
    copy(): void;
    /**
     * convert from fabric to textarea values
     */
    fromGraphemeToStringSelection(
        start: number,
        end: number,
        _text: string,
    ): { selectionStart: number; selectionEnd: number };
    /**
     * convert from textarea to grapheme indexes
     */
    fromStringToGraphemeSelection(
        start: number,
        end: number,
        text: string,
    ): { selectionStart: number; selectionEnd: number };
    /**
     * Gets start offset of a selection
     * @param {Event} e Event object
     * @param {Boolean} isRight
     * @return {Number}
     */
    getDownCursorOffset(e: Event, isRight?: boolean): number;
    /**
     * Returns index of a character corresponding to where an object was clicked
     * @param {Event} e Event object
     * @return {Number} Index of a character
     */
    getSelectionStartFromPointer(e: Event): number;
    /**
     * @param {Event} e Event object
     * @param {Boolean} isRight
     * @return {Number}
     */
    getUpCursorOffset(e: Event, isRight?: boolean): number;
    /**
     * Initializes double and triple click event handlers
     */
    initClicks(): void;
    /**
     * Initializes event handlers related to cursor or selection
     */
    initCursorSelectionHandlers(): void;
    /**
     * Initializes "dbclick" event handler
     */
    initDoubleClickSimulation(): void;
    /**
     * Initializes hidden textarea (needed to bring up keyboard in iOS)
     */
    initHiddenTextarea(): void;
    /**
     * Initializes "mousedown" event handler
     */
    initMousedownHandler(): void;
    /**
     * Initializes "mouseup" event handler
     */
    initMouseupHandler(): void;
    /**
     * insert characters at start position, before start position.
     * start  equal 1 it means the text get inserted between actual grapheme 0 and 1
     * if style array is provided, it must be as the same length of text in graphemes
     * if end is provided and is bigger than start, old text is replaced.
     * start/end ar per grapheme position in _text array.
     *
     * @param {String} text text to insert
     * @param {Array} style array of style objects
     * @param {Number} start
     * @param {Number} end default to start + 1
     */
    insertChars(text: string, style?: any[], start?: number, end?: number): void;
    /**
     * Moves cursor down
     * @param {Event} e Event object
     */
    moveCursorDown(e: Event): void;
    /**
     * Moves cursor left
     * @param {Event} e Event object
     */
    moveCursorLeft(e: Event): void;
    /**
     * Moves cursor left without keeping selection
     * @param {Event} e
     */
    moveCursorLeftWithoutShift(e: Event): void;
    /**
     * Moves cursor left while keeping selection
     * @param {Event} e
     */
    moveCursorLeftWithShift(e: Event): void;
    /**
     * Moves cursor right
     * @param {Event} e Event object
     */
    moveCursorRight(e: Event): void;
    /**
     * Moves cursor right without keeping selection
     * @param {Event} e Event object
     */
    moveCursorRightWithoutShift(e: Event): void;
    /**
     * Moves cursor right while keeping selection
     * @param {Event} e
     */
    moveCursorRightWithShift(e: Event): void;
    /**
     * Moves cursor up
     * @param {Event} e Event object
     */
    moveCursorUp(e: Event): void;
    /**
     * Moves cursor up without shift
     * @param {Number} offset
     */
    moveCursorWithoutShift(offset: number): void;
    /**
     * Moves cursor with shift
     * @param {Number} offset
     */
    moveCursorWithShift(offset: number): void;
    /**
     * Composition end
     */
    onCompositionEnd(): void;
    /**
     * Composition start
     */
    onCompositionStart(): void;
    /**
     * Handles onInput event
     * @param {Event} e Event object
     */
    onInput(e: Event): void;
    /**
     * Handles keyup event
     * @param {Event} e Event object
     */
    onKeyDown(e: Event): void;
    /**
     * Handles keyup event
     * We handle KeyUp because ie11 and edge have difficulties copy/pasting
     * if a copy/cut event fired, keyup is dismissed
     * @param {Event} e Event object
     */
    onKeyUp(e: Event): void;
    /**
     * Pastes text
     */
    paste(): void;
    /**
     * Removes characters from start/end
     * start/end ar per grapheme position in _text array.
     *
     * @param {Number} start
     * @param {Number} end default to start + 1
     */
    removeChars(start: number, end: number): void;
    /**
     * Changes cursor location in a text depending on passed pointer (x/y) object
     * @param {Event} e Event object
     */
    setCursorByClick(e: Event): void;
    /** */
    _getNewSelectionStartFromOffset(
        mouseOffset: { x: number; y: number },
        prevWidth: number,
        width: number,
        index: number,
        jlen: number,
    ): number;
    /**
     * @param {CanvasRenderingContext2D} ctx Context to render on
     */
    _render(ctx: CanvasRenderingContext2D): void;
    /** */
    _updateTextarea(): void;
    /** */
    updateFromTextArea(): void;
    /**
     * Default event handler for the basic functionalities needed on _mouseDown
     * can be overridden to do something different.
     * Scope of this implementation is: find the click position, set selectionStart
     * find selectionEnd, initialize the drawing of either cursor or selection area
     * @param {Object} Options (seems to have an event `e` parameter
     */
    _mouseDownHandler(options: any): void;
    /**
     * @return {Object} style contains style for hiddenTextarea
     */
    _calcTextareaPosition(): { left: string; top: string; fontSize: string; charHeight: number };
}
interface ITextboxOptions extends ITextOptions {
    /**
     * Minimum width of textbox, in pixels.
     */
    minWidth?: number | undefined;
    /**
     * Minimum calculated width of a textbox, in pixels.
     * fixed to 2 so that an empty textbox cannot go to 0
     * and is still selectable without text.
     */
    dynamicMinWidth?: number | undefined;
    /**
     * Override standard Object class values
     */
    lockScalingFlip?: boolean | undefined;
    /**
     * Override standard Object class values
     * Textbox needs this on false
     */
    noScaleCache?: boolean | undefined;
    /**
     * Use this boolean property in order to split strings that have no white space concept.
     * this is a cheap way to help with chinese/japaense
     * @since 2.6.0
     */
    splitByGrapheme?: boolean | undefined;
    /**
     * Is the text wrapping
     */
    isWrapping?: boolean | undefined;
}
export interface Textbox extends ITextboxOptions {}
export class Textbox extends IText {
    /**
     * Constructor
     * @param text Text string
     * @param [options] Options object
     */
    constructor(text: string, options?: ITextboxOptions);
    /**
     * Returns true if object has a style property or has it ina specified line
     * @param {Number} lineIndex
     * @return {Boolean}
     */
    styleHas(property: string, lineIndex: number): boolean;
    /**
     * Returns true if object has no styling or no styling in a line
     * @param {Number} lineIndex , lineIndex is on wrapped lines.
     * @return {Boolean}
     */
    isEmptyStyles(lineIndex: number): boolean;
    /**
     * Detect if the text line is ended with an hard break
     * text and itext do not have wrapping, return false
     * @param {Number} lineIndex text to split
     * @return {Boolean}
     */
    isEndOfWrapping(lineIndex: number): boolean;
    /**
     * Returns larger of min width and dynamic min width
     * @return {Number}
     */
    getMinWidth(): number;
    /**
     * Use this regular expression to split strings in breakable lines
     */
    _wordJoiners: RegExp;
    /**
     * Helper function to measure a string of text, given its lineIndex and charIndex offset
     * it gets called when charBounds are not available yet.
     * @param {Array} text characters
     * @param {number} lineIndex
     * @param {number} charOffset
     * @returns {number}
     */
    _measureWord(word: string[], lineIndex: number, charOffset: number): number;
    /**
     * Wraps text using the 'width' property of Textbox. First this function
     * splits text on newlines, so we preserve newlines entered by the user.
     * Then it wraps each line using the width of the Textbox by calling
     * _wrapLine().
     * @param {Array} lines The string array of text that is split into lines
     * @param {Number} desiredWidth width you want to wrap to
     * @returns {Array} Array of grapheme lines
     */
    _wrapText(lines: string[], desiredWidth: number): string[][];
    /**
     * Style objects for each line
     * Generate an object that translates the style object so that it is
     * broken up by visual lines (new lines and automatic wrapping).
     * The original text styles object is broken up by actual lines (new lines only),
     * which is only sufficient for Text / IText
     * Line style { line: number, offset: number }
     */
    _styleMap?: { [s: number]: { line: number; offset: number } } | undefined;
    /**
     * Returns fabric.Textbox instance from an object representation
     * @static
     * @param {Object} object Object to create an instance from
     * @param {Function} [callback] Callback to invoke when an fabric.Textbox instance is created
     */
    static fromObject(object: any, callback?: Function): Textbox;
}
interface ITriangleOptions extends IObjectOptions {}
export class Triangle extends Object {
    /**
     * Constructor
     * @param [options] Options object
     */
    constructor(options?: ITriangleOptions);
    /**
     * Returns SVG representation of an instance
     * @param [reviver] Method for further parsing of svg representation.
     * @return svg representation of an instance
     */
    toSVG(reviver?: Function): string;
    /**
     * Returns Triangle instance from an object representation
     * @param object Object to create an instance from
     */
    static fromObject(object: any): Triangle;
}

////////////////////////////////////////////////////////////
// Filters
////////////////////////////////////////////////////////////
interface IAllFilters {
    BaseFilter: {
        /**
         * Constructor
         * @param [options] Options object
         */
        new(options?: any): IBaseFilter;
    };
    BlendColor: {
        /**
         * Constructor
         * @param [options] Options object
         */
        new(
            options?: { color?: string | undefined; mode?: string | undefined; alpha?: number | undefined },
        ): IBlendColorFilter;
        /**
         * Returns filter instance from an object representation
         * @param object Object to create an instance from
         */
        fromObject(object: any): IBlendColorFilter;
    };
    BlendImage: {
        /**
         * Constructor
         * @param [options] Options object
         */
        new(
            options?: { image?: Image | undefined; mode?: string | undefined; alpha?: number | undefined },
        ): IBlendImageFilter;
        /**
         * Returns filter instance from an object representation
         * @param object Object to create an instance from
         */
        fromObject(object: any): IBlendImageFilter;
    };
    Blur: {
        new(options?: { blur?: number | undefined }): IBlurFilter;
        /**
         * Returns filter instance from an object representation
         * @param object Object to create an instance from
         */
        fromObject(object: any): IBlurFilter;
    };
    Brightness: {
        new(options?: {
            /**
             * Value to brighten the image up (0..255)
             * @default 0
             */
            brightness: number;
        }): IBrightnessFilter;
        /**
         * Returns filter instance from an object representation
         * @param object Object to create an instance from
         */
        fromObject(object: any): IBrightnessFilter;
    };
    ColorMatrix: {
        new(options?: {
            /** Filter matrix */
            matrix?: number[] | undefined;
        }): IColorMatrix;
        /**
         * Returns filter instance from an object representation
         * @param object Object to create an instance from
         */
        fromObject(object: any): IColorMatrix;
    };
    Contrast: {
        /**
         * Constructor
         * @param [options] Options object
         */
        new(options?: { contrast?: number | undefined }): IContrastFilter;
        /**
         * Returns filter instance from an object representation
         * @param object Object to create an instance from
         */
        fromObject(object: any): IContrastFilter;
    };
    Convolute: {
        new(options?: {
            opaque?: boolean | undefined;
            /** Filter matrix */
            matrix?: number[] | undefined;
        }): IConvoluteFilter;
        /**
         * Returns filter instance from an object representation
         * @param object Object to create an instance from
         */
        fromObject(object: any): IConvoluteFilter;
    };
    Gamma: {
        /**
         * Constructor
         * @param [options] Options object
         */
        new(options?: { gamma?: [number, number, number] | undefined }): IGammaFilter;
        /**
         * Returns filter instance from an object representation
         * @param object Object to create an instance from
         */
        fromObject(object: any): IGammaFilter;
    };
    GradientTransparency: {
        new(options?: {
            /** @default 100 */
            threshold?: number | undefined;
        }): IGradientTransparencyFilter;
        /**
         * Returns filter instance from an object representation
         * @param object Object to create an instance from
         */
        fromObject(object: any): IGradientTransparencyFilter;
    };
    Grayscale: {
        new(options?: any): IGrayscaleFilter;
        /**
         * Returns filter instance from an object representation
         * @param object Object to create an instance from
         */
        fromObject(object: any): IGrayscaleFilter;
    };
    HueRotation: {
        new(options?: { rotation?: number | undefined }): IHueRotationFilter;
        /**
         * Returns filter instance from an object representation
         * @param object Object to create an instance from
         */
        fromObject(object: any): IHueRotationFilter;
    };
    Invert: {
        /**
         * Constructor
         * @param [options] Options object
         */
        new(options?: any): IInvertFilter;
        /**
         * Returns filter instance from an object representation
         * @param object Object to create an instance from
         */
        fromObject(object: any): IInvertFilter;
    };
    Mask: {
        new(options?: {
            /** Mask image object */
            mask?: Image | undefined;
            /**
             * Rgb channel (0, 1, 2 or 3)
             * @default 0
             */
            channel: number;
        }): IMaskFilter;
        /**
         * Returns filter instance from an object representation
         * @param object Object to create an instance from
         */
        fromObject(object: any): IMaskFilter;
    };
    Multiply: {
        new(options?: {
            /**
             * Color to multiply the image pixels with
             * @default #000000
             */
            color: string;
        }): IMultiplyFilter;
        /**
         * Returns filter instance from an object representation
         * @param object Object to create an instance from
         */
        fromObject(object: any): IMultiplyFilter;
    };
    Noise: {
        new(options?: {
            /** @default 0 */
            noise: number;
        }): INoiseFilter;
        /**
         * Returns filter instance from an object representation
         * @param object Object to create an instance from
         */
        fromObject(object: any): INoiseFilter;
    };
    Pixelate: {
        new(options?: {
            /**
             * Blocksize for pixelate
             * @default 4
             */
            blocksize?: number | undefined;
        }): IPixelateFilter;
        /**
         * Returns filter instance from an object representation
         * @param object Object to create an instance from
         */
        fromObject(object: any): IPixelateFilter;
    };
    RemoveWhite: {
        new(options?: {
            /** @default 30 */
            threshold?: number | undefined;
            /** @default 20 */
            distance?: number | undefined;
        }): IRemoveWhiteFilter;
        /**
         * Returns filter instance from an object representation
         * @param object Object to create an instance from
         */
        fromObject(object: any): IRemoveWhiteFilter;
    };
    Resize: {
        new(options?: any): IResizeFilter;
        /**
         * Returns filter instance from an object representation
         * @param object Object to create an instance from
         */
        fromObject(object: any): IResizeFilter;
    };
    Saturation: {
        /**
         * Constructor
         * @param [options] Options object
         */
        new(options?: { saturation?: number | undefined }): ISaturationFilter;
        /**
         * Returns filter instance from an object representation
         * @param object Object to create an instance from
         */
        fromObject(object: any): ISaturationFilter;
    };
    Sepia2: {
        new(options?: any): ISepia2Filter;
        /**
         * Returns filter instance from an object representation
         * @param object Object to create an instance from
         */
        fromObject(object: any): ISepia2Filter;
    };
    Sepia: {
        new(options?: any): ISepiaFilter;
        /**
         * Returns filter instance from an object representation
         * @param object Object to create an instance from
         */
        fromObject(object: any): ISepiaFilter;
    };
    Tint: {
        new(options?: {
            /**
             * Color to tint the image with
             * @default #000000
             */
            color?: string | undefined;
            /** Opacity value that controls the tint effect's transparency (0..1) */
            opacity?: number | undefined;
        }): ITintFilter;
        /**
         * Returns filter instance from an object representation
         * @param object Object to create an instance from
         */
        fromObject(object: any): ITintFilter;
    };
    Vibrance: {
        /**
         * Constructor
         * @param [options] Options object
         */
        new(options?: { vibrance?: number | undefined }): IVibranceFilter;
        /**
         * Returns filter instance from an object representation
         * @param object Object to create an instance from
         */
        fromObject(object: any): IVibranceFilter;
    };
}
interface IBaseFilter {
    /**
     * Sets filter's properties from options
     * @param [options] Options object
     */
    setOptions(options?: any): void;
    /**
     * Returns object representation of an instance
     */
    toObject(): any;
    /**
     * Returns a JSON representation of an instance
     */
    toJSON(): { version: string; objects: Object[] };
    /**
     * Apply the operation to a Uint8Array representing the pixels of an image.
     *
     * @param {Object} options
     * @param {ImageData} options.imageData The Uint8Array to be filtered.
     */
    applyTo2d(options: any): void;
}
interface IBlendColorFilter extends IBaseFilter {
    color?: string | undefined;
    mode?: string | undefined;
    alpha?: number | undefined;
    /**
     * Applies filter to canvas element
     * @param canvasEl Canvas element to apply filter to
     */
    applyTo(canvasEl: HTMLCanvasElement): void;
}
interface IBlendImageFilter extends IBaseFilter {
    /**
     * Applies filter to canvas element
     * @param canvasEl Canvas element to apply filter to
     */
    applyTo(canvasEl: HTMLCanvasElement): void;
}
interface IBlurFilter extends IBaseFilter {
    /**
     * Applies filter to canvas element
     * @param canvasEl Canvas element to apply filter to
     */
    applyTo(canvasEl: HTMLCanvasElement): void;
}
interface IBrightnessFilter extends IBaseFilter {
    /**
     * Applies filter to canvas element
     * @param canvasEl Canvas element to apply filter to
     */
    applyTo(canvasEl: HTMLCanvasElement): void;
}
interface IColorMatrix extends IBaseFilter {
    matrix?: number[] | undefined;
    /**
     * Applies filter to canvas element
     * @param canvasEl Canvas element to apply filter to
     */
    applyTo(canvasEl: HTMLCanvasElement): void;
}
interface IContrastFilter extends IBaseFilter {
    /**
     * Applies filter to canvas element
     * @param canvasEl Canvas element to apply filter to
     */
    applyTo(canvasEl: HTMLCanvasElement): void;
}
interface IConvoluteFilter extends IBaseFilter {
    /**
     * Applies filter to canvas element
     * @param canvasEl Canvas element to apply filter to
     */
    applyTo(canvasEl: HTMLCanvasElement): void;
}
interface IGammaFilter extends IBaseFilter {
    /**
     * Gamma array value
     */
    gamma: [number, number, number];

    /**
     * Applies filter to canvas element
     * @param canvasEl Canvas element to apply filter to
     */
    applyTo(canvasEl: HTMLCanvasElement): void;
}
interface IGradientTransparencyFilter extends IBaseFilter {
    /**
     * Applies filter to canvas element
     * @param canvasEl Canvas element to apply filter to
     */
    applyTo(canvasEl: HTMLCanvasElement): void;
}
interface IGrayscaleFilter extends IBaseFilter {
    /**
     * Applies filter to canvas element
     * @param canvasEl Canvas element to apply filter to
     */
    applyTo(canvasEl: HTMLCanvasElement): void;
}
interface IHueRotationFilter extends IBaseFilter {
    /**
     * Applies filter to canvas element
     * @param canvasEl Canvas element to apply filter to
     */
    applyTo(canvasEl: HTMLCanvasElement): void;
}
interface IInvertFilter extends IBaseFilter {
    /**
     * Applies filter to canvas element
     * @param canvasEl Canvas element to apply filter to
     */
    applyTo(canvasEl: HTMLCanvasElement): void;
}
interface IMaskFilter extends IBaseFilter {
    /**
     * Applies filter to canvas element
     * @param canvasEl Canvas element to apply filter to
     */
    applyTo(canvasEl: HTMLCanvasElement): void;
}
interface IMultiplyFilter extends IBaseFilter {
    /**
     * Applies filter to canvas element
     * @param canvasEl Canvas element to apply filter to
     */
    applyTo(canvasEl: HTMLCanvasElement): void;
}
interface INoiseFilter extends IBaseFilter {
    /**
     * Applies filter to canvas element
     * @param canvasEl Canvas element to apply filter to
     */
    applyTo(canvasEl: HTMLCanvasElement): void;
}
interface IPixelateFilter extends IBaseFilter {
    /**
     * Applies filter to canvas element
     * @param canvasEl Canvas element to apply filter to
     */
    applyTo(canvasEl: HTMLCanvasElement): void;
}
interface IRemoveWhiteFilter extends IBaseFilter {
    /**
     * Applies filter to canvas element
     * @param canvasEl Canvas element to apply filter to
     */
    applyTo(canvasEl: HTMLCanvasElement): void;
}
interface IResizeFilter extends IBaseFilter {
    /**
     * Resize type
     */
    resizeType: string;

    /**
     * Scale factor for resizing, x axis
     */
    scaleX: number;

    /**
     * Scale factor for resizing, y axis
     */
    scaleY: number;

    /**
     * LanczosLobes parameter for lanczos filter
     */
    lanczosLobes: number;
    /**
     * Applies filter to canvas element
     * @param canvasEl Canvas element to apply filter to
     */
    applyTo(canvasEl: HTMLCanvasElement): void;
}
interface ISaturationFilter extends IBaseFilter {
    /**
     * Applies filter to canvas element
     * @param canvasEl Canvas element to apply filter to
     */
    applyTo(canvasEl: HTMLCanvasElement): void;
}
interface ISepiaFilter extends IBaseFilter {
    /**
     * Applies filter to canvas element
     * @param canvasEl Canvas element to apply filter to
     */
    applyTo(canvasEl: HTMLCanvasElement): void;
}
interface ISepia2Filter extends IBaseFilter {
    /**
     * Applies filter to canvas element
     * @param canvasEl Canvas element to apply filter to
     */
    applyTo(canvasEl: HTMLCanvasElement): void;
}
interface ITintFilter extends IBaseFilter {
    /**
     * Applies filter to canvas element
     * @param canvasEl Canvas element to apply filter to
     */
    applyTo(canvasEl: HTMLCanvasElement): void;
}
interface IVibranceFilter extends IBaseFilter {
    /**
     * Applies filter to canvas element
     * @param canvasEl Canvas element to apply filter to
     */
    applyTo(canvasEl: HTMLCanvasElement): void;
}

////////////////////////////////////////////////////////////
// Brushes
////////////////////////////////////////////////////////////
export class BaseBrush {
    /**
     * Color of a brush
     */
    color: string;

    /**
     * Width of a brush
     */
    width: number;

    /**
     * Discard points that are less than `decimate` pixel distant from each other
     */
    decimate: number;
    /**
     * Shadow object representing shadow of this shape.
     * <b>Backwards incompatibility note:</b> This property replaces "shadowColor" (String), "shadowOffsetX" (Number),
     * "shadowOffsetY" (Number) and "shadowBlur" (Number) since v1.2.12
     */
    shadow: Shadow | string;
    /**
     * Line endings style of a brush (one of "butt", "round", "square")
     */
    strokeLineCap: string;

    /**
     * Corner style of a brush (one of "bevil", "round", "miter")
     */
    strokeLineJoin: string;

    /**
     * Stroke Dash Array.
     */
    strokeDashArray: any[];
}

export class CircleBrush extends BaseBrush {
    /**
     * Width of a brush
     */
    width: number;
    /**
     * Invoked inside on mouse down and mouse move
     */
    drawDot(pointer: any): void;

    /**
     * @return Just added pointer point
     */
    addPoint(pointer: any): Point;
}

export class SprayBrush extends BaseBrush {
    /**
     * Width of a brush
     */
    width: number;
    /**
     * Density of a spray (number of dots per chunk)
     */
    density: number;

    /**
     * Width of spray dots
     */
    dotWidth: number;
    /**
     * Width variance of spray dots
     */
    dotWidthVariance: number;

    /**
     * Whether opacity of a dot should be random
     */
    randomOpacity: boolean;
    /**
     * Whether overlapping dots (rectangles) should be removed (for performance reasons)
     */
    optimizeOverlapping: boolean;

    addSprayChunk(pointer: any): void;
}
export class PatternBrush extends PencilBrush {
    getPatternSrc(): HTMLCanvasElement;

    getPatternSrcFunction(): string;

    /**
     * Creates "pattern" instance property
     */
    getPattern(): any;
    /**
     * Creates path
     */
    createPath(pathData: string): Path;
}
export class PencilBrush extends BaseBrush {
    /**
     * Constructor
     * @param {Canvas} canvas
     */
    constructor(canvas: Canvas);
    /**
     * Constructor
     * @param {Canvas} canvas
     * @return {PencilBrush} Instance of a pencil brush
     */
    initialize(canvas: Canvas): PencilBrush;

    /**
     * Converts points to SVG path
     * @param points Array of points
     */
    convertPointsToSVGPath(points: Array<{ x: number; y: number }>, minX?: number, minY?: number): string[];

    /**
     * Creates fabric.Path object to add on canvas
     * @param pathData Path data
     */
    createPath(pathData: string): Path;
}

///////////////////////////////////////////////////////////////////////////////
// Fabric util Interface
//////////////////////////////////////////////////////////////////////////////
interface IUtilAnimationOptions {
    /**
     * Starting value
     */
    startValue?: number | undefined;
    /**
     * Ending value
     */
    endValue?: number | undefined;
    /**
     * Value to modify the property by
     */
    byValue?: number | undefined;
    /**
     * Duration of change (in ms)
     */
    duration?: number | undefined;
    /**
     * Callback; invoked on every value change
     */
    onChange?: ((value: number) => void) | undefined;
    /**
     * Callback; invoked when value change is completed
     */
    onComplete?: Function | undefined;
    /**
     * Easing function
     */
    easing?: Function | undefined;
}
interface IUtilAnimation {
    /**
     * Changes value from one to another within certain period of time, invoking callbacks as value is being changed.
     * @param [options] Animation options
     */
    animate(options?: IUtilAnimationOptions): void;
    /**
     * requestAnimationFrame polyfill based on http://paulirish.com/2011/requestanimationframe-for-smart-animating/
     * In order to get a precise start time, `requestAnimFrame` should be called as an entry into the method
     * @param callback Callback to invoke
     */
    requestAnimFrame(callback: Function): number;

    cancelAnimFrame(id: number): void;
}

type IUtilAminEaseFunction = (t: number, b: number, c: number, d: number) => number;

interface IUtilAnimEase {
    easeInBack: IUtilAminEaseFunction;
    easeInBounce: IUtilAminEaseFunction;
    easeInCirc: IUtilAminEaseFunction;
    easeInCubic: IUtilAminEaseFunction;
    easeInElastic: IUtilAminEaseFunction;
    easeInExpo: IUtilAminEaseFunction;
    easeInOutBack: IUtilAminEaseFunction;
    easeInOutBounce: IUtilAminEaseFunction;
    easeInOutCirc: IUtilAminEaseFunction;
    easeInOutCubic: IUtilAminEaseFunction;
    easeInOutElastic: IUtilAminEaseFunction;
    easeInOutExpo: IUtilAminEaseFunction;
    easeInOutQuad: IUtilAminEaseFunction;
    easeInOutQuart: IUtilAminEaseFunction;
    easeInOutQuint: IUtilAminEaseFunction;
    easeInOutSine: IUtilAminEaseFunction;
    easeInQuad: IUtilAminEaseFunction;
    easeInQuart: IUtilAminEaseFunction;
    easeInQuint: IUtilAminEaseFunction;
    easeInSine: IUtilAminEaseFunction;
    easeOutBack: IUtilAminEaseFunction;
    easeOutBounce: IUtilAminEaseFunction;
    easeOutCirc: IUtilAminEaseFunction;
    easeOutCubic: IUtilAminEaseFunction;
    easeOutElastic: IUtilAminEaseFunction;
    easeOutExpo: IUtilAminEaseFunction;
    easeOutQuad: IUtilAminEaseFunction;
    easeOutQuart: IUtilAminEaseFunction;
    easeOutQuint: IUtilAminEaseFunction;
    easeOutSine: IUtilAminEaseFunction;
}

interface IUtilImage {
    setImageSmoothing(ctx: CanvasRenderingContext2D, value: any): void;
}

interface IUtilArc {
    /**
     * Draws arc
     */
    drawArc(ctx: CanvasRenderingContext2D, fx: number, fy: number, coords: number[]): void;
    /**
     * Calculate bounding box of a elliptic-arc
     * @param fx start point of arc
     * @param rx horizontal radius
     * @param ry vertical radius
     * @param rot angle of horizontal axe
     * @param large 1 or 0, whatever the arc is the big or the small on the 2 points
     * @param sweep 1 or 0, 1 clockwise or counterclockwise direction
     * @param tx end point of arc
     */
    getBoundsOfArc(
        fx: number,
        fy: number,
        rx: number,
        ry: number,
        rot: number,
        large: number,
        sweep: number,
        tx: number,
        ty: number,
    ): Point[];
    /**
     * Calculate bounding box of a beziercurve
     * @param x0 starting point
     * @param x1 first control point
     * @param x2 secondo control point
     * @param x3 end of beizer
     */
    getBoundsOfCurve(
        x0: number,
        y0: number,
        x1: number,
        y1: number,
        x2: number,
        y2: number,
        x3: number,
        y3: number,
    ): Point[];
}

interface IUtilDomEvent {
    /**
     * Cross-browser wrapper for getting event's coordinates
     * @param event Event object
     * @param upperCanvasEl &lt;canvas> element on which object selection is drawn
     */
    getPointer(event: Event, upperCanvasEl: HTMLCanvasElement): Point;

    /**
     * Adds an event listener to an element
     */
    addListener(element: HTMLElement, eventName: string, handler: Function): void;

    /**
     * Removes an event listener from an element
     */
    removeListener(element: HTMLElement, eventName: string, handler: Function): void;
}

interface IUtilDomMisc {
    /**
     * Takes id and returns an element with that id (if one exists in a document)
     */
    getById(id: string | HTMLElement): HTMLElement;
    /**
     * Converts an array-like object (e.g. arguments or NodeList) to an array
     */
    toArray(arrayLike: any): any[];
    /**
     * Creates specified element with specified attributes
     * @param tagName Type of an element to create
     * @param [attributes] Attributes to set on an element
     * @return Newly created element
     */
    makeElement(tagName: string, attributes?: any): HTMLElement;
    /**
     * Adds class to an element
     * @param element Element to add class to
     * @param className Class to add to an element
     */
    addClass(element: HTMLElement, classname: string): void;
    /**
     * Wraps element with another element
     * @param element Element to wrap
     * @param wrapper Element to wrap with
     * @param [attributes] Attributes to set on a wrapper
     */
    wrapElement(element: HTMLElement, wrapper: HTMLElement | string, attributes?: any): HTMLElement;
    /**
     * Returns element scroll offsets
     * @param element Element to operate on
     */
    getScrollLeftTop(element: HTMLElement): { left: number; top: number };
    /**
     * Returns offset for a given element
     * @param element Element to get offset for
     */
    getElementOffset(element: HTMLElement): { left: number; top: number };
    /**
     * Returns style attribute value of a given element
     * @param element Element to get style attribute for
     * @param attr Style attribute to get for element
     */
    getElementStyle(elment: HTMLElement, attr: string): string;
    /**
     * Inserts a script element with a given url into a document; invokes callback, when that script is finished loading
     * @param url URL of a script to load
     * @param callback Callback to execute when script is finished loading
     */
    getScript(url: string, callback: Function): void;
    /**
     * Makes element unselectable
     * @param element Element to make unselectable
     */
    makeElementUnselectable(element: HTMLElement): HTMLElement;
    /**
     * Makes element selectable
     * @param element Element to make selectable
     */
    makeElementSelectable(element: HTMLElement): HTMLElement;
}

interface IUtilDomRequest {
    /**
     * Cross-browser abstraction for sending XMLHttpRequest
     * @param url URL to send XMLHttpRequest to
     */
    request(
        url: string,
        options?: {
            /** @default "GET" */
            method?: string | undefined;
            /** Callback to invoke when request is completed */
            onComplete: Function;
        },
    ): XMLHttpRequest;
}

interface IUtilDomStyle {
    /**
     * Cross-browser wrapper for setting element's style
     */
    setStyle(element: HTMLElement, styles: any): HTMLElement;
}

interface IUtilArray {
    /**
     * Invokes method on all items in a given array
     * @param array Array to iterate over
     * @param method Name of a method to invoke
     */
    invoke(array: any[], method: string): any[];
    /**
     * Finds minimum value in array (not necessarily "first" one)
     * @param array Array to iterate over
     */
    min(array: any[], byProperty: string): any;
    /**
     * Finds maximum value in array (not necessarily "first" one)
     * @param array Array to iterate over
     */
    max(array: any[], byProperty: string): any;
}

interface IUtilClass {
    /**
     * Helper for creation of "classes".
     * @param [parent] optional "Class" to inherit from
     * @param [properties] Properties shared by all instances of this class
     *                  (be careful modifying objects defined here as this would affect all instances)
     */
    createClass(parent: Function, properties?: any): any;
    /**
     * Helper for creation of "classes".
     * @param [properties] Properties shared by all instances of this class
     *                  (be careful modifying objects defined here as this would affect all instances)
     */
    createClass(properties?: any): any;
}

interface IUtilObject {
    /**
     * Copies all enumerable properties of one object to another
     * @param destination Where to copy to
     * @param source Where to copy from
     */
    extend(destination: any, source: any): any;

    /**
     * Creates an empty object and copies all enumerable properties of another object to it
     * @param object Object to clone
     */
    clone(object: any): any;
}

interface IUtilString {
    /**
     * Camelizes a string
     * @param string String to camelize
     */
    camelize(string: string): string;

    /**
     * Capitalizes a string
     * @param string String to capitalize
     * @param [firstLetterOnly] If true only first letter is capitalized
     * and other letters stay untouched, if false first letter is capitalized
     * and other letters are converted to lowercase.
     */
    capitalize(string: string, firstLetterOnly: boolean): string;

    /**
     * Escapes XML in a string
     * @param string String to escape
     */
    escapeXml(string: string): string;

    /**
     * Divide a string in the user perceived single units
     * @param {String} textstring String to escape
     * @return {Array} array containing the graphemes
     */
    graphemeSplit(string: string): string[];
}

interface IUtilMisc {
    /**
     * Removes value from an array.
     * Presence of value (and its position in an array) is determined via `Array.prototype.indexOf`
     */
    removeFromArray(array: any[], value: any): any[];

    /**
     * Returns random number between 2 specified ones.
     * @param min lower limit
     * @param max upper limit
     */
    getRandomInt(min: number, max: number): number;

    /**
     * Transforms degrees to radians.
     * @param degrees value in degrees
     */
    degreesToRadians(degrees: number): number;

    /**
     * Transforms radians to degrees.
     * @param radians value in radians
     */
    radiansToDegrees(radians: number): number;

    /**
     * Rotates `point` around `origin` with `radians`
     * @param point The point to rotate
     * @param origin The origin of the rotation
     * @param radians The radians of the angle for the rotation
     */
    rotatePoint(point: Point, origin: Point, radians: number): Point;

    /**
     * Rotates `vector` with `radians`
     * @param vector The vector to rotate (x and y)
     * @param radians The radians of the angle for the rotation
     */
    rotateVector(vector: { x: number; y: number }, radians: number): { x: number; y: number };

    /**
     * Apply transform t to point p
     * @param  p The point to transform
     * @param  t The transform
     * @param  [ignoreOffset] Indicates that the offset should not be applied
     */
    transformPoint(p: Point, t: any[], ignoreOffset?: boolean): Point;

    /**
     * Invert transformation t
     * @param t The transform
     */
    invertTransform(t: any[]): any[];

    /**
     * A wrapper around Number#toFixed, which contrary to native method returns number, not string.
     * @param number number to operate on
     * @param fractionDigits number of fraction digits to "leave"
     */
    toFixed(number: number, fractionDigits: number): number;

    /**
     * Converts from attribute value to pixel value if applicable.
     * Returns converted pixels or original value not converted.
     * @param value number to operate on
     */
    parseUnit(value: number | string, fontSize?: number): number | string;

    /**
     * Function which always returns `false`.
     */
    falseFunction(): boolean;

    /**
     * Returns klass "Class" object of given namespace
     * @param type Type of object (eg. 'circle')
     * @param namespace Namespace to get klass "Class" object from
     */
    getKlass(type: string, namespace: string): any;

    /**
     * Returns object of given namespace
     * @param namespace Namespace string e.g. 'fabric.Image.filter' or 'fabric'
     */
    resolveNamespace(namespace: string): any;

    /**
     * Loads image element from given url and passes it to a callback
     * @param url URL representing an image
     * @param callback Callback; invoked with loaded image
     * @param [context] Context to invoke callback in
     * @param [crossOrigin] crossOrigin value to set image element to
     */
    loadImage(url: string, callback: (image: HTMLImageElement) => void, context?: any, crossOrigin?: string): void;

    /**
     * Creates corresponding fabric instances from their object representations
     * @param objects Objects to enliven
     * @param callback Callback to invoke when all objects are created
     * @param namespace Namespace to get klass "Class" object from
     * @param reviver Method for further parsing of object elements, called after each fabric object created.
     */
    enlivenObjects(objects: any[], callback: Function, namespace: string, reviver?: Function): void;

    /**
     * Groups SVG elements (usually those retrieved from SVG document)
     * @param elements SVG elements to group
     * @param [options] Options object
     */
    groupSVGElements(elements: any[], options?: any, path?: string): Object | Group;

    /**
     * Clear char widths cache for the given font family or all the cache if no
     * fontFamily is specified.
     * Use it if you know you are loading fonts in a lazy way and you are not waiting
     * for custom fonts to load properly when adding text objects to the canvas.
     * If a text object is added when its own font is not loaded yet, you will get wrong
     * measurement and so wrong bounding boxes.
     * After the font cache is cleared, either change the textObject text content or call
     * initDimensions() to trigger a recalculation
     * @param {String} [fontFamily] font family to clear
     */
    clearFabricFontCache(fontFamily?: string): void;

    /**
     * Populates an object with properties of another object
     * @param source Source object
     * @param destination Destination object
     * @param properties Propertie names to include
     */
    populateWithProperties(source: any, destination: any, properties: any): void;

    /**
     * Draws a dashed line between two points
     * This method is used to draw dashed line around selection area.
     * @param ctx context
     * @param x  start x coordinate
     * @param y start y coordinate
     * @param x2 end x coordinate
     * @param y2 end y coordinate
     * @param da dash array pattern
     */
    drawDashedLine(ctx: CanvasRenderingContext2D, x: number, y: number, x2: number, y2: number, da: any[]): void;

    /**
     * Creates canvas element and initializes it via excanvas if necessary
     * @param [canvasEl] optional canvas element to initialize;
     * when not given, element is created implicitly
     */
    createCanvasElement(canvasEl?: HTMLCanvasElement): HTMLCanvasElement;

    /**
     * Creates image element (works on client and node)
     */
    createImage(): HTMLImageElement;

    /**
     * Creates accessors (getXXX, setXXX) for a "class", based on "stateProperties" array
     * @param klass "Class" to create accessors for
     */
    createAccessors(klass: any): any;

    /**
     * @param receiver Object implementing `clipTo` method
     * @param ctx Context to clip
     */
    clipContext(receiver: Object, ctx: CanvasRenderingContext2D): void;

    /**
     * Multiply matrix A by matrix B to nest transformations
     * @param  a First transformMatrix
     * @param  b Second transformMatrix
     */
    multiplyTransformMatrices(a: number[], b: number[]): number[];

    /**
     * Decomposes standard 2x2 matrix into transform componentes
     * @param a transformMatrix
     */
    qrDecompose(
        a: number[],
    ): {
        angle: number;
        scaleX: number;
        scaleY: number;
        skewX: number;
        skewY: number;
        translateX: number;
        translateY: number;
    };

    /**
     * Extract Object transform values
     * @param  {fabric.Object} target object to read from
     * @return {Object} Components of transform
     */
    saveObjectTransform(
        target: Object,
    ): {
        scaleX: number;
        scaleY: number;
        skewX: number;
        skewY: number;
        angle: number;
        left: number;
        flipX: boolean;
        flipY: boolean;
        top: number;
    };

    /**
     * Returns a transform matrix starting from an object of the same kind of
     * the one returned from qrDecompose, useful also if you want to calculate some
     * transformations from an object that is not enlived yet
     * @static
     * @param  {Object} options
     * @param  {Number} [options.angle]
     * @param  {Number} [options.scaleX]
     * @param  {Number} [options.scaleY]
     * @param  {Boolean} [options.flipX]
     * @param  {Boolean} [options.flipY]
     * @param  {Number} [options.skewX]
     * @param  {Number} [options.skewX]
     * @param  {Number} [options.translateX]
     * @param  {Number} [options.translateY]
     * @return {Number[]} transform matrix
     */
    composeMatrix(options: {
        angle: number;
        scaleX: number;
        scaleY: number;
        flipX: boolean;
        flipY: boolean;
        skewX: number;
        skewY: number;
        translateX: number;
        translateY: number;
    }): number[];

    /**
     * Returns string representation of function body
     * @param fn Function to get body of
     */
    getFunctionBody(fn: Function): string;

    /**
     * Returns true if context has transparent pixel
     * at specified location (taking tolerance into account)
     * @param ctx context
     * @param x x coordinate
     * @param y y coordinate
     * @param tolerance Tolerance
     */
    isTransparent(ctx: CanvasRenderingContext2D, x: number, y: number, tolerance: number): boolean;

    /**
     * reset an object transform state to neutral. Top and left are not accounted for
     * @static
     * @param  {fabric.Object} target object to transform
     */
    resetObjectTransform(target: Object): void;
}

export const util: IUtil;
interface IUtil
    extends
        IUtilImage,
        IUtilAnimation,
        IUtilArc,
        IObservable<IUtil>,
        IUtilDomEvent,
        IUtilDomMisc,
        IUtilDomRequest,
        IUtilDomStyle,
        IUtilClass,
        IUtilMisc
{
    ease: IUtilAnimEase;
    array: IUtilArray;
    object: IUtilObject;
    string: IUtilString;
}

export interface Resources {
    [key: string]: HTMLCanvasElement;
}
export interface FilterBackend {
    resources: Resources;

    applyFilters(
        filters: IBaseFilter[],
        sourceElement: HTMLImageElement | HTMLCanvasElement,
        sourceWidth: number,
        sourceHeight: number,
        targetCanvas: HTMLCanvasElement,
        cacheKey?: string,
    ): any;

    evictCachesForKey(cacheKey: string): void;

    dispose(): void;

    clearWebGLCaches(): void;
}
export let filterBackend: FilterBackend | undefined;
export interface Canvas2dFilterBackend extends FilterBackend {}
export class Canvas2dFilterBackend {
    constructor();
}

export interface GPUInfo {
    renderer: string;
    vendor: string;
}

export interface WebglFilterBackendOptions {
    tileSize: number;
}
export interface WebglFilterBackend extends FilterBackend, WebglFilterBackendOptions {
    setupGLContext(width: number, height: number): void;

    chooseFastestCopyGLTo2DMethod(width: number, height: number): void;

    createWebGLCanvas(width: number, height: number): void;

    applyFiltersDebug(
        filters: IBaseFilter[],
        sourceElement: HTMLImageElement | HTMLCanvasElement,
        sourceWidth: number,
        sourceHeight: number,
        targetCanvas: HTMLCanvasElement,
        cacheKey?: string,
    ): any;

    glErrorToString(context: any, errorCode: any): string;

    createTexture(
        gl: WebGLRenderingContext,
        width: number,
        height: number,
        textureImageSource?: HTMLImageElement | HTMLCanvasElement,
    ): WebGLTexture;

    getCachedTexture(uniqueId: string, textureImageSource: HTMLImageElement | HTMLCanvasElement): WebGLTexture;

    copyGLTo2D(gl: WebGLRenderingContext, pipelineState: any): void;

    captureGPUInfo(): GPUInfo;
}

export class WebglFilterBackend {
    constructor(options?: WebglFilterBackendOptions);
}

export class Control {
    constructor(options?: Partial<Control>);

    /**
     * keep track of control visibility.
     * mainly for backward compatibility.
     * if you do not want to see a control, you can remove it
     * from the controlset.
     * @default true
     */
    visible: boolean;

    /**
     * Name of the action that the control will likely execute.
     * This is optional. FabricJS uses to identify what the user is doing for some
     * extra optimizations. If you are writing a custom control and you want to know
     * somewhere else in the code what is going on, you can use this string here.
     * you can also provide a custom getActionName if your control run multiple actions
     * depending on some external state.
     * default to scale since is the most common, used on 4 corners by default
     * @default 'scale'
     */
    actionName: string;

    /**
     * Drawing angle of the control.
     * NOT used for now, but name marked as needed for internal logic
     * example: to reuse the same drawing function for different rotated controls
     * @default 0
     */
    angle: number;

    /**
     * Relative position of the control. X
     * 0,0 is the center of the Object, while -0.5 (left) or 0.5 (right) are the extremities
     * of the bounding box.
     * @default 0
     */
    x: number;

    /**
     * Relative position of the control. Y
     * 0,0 is the center of the Object, while -0.5 (top) or 0.5 (bottom) are the extremities
     * of the bounding box.
     * @default 0
     */
    y: number;

    /**
     * Horizontal offset of the control from the defined position. In pixels
     * Positive offset moves the control to the right, negative to the left.
     * It used when you want to have position of control that does not scale with
     * the bounding box. Example: rotation control is placed at x:0, y: 0.5 on
     * the boundindbox, with an offset of 30 pixels vertically. Those 30 pixels will
     * stay 30 pixels no matter how the object is big. Another example is having 2
     * controls in the corner, that stay in the same position when the object scale.
     * of the bounding box.
     * @default 0
     */
    offsetX: number;

    /**
     * Vertical offset of the control from the defined position. In pixels
     * Positive offset moves the control to the bottom, negative to the top.
     * @default 0
     */
    offsetY: number;

    /**
     * Sets the length of the control. If null, defaults to object's cornerSize.
     * Expects both sizeX and sizeY to be set when set.
     */
    sizeX?: number | undefined;

    /**
     * Sets the height of the control. If null, defaults to object's cornerSize.
     * Expects both sizeX and sizeY to be set when set.
     */
    sizeY?: number | undefined;

    /**
     * Sets the length of the touch area of the control. If null, defaults to object's touchCornerSize.
     * Expects both touchSizeX and touchSizeY to be set when set.
     * @default null
     */
    touchSizeX?: number | undefined;

    /**
     * Sets the height of the touch area of the control. If null, defaults to object's touchCornerSize.
     * Expects both touchSizeX and touchSizeY to be set when set.
     * @default null
     */
    touchSizeY?: number | undefined;

    /**
     * Css cursor style to display when the control is hovered.
     * if the method `cursorStyleHandler` is provided, this property is ignored.
     * @default 'crosshair'
     */
    cursorStyle: string;

    /**
     * If controls has an offsetY or offsetX, draw a line that connects
     * the control to the bounding box
     * @default false
     */
    withConnection: boolean;

    /**
     * The control actionHandler, provide one to handle action ( control being moved )
     * @return {Boolean} true if the action/event modified the object
     */
    actionHandler(eventData: MouseEvent, transformData: Transform, x: number, y: number): boolean;

    /**
     * The control handler for mouse down, provide one to handle mouse down on control
     */
    mouseDownHandler(eventData: MouseEvent, transformData: Transform, x: number, y: number): boolean;

    /**
     * The control mouseUpHandler, provide one to handle an effect on mouse up.
     */
    mouseUpHandler(eventData: MouseEvent, transformData: Transform, x: number, y: number): boolean;

    /**
     * Returns control actionHandler
     */
    getActionHandler(eventData: MouseEvent, fabricObject: Object, control: Control): ControlMouseEventHandler;

    /**
     * Returns control mouseDown handler
     */
    getMouseDownHandler(eventData: MouseEvent, fabricObject: Object, control: Control): ControlMouseEventHandler;

    /**
     * Returns control mouseUp handler
     */
    getMouseUpHandler(eventData: MouseEvent, fabricObject: Object, control: Control): ControlMouseEventHandler;

    /**
     * Returns control cursorStyle for css using cursorStyle. If you need a more elaborate
     * function you can pass one in the constructor
     * the cursorStyle property
     */
    cursorStyleHandler(eventData: MouseEvent, control: Control, fabricObject: Object): string;

    /**
     * Returns the action name. The basic implementation just return the actionName property.
     */
    getActionName(eventData: MouseEvent, control: Control, fabricObject: Object): string;

    /**
     * Returns controls visibility
     */
    getVisibility(fabricObject: Object, controlKey: string): boolean;

    /**
     * Sets controls visibility
     */
    setVisibility(visibility: boolean): void;

    positionHandler(
        dim: { x: number; y: number },
        finalMatrix: any,
        fabricObject: Object,
        currentControl: Control,
    ): Point;

    /**
     * Returns the coords for this control based on object values.
     */
    calcCornerCoords(
        objectAngle: number,
        objectCornerSize: number,
        centerX: number,
        centerY: number,
        isTouch: boolean,
    ): void;

    /**
     * Render function for the control.
     * When this function runs the context is unscaled. unrotate. Just retina scaled.
     * all the functions will have to translate to the point left,top before starting Drawing
     * if they want to draw a control where the position is detected.
     * left and top are the result of the positionHandler function
     */
    render(ctx: CanvasRenderingContext2D, left: number, top: number, styleOverride: any, fabricObject: Object): void;
}

type ControlMouseEventHandler = (eventData: MouseEvent, transformData: Transform, x: number, y: number) => boolean;

export interface Transform {
    target: Object;
    action: string;
    actionHandler: ControlMouseEventHandler;
    altKey: boolean;
    corner: string;
    ex: number;
    ey: number;
    lastX: number;
    lastY: number;
    offsetX: number;
    offsetY: number;
    originX: "left" | "right";
    originY: "top" | "bottom";
    original: {
        angle: number;
        fill: string;
        flipX: boolean;
        flipY: boolean;
        height: number;
        left: number;
        originX: "left" | "right";
        originY: "top" | "bottom";
        scaleX: number;
        scaleY: number;
        skewX: number;
        skewY: number;
        top: number;
        width: number;
    };
    scaleX: number;
    scaleY: number;
    shiftKey: boolean;
    skewX: number;
    skewY: number;
    theta: number;
    width: number;
}
