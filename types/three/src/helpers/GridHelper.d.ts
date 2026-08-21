import { BufferGeometry } from "../core/BufferGeometry.js";
import { LineBasicMaterial } from "../materials/LineBasicMaterial.js";
import { ColorRepresentation } from "../math/Color.js";
import { LineSegments } from "../objects/LineSegments.js";

/**
 * The helper is an object to define grids. Grids are two-dimensional
 * arrays of lines.
 *
 * ```js
 * const size = 10;
 * const divisions = 10;
 *
 * const gridHelper = new THREE.GridHelper( size, divisions );
 * scene.add( gridHelper );
 * ```
 */
export class GridHelper extends LineSegments<BufferGeometry, LineBasicMaterial> {
    /**
     * Constructs a new grid helper.
     *
     * @param {number} [size=10] - The size of the grid.
     * @param {number} [divisions=10] - The number of divisions across the grid.
     * @param {number|Color|string} [color1=0x444444] - The color of the center line.
     * @param {number|Color|string} [color2=0x888888] - The color of the lines of the grid.
     */
    constructor(size?: number, divisions?: number, color1?: ColorRepresentation, color2?: ColorRepresentation);
    /**
     * Frees the GPU-related resources allocated by this instance. Call this
     * method whenever this instance is no longer used in your app.
     */
    dispose(): void;
}
