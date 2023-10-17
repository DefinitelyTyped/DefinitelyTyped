import type { Data as UnistData, Literal as UnistLiteral, Node as UnistNode, Parent as UnistParent } from "unist";

// ## Interfaces

/**
 * Info associated with nlcst nodes by the ecosystem.
 *
 * This space is guaranteed to never be specified by unist or nlcst.
 * But you can use it in utilities and plugins to store data.
 *
 * This type can be augmented to register custom data.
 * For example:
 *
 * ```ts
 * declare module 'nlcst' {
 *   interface Data {
 *     // `someNode.data.myId` is typed as `number | undefined`
 *     myId?: number | undefined
 *   }
 * }
 * ```
 */
export interface Data extends UnistData {}

// ## Content maps

/**
 * Union of registered nlcst nodes that can occur in {@link Paragraph}.
 *
 * To register more custom nlcst nodes, add them to {@link ParagraphContentMap}.
 * They will be automatically added here.
 */
export type ParagraphContent = ParagraphContentMap[keyof ParagraphContentMap];

/**
 * Registry of all nlcst nodes that can occur as children of {@link Paragraph}.
 *
 * For a union of all {@link Paragraph} children, see {@link ParagraphContent}.
 */
export interface ParagraphContentMap {
    sentence: Sentence;
    source: Source;
    whiteSpace: WhiteSpace;
}

/**
 * Union of registered nlcst nodes that can occur in {@link Root}.
 *
 * To register custom nlcst nodes, add them to {@link RootContentMap}.
 * They will be automatically added here.
 */
export type RootContent = RootContentMap[keyof RootContentMap];

/**
 * Registry of all nlcst nodes that can occur as children of {@link Root}.
 *
 * > 👉 **Note**: {@link Root} does not need to be an entire document.
 * > it can also be a fragment.
 *
 * For a union of all {@link Root} children, see {@link RootContent}.
 */
export interface RootContentMap {
    paragraph: Paragraph;
    punctuation: Punctuation;
    sentence: Sentence;
    source: Source;
    symbol: Symbol;
    text: Text;
    whiteSpace: WhiteSpace;
    word: Word;
}

/**
 * Union of registered nlcst nodes that can occur in {@link Sentence}.
 *
 * To register more custom nlcst nodes, add them to {@link SentenceContentMap}.
 * They will be automatically added here.
 */
export type SentenceContent = SentenceContentMap[keyof SentenceContentMap];

/**
 * Registry of all nlcst nodes that can occur as children of {@link Sentence}.
 *
 * For a union of all {@link Sentence} children, see {@link SentenceContent}.
 */
export interface SentenceContentMap {
    punctuation: Punctuation;
    source: Source;
    symbol: Symbol;
    whiteSpace: WhiteSpace;
    word: Word;
}

/**
 * Union of registered nlcst nodes that can occur in {@link Word}.
 *
 * To register more custom nlcst nodes, add them to {@link WordContentMap}.
 * They will be automatically added here.
 */
export type WordContent = WordContentMap[keyof WordContentMap];

/**
 * Registry of all nlcst nodes that can occur as children of {@link Word}.
 *
 * For a union of all {@link Word} children, see {@link WordContent}.
 */
export interface WordContentMap {
    punctuation: Punctuation;
    source: Source;
    symbol: Symbol;
    text: Text;
}

// ### Special content types

/**
 * Union of registered nlcst nodes that can occur in {@link Root}.
 *
 * @deprecated Use {@link RootContent} instead.
 */
export type Content = RootContent;

/**
 * Union of registered nlcst literals.
 *
 * To register custom nlcst nodes, add them to {@link RootContentMap} and other
 * places where relevant.
 * They will be automatically added here.
 */
export type Literals = Extract<Nodes, UnistLiteral>;

/**
 * Union of registered nlcst nodes.
 *
 * To register custom nlcst nodes, add them to {@link RootContentMap} and other
 * places where relevant.
 * They will be automatically added here.
 */
export type Nodes = Root | RootContent;

/**
 * Union of registered nlcst parents.
 *
 * To register custom nlcst nodes, add them to {@link RootContentMap} and other
 * places where relevant.
 * They will be automatically added here.
 */
export type Parents = Extract<Nodes, UnistParent>;

// ## Abstract nodes

/**
 * Abstract nlcst node that contains the smallest possible value.
 *
 * This interface is supposed to be extended if you make custom nlcst nodes.
 *
 * For a union of all registered nlcst literals, see {@link Literals}.
 */
export interface Literal extends Node {
    /**
     * Plain-text value.
     */
    value: string;
}

/**
 * Abstract nlcst node.
 *
 * This interface is supposed to be extended.
 * If you can use {@link Literal} or {@link Parent}, you should.
 * But for example in markdown, a `thematicBreak` (`***`) is neither literal
 * nor parent, but still a node.
 *
 * To register custom nlcst nodes, add them to {@link RootContentMap} and other
 * places where relevant (such as {@link SentenceContentMap}).
 *
 * For a union of all registered nlcst nodes, see {@link Nodes}.
 */
export interface Node extends UnistNode {
    /**
     * Info from the ecosystem.
     */
    data?: Data | undefined;
}

/**
 * Abstract nlcst node that contains other nlcst nodes (*children*).
 *
 * This interface is supposed to be extended if you make custom nlcst nodes.
 *
 * For a union of all registered nlcst parents, see {@link Parents}.
 */
export interface Parent extends Node {
    /**
     * List of children.
     */
    children: RootContent[];
}

// ## Concrete nodes

/**
 * Unit of discourse dealing with a particular point or idea.
 *
 * Can contain sentence, whitespace, and source nodes.
 */
export interface Paragraph extends Parent {
    /**
     * Node type of nlcst paragraph.
     */
    type: "ParagraphNode";
    /**
     * Children of paragraph.
     */
    children: ParagraphContent[];
    /**
     * Data associated with the nlcst paragraph.
     */
    data?: ParagraphData | undefined;
}

/**
 * Info associated with nlcst paragraph nodes by the ecosystem.
 */
export interface ParagraphData extends Data {}

/**
 * Typographical devices which aid understanding and correct reading of other
 * grammatical units.
 *
 * Can be used in sentence or word nodes.
 */
export interface Punctuation extends Literal {
    /**
     * Node type of nlcst punctuations.
     */
    type: "PunctuationNode";
    /**
     * Data associated with the nlcst punctuation.
     */
    data?: PunctuationData | undefined;
}

/**
 * Info associated with nlcst punctuation nodes by the ecosystem.
 */
export interface PunctuationData extends Data {}

/**
 * Document fragment or a whole document.
 *
 * Should be used as the root of a tree and must not be used as a child.
 * Its content model is not limited, it can contain any nlcst content, with the
 * restriction that all content must be of the same category.
 */
export interface Root extends Parent {
    /**
     * Node type of nlcst root.
     */
    type: "RootNode";
    /**
     * Data associated with the nlcst root.
     */
    data?: RootData | undefined;
}

/**
 * Info associated with nlcst root nodes by the ecosystem.
 */
export interface RootData extends Data {}

/**
 * Grouping of grammatically linked words, that in principle tells a complete
 * thought, although it may make little sense taken in isolation out of
 * context.
 *
 * Can be used in a paragraph node.
 * Can contain word, symbol, punctuation, whitespace, and source nodes.
 */
export interface Sentence extends Parent {
    /**
     * Node type of nlcst sentence.
     */
    type: "SentenceNode";
    /**
     * Children of sentence.
     */
    children: SentenceContent[];
    /**
     * Data associated with the nlcst sentence.
     */
    data?: SentenceData | undefined;
}

/**
 * Info associated with nlcst sentence nodes by the ecosystem.
 */
export interface SentenceData extends Data {}

/**
 * External (ungrammatical) value embedded into a grammatical unit: a hyperlink,
 * code, and such.
 *
 * Can be used in root, paragraph, sentence, or word nodes.
 */
export interface Source extends Literal {
    /**
     * Node type of nlcst sources.
     */
    type: "SourceNode";
    /**
     * Data associated with the nlcst source.
     */
    data?: SourceData | undefined;
}

/**
 * Info associated with nlcst source nodes by the ecosystem.
 */
export interface SourceData extends Data {}

/**
 * Typographical devices different from characters which represent sounds (like
 * letters and numerals), white space, or punctuation.
 *
 * Can be used in sentence or word nodes.
 */
export interface Symbol extends Literal {
    /**
     * Node type of nlcst symbols.
     */
    type: "SymbolNode";
    /**
     * Data associated with the nlcst symbol.
     */
    data?: SymbolData | undefined;
}

/**
 * Info associated with nlcst symbol nodes by the ecosystem.
 */
export interface SymbolData extends Data {}

/**
 * Actual content in nlcst documents: one or more characters.
 *
 * Can be used in word nodes.
 */
export interface Text extends Literal {
    /**
     * Node type of nlcst texts.
     */
    type: "TextNode";
    /**
     * Data associated with the nlcst text.
     */
    data?: TextData | undefined;
}

/**
 * Info associated with nlcst text nodes by the ecosystem.
 */
export interface TextData extends Data {}

/**
 * Typographical devices devoid of content, separating other units.
 *
 * Can be used in root, paragraph, or sentence nodes.
 */
export interface WhiteSpace extends Literal {
    /**
     * Node type of nlcst white space.
     */
    type: "WhiteSpaceNode";
    /**
     * Data associated with the nlcst white space.
     */
    data?: WhiteSpaceData | undefined;
}

/**
 * Info associated with nlcst white space nodes by the ecosystem.
 */
export interface WhiteSpaceData extends Data {}

/**
 * Smallest element that may be uttered in isolation with semantic or pragmatic
 * content.
 *
 * Can be used in a sentence node.
 * Can contain text, symbol, punctuation, and source nodes.
 */
export interface Word extends Parent {
    /**
     * Node type of nlcst word.
     */
    type: "WordNode";
    /**
     * Children of word.
     */
    children: WordContent[];
    /**
     * Data associated with the nlcst word.
     */
    data?: WordData | undefined;
}

/**
 * Info associated with nlcst word nodes by the ecosystem.
 */
export interface WordData extends Data {}
