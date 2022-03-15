import { Vector3 } from "../math/Vector3";

export class Path {
    /**
     * Whether this path is looped or not.
     * @default false
     */
    loop: boolean;

    /**
     * Constructs a new path.
     */
    constructor();

    /**
     * Adds the given waypoint to this path.
     *
     * @param waypoint - The waypoint to add.
     */
    add(waypoint: Vector3): this;

    /**
     * Clears the internal state of this path.
     */
    clear(): this;

    /**
     * Returns the current active waypoint of this path.
     */
    current(): Vector3;

    /**
     * Returns true if this path is not looped and the last waypoint is active.
     *
     * @return Whether this path is finished or not.
     */
    finished(): boolean;

    /**
     * Makes the next waypoint of this path active. If the path is looped and
     * {@link Path#finished} returns true, the path starts from the beginning.
     */
    advance(): this;

    /**
     * Transforms this instance into a JSON object.
     */
    toJSON(): { [s: string]: any };

    /**
     * Restores this instance from the given JSON object.
     *
     * @param json - The JSON object.
     */
    fromJSON(json: { [s: string]: any }): this;
}
