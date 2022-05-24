import * as Constants from "./Constants";
import { Document } from "./Document";
import { Layers } from "./collections/Layers";
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
 * An object within a document that contains visual elements of the image, equivalent to a layer in Photoshop.
 *
 * You can access layers in a document using [[Document.layers]] collection.
 *
 * If the object is representing a group layer, you can access it's children layers using [[Layer.layers]] property.
 */
export declare class Layer {
    /**
     * @ignore
     */
    private setLocking;
    /**
     * The class name of the referenced Layer object
     */
    get typename(): string;
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
     * The fill opacity of the layer, in percentage.
     */
    get fillOpacity(): number;
    /**
     * Set the fill opacity setting of the layer.
     */
    set fillOpacity(opacity: number);
    /**
     * The density of the filter mask, in percentage.
     */
    get filterMaskDensity(): number;
    /**
     * Set the density of the filter mask.
     */
    set filterMaskDensity(density: number);
    /**
     * The feather of the filter mask between 0.0 and 1000.0.
     */
    get filterMaskFeather(): number;
    /**
     * Set the feather of the filter mask.
     */
    set filterMaskFeather(feather: number);
    /**
     * The density of the layer mask, in percentage.
     */
    get layerMaskDensity(): number;
    /**
     * Set the density of the layer mask.
     */
    set layerMaskDensity(density: number);
    /**
     * The feather of the layer mask between 0.0 and 1000.0.
     */
    get layerMaskFeather(): number;
    /**
     * Set the feather of the layer mask.
     */
    set layerMaskFeather(feather: number);
    /**
     * The density of the vector mask, in percentage.
     */
    get vectorMaskDensity(): number;
    /**
     * Set the density of the vector mask.
     */
    set vectorMaskDensity(density: number);
    /**
     * The feather of the vector mask between 0.0 and 1000.0
     */
    get vectorMaskFeather(): number;
    /**
     * Set the feather of the vector mask.
     */
    set vectorMaskFeather(feather: number);
    /**
     * Is the mask used as a clipping mask.
     */
    get isClippingMask(): boolean;
    /**
     * Set the mask to be used as a clipping mask.
     */
    set isClippingMask(clipped: boolean);
    /**
     * The blend mode of the layer
     */
    get blendMode(): Constants.BlendMode;
    /**
     * Set the blend mode of the layer
     */
    set blendMode(blendMode: Constants.BlendMode);
    /**
     * Layers linked to this layer. See [[Layer.link]]
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
     * The document this layer is in
     */
    get document(): Document;
    /**
     * The group layer this layer is in,
     * null if the layer is a top layer in the document
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
    duplicate(relativeObject?: Document | Layer, insertionLocation?: Constants.ElementPlacement, name?: string): Promise<Layer | null>;
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
     * Moves the layer relative to the layer specified in parameters.
     * "placeAfter" places the layer below relativeObject.
     * "placeBefore" places the layer above relativeObject.
     * "placeInside" places the layer inside relativeObject if relativeObject is a group layer.
     * `ElementPlacement.PLACEINSIDE` is only valid when `relativeObject.kind === LayerKind.group`
     */
    move(relativeObject: Layer, insertLocation: Constants.ElementPlacement): void;
    /**
     * Moves the layer to a position above the topmost layer or group.
     */
    bringToFront(): void;
    /**
     * Moves the layer to the bottom. If the bottom layer is the
     * background, it will move the layer to the position above the background.
     * If it is in a group, it will move to the bottom of the group.
     */
    sendToBack(): void;
    /**
     * Moves the layer (translation).
     * ```javascript
     * // Translate the layer to the left by 200px
     * await layer.translate(-200, 0)
     *
     * // move the layer one height down
     * let xOffsetPct = {_unit: "percentUnit", _value: 0};
     * let yOffsetPct = {_unit: "percentUnit", _value: 100};
     * await layer.translate(xOffsetPct, yOffsetPct);
     * ```
     * @param horizontal Numeric value to offset layer by in pixels or percent
     * @param vertical Numeric value to offset layer by in pixels or percent
     *
     * @async
     */
    translate(horizontal: number | Unit.PercentValue | Unit.PixelValue, vertical: number | Unit.PercentValue | Unit.PixelValue): Promise<void>;
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
     * Renamed from `resize` in ExtendScript.
     * ```javascript
     * await layer.scale(80, 80)
     *
     * // Scale the layer to be a quarter of the size relative to bottom left corner
     * let anchorPos = require('photoshop').constants.AnchorPosition
     * await layer.scale(50, 50, anchorPos.BOTTOMLEFT)
     * ```
     * @param width Numeric percentage to scale layer horizontally
     * @param height Numeric percentage to scale layer vertically
     * @param anchor Anchor position to rotate around
     * @param options.interpolation Interpolation method to use when resampling the image
     *
     * @async
     */
    scale(width: number | Unit.PercentValue, height: number | Unit.PercentValue, anchor?: Constants.AnchorPosition, options?: {
        interpolation?: Constants.ResampleMethod;
    }): Promise<void>;
    /**
     * Rotates the layer.
     * ```javascript
     * // rotate 90 deg counter clockwise
     * await layer.rotate(-90)
     *
     * // rotate 90 deg clockwise relative to top left corner
     * let anchorPos = require('photoshop').constants.AnchorPosition
     * await layer.rotate(90, anchorPos.TOPLEFT)
     * ```
     * @param angle Angle to rotate the layer by in degrees
     * @param anchor Anchor position to rotate around
     * @param options.interpolation Interpolation method to use when resampling the image
     *
     * @async
     */
    rotate(angle: number | Unit.AngleValue, anchor?: Constants.AnchorPosition, options?: {
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
     * Clears the layer and does not copy to the clipboard.
     * If no selection is found then select all the pixels and then cut.
     *
     * @async
     */
    clear(): Promise<void>;
    /**
     * Copies the layer to the clipboard. When the optional argument is set to true, a
     * merged copy is performed (that is, all visible layers are copied to the clipboard).
     * ```javascript
     * await layer.copy(true)
     * await layer.copy()
     * ```
     * @async
     */
    copy(merge?: boolean): Promise<void>;
    /**
     * Cuts the layer to the clipboard. If no selection is found then select all the pixels and then cut.
     *
     * @async
     */
    cut(): Promise<void>;
    /**
     * Merges layers. This operates on the currently selected layers. If multiple
     * layers are selected, they will be merged together. If one layer is selected,
     * it is merged down with the layer beneath. In this case, the layer below must
     * be a pixel layer. The merged layer will now be the active layer.
     *
     * @async
     */
    merge(): Promise<Layer>;
    /**
     * Converts the targeted contents in the layer into a flat, raster image.
     *
     * @async
     */
    rasterize(target: Constants.RasterizeType): Promise<void>;
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
