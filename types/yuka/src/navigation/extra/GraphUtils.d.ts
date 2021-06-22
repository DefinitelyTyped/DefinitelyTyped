import { Graph } from "../../graph/core/Graph";

/**
 * Class with graph helpers.
 */
export class GraphUtils {
    /**
     * Generates a navigation graph with a planar grid layout based on the given parameters.
     *
     * @param size - The size (width and depth) in x and z direction
     * @param segments - The amount of segments in x and z direction.
     * @return The new graph.
     */
    static createGridLayout(size: number, segments: number): Graph;
}
