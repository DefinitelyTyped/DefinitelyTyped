import { Line } from './Line.js';
import { Material } from './../materials/Material.js';
import { BufferGeometry } from '../core/BufferGeometry.js';

/**
 * A continuous line that connects back to the start.
 * @remarks
 * This is nearly the same as {@link THREE.Line | Line},
 * the only difference is that it is rendered using {@link https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/drawElements | gl.LINE_LOOP}
 * instead of {@link https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/drawElements | gl.LINE_STRIP},
 * which draws a straight line to the next vertex, and connects the last vertex back to the first.
 * @see {@link https://threejs.org/docs/index.html#api/en/objects/LineLoop | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/objects/LineLoop.js | Source}
 */
export class LineLoop<
    TGeometry extends BufferGeometry = BufferGeometry,
    TMaterial extends Material | Material[] = Material | Material[],
> extends Line<TGeometry, TMaterial> {
    /**
     * Create a new instance of {@link LineLoop}
     * @param geometry  List of vertices representing points on the line loop. Default {@link THREE.BufferGeometry | `new THREE.BufferGeometry()`}.
     * @param material Material for the line. Default {@link THREE.LineBasicMaterial | `new THREE.LineBasicMaterial()`}.
     */
    constructor(geometry?: TGeometry, material?: TMaterial);

    /**
     * Read-only flag to check if a given object is of type {@link LineLoop}.
     * @remarks This is a _constant_ value
     * @defaultValue `true`
     */
    readonly isLineLoop: true;

    /**
     * @override
     * @defaultValue `LineLoop`
     */
    override readonly type: string | 'LineLoop';
}
