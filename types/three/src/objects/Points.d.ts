import { Material } from './../materials/Material';
import { Raycaster } from './../core/Raycaster';
import { Object3D } from './../core/Object3D';
import { BufferGeometry } from '../core/BufferGeometry';
import { Intersection } from '../core/Raycaster';

/**
 * A class for displaying {@link Points}
 * @remarks
 * The {@link Points} are rendered by the {@link THREE.WebGLRenderer | WebGLRenderer} using {@link https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/drawElements | gl.POINTS}.
 * @see {@link https://threejs.org/docs/index.html#api/en/objects/Points | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/objects/Points.js | Source}
 */
export class Points<
    TGeometry extends BufferGeometry = BufferGeometry,
    TMaterial extends Material | Material[] = Material | Material[],
> extends Object3D {
    /**
     * Create a new instance of {@link Points}
     * @param geometry An instance of {@link THREE.BufferGeometry | BufferGeometry}. Default {@link THREE.BufferGeometry | `new THREE.BufferGeometry()`}.
     * @param material A single or an array of {@link THREE.Material | Material}. Default {@link THREE.PointsMaterial | `new THREE.PointsMaterial()`}.
     */
    constructor(geometry?: TGeometry, material?: TMaterial);

    /**
     * Read-only flag to check if a given object is of type {@link Points}.
     * @remarks This is a _constant_ value
     * @defaultValue `true`
     */
    readonly isPoints: true;

    /**
     * @override
     * @defaultValue `Points`
     */
    override readonly type: string | 'Points';

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
     * An instance of {@link THREE.BufferGeometry | BufferGeometry} (or derived classes), defining the object's structure.
     * @remarks each vertex designates the position of a particle in the system.
     */
    geometry: TGeometry;

    /**
     * An instance of {@link THREE.Material | Material}, defining the object's appearance.
     * @defaultValue {@link THREE.PointsMaterial | `new THREE.PointsMaterial()`}, _with randomised colour_.
     */
    material: TMaterial;

    /**
     * Updates the morphTargets to have no influence on the object
     * @remarks Resets the {@link morphTargetInfluences} and {@link morphTargetDictionary} properties.
     */
    updateMorphTargets(): void;
}
