import { Three } from "../../../../core/three";
import { DEFAULT_MAX_PARTICLES } from "./constants";
/**
 * Creates and provides performant buffers for mapping particle properties to geometry vertices.
 *
 * @author thrax <manthrax@gmail.com>
 * @author rohan-deshpande <rohan@creativelifeform.com>
 * @see https://threejs.org/examples/?q=buffe#webgl_buffergeometry_points_interleaved
 * @see https://threejs.org/examples/?q=points#webgl_custom_attributes_points
 */
export default class ParticleBuffer {
    /**
     * Creates the interleaved buffer that will be used to write data to the GPU.
     */
    constructor(maxParticles: typeof DEFAULT_MAX_PARTICLES, three: Three);
    createInterleavedBuffer(): ParticleBuffer;

    /**
     * Sets the geometry's buffer attributes.
     *
     * NOTE Each attribute needs to be set at the right index in the buffer right after the previous
     * attribute that occupies a set amount of size in the buffer.
     */
    createBufferGeometry(): ParticleBuffer;

    /**
     * Gets the publicly accessible interleaved buffer.
     */
    get buffer(): THREE.InterleavedBuffer;

    get stride(): number;
}
