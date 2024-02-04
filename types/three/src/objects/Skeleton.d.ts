import { Matrix4 } from "../math/Matrix4.js";
import { DataTexture } from "../textures/DataTexture.js";
import { Bone } from "./Bone.js";

/**
 * Use an array of {@link Bone | bones} to create a {@link Skeleton} that can be used by a {@link THREE.SkinnedMesh | SkinnedMesh}.
 * @example
 * ```typescript
 * // Create a simple "arm"
 * const bones = [];
 * const shoulder = new THREE.Bone();
 * const elbow = new THREE.Bone();
 * const hand = new THREE.Bone();
 * shoulder.add(elbow);
 * elbow.add(hand);
 * bones.push(shoulder);
 * bones.push(elbow);
 * bones.push(hand);
 * shoulder.position.y = -5;
 * elbow.position.y = 0;
 * hand.position.y = 5;
 * const armSkeleton = new THREE.Skeleton(bones);
 * See the[page: SkinnedMesh] page
 * for an example of usage with standard[page: BufferGeometry].
 * ```
 * @see {@link https://threejs.org/docs/index.html#api/en/objects/Skeleton | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/objects/Skeleton.js | Source}
 */
export class Skeleton {
    /**
     * Creates a new Skeleton.
     * @param bones The array of {@link THREE.Bone | bones}. Default `[]`.
     * @param boneInverses An array of {@link THREE.Matrix4 | Matrix4s}. Default `[]`.
     */
    constructor(bones?: Bone[], boneInverses?: Matrix4[]);

    /**
     * {@link http://en.wikipedia.org/wiki/Universally_unique_identifier | UUID} of this object instance.
     * @remarks This gets automatically assigned and shouldn't be edited.
     */
    uuid: string;

    /**
     * The array of {@link THREE.Bone | Bones}.
     * @remarks Note this is a copy of the original array, not a reference, so you can modify the original array without effecting this one.
     */
    bones: Bone[];

    /**
     * An array of {@link Matrix4 | Matrix4s} that represent the inverse of the {@link THREE.Matrix4 | matrixWorld} of the individual bones.
     */
    boneInverses: Matrix4[];

    /**
     * The array buffer holding the bone data when using a vertex texture.
     */
    boneMatrices: Float32Array;

    /**
     * The {@link THREE.DataTexture | DataTexture} holding the bone data when using a vertex texture.
     */
    boneTexture: null | DataTexture;

    frame: number;

    init(): void;

    /**
     * Generates the {@link boneInverses} array if not provided in the constructor.
     */
    calculateInverses(): void;

    /**
     * Computes an instance of {@link THREE.DataTexture | DataTexture} in order to pass the bone data more efficiently to the shader
     * @remarks
     * The texture is assigned to {@link boneTexture}.
     */
    computeBoneTexture(): this;

    /**
     * Returns the skeleton to the base pose.
     */
    pose(): void;

    /**
     * Updates the {@link boneMatrices} and {@link boneTexture} after changing the bones
     * @remarks
     * This is called automatically by the {@link THREE.WebGLRenderer | WebGLRenderer} if the {@link Skeleton} is used with a {@link THREE.SkinnedMesh | SkinnedMesh}.
     */
    update(): void;

    /**
     * Returns a clone of this {@link Skeleton} object.
     */
    clone(): Skeleton;

    /**
     * Searches through the skeleton's bone array and returns the first with a matching name.
     * @param name String to match to the Bone's {@link THREE.Bone.name | .name} property.
     */
    getBoneByName(name: string): undefined | Bone;

    /**
     * Frees the GPU-related resources allocated by this instance
     * @remarks
     * Call this method whenever this instance is no longer used in your app.
     */
    dispose(): void;

    toJSON(): unknown;

    fromJSON(json: unknown, bones: Record<string, Bone>): void;
}
