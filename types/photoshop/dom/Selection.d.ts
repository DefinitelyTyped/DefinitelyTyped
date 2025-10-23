import { Channel } from "./Channel";
import * as Constants from "./Constants";
import { Document } from "./Document";
import { Layer } from "./Layer";
import { Bounds } from "./objects/Bounds";
import { PathItem } from "./PathItem";
import { Bounds as SelectionBounds } from "./types/SharedTypes";
/**
 * Represents a selected area or areas in the document.  If there is no active selection,
 * the `bounds` will return `null`.  The selection is pixel-based, though 8-bit transparency is possible.
 *
 * Pixel selection targets where pixel filters are applied, or from where the histogram measurement is sourced.
 *
 * ```javascript
 * const { app, constants } = require("photoshop");
 * const doc = app.activeDocument;
 *
 * await doc.selection.selectRectangle(
 *     {top: 50, left: 50, bottom: 100, right: 100},
 *     constants.SelectionType.REPLACE
 * );
 * doc.selection.bounds; // {{top: 50, left: 50, bottom: 100, right: 100}
 * doc.selection.solid;  // true
 *
 * await doc.selection.selectEllipse(
 *     {top: 50, left: 70, bottom: 140, right: 100},
 *     constants.SelectionType.EXTEND
 * );
 * doc.selection.bounds; // {{top: 50, left: 50, bottom: 140, right: 100}
 * doc.selection.solid;  // false
 *
 * ```
 *
 * **Pixel selection while in Quick Mask Mode**:
 * When a user switches into Quick Mask Mode, the selection is temporarily shown as a channel
 * instead of the "marching ants" border.
 * While in Quick Mask Mode, new pixel selections can be made via Scripting. However, upon exiting
 * Quick Mask Mode, the Quick Mask Channel will become the active selection.
 *
 * @minVersion 25.0
 */
export declare class Selection {
    /**
     * @ignore
     */
    constructor(docId: number);
    /**
     * The class name of the referenced object: *"Selection"*.
     *
     * @minVersion 25.0
     */
    get typename(): "Selection";
    /**
     * The ID of the document of this Selection.
     *
     * @minVersion 25.0
     */
    get docId(): number;
    /**
     * Owner document of this Selection.
     *
     * @minVersion 25.0
     */
    get parent(): Document;
    /**
     * The bounding rectangle of the entire selection. It can be exeed the bounds of the canvas.
     *
     * @minVersion 25.0
     */
    get bounds(): Bounds | null;
    /**
     * True if the selection itself is a rectangle with all fully selected pixels.
     * Viewed as a channel, for example via Quick Mask Mode, the selection will
     * appear as a completely white rectangle.  In that way, it is solid within its bounds.
     *
     * @minVersion 25.0
     */
    get solid(): boolean;
    /**
     * Contract (shrink) the selection by the specified amount.
     *
     * If the contraction amount is greater than the selected area radius, the
     * selected area will disappear entirely.  If there are no other active selected areas,
     * then there will be no active selection altogether.
     *
     * UI Location: Select > Modify > Contract
     *
     * @param by The amount to contract the selection (integer in the range 1..500).
     * @param applyEffectAtCanvasBounds If true and the selection is outside of canvas,
     * the effect is not limited by canvas bounds.
     * @async
     * @minVersion 25.0
     */
    contract(by: number, applyEffectAtCanvasBounds?: boolean): Promise<void>;
    /**
     * Cancel the current selection. The `bounds` value will then be `null`.
     *
     * UI Location: Select > Deselect
     *
     * @async
     * @minVersion 25.0
     */
    deselect(): Promise<void>;
    /**
     * Expand the selection by the specified amount.
     *
     * UI Location: Select > Modify > Expand
     *
     * @param by The amount to expand the selection (integer in the range 1..500).
     * @param applyEffectAtCanvasBounds If true, the selection can expand beyond the canvas bounds.
     * @async
     * @minVersion 25.0
     */
    expand(by: number, applyEffectAtCanvasBounds?: boolean): Promise<void>;
    /**
     * Feather the edges of the selection by the specified amount.  This softening
     * of the selection strength is best viewed as a channel via Quick Mask Mode.
     * Large values might make the selection disappear entirely (`.bounds` would return `null`).
     *
     * UI Location: Select > Modify > Feather
     *
     * @param by The amount to feather the selection with (integer in the range 0.1..1000).
     * @param applyEffectAtCanvasBounds If true, the feathered selection can expand beyond the canvas bounds.
     * @async
     * @minVersion 25.0
     */
    feather(by: number, applyEffectAtCanvasBounds?: boolean): Promise<void>;
    /**
     * Grow the selection to include all adjacent pixels falling
     * within the specified tolerance range.
     *
     * Unsupported modes: Bitmap, RGB 32 bits, Grayscale 32 bits
     *
     * UI Location: Select > Grow
     *
     * @param tolerance The tolerance range (integer in the range 0..255)
     * @param antiAlias Whether to use anti-aliasing
     * @async
     * @minVersion 25.0
     */
    grow(tolerance: number, antiAlias?: boolean): Promise<void>;
    /**
     * Set the active selection to the inverse of the current selection.
     * The new active selection will be cropped to the canvas bounds.
     * If the canvas area is fully selected, `inverse` will result in no active selection.
     * Note also that Artboard bounds are not respected.
     *
     * UI Location: Select > Inverse
     *
     * @async
     * @minVersion 25.0
     */
    inverse(): Promise<void>;
    /**
     * Load the selection from the specified [[Channel]] or [[Layer]].  A Layer's pixels' transparency
     * will be used as the selection values.  Full opaque pixels yield fully selected pixels.
     *
     * UI Locations:
     * - Select > Load Selection...
     * - control/command + click on layer thumbnail
     * - control/command + click on channel thumbnail
     *
     * *For selecting a path please use [[PathItem.makeSelection]]*
     *
     * @param from The Channel or Layer to load the selection from. Can be located in different document.
     * @param mode The selection behavior when a selection already exists. Default SelectionType.REPLACE
     * @param invert True to invert the selection
     * @async
     * @minVersion 25.0
     */
    load(from: Channel | Layer, mode?: Constants.SelectionType, invert?: boolean): Promise<void>;
    /**
     * Create a work path from the active selection.
     *
     * UI Location: Paths panel > Make work path icon
     *
     * @param tolerance The tolerance (lower values, higher precision), decimal in the range 0.5..10
     *
     * @async
     * @minVersion 25.0
     */
    makeWorkPath(tolerance?: number): Promise<PathItem>;
    /**
     * Select the entire canvas.
     *
     * If the document has artboards, all the pixels of the artboard that contain the active layer
     * will be selected.
     *
     * If layers across multiple artboards are active, a single rectangular selection will be made,
     * with bounds wrapping them.
     *
     * If no artboard is active, all artboards will be selected in the same manner.
     * (The resulting selection might be smaller than the canvas bounds.)
     *
     * UI Location: Select > All
     *
     * @async
     * @minVersion 25.0
     */
    selectAll(): Promise<void>;
    /**
     * Make a rectangluar selection.
     *
     * ```javascript
     * doc.selection.selectRectangle(
     *     {top: 0, left: 0, bottom: 100, right: 100}
     *     Constants.SelectionType.REPLACE,
     *     10
     * );
     * ```
     *
     * UI Location: Toolbar > Rectangular Marquee Tool
     *
     * @param bounds The bounds of the selection, as an object with {top, left, bottom, right} properties.
     * @param mode The selection behavior when a selection already exists. Default: SelectionType.REPLACE
     * @param feather The amount of feathering in pixels to apply to the selection (decimal in the range 0..1000)
     * @param antiAlias If true, anti-aliasing is applied to the selection
     * @async
     * @minVersion 25.0
     */
    selectRectangle(
        bounds: SelectionBounds,
        mode?: Constants.SelectionType,
        feather?: number,
        antiAlias?: boolean,
    ): Promise<void>;
    /**
     * Make an elliptical selection.
     *
     * ```javascript
     * const doc = app.activeDocument;
     * doc.selection.selectEllipse({top: 0, left: 0, bottom: 100, right: 100});
     * ```
     *
     * UI Location: Toolbar > Elliptical Marquee Tool
     *
     * @param bounds The bounds of the selection, as an object with {top, left, bottom, right} properties.
     * @param mode The selection behavior when a selection already exists. Default SelectionType.REPLACE
     * @param feather The amount of feathering in pixels to apply to the selection (decimal in the range 0..1000)
     * @param antiAlias If true, anti-aliasing is applied to the selection
     * @async
     * @minVersion 25.0
     */
    selectEllipse(
        bounds: SelectionBounds,
        mode?: Constants.SelectionType,
        feather?: number,
        antiAlias?: boolean,
    ): Promise<void>;
    /**
     * Make a polygonal selection.
     *
     * ```javascript
     * doc.selection.selectPolygon([
     *     {x: 50, y: 10},
     *     {x: 100, y: 90},
     *     {x: 10, y: 40}
     * ]);
     * ```
     *
     * UI Location: Toolbar > Polygonal Lasso Tool
     *
     * @param points The points to select as an array of objects with {x, y} properties.
     * @param mode The selection behavior when a selection already exists. Default: SelectionType.REPLACE
     * @param feather The amount of feathering in pixels to apply to the selection (decimal in the range 0..1000)
     * @param antiAlias If true, anti-aliasing is applied to the selection
     * @async
     * @minVersion 25.0
     */
    selectPolygon(
        points: Array<{
            x: number;
            y: number;
        }>,
        mode?: Constants.SelectionType,
        feather?: number,
        antiAlias?: boolean,
    ): Promise<void>;
    /**
     * Select a single row of pixels.
     *
     * ```javascript
     * doc.selection.selectRow(10);
     * ```
     *
     * UI Location: Toolbar > Single Row Marquee Tool
     *
     * @param y The y coordinate in pixels of the row to select (integer).
     * The range should be within the document height.
     * @param mode The selection behavior when a selection already exists. Default: SelectionType.REPLACE
     * @async
     * @minVersion 25.0
     */
    selectRow(y: number, mode?: Constants.SelectionType): Promise<void>;
    /**
     * Select a single column of pixels.
     *
     * ```javascript
     * doc.selection.selectColumn(90);
     * ```
     *
     * UI Location: Toolbar > Single Column Marquee Tool
     *
     * @param x The x coordinate in pixels of the column to select (integer).
     * The range should be within the document width.
     * @param mode The selection behavior when a selection already exists. Default: SelectionType.REPLACE
     * @async
     * @minVersion 25.0
     */
    selectColumn(x: number, mode?: Constants.SelectionType): Promise<void>;
    /**
     * Save the selection in a new Alpha Channel.
     *
     * ```javascript
     * doc.selection.save("My Selection");
     * ```
     *
     * UI Location: Select > Save Selection...
     *
     * @param channelName The name of the new channel to create (Default: "Alpha 1", "Alpha 2", etc.)
     * @async
     * @minVersion 25.0
     */
    save(channelName?: string): Promise<void>;
    /**
     * Save the selection in an existing Alpha Channel (Component Channels are not supported targets).
     *
     * ```javascript
     * // Stores the current selection into an existing alpha channel
     * doc.selection.saveTo(doc.channels[3]);
     *
     * // Performing an intersection operation on the alpha channel
     * doc.selection.saveTo(doc.channels[3], SelectionType.INTERSECT);
     * ```
     *
     * @param channel The targeted Alpha channel for the save operation.
     * @param mode The selection behavior when a selection already exists. Default: SelectionType.REPLACE
     * @minVersion 25.0
     */
    saveTo(channel: Channel, mode?: Constants.SelectionType): Promise<void>;
    /**
     * Create a new selection based on the border of the active selection. The new selection will be an area
     * equivalent to a stroke of that border by the given width in pixels.
     * The result is not limited by canvas bounds.
     *
     * UI Location: Select > Modify > Border...
     *
     * @param width The width of the border selection (integer in the range 1..200)
     *
     * @minVersion 25.0
     * @async
     */
    selectBorder(width: number): Promise<void>;
    /**
     * Reduce patchiness and smooth sharp corners and jagged lines in the selection. Smooth will also remove
     * isolated groups of pixels that are smaller than the given radius. This effect is useful for cleaning up
     * stray pixels from color-based selections.
     *
     * Large values might make the selection disappear entirely (`.bounds` would return `null`).
     *
     * UI Location: Select > Modify > Smooth...
     *
     * @param radius The sample radius in pixels (integer in the range 1..500)
     * @param applyEffectAtCanvasBounds If false, the selection will be trimmed to fit inside canvas bounds
     *
     * @minVersion 25.0
     * @async
     */
    smooth(radius: number, applyEffectAtCanvasBounds?: boolean): Promise<void>;
    /**
     * Move the selection itself relative to its current position. Does not affect the active layer.
     *
     * UI Location: Select > Transform Selection
     *
     * @param deltaX The amount to move the selection horizontally (decimal).
     * @param deltaY The amount to move the selection vertically (decimal).
     *
     * @minVersion 25.0
     * @async
     */
    translateBoundary(deltaX: number, deltaY: number): Promise<void>;
    /**
     * Scale the selection itself in percent. Does not affect the active layer.
     *
     * UI Location: Select > Transform Selection
     *
     * @param horizontal The amount to scale selection horizontally (decimal)
     * @param vertical The amount to scale selection vertically (decimal)
     * @param anchor The anchor position to scale around. Default: AnchorPosition.MIDDLECENTER
     * @param interpolation The resampling algorithm to use. Default: InterpolationMethod.BICUBIC
     *
     * @minVersion 25.0
     * @async
     */
    resizeBoundary(
        horizontal?: number,
        vertical?: number,
        anchor?: Constants.AnchorPosition,
        interpolation?: Constants.InterpolationMethod,
    ): Promise<void>;
    /**
     * Rotate the selection itself clockwise around the given anchor position. Does not affect the active layer.
     *
     * UI Location: Select > Transform Selection
     *
     * @param angle Angle to rotate the the selection by in degrees (decimal in the range -180..180)
     * @param anchor Anchor position to rotate around. Default: AnchorPosition.MIDDLECENTER
     * @param interpolation The resampling algorithm to use. Default: InterpolationMethod.BICUBIC
     *
     * @minVersion 25.0
     * @async
     */
    rotateBoundary(
        angle: number,
        anchor?: Constants.AnchorPosition,
        interpolation?: Constants.InterpolationMethod,
    ): Promise<void>;
}
