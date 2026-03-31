import { BufferAttribute } from "../../core/BufferAttribute.js";
import { BufferGeometry } from "../../core/BufferGeometry.js";
import Attributes from "./Attributes.js";
import { AttributeType } from "./Constants.js";
import DataMap from "./DataMap.js";
import Info from "./Info.js";
import RenderObject from "./RenderObject.js";

/**
 * This renderer module manages geometries.
 *
 * @private
 * @augments DataMap
 */
declare class Geometries extends DataMap {
    /**
     * Constructs a new geometry management component.
     *
     * @param {Attributes} attributes - Renderer component for managing attributes.
     * @param {Info} info - Renderer component for managing metrics and monitoring data.
     */
    constructor(attributes: Attributes, info: Info);
    /**
     * Renderer component for managing attributes.
     *
     * @type {Attributes}
     */
    attributes: Attributes;
    /**
     * Renderer component for managing metrics and monitoring data.
     *
     * @type {Info}
     */
    info: Info;
    /**
     * Weak Map for managing attributes for wireframe rendering.
     *
     * @type {WeakMap<BufferGeometry,BufferAttribute>}
     */
    wireframes: WeakMap<BufferGeometry, BufferAttribute>;
    /**
     * This Weak Map is used to make sure buffer attributes are
     * updated only once per render call.
     *
     * @type {WeakMap<BufferAttribute,number>}
     */
    attributeCall: WeakMap<BufferAttribute, number>;
    /**
     * Stores the event listeners attached to geometries.
     *
     * @private
     * @type {Map<BufferGeometry,Function>}
     */
    private _geometryDisposeListeners;
    /**
     * Returns `true` if the given render object has an initialized geometry.
     *
     * @param {RenderObject} renderObject - The render object.
     * @return {boolean} Whether if the given render object has an initialized geometry or not.
     */
    has(renderObject: RenderObject): boolean;
    /**
     * Prepares the geometry of the given render object for rendering.
     *
     * @param {RenderObject} renderObject - The render object.
     */
    updateForRender(renderObject: RenderObject): void;
    /**
     * Initializes the geometry of the given render object.
     *
     * @param {RenderObject} renderObject - The render object.
     */
    initGeometry(renderObject: RenderObject): void;
    /**
     * Updates the geometry attributes of the given render object.
     *
     * @param {RenderObject} renderObject - The render object.
     */
    updateAttributes(renderObject: RenderObject): void;
    /**
     * Updates the given attribute.
     *
     * @param {BufferAttribute} attribute - The attribute to update.
     * @param {number} type - The attribute type.
     */
    updateAttribute(attribute: BufferAttribute, type: AttributeType): void;
    /**
     * Returns the indirect buffer attribute of the given render object.
     *
     * @param {RenderObject} renderObject - The render object.
     * @return {?BufferAttribute} The indirect attribute. `null` if no indirect drawing is used.
     */
    getIndirect(renderObject: RenderObject): BufferAttribute | null;
    /**
     * Returns the byte offset into the indirect attribute buffer of the given render object.
     *
     * @param {RenderObject} renderObject - The render object.
     * @return {number} The byte offset into the indirect attribute buffer.
     */
    getIndirectOffset(renderObject: RenderObject): number;
    /**
     * Returns the index of the given render object's geometry. This is implemented
     * in a method to return a wireframe index if necessary.
     *
     * @param {RenderObject} renderObject - The render object.
     * @return {?BufferAttribute} The index. Returns `null` for non-indexed geometries.
     */
    getIndex(renderObject: RenderObject): BufferAttribute | null;
}

export default Geometries;
