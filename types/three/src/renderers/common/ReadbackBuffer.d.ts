import { EventDispatcher } from "../../core/EventDispatcher.js";

export interface ReadbackBufferEventMap {
    release: {};
    dispose: {};
}

/**
 * A readback buffer is used to transfer data from the GPU to the CPU.
 * It is primarily used to read back compute shader results.
 *
 * @augments EventDispatcher
 */
declare class ReadbackBuffer<TEventMap extends ReadbackBufferEventMap = ReadbackBufferEventMap>
    extends EventDispatcher<TEventMap>
{
    /**
     * Constructs a new readback buffer.
     *
     * @param {number} maxByteLength - The maximum size of the buffer to be read back.
     */
    constructor(maxByteLength: number);
    /**
     * Name used for debugging purposes.
     *
     * @type {string}
     */
    name: string;
    /**
     * The mapped, read back array buffer.
     *
     * @type {ArrayBuffer|null}
     */
    buffer: ArrayBuffer | null;
    /**
     * The maximum size of the buffer to be read back.
     *
     * @type {number}
     */
    maxByteLength: number;
    /**
     * This flag can be used for type testing.
     *
     * @type {boolean}
     * @readonly
     * @default true
     */
    readonly isReadbackBuffer: boolean;
    /**
     * Releases the mapped buffer data so the GPU buffer can be
     * used by the GPU again.
     *
     * Note: Any `ArrayBuffer` data associated with this readback buffer
     * are removed and no longer accessible after calling this method.
     */
    release(): void;
    /**
     * Frees internal resources.
     */
    dispose(): void;
}

export default ReadbackBuffer;
