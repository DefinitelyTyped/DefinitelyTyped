/**
 * A position in 2-D space.
 */
export class Position {
    /**
     * @param [template={}]
     *     The object whose properties should be copied within the new
     *     Guacamole.Position.
     */
    constructor(template?: Position);

    /**
     * The current X position, in pixels.
     *
     * @default 0
     */
    x: number;

    /**
     * The current Y position, in pixels.
     *
     * @default 0
     */
    y: number;

    /**
     * Assigns the position represented by the given element and
     * clientX/clientY coordinates. The clientX and clientY coordinates are
     * relative to the browser viewport and are commonly available within
     * JavaScript event objects. The final position is translated to
     * coordinates that are relative the given element.
     *
     * @param element
     *     The element the coordinates should be relative to.
     *
     * @param clientX
     *     The viewport-relative X coordinate to translate.
     *
     * @param clientY
     *     The viewport-relative Y coordinate to translate.
     */
    fromClientPosition(element: Element, clientX: number, clientY: number): void;

    /**
     * Returns a new {@link Position} representing the relative position
     * of the given clientX/clientY coordinates within the given element. The
     * clientX and clientY coordinates are relative to the browser viewport and are
     * commonly available within JavaScript event objects. The final position is
     * translated to  coordinates that are relative the given element.
     *
     * @param element
     *     The element the coordinates should be relative to.
     *
     * @param clientX
     *     The viewport-relative X coordinate to translate.
     *
     * @param clientY
     *     The viewport-relative Y coordinate to translate.
     *
     * @returns
     *     A new Guacamole.Position representing the relative position of the given
     *     client coordinates.
     */
    static fromClientPosition(element: Element, clientX: number, clientY: number): Position;
}
