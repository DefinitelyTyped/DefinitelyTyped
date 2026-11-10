import {
    Box3,
    BufferGeometry,
    GeometryGroup,
    Node,
    Sphere,
    StorageBufferNode,
    UniformArrayNode,
    Vector4,
} from "three/webgpu";

/**
 * Utilities to process geometries into clusters (meshlets) of 64 triangles with a chain of simplified
 * levels of detail, used by the meshlet drawing pipelines.
 *
 * @module MeshletGeometryUtils
 * @three_import import * as MeshletGeometryUtils from 'three/addons/utils/MeshletGeometryUtils.js';
 */

/**
 * The number of triangles of a meshlet. Meshlets are padded with degenerate triangles to this size.
 *
 * @type {number}
 * @constant
 */
export const MESHLET_SIZE: number;

/**
 * Resolves when the meshoptimizer modules are ready to process geometries.
 *
 * @type {Promise}
 */
export const ready: Promise<void>;

/**
 * The maximum number of levels of detail of a geometry.
 *
 * @type {number}
 * @constant
 */
export const MAX_LODS: number;

export interface Meshlets {
    position: (vertex: Node<"uint">) => Node<"vec3">;
    normal: (vertex: Node<"uint">) => Node<"vec3">;
    uv: (vertex: Node<"uint">) => Node<"vec2">;
    hasAttribute: (name: string) => boolean;
    attribute: (name: string, vertex: Node<"uint">) => Node;
    indexBuffer: StorageBufferNode<"uint">;
    chunkBounds: (chunk: Node<"uint">) => Node<"vec4">;
    chunkCone: (chunk: Node<"uint">) => Node<"vec4">;
    chunkArray: Float32Array;
    chunkCount: number;
    lodOffsets: UniformArrayNode<"vec4">;
    lodOffsetValues: Vector4[];
    lodTriangleEnds: number[];
    lodCount: number;
    maxChunks: number;
    instancedAttributes: Array<{ name: string; itemSize: number }>;
    vertexArray: Float32Array;
    stride: number;
    indexArray: Uint32Array;
    attributeLayout: Map<string, { offset: number; itemSize: number }>;
    layoutKey: string;
    geometry: BufferGeometry;
    boundingSphere: Sphere;
    boundingBox: Box3;
}

/**
 * Builds meshlets of 64 triangles and a chain of simplified levels of detail for the given geometry.
 * Identical vertices are welded first and all levels index the same vertices. The vertex data is
 * interleaved into one storage buffer and accessed through the returned functions.
 *
 * @param {BufferGeometry} geometry - The geometry, with position and normal attributes.
 * @param {?Object} [group=null] - An optional material group whose triangles are processed independently.
 * @return {Object} The meshlet data.
 */
export function createMeshlets(geometry: BufferGeometry, group?: GeometryGroup | null): Meshlets;
