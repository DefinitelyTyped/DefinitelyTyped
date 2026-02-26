import { ColorRepresentation } from "../math/Color.js";
import { LineSegments } from "../objects/LineSegments.js";

/**
 * An axis object to visualize the 3 axes in a simple way.
 * The X axis is red. The Y axis is green. The Z axis is blue.
 *
 * ```js
 * const axesHelper = new THREE.AxesHelper( 5 );
 * scene.add( axesHelper );
 * ```
 */
export class AxesHelper extends LineSegments {
    /**
     * Constructs a new axes helper.
     *
     * @param {number} [size=1] - Size of the lines representing the axes.
     */
    constructor(size?: number);
    /**
     * Defines the colors of the axes helper.
     *
     * @param {number|Color|string} xAxisColor - The color for the x axis.
     * @param {number|Color|string} yAxisColor - The color for the y axis.
     * @param {number|Color|string} zAxisColor - The color for the z axis.
     * @return {AxesHelper} A reference to this axes helper.
     */
    setColors(
        xAxisColor: ColorRepresentation,
        yAxisColor: ColorRepresentation,
        zAxisColor: ColorRepresentation,
    ): AxesHelper;
    /**
     * Frees the GPU-related resources allocated by this instance. Call this
     * method whenever this instance is no longer used in your app.
     */
    dispose(): void;
}
