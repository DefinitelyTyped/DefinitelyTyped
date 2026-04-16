import { BufferAttribute } from "../../core/BufferAttribute.js";
import { InterleavedBuffer } from "../../core/InterleavedBuffer.js";
import { InterleavedBufferAttribute } from "../../core/InterleavedBufferAttribute.js";
import Backend from "./Backend.js";
import DataMap from "./DataMap.js";
import Info from "./Info.js";

/**
 * This renderer module manages geometry attributes.
 *
 * @private
 * @augments DataMap
 */
declare class Attributes extends DataMap {
    /**
     * Constructs a new attribute management component.
     *
     * @param {Backend} backend - The renderer's backend.
     * @param {Info} info - Renderer component for managing metrics and monitoring data.
     */
    constructor(backend: Backend, info: Info);
    /**
     * The renderer's backend.
     *
     * @type {Backend}
     */
    backend: Backend;
    /**
     * Renderer component for managing metrics and monitoring data.
     *
     * @type {Info}
     */
    info: Info;
    /**
     * Deletes the data for the given attribute.
     *
     * @param {BufferAttribute} attribute - The attribute.
     * @return {?Object} The deleted attribute data.
     */
    delete(attribute: BufferAttribute | InterleavedBufferAttribute): unknown;
    /**
     * Updates the given attribute. This method creates attribute buffers
     * for new attributes and updates data for existing ones.
     *
     * @param {BufferAttribute} attribute - The attribute to update.
     * @param {number} type - The attribute type.
     */
    update(attribute: BufferAttribute | InterleavedBufferAttribute, type: number): void;
    /**
     * Utility method for handling interleaved buffer attributes correctly.
     * To process them, their `InterleavedBuffer` is returned.
     *
     * @param {BufferAttribute} attribute - The attribute.
     * @return {BufferAttribute|InterleavedBuffer}
     */
    _getBufferAttribute(attribute: BufferAttribute | InterleavedBufferAttribute): BufferAttribute | InterleavedBuffer;
}

export default Attributes;
