import { Color, ColorRepresentation } from './../math/Color.js';

export interface FogBase {
    /**
     * Optional name of the `Fog` object
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
     * Returns a new Fog instance with the same parameters as this one.
     */
    clone(): FogBase;

    /**
     * Return Fog data in JSON format.
     */
    toJSON(): any;
}

/**
 * This class contains the parameters that define linear fog, i.e., that grows linearly denser with the distance.
 *  @example
 * ```typescript
 * const scene = new THREE.Scene();
 * scene.fog = new THREE.Fog(0xcccccc, 10, 15);
 * ```
 * @see {@link https://threejs.org/docs/index.html#api/en/scenes/Fog | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/scenes/Fog.js | Source}
 */
export class Fog implements FogBase {
    /**
     * The color parameter is passed to the {@link THREE.Color | Color} constructor to set the color property
     * @remarks
     * Color can be a hexadecimal integer or a CSS-style string.
     * @param color
     * @param near Expects a `Float`
     * @param far Expects a `Float`
     */
    constructor(color: ColorRepresentation, near?: number, far?: number);

    /**
     * Read-only flag to check if a given object is of type {@link Fog}.
     * @remarks This is a _constant_ value
     * @defaultValue `true`
     */
    readonly isFog: true;

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
     * The minimum distance to start applying fog.
     * @remarks Objects that are less than **near** units from the active camera won't be affected by fog.
     * @defaultValue `1`
     * @remarks Expects a `Float`
     */
    near: number;

    /**
     * The maximum distance at which fog stops being calculated and applied.
     * @remarks Objects that are more than **far** units away from the active camera won't be affected by fog.
     * @defaultValue `1000`
     * @remarks Expects a `Float`
     */
    far: number;

    /**
     * Returns a new {@link Fog} instance with the same parameters as this one.
     */
    clone(): Fog;

    /**
     * Return {@link Fog} data in JSON format.
     */
    toJSON(): any;
}
