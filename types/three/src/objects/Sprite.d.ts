import { Vector2 } from './../math/Vector2.js';
import { Raycaster } from './../core/Raycaster.js';
import { Object3D } from './../core/Object3D.js';
import { Intersection } from '../core/Raycaster.js';
import { SpriteMaterial } from '../materials/Materials.js';
import { BufferGeometry } from '../core/BufferGeometry.js';

/**
 * A {@link Sprite} is a plane that always faces towards the camera, generally with a partially transparent texture applied.
 * @remarks Sprites do not cast shadows, setting `castShadow = true` will have no effect.
 * @example
 * ```typescript
 * const map = new THREE.TextureLoader().load('sprite.png');
 * const material = new THREE.SpriteMaterial({
 *     map: map
 * });
 * const {@link Sprite} = new THREE.Sprite(material);
 * scene.add(sprite);
 * ```
 * @see {@link https://threejs.org/docs/index.html#api/en/objects/Sprite | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/objects/Sprite.js | Source}
 */
export class Sprite extends Object3D {
    /**
     * Creates a new Sprite.
     * @param material An instance of {@link THREE.SpriteMaterial | SpriteMaterial}. Default {@link THREE.SpriteMaterial | `new SpriteMaterial()`}, _with white color_.
     */
    constructor(material?: SpriteMaterial);

    /**
     * Read-only flag to check if a given object is of type {@link Sprite}.
     * @remarks This is a _constant_ value
     * @defaultValue `true`
     */
    readonly isSprite: true;

    /**
     * @override
     * @defaultValue `Sprite`
     */
    override readonly type: string | 'Sprite';

    /**
     * Whether the object gets rendered into shadow map.
     * No effect in {@link Sprite}.
     * @ignore
     * @hidden
     * @defaultValue `false`
     */
    override castShadow: false;

    geometry: BufferGeometry;

    /**
     * An instance of {@link THREE.SpriteMaterial | SpriteMaterial}, defining the object's appearance.
     * @defaultValue {@link THREE.SpriteMaterial | `new SpriteMaterial()`}, _with white color_.
     */
    material: SpriteMaterial;

    /**
     * The sprite's anchor point, and the point around which the {@link Sprite} rotates.
     * A value of (0.5, 0.5) corresponds to the midpoint of the sprite.
     * A value of (0, 0) corresponds to the lower left corner of the sprite.
     * @defaultValue {@link THREE.Vector2 | `new Vector2(0.5, 0.5)`}.
     */
    center: Vector2;
}
