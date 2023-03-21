export interface Images {
    /**
     * Binds listener to glide wrapper.
     */
    mount(): void;

    /**
     * Binds `dragstart` event on wrapper to prevent dragging images.
     */
    bind(): void;

    /**
     * Unbinds `dragstart` event on wrapper.
     */
    unbind(): void;

    /**
     * Event handler. Prevents dragging.
     */
    dragstart(event: Event): void;
}
