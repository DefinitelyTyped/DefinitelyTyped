/**
 * A helper class representing a `ClientRect` object, e.g. value returned by
 * the native `object.getBoundingClientRect()` method. Provides a set of methods
 * to manipulate the rect and compare it against other rect instances.
 */
export default class Rect {
    /**
     * Returns an array of rects of the given native DOM Range.
     *
     */
    static getDomRangeRects(range: Range): Rect[];
    /**
     * Returns a bounding rectangle that contains all the given `rects`.
     *
     */
    static getBoundingRect(rects: Iterable<Rect>): Rect | null;
    /**
     * Creates an instance of rect.
     *
     *  // Rect of an HTMLElement.
     *  const rectA = new Rect( document.body );
     *
     *  // Rect of a DOM Range.
     *  const rectB = new Rect( document.getSelection().getRangeAt( 0 ) );
     *
     *  // Rect of a window (web browser viewport).
     *  const rectC = new Rect( window );
     *
     *  // Rect out of an object.
     *  const rectD = new Rect( { top: 0, right: 10, bottom: 10, left: 0, width: 10, height: 10 } );
     *
     *  // Rect out of another Rect instance.
     *  const rectE = new Rect( rectD );
     *
     *  // Rect out of a ClientRect.
     *  const rectF = new Rect( document.body.getClientRects().item( 0 ) );
     *
     * **Note**: By default a rect of an HTML element includes its CSS borders and scrollbars (if any)
     * ant the rect of a `window` includes scrollbars too. Use {@link #excludeScrollbarsAndBorders}
     * to get the inner part of the rect.
     *
     */
    top: number;
    right: number;
    bottom: number;
    left: number;
    width: number;
    height: number;
    constructor(source: HTMLElement | Range | Window | ClientRect | Rect | object);
    /**
     * Returns a clone of the rect.
     *
     */
    clone(): Rect;
    /**
     * Checks whether a rect fully contains another rect instance.
     *
     */
    contains(anotherRect: Rect): boolean;
    /**
     * Excludes scrollbars and CSS borders from the rect.
     *
     * * Borders are removed when {@link #_source} is an HTML element.
     * * Scrollbars are excluded from HTML elements and the `window`.
     *
     */
    excludeScrollbarsAndBorders(): Rect;
    /**
     * Returns the area of the rect.
     *
     */
    getArea(): number;
    /**
     * Returns a new rect a a result of intersection with another rect.
     *
     */
    getIntersection(anotherRect: Rect): Rect;
    /**
     * Returns the area of intersection with another rect.
     *
     */
    getIntersectionArea(anotherRect: Rect): number;
    /**
     * Returns a new rect, a part of the original rect, which is actually visible to the user,
     * e.g. an original rect cropped by parent element rects which have `overflow` set in CSS
     * other than `"visible"`.
     *
     * If there's no such visible rect, which is when the rect is limited by one or many of
     * the ancestors, `null` is returned.
     *
     */
    getVisible(): Rect | null;
    /**
     * Checks if all property values ({@link #top}, {@link #left}, {@link #right},
     * {@link #bottom}, {@link #width} and {@link #height}) are the equal in both rect
     * instances.
     *
     */
    isEqual(anotherRect: Rect): boolean;
    /**
     * Moves the rect so that its upper–left corner lands in desired `[ x, y ]` location.
     *
     */
    moveTo(x: number, y: number): Rect;
    /**
     * Moves the rect in–place by a dedicated offset.
     *
     */
    moveBy(x: number, y: number): Rect;
}
