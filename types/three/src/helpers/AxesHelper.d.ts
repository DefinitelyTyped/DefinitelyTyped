import { BufferGeometry } from "../core/BufferGeometry.js";
import { LineBasicMaterial } from "../materials/LineBasicMaterial.js";
import { ColorRepresentation } from "../math/Color.js";
import { LineSegments } from "../objects/LineSegments.js";

/**
 * An axis object to visualize the 3 axes in a simple way.
 * @remarks
 * The X axis is red
 * The Y axis is green
 * The Z axis is blue.
 * @example
 * ```typescript
 * const {@link AxesHelper} = new THREE.AxesHelper(5);
 * scene.add(axesHelper);
 * ```
 * @see Example: {@link https://threejs.org/examples/#webgl_buffergeometry_compression | WebGL / buffergeometry / compression}
 * @see Example: {@link https://threejs.org/examples/#webgl_geometry_convex | WebGL / geometry / convex}
 * @see Example: {@link https://threejs.org/examples/#webgl_loader_nrrd | WebGL / loader / nrrd}
 * @see {@link https://threejs.org/docs/index.html#api/en/helpers/AxesHelper | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/helpers/AxesHelper.js | Source}
 */
export class AxesHelper extends LineSegments<BufferGeometry, LineBasicMaterial> {
    /**
     * Create a new instance of {@link AxesHelper}
     * @param size Size of the lines representing the axes. Default `1`
     */
    constructor(size?: number);

    /**
     * A Read-only _string_ to check if `this` object type.
     * @remarks Sub-classes will update this value.
     * @override
     * @defaultValue `AxesHelper`
     */
    override readonly type: string | "AxesHelper";

    /**
     * Sets the axes colors to {@link Color | xAxisColor}, {@link Color | yAxisColor}, {@link Color | zAxisColor}.
     * @param xAxisColor
     * @param yAxisColor
     * @param zAxisColor
     */
    setColors(xAxisColor: ColorRepresentation, yAxisColor: ColorRepresentation, zAxisColor: ColorRepresentation): this;

    /**
     * Frees the GPU-related resources allocated by this instance
     * @remarks
     * Call this method whenever this instance is no longer used in your app.
     */
    dispose(): void;
}
