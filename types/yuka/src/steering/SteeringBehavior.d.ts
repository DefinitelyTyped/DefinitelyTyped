import { GameEntity } from "../core/GameEntity";
import { Vector3 } from "../math/Vector3";
import { Vehicle } from "./Vehicle";

/**
 * Base class for all concrete steering behaviors. They produce a force that describes
 * where an agent should move and how fast it should travel to get there.
 *
 * Note: All built-in steering behaviors assume a {@link Vehicle#mass} of one. Different values can lead to an unexpected results.
 */
export class SteeringBehavior {
    /**
     * Whether this steering behavior is active or not.
     * @default true
     */
    active: boolean;

    /**
     * Can be used to tweak the amount that a steering force contributes to the total steering force.
     * @default 1
     */
    weight: number;

    /**
     * Calculates the steering force for a single simulation step.
     *
     * @param vehicle - The game entity the force is produced for.
     * @param force - The force/result vector.
     * @param delta - The time delta.
     * @return The force/result vector.
     */
    calculate(vehicle: Vehicle, force: Vector3, delta: number): Vector3;

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

    /**
     * Restores UUIDs with references to GameEntity objects.
     *
     * @param entities - Maps game entities to UUIDs.
     */
    resolveReferences(entities: Map<string, GameEntity>): this;
}
