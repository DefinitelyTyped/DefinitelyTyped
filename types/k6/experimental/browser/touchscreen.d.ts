/**
 * Touchscreen provides an api for interacting with a virtual touchscreen. It
 * operates in main-frame CSS pixels relative to the top-left corner of the
 * viewport.
 */
export class Touchscreen {
    /**
     * Taps on the specified position (`x`,`y`), which internally dispatches a `touchstart` and `touchend` event.
     * @param x The x position.
     * @param y The y position.
     */
    tap(x: number, y: number): void;
}
