import { Vector3 } from './../math/Vector3';
import { Line } from './../objects/Line';
import { Mesh } from './../objects/Mesh';
import { Object3D } from './../core/Object3D';
import { ColorRepresentation } from '../math/Color';

/**
 * An 3D arrow object for visualizing directions.
 * @example
 * ```typescript
 * const dir = new THREE.Vector3(1, 2, 0);
 * //normalize the direction vector (convert to vector of length 1)
 * dir.normalize();
 * const origin = new THREE.Vector3(0, 0, 0);
 * const length = 1;
 * const hex = 0xffff00;
 * const {@link ArrowHelper} = new THREE.ArrowHelper(dir, origin, length, hex);
 * scene.add(arrowHelper);
 * ```
 * @see Example: {@link https://threejs.org/examples/#webgl_shadowmesh | WebGL / shadowmesh}
 * @see {@link https://threejs.org/docs/index.html#api/en/helpers/ArrowHelper | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/helpers/ArrowHelper.js | Source}
 */
export class ArrowHelper extends Object3D {
    /**
     * Create a new instance of {@link ArrowHelper}
     * @param dir Direction from origin. Must be a unit vector. Default `new THREE.Vector3(0, 0, 1)`
     * @param origin Point at which the arrow starts. Default `new THREE.Vector3(0, 0, 0)`
     * @param length Length of the arrow. Default `1`
     * @param hex Hexadecimal value to define color. Default `0xffff00`
     * @param headLength The length of the head of the arrow. Default `0.2 * length`
     * @param headWidth The width of the head of the arrow. Default `0.2 * headLength`
     */
    constructor(
        dir?: Vector3,
        origin?: Vector3,
        length?: number,
        color?: ColorRepresentation,
        headLength?: number,
        headWidth?: number,
    );

    /**
     * A Read-only _string_ to check if `this` object type.
     * @remarks Sub-classes will update this value.
     * @override
     * @defaultValue `ArrowHelper`
     */
    override readonly type: string | 'ArrowHelper';

    /**
     * Contains the line part of the arrowHelper.
     */
    line: Line;

    /**
     * Contains the cone part of the arrowHelper.
     */
    cone: Mesh;

    /**
     * Sets the color of the arrowHelper.
     * @param color The desired color.
     */
    setColor(color: ColorRepresentation): void;

    /**
     * @param dir The desired direction. Must be a unit vector.
     */
    setDirection(dir: Vector3): void;

    /**
     * Sets the length of the arrowhelper.
     * @param length The desired length.
     * @param headLength The length of the head of the arrow. Default `0.2 * length`
     * @param headWidth The width of the head of the arrow. Default `0.2 * headLength`
     */
    setLength(length: number, headLength?: number, headWidth?: number): void;

    /**
     * Copy the given object into this object
     * @remarks Note: event listeners and user-defined callbacks ({@link onAfterRender | .onAfterRender} and {@link onBeforeRender | .onBeforeRender}) are not copied.
     * @param source
     */
    override copy(source: this): this;

    /**
     * Frees the GPU-related resources allocated by this instance
     * @remarks
     * Call this method whenever this instance is no longer used in your app.
     */
    dispose(): void;
}
