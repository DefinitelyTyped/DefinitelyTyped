declare module goog {
    function require(name: 'goog.dom.dataset'): typeof goog.dom.dataset;
}

declare module goog.dom.dataset {

    /**
     * Sets a custom data attribute on an element. The key should be
     * in camelCase format (e.g "keyName" for the "data-key-name" attribute).
     * @param {Element} element DOM node to set the custom data attribute on.
     * @param {string} key Key for the custom data attribute.
     * @param {string} value Value for the custom data attribute.
     */
    function set(element: Element, key: string, value: string): void;

    /**
     * Gets a custom data attribute from an element. The key should be
     * in camelCase format (e.g "keyName" for the "data-key-name" attribute).
     * @param {Element} element DOM node to get the custom data attribute from.
     * @param {string} key Key for the custom data attribute.
     * @return {?string} The attribute value, if it exists.
     */
    function get(element: Element, key: string): string;

    /**
     * Removes a custom data attribute from an element. The key should be
      * in camelCase format (e.g "keyName" for the "data-key-name" attribute).
     * @param {Element} element DOM node to get the custom data attribute from.
     * @param {string} key Key for the custom data attribute.
     */
    function remove(element: Element, key: string): void;

    /**
     * Checks whether custom data attribute exists on an element. The key should be
     * in camelCase format (e.g "keyName" for the "data-key-name" attribute).
     *
     * @param {Element} element DOM node to get the custom data attribute from.
     * @param {string} key Key for the custom data attribute.
     * @return {boolean} Whether the attribute exists.
     */
    function has(element: Element, key: string): boolean;

    /**
     * Gets all custom data attributes as a string map.  The attribute names will be
     * camel cased (e.g., data-foo-bar -> dataset['fooBar']).  This operation is not
     * safe for attributes having camel-cased names clashing with already existing
     * properties (e.g., data-to-string -> dataset['toString']).
     * @param {!Element} element DOM node to get the data attributes from.
     * @return {!Object} The string map containing data attributes and their
     *     respective values.
     */
    function getAll(element: Element): Object;
}
