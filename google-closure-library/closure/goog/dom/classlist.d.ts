declare module goog {
    function require(name: 'goog.dom.classlist'): typeof goog.dom.classlist;
}

declare module goog.dom.classlist {

    /**
     * Gets an array-like object of class names on an element.
     * @param {Element} element DOM node to get the classes of.
     * @return {!goog.array.ArrayLike} Class names on {@code element}.
     */
    function get(element: Element): goog.array.ArrayLike;

    /**
     * Sets the entire class name of an element.
     * @param {Element} element DOM node to set class of.
     * @param {string} className Class name(s) to apply to element.
     */
    function set(element: Element, className: string): void;

    /**
     * Returns true if an element has a class.  This method may throw a DOM
     * exception for an invalid or empty class name if DOMTokenList is used.
     * @param {Element} element DOM node to test.
     * @param {string} className Class name to test for.
     * @return {boolean} Whether element has the class.
     */
    function contains(element: Element, className: string): boolean;

    /**
     * Adds a class to an element.  Does not add multiples of class names.  This
     * method may throw a DOM exception for an invalid or empty class name if
     * DOMTokenList is used.
     * @param {Element} element DOM node to add class to.
     * @param {string} className Class name to add.
     */
    function add(element: Element, className: string): void;

    /**
     * Convenience method to add a number of class names at once.
     * @param {Element} element The element to which to add classes.
     * @param {goog.array.ArrayLike<string>} classesToAdd An array-like object
     * containing a collection of class names to add to the element.
     * This method may throw a DOM exception if classesToAdd contains invalid
     * or empty class names.
     */
    function addAll(element: Element, classesToAdd: goog.array.ArrayLike): void;

    /**
     * Removes a class from an element.  This method may throw a DOM exception
     * for an invalid or empty class name if DOMTokenList is used.
     * @param {Element} element DOM node to remove class from.
     * @param {string} className Class name to remove.
     */
    function remove(element: Element, className: string): void;

    /**
     * Removes a set of classes from an element.  Prefer this call to
     * repeatedly calling {@code goog.dom.classlist.remove} if you want to remove
     * a large set of class names at once.
     * @param {Element} element The element from which to remove classes.
     * @param {goog.array.ArrayLike<string>} classesToRemove An array-like object
     * containing a collection of class names to remove from the element.
     * This method may throw a DOM exception if classesToRemove contains invalid
     * or empty class names.
     */
    function removeAll(element: Element, classesToRemove: goog.array.ArrayLike): void;

    /**
     * Adds or removes a class depending on the enabled argument.  This method
     * may throw a DOM exception for an invalid or empty class name if DOMTokenList
     * is used.
     * @param {Element} element DOM node to add or remove the class on.
     * @param {string} className Class name to add or remove.
     * @param {boolean} enabled Whether to add or remove the class (true adds,
     *     false removes).
     */
    function enable(element: Element, className: string, enabled: boolean): void;

    /**
     * Adds or removes a set of classes depending on the enabled argument.  This
     * method may throw a DOM exception for an invalid or empty class name if
     * DOMTokenList is used.
     * @param {!Element} element DOM node to add or remove the class on.
     * @param {goog.array.ArrayLike<string>} classesToEnable An array-like object
     *     containing a collection of class names to add or remove from the element.
     * @param {boolean} enabled Whether to add or remove the classes (true adds,
     *     false removes).
     */
    function enableAll(element: Element, classesToEnable: goog.array.ArrayLike, enabled: boolean): void;

    /**
     * Switches a class on an element from one to another without disturbing other
     * classes. If the fromClass isn't removed, the toClass won't be added.  This
     * method may throw a DOM exception if the class names are empty or invalid.
     * @param {Element} element DOM node to swap classes on.
     * @param {string} fromClass Class to remove.
     * @param {string} toClass Class to add.
     * @return {boolean} Whether classes were switched.
     */
    function swap(element: Element, fromClass: string, toClass: string): boolean;

    /**
     * Removes a class if an element has it, and adds it the element doesn't have
     * it.  Won't affect other classes on the node.  This method may throw a DOM
     * exception if the class name is empty or invalid.
     * @param {Element} element DOM node to toggle class on.
     * @param {string} className Class to toggle.
     * @return {boolean} True if class was added, false if it was removed
     *     (in other words, whether element has the class after this function has
     *     been called).
     */
    function toggle(element: Element, className: string): boolean;

    /**
     * Adds and removes a class of an element.  Unlike
     * {@link goog.dom.classlist.swap}, this method adds the classToAdd regardless
     * of whether the classToRemove was present and had been removed.  This method
     * may throw a DOM exception if the class names are empty or invalid.
     *
     * @param {Element} element DOM node to swap classes on.
     * @param {string} classToRemove Class to remove.
     * @param {string} classToAdd Class to add.
     */
    function addRemove(element: Element, classToRemove: string, classToAdd: string): void;
}
