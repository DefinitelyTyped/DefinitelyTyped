// Type definitions for Aphrodite 0.5.0
// Project: https://github.com/Khan/aphrodite
// Definitions by: Alexey Svetliakov <https://github.com/asvetliakov>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.6

import * as React from "react";

type FontFamily =
    | React.CSSProperties['fontFamily']
    | Pick<React.CSSProperties,
        | 'fontFamily'
        | 'fontStyle'
        | 'fontWeight'
        | 'src'
    >

/**
 * Aphrodite style declaration
 */
export interface StyleDeclaration {
    [key: string]: Pick<React.CSSProperties, (
        & React.CSSProperties
        & { fontFamily: never }
    )[keyof React.CSSProperties]> & {
        fontFamily?: FontFamily | FontFamily[];
    };
}

interface StyleSheetStatic {
    /**
     * Create style sheet
     */
    create<T extends StyleDeclaration>(styles: T): T;
    /**
     * Rehydrate class names from server renderer
     */
    rehydrate(renderedClassNames: string[]): void;
}

export var StyleSheet: StyleSheetStatic;
/**
 * Get class names from passed styles
 */
export function css(...styles: any[]): string;

interface StaticRendererResult {
    html: string;
    css: {
        content: string;
        renderedClassNames: string[];
    }
}

/**
 * Utilities for using Aphrodite server-side.
 */
interface StyleSheetServerStatic {
    renderStatic(renderFunc: () => string): StaticRendererResult;
}

export var StyleSheetServer: StyleSheetServerStatic;

interface StyleSheetTestUtilsStatic {
    /**
     * Prevent styles from being injected into the DOM.
     *
     * This is useful in situations where you'd like to test rendering UI
     * components which use Aphrodite without any of the side-effects of
     * Aphrodite happening. Particularly useful for testing the output of
     * components when you have no DOM, e.g. testing in Node without a fake DOM.
     *
     * Should be paired with a subsequent call to
     * clearBufferAndResumeStyleInjection.
     */
    suppressStyleInjection(): void;
    /**
     * Opposite method of preventStyleInject.
    */
    clearBufferAndResumeStyleInjection(): void;
}

export var StyleSheetTestUtils: StyleSheetTestUtilsStatic;

