// Type definitions for insert-css 2.0
// Project: https://github.com/substack/insert-css
// Definitions by: Heye Vöcking <https://github.com/hvoecking>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface InsertCssOptions {
    container?: HTMLElement;
    prepend?: boolean;
}

export interface InsertCssStyleElement extends HTMLStyleElement {
    styleSheet?: CSSStyleSheet;
}

export function insertCss(
    css: string,
    options?: InsertCssOptions,
): InsertCssStyleElement;
