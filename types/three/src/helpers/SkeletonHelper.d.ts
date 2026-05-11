import { Object3D } from "../core/Object3D.js";
import { Color } from "../math/Color.js";
import { Bone } from "../objects/Bone.js";
import { LineSegments } from "../objects/LineSegments.js";

/**
 * A helper object to assist with visualizing a {@link Skeleton}.
 *
 * ```js
 * const helper = new THREE.SkeletonHelper( skinnedMesh );
 * scene.add( helper );
 * ```
 */
export class SkeletonHelper extends LineSegments {
    /**
     * Constructs a new skeleton helper.
     *
     * @param {Object3D} object -  Usually an instance of {@link SkinnedMesh}. However, any 3D object
     * can be used if it represents a hierarchy of bones (see {@link Bone}).
     */
    constructor(object: Object3D);
    /**
     * This flag can be used for type testing.
     *
     * @default true
     */
    readonly isSkeletonHelper: boolean;
    /**
     * The object being visualized.
     */
    root: Object3D;
    /**
     * The list of bones that the helper visualizes.
     */
    bones: Bone[];
    /**
     * Defines the colors of the helper.
     *
     * @param {Color} color1 - The first line color for each bone.
     * @param {Color} color2 - The second line color for each bone.
     * @return {SkeletonHelper} A reference to this helper.
     */
    setColors(color1: Color, color2: Color): SkeletonHelper;
    /**
     * Frees the GPU-related resources allocated by this instance. Call this
     * method whenever this instance is no longer used in your app.
     */
    dispose(): void;
}
