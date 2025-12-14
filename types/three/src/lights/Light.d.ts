import { JSONMeta, Object3D, Object3DEventMap, Object3DJSON } from "../core/Object3D.js";
import { Color, ColorRepresentation } from "../math/Color.js";
import { LightShadow } from "./LightShadow.js";

export interface LightJSON extends Object3DJSON {
    color: number;
    intensity: number;
}

export interface LightEventMap extends Object3DEventMap {
    dispose: {};
}

/**
 * Abstract base class for lights.
 * @remarks All other light types inherit the properties and methods described here.
 */
export abstract class Light<TShadowSupport extends LightShadow | undefined = LightShadow | undefined>
    extends Object3D<LightEventMap>
{
    /**
     * Creates a new {@link Light}
     * @remarks
     * **Note** that this is not intended to be called directly (use one of derived classes instead).
     * @param color Hexadecimal color of the light. Default `0xffffff` _(white)_.
     * @param intensity Numeric value of the light's strength/intensity. Expects a `Float`. Default `1`.
     */
    constructor(color?: ColorRepresentation, intensity?: number);

    /**
     * Read-only flag to check if a given object is of type {@link HemisphereLight}.
     * @remarks This is a _constant_ value
     * @defaultValue `true`
     */
    readonly isLight: true;

    /**
     * A Read-only _string_ to check if `this` object type.
     * @remarks Sub-classes will update this value.
     * @defaultValue `Light`
     */
    override readonly type: string | "Light";

    /**
     * Color of the light. \
     * @defaultValue `new THREE.Color(0xffffff)` _(white)_.
     */
    color: Color;

    /**
     * The light's intensity, or strength.
     * The units of intensity depend on the type of light.
     * @defaultValue `1`
     */
    intensity: number;

    /**
     * A {@link THREE.LightShadow | LightShadow} used to calculate shadows for this light.
     * @remarks Available only on Light's that support shadows.
     */
    shadow: TShadowSupport;

    /**
     * Copies value of all the properties from the {@link Light | source} to this instance.
     * @param source
     * @param recursive
     */
    copy(source: this, recursive?: boolean): this;

    /**
     * Frees the GPU-related resources allocated by this instance
     * @remarks
     * Call this method whenever this instance is no longer used in your app.
     */
    dispose(): void;

    toJSON(meta?: JSONMeta): LightJSON;
}
