import { Vector3 } from "../../math/Vector3";
import { SteeringBehavior } from "../SteeringBehavior";
import { Vehicle } from "../Vehicle";

/**
 * This steering behavior produces a force that steers an agent away from a target position.
 * It's the opposite of {@link SeekBehavior}.
 */
export class FleeBehavior extends SteeringBehavior {
    /**
     * The target vector.
     * @default 0,0,0
     */
    target: Vector3;

    /**
     * The agent only flees from the target if it is inside this radius.
     * @default 10
     */
    panicDistance: number;

    /**
     * Constructs a new flee behavior.
     *
     * @param [target] - The target vector.
     * @param [panicDistance] - The agent only flees from the target if it is inside this radius.
     */
    constructor(target?: Vector3, panicDistance?: number);

    /**
     * Calculates the steering force for a single simulation step.
     *
     * @param vehicle - The game entity the force is produced for.
     * @param force - The force/result vector.
     * @return The force/result vector.
     */
    calculate(vehicle: Vehicle, force: Vector3): Vector3;
}
