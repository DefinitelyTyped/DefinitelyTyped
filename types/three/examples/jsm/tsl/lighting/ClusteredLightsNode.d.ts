import { Light, LightsNode, Node } from "three/webgpu";

/**
 * A custom version of `LightsNode` implementing Forward+ clustered shading:
 * the view frustum is subdivided into a 3D grid of clusters (X × Y screen tiles
 * times an exponentially-spaced set of Z depth slices), and each cluster holds
 * only the point lights whose spheres intersect it. At shading time each fragment
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
     * @param {number} [maxLights=1024] - Maximum number of point lights.
     * @param {number} [tileSize=32] - Screen tile size in pixels (cluster XY size).
     * @param {number} [zSlices=24] - Number of exponential depth slices.
     * @param {number} [maxLightsPerCluster=64] - Per-cluster light-list capacity.
     */
    constructor(maxLights?: number, tileSize?: number, zSlices?: number, maxLightsPerCluster?: number);

    getClusterLightCount(zSliceNode: Node<"int">): Node<"int">;

    setSize(width: number, height: number): this;
}

/**
 * TSL function that creates a clustered lights node.
 *
 * @function
 * @param {number} [maxLights=1024] - Maximum number of point lights.
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
