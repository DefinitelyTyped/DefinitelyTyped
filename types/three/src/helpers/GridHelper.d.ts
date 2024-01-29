import { ColorRepresentation } from '../math/Color.js';
import { LineSegments } from '../objects/LineSegments.js';
import { BufferGeometry } from '../core/BufferGeometry.js';
import { LineBasicMaterial } from '../materials/LineBasicMaterial.js';

/**
 * The {@link GridHelper} is an object to define grids
 * @remarks
 * Grids are two-dimensional arrays of lines.
 * @example
 * ```typescript
 * const size = 10;
 * const divisions = 10;
 * const {@link GridHelper} = new THREE.GridHelper(size, divisions);
 * scene.add(gridHelper);
 * ```
 * @see Example: {@link https://threejs.org/examples/#webgl_helpers | WebGL / helpers}
 * @see {@link https://threejs.org/docs/index.html#api/en/helpers/GridHelper | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/helpers/GridHelper.js | Source}
 */
export class GridHelper extends LineSegments<BufferGeometry, LineBasicMaterial> {
    /**
     * Creates a new {@link GridHelper} of size 'size' and divided into 'divisions' segments per side
     * @remarks
     * Colors are optional.
     * @param size The size of the grid. Default `10`
     * @param divisions The number of divisions across the grid. Default `10`
     * @param colorCenterLine The color of the centerline. This can be a {@link THREE.Color | Color}, a hexadecimal value and an CSS-Color name. Default `0x444444`
     * @param colorGrid The color of the lines of the grid. This can be a {@link THREE.Color | Color}, a hexadecimal value and an CSS-Color name. Default `0x888888`
     */
    constructor(size?: number, divisions?: number, color1?: ColorRepresentation, color2?: ColorRepresentation);

    /**
     * A Read-only _string_ to check if `this` object type.
     * @remarks Sub-classes will update this value.
     * @override
     * @defaultValue `GridHelper`
     */
    override readonly type: string | 'GridHelper';

    /**
     * Frees the GPU-related resources allocated by this instance
     * @remarks
     * Call this method whenever this instance is no longer used in your app.
     */
    dispose(): void;
}
