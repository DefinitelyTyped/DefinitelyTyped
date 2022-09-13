import { GameEntity } from "../core/GameEntity";
import { Vector3 } from "../math/Vector3";
import { SteeringBehavior } from "./SteeringBehavior.js";
import { Vehicle } from "./Vehicle";

/**
 * This class is responsible for managing the steering of a single vehicle. The steering manager
 * can manage multiple steering behaviors and combine their produced force into a single one used
 * by the vehicle.
 */
export class SteeringManager {
    /**
     * The vehicle that owns this steering manager.
     */
    vehicle: Vehicle;

    /**
     * A list of all steering behaviors.
     */
    readonly behaviors: SteeringBehavior[];

    /**
     * Constructs a new steering manager.
     *
     * @param vehicle - The vehicle that owns this steering manager.
     */
    constructor(vehicle: Vehicle);

    /**
     * Adds the given steering behavior to this steering manager.
     *
     * @param behavior - The steering behavior to add.
     */
    add(behavior: SteeringBehavior): this;

    /**
     * Removes the given steering behavior from this steering manager.
     *
     * @param behavior - The steering behavior to remove.
     */
    remove(behavior: SteeringBehavior): this;

    /**
     * Clears the internal state of this steering manager.
     */
    clear(): this;

    /**
     * Calculates the steering forces for all active steering behaviors and
     * combines it into a single result force. This method is called in
     * {@link Vehicle#update}.
     *
     * @param delta - The time delta.
     * @param result - The force/result vector.
     * @return The force/result vector.
     */
    calculate(delta: number, result: Vector3): Vector3;

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
     * Registers a custom type for deserialization. When calling {@link SteeringManager#fromJSON}
     * the steering manager is able to pick the correct constructor in order to create custom
     * steering behavior.
     *
     * @param type - The name of the behavior type.
     * @param constructor - The constructor function.
     */
    registerType(type: string, constructor: () => SteeringBehavior): this;

    /**
     * Restores UUIDs with references to GameEntity objects.
     *
     * @param entities - Maps game entities to UUIDs.
     */
    resolveReferences(entities: Map<string, GameEntity>): this;
}
