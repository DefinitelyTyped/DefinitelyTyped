import { BufferGeometry } from "../core/BufferGeometry.js";
import { Object3D } from "../core/Object3D.js";
import { LineBasicMaterial } from "../materials/LineBasicMaterial.js";
import { Box3 } from "../math/Box3.js";
import { ColorRepresentation } from "../math/Color.js";
import { LineSegments } from "../objects/LineSegments.js";

/**
 * Helper object to graphically show the world-axis-aligned bounding box
 * around an object. The actual bounding box is handled with {@link Box3},
 * this is just a visual helper for debugging. It can be automatically
 * resized with {@link BoxHelper#update} when the object it's created from
 * is transformed. Note that the object must have a geometry for this to work,
 * so it won't work with sprites.
 *
 * ```js
 * const sphere = new THREE.SphereGeometry();
 * const object = new THREE.Mesh( sphere, new THREE.MeshBasicMaterial( 0xff0000 ) );
 * const box = new THREE.BoxHelper( object, 0xffff00 );
 * scene.add( box );
 * ```
 */
export class BoxHelper extends LineSegments<BufferGeometry, LineBasicMaterial> {
    /**
     * Constructs a new box helper.
     *
     * @param {Object3D} [object] - The 3D object to show the world-axis-aligned bounding box.
     * @param {number|Color|string} [color=0xffff00] - The box's color.
     */
    constructor(object: Object3D, color?: ColorRepresentation);
    /**
     * The 3D object being visualized.
     */
    object: Object3D;
    /**
     * Updates the helper's geometry to match the dimensions of the object,
     * including any children.
     */
    update(): void;
    /**
     * Updates the wireframe box for the passed object.
     *
     * @param {Object3D} object - The 3D object to create the helper for.
     * @return {BoxHelper} A reference to this instance.
     */
    setFromObject(object: Object3D): BoxHelper;
    copy(source: BoxHelper, recursive?: boolean): this;
    /**
     * Frees the GPU-related resources allocated by this instance. Call this
     * method whenever this instance is no longer used in your app.
     */
    dispose(): void;
}
