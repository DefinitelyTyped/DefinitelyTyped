import { Camera } from "../cameras/Camera.js";
import { Frustum } from "../math/Frustum.js";
import { Matrix4 } from "../math/Matrix4.js";
import { Vector2 } from "../math/Vector2.js";
import { Vector4 } from "../math/Vector4.js";
import { WebGLRenderTarget } from "../renderers/WebGLRenderTarget.js";
import { Light } from "./Light.js";

/**
 * Serves as a base class for the other shadow classes.
 * @see {@link https://threejs.org/docs/index.html#api/en/lights/shadows/LightShadow | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/lights/LightShadow.js | Source}
 */
export class LightShadow<TCamera extends Camera = Camera> {
    /**
     * Create a new instance of {@link LightShadow}
     * @param camera The light's view of the world.
     */
    constructor(camera: TCamera);

    /**
     * The light's view of the world.
     * @remark This is used to generate a depth map of the scene; objects behind other objects from the light's perspective will be in shadow.
     */
    camera: TCamera;

    /**
     * The intensity of the shadow. The default is `1`. Valid values are in the range `[0, 1]`.
     */
    intensity: number;

    /**
     * Shadow map bias, how much to add or subtract from the normalized depth when deciding whether a surface is in shadow.
     * @remark The Very tiny adjustments here (in the order of 0.0001) may help reduce artifacts in shadows.
     * @remarks Expects a `Float`
     * @defaultValue `0`
     */
    bias: number;

    /**
     * Defines how much the position used to query the shadow map is offset along the object normal.
     * @remark The Increasing this value can be used to reduce shadow acne especially in large scenes where light shines onto geometry at a shallow angle.
     * @remark The cost is that shadows may appear distorted.
     * @remarks Expects a `Float`
     * @defaultValue `0`
     */
    normalBias: number;

    /**
     * Setting this to values greater than 1 will blur the edges of the shadow.toi
     * @remark High values will cause unwanted banding effects in the shadows - a greater {@link LightShadow.mapSize | mapSize
     *  will allow for a higher value to be used here before these effects become visible.
     * @remark If {@link THREE.WebGLRenderer.shadowMap.type | WebGLRenderer.shadowMap.type} is set to {@link Renderer | PCFSoftShadowMap},
     * radius has no effect and it is recommended to increase softness by decreasing {@link LightShadow.mapSize | mapSize} instead.
     * @remark Note that this has no effect if the {@link THREE.WebGLRenderer.shadowMap | WebGLRenderer.shadowMap}.{@link THREE.WebGLShadowMap.type | type}
     * is set to {@link THREE.BasicShadowMap | BasicShadowMap}.
     * @remarks Expects a `Float`
     * @defaultValue `1`
     */
    radius: number;

    /**
     * The amount of samples to use when blurring a VSM shadow map.
     * @remarks Expects a `Integer`
     * @defaultValue `8`
     */
    blurSamples: number;

    /**
     * A {@link THREE.Vector2 | Vector2} defining the width and height of the shadow map.
     * @remarks Higher values give better quality shadows at the cost of computation time.
     * @remarks Values must be powers of 2, up to the {@link THREE.WebGLRenderer.capabilities | WebGLRenderer.capabilities}.maxTextureSize for a given device,
     * although the width and height don't have to be the same (so, for example, (512, 1024) is valid).
     * @defaultValue `new THREE.Vector2(512, 512)`
     */
    mapSize: Vector2;

    /**
     * The depth map generated using the internal camera; a location beyond a pixel's depth is in shadow. Computed internally during rendering.
     * @defaultValue null
     */
    map: WebGLRenderTarget | null;

    /**
     * The distribution map generated using the internal camera; an occlusion is calculated based on the distribution of depths. Computed internally during rendering.
     * @defaultValue null
     */
    mapPass: WebGLRenderTarget | null;

    /**
     * Model to shadow camera space, to compute location and depth in shadow map.
     * Stored in a {@link Matrix4 | Matrix4}.
     * @remarks This is computed internally during rendering.
     * @defaultValue new THREE.Matrix4()
     */
    matrix: Matrix4;

    /**
     * Enables automatic updates of the light's shadow. If you do not require dynamic lighting / shadows, you may set this to `false`.
     * @defaultValue `true`
     */
    autoUpdate: boolean;

    /**
     * When set to `true`, shadow maps will be updated in the next `render` call.
     * If you have set {@link autoUpdate} to `false`, you will need to set this property to `true` and then make a render call to update the light's shadow.
     * @defaultValue `false`
     */
    needsUpdate: boolean;

    /**
     * Used internally by the renderer to get the number of viewports that need to be rendered for this shadow.
     */
    getViewportCount(): number;

    /**
     * Copies value of all the properties from the {@link {@link LightShadow} | source} to this Light.
     * @param source
     */
    copy(source: LightShadow): this;

    /**
     * Creates a new {@link LightShadow} with the same properties as this one.
     */
    clone(recursive?: boolean): this;

    /**
     * Serialize this LightShadow.
     */
    toJSON(): {};

    /**
     * Gets the shadow cameras frustum
     * @remarks
     * Used internally by the renderer to cull objects.
     */
    getFrustum(): Frustum;

    /**
     * Update the matrices for the camera and shadow, used internally by the renderer.
     * @param light The light for which the shadow is being rendered.
     */
    updateMatrices(light: Light): void;

    getViewport(viewportIndex: number): Vector4;

    /**
     * Used internally by the renderer to extend the shadow map to contain all viewports
     */
    getFrameExtents(): Vector2;

    /**
     * Frees the GPU-related resources allocated by this instance
     * @remarks
     * Call this method whenever this instance is no longer used in your app.
     */
    dispose(): void;
}
