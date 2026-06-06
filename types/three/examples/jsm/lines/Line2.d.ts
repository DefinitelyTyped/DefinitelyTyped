import { LineGeometry } from "./LineGeometry.js";
import { LineMaterial } from "./LineMaterial.js";
import { LineSegments2 } from "./LineSegments2.js";

/**
 * A polyline drawn between vertices.
 *
 * This adds functionality beyond {@link Line}, like arbitrary line width and changing width to be in world units. It
 * extends {@link LineSegments2}, simplifying constructing segments from a chain of points.
 */
export class Line2 extends LineSegments2 {
    geometry: LineGeometry;
    material: LineMaterial;

    /**
     * Read-only flag to check if a given object is of type Line2.
     */
    readonly isLine2: true;

    /**
     * @param geometry (optional) Pair(s) of vertices representing each line segment
     * @param material (optional) Material for the line. Default is a {@link LineMaterial} with random color.
     */
    constructor(geometry?: LineGeometry, material?: LineMaterial);
}
