// Type definitions for Mdast 3.0
// Project: https://github.com/syntax-tree/mdast, https://github.com/wooorm/mdast
// Definitions by: Jun Lu <https://github.com/lujun2>
//                 Thomas "zemnmez" Shadwell <https://github.com/zemnmez>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

import { Parent as UnistParent, Literal as UnistLiteral, Node } from 'unist';

// typing notes:
//
// 1. MDAST does not explicitly specify a difference between a field which is undefined, a field
//    which is null, and a field which is not present. However, the examples *do* contain `null`,
//    so for safety's sake I am nulling every potentially not present field, and all fields specifying
//    undefined also potentially specify null.
//
// 2. the 'root' node allows any kind of Content as a child, as long as that is the consistent type of the
//    child i.e. all children can be 'TopLevel' block content like paragraphs OR table rows, but not both.
//
//    To better express this in typescript, Root is a union of RootT interfaces with the selected types.
//    This should have the benefit of making it easier to discriminate between different root types.
//
// 3. In MDAST's definition, List is a type with rather complex field relationships -- some fields are only
//    potentially present if other fields have some value. To express this better, I, similarly to 'root'
//    express List in terms of a type union of OrderedList and UnorderedList.
//
// 4. It's definitely arguable that these typings should focus more on ease of use, rather than accurately reflecting
//    the mdast spec documentation. I've picked somewhat of a middleground by making the most minor changes I can
//    where I think it's useful.

// explicit exports
export {};

// helper types
export type Null = undefined | null;
export type Nullable<T> = T | Null;

/**
 * AlignType represents how phrasing content is aligned.
 * - *left*: see the `left` value of the text-align css property
 * - *right*: see the `right` value of the text-align css property
 * - *center*: see the `center` value of the text-align css property
 * - *null*: phrasing content is aligned as defined by the host environment
 * @example 'left'
 * @see https://drafts.csswg.org/css-text/#valdef-text-align-left
 * @see https://github.com/syntax-tree/mdast/blob/e0902c8acfecb9680ee9fa066da725c3a1201774/readme.md#aligntype
 */
export type AlignType = 'left' | 'right' | 'center' | null;

/**
 * ReferenceType represents the explicitness of a Reference.
 *
 * - *shortcut*: the reference is implicit, and its identifier is
 * defined from context (`[MyLink]`)
 *
 * - *collapsed*: the reference is explicit, its identifier is inferred
 * from context (`[MyLink][]`)
 *
 * - *full*: the reference is explicit, its identifier is explicitly set
 * (`[MyLink][MyLink]`)
 *
 * @example markdown`
 *  Here is a link to [MyWebsite]; or --
 * [MyWebsite][], or --
 * [MyWebsite][MyWebsite].
 *
 * [MyWebsite]: https://example.com
 * `
 * @see https://github.com/syntax-tree/mdast/blob/e0902c8acfecb9680ee9fa066da725c3a1201774/readme.md#referencetype
 * @see mdast.Reference
 */
export type ReferenceType = 'shortcut' | 'collapsed' | 'full';

/**
 * All mdast nodes fall into one or more categories of *Content*
 * that group nodes of similar characteristics together.
 * @see https://github.com/syntax-tree/mdast/blob/e0902c8acfecb9680ee9fa066da725c3a1201774/readme.md#content
 */
export type Content =
    | TopLevelContent
    | ListContent
    | TableContent
    | RowContent
    | PhrasingContent;

/**
 * *TopLevelContent* represent the sections of a markdown document
 * (block content in markdown language),
 * as well as metadata such frontmatter and definitions.
 * @see https://github.com/syntax-tree/mdast/blob/e0902c8acfecb9680ee9fa066da725c3a1201774/readme.md#toplevelcontent
 */
export type TopLevelContent =
    | BlockContent
    | FrontmatterContent
    | DefinitionContent;

/**
 * *BlockContent* represent sections of a markdown document.
 * @see https://github.com/syntax-tree/mdast/blob/e0902c8acfecb9680ee9fa066da725c3a1201774/readme.md#blockcontent
 */
export type BlockContent =
    | Paragraph
    | Heading
    | ThematicBreak
    | Blockquote
    | List
    | Table
    | HTML
    | Code;

/**
 * *FrontmatterContent* represent out-of-band information about the
 * markdown document.
 *
 * If frontmatter is present, it must be limited to one node in the
 * [tree](https://github.com/syntax-tree/unist#tree), and can only exist as a [head](https://github.com/syntax-tree/unist#head).
 * @see https://github.com/syntax-tree/mdast/blob/e0902c8acfecb9680ee9fa066da725c3a1201774/readme.md#frontmattercontent
 */
export type FrontmatterContent = YAML;

/**
 * *DefinitionContent* represents out-of-band information that typically affects the document through
 * mdast.Association.
 *
 * @see https://github.com/syntax-tree/mdast/blob/e0902c8acfecb9680ee9fa066da725c3a1201774/readme.md#definitioncontent
 */
export type DefinitionContent = Definition | FootnoteDefinition;

/**
 * *ListContent* represents the items in a list.
 * @see https://github.com/syntax-tree/mdast/blob/e0902c8acfecb9680ee9fa066da725c3a1201774/readme.md#listcontent
 */
export type ListContent = ListItem;

/**
 * *TableContent* represents the rows in a table.
 * @see https://github.com/syntax-tree/mdast/blob/e0902c8acfecb9680ee9fa066da725c3a1201774/readme.md#tablecontent
 */
export type TableContent = TableRow;

/**
 * *RowContent* represents the cells in a row.
 * @see https://github.com/syntax-tree/mdast/blob/e0902c8acfecb9680ee9fa066da725c3a1201774/readme.md#rowcontent
 */
export type RowContent = TableCell;

/**
 * *PhrasingContent* represents the text in a document, and its markup.
 * @see https://github.com/syntax-tree/mdast/blob/e0902c8acfecb9680ee9fa066da725c3a1201774/readme.md#phrasingcontent
 */
export type PhrasingContent = StaticPhrasingContent | Link | LinkReference;

/**
 * *StaticPhrasingContent* represents the text in a document and its markup that is not intented for user
 * interaction.
 * @see https://github.com/syntax-tree/mdast/blob/e0902c8acfecb9680ee9fa066da725c3a1201774/readme.md#staticphrasingcontent
 * @
 */
export type StaticPhrasingContent =
    | Text
    | Emphasis
    | Strong
    | Delete
    | HTML
    | InlineCode
    | Break
    | Image
    | ImageReference
    | Footnote
    | FootnoteReference;

/**
 * *Parent* represents a node in mdast containing other nodes (said to be [children](https://github.com/syntax-tree/unist#child)).
 * @see https://github.com/syntax-tree/mdast/blob/e0902c8acfecb9680ee9fa066da725c3a1201774/readme.md#parent
 */
export interface Parent extends UnistParent {
    children: Content[];
}

/**
 * *Literal* ([UnistLiteral](https://github.com/syntax-tree/unist#literal)) represents a node in mdast
 * containing a value.
 * Its `value` field is a `string`.
 * @see https://github.com/syntax-tree/mdast/blob/e0902c8acfecb9680ee9fa066da725c3a1201774/readme.md#literal
 */
export interface Literal<value extends string = string> extends UnistLiteral {
    value: value;
}

/**
 * *Root* represents a document.
 *
 * *Root* can be used as the [root](https://github.com/syntax-tree/unist#root)
 * of a [tree](https://github.com/syntax-tree/unist#tree), never as a [child](https://github.com/syntax-tree/unist#child).
 *
 * Its content model is not limited to `mdast.TopLevelContent`, but can contain any `mdast.Content`
 * with the restriction that all content must be of the same category.
 *
 * @param content used to set the type of content of this Root (defaults to {@link mdast.TopLevelContent}).
 * @see https://github.com/syntax-tree/mdast/blob/e0902c8acfecb9680ee9fa066da725c3a1201774/readme.md#root
 */
export type Root = RootT<TopLevelContent>
    | RootT<ListContent>
    | RootT<TableContent>
    | RootT<RowContent>
    | RootT<PhrasingContent>;

/**
 * RootT represents a root of a specific concerete content type.
 */
export interface RootT<content extends Content> extends Parent {
    type: 'root';
    children: content[];
}

/**
 * *Paragraph* represents a unit of discourse dealing with a particular point or idea.
 * Paragraph can be used where `mdast.Block` content is expected. Its content model is
 * `mdast.PhrasingContent`.
 * @example markdown`
 * Alpha bravo charlie.
 * `;
 * // yields
 * {
 *  type: 'paragraph',
 *  children: [{type: 'text', value: 'Alpha Bravo Charlie.'}]
 * }
 * @see https://github.com/syntax-tree/mdast/blob/e0902c8acfecb9680ee9fa066da725c3a1201774/readme.md#paragraph
 */
export interface Paragraph extends Parent {
    type: 'paragraph';
    children: PhrasingContent[];
}

/**
 * *Heading* represents a heading of a section.
 *
 * *Heading can be used where `mdast.Block` content is expected. Its content model is `mdast.Phrasing` content.
 *
 * A `depth` field must be present. A value of `1` is said to be the highest rank, and `6` the lowest.
 * @example markdown`
 * # Alpha
 * `
 * // yields
 * const yields = {
 *  type: 'heading',
 *  depth: 1,
 *  children: [{type: 'text', value: 'Alpha'}]
 * }
 * @see https://github.com/syntax-tree/mdast/blob/e0902c8acfecb9680ee9fa066da725c3a1201774/readme.md#heading
 *
 */
export interface Heading extends Parent {
    type: 'heading';
    /** What level the heading is (1 is most senior) */
    depth: 1 | 2 | 3 | 4 | 5 | 6;
    /** heading content */
    children: PhrasingContent[];
}

/**
 * *ThematicBreak* represents a thematic break, such as a scene change in a story, a transition to another
 * topic, or a new document.
 *
 * *ThematicBreak* can be used where `mdast.Block` content is expected. It has no content model.
 *
 * @example markdown`
 * ***
 * `;
 * // yields
 * const yields = {type: 'thematicBreak'};
 * @see https://github.com/syntax-tree/mdast/blob/e0902c8acfecb9680ee9fa066da725c3a1201774/readme.md#thematicbreak
 */
export interface ThematicBreak extends Node {
    type: 'thematicBreak';
}

/**
 * *Blockquote* represents a section quoted from somewhere else.
 *
 * *Blockquote* can be used where `mdast.Block` content is expected. Its content mode is also `mdast.Block` content.
 * @example markdown`
 * > Alpha bravo charlie
 * `;
 * // yields
 * const yield = {
 *  type: 'blockquote',
 *  children: [{
 *  type: 'paragraph',
 *  children: [{type: 'text', value: 'Alpha bravo charlie'}]
 * }]
 * }
 * @see https://github.com/syntax-tree/mdast/blob/e0902c8acfecb9680ee9fa066da725c3a1201774/readme.md#blockquote
 */
export interface Blockquote extends Parent {
    type: 'blockquote';
    /** blockquoted content */
    children: BlockContent[];
}

/*
    Here, I deviate a little from the original `mdast` type definitions. `mdast.List`
    has fields conditional on whether `ordered` is defined, so to expose them properly
    I have created two synthetic types: OrderedList, and UnorderedList.
*/

/**
 * *List* represents a list of items.
 *
 * *List* can be used where `mdast.Block` content is expected. Its content model is `mdast.List` content.
 *
 * You can ignore this unless you are trying to do something really smart.
 * @example markdown `
 * * [x] foo
 * `
 * // yields
 * ({
 * {
 *  type: 'list',
 *  ordered: false,
 *  spread: false,
 *  children: [{
 *    type: 'listItem',
 *    checked: true,
 *    spread: false,
 *    children: [{
 *      type: 'paragraph',
 *      children: [{type: 'text', value: 'foo'}]
 *    }]
 *  }]
 * })
 * @example markdown`
 * 1. [x] foo
 * `
 * // yields
 * ({
 * {
 *  type: 'list',
 *  ordered: true,
 *  start: 1,
 *  spread: false,
 *  children: [{
 *    type: 'listItem',
 *    checked: true,
 *    spread: false,
 *    children: [{
 *      type: 'paragraph',
 *      children: [{type: 'text', value: 'foo'}]
 *    }]
 *  }]
 * })
 * @see https://github.com/syntax-tree/mdast/blob/e0902c8acfecb9680ee9fa066da725c3a1201774/readme.md#list
 */
export type List<T extends BasicList = OrderedList | UnorderedList> = T;

/**
 * *List* represents a list of items.
 *
 * *List* can be used where `mdast.Block` content is expected. Its content model is `mdast.List` content.
 *
 * @example markdown `
 * * [x] foo
 * `
 * // yields
 * ({
 * {
 *  type: 'list',
 *  ordered: false,
 *  spread: false,
 *  children: [{
 *    type: 'listItem',
 *    checked: true,
 *    spread: false,
 *    children: [{
 *      type: 'paragraph',
 *      children: [{type: 'text', value: 'foo'}]
 *    }]
 *  }]
 * })
 * @see https://github.com/syntax-tree/mdast/blob/e0902c8acfecb9680ee9fa066da725c3a1201774/readme.md#list
 */
interface UnorderedList extends BasicList {
    ordered?: Nullable<false>;
    start?: Nullable<Null>;
}

/**
 * @see https://github.com/syntax-tree/mdast/blob/e0902c8acfecb9680ee9fa066da725c3a1201774/readme.md#list
 */
interface BasicList extends Parent {
    type: 'list';
    /**
     * - when `true`: items have been intentionally ordered.
     * - When `false`, `null`, or `undefined`: order of items is not important
     */
    ordered?: Nullable<boolean>;
    /** The starting number of the list */
    start?: Nullable<number>;
    /** If any of this lists items are separated by a blank line from its siblings */
    spread?: Nullable<boolean>;
}

/**
 * *List* represents a list of items.
 *
 * *List* can be used where `mdast.Block` content is expected. Its content model is `mdast.List` content.
 *
 * An `ordered` field can be present. It represents that the items have been intentionally ordered (when true), or
 * that the order of the items is not important (when `false` or not present).
 * @see https://github.com/syntax-tree/mdast/blob/e0902c8acfecb9680ee9fa066da725c3a1201774/readme.md#list
 * @example markdown `
 * 1. [x] foo
 * `
 * // yields
 * ({
 * {
 *  type: 'list',
 *  ordered: true,
 *  start: 1,
 *  spread: false,
 *  children: [{
 *    type: 'listItem',
 *    checked: true,
 *    spread: false,
 *    children: [{
 *      type: 'paragraph',
 *      children: [{type: 'text', value: 'foo'}]
 *    }]
 *  }]
 * })
 */
interface OrderedList extends BasicList {
    ordered: true;
    /** the number this ordered list should start at */
    start?: Nullable<number>;
}

/**
 * *ListItem* represents an item in an `mdast.List`.
 *
 * a `ListItem` can be used where `mdast.List` content is expected. Its content model is `mdast.Block` content.
 * @example const markdown = markdown`
 * * [x] bar
 * `;
 * // yields
 * ({
 *  type: 'listItem',
 *  checked: true,
 *  spread: false,
 *  children: [{
 *      type: 'paragraph',
 *      children: [{type: 'text', value: 'bar'}]
 *  }]
 *  })
 * @see https://github.com/syntax-tree/mdast/blob/e0902c8acfecb9680ee9fa066da725c3a1201774/readme.md#listitem
 */
export interface ListItem extends Parent {
    type: 'listItem';
    /**
     * whether the item is done (when `true`), not done (when `false`), or indeterminate
     * or not applicable (when `null` or not present)
     */
    checked?: Nullable<boolean>;
    /**
     * the item contains two or more children separated by a blank line (when true),
     * or not (when false or not present)
     */
    spread?: Nullable<boolean>;
    children: BlockContent[];
}

/**
 * *Table* represents two-dimensional data.
 *
 * *Table* can be used where `mdast.Block` content is expected. Its content model is `mdast.TableContent` content.
 *
 * The [head](https://github.com/syntax-tree/unist#head) of the node represents the labels of the columns.
 * @example markdown`
 * | foo | bar |
 * | :-- | :-: |
 * | baz | qux |
 * `;
 * // yields
 * ({
 *  type: 'table',
 *  align: ['left', 'center'],
 *  children: [
 *      {
 *      type: 'tableRow',
 *      children: [
 *          {
 *          type: 'tableCell',
 *          children: [{type: 'text', value: 'foo'}]
 *          },
 *          {
 *          type: 'tableCell',
 *          children: [{type: 'text', value: 'bar'}]
 *          }
 *      ]
 *      },
 *      {
 *      type: 'tableRow',
 *      children: [
 *          {
 *          type: 'tableCell',
 *          children: [{type: 'text', value: 'baz'}]
 *          },
 *          {
 *          type: 'tableCell',
 *          children: [{type: 'text', value: 'qux'}]
 *          }
 *      ]
 *      }
 *  ]
 * })
 * @see https://github.com/syntax-tree/mdast/blob/e0902c8acfecb9680ee9fa066da725c3a1201774/readme.md#table
 */
export interface Table extends Parent {
    type: 'table';
    /** how cells in respective columns are aligned */
    align?: Nullable<AlignType[]>;
    /** rows of the table */
    children: TableContent[] & {
        /** header for the table */
        0?: TableContent
    };
}

/**
 * *TableRow* represents a row of cells in a table.
 *
 * *TableRow* can be used where `mdast.Table` content is expected. Its content model is `row` content.
 *
 * If this node is a [head](https://github.com/syntax-tree/unist#head) of its parent, it represents the labels of the
 * columns for its parent `mdast.Table`.
 * @see `mdast.Table`
 * @see https://github.com/syntax-tree/mdast/blob/e0902c8acfecb9680ee9fa066da725c3a1201774/readme.md#tablecell
 */
export interface TableRow extends Parent {
    type: 'tableRow';
    children: RowContent[];
}

/**
 * *TableCell* represents a header cell in a Table, if its parent is
 * a [head](https://github.com/syntax-tree/unist#head) (if its parent
 * is the first child) or a data cell otherwise.
 *
 * *TableCell* can be used where `mdast.Row` content is expected.
 * Its content model is `mdast.PhrasingContent`.
 * @see https://github.com/syntax-tree/mdast/blob/e0902c8acfecb9680ee9fa066da725c3a1201774/readme.md#tablecell
 */
export interface TableCell extends Parent {
    type: 'tableCell';
    children: PhrasingContent[];
}

/**
 * HTML (literal) represents a fragment of raw HTML.
 *
 * HTML can be used where `unist.Block` or `unist.PhrasingContent`
 * is expected. its content is represented by the `value` field.
 * @example markdown`
 *  <div>
 * `;
 * // yields
 * ({ type: 'html', value: '<div>' })
 * @see https://github.com/syntax-tree/mdast/blob/e0902c8acfecb9680ee9fa066da725c3a1201774/readme.md#html
 */
export interface HTML extends Literal {
    type: 'html';
    /** HTML content */
    value: string;
}

interface CodeBase extends Literal {
    type: 'code';
    /** language of the computer code being marked up */
    lang?: Nullable<string>;
    /** code being marked up */
    value: string;
    /** custom information relating to the node */
    meta?: Nullable<string>;
}

interface CodeWithLang extends CodeBase {
    lang: string;
    /** arbitrary metadata about the code block */
    meta?: Nullable<string>;
}

interface CodeWithoutLang extends CodeBase {
    lang?: Nullable<undefined>;
}

/**
 * *Code* represents a block of preformatted text, such as ASCII art
 * or computer code.
 *
 * *Code* can be used where `mdast.Block` content is expected. Its
 * content is represented by its `value` field.
 *
 * This node relates to the `mdast.PhrasingContent` concept `mdast.InlineCode`.
 * @example markdown`
 *    foo()
 * `; // (indented by three spaces)
 * // yields
 * ({ type: 'code', value: null, meta: null, value: 'foo' })
 * @example // with meta tags and lang specified
 * markdown`
 * ${"```C++ fromfile=./code.txt"}
 * foo()
 * ${"```"}
 * `;
 *
 * // yields
 * ({ type: 'code', lang: 'C++', meta: 'fromfile=./code.txt', value:
 *  'foo()'})
 * @see https://github.com/syntax-tree/mdast/blob/e0902c8acfecb9680ee9fa066da725c3a1201774/readme.md#code
 */
export type Code<T extends CodeBase = CodeWithLang | CodeWithoutLang> = T;

/**
 * *YAML* represents a collection of metadata for the document in the
 * [YAML](https://yaml.org/) data serialisation language.
 *
 * *YAML* can be used where `mdast.FrontmatterContent` is expected.
 * Its content is represented by its `value` field.
 * @example markdown`
 * ---
 * foo: bar
 * ---
 * `
 * // yields
 * ({ type: 'yaml', value: 'foo: bar' })
 * @see https://github.com/syntax-tree/mdast/blob/e0902c8acfecb9680ee9fa066da725c3a1201774/readme.md#yaml
 */
export interface YAML extends Literal {
    type: 'yaml';
    /** YAML content. */
    value: string;
}

/**
 * *Definition* represents a resource.
 *
 * *Definition can be used where `mdast.Definition` content is expected.
 * it has no content model.
 *
 * *Definition* includes the mixins `mdast.Association` and `mdast.Resource`
 *
 * *Definition* should be associated with `mdast.LinkReference`s and
 * `mdast.LinkReference`s.
 * @example markdown`
 * [Alpha]: https://example.com
 * `;
 * // yields
 * ({ type: 'definition', identifier: 'alpha', label: 'Alpha', url: 'https://example.com', title: null})
 * @see https://github.com/syntax-tree/mdast/blob/e0902c8acfecb9680ee9fa066da725c3a1201774/readme.md#definition
 */
export interface Definition extends Node, Association, Resource {
    type: 'definition';
}

/**
 * *FootnoteDefinition* represents content relating to the document
 * that is outside its flow.
 *
 * *FootnoteDefinition* can be used where `mdast.Definition` content
 * is expected. Its content model is the `mdast.Block` context.
 * *FootnoteDefinition* includes the mixin `mdast.Association`.
 *
 * *FootnoteDefinition* should be associated with `mdast.FootnoteReference`s.
 * @example markdown`
 * [^alpha]: bravo and charlie.
 * `;
 * // yields
 * {
 *  type: 'footnoteDefinition',
 *  identifier: 'alpha',
 *  label: 'alpha',
 *  children: [{
 *      type: 'paragraph',
 *      children: [{type: 'text', value: 'bravo and charlie.'}]
 *  }]
 * }
 * @see https://github.com/syntax-tree/mdast/blob/e0902c8acfecb9680ee9fa066da725c3a1201774/readme.md#footnotedefinition
 */
export interface FootnoteDefinition extends Parent, Association {
    type: 'footnoteDefinition';
    children: BlockContent[];
}

/**
 * *Text* represents everything that is just text.
 *
 * *Text* can be used where `mdast.PhrasingContent` content is expected.
 * Its content is represented by the `value` field.
 * @example markdown`
 * Alpha bravo charlie.
 * `;
 * // yields
 * ({type: 'text', value: 'Alpha bravo charlie.'})
 * @see https://github.com/syntax-tree/mdast/blob/e0902c8acfecb9680ee9fa066da725c3a1201774/readme.md#text
 */
export interface Text extends Literal {
    type: 'text';
    /** Textual content. */
    value: string;
}

/**
 * *Emphasis* represents stressed emphasis for its contents.
 *
 * *Emphasis* can be used where `mdast.PhrasingContent` is expected.
 * its content model is also `mdast.PhrasingContent` .
 * @example markdown`
 * *alpha* _bravo_
 * `
 * // yields
 * ({
 *  type: 'paragraph',
 *  children: [
 *      {
 *      type: 'emphasis',
 *      children: [{type: 'text', value: 'alpha'}]
 *      },
 *      {type: 'text', value: ' '},
 *      {
 *      type: 'emphasis',
 *      children: [{type: 'text', value: 'bravo'}]
 *      }
 *  ]
 *  })
 * @see https://github.com/syntax-tree/mdast/blob/e0902c8acfecb9680ee9fa066da725c3a1201774/readme.md#emphasis
 */
export interface Emphasis extends Parent {
    type: 'emphasis';
    /** emphasised text and associated content */
    children: PhrasingContent[];
}

/**
 * *Strong* represents strong importance, seriousness or urgency
 * for its contents.
 *
 * *Strong* can be used where `mdast.PhrasingContent` is expected.
 *  Its content model is also `mdast.PhrasingContent`.
 * @example markdown`
 * **alpha** __bravo__
 * `;
 * // yields
 * ({
 *  type: 'paragraph',
 *  children: [
 *      {
 *      type: 'strong',
 *      children: [{type: 'text', value: 'alpha'}]
 *      },
 *      {type: 'text', value: ' '},
 *      {
 *      type: 'strong',
 *      children: [{type: 'text', value: 'bravo'}]
 *      }
 *  ]
 * })
 * @see https://github.com/syntax-tree/mdast/blob/e0902c8acfecb9680ee9fa066da725c3a1201774/readme.md#strong
 */
export interface Strong extends Parent {
    type: 'strong';
    /** strong text and associated content */
    children: PhrasingContent[];
}

/**
 * **Delete** represents contents that are no longer accurate or
 * no longer relevant.
 *
 * **Delete** can be used where `mdast.PhrasingContent` is expected.
 * Its content model is also `mdast.PhrasingContent`
 * @example markdown`
 * ~~alpha~~
 * `;
 * // yields
 * ({ type: 'delete', children: [{type: 'text', value: 'alpha'}] })
 * @see https://github.com/syntax-tree/mdast/blob/e0902c8acfecb9680ee9fa066da725c3a1201774/readme.md#delete
 */
export interface Delete extends Parent {
    type: 'delete';
    children: PhrasingContent[];
}

/**
 * **InlineCode** represents a fragment of computer code, such as a file name,
 * computer program or anytihng a computer could parse.
 *
 * **InlineCode** can be used where `mdast.PhrasingContent` is expected.
 * Its content is represented by the `value` field.
 *
 * This node relates to the `mdast.BlockContent` concept `mdast.Code`.
 *
 * @example markdown`
 * \`foo()`\
 * `
 * // yields
 * ({ type: 'inlineCode', value: 'foo()' })
 * @see https://github.com/syntax-tree/mdast/blob/e0902c8acfecb9680ee9fa066da725c3a1201774/readme.md#inlinecode
 */
export interface InlineCode extends Literal {
    type: 'inlineCode';
    /** computer code */
    value: string;
}

/**
 * **Break** represents a line break, such as in poems or addresses.
 *
 * **Break** can be used where `mdast.PhrasingContent` is expected.
 * It has no content model.
 * @example markdown`
 * foo··
 * bar
 * `;
 * // yield
 * {
 *  type: 'paragraph',
 *  children: [
 *      {type: 'text', value: 'foo'},
 *      {type: 'break'},
 *      {type: 'text', value: 'bar'}
 *  ]
 * }
 * @see https://github.com/syntax-tree/mdast/blob/e0902c8acfecb9680ee9fa066da725c3a1201774/readme.md#break
 */
export interface Break extends Node {
    type: 'break';
}

/**
 * **Link** represents a hyperlink.
 *
 * **Link** can be used where `mdast.PhrasingContent` is expected. Its content model is `mdast.StaticPhrasingContent`.
 *
 * **Link** includes the mixin `mdast.Resource`.
 *
 * @example markdown`
 * [alpha](https://example.com "bravo")
 * `;
 * // yields
 * { type: 'link', url: 'https://example.com', title: 'bravo', children: [{type: 'text', value: 'alpha'}] }
 * @see https://github.com/syntax-tree/mdast/blob/e0902c8acfecb9680ee9fa066da725c3a1201774/readme.md#link
 */
export interface Link extends Parent, Resource {
    type: 'link';
    /** content to be hyperlinked */
    children: StaticPhrasingContent[];
}

/**
 * **Image** represents an image.
 *
 * **Image** can be used where `mdast.PhrasingContent` is expected. It has no content model but is described by its
 * `alt` field.
 *
 * **Image** includes the mixins `mdast.Resource` and `mdast.Alternative`.
 *
 * @example markdown`
 * ![alpha](https://example.com/favicon.ico "bravo")
 * `;
 * { type: 'image', url: 'https://example.com/favicon.ico', title: 'bravo', alt: 'alpha' }
 * @see https://github.com/syntax-tree/mdast/blob/e0902c8acfecb9680ee9fa066da725c3a1201774/readme.md#image
 */
export interface Image extends Node, Resource, Alternative {
    type: 'image';
}

/**
 * **LinkReference** represents a hyperlink through association, or its original source if there
 * is no association.
 *
 * **LinkReference** can be used where `mdast.PhrasingContent` is expected. its content model is `mdast.StaticPhrasing`
 * content.
 *
 * **LinkReference** inclues the mixin `mdast.Reference`.
 *
 * **LinkReference**s should be associated with an `mdast.Definition`.
 * @example markdown`
 * [alpha][Bravo]
 * `;
 * // yields
 * { type: 'linkReference', identifier: 'bravo', label: 'Bravo', referenceType: 'full', children: [{type: 'text', value: 'alpha'}] }
 * @see https://github.com/syntax-tree/mdast/blob/e0902c8acfecb9680ee9fa066da725c3a1201774/readme.md#linkreference
 */
export interface LinkReference extends Parent, Reference {
    type: 'linkReference';
    children: StaticPhrasingContent[];
}
/**
 * **ImageReference** represents an image through association, or its original source if there
 * is no association.
 *
 * **ImageReference** can be used where `mdast.PhrasingContent` is expected. It has no content model, but
 * is described by its `alt` field.
 *
 * **ImageReference** inclues the mixin `mdast.Reference` and `mdast.Alternative`.
 *
 * **ImageReference**s should be associated with an `mdast.Definition`.
 * @example markdown`
 * ![alpha][Bravo]
 * `;
 * // yields
 * { type: 'imageReference', identifier: 'bravo', label: 'Bravo', referenceType: 'full', alt: 'alpha' }
 * @see https://github.com/syntax-tree/mdast/blob/e0902c8acfecb9680ee9fa066da725c3a1201774/readme.md#linkreference
 */
export interface ImageReference extends Node, Reference, Alternative {
    type: 'imageReference';
}

/**
 * **Footnote** represents content relating to the document that is outside its flow.
 *
 * **Footnote** can be used where `mcast.PhrasingContent` is expected. Its content model is also
 * `mdast.PhrasingContent`.
 * @example markdown`
 * [^alpha bravo]
 * `;
 * // yields
 * ({ type: 'footnote', children: [{type: 'text', value: 'alpha bravo'}] })
 * @see https://github.com/syntax-tree/mdast/blob/e0902c8acfecb9680ee9fa066da725c3a1201774/readme.md#footnote
 */
export interface Footnote extends Parent {
    type: 'footnote';
    children: PhrasingContent[];
}

/**
 * **FootnoteReference** represents a marker through association.
 *
 * **FootnoteReference** can be used where `mdast.PhrasingContent` is expected. It has no content model.
 *
 * **FootnoteReference** should be associated with an `mdast.FootnoteDefinition`.
 *
 * @example markdown`
 * [^alpha]
 * `;
 * // yields
 * ({ type: 'footnoteReference', identifier: 'alpha', label: 'alpha' })
 * @see https://github.com/syntax-tree/mdast/blob/e0902c8acfecb9680ee9fa066da725c3a1201774/readme.md#footnotereference
 */
export interface FootnoteReference extends Node, Association {
    type: 'footnoteReference';
}

/**
 * **Resource** represents a reerence to resource.
 * @see https://github.com/syntax-tree/mdast/blob/e0902c8acfecb9680ee9fa066da725c3a1201774/readme.md#resource
 */
export interface Resource {
    /** URL to the referenced resource */
    url: string;
    /* advisory information (alt) for the resource */
    title?: Nullable<string>;
}

/**
 * **Association** represents an internal relation from one node to another.
 *
 * Whether the value of identifier is expected to be a unique identifier or not depends
 * on the type of node including the Association. An example of this is that identifier
 * on `mdast.Definition` should be a unique identifier, whereas multiple `mdast.LinkReference`s can have
 * the same identifier and be associated with one definition.
 * @see https://github.com/syntax-tree/mdast/blob/e0902c8acfecb9680ee9fa066da725c3a1201774/readme.md#association
 */
export interface Association {
    /** matches an identifier field on another node */
    identifier: string;
    /** the original value of the identifier field before normalization */
    label?: Nullable<string>;
}

/**
 * **Reference** represents a marker that is associated to another node (`mdast.Association`).
 * @see https://github.com/syntax-tree/mdast/blob/e0902c8acfecb9680ee9fa066da725c3a1201774/readme.md#reference
 */
export interface Reference extends Association {
    /** explicitness of the reference */
    referenceType: ReferenceType;
}

/**
 * **Alternative** represents a node with a fallback.
 * @see https://github.com/syntax-tree/mdast/blob/e0902c8acfecb9680ee9fa066da725c3a1201774/readme.md#alternative
 */
export interface Alternative {
    /** equivalent content for environments that cannot represent the node as intended ('alternative text') */
    alt?: Nullable<string>;
}
