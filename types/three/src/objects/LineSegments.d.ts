import { BufferGeometry } from "../core/BufferGeometry.js";
import { Object3DEventMap } from "../core/Object3D.js";
import { Material } from "../materials/Material.js";
import { Line } from "./Line.js";

/**
 * A series of lines drawn between pairs of vertices.
 * @remarks
 * This is nearly the same as {@link THREE.Line | Line},
 * the only difference is that it is rendered using {@link https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/drawElements | gl.LINES}
 * instead of {@link https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/drawElements | gl.LINE_STRIP}.
 * @see {@link https://threejs.org/docs/index.html#api/en/objects/LineSegments | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/objects/LineSegments.js | Source}
 */
export class LineSegments<
    TGeometry extends BufferGeometry = BufferGeometry,
    TMaterial extends Material | Material[] = Material | Material[],
    TEventMap extends Object3DEventMap = Object3DEventMap,
> extends Line<TGeometry, TMaterial, TEventMap> {
    /**
     * Create a new instance of {@link LineSegments}
     * @param geometry Pair(s) of vertices representing each line segment(s). Default {@link THREE.BufferGeometry | `new THREE.BufferGeometry()`}.
     * @param material Material for the line. Default {@link THREE.LineBasicMaterial | `new THREE.LineBasicMaterial()`}.
     */
    constructor(geometry?: TGeometry, material?: TMaterial);

    /**
     * Read-only flag to check if a given object is of type {@link LineSegments}.
     * @remarks This is a _constant_ value
     * @defaultValue `true`
     */
    readonly isLineSegments: true;

    /**
     * A Read-only _string_ to check if `this` object type.
     * @remarks Sub-classes will update this value.
     * @override
     * @defaultValue `LineSegments`
     */
    override readonly type: string | "LineSegments";
}
