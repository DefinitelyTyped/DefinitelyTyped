// Type definitions for Pixi.js 4.3
// Project: https://github.com/pixijs/pixi.js/
// Definitions by: Clark Stevenson <https://github.com/clark-stevenson>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// from CONST
export var VERSION: typeof CONST.VERSION;
export var PI_2: typeof CONST.PI_2;
export var RAD_TO_DEG: typeof CONST.RAD_TO_DEG;
export var DEG_TO_RAD: typeof CONST.DEG_TO_RAD;
export var RENDERER_TYPE: typeof CONST.RENDERER_TYPE;
export var BLEND_MODES: typeof CONST.BLEND_MODES;
export var DRAW_MODES: typeof CONST.DRAW_MODES;
export var SCALE_MODES: typeof CONST.SCALE_MODES;
export var WRAP_MODES: typeof CONST.WRAP_MODES;
export var TRANSFORM_MODE: typeof CONST.TRANSFORM_MODE;
export var PRECISION: typeof CONST.PRECISION;
export var TEXT_STYLE_CHANGED: typeof CONST.TEXT_STYLE_CHANGED;
export var GC_MODES: typeof CONST.GC_MODES;
export var SHAPES: typeof CONST.SHAPES;
export var TEXT_GRADIENT: typeof CONST.TEXT_GRADIENT;

export function autoDetectRenderer(width: number, height: number, options?: PIXI.IRendererOptions, noWebGL?: boolean): PIXI.WebGLRenderer | PIXI.CanvasRenderer;
export var loader: PIXI.loaders.Loader;

//////////////////////////////////////////////////////////////////////////////
///////////////////////////////SETTINGS///////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////

export namespace settings {
	export var TARGET_FPMS: number;
	export var MIPMAP_TEXTURES: boolean;
	export var RESOLUTION: number;
	export var FILTER_RESOLUTION: number;
	export var SPRITE_MAX_TEXTURES: number;
	export var SPRITE_BATCH_SIZE: number;
	export var RETINA_PREFIX: RegExp;
	export var RENDER_OPTIONS: {
		view: HTMLCanvasElement,
		antialias: boolean,
		forceFXAA: boolean,
		autoResize: boolean,
		transparent: boolean,
		backgroundColor: number,
		clearBeforeRender: boolean,
		preserveDrawingBuffer: boolean,
		roundPixels: boolean
	};
	export var TRANSFORM_MODE: number;
	export var GC_MODE: number;
	export var GC_MAX_IDLE: number;
	export var GC_MAX_CHECK_COUNT: number;
	export var WRAP_MODE: number;
	export var SCALE_MODE: number;
	export var PRECISION: string;
	export var UPLOADS_PER_FRAME: number;
	export var CAN_UPLOAD_SAME_BUFFER: boolean;
}

//////////////////////////////////////////////////////////////////////////////
/////////////////////////////ACCESSIBILITY////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////

export namespace accessibility {

	// accessibility
	export class AccessibilityManager {

		constructor(renderer: CanvasRenderer | WebGLRenderer);

		protected div: HTMLElement;
		protected pool: HTMLElement[];
		protected renderId: number;
		debug: boolean;
		renderer: SystemRenderer;
		protected children: IAccessibleTarget[];
		protected isActive: boolean;

		protected activate(): void;
		protected deactivate(): void;
		protected updateAccessibleObjects(displayObject: DisplayObject): void;
		protected update(): void;
		protected capHitArea(hitArea: IHitArea): void;
		protected addChild(displayObject: DisplayObject): void;
		protected _onClick(e: interaction.InteractionEvent): void;
		protected _onFocus(e: interaction.InteractionEvent): void;
		protected _onFocusOut(e: interaction.InteractionEvent): void;
		protected _onKeyDown(e: interaction.InteractionEvent): void;
		protected _onMouseMove(): void;

		destroy(): void;

	}
	export interface IAccessibleTarget {

		accessible: boolean;
		accessibleTitle: string;
		accessibleHint: string;
		tabIndex: number;

	}

}

//////////////////////////////////////////////////////////////////////////////
////////////////////////////////CORE//////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////

// const

export namespace CONST {
	export var VERSION: string;
	export var PI_2: number;
	export var RAD_TO_DEG: number;
	export var DEG_TO_RAD: number;
	export var TARGET_FPMS: number;
	export var RENDERER_TYPE: {
		UNKNOWN: number;
		WEBGL: number;
		CANVAS: number;
	};
	export var BLEND_MODES: {
		NORMAL: number;
		ADD: number;
		MULTIPLY: number;
		SCREEN: number;
		OVERLAY: number;
		DARKEN: number;
		LIGHTEN: number;
		COLOR_DODGE: number;
		COLOR_BURN: number;
		HARD_LIGHT: number;
		SOFT_LIGHT: number;
		DIFFERENCE: number;
		EXCLUSION: number;
		HUE: number;
		SATURATION: number;
		COLOR: number;
		LUMINOSITY: number;
	};
	export var DRAW_MODES: {
		POINTS: number;
		LINES: number;
		LINE_LOOP: number;
		LINE_STRIP: number;
		TRIANGLES: number;
		TRIANGLE_STRIP: number;
		TRIANGLE_FAN: number;
	};
	export var SCALE_MODES: {
		LINEAR: number,
		NEAREST: number
	};
	export var GC_MODES: {
		AUTO: number;
		MANUAL: number;
	};
	export var WRAP_MODES: {
		CLAMP: number;
		MIRRORED_REPEAT: number;
		REPEAT: number;
	};
	export var TRANSFORM_MODE: {
		DEFAULT: number;
		DYNAMIC: number;
		STATIC: number;
	};
	export var URL_FILE_EXTENSION: RegExp | string;
	export var DATA_URI: RegExp | string;
	export var SVG_SIZE: RegExp | string;
	export var SHAPES: {
		POLY: number;
		RECT: number;
		CIRC: number;
		ELIP: number;
		RREC: number;
	};
	export var PRECISION: {
		LOW: string;
		MEDIUM: string;
		HIGH: string;
	};
	export var TEXT_GRADIENT: {
		LINEAR_VERTICAL: number;
		LINEAR_HORIZONTAL: number;
	};
	export var TEXT_STYLE_CHANGED: string;

}

// display

export interface IDestroyOptions {
	children?: boolean;
	texture?: boolean;
	baseTexture?: boolean;
}
export class Bounds {

	minX: number;
	minY: number;
	maxX: number;
	maxY: number;
	rect: Rectangle;

	isEmpty(): boolean;
	clear(): void;

	getRectangle(rect?: Rectangle): Rectangle;
	addPoint(point: Point): void;
	addQuad(vertices: number[]): Bounds;
	addFrame(transform: Transform, x0: number, y0: number, x1: number, y1: number): void;
	addVertices(transform: Transform, vertices: number[], beginOffset: number, endOffset: number): void;
	addBounds(bounds: Bounds): void;
	addBoundsMask(bounds: Bounds, mask: Bounds): void;
	addBoundsArea(bounds: Bounds, area: Rectangle): void;

}
export class Container extends DisplayObject {

	// begin extras.getChildByName
	getChildByName(name: string): DisplayObject;
	// end extras.getChildByName

	children: DisplayObject[];
	width: number;
	height: number;

	protected onChildrenChange: (...args: any[]) => void;
	addChild<T extends DisplayObject>(child: T, ...additionalChildren: DisplayObject[]): T;
	addChildAt<T extends DisplayObject>(child: T, index: number): T;
	swapChildren(child: DisplayObject, child2: DisplayObject): void;
	getChildIndex(child: DisplayObject): number;
	setChildIndex(child: DisplayObject, index: number): void;
	getChildAt(index: number): DisplayObject;
	removeChild(child: DisplayObject): DisplayObject;
	removeChildAt(index: number): DisplayObject;
	removeChildren(beginIndex?: number, endIndex?: number): DisplayObject[];
	updateTransform(): void;
	calculateBounds(): void;
	protected _calculateBounds(): void;
	protected containerUpdateTransform(): void;
	renderWebGL(renderer: WebGLRenderer): void;
	renderAdvancedWebGL(renderer: WebGLRenderer): void;
	protected _renderWebGL(renderer: WebGLRenderer): void;
	protected _renderCanvas(renderer: CanvasRenderer): void;
	renderCanvas(renderer: CanvasRenderer): void;
	destroy(options?: IDestroyOptions | boolean): void;

	once(event: "added", fn: (displayObject: DisplayObject) => void, context?: any): utils.EventEmitter;
	once(event: "removed", fn: (DisplayObject: DisplayObject) => void, context?: any): utils.EventEmitter;
	once(event: string, fn: Function, context?: any): utils.EventEmitter;
	on(event: "added", fn: (displayObject: DisplayObject) => void, context?: any): utils.EventEmitter;
	on(event: "removed", fn: (DisplayObject: DisplayObject) => void, context?: any): utils.EventEmitter;
	on(event: string, fn: Function, context?: any): utils.EventEmitter;
	off(event: string, fn: Function, context?: any): utils.EventEmitter;

}
export class DisplayObject extends utils.EventEmitter implements interaction.InteractiveTarget {

	// begin extras.cacheAsBitmap
	protected _cacheAsBitmap: boolean;
	protected _cacheData: boolean;
	cacheAsBitmap: boolean;
	protected _renderCachedWebGL(renderer: WebGLRenderer): void;
	protected _initCachedDisplayObject(renderer: WebGLRenderer): void;
	protected _renderCachedCanvas(renderer: CanvasRenderer): void;
	protected _initCachedDisplayObjectCanvas(renderer: CanvasRenderer): void;
	protected _calculateCachedBounds(): Rectangle;
	protected _getCachedLocalBounds(): Rectangle;
	protected _destroyCachedDisplayObject(): void;
	protected _cacheAsBitmapDestroy(): void;
	// end extras.cacheAsBitmap

	// begin extras.getChildByName
	name: string;
	// end extras.getChildByName

	// begin extras.getGlobalPosition
	getGlobalPosition(point?: Point, skipUpdate?: boolean): Point;
	// end extras.getGlobalPosition

	// begin accessible target
	accessible: boolean;
	accessibleTitle: string;
	accessibleHint: string;
	tabIndex: number;
	// end accessible target

	// begin interactive target
	interactive: boolean;
	buttonMode: boolean;
	hitArea: IHitArea;
	interactiveChildren: boolean;
	defaultCursor: string;
	_isRightDown: boolean;
	_isLeftDown: boolean;
	// end interactive target

	transform: TransformBase;
	alpha: number;
	visible: boolean;
	renderable: boolean;
	parent: Container;
	worldAlpha: number;
	filterArea: Rectangle;
	protected _filters: Filter[];
	protected _enabledFilters: Filter[];
	protected _bounds: Bounds;
	protected _boundsID: number;
	protected _lastBoundsID: number;
	protected _boundsRect: Rectangle;
	protected _localBoundsRect: Rectangle;
	protected _mask: Rectangle;
	x: number;
	y: number;
	worldTransform: Matrix;
	localTransform: Matrix;
	position: Point;
	scale: Point;
	pivot: Point;
	skew: Point;
	rotation: number;
	worldVisible: boolean;
	mask: PIXI.Graphics | PIXI.Sprite;
	filters: Filter[];

	updateTransform(): void;
	protected displayObjectUpdateTransform(): void;
	protected _recursivePostUpdateTransform(): void;
	getBounds(skipUpdate?: boolean, rect?: Rectangle): Rectangle;
	getLocalBounds(rect?: Rectangle): Rectangle;
	toGlobal(position: Point, point?: Point, skipUpdate?: boolean): Point;
	toLocal(position: Point, from?: DisplayObject, point?: Point, skipUpdate?: boolean): Point;
	protected renderWebGL(renderer: WebGLRenderer): void;
	renderCanvas(renderer: CanvasRenderer): void;
	setParent(container: Container): Container;
	setTransform(x?: number, y?: number, scaleX?: number, scaleY?: number, rotation?: number, skewX?: number, skewY?: number, pivotX?: number, pivotY?: number): DisplayObject;
	destroy(): void;

	on(event: string, fn: Function, context?: any): utils.EventEmitter;
	once(event: string, fn: Function, context?: any): utils.EventEmitter;
	off(event: string, fn: Function, context?: any): utils.EventEmitter;

	/*
		on(event: 'click', fn: (event: interaction.InteractionEvent) => void, context?: any): utils.EventEmitter;
		on(event: 'mousedown', fn: (event: interaction.InteractionEvent) => void, context?: any): utils.EventEmitter;
		on(event: 'mouseout', fn: (event: interaction.InteractionEvent) => void, context?: any): utils.EventEmitter;
		on(event: 'mouseover', fn: (event: interaction.InteractionEvent) => void, context?: any): utils.EventEmitter;
		on(event: 'mouseup', fn: (event: interaction.InteractionEvent) => void, context?: any): utils.EventEmitter;
		on(event: 'mouseclick', fn: (event: interaction.InteractionEvent) => void, context?: any): utils.EventEmitter;
		on(event: 'mouseupoutside', fn: (event: interaction.InteractionEvent) => void, context?: any): utils.EventEmitter;
		on(event: 'rightclick', fn: (event: interaction.InteractionEvent) => void, context?: any): utils.EventEmitter;
		on(event: 'rightdown', fn: (event: interaction.InteractionEvent) => void, context?: any): utils.EventEmitter;
		on(event: 'rightup', fn: (event: interaction.InteractionEvent) => void, context?: any): utils.EventEmitter;
		on(event: 'rightupoutside', fn: (event: interaction.InteractionEvent) => void, context?: any): utils.EventEmitter;
		on(event: 'tap', fn: (event: interaction.InteractionEvent) => void, context?: any): utils.EventEmitter;
		on(event: 'touchend', fn: (event: interaction.InteractionEvent) => void, context?: any): utils.EventEmitter;
		on(event: 'touchendoutside', fn: (event: interaction.InteractionEvent) => void, context?: any): utils.EventEmitter;
		on(event: 'touchmove', fn: (event: interaction.InteractionEvent) => void, context?: any): utils.EventEmitter;
		on(event: 'touchstart', fn: (event: interaction.InteractionEvent) => void, context?: any): utils.EventEmitter;

		once(event: 'click', fn: (event: interaction.InteractionEvent) => void, context?: any): utils.EventEmitter;
		once(event: 'mousedown', fn: (event: interaction.InteractionEvent) => void, context?: any): utils.EventEmitter;
		once(event: 'mouseout', fn: (event: interaction.InteractionEvent) => void, context?: any): utils.EventEmitter;
		once(event: 'mouseover', fn: (event: interaction.InteractionEvent) => void, context?: any): utils.EventEmitter;
		once(event: 'mouseup', fn: (event: interaction.InteractionEvent) => void, context?: any): utils.EventEmitter;
		once(event: 'mouseclick', fn: (event: interaction.InteractionEvent) => void, context?: any): utils.EventEmitter;
		once(event: 'mouseupoutside', fn: (event: interaction.InteractionEvent) => void, context?: any): utils.EventEmitter;
		once(event: 'rightclick', fn: (event: interaction.InteractionEvent) => void, context?: any): utils.EventEmitter;
		once(event: 'rightdown', fn: (event: interaction.InteractionEvent) => void, context?: any): utils.EventEmitter;
		once(event: 'rightup', fn: (event: interaction.InteractionEvent) => void, context?: any): utils.EventEmitter;
		once(event: 'rightupoutside', fn: (event: interaction.InteractionEvent) => void, context?: any): utils.EventEmitter;
		once(event: 'tap', fn: (event: interaction.InteractionEvent) => void, context?: any): utils.EventEmitter;
		once(event: 'touchend', fn: (event: interaction.InteractionEvent) => void, context?: any): utils.EventEmitter;
		once(event: 'touchendoutside', fn: (event: interaction.InteractionEvent) => void, context?: any): utils.EventEmitter;
		once(event: 'touchmove', fn: (event: interaction.InteractionEvent) => void, context?: any): utils.EventEmitter;
		once(event: 'touchstart', fn: (event: interaction.InteractionEvent) => void, context?: any): utils.EventEmitter;
		*/

}

export class TransformBase {

	static IDENTITY: TransformBase;

	worldTransform: Matrix;
	localTransform: Matrix;
	protected _worldID: number;
	updateLocalTransform(): void;
	updateTransform(parentTransform: TransformBase): void;
	updateWorldTransform(parentTransform: TransformBase): void;

}
export class TransformStatic extends TransformBase {

	position: ObservablePoint;
	scale: ObservablePoint;
	pivot: ObservablePoint;
	skew: ObservablePoint;

	protected _rotation: number;
	protected _sr: number;
	protected _cr: number;
	protected _cy: number;
	protected _sy: number;
	protected _nsx: number;
	protected _cx: number;
	protected _currentLocalID: number;

	protected onChange(): void;
	updateSkew(): void;
	updateLocalTransform(): void;
	updateTransform(parentTransform: TransformBase): void;
	setFromMatrix(matrix: Matrix): void;

	rotation: number;

}
export class Transform extends TransformBase {

	constructor();

	position: Point;
	scale: Point;
	skew: ObservablePoint;
	pivot: Point;

	protected _rotation: number;
	protected _sr: number;
	protected _cr: number;
	protected _cy: number;
	protected _sy: number;
	protected _nsx: number;
	protected _cx: number;

	updateSkew(): void;
	setFromMatrix(matrix: Matrix): void;

	rotation: number;

}

// graphics

export class GraphicsData {

	constructor(lineWidth: number, lineColor: number, lineAlpha: number, fillColor: number, fillAlpha: number, fill: boolean, shape: IShape | Circle | Rectangle | RoundedRectangle | Ellipse | Polygon);

	lineWidth: number;
	lineColor: number;
	lineAlpha: number;
	protected _lineTint: number;
	fillColor: number;
	fillAlpha: number;
	protected _fillTint: number;
	fill: boolean;
	protected holes: IShape[];
	shape: IShape | Circle | Rectangle | RoundedRectangle | Ellipse | Polygon;
	type: number;
	clone(): GraphicsData;
	addHole(shape: IShape | Circle | Rectangle | RoundedRectangle | Ellipse | Polygon): void;
	destroy(options?: IDestroyOptions | boolean): void;

}
export class Graphics extends Container {

	fillAlpha: number;
	lineWidth: number;
	lineColor: number;
	protected graphicsData: GraphicsData[];
	tint: number;
	protected _prevTint: number;
	blendMode: number;
	currentPath: GraphicsData;
	protected _webGL: any;
	isMask: boolean;
	boundsPadding: number;
	protected _localBounds: Bounds;
	dirty: boolean;
	fastRectDirty: number;
	clearDirty: number;
	boundsDirty: number;
	protected cachedSpriteDirty: boolean;
	protected _spriteRect: Rectangle;
	protected _fastRect: boolean;

	static _SPRITE_TEXTURE: Texture;

	clone(): Graphics;
	lineStyle(lineWidth?: number, color?: number, alpha?: number): Graphics;
	moveTo(x: number, y: number): Graphics;
	lineTo(x: number, y: number): Graphics;
	quadraticCurveTo(cpX: number, cpY: number, toX: number, toY: number): Graphics;
	bezierCurveTo(cpX: number, cpY: number, cpX2: number, cpY2: number, toX: number, toY: number): Graphics;
	arcTo(x1: number, y1: number, x2: number, y2: number, radius: number): Graphics;
	arc(cx: number, cy: number, radius: number, startAngle: number, endAngle: number, anticlockwise?: boolean): Graphics;
	beginFill(color: number, alpha?: number): Graphics;
	endFill(): Graphics;
	drawRect(x: number, y: number, width: number, height: number): Graphics;
	drawRoundedRect(x: number, y: number, width: number, height: number, radius: number): Graphics;
	drawCircle(x: number, y: number, radius: number): Graphics;
	drawEllipse(x: number, y: number, width: number, height: number): Graphics;
	drawPolygon(path: number[] | Point[]): Graphics;
	clear(): Graphics;
	isFastRect(): boolean;
	protected _renderCanvas(renderer: CanvasRenderer): void;
	protected _calculateBounds(): Rectangle;
	protected _renderSpriteRect(renderer: PIXI.SystemRenderer): void;
	containsPoint(point: Point): boolean;
	updateLocalBounds(): void;
	drawShape(shape: IShape | Circle | Rectangle | Ellipse | Polygon | RoundedRectangle): GraphicsData;
	generateCanvasTexture(scaleMode?: number, resolution?: number): Texture;
	protected closePath(): Graphics;
	protected addHole(): Graphics;
	destroy(options?: IDestroyOptions | boolean): void;

}
export class CanvasGraphicsRenderer {

	constructor(renderer: SystemRenderer);
	render(graphics: Graphics): void;
	protected updateGraphicsTint(graphics: Graphics): void;
	protected renderPolygon(points: Point[], close: boolean, context: CanvasRenderingContext2D): void;
	destroy(): void;

}
export class GraphicsRenderer extends ObjectRenderer {

	constructor(renderer: PIXI.CanvasRenderer);

	protected graphicsDataPool: GraphicsData[];
	protected primitiveShader: PrimitiveShader;
	gl: WebGLRenderingContext;

	CONTEXT_UID: number;

	destroy(): void;
	render(graphics: Graphics): void;
	protected updateGraphics(graphics: PIXI.Graphics): void;
	getWebGLData(webGL: WebGLRenderingContext, type: number): WebGLGraphicsData;

}
export class WebGLGraphicsData {

	constructor(gl: WebGLRenderingContext, shader: glCore.GLShader, attribsState: glCore.IAttribState);

	gl: WebGLRenderingContext;
	color: number[];
	points: Point[];
	indices: number[];
	buffer: WebGLBuffer;
	indexBuffer: WebGLBuffer;
	dirty: boolean;
	glPoints: number[];
	glIndices: number[];
	shader: glCore.GLShader;
	vao: glCore.VertexArrayObject;

	reset(): void;
	upload(): void;
	destroy(): void;

}
export class PrimitiveShader extends glCore.GLShader { }

// math

export namespace GroupD8 {

	export var E: number;
	export var SE: number;
	export var S: number;
	export var SW: number;
	export var W: number;
	export var NW: number;
	export var N: number;
	export var NE: number;
	export var MIRROR_HORIZONTAL: number;
	export var MIRROR_VERTICAL: number;

	export function uX(ind: number): number;
	export function uY(ind: number): number;
	export function vX(ind: number): number;
	export function vY(ind: number): number;
	export function inv(rotation: number): number;
	export function add(rotationSecond: number, rotationFirst: number): number;
	export function sub(rotationSecond: number, rotationFirst: number): number;
	export function rotate180(rotation: number): number;
	export function isSwapWidthHeight(rotation: number): boolean;
	export function byDirection(dx: number, dy: number): number;
	export function matrixAppendRotationInv(matrix: Matrix, rotation: number, tx: number, ty: number): void;

}
export class Matrix {

	a: number;
	b: number;
	c: number;
	d: number;
	tx: number;
	ty: number;

	fromArray(array: number[]): void;
	set(a: number, b: number, c: number, d: number, tx: number, ty: number): Matrix;
	toArray(transpose?: boolean, out?: number[]): number[];
	apply(pos: Point, newPos?: Point): Point;
	applyInverse(pos: Point, newPos?: Point): Point;
	translate(x: number, y: number): Matrix;
	scale(x: number, y: number): Matrix;
	rotate(angle: number): Matrix;
	append(matrix: Matrix): Matrix;
	setTransform(x: number, y: number, pivotX: number, pivotY: number, scaleX: number, scaleY: number, rotation: number, skewX: number, skewY: number): PIXI.Matrix;
	prepend(matrix: Matrix): Matrix;
	invert(): Matrix;
	identity(): Matrix;
	decompose(transform: TransformBase): TransformBase;
	clone(): Matrix;
	copy(matrix: Matrix): Matrix;

	static IDENTITY: Matrix;
	static TEMP_MATRIX: Matrix;

}
export class ObservablePoint {

	constructor(cb: Function, scope?: any, x?: number, y?: number);

	x: number;
	y: number;
	cb: () => void;
	scope: any;

	set(x?: number, y?: number): void;
	copy(point: Point | ObservablePoint): void;

}
export class Point {

	constructor(x?: number, y?: number);

	x: number;
	y: number;

	clone(): Point;
	copy(p: Point): void;
	equals(p: Point): boolean;
	set(x?: number, y?: number): void;

}

export interface IShape {
}
export interface IHitArea extends IShape {

	contains(x: number, y: number): boolean;

}
export class Circle {

	constructor(x?: number, y?: number, radius?: number);

	x: number;
	y: number;
	radius: number;
	type: number;

	clone(): Circle;
	contains(x: number, y: number): boolean;
	getBounds(): Rectangle;

}
export class Ellipse {

	constructor(x?: number, y?: number, width?: number, height?: number);

	x: number;
	y: number;
	width: number;
	height: number;
	type: number;

	clone(): Ellipse;
	contains(x: number, y: number): boolean;
	getBounds(): Rectangle;

}
export class Polygon {

	constructor(points: Point[] | number[]);
	constructor(...points: Point[]);
	constructor(...points: number[]);

	closed: boolean;
	points: number[];
	type: number;

	clone(): Polygon;
	contains(x: number, y: number): boolean;
	close(): void;

}
export class Rectangle {

	constructor(x?: number, y?: number, width?: number, height?: number);

	x: number;
	y: number;
	width: number;
	height: number;
	type: number;
	left: number;
	right: number;
	top: number;
	bottom: number;

	static EMPTY: Rectangle;

	clone(): Rectangle;
	copy(rectangle: Rectangle): Rectangle;
	contains(x: number, y: number): boolean;
	pad(paddingX: number, paddingY: number): void;
	fit(rectangle: Rectangle): void;
	enlarge(rect: Rectangle): void;

}
export class RoundedRectangle {

	constructor(x?: number, y?: number, width?: number, height?: number, radius?: number);

	x: number;
	y: number;
	width: number;
	height: number;
	radius: number;
	type: number;

	clone(): RoundedRectangle;
	contains(x: number, y: number): boolean;

}

// renderers

export interface IRendererOptions {

	view?: HTMLCanvasElement;
	transparent?: boolean;
	autoResize?: boolean;
	antialias?: boolean;
	resolution?: number;
	clearBeforeRender?: boolean;
	backgroundColor?: number;
	roundPixels?: boolean;
	context?: WebGLRenderingContext;

}
export class SystemRenderer extends utils.EventEmitter {

	constructor(system: string, width?: number, height?: number, options?: IRendererOptions);

	type: number;
	width: number;
	height: number;
	view: HTMLCanvasElement;
	resolution: number;
	transparent: boolean;
	autoResize: boolean;
	blendModes: any; // todo?
	preserveDrawingBuffer: boolean;
	clearBeforeRender: boolean;
	roundPixels: boolean;
	protected _backgroundColor: number;
	protected _backgroundColorRgba: number[];
	protected _backgroundColorString: string;
	protected _tempDisplayObjectParent: Container;
	protected _lastObjectRendered: DisplayObject;
	backgroundColor: number;

	resize(width: number, height: number): void;
	generateTexture(displayObject: DisplayObject, scaleMode?: number, resolution?: number): RenderTexture;
	render(...args: any[]): void;
	destroy(removeView?: boolean): void;

}
export class CanvasRenderer extends SystemRenderer {

	// plugintarget mixin start
	static __plugins: any[];
	static registerPlugin(pluginName: string, ctor: Function): void;
	plugins: any;
	initPlugins(): void;
	destroyPlugins(): void;
	// plugintarget mixin end

	constructor(width?: number, height?: number, options?: IRendererOptions);

	rootContext: CanvasRenderingContext2D;
	rootResolution: number;
	refresh: boolean;
	maskManager: CanvasMaskManager;
	smoothProperty: string;
	extract: extract.CanvasExtract;

	context: CanvasRenderingContext2D;

	render(displayObject: PIXI.DisplayObject, renderTexture?: PIXI.RenderTexture, clear?: boolean, transform?: PIXI.Transform, skipUpdateTransform?: boolean): void
	setBlendMode(blendMode: number): void;
	destroy(removeView?: boolean): void;
	resize(w: number, h: number): void;

	on(event: "prerender", fn: () => void, context?: any): utils.EventEmitter;
	on(event: "postrender", fn: () => void, context?: any): utils.EventEmitter;
	on(event: string, fn: Function, context?: any): utils.EventEmitter;
	once(event: "prerender", fn: () => void, context?: any): utils.EventEmitter;
	once(event: "postrender", fn: () => void, context?: any): utils.EventEmitter;
	once(event: string, fn: Function, context?: any): utils.EventEmitter;
	off(event: string, fn: Function, context?: any): utils.EventEmitter;

}
export class CanvasMaskManager {

	constructor(renderer: CanvasRenderer);

	pushMask(maskData: any): void;
	protected renderGraphicsShape(graphics: Graphics): void;
	popMask(renderer: WebGLRenderer | CanvasRenderer): void;
	destroy(): void;

}
export class CanvasRenderTarget {

	constructor(width: number, height: number, resolution: number);

	canvas: HTMLCanvasElement;
	context: CanvasRenderingContext2D;
	resolution: number;

	width: number;
	height: number;

	clear(): void;
	resize(width: number, height: number): void;
	destroy(): void;

}

export interface IWebGLRendererOptions {

	view?: HTMLCanvasElement;
	transparent?: boolean;
	autoResize?: boolean;
	antialias?: boolean;
	forceFXAA?: boolean;
	resolution?: number;
	clearBeforeRender?: boolean;
	preserveDrawingBuffer?: boolean;
	roundPixels?: boolean;

}
export class WebGLRenderer extends SystemRenderer {

	// plugintarget mixin start
	static __plugins: any[];
	static registerPlugin(pluginName: string, ctor: Function): void;
	plugins: any;
	initPlugins(): void;
	destroyPlugins(): void;
	// plugintarget mixin end

	constructor(width?: number, height?: number, options?: IWebGLRendererOptions);

	protected _contextOptions: {
		alpha: boolean;
		antiAlias: boolean;
		premultipliedAlpha: boolean;
		stencil: boolean;
		preseveDrawingBuffer: boolean;
	};
	protected _backgroundColorRgba: number[];
	maskManager: MaskManager;
	stencilManager: StencilManager;
	emptyRenderer: ObjectRenderer;
	currentRenderer: ObjectRenderer;
	gl: WebGLRenderingContext;
	CONTEXT_UID: number;
	state: WebGLState;
	renderingToScreen: boolean;
	boundTextures: Texture[];
	filterManager: FilterManager;
	textureManager: TextureManager;
	extract: extract.WebGLExtract;
	protected drawModes: any;
	protected _activeShader: Shader;
	_activeRenderTarget: RenderTarget;
	protected _initContext(): void;

	render(displayObject: PIXI.DisplayObject, renderTexture?: PIXI.RenderTexture, clear?: boolean, transform?: PIXI.Transform, skipUpdateTransform?: boolean): void
	setObjectRenderer(objectRenderer: ObjectRenderer): void;
	flush(): void;
	resize(width: number, height: number): void;
	setBlendMode(blendMode: number): void;
	clear(clearColor?: number): void;
	setTransform(matrix: Matrix): void;
	bindRenderTexture(renderTexture: RenderTexture, transform: Transform): WebGLRenderer;
	bindRenderTarget(renderTarget: RenderTarget): WebGLRenderer;
	bindShader(shader: Shader): WebGLRenderer;
	bindTexture(texture: Texture | BaseTexture, location?: number, forceLocation?: boolean): number;
	unbindTexture(texture: Texture | BaseTexture): WebGLRenderer;
	createVao(): glCore.VertexArrayObject;
	bindVao(vao: glCore.VertexArrayObject): WebGLRenderer;
	reset(): WebGLRenderer;
	handleContextLost: (event: WebGLContextEvent) => void;
	handleContextRestored: () => void;
	destroy(removeView?: boolean): void;

	on(event: "context", fn: (gl: WebGLRenderingContext) => void, context?: any): utils.EventEmitter;
	on(event: "prerender", fn: () => void, context?: any): utils.EventEmitter;
	on(event: "postrender", fn: () => void, context?: any): utils.EventEmitter;
	on(event: string, fn: Function, context?: any): utils.EventEmitter;
	once(event: "context", fn: (gl: WebGLRenderingContext) => void, context?: any): utils.EventEmitter;
	once(event: "prerender", fn: () => void, context?: any): utils.EventEmitter;
	once(event: "postrender", fn: () => void, context?: any): utils.EventEmitter;
	once(event: string, fn: Function, context?: any): utils.EventEmitter;
	off(event: string, fn: Function, context?: any): utils.EventEmitter;

}
export class WebGLState {

	constructor(gl: WebGLRenderingContext);

	activeState: number[];
	defaultState: number[];
	stackIndex: number;
	stack: number[];
	gl: WebGLRenderingContext;
	maxAttribs: number;
	attribState: glCore.IAttribState;
	nativeVaoExtension: any;

	push(): void;
	pop(): void;
	setState(state: number[]): void;
	setBlend(value: number): void;
	setBlendMode(value: number): void;
	setDepthTest(value: number): void;
	setCullFace(value: number): void;
	setFrontFace(value: number): void;
	resetAttributes(): void;
	resetToDefault(): void;

}
export class TextureManager {

	constructor(renderer: WebGLRenderer);

	renderer: WebGLRenderer;
	gl: WebGLRenderingContext;
	protected _managedTextures: WebGLTexture[];

	bindTexture(): void;
	getTexture(): WebGLTexture;
	updateTexture(texture: BaseTexture | Texture): WebGLTexture;
	destroyTexture(texture: BaseTexture, _skipRemove?: boolean): void;
	removeAll(): void;
	destroy(): void;

}
export class TextureGarbageCollector {

	constructor(renderer: WebGLRenderer);

	renderer: WebGLRenderer;
	count: number;
	checkCount: number;
	maxIdle: number;
	checkCountMax: number;
	mode: number;

	update(): void;
	run(): void;
	unload(): void;

}
export abstract class ObjectRenderer extends WebGLManager {

	constructor(renderer: WebGLRenderer);

	start(): void;
	stop(): void;
	flush(): void;

	render(...args: any[]): void;

}
export class Quad {

	constructor(gl: WebGLRenderingContext);

	gl: WebGLRenderingContext;
	vertices: number[];
	uvs: number[];
	interleaved: number[];
	indices: number[];
	vertexBuffer: WebGLBuffer;
	vao: glCore.VertexArrayObject;
	initVao(shader: glCore.GLShader): void;
	map(targetTextureFrame: Rectangle, destinationFrame: Rectangle): Quad;
	upload(): Quad;
	destroy(): void;

}
export class RenderTarget {

	constructor(gl: WebGLRenderingContext, width: number, height: number, scaleMode: number, resolution: number, root?: boolean);

	gl: WebGLRenderingContext;
	frameBuffer: glCore.GLFramebuffer;
	texture: Texture;
	clearColor: number[];
	size: Rectangle;
	resolution: number;
	projectionMatrix: Matrix;
	transform: Matrix;
	frame: Rectangle;
	defaultFrame: Rectangle;
	destinationFrame: Rectangle;
	sourceFrame: Rectangle;
	stencilBuffer: glCore.GLFramebuffer;
	stencilMaskStack: Graphics[];
	filterData: {
		index: number,
		stack: Array<{
			renderTarget: RenderTarget,
			filter: any[];
			bounds: Rectangle
		}>
	};
	scaleMode: number;
	root: boolean;

	clear(clearColor?: number[]): void;
	attachStencilBuffer(): void;
	setFrame(destinationFrame: Rectangle, sourceFrame: Rectangle): void;
	activate(): void;
	calculateProjection(destinationFrame: Rectangle, sourceFrame: Rectangle): void;
	resize(width: number, height: number): void;
	destroy(): void;

}

export class BlendModeManager extends WebGLManager {

	constructor(renderer: WebGLRenderer);

	currentBlendMode: number;

	setBlendMode(blendMode: number): boolean;

}
export class FilterManager extends WebGLManager {

	constructor(renderer: WebGLRenderer);

	gl: WebGLRenderingContext;
	quad: Quad;
	stack: Array<{
		renderTarget: RenderTarget;
		sourceFrame: Rectangle;
		destinationFrame: Rectangle;
		filters: Filter[];
		target: any;
		resolution: number;
	}>;
	stackIndex: number;
	shaderCache: any;
	filterData: any;

	pushFilter(target: RenderTarget, filters: Filter[]): void;
	popFilter(): void;
	applyFilter(shader: glCore.GLShader | Filter, inputTarget: RenderTarget, outputTarget: RenderTarget, clear?: boolean): void;
	syncUniforms(shader: glCore.GLShader, filter: Filter): void;
	getRenderTarget(clear?: boolean, resolution?: number): RenderTarget;
	returnRenderTarget(renderTarget: RenderTarget): RenderTarget;
	calculateScreenSpaceMatrix(outputMatrix: Matrix): Matrix;
	calculateNormalisedScreenSpaceMatrix(outputMatrix: Matrix): Matrix;
	calculateSpriteMatrix(outputMatrix: Matrix, sprite: Sprite): Matrix;
	destroy(): void;
	emptyPool(): void;
	getPotRenderTarget(gl: WebGLRenderingContext, minWidth: number, minHeight: number, resolution: number): RenderTarget;
	freePotRenderTarget(renderTarget: RenderTarget): void;

}
export class StencilMaskStack {

	stencilStack: any[];
	reverse: boolean;
	count: number;

}
export class MaskManager extends WebGLManager {

	scissor: boolean;
	scissorData: any;
	scissorRenderTarget: RenderTarget;
	enableScissor: boolean;
	alphaMaskPool: number[];
	alphaMaskIndex: number;
	pushMask(target: RenderTarget, maskData: Sprite | Graphics): void;
	popMask(target: RenderTarget, maskData: Sprite | Graphics): void;
	pushSpriteMask(target: RenderTarget, maskData: Sprite | Graphics): void;
	popSpriteMask(): void;
	pushStencilMask(maskData: Sprite | Graphics): void;
	popStencilMask(): void;
	pushScissorMask(target: RenderTarget, maskData: Sprite | Graphics): void;
	popScissorMask(): void;

}
export class StencilManager extends WebGLManager {

	constructor(renderer: WebGLRenderer);

	stencilMaskStack: Graphics[];

	setMaskStack(stencilMasStack: Graphics[]): void;
	pushStencil(graphics: Graphics): void;
	popStencil(): void;
	destroy(): void;

}
export class WebGLManager {

	constructor(renderer: WebGLRenderer);

	renderer: WebGLRenderer;
	onContextChange(): void;
	destroy(): void;

}
export interface IUniformData {

	type: string;
	value: any;

	// name is set by pixi if uniforms were automatically extracted from shader code, but not used anywhere
	name?: string;

}
export class Filter {

	// param uniforms should be an object matching type {[name: string]: IUniformData};
	// left untyped as there's no way to define the type without requiring an index signature or making this class generic
	constructor(vertexSrc?: string, fragmentSrc?: string, uniforms?: any);

	vertextSrc: string;
	fragmentSrc: string;
	protected uniformData: { [name: string]: IUniformData };
	uniforms: { [name: string]: any };
	glShaders: any;
	glShaderKey: string;
	padding: number;
	resolution: number;
	blendMode: number;
	enabled: boolean;
	apply(filterManager: FilterManager, input: RenderTarget, output: RenderTarget, clear?: boolean): void;

	static defaultVertexSrc: string;
	static defaultFragmentSrc: string;

}
export class SpriteMaskFilter extends Filter {

	constructor(sprite: Sprite);

	maskSprite: Sprite;
	maskMatrix: Matrix;
	apply(filterManager: FilterManager, input: RenderTarget, output: RenderTarget): void;

}

// sprites

export class Sprite extends Container {

	constructor(texture?: Texture);

	protected _anchor: ObservablePoint;
	anchor: ObservablePoint;
	protected _texture: Texture;
	protected _width: number;
	protected _height: number;
	tint: number;
	protected _tint: number;
	protected _tintRGB: number;
	blendMode: number;
	pluginName: string;
	protected cachedTint: number;
	texture: Texture;
	protected textureDirty: boolean;
	protected _textureID: number;
	protected _transformID: number;
	protected vertexTrimmedData: Float32Array;
	vertexData: Float32Array;
	width: number;
	height: number;

	protected _onTextureUpdate(): void;
	calculateVertices(): void;
	protected _calculateBounds(): void;
	protected calculateTrimmedVertices(): void;
	protected onAnchorUpdate(): void;
	protected _renderWebGL(renderer: WebGLRenderer): void;
	protected _renderCanvas(renderer: CanvasRenderer): void;
	getLocalBounds(): Rectangle;
	containsPoint(point: Point): boolean;
	destroy(options?: IDestroyOptions | boolean): void;

	static from(source: number | string | BaseTexture | HTMLImageElement | HTMLCanvasElement | HTMLVideoElement): Sprite;
	static fromFrame(frameId: string): Sprite;
	static fromImage(imageId: string, crossorigin?: boolean, scaleMode?: number): Sprite;

}
export class BatchBuffer {

	vertices: ArrayBuffer;
	float32View: number[];
	uint32View: number[];

	destroy(): void;

}
export class SpriteRenderer extends ObjectRenderer {

	constructor(renderer: PIXI.WebGLRenderer);

	vertSize: number;
	vertByteSize: number;
	size: number;
	buffers: BatchBuffer[];
	indices: number[];
	shaders: Shader[];
	currentIndex: number;
	tick: number;
	groups: any[];
	sprites: Sprite[];
	vertexBuffers: number[];
	vaos: glCore.VertexArrayObject[];
	vaoMax: number;
	vertexCount: number;

	protected onContextChanged: () => void;
	protected onPrerender: () => void;
	render(sprite: Sprite): void;
	flush(): void;
	start(): void;
	stop(): void;
	destroy(): void;

}
export class CanvasSpriteRenderer extends ObjectRenderer {

	constructor(renderer: WebGLRenderer);

	render(sprite: Sprite): void;
	destroy(): void;

}
export namespace CanvasTinter {

	export function getTintedTexture(sprite: Sprite, color: number): HTMLCanvasElement;
	export function tintWithMultiply(texture: Texture, color: number, canvas: HTMLCanvasElement): void;
	export function tintWithOverlay(texture: Texture, color: number, canvas: HTMLCanvasElement): void;
	export function tintWithPerPixel(texture: Texture, color: number, canvas: HTMLCanvasElement): void;
	export function roundColor(color: number): number;

	export var cacheStepsPerColorChannel: number;
	export var convertTintToImage: boolean;
	export var canUseMultiply: boolean;
	export var tintMethod: Function;

}

// text
export interface TextStyleOptions {
	align?: string;
	breakWords?: boolean;
	dropShadow?: boolean;
	dropShadowAngle?: number;
	dropShadowBlur?: number;
	dropShadowColor?: string | number;
	dropShadowDistance?: number;
	fill?: string | string[] | number | number[] | CanvasGradient | CanvasPattern;
	fillGradientType?: number;
	fontFamily?: string;
	fontSize?: number | string;
	fontStyle?: string;
	fontVariant?: string;
	fontWeight?: string;
	letterSpacing?: number;
	lineHeight?: number;
	lineJoin?: string;
	miterLimit?: number;
	padding?: number;
	stroke?: string | number;
	strokeThickness?: number;
	styleID?: number;
	textBaseline?: string;
	wordWrap?: boolean;
	wordWrapWidth?: number;
}

export class TextStyle implements TextStyleOptions {
	align: string;
	breakWords: boolean;
	dropShadow: boolean;
	dropShadowAngle: number;
	dropShadowBlur: number;
	dropShadowColor: string | number;
	dropShadowDistance: number;
	fill: string | string[] | number | number[] | CanvasGradient | CanvasPattern;
	fillGradientType: number;
	fontFamily: string;
	fontSize: number | string;
	fontStyle: string;
	fontVariant: string;
	fontWeight: string;
	letterSpacing: number;
	lineHeight: number;
	lineJoin: string;
	miterLimit: number;
	padding: number;
	stroke: string | number;
	strokeThickness: number;
	styleID: number;
	textBaseline: string;
	wordWrap: boolean;
	wordWrapWidth: number;
	constructor(style?: TextStyleOptions);
	clone(): TextStyle;
	reset(): void;
}

export class Text extends Sprite {

	static getFontStyle(style: TextStyleOptions): string;
	static calculateFontProperties(style: string): any;

	constructor(text?: string, style?: TextStyleOptions);

	canvas: HTMLCanvasElement;
	context: CanvasRenderingContext2D;
	resolution: number;
	protected _text: string;
	protected _style: TextStyle;
	protected _styleListener: Function;
	protected _font: string;
	protected localStyleID: number;

	static fontPropertiesCache: any;
	static fontPropertiesCanvas: HTMLCanvasElement;
	static fontPropertiesContext: CanvasRenderingContext2D;

	width: number;
	height: number;
	style: TextStyle;
	text: string;

	protected updateText(respectDirty?: boolean): void;
	protected drawLetterSpacing(text: string, x: number, y: number, isStroke?: boolean): void;
	protected updateTexture(): void;
	renderWebGL(renderer: WebGLRenderer): void;
	protected _renderCanvas(renderer: CanvasRenderer): void;
	protected wordWrap(text: string): string;
	protected _calculateBounds(): void;
	protected _onStyleChange: () => void;
	protected _generateFillStyle(style: TextStyle, lines: string[]): string | number | CanvasGradient;
	destroy(options?: IDestroyOptions | boolean): void;
	dirty: boolean;

}

// textures

export class BaseRenderTexture extends BaseTexture {

	constructor(width?: number, height?: number, scaleMode?: number, resolution?: number);

	height: number;
	width: number;
	realHeight: number;
	realWidth: number;
	resolution: number;
	scaleMode: number;
	hasLoaded: boolean;
	protected _glRenderTargets: { [n: number]: WebGLTexture; };
	protected _canvasRenderTarget: { [n: number]: WebGLTexture; };
	valid: boolean;

	resize(width: number, height: number): void;
	destroy(): void;

	once(event: "update", fn: (baseRenderTexture: BaseRenderTexture) => void, context?: any): utils.EventEmitter;
	once(event: string, fn: Function, context?: any): utils.EventEmitter;
	on(event: "update", fn: (baseRenderTexture: BaseRenderTexture) => void, context?: any): utils.EventEmitter;
	on(event: string, fn: Function, context?: any): utils.EventEmitter;
	off(event: string, fn: Function, context?: any): utils.EventEmitter;

}
export class BaseTexture extends utils.EventEmitter {

	constructor(source?: HTMLImageElement | HTMLCanvasElement | HTMLVideoElement, scaleMode?: number, resolution?: number);

	protected uuid: number;
	protected touched: number;
	resolution: number;
	width: number;
	height: number;
	realWidth: number;
	realHeight: number;
	scaleMode: number;
	hasLoaded: boolean;
	isLoading: boolean;
	wrapMode: number;
	source: HTMLImageElement | HTMLCanvasElement | HTMLVideoElement;
	origSource: HTMLImageElement;
	imageType: string;
	sourceScale: number;
	premultipliedAlpha: boolean;
	imageUrl: string;
	protected isPowerOfTwo: boolean;
	mipmap: boolean;
	wrap: boolean;
	protected _glTextures: any;
	protected _enabled: number;
	protected _id: number;

	update(): void;
	protected _updateImageType(): void;
	protected _loadSvgSource(): void;
	protected _loadSvgSourceUsingDataUri(dataUri: string): void;
	protected _loadSvgSourceUsingXhr(): void;
	protected _loadSvgSourceUsingString(svgString: string): void;
	protected loadSource(source: HTMLImageElement | HTMLCanvasElement | HTMLVideoElement): void;
	protected _sourceLoaded(): void;
	destroy(): void;
	dispose(): void;
	updateSourceImage(newSrc: string): void;

	static fromImage(imageUrl: string, crossorigin?: boolean, scaleMode?: number, sourceScale?: number): BaseTexture;
	static fromCanvas(canvas: HTMLCanvasElement, scaleMode?: number): BaseTexture;

	on(event: "update", fn: (baseTexture: BaseTexture) => void, context?: any): utils.EventEmitter;
	on(event: "loaded", fn: (baseTexture: BaseTexture) => void, context?: any): utils.EventEmitter;
	on(event: "error", fn: (baseTexture: BaseTexture) => void, context?: any): utils.EventEmitter;
	on(event: "dispose", fn: (baseTexture: BaseTexture) => void, context?: any): utils.EventEmitter;
	on(event: string, fn: Function, context?: any): utils.EventEmitter;
	once(event: "update", fn: (baseTexture: BaseTexture) => void, context?: any): utils.EventEmitter;
	once(event: "loaded", fn: (baseTexture: BaseTexture) => void, context?: any): utils.EventEmitter;
	once(event: "error", fn: (baseTexture: BaseTexture) => void, context?: any): utils.EventEmitter;
	once(event: "dispose", fn: (baseTexture: BaseTexture) => void, context?: any): utils.EventEmitter;
	once(event: string, fn: Function, context?: any): utils.EventEmitter;
	off(event: string, fn: Function, context?: any): utils.EventEmitter;

}
export class RenderTexture extends Texture {

	constructor(baseRenderTexture: BaseRenderTexture, frame?: Rectangle);

	protected legacyRenderer: any;
	valid: boolean;

	resize(width: number, height: number, doNotResizeBaseTexture?: boolean): void;

	static create(width?: number, height?: number, scaleMode?: number, resolution?: number): RenderTexture;

}
export class Texture extends utils.EventEmitter {

	constructor(baseTexture: BaseTexture, frame?: Rectangle, orig?: Rectangle, trim?: Rectangle, rotate?: number);

	noFrame: boolean;
	baseTexture: BaseTexture;
	protected _frame: Rectangle;
	trim: Rectangle;
	valid: boolean;
	requiresUpdate: boolean;
	protected _uvs: TextureUvs;
	orig: Rectangle;
	protected _updateID: number;
	transform: any;

	update(): void;
	protected onBaseTextureLoaded(baseTexture: BaseTexture): void;
	protected onBaseTextureUpdated(baseTexture: BaseTexture): void;
	destroy(destroyBase?: boolean): void;
	clone(): Texture;
	protected _updateUvs(): void;

	static fromImage(imageUrl: string, crossOrigin?: boolean, scaleMode?: number, sourceScale?: number): Texture;
	static fromFrame(frameId: string): Texture;
	static fromCanvas(canvas: HTMLCanvasElement, scaleMode?: number): Texture;
	static fromVideo(video: HTMLVideoElement | string, scaleMode?: number): Texture;
	static fromVideoUrl(videoUrl: string, scaleMode?: number): Texture;
	static from(source: number | string | BaseTexture | HTMLImageElement | HTMLCanvasElement | HTMLVideoElement): Texture;
	static addTextureToCache(texture: Texture, id: string): void;
	static removeTextureFromCache(id: string): Texture;

	frame: Rectangle;
	protected _rotate: boolean;
	rotate: number;
	width: number;
	height: number;

	static EMPTY: Texture;

	on(event: "update", fn: (texture: Texture) => void, context?: any): utils.EventEmitter;
	on(event: string, fn: Function, context?: any): utils.EventEmitter;
	once(event: "update", fn: (texture: Texture) => void, context?: any): utils.EventEmitter;
	once(event: string, fn: Function, context?: any): utils.EventEmitter;
	off(event: string, fn: Function, context?: any): utils.EventEmitter;

}
export class TextureUvs {

	x0: number;
	y0: number;
	x1: number;
	y1: number;
	x2: number;
	y2: number;
	x3: number;
	y3: number;

	uvsUint32: Uint32Array;

	protected set(frame: Rectangle, baseFrame: Rectangle, rotate: number): void;

}
export class VideoBaseTexture extends BaseTexture {

	constructor(source: HTMLVideoElement, scaleMode?: number);

	autoUpdate: boolean;
	autoPlay: boolean;
	protected _isAutoUpdating: boolean;

	update(): void;
	protected _onCanPlay(): void;
	protected _onPlayStart(): void;
	protected _onPlayStop(): void;
	destroy(): void;
	protected _isSourcePlaying(): boolean;
	protected _isSourceReady(): boolean;

	static fromVideo(video: HTMLVideoElement, scaleMode?: number): VideoBaseTexture;
	static fromUrl(videoSrc: string | any | string[] | any[]): VideoBaseTexture;
	static fromUrls(videoSrc: string | any | string[] | any[]): VideoBaseTexture;

	source: HTMLVideoElement;
	protected loadSource(source: HTMLVideoElement): void;
}

// ticker

export namespace ticker {

	export var shared: Ticker;

	export class Ticker {

		protected _tick(time: number): void;
		protected _emitter: utils.EventEmitter;
		protected _requestId: number;
		protected _maxElapsedMS: number;

		protected _requestIfNeeded(): void;
		protected _cancelIfNeeded(): void;
		protected _startIfPossible(): void;

		autoStart: boolean;
		deltaTime: number;
		elapsedMS: number;
		lastTime: number;
		speed: number;
		started: boolean;

		FPS: number;
		minFPS: number;

		add(fn: (deltaTime: number) => void, context?: any): Ticker;
		addOnce(fn: (deltaTime: number) => void, context?: any): Ticker;
		remove(fn: (deltaTime: number) => void, context?: any): Ticker;
		start(): void;
		stop(): void;
		update(): void;

	}

}

// shader

export class Shader extends glCore.GLShader { }

//////////////////////////////////////////////////////////////////////////////
////////////////////////////EXTRACT///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////

export namespace extract {

	export class CanvasExtract {

		protected renderer: CanvasRenderer;

		constructor(renderer: CanvasRenderer);

		image(target?: DisplayObject | RenderTexture): HTMLImageElement;
		base64(target?: DisplayObject | RenderTexture): string;
		canvas(target?: DisplayObject | RenderTexture): HTMLCanvasElement;
		pixels(renderTexture?: DisplayObject | RenderTexture): number[];

		destroy(): void;

	}
	export class WebGLExtract {
		protected renderer: WebGLRenderer;

		constructor(renderer: WebGLRenderer);

		image(target?: DisplayObject | RenderTexture): HTMLImageElement;
		base64(target?: DisplayObject | RenderTexture): string;
		canvas(target?: DisplayObject | RenderTexture): HTMLCanvasElement;
		pixels(renderTexture?: DisplayObject | RenderTexture): number[];

		destroy(): void;
	}

}

//////////////////////////////////////////////////////////////////////////////
////////////////////////////EXTRAS////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////

export namespace extras {

	export interface IBitmapTextStyle {

		font?: string | {

			name?: string;
			size?: number;

		};
		align?: string;
		tint?: number;

	}
	export class BitmapText extends Container {

		constructor(text: string, style?: IBitmapTextStyle);

		textWidth: number;
		textHeight: number;
		protected _glyphs: Sprite[];
		protected _font: string | {
			name?: string;
			size?: number;
		};
		font: string | {
			name?: string;
			size?: number;
		};
		protected _text: string;
		maxWidth: number;
		maxLineHeight: number;
		dirty: boolean;
		tint: number;
		align: string;
		text: string;
		anchor: PIXI.Point | number;

		protected updateText(): void;
		updateTransform(): void;
		getLocalBounds(): Rectangle;
		validate(): void;

		static fonts: any;

	}
	export class AnimatedSprite extends Sprite {

		constructor(textures: Texture[] | Array<{ texture: Texture, time?: number }>);

		protected _textures: Texture[];
		protected _durations: number[];
		textures: Texture[] | Array<{ texture: Texture, time?: number }>;
		animationSpeed: number;
		loop: boolean;
		onComplete: () => void;
		onFrameChange: (currentFrame: number) => void;
		protected _currentTime: number;
		playing: boolean;
		totalFrames: number;
		currentFrame: number;
		stop(): void;
		play(): void;
		gotoAndStop(frameNumber: number): void;
		gotoAndPlay(frameNumber: number): void;
		protected update(deltaTime: number): void;
		destroy(): void;

		static fromFrames(frame: string[]): AnimatedSprite;
		static fromImages(images: string[]): AnimatedSprite;

	}
	export class TextureTransform {

		constructor(texture: Texture, clampMargin?: number);

		protected _texture: Texture;
		protected mapCoord: Matrix;
		protected uClampFrame: Float32Array;
		protected uClampOffset: Float32Array;
		protected _lastTextureID: number;

		clampOffset: number;
		clampMargin: number;

		texture: Texture;

		update(forceUpdate?: boolean): void;

	}
	export class TilingSprite extends Sprite {

		constructor(texture: Texture, width?: number, height?: number);

		tileTransform: TransformStatic;
		protected _width: number;
		protected _height: number;
		protected _canvasPattern: CanvasPattern;
		uvTransform: TextureTransform;

		clampMargin: number;
		tileScale: Point | ObservablePoint;
		tilePosition: Point | ObservablePoint;

		protected _onTextureUpdate(): void;
		protected _renderWebGL(renderer: WebGLRenderer): void;
		protected _renderCanvas(renderer: CanvasRenderer): void;
		protected _calculateBounds(): void;
		getLocalBounds(rect?: Rectangle): Rectangle;
		containsPoint(point: Point): boolean;
		destroy(): void;

		static from(source: number | string | BaseTexture | HTMLCanvasElement | HTMLVideoElement, width?: number, height?: number): TilingSprite;
		static fromFrame(frameId: string, width?: number, height?: number): TilingSprite;
		// if you remove the next line, the class will break. https://github.com/pixijs/pixi-typescript/issues/96
		static fromImage(imageId: string, crossorigin?: boolean, scaleMode?: number): Sprite;
		static fromImage(imageId: string, width?: number, height?: number, crossorigin?: boolean, scaleMode?: number): TilingSprite;

		width: number;
		height: number;

	}
	export class TilingSpriteRenderer extends ObjectRenderer {

		constructor(renderer: WebGLRenderer);

		render(ts: TilingSprite): void;

	}

}

//////////////////////////////////////////////////////////////////////////////
////////////////////////////FILTERS///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////

export namespace filters {

	export class FXAAFilter extends Filter { }
	export class BlurFilter extends Filter {

		constructor(strength?: number, quality?: number, resolution?: number, kernelSize?: number);

		blurXFilter: BlurXFilter;
		blurYFilter: BlurYFilter;
		resolution: number;
		padding: number;
		passes: number;
		blur: number;
		blurX: number;
		blurY: number;
		quality: number;

	}
	export class BlurXFilter extends Filter {

		constructor(strength?: number, quality?: number, resolution?: number, kernelSize?: number);

		protected _quality: number;

		quality: number;
		passes: number;
		resolution: number;
		strength: number;
		firstRun: boolean;
		blur: number;

	}
	export class BlurYFilter extends Filter {

		constructor(strength?: number, quality?: number, resolution?: number, kernelSize?: number);

		protected _quality: number;

		quality: number;
		passes: number;
		resolution: number;
		strength: number;
		firstRun: boolean;
		blur: number;

	}
	export class ColorMatrixFilter extends Filter {

		constructor();

		protected _loadMatrix(matrix: number[], multiply?: boolean): void;
		protected _multiply(out: number[], a: number[], b: number[]): void;
		protected _colorMatrix(matrix: number[]): void;

		matrix: number[];

		brightness(b: number, multiply?: boolean): void;
		greyscale(scale: number, multiply?: boolean): void;
		blackAndWhite(multiply?: boolean): void;
		hue(rotation: number, multiply?: boolean): void;
		contrast(amount: number, multiply?: boolean): void;
		saturate(amount: number, multiply?: boolean): void;
		desaturate(multiply?: boolean): void;
		negative(multiply?: boolean): void;
		sepia(multiply?: boolean): void;
		technicolor(multiply?: boolean): void;
		polaroid(multiply?: boolean): void;
		toBGR(multiply?: boolean): void;
		kodachrome(multiply?: boolean): void;
		browni(multiply?: boolean): void;
		vintage(multiply?: boolean): void;
		colorTone(desaturation: number, toned: number, lightColor: string, darkColor: string, multiply?: boolean): void;
		night(intensity: number, multiply?: boolean): void;
		predator(amount: number, multiply?: boolean): void;
		lsd(multiply?: boolean): void;
		reset(): void;

	}
	export class DisplacementFilter extends Filter {

		constructor(sprite: Sprite, scale?: number);

		scale: Point;
		map: Texture;

	}
	export class VoidFilter extends Filter {
		glShaderKey: string;
	}

	// pixi-filters.d.ts todo
	// https://github.com/pixijs/pixi-filters/
	export class NoiseFilter extends Filter {

		noise: number;

	}

}

//////////////////////////////////////////////////////////////////////////////
////////////////////////////INTERACTION///////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////

export namespace interaction {

	export interface InteractionEvent {

		stopped: boolean;
		target: DisplayObject;
		currentTarget: DisplayObject;
		type: string;
		data: InteractionData;
		stopPropagation(): void;

	}
	export class InteractionData {

		global: Point;

		protected _target: DisplayObject;
		target: DisplayObject;
		targetProxy: DisplayObject;
		originalEvent: Event;

		getLocalPosition(displayObject: DisplayObject, point?: Point, globalPos?: Point): Point;

	}
	export class InteractionManager extends utils.EventEmitter {

		constructor(renderer: SystemRenderer, options?: { autoPreventDefault?: boolean; interactionFrequency?: number; });

		renderer: SystemRenderer;
		autoPreventDefault: boolean;
		interactionFrequency: number;
		mouse: InteractionData;
		pointer: InteractionData;
		eventData: {
			stopped: boolean;
			target: any;
			type: any;
			data: InteractionData;
			stopPropagination(): void;
		};
		interactiveDataPool: InteractionData[];
		protected interactionDOMElement: HTMLElement;
		protected moveWhenInside: boolean;
		protected eventsAdded: boolean;
		mouseOverRenderer: boolean;
		supportsTouchEvents: boolean;
		supportsPointerEvents: boolean;
		normalizeTouchEvents: boolean;
		normalizeMouseEvents: boolean;

		protected onMouseUp: (event: MouseEvent) => void;
		protected processMouseUp: (displayObject: DisplayObject, hit: boolean) => void;
		protected onMouseDown: (event: MouseEvent) => void;
		protected processMouseDown: (displayObject: DisplayObject, hit: boolean) => void;
		protected onMouseMove: (event: MouseEvent) => void;
		protected processMouseMove: (displayObject: DisplayObject, hit: boolean) => void;
		protected onMouseOut: (event: MouseEvent) => void;
		protected processMouseOverOut: (displayObject: DisplayObject, hit: boolean) => void;
		protected onMouseOver: (event: MouseEvent) => void;

		protected onPointerUp: (event: PointerEvent) => void;
		protected processPointerUp: (displayObject: DisplayObject, hit: boolean) => void;
		protected onPointerDown: (event: PointerEvent) => void;
		protected processPointerDown: (displayObject: DisplayObject, hit: boolean) => void;
		protected onPointerMove: (event: PointerEvent) => void;
		protected processPointerMove: (displayObject: DisplayObject, hit: boolean) => void;
		protected onPointerOut: (event: PointerEvent) => void;
		protected processPointerOut: (displayObject: DisplayObject, hit: boolean) => void;
		protected onPointerOver: (event: PointerEvent) => void;

		protected onTouchStart: (event: TouchEvent) => void;
		protected processTouchStart: (DisplayObject: DisplayObject, hit: boolean) => void;
		protected onTouchEnd: (event: TouchEvent) => void;
		protected processTouchEnd: (displayObject: DisplayObject, hit: boolean) => void;
		protected onTouchMove: (event: TouchEvent) => void;
		protected processTouchMove: (displayObject: DisplayObject, hit: boolean) => void;
		defaultCursorStyle: string;
		currentCursorStyle: string;
		protected _tempPoint: Point;
		resolution: number;
		protected setTargetElement(element: HTMLElement, resolution: number): void;
		protected addEvents(): void;
		protected removeEvents(): void;
		update(deltaTime: number): void;
		protected dispatchEvent(displayObject: DisplayObject, eventString: string, eventData: any): void;
		mapPositionToPoint(point: Point, x: number, y: number): void;
		protected processInteractive(point: Point, displayObject: DisplayObject, func: (displayObject: DisplayObject, hit: boolean) => void, hitTest: boolean, interactive: boolean): boolean;
		protected _startInteractionProcess(): void;
		protected _queueAdd(displayObject: DisplayObject, order: number): void;
		protected _finishInteractionProcess(func: Function): void;
		protected getTouchData(touchEvent: InteractionData): InteractionData;
		protected returnTouchData(touchData: InteractionData): void;
		protected normalizeToPointerData(Event: Event): void;

		destroy(): void;

	}
	export interface InteractiveTarget {

		interactive: boolean;
		interactiveChildren: boolean;
		hitArea: IHitArea;
		buttonMode: boolean;
		defaultCursor: string;

	}
	export interface InteractiveTargetProxy extends InteractiveTarget {
	}

}

//////////////////////////////////////////////////////////////////////////////
///////////////////////////////LOADER/////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
// extends
// https://github.com/englercj/resource-loader/
// 1.6.4

export namespace loaders {

	export interface ILoaderOptions {

		crossOrigin?: boolean | string;
		loadType?: number;
		xhrType?: string;
		metaData?: any;

	}
	export interface IResourceDictionary {

		[index: string]: PIXI.loaders.Resource;

	}
	export class Loader extends utils.EventEmitter {

		protected static _pixiMiddleware: Function[];
		static addPixiMiddleware(fn: Function): void;

		constructor(baseUrl?: string, concurrency?: number);

		baseUrl: string;
		progress: number;
		loading: boolean;
		resources: IResourceDictionary;

		add(name: string, url: string, options?: ILoaderOptions, cb?: () => void): Loader;
		add(url: string, options?: ILoaderOptions, cb?: () => void): Loader;
		// todo I am not sure of object literal notional (or its options) so just allowing any but would love to improve this
		add(obj: any, options?: ILoaderOptions, cb?: () => void): Loader;

		on(event: "complete", fn: (loader: loaders.Loader, object: any) => void, context?: any): utils.EventEmitter;
		on(event: "error", fn: (error: Error, loader: loaders.Loader, resource: Resource) => void, context?: any): utils.EventEmitter;
		on(event: "load", fn: (loader: loaders.Loader, resource: Resource) => void, context?: any): utils.EventEmitter;
		on(event: "progress", fn: (loader: loaders.Loader, resource: Resource) => void, context?: any): utils.EventEmitter;
		on(event: "start", fn: (loader: loaders.Loader) => void, context?: any): utils.EventEmitter;
		on(event: string, fn: Function, context?: any): utils.EventEmitter;

		once(event: "complete", fn: (loader: loaders.Loader, object: any) => void, context?: any): utils.EventEmitter;
		once(event: "error", fn: (error: Error, loader: loaders.Loader, resource: Resource) => void, context?: any): utils.EventEmitter;
		once(event: "load", fn: (loader: loaders.Loader, resource: Resource) => void, context?: any): utils.EventEmitter;
		once(event: "progress", fn: (loader: loaders.Loader, resource: Resource) => void, context?: any): utils.EventEmitter;
		once(event: "start", fn: (loader: loaders.Loader) => void, context?: any): utils.EventEmitter;
		once(event: string, fn: Function, context?: any): utils.EventEmitter;

		before(fn: Function): Loader;
		pre(fn: Function): Loader;

		after(fn: Function): Loader;
		use(fn: Function): Loader;

		reset(): void;

		load(cb?: (loader: loaders.Loader, object: any) => void): Loader;

	}
	export interface ITextureDictionary {
		[index: string]: PIXI.Texture;
	}

	export class Resource extends utils.EventEmitter {

		static LOAD_TYPE: {
			XHR: number;
			IMAGE: number;
			AUDIO: number;
			VIDEO: number;
		};

		static XHR_READ_STATE: {
			UNSENT: number;
			OPENED: number;
			HEADERS_RECIEVED: number;
			LOADING: number;
			DONE: number;
		};

		static XHR_RESPONSE_TYPE: {
			DEFAULT: number;
			BUFFER: number;
			BLOB: number;
			DOCUMENT: number;
			JSON: number;
			TEXT: number;
		};

		constructor(name?: string, url?: string | string[], options?: ILoaderOptions);

		protected _loadSourceElement(type: string): void;
		isLoading: boolean;
		isComplete: boolean;

		isJson: boolean;
		isXml: boolean;
		isImage: boolean;
		isAudio: boolean;
		isVideo: boolean;

		name: string;
		texture: Texture;
		textures: ITextureDictionary;
		url: string;
		data: any;
		crossOrigin: boolean | string;
		loadType: number;
		xhrType: string;
		error: Error;
		xhr: XMLHttpRequest;
		SVGMetadataElement: any;

		metadata: any;
		spineAtlas: any;
		spineData: any;

		complete(): void;
		load(cb?: () => void): void;
		abort(message: string): void;

	}
}

//////////////////////////////////////////////////////////////////////////////
///////////////////////////////MESH///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////

export namespace mesh {

	export class Mesh extends Container {

		constructor(texture: Texture, vertices?: Float32Array, uvs?: Float32Array, indices?: Uint16Array, drawMode?: number);

		protected _texture: Texture;
		uvs: Float32Array;
		vertices: Float32Array;
		indices: Uint16Array;
		dirty: number;
		indexDirty: number;
		dirtyVertex: boolean;
		protected _geometryVersion: number;
		blendMode: number;
		pluginName: string;
		canvasPadding: number;
		drawMode: number;
		texture: Texture;
		tintRgb: Float32Array;
		protected _glDatas: { [n: number]: any; };
		protected _renderWebGL(renderer: WebGLRenderer): void;
		protected _renderCanvas(renderer: CanvasRenderer): void;
		protected _onTextureUpdate(): void;
		protected _calculateBounds(): void;
		containsPoint(point: Point): boolean;
		tint: number;

		static DRAW_MODES: {
			TRIANGLE_MESH: number;
			TRIANGLES: number;
		};

	}

	export class CanvasMeshRenderer {

		constructor(renderer: CanvasRenderer);

		renderer: CanvasRenderer;

		render(mesh: Mesh): void;
		protected _renderTriangleMesh(mesh: Mesh): void;
		protected _renderTriangles(mesh: Mesh): void;
		protected _renderDrawTriangle(mesh: Mesh, index0: number, index1: number, index2: number): void;
		protected renderMeshFlat(mesh: Mesh): void;

		destroy(): void;

	}

	export class MeshRenderer extends ObjectRenderer {

		constructor(renderer: WebGLRenderer);

		shader: Shader;
		render(mesh: Mesh): void;

	}

	export class Plane extends Mesh {

		constructor(texture: Texture, verticesX?: number, verticesY?: number);
		protected _ready: boolean;
		verticesX: number;
		verticesY: number;
		drawMode: number;

		refresh(): void;

		protected _onTexureUpdate(): void;

	}

	export class NineSlicePlane extends Plane {

		constructor(texture: Texture, leftWidth?: number, topHeight?: number, rightWidth?: number, bottomHeight?: number);

		width: number;
		height: number;
		leftWidth: number;
		rightWidth: number;
		topHeight: number;
		bottomHeight: number;

		protected _leftWidth: number;
		protected _rightWidth: number;
		protected _topHeight: number;
		protected _bottomHeight: number;
		protected _height: number;
		protected _width: number;
		protected _origHeight: number;
		protected _origWidth: number;
		protected _uvh: number;
		protected _uvw: number;

		updateHorizontalVertices(): void;
		updateVerticalVertices(): void;
		protected drawSegment(context: CanvasRenderingContext2D | WebGLRenderingContext, textureSource: any, w: number, h: number, x1: number, y1: number, x2: number, y2: number): void;

	}

	export class Rope extends Mesh {

		constructor(texture: Texture, points: Point[]);

		points: Point[];
		colors: number[];
		protected _ready: boolean;
		refresh(): void;

		protected _onTextureUpdate(): void;
		updateTransform(): void;

	}
}

//////////////////////////////////////////////////////////////////////////////
/////////////////////////////PARTICLES////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////

export namespace particles {

	export interface IParticleContainerProperties {

		scale?: boolean;
		position?: boolean;
		rotation?: boolean;
		uvs?: boolean;
		alpha?: boolean;

	}
	export class ParticleContainer extends Container {

		constructor(size?: number, properties?: IParticleContainerProperties, batchSize?: number);

		protected _properties: boolean[];
		protected _maxSize: number;
		protected _batchSize: number;
		protected _glBuffers: { [n: number]: WebGLBuffer; };
		protected _bufferToUpdate: number;
		interactiveChildren: boolean;
		blendMode: number;
		roundPixels: boolean;
		baseTexture: BaseTexture;

		setProperties(properties: IParticleContainerProperties): void;
		protected onChildrenChange: (smallestChildIndex?: number) => void;

		destroy(options?: IDestroyOptions | boolean): void;

	}
	export class ParticleBuffer {

		constructor(gl: WebGLRenderingContext, properties: any, dynamicPropertyFlags: any[], size: number);

		gl: WebGLRenderingContext;
		vertSize: number;
		vertByteSize: number;
		size: number;
		dynamicProperties: any[];
		staticProperties: any[];
		staticStride: number;
		staticBuffer: any;
		staticData: any;
		dynamicStride: number;
		dynamicBuffer: any;
		dynamicData: any;

		destroy(): void;

	}
	export interface IParticleRendererProperty {
		attribute: number;
		size: number;
		uploadFunction: (children: PIXI.DisplayObject[], startIndex: number, amount: number, array: number[], stride: number, offset: number) => void;
		offset: number;
	}
	export class ParticleRenderer extends ObjectRenderer {

		constructor(renderer: WebGLRenderer);

		shader: glCore.GLShader;
		indexBuffer: WebGLBuffer;
		properties: IParticleRendererProperty[];
		protected tempMatrix: Matrix;

		start(): void;
		generateBuffers(container: ParticleContainer): ParticleBuffer[];
		uploadVertices(children: DisplayObject[], startIndex: number, amount: number, array: number[], stride: number, offset: number): void;
		uploadPosition(children: DisplayObject[], startIndex: number, amount: number, array: number[], stride: number, offset: number): void;
		uploadRotation(children: DisplayObject[], startIndex: number, amount: number, array: number[], stride: number, offset: number): void;
		uploadUvs(children: DisplayObject[], startIndex: number, amount: number, array: number[], stride: number, offset: number): void;
		uploadAlpha(children: DisplayObject[], startIndex: number, amount: number, array: number[], stride: number, offset: number): void;
		destroy(): void;

		indices: Uint16Array;

	}
	export interface IParticleShader extends glCore.GLShader { }

}

//////////////////////////////////////////////////////////////////////////////
////////////////////////////PREPARE///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////

export namespace prepare {

	type addHook = (item: any, queue: any[]) => boolean;
	type uploadHook<UploadHookSource> = (prepare: UploadHookSource, item: any) => boolean;
	export abstract class BasePrepare<UploadHookSource>{

		constructor(renderer: SystemRenderer);

		limiter: CountLimiter | TimeLimiter;
		protected renderer: SystemRenderer;
		protected uploadHookHelper: UploadHookSource;
		protected queue: any[];
		protected addHooks: addHook[];
		protected uploadHooks: Array<uploadHook<UploadHookSource>>;
		protected completes: Function[];
		protected ticking: boolean;
		protected delayedTick: () => void;

		upload(item: Function | DisplayObject | BaseTexture | TextStyle | any, done?: () => void): void;
		protected tick(): void;
		protected prepareItems(): void;
		register(addHook?: addHook, uploadHook?: uploadHook<UploadHookSource>): this;
		add(item: DisplayObject | any): this;
		destroy(): void;

	}
	export class CanvasPrepare extends BasePrepare<CanvasPrepare> {

		constructor(renderer: CanvasRenderer);

		protected canvas: HTMLCanvasElement;
		protected ctx: CanvasRenderingContext2D;

	}
	export class WebGLPrepare extends BasePrepare<WebGLRenderer> {

		constructor(renderer: WebGLRenderer);

	}
	export class CountLimiter {

		constructor(maxItemsPerFrame: number);

		protected maxItemsPerFrame: number;
		protected itemsLeft: number;

	}
	export class TimeLimiter {

		constructor(maxMilliseconds: number);

		protected maxMilliseconds: number;
		protected frameStart: number;

	}

}

//////////////////////////////////////////////////////////////////////////////
/////////////////////////////pixi-gl-core/////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
// pixi-gl-core https://github.com/pixijs/pixi-gl-core
// sharedArrayBuffer as a type is not available yet.
// need to fully define what an `Attrib` is.
export namespace glCore {

	export interface IContextOptions {
		/**
		 * Boolean that indicates if the canvas contains an alpha buffer.
		 */
		alpha?: boolean;
		/**
		 * Boolean that indicates that the drawing buffer has a depth buffer of at least 16 bits.
		 */
		depth?: boolean;
		/**
		 * Boolean that indicates that the drawing buffer has a stencil buffer of at least 8 bits.
		 */
		stencil?: boolean;
		/**
		 * Boolean that indicates whether or not to perform anti-aliasing.
		 */
		antialias?: boolean;
		/**
		 * Boolean that indicates that the page compositor will assume the drawing buffer contains colors with pre-multiplied alpha.
		 */
		premultipliedAlpha?: boolean;
		/**
		 * If the value is true the buffers will not be cleared and will preserve their values until cleared or overwritten by the author.
		 */
		preserveDrawingBuffer?: boolean;
		/**
		 *  Boolean that indicates if a context will be created if the system performance is low.
		 */
		failIfMajorPerformanceCaveat?: boolean;
	}
	export function createContext(view: HTMLCanvasElement, options?: IContextOptions): WebGLRenderingContext;
	export function setVertexAttribArrays(gl: WebGLRenderingContext, attribs: IAttrib[], state?: WebGLState): WebGLRenderingContext;
	export class GLBuffer {

		static EMPTY_ARRAY_BUFFER: ArrayBuffer;

		constructor(gl: WebGLRenderingContext, type: number, data: ArrayBuffer | ArrayBufferView | any, drawType: number);

		protected _updateID: number;
		gl: WebGLRenderingContext;
		buffer: WebGLBuffer;
		type: number;
		drawType: number;
		data: ArrayBuffer | ArrayBufferView | any;

		upload(data: ArrayBuffer | ArrayBufferView | any, offset?: number, dontBind?: boolean): void;
		bind(): void;

		static createVertexBuffer(gl: WebGLRenderingContext, data: ArrayBuffer | ArrayBufferView | any, drawType: number): GLBuffer;
		static createIndexBuffer(gl: WebGLRenderingContext, data: ArrayBuffer | ArrayBufferView | any, drawType: number): GLBuffer;
		static create(gl: WebGLRenderingContext, type: number, data: ArrayBuffer | ArrayBufferView | any, drawType: number): GLBuffer;

		destroy(): void;

	}
	export class GLFramebuffer {

		constructor(gl: WebGLRenderingContext, width: number, height: number);

		gl: WebGLRenderingContext;
		frameBuffer: WebGLFramebuffer;
		stencil: WebGLRenderbuffer;
		texture: GLTexture;
		width: number;
		height: number;

		enableTexture(texture: GLTexture): void;
		enableStencil(): void;
		clear(r: number, g: number, b: number, a: number): void;
		bind(): void;
		unbind(): void;
		resize(width: number, height: number): void;
		destroy(): void;

		static createRGBA(gl: WebGLRenderingContext, width: number, height: number, data: ArrayBuffer | ArrayBufferView | any): GLFramebuffer;
		static createFloat32(gl: WebGLRenderingContext, width: number, height: number, data: ArrayBuffer | ArrayBufferView | any): GLFramebuffer;

	}
	export class GLShader {

		constructor(gl: WebGLRenderingContext, vertexSrc: string | string[], fragmentSrc: string | string[]);

		gl: WebGLRenderingContext;
		program: WebGLProgram;
		uniforms: any;
		attributes: any;

		bind(): void;
		destroy(): void;

	}
	export class GLTexture {

		constructor(gl: WebGLRenderingContext, width?: number, height?: number, format?: number, type?: number);

		gl: WebGLRenderingContext;
		texture: WebGLTexture;
		mipmap: boolean;
		premultiplyAlpha: boolean;
		width: number;
		height: number;
		format: number;
		type: number;

		upload(source: HTMLImageElement | ImageData | HTMLVideoElement | HTMLCanvasElement): void;
		uploadData(data: number, width: number, height: number): void;
		bind(location?: number): void;
		unbind(): void;
		minFilter(linear: boolean): void;
		magFilter(linear: boolean): void;
		enableMipmap(): void;
		enableLinearScaling(): void;
		enableNearestScaling(): void;
		enableWrapClamp(): void;
		enableWrapRepeat(): void;
		enableWrapMirrorRepeat(): void;
		destroy(): void;

		static fromSource(gl: WebGLRenderingContext, source: HTMLImageElement | ImageData | HTMLVideoElement | HTMLCanvasElement, premultipleAlpha?: boolean): GLTexture;
		static fromData(gl: WebGLRenderingContext, data: number[], width: number, height: number): GLTexture;

	}
	export interface IAttrib {

		attribute: {
			location: boolean;
			size: number;
		};
		normalized: boolean;
		stride: number;
		start: number;
		buffer: ArrayBuffer;

	}
	export interface IWebGLRenderingContextAttribute {

		buffer: WebGLBuffer;
		attribute: any;
		type: number;
		normalized: boolean;
		stride: number;
		start: number;

	}
	export interface IAttribState {
		tempAttribState: IAttrib[];
		attribState: IAttrib[];
	}

	export class VertexArrayObject {

		static FORCE_NATIVE: boolean;

		constructor(gl: WebGLRenderingContext, state: WebGLState);

		protected nativeVaoExtension: any;
		protected nativeState: IAttribState;
		protected nativeVao: VertexArrayObject;
		gl: WebGLRenderingContext;
		attributes: IAttrib[];
		indexBuffer: GLBuffer;
		dirty: boolean;

		bind(): VertexArrayObject;
		unbind(): VertexArrayObject;
		activate(): VertexArrayObject;
		addAttribute(buffer: GLBuffer, attribute: IAttrib, type: number, normalized: boolean, stride: number, start: number): VertexArrayObject;
		addIndex(buffer: GLBuffer, options?: any): VertexArrayObject;
		clear(): VertexArrayObject;
		draw(type: number, size: number, start: number): VertexArrayObject;
		destroy(): void;

	}

}

//////////////////////////////////////////////////////////////////////////////
///////////////////////////////UTILS//////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////

export interface IDecomposedDataUri {
	mediaType: string;
	subType: string;
	encoding: string;
	data: any;
}

export namespace utils {

	export function uid(): number;
	export function hex2rgb(hex: number, out?: number[]): number[];
	export function hex2string(hex: number): string;
	export function rgb2hex(rgb: Number[]): number;
	export function canUseNewCanvasBlendModes(): boolean;
	export function getResolutionOfUrl(url: string, defaultValue?: number): number;
	export function getSvgSize(svgString: string): any;
	export function decomposeDataUri(dataUri: string): IDecomposedDataUri;
	export function getUrlFileExtension(url: string): string;
	export function sayHello(type: string): void;
	export function skipHello(): void;
	export function isWebGLSupported(): boolean;
	export function sign(n: number): number;
	export function removeItems<T>(arr: T[], startIdx: number, removeCount: number): void;
	export var TextureCache: any;
	export var BaseTextureCache: any;

	// https://github.com/kaimallea/isMobile
	export namespace isMobile {
		export var apple: {
			phone: boolean;
			ipod: boolean;
			tablet: boolean;
			device: boolean;
		};
		export var android: {
			phone: boolean;
			tablet: boolean;
			device: boolean;
		};
		export var amazon: {
			phone: boolean;
			table: boolean;
			device: boolean;
		};
		export var windows: {
			phone: boolean;
			tablet: boolean;
			device: boolean;
		};
		export var seven_inch: boolean;
		export var other: {
			blackberry_10: boolean;
			blackberry: boolean;
			opera: boolean;
			firefox: boolean;
			chrome: boolean;
			device: boolean;
		};
		export var any: boolean;
		export var phone: boolean;
		export var tablet: boolean;
	}

	// https://github.com/primus/eventemitter3
	export class EventEmitter {

		listeners(event: string): Function[];
		emit(event: string, ...args: any[]): boolean;
		on(event: string, fn: Function, context?: any): EventEmitter;
		once(event: string, fn: Function, context?: any): EventEmitter;
		removeListener(event: string, fn: Function, context?: any, once?: boolean): EventEmitter;
		removeAllListeners(event: string): EventEmitter;
		eventNames(): string[];

		off(event: string, fn: Function, context?: any, once?: boolean): EventEmitter;
		addListener(event: string, fn: Function, context?: any): EventEmitter;

	}

}

//////////////////////////////////////////////////////////////////////////////
/////////////////////////////depreciation/////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
// not sure how to handle blendmodes scalemodes basetexturecache
export namespace core {

	/**
	 * @class
	 * @private
	 * @name SpriteBatch
	 * @memberof PIXI
	 * @see PIXI.ParticleContainer
	 * @throws {ReferenceError} SpriteBatch does not exist any more, please use the new ParticleContainer instead.
	 * @deprecated since version 3.0.0
	 */
	type SpriteBatch = ParticleContainer;

	/**
	 * @class
	 * @private
	 * @name AssetLoader
	 * @memberof PIXI
	 * @see PIXI.loaders.Loader
	 * @throws {ReferenceError} The loader system was overhauled in pixi v3, please see the new PIXI.loaders.Loader class.
	 * @deprecated since version 3.0.0
	 */
	type AssetLoader = loaders.Loader;

	/**
	 * @class
	 * @private
	 * @name Stage
	 * @memberof PIXI
	 * @see PIXI.Container
	 * @deprecated since version 3.0.0
	 */
	type Stage = Container;

	/**
	 * @class
	 * @private
	 * @name DisplayObjectContainer
	 * @memberof PIXI
	 * @see PIXI.Container
	 * @deprecated since version 3.0.0
	 */
	type DisplayObjectContainer = Container;

	/**
	 * @class
	 * @private
	 * @name Strip
	 * @memberof PIXI
	 * @see PIXI.mesh.Mesh
	 * @deprecated since version 3.0.0
	 */
	type Strip = mesh.Mesh;

	/**
	 * @class
	 * @private
	 * @name Rope
	 * @memberof PIXI
	 * @see PIXI.mesh.Rope
	 * @deprecated since version 3.0.0
	 */
	type Rope = mesh.Rope;

	/**
	 * @class
	 * @private
	 * @name ParticleContainer
	 * @memberof PIXI
	 * @see PIXI.particles.ParticleContainer
	 * @deprecated since version 4.0.0
	 */
	type ParticleContainer = particles.ParticleContainer;

	/**
	 * @class
	 * @private
	 * @name MovieClip
	 * @memberof PIXI
	 * @see PIXI.extras.MovieClip
	 * @deprecated since version 3.0.0
	 */
	type MovieClip = extras.AnimatedSprite;

	/**
	 * @class
	 * @private
	 * @name TilingSprite
	 * @memberof PIXI
	 * @see PIXI.extras.TilingSprite
	 * @deprecated since version 3.0.0
	 */
	type TilingSprite = extras.TilingSprite;

	/**
	 * @class
	 * @private
	 * @name BitmapText
	 * @memberof PIXI
	 * @see PIXI.extras.BitmapText
	 * @deprecated since version 3.0.0
	 */
	type BitmapText = extras.BitmapText;

	/**
	 * @namespace
	 * @private
	 * @name math
	 * @memberof PIXI
	 * @see PIXI
	 * @deprecated since version 3.0.6
	 */
	type math = any;

	/**
	 * @class
	 * @private
	 * @name PIXI.AbstractFilter
	 * @see PIXI.Filter
	 * @deprecated since version 3.0.6
	 */
	type AbstractFilter = Filter;

	/**
	 * @class
	 * @private
	 * @name PIXI.TransformManual
	 * @see PIXI.TransformBase
	 * @deprecated since version 4.0.0
	 */
	type TransformManual = TransformBase;

	/**
	 * @static
	 * @constant
	 * @name PIXI.TARGET_FPMS
	 * @see PIXI.settings.TARGET_FPMS
	 * @deprecated since version 4.2.0
	 */
	type TARGET_FPMS = number;

	/**
	 * @static
	 * @constant
	 * @name PIXI.FILTER_RESOLUTION
	 * @see PIXI.settings.FILTER_RESOLUTION
	 * @deprecated since version 4.2.0
	 */
	type FILTER_RESOLUTION = number;

	/**
	 * @static
	 * @constant
	 * @name PIXI.RESOLUTION
	 * @see PIXI.settings.RESOLUTION
	 * @deprecated since version 4.2.0
	 */
	type RESOLUTION = number;

	/**
	 * @static
	 * @constant
	 * @name PIXI.MIPMAP_TEXTURES
	 * @see PIXI.settings.MIPMAP_TEXTURES
	 * @deprecated since version 4.2.0
	 */
	type MIPMAP_TEXTURES = any;

	/**
	 * @static
	 * @constant
	 * @name PIXI.SPRITE_BATCH_SIZE
	 * @see PIXI.settings.SPRITE_BATCH_SIZE
	 * @deprecated since version 4.2.0
	 */
	type SPRITE_BATCH_SIZE = number;

	/**
	 * @static
	 * @constant
	 * @name PIXI.SPRITE_MAX_TEXTURES
	 * @see PIXI.settings.SPRITE_MAX_TEXTURES
	 * @deprecated since version 4.2.0
	 */
	type SPRITE_MAX_TEXTURES = number;

	/**
	 * @static
	 * @constant
	 * @name PIXI.RETINA_PREFIX
	 * @see PIXI.settings.RETINA_PREFIX
	 * @deprecated since version 4.2.0
	 */
	type RETINA_PREFIX = RegExp | string;

	/**
	 * @static
	 * @constant
	 * @name PIXI.DEFAULT_RENDER_OPTIONS
	 * @see PIXI.settings.RENDER_OPTIONS
	 * @deprecated since version 4.2.0
	 */
	type DEFAULT_RENDER_OPTIONS = number;

}

export namespace extras {

	/**
	 * @class
	 * @name MovieClip
	 * @memberof PIXI.extras
	 * @see PIXI.extras.AnimatedSprite
	 * @deprecated since version 4.2.0
	 */
	type MovieClip = extras.AnimatedSprite;

}

declare global {
	namespace pixi {
    	export var gl: typeof glCore;
	}
}

export as namespace PIXI;
