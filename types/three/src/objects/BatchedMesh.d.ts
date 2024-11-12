import { Camera } from "../cameras/Camera.js";
import { BufferGeometry } from "../core/BufferGeometry.js";
import { Material } from "../materials/Material.js";
import { Box3 } from "../math/Box3.js";
import { Color } from "../math/Color.js";
import { Matrix4 } from "../math/Matrix4.js";
import { Sphere } from "../math/Sphere.js";
import { Mesh } from "./Mesh.js";

export interface BatchedMeshGeometryRange {
    vertexStart: number;
    vertexCount: number;
    reservedVertexCount: number;
    indexStart: number;
    indexCount: number;
    reservedIndexCount: number;
    start: number;
    count: number;
}

/**
 * A special version of {@link Mesh} with multi draw batch rendering support. Use {@link BatchedMesh} if you have to
 * render a large number of objects with the same material but with different world transformations. The  usage of
 * {@link BatchedMesh} will help you to reduce the number of draw calls and thus improve the overall rendering
 * performance in your application.
 *
 * If the {@link https://developer.mozilla.org/en-US/docs/Web/API/WEBGL_multi_draw WEBGL_multi_draw extension} is not
 * supported then a less performant fallback is used.
 *
 * @example
 * const box = new THREE.BoxGeometry( 1, 1, 1 );
 * const sphere = new THREE.SphereGeometry( 1, 12, 12 );
 * const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
 *
 * // initialize and add geometries into the batched mesh
 * const batchedMesh = new BatchedMesh( 10, 5000, 10000, material );
 * const boxGeometryId = batchedMesh.addGeometry( box );
 * const sphereGeometryId = batchedMesh.addGeometry( sphere );
 *
 * // create instances of those geometries
 * const boxInstancedId1 = batchedMesh.addInstance( boxGeometryId );
 * const boxInstancedId2 = batchedMesh.addInstance( boxGeometryId );
 *
 * const sphereInstancedId1 = batchedMesh.addInstance( sphereGeometryId );
 * const sphereInstancedId2 = batchedMesh.addInstance( sphereGeometryId );
 *
 * // position the geometries
 * batchedMesh.setMatrixAt( boxInstancedId1, boxMatrix1 );
 * batchedMesh.setMatrixAt( boxInstancedId2, boxMatrix2 );
 *
 * batchedMesh.setMatrixAt( sphereInstancedId1, sphereMatrix1 );
 * batchedMesh.setMatrixAt( sphereInstancedId2, sphereMatrix2 );
 *
 * scene.add( batchedMesh );
 *
 * @also Example: {@link https://threejs.org/examples/#webgl_mesh_batch WebGL / mesh / batch}
 */
declare class BatchedMesh extends Mesh<BufferGeometry, Material> {
    /**
     * This bounding box encloses all instances of the {@link BatchedMesh}. Can be calculated with
     * {@link .computeBoundingBox()}.
     * @default null
     */
    boundingBox: Box3 | null;

    /**
     * This bounding sphere encloses all instances of the {@link BatchedMesh}. Can be calculated with
     * {@link .computeBoundingSphere()}.
     * @default null
     */
    boundingSphere: Sphere | null;

    customSort: ((this: this, list: Array<{ start: number; count: number; z: number }>, camera: Camera) => void) | null;

    /**
     * If true then the individual objects within the {@link BatchedMesh} are frustum culled.
     * @default true
     */
    perObjectFrustumCulled: boolean;

    /**
     * If true then the individual objects within the {@link BatchedMesh} are sorted to improve overdraw-related
     * artifacts. If the material is marked as "transparent" objects are rendered back to front and if not then they are
     * rendered front to back.
     * @default true
     */
    sortObjects: boolean;

    /**
     * The maximum number of individual geometries that can be stored in the {@link BatchedMesh}. Read only.
     */
    get maxInstanceCount(): number;

    get instanceCount(): number;

    get unusedVertexCount(): number;

    get unusedIndexCount(): number;

    /**
     * Read-only flag to check if a given object is of type {@link BatchedMesh}.
     */
    readonly isBatchedMesh: true;

    /**
     * @param maxInstanceCount the max number of individual geometries planned to be added.
     * @param maxVertexCount the max number of vertices to be used by all geometries.
     * @param maxIndexCount the max number of indices to be used by all geometries.
     * @param material an instance of {@link Material}. Default is a new {@link MeshBasicMaterial}.
     */
    constructor(maxInstanceCount: number, maxVertexCount: number, maxIndexCount?: number, material?: Material);

    /**
     * Computes the bounding box, updating {@link .boundingBox} attribute.
     * Bounding boxes aren't computed by default. They need to be explicitly computed, otherwise they are `null`.
     */
    computeBoundingBox(): void;

    /**
     * Computes the bounding sphere, updating {@link .boundingSphere} attribute.
     * Bounding spheres aren't computed by default. They need to be explicitly computed, otherwise they are `null`.
     */
    computeBoundingSphere(): void;

    /**
     * Frees the GPU-related resources allocated by this instance. Call this method whenever this instance is no longer
     * used in your app.
     */
    dispose(): this;

    /**
     * Takes a sort a function that is run before render. The function takes a list of instances to sort and a camera.
     * The objects in the list include a "z" field to perform a depth-ordered sort with.
     */
    setCustomSort(
        sortFunction:
            | ((this: this, list: Array<{ start: number; count: number; z: number }>, camera: Camera) => void)
            | null,
    ): this;

    /**
     * Get the color of the defined geometry.
     * @param instanceId The id of an instance to get the color of.
     * @param target The target object to copy the color in to.
     */
    getColorAt(instanceId: number, target: Color): void;

    /**
     * Get the local transformation matrix of the defined instance.
     * @param instanceId The id of an instance to get the matrix of.
     * @param target This 4x4 matrix will be set to the local transformation matrix of the defined instance.
     */
    getMatrixAt(instanceId: number, target: Matrix4): Matrix4;

    /**
     * Get whether the given instance is marked as "visible" or not.
     * @param instanceId The id of an instance to get the visibility state of.
     */
    getVisibleAt(instanceId: number): boolean;

    /**
     * Get the range representing the subset of triangles related to the attached geometry, indicating the starting
     * offset and count, or `null` if invalid.
     *
     * Return an object of the form: { start: Integer, count: Integer }
     * @param geometryId The id of the geometry to get the range of.
     * @param target Optional target object to copy the range in to.
     */
    getGeometryRangeAt(
        geometryId: number,
        target?: BatchedMeshGeometryRange,
    ): BatchedMeshGeometryRange | null;

    /**
     * Get the geometryIndex of the defined instance.
     * @param instanceId The id of an instance to get the geometryIndex of.
     */
    getGeometryIdAt(instanceId: number): number;

    /**
     * Sets the given color to the defined geometry instance.
     * @param instanceId The id of the instance to set the color of.
     * @param color The color to set the instance to.
     */
    setColorAt(instanceId: number, color: Color): void;

    /**
     * Sets the given local transformation matrix to the defined instance.
     * @param instanceId The id of an instance to set the matrix of.
     * @param matrix A 4x4 matrix representing the local transformation of a single instance.
     */
    setMatrixAt(instanceId: number, matrix: Matrix4): this;

    /**
     * Sets the visibility of the instance at the given index.
     * @param instanceId The id of the instance to set the visibility of.
     * @param visible A boolean value indicating the visibility state.
     */
    setVisibleAt(instanceId: number, visible: boolean): this;

    /**
     * Sets the geometryIndex of the instance at the given index.
     * @param instanceId The id of the instance to set the geometryIndex of.
     * @param geometryId The geometryIndex to be use by the instance.
     */
    setGeometryIdAt(instanceId: number, geometryId: number): this;

    /**
     * Adds the given geometry to the {@link BatchedMesh} and returns the associated index referring to it.
     * @param geometry The geometry to add into the {@link BatchedMesh}.
     * @param reservedVertexRange Optional parameter specifying the amount of vertex buffer space to reserve for the
     * added geometry. This is necessary if it is planned to set a new geometry at this index at a later time that is
     * larger than the original geometry. Defaults to the length of the given geometry vertex buffer.
     * @param reservedIndexRange Optional parameter specifying the amount of index buffer space to reserve for the added
     * geometry. This is necessary if it is planned to set a new geometry at this index at a later time that is larger
     * than the original geometry. Defaults to the length of the given geometry index buffer.
     */
    addGeometry(geometry: BufferGeometry, reservedVertexRange?: number, reservedIndexRange?: number): number;

    /**
     * Adds a new instance to the {@link BatchedMesh} using the geometry of the given geometryId and returns a new id
     * referring to the new instance to be used by other functions.
     * @param geometryId The id of a previously added geometry via "addGeometry" to add into the {@link BatchedMesh} to
     * render.
     */
    addInstance(geometryId: number): number;

    /**
     * @param geometryId The id of a geometry to remove from the [name] that was previously added via "addGeometry". Any
     * instances referencing this geometry will also be removed as a side effect.
     */
    deleteGeometry(geometryId: number): this;

    /**
     * Removes an existing instance from the BatchedMesh using the given instanceId.
     * @param instanceId The id of an instance to remove from the BatchedMesh that was previously added via
     * "addInstance".
     */
    deleteInstance(instanceId: number): this;

    /**
     * Replaces the geometry at `geometryId` with the provided geometry. Throws an error if there is not enough space
     * reserved for geometry. Calling this will change all instances that are rendering that geometry.
     * @param geometryId Which geometry id to replace with this geometry.
     * @param geometry The geometry to substitute at the given geometry id.
     */
    setGeometryAt(geometryId: number, geometry: BufferGeometry): number;

    /**
     * Repacks the sub geometries in [name] to remove any unused space remaining from previously deleted geometry,
     * freeing up space to add new geometry.
     */
    optimize(): this;

    /**
     * Resizes the available space in BatchedMesh's vertex and index buffer attributes to the provided sizes. If the
     * provided arguments shrink the geometry buffers but there is not enough unused space at the end of the geometry
     * attributes then an error is thrown.
     * @param maxVertexCount the max number of vertices to be used by all unique geometries to resize to.
     * @param maxIndexCount the max number of indices to be used by all unique geometries to resize to.
     */
    setGeometrySize(maxVertexCount: number, maxIndexCount: number): void;

    /**
     * Resizes the necessary buffers to support the provided number of instances. If the provided arguments shrink the
     * number of instances but there are not enough unused ids at the end of the list then an error is thrown.
     * @param maxInstanceCount the max number of individual instances that can be added and rendered by the BatchedMesh.
     */
    setInstanceCount(maxInstanceCount: number): void;

    getBoundingBoxAt(geometryId: number, target: Box3): Box3 | null;
    getBoundingSphereAt(geometryId: number, target: Sphere): Sphere | null;
}

export { BatchedMesh };
