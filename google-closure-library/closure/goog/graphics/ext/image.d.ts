declare module goog {
    function require(name: 'goog.graphics.ext.Image'): typeof goog.graphics.ext.Image;
}

declare module goog.graphics.ext {

    /**
     * Wrapper for a graphics image element.
     * @param {goog.graphics.ext.Group} group Parent for this element.
     * @param {string} src The path to the image to display.
     * @constructor
     * @extends {goog.graphics.ext.Element}
     * @final
     */
    class Image extends goog.graphics.ext.Element {
        constructor(group: goog.graphics.ext.Group, src: string);
        
        /**
         * Update the source of the image.
         * @param {string} src  Source of the image.
         */
        setSource(src: string): void;
    }
}
