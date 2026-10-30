import { Light, LightsNode, Node } from "three/webgpu";

/**
 * A custom version of `LightsNode` implementing Forward+ clustered shading:
 * the view frustum is subdivided into a 3D grid of clusters (X × Y screen tiles
 * times an exponentially-spaced set of Z depth slices), and each cluster holds
 * only the point and spot lights whose bounding spheres intersect it. At shading time each fragment
 * looks up its cluster and loops over just that cluster's lights. Unlike 2D tiled
 * lighting, clustered shading culls lights that share screen pixels but lie at
 * different depths — suitable for 3D scenes with real depth complexity.
 *
 * @augments LightsNode
 */
declare class ClusteredLightsNode extends LightsNode {
    materialLights: Light[];
    clusteredLights: Light[];
    maxLights: number;
    tileSize: number;
    zSlices: number;
    maxLightsPerCluster: number;

    /**
     * Constructs a new clustered lights node.
     *
     * @param {number} [maxLights=1024] - Maximum number of point and spot lights.
     * @param {number} [tileSize=32] - Screen tile size in pixels (cluster XY size).
     * @param {number} [zSlices=24] - Number of exponential depth slices.
     * @param {number} [maxLightsPerCluster=64] - Per-cluster light-list capacity.
     */
    constructor(maxLights?: number, tileSize?: number, zSlices?: number, maxLightsPerCluster?: number);

    /**
     * This flag can be used for type testing.
     *
     * @type {boolean}
     * @readonly
     * @default true
     */
    readonly isClusteredLightsNode: boolean;

    /**
     * Returns the number of lights in the fragment's cluster. Useful for debugging.
     *
     * @param {Node<int>} zSliceNode - The depth slice to inspect. A negative value selects the fragment's own cluster.
     * @return {Node<int>} The light count.
     */
    getClusterLightCount(zSliceNode: Node<"int">): Node<"int">;
    /**
     * Sets the size of the cluster grid. Must be called outside of rendering. Not required
     * with {@link ClusteredLighting}, which fits the grid at the beginning of each render.
     *
     * @param {number} width - The drawing buffer width.
     * @param {number} height - The drawing buffer height.
     * @return {ClusteredLightsNode} A reference to this node.
     */
    setSize(width: number, height: number): this;
    /**
     * Fits the cluster grid to the framebuffer of the render that is about to start. Called by
     * {@link ClusteredLighting} before the render objects of the render are prepared. Since each
     * render depth has its own node, no pending command buffer uses the resources of this node at
     * this point, so a rebuild can free the replaced resources immediately.
     */
    updateSize(): void;
}

/**
 * TSL function that creates a clustered lights node.
 *
 * @tsl
 * @function
 * @param {number} [maxLights=1024] - Maximum number of point and spot lights.
 * @param {number} [tileSize=32] - Screen tile size in pixels.
 * @param {number} [zSlices=24] - Depth slice count.
 * @param {number} [maxLightsPerCluster=64] - Per-cluster light-list capacity.
 * @return {ClusteredLightsNode} The clustered lights node.
 */
export const clusteredLights: (
    maxLights?: number,
    tileSize?: number,
    zSlices?: number,
    maxLightsPerCluster?: number,
) => ClusteredLightsNode;

export default ClusteredLightsNode;
