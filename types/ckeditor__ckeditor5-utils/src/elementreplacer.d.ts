/**
 * Utility class allowing to hide existing HTML elements or replace them with given ones in a way that doesn't remove
 * the original elements from the DOM.
 */
export default class ElementReplacer {
    /**
     * The elements replaced by {@link #replace} and their replacements.
     *
     */
    private _replacedElements;
    /**
     * Hides the `element` and, if specified, inserts the the given element next to it.
     *
     * The effect of this method can be reverted by {@link #restore}.
     *
     */
    replace(element: HTMLElement, newElement?: HTMLElement): void;
    /**
     * Restores what {@link #replace} did.
     */
    restore(): void;
}
