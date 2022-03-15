import { MovingEntity } from "../../core/MovingEntity";
import { Vector3 } from "../../math/Vector3";
import { SteeringBehavior } from "../SteeringBehavior";
import { Vehicle } from "../Vehicle";

/**
 * This steering behavior produces a force that moves a vehicle to the midpoint
 * of the imaginary line connecting two other agents.
 */
export class InterposeBehavior extends SteeringBehavior {
    /**
     * The first agent.
     * @default null
     */
    entity1: MovingEntity;

    /**
     * The second agent.
     * @default null
     */
    entity2: MovingEntity;

    /**
     * The amount of deceleration.
     * @default 3
     */
    deceleration: number;

    /**
     * Constructs a new interpose behavior.
     *
     * @param [entity1] - The first agent.
     * @param [entity2] - The second agent.
     * @param [deceleration] - The amount of deceleration.
     */
    constructor(entity1?: MovingEntity, entity2?: MovingEntity, deceleration?: number);

    /**
     * Calculates the steering force for a single simulation step.
     *
     * @param vehicle - The game entity the force is produced for.
     * @param force - The force/result vector.
     * @return The force/result vector.
     */
    calculate(vehicle: Vehicle, force: Vector3): Vector3;
}
