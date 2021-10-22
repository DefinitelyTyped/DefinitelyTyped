import { AABB } from "../math/AABB";
import { BoundingSphere } from "../math/BoundingSphere";
import { Matrix4 } from "../math/Matrix4";
import { Ray } from "../math/Ray";
import { Vector3 } from "../math/Vector3";

/**
 * Class for representing a polygon mesh.
 * The faces consist of triangles.
 */
export class MeshGeometry {
    /**
     * The vertex buffer.
     */
    vertices: Float32Array;

    /**
     * The index buffer.
     */
    indices: Uint16Array | Uint32Array | null;

    /**
     *  Whether back face culling is active or not. Only relevant for raycasting.
     * @default true
     */
    backfaceCulling: boolean;

    /**
     * An AABB enclosing the geometry.
     */
    aabb: AABB;

    /**
     * A bounding sphere enclosing the geometry.
     */
    boundingSphere: BoundingSphere;

    /**
     * Constructs a new mesh geometry.
     *
     * @param [vertices=Float32Array(0)] - The vertex buffer (Float32Array).
     * @param [indices=null] - The index buffer (Uint16Array/Uint32Array).
     */
    constructor(vertices?: Float32Array, indices?: Uint16Array | Uint32Array | null);

    /**
     * Computes the internal bounding volumes of this mesh geometry.
     */
    computeBoundingVolume(): this;

    /**
     * Performs a ray intersection test with the geometry of the obstacle and stores
     * the intersection point in the given result vector. If no intersection is detected,
     * *null* is returned.
     *
     * @param ray - The ray to test.
     * @param worldMatrix - The matrix that transforms the geometry to world space.
     * @param closest - Whether the closest intersection point should be computed or not.
     * @param intersectionPoint - The intersection point.
     * @param [normal=null] - The normal vector of the respective triangle.
     * @return The result vector.
     */
    intersectRay(
        ray: Ray,
        worldMatrix: Matrix4,
        closest: boolean,
        intersectionPoint: Vector3,
        normal?: Vector3,
    ): Vector3;

    /**
     * Returns a new geometry without containing indices. If the geometry is already
     * non-indexed, the method performs no changes.
     *
     * @return The new non-indexed geometry.
     */
    toTriangleSoup(): this;

    /**
     * Transforms this instance into a JSON object.
     *
     * @return The JSON object.
     */
    toJSON(): { [s: string]: any };

    /**
     * Restores this instance from the given JSON object.
     *
     * @param json - The JSON object.
     */
    fromJSON(json: { [s: string]: any }): this;
}
