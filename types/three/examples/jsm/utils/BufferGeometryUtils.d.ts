// https://threejs.org/docs/?q=buffergeome#examples/en/utils/BufferGeometryUtils

import {
    BufferAttribute,
    BufferGeometry,
    InterleavedBufferAttribute,
    Line,
    Mesh,
    Points,
    TrianglesDrawModes,
} from "../../../src/Three.js";

export function deepCloneAttribute(attribute: BufferAttribute): BufferAttribute;
export function mergeGeometries(geometries: BufferGeometry[], useGroups?: boolean): BufferGeometry;
export function mergeAttributes(attributes: BufferAttribute[]): BufferAttribute;
export function interleaveAttributes(attributes: BufferAttribute[]): InterleavedBufferAttribute;
export function estimateBytesUsed(geometry: BufferGeometry): number;
export function mergeVertices(geometry: BufferGeometry, tolerance?: number): BufferGeometry;
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
