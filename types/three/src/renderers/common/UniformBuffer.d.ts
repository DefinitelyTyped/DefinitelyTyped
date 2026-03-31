import Buffer from "./Buffer.js";

/**
 * Represents a uniform buffer binding type.
 *
 * @private
 * @augments Buffer
 */
declare class UniformBuffer extends Buffer {
    /**
     * This flag can be used for type testing.
     *
     * @type {boolean}
     * @readonly
     * @default true
     */
    readonly isUniformBuffer: boolean;
}

export default UniformBuffer;
