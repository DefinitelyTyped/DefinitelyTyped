import { ColorRepresentation } from "../math/Color.js";
import { Plane } from "../math/Plane.js";
import { Line } from "../objects/Line.js";

/**
 * A helper object to visualize an instance of {@link Plane}.
 *
 * ```js
 * const plane = new THREE.Plane( new THREE.Vector3( 1, 1, 0.2 ), 3 );
 * const helper = new THREE.PlaneHelper( plane, 1, 0xffff00 );
 * scene.add( helper );
 * ```
 */
export class PlaneHelper extends Line {
    /**
     * Constructs a new plane helper.
     *
     * @param {Plane} plane - The plane to be visualized.
     * @param {number} [size=1] - The side length of plane helper.
     * @param {number|Color|string} [hex=0xffff00] - The helper's color.
     */
    constructor(plane: Plane, size?: number, hex?: ColorRepresentation);
    /**
     * The plane being visualized.
     */
    plane: Plane;
    /**
     * The side length of plane helper.
     *
     * @default 1
     */
    size: number;
    /**
     * Updates the helper to match the position and direction of the
     * light being visualized.
     */
    dispose(): void;
}
