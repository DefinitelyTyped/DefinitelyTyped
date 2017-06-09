// Type definitions for FabricJS 1.5
// Project: http://fabricjs.com/
// Definitions by: Oliver Klemencic <https://github.com/oklemencic/>, Joseph Livecchi <https://github.com/joewashear007/>, Michael Randolph <https://github.com/mrand01/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export as namespace fabric;

export const isLikelyNode: boolean;
export const isTouchSupported: boolean;

/////////////////////////////////////////////////////////////
// farbic Functions
/////////////////////////////////////////////////////////////

export function createCanvasForNode(width: number, height: number): Canvas;

// Parse
// ----------------------------------------------------------
/**
 * Creates markup containing SVG referenced elements like patterns, gradients etc.
 * @param {fabric.Canvas} canvas instance of fabric.Canvas
 */
export function createSVGRefElementsMarkup(canvas: StaticCanvas): string;
/**
 * Creates markup containing SVG font faces
 * @param {Array} objects Array of fabric objects
 */
export function createSVGFontFacesMarkup(objects: Object[]): string;
/**
 * Takes string corresponding to an SVG document, and parses it into a set of fabric objects
 * @param {String} string
 * @param {Function} callback
 * @param {Function} [reviver] Method for further parsing of SVG elements, called after each fabric object created.
 */
export function loadSVGFromString(string: string, callback: (results: Object[], options: any) => void, reviver?: Function): void;
/**
 * Takes url corresponding to an SVG document, and parses it into a set of fabric objects.
 * Note that SVG is fetched via XMLHttpRequest, so it needs to conform to SOP (Same Origin Policy)
 * @param {String} url
 * @param {Function} callback
 * @param {Function} [reviver] Method for further parsing of SVG elements, called after each fabric object created.
 */
export function loadSVGFromURL(url: string, callback: (results: Object[], options: any) => void, reviver?: Function): void;
/**
 * Returns CSS rules for a given SVG document
 * @param {SVGDocument} doc SVG document to parse
 */
export function getCSSRules(doc: SVGElement): any;

export function parseElements(elements: any[], callback: Function, options: any, reviver?: Function): void;
/**
 * Parses "points" attribute, returning an array of values
 * @param {String} points points attribute string
 */
export function parsePointsAttribute(points: string): any[];
/**
 * Parses "style" attribute, retuning an object with values
 * @param {SVGElement} element Element to parse
 */
export function parseStyleAttribute(element: SVGElement): any;
/**
 * Transforms an array of svg elements to corresponding fabric.* instances
 * @param {Array} elements Array of elements to parse
 * @param {Function} callback Being passed an array of fabric instances (transformed from SVG elements)
 * @param {Object} [options] Options object
 * @param {Function} [reviver] Method for further parsing of SVG elements, called after each fabric object created.
 */
export function parseElements(elements: any[], callback: Function, options?: any, reviver?: Function): void;
/**
 * Returns an object of attributes' name/value, given element and an array of attribute names;
 * Parses parent "g" nodes recursively upwards.
 * @param {DOMElement} element Element to parse
 * @param {Array} attributes Array of attributes to parse
 */
export function parseAttributes(element: HTMLElement, attributes: string[], svgUid?: string): { [key: string]: string };
/**
 * Parses an SVG document, returning all of the gradient declarations found in it
 * @param {SVGDocument} doc SVG document to parse
 */
export function getGradientDefs(doc: SVGElement): { [key: string]: any };
/**
 * Parses a short font declaration, building adding its properties to a style object
 * @param {String} value font declaration
 * @param {Object} oStyle definition
 */
export function parseFontDeclaration(value: string, oStyle: any): void;
/**
 * Parses an SVG document, converts it to an array of corresponding fabric.* instances and passes them to a callback
 * @param {SVGDocument} doc SVG document to parse
 * @param {Function} callback Callback to call when parsing is finished; It's being passed an array of elements (parsed from a document).
 * @param {Function} [reviver] Method for further parsing of SVG elements, called after each fabric object created.
 */
export function parseSVGDocument(doc: SVGElement, callback: (results: Object[], options: any) => void, reviver?: Function): void;
/**
 * Parses "transform" attribute, returning an array of values
 * @param {String} attributeValue String containing attribute value
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
// Data Object Interfaces - These intrface are not specific part of fabric,
// They are just helpful for for defining function paramters
//////////////////////////////////////////////////////////////////////////////
interface IDataURLOptions {
	/**
	 * The format of the output image. Either "jpeg" or "png"
	 */
	format?: string;
	/**
	 * Quality level (0..1). Only used for jpeg
	 */
	quality?: number;
	/**
	 * Multiplier to scale by
	 */
	multiplier?: number;
	/**
	 * Cropping left offset. Introduced in v1.2.14
	 */
	left?: number;
	/**
	 * Cropping top offset. Introduced in v1.2.14
	 */
	top?: number;
	/**
	 * Cropping width. Introduced in v1.2.14
	 */
	width?: number;
	/**
	 * Cropping height. Introduced in v1.2.14
	 */
	height?: number;
}

interface IEvent {
	e: Event;
	target?: Object;
}

interface IFillOptions {
	/**
	 * options.source Pattern source
	 */
	source: string | HTMLImageElement;
	/**
	 * Repeat property of a pattern (one of repeat, repeat-x, repeat-y or no-repeat)
	 */
	repeat?: string;
	/**
	 * Pattern horizontal offset from object's left/top corner
	 */
	offsetX?: number;
	/**
	 * Pattern vertical offset from object's left/top corner
	 */
	offsetY?: number;
}

interface IToSVGOptions {
	/**
	 * If true xml tag is not included
	 */
	suppressPreamble: boolean;
	/**
	 * SVG viewbox object
	 */
	viewBox: IViewBox;
	/**
	 * Encoding of SVG output
	 */
	encoding: string;
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
	/**
	 * Adds objects to collection, then renders canvas (if `renderOnAddRemove` is not `false`)
	 * Objects should be instances of (or inherit from) fabric.Object
	 * @param {...fabric.Object} object Zero or more fabric instances
	 */
	add(...object: Object[]): T;

	/**
	 * Inserts an object into collection at specified index, then renders canvas (if `renderOnAddRemove` is not `false`)
	 * An object should be an instance of (or inherit from) fabric.Object
	 * @param {Object} object Object to insert
	 * @param {Number} index Index to insert object at
	 * @param {Boolean} nonSplicing When `true`, no splicing (shifting) of objects occurs
	 * @return {Self} thisArg
	 * @chainable
	 */
	insertAt(object: Object, index: number, nonSplicing: boolean): T;

	/**
	 * Removes objects from a collection, then renders canvas (if `renderOnAddRemove` is not `false`)
	 * @param {...fabric.Object} object Zero or more fabric instances
	 * @return {Self} thisArg
	 * @chainable
	 */
	remove(...object: Object[]): T;

	/**
	 * Executes given function for each object in this group
	 * @param {Function} callback
	 * @param {Object} context Context (aka thisObject)
	 * @return {Self} thisArg
	 */
	forEachObject(callback: (element: Object, index: number, array: Object[]) => any, context?: any): T;

	/**
	 * Returns an array of children objects of this instance
	 * Type parameter introduced in 1.3.10
	 * @param {String} [type] When specified, only objects of this type are returned
	 * @return {Array}
	 */
	getObjects(type?: string): Object[];

	/**
	 * Returns object at specified index
	 * @param {Number} index
	 * @return {Self} thisArg
	 */
	item(index: number): T;

	/**
	 * Returns true if collection contains no objects
	 * @return {Boolean} true if collection is empty
	 */
	isEmpty(): boolean;

	/**
	 * Returns a size of a collection (i.e: length of an array containing its objects)
	 * @return {Number} Collection size
	 */
	size(): number;

	/**
	 * Returns true if collection contains an object
	 * @param {Object} object Object to check against
	 * @return {Boolean} `true` if collection contains an object
	 */
	contains(object: Object): boolean;

	/**
	 * Returns number representation of a collection complexity
	 * @return {Number} complexity
	 */
	complexity(): number;
}

interface IObservable<T> {
	/**
	 * Observes specified event
	 * @param eventName Event name (eg. 'after:render')
	 * @param handler Function that receives a notification when an event of the specified type occurs
	 */
	on(eventName: string, handler: (e: IEvent) => any): T;

	/**
	 * Observes specified event
	 * @param eventName Object with key/value pairs (eg. {'after:render': handler, 'selection:cleared': handler})
	 */
	on(eventName: {[key: string]: Function}): T;
	/**
	 * Fires event with an optional options object
	 * @param {String} eventName Event name to fire
	 * @param {Object} [options] Options object
	 */
	trigger(eventName: string, options?: any): T;
	/**
	 * Stops event observing for a particular event handler. Calling this method
	 * without arguments removes all handlers for all events
	 * @param eventName Event name (eg. 'after:render') or object with key/value pairs (eg. {'after:render': handler, 'selection:cleared': handler})
	 * @param handler Function to be deleted from EventListeners
	 */
	off(eventName?: string|any, handler?: (e: IEvent) => any): T;
}

// animation mixin
// ----------------------------------------------------
interface ICanvasAnimation<T> {
	FX_DURATION: number;
	/**
	 * Centers object horizontally with animation.
	 * @param {fabric.Object} object Object to center
	 * @param {Object} [callbacks] Callbacks object with optional "onComplete" and/or "onChange" properties
	 * @param {Function} [callbacks.onComplete] Invoked on completion
	 * @param {Function} [callbacks.onChange] Invoked on every step of animation
	 */
	fxCenterObjectH(object: Object, callbacks?: { onComplete: Function; onChange: Function; }): T;

	/**
	 * Centers object vertically with animation.
	 * @param {fabric.Object} object Object to center
	 * @param {Object} [callbacks] Callbacks object with optional "onComplete" and/or "onChange" properties
	 * @param {Function} [callbacks.onComplete] Invoked on completion
	 * @param {Function} [callbacks.onChange] Invoked on every step of animation
	 */
	fxCenterObjectV(object: Object, callbacks?: { onComplete: Function; onChange: Function; }): T;

	/**
	 * Same as `fabric.Canvas#remove` but animated
	 * @param {fabric.Object} object Object to remove
	 * @param {Object} [callbacks] Callbacks object with optional "onComplete" and/or "onChange" properties
	 * @param {Function} [callbacks.onComplete] Invoked on completion
	 * @param {Function} [callbacks.onChange] Invoked on every step of animation
	 * @return {fabric.Canvas} thisArg
	 * @chainable
	 */
	fxRemove(object: Object, callbacks?: { onComplete: Function; onChange: Function; }): T;
}
interface IObjectAnimation<T> {
	/**
	 * Animates object's properties
	 * object.animate('left', ..., {duration: ...});
	 * @param property Property to animate
	 * @param value Value to animate property
	 * @param options The animation options
	 */
	animate(property: string, value: number|string, options?: IAnimationOptions): Object;
	/**
	 * Animates object's properties
	 * object.animate({ left: ..., top: ... }, { duration: ... });
	 * @param properties Properties to animate
	 * @param value Options object
	 */
	animate(properties: any, options?: IAnimationOptions): Object;
}
interface IAnimationOptions {
	/**
	 * Allows to specify starting value of animatable property (if we don't want current value to be used).
	 */
	from?: string|number;
	/**
	 * Defaults to 500 (ms). Can be used to change duration of an animation.
	 */
	duration?: number;
	/**
	 * Callback; invoked on every value change
	 */
	onChange?: Function;
	/**
	 * Callback; invoked when value change is completed
	 */
	onComplete?: Function;

	/**
	 * Easing function. Default: fabric.util.ease.easeInSine
	 */
	easing?: Function;
	/**
	 *  Value to modify the property by, default: end - start
	 */
	by?: number;
}

///////////////////////////////////////////////////////////////////////////////
// General Fabric Interfaces
//////////////////////////////////////////////////////////////////////////////
export class Color {
	/**
	 * Color class
	 * The purpose of Color is to abstract and encapsulate common color operations;
	 * @param {String} color optional in hex or rgb(a) format
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
	 * Gets value of alpha channel for this color
	 */
	getAlpha(): number;

	/**
	 * Sets value of alpha channel for this color
	 * @param {Number} alpha Alpha value 0-1
	 */
	setAlpha(alpha: number): void;

	/**
	 * Transforms color to its grayscale representation
	 */
	toGrayscale(): Color;

	/**
	 * Transforms color to its black and white representation
	 * @param {Number} threshold
	 */
	toBlackWhite(threshold: number): Color;
	/**
	 * Overlays color with another color
	 * @param {String|fabric.Color} otherColor
	 */
	overlayWith(otherColor: string|Color): Color;

	/**
	 * Returns new color object, when given a color in RGB format
	 * @param {String} color Color value ex: rgb(0-255,0-255,0-255)
	 */
	static fromRgb(color: string): Color;
	/**
	 * Returns new color object, when given a color in RGBA format
	 * @param {String} color Color value ex: rgb(0-255,0-255,0-255)
	 */
	static fromRgba(color: string): Color;
	/**
	 * Returns array represenatation (ex: [100, 100, 200, 1]) of a color that's in RGB or RGBA format
	 * @param {String} color Color value ex: rgb(0-255,0-255,0-255), rgb(0%-100%,0%-100%,0%-100%)
	 */
	static sourceFromRgb(color: string): number[];
	/**
	 * Returns new color object, when given a color in HSL format
	 * @param {String} color Color value ex: hsl(0-260,0%-100%,0%-100%)
	 */
	static fromHsl(color: string): Color;
	/**
	 * Returns new color object, when given a color in HSLA format
	 * @param {String} color Color value ex: hsl(0-260,0%-100%,0%-100%)
	 */
	static fromHsla(color: string): Color;
	/**
	 * Returns array represenatation (ex: [100, 100, 200, 1]) of a color that's in HSL or HSLA format.
	 * @param {String} color Color value ex: hsl(0-360,0%-100%,0%-100%) or hsla(0-360,0%-100%,0%-100%, 0-1)
	 */
	static sourceFromHsl(color: string): number[];
	/**
	 * Returns new color object, when given a color in HEX format
	 * @param {String} color Color value ex: FF5555
	 */
	static fromHex(color: string): Color;

	/**
	 * Returns array represenatation (ex: [100, 100, 200, 1]) of a color that's in HEX format
	 * @param {String} color ex: FF5555
	 */
	static sourceFromHex(color: string): number[];
	/**
	 * Returns new color object, when given color in array representation (ex: [200, 100, 100, 0.5])
	 * @param {Array} source
	 */
	static fromSource(source: number[]): Color;
}

interface IGradientOptions {
	/**
	 * @param {String} [options.type] Type of gradient 'radial' or 'linear'
	 */
	type?: string;
	/**
	 * x-coordinate of start point
	 */
	x1?: number;
	/**
	 * y-coordinate of start point
	 */
	y1?: number;
	/**
	 * x-coordinate of end point
	 */
	x2?: number;
	/**
	 * y-coordinate of end point
	 */
	y2?: number;
	/**
	 * Radius of start point (only for radial gradients)
	 */
	r1?: number;
	/**
	 * Radius of end point (only for radial gradients)
	 */
	r2?: number;
	/**
	 * Color stops object eg. {0:string; 1:string;
	 */
	colorStops?: any;
}
interface IGradient extends IGradientOptions {
	/**
	 * Adds another colorStop
	 * @param {Object} colorStop Object with offset and color
	 */
	addColorStop(colorStop: any): IGradient;
	/**
	 * Returns object representation of a gradient
	 */
	toObject(): any;
	/**
	 * Returns SVG representation of an gradient
	 * @param {Object} object Object to create a gradient for
	 * @param {Boolean} normalize Whether coords should be normalized
	 * @return {String} SVG representation of an gradient (linear/radial)
	 */
	toSVG(object: Object, normalize?: boolean): string;

	/**
	 * Returns an instance of CanvasGradient
	 * @param {CanvasRenderingContext2D} ctx Context to render on
	 */
	toLive(ctx: CanvasRenderingContext2D, object?: PathGroup): CanvasGradient;
}
interface IGrandientStatic {
	new (options?: IGradientOptions): IGradient;
	/**
	 * Returns instance from an SVG element
	 * @param {SVGGradientElement} el SVG gradient element
	 * @param {fabric.Object} instance
	 */
	fromElement(el: SVGGradientElement, instance: Object): IGradient;
	/**
	 * Returns instance from its object representation
	 * @param {Object} obj
	 * @param {Object} [options] Options object
	 */
	fromObject(obj: any, options: any[]): IGradient;
}

export class Intersection {
	constructor(status?: string);

	/**
	 * Appends a point to intersection
	 */
	appendPoint(point: Point): void;
	/**
	 * Appends points to intersection
	 */
	appendPoints(points: Point[]): void;

	/**
	 * Checks if polygon intersects another polygon
	 */
	static intersectPolygonPolygon(points1: Point[], points2: Point[]): Intersection;
	/**
	 * Checks if line intersects polygon
	 */
	static intersectLinePolygon(a1: Point, a2: Point, points: Point[]): Intersection;
	/**
	 * Checks if one line intersects another
	 */
	static intersectLineLine(a1: Point, a2: Point, b1: Point, b2: Point): Intersection;
	/**
	 * Checks if polygon intersects rectangle
	 */
	static intersectPolygonRectangle(points: Point[], r1: number, r2: number): Intersection;
}

interface IPatternOptions {
	/**
	 * Repeat property of a pattern (one of repeat, repeat-x, repeat-y or no-repeat)
	 */
	repeat: string;

	/**
	 * Pattern horizontal offset from object's left/top corner
	 */
	offsetX: number;

	/**
	 * Pattern vertical offset from object's left/top corner
	 */
	offsetY: number;
	/**
	 * The source for the pattern
	 */
	source: string|HTMLImageElement;
}
export interface Pattern extends IPatternOptions {}
export class Pattern  {
	constructor(options?: IPatternOptions);

	initialise(options?: IPatternOptions): Pattern;
	/**
	 * Returns an instance of CanvasPattern
	 */
	toLive(ctx: CanvasRenderingContext2D): Pattern;

	/**
	 * Returns object representation of a pattern
	 */
	toObject(): any;
	/**
	 * Returns SVG representation of a pattern
	 * @param {fabric.Object} object
	 */
	toSVG(object: Object): string;
}

export class Point {
	x: number;
	y: number;

	constructor(x: number, y: number);

	/**
	 * Adds another point to this one and returns another one
	 * @param {fabric.Point} that
	 */
	add(that: Point): Point;

	/**
	 * Adds another point to this one
	 * @param {fabric.Point} that
	 */
	addEquals(that: Point): Point;

	/**
	 * Adds value to this point and returns a new one
	 * @param {Number} scalar
	 */
	scalarAdd(scalar: number): Point;

	/**
	 * Adds value to this point
	 * @param {Number} scalar
	 */
	scalarAddEquals(scalar: number): Point;

	/**
	 * Subtracts another point from this point and returns a new one
	 * @param {fabric.Point} that
	 */
	subtract(that: Point): Point;

	/**
	 * Subtracts another point from this point
	 * @param {fabric.Point} that
	 */
	subtractEquals(that: Point): Point;

	/**
	 * Subtracts value from this point and returns a new one
	 * @param {Number} scalar
	 */
	scalarSubtract(scalar: number): Point;

	/**
	 * Subtracts value from this point
	 * @param {Number} scalar
	 */
	scalarSubtractEquals(scalar: number): Point;

	/**
	 * Miltiplies this point by a value and returns a new one
	 * @param {Number} scalar
	 */
	multiply(scalar: number): Point;

	/**
	 * Miltiplies this point by a value
	 * @param {Number} scalar
	 */
	multiplyEquals(scalar: number): Point;

	/**
	 * Divides this point by a value and returns a new one
	 * @param {Number} scalar
	 */
	divide(scalar: number): Point;

	/**
	 * Divides this point by a value
	 * @param {Number} scalar
	 */
	divideEquals(scalar: number): Point;

	/**
	 * Returns true if this point is equal to another one
	 * @param {fabric.Point} that
	 */
	eq(that: Point): Point;

	/**
	 * Returns true if this point is less than another one
	 * @param {fabric.Point} that
	 */
	lt(that: Point): Point;

	/**
	 * Returns true if this point is less than or equal to another one
	 * @param {fabric.Point} that
	 */
	lte(that: Point): Point;

	/**
	 * Returns true if this point is greater another one
	 * @param {fabric.Point} that
	 */
	gt(that: Point): Point;

	/**
	 * Returns true if this point is greater than or equal to another one
	 * @param {fabric.Point} that
	 */
	gte(that: Point): Point;

	/**
	 * Returns new point which is the result of linear interpolation with this one and another one
	 * @param {fabric.Point} that
	 * @param {Number} t
	 */
	lerp(that: Point, t: number): Point;

	/**
	 * Returns distance from this point and another one
	 * @param {fabric.Point} that
	 */
	distanceFrom(that: Point): number;

	/**
	 * Returns the point between this point and another one
	 * @param {fabric.Point} that
	 */
	midPointFrom(that: Point): Point;

	/**
	 * Returns a new point which is the min of this and another one
	 * @param {fabric.Point} that
	 */
	min(that: Point): Point;

	/**
	 * Returns a new point which is the max of this and another one
	 * @param {fabric.Point} that
	 */
	max(that: Point): Point;

	/**
	 * Returns string representation of this point
	 */
	toString(): string;

	/**
	 * Sets x/y of this point
	 * @param {Number} x
	 * @param {Number} y
	 */
	setXY(x: number, y: number): Point;

	/**
	 * Sets x/y of this point from another point
	 * @param {fabric.Point} that
	 */
	setFromPoint(that: Point): Point;

	/**
	 * Swaps x/y of this point and another point
	 * @param {fabric.Point} that
	 */
	swap(that: Point): Point;
}

interface IShadowOptions {
	/**
	 * Whether the shadow should affect stroke operations
	 */
	affectStrike: boolean;
	/**
	 * Shadow blur
	 */
	blur: number;
	/**
	 * Shadow color
	 */
	color: string;
	/**
	 * Indicates whether toObject should include default values
	 */
	includeDefaultValues: boolean;
	/**
	 * Shadow horizontal offset
	 */
	offsetX: number;
	/**
	 * Shadow vertical offset
	 */
	offsetY: number;
}
export interface IShadow extends IShadowOptions {}
export class IShadow {
	constructor(options?: IShadowOptions);
	initialize(options?: IShadowOptions|string): IShadow;
	/**
	 * Returns object representation of a shadow
	 */
	toObject(): Object;
	/**
	 * Returns a string representation of an instance, CSS3 text-shadow declaration
	 */
	toString(): string;
	/**
	 * Returns SVG representation of a shadow
	 * @param {fabric.Object} object
	 */
	toSVG(object: Object): string;

	/**
	 * Regex matching shadow offsetX, offsetY and blur, Static
	 */
	reOffsetsAndBlur: RegExp;

	static reOffsetsAndBlur: RegExp;
}

///////////////////////////////////////////////////////////////////////////////
// Canvas Interfaces
//////////////////////////////////////////////////////////////////////////////
interface ICanvasDimensions {
	/**
	 * Width of canvas element
	 */
	width: number;
	/**
	 * Height of canvas element
	 */
	height: number;
}
interface ICanvasDimensionsOptions {
	/**
	 * Set the given dimensions only as canvas backstore dimensions
	 */
	backstoreOnly?: boolean;
	/**
	 * Set the given dimensions only as css dimensions
	 */
	cssOnly?: boolean;
}

interface IStaticCanvasOptions {
	/**
	 * Indicates whether the browser can be scrolled when using a touchscreen and dragging on the canvas
	 */
	allowTouchScrolling?: boolean;
	/**
	 * Indicates whether this canvas will use image smoothing, this is on by default in browsers
	 */
	imageSmoothingEnabled?: boolean;

	/**
	 * Indicates whether objects should remain in current stack position when selected.
	 * When false objects are brought to top and rendered as part of the selection group
	 */
	preserveObjectStacking?: boolean;

	/**
	 * The transformation (in the format of Canvas transform) which focuses the viewport
	 */
	viewportTransform?: number[];

	freeDrawingColor?: string;
	freeDrawingLineWidth?: number;

	/**
	 * Background color of canvas instance.
	 * Should be set via setBackgroundColor
	 */
	backgroundColor?: string|Pattern;
	/**
	 * Background image of canvas instance.
	 * Should be set via setBackgroundImage
	 * <b>Backwards incompatibility note:</b> The "backgroundImageOpacity" and "backgroundImageStretch" properties are deprecated since 1.3.9.
	 */
	backgroundImage?: Image | string;
	backgroundImageOpacity?: number;
	backgroundImageStretch?: number;
	/**
	 * Function that determines clipping of entire canvas area
	 * Being passed context as first argument. See clipping canvas area
	 */
	clipTo?(context: CanvasRenderingContext2D): void;

	/**
	 * Indicates whether object controls (borders/controls) are rendered above overlay image
	 */
	controlsAboveOverlay?: boolean;

	/**
	 * Indicates whether toObject/toDatalessObject should include default values
	 */
	includeDefaultValues?: boolean;
	/**
	 * Overlay color of canvas instance.
	 * Should be set via setOverlayColor
	 */
	overlayColor?: string|Pattern;
	/**
	 * Overlay image of canvas instance.
	 * Should be set via setOverlayImage
	 * <b>Backwards incompatibility note:</b> The "overlayImageLeft" and "overlayImageTop" properties are deprecated since 1.3.9.
	 */
	overlayImage?: Image;
	overlayImageLeft?: number;
	overlayImageTop?: number;
	/**
	 * Indicates whether add, insertAt and remove should also re-render canvas.
	 * Disabling this option could give a great performance boost when adding/removing a lot of objects to/from canvas at once
	 * (followed by a manual rendering after addition/deletion)
	 */
	renderOnAddRemove?: boolean;
	/**
	 * Indicates whether objects' state should be saved
	 */
	stateful?: boolean;
}
export interface StaticCanvas extends IObservable<StaticCanvas>, IStaticCanvasOptions, ICollection<StaticCanvas>, ICanvasAnimation<StaticCanvas> {}
export class StaticCanvas {
	/**
	 * Constructor
	 * @param {HTMLElement|String} element <canvas> element to initialize instance on
	 * @param {Object} [options] Options object
	 */
	constructor(element: HTMLCanvasElement|string, options?: ICanvasOptions);

	/**
	 * Calculates canvas element offset relative to the document
	 * This method is also attached as "resize" event handler of window
	 */
	calcOffset(): StaticCanvas;

	/**
	 * Sets {@link fabric.StaticCanvas#overlayImage|overlay image} for this canvas
	 * @param {(fabric.Image|String)} image fabric.Image instance or URL of an image to set overlay to
	 * @param {Function} callback callback to invoke when image is loaded and set as an overlay
	 * @param {Object} [options] Optional options to set for the {@link fabric.Image|overlay image}.
	 */
	setOverlayImage(image: Image|string, callback: Function, options?: IObjectOptions): StaticCanvas;

	/**
	 * Sets {@link fabric.StaticCanvas#backgroundImage|background image} for this canvas
	 * @param {(fabric.Image|String)} image fabric.Image instance or URL of an image to set background to
	 * @param {Function} callback Callback to invoke when image is loaded and set as background
	 * @param {Object} [options] Optional options to set for the {@link fabric.Image|background image}.
	 */
	setBackgroundImage(image: Image|string, callback: Function, options?: IObjectOptions): StaticCanvas;

	/**
	 * Sets {@link fabric.StaticCanvas#overlayColor|background color} for this canvas
	 * @param {(String|fabric.Pattern)} overlayColor Color or pattern to set background color to
	 * @param {Function} callback Callback to invoke when background color is set
	 */
	setOverlayColor(overlayColor: string|Pattern, callback: Function): StaticCanvas;

	/**
	 * Sets {@link fabric.StaticCanvas#backgroundColor|background color} for this canvas
	 * @param {(String|fabric.Pattern)} backgroundColor Color or pattern to set background color to
	 * @param {Function} callback Callback to invoke when background color is set
	 */
	setBackgroundColor(backgroundColor: string|Pattern, callback: Function): StaticCanvas;

	/**
	 * Returns canvas width (in px)
	 */
	getWidth(): number;

	/**
	 * Returns canvas height (in px)
	 */
	getHeight(): number;

	/**
	 * Sets width of this canvas instance
	 * @param {Number|String} value                         Value to set width to
	 * @param {Object}        [options]                     Options object
	 */
	setWidth(value: number|string, options?: ICanvasDimensionsOptions): StaticCanvas;

	/**
	 * Sets height of this canvas instance
	 * @param {Number|String} value                         Value to set height to
	 * @param {Object}        [options]                     Options object
	 */
	setHeight(value: number|string, options?: ICanvasDimensionsOptions): StaticCanvas;

	/**
	 * Sets dimensions (width, height) of this canvas instance. when options.cssOnly flag active you should also supply the unit of measure (px/%/em)
	 * @param {Object}        dimensions                    Object with width/height properties
	 * @param {Object}        [options]                     Options object
	 */
	setDimensions(dimensions: ICanvasDimensions, options?: ICanvasDimensionsOptions): StaticCanvas;

	/**
	 * Returns canvas zoom level
	 */
	getZoom(): number;

	/**
	 * Sets viewport transform of this canvas instance
	 * @param {Array} vpt the transform in the form of context.transform
	 */
	setViewportTransform(vpt: number[]): StaticCanvas;

	/**
	 * Sets zoom level of this canvas instance, zoom centered around point
	 * @param {fabric.Point} point to zoom with respect to
	 * @param {Number} value to set zoom to, less than 1 zooms out
	 */
	zoomToPoint(point: Point, value: number): StaticCanvas;

	/**
	 * Sets zoom level of this canvas instance
	 * @param {Number} value to set zoom to, less than 1 zooms out
	 */
	setZoom(value: number): StaticCanvas;

	/**
	 * Pan viewport so as to place point at top left corner of canvas
	 * @param {fabric.Point} point to move to
	 */
	absolutePan(point: Point): StaticCanvas;

	/**
	 * Pans viewpoint relatively
	 * @param {fabric.Point} point (position vector) to move by
	 */
	relativePan(point: Point): StaticCanvas;

	/**
	 * Returns <canvas> element corresponding to this instance
	 */
	getElement(): HTMLCanvasElement;

	/**
	 * Returns currently selected object, if any
	 */
	getActiveObject(): Object;

	/**
	 * Returns currently selected group of object, if any
	 */
	getActiveGroup(): Group;

	/**
	 * Clears specified context of canvas element
	 * @param {CanvasRenderingContext2D} ctx Context to clear
	 * @chainable
	 */
	clearContext(ctx: CanvasRenderingContext2D): StaticCanvas;

	/**
	 * Returns context of canvas where objects are drawn
	 */
	getContext(): CanvasRenderingContext2D;

	/**
	 * Clears all contexts (background, main, top) of an instance
	 */
	clear(): StaticCanvas;

	/**
	 * Renders both the top canvas and the secondary container canvas.
	 * @param {Boolean} [allOnTop] Whether we want to force all images to be rendered on the top canvas
	 * @chainable
	 */
	renderAll(allOnTop?: boolean): StaticCanvas;

	/**
	 * Method to render only the top canvas.
	 * Also used to render the group selection box.
	 * @chainable
	 */
	renderTop(): StaticCanvas;

	/**
	 * Returns coordinates of a center of canvas.
	 * Returned value is an object with top and left properties
	 */
	getCenter(): { top: number; left: number; };
	/**
	 * Centers object horizontally.
	 * You might need to call `setCoords` on an object after centering, to update controls area.
	 * @param {fabric.Object} object Object to center horizontally
	 */
	centerObjectH(object: Object): StaticCanvas;

	/**
	 * Centers object vertically.
	 * You might need to call `setCoords` on an object after centering, to update controls area.
	 * @param {fabric.Object} object Object to center vertically
	 */
	centerObjectV(object: Object): StaticCanvas;

	/**
	 * Centers object vertically and horizontally.
	 * You might need to call `setCoords` on an object after centering, to update controls area.
	 * @param {fabric.Object} object Object to center vertically and horizontally
	 */
	centerObject(object: Object): StaticCanvas;

	/**
	 * Returs dataless JSON representation of canvas
	 * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
	 */
	toDatalessJSON(propertiesToInclude?: any[]): string;

	/**
	 * Returns object representation of canvas
	 * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
	 */
	toObject(propertiesToInclude?: any[]): any;

	/**
	 * Returns dataless object representation of canvas
	 * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
	 */
	toDatalessObject(propertiesToInclude?: any[]): any;

	/**
	 * When true, getSvgTransform() will apply the StaticCanvas.viewportTransform to the SVG transformation. When true,
	 * a zoomed canvas will then produce zoomed SVG output.
	 */
	svgViewportTransformation: boolean;

	/**
	 * Returns SVG representation of canvas
	 * @param {Object} [options] Options object for SVG output
	 * @param {Function} [reviver] Method for further parsing of svg elements, called after each fabric object converted into svg representation.
	 */
	toSVG(options: IToSVGOptions, reviver?: Function): string;

	/**
	 * Moves an object to the bottom of the stack of drawn objects
	 * @param {fabric.Object} object Object to send to back
	 * @chainable
	 */
	sendToBack(object: Object): StaticCanvas;

	/**
	 * Moves an object to the top of the stack of drawn objects
	 * @param {fabric.Object} object Object to send
	 * @chainable
	 */
	bringToFront(object: Object): StaticCanvas;

	/**
	 * Moves an object down in stack of drawn objects
	 * @param {fabric.Object} object Object to send
	 * @param {Boolean} [intersecting] If `true`, send object behind next lower intersecting object
	 * @chainable
	 */
	sendBackwards(object: Object): StaticCanvas;

	/**
	 * Moves an object up in stack of drawn objects
	 * @param {fabric.Object} object Object to send
	 * @param {Boolean} [intersecting] If `true`, send object in front of next upper intersecting object
	 * @chainable
	 */
	bringForward(object: Object): StaticCanvas;
	/**
	 * Moves an object to specified level in stack of drawn objects
	 * @param {fabric.Object} object Object to send
	 * @param {Number} index Position to move to
	 * @chainable
	 */
	moveTo(object: Object, index: number): StaticCanvas;

	/**
	 * Clears a canvas element and removes all event listeners
	 */
	dispose(): StaticCanvas;

	/**
	 * Returns a string representation of an instance
	 */
	toString(): string;

	/**
	 * Exports canvas element to a dataurl image. Note that when multiplier is used, cropping is scaled appropriately
	 * @param {Object} [options] Options object
	 */
	toDataURL(options?: IDataURLOptions): string;

	/**
	 * Provides a way to check support of some of the canvas methods
	 * (either those of HTMLCanvasElement itself, or rendering context)
	 * @param {String} methodName Method to check support for; Could be one of "getImageData", "toDataURL", "toDataURLWithQuality" or "setLineDash"
	 * @return {Boolean | null} `true` if method is supported (or at least exists), null` if canvas element or context can not be initialized
	 */
	supports(methodName: string): boolean;

	/**
	 * Populates canvas with data from the specified JSON.
	 * JSON format must conform to the one of toJSON formats
	 * @param {String|Object} json JSON string or object
	 * @param {Function} callback Callback, invoked when json is parsed
	 *                            and corresponding objects (e.g: {@link fabric.Image})
	 *                            are initialized
	 * @param {Function} [reviver] Method for further parsing of JSON elements, called after each fabric object created.
	 */
	loadFromJSON(json: string|any, callback: Function, reviver?: Function): Canvas;
	/**
	 * Clones canvas instance
	 * @param {Object} [callback] Receives cloned instance as a first argument
	 * @param {Array} [properties] Array of properties to include in the cloned canvas and children
	 */
	clone(callback: (canvas: StaticCanvas) => any, properties?: any[]): void;

	/**
	 * Clones canvas instance without cloning existing data.
	 * This essentially copies canvas dimensions, clipping properties, etc.
	 * but leaves data empty (so that you can populate it with your own)
	 * @param {Object} [callback] Receives cloned instance as a first argument
	 */
	cloneWithoutData(callback: (canvas: StaticCanvas) => any): void;

	/**
	 * Callback; invoked right before object is about to be scaled/rotated
	 */
	onBeforeScaleRotate(target: Object): void;

	// Functions from object straighten mixin
	// --------------------------------------------------------------------------------------------------------------------------------

	/**
	 * Straightens object, then rerenders canvas
	 * @param {fabric.Object} object Object to straighten
	 */
	straightenObject(object: Object): StaticCanvas;

	/**
	 * Same as straightenObject, but animated
	 * @param {fabric.Object} object Object to straighten
	 */
	fxStraightenObject(object: Object): StaticCanvas;

	static EMPTY_JSON: string;
	/**
	 * Provides a way to check support of some of the canvas methods
	 * (either those of HTMLCanvasElement itself, or rendering context)
	 * @param {String} methodName Method to check support for; Could be one of "getImageData", "toDataURL", "toDataURLWithQuality" or "setLineDash"
	 */
	static supports(methodName: string): boolean;
	/**
	 * Returns JSON representation of canvas
	 * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
	 */
	static toJSON(propertiesToInclude?: any[]): string;
}

interface ICanvasOptions extends IStaticCanvasOptions {
	/**
	 * When true, objects can be transformed by one side (unproportionally)
	 */
	uniScaleTransform?: boolean;

	/**
	 * When true, objects use center point as the origin of scale transformation.
	 * <b>Backwards incompatibility note:</b> This property replaces "centerTransform" (Boolean).
	 */
	centeredScaling?: boolean;

	/**
	 * When true, objects use center point as the origin of rotate transformation.
	 * <b>Backwards incompatibility note:</b> This property replaces "centerTransform" (Boolean).
	 */
	centeredRotation?: boolean;

	/**
	 * Indicates that canvas is interactive. This property should not be changed.
	 */
	interactive?: boolean;

	/**
	 * Indicates whether group selection should be enabled
	 */
	selection?: boolean;

	/**
	 * Color of selection
	 */
	selectionColor?: string;

	/**
	 * Default dash array pattern
	 * If not empty the selection border is dashed
	 */
	selectionDashArray?: any[];

	/**
	 * Color of the border of selection (usually slightly darker than color of selection itself)
	 */
	selectionBorderColor?: string;

	/**
	 * Width of a line used in object/group selection
	 */
	selectionLineWidth?: number;

	/**
	 * Default cursor value used when hovering over an object on canvas
	 */
	hoverCursor?: string;

	/**
	 * Default cursor value used when moving an object on canvas
	 */
	moveCursor?: string;

	/**
	 * Default cursor value used for the entire canvas
	 */
	defaultCursor?: string;

	/**
	 * Cursor value used during free drawing
	 */
	freeDrawingCursor?: string;

	/**
	 * Cursor value used for rotation point
	 */
	rotationCursor?: string;

	/**
	 * Default element class that's given to wrapper (div) element of canvas
	 */
	containerClass?: string;

	/**
	 * When true, object detection happens on per-pixel basis rather than on per-bounding-box
	 */
	perPixelTargetFind?: boolean;

	/**
	 * Number of pixels around target pixel to tolerate (consider active) during object detection
	 */
	targetFindTolerance?: number;

	/**
	 * When true, target detection is skipped when hovering over canvas. This can be used to improve performance.
	 */
	skipTargetFind?: boolean;

	/**
	 * When true, mouse events on canvas (mousedown/mousemove/mouseup) result in free drawing.
	 * After mousedown, mousemove creates a shape,
	 * and then mouseup finalizes it and adds an instance of `fabric.Path` onto canvas.
	 */
	isDrawingMode?: boolean;
}
export interface Canvas extends StaticCanvas {}
export interface Canvas extends ICanvasOptions {}
export class Canvas {
	/**
	 * Constructor
	 * @param {HTMLElement|String} element <canvas> element to initialize instance on
	 * @param {Object} [options] Options object
	 */
	constructor(element: HTMLCanvasElement | string, options?: ICanvasOptions);

	_objects: Object[];

	/**
	 * Checks if point is contained within an area of given object
	 * @param {Event} e Event object
	 * @param {fabric.Object} target Object to test against
	 */
	containsPoint(e: Event, target: Object): boolean;
	/**
	 * Deactivates all objects on canvas, removing any active group or object
	 * @return {fabric.Canvas} thisArg
	 */
	deactivateAll(): Canvas;
	/**
	 * Deactivates all objects and dispatches appropriate events
	 * @param {Event} [e] Event (passed along when firing)
	 * @return {fabric.Canvas} thisArg
	 */
	deactivateAllWithDispatch(e?: Event): Canvas;
	/**
	 * Discards currently active group
	 * @param {Event} [e] Event (passed along when firing)
	 * @return {fabric.Canvas} thisArg
	 */
	discardActiveGroup(e?: Event): Canvas;
	/**
	 * Discards currently active object
	 * @param {Event} [e] Event (passed along when firing)
	 * @return {fabric.Canvas} thisArg
	 * @chainable
	 */
	discardActiveObject(e?: Event): Canvas;
	/**
	 * Draws objects' controls (borders/controls)
	 * @param {CanvasRenderingContext2D} ctx Context to render controls on
	 */
	drawControls(ctx: CanvasRenderingContext2D): void;
	/**
	 * Method that determines what object we are clicking on
	 * @param {Event} e mouse event
	 * @param {Boolean} skipGroup when true, group is skipped and only objects are traversed through
	 */
	findTarget(e: MouseEvent, skipGroup: boolean): Canvas;
	/**
	 * Returns currently active group
	 * @return {fabric.Group} Current group
	 */
	getActiveGroup(): Group;
	/**
	 * Returns currently active object
	 * @return {fabric.Object} active object
	 */
	getActiveObject(): Object;
	/**
	 * Returns pointer coordinates relative to canvas.
	 * @param {Event} e
	 * @return {Object} object with "x" and "y" number values
	 */
	getPointer(e: Event, ignoreZoom?: boolean, upperCanvasEl?: CanvasRenderingContext2D): { x: number; y: number; };
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
	 * Returns true if object is transparent at a certain location
	 * @param {fabric.Object} target Object to check
	 * @param {Number} x Left coordinate
	 * @param {Number} y Top coordinate
	 */
	isTargetTransparent(target: Object, x: number, y: number): boolean;
	/**
	 * Sets active group to a speicified one
	 * @param {fabric.Group} group Group to set as a current one
	 * @param {Event} [e] Event (passed along when firing)
	 */
	setActiveGroup(group: Group, e?: Event): Canvas;
	/**
	 * Sets given object as the only active object on canvas
	 * @param {fabric.Object} object Object to set as an active one
	 * @param {Event} [e] Event (passed along when firing "object:selected")
	 */
	setActiveObject(object: Object, e?: Event): Canvas;
	/**
	 * Set the cursor type of the canvas element
	 * @param {String} value Cursor type of the canvas element.
	 * @see http://www.w3.org/TR/css3-ui/#cursor
	 */
	setCursor(value: string): void;

	/**
	 * Removes all event listeners
	 */
	removeListeners(): void;

	static EMPTY_JSON: string;
	/**
	 * Provides a way to check support of some of the canvas methods
	 * (either those of HTMLCanvasElement itself, or rendering context)
	 * @param {String} methodName Method to check support for; Could be one of "getImageData", "toDataURL", "toDataURLWithQuality" or "setLineDash"
	 */
	static supports(methodName: string): boolean;
	/**
	 * Returns JSON representation of canvas
	 * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
	 */
	static toJSON(propertiesToInclude?: any[]): string;
}

///////////////////////////////////////////////////////////////////////////////
// Shape Interfaces
//////////////////////////////////////////////////////////////////////////////

interface ICircleOptions extends IObjectOptions {
	/**
	 * Radius of this circle
	 */
	radius?: number;
	/**
	 * Start angle of the circle, moving clockwise
	 */
	startAngle?: number;

	/**
	 * End angle of the circle
	 */
	endAngle?: number;
}
export interface Circle extends Object, ICircleOptions {}
export class Circle {
	constructor(options?: ICircleOptions);

	/**
	 * Returns complexity of an instance
	 * @return {Number} complexity of this instance
	 */
	complexity(): number;
	/**
	 * Returns horizontal radius of an object (according to how an object is scaled)
	 * @return {Number}
	 */
	getRadiusX(): number;
	/**
	 * Returns vertical radius of an object (according to how an object is scaled)
	 * @return {Number}
	 */
	getRadiusY(): number;
	/**
	 * Sets radius of an object (and updates width accordingly)
	 * @return {Number}
	 */
	setRadius(value: number): number;

	/**
	 * Returns object representation of an instance
	 * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
	 * @return {Object} object representation of an instance
	 */
	toObject(propertiesToInclude?: any[]): any;
	/**
	 * Returns svg representation of an instance
	 * @param {Function} [reviver] Method for further parsing of svg representation.
	 * @return {String} svg representation of an instance
	 */
	toSVG(reviver?: Function): string;

	/**
	 * List of attribute names to account for when parsing SVG element (used by {@link fabric.Circle.fromElement})
	 */
	static ATTRIBUTE_NAMES: string[];
	/**
	 * Returns Circle instance from an SVG element
	 * @param {SVGElement} element Element to parse
	 * @param {Object} [options] Options object
	 */
	static fromElement(element: SVGElement, options: ICircleOptions): Circle;
	/**
	 * Returns Circle instance from an object representation
	 * @param {Object} object Object to create an instance from
	 */
	static fromObject(object: any): Circle;
}

interface IEllipseOptions extends IObjectOptions {
	/**
	 * Horizontal radius
	 */
	rx?: number;
	/**
	 * Vertical radius
	 */
	ry?: number;
}
export interface Ellipse extends Object, IEllipseOptions {}
export class Ellipse {
	constructor(options?: IEllipseOptions);

	/**
	 * Returns horizontal radius of an object (according to how an object is scaled)
	 * @return {Number}
	 */
	getRx(): number;

	/**
	 * Returns Vertical radius of an object (according to how an object is scaled)
	 * @return {Number}
	 */
	getRy(): number;
	/**
	 * Returns object representation of an instance
	 * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
	 * @return {Object} object representation of an instance
	 */
	toObject(propertiesToInclude?: any[]): any;
	/**
	 * Returns svg representation of an instance
	 * @param {Function} [reviver] Method for further parsing of svg representation.
	 * @return {String} svg representation of an instance
	 */
	toSVG(reviver?: Function): string;
	/**
	 * Returns complexity of an instance
	 * @return {Number} complexity
	 */
	complexity(): number;

	/**
	 * List of attribute names to account for when parsing SVG element (used by {@link fabric.Ellipse.fromElement})
	 */
	static ATTRIBUTE_NAMES: string[];

	/**
	 * Returns Ellipse instance from an SVG element
	 * @param {SVGElement} element Element to parse
	 * @param {Object} [options] Options object
	 */
	static fromElement(element: SVGElement, options?: IEllipseOptions): Ellipse;

	/**
	 * Returns Ellipse instance from an object representation
	 * @param {Object} object Object to create an instance from
	 */
	static fromObject(object: any): Ellipse;
}

export interface Group extends Object, ICollection<Group> {}
export class Group {
	/**
	 * Constructor
	 * @param {Object} objects Group objects
	 * @param {Object} [options] Options object
	 */
	constructor(items?: any[], options?: IObjectOptions);

	activateAllObjects(): Group;
	/**
	 * Adds an object to a group; Then recalculates group's dimension, position.
	 * @param {Object} object
	 * @return {fabric.Group} thisArg
	 * @chainable
	 */
	addWithUpdate(object: Object): Group;
	containsPoint(point: Point): boolean;
	/**
	 * Destroys a group (restoring state of its objects)
	 * @return {fabric.Group} thisArg
	 * @chainable
	 */
	destroy(): Group;
	/**
	 * Returns requested property
	 * @param {String} prop Property to get
	 * @return {Any}
	 */
	get(prop: string): any;
	/**
	 * Checks whether this group was moved (since `saveCoords` was called last)
	 * @return {Boolean} true if an object was moved (since fabric.Group#saveCoords was called)
	 */
	hasMoved(): boolean;
	/**
	 * Removes an object from a group; Then recalculates group's dimension, position.
	 * @param {Object} object
	 * @return {fabric.Group} thisArg
	 * @chainable
	 */
	removeWithUpdate(object: Object): Group;
	/**
	 * Renders instance on a given context
	 * @param {CanvasRenderingContext2D} ctx context to render instance on
	 */
	render(ctx: CanvasRenderingContext2D): void;
	/**
	 * Removes objects from a collection, then renders canvas (if `renderOnAddRemove` is not `false`)
	 * @param {...fabric.Object} object Zero or more fabric instances
	 * @return {Self} thisArg
	 * @chainable
	 */
	remove(...object: Object[]): Group;
	/**
	 * Saves coordinates of this instance (to be used together with `hasMoved`)
	 * @saveCoords
	 * @return {fabric.Group} thisArg
	 * @chainable
	 */
	saveCoords(): Group;
	/**
	 * Sets coordinates of all group objects
	 * @return {fabric.Group} thisArg
	 * @chainable
	 */
	setObjectsCoords(): Group;
	/**
	 * Returns object representation of an instance
	 * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
	 * @return {Object} object representation of an instance
	 */
	toObject(propertiesToInclude?: any[]): any;
	/**
	 * Returns string represenation of a group
	 * @return {String}
	 */
	toString(): string;
	/**
	 * Returns svg representation of an instance
	 * @param {Function} [reviver] Method for further parsing of svg representation.
	 * @return {String} svg representation of an instance
	 */
	toSVG(reviver?: Function): string;

	/**
	 * Returns {@link fabric.Group} instance from an object representation
	 * @param {Object} object Object to create a group from
	 * @param {Function} [callback] Callback to invoke when an group instance is created
	 */
	static fromObject(object: any, callback: (group: Group) => any): void;
}

interface IImageOptions extends IObjectOptions {
	/**
	 * crossOrigin value (one of "", "anonymous", "allow-credentials")
	 */
	crossOrigin: string;

	/**
	 * AlignX value, part of preserveAspectRatio (one of "none", "mid", "min", "max")
	 * This parameter defines how the picture is aligned to its viewport when image element width differs from image width.
	 */
	alignX: string;

	/**
	 * AlignY value, part of preserveAspectRatio (one of "none", "mid", "min", "max")
	 * This parameter defines how the picture is aligned to its viewport when image element height differs from image height.
	 */
	alignY: string;

	/**
	 * meetOrSlice value, part of preserveAspectRatio  (one of "meet", "slice").
	 * if meet the image is always fully visibile, if slice the viewport is always filled with image.
	 * @see http://www.w3.org/TR/SVG/coords.html#PreserveAspectRatioAttribute
	 */
	meetOrSlice: string;

	/**
	 * Image filter array
	 */
	filters: IBaseFilter[];
}
interface Image extends Object, IImageOptions {}
export class Image {
	/**
	 * Constructor
	 * @param {HTMLImageElement | String} element Image element
	 * @param {Object} [options] Options object
	 */
	constructor(element: HTMLImageElement, objObjects: IObjectOptions);

	initialize(element?: string|HTMLImageElement, options?: IImageOptions): void;
	/**
	 * Applies filters assigned to this image (from "filters" array)
	 * @param {Function} callback Callback is invoked when all filters have been applied and new image is generated
	 */
	applyFilters(callback: Function): void;
	/**
	 * Returns a clone of an instance
	 * @param {Function} callback Callback is invoked with a clone as a first argument
	 * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
	 */
	clone(callback?: Function, propertiesToInclude?: any[]): Object;
	/**
	 * Returns complexity of an instance
	 * @return {Number} complexity of this instance
	 */
	complexity(): number;
	/**
	 * Returns image element which this instance if based on
	 * @return {HTMLImageElement} Image element
	 */
	getElement(): HTMLImageElement;
	/**
	 * Returns original size of an image
	 * @return {Object} Object with "width" and "height" properties
	 */
	getOriginalSize(): { width: number; height: number; };
	/**
	 * Returns source of an image
	 * @return {String} Source of an image
	 */
	getSrc(): string;
	render(ctx: CanvasRenderingContext2D, noTransform: boolean): void;

	/**
	 * Sets image element for this instance to a specified one.
	 * If filters defined they are applied to new image.
	 * You might need to call `canvas.renderAll` and `object.setCoords` after replacing, to render new image and update controls area.
	 * @param {HTMLImageElement} element
	 * @param {Function} [callback] Callback is invoked when all filters have been applied and new image is generated
	 * @param {Object} [options] Options object
	 */
	setElement(element: HTMLImageElement, callback: Function, options: IImageOptions): Image;
	/**
	 * Sets crossOrigin value (on an instance and corresponding image element)
	 */
	setCrossOrigin(value: string): Image;
	/**
	 * Returns object representation of an instance
	 * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
	 * @return {Object} Object representation of an instance
	 */
	toObject(propertiesToInclude?: any[]): any;
	/**
	 * Returns string representation of an instance
	 * @return {String} String representation of an instance
	 */
	toString(): string;
	/**
	 * Returns SVG representation of an instance
	 * @param {Function} [reviver] Method for further parsing of svg representation.
	 * @return {String} svg representation of an instance
	 */
	toSVG(reviver?: Function): string;
	/**
	 * Sets source of an image
	 * @param {String} src Source string (URL)
	 * @param {Function} [callback] Callback is invoked when image has been loaded (and all filters have been applied)
	 * @param {Object} [options] Options object
	 */
	setSrc(src: string, callback?: Function, options?: IImageOptions): Image;

	/**
	 * Creates an instance of fabric.Image from an URL string
	 * @param {String} url URL to create an image from
	 * @param {Function} [callback] Callback to invoke when image is created (newly created image is passed as a first argument)
	 * @param {Object} [imgOptions] Options object
	 */
	static fromURL(url: string, callback?: (image: Image) => any, objObjects?: IObjectOptions): Image;
	/**
	 * Creates an instance of fabric.Image from its object representation
	 * @static
	 * @param {Object} object Object to create an instance from
	 * @param {Function} [callback] Callback to invoke when an image instance is created
	 */
	static fromObject(object: any, callback: (image: Image) => {}): void;
	/**
	 * Returns Image instance from an SVG element
	 * @param {SVGElement} element Element to parse
	 * @param {Function} callback Callback to execute when fabric.Image object is created
	 * @param {Object} [options] Options object
	 */
	static fromElement(element: SVGElement, callback: Function, options?: IImageOptions): void;
	/**
	 * Default CSS class name for canvas
	 */
	static CSS_CANVAS: string;

	static filters: IAllFilters;
}

interface ILineOptions extends IObjectOptions {
	/**
	 * x value or first line edge
	 */
	x1: number;
	/**
	 * x value or second line edge
	 */
	x2: number;
	/**
	 * y value or first line edge
	 */
	y1: number;
	/**
	 * y value or second line edge
	 */
	y2: number;
}
export interface Line extends Object, ILineOptions {}
export class Line {
	/**
	 * Constructor
	 * @param {Array} [points] Array of points
	 * @param {Object} [options] Options object
	 */
	constructor(points?: number[], objObjects?: IObjectOptions);
	/**
	 * Returns complexity of an instance
	 * @return {Number} complexity
	 */
	complexity(): number;
	initialize(points?: number[], options?: ILineOptions): Line;
	/**
	 * Returns object representation of an instance
	 * @methd toObject
	 * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
	 * @return {Object} object representation of an instance
	 */
	toObject(propertiesToInclude: any[]): any;
	/**
	 * Returns SVG representation of an instance
	 * @param {Function} [reviver] Method for further parsing of svg representation.
	 * @return {String} svg representation of an instance
	 */
	toSVG(reviver?: Function): string;

	static ATTRIBUTE_NAMES: string[];
	/**
	 * Returns fabric.Line instance from an SVG element
	 * @param {SVGElement} element Element to parse
	 * @param {Object} [options] Options object
	 */
	static fromElement(element: SVGElement, options?: ILineOptions): Line;
	/**
	 * Returns fabric.Line instance from an object representation
	 * @param {Object} object Object to create an instance from
	 */
	static fromObject(object: any): Line;
}

interface IObjectOptions {
	/**
	 * Type of an object (rect, circle, path, etc.).
	 * Note that this property is meant to be read-only and not meant to be modified.
	 * If you modify, certain parts of Fabric (such as JSON loading) won't work correctly.
	 */
	type?: string;

	/**
	 * Horizontal origin of transformation of an object (one of "left", "right", "center")
	 */
	originX?: string;

	/**
	 * Vertical origin of transformation of an object (one of "top", "bottom", "center")
	 */
	originY?: string;

	/**
	 * Top position of an object. Note that by default it's relative to object center. You can change this by setting originY={top/center/bottom}
	 */
	top?: number;

	/**
	 * Left position of an object. Note that by default it's relative to object center. You can change this by setting originX={left/center/right}
	 */
	left?: number;

	/**
	 * Object width
	 */
	width?: number;

	/**
	 * Object height
	 */
	height?: number;

	/**
	 * Object scale factor (horizontal)
	 */
	scaleX?: number;

	/**
	 * Object scale factor (vertical)
	 */
	scaleY?: number;

	/**
	 * When true, an object is rendered as flipped horizontally
	 */
	flipX?: boolean;

	/**
	 * When true, an object is rendered as flipped vertically
	 */
	flipY?: boolean;

	/**
	 * Opacity of an object
	 */
	opacity?: number;

	/**
	 * Angle of rotation of an object (in degrees)
	 */
	angle?: number;

	/**
	 * Size of object's controlling corners (in pixels)
	 */
	cornerSize?: number;

	/**
	 * When true, object's controlling corners are rendered as transparent inside (i.e. stroke instead of fill)
	 */
	transparentCorners?: boolean;

	/**
	 * Default cursor value used when hovering over this object on canvas
	 */
	hoverCursor?: string;

	/**
	 * Padding between object and its controlling borders (in pixels)
	 */
	padding?: number;

	/**
	 * Color of controlling borders of an object (when it's active)
	 */
	borderColor?: string;

	/**
	 * Color of controlling corners of an object (when it's active)
	 */
	cornerColor?: string;

	/**
	 * When true, this object will use center point as the origin of transformation
	 * when being scaled via the controls.
	 * <b>Backwards incompatibility note:</b> This property replaces "centerTransform" (Boolean).
	 */
	centeredScaling?: boolean;

	/**
	 * When true, this object will use center point as the origin of transformation
	 * when being rotated via the controls.
	 * <b>Backwards incompatibility note:</b> This property replaces "centerTransform" (Boolean).
	 */
	centeredRotation?: boolean;

	/**
	 * Color of object's fill
	 */
	fill?: string;

	/**
	 * Fill rule used to fill an object
	 * accepted values are nonzero, evenodd
	 * Backwards incompatibility note: This property was used for setting globalCompositeOperation until v1.4.12, use `globalCompositeOperation` instead
	 */
	fillRule?: string;

	/**
	 * Composite rule used for canvas globalCompositeOperation
	 */
	globalCompositeOperation?: string;

	/**
	 * Background color of an object. Only works with text objects at the moment.
	 */
	backgroundColor?: string;

	/**
	 * When defined, an object is rendered via stroke and this property specifies its color
	 */
	stroke?: string;

	/**
	 * Width of a stroke used to render this object
	 */
	strokeWidth?: number;

	/**
	 * Array specifying dash pattern of an object's stroke (stroke must be defined)
	 */
	strokeDashArray?: any[];

	/**
	 * Line endings style of an object's stroke (one of "butt", "round", "square")
	 */
	strokeLineCap?: string;

	/**
	 * Corner style of an object's stroke (one of "bevil", "round", "miter")
	 */
	strokeLineJoin?: string;

	/**
	 * Maximum miter length (used for strokeLineJoin = "miter") of an object's stroke
	 */
	strokeMiterLimit?: number;

	/**
	 * Shadow object representing shadow of this shape
	 */
	shadow?: IShadow|string;

	/**
	 * Opacity of object's controlling borders when object is active and moving
	 */
	borderOpacityWhenMoving?: number;

	/**
	 * Scale factor of object's controlling borders
	 */
	borderScaleFactor?: number;

	/**
	 * Transform matrix (similar to SVG's transform matrix)
	 */
	transformMatrix?: any[];

	/**
	 * Minimum allowed scale value of an object
	 */
	minScaleLimit?: number;

	/**
	 * When set to `false`, an object can not be selected for modification (using either point-click-based or group-based selection).
	 * But events still fire on it.
	 */
	selectable?: boolean;

	/**
	 * When set to `false`, an object can not be a target of events. All events propagate through it. Introduced in v1.3.4
	 */
	evented?: boolean;

	/**
	 * When set to `false`, an object is not rendered on canvas
	 */
	visible?: boolean;

	/**
	 * When set to `false`, object's controls are not displayed and can not be used to manipulate object
	 */
	hasControls?: boolean;

	/**
	 * When set to `false`, object's controlling borders are not rendered
	 */
	hasBorders?: boolean;

	/**
	 * When set to `false`, object's controlling rotating point will not be visible or selectable
	 */
	hasRotatingPoint?: boolean;

	/**
	 * Offset for object's controlling rotating point (when enabled via `hasRotatingPoint`)
	 */
	rotatingPointOffset?: number;

	/**
	 * When set to `true`, objects are "found" on canvas on per-pixel basis rather than according to bounding box
	 */
	perPixelTargetFind?: boolean;

	/**
	 * When `false`, default object's values are not included in its serialization
	 */
	includeDefaultValues?: boolean;

	/**
	 * Function that determines clipping of an object (context is passed as a first argument)
	 * Note that context origin is at the object's center point (not left/top corner)
	 * @type Function
	 */
	clipTo?: Function;

	/**
	 * When `true`, object horizontal movement is locked
	 */
	lockMovementX?: boolean;

	/**
	 * When `true`, object vertical movement is locked
	 */
	lockMovementY?: boolean;

	/**
	 * When `true`, object rotation is locked
	 */
	lockRotation?: boolean;

	/**
	 * When `true`, object horizontal scaling is locked
	 */
	lockScalingX?: boolean;

	/**
	 * When `true`, object vertical scaling is locked
	 */
	lockScalingY?: boolean;

	/**
	 * When `true`, object non-uniform scaling is locked
	 */
	lockUniScaling?: boolean;

	/**
	 * When `true`, object cannot be flipped by scaling into negative values
	 */
	lockScalingFlip?: boolean;

	/**
	 * Not used by fabric, just for convenience
	 */
	name?: string;

	/**
	 * Not used by fabric, just for convenience
	 */
	data?: any;
}
export interface Object extends IObservable<Object>, IObjectOptions, IObjectAnimation<Object> {}
export class Object {
	getCurrentWidth(): number;
	getCurrentHeight(): number;

	getAngle(): number;
	setAngle(value: number): Object;

	getBorderColor(): string;
	setBorderColor(value: string): Object;

	getBorderScaleFactor(): number;

	getCornersize(): number;
	setCornersize(value: number): Object;

	getFill(): string;
	setFill(value: string): Object;

	getFillRule(): string;
	setFillRule(value: string): Object;

	getFlipX(): boolean;
	setFlipX(value: boolean): Object;

	getFlipY(): boolean;
	setFlipY(value: boolean): Object;

	getHeight(): number;
	setHeight(value: number): Object;

	getLeft(): number;
	setLeft(value: number): Object;

	getOpacity(): number;
	setOpacity(value: number): Object;

	overlayFill: string;
	getOverlayFill(): string;
	setOverlayFill(value: string): Object;

	getScaleX(): number;
	setScaleX(value: number): Object;

	getScaleY(): number;
	setScaleY(value: number): Object;

	setShadow(options: any): Object;
	getShadow(): Object;

	stateProperties: any[];
	getTop(): number;
	setTop(value: number): Object;

	getWidth(): number;
	setWidth(value: number): Object;

	/* * Sets object's properties from options
		* @param {Object} [options] Options object
		*/
	setOptions(options: any): void;

	/**
	 * Transforms context when rendering an object
	 * @param {CanvasRenderingContext2D} ctx Context
	 * @param {Boolean} fromLeft When true, context is transformed to object's top/left corner. This is used when rendering text on Node
	 */
	transform(ctx: CanvasRenderingContext2D, fromLeft: boolean): void;

	/**
	 * Returns an object representation of an instance
	 * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
	 */
	toObject(propertiesToInclude?: any[]): any;

	/**
	 * Returns (dataless) object representation of an instance
	 * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
	 */
	toDatalessObject(propertiesToInclude?: any[]): any;

	/**
	 * Returns a string representation of an instance
	 */
	toString(): string;

	/**
	 * Basic getter
	 * @param {String} property Property name
	 */
	get(property: string): any;

	/**
	 * Sets property to a given value.
	 * When changing position/dimension -related properties (left, top, scale, angle, etc.) `set` does not update position of object's borders/controls.
	 * If you need to update those, call `setCoords()`.
	 * @param {String} key Property name
	 * @param {Object|Function} value Property value (if function, the value is passed into it and its return value is used as a new one)
	 */
	set(key: string, value: any|Function): Object;
	/**
	 * Sets property to a given value.
	 * When changing position/dimension -related properties (left, top, scale, angle, etc.) `set` does not update position of object's borders/controls.
	 * If you need to update those, call `setCoords()`.
	 * @param Object key Property object, iterate over the object properties
	 */
	set(key: any): Object;

	/**
	 * Toggles specified property from `true` to `false` or from `false` to `true`
	 * @param {String} property Property to toggle
	 */
	toggle(property: string): Object;

	/**
	 * Sets sourcePath of an object
	 * @param {String} value Value to set sourcePath to
	 */
	setSourcePath(value: string): Object;

	/**
	 * Retrieves viewportTransform from Object's canvas if possible
	 */
	getViewportTransform(): boolean;

	/**
	 * Renders an object on a specified context
	 * @param {CanvasRenderingContext2D} ctx Context to render on
	 * @param {Boolean} [noTransform] When true, context is not transformed
	 */
	render(ctx: CanvasRenderingContext2D, noTransform?: boolean): void;

	/**
	 * Clones an instance
	 * @param {Function} callback Callback is invoked with a clone as a first argument
	 * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
	 */
	clone(callback: Function, propertiesToInclude?: any[]): Object;

	/**
	 * Creates an instance of fabric.Image out of an object
	 * @param {Function} callback callback, invoked with an instance as a first argument
	 */
	cloneAsImage(callback: (image: Image) => any): Object;

	/**
	 * Converts an object into a data-url-like string
	 * @param options Options object
	 */
	toDataURL(options: IDataURLOptions): string;

	/**
	 * Returns true if specified type is identical to the type of an instance
	 * @param {String} type Type to check against
	 */
	isType(type: string): boolean;

	/**
	 * Returns complexity of an instance
	 */
	complexity(): number;

	/**
	 * Returns a JSON representation of an instance
	 * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
	 */
	toJSON(propertiesToInclude?: any[]): any;

	/**
	 * Sets gradient (fill or stroke) of an object
	 * <b>Backwards incompatibility note:</b> This method was named "setGradientFill" until v1.1.0
	 * @param {String} property Property name 'stroke' or 'fill'
	 * @param {Object} [options] Options object
	 */
	setGradient(property: string, options: IGradientOptions): Object;
	/**
	 * Sets pattern fill of an object
	 * @param {Object} options Options object
	 */
	setPatternFill(options: IFillOptions): Object;

	/**
	 * Sets shadow of an object
	 * @param {String} [options] Options object or string (e.g. "2px 2px 10px rgba(0,0,0,0.2)")
	 */
	setShadow(options?: string): Object;
	/**
	 * Sets shadow of an object
	 * @param [options] Options object
	 */
	setShadow(options: IShadow): Object;

	/**
	 * Sets "color" of an instance (alias of `set('fill', …)`)
	 * @param {String} color Color value
	 */
	setColor(color: string): Object;

	/**
	 * Sets "angle" of an instance
	 * @param {Number} angle Angle value
	 */
	setAngle(angle: number): Object;

	/**
	 * Sets "angle" of an instance
	 * @param {Number} angle Angle value
	 */
	rotate(angle: number): Object;

	/**
	 * Centers object horizontally on canvas to which it was added last.
	 * You might need to call `setCoords` on an object after centering, to update controls area.
	 */
	centerH(): void;

	/**
	 * Centers object vertically on canvas to which it was added last.
	 * You might need to call `setCoords` on an object after centering, to update controls area.
	 */
	centerV(): void;

	/**
	 * Centers object vertically and horizontally on canvas to which is was added last
	 * You might need to call `setCoords` on an object after centering, to update controls area.
	 */
	center(): void;

	/**
	 * Removes object from canvas to which it was added last
	 */
	remove(): Object;

	/**
	 * Returns coordinates of a pointer relative to an object
	 * @param {Event} e Event to operate upon
	 * @param {Object} [pointer] Pointer to operate upon (instead of event)
	 */
	getLocalPointer(e: Event, pointer: any): any;

	/**
	 * Sets object's properties from options
	 * @param {Object} [options] Options object
	 */
	setOptions(options: any): void;
	/**
	 * Sets sourcePath of an object
	 * @param {String} value Value to set sourcePath to
	 */
	setSourcePath(value: string): Object;
	// functions from object svg export mixin
	// -----------------------------------------------------------------------------------------------------------------------------------
	/**
	 * Returns styles-string for svg-export
	 */
	getSvgStyles(): string;
	/**
	 * Returns transform-string for svg-export
	 */
	getSvgTransform(): string;
	/**
	 * Returns transform-string for svg-export from the transform matrix of single elements
	 */
	getSvgTransformMatrix(): string;

	// functions from stateful mixin
	// -----------------------------------------------------------------------------------------------------------------------------------
	/**
	 * Returns true if object state (one of its state properties) was changed
	 */
	hasStateChanged(): boolean;
	/**
	 * Saves state of an object
	 * @param {Object} [options] Object with additional `stateProperties` array to include when saving state
	 * @return {fabric.Object} thisArg
	 */
	saveState(options?: { stateProperties: any[] }): Object;
	/**
	 * Setups state of an object
	 */
	setupState(): Object;
	// functions from object straightening mixin
	// -----------------------------------------------------------------------------------------------------------------------------------
	/**
	 * Straightens an object (rotating it from current angle to one of 0, 90, 180, 270, etc. depending on which is closer)
	 */
	straighten(): Object;
	/**
	 * Same as straighten but with animation
	 * @param {Object} callbacks Object with callback functions
	 * @param {Function} [callbacks.onComplete] Invoked on completion
	 * @param {Function} [callbacks.onChange] Invoked on every step of animation
	 */
	fxStraighten(callbacks: { onComplete?: Function; onChange: Function }): Object;

	// functions from object stacking mixin
	// -----------------------------------------------------------------------------------------------------------------------------------
	/**
	 * Moves an object up in stack of drawn objects
	 * @param {Boolean} [intersecting] If `true`, send object in front of next upper intersecting object
	 */
	bringForward(intersecting?: boolean): Object;
	/**
	 * Moves an object to the top of the stack of drawn objects
	 */
	bringToFront(): Object;
	/**
	 * Moves an object down in stack of drawn objects
	 * @param {Boolean} [intersecting] If `true`, send object behind next lower intersecting object
	 */
	sendBackwards(intersecting?: boolean): Object;
	/**
	 * Moves an object to the bottom of the stack of drawn objects
	 */
	sendToBack(): Object;
	/**
	 * Moves an object to specified level in stack of drawn objects
	 * @param {Number} index New position of object
	 */
	moveTo(index: number): Object;

	// functions from object origin mixin
	// -----------------------------------------------------------------------------------------------------------------------------------
	/**
	 * Translates the coordinates from origin to center coordinates (based on the object's dimensions)
	 * @param {fabric.Point} point The point which corresponds to the originX and originY params
	 * @param {String} originX Horizontal origin: 'left', 'center' or 'right'
	 * @param {String} originY Vertical origin: 'top', 'center' or 'bottom'
	 */
	translateToCenterPoint(point: Point, originX: string, originY: string): Point;

	/**
	 * Translates the coordinates from center to origin coordinates (based on the object's dimensions)
	 * @param {fabric.Point} center The point which corresponds to center of the object
	 * @param {String} originX Horizontal origin: 'left', 'center' or 'right'
	 * @param {String} originY Vertical origin: 'top', 'center' or 'bottom'
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
	 */
	getPointByOrigin(): Point;

	/**
	 * Returns the point in local coordinates
	 * @param {fabric.Point} point The point relative to the global coordinate system
	 * @param {String} originX Horizontal origin: 'left', 'center' or 'right'
	 * @param {String} originY Vertical origin: 'top', 'center' or 'bottom'
	 */
	toLocalPoint(point: Point, originX: string, originY: string): Point;

	/**
	 * Sets the position of the object taking into consideration the object's origin
	 * @param {fabric.Point} pos The new position of the object
	 * @param {String} originX Horizontal origin: 'left', 'center' or 'right'
	 * @param {String} originY Vertical origin: 'top', 'center' or 'bottom'
	 * @return {void}
	 */
	setPositionByOrigin(pos: Point, originX: string, originY: string): void;

	/**
	 * @param {String} to One of 'left', 'center', 'right'
	 */
	adjustPosition(to: string): void;

	// functions from interactivity mixin
	// -----------------------------------------------------------------------------------------------------------------------------------
	/**-
	 * Draws borders of an object's bounding box.
	 * Requires public properties: width, height
	 * Requires public options: padding, borderColor
	 * @param {CanvasRenderingContext2D} ctx Context to draw on
	 */
	drawBorders(context: CanvasRenderingContext2D): Object;

	/**
	 * Draws corners of an object's bounding box.
	 * Requires public properties: width, height
	 * Requires public options: cornerSize, padding
	 * @param {CanvasRenderingContext2D} ctx Context to draw on
	 */
	drawCorners(context: CanvasRenderingContext2D): Object;

	/**
	 * Returns true if the specified control is visible, false otherwise.
	 * @param {String} controlName The name of the control. Possible values are 'tl', 'tr', 'br', 'bl', 'ml', 'mt', 'mr', 'mb', 'mtr'.
	 */
	isControlVisible(controlName: string): boolean;
	/**
	 * Sets the visibility of the specified control.
	 * @param {String} controlName The name of the control. Possible values are 'tl', 'tr', 'br', 'bl', 'ml', 'mt', 'mr', 'mb', 'mtr'.
	 * @param {Boolean} visible true to set the specified control visible, false otherwise
	 */
	setControlVisible(controlName: string, visible: boolean): Object;

	/**
	 * Sets the visibility state of object controls.
	 * @param {Object} [options] Options object
	 */
	setControlsVisibility(options?: {
		bl?: boolean;
		br?: boolean;
		mb?: boolean;
		ml?: boolean;
		mr?: boolean;
		mt?: boolean;
		tl?: boolean;
		tr?: boolean;
		mtr?: boolean; }): Object;

	// functions from geometry mixin
	// -------------------------------------------------------------------------------------------------------------------------------
	/**
	 * Sets corner position coordinates based on current angle, width and height
	 * See https://github.com/kangax/fabric.js/wiki/When-to-call-setCoords
	 */
	setCoords(): Object;
	/**
	 * Returns coordinates of object's bounding rectangle (left, top, width, height)
	 * @return {Object} Object with left, top, width, height properties
	 */
	getBoundingRect(): { left: number; top: number; width: number; height: number };
	/**
	 * Checks if object is fully contained within area of another object
	 * @param {Object} other Object to test
	 */
	isContainedWithinObject(other: Object): boolean;
	/**
	 * Checks if object is fully contained within area formed by 2 points
	 * @param {Object} pointTL top-left point of area
	 * @param {Object} pointBR bottom-right point of area
	 */
	isContainedWithinRect(pointTL: any, pointBR: any): boolean;
	/**
	 * Checks if point is inside the object
	 * @param {fabric.Point} point Point to check against
	 */
	containsPoint(point: Point): boolean;
	/**
	 * Scales an object (equally by x and y)
	 * @param {Number} value Scale factor
	 * @return {fabric.Object} thisArg
	 */
	scale(value: number): Object;
	/**
	 * Scales an object to a given height, with respect to bounding box (scaling by x/y equally)
	 * @param {Number} value New height value
	 */
	scaleToHeight(value: number): Object;
	/**
	 * Scales an object to a given width, with respect to bounding box (scaling by x/y equally)
	 * @param {Number} value New width value
	 */
	scaleToWidth(value: number): Object;
	/**
	 * Checks if object intersects with another object
	 * @param {Object} other Object to test
	 */
	intersectsWithObject(other: Object): boolean;
	/**
	 * Checks if object intersects with an area formed by 2 points
	 * @param {Object} pointTL top-left point of area
	 * @param {Object} pointBR bottom-right point of area
	 */
	intersectsWithRect(pointTL: any, pointBR: any): boolean;
}

interface IPathOptions extends IObjectOptions {
	/**
	 * Array of path points
	 */
	path?: any[];

	/**
	 * Minimum X from points values, necessary to offset points
	 */
	minX?: number;

	/**
	 * Minimum Y from points values, necessary to offset points
	 */
	minY?: number;
}
export interface IPath extends Object, IPathOptions {}
export class IPath {
	/**
	 * Constructor
	 * @param {Array|String} path Path data (sequence of coordinates and corresponding "command" tokens)
	 * @param {Object} [options] Options object
	 */
	constructor(path?: string|any[], options?: IPathOptions);

	initialize(path?: any[], options?: IPathOptions): IPath;

	/**
	 * Returns number representation of an instance complexity
	 * @return {Number} complexity of this instance
	 */
	complexity(): number;

	/**
	 * Renders path on a specified context
	 * @param {CanvasRenderingContext2D} ctx context to render path on
	 * @param {Boolean} [noTransform] When true, context is not transformed
	 */
	render(ctx: CanvasRenderingContext2D, noTransform: boolean): void;
	/**
	 * Returns dataless object representation of an instance
	 * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
	 * @return {Object} object representation of an instance
	 */
	toDatalessObject(propertiesToInclude?: any[]): any;
	/**
	 * Returns object representation of an instance
	 * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
	 * @return {Object} object representation of an instance
	 */
	toObject(propertiesToInclude?: any[]): any;
	/**
	 * Returns string representation of an instance
	 * @return {String} string representation of an instance
	 */
	toString(): string;
	/**
	 * Returns svg representation of an instance
	 * @param {Function} [reviver] Method for further parsing of svg representation.
	 * @return {String} svg representation of an instance
	 */
	toSVG(reviver?: Function): string;

	/**
	 * Creates an instance of fabric.Path from an SVG <path> element
	 * @param {SVGElement} element to parse
	 * @param {Function} callback Callback to invoke when an fabric.Path instance is created
	 * @param {Object} [options] Options object
	 */
	static fromElement(element: SVGElement, callback: (path: IPath) => any, options?: IPathOptions): void;
	/**
	 * Creates an instance of fabric.Path from an object
	 * @param {Object} object
	 * @param {Function} callback Callback to invoke when an fabric.Path instance is created
	 */
	static fromObject(object: any, callback: (path: IPath) => any): void;
}

export class PathGroup extends Object {
	/**
	 * Constructor
	 * @param {Array} paths
	 * @param {Object} [options] Options object
	 */
	constructor(paths: IPath[], options?: IObjectOptions);

	initialize(paths: IPath[], options?: IObjectOptions): void;
	/**
	 * Returns number representation of object's complexity
	 * @return {Number} complexity
	 */
	complexity(): number;
	/**
	 * Returns true if all paths in this group are of same color
	 * @return {Boolean} true if all paths are of the same color (`fill`)
	 */
	isSameColor(): boolean;
	/**
	 * Renders this group on a specified context
	 * @param {CanvasRenderingContext2D} ctx Context to render this instance on
	 */
	render(ctx: CanvasRenderingContext2D): void;
	/**
	 * Returns dataless object representation of this path group
	 * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
	 * @return {Object} dataless object representation of an instance
	 */
	toDatalessObject(propertiesToInclude?: any[]): any;
	/**
	 * Returns object representation of this path group
	 * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
	 * @return {Object} object representation of an instance
	 */
	toObject(propertiesToInclude?: any[]): any;
	/**
	 * Returns a string representation of this path group
	 * @return {String} string representation of an object
	 */
	toString(): string;
	/**
	 * Returns svg representation of an instance
	 * @param {Function} [reviver] Method for further parsing of svg representation.
	 * @return {String} svg representation of an instance
	 */
	toSVG(reviver?: Function): string;
	/**
	 * Returns all paths in this path group
	 * @return {Array} array of path objects included in this path group
	 */
	getObjects(): IPath[];

	static fromObject(object: any): PathGroup;
	/**
	 * Creates fabric.PathGroup instance from an object representation
	 * @static
	 * @memberOf fabric.PathGroup
	 * @param {Object} object Object to create an instance from
	 * @param {Function} callback Callback to invoke when an fabric.PathGroup instance is created
	 */
	static fromObject(object: any, callback: (group: PathGroup) => any): void;
}

interface IPolygonOptions extends IObjectOptions {
	/**
	 * Points array
	 */
	points?: Point[];

	/**
	 * Minimum X from points values, necessary to offset points
	 */
	minX?: number;

	/**
	 * Minimum Y from points values, necessary to offset points
	 */
	minY?: number;
}
export interface Polygon extends IPolygonOptions {}
export class Polygon extends Object {
	/**
	 * Constructor
	 * @param {Array} points Array of points
	 * @param {Object} [options] Options object
	 */
	constructor(points: Array<{ x: number; y: number }>, options?: IObjectOptions, skipOffset?: boolean);

	/**
	 * Returns complexity of an instance
	 * @return {Number} complexity of this instance
	 */
	complexity(): number;

	/**
	 * Returns object representation of an instance
	 * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
	 * @return {Object} object representation of an instance
	 */
	toObject(propertiesToInclude?: any[]): any;
	/**
	 * Returns svg representation of an instance
	 * @param {Function} [reviver] Method for further parsing of svg representation.
	 * @return {String} svg representation of an instance
	 */
	toSVG(reviver?: Function): string;

	/**
	 * List of attribute names to account for when parsing SVG element (used by `fabric.Polygon.fromElement`)
	 */
	static ATTRIBUTE_NAMES: string[];

	/**
	 * Returns Polygon instance from an SVG element
	 * @param {SVGElement} element Element to parse
	 * @param {Object} [options] Options object
	 */
	static fromElement(element: SVGElement, options?: IPolygonOptions): Polygon;
	/**
	 * Returns fabric.Polygon instance from an object representation
	 * @param {Object} object Object to create an instance from
	 */
	static fromObject(object: any): Polygon;
}

interface IPolylineOptions extends IObjectOptions {
	/**
	 * Points array
	 */
	points?: Point[];

	/**
	 * Minimum X from points values, necessary to offset points
	 */
	minX?: number;

	/**
	 * Minimum Y from points values, necessary to offset points
	 */
	minY?: number;
}
export interface Polyline extends IPolylineOptions {}
export class Polyline extends Object {
	/**
	 * Constructor
	 * @param {Array} points Array of points (where each point is an object with x and y)
	 * @param {Object} [options] Options object
	 * @param {Boolean} [skipOffset] Whether points offsetting should be skipped
	 */
	constructor(points: Array<{ x: number; y: number }>, options?: IPolylineOptions);
	initialize(points: Point[], options?: IPolylineOptions): void;
	/**
	 * Returns complexity of an instance
	 * @return {Number} complexity of this instance
	 */
	complexity(): number;
	/**
	 * Returns object representation of an instance
	 * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
	 * @return {Object} Object representation of an instance
	 */
	toObject(propertiesToInclude?: any[]): any;
	/**
	 * Returns SVG representation of an instance
	 * @param {Function} [reviver] Method for further parsing of svg representation.
	 * @return {String} svg representation of an instance
	 */
	toSVG(reviver?: Function): string;

	/**
	 * List of attribute names to account for when parsing SVG element (used by `fabric.Polygon.fromElement`)
	 */
	static ATTRIBUTE_NAMES: string[];

	/**
	 * Returns Polyline  instance from an SVG element
	 * @param {SVGElement} element Element to parse
	 * @param {Object} [options] Options object
	 */
	static fromElement(element: SVGElement, options?: IPolylineOptions): Polyline;
	/**
	 * Returns fabric.Polyline instance from an object representation
	 * @param {Object} object Object to create an instance from
	 */
	static fromObject(object: any): Polyline;
}

interface IRectOptions extends IObjectOptions {
	x?: number;
	y?: number;
	/**
	 * Horizontal border radius
	 */
	rx?: number;

	/**
	 * Vertical border radius
	 */
	ry?: number;
}

export interface Rect extends IRectOptions {}
export class Rect extends Object {
	/**
	 * Constructor
	 * @param {Object} [options] Options object
	 */
	constructor(options?: IRectOptions);
	initialize(points?: number[], options?: any): Rect;
	/**
	 * Returns complexity of an instance
	 * @return {Number} complexity
	 */
	complexity(): number;
	/**
	 * Returns object representation of an instance
	 * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
	 * @return {Object} object representation of an instance
	 */
	toObject(propertiesToInclude: any[]): any;
	/**
	 * Returns svg representation of an instance
	 * @param {Function} [reviver] Method for further parsing of svg representation.
	 * @return {String} svg representation of an instance
	 */
	toSVG(reviver?: Function): string;

	/**
	 * List of attribute names to account for when parsing SVG element (used by `fabric.Rect.fromElement`)
	 */
	static ATTRIBUTE_NAMES: string[];
	/**
	 * Returns Rect instance from an SVG element
	 * @param {SVGElement} element Element to parse
	 * @param {Object} [options] Options object
	 */
	static fromElement(element: SVGElement, options?: IRectOptions): Rect;
	/**
	 * Returns Rect instance from an object representation
	 * @param {Object} object Object to create an instance from
	 */
	static fromObject(object: any): Rect;
}

interface ITextOptions extends IObjectOptions {
	/**
	 * Font size (in pixels)
	 */
	fontSize?: number;
	/**
	 * Font weight (e.g. bold, normal, 400, 600, 800)
	 */
	fontWeight?: number|string;
	/**
	 * Font family
	 */
	fontFamily?: string;
	/**
	 * Text decoration Possible values?: "", "underline", "overline" or "line-through".
	 */
	textDecoration?: string;
	/**
	 * Text alignment. Possible values?: "left", "center", or "right".
	 */
	textAlign?: string;
	/**
	 * Font style . Possible values?: "", "normal", "italic" or "oblique".
	 */
	fontStyle?: string;
	/**
	 * Line height
	 */
	lineHeight?: number;
	/**
	 * When defined, an object is rendered via stroke and this property specifies its color.
	 * <b>Backwards incompatibility note?:</b> This property was named "strokeStyle" until v1.1.6
	 */
	stroke?: string;
	/**
	 * Shadow object representing shadow of this shape.
	 * <b>Backwards incompatibility note?:</b> This property was named "textShadow" (String) until v1.2.11
	 */
	shadow?: IShadow|string;
	/**
	 * Background color of text lines
	 */
	textBackgroundColor?: string;

	path?: string;
	useNative?: Boolean;
	text?: string;
}
export interface Text extends ITextOptions {}
export class Text extends Object {
	/**
	 * Constructor
	 * @param {String} text Text string
	 * @param {Object} [options] Options object
	 */
	constructor(text: string, options?: ITextOptions);
	/**
	 * Returns complexity of an instance
	 */
	complexity(): number;
	/**
	 * Returns string representation of an instance
	 */
	toString(): string;
	/**
	 * Renders text instance on a specified context
	 * @param {CanvasRenderingContext2D} ctx Context to render on
	 */
	render(ctx: CanvasRenderingContext2D, noTransform: boolean): void;
	/**
	 * Returns object representation of an instance
	 * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
	 */
	toObject(propertiesToInclude?: any[]): Object;
	/**
	 * Returns SVG representation of an instance
	 * @param {Function} [reviver] Method for further parsing of svg representation.
	 */
	toSVG(reviver?: Function): string;
	/**
	 * Retrieves object's fontSize
	 */
	getFontSize(): number;
	/**
	 * Sets object's fontSize
	 * @param {Number} fontSize Font size (in pixels)
	 */
	setFontSize(fontSize: number): Text;
	/**
	 * Retrieves object's fontWeight
	 */
	getFontWeight(): number|string;
	/**
	 * Sets object's fontWeight
	 * @param {(Number|String)} fontWeight Font weight
	 */
	setFontWeight(fontWeight: string|number): Text;
	/**
	 * Retrieves object's fontFamily
	 */
	getFontFamily(): string;
	/**
	 * Sets object's fontFamily
	 * @param {String} fontFamily Font family
	 */
	setFontFamily(fontFamily: string): Text;
	/**
	 * Retrieves object's text
	 */
	getText(): string;
	/**
	 * Sets object's text
	 * @param {String} text Text
	 */
	setText(text: string): Text;
	/**
	 * Retrieves object's textDecoration
	 */
	getTextDecoration(): string;
	/**
	 * Sets object's textDecoration
	 * @param {String} textDecoration Text decoration
	 */
	setTextDecoration(textDecoration: string): Text;
	/**
	 * Retrieves object's fontStyle
	 */
	getFontStyle(): string;
	/**
	 * Sets object's fontStyle
	 * @param {String} fontStyle Font style
	 */
	setFontStyle(fontStyle: string): Text;
	/**
	 * Retrieves object's lineHeight
	 */
	getLineHeight(): number;
	/**
	 * Sets object's lineHeight
	 * @param {Number} lineHeight Line height
	 */
	setLineHeight(lineHeight: number): Text;
	/**
	 * Retrieves object's textAlign
	 */
	getTextAlign(): string;
	/**
	 * Sets object's textAlign
	 * @param {String} textAlign Text alignment
	 */
	setTextAlign(textAlign: string): Text;
	/**
	 * Retrieves object's textBackgroundColor
	 */
	getTextBackgroundColor(): string;
	/**
	 * Sets object's textBackgroundColor
	 * @param {String} textBackgroundColor Text background color
	 */
	setTextBackgroundColor(textBackgroundColor: string): Text;

	/**
	 * List of attribute names to account for when parsing SVG element (used by `fabric.Text.fromElement`)
	 */
	static ATTRIBUTE_NAMES: string[];
	/**
	 * Default SVG font size
	 */
	static DEFAULT_SVG_FONT_SIZE: number;

	/**
	 * Returns fabric.Text instance from an SVG element (<b>not yet implemented</b>)
	 * @param {SVGElement} element Element to parse
	 * @param {Object} [options] Options object
	 */
	static fromElement(element: SVGElement, options?: ITextOptions): Text;
	/**
	 * Returns fabric.Text instance from an object representation
	 * @param {Object} object Object to create an instance from
	 */
	static fromObject(object: any): Text;
}

interface IITextOptions extends IObjectOptions, ITextOptions {
	/**
	 * Index where text selection starts (or where cursor is when there is no selection)
	 */
	selectionStart?: number;

	/**
	 * Index where text selection ends
	 */
	selectionEnd?: number;

	/**
	 * Color of text selection
	 */
	selectionColor?: string;

	/**
	 * Indicates whether text is in editing mode
	 */
	isEditing?: boolean;

	/**
	 * Indicates whether a text can be edited
	 */
	editable?: boolean;

	/**
	 * Border color of text object while it's in editing mode
	 */
	editingBorderColor?: string;

	/**
	 * Width of cursor (in px)
	 */
	cursorWidth?: number;

	/**
	 * Color of default cursor (when not overwritten by character style)
	 */
	cursorColor?: string;

	/**
	 * Delay between cursor blink (in ms)
	 */
	cursorDelay?: number;

	/**
	 * Duration of cursor fadein (in ms)
	 */
	cursorDuration?: number;

	/**
	 * Object containing character styles
	 * (where top-level properties corresponds to line number and 2nd-level properties -- to char number in a line)
	 */
	styles?: any;

	/**
	 * Indicates whether internal text char widths can be cached
	 */
	caching?: boolean;
}
export interface IText extends Text, IITextOptions {}
export class IText extends Object {
	/**
	 * Constructor
	 * @param {String} text Text string
	 * @param {Object} [options] Options object
	 */
	constructor(text: string, options?: IITextOptions);
	/**
	 * Returns true if object has no styling
	 */
	isEmptyStyles(): boolean;
	render(ctx: CanvasRenderingContext2D, noTransform: boolean): void;
	/**
	 * Returns object representation of an instance
	 * @method toObject
	 * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
	 * @return {Object} object representation of an instance
	 */
	toObject(propertiesToInclude?: any[]): Object;

	setText(value: string): Text;
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
	 * Gets style of a current selection/cursor (at the start position)
	 * @param {Number} [startIndex] Start index to get styles at
	 * @param {Number} [endIndex] End index to get styles at
	 * @return {Object} styles Style object at a specified (or current) index
	 */
	getSelectionStyles(startIndex: number, endIndex: number): any;
	/**
	 * Sets style of a current selection
	 * @param {Object} [styles] Styles object
	 * @return {fabric.IText} thisArg
	 * @chainable
	 */
	setSelectionStyles(styles: any): Text;

	/**
	 * Renders cursor or selection (depending on what exists)
	 */
	renderCursorOrSelection(): void;

	/**
	 * Returns 2d representation (lineIndex and charIndex) of cursor (or selection start)
	 * @param {Number} [selectionStart] Optional index. When not given, current selectionStart is used.
	 */
	get2DCursorLocation(selectionStart?: number): void;
	/**
	 * Returns complete style of char at the current cursor
	 * @param {Number} lineIndex Line index
	 * @param {Number} charIndex Char index
	 * @return {Object} Character style
	 */
	getCurrentCharStyle(lineIndex: number, charIndex: number): any;

	/**
	 * Returns fontSize of char at the current cursor
	 * @param {Number} lineIndex Line index
	 * @param {Number} charIndex Char index
	 * @return {Number} Character font size
	 */
	getCurrentCharFontSize(lineIndex: number, charIndex: number): number;

	/**
	 * Returns color (fill) of char at the current cursor
	 * @param {Number} lineIndex Line index
	 * @param {Number} charIndex Char index
	 * @return {String} Character color (fill)
	 */
	getCurrentCharColor(lineIndex: number, charIndex: number): string;
	/**
	 * Renders cursor
	 * @param {Object} boundaries
	 */
	renderCursor(boundaries: any): void;

	/**
	 * Renders text selection
	 * @param {Array} chars Array of characters
	 * @param {Object} boundaries Object with left/top/leftOffset/topOffset
	 */
	renderSelection(chars: string[], boundaries: any): void;

	// functions from itext behavior mixin
	// ------------------------------------------------------------------------------------------------------------------------
	/**
	 * Initializes all the interactive behavior of IText
	 */
	initBehavior(): void;

	/**
	 * Initializes "selected" event handler
	 */
	initSelectedHandler(): void;

	/**
	 * Initializes "added" event handler
	 */
	initAddedHandler(): void;

	initRemovedHandler(): void;

	/**
	 * Initializes delayed cursor
	 */
	initDelayedCursor(restart: boolean): void;

	/**
	 * Aborts cursor animation and clears all timeouts
	 */
	abortCursorAnimation(): void;

	/**
	 * Selects entire text
	 */
	selectAll(): void;

	/**
	 * Returns selected text
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
	 */
	findLineBoundaryLeft(startFrom: number): number;

	/**
	 * Find new selection index representing end of current line according to current selection index
	 * @param {Number} startFrom Current selection index
	 */
	findLineBoundaryRight(startFrom: number): number;

	/**
	 * Returns number of newlines in selected text
	 */
	getNumNewLinesInSelectedText(): number;

	/**
	 * Finds index corresponding to beginning or end of a word
	 * @param {Number} selectionStart Index of a character
	 * @param {Number} direction: 1 or -1
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
	 */
	selectLine(selectionStart: number): void;

	/**
	 * Enters editing state
	 */
	enterEditing(): IText;

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
	 * Inserts a character where cursor is (replacing selection if one exists)
	 * @param {String} _chars Characters to insert
	 */
	insertChars(_chars: string, useCopiedStyle?: boolean): void;
	/**
	 * Inserts new style object
	 * @param {Number} lineIndex Index of a line
	 * @param {Number} charIndex Index of a char
	 * @param {Boolean} isEndOfLine True if it's end of line
	 */
	insertNewlineStyleObject(lineIndex: number, charIndex: number, isEndOfLine: boolean): void;

	/**
	 * Inserts style object for a given line/char index
	 * @param {Number} lineIndex Index of a line
	 * @param {Number} charIndex Index of a char
	 * @param {Object} [style] Style object to insert, if given
	 */
	insertCharStyleObject(lineIndex: number, charIndex: number, isEndOfLine: boolean): void;

	/**
	 * Inserts style object(s)
	 * @param {String} _chars Characters at the location where style is inserted
	 * @param {Boolean} isEndOfLine True if it's end of line
	 * @param {Boolean} [useCopiedStyle] Style to insert
	 */
	insertStyleObjects(_chars: string, isEndOfLine: boolean, useCopiedStyle?: boolean): void;

	/**
	 * Shifts line styles up or down
	 * @param {Number} lineIndex Index of a line
	 * @param {Number} offset Can be -1 or +1
	 */
	shiftLineStyles(lineIndex: number, offset: number): void;

	/**
	 * Removes style object
	 * @param {Boolean} isBeginningOfLine True if cursor is at the beginning of line
	 * @param {Number} [index] Optional index. When not given, current selectionStart is used.
	 */
	removeStyleObject(isBeginningOfLine: boolean, index?: number): void;
	/**
	 * Inserts new line
	 */
	insertNewline(): void;

	/**
	 * Returns fabric.IText instance from an object representation
	 * @param {Object} object Object to create an instance from
	 */
	static fromObject(object: any): IText;
}

interface ITriangleOptions extends IObjectOptions { }
export class Triangle extends Object {
	/**
	 * Constructor
	 * @param {Object} [options] Options object
	 */
	constructor(options?: ITriangleOptions);

	/**
	 * Returns complexity of an instance
	 * @return {Number} complexity of this instance
	 */
	complexity(): number;
	/**
	 * Returns SVG representation of an instance
	 * @param {Function} [reviver] Method for further parsing of svg representation.
	 * @return {String} svg representation of an instance
	 */
	toSVG(reviver?: Function): string;

	/**
	 * Returns Triangle instance from an object representation
	 * @param {Object} object Object to create an instance from
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
		 * @param {Object} [options] Options object
		 */
		new (options?: any): IBaseFilter;
	};
	Blend: {
		/**
		 * Constructor
		 * @param {Object} [options] Options object
		 */
		new (options?: { color?: string; mode?: string; alpha?: number; image?: Image }): IBlendFilter;
		/**
		 * Returns filter instance from an object representation
		 * @param {Object} object Object to create an instance from
		 */
		fromObject(object: any): IBlendFilter
	};
	Brightness: {
		/**
		 * Constructor
		 * @param {Object} [options] Options object
		 * @param {Number} [options.brightness=0] Value to brighten the image up (0..255)
		 */
		new (options?: { brightness: number }): IBrightnessFilter;
		/**
		 * Returns filter instance from an object representation
		 * @param {Object} object Object to create an instance from
		 */
		fromObject(object: any): IBrightnessFilter
	};
	Convolute: {
		/**
		 * Constructor
		 * @param {Object} [options] Options object
		 * @param {Boolean} [options.opaque=false] Opaque value (true/false)
		 * @param {Array} [options.matrix] Filter matrix
		 */
		new (options?: { opaque?: boolean; matrix?: number[] }): IConvoluteFilter;
		/**
		 * Returns filter instance from an object representation
		 * @param {Object} object Object to create an instance from
		 */
		fromObject(object: any): IConvoluteFilter
	};
	GradientTransparency: {
		/**
		 * Constructor
		 * @param {Object} [options] Options object
		 * @param {Number} [options.threshold=100] Threshold value
		 */
		new (options?: { threshold?: number; }): IGradientTransparencyFilter;
		/**
		 * Returns filter instance from an object representation
		 * @param {Object} object Object to create an instance from
		 */
		fromObject(object: any): IGradientTransparencyFilter
	};
	Grayscale: {
		/**
		 * Constructor
		 * @param {Object} [options] Options object
		 */
		new (options?: any): IGrayscaleFilter;
		/**
		 * Returns filter instance from an object representation
		 * @param {Object} object Object to create an instance from
		 */
		fromObject(object: any): IGrayscaleFilter
	};
	Invert: {
		/**
		 * Constructor
		 * @param {Object} [options] Options object
		 */
		new (options?: any): IInvertFilter;
		/**
		 * Returns filter instance from an object representation
		 * @param {Object} object Object to create an instance from
		 */
		fromObject(object: any): IInvertFilter
	};
	Mask: {
		/**
		 * Constructor
		 * @param {Object} [options] Options object
		 * @param {fabric.Image} [options.mask] Mask image object
		 * @param {Number} [options.channel=0] Rgb channel (0, 1, 2 or 3)
		 */
		new (options?: { mask?: Image; channel: number; }): IMaskFilter;
		/**
		 * Returns filter instance from an object representation
		 * @param {Object} object Object to create an instance from
		 */
		fromObject(object: any): IMaskFilter
	};
	Multiply: {
		/**
		 * Constructor
		 * @param {Object} [options] Options object
		 * @param {Number} [options.color=#000000] Color to multiply the image pixels with
		 */
		new (options?: { color: string; }): IMultiplyFilter;
		/**
		 * Returns filter instance from an object representation
		 * @param {Object} object Object to create an instance from
		 */
		fromObject(object: any): IMultiplyFilter
	};
	Noise: {
		/**
		 * Constructor
		 * @param {Object} [options] Options object
		 * @param {Number} [options.noise=0] Noise value
		 */
		new (options?: { noise: number; }): INoiseFilter;
		/**
		 * Returns filter instance from an object representation
		 * @param {Object} object Object to create an instance from
		 */
		fromObject(object: any): INoiseFilter
	};
	Pixelate: {
		/**
		 * Constructor
		 * @param {Object} [options] Options object
		 * @param {Number} [options.blocksize=4] Blocksize for pixelate
		 */
		new (options?: { blocksize?: number; }): IPixelateFilter;
		/**
		 * Returns filter instance from an object representation
		 * @param {Object} object Object to create an instance from
		 */
		fromObject(object: any): IPixelateFilter
	};
	RemoveWhite: {
		/**
		 * Constructor
		 * @param {Object} [options] Options object
		 * @param {Number} [options.threshold=30] Threshold value
		 * @param {Number} [options.distance=20] Distance value
		 */
		new (options?: { threshold?: number; distance?: number; }): IRemoveWhiteFilter;
		/**
		 * Returns filter instance from an object representation
		 * @param {Object} object Object to create an instance from
		 */
		fromObject(object: any): IRemoveWhiteFilter
	};
	Resize: {
		/**
		 * Constructor
		 * @param {Object} [options] Options object
		 */
		new (options?: any): IResizeFilter;
		/**
		 * Returns filter instance from an object representation
		 * @param {Object} object Object to create an instance from
		 */
		fromObject(object: any): IResizeFilter
	};
	Sepia2: {
		/**
		 * Constructor
		 * @param {Object} [options] Options object
		 */
		new (options?: any): ISepia2Filter;
		/**
		 * Returns filter instance from an object representation
		 * @param {Object} object Object to create an instance from
		 */
		fromObject(object: any): ISepia2Filter
	};
	Sepia: {
		/**
		 * Constructor
		 * @param {Object} [options] Options object
		 */
		new (options?: any): ISepiaFilter;
		/**
		 * Returns filter instance from an object representation
		 * @param {Object} object Object to create an instance from
		 */
		fromObject(object: any): ISepiaFilter
	};
	Tint: {
		/**
		 * Constructor
		 * @param {Object} [options] Options object
		 * @param {String} [options.color=#000000] Color to tint the image with
		 * @param {Number} [options.opacity] Opacity value that controls the tint effect's transparency (0..1)
		 */
		new (options?: { color?: string; opacity?: number; }): ITintFilter;
		/**
		 * Returns filter instance from an object representation
		 * @param {Object} object Object to create an instance from
		 */
		fromObject(object: any): ITintFilter
	};
}
interface IBaseFilter {
	/**
	 * Sets filter's properties from options
	 * @param {Object} [options] Options object
	 */
	setOptions(options?: any): void;
	/**
	 * Returns object representation of an instance
	 */
	toObject(): any;
	/**
	 * Returns a JSON representation of an instance
	 */
	toJSON(): string;
}
interface IBlendFilter extends IBaseFilter {
	/**
	 * Applies filter to canvas element
	 * @param {Object} canvasEl Canvas element to apply filter to
	 */
	applyTo(canvasEl: HTMLCanvasElement): void;
}
interface IBrightnessFilter extends IBaseFilter {
	/**
	 * Applies filter to canvas element
	 * @param {Object} canvasEl Canvas element to apply filter to
	 */
	applyTo(canvasEl: HTMLCanvasElement): void;
}
interface IConvoluteFilter extends IBaseFilter {
	/**
	 * Applies filter to canvas element
	 * @param {Object} canvasEl Canvas element to apply filter to
	 */
	applyTo(canvasEl: HTMLCanvasElement): void;
}
interface IGradientTransparencyFilter {
	/**
	 * Applies filter to canvas element
	 * @param {Object} canvasEl Canvas element to apply filter to
	 */
	applyTo(canvasEl: HTMLCanvasElement): void;
}
interface IGrayscaleFilter {
	/**
	 * Applies filter to canvas element
	 * @param {Object} canvasEl Canvas element to apply filter to
	 */
	applyTo(canvasEl: HTMLCanvasElement): void;
}
interface IInvertFilter {
	/**
	 * Applies filter to canvas element
	 * @param {Object} canvasEl Canvas element to apply filter to
	 */
	applyTo(canvasEl: HTMLCanvasElement): void;
}
interface IMaskFilter {
	/**
	 * Applies filter to canvas element
	 * @param {Object} canvasEl Canvas element to apply filter to
	 */
	applyTo(canvasEl: HTMLCanvasElement): void;
}
interface IMultiplyFilter {
	/**
	 * Applies filter to canvas element
	 * @param {Object} canvasEl Canvas element to apply filter to
	 */
	applyTo(canvasEl: HTMLCanvasElement): void;
}
interface INoiseFilter {
	/**
	 * Applies filter to canvas element
	 * @param {Object} canvasEl Canvas element to apply filter to
	 */
	applyTo(canvasEl: HTMLCanvasElement): void;
}
interface IPixelateFilter {
	/**
	 * Applies filter to canvas element
	 * @param {Object} canvasEl Canvas element to apply filter to
	 */
	applyTo(canvasEl: HTMLCanvasElement): void;
}
interface IRemoveWhiteFilter {
	/**
	 * Applies filter to canvas element
	 * @param {Object} canvasEl Canvas element to apply filter to
	 */
	applyTo(canvasEl: HTMLCanvasElement): void;
}
interface IResizeFilter {
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
	 * @param {Object} canvasEl Canvas element to apply filter to
	 */
	applyTo(canvasEl: HTMLCanvasElement): void;
}
interface ISepiaFilter {
	/**
	 * Applies filter to canvas element
	 * @param {Object} canvasEl Canvas element to apply filter to
	 */
	applyTo(canvasEl: HTMLCanvasElement): void;
}
interface ISepia2Filter {
	/**
	 * Applies filter to canvas element
	 * @param {Object} canvasEl Canvas element to apply filter to
	 */
	applyTo(canvasEl: HTMLCanvasElement): void;
}
interface ITintFilter {
	/**
	 * Applies filter to canvas element
	 * @param {Object} canvasEl Canvas element to apply filter to
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
	 * Shadow object representing shadow of this shape.
	 * <b>Backwards incompatibility note:</b> This property replaces "shadowColor" (String), "shadowOffsetX" (Number),
	 * "shadowOffsetY" (Number) and "shadowBlur" (Number) since v1.2.12
	 */
	shadow: IShadow|string;
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

	/**
	 * Sets shadow of an object
	 * @param {Object|String} [options] Options object or string (e.g. "2px 2px 10px rgba(0,0,0,0.2)")
	 */
	setShadow(options: string|any): BaseBrush;
}

export class CircleBrush extends BaseBrush {
	/**
	 * Width of a brush
	 */
	width: number;
	/**
	 * Invoked inside on mouse down and mouse move
	 * @param {Object} pointer
	 */
	drawDot(pointer: any): void;

	/**
	 * @param {Object} pointer
	 * @return {fabric.Point} Just added pointer point
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
	/**
	 * @param {Object} pointer
	 */
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
	createPath(pathData: string): IPath;
}
export class PencilBrush extends BaseBrush {
	/**
	 * Converts points to SVG path
	 * @param {Array} points Array of points
	 * @param {Number} minX
	 * @param {Number} minY
	 */
	convertPointsToSVGPath(points: Array<{ x: number; y: number }>, minX?: number, minY?: number): string[];

	/**
	 * Creates fabric.Path object to add on canvas
	 * @param {String} pathData Path data
	 */
	createPath(pathData: string): IPath;
}

///////////////////////////////////////////////////////////////////////////////
// Fabric util Interface
//////////////////////////////////////////////////////////////////////////////
interface IUtilAnimationOptions {
	/**
	 * Starting value
	 */
	startValue?: number;
	/**
	 * Ending value
	 */
	endValue?: number;
	/**
	 * Value to modify the property by
	 */
	byValue: number;
	/**
	 * Duration of change (in ms)
	 */
	duration?: number;
	/**
	 * Callback; invoked on every value change
	 */
	onChange?: Function;
	/**
	 * Callback; invoked when value change is completed
	 */
	onComplete?: Function;
	/**
	 * Easing function
	 */
	easing?: Function;
}
interface IUtilAnimation {
	/**
	 * Changes value from one to another within certain period of time, invoking callbacks as value is being changed.
	 * @param {Object} [options] Animation options
	 */
	animate(options?: IUtilAnimationOptions): void;
	/**
	 * requestAnimationFrame polyfill based on http://paulirish.com/2011/requestanimationframe-for-smart-animating/
	 * In order to get a precise start time, `requestAnimFrame` should be called as an entry into the method
	 * @param {Function} callback Callback to invoke
	 */
	requestAnimFrame(callback: Function): void;
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

interface IUtilArc {
	/**
	 * Draws arc
	 * @param {CanvasRenderingContext2D} ctx
	 * @param {Number} fx
	 * @param {Number} fy
	 * @param {Array} coords
	 */
	drawArc(ctx: CanvasRenderingContext2D, fx: number, fy: number, coords: number[]): void;
	/**
	 * Calculate bounding box of a elliptic-arc
	 * @param {Number} fx start point of arc
	 * @param {Number} fy
	 * @param {Number} rx horizontal radius
	 * @param {Number} ry vertical radius
	 * @param {Number} rot angle of horizontal axe
	 * @param {Number} large 1 or 0, whatever the arc is the big or the small on the 2 points
	 * @param {Number} sweep 1 or 0, 1 clockwise or counterclockwise direction
	 * @param {Number} tx end point of arc
	 * @param {Number} ty
	 */
	getBoundsOfArc(fx: number, fy: number, rx: number, ry: number, rot: number, large: number, sweep: number, tx: number, ty: number): Point[];
	/**
	 * Calculate bounding box of a beziercurve
	 * @param {Number} x0 starting point
	 * @param {Number} y0
	 * @param {Number} x1 first control point
	 * @param {Number} y1
	 * @param {Number} x2 secondo control point
	 * @param {Number} y2
	 * @param {Number} x3 end of beizer
	 * @param {Number} y3
	 */
	getBoundsOfCurve(x0: number, y0: number, x1: number, y1: number, x2: number, y2: number, x3: number, y3: number): Point[];
}

interface IUtilDomEvent {
	/**
	 * Cross-browser wrapper for getting event's coordinates
	 * @param {Event} event Event object
	 * @param {HTMLCanvasElement} upperCanvasEl &lt;canvas> element on which object selection is drawn
	 */
	getPointer(event: Event, upperCanvasEl: HTMLCanvasElement): Point;

	/**
	 * Adds an event listener to an element
	 * @param {HTMLElement} element
	 * @param {String} eventName
	 * @param {Function} handler
	 */
	addListener(element: HTMLElement, eventName: string, handler: Function): void;

	/**
	 * Removes an event listener from an element
	 * @param {HTMLElement} element
	 * @param {String} eventName
	 * @param {Function} handler
	 */
	removeListener(element: HTMLElement, eventName: string, handler: Function): void;
}

interface IUtilDomMisc {
	/**
	 * Takes id and returns an element with that id (if one exists in a document)
	 * @param {String|HTMLElement} id
	 */
	getById(id: string|HTMLElement): HTMLElement;
	/**
	 * Converts an array-like object (e.g. arguments or NodeList) to an array
	 * @param {Object} arrayLike
	 */
	toArray(arrayLike: any): any[];
	/**
	 * Creates specified element with specified attributes
	 * @memberOf fabric.util
	 * @param {String} tagName Type of an element to create
	 * @param {Object} [attributes] Attributes to set on an element
	 * @return {HTMLElement} Newly created element
	 */
	makeElement(tagName: string, attributes?: any): HTMLElement;
	/**
	 * Adds class to an element
	 * @param {HTMLElement} element Element to add class to
	 * @param {String} className Class to add to an element
	 */
	addClass(element: HTMLElement, classname: string): void;
	/**
	 * Wraps element with another element
	 * @param {HTMLElement} element Element to wrap
	 * @param {HTMLElement|String} wrapper Element to wrap with
	 * @param {Object} [attributes] Attributes to set on a wrapper
	 */
	wrapElement(element: HTMLElement, wrapper: HTMLElement|string, attributes?: any): HTMLElement;
	/**
	 * Returns element scroll offsets
	 * @param {HTMLElement} element Element to operate on
	 * @param {HTMLElement} upperCanvasEl Upper canvas element
	 */
	getScrollLeftTop(element: HTMLElement, upperCanvasEl: HTMLElement): { left: number; right: number; };
	/**
	 * Returns offset for a given element
	 * @param {HTMLElement} element Element to get offset for
	 */
	getElementOffset(element: HTMLElement): { left: number; right: number; };
	/**
	 * Returns style attribute value of a given element
	 * @param {HTMLElement} element Element to get style attribute for
	 * @param {String} attr Style attribute to get for element
	 */
	getElementStyle(elment: HTMLElement, attr: string): string;
	/**
	 * Inserts a script element with a given url into a document; invokes callback, when that script is finished loading
	 * @memberOf fabric.util
	 * @param {String} url URL of a script to load
	 * @param {Function} callback Callback to execute when script is finished loading
	 */
	getScript(url: string, callback: Function): void;
	/**
	 * Makes element unselectable
	 * @param {HTMLElement} element Element to make unselectable
	 */
	makeElementUnselectable(element: HTMLElement): HTMLElement;
	/**
	 * Makes element selectable
	 * @param {HTMLElement} element Element to make selectable
	 */
	makeElementSelectable(element: HTMLElement): HTMLElement;
}

interface IUtilDomRequest {
	/**
	 * Cross-browser abstraction for sending XMLHttpRequest
	 * @param {String} url URL to send XMLHttpRequest to
	 * @param {Object} [options] Options object
	 * @param {String} [options.method="GET"]
	 * @param {Function} options.onComplete Callback to invoke when request is completed
	 */
	request(url: string, options?: { method?: string; onComplete: Function }): XMLHttpRequest;
}

interface IUtilDomStyle {
	/**
	 * Cross-browser wrapper for setting element's style
	 * @param {HTMLElement} element
	 * @param {Object} styles
	 */
	setStyle(element: HTMLElement, styles: any): HTMLElement;
}

interface IUtilArray {
	/**
	 * Invokes method on all items in a given array
	 * @param {Array} array Array to iterate over
	 * @param {String} method Name of a method to invoke
	 */
	invoke(array: any[], method: string): any[];
	/**
	 * Finds minimum value in array (not necessarily "first" one)
	 * @param {Array} array Array to iterate over
	 * @param {String} byProperty
	 */
	min(array: any[], byProperty: string): any;
	/**
	 * Finds maximum value in array (not necessarily "first" one)
	 * @param {Array} array Array to iterate over
	 * @param {String} byProperty
	 */
	max(array: any[], byProperty: string): any;
}

interface IUtilClass {
	/**
	 * Helper for creation of "classes".
	 * @param {Function} [parent] optional "Class" to inherit from
	 * @param {Object} [properties] Properties shared by all instances of this class
	 *                  (be careful modifying objects defined here as this would affect all instances)
	 */
	createClass(parent: Function, properties?: any): void;
	/**
	 * Helper for creation of "classes".
	 * @param {Object} [properties] Properties shared by all instances of this class
	 *                  (be careful modifying objects defined here as this would affect all instances)
	 */
	createClass(properties?: any): void;
}

interface IUtilObject {
	/**
	 * Copies all enumerable properties of one object to another
	 * @param {Object} destination Where to copy to
	 * @param {Object} source Where to copy from
	 */
	extend(destination: any, source: any): any;

	/**
	 * Creates an empty object and copies all enumerable properties of another object to it
	 * @memberOf fabric.util.object
	 * @param {Object} object Object to clone
	 * @return {Object}
	 */
	clone(object: any): any;
}

interface IUtilString {
	/**
	 * Camelizes a string
	 * @param {String} string String to camelize
	 */
	camelize(string: string): string;

	/**
	 * Capitalizes a string
	 * @param {String} string String to capitalize
	 * @param {Boolean} [firstLetterOnly] If true only first letter is capitalized
	 * and other letters stay untouched, if false first letter is capitalized
	 * and other letters are converted to lowercase.
	 */
	capitalize(string: string, firstLetterOnly: boolean): string;

	/**
	 * Escapes XML in a string
	 * @param {String} string String to escape
	 */
	escapeXml(string: string): string;
}

interface IUtilMisc {
	/**
	 * Removes value from an array.
	 * Presence of value (and its position in an array) is determined via `Array.prototype.indexOf`
	 * @param {Array} array
	 * @param {Any} value
	 */
	removeFromArray(array: any[], value: any): any[];

	/**
	 * Returns random number between 2 specified ones.
	 * @param {Number} min lower limit
	 * @param {Number} max upper limit
	 */
	getRandomInt(min: number, max: number): number;

	/**
	 * Transforms degrees to radians.
	 * @param {Number} degrees value in degrees
	 */
	degreesToRadians(degrees: number): number;

	/**
	 * Transforms radians to degrees.
	 * @memberOf fabric.util
	 * @param {Number} radians value in radians
	 */
	radiansToDegrees(radians: number): number;

	/**
	 * Rotates `point` around `origin` with `radians`
	 * @param {fabric.Point} point The point to rotate
	 * @param {fabric.Point} origin The origin of the rotation
	 * @param {Number} radians The radians of the angle for the rotation
	 */
	rotatePoint(point: Point, origin: Point, radians: number): Point;

	/**
	 * Apply transform t to point p
	 * @param  {fabric.Point} p The point to transform
	 * @param  {Array} t The transform
	 * @param  {Boolean} [ignoreOffset] Indicates that the offset should not be applied
	 */
	transformPoint(p: Point, t: any[], ignoreOffset?: boolean): Point;

	/**
	 * Invert transformation t
	 * @param {Array} t The transform
	 */
	invertTransform(t: any[]): any[];

	/**
	 * A wrapper around Number#toFixed, which contrary to native method returns number, not string.
	 * @param {Number|String} number number to operate on
	 * @param {Number} fractionDigits number of fraction digits to "leave"
	 */
	toFixed(number: number, fractionDigits: number): number;

	/**
	 * Converts from attribute value to pixel value if applicable.
	 * Returns converted pixels or original value not converted.
	 * @param {Number|String} value number to operate on
	 */
	parseUnit(value: number|string, fontSize?: number): number|string;

	/**
	 * Function which always returns `false`.
	 */
	falseFunction(): boolean;

	/**
	 * Returns klass "Class" object of given namespace
	 * @param {String} type Type of object (eg. 'circle')
	 * @param {String} namespace Namespace to get klass "Class" object from
	 */
	getKlass(type: string, namespace: string): any;

	/**
	 * Returns object of given namespace
	 * @param {String} namespace Namespace string e.g. 'fabric.Image.filter' or 'fabric'
	 */
	resolveNamespace(namespace: string): any;

	/**
	 * Loads image element from given url and passes it to a callback
	 * @param {String} url URL representing an image
	 * @param {Function} callback Callback; invoked with loaded image
	 * @param {Any} [context] Context to invoke callback in
	 * @param {Object} [crossOrigin] crossOrigin value to set image element to
	 */
	loadImage(url: string, callback: (image: HTMLImageElement) => {}, context?: any, crossOrigin?: boolean): void;

	/**
	 * Creates corresponding fabric instances from their object representations
	 * @param {Array} objects Objects to enliven
	 * @param {Function} callback Callback to invoke when all objects are created
	 * @param {String} namespace Namespace to get klass "Class" object from
	 * @param {Function} reviver Method for further parsing of object elements, called after each fabric object created.
	 */
	enlivenObjects(objects: any[], callback: Function, namespace: string, reviver?: Function): void;

	/**
	 * Groups SVG elements (usually those retrieved from SVG document)
	 * @param {Array} elements SVG elements to group
	 * @param {Object} [options] Options object
	 */
	groupSVGElements(elements: any[], options?: any, path?: any): PathGroup;

	/**
	 * Populates an object with properties of another object
	 * @param {Object} source Source object
	 * @param {Object} destination Destination object
	 * @param {Array} properties Propertie names to include
	 */
	populateWithProperties(source: any, destination: any, properties: any): void;

	/**
	 * Draws a dashed line between two points
	 * This method is used to draw dashed line around selection area.
	 * @param {CanvasRenderingContext2D} ctx context
	 * @param {Number} x  start x coordinate
	 * @param {Number} y start y coordinate
	 * @param {Number} x2 end x coordinate
	 * @param {Number} y2 end y coordinate
	 * @param {Array} da dash array pattern
	 */
	drawDashedLine(ctx: CanvasRenderingContext2D, x: number, y: number, x2: number, y2: number, da: any[]): void;

	/**
	 * Creates canvas element and initializes it via excanvas if necessary
	 * @param {CanvasElement} [canvasEl] optional canvas element to initialize;
	 * when not given, element is created implicitly
	 */
	createCanvasElement(canvasEl?: HTMLCanvasElement): HTMLCanvasElement;

	/**
	 * Creates image element (works on client and node)
	 */
	createImage(): HTMLImageElement;

	/**
	 * Creates accessors (getXXX, setXXX) for a "class", based on "stateProperties" array
	 * @param {Object} klass "Class" to create accessors for
	 */
	createAccessors(klass: any): any;

	/**
	 * @param {fabric.Object} receiver Object implementing `clipTo` method
	 * @param {CanvasRenderingContext2D} ctx Context to clip
	 */
	clipContext(receiver: Object, ctx: CanvasRenderingContext2D): void;

	/**
	 * Multiply matrix A by matrix B to nest transformations
	 * @param  {Array} a First transformMatrix
	 * @param  {Array} b Second transformMatrix
	 */
	multiplyTransformMatrices(a: any[], b: any[]): any[];

	/**
	 * Returns string representation of function body
	 * @param {Function} fn Function to get body of
	 */
	getFunctionBody(fn: Function): string;

	/**
	 * Returns true if context has transparent pixel
	 * at specified location (taking tolerance into account)
	 * @param {CanvasRenderingContext2D} ctx context
	 * @param {Number} x x coordinate
	 * @param {Number} y y coordinate
	 * @param {Number} tolerance Tolerance
	 */
	isTransparent(ctx: CanvasRenderingContext2D, x: number, y: number, tolerance: number): boolean;
}

export const util: IUtil;
interface IUtil extends IUtilAnimation, IUtilArc, IObservable<IUtil>, IUtilDomEvent, IUtilDomMisc,
	IUtilDomRequest, IUtilDomStyle, IUtilClass, IUtilMisc {
	ease: IUtilAnimEase;
	array: IUtilArray;
	object: IUtilObject;
	string: IUtilString;
}
