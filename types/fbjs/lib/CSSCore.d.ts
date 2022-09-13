import { DOMWindow } from 'jsdom';

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
     */
    function addClass(element: HTMLElement, className: string): HTMLElement;
    /**
     * Removes the class passed in from the element
     */
    function removeClass(element: HTMLElement, className: string): HTMLElement;

    /**
     * Helper to add or remove a class from an element based on a condition.
     */
    function conditionClass(element: HTMLElement, className: string, condition: boolean): HTMLElement;

    /**
     * Tests whether the element has the class specified.
     */
    function hasClass(element: HTMLElement | DOMWindow, className: string): boolean;

    /**
     * Tests whether the element matches the selector specified
     */
    function matchesSelector(element: HTMLElement | DOMWindow, selector: string): boolean;
}
// tslint:disable-next-line export-just-namespace
export = CSSCore;
