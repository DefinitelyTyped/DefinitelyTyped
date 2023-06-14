import { Plane } from './../math/Plane';
import { LineSegments } from './../objects/LineSegments';

/**
 * Helper object to visualize a {@link THREE.Plane | Plane}.
 * @example
 * ```typescript
 * const plane = new THREE.Plane(new THREE.Vector3(1, 1, 0.2), 3);
 * const helper = new THREE.PlaneHelper(plane, 1, 0xffff00);
 * scene.add(helper);
 * ```
 * @see {@link https://threejs.org/docs/index.html#api/en/helpers/PlaneHelper | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/helpers/PlaneHelper.js | Source}
 */
export class PlaneHelper extends LineSegments {
    /**
     * Creates a new wireframe representation of the passed plane.
     * @param plane The plane to visualize.
     * @param size Side length of plane helper. Expects a `Float`. Default `1`
     * @param hex Color. Default `0xffff00`
     */
    constructor(plane: Plane, size?: number, hex?: number);

    /**
     * A Read-only _string_ to check if `this` object type.
     * @remarks Sub-classes will update this value.
     * @override
     * @defaultValue `PlaneHelper`
     */
    override readonly type: string | 'PlaneHelper';

    /**
     * The {@link Plane | plane} being visualized.
     */
    plane: Plane;

    /**
     * The side lengths of plane helper.
     * @remarks Expects a `Float`
     * @defaultValue `1`
     */
    size: number;

    /**
     * Frees the GPU-related resources allocated by this instance
     * @remarks
     * Call this method whenever this instance is no longer used in your app.
     */
    dispose(): void;
}
