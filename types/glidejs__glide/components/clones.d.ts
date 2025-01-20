export interface Clones {
    readonly items: any[];
    readonly grow: number;

    /**
     * Create pattern map and collect slides to be cloned.
     */
    mount(): void;

    /**
     * Collect clones with pattern.
     */
    collect(items?: any[]): any[];

    /**
     * Append cloned slides with generated pattern.
     */
    append(): void;

    /**
     * Remove all cloned slides.
     */
    remove(): void;
}
