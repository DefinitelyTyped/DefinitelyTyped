import { Vector3 } from "../math/Vector3";
import { GameEntity } from "./GameEntity";

/**
 * Class representing moving game entities.
 */
export class MovingEntity extends GameEntity {
    /**
     * The velocity of this game entity.
     * @default Vector3(0,0,0)
     */
    velocity: Vector3;

    /**
     * The maximum speed at which this game entity may travel.
     * @default 1
     */
    maxSpeed: number;

    /**
     * Whether the orientation of this game entity will be updated based on the velocity or not.
     * @default true
     */
    updateOrientation: boolean;

    /**
     * Constructs a new moving entity.
     */
    constructor();

    /**
     * Returns the current speed of this game entity.
     *
     * @return The current speed.
     */
    getSpeed(): number;

    /**
     * Returns the current speed in squared space of this game entity.
     *
     * @return The current speed in squared space.
     */
    getSpeedSquared(): number;
}
