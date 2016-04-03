declare module goog {
    function require(name: 'goog.graphics.SolidFill'): typeof goog.graphics.SolidFill;
}

declare module goog.graphics {

    /**
     * Creates an immutable solid color fill object.
     *
     * @param {string} color The color of the background.
     * @param {number=} opt_opacity The opacity of the background fill. The value
     *    must be greater than or equal to zero (transparent) and less than or
     *    equal to 1 (opaque).
     * @constructor
     * @extends {goog.graphics.Fill}
     * @deprecated goog.graphics is deprecated. It existed to abstract over browser
     *     differences before the canvas tag was widely supported.  See
     *     http://en.wikipedia.org/wiki/Canvas_element for details.
     */
    class SolidFill extends goog.graphics.Fill {
        constructor(color: string, opt_opacity?: number);
        
        /**
         * @return {string} The color of this fill.
         */
        getColor(): string;
        
        /**
         * @return {number} The opacity of this fill.
         */
        getOpacity(): number;
    }
}
