import { Vector3 } from "../../math/Vector3";
import { SteeringBehavior } from "../SteeringBehavior";
import { Vehicle } from "../Vehicle";

/**
 * This steering behavior produces a force that keeps a vehicle at a specified offset from a leader vehicle.
 * Useful for creating formations.
 */
export class OffsetPursuitBehavior extends SteeringBehavior {
    /**
     * The leader vehicle.
     */
    leader: Vehicle;

    /**
     * The offset from the leader.
     */
    offset: Vector3;

    /**
     * Constructs a new offset pursuit behavior.
     *
     * @param [leader] - The leader vehicle.
     * @param [offset] - The offset from the leader.
     */
    constructor(leader?: Vehicle, offset?: Vector3);

    /**
     * Calculates the steering force for a single simulation step.
     *
     * @param vehicle - The game entity the force is produced for.
     * @param force - The force/result vector.
     * @return The force/result vector.
     */
    calculate(vehicle: Vehicle, force: Vector3): Vector3;
}
