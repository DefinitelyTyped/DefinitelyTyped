import Buffer from "./Buffer.js";
/**
 * Represents a uniform buffer binding type.
 *
 * @private
 * @augments Buffer
 */
declare class UniformBuffer extends Buffer {
    readonly isUniformBuffer: true;
    /**
     * Constructs a new uniform buffer.
     *
     * @param {String} name - The buffer's name.
     * @param {TypedArray} [buffer=null] - The buffer.
     */
    constructor(name?: string, buffer?: null);
}
export default UniformBuffer;
