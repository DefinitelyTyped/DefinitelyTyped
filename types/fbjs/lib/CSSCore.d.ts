/**
 * The CSSCore module specifies the API (and implements most of the methods)
 * that should be used when dealing with the display of elements (via their
 * CSS classes and visibility on screen. It is an API focused on mutating the
 * display and not reading it as no logical state should be encoded in the
 * display of elements.
 */
declare namespace CSSCore {
    /**
     * Adds the class passed in to the element if it doesn't already have it.
     *
     * @param {DOMElement} element the element to set the class on
     * @param {string} className the CSS className
     * @return {DOMElement} the element passed in
     */
    var addClass: (element: any, className) => any;
    /**
     * Removes the class passed in from the element
     *
     * @param {DOMElement} element the element to set the class on
     * @param {string} className the CSS className
     * @return {DOMElement} the element passed in
     */
    var removeClass: (element: any, className: string) => any;

    /**
     * Helper to add or remove a class from an element based on a condition.
     *
     * @param {DOMElement} element the element to set the class on
     * @param {string} className the CSS className
     * @param {*} bool condition to whether to add or remove the class
     * @return {DOMElement} the element passed in
     */
    var conditionClass: (element: any, className: string, condition: boolean) => any;

    /**
     * Tests whether the element has the class specified.
     *
     * @param {DOMNode|DOMWindow} element the element to check the class on
     * @param {string} className the CSS className
     * @return {boolean} true if the element has the class, false if not
     */
    var hasClass: (element: any, className: string) => boolean;

    /**
     * Tests whether the element matches the selector specified
     *
     * @param {DOMNode|DOMWindow} element the element that we are querying
     * @param {string} selector the CSS selector
     * @return {boolean} true if the element matches the selector, false if not
     */
    var matchesSelector: (element: any, selector: string) => boolean;
}

export = CSSCore;
