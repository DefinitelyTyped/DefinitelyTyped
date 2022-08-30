import {
    BufferAttribute,
    BufferGeometry,
    InterleavedBufferAttribute,
    TrianglesDrawModes,
    Mesh,
    Line,
    Points,
} from '../../../src/Three';

export function mergeBufferGeometries(geometries: BufferGeometry[], useGroups?: boolean): BufferGeometry;
export function mergeBufferAttributes(attributes: BufferAttribute[]): BufferAttribute;
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
