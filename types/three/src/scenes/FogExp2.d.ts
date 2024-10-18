import { Color, ColorRepresentation } from "../math/Color.js";

export interface FogExp2JSON {
    type: string;
    name: string;
    color: number;
    density: number;
}

/**
 * This class contains the parameters that define exponential squared fog, which gives a clear view near the camera and a faster than exponentially densening fog farther from the camera.
 * @example
 * ```typescript
 * const scene = new THREE.Scene();
 * scene.fog = new THREE.FogExp2(0xcccccc, 0.002);
 * ```
 * @see Example: {@link https://threejs.org/examples/#webgl_geometry_terrain | webgl geometry terrain}
 * @see {@link https://threejs.org/docs/index.html#api/en/scenes/FogExp2 | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/scenes/FogExp2.js | Source}
 */
export class FogExp2 {
    /**
     * The color parameter is passed to the {@link THREE.Color | Color} constructor to set the color property
     * @remarks Color can be a hexadecimal integer or a CSS-style string.
     * @param color
     * @param density Expects a `Float`
     */
    constructor(color: ColorRepresentation, density?: number);

    /**
     * Read-only flag to check if a given object is of type {@link FogExp2}.
     * @remarks This is a _constant_ value
     * @defaultValue `true`
     */
    readonly isFogExp2: true;

    /**
     * Optional name of the object
     * @remarks _(doesn't need to be unique)_.
     * @defaultValue `""`
     */
    name: string;

    /**
     * Fog color.
     * @remarks If set to black, far away objects will be rendered black.
     */
    color: Color;

    /**
     * Defines how fast the fog will grow dense.
     * @defaultValue `0.00025`
     * @remarks Expects a `Float`
     */
    density: number;

    /**
     * Returns a new {@link FogExp2} instance with the same parameters as this one.
     */
    clone(): FogExp2;

    /**
     * Return {@link FogExp2} data in JSON format.
     */
    toJSON(): FogExp2JSON;
}
