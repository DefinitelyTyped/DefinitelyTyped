export interface Peek {
    readonly value: number | Record<string, unknown>;
    readonly reductor: number;

    /**
     * Setups how much to peek based on settings.
     */
    mount(): void;
}
