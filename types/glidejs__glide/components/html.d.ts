export interface Html {
    readonly root: Record<string, unknown>;
    readonly track: Record<string, unknown>;
    readonly wrapper: Record<string, unknown>;
    /**
     * Setup slider HTML nodes.
     */
    mount(): void;

    /**
     * Collect slides
     */
    collectSlides(): void;
}
