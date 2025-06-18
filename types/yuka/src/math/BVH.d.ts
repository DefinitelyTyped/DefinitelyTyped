import { MeshGeometry } from "../core/MeshGeometry";
import { AABB } from "./AABB";
import { Ray } from "./Ray";
import { Vector3 } from "./Vector3";

/**
 * Class representing a bounding volume hierarchy. The current implementation
 * represents single BVH nodes as AABBs. It accepts arbitrary branching factors
 * and can subdivide the given geometry until a defined hierarchy depth has been reached.
 * Besides, the hierarchy construction is performed top-down and the algorithm only
 * performs splits along the cardinal axes.
 *
 * Reference: Bounding Volume Hierarchies in Real-Time Collision Detection
 * by Christer Ericson (chapter 6).
 */
export class BVH {
    /**
     * The branching factor (how many nodes per level).
     * @default 2
     */
    branchingFactor: number;

    /**
     * The minimum amount of primitives per BVH node.
     * @default 10
     */
    primitivesPerNode: number;

    /**
     * The maximum hierarchical depth.
     * @default 10
     */
    depth: number;

    /**
     * The root BVH node.
     * @default null
     */
    root: BVHNode | null;

    /**
     * Constructs a new BVH.
     *
     * @param [branchingFactor=2] - The branching factor.
     * @param [primitivesPerNode=1] - The minimum amount of primitives per BVH node.
     * @param [depth=10] - The maximum hierarchical depth.
     */
    constructor(branchingFactor?: number, primitivesPerNode?: number, depth?: number);

    /**
     * Computes a BVH for the given mesh geometry.
     *
     * @param geometry - The mesh geometry.
     */
    fromMeshGeometry(geometry: MeshGeometry): this;

    /**
     * Executes the given callback for each node of the BVH.
     *
     * @param callback - The callback to execute.
     */
    traverse(callback: BVHNodeTraverseCallback): this;
}

export type BVHNodeTraverseCallback = (node: BVHNode) => void;

/**
 * A single node in a bounding volume hierarchy (BVH).
 */
export class BVHNode {
    /**
     * The parent BVH node.
     * @default null
     */
    parent: BVHNode | null;

    /**
     * The child BVH nodes.
     */
    children: BVHNode[];

    /**
     * The bounding volume of this BVH node.
     */
    boundingVolume: AABB;

    /**
     * The primitives (triangles) of this BVH node.
     * Only filled for leaf nodes.
     */
    primitives: number[];

    /**
     * The centroids of the node's triangles.
     * Only filled for leaf nodes.
     */
    centroids: number[];

    /**
     * Constructs a BVH node.
     */
    constructor();

    /**
     * Returns true if this BVH node is a root node.
     *
     * @return Whether this BVH node is a root node or not.
     */
    root(): boolean;

    /**
     * Returns true if this BVH node is a leaf node.
     *
     * @return Whether this BVH node is a leaf node or not.
     */
    leaf(): boolean;

    /**
     * Returns the depth of this BVH node in its hierarchy.
     *
     * @return The hierarchical depth of this BVH node.
     */
    getDepth(): number;

    /**
     * Executes the given callback for this BVH node and its ancestors.
     *
     * @param callback - The callback to execute.
     */
    traverse(callback: BVHNodeTraverseCallback): this;

    /**
     * Builds this BVH node. That means the respective bounding volume
     * is computed and the node's primitives are distributed under new child nodes.
     * This only happens if the maximum hierarchical depth is not yet reached and
     * the node does contain enough primitives required for a split.
     *
     * @param branchingFactor - The branching factor.
     * @param primitivesPerNode - The minimum amount of primitives per BVH node.
     * @param maxDepth - The maximum  hierarchical depth.
     * @param currentDepth - The current hierarchical depth.
     */
    build(branchingFactor: number, primitivesPerNode: number, maxDepth: number, currentDepth: number): this;

    /**
     * Computes the AABB for this BVH node.
     */
    computeBoundingVolume(): this;

    /**
     * Computes the split axis. Right now, only the cardinal axes
     * are potential split axes.
     *
     * @return The split axis.
     */
    computeSplitAxis(): Vector3;

    /**
     * Splits the node and distributes node's primitives over new child nodes.
     *
     * @param branchingFactor - The branching factor.
     */
    split(branchingFactor: number): this;

    /**
     * Performs a ray/BVH node intersection test and stores the closest intersection point
     * to the given 3D vector. If no intersection is detected, *null* is returned.
     *
     * @param ray - The ray.
     * @param result - The result vector.
     * @return The result vector.
     */
    intersectRay(ray: Ray, result: Vector3): Vector3;

    /**
     * Performs a ray/BVH node intersection test. Returns either true or false if
     * there is a intersection or not.
     *
     * @param ray - The ray.
     * @return Whether there is an intersection or not.
     */
    intersectsRay(ray: Ray): boolean;
}
