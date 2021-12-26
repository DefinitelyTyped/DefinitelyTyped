import { Vector3 } from "../../math/Vector3";
import { Path } from "../Path";
import { SteeringBehavior } from "../SteeringBehavior";
import { Vehicle } from "../Vehicle";

/**
 * This steering behavior produces a force that moves a vehicle along a series of waypoints forming a path.
 */
export class FollowPathBehavior extends SteeringBehavior {
    /** The path to follow. */
    path: Path;

    /**
     * The distance the agent seeks for the next waypoint.
     * @default 1
     */
    nextWaypointDistance: number;

    /**
     * Constructs a new follow path behavior.
     *
     * @param [path] - The path to follow.
     * @param [nextWaypointDistance] - The distance the agent seeks for the next waypoint.
     */
    constructor(path?: Path, nextWaypointDistance?: number);

    /**
     * Calculates the steering force for a single simulation step.
     *
     * @param vehicle - The game entity the force is produced for.
     * @param force - The force/result vector.
     * @return The force/result vector.
     */
    calculate(vehicle: Vehicle, force: Vector3): Vector3;
}
