import { BufferAttribute } from "../../core/BufferAttribute.js";
import { BufferGeometry } from "../../core/BufferGeometry.js";
import { InterleavedBuffer } from "../../core/InterleavedBuffer.js";
import { InterleavedBufferAttribute } from "../../core/InterleavedBufferAttribute.js";
import Attributes from "./Attributes.js";
import { AttributeType } from "./Constants.js";
import DataMap from "./DataMap.js";
import Info from "./Info.js";
import RenderObject from "./RenderObject.js";
interface GeometryData {
    initialized?: boolean | undefined;
}
/**
 * This renderer module manages geometries.
 *
 * @private
 * @augments DataMap
 */
declare class Geometries extends DataMap<{
    geometry: {
        key: BufferGeometry;
        value: GeometryData;
    };
}> {
    attributes: Attributes;
    info: Info;
    wireframes: WeakMap<BufferGeometry, BufferAttribute>;
    attributeCall: WeakMap<BufferAttribute | InterleavedBufferAttribute | InterleavedBuffer, number>;
    /**
     * Constructs a new geometry management component.
     *
     * @param {Attributes} attributes - Renderer component for managing attributes.
     * @param {Info} info - Renderer component for managing metrics and monitoring data.
     */
    constructor(attributes: Attributes, info: Info);
    /**
     * Returns `true` if the given render object has an initialized geometry.
     *
     * @param {RenderObject} renderObject - The render object.
     * @return {Boolean} Whether if the given render object has an initialized geometry or not.
     */
    has(renderObject: RenderObject | BufferGeometry): boolean;
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
     * @param {Number} type - The attribute type.
     */
    updateAttribute(attribute: BufferAttribute | InterleavedBufferAttribute, type: AttributeType): void;
    /**
     * Returns the indirect buffer attribute of the given render object.
     *
     * @param {RenderObject} renderObject - The render object.
     * @return {BufferAttribute?} The indirect attribute. `null` if no indirect drawing is used.
     */
    getIndirect(renderObject: RenderObject): import("./IndirectStorageBufferAttribute.js").default | null;
    /**
     * Returns the index of the given render object's geometry. This is implemented
     * in a method to return a wireframe index if necessary.
     *
     * @param {RenderObject} renderObject - The render object.
     * @return {BufferAttribute?} The index. Returns `null` for non-indexed geometries.
     */
    getIndex(renderObject: RenderObject): BufferAttribute | null;
}
export default Geometries;
