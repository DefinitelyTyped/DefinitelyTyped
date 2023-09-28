import { Vector3 } from "../../math/Vector3";
import { SteeringBehavior } from "../SteeringBehavior";
import { Vehicle } from "../Vehicle";

/**
 * This steering behavior produces a force that directs an agent toward a target position.
 * Unlike {@link SeekBehavior}, it decelerates so the agent comes to a gentle halt at the target position.
 */
export class ArriveBehavior extends SteeringBehavior {
    /**
     * The target vector.
     * @default 0,0,0
     */
    target: Vector3;

    /**
     * The amount of deceleration.
     * @default 3
     */
    deceleration: number;

    /**
     * A tolerance value in world units to prevent the vehicle from overshooting its target.
     * @default 0
     */
    tolerance: number;

    /**
     * Constructs a new arrive behavior.
     *
     * @param [target] - The target vector.
     * @param [deceleration] - The amount of deceleration.
     * @param [tolerance] - A tolerance value in world units to prevent the vehicle from overshooting its target.
     */
    constructor(target?: Vector3, deceleration?: number, tolerance?: number);

    /**
     * Calculates the steering force for a single simulation step.
     *
     * @param vehicle - The game entity the force is produced for.
     * @param force - The force/result vector.
     * @return The force/result vector.
     */
    calculate(vehicle: Vehicle, force: Vector3): Vector3;
}
