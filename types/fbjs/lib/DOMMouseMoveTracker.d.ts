/**
 * This class listens to events on the document and then updates a react
 * component through callbacks.
 * Please note that captureMouseMove must be called in
 * order to initialize listeners on mousemove and mouseup.
 * releaseMouseMove must be called to remove them. It is important to
 * call releaseMouseMoves since mousemove is expensive to listen to.
 */
declare class DOMMouseMoveTracker {
    // tslint:disable-next-line:ban-types
    constructor(onMove: Function, onMoveEnd: Function, domNode: HTMLElement);
    /**
     * This is to set up the listeners for listening to mouse move
     * and mouse up signaling the movement has ended. Please note that these
     * listeners are added at the document.body level. It takes in an event
     * in order to grab inital state.
     */

    captureMouseMoves(event: object): void;

    /**
     * These releases all of the listeners on document.body.
     */
    releaseMouseMoves(): void;

    /**
     * Returns whether or not if the mouse movement is being tracked.
     */
    isDragging(): boolean;

    /**
     * Calls onMove passed into constructor and updates internal state.
     */
    _onMouseMove(
        /*object*/
        event: object,
    ): void;

    _didMouseMove(): void;

    /**
     * Calls onMoveEnd passed into constructor and updates internal state.
     */
    _onMouseUp(): void;
}

declare namespace DOMMouseMoveTracker {}

export = DOMMouseMoveTracker;
