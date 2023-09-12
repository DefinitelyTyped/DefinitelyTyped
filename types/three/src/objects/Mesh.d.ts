import { Material } from '../materials/Material.js';
import { Object3D, Object3DEventMap } from '../core/Object3D.js';
import { BufferGeometry } from '../core/BufferGeometry.js';
import { Vector3 } from '../math/Vector3.js';

/**
 * Class representing triangular {@link https://en.wikipedia.org/wiki/Polygon_mesh | polygon mesh} based objects.
 * @remarks
 * Also serves as a base for other classes such as {@link THREE.SkinnedMesh | SkinnedMesh},  {@link THREE.InstancedMesh | InstancedMesh}.
 * @example
 * ```typescript
 * const geometry = new THREE.BoxGeometry(1, 1, 1);
 * const material = new THREE.MeshBasicMaterial({
 *     color: 0xffff00
 * });
 * const {@link Mesh} = new THREE.Mesh(geometry, material);
 * scene.add(mesh);
 * ```
 * @see {@link https://threejs.org/docs/index.html#api/en/objects/Mesh | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/objects/Mesh.js | Source}
 */
export class Mesh<
    TGeometry extends BufferGeometry = BufferGeometry,
    TMaterial extends Material | Material[] = Material | Material[],
    TEventMap extends Object3DEventMap = Object3DEventMap,
> extends Object3D<TEventMap> {
    /**
     * Create a new instance of {@link Mesh}
     * @param geometry An instance of {@link THREE.BufferGeometry | BufferGeometry}. Default {@link THREE.BufferGeometry | `new THREE.BufferGeometry()`}.
     * @param material A single or an array of {@link THREE.Material | Material}. Default {@link THREE.MeshBasicMaterial | `new THREE.MeshBasicMaterial()`}.
     */
    constructor(geometry?: TGeometry, material?: TMaterial);

    /**
     * Read-only flag to check if a given object is of type {@link Mesh}.
     * @remarks This is a _constant_ value
     * @defaultValue `true`
     */
    readonly isMesh: true;

    /**
     * @override
     * @defaultValue `Mesh`
     */
    override readonly type: string | 'Mesh';

    /**
     * An instance of {@link THREE.BufferGeometry | BufferGeometry} (or derived classes), defining the object's structure.
     * @defaultValue {@link THREE.BufferGeometry | `new THREE.BufferGeometry()`}.
     */
    geometry: TGeometry;

    /**
     * An instance of material derived from the {@link THREE.Material | Material} base class or an array of materials, defining the object's appearance.
     * @defaultValue {@link THREE.MeshBasicMaterial | `new THREE.MeshBasicMaterial()`}.
     */
    material: TMaterial;

    /**
     * An array of weights typically from `0-1` that specify how much of the morph is applied.
     * @defaultValue `undefined`, _but reset to a blank array by {@link updateMorphTargets | .updateMorphTargets()}._
     */
    morphTargetInfluences?: number[] | undefined;

    /**
     * A dictionary of morphTargets based on the `morphTarget.name` property.
     * @defaultValue `undefined`, _but rebuilt by {@link updateMorphTargets | .updateMorphTargets()}._
     *
     */
    morphTargetDictionary?: { [key: string]: number } | undefined;

    /**
     * Updates the morphTargets to have no influence on the object
     * @remarks Resets the {@link morphTargetInfluences} and {@link morphTargetDictionary} properties.
     */
    updateMorphTargets(): void;

    /**
     * Get the local-space position of the vertex at the given index,
     * taking into account the current animation state of both morph targets and skinning.
     * @param index Expects a `Integer`
     * @param target
     */
    getVertexPosition(index: number, target: Vector3): Vector3;
}
