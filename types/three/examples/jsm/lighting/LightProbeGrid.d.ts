import { Box3, Data3DTexture, Object3D, Scene, Vector3, WebGLRenderer } from "three";

export interface LightProbeGridBakeOptions {
    /**
     * Resolution of each cubemap face.
     */
    cubemapSize?: number | undefined;
    /**
     * Near plane for the cube camera.
     */
    near?: number | undefined;
    /**
     * Far plane for the cube camera.
     */
    far?: number | undefined;
    /**
     * Additional bounce passes after the initial direct pass.
     */
    bounces?: number | undefined;
}

/**
 * A 3D grid of L2 Spherical Harmonic irradiance probes that provides
 * position-dependent diffuse global illumination.
 *
 * Note that this class can only be used with {@link WebGLRenderer}.
 * A version for {@link WebGPURenderer} will be added at a later point.
 *
 * All seven packed SH sub-volumes are stored in a **single** RGBA
 * `WebGL3DRenderTarget` using a texture-atlas layout along the Z axis.
 * Each sub-volume occupies `( nz + 2 )` atlas slices: one padding slice at
 * each end (a copy of the nearest edge data slice) to prevent color bleeding
 * when the hardware trilinear filter reads across a sub-volume boundary.
 *
 * Atlas layout (nz = resolution.z, PADDING = 1):
 * ```
 *   slice   0              : padding  (copy of sub-volume 0, data slice 0)
 *   slices  1 … nz         : sub-volume 0 data
 *   slice   nz + 1         : padding  (copy of sub-volume 0, data slice nz-1)
 *   slice   nz + 2         : padding  (copy of sub-volume 1, data slice 0)
 *   slices  nz+3 … 2*nz+2  : sub-volume 1 data
 *   …
 * ```
 * Total atlas depth = `7 * ( nz + 2 )`.
 *
 * Baking is fully GPU-resident: cubemap rendering, SH projection, and
 * texture packing all happen on the GPU with zero CPU readback.
 *
 * @three_import import { LightProbeGrid } from 'three/addons/lighting/LightProbeGrid.js';
 */
export class LightProbeGrid extends Object3D {
    /**
     * Constructs a new irradiance probe grid.
     *
     * The volume is centered at the object's position.
     *
     * @param {number} [width=1] - Full width of the volume along X.
     * @param {number} [height=1] - Full height of the volume along Y.
     * @param {number} [depth=1] - Full depth of the volume along Z.
     * @param {number} [widthProbes] - Number of probes along X. Defaults to `Math.max( 2, Math.round( width ) + 1 )`.
     * @param {number} [heightProbes] - Number of probes along Y. Defaults to `Math.max( 2, Math.round( height ) + 1 )`.
     * @param {number} [depthProbes] - Number of probes along Z. Defaults to `Math.max( 2, Math.round( depth ) + 1 )`.
     */
    constructor(
        width?: number,
        height?: number,
        depth?: number,
        widthProbes?: number,
        heightProbes?: number,
        depthProbes?: number,
    );
    /**
     * This flag can be used for type testing.
     *
     * @type {boolean}
     * @readonly
     * @default true
     */
    readonly isLightProbeGrid: boolean;
    /**
     * The full width of the volume along X.
     *
     * @type {number}
     */
    width: number;
    /**
     * The full height of the volume along Y.
     *
     * @type {number}
     */
    height: number;
    /**
     * The full depth of the volume along Z.
     *
     * @type {number}
     */
    depth: number;
    /**
     * The number of probes along each axis.
     *
     * @type {Vector3}
     */
    resolution: Vector3;
    /**
     * The world-space bounding box for the grid. Updated automatically
     * by {@link LightProbeGrid#bake}.
     *
     * @type {Box3}
     */
    boundingBox: Box3;
    /**
     * The single RGBA atlas 3D texture storing all seven packed SH sub-volumes.
     *
     * @type {?Data3DTexture}
     * @default null
     */
    texture: Data3DTexture | null;
    /**
     * Returns the world-space position of the probe at grid indices (ix, iy, iz).
     *
     * @param {number} ix - X index.
     * @param {number} iy - Y index.
     * @param {number} iz - Z index.
     * @param {Vector3} target - The target vector.
     * @return {Vector3} The world-space position.
     */
    getProbePosition(ix: number, iy: number, iz: number, target: Vector3): Vector3;
    /**
     * Updates the world-space bounding box from the current position and size.
     */
    updateBoundingBox(): void;
    /**
     * Bakes all probes by rendering cubemaps at each probe position
     * and projecting to L2 SH. Optionally iterates additional passes to
     * capture indirect bounces — each extra pass samples the previous pass's
     * atlas as indirect light, so a grid added to the scene before baking
     * accumulates one bounce per extra pass.
     *
     * @param {WebGLRenderer} renderer - The renderer.
     * @param {Scene} scene - The scene to render.
     * @param {Object} [options] - Bake options.
     * @param {number} [options.cubemapSize=8] - Resolution of each cubemap face.
     * @param {number} [options.near=0.1] - Near plane for the cube camera.
     * @param {number} [options.far=100] - Far plane for the cube camera.
     * @param {number} [options.bounces=0] - Additional bounce passes after the initial direct pass.
     */
    bake(renderer: WebGLRenderer, scene: Scene, options?: LightProbeGridBakeOptions): void;
    /**
     * Frees GPU resources.
     */
    dispose(): void;
}
