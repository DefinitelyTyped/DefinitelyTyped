import { Vector3 } from "../../math/Vector3";
import { SteeringBehavior } from "../SteeringBehavior";
import { Vehicle } from "../Vehicle";

/**
 * This steering behavior produces a force that directs an agent toward a target position.
 */
export class SeekBehavior extends SteeringBehavior {
    /**
     * The target vector.
     */
    target: Vector3;

    /**
     * Constructs a new seek behavior.
     *
     * @param [target] - The target vector.
     */
    constructor(target?: Vector3);

    /**
     * Calculates the steering force for a single simulation step.
     *
     * @param vehicle - The game entity the force is produced for.
     * @param force - The force/result vector.
     * @return The force/result vector.
     */
    calculate(vehicle: Vehicle, force: Vector3): Vector3;
}
