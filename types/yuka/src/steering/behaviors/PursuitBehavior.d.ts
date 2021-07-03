import { MovingEntity } from "../../core/MovingEntity";
import { Vector3 } from "../../math/Vector3";
import { SteeringBehavior } from "../SteeringBehavior";
import { Vehicle } from "../Vehicle";

/**
 * This steering behavior is useful when an agent is required to intercept a moving agent.
 */
export class PursuitBehavior extends SteeringBehavior {
    /**
     * The agent to pursue.
     * @default null
     */
    evader: MovingEntity | null;

    /**
     * This factor determines how far the vehicle predicts the movement of the evader.
     * @default 1
     */
    predictionFactor: number;

    /**
     * Constructs a new pursuit behavior.
     *
     * @param [evader] - The agent to pursue.
     * @param [predictionFactor] - This factor determines how far the vehicle predicts the movement of the evader.
     */
    constructor(evader?: MovingEntity | null, predictionFactor?: number);

    /**
     * Calculates the steering force for a single simulation step.
     *
     * @param vehicle - The game entity the force is produced for.
     * @param force - The force/result vector.
     * @return The force/result vector.
     */
    calculate(vehicle: Vehicle, force: Vector3): Vector3;
}
