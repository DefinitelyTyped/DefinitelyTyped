import { MovingEntity } from "../core/MovingEntity";
import { Smoother } from "./Smoother";
import { SteeringManager } from "./SteeringManager";

export class Vehicle extends MovingEntity {
    /**
     * The mass of the vehicle in kilogram.
     * @default 1
     */
    mass: number;

    /**
     * The maximum force this entity can produce to power itself.
     * @default 100
     */
    maxForce: number;

    /** The steering manager of this vehicle. */
    steering: SteeringManager;

    /**
     * An optional smoother to avoid shakiness due to conflicting steering behaviors.
     * @default null
     */
    smoother: Smoother | null;
}
