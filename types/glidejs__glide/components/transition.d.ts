export interface Transition {
    readonly duration: number;
    /**
     * Composes string of the CSS transition.
     */
    compose(property: string): string;

    /**
     * Sets value of transition on HTML element.
     */
    set(property?: string): void;

    /**
     * Removes value of transition from HTML element.
     */
    remove(): void;

    /**
     * Runs callback after animation.
     */
    after(callback: VoidFunction): void;

    /**
     * Enable transition.
     */
    enable(): void;

    /**
     * Disable transition.
     */
    disable(): void;
}
