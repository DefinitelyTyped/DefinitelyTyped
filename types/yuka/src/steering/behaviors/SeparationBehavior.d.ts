import { Vector3 } from "../../math/Vector3";
import { SteeringBehavior } from "../SteeringBehavior";
import { Vehicle } from "../Vehicle";

/**
 * This steering produces a force that steers a vehicle away from those in its neighborhood region.
 */
export class SeparationBehavior extends SteeringBehavior {
    /**
     * Constructs a new separation behavior.
     */
    constructor();

    /**
     * Calculates the steering force for a single simulation step.
     *
     * @param vehicle - The game entity the force is produced for.
     * @param force - The force/result vector.
     * @return The force/result vector.
     */
    calculate(vehicle: Vehicle, force: Vector3): Vector3;
}
