// Type definitions for JS2Coffee 2.2
// Project: https://github.com/js2coffee/js2coffee
// Definitions by: Munin M. <https://github.com/SNDST00M>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 4.1

import * as estree from "estree";

declare namespace sourceMap {
    // Type definitions for source-map 0.7
    // Project: https://github.com/mozilla/source-map
    type SourceMapUrl = string;

    interface StartOfSourceMap {
        (): {};
        file?: string;
        sourceRoot?: string;
        skipValidation?: boolean;
    }

    interface RawSourceMap {
        version: number;
        sources: string[];
        names: string[];
        sourceRoot?: string;
        sourcesContent?: string[];
        mappings: string;
        file: string;
    }

    interface RawIndexMap extends StartOfSourceMap {
        version: number;
        sections: RawSection[];
    }

    interface RawSection {
        offset: Position;
        map: RawSourceMap;
    }

    interface Position {
        line: number;
        column: number;
    }

    interface NullablePosition {
        line: number | null;
        column: number | null;
        lastColumn: number | null;
    }

    interface MappedPosition {
        source: string;
        line: number;
        column: number;
        name?: string;
    }

    interface NullableMappedPosition {
        source: string | null;
        line: number | null;
        column: number | null;
        name: string | null;
    }

    interface MappingItem {
        source: string;
        generatedLine: number;
        generatedColumn: number;
        lastGeneratedColumn: number | null;
        originalLine: number;
        originalColumn: number;
        name: string;
    }

    interface Mapping {
        generated: Position;
        original: Position;
        source: string;
        name?: string;
    }

    interface CodeWithSourceMap {
        code: string;
        map: SourceMapGenerator;
    }

    interface SourceMappings {
        "lib/mappings.wasm": SourceMapUrl | ArrayBuffer;
    }

    interface SourceMapConsumer {
        /**
         * When using SourceMapConsumer outside of node.js, for example on the Web, it
         * needs to know from what URL to load lib/mappings.wasm. You must inform it
         * by calling initialize before constructing any SourceMapConsumers.
         *
         * @param mappings an object with the following property:
         *   - "lib/mappings.wasm": A String containing the URL of the
         *     lib/mappings.wasm file, or an ArrayBuffer with the contents of
         *     lib/mappings.wasm.
         */
        initialize(mappings: SourceMappings): void;

        /**
         * Compute the last column for each generated mapping. The last column is
         * inclusive.
         */
        computeColumnSpans(): void;

        /**
         * Returns the original source, line, and column information for the generated
         * source's line and column positions provided. The only argument is an object
         * with the following properties:
         *
         *   - line: The line number in the generated source.
         *   - column: The column number in the generated source.
         *   - bias: Either 'SourceMapConsumer.GREATEST_LOWER_BOUND' or
         *     'SourceMapConsumer.LEAST_UPPER_BOUND'. Specifies whether to return the
         *     closest element that is smaller than or greater than the one we are
         *     searching for, respectively, if the exact element cannot be found.
         *     Defaults to 'SourceMapConsumer.GREATEST_LOWER_BOUND'.
         *
         * and an object is returned with the following properties:
         *
         *   - source: The original source file, or null.
         *   - line: The line number in the original source, or null.
         *   - column: The column number in the original source, or null.
         *   - name: The original identifier, or null.
         */
        originalPositionFor(
            generatedPosition: Position & { bias?: number }
        ): NullableMappedPosition;

        /**
         * Returns the generated line and column information for the original source,
         * line, and column positions provided. The only argument is an object with
         * the following properties:
         *
         *   - source: The filename of the original source.
         *   - line: The line number in the original source.
         *   - column: The column number in the original source.
         *   - bias: Either 'SourceMapConsumer.GREATEST_LOWER_BOUND' or
         *     'SourceMapConsumer.LEAST_UPPER_BOUND'. Specifies whether to return the
         *     closest element that is smaller than or greater than the one we are
         *     searching for, respectively, if the exact element cannot be found.
         *     Defaults to 'SourceMapConsumer.GREATEST_LOWER_BOUND'.
         *
         * and an object is returned with the following properties:
         *
         *   - line: The line number in the generated source, or null.
         *   - column: The column number in the generated source, or null.
         */
        generatedPositionFor(
            originalPosition: MappedPosition & { bias?: number }
        ): NullablePosition;

        /**
         * Returns all generated line and column information for the original source,
         * line, and column provided. If no column is provided, returns all mappings
         * corresponding to a either the line we are searching for or the next
         * closest line that has any mappings. Otherwise, returns all mappings
         * corresponding to the given line and either the column we are searching for
         * or the next closest column that has any offsets.
         *
         * The only argument is an object with the following properties:
         *
         *   - source: The filename of the original source.
         *   - line: The line number in the original source.
         *   - column: Optional. the column number in the original source.
         *
         * and an array of objects is returned, each with the following properties:
         *
         *   - line: The line number in the generated source, or null.
         *   - column: The column number in the generated source, or null.
         */
        allGeneratedPositionsFor(
            originalPosition: MappedPosition
        ): NullablePosition[];

        /**
         * Return true if we have the source content for every source in the source
         * map, false otherwise.
         */
        hasContentsOfAllSources(): boolean;

        /**
         * Returns the original source content. The only argument is the url of the
         * original source file. Returns null if no original source content is
         * available.
         */
        sourceContentFor(
            source: string,
            returnNullOnMissing?: boolean
        ): string | null;

        /**
         * Iterate over each mapping between an original source/line/column and a
         * generated line/column in this source map.
         *
         * @param callback
         *        The function that is called with each mapping.
         * @param context
         *        Optional. If specified, this object will be the value of `this` every
         *        time that `aCallback` is called.
         * @param order
         *        Either `SourceMapConsumer.GENERATED_ORDER` or
         *        `SourceMapConsumer.ORIGINAL_ORDER`. Specifies whether you want to
         *        iterate over the mappings sorted by the generated file's line/column
         *        order or the original's source/line/column order, respectively. Defaults to
         *        `SourceMapConsumer.GENERATED_ORDER`.
         */
        eachMapping(
            callback: (mapping: MappingItem) => void,
            context?: any,
            order?: number
        ): void;
        /**
         * Free this source map consumer's associated wasm data that is manually-managed.
         * Alternatively, you can use SourceMapConsumer.with to avoid needing to remember to call destroy.
         */
        destroy(): void;
    }

    interface SourceMapConsumer {
        prototype: SourceMapConsumer;

        GENERATED_ORDER: number;
        ORIGINAL_ORDER: number;
        GREATEST_LOWER_BOUND: number;
        LEAST_UPPER_BOUND: number;

        new(
            rawSourceMap: RawSourceMap,
            sourceMapUrl?: SourceMapUrl
        ): Promise<BasicSourceMapConsumer>;
        new(
            rawSourceMap: RawIndexMap,
            sourceMapUrl?: SourceMapUrl
        ): Promise<IndexedSourceMapConsumer>;
        new(
            rawSourceMap: RawSourceMap | RawIndexMap | string,
            sourceMapUrl?: SourceMapUrl
        ): Promise<BasicSourceMapConsumer | IndexedSourceMapConsumer>;

        /**
         * Create a BasicSourceMapConsumer from a SourceMapGenerator.
         *
         * @param sourceMap
         *        The source map that will be consumed.
         */
        fromSourceMap(
            sourceMap: SourceMapGenerator,
            sourceMapUrl?: SourceMapUrl
        ): Promise<BasicSourceMapConsumer>;

        /**
         * Construct a new `SourceMapConsumer` from `rawSourceMap` and `sourceMapUrl`
         * (see the `SourceMapConsumer` constructor for details. Then, invoke the `async
         * function f(SourceMapConsumer) -> T` with the newly constructed consumer, wait
         * for `f` to complete, call `destroy` on the consumer, and return `f`'s return
         * value.
         *
         * You must not use the consumer after `f` completes!
         *
         * By using `with`, you do not have to remember to manually call `destroy` on
         * the consumer, since it will be called automatically once `f` completes.
         *
         * ```js
         * const xSquared = await SourceMapConsumer.with(
         *   myRawSourceMap,
         *   null,
         *   async function (consumer) {
         *     // Use `consumer` inside here and don't worry about remembering
         *     // to call `destroy`.
         *
         *     const x = await whatever(consumer);
         *     return x * x;
         *   }
         * );
         *
         * // You may not use that `consumer` anymore out here; it has
         * // been destroyed. But you can use `xSquared`.
         * console.log(xSquared);
         * ```
         */
        with<T>(
            rawSourceMap: RawSourceMap | RawIndexMap | string,
            sourceMapUrl: SourceMapUrl | null | undefined,
            callback: (
                consumer: BasicSourceMapConsumer | IndexedSourceMapConsumer
            ) => Promise<T> | T
        ): Promise<T>;
    }

    interface BasicSourceMapConsumer extends SourceMapConsumer {
        file: string;
        sourceRoot: string;
        sources: string[];
        sourcesContent: string[];
    }

    interface BasicSourceMapConsumer {
        prototype: BasicSourceMapConsumer;

        new(rawSourceMap: RawSourceMap | string): Promise<BasicSourceMapConsumer>;

        /**
         * Create a BasicSourceMapConsumer from a SourceMapGenerator.
         *
         * @param sourceMap
         *        The source map that will be consumed.
         */
        fromSourceMap(sourceMap: SourceMapGenerator): Promise<BasicSourceMapConsumer>;
    }

    interface IndexedSourceMapConsumer extends SourceMapConsumer {
        sources: string[];
    }

    interface IndexedSourceMapConsumer {
        prototype: IndexedSourceMapConsumer;

        new(rawSourceMap: RawIndexMap | string): Promise<IndexedSourceMapConsumer>;
    }

    class SourceMapGenerator {
        constructor(startOfSourceMap?: StartOfSourceMap);

        /**
         * Creates a new SourceMapGenerator based on a SourceMapConsumer
         *
         * @param sourceMapConsumer The SourceMap.
         */
        static fromSourceMap(sourceMapConsumer: SourceMapConsumer): SourceMapGenerator;

        /**
         * Add a single mapping from original source line and column to the generated
         * source's line and column for this source map being created. The mapping
         * object should have the following properties:
         *
         *   - generated: An object with the generated line and column positions.
         *   - original: An object with the original line and column positions.
         *   - source: The original source file (relative to the sourceRoot).
         *   - name: An optional original token name for this mapping.
         */
        addMapping(mapping: Mapping): void;

        /**
         * Set the source content for a source file.
         */
        setSourceContent(sourceFile: string, sourceContent: string): void;

        /**
         * Applies the mappings of a sub-source-map for a specific source file to the
         * source map being generated. Each mapping to the supplied source file is
         * rewritten using the supplied source map. Note: The resolution for the
         * resulting mappings is the minimium of this map and the supplied map.
         *
         * @param sourceMapConsumer The source map to be applied.
         * @param sourceFile Optional. The filename of the source file.
         *        If omitted, SourceMapConsumer's file property will be used.
         * @param sourceMapPath Optional. The dirname of the path to the source map
         *        to be applied. If relative, it is relative to the SourceMapConsumer.
         *        This parameter is needed when the two source maps aren't in the same
         *        directory, and the source map to be applied contains relative source
         *        paths. If so, those relative source paths need to be rewritten
         *        relative to the SourceMapGenerator.
         */
        applySourceMap(sourceMapConsumer: SourceMapConsumer, sourceFile?: string, sourceMapPath?: string): void;

        toString(): string;

        toJSON(): RawSourceMap;
    }

    class SourceNode {
        children: SourceNode[];
        sourceContents: any;
        line: number;
        column: number;
        source: string;
        name: string;

        constructor(
            line?: number | null,
            column?: number | null,
            source?: string | null,
            chunks?: Array<string | SourceNode> | SourceNode | string,
            name?: string
        );

        static fromStringWithSourceMap(
            code: string,
            sourceMapConsumer: SourceMapConsumer,
            relativePath?: string
        ): SourceNode;

        add(chunk: Array<string | SourceNode> | SourceNode | string): SourceNode;

        prepend(chunk: Array<string | SourceNode> | SourceNode | string): SourceNode;

        setSourceContent(sourceFile: string, sourceContent: string): void;

        walk(fn: (chunk: string, mapping: MappedPosition) => void): void;

        walkSourceContents(fn: (file: string, content: string) => void): void;

        join(sep: string): SourceNode;

        replaceRight(pattern: string, replacement: string): SourceNode;

        toString(): string;

        toStringWithSourceMap(startOfSourceMap?: StartOfSourceMap): CodeWithSourceMap;
    }
}

/**
 * JS2Coffee API.
 *
 * @param {string} source JavaScript code to compile. In order to compile JSON as CSON, you must wrap the string in
 * parentheses like so: `(...)`.
 * @param {Options} [options] JS2Coffee compiler options.
 * @param {boolean} [options.bare=false] Whether to omit a top-level IIFE safety wrapper.
 * @param {boolean} [options.comments=true] Whether to keep comments in the output.
 * @param {boolean} [options.compat=false] Compatibility mode with JS.
 * @param {string} [options.filename=index.js] File name for JS script to compile to CoffeeScript.
 * @param {number} [options.indent=2] Indentation character(s) used in the compiler output.
 * @param {string} [options.source] The source code itself - always overwritten by
 * `source`.
 * @returns {string} Compiled CoffeeScript code.
 */
declare function js2coffee(source: string, options?: js2coffee.Options): string;

declare namespace js2coffee {

	/**
	 * @param {string} source JavaScript code to compile. In order to compile JSON as CSON, you must wrap the string in
	 * parentheses like so: `(...)`.
	 * @param {Options} [options] JS2Coffee compiler options.
	 * @param {boolean} [options.bare=false] Whether to omit a top-level IIFE safety wrapper.
	 * @param {boolean} [options.comments=true] Whether to keep comments in the output.
	 * @param {boolean} [options.compat=false] Compatibility mode with JS.
	 * @param {string} [options.filename=index.js] File name for JS script to compile to CoffeeScript.
	 * @param {number} [options.indent=2] Indentation character(s) used in the compiler output.
	 * @param {string} [options.source] The source code itself - always overwritten by
	 * `source`.
	 * @returns {Build} Build output in CoffeeScript.
	 */
	function build(source: string, options?: js2coffee.Options): js2coffee.Build;

	/**
	 * Compiles JavaScript into a ESTree-style CoffeeScript AST. The AST has the following custom types exclusive to
	 * JS2Coffee:
	 * - `CoffeeDoExpression`
	 * - `CoffeeEscapedExpression`
	 * - `CoffeeListExpression`
	 * - `CoffeeLoopStatement`
	 * - `CoffeePrototypeExpression`
	 *
	 * @param {string} source JavaScript code to compile. In order to compile JSON as CSON,
	 * you must wrap the string in parentheses like so: `(...)`.
	 * @param {Options} [options] JS2Coffee compiler options.
	 * @param {boolean} [options.bare=false] Whether to omit a top-level IIFE safety wrapper.
	 * @param {boolean} [options.comments=true] Whether to keep comments in the output.
	 * @param {boolean} [options.compat=false] Compatibility mode with JS.
	 * @param {string} [options.filename=index.js] File name for JS script to compile to CoffeeScript.
	 * @param {number} [options.indent=2] Indentation character(s) used in the compiler output.
	 * @param {string} [options.source] The source code itself - always overwritten by
	 * `source`.
	 * @returns {AST} JavaScript AST in ESTree format.
	 */
	function parseJS(source: string, options?: js2coffee.Options): js2coffee.AST;

	/**
	 * Mutates the `ast` JavaScript syntax tree into a CoffeeScript AST transform.
	 *
	 * @param {AST} JavaScript AST in ESTree format.
	 * @param {Options} [options] JS2Coffee compiler options.
	 * @param {boolean} [options.bare=false] Whether to omit a top-level IIFE safety wrapper.
	 * @param {boolean} [options.comments=true] Whether to keep comments in the output.
	 * @param {boolean} [options.compat=false] Compatibility mode with JS.
	 * @param {string} [options.filename=index.js] File name for JS script to compile to CoffeeScript.
	 * @param {number} [options.indent=2] Indentation character(s) used in the compiler output.
	 * @param {string} [options.source] The source code itself - always overwritten by
	 * `source`.
	 * @returns {Transform} Abstract syntax tree for post-transform CoffeeScript.
	 */
	function transform(ast: js2coffee.AST, options?: js2coffee.Options): js2coffee.Transform;

	/**
	 * Generates a CoffeeScript `CodeWithSourceMap` instance from a given CoffeeScript transform.
	 *
	 * @param {AST} ast Transformed CoffeeScript AST in ESTree format.
	 * @param {Options} [options] JS2Coffee compiler options.
	 * @param {boolean} [options.bare=false] Whether to omit a top-level IIFE safety wrapper.
	 * @param {boolean} [options.comments=true] Whether to keep comments in the output.
	 * @param {boolean} [options.compat=false] Compatibility mode with JS.
	 * @param {string} [options.filename=index.js] File name for JS script to compile to CoffeeScript.
	 * @param {number} [options.indent=2] Indentation character(s) used in the compiler output.
	 * @param {string} [options.source] The source code itself - always overwritten by
	 * `source`.
	 * @returns {CodeWithSourceMap} CoffeeScript output as a `CodeWithSourceMap` object.
	 */
	function generate(ast: js2coffee.Transform, options?: js2coffee.Options): sourceMap.CodeWithSourceMap;

	/**
	 * Version number. Type defintions are written for JS2Coffee v1.9.2.
	 */
	let version: string;

	/**
	 * Collection of helper functions used to parse JavaScript in JS2Coffee.
	 */
	let helpers: js2coffee.Helpers;

	/**
	 * ESTree node types for CoffeeScript AST nodes in `AST` body.
	 *
	 * @type {string} String prefixed with `"Coffee"`.
	 */
	type CoffeeNodeType = (
		| "CoffeeDoExpression"
		| "CoffeeEscapedExpression"
		| "CoffeeListExpression"
		| "CoffeeLoopStatement"
		| "CoffeePrototypeExpression"
	);

	/**
	 * Custom ESTree-style node used to define CoffeeScript in JS2Coffee ASTs.
	 *
	 * @extends {estree.Node}
	 */
	interface CustomNode extends Omit<estree.Node, "type"> {
		type: js2coffee.CoffeeNodeType;
	}

	/**
	 * JS2Coffee compiler options.
	 *
	 * `source` parameter.
	 */
	interface Options {
		bare?: boolean;
		comments?: boolean;
		compat?: boolean;
		filename?: string;
		indent?: number;
		source?: string;
	}

	/**
	 * Custom ESTree-style node used to define converted CoffeeScript nodes JS2Coffee ASTs.
	 *
	 * @extends {estree.Node}
	 */
	interface CoffeeNode extends Omit<estree.Node, "type"> {
		type: estree.Node["type"] | js2coffee.CoffeeNodeType;
	}

	/**
	 * Generic compilation error in JS2Coffee.
	 *
	 */
	interface CompileError extends Error {
		description: string;
		end: {
			line: number;
			column: number;
		};
		start: {
			line: number;
			column: number;
		};
	}

	/**
	 * Esprima-style error thrown by JS2Coffee.
	 *
	 */
	interface EsprimaStyleError {
		column: number;
		description: string;
		lineNumber: number;
	}

	/**
	 * JavaScript syntax error thrown by JS2Coffee compiler.
	 *
	 * @extends Error
	 */
	interface SyntaxProblem extends CompileError {
		filename: string;
		js2coffee: true;
		sourcePreview: string[];
	}

	/**
	 * Collection of helper functions used to parse JavaScript in JS2Coffee.
	 */
	interface Helpers {
		/**
		 * Reserved words taken from COFFEE_KEYWORDS (lexer.coffee).
		 * We don't check for "undefined" because it"s already explicitly
		 * accounted for elsewhere.
		 */
		reserved: {
			keywords: string[];
			reserved: string[];
			aliases: string[];
		};
		reservedWords: string[];
		/**
		 * Builds a syntax error message.
		 *
		 * @param err Error to convert into syntax error.
		 * @param source Source code that threw the JS2Coffee compiler error
		 * @param file File name including extension.
		 */
		buildError(
			err: js2coffee.CompileError | js2coffee.EsprimaStyleError,
			source: string,
			file: string
		): js2coffee.SyntaxProblem;
		/**
		 * Duplicates all primitive members of an object recursively.
		 *
		 * @param {object} obj Object to clone.
		 * @returns Deep copy of object.
		 */
		clone(obj: object): object;
		/**
		 * Turns an array of strings into a comma-separated list.
		 * Takes new lines into account.
		 *
		 * @param list Array of elements to join with `,`.
		 * @returns Array with elements separated by `,`.
		 */
		commaDelimit(list: string[]): string[];
		/**
		 * Intersperses `joiner` into `list`.
		 * Used for things like adding indentations.
		 *
		 * @param list Array of elements to be joined by `joiner`.
		 * @param joiner Element to insert between each element of `list`.
		 */
		delimit(list: any[], joiner: any): any[];
		/**
		 * Escapes JS that cannot be converted to CoffeeScript.
		 *
		 * @param {Node} node Unconvertable node.
		 * @returns {CoffeeNode} Node with type "CoffeeEscapedExpression".
		 */
		escapeJs(node: estree.Node): js2coffee.CoffeeNode & { type: "CoffeeEscapedExpression" };
		/**
		 * Inspect a ESTree node for debugging.
		 *
		 * @param node Node to inspect.
		 * @returns String representation bounded by `~~~~`.
		 */
		inspect(node: estree.BaseNode): `~~~~\n${string}\n~~~~`;
		/**
		 * ESTree comment node assertion.
		 *
		 * @param {BaseNode} node Node to apply test to.
		 * @returns {boolean} Whether the ESTree node is a comment.
		 */
		isComment(node: estree.BaseNode): boolean;
		/**
		 * ESTree infinite loop node assertion.
		 *
		 * @param {BaseNode} node Node to apply test to.
		 * @returns {boolean} Whether the ESTree node is a infinite loop.
		 */
		isLoop(node: estree.BaseNode): boolean;
		/**
		 * ESTree "truthy" node assertion.
		 * A node is truthy when it has a "Literal" type and a value.
		 *
		 * @param {BaseNode} node Node to apply test to.
		 * @returns {boolean} Whether the ESTree node is a "truthy" node.
		 */
		isTruthy(node: estree.BaseNode): boolean;
		/**
		 * Returns the final return statements in a body.
		 *
		 * @param body AST colleciton of nodes describing a program.
		 * @returns Array of ESTree nodes for final return statement or empty array.
		 */
		getReturnStatements(body: estree.BaseNode[]): estree.BaseNode[] | [];
		/**
		 * Returns the precedence level of a ESTree operator node.
		 * If a node"s precedence level is greater than its parent, it has to be
		 * parenthesized.
		 *
		 * @param node ESTree operator node.
		 * @returns Precedence level.
		 */
		getPrecedence(node: estree.BaseNode): number;
		joinLines(props: string[], indent: string): string[];
		/**
		 * Get the last statement in a program.
		 *
		 * @param body AST colleciton of nodes describing a program.
		 * @returns Last non-comment node in a program.
		 */
		lastStatement(body: estree.BaseNode[]): estree.BaseNode;
		/**
		 * Appends a new line to a given SourceNode (what `walk()` returns). If it
		 * already ends in a newline, it is left alone.
		 *
		 * @param srcnode Either a ESTree node or a node array terminating with `\n`.
		 * @returns ESTree node array terminating with `\n`.
		 */
		newline(srcnode: estree.BaseNode | [estree.BaseNode, "\n"]): [estree.BaseNode, "\n"];
		/**
		 * Get the next ESTree node after `node` that is not a comment
		 *
		 * @param body AST colleciton of nodes describing a program.
		 * @param node Current node in JS2Coffee stack.
		 * @returns Next non-comment stack, if one is available.
		 */
		nextNonComment(body: estree.BaseNode[], node: estree.BaseNode): estree.BaseNode | undefined;
		/**
		 * Iterate to the next ESTree node until `fn` returns true.
		 *
		 * @param body AST colleciton of nodes describing a program.
		 * @param node Current node in JS2Coffee stack.
		 * @returns Next ESTree node that passes the `fn` callback.
		 */
		nextUntil(body: estree.BaseNode[], node: estree.BaseNode, fn: (n: estree.BaseNode) => boolean): estree.BaseNode | undefined;
		/**
		 * Prepends every item in the `list` with a given `prefix`.
		 *
		 * @param list Array of elements.
		 * @param prefix Prefix to insert before every element.
		 * @returns Array with all elements preceded by `prefix`.
		 */
		prependAll(list: any[], prefix: any): any[];
		/**
		 * Quotes a string or primitive with single quotes.
		 *
		 * @param {any} str String to quote.
		 */
		quote(str: any): string;
		/**
		 * Fabricates a replacement node for `node` that maintains the same source
		 * location.
		 *
		 * @param node Prevous node.
		 * @param {SourceLocation} node.loc Previous node"s location (preserved in output).
		 * @param {number[]} node.range Previous node"s character range (preserved in output).
		 * @param newNode New ESTree node with a specified `type` and `name`.
		 * @param {string} newNode.type ESTree or JS2Coffee type for the new node.
		 * @param {string} newNode.name Name of the new node.
		 * @returns Newly typed and named node with previous source location.
		 */
		replace(node: estree.BaseNode, newNode: estree.BaseNode): estree.BaseNode;
		/**
		 * Delimit using spaces. This also accounts for times where one of the
		 * statements begin with a new line, such as in the case of function
		 * expressions and object expressions.
		 *
		 * @param {string[]} list Array of code tokens.
		 * @returns Array of code tokens separated by spaces.
		 */
		space(list: string[]): string[];
		/**
		 * Convert identifier, custom character or indentation level into indent.
		 *
		 * @param ind Either "tab", "t", custom character or indentation level.
		 * @returns Indentation character sequence (character default: ` `).
		 */
		toIndent(ind: "tab" | "t" | string | number): string;
	}

	/**
	 * Collection of syntax warnings to return to user (may be empty).
	 */
	type Warnings = js2coffee.SyntaxProblem[] | [];

	/**
	 * Abstract syntax tree for CoffeeScript file.
	 *
	 */
	interface AST extends Omit<estree.Program, "body"> {
		body: js2coffee.CoffeeNode[];
	}

	/**
	 * Abstract syntax tree for post-transform CoffeeScript.
	 *
	 */
	interface Transform {
		ast: js2coffee.AST;
		warnings: js2coffee.Warnings;
	}

	/**
	 * Build output for JS code compiled to CoffeeScript.
	 *
	 * (see `CodeWithSourceMap` definition in `source-map`).
	 */
	interface Build {
		ast: js2coffee.AST;
		code: string;
		map: sourceMap.CodeWithSourceMap;
		warnings: Warnings;
	}
}

export = js2coffee;
