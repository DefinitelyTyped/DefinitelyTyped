declare module goog {
    function require(name: 'goog.graphics.Fill'): typeof goog.graphics.Fill;
}

declare module goog.graphics {

    /**
     * Creates a fill object
     * @constructor
     * @deprecated goog.graphics is deprecated. It existed to abstract over browser
     *     differences before the canvas tag was widely supported.  See
     *     http://en.wikipedia.org/wiki/Canvas_element for details.
     */
    class Fill {
        constructor();
        
        /**
         * @return {string} The start color of a gradient fill.
         */
        getColor1(): string;
        
        /**
         * @return {string} The end color of a gradient fill.
         */
        getColor2(): string;
    }
}
