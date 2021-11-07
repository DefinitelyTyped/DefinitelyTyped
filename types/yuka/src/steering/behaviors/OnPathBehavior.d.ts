import { Vector3 } from "../../math/Vector3";
import { Path } from "../Path";
import { SteeringBehavior } from "../SteeringBehavior";
import { Vehicle } from "../Vehicle";

/**
 * This steering behavior produces a force that keeps a vehicle close to its path. It is intended
 * to use it in combination with {@link FollowPathBehavior} in order to realize a more strict path following.
 */
export class OnPathBehavior extends SteeringBehavior {
    /** The path to stay close to. */
    path: Path;

    /**
     * Defines the width of the path. With a smaller radius, the vehicle will have to follow the path more closely.
     * @default 0.1
     */
    radius: number;

    /**
     * Determines how far the behavior predicts the movement of the vehicle.
     * @default 1
     */
    predictionFactor: number;

    /**
     * Constructs a new on path behavior.
     *
     * @param [path] - The path to stay close to.
     * @param [radius] - Defines the width of the path. With a smaller radius, the vehicle will have to follow the path more closely.
     * @param [predictionFactor] - Determines how far the behavior predicts the movement of the vehicle.
     */
    constructor(path?: Path, radius?: number, predictionFactor?: number);

    /**
     * Calculates the steering force for a single simulation step.
     *
     * @param vehicle - The game entity the force is produced for.
     * @param force - The force/result vector.
     * @return The force/result vector.
     */
    calculate(vehicle: Vehicle, force: Vector3): Vector3;
}
