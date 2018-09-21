// Type definitions for yaml 1.0
// Project: https://github.com/eemeli/yaml
// Definitions by: Ika <https://github.com/ikatyang>
//                 Colin Bradley <https://github.com/ColinBradley>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

export const defaultOptions: ParseOptions;

/**
 * May throw on error, and it may log warnings using `console.warn`.
 * It only supports input consisting of a single YAML document;
 * for multi-document support you should use `YAML.parseAllDocuments`
 * @param str Should be a string with YAML formatting.
 * @returns The value will match the type of the root value of the parsed YAML document,
 *          so Maps become objects, Sequences arrays, and scalars result in nulls, booleans, numbers and strings.
 */
export function parse(str: string, options?: ParseOptions): any;

/**
 * @returns Will always include \n as the last character, as is expected of YAML documents.
 */
export function stringify(value: any, options?: ParseOptions): string;

/**
 * Parses a single YAML.Document from the input str; used internally by YAML.parse.
 * Will include an error if str contains more than one document.
 */
export function parseDocument(
    str: string,
    options?: ParseOptions
): ast.Document;

/**
 * When parsing YAML, the input string str may consist of a stream of documents
 * separated from each other by `...` document end marker lines.
 * @returns An array of Document objects that allow these documents to be parsed and manipulated with more control.
 */
export function parseAllDocuments(
    str: string,
    options?: ParseOptions
): ast.Document[];

/**
 * YAML.createNode recursively turns objects into Map and arrays to Seq collections.
 * Its primary use is to enable attaching comments or other metadata to a value,
 * or to otherwise exert more fine-grained control over the stringified output.
 *
 * Wraps plain values in Scalar objects.
 */
export function createNode(
    value: any,
    wrapScalars?: true
): ast.MapBase | ast.SeqBase | ast.Scalar;

/**
 * YAML.createNode recursively turns objects into Map and arrays to Seq collections.
 * Its primary use is to enable attaching comments or other metadata to a value,
 * or to otherwise exert more fine-grained control over the stringified output.
 *
 * Doesn't wrap plain values in Scalar objects.
 */
export function createNode(
    value: any,
    wrapScalars: false
): ast.MapBase | ast.SeqBase | string | number | boolean | null;

export function parseCST(str: string): ParsedCST;

export interface ParsedCST extends Array<cst.Document> {
    setOrigRanges(): boolean;
}

export const Document: ast.DocumentConstructor;

export interface ParseOptions {
    /**
     * Allow non-JSON JavaScript objects to remain in the `toJSON` output.
     * Relevant with the YAML 1.1 `!!timestamp` and `!!binary` tags. By default `true`.
     */
    keepBlobsInJSON?: boolean;
    /**
     * Include references in the AST to each node's corresponding CST node. By default `false`.
     */
    keepCstNodes?: boolean;
    /**
     * Store the original node type when parsing documents. By default `true`.
     */
    keepNodeTypes?: boolean;
    /**
     * Enable support for `<<` merge keys.
     */
    merge?: boolean;
    /**
     * The base schema to use. By default `"core"` for YAML 1.2 and `"yaml-1.1"` for earlier versions.
     */
    schema?: "core" | "failsafe" | "json" | "yaml-1.1";
    /**
     * Array of additional (custom) tags to include in the schema.
     */
    tags?: Tag[] | ((tags: Tag[]) => Tag[]);
    /**
     * The YAML version used by documents without a `%YAML` directive. By default `"1.2"`.
     */
    version?: string;
}

export interface Tag {
    /**
     * A JavaScript class that should be matched to this tag, e.g. `Date` for `!!timestamp`.
     */
    class?: new () => any;
    /**
     * If `true`, the tag should not be explicitly included when stringifying.
     */
    default?: boolean;
    /**
     * If a tag has multiple forms that should be parsed and/or stringified differently, use `format` to identify them.
     */
    format?: string;
    /**
     * Used by some tags to configure their stringification, where applicable.
     */
    options?: object;
    /**
     * Should return an instance of a class extending `Node`.
     * If test is set, will be called with the resulting match as arguments.
     * Otherwise, will be called as `resolve(doc, cstNode)`.
     */
    resolve(doc: ast.Document, cstNode: cst.Node): ast.Node;
    resolve(...match: string[]): ast.Node;
    /**
     * @param item the node being stringified.
     * @param ctx contains the stringifying context variables.
     * @param onComment a function that should be called if the stringifier includes the item's comment in its output.
     */
    stringify(
        item: ast.Node,
        ctx: StringifyContext,
        onComment: () => void
    ): string;
    /**
     * The fully qualified name of the tag.
     */
    tag: string;
    /**
     * Used to match string values of scalar nodes; captured parts will be passed as arguments of `resolve()`.
     */
    test?: RegExp;
}

export interface StringifyContext {
    [key: string]: any;
}

export type YAMLError =
    | YAMLSyntaxError
    | YAMLSemanticError
    | YAMLReferenceError;

export interface YAMLSyntaxError extends SyntaxError {
    name: "YAMLSyntaxError";
    source: cst.Node;
}

export interface YAMLSemanticError extends SyntaxError {
    name: "YAMLSemanticError";
    source: cst.Node;
}

export interface YAMLReferenceError extends ReferenceError {
    name: "YAMLReferenceError";
    source: cst.Node;
}

export interface YAMLWarning extends Error {
    name: "YAMLReferenceError";
    source: cst.Node;
}

export namespace cst {
    interface Range {
        start: number;
        end: number;
        origStart?: number;
        origEnd?: number;
        isEmpty(): boolean;
    }

    interface ParseContext {
        /** Node starts at beginning of line */
        atLineStart: boolean;
        /** true if currently in a collection context */
        inCollection: boolean;
        /** true if currently in a flow context */
        inFlow: boolean;
        /** Current level of indentation */
        indent: number;
        /** Start of the current line */
        lineStart: number;
        /** The parent of the node */
        parent: Node;
        /** Source of the YAML document */
        src: string;
    }

    interface Node {
        context: ParseContext | null;
        /** if not null, indicates a parser failure */
        error: YAMLSyntaxError | null;
        /** span of context.src parsed into this node */
        range: Range | null;
        valueRange: Range | null;
        /** anchors, tags and comments */
        props: Range[];
        /** specific node type */
        type: string;
        /** if non-null, overrides source value */
        value: string | null;

        readonly anchor: string | null;
        readonly comment: string | null;
        readonly hasComment: boolean;
        readonly hasProps: boolean;
        readonly jsonLike: boolean;
        readonly rawValue: string | null;
        readonly tag:
            | null
            | { verbatim: string }
            | { handle: string; suffix: string };
        readonly valueRangeContainsNewline: boolean;
    }

    interface Alias extends Node {
        type: "ALIAS";
        /** contain the anchor without the * prefix */
        readonly rawValue: string;
    }

    type Scalar = BlockValue | PlainValue | QuoteValue;

    interface BlockValue extends Node {
        type: "BLOCK_FOLDED" | "BLOCK_LITERAL";
        chomping: "CLIP" | "KEEP" | "STRIP";
        blockIndent: number | null;
        header: Range;
        readonly strValue: string | null;
    }

    interface BlockFolded extends BlockValue {
        type: "BLOCK_FOLDED";
    }

    interface BlockLiteral extends BlockValue {
        type: "BLOCK_LITERAL";
    }

    interface PlainValue extends Node {
        type: "PLAIN";
        readonly strValue: string | null;
    }

    interface QuoteValue extends Node {
        type: "QUOTE_DOUBLE" | "QUOTE_SINGLE";
        readonly strValue:
            | null
            | string
            | { str: string; errors: YAMLSyntaxError[] };
    }

    interface QuoteDouble extends QuoteValue {
        type: "QUOTE_DOUBLE";
    }

    interface QuoteSingle extends QuoteValue {
        type: "QUOTE_SINGLE";
    }

    interface Comment extends Node {
        type: "COMMENT";
        readonly anchor: null;
        readonly comment: string;
        readonly rawValue: null;
        readonly tag: null;
    }

    interface MapItem extends Node {
        type: "MAP_KEY" | "MAP_VALUE";
        node: ContentNode | null;
    }

    interface MapKey extends MapItem {
        type: "MAP_KEY";
    }

    interface MapValue extends MapItem {
        type: "MAP_VALUE";
    }

    interface Map extends Node {
        type: "MAP";
        /** implicit keys are not wrapped */
        items: Array<Comment | Alias | Scalar | MapItem>;
    }

    interface SeqItem extends Node {
        type: "SEQ_ITEM";
        node: ContentNode | null;
    }

    interface Seq extends Node {
        type: "SEQ";
        items: Array<Comment | SeqItem>;
    }

    interface FlowChar {
        char: "{" | "}" | "[" | "]" | "," | "?" | ":";
        offset: number;
    }

    interface FlowCollection extends Node {
        type: "FLOW_MAP" | "FLOW_SEQ";
        items: Array<FlowChar | Comment | Alias | Scalar | FlowCollection>;
    }

    interface FlowMap extends FlowCollection {
        type: "FLOW_MAP";
    }

    interface FlowSeq extends FlowCollection {
        type: "FLOW_SEQ";
    }

    type ContentNode = Alias | Scalar | Map | Seq | FlowCollection;

    interface Directive extends Node {
        type: "DIRECTIVE";
        name: string;
        readonly anchor: null;
        readonly parameters: string[];
        readonly tag: null;
    }

    interface Document extends Node {
        type: "DOCUMENT";
        directives: Array<Comment | Directive>;
        contents: Array<Comment | ContentNode>;
        readonly anchor: null;
        readonly comment: null;
        readonly tag: null;
    }
}

export namespace ast {
    type AstNode = ScalarNode | MapNode | SeqNode | Alias;

    type DocumentConstructor = new (options?: ParseOptions) => Document;
    interface Document {
        type: "DOCUMENT";
        /**
         * Anchors associated with the document's nodes;
         * also provides alias & merge node creators.
         */
        anchors: Anchors;
        /**
         * A comment at the very beginning of the document.
         */
        commentBefore: null | string;
        /**
         * A comment at the end of the document.
         */
        comment: null | string;
        /**
         * only available when `keepCstNodes` is set to `true`
         */
        cstNode?: cst.Document;
        /**
         * The document contents.
         */
        contents: AstNode | null;
        /**
         * Errors encountered during parsing.
         */
        errors: YAMLError[];
        /**
         * The schema used with the document.
         */
        schema: Schema;
        /**
         * the [start, end] range of characters of the source parsed
         * into this node (undefined if not parsed)
         */
        range: null | [number, number];
        /**
         * Array of prefixes; each will have a string `handle` that
         * starts and ends with `!` and a string `prefix` that the handle will be replaced by.
         */
        tagPrefixes: Prefix[];
        /**
         * The parsed version of the source document;
         * if true-ish, stringified output will include a `%YAML` directive.
         */
        version?: string;
        /**
         * Warnings encountered during parsing.
         */
        warnings: YAMLWarning[];
        /**
         * List the tags used in the document that are not in the default `tag:yaml.org,2002:` namespace.
         */
        listNonDefaultTags(): string[];
        /**
         * Parse a CST into this document
         */
        parse(cst: cst.Document): this;
        /**
         * Set `handle` as a shorthand string for the `prefix` tag namespace.
         */
        setTagPrefix(handle: string, prefix: string): void;
        /**
         * A plain JavaScript representation of the document `contents`.
         */
        toJSON(): any;
        /**
         * A YAML representation of the document.
         */
        toString(): string;
    }

    interface Anchors {
        /**
         * Create a new `Alias` node, adding the required anchor for `node`.
         * If `name` is empty, a new anchor name will be generated.
         */
        createAlias(node: Node, name?: string): Alias;
        /**
         * Create a new `Merge` node with the given source nodes.
         * Non-`Alias` sources will be automatically wrapped.
         */
        createMergePair(...nodes: Node[]): Merge;
        /**
         * The anchor name associated with `node`, if set.
         */
        getName(node: Node): undefined | string;
        /**
         * The node associated with the anchor `name`, if set.
         */
        getNode(name: string): undefined | Node;
        /**
         * Find an available anchor name with the given `prefix` and a numerical suffix.
         */
        newName(prefix: string): string;
        /**
         * Associate an anchor with `node`. If `name` is empty, a new name will be generated.
         * To remove an anchor, use `setAnchor(null, name)`.
         */
        setAnchor(node: Node | null, name?: string): void | string;
    }

    interface Schema {
        merge: boolean;
        name: string;
        schema: Tag[];
    }

    interface Prefix {
        handle: string;
        prefix: string;
    }

    interface Node {
        /**
         * a comment on or immediately after this
         */
        comment: null | string;
        /**
         * a comment before this
         */
        commentBefore: null | string;
        /**
         * only available when `keepCstNodes` is set to `true`
         */
        cstNode?: cst.Node;
        /**
         * the [start, end] range of characters of the source parsed
         * into this node (undefined for pairs or if not parsed)
         */
        range: null | [number, number];
        /**
         * a fully qualified tag, if required
         */
        tag: null | string;
        /**
         * a plain JS representation of this node
         */
        toJSON(): any;
    }

    type ScalarConstructor = new (
        value: null | boolean | number | string
    ) => Scalar;
    interface Scalar extends Node {
        type:
            | "BLOCK_FOLDED"
            | "BLOCK_LITERAL"
            | "PLAIN"
            | "QUOTE_DOUBLE"
            | "QUOTE_SINGLE"
            | undefined;
        /**
         * By default (undefined), numbers use decimal notation.
         * The YAML 1.2 core schema only supports 'HEX' and 'OCT'.
         */
        format: "BIN" | "HEX" | "OCT" | "TIME" | undefined;
        value: null | boolean | number | string;
    }

    type ScalarNode =
        | BlockFolded
        | BlockLiteral
        | PlainValue
        | QuoteDouble
        | QuoteSingle;

    interface BlockFolded extends Scalar {
        type: "BLOCK_FOLDED";
        cstNode?: cst.BlockFolded;
    }

    interface BlockLiteral extends Scalar {
        type: "BLOCK_LITERAL";
        cstNode?: cst.BlockLiteral;
    }

    interface PlainValue extends Scalar {
        type: "PLAIN";
        cstNode?: cst.PlainValue;
    }

    interface QuoteDouble extends Scalar {
        type: "QUOTE_DOUBLE";
        cstNode?: cst.QuoteDouble;
    }

    interface QuoteSingle extends Scalar {
        type: "QUOTE_SINGLE";
        cstNode?: cst.QuoteSingle;
    }

    type PairConstructor = new (
        key: AstNode | null,
        value?: AstNode | null
    ) => Pair;
    interface Pair extends Node {
        type: "PAIR";
        /**
         * key is always Node or null when parsed, but can be set to anything.
         */
        key: AstNode | null;
        /**
         * value is always Node or null when parsed, but can be set to anything.
         */
        value: AstNode | null;
        cstNode?: never; // no corresponding cstNode
    }

    type MapConstructor = new () => MapBase;
    interface MapBase extends Node {
        type: "FLOW_MAP" | "MAP" | undefined;
        items: Array<Pair | Merge>;
    }

    type MapNode = FlowMap | Map;

    interface FlowMap extends MapBase {
        type: "FLOW_MAP";
        cstNode?: cst.FlowMap;
    }

    interface Map extends MapBase {
        type: "MAP";
        cstNode?: cst.Map;
    }

    type SeqConstructor = new () => SeqBase;
    interface SeqBase extends Node {
        type: "FLOW_SEQ" | "SEQ" | undefined;
        /**
         * item is always Node or null when parsed, but can be set to anything.
         */
        items: Array<AstNode | Pair | null>;
    }

    type SeqNode = FlowSeq | Seq;

    interface FlowSeq extends SeqBase {
        type: "FLOW_SEQ";
        items: Array<AstNode | Pair>;
        cstNode?: cst.FlowSeq;
    }

    interface Seq extends SeqBase {
        type: "SEQ";
        items: Array<AstNode | null>;
        cstNode?: cst.Seq;
    }

    interface Alias extends Node {
        type: "ALIAS";
        source: AstNode;
        cstNode?: cst.Alias;
    }

    interface Merge extends Node {
        type: "MERGE_PAIR";
        /**
         * key is always Scalar('<<'), defined by the type specification
         */
        key: PlainValue;
        /**
         * value is always Seq<Alias(Map)>, stringified as *A if length = 1
         */
        value: SeqBase;
        cstNode?: cst.PlainValue;
    }
}
