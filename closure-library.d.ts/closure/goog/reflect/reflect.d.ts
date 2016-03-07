declare module goog {
    function require(name: 'goog.reflect'): typeof goog.reflect;
}

declare module goog.reflect {

    /**
     * Syntax for object literal casts.
     * @see http://go/jscompiler-renaming
     * @see http://code.google.com/p/closure-compiler/wiki/
     *      ExperimentalTypeBasedPropertyRenaming
     *
     * Use this if you have an object literal whose keys need to have the same names
     * as the properties of some class even after they are renamed by the compiler.
     *
     * @param {!Function} type Type to cast to.
     * @param {Object} object Object literal to cast.
     * @return {Object} The object literal.
     */
    function object(type: Function, object: Object): Object;

    /**
     * To assert to the compiler that an operation is needed when it would
     * otherwise be stripped. For example:
     * <code>
     *     // Force a layout
     *     goog.reflect.sinkValue(dialog.offsetHeight);
     * </code>
     * @type {!Function}
     */
    function sinkValue(): void;

    /**
     * Check if a property can be accessed without throwing an exception.
     * @param {Object} obj The owner of the property.
     * @param {string} prop The property name.
     * @return {boolean} Whether the property is accessible. Will also return true
     *     if obj is null.
     */
    function canAccessProperty(obj: Object, prop: string): boolean;
}
