// Type definitions for Incremetal DOM
// Project: https://github.com/google/incremental-dom
// Definitions by: Basarat Ali Syed <https://github.com/basarat>, Markus Lanthaler <https://github.com/lanthaler>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module "incremental-dom" {
    /**
     * Patches the document starting at el with the provided function. This function
     * may be called during an existing patch operation.
     * @param {!Element} el the element to patch
     * @param {!function(T)} fn A function containing elementOpen/elementClose/etc.
     *     calls that describe the DOM.
     * @param {?T} data An argument passed to fn to represent DOM state.
     */
    export var patch: <T>(el: Node, fn: (data: T) => void, data?: T) => void;

    /**
     * Declares a virtual Element at the current location in the document. This
     * corresponds to an opening tag and a elementClose tag is required.
     * @param {string} tag The element's tag.
     * @param {?string} key The key used to identify this element. This can be an
     *     empty string, but performance may be better if a unique value is used
     *     when iterating over an array of items.
     * @param {?Array<*>} statics An array of attribute name/value pairs of the
     *     static attributes for the Element. These will only be set once when the
     *     Element is created.
     * @param {...*} var_args Attribute name/value pairs of the dynamic attributes
     *     for the Element.
     */
    export var elementOpen: (tag: string, key?: string, statics?: any[], ...var_args: any[]) => HTMLElement;
    /**
     * Declares a virtual Element at the current location in the document. This
     * corresponds to an opening tag and a elementClose tag is required. This is
     * like elementOpen, but the attributes are defined using the attr function
     * rather than being passed as arguments. Must be folllowed by 0 or more calls
     * to attr, then a call to elementOpenEnd.
     * @param {string} tag The element's tag.
     * @param {?string} key The key used to identify this element. This can be an
     *     empty string, but performance may be better if a unique value is used
     *     when iterating over an array of items.
     * @param {?Array<*>} statics An array of attribute name/value pairs of the
     *     static attributes for the Element. These will only be set once when the
     *     Element is created.
     */
    export var elementOpenStart: (tag: string, key?: any, ...statics: any[]) => void;
    /***
     * Defines a virtual attribute at this point of the DOM. This is only valid
     * when called between elementOpenStart and elementOpenEnd.
     *
     * @param {string} name
     * @param {*} value
     */
    export var attr: (name: string, value: any) => void;
    /**
     * Closes an open tag started with elementOpenStart.
     */
    export var elementOpenEnd: () => HTMLElement;
    /**
     * Closes an open virtual Element.
     */
    export var elementClose: (tag: string) => HTMLElement;
    /**
     * Declares a virtual Element at the current location in the document that has
     * no children.
     * @param {string} tag The element's tag.
     * @param {?string} key The key used to identify this element. This can be an
     *     empty string, but performance may be better if a unique value is used
     *     when iterating over an array of items.
     * @param {?Array<*>} statics An array of attribute name/value pairs of the
     *     static attributes for the Element. These will only be set once when the
     *     Element is created.
     * @param {...*} var_args Attribute name/value pairs of the dynamic attributes
     *     for the Element.
     */
    export var elementVoid: (tag: string, key?: string, statics?: any, ...var_args: any[]) => HTMLElement;
    /**
     * Declares a virtual Text at this point in the document.
     *
     * @param {string} value The text of the Text.
     */
    export var text: (value: string) => Text;
}
