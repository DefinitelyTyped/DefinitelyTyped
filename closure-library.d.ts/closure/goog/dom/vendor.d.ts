declare module goog {
    function require(name: 'goog.dom.vendor'): typeof goog.dom.vendor;
}

declare module goog.dom.vendor {

    /**
     * Returns the JS vendor prefix used in CSS properties. Different vendors
     * use different methods of changing the case of the property names.
     *
     * @return {?string} The JS vendor prefix or null if there is none.
     */
    function getVendorJsPrefix(): string;

    /**
     * Returns the vendor prefix used in CSS properties.
     *
     * @return {?string} The vendor prefix or null if there is none.
     */
    function getVendorPrefix(): string;

    /**
     * @param {string} propertyName A property name.
     * @param {!Object=} opt_object If provided, we verify if the property exists in
     *     the object.
     * @return {?string} A vendor prefixed property name, or null if it does not
     *     exist.
     */
    function getPrefixedPropertyName(propertyName: string, opt_object?: Object): string;

    /**
     * @param {string} eventType An event type.
     * @return {string} A lower-cased vendor prefixed event type.
     */
    function getPrefixedEventType(eventType: string): string;
}
