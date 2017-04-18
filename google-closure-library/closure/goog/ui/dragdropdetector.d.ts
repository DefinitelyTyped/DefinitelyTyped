declare module goog {
    function require(name: 'goog.ui.DragDropDetector'): typeof goog.ui.DragDropDetector;
    function require(name: 'goog.ui.DragDropDetector.EventType'): typeof goog.ui.DragDropDetector.EventType;
    function require(name: 'goog.ui.DragDropDetector.ImageDropEvent'): typeof goog.ui.DragDropDetector.ImageDropEvent;
    function require(name: 'goog.ui.DragDropDetector.LinkDropEvent'): typeof goog.ui.DragDropDetector.LinkDropEvent;
}

declare module goog.ui {

    /**
     * Creates a new drag and drop detector.
     * @param {string=} opt_filePath The URL of the page to use for the detector.
     *     It should contain the same contents as dragdropdetector_target.html in
     *     the demos directory.
     * @constructor
     * @extends {goog.events.EventTarget}
     * @final
     */
    class DragDropDetector extends goog.events.EventTarget {
        constructor(opt_filePath?: string);
        
        /**
         * Initial value for clientX and clientY indicating that the location has
         * never been updated.
         */
        static INIT_POSITION: any;
        
        /**
         * @desc Message shown to users to inform them that they can't drag and drop
         *     local files.
         */
        static MSG_DRAG_DROP_LOCAL_FILE_ERROR: any;
        
        /**
         * @desc Message shown to users trying to drag and drop protected images from
         *     Flickr, etc.
         */
        static MSG_DRAG_DROP_PROTECTED_FILE_ERROR: any;
    }
}

declare module goog.ui.DragDropDetector {

    /**
     * Drag and drop event types.
     * @enum {string}
     */
    type EventType = string;
    var EventType: {
        IMAGE_DROPPED: EventType;
        LINK_DROPPED: EventType;
    };

    /**
     * Creates a new image drop event object.
     * @param {string} url The url of the dropped image.
     * @param {goog.math.Coordinate} position The screen position where the drop
     *     occurred.
     * @constructor
     * @extends {goog.events.Event}
     * @final
     */
    class ImageDropEvent extends goog.events.Event {
        constructor(url: string, position: goog.math.Coordinate);
        
        /**
         * @return {string} The url of the image that was dropped.
         */
        getUrl(): string;
        
        /**
         * @return {goog.math.Coordinate} The screen position where the drop occurred.
         *     This may be have x and y of goog.ui.DragDropDetector.INIT_POSITION,
         *     indicating the drop position is unknown.
         */
        getPosition(): goog.math.Coordinate;
    }

    /**
     * Creates a new link drop event object.
     * @param {string} url The url of the dropped link.
     * @constructor
     * @extends {goog.events.Event}
     * @final
     */
    class LinkDropEvent extends goog.events.Event {
        constructor(url: string);
        
        /**
         * @return {string} The url of the link that was dropped.
         */
        getUrl(): string;
    }
}
