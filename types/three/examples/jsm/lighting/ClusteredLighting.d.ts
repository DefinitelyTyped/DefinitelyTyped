import { Light, Lighting, LightsNode, Scene } from "three/webgpu";
import ClusteredLightsNode from "../tsl/lighting/ClusteredLightsNode.js";

/**
 * A custom lighting implementation based on Forward+ Clustered Shading that
 * overwrites the default lighting system in {@link WebGPURenderer}. Suitable
 * for 3D scenes with many point and spot lights and real depth complexity — the view
 * frustum is partitioned into a 3D cluster grid so only the lights actually
 * reaching each fragment are evaluated.
 *
 * ```js
 * const lighting = new ClusteredLighting();
 * renderer.lighting = lighting; // set lighting system
 * ```
 *
 * @augments Lighting
 * @three_import import { ClusteredLighting } from 'three/addons/lighting/ClusteredLighting.js';
 */
export class ClusteredLighting extends Lighting {
    maxLights: number;
    tileSize: number;
    zSlices: number;
    maxLightsPerCluster: number;

    /**
     * Constructs a new clustered lighting system.
     *
     * @param {number} [maxLights=1024] - Maximum number of point and spot lights.
     * @param {number} [tileSize=32] - Screen tile size in pixels (cluster XY size).
     * @param {number} [zSlices=24] - Number of exponential depth slices.
     * @param {number} [maxLightsPerCluster=64] - Per-cluster light-list capacity.
     */
    constructor(maxLights?: number, tileSize?: number, zSlices?: number, maxLightsPerCluster?: number);

    /**
     * Creates a new clustered lights node for the given array of lights.
     *
     * This method is called internally by the renderer and must be overwritten by
     * all custom lighting implementations.
     *
     * @param {Array<Light>} lights - The lights.
     * @return {ClusteredLightsNode} The clustered lights node.
     */
    createNode(lights?: Light[]): ClusteredLightsNode;
    /**
     * Returns the lights node of the given scene for the current render depth of that scene.
     * A scene rendered inside one of its own renders uses another node, so it never modifies
     * the cluster data of the outer render, which has not been submitted yet.
     *
     * @param {Scene} scene - The scene.
     * @return {LightsNode} The lights node.
     */
    getNode(scene: Scene): LightsNode;
    /**
     * Saves the lights of the scene's lights node and fits its cluster grid to the framebuffer
     * of the render. This happens before any render object of the render is prepared, and the
     * node of this depth is not used by any pending command buffer, so resources replaced by a
     * rebuild are freed immediately.
     *
     * @param {Scene} scene - The scene.
     */
    beginRender(scene: Scene): void;
    /**
     * Restores the lights of the scene's lights node.
     *
     * @param {Scene} scene - The scene.
     */
    finishRender(scene: Scene): void;
}
