export interface InsertCssOptions {
    container?: HTMLElement | undefined;
    prepend?: boolean | undefined;
}

export interface InsertCssStyleElement extends HTMLStyleElement {
    styleSheet?: CSSStyleSheet | undefined;
}

export function insertCss(
    css: string,
    options?: InsertCssOptions,
): InsertCssStyleElement;
