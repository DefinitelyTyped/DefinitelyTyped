// Type definitions for Aphrodite 0.5.0
// Project: https://github.com/Khan/aphrodite
// Definitions by: Alexey Svetliakov <https://github.com/asvetliakov>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as CSS from "csstype";

type BaseCSSProperties = CSS.Properties<number | string>;

type FontFamily =
    | BaseCSSProperties['fontFamily']
    | CSS.FontFace;

type Omit<T, K extends keyof T> = Pick<T, ({ [P in keyof T]: P } & { [P in K]: never } & { [x: string]: never, [x: number]: never })[keyof T]>;

type CSSProperties = Omit<BaseCSSProperties, 'fontFamily' | 'transition' | 'animationName' > & {
    fontFamily?: FontFamily | FontFamily[];
    animationName?: string | OpenCSSProperties | OpenCSSProperties[];
};

// For pseudo selectors and media queries
interface OpenCSSProperties extends CSSProperties {
    [k: string]: CSSProperties[keyof CSSProperties] | CSSProperties;
}

/**
 * Aphrodite style declaration
 */
export interface StyleDeclaration {
    [key: string]: OpenCSSProperties;
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

