export type BuildEvents = 'build.before' | 'build.after';

export interface BuildEventsBus {
    on(event: BuildEvents, handler: () => void): { remove(): void };
    on(event: BuildEvents[], handler: () => void): void;

    emit(event: BuildEvents | BuildEvents[]): void;
}

export interface Build {
    /**
     * Init glide building. Adds classes, sets
     * dimensions and setups initial state.
     */
    mount(): void;

    /**
     * Adds `type` class to the glide element.
     */
    typeClass(): void;

    /**
     * Sets active class to current slide.
     */
    activeClass(): void;

    /**
     * Removes HTML classes applied at building.
     */
    removeClasses(): void;
}
