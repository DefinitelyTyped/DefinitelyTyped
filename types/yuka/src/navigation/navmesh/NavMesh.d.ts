import { Graph } from "../../graph/core/Graph";
import { Polygon } from "../../math/Polygon";
import { Vector3 } from "../../math/Vector3";
import { CellSpacePartitioning } from "../../partitioning/CellSpacePartitioning";

/**
 * Implementation of a navigation mesh. A navigation mesh is a network of convex polygons
 * which define the walkable areas of a game environment. A convex polygon allows unobstructed travel
 * from any point in the polygon to any other. This is useful because it enables the navigation mesh
 * to be represented using a graph where each node represents a convex polygon and their respective edges
 * represent the neighborly relations to other polygons. More compact navigation graphs lead
 * to faster graph search execution.
 *
 * This particular implementation is able to merge convex polygons into bigger ones as long
 * as they keep their convexity and coplanarity. The performance of the path finding process and convex region tests
 * for complex navigation meshes can be improved by using a spatial index like {@link CellSpacePartitioning}.
 */
export class NavMesh {
    /**
     * The internal navigation graph of this navigation mesh representing neighboring polygons.
     */
    graph: Graph;

    /**
     * The list of convex regions.
     */
    regions: Polygon[];

    /**
     * A reference to a spatial index.
     * @default null
     */
    spatialIndex: CellSpacePartitioning | null;

    /**
     * The tolerance value for the coplanar test.
     * @default 1e-3
     */
    epsilonCoplanarTest: number;

    /**
     * The tolerance value for the containment test.
     * @default 1
     */
    epsilonContainsTest: number;

    /**
     * Whether convex regions should be merged or not.
     * @default true
     */
    mergeConvexRegions: boolean;

    constructor();

    /**
     * Creates the navigation mesh from an array of convex polygons.
     *
     * @param polygons - An array of convex polygons.
     */
    fromPolygons(polygons: Polygon[]): this;

    /**
     * Clears the internal state of this navigation mesh.
     */
    clear(): this;

    /**
     * Returns the closest convex region for the given point in 3D space.
     *
     * @param point - A point in 3D space.
     * @return The closest convex region.
     */
    getClosestRegion(point: Vector3): Polygon;

    /**
     * Returns at random a convex region from the navigation mesh.
     *
     * @return The convex region.
     */
    getRandomRegion(): Polygon;

    /**
     * Returns the region that contains the given point. The computational overhead
     * of this method for complex navigation meshes can be reduced by using a spatial index.
     * If no convex region contains the point, *null* is returned.
     *
     * @param point - A point in 3D space.
     * @param [epsilon=1e-3] - Tolerance value for the containment test.
     * @return The convex region that contains the point.
     */
    getRegionForPoint(point: Vector3, epsilon?: number): Polygon;

    /**
     * Returns the node index for the given region. The index represents
     * the navigation node of a region in the navigation graph.
     *
     * @param region - The convex region.
     * @return The respective node index.
     */
    getNodeIndex(region: Polygon): number;

    /**
     * Returns the shortest path that leads from the given start position to the end position.
     * The computational overhead of this method for complex navigation meshes can greatly
     * reduced by using a spatial index.
     *
     * @param from - The start/source position.
     * @param to - The end/destination position.
     * @return The shortest path as an array of points.
     */
    findPath(from: Vector3, to: Vector3): Vector3[];

    /**
     * This method can be used to restrict the movement of a game entity on the navigation mesh.
     * Instead of preventing any form of translation when a game entity hits a border edge, the
     * movement is clamped along the contour of the navigation mesh. The computational overhead
     * of this method for complex navigation meshes can be reduced by using a spatial index.
     *
     * @param currentRegion - The current convex region of the game entity.
     * @param startPosition - The original start position of the entity for the current simulation step.
     * @param endPosition - The original end position of the entity for the current simulation step.
     * @param clampPosition - The clamped position of the entity for the current simulation step.
     * @return The new convex region the game entity is in.
     */
    clampMovement(
        currentRegion: Polygon,
        startPosition: Vector3,
        endPosition: Vector3,
        clampPosition: Vector3,
    ): Polygon;

    /**
     * Updates the spatial index by assigning all convex regions to the
     * partitions of the spatial index.
     */
    updateSpatialIndex(): this;
}
