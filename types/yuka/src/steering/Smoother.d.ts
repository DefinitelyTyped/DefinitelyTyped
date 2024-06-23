import { Vector3 } from "../math/Vector3";

/**
 * This class can be used to smooth the result of a vector calculation. One use case
 * is the smoothing of the velocity vector of game entities in order to avoid a shaky
 * movements due to conflicting forces.
 */
export class Smoother {
    /**
     * The amount of samples the smoother will use to average a vector.
     * @default 10
     */
    count: number;

    /**
     * Constructs a new smoother.
     *
     * @param [count] - The amount of samples the smoother will use to average a vector.
     */
    constructor(count?: number);

    /**
     * Calculates for the given value a smooth average.
     *
     * @param value - The value to smooth.
     * @param average - The calculated average.
     * @return The calculated average.
     */
    calculate(value: Vector3, average: Vector3): Vector3;

    /**
     * Transforms this instance into a JSON object.
     */
    toJSON(): { [s: string]: any };

    /**
     * Restores this instance from the given JSON object.
     *
     * @param json - The JSON object.
     */
    fromJSON(json: { [s: string]: any }): this;
}
