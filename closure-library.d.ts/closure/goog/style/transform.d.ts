declare module goog {
    function require(name: 'goog.style.transform'): typeof goog.style.transform;
}

declare module goog.style.transform {

    /**
     * Whether CSS3 transform translate() is supported. IE 9 supports 2D transforms
     * and IE 10 supports 3D transforms. IE 8 supports neither.
     * @return {boolean} Whether the current environment supports CSS3 transforms.
     */
    function isSupported(): boolean;

    /**
     * Whether CSS3 transform translate3d() is supported. If the current browser
     * supports this transform strategy.
     * @return {boolean} Whether the current environment supports CSS3 transforms.
     */
    function is3dSupported(): boolean;

    /**
     * Returns the x,y translation component of any CSS transforms applied to the
     * element, in pixels.
     *
     * @param {!Element} element The element to get the translation of.
     * @return {!goog.math.Coordinate} The CSS translation of the element in px.
     */
    function getTranslation(element: Element): goog.math.Coordinate;

    /**
     * Translates an element's position using the CSS3 transform property.
     * NOTE: This replaces all other transforms already defined on the element.
     * @param {Element} element The element to translate.
     * @param {number} x The horizontal translation.
     * @param {number} y The vertical translation.
     * @return {boolean} Whether the CSS translation was set.
     */
    function setTranslation(element: Element, x: number, y: number): boolean;

    /**
     * Returns the scale of the x, y and z dimensions of CSS transforms applied to
     * the element.
     *
     * @param {!Element} element The element to get the scale of.
     * @return {!goog.math.Coordinate3} The scale of the element.
     */
    function getScale(element: Element): goog.math.Coordinate3;

    /**
     * Scales an element using the CSS3 transform property.
     * NOTE: This replaces all other transforms already defined on the element.
     * @param {!Element} element The element to scale.
     * @param {number} x The horizontal scale.
     * @param {number} y The vertical scale.
     * @param {number} z The depth scale.
     * @return {boolean} Whether the CSS scale was set.
     */
    function setScale(element: Element, x: number, y: number, z: number): boolean;
}
