import { Box3 } from "../math/Box3.js";
import { ColorRepresentation } from "../math/Color.js";
import { LineSegments } from "../objects/LineSegments.js";

/**
 * A helper object to visualize an instance of {@link Box3}.
 *
 * ```js
 * const box = new THREE.Box3();
 * box.setFromCenterAndSize( new THREE.Vector3( 1, 1, 1 ), new THREE.Vector3( 2, 1, 3 ) );
 *
 * const helper = new THREE.Box3Helper( box, 0xffff00 );
 * scene.add( helper )
 * ```
 */
export class Box3Helper extends LineSegments {
    /**
     * Constructs a new box3 helper.
     *
     * @param {Box3} box - The box to visualize.
     * @param {number|Color|string} [color=0xffff00] - The box's color.
     */
    constructor(box: Box3, color?: ColorRepresentation);
    /**
     * The box being visualized.
     */
    box: Box3;
    /**
     * Frees the GPU-related resources allocated by this instance. Call this
     * method whenever this instance is no longer used in your app.
     */
    dispose(): void;
}
