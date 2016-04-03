declare module goog {
    function require(name: 'goog.labs.net.image'): typeof goog.labs.net.image;
}

declare module goog.labs.net.image {

    /**
     * Loads a single image.  Useful for preloading images.
     *
     * @param {string} uri URI of the image.
     * @param {(!Image|function(): !Image)=} opt_image If present, instead of
     *     creating a new Image instance the function will use the passed Image
     *     instance or the result of calling the Image factory respectively. This
     *     can be used to control exactly how Image instances are created, for
     *     example if they should be created in a particular document element, or
     *     have fields that will trigger CORS image fetches.
     * @return {!goog.Promise<!Image>} A Promise that will be resolved with the
     *     given image if the image successfully loads.
     */
    function load(uri: string, opt_image?: Image|(() => Image)): goog.Promise<Image, any>;
}
