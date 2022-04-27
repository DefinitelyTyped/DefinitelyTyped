import { Disposable } from '../index';

/**
 *  A singleton instance of this class available via atom.styles, which you can
 *  use to globally query and observe the set of active style sheets.
 */
export interface StyleManager {
    // Event Subscription
    /** Invoke callback for all current and future style elements. */
    observeStyleElements(callback: (styleElement: StyleElementObservedEvent) => void): Disposable;

    /** Invoke callback when a style element is added. */
    onDidAddStyleElement(callback: (styleElement: StyleElementObservedEvent) => void): Disposable;

    /** Invoke callback when a style element is removed. */
    onDidRemoveStyleElement(callback: (styleElement: HTMLStyleElement) => void): Disposable;

    /** Invoke callback when an existing style element is updated. */
    onDidUpdateStyleElement(callback: (styleElement: StyleElementObservedEvent) => void): Disposable;

    // Reading Style Elements
    /** Get all loaded style elements. */
    getStyleElements(): HTMLStyleElement[];

    // Paths
    /** Get the path of the user style sheet in ~/.atom. */
    getUserStyleSheetPath(): string;
}

export interface StyleElementObservedEvent extends HTMLStyleElement {
    sourcePath: string;
    context: string;
}
