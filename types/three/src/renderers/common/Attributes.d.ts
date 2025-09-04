import { BufferAttribute } from "../../core/BufferAttribute.js";
import { InterleavedBuffer } from "../../core/InterleavedBuffer.js";
import { InterleavedBufferAttribute } from "../../core/InterleavedBufferAttribute.js";
import Backend from "./Backend.js";
import { AttributeType } from "./Constants.js";
import DataMap from "./DataMap.js";
interface Data {
    version?: number | undefined;
}
/**
 * This renderer module manages geometry attributes.
 *
 * @private
 * @augments DataMap
 */
declare class Attributes extends DataMap<{
    attribute: {
        key: BufferAttribute | InterleavedBufferAttribute;
        value: Data;
    };
}> {
    backend: Backend;
    /**
     * Constructs a new attribute management component.
     *
     * @param {Backend} backend - The renderer's backend.
     */
    constructor(backend: Backend);
    /**
     * Deletes the data for the given attribute.
     *
     * @param {BufferAttribute} attribute - The attribute.
     * @return {?Object} The deleted attribute data.
     */
    delete(attribute: BufferAttribute | InterleavedBufferAttribute): Data;
    /**
     * Updates the given attribute. This method creates attribute buffers
     * for new attributes and updates data for existing ones.
     *
     * @param {BufferAttribute} attribute - The attribute to update.
     * @param {number} type - The attribute type.
     */
    update(attribute: BufferAttribute | InterleavedBufferAttribute, type: AttributeType): void;
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
