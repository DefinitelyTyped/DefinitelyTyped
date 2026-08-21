import { BufferGeometry } from "../core/BufferGeometry.js";
import { Object3D, Object3DEventMap } from "../core/Object3D.js";
import { Material } from "../materials/Material.js";

/**
 * A continuous line.
 * @remarks
 * This is nearly the same as {@link THREE.LineSegments | LineSegments},
 * the only difference is that it is rendered using {@link https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/drawElements | gl.LINE_STRIP}
 * instead of {@link https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/drawElements | gl.LINES}
 * @example
 * ```typescript
 * const material = new THREE.LineBasicMaterial({
 *     color: 0x0000ff
 * });
 * const points = [];
 * points.push(new THREE.Vector3(-10, 0, 0));
 * points.push(new THREE.Vector3(0, 10, 0));
 * points.push(new THREE.Vector3(10, 0, 0));
 * const geometry = new THREE.BufferGeometry().setFromPoints(points);
 * const {@link Line} = new THREE.Line(geometry, material);
 * scene.add(line);
 * ```
 * @see {@link https://threejs.org/docs/index.html#api/en/objects/Line | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/objects/Line.js | Source}
 */
export class Line<
    TGeometry extends BufferGeometry = BufferGeometry,
    TMaterial extends Material | Material[] = Material | Material[],
    TEventMap extends Object3DEventMap = Object3DEventMap,
> extends Object3D<TEventMap> {
    /**
     * Create a new instance of {@link Line}
     * @param geometry Vertices representing the {@link Line} segment(s). Default {@link THREE.BufferGeometry | `new THREE.BufferGeometry()`}.
     * @param material Material for the line. Default {@link THREE.LineBasicMaterial | `new THREE.LineBasicMaterial()`}.
     */
    constructor(geometry?: TGeometry, material?: TMaterial);

    /**
     * Read-only flag to check if a given object is of type {@link Line}.
     * @remarks This is a _constant_ value
     * @defaultValue `true`
     */
    readonly isLine: true;

    /**
     * @override
     * @defaultValue `Line`
     */
    override readonly type: string | "Line";

    /**
     * Vertices representing the {@link Line} segment(s).
     */
    geometry: TGeometry;

    /**
     * Material for the line.
     */
    material: TMaterial;

    /**
     * An array of weights typically from `0-1` that specify how much of the morph is applied.
     * @defaultValue `undefined`, but reset to a blank array by {@link updateMorphTargets | .updateMorphTargets()}.
     */
    morphTargetInfluences?: number[] | undefined;

    /**
     * A dictionary of morphTargets based on the `morphTarget.name` property.
     * @defaultValue `undefined`, but reset to a blank array by {@link updateMorphTargets | .updateMorphTargets()}.
     */
    morphTargetDictionary?: { [key: string]: number } | undefined;

    /**
     * Computes an array of distance values which are necessary for {@link THREE.LineDashedMaterial | LineDashedMaterial}
     * @remarks
     * For each vertex in the geometry, the method calculates the cumulative length from the current point to the very beginning of the line.
     */
    computeLineDistances(): this;

    /**
     * Updates the morphTargets to have no influence on the object
     * @remarks
     * Resets the {@link morphTargetInfluences | .morphTargetInfluences} and {@link morphTargetDictionary | .morphTargetDictionary} properties.
     */
    updateMorphTargets(): void;
}
