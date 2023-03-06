import Rect from './rect';

/**
 * Calculates the `position: absolute` coordinates of a given element so it can be positioned with respect to the
 * target in the visually most efficient way, taking various restrictions like viewport or limiter geometry
 * into consideration.
 *
 *    // The element which is to be positioned.
 *    const element = document.body.querySelector( '#toolbar' );
 *
 *    // A target to which the element is positioned relatively.
 *    const target = document.body.querySelector( '#container' );
 *
 *    // Finding the optimal coordinates for the positioning.
 *    const { left, top, name } = getOptimalPosition( {
 *      element: element,
 *      target: target,
 *
 *       // The algorithm will chose among these positions to meet the requirements such
 *       // as "limiter" element or "fitInViewport", set below. The positions are considered
 *       // in the order of the array.
 *      positions: [
 *        //
 *         //  [ Target ]
 *        //  +-----------------+
 *        //  |     Element     |
 *        //  +-----------------+
 *        //
 *        targetRect => ( {
 *          top: targetRect.bottom,
 *          left: targetRect.left,
 *          name: 'mySouthEastPosition'
 *        } ),
 *
 *        //
 *        //  +-----------------+
 *        //  |     Element     |
 *        //  +-----------------+
 *        //  [ Target ]
 *        //
 *        ( targetRect, elementRect ) => ( {
 *          top: targetRect.top - elementRect.height,
 *          left: targetRect.left,
 *          name: 'myNorthEastPosition'
 *        } )
 *      ],
 *
 *      // Find a position such guarantees the element remains within visible boundaries of <body>.
 *      limiter: document.body,
 *
 *      // Find a position such guarantees the element remains within visible boundaries of the browser viewport.
 *      fitInViewport: true
 *    } );
 *
 *    // The best position which fits into document.body and the viewport. May be useful
 *    // to set proper class on the `element`.
 *    console.log( name ); // -> "myNorthEastPosition"
 *
 *    // Using the absolute coordinates which has been found to position the element
 *    // as in the diagram depicting the "myNorthEastPosition" position.
 *    element.style.top = top;
 *    element.style.left = left;
 */
export function getOptimalPosition(options: Options): Position;

/**
 * A position class which instances are created and used by the {@link module:utils/dom/position~getOptimalPosition} helper.
 *
 * {@link module:utils/dom/position~Position#top} and {@link module:utils/dom/position~Position#left} properties of the position instance
 * translate directly to the `top` and `left` properties in CSS "`position: absolute` coordinate system". If set on the positioned element
 * in DOM, they will make it display it in the right place in the viewport.
 */
export class Position {
    /**
     * Creates an instance of the {@link module:utils/dom/position~Position} class.
     */
    constructor(
        positioningFunction?: (
            targetRect: Rect,
            elementRect: Rect,
            viewportRect: Rect,
        ) => {
            left: number;
            top: number;
            name: string;
            config?: Record<string, unknown>;
        } | null,
        options?: {
            elementRect: Rect;
            targetRect: Rect;
            viewportRect: Rect;
            positionedElementAncestor?: HTMLElement | null;
        },
    );

    readonly name: string;
    readonly config?: Record<string, unknown>;

    /**
     * The left value in pixels in the CSS `position: absolute` coordinate system.
     * Set it on the positioned element in DOM to move it to the position.
     */
    readonly left: number;

    /**
     * The top value in pixels in the CSS `position: absolute` coordinate system.
     * Set it on the positioned element in DOM to move it to the position.
     */
    readonly top: number;
}

/**
 * The `getOptimalPosition()` helper options.
 */
export interface Options {
    /**
     * Element that is to be positioned.
     */
    element?: HTMLElement | undefined;
    /**
     * Target with respect to which the `element` is to be positioned.
     */
    target: ConstructorParameters<typeof Rect>[number] | (() => ConstructorParameters<typeof Rect>[number]);
    /**
     * An array of functions which return {@link module:utils/dom/position~Position} relative
     * to the `target`, in the order of preference.
     *
     * **Note**: If a function returns `null`, it is ignored by the `getOptimalPosition()`.
     */
    positions: Array<(targetRect: Rect, elementRect: Rect) => Position | null>;

    /**
     * When set, the algorithm will chose position which fits the most in the
     * limiter's bounding rect.
     */
    limiter?: ConstructorParameters<typeof Rect>[number] | (() => ConstructorParameters<typeof Rect>[number]);

    /**
     * When set, the algorithm will chose such a position which fits `element`
     * the most inside visible viewport.
     */
    fitInViewport?: boolean;
    /**
     * Viewport offset config object. It restricts the visible viewport available to the `getOptimalPosition()` from each side.
     *
     *    {
     *      top: 50,
     *      right: 50,
     *      bottom: 50,
     *      left: 50
     *    }
     */
    viewportOffsetConfig?: {
        top: number;
        right: number;
        bottom: number;
        left: number;
    };
}
