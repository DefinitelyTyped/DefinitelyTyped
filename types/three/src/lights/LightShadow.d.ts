import { Camera } from "../cameras/Camera.js";
import { TextureDataType } from "../constants.js";
import { Object3DJSONObject } from "../core/Object3D.js";
import { RenderTarget } from "../core/RenderTarget.js";
import { Frustum } from "../math/Frustum.js";
import { Matrix4 } from "../math/Matrix4.js";
import { Vector2, Vector2Tuple } from "../math/Vector2.js";
import { Vector4 } from "../math/Vector4.js";
import Node from "../nodes/core/Node.js";
import { Light } from "./Light.js";

export interface LightShadowJSON {
    intensity?: number;
    bias?: number;
    normalBias?: number;
    radius?: number;
    mapSize?: Vector2Tuple;

    camera: Omit<Object3DJSONObject, "matrix">;
}

/**
 * Abstract base class for light shadow classes. These classes
 * represent the shadow configuration for different light types.
 */
export abstract class LightShadow<TCamera extends Camera = Camera> {
    /**
     * Constructs a new light shadow.
     *
     * @param {Camera} camera - The light's view of the world.
     */
    constructor(camera: TCamera);
    /**
     * The light's view of the world.
     */
    camera: TCamera;
    /**
     * The intensity of the shadow. The default is `1`.
     * Valid values are in the range `[0, 1]`.
     *
     * @default 1
     */
    intensity: number;
    /**
     * Shadow map bias, how much to add or subtract from the normalized depth
     * when deciding whether a surface is in shadow.
     *
     * The default is `0`. Very tiny adjustments here (in the order of `0.0001`)
     * may help reduce artifacts in shadows.
     *
     * @default 0
     */
    bias: number;
    /**
     * A node version of `bias`. Only supported with `WebGPURenderer`.
     *
     * If a bias node is defined, `bias` has no effect.
     *
     * @default null
     */
    biasNode: Node<"float"> | null;
    /**
     * Defines how much the position used to query the shadow map is offset along
     * the object normal. The default is `0`. Increasing this value can be used to
     * reduce shadow acne especially in large scenes where light shines onto
     * geometry at a shallow angle. The cost is that shadows may appear distorted.
     *
     * @default 0
     */
    normalBias: number;
    /**
     * Setting this to values greater than 1 will blur the edges of the shadow.
     * High values will cause unwanted banding effects in the shadows - a greater
     * map size will allow for a higher value to be used here before these effects
     * become visible.
     *
     * The property has no effect when the shadow map type is `BasicShadowMap`.
     *
     * @default 1
     */
    radius: number;
    /**
     * The amount of samples to use when blurring a VSM shadow map.
     *
     * @default 8
     */
    blurSamples: number;
    /**
     * Defines the width and height of the shadow map. Higher values give better quality
     * shadows at the cost of computation time. Values must be powers of two.
     *
     * @default (512,512)
     */
    mapSize: Vector2;
    /**
     * The type of shadow texture. The default is `UnsignedByteType`.
     *
     * @default UnsignedByteType
     */
    mapType: TextureDataType;
    /**
     * The depth map generated using the internal camera; a location beyond a
     * pixel's depth is in shadow. Computed internally during rendering.
     *
     * @default null
     */
    map: RenderTarget | null;
    /**
     * The distribution map generated using the internal camera; an occlusion is
     * calculated based on the distribution of depths. Computed internally during
     * rendering.
     *
     * @default null
     */
    mapPass: RenderTarget | null;
    /**
     * Model to shadow camera space, to compute location and depth in shadow map.
     * This is computed internally during rendering.
     */
    matrix: Matrix4;
    /**
     * Enables automatic updates of the light's shadow. If you do not require dynamic
     * lighting / shadows, you may set this to `false`.
     *
     * @default true
     */
    autoUpdate: boolean;
    /**
     * When set to `true`, shadow maps will be updated in the next `render` call.
     * If you have set {@link LightShadow#autoUpdate} to `false`, you will need to
     * set this property to `true` and then make a render call to update the light's shadow.
     *
     * @default false
     */
    needsUpdate: boolean;
    /**
     * Used internally by the renderer to get the number of viewports that need
     * to be rendered for this shadow.
     *
     * @return {number} The viewport count.
     */
    getViewportCount(): number;
    /**
     * Gets the shadow cameras frustum. Used internally by the renderer to cull objects.
     *
     * @return {Frustum} The shadow camera frustum.
     */
    getFrustum(): Frustum;
    /**
     * Update the matrices for the camera and shadow, used internally by the renderer.
     *
     * @param {Light} light - The light for which the shadow is being rendered.
     */
    updateMatrices(light: Light): void;
    /**
     * Returns a viewport definition for the given viewport index.
     *
     * @param {number} viewportIndex - The viewport index.
     * @return {Vector4} The viewport.
     */
    getViewport(viewportIndex: number): Vector4;
    /**
     * Returns the frame extends.
     *
     * @return {Vector2} The frame extends.
     */
    getFrameExtents(): Vector2;
    /**
     * Frees the GPU-related resources allocated by this instance. Call this
     * method whenever this instance is no longer used in your app.
     */
    dispose(): void;
    /**
     * Copies the values of the given light shadow instance to this instance.
     *
     * @param {LightShadow} source - The light shadow to copy.
     * @return {LightShadow} A reference to this light shadow instance.
     */
    copy(source: LightShadow): this;
    /**
     * Returns a new light shadow instance with copied values from this instance.
     *
     * @return {LightShadow} A clone of this instance.
     */
    clone(): this;
    /**
     * Serializes the light shadow into JSON.
     *
     * @return {Object} A JSON object representing the serialized light shadow.
     * @see {@link ObjectLoader#parse}
     */
    toJSON(): LightShadowJSON;
}
