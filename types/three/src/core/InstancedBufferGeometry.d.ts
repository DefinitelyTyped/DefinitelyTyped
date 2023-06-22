import { BufferGeometry } from './BufferGeometry';

/**
 * An instanced version of {@link THREE.BufferGeometry | BufferGeometry}.
 * @see {@link https://threejs.org/docs/index.html#api/en/core/InstancedBufferGeometry | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/core/InstancedBufferGeometry.js | Source}
 */
export class InstancedBufferGeometry extends BufferGeometry {
    /**
     * Create a new instance of {@link InstancedBufferGeometry}
     */
    constructor();

    /**
     * @defaultValue `InstancedBufferGeometry`
     */
    type: string;

    /**
     * Read-only flag to check if a given object is of type {@link InstancedBufferGeometry}.
     * @remarks This is a _constant_ value
     * @defaultValue `true`
     */
    readonly isInstancedBufferGeometry: true;

    /**
     *
     * @defaultValue `Infinity`
     */
    instanceCount: number;

    /**
     * Copies the given {@link InstancedBufferGeometry} to this instance.
     * @param source
     * @override
     */
    copy(source: InstancedBufferGeometry): this;
}
