// Event Constants for Flickity v1.1.1
// Project: http://flickity.metafizzy.co/
// Definitions by: Chris McGrath <https://www.github.com/clmcgrath>
// Definitions: https://github.com/clmcgrath/
class FlickityEvents {

    /**
    * Triggered when a cell is selected.
    */
    static cellSelect: string = "cellSelect";

    /**
    * Triggered when the slider is settled at its end position.
    */
    static settle: string = "settle";

    /**
    * Triggered when dragging starts and the slider starts moving.
    */
    static dragStart: string = "dragStart";

    /**
    * Triggered when dragging moves and the slider moves.
    */
    static dragMove: string = "dragMove";

    /**
    * Triggered when dragging ends.
    */
    static dragEnd: string = "dragEnd";

    /**
    * Triggered when the user's pointer (mouse, touch, pointer) presses down.
    */
    static pointerDown: string = "pointerDown";

    /**
    * Triggered when the user's pointer moves.
    */
    static pointerMove: string = "pointerMove";

    /**
    * Triggered when the user's pointer unpresses.
    */
    static pointerUp: string = "pointerUp";

    /**
    * Triggered when the user's pointer is pressed and unpressed and has not moved enough to start dragging.
    * Info: click events are hard to detect with draggable UI, as they are triggered whenever a user drags. Flickity's staticClick event resolves this, as it is triggered when the user has not dragged.
    */
    static staticClick: string = "staticClick";

    /**
    * Triggered after an image has been loaded with lazyLoad.
    */
    static lazyLoad: string = "lazyLoad";
}
