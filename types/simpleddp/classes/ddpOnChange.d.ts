export class ddpOnChange {
    constructor(obj: object, inst: unknown, listenersArray: unknown[]);
    /**
     * Start change listener. This method is being called on instance creation.
     */
    start(): void;
    /**
     * Stops change listener.
     */
    stop(): void;
}
