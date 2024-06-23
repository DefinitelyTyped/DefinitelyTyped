import { Box3 } from "../math/Box3.js";
import { Matrix4 } from "../math/Matrix4.js";
import { Quaternion } from "../math/Quaternion.js";
import { Sphere } from "../math/Sphere.js";
import { Vector2 } from "../math/Vector2.js";
import { Vector3 } from "../math/Vector3.js";
import { BufferAttribute } from "./BufferAttribute.js";
import { EventDispatcher } from "./EventDispatcher.js";
import { GLBufferAttribute } from "./GLBufferAttribute.js";
import { InterleavedBufferAttribute } from "./InterleavedBufferAttribute.js";

export type NormalBufferAttributes = Record<string, BufferAttribute | InterleavedBufferAttribute>;
export type NormalOrGLBufferAttributes = Record<
    string,
    BufferAttribute | InterleavedBufferAttribute | GLBufferAttribute
>;

export interface GeometryGroup {
    /**
     * Specifies the first element in this draw call – the first vertex for non-indexed geometry, otherwise the first triangle index.
     * @remarks Expects a `Integer`
     */
    start: number;
    /**
     * Specifies how many vertices (or indices) are included.
     * @remarks Expects a `Integer`
     */
    count: number;
    /**
     * Specifies the material array index to use.
     * @remarks Expects a `Integer`
     */
    materialIndex?: number | undefined;
}

/**
 * A representation of mesh, line, or point geometry
 * Includes vertex positions, face indices, normals, colors, UVs, and custom attributes within buffers, reducing the cost of passing all this data to the GPU.
 * @remarks
 * To read and edit data in BufferGeometry attributes, see {@link THREE.BufferAttribute | BufferAttribute} documentation.
 * @example
 * ```typescript
 * const geometry = new THREE.BufferGeometry();
 *
 * // create a simple square shape. We duplicate the top left and bottom right
 * // vertices because each vertex needs to appear once per triangle.
 * const vertices = new Float32Array( [
 *   -1.0, -1.0,  1.0, // v0
 *    1.0, -1.0,  1.0, // v1
 *    1.0,  1.0,  1.0, // v2
 *
 *    1.0,  1.0,  1.0, // v3
 *   -1.0,  1.0,  1.0, // v4
 *   -1.0, -1.0,  1.0  // v5
 * ] );
 *
 * // itemSize = 3 because there are 3 values (components) per vertex
 * geometry.setAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );
 * const material = new THREE.MeshBasicMaterial( { color: 0xff0000 } );
 * const mesh = new THREE.Mesh( geometry, material );
 * ```
 * @example
 * ```typescript
 * const geometry = new THREE.BufferGeometry();
 *
 * const vertices = new Float32Array( [
 *   -1.0, -1.0,  1.0, // v0
 *    1.0, -1.0,  1.0, // v1
 *    1.0,  1.0,  1.0, // v2
 *   -1.0,  1.0,  1.0, // v3
 * ] );
 * geometry.setAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );
 *
 * const indices = [
 *   0, 1, 2,
 *   2, 3, 0,
 * ];
 *
 * geometry.setIndex( indices );
 * geometry.setAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );
 *
 * const material = new THREE.MeshBasicMaterial( { color: 0xff0000 } );
 * const mesh = new THREE.Mesh( geometry, material );
 * ```
 * @see Example: {@link https://threejs.org/examples/#webgl_buffergeometry | Mesh with non-indexed faces}
 * @see Example: {@link https://threejs.org/examples/#webgl_buffergeometry_indexed | Mesh with indexed faces}
 * @see Example: {@link https://threejs.org/examples/#webgl_buffergeometry_lines | Lines}
 * @see Example: {@link https://threejs.org/examples/#webgl_buffergeometry_lines_indexed | Indexed Lines}
 * @see Example: {@link https://threejs.org/examples/#webgl_buffergeometry_custom_attributes_particles | Particles}
 * @see Example: {@link https://threejs.org/examples/#webgl_buffergeometry_rawshader | Raw Shaders}
 * @see {@link https://threejs.org/docs/index.html#api/en/core/BufferGeometry | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/core/BufferGeometry.js | Source}
 */
export class BufferGeometry<
    Attributes extends NormalOrGLBufferAttributes = NormalBufferAttributes,
> extends EventDispatcher<{ dispose: {} }> {
    /**
     * This creates a new {@link THREE.BufferGeometry | BufferGeometry} object.
     */
    constructor();

    /**
     * Unique number for this {@link THREE.BufferGeometry | BufferGeometry} instance.
     * @remarks Expects a `Integer`
     */
    id: number;

    /**
     * {@link http://en.wikipedia.org/wiki/Universally_unique_identifier | UUID} of this object instance.
     * @remarks This gets automatically assigned and shouldn't be edited.
     */
    uuid: string;

    /**
     * Optional name for this {@link THREE.BufferGeometry | BufferGeometry} instance.
     * @defaultValue `''`
     */
    name: string;

    /**
     * A Read-only _string_ to check if `this` object type.
     * @remarks Sub-classes will update this value.
     * @defaultValue `BufferGeometry`
     */
    readonly type: string | "BufferGeometry";

    /**
     * Allows for vertices to be re-used across multiple triangles; this is called using "indexed triangles".
     * Each triangle is associated with the indices of three vertices. This attribute therefore stores the index of each vertex for each triangular face.
     * If this attribute is not set, the {@link THREE.WebGLRenderer | renderer}  assumes that each three contiguous positions represent a single triangle.
     * @defaultValue `null`
     */
    index: BufferAttribute | null;

    /**
     * This hashmap has as id the name of the attribute to be set and as value the {@link THREE.BufferAttribute | buffer} to set it to. Rather than accessing this property directly,
     * use {@link setAttribute | .setAttribute} and {@link getAttribute | .getAttribute} to access attributes of this geometry.
     * @defaultValue `{}`
     */
    attributes: Attributes;

    /**
     * Hashmap of {@link THREE.BufferAttribute | BufferAttributes} holding details of the geometry's morph targets.
     * @remarks
     * Once the geometry has been rendered, the morph attribute data cannot be changed.
     * You will have to call {@link dispose | .dispose}(), and create a new instance of {@link THREE.BufferGeometry | BufferGeometry}.
     * @defaultValue `{}`
     */
    morphAttributes: {
        [name: string]: Array<BufferAttribute | InterleavedBufferAttribute>; // TODO Replace for 'Record<>'
    };

    /**
     * Used to control the morph target behavior; when set to true, the morph target data is treated as relative offsets, rather than as absolute positions/normals.
     * @defaultValue `false`
     */
    morphTargetsRelative: boolean;

    /**
     * Split the geometry into groups, each of which will be rendered in a separate WebGL draw call. This allows an array of materials to be used with the geometry.
     * @remarks Every vertex and index must belong to exactly one group — groups must not share vertices or indices, and must not leave vertices or indices unused.
     * @remarks Use {@link addGroup | .addGroup} to add groups, rather than modifying this array directly.
     * @defaultValue `[]`
     */
    groups: GeometryGroup[];

    /**
     * Bounding box for the {@link THREE.BufferGeometry | BufferGeometry}, which can be calculated with {@link computeBoundingBox | .computeBoundingBox()}.
     * @remarks Bounding boxes aren't computed by default. They need to be explicitly computed, otherwise they are `null`.
     * @defaultValue `null`
     */
    boundingBox: Box3 | null;

    /**
     * Bounding sphere for the {@link THREE.BufferGeometry | BufferGeometry}, which can be calculated with {@link computeBoundingSphere | .computeBoundingSphere()}.
     * @remarks bounding spheres aren't computed by default. They need to be explicitly computed, otherwise they are `null`.
     * @defaultValue `null`
     */
    boundingSphere: Sphere | null;

    /**
     * Determines the part of the geometry to render. This should not be set directly, instead use {@link setDrawRange | .setDrawRange(...)}.
     * @remarks For non-indexed {@link THREE.BufferGeometry | BufferGeometry}, count is the number of vertices to render.
     * @remarks For indexed {@link THREE.BufferGeometry | BufferGeometry}, count is the number of indices to render.
     * @defaultValue `{ start: 0, count: Infinity }`
     */
    drawRange: { start: number; count: number };

    /**
     * An object that can be used to store custom data about the BufferGeometry. It should not hold references to functions as these will not be cloned.
     * @defaultValue `{}`
     */
    userData: Record<string, any>;

    /**
     * Read-only flag to check if a given object is of type {@link BufferGeometry}.
     * @remarks This is a _constant_ value
     * @defaultValue `true`
     */
    readonly isBufferGeometry: true;

    /**
     * Return the {@link index | .index} buffer.
     */
    getIndex(): BufferAttribute | null;

    /**
     * Set the {@link THREE.BufferGeometry.index | .index} buffer.
     * @param index
     */
    setIndex(index: BufferAttribute | number[] | null): this;

    /**
     * Sets an {@link attributes | attribute} to this geometry with the specified name.
     * @remarks
     * Use this rather than the attributes property, because an internal hashmap of {@link attributes | .attributes} is maintained to speed up iterating over attributes.
     * @param name
     * @param attribute
     */
    setAttribute<K extends keyof Attributes>(name: K, attribute: Attributes[K]): this;

    /**
     * Returns the {@link attributes | attribute} with the specified name.
     * @param name
     */
    getAttribute<K extends keyof Attributes>(name: K): Attributes[K];

    /**
     * Deletes the  {@link attributes | attribute} with the specified name.
     * @param name
     */
    deleteAttribute(name: keyof Attributes): this;

    /**
     * Returns true if the {@link attributes | attribute} with the specified name exists.
     * @param name
     */
    hasAttribute(name: keyof Attributes): boolean;

    /**
     * Adds a group to this geometry
     * @see the {@link BufferGeometry.groups | groups} property for details.
     * @param start
     * @param count
     * @param materialIndex
     */
    addGroup(start: number, count: number, materialIndex?: number): void;

    /**
     * Clears all groups.
     */
    clearGroups(): void;

    /**
     * Set the {@link drawRange | .drawRange} property
     * @remarks For non-indexed BufferGeometry, count is the number of vertices to render
     * @remarks For indexed BufferGeometry, count is the number of indices to render.
     * @param start
     * @param count is the number of vertices or indices to render. Expects a `Integer`
     */
    setDrawRange(start: number, count: number): void;

    /**
     * Applies the matrix transform to the geometry.
     * @param matrix
     */
    applyMatrix4(matrix: Matrix4): this;

    /**
     * Applies the rotation represented by the quaternion to the geometry.
     * @param quaternion
     */
    applyQuaternion(quaternion: Quaternion): this;

    /**
     * Rotate the geometry about the X axis. This is typically done as a one time operation, and not during a loop.
     * @remarks Use {@link THREE.Object3D.rotation | Object3D.rotation} for typical real-time mesh rotation.
     * @param angle radians. Expects a `Float`
     */
    rotateX(angle: number): this;

    /**
     * Rotate the geometry about the Y axis.
     * @remarks This is typically done as a one time operation, and not during a loop.
     * @remarks Use {@link THREE.Object3D.rotation | Object3D.rotation} for typical real-time mesh rotation.
     * @param angle radians. Expects a `Float`
     */
    rotateY(angle: number): this;

    /**
     * Rotate the geometry about the Z axis.
     * @remarks This is typically done as a one time operation, and not during a loop.
     * @remarks Use {@link THREE.Object3D.rotation | Object3D.rotation} for typical real-time mesh rotation.
     * @param angle radians. Expects a `Float`
     */
    rotateZ(angle: number): this;

    /**
     * Translate the geometry.
     * @remarks This is typically done as a one time operation, and not during a loop.
     * @remarks Use {@link THREE.Object3D.position | Object3D.position} for typical real-time mesh rotation.
     * @param x Expects a `Float`
     * @param y Expects a `Float`
     * @param z Expects a `Float`
     */
    translate(x: number, y: number, z: number): this;

    /**
     * Scale the geometry data.
     * @remarks This is typically done as a one time operation, and not during a loop.
     * @remarks Use {@link THREE.Object3D.scale | Object3D.scale} for typical real-time mesh scaling.
     * @param x Expects a `Float`
     * @param y Expects a `Float`
     * @param z Expects a `Float`
     */
    scale(x: number, y: number, z: number): this;

    /**
     * Rotates the geometry to face a point in space.
     * @remarks This is typically done as a one time operation, and not during a loop.
     * @remarks Use {@link THREE.Object3D.lookAt | Object3D.lookAt} for typical real-time mesh usage.
     * @param vector A world vector to look at.
     */
    lookAt(vector: Vector3): this;

    /**
     * Center the geometry based on the bounding box.
     */
    center(): this;

    /**
     * Sets the attributes for this BufferGeometry from an array of points.
     * @param points
     */
    setFromPoints(points: Vector3[] | Vector2[]): this;

    /**
     * Computes the bounding box of the geometry, and updates the {@link .boundingBox} attribute. The bounding box is
     * not computed by the engine; it must be computed by your app. You may need to recompute the bounding box if the
     * geometry vertices are modified.
     */
    computeBoundingBox(): void;

    /**
     * Computes the bounding sphere of the geometry, and updates the {@link .boundingSphere} attribute. The engine
     * automatically computes the bounding sphere when it is needed, e.g., for ray casting or view frustum culling. You
     * may need to recompute the bounding sphere if the geometry vertices are modified.
     */
    computeBoundingSphere(): void;

    /**
     * Calculates and adds a tangent attribute to this geometry.
     * The computation is only supported for indexed geometries and if position, normal, and uv attributes are defined
     * @remarks
     * When using a tangent space normal map, prefer the MikkTSpace algorithm provided by
     * {@link BufferGeometryUtils.computeMikkTSpaceTangents} instead.
     */
    computeTangents(): void;

    /**
     * Computes vertex normals for the given vertex data. For indexed geometries, the method sets each vertex normal to
     * be the average of the face normals of the faces that share that vertex. For non-indexed geometries, vertices are
     * not shared, and the method sets each vertex normal to be the same as the face normal.
     */
    computeVertexNormals(): void;

    /**
     * Every normal vector in a geometry will have a magnitude of 1
     * @remarks This will correct lighting on the geometry surfaces.
     */
    normalizeNormals(): void;

    /**
     * Return a non-index version of an indexed BufferGeometry.
     */
    toNonIndexed(): BufferGeometry;

    /**
     * Convert the buffer geometry to three.js {@link https://github.com/mrdoob/three.js/wiki/JSON-Object-Scene-format-4 | JSON Object/Scene format}.
     */
    toJSON(): {};

    /**
     * Creates a clone of this BufferGeometry
     */
    clone(): this;

    /**
     * Copies another BufferGeometry to this BufferGeometry.
     * @param source
     */
    copy(source: BufferGeometry): this;

    /**
     * Frees the GPU-related resources allocated by this instance.
     * @remarks Call this method whenever this instance is no longer used in your app.
     */
    dispose(): void;
}
