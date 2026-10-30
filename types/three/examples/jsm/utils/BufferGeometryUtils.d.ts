// https://threejs.org/docs/?q=buffergeome#examples/en/utils/BufferGeometryUtils

import {
    BufferAttribute,
    BufferGeometry,
    InterleavedBuffer,
    InterleavedBufferAttribute,
    Line,
    Mesh,
    Points,
    TrianglesDrawModes,
} from "three";

export function deepCloneAttribute(attribute: BufferAttribute): BufferAttribute;
export function mergeGeometries(geometries: BufferGeometry[], useGroups?: boolean): BufferGeometry;
export function mergeAttributes(attributes: BufferAttribute[]): BufferAttribute;
export function interleaveAttributes(attributes: BufferAttribute[]): InterleavedBufferAttribute;
export function estimateBytesUsed(geometry: BufferGeometry): number;
export function mergeVertices(geometry: BufferGeometry, tolerance?: number): BufferGeometry;

/**
 * Copies attribute entries in the order specified by the source vertex indices. Preserves raw values, attribute type
 * and metadata. Reuse the same buffer map across calls to preserve shared interleaved buffers for the same mapping.
 *
 * @param attribute The source attribute.
 * @param sourceIndices The source index for each output vertex.
 * @param buffers Shared interleaved buffer copies.
 * @return The remapped attribute.
 */
export function remapAttribute<TAttribute extends BufferAttribute | InterleavedBufferAttribute>(
    attribute: TAttribute,
    sourceIndices: ArrayLike<number>,
    buffers?: Map<InterleavedBuffer, InterleavedBuffer>,
): TAttribute;

export function toTrianglesDrawMode(geometry: BufferGeometry, drawMode: TrianglesDrawModes): BufferGeometry;
export function computeMorphedAttributes(object: Mesh | Line | Points): object;
export function computeMikkTSpaceTangents(
    geometry: BufferGeometry,
    MikkTSpace: unknown,
    negateSign?: boolean,
): BufferGeometry;
export function mergeGroups(geometry: BufferGeometry): BufferGeometry;
export function deinterleaveAttribute(geometry: BufferGeometry): void;
export function deinterleaveGeometry(geometry: BufferGeometry): void;

/**
 * Modifies the supplied geometry if it is non-indexed, otherwise creates a new, non-indexed geometry. Returns the
 * geometry with smooth normals everywhere except faces that meet at an angle greater than the crease angle.
 *
 * @param geometry The input geometry.
 * @param creaseAngle The crease angle in radians.
 */
export function toCreasedNormals(geometry: BufferGeometry, creaseAngle?: number): BufferGeometry;
