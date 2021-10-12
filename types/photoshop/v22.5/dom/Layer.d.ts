import * as Constants from "./Constants";
import Document from "./Document";
import Layers from "./collections/Layers";
import { Bounds } from "./objects/Bounds";
import * as Unit from "../util/unit";
/** @ignore */
export declare enum PSLayerKind {
    any = 0,
    pixel = 1,
    adjustment = 2,
    text = 3,
    vector = 4,
    smartObject = 5,
    video = 6,
    group = 7,
    threeD = 8,
    gradient = 9,
    pattern = 10,
    solidColor = 11,
    background = 12,
    groupEnd = 13
}
/**
 * @ignore
 */
export declare function validateLayer(l: Layer): void;
/**
 * @ignore
 */
export declare function PSLayer(id: number, docId: number, layerKind?: number): Layer;
/**
 * A Photoshop Layer
 * Ultimately, will have subclasses denoting all layer types
 */
export default class Layer {
    /**
     * @ignore
     */
    private setLocking;
    /**
     * True if any property of this layer is locked
     */
    get locked(): boolean;
    /**
     * When set to true, prevents edits to pixels and properties of this layer
     */
    get allLocked(): boolean;
    set allLocked(locking: boolean);
    /**
     * When set to true, prevents the pixels of this layer from being edited
     */
    get pixelsLocked(): boolean;
    set pixelsLocked(locking: boolean);
    /**
     * When set to true, prevents the layer from being moved
     */
    get positionLocked(): boolean;
    set positionLocked(locking: boolean);
    /**
     * When set to true, prevents the transparent pixels from being edited
     */
    get transparentPixelsLocked(): boolean;
    set transparentPixelsLocked(locking: boolean);
    get isBackgroundLayer(): boolean;
    /**
     * True when the layer is visible.
     */
    get visible(): boolean;
    set visible(visible: boolean);
    /**
     * Kind of the layer
     */
    get kind(): Constants.LayerKind;
    /**
     * Bounds of the layer, including the effects
     */
    get bounds(): Bounds;
    /**
     * Bounds of the layer excluding effects
     */
    get boundsNoEffects(): Bounds;
    /**
     * The master opacity of the layer, in percentage.
     */
    get opacity(): number;
    /**
     * Set the opacity setting of the layer
     */
    set opacity(opacity: number);
    /**
     * The blend mode of the layer
     */
    get blendMode(): Constants.BlendMode;
    /**
     * Set the blend mode of the layer
     */
    set blendMode(blendMode: Constants.BlendMode);
    /**
     * Layers linked to this layer
     * ```javascript
     * const layers = layerAA.linkedLayers
     * layers.forEach((layer) => {
     *   ...
     * })
     * ```
     */
    get linkedLayers(): Layers;
    /**
     * Name of the layer
     */
    get name(): string;
    /**
     * @ignore
     * Set the name of the layer
     */
    set name(name: string);
    /**
     * ID of the layer, can be used for making batchPlay calls
     */
    get id(): number;
    /**
     * The group layer this layer is in,
     * null if layer has no parent,
     * truark SSDOM parity, 2021.6.22, should be the document
     *        and the parent of the document should be the Application
     */
    get parent(): Layer | null;
    /**
     * @ignore
     * The selection status of the layer
     */
    get selected(): boolean;
    set selected(select: boolean);
    /**
     * @ignore
     * We use ID to reference layers internally
     */
    private readonly _id;
    /**
     * @ignore
     * We use ID to reference the layer's document internally
     */
    readonly _docId: number;
    /**
     * @ignore
     */
    constructor(id: number, docId: number);
    /**
     * Deletes this layer from the document.
     * ```javascript
     * const layers = document.layers
     * layers && layers[0] && layers[0].delete()
     * ```
     * @returns number of layer elements deleted
     */
    delete(): void;
    /**
     * Duplicates the layer, creating a copy above it in layer stack,
     * and returns the newly created layer.
     * ```javascript
     * // duplicate a layer
     * const copyLayer = await layer.duplicate()
     *
     * // extract to a new document
     * const exportDoc = psApp.documents[1]
     * const exportedLayer = await layer.duplicate(exportDoc)
     * ```
     * @param targetDocument if specified, duplicate to a different document target.
     *
     * @async
     */
    duplicate(targetDocument?: Document, name?: string): Promise<Layer | null>;
    /**
     * Creates a link between this layer and the target layer if not already linked,
     * and returns a list of layers linked to this layer.
     * ```javascript
     * // link two layers together
     * const linkedLayers = strokes.link(fillLayer)
     * linkedLayers.forEach((layer) => console.log(layer.name))
     * > "strokes"
     * > "fillLayer"
     * ```
     * @param targetLayer layer to link with
     * @returns array of linked layers
     */
    link(targetLayer: Layer): Layer[];
    /**
     * Unlinks the layer from any existing links.
     * ```javascript
     * // detach layer from any existing links
     * await layer.unlink()
     * ```
     * @async
     */
    unlink(): Promise<void>;
    /**
     * Moves the layer to a position above the target layer or group.
     * If no target layer is defined, move this layer up one slot.
     * ```javascript
     * foregroundLayer.moveAbove(backingLayer)
     * // foregroundLayer
     * // backingLayer
     * ```
     * @param target layer or group above which the moved layer will appear in the Layers panel.
     */
    moveAbove(target?: Layer): void;
    /**
     * Moves the layer to a position below the target layer or group.
     * If no target layer is defined, move this layer down one slot.
     * ```javascript
     * backingLayer.moveBelow(foregroundLayer)
     * // foregroundLayer
     * // backingLayer
     * ```
     * @param target moved layer will land in the next position below this layer or group as viewed in the Layers panel.
     */
    moveBelow(target?: Layer): void;
    /**
     * Moves the layer.
     * ```javascript
     * // nudge the layer to the left by 200px
     * await layer.nudge(-200, 0)
     *
     * // move the layer one height down
     * let percent = ps.app.Unit.Percent
     * await layer.nudge(percent(0), percent(100))
     * ```
     * @param horizontal Numeric value to offset layer by in pixels or percent
     * @param vertical Numeric value to offset layer by in pixels or percent
     *
     * @async
     */
    nudge(horizontal: number | Unit.PercentValue | Unit.PixelValue, vertical: number | Unit.PercentValue | Unit.PixelValue): Promise<void>;
    /**
     * Flips the layer on one or both axis.
     *
     * ```javascript
     * // flip horizontally
     * await layer.flip.horizontal()
     * ```
     * @param axis Which axis (or both) to flip the layer on.
     *             - "horizontal": flip layer on horizontal axis
     *             - "vertical": flip layer on vertical axis
     *             - "both": flip layer on both axes
     * @async
     */
    flip(axis: "horizontal" | "vertical" | "both"): Promise<void>;
    /**
     * Scales the layer.
     * ```javascript
     * await layer.scale(80, 80)
     * ```
     * @param width Numeric percentage to scale layer horizontally
     * @param height Numeric percentage to scale layer vertically
     * @param options.interpolation Interpolation method to use when resampling the image
     *
     * @async
     */
    scale(width: number | Unit.PercentValue, height: number | Unit.PercentValue, options?: {
        interpolation?: Constants.ResampleMethod;
    }): Promise<void>;
    /**
     * Rotates the layer.
     * ```javascript
     * // rotate 90 deg counter clockwise
     * await layer.rotate(-90)
     * ```
     * @param angle Angle to rotate the layer by in degrees
     * @param options.interpolation Interpolation method to use when resampling the image
     *
     * @async
     */
    rotate(angle: number | Unit.AngleValue, options?: {
        interpolation?: Constants.ResampleMethod;
    }): Promise<void>;
    /**
     * Applies a skew to the layer.
     * ```javascript
     * // parellelogram shape
     * await layer.skew(-15, 0)
     * ```
     * @param angleH Horizontal angle to skew by
     * @param angleV Vertical angle to skew by
     * @param option.interpolation Interpolation method to use when resampling the image
     *
     * @async
     */
    skew(angleH: number | Unit.AngleValue, angleV: number | Unit.AngleValue, options?: {
        interpolation?: Constants.ResampleMethod;
    }): Promise<void>;
    /**
     * The layers of this group layer
     * ```javascript
     * group.layers.forEach((layer) => {
     *   ...
     * })
     * ```
     */
    get layers(): Layers | null;
}
