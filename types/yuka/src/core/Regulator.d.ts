/**
 * Not all components of an AI system need to be updated in each simulation step.
 * This class can be used to control the update process by defining how many updates
 * should be executed per second.
 */
export class Regulator {
    /**
     * The amount of updates per second.
     * @default 0
     */
    updateFrequency: number;

    /**
     * Constructs a new regulator.
     *
     * @param [updateFrequency=0] - The amount of updates per second.
     */
    constructor(updateFrequency?: number);

    /**
     * Returns true if it is time to allow the next update.
     *
     * @return Whether an update is allowed or not.
     */
    ready(): boolean;
}
