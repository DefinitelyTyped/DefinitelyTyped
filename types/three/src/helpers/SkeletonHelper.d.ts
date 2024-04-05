import { Object3D } from "../core/Object3D.js";
import { Matrix4 } from "../math/Matrix4.js";
import { Bone } from "../objects/Bone.js";
import { LineSegments } from "../objects/LineSegments.js";
import { SkinnedMesh } from "../objects/SkinnedMesh.js";

/**
 * A helper object to assist with visualizing a {@link Skeleton | Skeleton}
 * @remarks
 * The helper is rendered using a {@link LineBasicMaterial | LineBasicMaterial}.
 * @example
 * ```typescript
 * const helper = new THREE.SkeletonHelper(skinnedMesh);
 * scene.add(helper);
 * ```
 * @see Example: {@link https://threejs.org/examples/#webgl_animation_skinning_blending | WebGL / animation / skinning / blending}
 * @see Example: {@link https://threejs.org/examples/#webgl_animation_skinning_morph | WebGL / animation / skinning / morph}
 * @see Example: {@link https://threejs.org/examples/#webgl_loader_bvh | WebGL / loader / bvh }
 * @see {@link https://threejs.org/docs/index.html#api/en/helpers/SkeletonHelper | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/helpers/SkeletonHelper.js | Source}
 */
export class SkeletonHelper extends LineSegments {
    /**
     * Create a new instance of {@link SkeletonHelper}
     * @param object Usually an instance of {@link THREE.SkinnedMesh | SkinnedMesh}.
     * However, any instance of {@link THREE.Object3D | Object3D} can be used if it represents a hierarchy of {@link Bone | Bone}s (via {@link THREE.Object3D.children | Object3D.children}).
     */
    constructor(object: SkinnedMesh | Object3D);

    /**
     * Read-only flag to check if a given object is of type {@link SkeletonHelper}.
     * @remarks This is a _constant_ value
     * @defaultValue `true`
     */
    readonly isSkeletonHelper = true;

    /**
     * A Read-only _string_ to check if `this` object type.
     * @remarks Sub-classes will update this value.
     * @override
     * @defaultValue `SkeletonHelper`
     */
    override readonly type: string | "SkeletonHelper";

    /**
     * The list of bones that the helper renders as {@link Line | Lines}.
     */
    bones: Bone[];

    /**
     * The object passed in the constructor.
     */
    root: SkinnedMesh | Object3D;

    /**
     * Reference to the {@link THREE.Object3D.matrixWorld | root.matrixWorld}.
     */
    matrix: Matrix4;

    /**
     * Is set to `false`, as the helper is using the {@link THREE.Object3D.matrixWorld | root.matrixWorld}.
     * @see {@link THREE.Object3D.matrixAutoUpdate | Object3D.matrixAutoUpdate}.
     * @defaultValue `false`.
     */
    override matrixAutoUpdate: boolean;

    /**
     * Updates the helper.
     */
    update(): void;

    /**
     * Frees the GPU-related resources allocated by this instance
     * @remarks
     * Call this method whenever this instance is no longer used in your app.
     */
    dispose(): void;
}
