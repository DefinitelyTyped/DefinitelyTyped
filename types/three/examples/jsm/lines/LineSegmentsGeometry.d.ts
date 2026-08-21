import { EdgesGeometry, InstancedBufferGeometry, LineSegments, Mesh, WireframeGeometry } from "three";

/**
 * A series of vertex pairs, forming line segments.
 *
 * This is used in {@link LineSegments2} to describe the shape.
 */
export class LineSegmentsGeometry extends InstancedBufferGeometry {
    /**
     * Read-only flag to check if a given object is of type LineSegmentsGeometry.
     */
    readonly isLineSegmentsGeometry: true;

    /**
     * Creates a new geometry. Call [setPositions]{@link LineSegmentsGeometry.setPositions} to add segments.
     */
    constructor();

    /**
     * Replace the vertex positions with a new set. The array can be an `Array` or `Float32Array`. The length must be a
     * multiple of six.
     * @param array
     */
    setPositions(array: number[] | Float32Array): this;

    /**
     * Replace the per-vertex colors. Every sixtuple describes a segment: `[r1, g1, b1, r2, g2, b2]`. The array can be
     * an `Array` or `Float32Array`.
     * @param array
     */
    setColors(array: number[] | Float32Array): this;

    /**
     * Copy the vertex positions of a wireframe geometry into this geometry.
     */
    fromWireframeGeometry(geometry: WireframeGeometry): this;

    /**
     * Copy the vertex positions of an edge geometry into this geometry.
     */
    fromEdgesGeometry(geometry: EdgesGeometry): this;

    /**
     * Copy the vertex positions of a mesh object into this geometry.
     */
    fromMesh(mesh: Mesh): this;

    /**
     * Copy the vertex positions of a {@link LineSegments} object into this geometry. Assumes the source geometry is not
     * using indices.
     */
    fromLineSegments(lineSegments: LineSegments): this;
}
