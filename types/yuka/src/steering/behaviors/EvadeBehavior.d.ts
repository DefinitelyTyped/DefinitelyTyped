import { MovingEntity } from "../../core/MovingEntity";
import { Vector3 } from "../../math/Vector3";
import { SteeringBehavior } from "../SteeringBehavior";
import { Vehicle } from "../Vehicle";

/**
 * This steering behavior is is almost the same as {@link PursuitBehavior} except that
 * the agent flees from the estimated future position of the pursuer.
 */
export class EvadeBehavior extends SteeringBehavior {
    /**
     * The agent to evade from.
     * @default null
     */
    pursuer: MovingEntity | null;

    /**
     * The agent only flees from the pursuer if it is inside this radius.
     * @default 10
     */
    panicDistance: number;

    /**
     * This factor determines how far the vehicle predicts the movement of the pursuer.
     * @default 1
     */
    predictionFactor: number;

    /**
     * Constructs a new evade behavior.
     *
     * @param [pursuer] - The agent to evade from.
     * @param [panicDistance] - The agent only flees from the pursuer if it is inside this radius.
     * @param [predictionFactor] - This factor determines how far the vehicle predicts the movement of the pursuer.
     */
    constructor(pursuer?: MovingEntity, panicDistance?: number, predictionFactor?: number);

    /**
     * Calculates the steering force for a single simulation step.
     *
     * @param vehicle - The game entity the force is produced for.
     * @param force - The force/result vector.
     * @return The force/result vector.
     */
    calculate(vehicle: Vehicle, force: Vector3): Vector3;
}
