// Type definitions for @wordpress/dom 2.3
// Project: https://github.com/WordPress/gutenberg/tree/master/packages/dom/README.md
// Definitions by: Derek Sifford <https://github.com/dsifford>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.5

export interface Focusable {
    find(context: ParentNode): Element[];
}

export interface Tabbable extends Focusable {
    /**
     * Returns `true` if the specified element is tabbable, or `false` otherwise.
     *
     * @param element - Element to test.
     */
    isTabbableIndex(element: Element): boolean;
}

/**
 * Object grouping `focusable` and `tabbable` utils under the keys with the
 * same name.
 */
export const focus: {
    focusable: Focusable;
    tabbable: Tabbable;
};

/**
 * Get the rectangle for the selection in a container.
 */
export function computeCaretRect(): DOMRect | undefined;

/**
 * Check wether the current document has a selection. This checks both for
 * focus in an input field and general text selection.
 */
export function documentHasSelection(): boolean;

/**
 * Returns the closest positioned element, or `null` under any of the conditions
 * of the `offsetParent` specification. Unlike `offsetParent`, this function is not
 * limited to `HTMLElement` and accepts any `Node` (e.g. `Node.TEXT_NODE`).
 *
 * See: https://drafts.csswg.org/cssom-view/#dom-htmlelement-offsetparent
 *
 * @param node - Node from which to find offset parent.
 */
export function getOffsetParent(node: Node): Element | null;

/**
 * Get the rectangle of a given Range.
 *
 * @param range - The range.
 */
export function getRectangleFromRange(range: Range): DOMRect;

/**
 * Given a DOM element, finds the closest scrollable container element.
 *
 * @param element - Element from which to start.
 *
 * @returns Scrollable container node, if found.
 */
export function getScrollContainer(element: Element): Element | undefined;

/**
 * Given two DOM nodes, inserts the former in the DOM as the next sibling of
 * the latter.
 *
 * @param newNode - Node to be inserted.
 * @param referenceNode - Node after which to perform the insertion.
 */
export function insertAfter(newNode: Node, referenceNode: Node): void;

/**
 * Check whether the contents of the element have been entirely selected.
 * Returns true if there is no possibility of selection.
 *
 * @param element - The element to check.
 *
 * @returns `true` if entirely selected, `false` if not.
 */
export function isEntirelySelected(element: HTMLElement): boolean;

/**
 * Check whether the selection is horizontally at the edge of the container.
 *
 * @param container - Focusable element.
 * @param isReverse - Set to `true` to check left, `false` for right.
 *
 * @returns `true` if at the horizontal edge, `false` if not.
 */
export function isHorizontalEdge(container: HTMLElement, isReverse: boolean): boolean;

/**
 * Check whether the given element is a text field, where text field is defined
 * by the ability to select within the input, or that it is contenteditable.
 *
 * See: https://html.spec.whatwg.org/#textFieldSelection
 *
 * @param element - The HTML element.
 *
 * @returns `true` if the element is an text field, `false` if not.
 */
export function isTextField(element: HTMLElement): boolean;

/**
 * Check whether the selection is vertically at the edge of the container.
 *
 * @param container - Focusable element.
 * @param isReverse - Set to `true` to check top, `false` for bottom.
 *
 * @returns `true` if at the vertical edge, `false` if not.
 */
export function isVerticalEdge(container: HTMLElement, isReverse: boolean): boolean;

/**
 * Places the caret at start or end of a given element.
 *
 * @param container - Focusable element.
 * @param isReverse - `true` for end, `false` for start.
 */
export function placeCaretAtHorizontalEdge(container: HTMLElement | undefined, isReverse: boolean): void;

/**
 * Places the caret at the top or bottom of a given element.
 *
 * @param container           Focusable element.
 * @param isReverse           `true` for bottom, `false` for top.
 * @param [rect]              The rectangle to position the caret with.
 * @param [mayUseScroll=true] `true` to allow scrolling, `false` to disallow.
 */
export function placeCaretAtVerticalEdge(container: HTMLElement | undefined, isReverse: boolean, rect?: DOMRect, mayUseScroll?: boolean): void;

/**
 * Given a DOM node, removes it from the DOM.
 *
 * @param node - Node to be removed.
 */
export function remove(node: Node): void;

/**
 * Given two DOM nodes, replaces the former with the latter in the DOM.
 *
 * @param processedNode - Node to be removed.
 * @param newNode - Node to be inserted in its place.
 */
export function replace(processedNode: Node, newNode: Node): void;

/**
 * Replaces the given node with a new node with the given tag name.
 *
 * @param node - The node to replace.
 * @param tagName - The new tag name.
 */
export function replaceTag<T extends keyof HTMLElementTagNameMap>(node: Node, tagName: T): HTMLElementTagNameMap[T];

/**
 * Unwrap the given node. This means any child nodes are moved to the parent.
 *
 * @param node - The node to unwrap.
 */
export function unwrap(node: Node): void;

/**
 * Wraps the given node with a new node with the given tag name.
 *
 * @param newNode - The node to insert.
 * @param referenceNode - The node to wrap.
 */
export function wrap(newNode: Node, referenceNode: Node): void;
