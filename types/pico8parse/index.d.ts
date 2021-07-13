// Type definitions for pico8parse 0.3
// Project: https://pictelm.github.io/pico8parse/
// Definitions by: Grenier Célestin <https://github.com/PictElm>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/*-
    Definitions are strongly based on the original `@types/luaparse`
    written for luaparse (https://oxyc.github.io/luaparse/) by:
        Sam Saint-Pettersen <https://github.com/stpettersens>
        thomasfn <https://github.com/thomasfn>
        Teoxoy <https://github.com/teoxoy>
        Zaoqi <https://github.com/zaoqi>
 */

import ast, { Chunk, Identifier, Token } from './lib/ast';

export * from './lib/ast';
export { ast };

export type LuaVersion = '5.1' | '5.2' | '5.3' | 'LuaJIT' | 'PICO-8' | 'PICO-8-0.2.1' | 'PICO-8-0.2.2';

export interface Options {
    /** Explicitly tell the parser when the input ends. */
    wait: boolean;
    /** Store comments as an array in the chunk object. */
    comments: boolean;
    /** Track identifier scopes. */
    scope: boolean;
    /** Store location information on each syntax node. */
    locations: boolean;
    /** Store the start and end character locations on each syntax node. */
    ranges: boolean;
    /**
     * A callback which will be invoked when a syntax node has been completed.
     * The node which has been created will be passed as the only parameter.
     */
    onCreateNode: (node: Node) => void;
    /** A callback which will be invoked when a new scope is created. */
    onCreateScope: () => void;
    /** A callback which will be invoked when the current scope is destroyed. */
    onDestroyScope: () => void;
    /**
     * A callback which will be invoked when a local variable is declared.
     * The identifier will be passed as the only parameter.
     */
    onLocalDeclaration: (identifier: Identifier) => void;
    /**
     * The version of Lua the parser will target; supported values are '5.1', '5.2', '5.3',
     * 'LuaJIT', 'PICO-8', 'PICO-8-0.2.1' and 'PICO-8-0.2.2'.
     */
    luaVersion: LuaVersion;
    /**
     * Whether to allow code points ≥ U+0080 in identifiers, like LuaJIT does.
     * See 'Note on character encodings' below if you wish to use this option.
     * Note: setting luaVersion: 'LuaJIT' currently does not enable this option; this may change in the future.
     */
    extendedIdentifiers: false;
    /**
     * Defines the relation between code points ≥ U+0080 appearing in parser input and raw bytes in source code,
     * and how Lua escape sequences in JavaScript strings should be interpreted.
     * See the Encoding modes section https://github.com/fstirlitz/luaparse#encoding-modes for more information.
     */
    encodingMode: "pseudo-latin1" | "x-user-defined" | "none";
    /**
     * This option should be reserved for testing but may be use if needed;
     * it overrides the `strictP8FileFormat` feature, making it possible to parse
     * snippets lacking the proper header and sections
     */
    ignoreStrictP8FileFormat: boolean;
}

export interface Parser {
    version: string;
    /**
     * As this parser is a bit different from Lua's own, the error messages
     * will be different in some situations.
     *
     * This maps from an error key to a user-friendly string describing the error.
     * Each string may contain "%n" sequences to be interpolated with error-dependent
     * contextual information (n is an integer, counting from 1).
     */
    errors: Record<string, string>;

    /**
     * The main parser.
     * @example
     * var parser = require('pico8parse');
     * parser.parse('i = 0');
     */
    parse(code: string, options: Partial<Options> & { wait: true }): Parser;
    parse(code: string, options?: Partial<Options>): Chunk;
    parse(options?: Partial<Options>): Parser;
    /** Write to the source code buffer without beginning the parse. */
    write(segment: string): Parser;
    /** Send an EOF and begin parsing. */
    end(segment: string): Chunk;
    /**
     * The lexer, or the tokenizer reads the input string character by character
     * and derives a token left-right. To be as efficient as possible the lexer
     * prioritizes the common cases such as identifiers. It also works with
     * character codes instead of characters as string comparisons was the
     * biggest bottleneck of the parser.
     *
     * If `options.comments` is enabled, all comments encountered will be stored
     * in an array which later will be appended to the chunk object. If disabled,
     * they will simply be disregarded.
     *
     * When the lexer has derived a valid token, it will be returned as an object
     * containing its value and as well as its position in the input string (this
     * is always enabled to provide proper debug messages).
     *
     * `lex()` starts lexing and returns the following token in the stream.
     */
    lex(): Token;

    defaultOptions: Omit<Options, 'extendedIdentifiers'>;
    versionFeatures: Record<LuaVersion, boolean>;
}

/**
 * This is temporary and may be changed
 *
 * prefer instanceof checking against this rather than the engine built-in SyntaxError
 * (see https://github.com/fstirlitz/luaparse/releases/tag/v0.3.1 and #67)
 */
export class SyntaxError extends Error {}

declare const parser: Parser;
export default parser;
