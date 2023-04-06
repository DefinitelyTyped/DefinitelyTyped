import { DOMWindow } from 'jsdom';
/**
 * Utilities for querying and mutating style properties.
 */
declare namespace Style {
    /**
     * Gets the style property for the supplied node. This will return either the
     * computed style, if available, or the declared style.
     */
    function get(node: HTMLElement, name: string): string | null | undefined;
    /**
     * Determines the nearest ancestor of a node that is scrollable.
     *
     * NOTE: This can be expensive if used repeatedly or on a node nested deeply.
     */
    function getScrollParent(node: Node): HTMLElement | DOMWindow;
}

// eslint-disable-next-line export-just-namespace
export = Style;
