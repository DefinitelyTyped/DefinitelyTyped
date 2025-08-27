export interface Direction {
    readonly value: number;

    /**
     * Setups gap value based on settings.
     */
    mount(): void;

    /**
     * Resolves pattern based on direction value
     */
    resolve(pattern: string): string;

    /**
     * Checks value of direction mode.
     */
    is(direction: string): boolean;

    /**
     * Applies direction class to the root HTML element.
     */
    addClass(): void;

    /**
     * Removes direction class from the root HTML element.
     */
    removeClass(): void;
}
