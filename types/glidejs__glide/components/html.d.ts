export interface Html {
    readonly root: HTMLElement;
    readonly track: HTMLElement;
    readonly wrapper: HTMLElement;

    /**
     * Setup slider HTML nodes.
     */
    mount(): void;

    /**
     * Collect slides
     */
    collectSlides(): void;
}
