export interface Gaps {
    readonly value: number;
    readonly grow: number;
    readonly reductor: number;

    /**
     * Applies gaps between slides. First and last
     * slides do not receive it's edge margins.
     */
    apply(slides: HTMLCollection): void;

    /**
     * Removes gaps from the slides.
     */
    remove(slides: HTMLCollection): void;
}
