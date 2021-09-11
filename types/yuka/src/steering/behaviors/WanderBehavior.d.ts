import { SteeringBehavior } from "../SteeringBehavior";

/**
 * This steering behavior produces a steering force that will give the
 * impression of a random walk through the agent’s environment. The behavior only
 * produces a 2D force (XZ).
 */
export class WanderBehavior extends SteeringBehavior {
    /**
     * The radius of the constraining circle for the wander behavior.
     * @default 1
     */
    radius: number;

    /**
     * The distance the wander sphere is projected in front of the agent.
     * @default 5
     */
    distance: number;

    /**
     * The maximum amount of displacement along the sphere each frame.
     * @default 5
     */
    jitter: number;

    /**
     * Constructs a new wander behavior.
     *
     * @param [radius] - The radius of the wander circle for the wander behavior.
     * @param [distance] - The distance the wander circle is projected in front of the agent.
     * @param [jitter] - The maximum amount of displacement along the sphere each frame.
     */
    constructor(radius?: number, distance?: number, jitter?: number);
}
