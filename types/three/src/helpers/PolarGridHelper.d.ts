import { ColorRepresentation } from "../math/Color.js";
import { LineSegments } from "../objects/LineSegments.js";

/**
 * This helper is an object to define polar grids. Grids are
 * two-dimensional arrays of lines.
 *
 * ```js
 * const radius = 10;
 * const sectors = 16;
 * const rings = 8;
 * const divisions = 64;
 *
 * const helper = new THREE.PolarGridHelper( radius, sectors, rings, divisions );
 * scene.add( helper );
 * ```
 */
export class PolarGridHelper extends LineSegments {
    /**
     * Constructs a new polar grid helper.
     *
     * @param {number} [radius=10] - The radius of the polar grid. This can be any positive number.
     * @param {number} [sectors=16] - The number of sectors the grid will be divided into. This can be any positive integer.
     * @param {number} [rings=16] - The number of rings. This can be any positive integer.
     * @param {number} [divisions=64] - The number of line segments used for each circle. This can be any positive integer.
     * @param {number|Color|string} [color1=0x444444] - The first color used for grid elements.
     * @param {number|Color|string} [color2=0x888888] -  The second color used for grid elements.
     */
    constructor(
        radius?: number,
        sectors?: number,
        rings?: number,
        divisions?: number,
        color1?: ColorRepresentation,
        color2?: ColorRepresentation,
    );
    /**
     * Frees the GPU-related resources allocated by this instance. Call this
     * method whenever this instance is no longer used in your app.
     */
    dispose(): void;
}
