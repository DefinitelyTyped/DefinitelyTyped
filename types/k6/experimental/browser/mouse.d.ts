import { MouseClickOptions, MouseDownUpOptions, MouseMultiClickOptions } from './';

/**
 * Mouse provides an API for managing a virtual mouse.
 */
export class Mouse {
    /**
     * Shortcut for `mouse.move(x, y)`, `mouse.down()`, `mouse.up()`.
     * @param x The x position.
     * @param y The y position.
     * @param options The click options.
     */
    click(x: number, y: number, options?: MouseMultiClickOptions): void;

    /**
     * Shortcut for `mouse.move(x, y)`, `mouse.down()`, `mouse.up()`, `mouse.down()`,
     * `mouse.up()`.
     * @param x The x position.
     * @param y The y position.
     * @param options The click options.
     */
    dblclick(x: number, y: number, options?: MouseClickOptions): void;

    /**
     * Dispatches a `mousedown` event.
     * @param options The mouse down options.
     */
    down(options?: MouseDownUpOptions): void;

    /**
     * Dispatches a `mousemove` event.
     * @param x The x position.
     * @param y The y position.
     * @param options The mouse move options.
     */
    move(x: number, y: number, options?: { steps?: number }): void;

    /**
     * Dispatches a `mouseup` event.
     * @param options The mouse up options.
     */
    up(options?: MouseDownUpOptions): void;
}
