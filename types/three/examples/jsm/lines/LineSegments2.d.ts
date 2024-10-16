import { Mesh, WebGLRenderer } from "three";

import { LineMaterial } from "./LineMaterial.js";
import { LineSegmentsGeometry } from "./LineSegmentsGeometry.js";

/**
 * A series of lines drawn between pairs of vertices.
 *
 * This adds functionality beyond {@link LineSegments}, like arbitrary line width and changing width to be in world
 * units. The {@link Line2} extends this object, forming a polyline instead of individual segments.
 */
export class LineSegments2 extends Mesh {
    geometry: LineSegmentsGeometry;
    material: LineMaterial;

    /**
     * Read-only flag to check if a given object is of type LineSegments2.
     */
    readonly isLineSegments2: true;

    /**
     * @param geometry (optional) Pair(s) of vertices representing each line segment.
     * @param material (optional) Material for the line. Default is a {@link LineMaterial} with random color.
     */
    constructor(geometry?: LineSegmentsGeometry, material?: LineMaterial);

    computeLineDistances(): this;

    /**
     * Called by the framework to update the material's resolution property, needed for screen-scaled widths.
     *
     * If your object is not visible to a camera (e.g. by [layers]{@link Object3D.layers} or
     * [visible]{@link Object3D.visible}), you must call this manually whenever the viewport changes.
     * @param renderer
     */
    onBeforeRender(renderer: WebGLRenderer): void;
}
