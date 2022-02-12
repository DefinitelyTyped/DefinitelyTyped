// Type definitions for prosemirror-model 1.16
// Project: https://github.com/ProseMirror/prosemirror-model
// Definitions by: Bradley Ayers <https://github.com/bradleyayers>
//                 David Hahn <https://github.com/davidka>
//                 Tim Baumann <https://github.com/timjb>
//                 Malte Blanken <https://github.com/neknalb>
//                 Patrick Simmelbauer <https://github.com/patsimm>
//                 Anthony Weston <https://github.com/AnthonyWeston>
//                 Martin Staffa <https://github.com/Narretz>
//                 Ocavue <https://github.com/ocavue>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import OrderedMap = require('orderedmap');

/**
 * Instances of this class represent a match state of a node
 * type's [content expression](#model.NodeSpec.content), and can be
 * used to find out whether further content matches here, and whether
 * a given position is a valid end of the node.
 */
export class ContentMatch<S extends Schema = any> {
    /**
     * Get the first matching node type at this match position that can
     * be generated.
     */
    defaultType?: NodeType | undefined;
    /**
     * The number of outgoing edges this node has in the finite automaton
     * that describes the content expression.
     */
    edgeCount: number;
    /**
     * True when this match state represents a valid end of the node.
     */
    validEnd: boolean;
    /**
     * Match a node type and marks, returning a match after that node
     * if successful.
     */
    matchType(type: NodeType<S>): ContentMatch<S> | null | undefined;
    /**
     * Try to match a fragment. Returns the resulting match when
     * successful.
     */
    matchFragment(frag: Fragment<S>, start?: number, end?: number): ContentMatch<S> | null | undefined;
    /**
     * Try to match the given fragment, and if that fails, see if it can
     * be made to match by inserting nodes in front of it. When
     * successful, return a fragment of inserted nodes (which may be
     * empty if nothing had to be inserted). When `toEnd` is true, only
     * return a fragment if the resulting match goes to the end of the
     * content expression.
     */
    fillBefore(after: Fragment<S>, toEnd?: boolean, startIndex?: number): Fragment<S> | null | undefined;
    /**
     * Find a set of wrapping node types that would allow a node of the
     * given type to appear at this position. The result may be empty
     * (when it fits directly) and will be null when no such wrapping
     * exists.
     */
    findWrapping(target: NodeType<S>): Array<NodeType<S>> | null | undefined;
    /**
     * Get the _n_th outgoing edge from this node in the finite automaton
     * that describes the content expression.
     */
    edge(n: number): { type: NodeType; next: ContentMatch };
}
/**
 * A fragment represents a node's collection of child nodes.
 *
 * Like nodes, fragments are persistent data structures, and you
 * should not mutate them or their content. Rather, you create new
 * instances whenever needed. The API tries to make this easy.
 */
export class Fragment<S extends Schema = any> {
    /**
     * The size of the fragment, which is the total of the size of its
     * content nodes.
     */
    size: number;
    /**
     * Invoke a callback for all descendant nodes between the given two
     * positions (relative to start of this fragment). Doesn't descend
     * into a node when the callback returns `false`.
     */
    nodesBetween(
        from: number,
        to: number,
        f: (
            node: ProsemirrorNode<S>,
            start: number,
            parent: ProsemirrorNode<S>,
            index: number,
        ) => boolean | null | undefined | void,
        startPos?: number,
    ): void;
    /**
     * Call the given callback for every descendant node. The callback
     * may return `false` to prevent traversal of a given node's children.
     */
    descendants(
        f: (node: ProsemirrorNode<S>, pos: number, parent: ProsemirrorNode<S>) => boolean | null | undefined | void,
    ): void;
    /**
     * Extract the text between `from` and `to`. See the same method on {@link ProsemirrorNode.textBetween}
     */
    textBetween(
        from: number,
        to: number,
        blockSeparator?: string | null,
        leafText?: string | ((leafNode: ProsemirrorNode) => string) | null,
    ): string;
    /**
     * Create a new fragment containing the combined content of this
     * fragment and the other.
     */
    append(other: Fragment<S>): Fragment<S>;
    /**
     * Cut out the sub-fragment between the two given positions.
     */
    cut(from: number, to?: number): Fragment<S>;
    /**
     * Create a new fragment in which the node at the given index is
     * replaced by the given node.
     */
    replaceChild(index: number, node: ProsemirrorNode<S>): Fragment<S>;
    /**
     * Compare this fragment to another one.
     */
    eq(other: Fragment<S>): boolean;
    /**
     * The first child of the fragment, or `null` if it is empty.
     */
    firstChild?: ProsemirrorNode<S> | null | undefined;
    /**
     * The last child of the fragment, or `null` if it is empty.
     */
    lastChild?: ProsemirrorNode<S> | null | undefined;
    /**
     * The number of child nodes in this fragment.
     */
    childCount: number;
    /**
     * Get the child node at the given index. Raise an error when the
     * index is out of range.
     */
    child(index: number): ProsemirrorNode<S>;
    /**
     * Get the child node at the given index, if it exists.
     */
    maybeChild(index: number): ProsemirrorNode<S> | null | undefined;
    /**
     * Call `f` for every child node, passing the node, its offset
     * into this parent node, and its index.
     */
    forEach(f: (node: ProsemirrorNode<S>, offset: number, index: number) => void): void;
    /**
     * Find the first position at which this fragment and another
     * fragment differ, or `null` if they are the same.
     */
    findDiffStart(other: Fragment<S>): number | null | undefined;
    /**
     * Find the first position, searching from the end, at which this
     * fragment and the given fragment differ, or `null` if they are the
     * same. Since this position will not be the same in both nodes, an
     * object with two separate positions is returned.
     */
    findDiffEnd(other: Fragment<S>): { a: number; b: number } | null | undefined;
    /**
     * Return a debugging string that describes this fragment.
     */
    toString(): string;
    /**
     * Create a JSON-serializeable representation of this fragment.
     */
    toJSON(): { [key: string]: any } | null | undefined;
    /**
     * Deserialize a fragment from its JSON representation.
     */
    static fromJSON<S extends Schema = any>(schema: S, value?: { [key: string]: any }): Fragment<S>;
    /**
     * Build a fragment from an array of nodes. Ensures that adjacent
     * text nodes with the same marks are joined together.
     */
    static fromArray<S extends Schema = any>(array: Array<ProsemirrorNode<S>>): Fragment<S>;
    /**
     * Create a fragment from something that can be interpreted as a set
     * of nodes. For `null`, it returns the empty fragment. For a
     * fragment, the fragment itself. For a node or array of nodes, a
     * fragment containing those nodes.
     */
    static from<S extends Schema = any>(
        nodes?: Fragment<S> | ProsemirrorNode<S> | Array<ProsemirrorNode<S>>,
    ): Fragment<S>;
    /**
     * An empty fragment. Intended to be reused whenever a node doesn't
     * contain anything (rather than allocating a new empty fragment for
     * each leaf node).
     */
    static empty: Fragment;
}
/**
 * These are the options recognized by the
 * [`parse`](#model.DOMParser.parse) and
 * [`parseSlice`](#model.DOMParser.parseSlice) methods.
 */
export interface ParseOptions<S extends Schema = any> {
    /**
     * By default, whitespace is collapsed as per HTML's rules. Pass
     * `true` to preserve whitespace, but normalize newlines to
     * spaces, and `"full"` to preserve whitespace entirely.
     */
    preserveWhitespace?: boolean | 'full' | null | undefined;
    /**
     * When given, the parser will, beside parsing the content,
     * record the document positions of the given DOM positions. It
     * will do so by writing to the objects, adding a `pos` property
     * that holds the document position. DOM positions that are not
     * in the parsed content will not be written to.
     */
    findPositions?: Array<{ node: Node; offset: number }> | null | undefined;
    /**
     * The child node index to start parsing from.
     */
    from?: number | null | undefined;
    /**
     * The child node index to stop parsing at.
     */
    to?: number | null | undefined;
    /**
     * By default, the content is parsed into the schema's default
     * [top node type](#model.Schema.topNodeType). You can pass this
     * option to use the type and attributes from a different node
     * as the top container.
     */
    topNode?: ProsemirrorNode<S> | null | undefined;
    /**
     * Provide the starting content match that content parsed into the
     * top node is matched against.
     */
    topMatch?: ContentMatch | null | undefined;
    /**
     * A set of additional nodes to count as
     * [context](#model.ParseRule.context) when parsing, above the
     * given [top node](#model.ParseOptions.topNode).
     */
    context?: ResolvedPos<S> | null | undefined;
}
/**
 * A value that describes how to parse a given DOM node or inline
 * style as a ProseMirror node or mark.
 */
export interface ParseRule {
    /**
     * A CSS selector describing the kind of DOM elements to match. A
     * single rule should have _either_ a `tag` or a `style` property.
     */
    tag?: string | null | undefined;
    /**
     * The namespace to match. This should be used with `tag`.
     * Nodes are only matched when the namespace matches or this property
     * is null.
     */
    namespace?: string | null | undefined;
    /**
     * A CSS property name to match. When given, this rule matches
     * inline styles that list that property. May also have the form
     * `"property=value"`, in which case the rule only matches if the
     * propery's value exactly matches the given value. (For more
     * complicated filters, use [`getAttrs`](#model.ParseRule.getAttrs)
     * and return undefined to indicate that the match failed.)
     */
    style?: string | null | undefined;
    /**
     * Can be used to change the order in which the parse rules in a
     * schema are tried. Those with higher priority come first. Rules
     * without a priority are counted as having priority 50. This
     * property is only meaningful in a schema—when directly
     * constructing a parser, the order of the rule array is used.
     */
    priority?: number | null | undefined;
    /**
     * By default, when a rule matches an element or style, no further
     * rules get a chance to match it. By setting this to false,
     * you indicate that even when this rule matches, other rules
     * that come after it should also run.
     */
    consuming?: boolean | null | undefined;
    /**
     * When given, restricts this rule to only match when the current
     * context—the parent nodes into which the content is being
     * parsed—matches this expression. Should contain one or more node
     * names or node group names followed by single or double slashes.
     * For example `"paragraph/"` means the rule only matches when the
     * parent node is a paragraph, `"blockquote/paragraph/"` restricts
     * it to be in a paragraph that is inside a blockquote, and
     * `"section//"` matches any position inside a section—a double
     * slash matches any sequence of ancestor nodes. To allow multiple
     * different contexts, they can be separated by a pipe (`|`)
     * character, as in `"blockquote/|list_item/"`.
     */
    context?: string | null | undefined;
    /**
     * The name of the node type to create when this rule matches. Only
     * valid for rules with a `tag` property, not for style rules. Each
     * rule should have one of a `node`, `mark`, or `ignore` property
     * (except when it appears in a [node](#model.NodeSpec.parseDOM) or
     * [mark spec](#model.MarkSpec.parseDOM), in which case the `node`
     * or `mark` property will be derived from its position).
     */
    node?: string | null | undefined;
    /**
     * The name of the mark type to wrap the matched content in.
     */
    mark?: string | null | undefined;
    /**
     * When true, ignore content that matches this rule.
     */
    ignore?: boolean | null | undefined;
    /**
     * When true, ignore the node that matches this rule, but do parse
     * its content.
     */
    skip?: boolean | null | undefined;
    /**
     * Attributes for the node or mark created by this rule. When
     * `getAttrs` is provided, it takes precedence.
     */
    attrs?: { [key: string]: any } | null | undefined;
    /**
     * A function used to compute the attributes for the node or mark
     * created by this rule. Can also be used to describe further
     * conditions the DOM element or style must match. When it returns
     * `false`, the rule won't match. When it returns null or undefined,
     * that is interpreted as an empty/default set of attributes.
     *
     * Called with a DOM Element for `tag` rules, and with a string (the
     * style's value) for `style` rules.
     */
    getAttrs?: ((p: Node | string) => { [key: string]: any } | false | null | undefined) | null | undefined;
    /**
     * For `tag` rules that produce non-leaf nodes or marks, by default
     * the content of the DOM element is parsed as content of the mark
     * or node. If the child nodes are in a descendent node, this may be
     * a CSS selector string that the parser must use to find the actual
     * content element, or a function that returns the actual content
     * element to the parser.
     */
    contentElement?: string | ((p: Node) => Node) | null | undefined;
    /**
     * Can be used to override the content of a matched node. When
     * present, instead of parsing the node's child nodes, the result of
     * this function is used.
     */
    getContent?: (<S extends Schema = any>(p: Node, schema: S) => Fragment<S>) | null | undefined;
    /**
     * Controls whether whitespace should be preserved when parsing the
     * content inside the matched element. `false` means whitespace may
     * be collapsed, `true` means that whitespace should be preserved
     * but newlines normalized to spaces, and `"full"` means that
     * newlines should also be preserved.
     */
    preserveWhitespace?: boolean | 'full' | null | undefined;
}
/**
 * A DOM parser represents a strategy for parsing DOM content into
 * a ProseMirror document conforming to a given schema. Its behavior
 * is defined by an array of [rules](#model.ParseRule).
 */
export class DOMParser<S extends Schema = any> {
    /**
     * Create a parser that targets the given schema, using the given
     * parsing rules.
     */
    constructor(schema: S, rules: ParseRule[]);
    /**
     * The schema into which the parser parses.
     */
    schema: S;
    /**
     * The set of [parse rules](#model.ParseRule) that the parser
     * uses, in order of precedence.
     */
    rules: ParseRule[];
    /**
     * Parse a document from the content of a DOM node.
     */
    parse(dom: Node, options?: ParseOptions<S>): ProsemirrorNode<S>;
    /**
     * Parses the content of the given DOM node, like
     * [`parse`](#model.DOMParser.parse), and takes the same set of
     * options. But unlike that method, which produces a whole node,
     * this one returns a slice that is open at the sides, meaning that
     * the schema constraints aren't applied to the start of nodes to
     * the left of the input and the end of nodes at the end.
     */
    parseSlice(dom: Node, options?: ParseOptions<S>): Slice<S>;
    /**
     * Construct a DOM parser using the parsing rules listed in a
     * schema's [node specs](#model.NodeSpec.parseDOM), reordered by
     * [priority](#model.ParseRule.priority).
     */
    static fromSchema<S extends Schema = any>(schema: S): DOMParser<S>;
}
/**
 * A mark is a piece of information that can be attached to a node,
 * such as it being emphasized, in code font, or a link. It has a type
 * and optionally a set of attributes that provide further information
 * (such as the target of the link). Marks are created through a
 * `Schema`, which controls which types exist and which
 * attributes they have.
 */
export class Mark<S extends Schema = any> {
    /**
     * The type of this mark.
     */
    type: MarkType<S>;
    /**
     * The attributes associated with this mark.
     */
    attrs: { [key: string]: any };
    /**
     * Given a set of marks, create a new set which contains this one as
     * well, in the right position. If this mark is already in the set,
     * the set itself is returned. If any marks that are set to be
     * [exclusive](#model.MarkSpec.excludes) with this mark are present,
     * those are replaced by this one.
     */
    addToSet(set: Array<Mark<S>>): Array<Mark<S>>;
    /**
     * Remove this mark from the given set, returning a new set. If this
     * mark is not in the set, the set itself is returned.
     */
    removeFromSet(set: Array<Mark<S>>): Array<Mark<S>>;
    /**
     * Test whether this mark is in the given set of marks.
     */
    isInSet(set: Array<Mark<S>>): boolean;
    /**
     * Test whether this mark has the same type and attributes as
     * another mark.
     */
    eq(other: Mark<S>): boolean;
    /**
     * Convert this mark to a JSON-serializeable representation.
     */
    toJSON(): { [key: string]: any };
    static fromJSON<S extends Schema = any>(schema: S, json: { [key: string]: any }): Mark<S>;
    /**
     * Test whether two sets of marks are identical.
     */
    static sameSet<S extends Schema = any>(a: Array<Mark<S>>, b: Array<Mark<S>>): boolean;
    /**
     * Create a properly sorted mark set from null, a single mark, or an
     * unsorted array of marks.
     */
    static setFrom<S extends Schema = any>(marks?: Mark<S> | Array<Mark<S>>): Array<Mark<S>>;
    /**
     * The empty set of marks.
     */
    static none: Mark[];
}
/**
 * This class represents a node in the tree that makes up a
 * ProseMirror document. So a document is an instance of `Node`, with
 * children that are also instances of `Node`.
 *
 * Nodes are persistent data structures. Instead of changing them, you
 * create new ones with the content you want. Old ones keep pointing
 * at the old document shape. This is made cheaper by sharing
 * structure between the old and new data as much as possible, which a
 * tree shape like this (without back pointers) makes easy.
 *
 * **Do not** directly mutate the properties of a `Node` object. See
 * [the guide](/docs/guide/#doc) for more information.
 */
declare class ProsemirrorNode<S extends Schema = any> {
    /**
     * The type of node that this is.
     */
    type: NodeType<S>;
    /**
     * An object mapping attribute names to values. The kind of
     * attributes allowed and required are
     * [determined](#model.NodeSpec.attrs) by the node type.
     */
    attrs: { [key: string]: any };
    /**
     * A container holding the node's children.
     */
    content: Fragment<S>;
    /**
     * The marks (things like whether it is emphasized or part of a
     * link) applied to this node.
     */
    marks: Array<Mark<S>>;
    /**
     * For text nodes, this contains the node's text content.
     */
    text?: string | null | undefined;
    /**
     * The size of this node, as defined by the integer-based [indexing
     * scheme](/docs/guide/#doc.indexing). For text nodes, this is the
     * amount of characters. For other leaf nodes, it is one. For
     * non-leaf nodes, it is the size of the content plus two (the start
     * and end token).
     */
    nodeSize: number;
    /**
     * The number of children that the node has.
     */
    childCount: number;
    /**
     * Get the child node at the given index. Raises an error when the
     * index is out of range.
     */
    child(index: number): ProsemirrorNode<S>;
    /**
     * Get the child node at the given index, if it exists.
     */
    maybeChild(index: number): ProsemirrorNode<S> | null | undefined;
    /**
     * Call `f` for every child node, passing the node, its offset
     * into this parent node, and its index.
     */
    forEach(f: (node: ProsemirrorNode<S>, offset: number, index: number) => void): void;
    /**
     * Invoke a callback for all descendant nodes recursively between
     * the given two positions that are relative to start of this node's
     * content. The callback is invoked with the node, its
     * parent-relative position, its parent node, and its child index.
     * When the callback returns false for a given node, that node's
     * children will not be recursed over.
     */
    nodesBetween(
        from: number,
        to: number,
        f: (
            node: ProsemirrorNode<S>,
            pos: number,
            parent: ProsemirrorNode<S>,
            index: number,
        ) => boolean | null | undefined | void,
        startPos?: number,
    ): void;
    /**
     * Call the given callback for every descendant node. Doesn't
     * descend into a node when the callback returns `false`.
     */
    descendants(
        f: (node: ProsemirrorNode<S>, pos: number, parent: ProsemirrorNode<S>) => boolean | null | undefined | void,
    ): void;
    /**
     * Concatenates all the text nodes found in this fragment and its
     * children.
     */
    textContent: string;
    /**
     * Get all text between positions `from` and `to`. When
     * `blockSeparator` is given, it will be inserted whenever a new
     * block node is started. When `leafText` is given, it'll be
     * inserted for every non-text leaf node encountered.
     */
    textBetween(
        from: number,
        to: number,
        blockSeparator?: string,
        leafText?: string | ((leafNode: ProsemirrorNode) => string) | null,
    ): string;
    /**
     * Returns this node's first child, or `null` if there are no
     * children.
     */
    firstChild?: ProsemirrorNode<S> | null | undefined;
    /**
     * Returns this node's last child, or `null` if there are no
     * children.
     */
    lastChild?: ProsemirrorNode<S> | null | undefined;
    /**
     * Test whether two nodes represent the same piece of document.
     */
    eq(other: ProsemirrorNode<S>): boolean;
    /**
     * Compare the markup (type, attributes, and marks) of this node to
     * those of another. Returns `true` if both have the same markup.
     */
    sameMarkup(other: ProsemirrorNode<S>): boolean;
    /**
     * Check whether this node's markup correspond to the given type,
     * attributes, and marks.
     */
    hasMarkup(type: NodeType<S>, attrs?: { [key: string]: any }, marks?: Array<Mark<S>>): boolean;
    /**
     * Create a new node with the same markup as this node, containing
     * the given content (or empty, if no content is given).
     */
    copy(content?: Fragment<S>): ProsemirrorNode<S>;
    /**
     * Create a copy of this node, with the given set of marks instead
     * of the node's own marks.
     */
    mark(marks: Array<Mark<S>>): ProsemirrorNode<S>;
    /**
     * Create a copy of this node with only the content between the
     * given positions. If `to` is not given, it defaults to the end of
     * the node.
     */
    cut(from: number, to?: number): ProsemirrorNode<S>;
    /**
     * Cut out the part of the document between the given positions, and
     * return it as a `Slice` object.
     */
    slice(from: number, to?: number): Slice<S>;
    /**
     * Replace the part of the document between the given positions with
     * the given slice. The slice must 'fit', meaning its open sides
     * must be able to connect to the surrounding content, and its
     * content nodes must be valid children for the node they are placed
     * into. If any of this is violated, an error of type
     * [`ReplaceError`](#model.ReplaceError) is thrown.
     */
    replace(from: number, to: number, slice: Slice<S>): ProsemirrorNode<S>;
    /**
     * Find the node starting at the given position.
     */
    nodeAt(pos: number): ProsemirrorNode<S> | null | undefined;
    /**
     * Find the (direct) child node after the given offset, if any,
     * and return it along with its index and offset relative to this
     * node.
     */
    childAfter(pos: number): { node?: ProsemirrorNode<S> | null | undefined; index: number; offset: number };
    /**
     * Find the (direct) child node before the given offset, if any,
     * and return it along with its index and offset relative to this
     * node.
     */
    childBefore(pos: number): { node?: ProsemirrorNode<S> | null | undefined; index: number; offset: number };
    /**
     * Resolve the given position in the document, returning an
     * [object](#model.ResolvedPos) with information about its context.
     */
    resolve(pos: number): ResolvedPos<S>;
    /**
     * Test whether a given mark or mark type occurs in this document
     * between the two given positions.
     */
    rangeHasMark(from: number, to: number, type: Mark<S> | MarkType<S>): boolean;
    /**
     * True when this is a block (non-inline node)
     */
    isBlock: boolean;
    /**
     * True when this is a textblock node, a block node with inline
     * content.
     */
    isTextblock: boolean;
    /**
     * True when this node has inline content.
     */
    inlineContent: boolean;
    /**
     * True when this is an inline node (a text node or a node that can
     * appear among text).
     */
    isInline: boolean;
    /**
     * True when this is a text node.
     */
    isText: boolean;
    /**
     * True when this is a leaf node.
     */
    isLeaf: boolean;
    /**
     * True when this is an atom, i.e. when it does not have directly
     * editable content. This is usually the same as `isLeaf`, but can
     * be configured with the [`atom` property](#model.NodeSpec.atom) on
     * a node's spec (typically used when the node is displayed as an
     * uneditable [node view](#view.NodeView)).
     */
    isAtom: boolean;
    /**
     * The node type's [whitespace](#view.NodeSpec.whitespace) option.
     */
    whitespace: 'pre' | 'normal';
    /**
     * Return a string representation of this node for debugging
     * purposes.
     */
    toString(): string;
    /**
     * Get the content match in this node at the given index.
     */
    contentMatchAt(index: number): ContentMatch<S>;
    /**
     * Test whether replacing the range between `from` and `to` (by
     * child index) with the given replacement fragment (which defaults
     * to the empty fragment) would leave the node's content valid. You
     * can optionally pass `start` and `end` indices into the
     * replacement fragment.
     */
    canReplace(from: number, to: number, replacement?: Fragment<S>, start?: number, end?: number): boolean;
    /**
     * Test whether replacing the range `from` to `to` (by index) with a
     * node of the given type.
     */
    canReplaceWith(from: number, to: number, type: NodeType<S>, marks?: Array<Mark<S>>): boolean;
    /**
     * Test whether the given node's content could be appended to this
     * node. If that node is empty, this will only return true if there
     * is at least one node type that can appear in both nodes (to avoid
     * merging completely incompatible nodes).
     */
    canAppend(other: ProsemirrorNode<S>): boolean;
    /**
     * Check whether this node and its descendants conform to the
     * schema, and raise error when they do not.
     */
    check(): void;
    /**
     * Return a JSON-serializeable representation of this node.
     */
    toJSON(): { [key: string]: any };
    /**
     * Deserialize a node from its JSON representation.
     */
    static fromJSON<S extends Schema = any>(schema: S, json: { [key: string]: any }): ProsemirrorNode<S>;
}
export { ProsemirrorNode as Node };
/**
 * Error type raised by [`Node.replace`](#model.Node.replace) when
 * given an invalid replacement.
 */
export class ReplaceError extends Error {}
/**
 * A slice represents a piece cut out of a larger document. It
 * stores not only a fragment, but also the depth up to which nodes on
 * both side are ‘open’ (cut through).
 */
export class Slice<S extends Schema = any> {
    /**
     * Create a slice. When specifying a non-zero open depth, you must
     * make sure that there are nodes of at least that depth at the
     * appropriate side of the fragment—i.e. if the fragment is an empty
     * paragraph node, `openStart` and `openEnd` can't be greater than
     * 1.
     *
     * It is not necessary for the content of open nodes to conform to
     * the schema's content constraints, though it should be a valid
     * start/end/middle for such a node, depending on which sides are
     * open.
     */
    constructor(content: Fragment<S>, openStart: number, openEnd: number);
    /**
     * The slice's content.
     */
    content: Fragment<S>;
    /**
     * The open depth at the start.
     */
    openStart: number;
    /**
     * The open depth at the end.
     */
    openEnd: number;
    /**
     * The size this slice would add when inserted into a document.
     */
    size: number;
    /**
     * Tests whether this slice is equal to another slice.
     */
    eq(other: Slice<S>): boolean;
    /**
     * Convert a slice to a JSON-serializable representation.
     */
    toJSON(): { [key: string]: any } | null | undefined;
    /**
     * Deserialize a slice from its JSON representation.
     */
    static fromJSON<S extends Schema = any>(schema: S, json?: { [key: string]: any }): Slice<S>;
    /**
     * Create a slice from a fragment by taking the maximum possible
     * open value on both side of the fragment.
     */
    static maxOpen<S extends Schema = any>(fragment: Fragment<S>, openIsolating?: boolean): Slice<S>;
    /**
     * The empty slice.
     */
    static empty: Slice;
}
/**
 * You can [_resolve_](#model.Node.resolve) a position to get more
 * information about it. Objects of this class represent such a
 * resolved position, providing various pieces of context information,
 * and some helper methods.
 *
 * Throughout this interface, methods that take an optional `depth`
 * parameter will interpret undefined as `this.depth` and negative
 * numbers as `this.depth + value`.
 */
export class ResolvedPos<S extends Schema = any> {
    /**
     * The position that was resolved.
     */
    pos: number;
    /**
     * The number of levels the parent node is from the root. If this
     * position points directly into the root node, it is 0. If it
     * points into a top-level paragraph, 1, and so on.
     */
    depth: number;
    /**
     * The offset this position has into its parent node.
     */
    parentOffset: number;
    /**
     * The parent node that the position points into. Note that even if
     * a position points into a text node, that node is not considered
     * the parent—text nodes are ‘flat’ in this model, and have no content.
     */
    parent: ProsemirrorNode<S>;
    /**
     * The root node in which the position was resolved.
     */
    doc: ProsemirrorNode<S>;
    /**
     * The ancestor node at the given level. `p.node(p.depth)` is the
     * same as `p.parent`.
     */
    node(depth?: number): ProsemirrorNode<S>;
    /**
     * The index into the ancestor at the given level. If this points at
     * the 3rd node in the 2nd paragraph on the top level, for example,
     * `p.index(0)` is 2 and `p.index(1)` is 3.
     */
    index(depth?: number): number;
    /**
     * The index pointing after this position into the ancestor at the
     * given level.
     */
    indexAfter(depth?: number): number;
    /**
     * The (absolute) position at the start of the node at the given
     * level.
     */
    start(depth?: number): number;
    /**
     * The (absolute) position at the end of the node at the given
     * level.
     */
    end(depth?: number): number;
    /**
     * The (absolute) position directly before the wrapping node at the
     * given level, or, when `level` is `this.depth + 1`, the original
     * position.
     */
    before(depth?: number): number;
    /**
     * The (absolute) position directly after the wrapping node at the
     * given level, or the original position when `level` is `this.depth + 1`.
     */
    after(depth?: number): number;
    /**
     * When this position points into a text node, this returns the
     * distance between the position and the start of the text node.
     * Will be zero for positions that point between nodes.
     */
    textOffset: number;
    /**
     * Get the node directly after the position, if any. If the position
     * points into a text node, only the part of that node after the
     * position is returned.
     */
    nodeAfter?: ProsemirrorNode<S> | null | undefined;
    /**
     * Get the node directly before the position, if any. If the
     * position points into a text node, only the part of that node
     * before the position is returned.
     */
    nodeBefore?: ProsemirrorNode<S> | null | undefined;
    /**
     * Get the position at the given index in the parent node at the
     * given depth (which defaults to this.depth).
     */
    posAtIndex(index: number, depth?: number): number;
    /**
     * Get the marks at this position, factoring in the surrounding
     * marks' [`inclusive`](#model.MarkSpec.inclusive) property. If the
     * position is at the start of a non-empty node, the marks of the
     * node after it (if any) are returned.
     */
    marks(): Array<Mark<S>>;
    /**
     * Get the marks after the current position, if any, except those
     * that are non-inclusive and not present at position `$end`. This
     * is mostly useful for getting the set of marks to preserve after a
     * deletion. Will return `null` if this position is at the end of
     * its parent node or its parent node isn't a textblock (in which
     * case no marks should be preserved).
     */
    marksAcross($end: ResolvedPos<S>): Array<Mark<S>> | null | undefined;
    /**
     * The depth up to which this position and the given (non-resolved)
     * position share the same parent nodes.
     */
    sharedDepth(pos: number): number;
    /**
     * Returns a range based on the place where this position and the
     * given position diverge around block content. If both point into
     * the same textblock, for example, a range around that textblock
     * will be returned. If they point into different blocks, the range
     * around those blocks in their shared ancestor is returned. You can
     * pass in an optional predicate that will be called with a parent
     * node to see if a range into that parent is acceptable.
     */
    blockRange(other?: ResolvedPos<S>, pred?: (p: ProsemirrorNode<S>) => boolean): NodeRange<S> | null | undefined;
    /**
     * Query whether the given position shares the same parent node.
     */
    sameParent(other: ResolvedPos<S>): boolean;
    /**
     * Return the greater of this and the given position.
     */
    max(other: ResolvedPos<S>): ResolvedPos<S>;
    /**
     * Return the smaller of this and the given position.
     */
    min(other: ResolvedPos<S>): ResolvedPos<S>;
}
/**
 * Represents a flat range of content, i.e. one that starts and
 * ends in the same node.
 */
export class NodeRange<S extends Schema = any> {
    /**
     * Construct a node range. `$from` and `$to` should point into the
     * same node until at least the given `depth`, since a node range
     * denotes an adjacent set of nodes in a single parent node.
     */
    constructor($from: ResolvedPos<S>, $to: ResolvedPos<S>, depth: number);
    /**
     * A resolved position along the start of the
     * content. May have a `depth` greater than this object's `depth`
     * property, since these are the positions that were used to
     * compute the range, not re-resolved positions directly at its
     * boundaries.
     */
    $from: ResolvedPos<S>;
    /**
     * A position along the end of the content. See
     * caveat for [`$from`](#model.NodeRange.$from).
     */
    $to: ResolvedPos<S>;
    /**
     * The depth of the node that this range points into.
     */
    depth: number;
    /**
     * The position at the start of the range.
     */
    start: number;
    /**
     * The position at the end of the range.
     */
    end: number;
    /**
     * The parent node that the range points into.
     */
    parent: ProsemirrorNode<S>;
    /**
     * The start index of the range in the parent node.
     */
    startIndex: number;
    /**
     * The end index of the range in the parent node.
     */
    endIndex: number;
}
/**
 * Node types are objects allocated once per `Schema` and used to
 * [tag](#model.Node.type) `Node` instances. They contain information
 * about the node type, such as its name and what kind of node it
 * represents.
 */
export class NodeType<S extends Schema = any> {
    /**
     * The name the node type has in this schema.
     */
    name: string;
    /**
     * A link back to the `Schema` the node type belongs to.
     */
    schema: S;
    /**
     * The spec that this type is based on
     */
    spec: NodeSpec;
    /**
     * The starting match of the node type's content expression.
     */
    contentMatch: ContentMatch<S>;
    /**
     * True if this node type has inline content.
     */
    inlineContent: boolean;
    /**
     * True if this is a block type
     */
    isBlock: boolean;
    /**
     * True if this is the text node type.
     */
    isText: boolean;
    /**
     * True if this is an inline type.
     */
    isInline: boolean;
    /**
     * True if this is a textblock type, a block that contains inline
     * content.
     */
    isTextblock: boolean;
    /**
     * True for node types that allow no content.
     */
    isLeaf: boolean;
    /**
     * True when this node is an atom, i.e. when it does not have
     * directly editable content.
     */
    isAtom: boolean;
    /**
     * Tells you whether this node type has any required attributes.
     */
    hasRequiredAttrs(): boolean;
    /**
     * Create a `Node` of this type. The given attributes are
     * checked and defaulted (you can pass `null` to use the type's
     * defaults entirely, if no required attributes exist). `content`
     * may be a `Fragment`, a node, an array of nodes, or
     * `null`. Similarly `marks` may be `null` to default to the empty
     * set of marks.
     */
    create(
        attrs?: { [key: string]: any } | null,
        content?: Fragment<S> | ProsemirrorNode<S> | Array<ProsemirrorNode<S>>,
        marks?: Array<Mark<S>>,
    ): ProsemirrorNode<S>;
    /**
     * Like [`create`](#model.NodeType.create), but check the given content
     * against the node type's content restrictions, and throw an error
     * if it doesn't match.
     */
    createChecked(
        attrs?: { [key: string]: any } | null,
        content?: Fragment<S> | ProsemirrorNode<S> | Array<ProsemirrorNode<S>>,
        marks?: Array<Mark<S>>,
    ): ProsemirrorNode<S>;
    /**
     * Like [`create`](#model.NodeType.create), but see if it is necessary to
     * add nodes to the start or end of the given fragment to make it
     * fit the node. If no fitting wrapping can be found, return null.
     * Note that, due to the fact that required nodes can always be
     * created, this will always succeed if you pass null or
     * `Fragment.empty` as content.
     */
    createAndFill(
        attrs?: { [key: string]: any } | null,
        content?: Fragment<S> | ProsemirrorNode<S> | Array<ProsemirrorNode<S>>,
        marks?: Array<Mark<S>>,
    ): ProsemirrorNode<S> | null | undefined;
    /**
     * Returns true if the given fragment is valid content for this node
     * type with the given attributes.
     */
    validContent(content: Fragment<S>): boolean;
    /**
     * Check whether the given mark type is allowed in this node.
     */
    allowsMarkType(markType: MarkType<S>): boolean;
    /**
     * Test whether the given set of marks are allowed in this node.
     */
    allowsMarks(marks: Array<Mark<S>>): boolean;
    /**
     * Removes the marks that are not allowed in this node from the given set.
     */
    allowedMarks(marks: Array<Mark<S>>): Array<Mark<S>>;
}
/**
 * Like nodes, marks (which are associated with nodes to signify
 * things like emphasis or being part of a link) are
 * [tagged](#model.Mark.type) with type objects, which are
 * instantiated once per `Schema`.
 */
export class MarkType<S extends Schema = any> {
    /**
     * The name of the mark type.
     */
    name: string;
    /**
     * The schema that this mark type instance is part of.
     */
    schema: S;
    /**
     * The spec on which the type is based.
     */
    spec: MarkSpec;
    /**
     * Create a mark of this type. `attrs` may be `null` or an object
     * containing only some of the mark's attributes. The others, if
     * they have defaults, will be added.
     */
    create(attrs?: { [key: string]: any }): Mark<S>;
    /**
     * When there is a mark of this type in the given set, a new set
     * without it is returned. Otherwise, the input set is returned.
     */
    removeFromSet(set: Array<Mark<S>>): Array<Mark<S>>;
    /**
     * Tests whether there is a mark of this type in the given set.
     */
    isInSet(set: Array<Mark<S>>): Mark<S> | null | undefined;
    /**
     * Queries whether a given mark type is
     * [excluded](#model.MarkSpec.excludes) by this one.
     */
    excludes(other: MarkType<S>): boolean;
}
/**
 * An object describing a schema, as passed to the [`Schema`](#model.Schema)
 * constructor.
 */
export interface SchemaSpec<N extends string = any, M extends string = any> {
    /**
     * The node types in this schema. Maps names to
     * [`NodeSpec`](#model.NodeSpec) objects that describe the node type
     * associated with that name. Their order is significant—it
     * determines which [parse rules](#model.NodeSpec.parseDOM) take
     * precedence by default, and which nodes come first in a given
     * [group](#model.NodeSpec.group).
     */
    nodes: { [name in N]: NodeSpec } | OrderedMap<NodeSpec>;
    /**
     * The mark types that exist in this schema. The order in which they
     * are provided determines the order in which [mark
     * sets](#model.Mark.addToSet) are sorted and in which [parse
     * rules](#model.MarkSpec.parseDOM) are tried.
     */
    marks?: { [name in M]: MarkSpec } | OrderedMap<MarkSpec> | null | undefined;
    /**
     * The name of the default top-level node for the schema. Defaults
     * to `"doc"`.
     */
    topNode?: string | null | undefined;
}
export interface NodeSpec {
    /**
     * The content expression for this node, as described in the [schema
     * guide](/docs/guide/#schema.content_expressions). When not given,
     * the node does not allow any content.
     */
    content?: string | null | undefined;
    /**
     * The marks that are allowed inside of this node. May be a
     * space-separated string referring to mark names or groups, `"_"`
     * to explicitly allow all marks, or `""` to disallow marks. When
     * not given, nodes with inline content default to allowing all
     * marks, other nodes default to not allowing marks.
     */
    marks?: string | null | undefined;
    /**
     * The group or space-separated groups to which this node belongs,
     * which can be referred to in the content expressions for the
     * schema.
     */
    group?: string | null | undefined;
    /**
     * Should be set to true for inline nodes. (Implied for text nodes.)
     */
    inline?: boolean | null | undefined;
    /**
     * Can be set to true to indicate that, though this isn't a [leaf
     * node](#model.NodeType.isLeaf), it doesn't have directly editable
     * content and should be treated as a single unit in the view.
     */
    atom?: boolean | null | undefined;
    /**
     * The attributes that nodes of this type get.
     */
    attrs?: { [name: string]: AttributeSpec } | null | undefined;
    /**
     * Controls whether nodes of this type can be selected as a [node
     * selection](#state.NodeSelection). Defaults to true for non-text
     * nodes.
     */
    selectable?: boolean | null | undefined;
    /**
     * Determines whether nodes of this type can be dragged without
     * being selected. Defaults to false.
     */
    draggable?: boolean | null | undefined;
    /**
     * Can be used to indicate that this node contains code, which
     * causes some commands to behave differently.
     */
    code?: boolean | null | undefined;
    /**
     * Controls way whitespace in this a node is parsed. The default is
     * `"normal"`, which causes the [DOM parser](#model.DOMParser) to
     * collapse whitespace in normal mode, and normalize it (replacing
     * newlines and such with spaces) otherwise. `"pre"` causes the
     * parser to preserve spaces inside the node. When this option isn't
     * given, but [`code`](#model.NodeSpec.code) is true, `whitespace`
     * will default to `"pre"`. Note that this option doesn't influence
     * the way the node is rendered—that should be handled by `toDOM`
     * and/or styling.
     */
    whitespace?: 'pre' | 'normal';
    /**
     * Determines whether this node is considered an important parent
     * node during replace operations (such as paste). Non-defining (the
     * default) nodes get dropped when their entire content is replaced,
     * whereas defining nodes persist and wrap the inserted content.
     * Likewise, in _inserted_ content the defining parents of the
     * content are preserved when possible. Typically,
     * non-default-paragraph textblock types, and possibly list items,
     * are marked as defining.
     */
    defining?: boolean | null | undefined;
    /**
     * When enabled (default is false), the sides of nodes of this type
     * count as boundaries that regular editing operations, like
     * backspacing or lifting, won't cross. An example of a node that
     * should probably have this enabled is a table cell.
     */
    isolating?: boolean | null | undefined;
    /**
     * Defines the default way a node of this type should be serialized
     * to DOM/HTML (as used by
     * [`DOMSerializer.fromSchema`](#model.DOMSerializer^fromSchema)).
     * Should return a DOM node or an [array
     * structure](#model.DOMOutputSpec) that describes one, with an
     * optional number zero (“hole”) in it to indicate where the node's
     * content should be inserted.
     *
     * For text nodes, the default is to create a text DOM node. Though
     * it is possible to create a serializer where text is rendered
     * differently, this is not supported inside the editor, so you
     * shouldn't override that in your text node spec.
     */
    toDOM?: ((node: ProsemirrorNode) => DOMOutputSpec) | null | undefined;
    /**
     * Associates DOM parser information with this node, which can be
     * used by [`DOMParser.fromSchema`](#model.DOMParser^fromSchema) to
     * automatically derive a parser. The `node` field in the rules is
     * implied (the name of this node will be filled in automatically).
     * If you supply your own parser, you do not need to also specify
     * parsing rules in your schema.
     */
    parseDOM?: ParseRule[] | null | undefined;
    /**
     * Defines the default way a node of this type should be serialized
     * to a string representation for debugging (e.g. in error messages).
     */
    toDebugString?: ((node: ProsemirrorNode) => string) | null | undefined;
    /**
     * Allow specifying arbitrary fields on a NodeSpec.
     */
    [key: string]: any;
}
export interface MarkSpec {
    /**
     * The attributes that marks of this type get.
     */
    attrs?: { [name: string]: AttributeSpec } | null | undefined;
    /**
     * Whether this mark should be active when the cursor is positioned
     * at its end (or at its start when that is also the start of the
     * parent node). Defaults to true.
     */
    inclusive?: boolean | null | undefined;
    /**
     * Determines which other marks this mark can coexist with. Should
     * be a space-separated strings naming other marks or groups of marks.
     * When a mark is [added](#model.Mark.addToSet) to a set, all marks
     * that it excludes are removed in the process. If the set contains
     * any mark that excludes the new mark but is not, itself, excluded
     * by the new mark, the mark can not be added an the set. You can
     * use the value `"_"` to indicate that the mark excludes all
     * marks in the schema.
     *
     * Defaults to only being exclusive with marks of the same type. You
     * can set it to an empty string (or any string not containing the
     * mark's own name) to allow multiple marks of a given type to
     * coexist (as long as they have different attributes).
     */
    excludes?: string | null | undefined;
    /**
     * The group or space-separated groups to which this mark belongs.
     */
    group?: string | null | undefined;
    /**
     * Determines whether marks of this type can span multiple adjacent
     * nodes when serialized to DOM/HTML. Defaults to true.
     */
    spanning?: boolean | null | undefined;
    /**
     * Defines the default way marks of this type should be serialized
     * to DOM/HTML.
     */
    toDOM?: ((mark: Mark, inline: boolean) => DOMOutputSpec) | null | undefined;
    /**
     * Associates DOM parser information with this mark (see the
     * corresponding [node spec field](#model.NodeSpec.parseDOM)). The
     * `mark` field in the rules is implied.
     */
    parseDOM?: ParseRule[] | null | undefined;
    /**
     * Allow specifying arbitrary fields on a MarkSpec.
     */
    [key: string]: any;
}
/**
 * Used to [define](#model.NodeSpec.attrs) attributes on nodes or
 * marks.
 */
export interface AttributeSpec {
    /**
     * The default value for this attribute, to use when no explicit
     * value is provided. Attributes that have no default must be
     * provided whenever a node or mark of a type that has them is
     * created.
     */
    default?: any;
}
/**
 * A document schema. Holds [node](#model.NodeType) and [mark
 * type](#model.MarkType) objects for the nodes and marks that may
 * occur in conforming documents, and provides functionality for
 * creating and deserializing such documents.
 */
export class Schema<N extends string = any, M extends string = any> {
    /**
     * Construct a schema from a schema [specification](#model.SchemaSpec).
     */
    constructor(spec: SchemaSpec<N, M>);
    /**
     * The [spec](#model.SchemaSpec) on which the schema is based,
     * with the added guarantee that its `nodes` and `marks`
     * properties are
     * [`OrderedMap`](https://github.com/marijnh/orderedmap) instances
     * (not raw objects).
     */
    spec: SchemaSpec<N, M>;
    /**
     * An object mapping the schema's node names to node type objects.
     */
    nodes: { [name in N]: NodeType<Schema<N, M>> } & { [key: string]: NodeType<Schema<N, M>> };
    /**
     * A map from mark names to mark type objects.
     */
    marks: { [name in M]: MarkType<Schema<N, M>> } & { [key: string]: MarkType<Schema<N, M>> };
    /**
     * The type of the [default top node](#model.SchemaSpec.topNode)
     * for this schema.
     */
    topNodeType: NodeType<Schema<N, M>>;
    /**
     * An object for storing whatever values modules may want to
     * compute and cache per schema. (If you want to store something
     * in it, try to use property names unlikely to clash.)
     */
    cached: { [key: string]: any };
    /**
     * Create a node in this schema. The `type` may be a string or a
     * `NodeType` instance. Attributes will be extended
     * with defaults, `content` may be a `Fragment`,
     * `null`, a `Node`, or an array of nodes.
     */
    node(
        type: string | NodeType<Schema<N, M>>,
        attrs?: { [key: string]: any },
        content?: Fragment<Schema<N, M>> | ProsemirrorNode<Schema<N, M>> | Array<ProsemirrorNode<Schema<N, M>>>,
        marks?: Array<Mark<Schema<N, M>>>,
    ): ProsemirrorNode<Schema<N, M>>;
    /**
     * Create a text node in the schema. Empty text nodes are not
     * allowed.
     */
    text(text: string, marks?: Array<Mark<Schema<N, M>>>): ProsemirrorNode<Schema<N, M>>;
    /**
     * Create a mark with the given type and attributes.
     */
    mark(type: string | MarkType<Schema<N, M>>, attrs?: { [key: string]: any }): Mark<Schema<N, M>>;
    /**
     * Deserialize a node from its JSON representation. This method is
     * bound.
     */
    nodeFromJSON(json: { [key: string]: any }): ProsemirrorNode<Schema<N, M>>;
    /**
     * Deserialize a mark from its JSON representation. This method is
     * bound.
     */
    markFromJSON(json: { [key: string]: any }): Mark<Schema<N, M>>;
}
export interface DOMOutputSpecArray {
    0: string;
    1?: DOMOutputSpec | 0 | { [attr: string]: string | null | undefined } | undefined;
    2?: DOMOutputSpec | 0 | undefined;
    3?: DOMOutputSpec | 0 | undefined;
    4?: DOMOutputSpec | 0 | undefined;
    5?: DOMOutputSpec | 0 | undefined;
    6?: DOMOutputSpec | 0 | undefined;
    7?: DOMOutputSpec | 0 | undefined;
    8?: DOMOutputSpec | 0 | undefined;
    9?: DOMOutputSpec | 0 | undefined;
}
export type DOMOutputSpec = string | Node | DOMOutputSpecArray | { dom: Node; contentDOM?: Node | undefined };
/**
 * A DOM serializer knows how to convert ProseMirror nodes and
 * marks of various types to DOM nodes.
 */
export class DOMSerializer<S extends Schema = any> {
    /**
     * Create a serializer. `nodes` should map node names to functions
     * that take a node and return a description of the corresponding
     * DOM. `marks` does the same for mark names, but also gets an
     * argument that tells it whether the mark's content is block or
     * inline content (for typical use, it'll always be inline). A mark
     * serializer may be `null` to indicate that marks of that type
     * should not be serialized.
     */
    constructor(
        nodes: { [name: string]: (node: ProsemirrorNode<S>) => DOMOutputSpec },
        marks: { [name: string]: (mark: Mark<S>, inline: boolean) => DOMOutputSpec },
    );
    /**
     * The node serialization functions.
     */
    nodes: { [name: string]: (node: ProsemirrorNode<S>) => DOMOutputSpec };
    /**
     * The mark serialization functions.
     */
    marks: { [name: string]: (mark: Mark<S>, inline: boolean) => DOMOutputSpec };
    /**
     * Serialize the content of this fragment to a DOM fragment. When
     * not in the browser, the `document` option, containing a DOM
     * document, should be passed so that the serializer can create
     * nodes.
     */
    serializeFragment(fragment: Fragment<S>, options?: { [key: string]: any }): DocumentFragment;
    /**
     * Serialize this node to a DOM node. This can be useful when you
     * need to serialize a part of a document, as opposed to the whole
     * document. To serialize a whole document, use
     * [`serializeFragment`](#model.DOMSerializer.serializeFragment) on
     * its [content](#model.Node.content).
     */
    serializeNode(node: ProsemirrorNode<S>, options?: { [key: string]: any }): Node;
    /**
     * Render an [output spec](#model.DOMOutputSpec) to a DOM node. If
     * the spec has a hole (zero) in it, `contentDOM` will point at the
     * node with the hole.
     */
    static renderSpec(doc: Document, structure: DOMOutputSpec): { dom: Node; contentDOM?: Node | null | undefined };
    /**
     * Build a serializer using the [`toDOM`](#model.NodeSpec.toDOM)
     * properties in a schema's node and mark specs.
     */
    static fromSchema<S extends Schema = any>(schema: S): DOMSerializer<S>;
}
