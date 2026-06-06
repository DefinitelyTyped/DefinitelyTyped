import { GameEntity } from "../../core/GameEntity";
import { Vector3 } from "../../math/Vector3";
import { SteeringBehavior } from "../SteeringBehavior";
import { Vehicle } from "../Vehicle";

/**
 * This steering behavior produces a force so a vehicle avoids obstacles lying in its path.
 */
export class ObstacleAvoidanceBehavior extends SteeringBehavior {
    /**
     * An Array with obstacle of type {@link GameEntity}.
     */
    obstacles: GameEntity[];

    /**
     * This factor determines how much the vehicle decelerates if an intersection occurs.
     * @default 0.2
     */
    brakingWeight: number;

    /**
     * Minimum length of the detection box used for intersection tests.
     * @default 4
     */
    dBoxMinLength: number;

    /**
     * Constructs a new obstacle avoidance behavior.
     *
     * @param [obstacles] - An Array with obstacle of type {@link GameEntity}.
     */
    constructor(obstacles?: GameEntity[]);

    /**
     * Calculates the steering force for a single simulation step.
     *
     * @param vehicle - The game entity the force is produced for.
     * @param force - The force/result vector.
     * @return The force/result vector.
     */
    calculate(vehicle: Vehicle, force: Vector3): Vector3;
}
