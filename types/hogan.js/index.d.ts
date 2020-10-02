// Type definitions for hogan.js 3.0
// Project: http://twitter.github.com/hogan.js/
// Definitions by: Andrew Leedham <https://github.com/AndrewLeedham>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

export interface Context {
    [key: string]: any;
}

export interface SectionTags {
    o: string;
    c: string;
}

export interface HoganOptions {
    asString?: boolean;
    sectionTags?: ReadonlyArray<SectionTags>;
    delimiters?: string;
    disableLambda?: boolean;
}

export interface Token {
    tag: string;
    otag?: string;
    ctag?: string;
    i?: number;
    n?: string;
    text?: string;
}

export interface Leaf extends Token {
    end: number;
    nodes: Token[];
}

export type Tree = Leaf[];

export interface Partials {
    [symbol: string]: HoganTemplate;
}
declare class HoganTemplate {
    /**
     * Renders the template to a string.
     *
     * @param context - The data to render the template with.
     * @param partials - The partials to render the template with.
     * @param indent - The string to indent when rendering the template.
     * @returns A rendered template.
     */
    render(context: Context, partials?: Partials, indent?: string): string;
}

export { HoganTemplate as Template, HoganTemplate as template };

export function compile(
    text: string,
    options?: HoganOptions & { asString: false }
): HoganTemplate;
export function compile(
    text: string,
    options?: HoganOptions & { asString: true }
): string;
/**
 * Compiles templates to HoganTemplate objects, which have a render method.
 *
 * @param text - Raw mustache string to compile.
 * @param options - Options to use when compiling. See https://github.com/twitter/hogan.js#compilation-options.
 * @returns A HoganTemplate.
 */
export function compile(
    text: string,
    options?: HoganOptions
): HoganTemplate | string;
/**
 * Scans templates returning an array of found tokens.
 *
 * @param text - Raw mustache string to scan.
 * @param delimiters - A string that overrides the default delimiters. Example: "<% %>".
 * @returns Found tokens.
 */
export function scan(text: string, delimiters?: string): Token[];
/**
 * Structures tokens into a tree.
 *
 * @param tokens - An array of scanned tokens.
 * @param text - Unused pass undefined.
 * @param options - Options to use when parsing. See https://github.com/twitter/hogan.js#compilation-options.
 * @returns The tree structure of the given tokens.
 */
export function parse(
    tokens: ReadonlyArray<Token>,
    text?: undefined,
    options?: HoganOptions
): Tree;
