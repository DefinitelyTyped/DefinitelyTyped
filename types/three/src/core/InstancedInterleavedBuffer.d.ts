import { InterleavedBuffer } from './InterleavedBuffer.js';
import { TypedArray } from './BufferAttribute.js';

/**
 * An instanced version of {@link THREE.InterleavedBuffer | InterleavedBuffer}.
 * @see {@link https://threejs.org/docs/index.html#api/en/core/InstancedInterleavedBuffer | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/core/InstancedInterleavedBuffer.js | Source}
 */
export class InstancedInterleavedBuffer extends InterleavedBuffer {
    /**
     * Create a new instance of {@link InstancedInterleavedBuffer}
     * @param array
     * @param itemSize
     * @param meshPerAttribute
     */
    constructor(array: TypedArray, stride: number, meshPerAttribute?: number);

    /**
     * @defaultValue `1`
     */
    meshPerAttribute: number;
}
