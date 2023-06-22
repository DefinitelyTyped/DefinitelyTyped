import { Material } from './../materials/Material';
import { Box3 } from '../math/Box3';
import { Matrix4 } from './../math/Matrix4';
import { Vector3 } from './../math/Vector3';
import { Skeleton } from './Skeleton';
import { Mesh } from './Mesh';
import { BufferGeometry } from '../core/BufferGeometry';
import { Sphere } from '../math/Sphere';

/**
 * A mesh that has a {@link THREE.Skeleton | Skeleton} with {@link Bone | bones} that can then be used to animate the vertices of the geometry.
 * @remarks
 * {@link SkinnedMesh} can only be used with WebGL 2 or
 * With WebGL 1 `OES_texture_float` and vertex textures support is required.
 * @example
 * ```typescript
 * const geometry = new THREE.CylinderGeometry(5, 5, 5, 5, 15, 5, 30);
 * // create the skin indices and skin weights manually
 * // (typically a loader would read this data from a 3D model for you)
 * const position = geometry.attributes.position;
 * const vertex = new THREE.Vector3();
 * const skinIndices = [];
 * const skinWeights = [];
 * for (let i = 0; i & lt; position.count; i++) {
 *     vertex.fromBufferAttribute(position, i);
 *     // compute skinIndex and skinWeight based on some configuration data
 *     const y = (vertex.y + sizing.halfHeight);
 *     const skinIndex = Math.floor(y / sizing.segmentHeight);
 *     const skinWeight = (y % sizing.segmentHeight) / sizing.segmentHeight;
 *     skinIndices.push(skinIndex, skinIndex + 1, 0, 0);
 *     skinWeights.push(1 - skinWeight, skinWeight, 0, 0);
 * }
 * geometry.setAttribute('skinIndex', new THREE.Uint16BufferAttribute(skinIndices, 4));
 * geometry.setAttribute('skinWeight', new THREE.Float32BufferAttribute(skinWeights, 4));
 * // create skinned mesh and skeleton
 * const mesh = new THREE.SkinnedMesh(geometry, material);
 * const skeleton = new THREE.Skeleton(bones);
 * // see example from THREE.Skeleton
 * const rootBone = skeleton.bones[0];
 * mesh.add(rootBone);
 * // bind the skeleton to the mesh
 * mesh.bind(skeleton);
 * // move the bones and manipulate the model
 * skeleton.bones[0].rotation.x = -0.1;
 * skeleton.bones[1].rotation.x = 0.2;
 * ```
 * @see {@link https://threejs.org/docs/index.html#api/en/objects/SkinnedMesh | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/objects/SkinnedMesh.js | Source}
 */
export class SkinnedMesh<
    TGeometry extends BufferGeometry = BufferGeometry,
    TMaterial extends Material | Material[] = Material | Material[],
> extends Mesh<TGeometry, TMaterial> {
    /**
     * Create a new instance of {@link SkinnedMesh}
     * @param geometry An instance of {@link THREE.BufferGeometry | BufferGeometry}. Default {@link THREE.BufferGeometry | `new THREE.BufferGeometry()`}.
     * @param material A single or an array of {@link THREE.Material | Material}. Default {@link THREE.MeshBasicMaterial | `new THREE.MeshBasicMaterial()`}.
     */
    constructor(geometry?: TGeometry, material?: TMaterial, useVertexTexture?: boolean);

    /**
     * Read-only flag to check if a given object is of type {@link SkinnedMesh}.
     * @remarks This is a _constant_ value
     * @defaultValue `true`
     */
    readonly isSkinnedMesh: true;

    /**
     * @override
     * @defaultValue `SkinnedMesh`
     */
    override readonly type: string | 'SkinnedMesh';

    /**
     * Either `attached` or `detached`.
     *  - `attached` uses the {@link THREE.SkinnedMesh.matrixWorld | SkinnedMesh.matrixWorld} property for the base transform matrix of the bones.
     *  - `detached` uses the {@link THREE.SkinnedMesh.bindMatrix | SkinnedMesh.bindMatrix}.
     * @defaultValue `attached`.
     */
    bindMode: 'attached' | 'detached';

    /**
     * The base matrix that is used for the bound bone transforms.
     */
    bindMatrix: Matrix4;
    /**
     * The base matrix that is used for resetting the bound bone transforms.
     */
    bindMatrixInverse: Matrix4;

    /**
     * The bounding box of the SkinnedMesh. Can be calculated with {@link computeBoundingBox | .computeBoundingBox()}.
     * @default `null`
     */
    boundingBox: Box3;

    /**
     * The bounding box of the SkinnedMesh. Can be calculated with {@link computeBoundingSphere | .computeBoundingSphere()}.
     * @default `null`
     */
    boundingSphere: Sphere;

    /**
     * {@link THREE.Skeleton | Skeleton} representing the bone hierarchy of the skinned mesh.
     */
    skeleton: Skeleton;

    /**
     * Bind a skeleton to the skinned mesh
     * @remarks
     * The bindMatrix gets saved to .bindMatrix property and the .bindMatrixInverse gets calculated.
     * @param skeleton {@link THREE.Skeleton | Skeleton} created from a {@link Bone | Bones} tree.
     * @param bindMatrix {@link THREE.Matrix4 | Matrix4} that represents the base transform of the skeleton.
     */
    bind(skeleton: Skeleton, bindMatrix?: Matrix4): void;

    /**
     * Computes the bounding box, updating {@link boundingBox | .boundingBox} attribute.
     * @remarks
     * Bounding boxes aren't computed by default. They need to be explicitly computed, otherwise they are `null`. If an
     * instance of SkinnedMesh is animated, this method should be called per frame to compute a correct bounding box.
     */
    computeBoundingBox(): void;

    /**
     * Computes the bounding sphere, updating {@link boundingSphere | .boundingSphere} attribute.
     * @remarks
     * Bounding spheres aren't computed by default. They need to be explicitly computed, otherwise they are `null`. If
     * an instance of SkinnedMesh is animated, this method should be called per frame to compute a correct bounding
     * sphere.
     */
    computeBoundingSphere(): void;

    /**
     * This method sets the skinned mesh in the rest pose (resets the pose).
     */
    pose(): void;

    /**
     * Normalizes the skin weights.
     */
    normalizeSkinWeights(): void;

    /**
     * Applies the bone transform associated with the given index to the given position vector
     * @remarks Returns the updated vector.
     * @param index Expects a `Integer`
     * @param vector
     */
    applyBoneTransform(index: number, vector: Vector3): Vector3;

    /**
     * @deprecated {@link THREE.SkinnedMesh}: {@link boneTransform | .boneTransform()} was renamed to {@link applyBoneTransform | .applyBoneTransform()} in **r151**.
     */
    boneTransform(index: number, target: Vector3): Vector3;
}
