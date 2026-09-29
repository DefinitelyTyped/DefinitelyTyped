import { Camera, Frustum, Light, LightShadow, Matrix4, OrthographicCamera } from "three";

/**
 * Represents the shadow configuration of {@link SunLight}, using two
 * cascaded shadow maps (CSM).
 *
 * The shadow camera projection is fitted automatically to slices of the view
 * frustum, up to a distance of `camera.far` (or the view camera's far plane,
 * whichever is smaller), and adjacent cascades blend into each other over a
 * small depth range. `camera.left/right/top/bottom` are ignored.
 *
 * The default `mapSize` is `1024x1024` per cascade.
 *
 * @three_import import { SunLightShadow } from 'three/addons/lights/SunLightShadow.js';
 */
export class SunLightShadow extends LightShadow<OrthographicCamera> {
    /**
     * Constructs a new sun light shadow.
     */
    constructor();
    /**
     * This flag can be used for type testing.
     *
     * @default true
     */
    readonly isSunLightShadow: boolean;
    /**
     * Returns the shadow camera of the given cascade.
     *
     * @param {number} [cascadeIndex=0] - The cascade index.
     * @return {OrthographicCamera} The shadow camera.
     */
    getCamera(cascadeIndex?: number): OrthographicCamera;
    /**
     * Returns the shadow matrix of the given cascade.
     *
     * @param {number} [cascadeIndex=0] - The cascade index.
     * @return {Matrix4} The shadow matrix.
     */
    getMatrix(cascadeIndex?: number): Matrix4;
    /**
     * Returns the shadow camera frustum of the given cascade. Used internally by
     * the renderer to cull objects.
     *
     * @param {number} [cascadeIndex=0] - The cascade index.
     * @return {Frustum} The shadow camera frustum.
     */
    getFrustum(cascadeIndex?: number): Frustum;
    /**
     * Update the matrices for the cascade cameras and shadows, used internally
     * by the renderer.
     *
     * @param {Light} light - The light for which the shadow is being rendered.
     * @param {Camera} viewCamera - The camera the scene is rendered with.
     */
    updateMatrices(light: Light, viewCamera?: Camera): void;
}
