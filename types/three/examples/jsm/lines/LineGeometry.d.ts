import { Line } from "three";

import { LineSegmentsGeometry } from "./LineSegmentsGeometry.js";

/**
 * A chain of vertices, forming a polyline.
 *
 * This is used in {@link Line2} to describe the shape.
 */
export class LineGeometry extends LineSegmentsGeometry {
    /**
     * Read-only flag to check if a given object is of type LineGeometry.
     */
    readonly isLineGeometry: true;

    /**
     * Creates a new geometry.
     * Call [setPositions]{@link LineGeometry.setPositions} to add segments.
     */
    constructor();

    /**
     * Copy the vertex positions of a {@link Line} object into this geometry.
     * Assumes the source geometry is not using indices.
     */
    fromLine(line: Line): this;
}
