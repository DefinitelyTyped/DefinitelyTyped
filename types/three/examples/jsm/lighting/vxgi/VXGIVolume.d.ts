import {
    Box3,
    Layers,
    Node,
    Renderer,
    Scene,
    Storage3DTexture,
    Texture3DNode,
    UniformNode,
    Vector3,
} from "three/webgpu";

/**
 * Holds the voxel representation of a scene for {@link VXGINode}: an anisotropic opacity
 * mip chain, a direct radiance volume and a radiance volume with cached bounces.
 *
 * The representation is a dense variant of the pre-filtered voxel hierarchy of Crassin et al. 2011
 * (a dense mip chain instead of a sparse octree, which keeps cone samples to two texture fetches):
 * opacity stores visibility per major axis and is filtered directionally (volumetric integration
 * along the axis, averaging across it), radiance is stored opacity-premultiplied and indirect bounces
 * are cached in the volume via cone tracing. Only direct lights are injected.
 * Voxelization uses conservative rasterization along the dominant triangle axis in a compute shader.
 *
 * Direct light is injected per voxel instead of splatting photons from a light-view map as in the
 * paper: the shadow maps rendered by the renderer are the light-view maps, and every occupied voxel
 * pulls its visibility from them (2D maps for directional and spot lights, cube maps for point
 * lights) and evaluates its irradiance analytically. This reuses the existing shadow passes, makes
 * the injected shadows match the direct lighting exactly and needs neither atomics nor a
 * normalization by photon density. Lights without a shadow map fall back to a visibility cone
 * traced through the volume. The trade-off is a cost proportional to the number of occupied voxels
 * times lights rather than to the light-view resolution, and that only outgoing diffuse radiance
 * is stored (no incoming direction distribution for glossy cones).
 *
 * References:
 * - {@link https://research.nvidia.com/publication/2011-09_interactive-indirect-illumination-using-voxel-cone-tracing}:
 *   Crassin et al., Interactive Indirect Illumination Using Voxel Cone Tracing, Pacific Graphics 2011.
 * - {@link https://developer.nvidia.com/content/basics-gpu-voxelization}: Basics of GPU voxelization.
 *
 * Note: This class can only be used with `WebGPURenderer` and a WebGPU backend.
 *
 * @three_import import { VXGIVolume } from 'three/addons/lighting/vxgi/VXGIVolume.js';
 */
export class VXGIVolume {
    /**
     * Constructs a new volume.
     *
     * @param {number} [resolution=128] - Number of voxels along the longest axis of the bounds. Should not exceed `256`, higher values exceed the maximum storage buffer size of the voxelizer.
     */
    constructor(resolution?: number);
    /**
     * Number of voxels along the longest axis of the bounds. Should not exceed `256`, higher values exceed the maximum storage buffer size of the voxelizer.
     *
     * @type {number}
     * @default 128
     */
    resolution: number;
    /**
     * The requested world-space bounds of the volume. If empty (the default), the bounds are
     * computed from the scene at voxelization. See {@link VXGIVolume#worldBounds} for the
     * effective bounds.
     *
     * @type {Box3}
     */
    bounds: Box3;
    /**
     * The effective world-space bounds of the voxel grid, updated at voxelization.
     *
     * @type {Box3}
     * @readonly
     */
    readonly worldBounds: Box3;
    /**
     * Only meshes that pass this layer test are voxelized.
     *
     * @type {Layers}
     */
    layers: Layers;
    /**
     * Number of cached indirect bounces stored in the volume. Should be in the range `[0, 2]`.
     *
     * @type {number}
     * @default 1
     */
    bounces: number;
    /**
     * Triangles with a lower opacity are not voxelized.
     *
     * @type {number}
     * @default 0.1
     */
    minOpacity: number;
    /**
     * Whether the coarser radiance levels are filtered directionally: along each axis the finer
     * voxels are composited front to back using their surface normals, so a cone only gathers
     * the surfaces facing it. This reduces light bleeding through thin walls and floors (e.g. a
     * sunlit floor brightening the ceiling of the room below) at the cost of additional memory
     * and a more expensive radiance lookup. Changing it triggers a re-voxelization.
     *
     * @type {boolean}
     * @default false
     */
    directionalRadiance: boolean;
    /**
     * Maximum number of lights injected into the volume.
     *
     * @type {number}
     * @default 8
     */
    maxLights: number;
    /**
     * Set to `true` to re-voxelize the scene in the next update.
     *
     * @type {boolean}
     * @default true
     */
    needsUpdate: boolean;
    /**
     * Set to `true` to re-inject lighting in the next update. Changes of the lights and of the
     * injection parameters are detected automatically, so this is rarely needed.
     *
     * @type {boolean}
     * @default true
     */
    lightingNeedsUpdate: boolean;
    /**
     * Maximum cone length in world units. `0` means unbounded.
     *
     * @type {UniformNode<float>}
     * @default 0
     */
    maxDistance: UniformNode<"float", number>;
    /**
     * Step size relative to the texel size of the sampled mip level.
     *
     * @type {UniformNode<float>}
     * @default 0.5
     */
    stepScale: UniformNode<"float", number>;
    /**
     * Aperture in degrees of the visibility cones traced towards lights that do not provide a
     * shadow map. Wider cones are cheaper but soften the injected shadows.
     *
     * @type {UniformNode<float>}
     * @default 10
     */
    shadowConeAngle: UniformNode<"float", number>;
    /**
     * Aperture of the cones used for the cached bounces in degrees.
     *
     * @type {UniformNode<float>}
     * @default 60
     */
    bounceConeAngle: UniformNode<"float", number>;
    /**
     * The minimum corner of the volume.
     *
     * @type {UniformNode<vec3>}
     */
    boundsMinNode: UniformNode<"vec3", Vector3>;
    /**
     * The size of the volume.
     *
     * @type {UniformNode<vec3>}
     */
    volumeSizeNode: UniformNode<"vec3", Vector3>;
    /**
     * The size of a voxel.
     *
     * @type {UniformNode<float>}
     */
    voxelSizeNode: UniformNode<"float", number>;
    /**
     * The highest valid mip level of the voxel textures.
     *
     * @type {UniformNode<float>}
     */
    maxLevelNode: UniformNode<"float", number>;
    /**
     * The per-axis opacity of the scene (`xyz`) and the occupancy (`w`) as a mip chain.
     *
     * @type {Storage3DTexture}
     */
    opacityTexture: Storage3DTexture;
    /**
     * The radiance of the scene including cached bounces, premultiplied by occupancy, as a mip chain.
     * With {@link VXGIVolume#directionalRadiance} only the finest level is used and the coarser
     * levels live in {@link VXGIVolume#directionalTexture}.
     *
     * @type {Storage3DTexture}
     */
    radianceTexture: Storage3DTexture;
    /**
     * Texture node of {@link VXGIVolume#opacityTexture}. Stays valid across re-allocations of the volume.
     *
     * @type {Texture3DNode}
     */
    opacityNode: Texture3DNode;
    /**
     * Texture node of {@link VXGIVolume#radianceTexture}. Stays valid across re-allocations of the volume.
     *
     * @type {Texture3DNode}
     */
    radianceNode: Texture3DNode;
    /**
     * The coarser radiance levels filtered directionally for the six directions a ray can travel
     * (+x, -x, +y, -y, +z, -z), only allocated with {@link VXGIVolume#directionalRadiance}. Each
     * texel holds the radiance of the surfaces facing the direction premultiplied by their weight
     * (`rgb`) and the weight (`a`); occlusion comes from the opacity mip chain. The six directions
     * are stored side by side along x in one half-resolution mip chain; level `n` of the volume is
     * its level `n - 1`.
     *
     * @type {Storage3DTexture}
     */
    directionalTexture: Storage3DTexture;
    /**
     * Texture node of {@link VXGIVolume#directionalTexture}. Stays valid across re-allocations of the volume.
     *
     * @type {Texture3DNode}
     */
    directionalNode: Texture3DNode;
    /**
     * The width of one direction block of the directional texture in texels (at its level 0).
     *
     * @type {UniformNode<float>}
     */
    directionalWidthNode: UniformNode<"float", number>;
    /**
     * The effective maximum cone length as a node.
     *
     * @type {Node<float>}
     */
    get traceDistanceNode(): Node<"float">;
    /**
     * Updates the volume if required. Voxelizes the scene when `needsUpdate` is set and re-injects
     * lighting when `lightingNeedsUpdate` is set or a light has changed.
     *
     * @param {Renderer} renderer - The renderer.
     * @param {Scene} scene - The scene.
     */
    update(renderer: Renderer, scene: Scene): void;
    /**
     * Frees internal resources.
     */
    dispose(): void;
}
