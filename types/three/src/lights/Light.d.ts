import { JSONMeta, Object3D, Object3DJSON } from "../core/Object3D.js";
import { Color, ColorRepresentation } from "../math/Color.js";

export interface LightJSON extends Object3DJSON {
    color: number;
    intensity: number;
}

/**
 * Abstract base class for lights - all other light types inherit the
 * properties and methods described here.
 */
export abstract class Light extends Object3D {
    /**
     * Constructs a new light.
     *
     * @param {(number|Color|string)} [color=0xffffff] - The light's color.
     * @param {number} [intensity=1] - The light's strength/intensity.
     */
    constructor(color?: ColorRepresentation, intensity?: number);
    /**
     * This flag can be used for type testing.
     *
     * @default true
     */
    readonly isLight: boolean;
    /**
     * The light's color.
     */
    color: Color;
    /**
     * The light's intensity.
     *
     * @default 1
     */
    intensity: number;
    copy(source: Light, recursive?: boolean): this;
    toJSON(meta?: JSONMeta): LightJSON;
}
