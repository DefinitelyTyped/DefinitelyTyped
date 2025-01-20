export interface Sizes {
    readonly length: number;
    readonly width: number;
    readonly wrapperSize: number;
    readonly slideWidth: number;

    /**
     * Setups dimensions of slides.
     */
    setupSlides(): void;

    /**
     * Setups dimensions of slides wrapper.
     */
    setupWrapper(): void;

    /**
     * Removes applied styles from HTML elements.
     */
    remove(): void;
}
