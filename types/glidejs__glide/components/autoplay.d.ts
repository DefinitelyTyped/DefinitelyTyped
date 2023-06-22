export type AutoplayEvents = 'autoplay';

export interface AutoplayEventsBus {
    on(event: AutoplayEvents, handler: () => void): { remove(): void };
    on(event: AutoplayEvents[], handler: () => void): void;

    emit(event: AutoplayEvents | AutoplayEvents[]): void;
}

export interface Autoplay {
    readonly time: number;

    /**
     * Initializes autoplaying and events.
     */
    mount(): void;

    /**
     * Enables autoplaying
     */
    enable(): void;

    /**
     * Disables autoplaying.
     */
    disable(): void;

    /**
     * Starts autoplaying in configured interval.
     */
    start(): void;

    /**
     * Stops autorunning of the glide.
     */
    stop(): void;

    /**
     * Stops autoplaying while mouse is over glide's area.
     */
    bind(): void;

    /**
     * Unbind mouseover events.
     */
    unbind(): void;
}
