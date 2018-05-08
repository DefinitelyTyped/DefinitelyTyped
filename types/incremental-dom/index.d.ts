// Type definitions for Incremetal DOM 0.5
// Project: https://github.com/google/incremental-dom
// Definitions by: Basarat Ali Syed <https://github.com/basarat>, Markus Lanthaler <https://github.com/lanthaler>, vvakame <https://github.com/vvakame>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

type NameOrCtorDef = string | { new (...args: any[]): Element; };

/**
 * Patches the document starting at node with the provided function. This
 * function may be called during an existing patch operation.
 * @param {!Element|!DocumentFragment} node The Element or Documen to patch.
 * @param {!function(T)} fn A function containing open/close/etc. calls that
 *     describe the DOM.
 * @param {T=} data An argument passed to fn to represent DOM state.
 * @return {!Node} The patched node.
 * @template T
 */
export declare var patchInner: <T>(node: Element | DocumentFragment, fn: (data: T) => void, data?: T) => Node;

/**
 * Patches the document starting at node with the provided function. This
 * function may be called during an existing patch operation.
 * @param {!Element|!DocumentFragment} node The Element or Documen to patch.
 * @param {!function(T)} fn A function containing open/close/etc. calls that
 *     describe the DOM.
 * @param {T=} data An argument passed to fn to represent DOM state.
 * @return {!Node} The patched node.
 * @template T
 */
export declare var patch: typeof patchInner;

/**
 * Patches an Element with the the provided function. Exactly one top level
 * element call should be made corresponding to `node`.
 * @param {!Element} node The Element where the patch should start.
 * @param {!function(T)} fn A function containing open/close/etc. calls that
 *     describe the DOM. This should have at most one top level element call.
 * @param {T=} data An argument passed to fn to represent DOM state.
 * @return {?Node} The node if it was updated, its replacedment or null if it
 *     was removed.
 * @template T
 */
export declare var patchOuter: <T>(node: Element, fn: (data: T) => void, data?: T) => Node | null;

/**
 * Makes sure that the current node is an Element with a matching nameOrCtor and
 * key.
 *
 * @param {NameOrCtorDef} nameOrCtor The tag or constructor for the Element.
 * @param {?string=} key The key used to identify this element. This can be an
 *     empty string, but performance may be better if a unique value is used
 *     when iterating over an array of items.
 * @param {*=} typeId An type identifier that avoids reuse between elements that
 *     would otherwise match.
 * @return {!Element} The corresponding Element.
 */
export declare var open: (nameOrCtor: NameOrCtorDef, key?: string, typeId?: any) => Element;

/**
 * Closes the currently open Element, removing any unvisited children if
 * necessary.
 *
 * @return {!Element} The corresponding Element.
 */
export declare var close: () => Element;

/**
 * Gets the current Element being patched.
 * @return {!Element}
 */
export declare var currentElement: () => Element;

/**
 * @return {Node} The Node that will be evaluated for the next instruction.
 */
export declare var currentPointer: () => Node;

/**
 * Skips the children in a subtree, allowing an Element to be closed without
 * clearing out the children.
 */
export declare var skip: () => void;

/**
 * Skips the next Node to be patched, moving the pointer forward to the next
 * sibling of the current pointer.
 */
export declare var skipNode: () => void;

/**
 * @param {NameOrCtorDef} nameOrCtor The Element's tag or constructor.
 * @param {?string=} key The key used to identify this element. This can be an
 *     empty string, but performance may be better if a unique value is used
 *     when iterating over an array of items.
 * @param {?Array<*>=} statics An array of attribute name/value pairs of the
 *     static attributes for the Element. These will only be set once when the
 *     Element is created.
 * @param {...*} var_args, Attribute name/value pairs of the dynamic attributes
 *     for the Element.
 * @return {!Element} The corresponding Element.
 */
export declare var elementOpen: (nameOrCtor: NameOrCtorDef, key?: string, statics?: any[], ...var_args: any[]) => Element;

/**
 * Declares a virtual Element at the current location in the document. This
 * corresponds to an opening tag and a elementClose tag is required. This is
 * like elementOpen, but the attributes are defined using the attr function
 * rather than being passed as arguments. Must be folllowed by 0 or more calls
 * to attr, then a call to elementOpenEnd.
 * @param {NameOrCtorDef} nameOrCtor The Element's tag or constructor.
 * @param {?string=} key The key used to identify this element. This can be an
 *     empty string, but performance may be better if a unique value is used
 *     when iterating over an array of items.
 * @param {?Array<*>=} statics An array of attribute name/value pairs of the
 *     static attributes for the Element. These will only be set once when the
 *     Element is created.
 */
export declare var elementOpenStart: (nameOrCtor: NameOrCtorDef, key?: string, statics?: any[]) => void;

/***
 * Defines a virtual attribute at this point of the DOM. This is only valid
 * when called between elementOpenStart and elementOpenEnd.
 *
 * @param {string} name
 * @param {*} value
 */
export declare var attr: (name: string, value: any) => void;

/**
 * Closes an open tag started with elementOpenStart.
 * @return {!Element} The corresponding Element.
 */
export declare var elementOpenEnd: () => Element;

/**
 * Closes an open virtual Element.
 *
 * @param {NameOrCtorDef} nameOrCtor The Element's tag or constructor.
 * @return {!Element} The corresponding Element.
 */
export declare var elementClose: (nameOrCtor: NameOrCtorDef) => Element;

/**
 * Declares a virtual Element at the current location in the document that has
 * no children.
 * @param {NameOrCtorDef} nameOrCtor The Element's tag or constructor.
 * @param {?string=} key The key used to identify this element. This can be an
 *     empty string, but performance may be better if a unique value is used
 *     when iterating over an array of items.
 * @param {?Array<*>=} statics An array of attribute name/value pairs of the
 *     static attributes for the Element. These will only be set once when the
 *     Element is created.
 * @param {...*} var_args Attribute name/value pairs of the dynamic attributes
 *     for the Element.
 * @return {!Element} The corresponding Element.
 */
export declare var elementVoid: (nameOrCtor: NameOrCtorDef, key?: string, statics?: any[], ...var_args: any[]) => Element;

/**
 * Declares a virtual Text at this point in the document.
 *
 * @param {string|number|boolean} value The value of the Text.
 * @param {...(function((string|number|boolean)):string)} var_args
 *     Functions to format the value which are called only when the value has
 *     changed.
 * @return {!Text} The corresponding text node.
 */
export declare var text: (value: string | number | boolean) => Text;

/** @const */
export declare var symbols: any;

/**
 * A publicly mutable object to provide custom mutators for attributes.
 * @const {!Object<string, function(!Element, string, *)>}
 */
export declare var attributes: any;

/**
 * Applies an attribute or property to a given Element. If the value is null
 * or undefined, it is removed from the Element. Otherwise, the value is set
 * as an attribute.
 * @param {!Element} el
 * @param {string} name The attribute's name.
 * @param {?(boolean|number|string)=} value The attribute's value.
 */
export declare var applyAttr: (el: Element, name: string, value?: boolean | number | string) => void;

/**
 * Applies a property to a given Element.
 * @param {!Element} el
 * @param {string} name The property's name.
 * @param {*} value The property's value.
 */
export declare var applyProp: (el: Element, name: string, value?: any) => void;

/**
 * Imports node and its subtree, initializing caches.
 *
 * @param {?Node} node The Node to import.
 */
export declare var importNode: (node?: Node) => void;
