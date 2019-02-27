// Type definitions for KaTeX 0.10
// Project: http://khan.github.io/KaTeX/
// Definitions by: Michael Randolph <https://github.com/mrand01>
//                 Kevin Nguyen <https://github.com/knguyen0125>
//                 bLue <https://github.com/dreamerblue>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

/// <reference path="contrib/index.d.ts" />

export as namespace katex;

/** Documentation: https://katex.org/docs/options.html */
export interface KatexOptions {
    /**
     * If `true`, math will be rendered in display mode
     * (math in display style and center math on page)
     *
     * If `false`, math will be rendered in inline mode
     * @default false
     */
    displayMode?: boolean;
    /**
     * If `true`, KaTeX will throw a `ParseError` when
     * it encounters an unsupported command or invalid LaTex
     *
     * If `false`, KaTeX will render unsupported commands as
     * text, and render invalid LaTeX as its source code with
     * hover text giving the error, in color given by errorColor
     * @default true
     */
    throwOnError?: boolean;
    /**
     * A Color string given in format `#XXX` or `#XXXXXX`
     */
    errorColor?: string;
    /**
     * A collection of custom macros.
     *
     * See `src/macros.js` for its usage
     */
    macros?: any;
    /**
     * If `true`, `\color` will work like LaTeX's `\textcolor`
     * and takes 2 arguments
     *
     * If `false`, `\color` will work like LaTeX's `\color`
     * and takes 1 argument
     *
     * In both cases, `\textcolor` works as in LaTeX
     *
     * @default false
     */
    colorIsTextColor?: boolean;
    /**
     * All user-specified sizes will be caped to `maxSize` ems
     *
     * If set to Infinity, users can make elements and space
     * arbitrarily large
     *
     * @default Infinity
     */
    maxSize?: number;
    /**
     * Limit the number of macro expansions to specified number
     *
     * If set to `Infinity`, marco expander will try to fully expand
     * as in LaTex
     *
     * @default 1000
     */
    maxExpand?: number;
    /**
     * Allowed protocols in `\href`
     *
     * Use `_relative` to allow relative urls
     *
     * Use `*` to allow all protocols
     */
    allowedProtocols?: string[];
    /**
     * If `false` or `"ignore"`, allow features that make
     * writing in LaTex convenient but not supported by LaTex
     *
     * If `true` or `"error"`, throw an error for such transgressions
     *
     * If `"warn"`, warn about behavior via `console.warn`
     *
     * @default "warn"
     */
    strict?: boolean | string | Function;
}

export class ParseError implements Error {
    constructor(message: string, lexer: any, position: number);
    name: string;
    message: string;
    position: number;
}

/**
 * Renders a TeX expression into the specified DOM element
 * @param tex A TeX expression
 * @param element The DOM element to render into
 * @param options KaTeX options
 */
export function render(tex: string, element: HTMLElement, options?: KatexOptions): void;
/**
 * Renders a TeX expression into an HTML string
 * @param tex A TeX expression
 * @param options KaTeX options
 */
export function renderToString(tex: string, options?: KatexOptions): string;
