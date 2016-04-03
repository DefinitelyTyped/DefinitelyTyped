declare module goog {
    function require(name: 'goog.net.ImageLoader'): typeof goog.net.ImageLoader;
}

declare module goog.net {

    /**
     * Image loader utility class.  Raises a {@link goog.events.EventType.LOAD}
     * event for each image loaded, with an {@link Image} object as the target of
     * the event, normalized to have {@code naturalHeight} and {@code naturalWidth}
     * attributes.
     *
     * To use this class, run:
     *
     * <pre>
     *   var imageLoader = new goog.net.ImageLoader();
     *   goog.events.listen(imageLoader, goog.net.EventType.COMPLETE,
     *       function(e) { ... });
     *   imageLoader.addImage("image_id", "http://path/to/image.gif");
     *   imageLoader.start();
     * </pre>
     *
     * The start() method must be called to start image loading.  Images can be
     * added and removed after loading has started, but only those images added
     * before start() was called will be loaded until start() is called again.
     * A goog.net.EventType.COMPLETE event will be dispatched only once all
     * outstanding images have completed uploading.
     *
     * @param {Element=} opt_parent An optional parent element whose document object
     *     should be used to load images.
     * @constructor
     * @extends {goog.events.EventTarget}
     * @final
     */
    class ImageLoader extends goog.events.EventTarget {
        constructor(opt_parent?: Element);
        
        /**
         * Adds an image to the image loader, and associates it with the given ID
         * string.  If an image with that ID already exists, it is silently replaced.
         * When the image in question is loaded, the target of the LOAD event will be
         * an {@code Image} object with {@code id} and {@code src} attributes based on
         * these arguments.
         * @param {string} id The ID of the image to load.
         * @param {string|Image} image Either the source URL of the image or the HTML
         *     image element itself (or any object with a {@code src} property, really).
         * @param {!goog.net.ImageLoader.CorsRequestType=} opt_corsRequestType The type
         *     of CORS request to use, if any.
         */
        addImage(id: string, image: string|Image, opt_corsRequestType?: goog.net.ImageLoader.CorsRequestType): void;
        
        /**
         * Removes the image associated with the given ID string from the image loader.
         * If the image was previously loading, removes any listeners for its events
         * and dispatches a COMPLETE event if all remaining images have now completed.
         * @param {string} id The ID of the image to remove.
         */
        removeImage(id: string): void;
        
        /**
         * Starts loading all images in the image loader in parallel.  Raises a LOAD
         * event each time an image finishes loading, and a COMPLETE event after all
         * images have finished loading.
         */
        start(): void;
    }
}

declare module goog.net.ImageLoader {

    /**
     * The type of image request to dispatch, if this is a CORS-enabled image
     * request. CORS-enabled images can be reused in canvas elements without them
     * being tainted. The server hosting the image should include the appropriate
     * CORS header.
     * @see https://developer.mozilla.org/en-US/docs/HTML/CORS_Enabled_Image
     * @enum {string}
     */
    type CorsRequestType = string;
    var CorsRequestType: {
        ANONYMOUS: CorsRequestType;
        USE_CREDENTIALS: CorsRequestType;
    };

    /**
     * Describes a request for an image. This includes its URL and its CORS-request
     * type, if any.
     * @typedef {{
     *   src: string,
     *   corsRequestType: ?goog.net.ImageLoader.CorsRequestType
     * }}
     * @private
     */
    type ImageRequest_ = {src: string; corsRequestType: goog.net.ImageLoader.CorsRequestType};
}
