import { BindMode } from "../constants.js";
import { BufferGeometry } from "../core/BufferGeometry.js";
import { Object3DEventMap } from "../core/Object3D.js";
import { Material } from "../materials/Material.js";
import { Box3 } from "../math/Box3.js";
import { Matrix4 } from "../math/Matrix4.js";
import { Sphere } from "../math/Sphere.js";
import { Vector3 } from "../math/Vector3.js";
import { Mesh } from "./Mesh.js";
import { Skeleton } from "./Skeleton.js";

/**
 * A mesh that has a {@link THREE.Skeleton | Skeleton} with {@link Bone | bones} that can then be used to animate the vertices of the geometry.
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
    TEventMap extends Object3DEventMap = Object3DEventMap,
> extends Mesh<TGeometry, TMaterial, TEventMap> {
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
    override readonly type: string | "SkinnedMesh";

    /**
     * Either {@link AttachedBindMode} or {@link DetachedBindMode}. {@link AttachedBindMode} means the skinned mesh
     * shares the same world space as the skeleton. This is not true when using {@link DetachedBindMode} which is useful
     * when sharing a skeleton across multiple skinned meshes.
     * @defaultValue `AttachedBindMode`
     */
    bindMode: BindMode;

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
     * Computes the bounding box of the skinned mesh, and updates the {@link .boundingBox} attribute. The bounding box
     * is not computed by the engine; it must be computed by your app. If the skinned mesh is animated, the bounding box
     * should be recomputed per frame.
     */
    computeBoundingBox(): void;

    /**
     * Computes the bounding sphere of the skinned mesh, and updates the {@link .boundingSphere} attribute. The bounding
     * sphere is automatically computed by the engine when it is needed, e.g., for ray casting and view frustum culling.
     * If the skinned mesh is animated, the bounding sphere should be recomputed per frame.
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
}
