import { Color, ColorRepresentation } from "../math/Color.js";

export interface FogExp2JSON {
    type: string;
    name: string;
    color: number;
    density: number;
}

/**
 * This class can be used to define an exponential squared fog,
 * which gives a clear view near the camera and a faster than exponentially
 * densening fog farther from the camera.
 *
 * ```js
 * const scene = new THREE.Scene();
 * scene.fog = new THREE.FogExp2( 0xcccccc, 0.002 );
 * ```
 */
export class FogExp2 {
    /**
     * Constructs a new fog.
     *
     * @param {number|Color} color - The fog's color.
     * @param {number} [density=0.00025] - Defines how fast the fog will grow dense.
     */
    constructor(color: ColorRepresentation, density?: number);
    /**
     * This flag can be used for type testing.
     *
     * @default true
     */
    readonly isFogExp2: boolean;
    /**
     * The name of the fog.
     */
    name: string;
    /**
     * The fog's color.
     */
    color: Color;
    /**
     *  Defines how fast the fog will grow dense.
     *
     * @default 0.00025
     */
    density: number;
    /**
     * Returns a new fog with copied values from this instance.
     *
     * @return {FogExp2} A clone of this instance.
     */
    clone(): FogExp2;
    /**
     * Serializes the fog into JSON.
     *
     * @param {?(Object|string)} meta - An optional value holding meta information about the serialization.
     * @return {Object} A JSON object representing the serialized fog
     */
    toJSON(): FogExp2JSON;
}
