import { Box3 } from './../math/Box3';
import { Color } from './../math/Color';
import { LineSegments } from './../objects/LineSegments';

/**
 * Helper object to visualize a {@link THREE.Box3 | Box3}.
 * @example
 * ```typescript
 * const box = new THREE.Box3();
 * box.setFromCenterAndSize(new THREE.Vector3(1, 1, 1), new THREE.Vector3(2, 1, 3));
 * const helper = new THREE.Box3Helper(box, 0xffff00);
 * scene.add(helper);
 * ```
 * @see {@link https://threejs.org/docs/index.html#api/en/helpers/Box3Helper | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/helpers/Box3Helper.js | Source}
 */
export class Box3Helper extends LineSegments {
    /**
     * Creates a new wireframe box that represents the passed Box3.
     * @param box The Box3 to show.
     * @param color The box's color. Default `0xffff00`
     */
    constructor(box: Box3, color?: Color);

    /**
     * A Read-only _string_ to check if `this` object type.
     * @remarks Sub-classes will update this value.
     * @override
     * @defaultValue `Box3Helper`
     */
    override readonly type: string | 'Box3Helper';

    /**
     * The Box3 being visualized.
     */
    box: Box3;

    /**
     * Frees the GPU-related resources allocated by this instance
     * @remarks
     * Call this method whenever this instance is no longer used in your app.
     */
    dispose(): void;
}
