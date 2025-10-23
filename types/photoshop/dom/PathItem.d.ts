import { SubPathItems } from "./collections/SubPathItems";
import * as Constants from "./Constants";
import { Document } from "./Document";
import { Layer } from "./Layer";
import { SolidColor } from "./objects/SolidColor";
/**
 * A path or drawing object, such as the outline of a shape or a straight or curved line,
 * which contains sub paths defining its geometry.
 *
 * Access through the collection in the [[Document.pathItems]] property. For example, this selects a named path item:
 *
 * ```javascript
 * const currentPathItem = app.activeDocument.pathItems.getByName("myPath");
 * currentPathItem.select()
 * ```
 *
 * Create these objects by passing a set of SubPathInfo objects to the [[PathItems.add]]() method. This method creates
 * a [[SubPathItem]] object for each [[SubPathInfo]] object, and creates and returns a new [[PathItem]] object for the
 * path represented by all of the subpaths.
 *
 * @minVersion 23.3
 */
export declare class PathItem {
    /**
     * @ignore
     */
    constructor(id: number, docId: number);
    /**
     * The class name of the referenced object: *"PathItem"*.
     * @minVersion 23.3
     */
    get typename(): "PathItem";
    /**
     * For use with batchPlay operations. This pathItem ID, along with its document ID
     * can be used to represent this pathItem for the lifetime of this document.
     * @minVersion 23.3
     */
    get id(): number;
    /**
     * The ID of the document of this pathItem.
     * @minVersion 23.3
     */
    get docId(): number;
    /**
     * The document in which the path resides.
     * @minVersion 23.3
     */
    get parent(): Document;
    /**
     * The specific kind of path.
     * @minVersion 23.3
     */
    get kind(): Constants.PathKind;
    set kind(kind: Constants.PathKind);
    /**
     * Name of this path
     * @minVersion 23.3
     */
    get name(): string;
    set name(name: string);
    /**
     * The contained [[SubPathItem]]s in this path.
     * @minVersion 23.3
     */
    get subPathItems(): SubPathItems;
    /**
     * Deselects this `pathItem` object.
     * @minVersion 23.3
     */
    deselect(): Promise<void>;
    /**
     * Duplicates the `pathItem` object with the new name, returning the duplicate.
     * @minVersion 23.3
     */
    duplicate(name?: string): Promise<PathItem>;
    /**
     * Fills the area enclosed by this path.
     *
     * `opacity` is a percentage, in the `[0.0 ... 100.0]` range.
     *
     * `feather` is in pixels, in the `[0.0 ... 250.0]` range.
     *
     * If `wholePath` is true, all subpaths are used when doing the fill.
     * @minVersion 23.3
     */
    fillPath(
        fillColor?: SolidColor,
        mode?: Constants.ColorBlendMode,
        opacity?: number,
        preserveTransparency?: boolean,
        feather?: number,
        wholePath?: boolean,
        antiAlias?: boolean,
    ): Promise<void>;
    /**
     * Makes this the clipping path for this document.
     *
     * `flatness` tells the PostScript printer how to approximate curves in the path.
     * @minVersion 23.3
     */
    makeClippingPath(flatness?: number): Promise<void>;
    /**
     * Makes a selection object whose border is this path.
     *
     * `feather` is in pixels, in the range [0.0...250.0]
     *
     * `operation`, by default, is `SelectionType.REPLACE`
     * @minVersion 23.3
     */
    makeSelection(feather?: number, antiAlias?: boolean, operation?: Constants.SelectionType): Promise<void>;
    /**
     * Deletes this object.
     * @minVersion 23.3
     */
    remove(): Promise<void>;
    /**
     * Makes this the active or selected `PathItem` object.
     * @minVersion 23.3
     */
    select(): Promise<void>;
    /**
     * Strokes the path with the specified tool
     *
     * `tool` is optional, and by default will use `ToolType.PENCIL`
     *
     * `simulatePressure` is false by default.
     *
     * If the tool is `ToolType.CLONESTAMP` or `ToolType.HEALINGBRUSH`, `sourceOrigin` must be provided as a
     * an object with x and y properties (in pixels) to indicate the location of the stroke source. `sourceLayer`
     * is optional, and by default will use the active layer in the document.
     * @minVersion 23.3
     */
    strokePath(tool?: Constants.ToolType, simulatePressure?: boolean, sourceOrigin?: {
        x: number;
        y: number;
    }, sourceLayer?: Layer): Promise<void>;
}
