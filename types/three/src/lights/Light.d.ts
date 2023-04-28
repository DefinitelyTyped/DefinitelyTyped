import { Color, ColorRepresentation } from '../math/Color';
import { LightShadow } from './LightShadow';
import { Object3D } from '../core/Object3D';

/**
 * Abstract base class for lights.
 * @remarks All other light types inherit the properties and methods described here.
 */
export abstract class Light<TShadowSupport extends LightShadow | undefined = LightShadow | undefined> extends Object3D {
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
    override readonly type: string | 'Light';

    /**
     * Color of the light. \
     * @defaultValue `new THREE.Color(0xffffff)` _(white)_.
     */
    color: Color;

    /**
     * The light's intensity, or strength.
     * In {@link THREE.WebGLRenderer.physicallyCorrectLights | physically correct} mode, the units of intensity depend on the type of light.
     * @remarks Expects a `Float`
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
}
