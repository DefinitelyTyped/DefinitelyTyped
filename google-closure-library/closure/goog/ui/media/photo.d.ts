declare module goog {
    function require(name: 'goog.ui.media.Photo'): typeof goog.ui.media.Photo;
}

declare module goog.ui.media {

    /**
     * Subclasses a goog.ui.media.MediaRenderer to provide a Photo specific media
     * renderer. Provides a base class for any other renderer that wants to display
     * photos.
     *
     * This class is meant to be used as a singleton static stateless class, that
     * takes {@code goog.ui.media.Media} instances and renders it.
     *
     * This design is patterned after
     * http://go/closure_control_subclassing
     *
     * @constructor
     * @extends {goog.ui.media.MediaRenderer}
     * @final
     */
    class Photo extends goog.ui.media.MediaRenderer {
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
         * a photo {@code goog.ui.media.MediaModel}. It sets it as the data model
         * goog.ui.media.Photo renderer uses, sets the states supported by the renderer,
         * and returns a Control that binds everything together. This is what you
         * should be using for constructing Photos, except if you need finer control
         * over the configuration.
         *
         * @param {goog.ui.media.MediaModel} dataModel The photo data model.
         * @return {!goog.ui.media.Media} A goog.ui.Control subclass with the photo
         *     renderer.
         */
        static newControl(dataModel: goog.ui.media.MediaModel): goog.ui.media.Media;
        
        /**
         * Creates the initial DOM structure of a photo.
         *
         * @param {goog.ui.Control} c The media control.
         * @return {!Element} A DOM structure that represents the control.
         * @override
         */
        createDom(c: goog.ui.Control): Element;
        
        /**
         * Returns the CSS class to be applied to the root element of components
         * rendered using this renderer.
         * @return {string} Renderer-specific CSS class.
         * @override
         */
        getCssClass(): string;
    }
}
