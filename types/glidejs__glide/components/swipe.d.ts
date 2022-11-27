export type SwipeEvents = 'swipe.start' | 'swipe.move' | 'swipe.end';

export interface SwipeEventsBus {
    on(event: SwipeEvents, handler: () => void): { remove(): void };
    on(event: SwipeEvents[], handler: () => void): void;

    emit(event: SwipeEvents | SwipeEvents[]): void;
}

export interface Swipe {
    /**
     * Initializes swipe bindings.
     */
    mount(): void;

    /**
     * Handler for `swipestart` event. Calculates entry points of the user's tap.
     *
     */
    start(event: Event): void;

    /**
     * Handler for `swipemove` event. Calculates user's tap angle and distance.
     */
    move(event: Event): boolean | void;

    /**
     * Handler for `swipeend` event. Finitializes user's tap and decides about glide move.
     */
    end(event: Event): void;

    /**
     * Binds swipe's starting event.
     */
    bindSwipeStart(): void;

    /**
     * Unbinds swipe's starting event.
     */
    unbindSwipeStart(): void;

    /**
     * Binds swipe's moving event.
     */
    bindSwipeMove(): void;

    /**
     * Unbinds swipe's moving event.
     */
    unbindSwipeMove(): void;

    /**
     * Binds swipe's ending event.
     */
    bindSwipeEnd(): void;

    /**
     * Unbinds swipe's ending event.
     */
    unbindSwipeEnd(): void;

    /**
     * Normalizes event touches points accorting to different types.
     */
    touches(event: Event): unknown;

    /**
     * Gets value of minimum swipe distance settings based on event type.
     */
    threshold(event: Event): number;

    /**
     * Enables swipe event.
     */
    enable(): this;

    /**
     * Disables swipe event.
     */
    disable(): this;
}
