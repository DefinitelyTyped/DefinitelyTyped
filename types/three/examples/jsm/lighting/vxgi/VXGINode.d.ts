import { Camera, SampleNode, Scene, TempNode, TextureNode, UniformNode } from "three/webgpu";
import { VXGIVolume } from "./VXGIVolume.js";

/**
 * Post processing node for voxel based global illumination. The scene is voxelized into a
 * {@link VXGIVolume} and indirect diffuse light and ambient occlusion are gathered per
 * pixel with approximate voxel cone tracing.
 *
 * The node is a middle path between SSGI and Light Probe Grids:
 *
 * - Compared to `SSGINode` it is free of screen-space artifacts and provides noticeably more
 *   consistent lighting, since off-screen surfaces and thin occluders contribute.
 *   However, it is less dynamic: objects should stay static, because geometry changes require
 *   a re-voxelization (`needsUpdate = true`) which is too expensive for per-frame animation.
 * - Compared to `LightProbeGrid` it supports dynamic lighting without a new baking process and
 *   produces a better overall lighting quality with less light bleeding. However, it is more
 *   expensive and therefore less suitable for performance restricted use cases.
 *
 * Note: This node can only be used with `WebGPURenderer` and a WebGPU backend.
 *
 * @augments TempNode
 * @three_import import { vxgi } from 'three/addons/lighting/vxgi/VXGINode.js';
 */
declare class VXGINodeInterface {
    depthNode: TextureNode;
    normalNode: TextureNode | SampleNode<"vec3"> | null;
    scene: Scene;
    camera: Camera;

    /**
     * The voxel volume. Use it to configure bounds, layers and bounces.
     */
    volume: VXGIVolume;

    coneCount: UniformNode<"uint", number>;
    coneAngle: UniformNode<"float", number>;
    giIntensity: UniformNode<"float", number>;
    aoIntensity: UniformNode<"float", number>;
    aoMinVisibility: UniformNode<"float", number>;
    aoDistance: UniformNode<"float", number>;
    normalOffset: UniformNode<"float", number>;
    debug: UniformNode<"int", number>;
    debugLevel: UniformNode<"float", number>;

    /**
     * Whether to use temporal filtering or not. Setting this property to `true` requires the
     * usage of `TRAANode`. Cone directions are then rotated per frame to converge the noise.
     */
    useTemporalFiltering: boolean;

    /**
     * Number of cached indirect bounces. See {@link VXGIVolume#bounces}.
     */
    bounces: number;

    /**
     * Whether the coarser radiance levels are filtered directionally to reduce light bleeding
     * through thin walls and floors. See {@link VXGIVolume#directionalRadiance}.
     */
    directionalRadiance: boolean;

    /**
     * Set to `true` to re-voxelize the scene in the next frame.
     */
    needsUpdate: boolean;

    /**
     * Set to `true` to re-inject lighting in the next frame.
     */
    lightingNeedsUpdate: boolean;

    getAONode(): TextureNode<"float">;
    getGINode(): TextureNode<"vec4">;

    setSize(width: number, height: number): void;

    dispose(): void;
}

declare const VXGINode: {
    new(
        depthNode: TextureNode,
        normalNode: TextureNode | SampleNode<"vec3"> | null,
        scene: Scene,
        camera: Camera,
        resolution?: number,
    ): VXGINode;
};

type VXGINode = VXGINodeInterface & TempNode<"vec4">;

export default VXGINode;

export const vxgi: (
    depthNode: TextureNode,
    normalNode: TextureNode | SampleNode<"vec3"> | null,
    scene: Scene,
    camera: Camera,
    resolution?: number,
) => VXGINode;
