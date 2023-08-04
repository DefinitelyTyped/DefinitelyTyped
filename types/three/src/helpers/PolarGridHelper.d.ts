import { LineSegments } from '../objects/LineSegments.js';
import { ColorRepresentation } from '../math/Color.js';

/**
 * The {@link PolarGridHelper} is an object to define polar grids
 * @remarks
 * Grids are two-dimensional arrays of lines.
 * @example
 * ```typescript
 * const radius = 10;
 * const sectors = 16;
 * const rings = 8;
 * const divisions = 64;
 * const helper = new THREE.PolarGridHelper(radius, sectors, rings, divisions);
 * scene.add(helper);
 * ```
 * @see Example: {@link https://threejs.org/examples/#webgl_helpers | WebGL / helpers}
 * @see {@link https://threejs.org/docs/index.html#api/en/helpers/PolarGridHelper | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/helpers/PolarGridHelper.js | Source}
 */
export class PolarGridHelper extends LineSegments {
    /**
     * Creates a new {@link PolarGridHelper} of radius 'radius' with 'sectors' number of sectors and 'rings' number of rings, where each circle is smoothed into 'divisions' number of line segments.
     * @remarks Colors are optional.
     * @param radius The radius of the polar grid. This can be any positive number. Default `10`.
     * @param sectors The number of sectors the grid will be divided into. This can be any positive integer. Default `16`.
     * @param rings The number of rings. This can be any positive integer. Default `8`.
     * @param divisions The number of line segments used for each circle. This can be any positive integer that is 3 or greater. Default `64`.
     * @param color1 The first color used for grid elements. This can be a {@link THREE.Color | Color}, a hexadecimal value and an CSS-Color name. Default `0x444444`.
     * @param color2 The second color used for grid elements. This can be a {@link THREE.Color | Color}, a hexadecimal value and an CSS-Color name. Default `0x888888`.
     */
    constructor(
        radius?: number,
        radials?: number,
        circles?: number,
        divisions?: number,
        color1?: ColorRepresentation,
        color2?: ColorRepresentation,
    );

    /**
     * A Read-only _string_ to check if `this` object type.
     * @remarks Sub-classes will update this value.
     * @override
     * @defaultValue `PolarGridHelper`
     */
    override readonly type: string | 'PolarGridHelper';

    /**
     * Frees the GPU-related resources allocated by this instance
     * @remarks
     * Call this method whenever this instance is no longer used in your app.
     */
    dispose(): void;
}
