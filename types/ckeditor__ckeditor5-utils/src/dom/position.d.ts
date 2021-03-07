import Rect from "@ckeditor/ckeditor5-utils/src/dom/rect";
/**
 * Calculates the `position: absolute` coordinates of a given element so it can be positioned with respect to the
 * target in the visually most efficient way, taking various restrictions like viewport or limiter geometry
 * into consideration.
 *
 *  // The element which is to be positioned.
 *  const element = document.body.querySelector( '#toolbar' );
 *
 *  // A target to which the element is positioned relatively.
 *  const target = document.body.querySelector( '#container' );
 *
 *  // Finding the optimal coordinates for the positioning.
 *  const { left, top, name } = getOptimalPosition( {
 *   element: element,
 *   target: target,
 *
 *    // The algorithm will chose among these positions to meet the requirements such
 *    // as "limiter" element or "fitInViewport", set below. The positions are considered
 *    // in the order of the array.
 *   positions: [
 *    //
 *    	//	[ Target ]
 *    //	+-----------------+
 *    //	|     Element     |
 *    //	+-----------------+
 *    //
 *    targetRect => ( {
 *    	top: targetRect.bottom,
 *    	left: targetRect.left,
 *    	name: 'mySouthEastPosition'
 *    } ),
 *
 *    //
 *    //	+-----------------+
 *    //	|     Element     |
 *    //	+-----------------+
 *    //	[ Target ]
 *    //
 *    ( targetRect, elementRect ) => ( {
 *    	top: targetRect.top - elementRect.height,
 *    	left: targetRect.left,
 *    	name: 'myNorthEastPosition'
 *    } )
 *   ],
 *
 *   // Find a position such guarantees the element remains within visible boundaries of <body>.
 *   limiter: document.body,
 *
 *   // Find a position such guarantees the element remains within visible boundaries of the browser viewport.
 *   fitInViewport: true
 *  } );
 *
 *  // The best position which fits into document.body and the viewport. May be useful
 *  // to set proper class on the `element`.
 *  console.log( name ); // -> "myNorthEastPosition"
 *
 *  // Using the absolute coordinates which has been found to position the element
 *  // as in the diagram depicting the "myNorthEastPosition" position.
 *  element.style.top = top;
 *  element.style.left = left;
 *
 */
export function getOptimalPosition({
    element,
    target,
    positions,
    limiter,
    fitInViewport,
}: {
    element: HTMLElement;
    target: HTMLElement | (() => HTMLElement);
    positions: Array<(targetRect: Rect, elementRect: Rect) => Position>;
    limiter?: HTMLElement;
    fitInViewport?: boolean;
}): Position;
/**
 * :utils/dom/position~Position
 */
export interface Position {
    /**
     * Top position offset.
     */
    top: number;
    /**
     * Left position offset.
     */
    left: number;
    /**
     * Name of the position.
     */
    name: string;
}
