// Type definitions for es-module-lexer 0.3
// Project: https://github.com/guybedford/es-module-lexer
// Definitions by: Tiger Oakes <https://github.com/NotWoods>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface ImportSpecifier {
    /**
     * Start of module specifier
     * @example
     * const source = `import { a } from 'asdf'`;
     * const [imports, exports] = parse(source);
     * source.substring(imports[0].s, imports[0].e);
     * // Returns "asdf"
     */
    s: number;
    /**
     * End of module specifier
     */
    e: number;

    /**
     * Start of import statement
     * @example
     * const source = `import { a } from 'asdf'`;
     * const [imports, exports] = parse(source);
     * source.substring(imports[0].s, imports[0].e);
     * // Returns "import { a } from 'asdf';"
     */
    ss: number;
    /**
     * End of import statement
     */
    se: number;

    /**
     * If this import statement is a dynamic import, this is the start value.
     * Otherwise this is `-1`.
     */
    d: number;
}

/**
 * Wait for init to resolve before calling `parse`.
 */
export const init: Promise<void>;

/**
 * Outputs the list of exports and locations of import specifiers,
 * including dynamic import and import meta handling.
 * @param source Source code to parser
 * @param name Optional sourcename
 * @returns Tuple contaning imports list and exports list.
 */
export function parse(source: string, name?: string): [ImportSpecifier[], string[]];
