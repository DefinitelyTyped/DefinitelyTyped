import { AnimationClip } from "../animation/AnimationClip.js";
import { Camera } from "../cameras/Camera.js";
import { Material } from "../materials/Material.js";
import { Euler } from "../math/Euler.js";
import { Matrix3 } from "../math/Matrix3.js";
import { Matrix4 } from "../math/Matrix4.js";
import { Quaternion } from "../math/Quaternion.js";
import { Vector3 } from "../math/Vector3.js";
import { Group } from "../objects/Group.js";
import { WebGLRenderer } from "../renderers/WebGLRenderer.js";
import { Scene } from "../scenes/Scene.js";
import { BufferGeometry } from "./BufferGeometry.js";
import { EventDispatcher } from "./EventDispatcher.js";
import { Layers } from "./Layers.js";
import { Intersection, Raycaster } from "./Raycaster.js";

export interface Object3DEventMap {
    /**
     * Fires when the object has been added to its parent object.
     */
    added: {};

    /**
     * Fires when the object has been removed from its parent object.
     */
    removed: {};

    /**
     * Fires when a new child object has been added.
     */
    childadded: { child: Object3D };

    /**
     * Fires when a new child object has been removed.
     */
    childremoved: { child: Object3D };
}

/**
 * This is the base class for most objects in three.js and provides a set of properties and methods for manipulating objects in 3D space.
 * @remarks Note that this can be used for grouping objects via the {@link THREE.Object3D.add | .add()} method which adds the object as a child,
 * however it is better to use {@link THREE.Group | Group} for this.
 * @see {@link https://threejs.org/docs/index.html#api/en/core/Object3D | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/core/Object3D.js | Source}
 */
export class Object3D<TEventMap extends Object3DEventMap = Object3DEventMap> extends EventDispatcher<TEventMap> {
    /**
     * This creates a new {@link Object3D} object.
     */
    constructor();

    /**
     * Flag to check if a given object is of type {@link Object3D}.
     * @remarks This is a _constant_ value
     * @defaultValue `true`
     */
    readonly isObject3D: true;

    /**
     * Unique number for this {@link Object3D} instance.
     * @remarks Note that ids are assigned in chronological order: 1, 2, 3, ..., incrementing by one for each new object.
     * Expects a `Integer`
     */
    readonly id: number;

    /**
     * {@link http://en.wikipedia.org/wiki/Universally_unique_identifier | UUID} of this object instance.
     * @remarks This gets automatically assigned and shouldn't be edited.
     */
    uuid: string;

    /**
     * Optional name of the object
     * @remarks _(doesn't need to be unique)_.
     * @defaultValue `""`
     */
    name: string;

    /**
     * A Read-only _string_ to check `this` object type.
     * @remarks This can be used to find a specific type of Object3D in a scene.
     * Sub-classes will update this value.
     * @defaultValue `Object3D`
     */
    readonly type: string | "Object3D";

    /**
     * Object's parent in the {@link https://en.wikipedia.org/wiki/Scene_graph | scene graph}.
     * @remarks An object can have at most one parent.
     * @defaultValue `null`
     */
    parent: Object3D | null;

    /**
     * Array with object's children.
     * @see {@link THREE.Object3DGroup | Group} for info on manually grouping objects.
     * @defaultValue `[]`
     */

    children: Object3D[];

    /**
     * This is used by the {@link lookAt | lookAt} method, for example, to determine the orientation of the result.
     * @defaultValue {@link DEFAULT_UP | Object3D.DEFAULT_UP} - that is `(0, 1, 0)`.
     */
    up: Vector3;

    /**
     * Object's local position.
     * @defaultValue `new THREE.Vector3()` - that is `(0, 0, 0)`.
     */
    readonly position: Vector3;

    /**
     * Object's local rotation ({@link https://en.wikipedia.org/wiki/Euler_angles | Euler angles}), in radians.
     * @defaultValue `new THREE.Euler()` - that is `(0, 0, 0, Euler.DEFAULT_ORDER)`.
     */
    readonly rotation: Euler;

    /**
     * Object's local rotation as a {@link THREE.Quaternion | Quaternion}.
     * @defaultValue `new THREE.Quaternion()` - that is `(0,  0, 0, 1)`.
     */
    readonly quaternion: Quaternion;

    /**
     * The object's local scale.
     * @defaultValue `new THREE.Vector3( 1, 1, 1 )`
     */
    readonly scale: Vector3;

    /**
     * @defaultValue `new THREE.Matrix4()`
     */
    readonly modelViewMatrix: Matrix4;

    /**
     * @defaultValue `new THREE.Matrix3()`
     */
    readonly normalMatrix: Matrix3;

    /**
     * The local transform matrix.
     * @defaultValue `new THREE.Matrix4()`
     */
    matrix: Matrix4;

    /**
     * The global transform of the object.
     * @remarks If the {@link Object3D} has no parent, then it's identical to the local transform {@link THREE.Object3D.matrix | .matrix}.
     * @defaultValue `new THREE.Matrix4()`
     */
    matrixWorld: Matrix4;

    /**
     * When this is set, it calculates the matrix of position, (rotation or quaternion) and
     * scale every frame and also recalculates the matrixWorld property.
     * @defaultValue {@link DEFAULT_MATRIX_AUTO_UPDATE} - that is `(true)`.
     */
    matrixAutoUpdate: boolean;

    /**
     * If set, then the renderer checks every frame if the object and its children need matrix updates.
     * When it isn't, then you have to maintain all matrices in the object and its children yourself.
     * @defaultValue {@link DEFAULT_MATRIX_WORLD_AUTO_UPDATE} - that is `(true)`.
     */
    matrixWorldAutoUpdate: boolean;

    /**
     * When this is set, it calculates the matrixWorld in that frame and resets this property to false.
     * @defaultValue `false`
     */
    matrixWorldNeedsUpdate: boolean;

    /**
     * The layer membership of the object.
     * @remarks The object is only visible if it has at least one layer in common with the {@link THREE.Object3DCamera | Camera} in use.
     * This property can also be used to filter out unwanted objects in ray-intersection tests when using {@link THREE.Raycaster | Raycaster}.
     * @defaultValue `new THREE.Layers()`
     */
    layers: Layers;

    /**
     * Object gets rendered if `true`.
     * @defaultValue `true`
     */
    visible: boolean;

    /**
     * Whether the object gets rendered into shadow map.
     * @defaultValue `false`
     */
    castShadow: boolean;

    /**
     * Whether the material receives shadows.
     * @defaultValue `false`
     */
    receiveShadow: boolean;

    /**
     * When this is set, it checks every frame if the object is in the frustum of the camera before rendering the object.
     * If set to `false` the object gets rendered every frame even if it is not in the frustum of the camera.
     * @defaultValue `true`
     */
    frustumCulled: boolean;

    /**
     * This value allows the default rendering order of {@link https://en.wikipedia.org/wiki/Scene_graph | scene graph}
     * objects to be overridden although opaque and transparent objects remain sorted independently.
     * @remarks When this property is set for an instance of {@link Group | Group}, all descendants objects will be sorted and rendered together.
     * Sorting is from lowest to highest renderOrder.
     * @defaultValue `0`
     */
    renderOrder: number;

    /**
     * Array with object's animation clips.
     * @defaultValue `[]`
     */
    animations: AnimationClip[];

    /**
     * An object that can be used to store custom data about the {@link Object3D}.
     * @remarks It should not hold references to _functions_ as these **will not** be cloned.
     * @default `{}`
     */
    userData: Record<string, any>;

    /**
     * Custom depth material to be used when rendering to the depth map.
     * @remarks Can only be used in context of meshes.
     * When shadow-casting with a {@link THREE.DirectionalLight | DirectionalLight} or {@link THREE.SpotLight | SpotLight},
     * if you are modifying vertex positions in the vertex shader you must specify a customDepthMaterial for proper shadows.
     * @defaultValue `undefined`
     */
    customDepthMaterial?: Material | undefined;

    /**
     * Same as {@link customDepthMaterial}, but used with {@link THREE.Object3DPointLight | PointLight}.
     * @defaultValue `undefined`
     */
    customDistanceMaterial?: Material | undefined;

    /**
     * An optional callback that is executed immediately before a 3D object is rendered to a shadow map.
     * @remarks This function is called with the following parameters: renderer, scene, camera, shadowCamera, geometry,
     * depthMaterial, group.
     * Please notice that this callback is only executed for `renderable` 3D objects. Meaning 3D objects which
     * define their visual appearance with geometries and materials like instances of {@link Mesh}, {@link Line},
     * {@link Points} or {@link Sprite}. Instances of {@link Object3D}, {@link Group} or {@link Bone} are not renderable
     * and thus this callback is not executed for such objects.
     */
    onBeforeShadow(
        renderer: WebGLRenderer,
        scene: Scene,
        shadowCamera: Camera,
        geometry: BufferGeometry,
        depthMaterial: Material,
        group: Group,
    ): void;

    /**
     * An optional callback that is executed immediately after a 3D object is rendered to a shadow map.
     * @remarks This function is called with the following parameters: renderer, scene, camera, shadowCamera, geometry,
     * depthMaterial, group.
     * Please notice that this callback is only executed for `renderable` 3D objects. Meaning 3D objects which
     * define their visual appearance with geometries and materials like instances of {@link Mesh}, {@link Line},
     * {@link Points} or {@link Sprite}. Instances of {@link Object3D}, {@link Group} or {@link Bone} are not renderable
     * and thus this callback is not executed for such objects.
     */
    onAfterShadow(
        renderer: WebGLRenderer,
        scene: Scene,
        shadowCamera: Camera,
        geometry: BufferGeometry,
        depthMaterial: Material,
        group: Group,
    ): void;

    /**
     * An optional callback that is executed immediately before a 3D object is rendered.
     * @remarks This function is called with the following parameters: renderer, scene, camera, geometry, material, group.
     * Please notice that this callback is only executed for `renderable` 3D objects. Meaning 3D objects which
     * define their visual appearance with geometries and materials like instances of {@link Mesh}, {@link Line},
     * {@link Points} or {@link Sprite}. Instances of {@link Object3D}, {@link Group} or {@link Bone} are not renderable
     * and thus this callback is not executed for such objects.
     */
    onBeforeRender(
        renderer: WebGLRenderer,
        scene: Scene,
        camera: Camera,
        geometry: BufferGeometry,
        material: Material,
        group: Group,
    ): void;

    /**
     * An optional callback that is executed immediately after a 3D object is rendered.
     * @remarks This function is called with the following parameters: renderer, scene, camera, geometry, material, group.
     * Please notice that this callback is only executed for `renderable` 3D objects. Meaning 3D objects which
     * define their visual appearance with geometries and materials like instances of {@link Mesh}, {@link Line},
     * {@link Points} or {@link Sprite}. Instances of {@link Object3D}, {@link Group} or {@link Bone} are not renderable
     * and thus this callback is not executed for such objects.
     */
    onAfterRender(
        renderer: WebGLRenderer,
        scene: Scene,
        camera: Camera,
        geometry: BufferGeometry,
        material: Material,
        group: Group,
    ): void;

    /**
     * The default {@link up} direction for objects, also used as the default position for {@link THREE.DirectionalLight | DirectionalLight},
     * {@link THREE.HemisphereLight | HemisphereLight} and {@link THREE.Spotlight | Spotlight} (which creates lights shining from the top down).
     * @defaultValue `new THREE.Vector3( 0, 1, 0)`
     */
    static DEFAULT_UP: Vector3;

    /**
     * The default setting for {@link matrixAutoUpdate} for newly created Object3Ds.
     * @defaultValue `true`
     */
    static DEFAULT_MATRIX_AUTO_UPDATE: boolean;

    /**
     * The default setting for {@link matrixWorldAutoUpdate} for newly created Object3Ds.
     * @defaultValue `true`
     */
    static DEFAULT_MATRIX_WORLD_AUTO_UPDATE: boolean;

    /**
     * Applies the matrix transform to the object and updates the object's position, rotation and scale.
     * @param matrix
     */
    applyMatrix4(matrix: Matrix4): void;

    /**
     * Applies the rotation represented by the quaternion to the object.
     * @param quaternion
     */
    applyQuaternion(quaternion: Quaternion): this;

    /**
     * Calls {@link THREE.Quaternion.setFromAxisAngle | setFromAxisAngle}({@link axis}, {@link angle}) on the {@link quaternion | .quaternion}.
     * @param axis A normalized vector in object space.
     * @param angle Angle in radians. Expects a `Float`
     */
    setRotationFromAxisAngle(axis: Vector3, angle: number): void;

    /**
     * Calls {@link THREE.Quaternion.setFromEuler | setFromEuler}({@link euler}) on the {@link quaternion | .quaternion}.
     * @param euler Euler angle specifying rotation amount.
     */
    setRotationFromEuler(euler: Euler): void;

    /**
     * Calls {@link THREE.Quaternion.setFromRotationMatrix | setFromRotationMatrix}({@link m}) on the {@link quaternion | .quaternion}.
     * @remarks Note that this assumes that the upper 3x3 of m is a pure rotation matrix (i.e, unscaled).
     * @param m Rotate the quaternion by the rotation component of the matrix.
     */
    setRotationFromMatrix(m: Matrix4): void;

    /**
     * Copy the given {@link THREE.Quaternion | Quaternion} into {@link quaternion | .quaternion}.
     * @param q Normalized Quaternion.
     */
    setRotationFromQuaternion(q: Quaternion): void;

    /**
     * Rotate an object along an axis in object space.
     * @remarks The axis is assumed to be normalized.
     * @param axis A normalized vector in object space.
     * @param angle The angle in radians. Expects a `Float`
     */
    rotateOnAxis(axis: Vector3, angle: number): this;

    /**
     * Rotate an object along an axis in world space.
     * @remarks The axis is assumed to be normalized
     * Method Assumes no rotated parent.
     * @param axis A normalized vector in world space.
     * @param angle The angle in radians. Expects a `Float`
     */
    rotateOnWorldAxis(axis: Vector3, angle: number): this;

    /**
     * Rotates the object around _x_ axis in local space.
     * @param rad The angle to rotate in radians. Expects a `Float`
     */
    rotateX(angle: number): this;

    /**
     * Rotates the object around _y_ axis in local space.
     * @param rad The angle to rotate in radians. Expects a `Float`
     */
    rotateY(angle: number): this;

    /**
     * Rotates the object around _z_ axis in local space.
     * @param rad The angle to rotate in radians. Expects a `Float`
     */
    rotateZ(angle: number): this;

    /**
     * Translate an object by distance along an axis in object space
     * @remarks The axis is assumed to be normalized.
     * @param axis A normalized vector in object space.
     * @param distance The distance to translate. Expects a `Float`
     */
    translateOnAxis(axis: Vector3, distance: number): this;

    /**
     * Translates object along x axis in object space by {@link distance} units.
     * @param distance Expects a `Float`
     */
    translateX(distance: number): this;

    /**
     * Translates object along _y_ axis in object space by {@link distance} units.
     * @param distance Expects a `Float`
     */
    translateY(distance: number): this;

    /**
     * Translates object along _z_ axis in object space by {@link distance} units.
     * @param distance Expects a `Float`
     */
    translateZ(distance: number): this;

    /**
     * Converts the vector from this object's local space to world space.
     * @param vector A vector representing a position in this object's local space.
     */
    localToWorld(vector: Vector3): Vector3;

    /**
     * Converts the vector from world space to this object's local space.
     * @param vector A vector representing a position in world space.
     */
    worldToLocal(vector: Vector3): Vector3;

    /**
     * Rotates the object to face a point in world space.
     * @remarks This method does not support objects having non-uniformly-scaled parent(s).
     * @param vector A vector representing a position in world space to look at.
     */
    lookAt(vector: Vector3): void;
    /**
     * Rotates the object to face a point in world space.
     * @remarks This method does not support objects having non-uniformly-scaled parent(s).
     * @param x Expects a `Float`
     * @param y Expects a `Float`
     * @param z Expects a `Float`
     */
    lookAt(x: number, y: number, z: number): void;

    /**
     * Adds another {@link Object3D} as child of this {@link Object3D}.
     * @remarks An arbitrary number of objects may be added
     * Any current parent on an {@link object} passed in here will be removed, since an {@link Object3D} can have at most one parent.
     * @see {@link attach}
     * @see {@link THREE.Group | Group} for info on manually grouping objects.
     * @param object
     */
    add(...object: Object3D[]): this;

    /**
     * Removes a {@link Object3D} as child of this {@link Object3D}.
     * @remarks An arbitrary number of objects may be removed.
     * @see {@link THREE.Group | Group} for info on manually grouping objects.
     * @param object
     */
    remove(...object: Object3D[]): this;

    /**
     * Removes this object from its current parent.
     */
    removeFromParent(): this;

    /**
     * Removes all child objects.
     */
    clear(): this;

    /**
     * Adds a {@link Object3D} as a child of this, while maintaining the object's world transform.
     * @remarks Note: This method does not support scene graphs having non-uniformly-scaled nodes(s).
     * @see {@link add}
     * @param object
     */
    attach(object: Object3D): this;

    /**
     * Searches through an object and its children, starting with the object itself, and returns the first with a matching id.
     * @remarks Note that ids are assigned in chronological order: 1, 2, 3, ..., incrementing by one for each new object.
     * @see {@link id}
     * @param id Unique number of the object instance. Expects a `Integer`
     */
    getObjectById(id: number): Object3D | undefined;

    /**
     * Searches through an object and its children, starting with the object itself, and returns the first with a matching name.
     * @remarks Note that for most objects the name is an empty string by default
     * You will have to set it manually to make use of this method.
     * @param name String to match to the children's Object3D.name property.
     */
    getObjectByName(name: string): Object3D | undefined;

    /**
     * Searches through an object and its children, starting with the object itself,
     * and returns the first with a property that matches the value given.
     *
     * @param name - the property name to search for.
     * @param value - value of the given property.
     */
    getObjectByProperty(name: string, value: any): Object3D | undefined;

    /**
     * Searches through an object and its children, starting with the object itself,
     * and returns the first with a property that matches the value given.
     * @param name The property name to search for.
     * @param value Value of the given property.
     * @param optionalTarget target to set the result. Otherwise a new Array is instantiated. If set, you must clear
     * this array prior to each call (i.e., array.length = 0;).
     */
    getObjectsByProperty(name: string, value: any, optionalTarget?: Object3D[]): Object3D[];

    /**
     * Returns a vector representing the position of the object in world space.
     * @param target The result will be copied into this Vector3.
     */
    getWorldPosition(target: Vector3): Vector3;

    /**
     * Returns a quaternion representing the rotation of the object in world space.
     * @param target The result will be copied into this Quaternion.
     */
    getWorldQuaternion(target: Quaternion): Quaternion;

    /**
     * Returns a vector of the scaling factors applied to the object for each axis in world space.
     * @param target The result will be copied into this Vector3.
     */
    getWorldScale(target: Vector3): Vector3;

    /**
     * Returns a vector representing the direction of object's positive z-axis in world space.
     * @param target The result will be copied into this Vector3.
     */
    getWorldDirection(target: Vector3): Vector3;

    /**
     * Abstract (empty) method to get intersections between a casted ray and this object
     * @remarks Subclasses such as {@link THREE.Mesh | Mesh}, {@link THREE.Line | Line}, and {@link THREE.Points | Points} implement this method in order to use raycasting.
     * @see {@link THREE.Raycaster | Raycaster}
     * @param raycaster
     * @param intersects
     * @defaultValue `() => {}`
     */
    raycast(raycaster: Raycaster, intersects: Intersection[]): void;

    /**
     * Executes the callback on this object and all descendants.
     * @remarks Note: Modifying the scene graph inside the callback is discouraged.
     * @param callback A function with as first argument an {@link Object3D} object.
     */
    traverse(callback: (object: Object3D) => any): void;

    /**
     * Like traverse, but the callback will only be executed for visible objects
     * @remarks Descendants of invisible objects are not traversed.
     * Note: Modifying the scene graph inside the callback is discouraged.
     * @param callback A function with as first argument an {@link Object3D} object.
     */
    traverseVisible(callback: (object: Object3D) => any): void;

    /**
     * Executes the callback on all ancestors.
     * @remarks Note: Modifying the scene graph inside the callback is discouraged.
     * @param callback A function with as first argument an {@link Object3D} object.
     */
    traverseAncestors(callback: (object: Object3D) => any): void;

    /**
     * Updates local transform.
     */
    updateMatrix(): void;

    /**
     * Updates the global transform of the object.
     * And will update the object descendants if {@link matrixWorldNeedsUpdate | .matrixWorldNeedsUpdate} is set to true or if the {@link force} parameter is set to `true`.
     * @param force A boolean that can be used to bypass {@link matrixWorldAutoUpdate | .matrixWorldAutoUpdate}, to recalculate the world matrix of the object and descendants on the current frame.
     * Useful if you cannot wait for the renderer to update it on the next frame, assuming {@link matrixWorldAutoUpdate | .matrixWorldAutoUpdate} set to `true`.
     */
    updateMatrixWorld(force?: boolean): void;

    /**
     * Updates the global transform of the object.
     * @param updateParents Recursively updates global transform of ancestors.
     * @param updateChildren Recursively updates global transform of descendants.
     */
    updateWorldMatrix(updateParents: boolean, updateChildren: boolean): void;

    /**
     * Convert the object to three.js {@link https://github.com/mrdoob/three.js/wiki/JSON-Object-Scene-format-4 | JSON Object/Scene format}.
     * @param meta Object containing metadata such as materials, textures or images for the object.
     */
    toJSON(meta?: { geometries: any; materials: any; textures: any; images: any }): any;

    /**
     * Returns a clone of `this` object and optionally all descendants.
     * @param recursive If true, descendants of the object are also cloned. Default `true`
     */
    clone(recursive?: boolean): this;

    /**
     * Copy the given object into this object
     * @remarks Note: event listeners and user-defined callbacks ({@link onAfterRender | .onAfterRender} and {@link onBeforeRender | .onBeforeRender}) are not copied.
     * @param source
     * @param recursive If true, descendants of the object are also copied. Default `true`
     */
    copy(source: this, recursive?: boolean): this;
}
