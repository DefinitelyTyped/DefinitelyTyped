declare module goog {
    function require(name: 'goog.ui.media.GoogleVideo'): typeof goog.ui.media.GoogleVideo;
    function require(name: 'goog.ui.media.GoogleVideoModel'): typeof goog.ui.media.GoogleVideoModel;
}

declare module goog.ui.media {

    /**
     * Subclasses a goog.ui.media.MediaRenderer to provide a GoogleVideo specific
     * media renderer.
     *
     * This class knows how to parse GoogleVideo URLs, and render the DOM structure
     * of GoogleVideo video players. This class is meant to be used as a singleton
     * static stateless class, that takes {@code goog.ui.media.Media} instances and
     * renders it. It expects {@code goog.ui.media.Media.getModel} to return a well
     * formed, previously constructed, GoogleVideo video id, which is the data model
     * this renderer will use to construct the DOM structure.
     * {@see goog.ui.media.GoogleVideo.newControl} for a example of constructing a
     * control with this renderer.
     *
     * This design is patterned after http://go/closure_control_subclassing
     *
     * It uses {@link goog.ui.media.FlashObject} to embed the flash object.
     *
     * @constructor
     * @extends {goog.ui.media.MediaRenderer}
     * @final
     */
    class GoogleVideo extends goog.ui.media.MediaRenderer {
        constructor();
        
        /**
         * Default CSS class to be applied to the root element of components rendered
         * by this renderer.
         *
         * @type {string}
         */
        static CSS_CLASS: string;
        
        /**
         * A static convenient method to construct a goog.ui.media.Media control out of
         * a GoogleVideo model. It sets it as the data model goog.ui.media.GoogleVideo
         * renderer uses, sets the states supported by the renderer, and returns a
         * Control that binds everything together. This is what you should be using for
         * constructing GoogleVideo videos, except if you need finer control over the
         * configuration.
         *
         * @param {goog.ui.media.GoogleVideoModel} dataModel The GoogleVideo data model.
         * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper, used for
         *     document interaction.
         * @return {!goog.ui.media.Media} A Control binded to the GoogleVideo renderer.
         */
        static newControl(dataModel: goog.ui.media.GoogleVideoModel, opt_domHelper?: goog.dom.DomHelper): goog.ui.media.Media;
        
        /**
         * Creates the initial DOM structure of the GoogleVideo video, which is
         * basically a the flash object pointing to a GoogleVideo video player.
         *
         * @param {goog.ui.Control} c The media control.
         * @return {!Element} The DOM structure that represents this control.
         * @override
         */
        createDom(c: goog.ui.Control): Element;
        
        /**
         * Returns the CSS class to be applied to the root element of components
         * rendered using this renderer.
         *
         * @return {string} Renderer-specific CSS class.
         * @override
         */
        getCssClass(): string;
    }

    /**
     * The {@code goog.ui.media.GoogleVideo} media data model. It stores a required
     * {@code videoId} field, sets the GoogleVideo URL, and allows a few optional
     * parameters.
     *
     * @param {string} videoId The GoogleVideo video id.
     * @param {string=} opt_caption An optional caption of the GoogleVideo video.
     * @param {string=} opt_description An optional description of the GoogleVideo
     *     video.
     * @param {boolean=} opt_autoplay Whether to autoplay video.
     * @constructor
     * @extends {goog.ui.media.MediaModel}
     * @final
     */
    class GoogleVideoModel extends goog.ui.media.MediaModel {
        constructor(videoId: string, opt_caption?: string, opt_description?: string, opt_autoplay?: boolean);
        
        /**
         * A auxiliary static method that parses a GoogleVideo URL, extracting the ID of
         * the video, and builds a GoogleVideoModel.
         *
         * @param {string} googleVideoUrl A GoogleVideo video URL.
         * @param {string=} opt_caption An optional caption of the GoogleVideo video.
         * @param {string=} opt_description An optional description of the GoogleVideo
         *     video.
         * @param {boolean=} opt_autoplay Whether to autoplay video.
         * @return {!goog.ui.media.GoogleVideoModel} The data model that represents the
         *     GoogleVideo URL.
         * @see goog.ui.media.GoogleVideoModel.getVideoId()
         * @throws Error in case the parsing fails.
         */
        static newInstance(googleVideoUrl: string, opt_caption?: string, opt_description?: string, opt_autoplay?: boolean): goog.ui.media.GoogleVideoModel;
        
        /**
         * The opposite of {@code goog.ui.media.GoogleVideo.newInstance}: it takes a
         * videoId and returns a GoogleVideo URL.
         *
         * @param {string} videoId The GoogleVideo video ID.
         * @return {string} The GoogleVideo URL.
         */
        static buildUrl(videoId: string): string;
        
        /**
         * An auxiliary method that builds URL of the flash movie to be embedded,
         * out of the GoogleVideo video id.
         *
         * @param {string} videoId The GoogleVideo video ID.
         * @param {boolean=} opt_autoplay Whether the flash movie should start playing
         *     as soon as it is shown, or if it should show a 'play' button.
         * @return {string} The flash URL to be embedded on the page.
         */
        static buildFlashUrl(videoId: string, opt_autoplay?: boolean): string;
        
        /**
         * Gets the GoogleVideo video id.
         * @return {string} The GoogleVideo video id.
         */
        getVideoId(): string;
    }
}
