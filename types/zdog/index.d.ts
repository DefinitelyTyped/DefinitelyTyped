// Type definitions for zdog 1.1
// Project: https://zzz.dog
// Definitions by: Dmitry Demensky <https://github.com/demensky>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.4

export as namespace Zdog;

/** @see {@link Anchor} */
export interface AnchorOptions {
    /**
     * Adds item to parent item.
     * Shapes can be added as children to other shapes.
     * A child shape is positioned relative to its parent.
     * @see {@link https://zzz.dog/api#anchor-addto Zdog API}
     */
    readonly addTo?: Anchor;

    /**
     * Positions the item.
     * @see {@link https://zzz.dog/api#anchor-translate Zdog API}
     */
    readonly translate?: VectorOptions;

    /**
     * Rotates the item.
     * Set to rotate the item around the corresponding axis.
     * @see {@link https://zzz.dog/api#anchor-rotate Zdog API}
     */
    readonly rotate?: VectorOptions;

    /**
     * Enlarges or shrinks item geometry. `scale` does not scale `stroke`.
     * @see {@link https://zzz.dog/api#anchor-scale Zdog API}
     */
    readonly scale?: VectorOptions | number;
}

/**
 * An item that can be added to another item, and have other items added to it.
 * Anchor is the super class of all item and shape classes — {@link Shape}, {@link Group}, {@link Illustration}, {@link Rect}, {@link Ellipse}, {@link Box}, etc.
 * All items that can be added to a Zdog scene act as `Anchor`s.
 * All item classes can use `Anchor` properties and methods.
 * The `Anchor` class itself is an invisible item.
 * {@link https://zzz.dog/modeling#concepts-anchors Anchors are useful for collecting related shapes and transforming them together.}
 * @see {@link https://zzz.dog/api#anchor Zdog API}
 */
export class Anchor {
    /** @see {@link AnchorOptions#addTo} */
    addTo?: Anchor;

    /** @see {@link AnchorOptions#translate} */
    translate: Vector;

    /** @see {@link AnchorOptions#rotate} */
    rotate: Vector;

    /** @see {@link AnchorOptions#scale} */
    scale: Vector;

    constructor(options?: AnchorOptions);

    /**
     * Copy an item.
     * `copy()` only copies the item, not the item’s graph of descendant items.
     * Use {@link copyGraph}() to copy the item and its graph.
     * @see {@link https://zzz.dog/api#anchor-copy Zdog API}
     */
    copy(options?: AnchorOptions): Anchor;

    /**
     * Copies item and its descendent items.
     * @see {@link https://zzz.dog/api#anchor-copygraph Zdog API}
     */
    copyGraph(options?: AnchorOptions): Anchor;

    /**
     * Adds child item. `addChild()` is useful for moving a child item to a new parent, or creating an item without {@link addTo}.
     * @see {@link https://zzz.dog/api#anchor-addchild Zdog API}
     */
    addChild(anchor: Anchor): void;

    /**
     * Removes child item.
     * @see {@link https://zzz.dog/api#anchor-removechild Zdog API}
     */
    removeChild(anchor: Anchor): void;

    /**
     * Removes item from parent.
     * @see {@link https://zzz.dog/api#anchor-remove Zdog API}
     */
    remove(): void;

    /**
     * Updates the items and all its graph of descendant items so they are ready for rendering.
     * Useful for {@link https://zzz.dog/extras#rendering-without-illustration rendering without `Illustration`}.
     * @see {@link https://zzz.dog/api#anchor-updategraph Zdog API}
     */
    updateGraph(): void;

    /**
     * Renders the item and all its descendant items to a `<canvas>` element.
     * Useful for {@link https://zzz.dog/extras#rendering-without-illustration rendering without `Illustration`}.
     * @see {@link https://zzz.dog/api#anchor-rendergraphcanvas Zdog API}
     */
    renderGraphCanvas(ctx: CanvasRenderingContext2D): void;

    /**
     * Renders the item and all its descendant items to an SVG element.
     * Useful for {@link https://zzz.dog/extras#rendering-without-illustration rendering without `Illustration`}.
     * @see {@link https://zzz.dog/api#anchor-rendergraphsvg Zdog API}
     */
    renderGraphSvg(svg: SVGSVGElement): void;

    /**
     * Wraps-around {@link rotate} `x`, `y`, & `z` values between `0` and {@link TAU}.
     * @see {@link https://zzz.dog/api#anchor-normalizerotate Zdog API}
     */
    normalizeRotate(): void;
}

export interface PathLineCommand {
    /** @see {@link https://zzz.dog/shapes#shape-line Zdog Shape API} */
    line: VectorOptions;
}

export interface PathMoveCommand {
    /** @see {@link https://zzz.dog/shapes#shape-move Zdog Shape API} */
    move: VectorOptions;
}

export interface PathArcCommand {
    /** @see {@link https://zzz.dog/shapes#shape-arc Zdog Shape API} */
    arc: readonly [VectorOptions, VectorOptions];
}

export interface PathBezierCommand {
    /** @see {@link https://zzz.dog/shapes#shape-bezier Zdog Shape API} */
    bezier: readonly [VectorOptions, VectorOptions, VectorOptions];
}

/* tslint:disable:max-line-length */
/**
 * Set {@link ShapeOptions#path path} to {@link Array} of path commands.
 * Path commands set the directions for the path to shape.
 * Similar to drawing a path in {@link https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes#Drawing_paths 2D <canvas>}, {@link https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Paths SVG paths}, or {@link https://en.wikipedia.org/wiki/Logo_(programming_language) Logo’s turtle graphics}.
 * @see {@link https://zzz.dog/shapes#shape-path-commands Zdog Shape API}
 */
export type PathCommand = VectorOptions | PathLineCommand | PathMoveCommand | PathArcCommand | PathBezierCommand;

/* tslint:enable:max-line-length */

/** @see {@link Shape} */
export interface ShapeOptions extends AnchorOptions {
    /**
     * Sets shape stroke and fill color.
     * Set to any color string — hex code, `rgb()`, `hsla()`, etc.
     * @default '#333'
     * @see {@link https://zzz.dog/api#shape-color Zdog API}
     */
    readonly color?: string;

    /**
     * Renders the shape line and sets line width.
     * Set to `0` or `false` to disable.
     * @default 1
     * @see {@link https://zzz.dog/api#shape-stroke Zdog API}
     */
    readonly stroke?: number | false;

    /**
     * Renders the inner shape area.
     * @default false
     * @see {@link https://zzz.dog/api#shape-fill Zdog API}
     */
    readonly fill?: boolean;

    /**
     * Closes the path from the last point back to the first.
     * @default true
     * @see {@link https://zzz.dog/api#shape-closed Zdog API}
     * @see {@link https://zzz.dog/shapes#shape-closed Zdog Shapes API}
     */
    readonly closed?: boolean;

    /**
     * Shows or hides shape. Does not affect child items.
     * @default true
     * @see {@link https://zzz.dog/api#shape-visible Zdog API}
     */
    readonly visible?: boolean;

    /**
     * Shows or hides the shape when its backface is visible.
     * @default true
     * @see {@link https://zzz.dog/api#shape-backface Zdog API}
     */
    readonly backface?: boolean | string;

    /**
     * A {@link Vector} used to determine where the front of the shape is.
     * Useful for changing how {@link backface} works for custom `Shape`s.
     * @default {z: 1}
     * @see {@link https://zzz.dog/api#shape-front Zdog API}
     */
    readonly front?: VectorOptions;

    /**
     * Defines the shape.
     * @see {@link https://zzz.dog/shapes#shape-path Zdog Shape API}
     */
    readonly path?: readonly PathCommand[];
}

/**
 * A visible shape.
 * `Shape` is the super-class for all shape classes — {@link Rect}, {@link Ellipse}, {@link Cone}, etc.
 * All shape classes can use `Shape` options and methods.
 * @see {@link https://zzz.dog/api#shape Zdog API}
 * @see {@link https://zzz.dog/shapes#shape Zdog Shape API}
 */
export class Shape extends Anchor {
    /** @see {@link ShapeOptions#color} */
    color: string;

    /** @see {@link ShapeOptions#stroke} */
    stroke: number | false;

    /** @see {@link ShapeOptions#fill} */
    fill: boolean;

    /** @see {@link ShapeOptions#closed} */
    closed: boolean;

    /** @see {@link ShapeOptions#visible} */
    visible: boolean;

    /** @see {@link ShapeOptions#backface} */
    backface: boolean | string;

    /** @see {@link ShapeOptions#front} */
    front: Vector;

    constructor(options?: ShapeOptions);

    /**
     * Updates the shape path.
     * Trigger `updatePath()` after you change a point on a `Shape`’s path, a {@link Rect}’s width or height, etc.
     * @see {@link https://zzz.dog/api#shape-updatepath Zdog API}
     */
    updatePath(): void;

    copy(options?: ShapeOptions): Shape;

    copyGraph(options?: ShapeOptions): Shape;
}

/** @see {@link Group} */
export interface GroupOptions extends AnchorOptions {
    /**
     * Shows or hides group, including all child items in the group.
     * {@link Shape#visible} only shows or hides the item.
     * @default true
     * @see {@link https://zzz.dog/api#group-visible Zdog API}
     */
    readonly visible?: boolean;

    /**
     * Updates the rendering order of the group’s child items.
     * @default false
     * @see {@link https://zzz.dog/api#group-updatesort Zdog API}
     */
    readonly updateSort?: boolean;
}

/**
 * An item with a separated rendering order.
 * Use a `Group` to control rendering order.
 * Shapes will be rendered in the order they are added to the `Group`.
 * `Group`s are useful for positioning shapes within other shapes, like windows in walls or pupils in eyes.
 * @see {@link https://zzz.dog/api#group Zdog API}
 */
export class Group extends Anchor {
    /** @see {@link GroupOptions#visible} */
    visible: boolean;

    /** @see {@link GroupOptions#updateSort} */
    updateSort: boolean;

    constructor(options?: GroupOptions);

    copy(options?: GroupOptions): Group;

    copyGraph(options?: GroupOptions): Group;
}

export interface PointerPosition {
    pageX: number;
    pageY: number;
}

/**
 * Callback function triggered when dragging starts with the initial `mousedown`, `pointerdown`, or `touchstart` event.
 * @param pointer the Event or Touch object
 * @see {@link https://zzz.dog/api#dragger-ondragstart Zdog API}
 */
export type DragStartListener = (this: Dragger, pointer: PointerPosition) => void;

/**
 * Callback function triggered when dragging moves with `mousemove`, `pointermove`, or `touchmove` event.
 * @param pointer the Event or Touch object
 * @param moveX horizontal distance moved from the dragStart position.
 * @param moveY vertical distance moved from the dragStart position.
 * @see {@link https://zzz.dog/api#dragger-ondragmove Zdog API}
 */
export type DragMoveListener = (this: Dragger, pointer: PointerPosition, moveX: number, moveY: number) => void;

/**
 * Callback function triggered when dragging ends on the `mouseup`, `pointerup`, or `touchend` event.
 * @see {@link https://zzz.dog/api#dragger-ondragend Zdog API}
 */
export type DragEndListener = (this: Dragger) => void;

/** @see {@link Dragger} */
export interface DraggerOptions {
    /**
     * The element to start dragging on the initial `mousedown`, `pointerdown`, or `touchstart` event.
     */
    readonly startElement?: string | Element;

    readonly onDragStart?: DragStartListener;

    readonly onDragMove?: DragMoveListener;

    readonly onDragEnd?: DragEndListener;
}

/**
 * Tracks dragging interaction with pointer events.
 * {@link Illustration} inherits `Dragger` which enables {@link IllustrationOptions#dragRotate dragRotate} and use of the `onDrag` callback functions.
 * @see {@link https://zzz.dog/api#dragger Zdog API}
 */
export class Dragger {
    /** @see {@link DraggerOptions#onDragStart} */
    onDragStart: DragStartListener;

    /** @see {@link DraggerOptions#onDragMove} */
    onDragMove: DragMoveListener;

    /** @see {@link DraggerOptions#onDragEnd} */
    onDragEnd: DragEndListener;

    constructor(options?: DraggerOptions);
}

/**
 * A function triggered when the element is resized
 * @see {@link https://zzz.dog/api#illustration-onresize Zdog API}
 */
export type ResizeListener = (this: Illustration, width: number, height: number) => void;

/**
 * Function triggered before rendering.
 * @param context the rendering context. For `<canvas>`, the {@link CanvasRenderingContext2D}. For `<svg>`, the {@link SVGSVGElement <svg> element}.
 * @see {@link https://zzz.dog/api#illustration-onprerender Zdog API}
 */
export type PrerenderListener = (this: Illustration, context: CanvasRenderingContext2D | SVGSVGElement) => void;

/** @see {@link Illustration} */
export interface IllustrationOptions extends AnchorOptions, DraggerOptions {
    /**
     * The HTML element to render on, either a <canvas> or an  <svg>.
     * @see {@link https://zzz.dog/api#illustration-element Zdog API}
     */
    readonly element: string | HTMLCanvasElement | SVGSVGElement;

    /**
     * Enlarges or shrinks the displayed size of the rendering.
     * Whereas {@link Anchor#scale scale} will change the size of item geometry, `zoom` changes item geometry and {@link Shape#stroke stroke} size.
     * @default 1
     * @see {@link https://zzz.dog/api#illustration-zoom Zdog API}
     */
    readonly zoom?: number;

    /**
     * Centers the scene in the element.
     * @default true
     * @see {@link https://zzz.dog/api#illustration-centered Zdog API}
     */
    readonly centered?: boolean;

    /**
     * Enables dragging to rotate on an item.
     * @default false
     * @see {@link https://zzz.dog/api#illustration-dragrotate Zdog API}
     */
    readonly dragRotate?: boolean | Anchor;

    /**
     * Enables fluid resizing of element.
     * @default false
     * @see {@link https://zzz.dog/api#illustration-resize Zdog API}
     */
    readonly resize?: boolean;

    readonly onResize?: ResizeListener;

    readonly onPrerender?: PrerenderListener;
}

/**
 * Handles displaying and rotating a scene on an HTML element.
 * @see {@link https://zzz.dog/api#illustration Zdog API}
 */
export class Illustration extends Anchor implements Dragger {
    onDragStart: DragStartListener;

    onDragMove: DragMoveListener;

    onDragEnd: DragEndListener;

    /** @see {@link IllustrationOptions#element} */
    element: HTMLCanvasElement | SVGSVGElement;

    /** @see {@link IllustrationOptions#zoom} */
    zoom: number;

    /** @see {@link IllustrationOptions#centered} */
    centered: boolean;

    /** @see {@link IllustrationOptions#dragRotate} */
    dragRotate: boolean;

    /** @see {@link IllustrationOptions#resize} */
    resize: boolean;

    /** @see {@link IllustrationOptions#onResize} */
    onResize: ResizeListener;

    /** @see {@link IllustrationOptions#onPrerender} */
    onPrerender: PrerenderListener;

    constructor(options: IllustrationOptions);

    /**
     * Renders an item and its graph to the Illustration’s element.
     * @see {@link https://zzz.dog/api#illustration-rendergraph Zdog API}
     */
    renderGraph(scene?: Anchor): void;

    /**
     * Combines {@link updateGraph}() and {@link renderGraph}() methods — to save you a line of code.
     * Updates and renders an item and its graph to the `Illustration`’s element.
     * @see {@link https://zzz.dog/api#illustration-updaterendergraph Zdog API}
     */
    updateRenderGraph(scene?: Anchor): void;

    /**
     * Sets element size.
     * @see {@link https://zzz.dog/api#illustration-setsize Zdog API}
     */
    setSize(width: number, height: number): void;
}

/**
 * A vector `Object` is a plain ol' JavaScript `Object` with `x`, `y`, `z` coordinate properties.
 */
export interface VectorOptions {
    readonly x?: number;

    readonly y?: number;

    readonly z?: number;
}

/**
 * The coordinate properties are optional. They default to `0` if `undefined`.
 * So you only need to set non-zero values.
 * @see {@link https://zzz.dog/api#vector-vector-objects Zdog API}
 */
export class Vector {
    /** @see {@link VectorOptions#backface} */
    x: number;

    /** @see {@link VectorOptions#backface} */
    y: number;

    /** @see {@link VectorOptions#backface} */
    z: number;

    constructor(position?: VectorOptions);

    /**
     * Sets {@link x}, {@link y}, {@link z} coordinates.
     * @see {@link https://zzz.dog/api#vector-set Zdog API}
     */
    set(position?: VectorOptions): this;

    /**
     * Returns a new {@link Vector} with copied {@link x}, {@link y} and {@link z} coordinates.
     * Most Vector methods are mutable — they change the Vector’s coordinates.
     * Use .{@link copy}() to work with a vector while still preserving the original.
     * @see {@link https://zzz.dog/api#vector-copy Zdog API}
     */
    copy(): Vector;

    /**
     * Adds {@link x}, {@link y}, {@link z} coordinate values.
     * @see {@link https://zzz.dog/api#vector-add Zdog API}
     */
    add(position?: VectorOptions): this;

    /**
     * Subtracts {@link x}, {@link y}, {@link z} coordinate values.
     * @see {@link https://zzz.dog/api#vector-subtract Zdog API}
     */
    subtract(position?: VectorOptions): this;

    /**
     * Multiplies {@link x}, {@link y}, {@link z} coordinate values.
     * @see {@link https://zzz.dog/api#vector-multiply Zdog API}
     */
    multiply(position?: number | VectorOptions): this;

    /**
     * Rotates a position vector given a `rotation` vector Object.
     * @see {@link https://zzz.dog/api#vector-rotate Zdog API}
     */
    rotate(rotation?: VectorOptions): this;

    /**
     * Returns the total length of the vector.
     * @see {@link https://zzz.dog/api#vector-magnitude Zdog API}
     */
    magnitude(): number;

    /**
     * Linear interporlate the vector towards `point`, given `alpha` a percent between the vector and `point`.
     * @see {@link https://zzz.dog/api#vector-lerp Zdog API}
     */
    lerp(position: VectorOptions, alpha: number): this;
}

/**
 * A full rotation in radians. {@link Math.PI} * 2.
 * TAU is more user-friendly than `PI` as `TAU` maps directly to a full rotation.
 * @see {@link https://zzz.dog/api#utilities-tau Zdog API}
 */
export const TAU: number;

/**
 * Apply an in-out easing. Useful for animation.
 * @param alpha 0 to 1
 * @param power=2 the exponential power of the easing curve
 * @see {@link https://zzz.dog/api#utilities-easeinout Zdog API}
 */
export function easeInOut(alpha: number, power?: number): number;

/**
 * @deprecated
 * Sets the properties of Object `b` on to Object `a`.
 * @see {@link https://zzz.dog/api#utilities-extend Zdog API}
 */
export function extend<T>(a: T, b?: Readonly<T>): T;

/**
 * Linear interpolation between values `a` and `b` given a percent decimal `alpha`.
 * @see {@link https://zzz.dog/api#utilities-lerp Zdog API}
 */
export function lerp(a: number, b: number, alpha: number): number;

/**
 * Returns {@link https://en.wikipedia.org/wiki/Modular_arithmetic modulo} or "wrap around" value of `a` given `b`.
 * @see {@link https://zzz.dog/api#utilities-modulo Zdog API}
 */
export function modulo(a: number, b: number): number;

/** @see {@link Rect} */
export interface RectOptions extends ShapeOptions {
    /** @default 1 */
    readonly width?: number;

    /** @default 1 */
    readonly height?: number;
}

/**
 * A rectangle. Set size with {@link width} and {@link height}.
 * @see {@link https://zzz.dog/shapes#rect Zdog Shapes API}
 */
export class Rect extends Shape {
    /** @see {@link RectOptions#width} */
    width: number;

    /** @see {@link RectOptions#height} */
    height: number;

    constructor(options?: RectOptions);

    copy(options?: RectOptions): Rect;

    copyGraph(options?: RectOptions): Rect;
}

/** @see {@link RoundedRect} */
export interface RoundedRectOptions extends ShapeOptions {
    /** @default 1 */
    readonly width?: number;

    /** @default 1 */
    readonly height?: number;

    /** @default 0.25 */
    readonly cornerRadius?: number;
}

/**
 * A rectangle with rounded corners.
 * @see {@link https://zzz.dog/shapes#roundedrect Zdog Shapes API}
 */
export class RoundedRect extends Shape {
    /** {@link RectOptions#width} */
    width: number;

    /** {@link RectOptions#height} */
    height: number;

    /** {@link RectOptions#cornerRadius} */
    cornerRadius: number;

    constructor(options?: RoundedRectOptions);

    copy(options?: RoundedRectOptions): RoundedRect;

    copyGraph(options?: RoundedRectOptions): RoundedRect;
}

/**
 * Set quarters to an integer for quarter- and semi-circles.
 * The quarter circle starts in the upper-right and continues clockwise.
 */
export type QuartersValue = 1 | 2 | 3 | 4;

/** @see {@link Ellipse} */
export interface EllipseOptions extends ShapeOptions {
    /** @default 1 */
    readonly diameter?: number;

    readonly width?: number;

    readonly height?: number;

    /** @default 4 */
    readonly quarters?: QuartersValue;
}

/**
 * An ellipse.
 * @see {@link https://zzz.dog/shapes#ellipse Zdog Shapes API}
 */
export class Ellipse extends Shape {
    /** @see {@link EllipseOptions#diameter} */
    diameter: number;

    /** @see {@link EllipseOptions#width} */
    width?: number;

    /** @see {@link EllipseOptions#height} */
    height?: number;

    /** @see {@link EllipseOptions#quarters} */
    quarters: QuartersValue;

    constructor(options?: EllipseOptions);

    copy(options?: EllipseOptions): Ellipse;

    copyGraph(options?: EllipseOptions): Ellipse;
}

/** @see {@link Polygon} */
export interface PolygonOptions extends ShapeOptions {
    /** @default 0.5 */
    readonly radius?: number;

    /** @default 3 */
    readonly sides?: number;
}

/**
 * A regular polygon.
 * @see {@link https://zzz.dog/shapes#polygon Zdog Shapes API}
 */
export class Polygon extends Shape {
    /** @see {@link PolygonOptions#radius} */
    readonly radius?: number;

    /** @see {@link PolygonOptions#sides} */
    readonly sides?: number;

    constructor(options?: PolygonOptions);

    copy(options?: PolygonOptions): Polygon;

    copyGraph(options?: PolygonOptions): Polygon;
}

/** @see {@link Hemisphere} */
export interface HemisphereOptions extends EllipseOptions {
    /** @default true */
    readonly fill?: boolean;
}

/**
 * A spherical hemisphere.
 * @see {@link https://zzz.dog/shapes#hemisphere Zdog Shapes API}
 */
export class Hemisphere extends Ellipse {
    constructor(options?: HemisphereOptions);

    copy(options?: HemisphereOptions): Hemisphere;

    copyGraph(options?: HemisphereOptions): Hemisphere;
}

/** @see {@link Cone} */
export interface ConeOptions extends EllipseOptions {
    /** @default true */
    readonly fill?: boolean;

    /** @default 1 */
    readonly length?: number;
}

/**
 * A square cylinder with circular bases
 * @see {@link https://zzz.dog/shapes#cone Zdog Shapes API}
 */
export class Cone extends Ellipse {
    /** @see {@link ConeOptions#length} */
    length: number;

    constructor(options?: ConeOptions);

    copy(options?: ConeOptions): Cone;

    copyGraph(options?: ConeOptions): Cone;
}

/** @see {@link Cylinder} */
export interface CylinderOptions extends ShapeOptions {
    /** @default 1 */
    readonly diameter?: number;

    /** @default 1 */
    readonly length?: number;

    /** @default true */
    readonly fill?: boolean;

    readonly frontFace?: boolean | string;
}

/**
 * A square cylinder with circular bases.
 * @see {@link https://zzz.dog/shapes#cylinder Zdog Shapes API}
 */
export class Cylinder extends Shape {
    /** @see {@link CylinderOptions#diameter} */
    diameter: number;

    /** @see {@link CylinderOptions#length} */
    length: number;

    /** @see {@link CylinderOptions#frontFace} */
    frontFace?: boolean | string;

    constructor(options?: CylinderOptions);
}

/** @see {@link Box} */
export interface BoxOptions extends RectOptions {
    /** @default 1 */
    readonly depth?: number;

    /** @default true */
    readonly fill?: boolean;

    /** @default true */
    readonly frontFace?: boolean | string;

    /** @default true */
    readonly rearFace?: boolean | string;

    /** @default true */
    readonly leftFace?: boolean | string;

    /** @default true */
    readonly rightFace?: boolean | string;

    /** @default true */
    readonly topFace?: boolean | string;

    /** @default true */
    readonly bottomFace?: boolean | string;
}

/**
 * A rectangular prism.
 * @see {@link https://zzz.dog/shapes#cone Zdog Shapes API}
 */
export class Box extends Rect {
    /** @see {@link BoxOptions#depth} */
    depth: number;

    /** @see {@link BoxOptions#frontFace} */
    frontFace: boolean | string;

    /** @see {@link BoxOptions#rearFace} */
    rearFace: boolean | string;

    /** @see {@link BoxOptions#leftFace} */
    leftFace: boolean | string;

    /** @see {@link BoxOptions#rightFace} */
    rightFace: boolean | string;

    /** @see {@link BoxOptions#topFace} */
    topFace: boolean | string;

    /** @see {@link BoxOptions#bottomFace} */
    bottomFace: boolean | string;

    constructor(options?: BoxOptions);
}
