declare module goog {
    function require(name: 'goog.ui.media.PicasaAlbum'): typeof goog.ui.media.PicasaAlbum;
    function require(name: 'goog.ui.media.PicasaAlbumModel'): typeof goog.ui.media.PicasaAlbumModel;
}

declare module goog.ui.media {

    /**
     * Subclasses a goog.ui.media.MediaRenderer to provide a Picasa specific media
     * renderer.
     *
     * This class knows how to parse picasa URLs, and render the DOM structure
     * of picasa album players and previews. This class is meant to be used as a
     * singleton static stateless class, that takes {@code goog.ui.media.Media}
     * instances and renders it. It expects {@code goog.ui.media.Media.getModel} to
     * return a well formed, previously constructed, object with a user and album
     * fields {@see goog.ui.media.PicasaAlbum.parseUrl}, which is the data model
     * this renderer will use to construct the DOM structure.
     * {@see goog.ui.media.PicasaAlbum.newControl} for a example of constructing a
     * control with this renderer.
     *
     * goog.ui.media.PicasaAlbum currently displays a picasa-made flash slideshow
     * with the photos, but could possibly display a handwritten js photo viewer,
     * in case flash is not available.
     *
     * This design is patterned after http://go/closure_control_subclassing
     *
     * It uses {@link goog.ui.media.FlashObject} to embed the flash object.
     *
     * @constructor
     * @extends {goog.ui.media.MediaRenderer}
     * @final
     */
    class PicasaAlbum extends goog.ui.media.MediaRenderer {
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
         * a picasa data model. It sets it as the data model goog.ui.media.PicasaAlbum
         * renderer uses, sets the states supported by the renderer, and returns a
         * Control that binds everything together. This is what you should be using for
         * constructing Picasa albums, except if you need finer control over the
         * configuration.
         *
         * @param {goog.ui.media.PicasaAlbumModel} dataModel A picasa album data model.
         * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper, used for
         *     document interaction.
         * @return {!goog.ui.media.Media} A Control instance binded to the Picasa
         *     renderer.
         */
        static newControl(dataModel: goog.ui.media.PicasaAlbumModel, opt_domHelper?: goog.dom.DomHelper): goog.ui.media.Media;
        
        /**
         * Creates the initial DOM structure of the picasa album, which is basically a
         * the flash object pointing to a flash picasa album player.
         *
         * @param {goog.ui.Control} c The media control.
         * @return {!Element} The DOM structure that represents the control.
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

    /**
     * The {@code goog.ui.media.PicasaAlbum} media data model. It stores a required
     * {@code userId} and {@code albumId} fields, sets the picasa album URL, and
     * allows a few optional parameters.
     *
     * @param {string} userId The picasa userId associated with this album.
     * @param {string} albumId The picasa albumId associated with this album.
     * @param {string=} opt_authKey An optional authentication key, used on private
     *     albums.
     * @param {string=} opt_caption An optional caption of the picasa album.
     * @param {string=} opt_description An optional description of the picasa album.
     * @param {boolean=} opt_autoplay Whether to autoplay the slideshow.
     * @constructor
     * @extends {goog.ui.media.MediaModel}
     * @final
     */
    class PicasaAlbumModel extends goog.ui.media.MediaModel {
        constructor(userId: string, albumId: string, opt_authKey?: string, opt_caption?: string, opt_description?: string, opt_autoplay?: boolean);
        
        /**
         * Gets a {@code picasaUrl} and extracts the user and album id.
         *
         * @param {string} picasaUrl A picasa album URL.
         * @param {string=} opt_caption An optional caption of the picasa album.
         * @param {string=} opt_description An optional description of the picasa album.
         * @param {boolean=} opt_autoplay Whether to autoplay the slideshow.
         * @return {!goog.ui.media.PicasaAlbumModel} The picasa album data model that
         *     represents the picasa URL.
         * @throws exception in case the parsing fails
         */
        static newInstance(picasaUrl: string, opt_caption?: string, opt_description?: string, opt_autoplay?: boolean): goog.ui.media.PicasaAlbumModel;
        
        /**
         * The opposite of {@code newInstance}: takes an {@code userId} and an
         * {@code albumId} and builds a URL.
         *
         * @param {string} userId The user that owns the album.
         * @param {string} albumId The album id.
         * @return {string} The URL of the album.
         */
        static buildUrl(userId: string, albumId: string): string;
        
        /**
         * Gets the Picasa user id.
         * @return {string} The Picasa user id.
         */
        getUserId(): string;
        
        /**
         * Gets the Picasa album id.
         * @return {string} The Picasa album id.
         */
        getAlbumId(): string;
        
        /**
         * Gets the Picasa album authentication key.
         * @return {?string} The Picasa album authentication key.
         */
        getAuthKey(): string;
    }
}
