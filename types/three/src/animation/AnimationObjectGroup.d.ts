import { Object3D } from "../core/Object3D.js";

/**
 * A group of objects that receives a shared animation state.
 *
 * Usage:
 *
 * - Add objects you would otherwise pass as 'root' to the
 * constructor or the .clipAction method of AnimationMixer.
 * - Instead pass this object as 'root'.
 * - You can also add and remove objects later when the mixer is running.
 *
 * Note:
 *
 * - Objects of this class appear as one object to the mixer,
 * so cache control of the individual objects must be done on the group.
 *
 * Limitation:
 *
 * - The animated properties must be compatible among the all objects in the group.
 * - A single property can either be controlled through a target group or directly, but not both.
 */
export class AnimationObjectGroup {
    /**
     * Constructs a new animation group.
     *
     * @param {...Object3D} arguments - An arbitrary number of 3D objects that share the same animation state.
     */
    constructor(...args: Object3D[]);
    /**
     * This flag can be used for type testing.
     *
     * @default true
     */
    readonly isAnimationObjectGroup: true;
    /**
     * The UUID of the 3D object.
     */
    readonly uuid: string;
    /**
     * Adds an arbitrary number of objects to this animation group.
     *
     * @param {...Object3D} arguments - The 3D objects to add.
     */
    add(...args: Object3D[]): void;
    /**
     * Removes an arbitrary number of objects to this animation group
     *
     * @param {...Object3D} arguments - The 3D objects to remove.
     */
    remove(...args: Object3D[]): void;
    /**
     * Deallocates all memory resources for the passed 3D objects of this animation group.
     *
     * @param {...Object3D} arguments - The 3D objects to uncache.
     */
    uncache(...args: Object3D[]): void;
}
