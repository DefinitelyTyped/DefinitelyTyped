import { BufferGeometry } from './BufferGeometry';

/**
 * see {@link https://github.com/mrdoob/three.js/blob/master/src/core/InstancedBufferGeometry.js|src/core/InstancedBufferGeometry.js}
 */
export class InstancedBufferGeometry extends BufferGeometry {
    constructor();

    /**
     * @default 'InstancedBufferGeometry
     */
    type: string;

    isInstancedBufferGeometry: boolean;

    /**
     * @default Infinity
     */
    instanceCount: number;
}
