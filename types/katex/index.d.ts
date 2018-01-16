// Type definitions for KaTeX 0.5
// Project: http://khan.github.io/KaTeX/
// Definitions by: Michael Randolph <https://github.com/mrand01>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export as namespace katex;

export interface KatexOptions {
    displayMode?: boolean;
    breakOnUnsupportedCmds?: boolean;
    errorColor?: string;
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
